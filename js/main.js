jQuery(function($){

	//#main-slider
	$(function(){
		$('#carousel').carousel({
			interval: 8000
		});
	});

	/* Lightgallery */
    $(document).ready(function(){
		$('.portafolio-items').lightGallery({
			selector: '.item-thumbs',
		   	mode: 'lg-soft-zoom',
		   	// Ex : 'ease'
	        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
	        //'for jquery animation'
	        easing: 'linear',
	        speed: 600,
	        height: '100%',
	        width: '100%',
	        addClass: '',
	        startClass: 'lg-start-zoom',
	        backdropDuration: 150,
	        hideBarsDelay: 6000,
	        useLeft: false,
	        closable: true,
	        loop: true,
	        escKey: true,
	        keyPress: true,
	        controls: true,
	        slideEndAnimatoin: true,
	        hideControlOnEnd: false,
	        mousewheel: true,
	        getCaptionFromTitleOrAlt: true,
	        // .lg-item || '.lg-sub-html'
	        appendSubHtmlTo: '.lg-sub-html',
	        showAfterLoad: true,
	        download: false,
	        counter: true,
	        appendCounterTo: '.lg-toolbar',
		});
	    var $customEvents = $('#lightgallery');
	    $customEvents.lightGallery();

	    //var colours = ['#2F3238','#2F3238','#2F3238','#2F3238',
	    			   //'#2F3238','#2F3238','#2F3238','#2F3238',
	    			   //'#2F3238','#2F3238','#2F3238','#2F3238',
	    			   //'#2F3238','#2F3238','#2F3238','#2F3238',
	    			   //'#2F3238','#2F3238','#2F3238','#2F3238',
	    			   //'#2F3238','#2F3238','#2F3238','#2F3238'];
	    //$customEvents.on('onBeforeSlide.lg', function(event, prevIndex, index){
	        //$('.lg-outer').css('background-color', colours[index])
	    //});
    });

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portafolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portafolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	// onePageNav
	jQuery(document).ready(function($) {
		$('#navbar').onePageNav({
			currentClass: 'current',
		    changeHash: false,
		    scrollSpeed: 750,
		    scrollThreshold: 0.5,
		    filter: ':not(.external)',
		    easing: 'swing',
		    begin: function() {
		      //I get fired when the animation is starting
		    },
		    end: function() {
		      //I get fired when the animation is ending
		    },
		    scrollChange: function($currentListItem) {
		      //I get fired when you enter a section and I pass the list item of the section
		    }
		});
	});

    //Typed.js option https://github.com/mattboldt/typed.js/
    $(function(){
        $("#typed").typed({
            strings: ["<p>loading</p>","<p>01%</p>","<p>02%</p>","<p>03%</p>","<p>04%</p>","<p>05%</p>","<p>06%</p>","<p>07%</p>","<p>08%</p>","<p>09%</p>",
            "<p>10%</p>","<p>11%</p>","<p>12%</p>","<p>13%</p>","<p>14%</p>","<p>15%</p>","<p>16%</p>","<p>17%</p>","<p>18%</p>","<p>19%</p>",
            "<p>20%</p>","<p>21%</p>","<p>22%</p>","<p>23%</p>","<p>24%</p>","<p>25%</p>","<p>26%</p>","<p>27%</p>","<p>28%</p>","<p>29%</p>",
            "<p>30%</p>","<p>31%</p>","<p>32%</p>","<p>33%</p>","<p>34%</p>","<p>35%</p>","<p>36%</p>","<p>37%</p>","<p>38%</p>","<p>39%</p>",
            "<p>40%</p>","<p>41%</p>","<p>42%</p>","<p>43%</p>","<p>44%</p>","<p>45%</p>","<p>46%</p>","<p>47%</p>","<p>48%</p>","<p>49%</p>",
            "<p>50%</p>","<p>51%</p>","<p>52%</p>","<p>53%</p>","<p>54%</p>","<p>55%</p>","<p>56%</p>","<p>57%</p>","<p>58%</p>","<p>59%</p>",
            "<p>60%</p>","<p>61%</p>","<p>62%</p>","<p>63%</p>","<p>64%</p>","<p>65%</p>","<p>66%</p>","<p>67%</p>","<p>68%</p>","<p>69%</p>",
            "<p>70%</p>","<p>71%</p>","<p>72%</p>","<p>73%</p>","<p>74%</p>","<p>75%</p>","<p>76%</p>","<p>77%</p>","<p>78%</p>","<p>79%</p>",
            "<p>80%</p>","<p>81%</p>","<p>82%</p>","<p>83%</p>","<p>84%</p>","<p>85%</p>","<p>86%</p>","<p>87%</p>","<p>88%</p>","<p>89%</p>",
            "<p>90%</p>","<p>91%</p>","<p>92%</p>","<p>93%</p>","<p>94%</p>","<p>95%</p>","<p>96%</p>","<p>97%</p>","<p>98%</p>","<p>99%</p>","<p>100%</p>", "^30000<p>Very slow internet?</br>Reload? or Wait.</p>"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            //stringsElement: $('.typed-strings'),
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // backspacing speed
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
        $(".reset").click(function(){
            $("#typed").typed('reset');
        });
    });

    // WOW option
	$(function(){
	    wow = new WOW(
	    	{
		    boxClass:     'wow',      // animated element css class (default is wow)
		   	animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true        // act on asynchronously loaded content (default is true)
	    	}
	    )
		wow.init();
	});
});
