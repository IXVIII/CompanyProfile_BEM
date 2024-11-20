(function($) {
  var logoBem = $('#logo-bem');
  var logoKabinet = $('#logo-kabinet');
  var scrollThreshold = 10;
  var logoColorPath = 'images/logo_';
  var logoBWPath = 'images/logo_';

  $(window).scroll(function() {
    if ($(this).scrollTop() > scrollThreshold) {
      logoBem.attr('src', logoColorPath + 'bem_color.svg');
      logoKabinet.attr('src', logoColorPath + 'kabinet_color.svg');
    } else {
      logoBem.attr('src', logoBWPath + 'bem_bw.svg');
      logoKabinet.attr('src', logoBWPath + 'kabinet_bw.svg');
    }
  });
})