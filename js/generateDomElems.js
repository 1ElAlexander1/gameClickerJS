// Импорт функции которая делает обновление таблицы (записи о наших деньгах)
import {updateTableMoneyExperience} from './updateTableMoneyExp.js'
// Импорт функции на кнопку +1 клик
import { buyUpgradeClick } from './updateTableMoneyExp.js';
// Импорт функции на кнопку +10 клик
import { buyUpgradeClickLvlTen } from './updateTableMoneyExp.js';
// Импорт функции на кнопку +100 клик
import { buyUpgradeClickLvlOneHundred } from './updateTableMoneyExp.js';




//Наша валюта денежная и сила клика + рабочие
// графическое отображение
let MoneyValue = 0; // Наши стартовые деньги
let Experience = 0; // Наш опыт заработанный
let PowerClick = 1; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг
// Сумма покупки клика
let PriceClick__lvlFirstRemake = 30; // Цена на +1 клик
let PriceClick__lvlTwoRemake = 240; // Цена на +10 клик
let PriceClick__lvlThreeRemake = 2000; // Цена на +100 клик    

// Генерация DOM элементов
export function generateDomElements(){
    let main__Master = document.querySelector(".main__nav")
    
    //создаем игровое поле и таблица счета и кол-во денег
    //поле
    let div__Block__First = document.createElement("div")
    div__Block__First.setAttribute("class", "main__Block__First")
    
    //! Создали таблицу счета (денег и очков)
    let tableSchet = document.createElement("table")
    tableSchet.setAttribute("class", "tableSchetExpMoney")
    // Первая линия по таблице
    let tableTrLineFirst = document.createElement("tr")
    let tableTd__One__LineFirst = document.createElement("td")
    tableTd__One__LineFirst.textContent = "Ваш счёт"
    let tableTd__Two__LineFirst = document.createElement("td")
    tableTd__Two__LineFirst.textContent = "$"
    // Вторая линия по таблице
   
    let tableTrLineTwo = document.createElement("tr")
    let tableTd__One__LineTwo = document.createElement("td")
    tableTd__One__LineTwo.setAttribute("class", "ExperienceTd")
    tableTd__One__LineTwo.textContent = `${Experience}`

    let tableTd__Two__LineTwo = document.createElement("td")
    tableTd__Two__LineTwo.setAttribute("class", "MoneyTd")
    tableTd__Two__LineTwo.textContent = `${MoneyValue} `

    //Первая линия таблицы
    main__Master.append(div__Block__First) //в мэйн блок append_им(блок первый наше поле игровое со статой где)
    div__Block__First.append(tableSchet) //таблицу в блок1 запихнули
    tableSchet.append(tableTrLineFirst) // Тырчик я хрен значет что это но часть таблицы ;)
    tableTrLineFirst.append(tableTd__One__LineFirst, tableTd__Two__LineFirst) // залили первую линию
    //Вторая линия таблицы
    tableSchet.append(tableTrLineTwo)
    tableTrLineTwo.append(tableTd__One__LineTwo,tableTd__Two__LineTwo)

    //!Создание таблицы о силе клика и помощь в клике (нанятие рабочих)
    let tableSchetCharacteristic = document.createElement("table")
    tableSchetCharacteristic.setAttribute("class", "tableSchetCharacteristic")

     // Первая линия по таблице
     let tableTrLineFirstCharacteristic = document.createElement("tr")
     let tableTd__One__LineFirstCharacteristic = document.createElement("td")
     tableTd__One__LineFirstCharacteristic.textContent = "Сила клика"
     let tableTd__Two__LineFirstCharacteristic = document.createElement("td")
     tableTd__Two__LineFirstCharacteristic.textContent = "Сила рабочих"
     
     // Вторая линия по таблице счет работяг и наш клик силы
     let tableTrLineTwoCharacteristic = document.createElement("tr")
     let tableTd__One__LineTwoCharacteristic = document.createElement("td")
     tableTd__One__LineTwoCharacteristic.setAttribute("class", "PowerClick")
     tableTd__One__LineTwoCharacteristic.textContent = `${PowerClick}`
 
     let tableTd__Two__LineTwoCharacteristic = document.createElement("td")
     tableTd__Two__LineTwoCharacteristic.setAttribute("class", "PowerWorkguys")
     tableTd__Two__LineTwoCharacteristic.textContent = `${PowerWorksGuys}`

     // Первая линия таблицы - от характеристики
     div__Block__First.append(tableSchetCharacteristic)
     tableSchetCharacteristic.append(tableTrLineFirstCharacteristic)
     tableTrLineFirstCharacteristic.append(tableTd__One__LineFirstCharacteristic,tableTd__Two__LineFirstCharacteristic)
     // Вторая линия таблицы - от характеристик
     tableSchetCharacteristic.append(tableTrLineTwoCharacteristic)
     tableTrLineTwoCharacteristic.append(tableTd__One__LineTwoCharacteristic, tableTd__Two__LineTwoCharacteristic)

     //картинка камня
    let imgRock = document.createElement("img")
    
    imgRock.setAttribute("src", "./img/targetRock.png")
    imgRock.setAttribute("class", "attack__Img__Rock__LvlFirst")
    imgRock.setAttribute("alt", "Картинка камня")
    imgRock.setAttribute("draggable", "false")
    //В блок аппендим камень
    div__Block__First.append(imgRock)

    let rockLvlFirst = document.querySelector(".attack__Img__Rock__LvlFirst");
    rockLvlFirst.addEventListener("click", updateTableMoneyExperience)
//?-----------------------------------------------------------------------------------------------------------------------
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
    div__BlockTwo.append(information, imgCursor)
    information.append(imgCursor)
    
    // Улучшения клика  +1
    let liInformation = document.createElement("li")
    liInformation.setAttribute("class", "liInformationFirst")
    
    liInformation.textContent = "Улучшить на 1"
    information.append(liInformation)

    //Реализация покупки клика +1 кнопка
    let liInformationEventFirst = document.querySelector(".liInformationFirst")
    liInformationEventFirst.addEventListener("click", () => buyUpgradeClick())  

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
    
//TODO -----------------------------------------------------

    // Улучшение клика на максимальную сумму денег
    // let liInformationEventFour = document.querySelector(".liInformationThree")
    // liInformationEventThree.addEventListener("click", () => buyUpgradeClickLvlOneHundred())


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
}