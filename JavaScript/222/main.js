const paragraph = document.querySelector('p');

//paragraph.classList.add('active'); //добавить
//paragraph.classList.remove('active'); //удалить
//paragraph.setAttribute('id','info'); //добавить атрибут
//paragraph.removeAttribute('id'); //удалить атрибут

//paragraph.addEventListener('click', () => {paragraph.style.color = 'green';})
paragraph.addEventListener('click', () =>{paragraph.classList.add('active')})
