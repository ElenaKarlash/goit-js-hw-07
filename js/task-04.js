
//получаем доступ
const decBtn = document.querySelector('[data-action="decrement"]') 
const incBtn = document.querySelector('[data-action="increment"]')
let counterValue = document.querySelector('#value')

//создаем коллбек
const onDecrement = ()=>{
   let spanNum = Number(counterValue.textContent);
   spanNum -=1;
   counterValue.textContent = spanNum;
   console.log(spanNum);
};

const onIncrement = ()=>{
   let spanNum2 = Number(counterValue.textContent);
   spanNum2 +=1;
   counterValue.textContent = spanNum2;
   console.log(spanNum2)
   };

//вешаем слушателей
decBtn.addEventListener ('click', onDecrement)
incBtn.addEventListener ('click', onIncrement)




