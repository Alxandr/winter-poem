if(wpc.ga) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
  ga('create', wpc.ga, 'auto');
  ga('send', 'pageview');
}

if(wpc.ai) {
  window.appInsights={queue:[],applicationInsightsId:null,accountId:null,appUserId:null,configUrl:null,start:function(n){function u(n){t[n]=function(){var i=arguments;t.queue.push(function(){t[n].apply(t,i)})}}function f(n,t){if(n){var u=r.createElement(i);u.type="text/javascript";u.src=n;u.async=!0;u.onload=t;u.onerror=t;r.getElementsByTagName(i)[0].parentNode.appendChild(u)}else t()}var r=document,t=this,i;t.applicationInsightsId=n;u("logEvent");u("logPageView");i="script";f(t.configUrl,function(){f("//az416426.vo.msecnd.net/scripts/a/ai.0.7.js")});t.start=function(){}}};
  
  appInsights.start(wpc.ai);
  appInsights.logPageView();
}