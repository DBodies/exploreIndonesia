





const showMoreButtons = document.querySelectorAll('.btn-show-more');

showMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hiddenText = button.previousElementSibling.querySelector('.hidden-text');

    if (hiddenText.classList.contains('show')) {
      hiddenText.classList.remove('show');
      button.textContent = 'Show more'; // Меняем текст кнопки обратно
    } else {
      hiddenText.classList.add('show');
      button.textContent = 'Show less'; // Меняем текст кнопки на 'Show less'
    }
  });
});
