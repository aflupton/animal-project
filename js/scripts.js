$(document).ready(function() {
  $('#animal').click(function(event) {
    event.preventDefault();

    var animal = $('#animal').val();



    if (animal === "turtle") {
      $(".info").hide();
      $("#turtle").show();

    } else if (animal === "snake") {
      $(".info").hide();
      $("#snake").show();
    } else if (animal === "monkey") {
      $(".info").hide();
      $("#monkey").show();
    } else {
      alert("You have to choose animals from the list!!!");
    }

  });
});
