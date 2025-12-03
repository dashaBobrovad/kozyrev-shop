export function initSearch(searchEl, state) {
  const input = searchEl.querySelector('.search__input');

  input.addEventListener('input', (event) => {
    state.searchQuery = event.target.value.toLowerCase();
    state.onChange && state.onChange();
  });
}
