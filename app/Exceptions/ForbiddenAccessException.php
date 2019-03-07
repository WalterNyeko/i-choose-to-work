<?php

namespace App\Exceptions;

use Exception;

class ForbiddenAccessException extends Exception
{
    /**
     * Report the exception.
     *
     * @return void
     */
     public function report()
     {
        //
    }

    /**
     * Render the exception as an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {

        if ($request->wantsJson() && !($e instanceof ValidationException)) {
            $response = [
                'message' => (string)$e->getMessage(),
                'status_code' => 400,
            ];

            if ($e instanceof HttpException) {
                $response['message'] = Response::$statusTexts[$e->getStatusCode()];
                $response['status_code'] = $e->getStatusCode();
            } else if ($e instanceof ModelNotFoundException) {
                $response['message'] = Response::$statusTexts[Response::HTTP_NOT_FOUND];
                $response['status_code'] = Response::HTTP_NOT_FOUND;
            }

            if ($this->isDebugMode()) {
                $response['debug'] = [
                    'exception' => get_class($e),
                    'trace' => $e->getTrace()
                ];
            }

            return response()->json([
                'status'      => 'failed',
                'status_code' => $response['status_code'],
                'massage'     => $response['message'],
            ], $response['status_code']);
        }

        return parent::render($request, $e);
    }
}
