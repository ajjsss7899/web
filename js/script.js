$(function(){

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
})

