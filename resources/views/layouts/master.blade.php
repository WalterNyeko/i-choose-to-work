<!doctype html>
<html lang="en">



<head>

    <!-- Basic Page Needs
================================================== -->
   <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
================================================== -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/colors/blue.css') }}">

</head>

<body>

    <!-- Wrapper -->
    <div id="wrapper">

        <!-- Header Container
================================================== -->
        <header id="header-container" class="fullwidth transparent-header">

            <!-- Header -->
            <div id="header">
                <div class="container">

                    <!-- Left Side Content -->
                    <div class="left-side">

                        <!-- Logo -->
                        <div id="logo">
                            <a href="/"><img src="{{ asset('weblogo.png') }}" data-sticky-logo="{{ asset('weblogo.png') }}" alt=""></a>
                        </div>

                        <!-- Main Navigation -->
                        <nav id="navigation">
                            <ul id="responsive">

                                <li><a href="#" class="current">Home</a>
                                </li>

                                <li><a href="#">Find Work</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="#">Browse Jobs</a></li>
                                        <li><a href="#">Browse Tasks</a></li>
                                    </ul>
                                </li>

                                <li><a href="#">Request Services</a>
                                </li>

                                <li><a href="#">Blog</a>
                                </li>

                            </ul>
                        </nav>
                        <div class="clearfix"></div>
                        <!-- Main Navigation / End -->

                    </div>
                    <!-- Left Side Content / End -->

                    @guest
                        <!-- Right Side Content / End -->
                        <div class="right-side">
                        
                            <div class="header-widget">
                                <a href="#sign-in-dialog" class="popup-with-zoom-anim log-in-button"><i class="icon-feather-log-in"></i> <span>Log In / Register</span></a>
                            </div>
                        
                            <!-- Mobile Navigation Button -->
                            <span class="mmenu-trigger">
                        					<button class="hamburger hamburger--collapse" type="button">
                        						<span class="hamburger-box">
                        							<span class="hamburger-inner"></span>
                            </span>
                            </button>
                            </span>
                        
                        </div>
                        <!-- Right Side Content / End -->
                    @else
                        <!-- Right Side Content / End -->
                    <div class="right-side">

                        <!--  User Notifications -->
                        <div class="header-widget hide-on-mobile">

                            <!-- Notifications -->
                            <div class="header-notifications">

                                <!-- Trigger -->
                                <div class="header-notifications-trigger">
                                    <a href="#"><i class="icon-feather-bell"></i><span>4</span></a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">

                                    <div class="header-notifications-headline">
                                        <h4>Notifications</h4>
                                        <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
									<i class="icon-feather-check-square"></i>
								</button>
                                    </div>

                                    <div class="header-notifications-content">
                                        <div class="header-notifications-scroll" data-simplebar>
                                            <ul>
                                                <!-- Notification -->
                                                <li class="notifications-not-read">
                                                    <a href="dashboard-manage-candidates.html">
												<span class="notification-icon"><i class="icon-material-outline-group"></i></span>
												<span class="notification-text">
													<strong>Michael Shannah</strong> applied for a job <span class="color">Full Stack Software Engineer</span>
												</span>
											</a>
                                                </li>

                                                <!-- Notification -->
                                                <li>
                                                    <a href="dashboard-manage-bidders.html">
												<span class="notification-icon"><i class=" icon-material-outline-gavel"></i></span>
												<span class="notification-text">
													<strong>Gilbert Allanis</strong> placed a bid on your <span class="color">iOS App Development</span> project
												</span>
											</a>
                                                </li>

                                                <!-- Notification -->
                                                <li>
                                                    <a href="dashboard-manage-jobs.html">
												<span class="notification-icon"><i class="icon-material-outline-autorenew"></i></span>
												<span class="notification-text">
													Your job listing <span class="color">Full Stack PHP Developer</span> is expiring.
												</span>
											</a>
                                                </li>

                                                <!-- Notification -->
                                                <li>
                                                    <a href="dashboard-manage-candidates.html">
												<span class="notification-icon"><i class="icon-material-outline-group"></i></span>
												<span class="notification-text">
													<strong>Sindy Forrest</strong> applied for a job <span class="color">Full Stack Software Engineer</span>
												</span>
											</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <!-- Messages -->
                            <div class="header-notifications">
                                <div class="header-notifications-trigger">
                                    <a href="#"><i class="icon-feather-mail"></i><span>3</span></a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">

                                    <div class="header-notifications-headline">
                                        <h4>Messages</h4>
                                        <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
									<i class="icon-feather-check-square"></i>
								</button>
                                    </div>

                                    <div class="header-notifications-content">
                                        <div class="header-notifications-scroll" data-simplebar>
                                            <ul>
                                                <!-- Notification -->
                                                <li class="notifications-not-read">
                                                    <a href="dashboard-messages.html">
												<span class="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt=""></span>
												<div class="notification-text">
													<strong>David Peterson</strong>
													<p class="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
													<span class="color">4 hours ago</span>
												</div>
											</a>
                                                </li>

                                                <!-- Notification -->
                                                <li class="notifications-not-read">
                                                    <a href="dashboard-messages.html">
												<span class="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt=""></span>
												<div class="notification-text">
													<strong>Sindy Forest</strong>
													<p class="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
													<span class="color">Yesterday</span>
												</div>
											</a>
                                                </li>

                                                <!-- Notification -->
                                                <li class="notifications-not-read">
                                                    <a href="dashboard-messages.html">
												<span class="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt=""></span>
												<div class="notification-text">
													<strong>Marcin Kowalski</strong>
													<p class="notification-msg-text">I received payment. Thanks for cooperation!</p>
													<span class="color">Yesterday</span>
												</div>
											</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <a href="dashboard-messages.html" class="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i class="icon-material-outline-arrow-right-alt"></i></a>
                                </div>
                            </div>

                        </div>
                        <!--  User Notifications / End -->

                        <!-- User Menu -->
                        <div class="header-widget">

                            <!-- Messages -->
                            <div class="header-notifications user-menu">
                                <div class="header-notifications-trigger">
                                    <a href="#">
                                        <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""></div>
                                    </a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">

                                    <!-- User Status -->
                                    <div class="user-status">

                                        <!-- User Name / Avatar -->
                                        <div class="user-details">
                                            <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""></div>
                                            <div class="user-name">
                                                Tom Smith <span>Freelancer</span>
                                            </div>
                                        </div>

                                        <!-- User Status Switcher -->
                                        <div class="status-switch" id="snackbar-user-status">
                                            <label class="user-online current-status">Online</label>
                                            <label class="user-invisible">Invisible</label>
                                            <!-- Status Indicator -->
                                            <span class="status-indicator" aria-hidden="true"></span>
                                        </div>
                                    </div>

                                    <ul class="user-menu-small-nav">
                                        <li><a href="dashboard.html"><i class="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                        <li><a href="dashboard-settings.html"><i class="icon-material-outline-settings"></i> Settings</a></li>
                                        <li><a href="index-logged-out.html"><i class="icon-material-outline-power-settings-new"></i> Logout</a></li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <!-- User Menu / End -->

                        <!-- Mobile Navigation Button -->
                        <span class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
                        </span>
                        </button>
                        </span>

                    </div>
                    <!-- Right Side Content / End -->
                    @endguest
                    

                </div>
            </div>
            <!-- Header / End -->

        </header>
        <div class="clearfix"></div>
        <!-- Header Container / End -->

        @yield('content')
        
        

    </div>
    <!-- Wrapper / End -->
    @include('partials.footer')
    <!-- Sign In Popup
    ================================================== -->
    <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide dialog-with-tabs">
    
        <!--Tabs -->
        <div class="sign-in-form">
    
            <ul class="popup-tabs-nav">
                <li><a href="#login">Log In</a></li>
                <li><a href="#register">Register</a></li>
            </ul>
    
            <div class="popup-tabs-container">
    
                <!-- Login -->
                <div class="popup-tab-content" id="login">
    
                    <!-- Welcome Text -->
                    <div class="welcome-text">
                        <h3>We're glad to see you again!</h3>
                        <span>Don't have an account? <a href="#" class="register-tab">Sign Up!</a></span>
                    </div>
    
                    <!-- Form -->
                    <form method="post" id="login-form">
                        <div class="input-with-icon-left">
                            <i class="icon-material-baseline-mail-outline"></i>
                            <input type="text" class="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
                        </div>
    
                        <div class="input-with-icon-left">
                            <i class="icon-material-outline-lock"></i>
                            <input type="password" class="input-text with-border" name="password" id="password" placeholder="Password" required/>
                        </div>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </form>
    
                    <!-- Button -->
                    <button class="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i class="icon-material-outline-arrow-right-alt"></i></button>
    
                    <!-- Social Login -->
                    <div class="social-login-separator"><span>or</span></div>
                    <div class="social-login-buttons">
                        <button class="facebook-login ripple-effect"><i class="icon-brand-facebook-f"></i> Log In via Facebook</button>
                        <button class="google-login ripple-effect"><i class="icon-brand-google-plus-g"></i> Log In via Google+</button>
                    </div>
    
                </div>
    
                <!-- Register -->
                <div class="popup-tab-content" id="register">
    
                    <!-- Welcome Text -->
                    <div class="welcome-text">
                        <h3>Create your account</h3>
                    </div>
    
                    <!-- Account Type -->
                    <div class="account-type">
                        <div>
                            <input type="radio" name="account-type-radio" id="freelancer-radio" class="account-type-radio" checked/>
                            <label for="freelancer-radio" class="ripple-effect-dark"><i class="icon-material-outline-account-circle"></i> Freelancer</label>
                        </div>
    
                        <div>
                            <input type="radio" name="account-type-radio" id="employer-radio" class="account-type-radio" />
                            <label for="employer-radio" class="ripple-effect-dark"><i class="icon-material-outline-business-center"></i> Employer</label>
                        </div>
                    </div>
    
                    <!-- Form -->
                    <form method="post" id="register-account-form">
                        <div class="input-with-icon-left">
                            <i class="icon-material-baseline-mail-outline"></i>
                            <input type="text" class="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address"
                                required/>
                        </div>
    
                        <div class="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                            <i class="icon-material-outline-lock"></i>
                            <input type="password" class="input-text with-border" name="password-register" id="password-register" placeholder="Password"
                                required/>
                        </div>
    
                        <div class="input-with-icon-left">
                            <i class="icon-material-outline-lock"></i>
                            <input type="password" class="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password"
                                required/>
                        </div>
                    </form>
    
                    <!-- Button -->
                    <button class="margin-top-10 button full-width button-sliding-icon ripple-effect" type="submit" form="register-account-form">Register <i class="icon-material-outline-arrow-right-alt"></i></button>
    
                    <!-- Social Login -->
                    <div class="social-login-separator"><span>or</span></div>
                    <div class="social-login-buttons">
                        <button class="facebook-login ripple-effect"><i class="icon-brand-facebook-f"></i> Register via Facebook</button>
                        <button class="google-login ripple-effect"><i class="icon-brand-google-plus-g"></i> Register via Google+</button>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
    <!-- Sign In Popup / End -->


    <!-- Scripts
