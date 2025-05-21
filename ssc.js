// const suggestions = document.getElementById('suggestions');

// function showSuggestions() {
//   suggestions.style.display = 'block';
// }

// function hideSuggestionsDelayed() {
//   setTimeout(() => {
//     suggestions.style.display = 'none';
//   }, 200); // Pequeno atraso para permitir o clique nas sugestões
// }

// document.querySelectorAll('.suggestions div').forEach(item => {
//   item.addEventListener('click', function () {
//     document.getElementById('search').value = this.textContent;
//     suggestions.style.display = 'none';
//   });
// });

const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('search');
const suggestionsBox = document.getElementById('suggestions');
const suggestionItems = Array.from(suggestionsBox.children);

function activateSearch() {
  searchBox.classList.add('active');
  suggestionsBox.style.display = 'block';
}

function deactivateSearch() {
  setTimeout(() => {
    searchBox.classList.remove('active');
    suggestionsBox.style.display = 'none';
  }, 200);
}

function filterSuggestions() {
  const value = searchInput.value.toLowerCase();

  suggestionItems.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

suggestionItems.forEach(item => {
  item.addEventListener('click', function () {
    searchInput.value = this.textContent;
    suggestionsBox.style.display = 'none';
    searchBox.classList.remove('active');
  });
});
