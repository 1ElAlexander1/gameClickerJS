// Импорт функции которая делает обновление таблицы (записи о наших деньгах)
import {updateTableMoneyExperience} from './updateTableMoneyExp.js'
// Импорт функции по генерации второго блока где (магазин + магазин рабочих)
import {generateElementsTwoBlockDOM} from './generateBlockTwo.js'

let MoneyValueLocalStorage = JSON.parse(localStorage.getItem("MoneyValue"))
let ExperienceLocalStorage = JSON.parse(localStorage.getItem("Experience"))

//Наша валюта денежная и сила клика + рабочие
// графическое отображение
let MoneyValue = MoneyValueLocalStorage; // Наши стартовые деньги
let Experience = ExperienceLocalStorage; // Наш опыт заработанный
let PowerClick = 1; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг

if(MoneyValue == null) {
    MoneyValue = 0;
}
if(Experience == null) {
    Experience = 0;
}
if(PowerWorksGuys == null) {
    MoneyValue = 0;
}



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
    tableTrLineFirst.setAttribute("class", "tableTrLineTwoStyle")
    let tableTd__One__LineFirst = document.createElement("td")
    tableTd__One__LineFirst.textContent = "Ваш счёт"
    let tableTd__Two__LineFirst = document.createElement("td")
    tableTd__Two__LineFirst.textContent = "$"
    // Вторая линия по таблице
    let tableTrLineTwo = document.createElement("tr")
    tableTrLineTwo.setAttribute("class", "tableTrLineTwoStyle")
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
     tableTrLineFirstCharacteristic.setAttribute("class", "tableTrLineTwoStyle")
     let tableTd__One__LineFirstCharacteristic = document.createElement("td")
     tableTd__One__LineFirstCharacteristic.textContent = "Сила клика"
     let tableTd__Two__LineFirstCharacteristic = document.createElement("td")
     tableTd__Two__LineFirstCharacteristic.textContent = "Сила рабочих"
     
     // Вторая линия по таблице счет работяг и наш клик силы
     let tableTrLineTwoCharacteristic = document.createElement("tr")
     tableTrLineTwoCharacteristic.setAttribute("class", "tableTrLineTwoStyle")
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
generateElementsTwoBlockDOM()
}