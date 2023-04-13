(function(b, c, d, e, g, m, x) {
b.GoogleAnalyticsObject = g;
b[g] = b[g] || function() {
    (b[g].q = b[g].q || []).push(arguments)
}
;
b[g].l = 1 * new Date;
m = c.createElement(d);
x = c.getElementsByTagName(d)[0];
m.async = 1;
m.src = e;
x.parentNode.insertBefore(m, x)
}
)(window, document, "script", "js/null.js?//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-102691241-1", {
name: "marketjs"
});
ga("marketjs.send", "pageview");
