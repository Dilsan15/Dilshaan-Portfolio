// https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html by Alex Having Fun

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});
