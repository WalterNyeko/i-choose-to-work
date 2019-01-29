@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="serviceProviders" data-serviceid={{ $id }} data-userid={{ Auth::id() }}></div>
    </div>
@endsection