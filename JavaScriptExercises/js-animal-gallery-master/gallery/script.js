// Add your code here
// $('.filter-button').on('click', function () {
//   alert("Yup, it's a button.");
// });
$(document).ready(function() {
	$(".filter-button").on('click', function () {
		$("." + this.id).toggle();
		$("#" + this.id).toggleClass('active');
		var animal = this.id;
		alertify.log(animal);
	});
});

