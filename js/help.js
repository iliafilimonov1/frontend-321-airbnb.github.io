/* header links */
const links = document.querySelectorAll('.header-nav__link');

links.forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.header-nav__link.link-active').classList.remove('link-active');
    event.currentTarget.classList.add('link-active');
  })
})


/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})


/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
  if(!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
    dropDownMenu.classList.remove('dropdown-show');
  }
})


/* модалка become a host */
const modal = document.querySelector('#modal'); // получение доступа к модалке
const host = document.querySelector('#host'); // доступ к Become a host
const closeModal = document.querySelector('#close-button'); // доступ к кнопке Close Modal внутри модалки

host.addEventListener("click", () => {
  modal.showModal();
});


closeModal.addEventListener("click", () => {
  modal.close();
});