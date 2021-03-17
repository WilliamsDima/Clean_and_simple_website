$(function() {
	$("[data-collapse]").on('click', function(event) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $(this).data("collapse");

		$this.toggleClass('active');

		$(blockId).slideToggle(); //плавное открытие и скрытие элемента
	});
});