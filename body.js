document.addEventListener('DOMContentLoaded', function () {
    const images = [    // Масив изодражений
        { src: './img/beachMountain@1x.jpg', srcset: './img/beachMountain@2x.jpg' },
        { src: './img/sunVIDEO@1x.jpg', srcset: './img/sunVIDEO@2x.jpg' },
        { src: './img/cityVIDEO@1x.jpg', srcset: './img/cityVIDEO@2x.jpg' },
        { src: './img/photoGallery/Girls@1x.jpg', srcset: './img/photoGallery/Girls@2x.jpg' },
        { src: './img/photoGallery/mountains@1x.jpg', srcset: './img/photoGallery/mountains@2x.jpg' },
    ];
    const imgElement = document.querySelector('.third-img');  // Тут обращаемся к фото которое мы меняе на фото с массива
    const circles = document.querySelectorAll('.svg-circle'); // Это мы используем коллекцию свг для посдветки активного фото
    let currentIndex = 0; // Переменная для отслеживания прогресса. ПО УМ = 0(то есть начинается с 1го фото)
    function updateImageAndCircle(index) {
        imgElement.src = images[index].src; // Меняем атриут src на новое значение из массива images по текущему индексу.
        imgElement.srcset = images[index].srcset; // Для высококачественного фото  меняем атрибут src на новое значение из массива images по текущему индексу.
        circles.forEach(circle => circle.classList.remove('selected'));
        circles[index].classList.add('selected');
    }
    document.querySelector('.wrapper-back-next svg:last-child').addEventListener('click', function () {              //Ищем правую стрелку это последний ребёнок, добавляем обработчик событий на коик пр стрелку вправо
        if (currentIndex < images.length - 1) {  // Смотри если это не последний изображение то увеличиваем индекс и вызываем функцию updateImageAndCircle(currentIndex);
            currentIndex++;
            updateImageAndCircle(currentIndex);
        }
    });
    document.querySelector('.wrapper-back-next svg:first-child').addEventListener('click', function () {  // Аналог стрелки вправо, только влево  
        if (currentIndex > 0) { // Проверяем не является ли изображение первым, если нет то уменьшаем индекст и вызываем функцию  updateImageAndCircle(currentIndex);
            currentIndex--;
            updateImageAndCircle(currentIndex);
        }
    });
    updateImageAndCircle(currentIndex);  // Что бы при загрузке страницы отобразить первое фото и подсведить иконку
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
