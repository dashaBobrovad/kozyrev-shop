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

  const catalogEl = document.querySelector('.catalog');
  const filtersEl = document.querySelector('.filters');
  const searchEl = document.querySelector('.search');

  initCatalog(catalogEl, state);
  initFilters(filtersEl, state);
  initSearch(searchEl, state);
});
