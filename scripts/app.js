$(document).ready(function () {
    $('.faq__blocks > .faq__block__container').click(function (event) {
        $(this).children(".faq__answer").slideToggle(500);      
        event.stopPropagation();
        
    });
    $('.arrow-icon').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg><svg style="display:none" xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>'); 
    $(".arrow-icon").click(function(){
        $('svg', this).toggle();
    });
});

$(document).ready(function () {
    $('.button-faq').click(function (event) {
        $('.faq__block__container').slideDown(1000); 
        $('.button-faq').fadeOut(500);      
        event.stopPropagation();
         
    });
});


$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
        infinite: true,
		slidesToShow: 5,
        adaptiveHeight: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 800,
        centerMode: true,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 424,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 388,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.review-slider').slick({
		arrows: true,
        infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
        adaptiveHeight: true,
		speed: 500,
        centerMode: true,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 466,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 454,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 452,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.team-slider').slick({
		arrows: true,
        infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
        adaptiveHeight: true,
		speed: 500,
        centerMode: true,
		// variableWidth: true,
		responsive:[
            {
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 466,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 454,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 452,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function() {
    $( ".faq__block" ).click( function() {
        $(this).children(".arrow-icon").toggleClass('flip');
    });
});

$(document).ready(function() {
    $( ".arrow-icon" ).click( function() {
        $(this).toggleClass('flip');
    });
});

// var head = $('head');
// includeScripts(head);
// $(window).resize(function(){
// 	includeScripts(head);
// });

// function includeScripts(head){

// 	if ($('.max_width_1000').is(':hidden')) {
		$(function(){
			$('.minimized').click(function(event) {
			var i_path = 'https://placehold.it/850x1000';
			$('.reviews').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
			$('#magnify').css({
			left: ($(document).width() - $('#magnify').outerWidth())/2,
				top: ($(window).height() - $('#magnify').outerHeight())/2
			});
			$('#overlay, #magnify').fadeIn('fast');
			});
			
			$('body').on('click', '#close-popup, #overlay', function(event) {
			event.preventDefault();
			$('#overlay, #magnify').fadeOut('fast', function() {
				$('#close-popup, #magnify, #overlay').remove();
			});
			});
		});
// 	}
	

// }



