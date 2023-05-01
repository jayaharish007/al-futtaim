const expandButton = document.getElementById('expand-btn');
const clients = document.getElementById('clients');

if (expandButton && clients)
  expandButton.onclick = function (e) {
    if (clients.classList.contains('less')) {
      clients.classList.remove('less');
      clients.classList.add('more');
    } else {
      clients.classList.remove('more');
      clients.classList.add('less');
    }
  };

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      includedLanguages: 'ar,en',
    },
    'google_translate_element'
  );
}
