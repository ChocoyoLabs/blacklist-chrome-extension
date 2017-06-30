$(document).ready(function () {
  var re = /fb:\/\/profile\/(\d{1,})/;
  var head = $('head').html();
  var parts = head.match(re);
  var uid = parts[1];

  var container = jQuery('<div/>', {
    id: 'blacklist_container',
    class: 'blacklist_container'
  });

  var button = jQuery('<a/>', {
    id: 'blacklist_button',
    href: 'http://blacklist.chocoyolabs.com/user/' + uid,
    target: '_blank',
    text: 'Agregar a lista negra',
    class: 'blacklist_button'
  }).appendTo(container);

  container.appendTo('.fbTimelineSection');
});
