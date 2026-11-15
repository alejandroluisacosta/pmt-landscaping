// Mobile menu toggle + gallery filter. No dependencies.
document.addEventListener('DOMContentLoaded', function () {
  var t = document.querySelector('.pmt-nav-toggle');
  var n = document.querySelector('.pmt-nav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('is-open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.pmt-gallery').forEach(function (g) {
    var tabs = g.querySelectorAll('.pmt-tab');
    var items = g.querySelectorAll('.pmt-gitem');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var f = tab.getAttribute('data-f');
        items.forEach(function (it) {
          it.style.display = (f === 'all' || it.getAttribute('data-g') === f) ? '' : 'none';
        });
      });
    });
  });
});
