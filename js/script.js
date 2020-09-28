$(function(){
	$(".menu_wrap").load("../html/nav.html"); 

	$(window).on('load resize', function() {
		$('.pf > li').each(function(){
			var img = $(this).find('.img img');
			var listH = $(this).find('.con').height();
			var imgH = img.height();
			
			$(this).mouseenter(function() {
				img.css({'top':'-'+(imgH - listH)+'px'})
			 })

			$(this).mouseleave(function(){
				img.css({'top':'0'})
			})

		})
	});


	$('.menu_mo .menu_btn').on('click',function(){
		$('.menu_mo .menu').stop().slideToggle();
	})

	$('.menu_mo .menu > li').each(function(){
		if ($(this).children('ul').length > 0){
			console.log();
			$(this).addClass('sub');
		}
	})


	
		
	$('.menu_mo .menu > li.sub > a').on('click',function(e){
		e.preventDefault();
		$(this).parent().children('ul').slideToggle();
	})
})

