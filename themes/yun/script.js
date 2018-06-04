$(function(){
	/** 変数 **/
	var $fade_speed = 2000;

	/* スライドショー */
	var $parent = $(".main-visual-display");
	var $items = $parent.children("img");

	$items.each(function(i, elem){
		console.log(i +': '+ $(elem));

		setTimeout(function(i){
			$(elem)[i]
		})

		$active.fadeOut($fade_speed).removeClass("active");
		$next.fadeIn($fade_speed).addClass("active");

	});
});