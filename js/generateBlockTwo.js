import { buyUpgradeClick } from './updateTableMoneyExp.js';
// Импорт функции на кнопку +10 клик
import { buyUpgradeClickLvlTen } from './updateTableMoneyExp.js';
// Импорт функции на кнопку +100 клик
import { buyUpgradeClickLvlOneHundred } from './updateTableMoneyExp.js';
// Импорт функции очистки магазина и создания разметки под рабочих
import { clearMainBlockTwo } from './openPanelWorkGuys.js'

// Сумма покупки клика
let PriceClick__lvlFirstRemake = 30; // Цена на +1 клик
let PriceClick__lvlTwoRemake = 240; // Цена на +10 клик
let PriceClick__lvlThreeRemake = 2000; // Цена на +100 клик 

export function generateElementsTwoBlockDOM(){
    // Создаем переменную которая очистит наш второй блок   
    // let clearBlock = document.querySelector(".containerNavWorkGuys")
    // console.log("Проверка на работоспоспонобность", clearBlock); // проверка что кнопка нашла
    // let parent = clearBlock.parentNode  // Обращаемся к отцу
    // parent.removeChild(clearBlock)  // Говорим отцу убрать своего ребенка.
//! ----------------------------------------------------- 
    let main__Master = document.querySelector(".main__nav")
    // Создаем блок в котором управление, улучшение и т.п.
    let div__BlockTwo = document.createElement("div")
    div__BlockTwo.setAttribute("class", "main__Block__Two")
    main__Master.append(div__BlockTwo)

    //Добавляем заголовок
    let h1OnlyText = document.createElement("h1")
    h1OnlyText.textContent = "Магазин"
    h1OnlyText.setAttribute("align", "center")
    div__BlockTwo.append(h1OnlyText)

    //Украшение декорирование возле клика будет картинка
    let imgCursor = document.createElement("img")
    
    imgCursor.src = "./img/cursorUp.jpg"
    imgCursor.setAttribute("class", "imgCursor")
    imgCursor.setAttribute("alt", "картинка курсора")

    // Создали ДИВ ДЛЯ ХРАНЕНИЯ лишек будет
    let information = document.createElement("div")
    information.setAttribute("class", "informationBlockTwo")
    
    information.textContent = "Улучшение клика: "
    div__BlockTwo.append(information)
    information.append(imgCursor)
//! ----------------------------------------------------- 
    // Улучшения клика  +1
    let liInformation = document.createElement("li")
    liInformation.setAttribute("class", "liInformationFirst")
    
    liInformation.textContent = "Улучшить на 1"
    information.append(liInformation)

    //Реализация покупки клика +1 кнопка
    let liInformationEventFirst = document.querySelector(".liInformationFirst")
    liInformationEventFirst.addEventListener("click", () => buyUpgradeClick())  
//! -----------------------------------------------------
    // Улучшения клика  +10
    let liInformationTwo = document.createElement("li")
    liInformationTwo.setAttribute("class", "liInformationTwo")
    
    liInformationTwo.textContent = "Улучшить на 10"
    information.append(liInformationTwo)

    //Реализация покупки клика +10 кнопка
    let liInformationEventTwo = document.querySelector(".liInformationTwo")
    liInformationEventTwo.addEventListener("click", () => buyUpgradeClickLvlTen())
//! -----------------------------------------------------
    // Улучшения клика на +100
    let liInformationThree = document.createElement("li")
    liInformationThree.setAttribute("class", "liInformationThree")

    liInformationThree.textContent = "Улучшить на 100"
    information.append(liInformationThree)

    let liInformationEventThree = document.querySelector(".liInformationThree")
    liInformationEventThree.addEventListener("click", () => buyUpgradeClickLvlOneHundred())
//! -----------------------------------------------------
    // Создаем блок (контейнер) под цену наших услуг по усилинею клика
    let containerSavePriceLiElement = document.createElement("container")
    containerSavePriceLiElement.setAttribute("class", "containerSavePriceLiElementStyle")
    
    div__BlockTwo.append(containerSavePriceLiElement)

    // Создаем li 1,10....
    // Цена на апгрейды  от +1
    let liContainerPriceOne = document.createElement("li")
    liContainerPriceOne.setAttribute("class", "liContainerPriceStyle lipFirst")
    liContainerPriceOne.textContent  = `Цена: ${PriceClick__lvlFirstRemake + "$"}`
    // От +10
    let liContainerPriceTwo = document.createElement("li")
    liContainerPriceTwo.setAttribute("class", "liContainerPriceStyle lipTwo")
    liContainerPriceTwo.textContent = `Цена: ${PriceClick__lvlTwoRemake + "$"}`
    // От +100
    let liContainerPriceThree = document.createElement("li")
    liContainerPriceThree.setAttribute("class", "liContainerPriceStyle lipThree")
    liContainerPriceThree.textContent = `Цена: ${PriceClick__lvlThreeRemake + "$"}`
    
    //Append li elements
    containerSavePriceLiElement.append(liContainerPriceOne)
    containerSavePriceLiElement.append(liContainerPriceTwo)
    containerSavePriceLiElement.append(liContainerPriceThree)
//! -----------------------------------------------------
    // Создание нового блока для рабочих
    let containerWorkGuys = document.createElement("div")
    containerWorkGuys.setAttribute("class", "containerWorkGuysClass")
    // Создание Заголовка для магазина рабочих
    containerWorkGuys.textContent = "Покупка рабочих: "

    // Добавление картинки для заголовка
    let imgWorkGuy = document.createElement("img")
    imgWorkGuy.setAttribute("src", "./img/workGuy.png")
    imgWorkGuy.setAttribute("class", "imgWorkGuyClass")

    // Создание ли элемента что эта кнопка.  (РАБОЧИЕ)
    let liButtonWorkGuys = document.createElement("li")
    liButtonWorkGuys.setAttribute("class", "liButtonWorkGuysClass")
    liButtonWorkGuys.textContent = "Рабочие"

    // Append 
    div__BlockTwo.append(containerWorkGuys) //Отпраляем контейнер в главный отцовский элемент
    containerWorkGuys.append(imgWorkGuy) // Отправили картинку в этот блок
    containerWorkGuys.append(liButtonWorkGuys) // Отправляем кнопку рабочих в контейнер
//! -----------------------------------------------------
    // Реализация открытия (покупки) рабочих
    liButtonWorkGuys.addEventListener("click", () => clearMainBlockTwo())
}