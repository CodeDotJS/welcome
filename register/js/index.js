$('#next').click(function(e) {
  e.preventDefault()
  $('body').addClass('step2');
  navNext();
});

$('#complete').click(function(e) {
  e.preventDefault()
  $('body').removeClass('step2').addClass('step3');
  navNext();
});

function navNext() {
  $('nav .active')
    .removeClass('active')
    .next()
    .addClass('active');
}

$('#name').on('keyup', function() {
  $("#title span").addClass('active').text($(this).val() + "!");

  if ($('#name').val().trim().length === 0) {
    $('#title span').text("").removeClass('active');
  }
});
