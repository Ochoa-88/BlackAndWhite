const f = document.getElementById('sForm');
const q = document.getElementById('searchBar');
const google = 'https://www.google.com/search?q=';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);