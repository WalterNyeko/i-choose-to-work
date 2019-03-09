<?php

namespace App\Http\Controllers\Api;

use App\Models\BioProfile;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Api\ApiBaseController;
use Intervention\Image\Facades\Image;

class BioProfileController extends ApiBaseController
{
    protected $uploadPath;

    /**
     * BioProfileController constructor.
     */
    public function __construct()
    {
        parent::__construct();

        //Generate image upload path
        $this->uploadPath =  public_path(config('cms.image.directory'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateBioProfile(Request $request)
    {

        try {
            $currentUser = $request->user();
            $bioProfile = BioProfile::where('user_id', $currentUser->id)->first();
            //Get old image
            $oldImage = $bioProfile->profile_pic;
            $data = $this->handleRequest($request);
            $bioProfile->update($data);
            if ($oldImage !== $bioProfile->profile_pic) {
                $this->removeImage($oldImage);
            }

            $output = array('success' => 1,
                'msg' => 'Profile updated successfully'
            );


        } catch (\Exception $e) {
            $output = array('success' => 0,
                'msg' => 'Something went wrong, please try again'
            );
        }

        return response()->json(['status', $output]);

    }

    /**
     * updates user password
     *
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request)
    {

        try {

            // Get current user
            $currentUser = $request->user();
            $user_id = $currentUser->id;

            $user = User::where('id', $user_id)->first();

            if (Hash::check($request->input('current_password'), $user->password)) {
                $user->password = bcrypt($request->input('new_password'));
                $user->save();
                $output = array('success' => 1,
                    'msg' => 'Password updated successfully'
                );
            } else {
                $output = array('success' => 0,
                    'msg' => 'You have entered wrong password'
                );
            }

        } catch(\Exception $e){

            $output = array('success' => 0,
                'msg' => 'Something went wrong, please try again'
            );
        }

        return response()->json(['status', $output]);
    }

    /**
     * Handle Image Creation
     *
     * @param $request
     * @return mixed
     */
    public function handleRequest($request)
    {
        $data = $request->all();

        if ($request->hasFile('profile_pic')) {

            //Set Image variable with the image file from the request
            $image = $request->file('profile_pic');

            //Get Name of the Uploaded file
            $fileName = $image->getClientOriginalName();

            //Set Destination Path
            $destination = $this->uploadPath;

            //Set successUploaded variable for the image
            $successUploaded = $image->move($destination, $fileName);

            //Check if the image is succesfully uploaded before resizing
            if ($successUploaded) {

                //Get File Extension and generation thumbnail name
                $extension = $image->getClientOriginalExtension();
                $thumbnail = str_replace(".{$extension}", "_thumb.{$extension}", $fileName);

                //Set Size for image using configuration values
                $width = config('cms.image.thumbnail.width');
                $height = config('cms.image.thumbnail.height');

                //Resize image using intervention image package
                Image::make($destination . '/' . $fileName)
                    ->resize($width, $height)
                    ->save($destination . '/' . $thumbnail);
            }

            $data['profile_pic'] = $fileName;
        }

        return $data;
    }

    /**
     * Remove image from the server
     *
     * @param $image
     */
    private function removeImage($image)
    {
        if ( ! empty($image) )
        {
            $imagePath     = $this->uploadPath . '/' . $image;
            $ext           = substr(strrchr($image, '.'), 1);
            $thumbnail     = str_replace(".{$ext}", "_thumb.{$ext}", $image);
            $thumbnailPath = $this->uploadPath . '/' . $thumbnail;

            if ( file_exists($imagePath) ) unlink($imagePath);
            if ( file_exists($thumbnailPath) ) unlink($thumbnailPath);
        }
    }
}
