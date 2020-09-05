$(document).ready(function(){
	removeThunderPlugin();
	$('.topic').click(function(){
		$('.topic').removeClass('actived');
		$('.topic-body').removeClass('actived');
		$(this).addClass('actived');
		$('[id="'+$(this).attr('data-id')+'"]').addClass('actived');
	});
});

