/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})


/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
    dropDownMenu.classList.remove('dropdown-show');
  }
})


/* help-search */
const inputSearch = document.querySelector('.input-search');
const searchMenu = document.querySelector('.search-menu');

/* вкл/выкл выпадающего списка */
inputSearch.addEventListener('click', () => {
  searchMenu.classList.add('search-show');
})

// закрытие выпадающего списка по клику на пункты меню
const searchArticles = document.querySelectorAll('.search-menu__items');
searchArticles.forEach(item => {
  item.addEventListener('click', () => {
    searchMenu.classList.remove('search-show');
  })
})

/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-menu') && !event.target.closest('.input-search')) {
    searchMenu.classList.remove('search-show');
  }
})



/* tabs */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs-btn');
  const tabsContent = document.querySelectorAll('.tabs-content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs-btn__active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-btn__active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs-content__active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__active');
  }
})



/* карточки */
const fetchData = () => {
  return fetch('../data.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

const renderData = async () => {
  try {
    const products = await fetchData();
    const productsWrapper = document.querySelector('.products-wrapper');

    if (productsWrapper) {
      products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('card-wrapper');

        div.innerHTML = `
          <a class="card-link" href="#" target="_blank" rel="noopener noreferrer nofollow"></a>
          <div class="card">
            <div class="card-image">
              <img src="${product.imgSrc}" alt="image">
            </div>
            <div class="card-text__descr text-secondary">${product.rating}</div>
            <div class="card-text__config text-secondary">${product.name}</div>
            <div class="card-text__date text-secondary">${product.price}</div>
          </div>
        `;

        productsWrapper.appendChild(div);
      });
    } else {
      console.error('Element with class "products-wrapper" not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


document.addEventListener('DOMContentLoaded', renderData);


