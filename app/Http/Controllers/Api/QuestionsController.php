<?php

namespace App\Http\Controllers\Api;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionsController extends Controller
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
