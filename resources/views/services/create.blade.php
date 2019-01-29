@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="request" data-serviceId={{ $id }} data-userId={{ Auth::id() }} ></div>
    </div>  
@endsection