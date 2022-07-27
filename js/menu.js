function hideButton() {
  $('.nav-logo-brand').hide()
  $('.nav-logo').hide()
}
$('.collapse').on('shown.bs.collapse', function () {
  $('.nav-logo-brand').hide()
  $('.nav-logo').hide()
})

$('.collapse').on('hidden.bs.collapse', function () {
  $('.nav-logo-brand').show()
  $('.nav-logo').show()
})
