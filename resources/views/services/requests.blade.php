@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="allrequests" data-userid={{ Auth::id() }}></div>
    </div>
@endsection