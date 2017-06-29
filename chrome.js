$(document).ready(function () {
  var re = /fb:\/\/profile\/(\d{1,})/;
  var head = $('head').html();
  var parts = head.match(re);
  var uid = parts[1];
  //alert(parts[1]);
  //$('.fbTimelineSection').append('<span style="text-align: center; width: 168px; padding: 12px; margin: 18px; background-color: #333333; color: #FFFFFF"><input style="color: blue;" readonly="readonly" value="' + parts[1] + '"/></span>');


  var container = jQuery('<div/>', {
    id: 'blacklist_container',
    class: 'blacklist_container'
  });

  var button = jQuery('<a/>', {
    id: 'blacklist_button',
    href: 'http://blacklist.chocoyolabs.com/?uid=' + uid,
    target: '_blank',
    text: 'BLACKLIST',
    class: 'button button-flat-caution blacklist_button'
  }).appendTo(container);

  container.appendTo('.fbTimelineSection');
});
