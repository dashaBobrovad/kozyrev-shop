import { CATEGORY, CATEGORY_LABEL } from './constants.js';

export function initFilters(filtersEl, state) {
  const items = state.cards || [];

  const counts = {
    all: items.length,
    ...Object.values(CATEGORY).reduce((acc, value) => {
      acc[value] = items.filter((i) => i.category === value).length;
      return acc;
    }, {}),
  };

  const categories = [
    { value: 'all', label: 'All' },
    ...Object.values(CATEGORY).map((value) => ({
      value,
      label: CATEGORY_LABEL[value],
    })),
  ];

  filtersEl.innerHTML = '';

  categories.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = 'filters__button';
    if (index === 0) btn.classList.add('filters__button--active');

    btn.dataset.category = cat.value;

    btn.innerHTML = `
      <span class="filters__label">${cat.label}</span>
      <span class="filters__count">${counts[cat.value]}</span>
    `;

    filtersEl.appendChild(btn);
  });

  const buttons = filtersEl.querySelectorAll('.filters__button');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('filters__button--active'));
      btn.classList.add('filters__button--active');

      state.activeCategory = btn.dataset.category;
      state.onChange && state.onChange();
    });
  });
}
