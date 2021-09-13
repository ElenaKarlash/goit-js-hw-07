


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  
  const list = document.querySelector('#ingredients')//получаем доступ к <ul> в Html
  const products = ingredients.map((ingredient) => { //перебираем каждый элемент массива с помощью map()
  
  const elem = document.createElement('li')
  elem.textContent = ingredient
  return elem;
  })
   
list.append(...products)//вставляем в дом массив 'li'-шки с помищью метода append
console.log(products)



 
  
  