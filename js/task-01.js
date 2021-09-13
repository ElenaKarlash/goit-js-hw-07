const listRef = document.querySelector("#categories");
const listItemRef = document.querySelectorAll(".item");
const listHederRef = document.querySelectorAll("h2");

//console.log(listRef);
//console.log(listItemRef);
//console.log(listHederRef);
listItemRef.forEach((item) => {
  console.log(` В списке ${item.textContent} категории, количество элементов:
   ${listItemRef.length}`);

});

