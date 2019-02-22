/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
    const div = document.createElement('div');
    let randomise = (min, max) => Math.floor(Math.random() * (max - min) + min);

    div.style.position = 'absolute';
    div.style.left = `${randomise(1, 30)}px`;
    div.style.top = `${randomise(10, 30)}px`;
    div.style.width = `${randomise(100, 300)}px`;
    div.style.height = `${randomise(40, 100)}px`;
    div.style.backgroundColor = `rgb(${randomise(1, 255)},${randomise(1, 255)},${randomise(1, 255)})`;

    div.classList.add('draggable-div');

    return div;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    target.onmousedown = e => {
        let { left, top } = target.getBoundingClientRect();
        let offsetLeft = e.pageX - left;
        let offsetTop = e.pageY - top;

        function move(e) {
            target.style.left = `${e.pageX - offsetLeft}px`;
            target.style.top = `${e.pageY - offsetTop}px`;
        }

        move(e);

        document.onmousemove = e => {
            move(e);
        };

        target.onmouseup = () => {
            target.onmouseup = null;
            document.onmousemove = null;
        };

    };
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
