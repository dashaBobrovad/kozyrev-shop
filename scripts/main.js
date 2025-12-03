import { cardsData } from './data.js';
import { initCatalog } from './catalog.js';
import { initFilters } from './filters.js';
import { initSearch } from './search.js';

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    cards: cardsData,
    searchQuery: '',
    activeCategory: 'all'
  };

  const catalogEl = document.getElementById('catalog');
  const filtersEl = document.getElementById('filters');
  const searchEl = document.getElementById('search');

  initCatalog(catalogEl, state);
  initFilters(filtersEl, state);
  initSearch(searchEl, state);
});
