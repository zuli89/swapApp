
//Takes you to field readings when clicking button
$("#field-readings").click(function() {
  $('#swap-info').hide();
  $('#swap-data').show();
});


//Takes you back to site visit info
$("#button-main-page").click(function() {
  $('#swap-info').show();
  $('#swap-data').hide();
});