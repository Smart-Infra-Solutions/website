
$(function(){
	// ---- this would be the plugin ----
	// special event for non-preventDefault
  jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
      this.addEventListener("touchstart", handle, { passive: true });
    }
  };
	// -----------------------------------

	// fix box with junk
	$(".box").html(new Array(50).join("all contenty<br/>"));

	// set up a touchevent for the box
	$(".box").on("touchstart.noPreventDefault", function(){
		console.log(event.type);
		event.preventDefault();
	});
});
