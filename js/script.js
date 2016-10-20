$(document).ready(function(){

$("#logo").hide();

var navFade = function() {

}

$(".navlink").click(function() {
	var address = $(this).parent().attr("href");
	$('html, body').animate({
        scrollTop: $(address).offset().top
    }, 500);
});


setInterval(navFade, 2);
function moveBackground(){
   // Loop to animate the navbar
   	$("#navbar").css({'background-position-x': '0%'});
	$("#navbar").animate({
	  'background-position-x': '400%'
		}, 30*1000, 
		 function(){
            moveBackground();
		 }); 

}
//run function 
moveBackground();

$(window).scroll(function() {
	if($("#biglogo").visible(true)) {
		$("#logo").fadeOut( "fast", function() {
			$("#logo").removeClass("col-xs-4");
		$(".navblock").removeClass("col-xs-4");
		$(".navblock").addClass("col-xs-6");
  		});
	} else {
		$(".navblock").removeClass("col-xs-6");
		$(".navblock").addClass("col-xs-4");
		$("#logo").addClass("col-xs-4");
		setTimeout(function(){
			if(!$("#biglogo").visible(true))
				$("#logo").fadeIn("fast");
		},700); 		
	}
});
	

}); 