================================================== -->
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/js/jquery-migrate-3.0.0.min.js"></script>
    <script src="assets/js/mmenu.min.js"></script>
    <script src="assets/js/tippy.all.min.js"></script>
    <script src="assets/js/simplebar.min.js"></script>
    <script src="assets/js/bootstrap-slider.min.js"></script>
    <script src="assets/js/bootstrap-select.min.js"></script>
    <script src="assets/js/snackbar.js"></script>
    <script src="assets/js/clipboard.min.js"></script>
    <script src="assets/js/counterup.min.js"></script>
    <script src="assets/js/magnific-popup.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/custom.js"></script>

    <!-- Snackbar // documentation: https://www.polonel.com/snackbar/ -->
    <script>
        // Snackbar for user status switcher
$('#snackbar-user-status label').click(function() { 
	Snackbar.show({
		text: 'Your status has been changed!',
		pos: 'bottom-center',
		showAction: false,
		actionText: "Dismiss",
		duration: 3000,
		textColor: '#fff',
		backgroundColor: '#383838'
	}); 
});

    </script>


    <!-- Google Autocomplete -->
    <script>
        function initAutocomplete() {
		 var options = {
		    //types: ['(cities)'],
		   componentRestrictions: {country: "ug"}
		 };

		 var input = document.getElementById('autocomplete-input');
		 var autocomplete = new google.maps.places.Autocomplete(input, options);
	}

	// Autocomplete adjustment for homepage
	if ($('.intro-banner-search-form')[0]) {
	    setTimeout(function(){ 
	        $(".pac-container").prependTo(".intro-search-field.with-autocomplete");
	    }, 300);
	}

    </script>

    <!-- Google API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhV7K0LTU02IbjYC1Tz6GEpF3z5TU2_xs&amp;libraries=places&amp;callback=initAutocomplete"></script>

</body>



</html>