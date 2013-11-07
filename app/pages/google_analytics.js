"use strict";

//enhanced link attribution (inpage analytics) not yet supported by analytics.js. Rewrite the following line when updated!
// window._gaq.push(['_require', 'inpage_linkid', '//www.google-analytics.com/plugins/ga/inpage_linkid.js']);

//load the analytics.js script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//sets up analytics account
//for localhost testing add this option hash as the last param: {'cookieDomain': 'none'}
ga('create', document.location.host === 'www.bountysource.com' ? 'UA-36879724-1' : 'UA-36879724-2', {
  'cookieDomain': 'none'
});

angular.module('app').run(function($rootScope, $window, $location) {
  $rootScope.$on('$locationChangeStart', function ($event, current) {
    console.log($event);
    console.log(current);
  })

  $rootScope.$on('$viewContentLoaded', function() {
    var location = window.location.protocol +
      '//' + window.location.hostname +
      window.location.pathname +
      window.location.search;
    ga("send", "pageview", {"location": location}); //override google setting location. See https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
  });
});
