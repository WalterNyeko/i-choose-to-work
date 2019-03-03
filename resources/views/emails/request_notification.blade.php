@component('mail::message')
# Service Request

You have recieved a service request

@component('mail::button', ['url' => ''])
Check request
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
