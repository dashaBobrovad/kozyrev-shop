import { CATEGORY_LABEL } from './constants.js';

export function initCatalog(catalogEl, state) {
  const listEl = catalogEl.querySelector('.catalog__list');

  state.onChange = render;
  render();

  function render() {
    const filtered = state.cards.filter((card) => {
      const matchCategory =
        state.activeCategory === 'all' || card.category === state.activeCategory;

      const matchSearch = card.title.toLowerCase().includes(state.searchQuery);

      return matchCategory && matchSearch;
    });

    listEl.innerHTML = '';

    filtered.forEach((card) => {
      const li = document.createElement('li');
      li.className = 'catalog__item';
      li.innerHTML = createCardHTML(card);
      listEl.appendChild(li);
    });
  }
}

function createCardHTML(card) {
  const label = CATEGORY_LABEL[card.category];

  return `
    <article class="card" data-category="${card.category}">
      <div class="card__media">
        <img
          class="card__image"
          src="${card.image}"
          alt="${card.title}"
          loading="lazy"
        >
      </div>

      <div class="card__content">
        <span class="card__tag card__tag--${card.category}" data-category="${card.category}">
          ${label}
        </span>

        <h2 class="card__title">
          ${card.title}
        </h2>

        <div class="card__bottom">
          <span class="card__price">$${card.price}</span>
          <span class="card__author">| by ${card.author}</span>
        </div>
      </div>
    </article>
  `;
}
