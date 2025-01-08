document.addEventListener('DOMContentLoaded', function () {
    const images = [    // Массив изображений
        { src: './img/beachMountain@1x.jpg', srcset: './img/beachMountain@2x.jpg', desktopSrc: './img/field@1x.jpg', desktopSrcset: './img/field@2x.jpg' },
        { src: './img/sunVIDEO@1x.jpg', srcset: './img/sunVIDEO@2x.jpg', desktopSrc: './img/beach@1x.jpg', desktopSrcset: './img/beach@2x.jpg' },
        { src: './img/cityVIDEO@1x.jpg', srcset: './img/cityVIDEO@2x.jpg', desktopSrc: './img/rock@1x.jpg', desktopSrcset: './img/rock@2x.jpg' },
        { src: './img/photoGallery/Girls@1x.jpg', srcset: './img/photoGallery/Girls@2x.jpg', desktopSrc: './img/children@1x.jpg', desktopSrcset: './img/children@2x.jpg' },
        { src: './img/photoGallery/mountains@1x.jpg', srcset: './img/photoGallery/mountains@2x.jpg', desktopSrc: './img/picture@1x.jpg', desktopSrcset: './img/picture@2x.jpg' },
    ];

    const imgElement = document.querySelector('.third-img');  // Элемент изображения
    const circles = document.querySelectorAll('.svg-circle'); // Коллекция svg-кружков для подсветки активного фото
    let currentIndex = 0; // Индекс текущего изображения

    // Функция обновления изображения и кружка
    function updateImageAndCircle(index) {
        const isDesktop = window.innerWidth >= 1280; // Проверяем ширину экрана для десктопа
        imgElement.src = isDesktop ? images[index].desktopSrc : images[index].src;
        imgElement.srcset = isDesktop ? images[index].desktopSrcset : images[index].srcset;

        circles.forEach(circle => circle.classList.remove('selected'));
        circles[index].classList.add('selected');
    }

    // Обработчики для стрелок переключения
    document.querySelector('.wrapper-back-next svg:last-child').addEventListener('click', function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImageAndCircle(currentIndex);
        }
    });

    document.querySelector('.wrapper-back-next svg:first-child').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateImageAndCircle(currentIndex);
        }
    });

    // Слушатель для обновления изображений при изменении размера окна
    window.addEventListener('resize', () => updateImageAndCircle(currentIndex));

    // Первоначальное обновление изображения и кружка при загрузке страницы
    updateImageAndCircle(currentIndex);
});



const showMoreButtons = document.querySelectorAll('.btn-show-more'); // ВЫбираем все эллементы на странице с классом .btn-show-more
showMoreButtons.forEach(button => {   // FOR EACH = для каждого элемента кнопки 
  button.addEventListener('click', () => {   //addEventListener - оброботчик событий для каждой кнопки. => стрелочная функция. То есть после клика происходит стрелочная функция
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
