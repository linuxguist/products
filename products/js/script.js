// JavaScript Document

 

/*owl js*/
// Toggle plus minus icon on show hide of collapse element
  		$(".collapse.show").each(function(){
			$(this).prev(".category-pm-ic").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
  			$(".collapse").on('show.bs.collapse', function(){
			$(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
			 $(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
		$(document).ready(function() {
      $('.drawer').drawer();
    });
  $(document).ready(function(){
$('.drawer-toggle').on('click', function(){
  if ($('.drawer--right').hasClass('drawer-open')){
   $('.drawer--right').removeClass('drawer-open').addClass('drawer-close');
} else {
 $('.drawer--right').removeClass('drawer-close').addClass('drawer-open');
} }); });
$(document).ready(function() {
      //var owl = $('.owl-carousel');
      //var owl1 = $('.owl-certification');
      
      $('#owl-slider').owlCarousel({
        autoplay: 3000,
       
        animateIn: 'fadeIn',
         animateOut: 'fadeOut ',
        margin: 10,
        nav: false,
        navigation : true,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })

      $('#owl-client').owlCarousel({
        autoplay: 3000,
        margin: 10,
        nav: false,
        navigation : false,
        loop: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })

      $('#owl-products').owlCarousel({
        autoplay: 3000,
        margin: 10,
        nav: true,
        navigation : true,
        navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
        loop: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      })
// Drawer left
    // Drawer left end
		new WOW().init();
		$('[data-toggle="tooltip"]').tooltip();
		// bottom to top button//
        $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#to-top').fadeIn();
        }else{
            $('#to-top').fadeOut();
        }
       });
        $('#to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
       });
    // Smuth Scroll Page//
      $("a").on('click', function(event) {
      if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
    });
    // Smuth Scroll Page End //

    // Scroll Menu Button
    $(document).scroll(function() {
   var y = $(this).scrollTop();
   if (y > 120) {
   $('.bottomMenu').fadeIn();
   } else {
    $('.bottomMenu').fadeOut();
   }
   // Scroll Menu Button End
   });
	$(window).load(function() {
    $(".loader").fadeOut("slow");
});
})