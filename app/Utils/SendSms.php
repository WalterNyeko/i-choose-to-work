<?php
namespace App\Utils;

use AfricasTalking\SDK\AfricasTalking;

trait SendSms
{
    // private $username;// use 'sandbox' for development in the test environment
    // private $apiKey; // use your sandbox app API key for development in the test environment
    // private $AT;
    // private $sms;

    public function send($to, $msg)
    {
        $username = env('SMS_SANDBOX_USERNAME');
        $apiKey = env('SMS_SANDBOX_API_KEY');
        $AT       = new AfricasTalking($username, $apiKey);
        // Get one of the services
        $sms      = $AT->sms();

        // Use the service
        $result   = $sms->send([
            'to'      => $to,
            'message' => $msg,
        ]);

        print_r($result);
    }
    
}

