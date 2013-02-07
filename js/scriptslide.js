/* CHANGE THE BELOW STYLES (if you want) */

var page_title = 'ScriptSlide';

var background_image = 'media/bg.png';
var header_logo = 'media/logo.png';
var bullet_point_image = 'media/dash.png';

var header_background = '#444444';
var author_info_color = 'white';

var menu_rollover_background = '#00BFFF';
var menu_rollover_title_color = '#444444';
var menu_rollover_foreground = 'white';
var menu_rollover_foreground_mouseover = '#222';

var progress_bar_color = '#00BFFF';
var progress_text_color = '#444444';


/****/
/* YOU DO NOT NEED TO EDIT BELOW THIS LINE (unless you want to) */
/****/
$("title").html(page_title);
$('body').css({'background':'url('+background_image+')'});
$('header').prepend('<img src="'+header_logo+'" id="logo" />');
$('header').css({'background':header_background});
$('#author').css({'color':author_info_color});
$('#progress').css({'background':progress_bar_color});
$('#progress-value').css({'color':progress_text_color});
$('ul li').css({'background-image': 'url('+bullet_point_image+')'});

var progress = 0;
var progressStep = 0;
var numSlides = 0;
var currentSlide = 0;

function showSlide(slide){
	var previous = $(".selected");
	if (previous.length > 0){
		previous.removeClass("selected");
		previous.animate({left: '-1000px', opacity: '0.0'}, 400, "easeOutQuint", function(){});
	}
	
	slide.addClass("selected");
	var id = slide.attr("id");
	window.location = "#"+id;
	var counter = 0;
	$("#presentation").children("section").each(function () {
		counter+= 1;
		if($(this).attr("id") == id){
			currentSlide = counter;
			progress = counter * progressStep;
			return false;
		}
	});
	slide.animate({top: '0px', left:'0px', opacity: '1.0'}, 400, "easeOutQuint", function(){});
	slide.addClass("selected");
	$("#progress").animate({width: progress+'%'},800, "easeOutBounce", function(){});
	var valueLeftNess = progress-3;
	$("#progress-value").animate({left: valueLeftNess+'%'},400, "easeOutQuint", function(){});
	$("#progress-value").html(Math.round(progress) + "%");
}

$(document).ready(function(){
	var requested = window.location.hash;
	var slideToShow;
	if($(requested).length == 0){
		slideToShow = $("#presentation").children(":first");
	}
	else{
		slideToShow = $(requested);
	}
	$("#presentation").children("section").each(function () {
		numSlides += 1;
		var id = $(this).attr("id");
		$("footer nav").append('<a href="#'+id+'">'+id+'</a> ');
	});
	progress = (1 / numSlides) * 100;
	progressStep = (1 / numSlides) * 100;
	showSlide(slideToShow);
	
	$("footer nav a").mouseenter(function(){$(this).css({'color': menu_rollover_foreground_mouseover});});
	$("footer nav a").mouseleave(function(){$(this).css({'color': menu_rollover_foreground});});
	
	$("footer nav a").click(function(){
		var id = $(this).attr('href');
		showSlide($(id));
	});
	$("footer").mouseenter(function(){
		$("footer").animate({'background-color': menu_rollover_background},700);
		$("footer nav a").animate({'color': menu_rollover_foreground}, 700);
		
		$("footer h3").animate({'color': menu_rollover_title_color}, 700);
		$("footer nav").show(300, function(){});
	});
	$("footer").mouseleave(function(){
		$("footer").animate({'background-color': 'rgba(250, 250, 250, 0.3);'},700);
		$("footer h3").animate({'color': '#444444'}, 700);
		$("footer nav").hide(300, function(){});
	});
});

$(document).keyup(function(e){
	if (e.keyCode == 37) { 
		if(currentSlide > 1){
			var current = $(".selected");
			var next = current.prev();
			progress -= progressStep;
			
			showSlide(next);
			
		}
	}
    if (e.keyCode == 39) { 
    	if(currentSlide < numSlides){
			var current = $(".selected");
			var next = current.next();   
			progress += progressStep;   
			current.removeClass("selected");
			current.animate({left: '-1000px', opacity:'0.0'}, 400, "easeOutQuint", function(){});
			showSlide(next);
		}
    }	     
});