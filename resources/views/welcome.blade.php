@extends('layouts.master')
@section('content')
    <!-- Intro Banner
    ================================================== -->
    <div class="intro-banner dark-overlay" data-background-image="assets/images/home-background-02.jpg">
    
        <!-- Transparent Header Spacer -->
        <div class="transparent-header-spacer"></div>
    
        <div class="container">
    
            <!-- Intro Headline -->
            <div class="row">
                <div class="col-md-12">
                    <div class="banner-headline">
                        <h3>
                            <strong>Hire experts freelancers for any job, any time.</strong>
                            <br>
                            <span>Huge community of designers, developers and creatives ready for your project.</span>
                        </h3>
                    </div>
                </div>
            </div>
    
            <!-- Search Bar -->
            <div class="row">
                <div class="col-md-12">
                    <div class="intro-banner-search-form margin-top-95">
    
                        <!-- Search Field -->
                        <div class="intro-search-field with-autocomplete">
                            <label for="autocomplete-input" class="field-title ripple-effect">Where?</label>
                            <div class="input-with-icon">
                                <input id="autocomplete-input" name="location" type="text" placeholder="Online Job">
                                <i class="icon-material-outline-location-on"></i>
                            </div>
                        </div>
    
                        <!-- Search Field -->
                        <div class="intro-search-field">
                            <label for="intro-keywords" class="field-title ripple-effect">What you need done?</label>
                            <select class="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories">
    							<option>Admin Support</option>
    							<option>Customer Service</option>
    							<option>Data Analytics</option>
    							<option>Design & Creative</option>
    							<option>Legal</option>
    							<option>Software Developing</option>
    							<option>IT & Networking</option>
    							<option>Writing</option>
    							<option>Translation</option>
    							<option>Sales & Marketing</option>
    						</select>
                        </div>
    
                        <!-- Button -->
                        <div class="intro-search-button">
                            <button class="button ripple-effect" onclick="window.location.href='freelancers-grid-layout-full-page.html'">Search</button>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Stats -->
            <div class="row">
                <div class="col-md-12">
                    <ul class="intro-stats margin-top-45 hide-under-992px">
                        <li>
                            <strong class="counter">1,586</strong>
                            <span>Jobs Posted</span>
                        </li>
                        <li>
                            <strong class="counter">3,543</strong>
                            <span>Tasks Posted</span>
                        </li>
                        <li>
                            <strong class="counter">1,232</strong>
                            <span>Freelancers</span>
                        </li>
                    </ul>
                </div>
            </div>
    
        </div>
    </div>
    <div id="example"></div>
    <div class="section padding-top-65 padding-bottom-65">
        <div class="container">
            <div class="row">
    
                <div class="col-xl-12">
                    <!-- Section Headline -->
                    <div class="section-headline centered margin-top-0 margin-bottom-5">
                        <h3>How It Works?</h3>
                    </div>
                </div>
    
                <div class="col-xl-4 col-md-4">
                    <!-- Icon Box -->
                    <div class="icon-box with-line">
                        <!-- Icon -->
                        <div class="icon-box-circle">
                            <div class="icon-box-circle-inner">
                                <i class="icon-line-awesome-lock"></i>
                                <div class="icon-box-check"><i class="icon-material-outline-check"></i></div>
                            </div>
                        </div>
                        <h3>Create an Account</h3>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
                    </div>
                </div>
    
                <div class="col-xl-4 col-md-4">
                    <!-- Icon Box -->
                    <div class="icon-box with-line">
                        <!-- Icon -->
                        <div class="icon-box-circle">
                            <div class="icon-box-circle-inner">
                                <i class="icon-line-awesome-legal"></i>
                                <div class="icon-box-check"><i class="icon-material-outline-check"></i></div>
                            </div>
                        </div>
                        <h3>Post a Task</h3>
                        <p>Efficiently unleash cross-media information without. Quickly maximize return on investment.</p>
                    </div>
                </div>
    
                <div class="col-xl-4 col-md-4">
                    <!-- Icon Box -->
                    <div class="icon-box">
                        <!-- Icon -->
                        <div class="icon-box-circle">
                            <div class="icon-box-circle-inner">
                                <i class=" icon-line-awesome-trophy"></i>
                                <div class="icon-box-check"><i class="icon-material-outline-check"></i></div>
                            </div>
                        </div>
                        <h3>Choose an Expert</h3>
                        <p>Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
@endsection