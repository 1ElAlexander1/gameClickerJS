export function clearMainBlockTwo(){
    //Создаем переменную которая очистит наш второй блок
    let clearBlock = document.querySelector(".main__Block__Two")
    console.log("Проверка на работоспоспонобность", clearBlock); // проверка что кнопка нашла
    let parent = clearBlock.parentNode
    clearBlock.setAttribute("class", "clearActiveClass")
    parent.removeChild(clearBlock)

    
}