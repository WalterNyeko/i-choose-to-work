<?php

namespace App\Http\Controllers\Api;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;

class QuestionsController extends ApiBaseController
{
    /**
     * @param id 
     * @return questions
     */
    public function getQuestions($id)
    {
        $service = Service::find($id);

        $questions = $service->questions()->get();

        return $questions;
    }
}
