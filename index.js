const expandButton = document.getElementById('expand-btn');
const clients = document.getElementById('clients');

expandButton.onclick = function (e) {
  if (clients.classList.contains('less')) {
    clients.classList.remove('less');
    clients.classList.add('more');
  } else {
    clients.classList.remove('more');
    clients.classList.add('less');
  }
};
