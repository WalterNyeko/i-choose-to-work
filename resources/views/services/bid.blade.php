@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="bid" data-userid="{{ Auth::id() }}" data-requestid={{ $id }}></div>
    </div>
@endsection 