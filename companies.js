Splitting();

const element = document.getElementsByClassName('carousel')[0];

var callback = function () {
  element.className += ' ' + 'loaded';
};

if (
  element.readyState === 'complete' ||
  (element.readyState !== 'loading' && !element.doScroll)
) {
  callback();
} else {
  element.addEventListener('DOMContentLoaded', callback);
}
