// import checkRock from './checkRockClick.js'

//Наша валюта денежная и сила клика + рабочие
let MoneyValue = 0; // Наши стартовые деньги
let Experience = 0; // Наш опыт заработанный
let PowerClick = 1; // Сила нашего клика
let PowerWorksGuys = 0 // Сила наших работяг

// Сумма покупки клика
let PriceClick__lvlFirst = 30; // Цена на +1 клик
let PriceClicl__lvlTwo = 120; // Цена на +5 клик

// Флаг чекер
let checkerFirst;



function generateDomElements(){
    // if (MoneyValue == 0) {
    //     alert("Вы готовы играть?")
    // }
    //Обратились к main контейнеру
    let main__Master = document.querySelector(".main__nav")
    

    //создаем игровое поле и таблица счета и кол-во денег
    //поле
    let div__Block__First = document.createElement("div")
    div__Block__First.setAttribute("class", "main__Block__First")
    div__Block__First.style.display = "flex"
    

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
    tableTd__Two__LineTwo.textContent = `${MoneyValue}`

    



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
    
    imgRock.setAttribute("src", "./img/123.png")
    imgRock.setAttribute("class", "attack__Img__Rock__LvlFirst")
    imgRock.setAttribute("alt", "Картинка камня")
    imgRock.setAttribute("draggable", "false")
    //В блок аппендим камень
    div__Block__First.append(imgRock)
//?-----------------------------------------------------------------------------------------------------------------------
//? HEADER END------------------------------------------------------------------------------------------------------------

//? MAIN START------------------------------------------------------------------------------------------------------------
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

    // Создали ДИВ ДЛЯ ХРАНЕНИЯ лишек будет
    let information = document.createElement("div")
    information.setAttribute("class", "informationBlockTwo")
    information.style.display = "inline-block"
    information.style.textContent = "none"
    information.style.marginTop = "0.5%"
    information.style.paddingBottom = "2%"
    
    information.textContent = "Улучшение клика: "
    div__BlockTwo.append(information, imgCursor)
    information.append(imgCursor)
    
   
    

    // Улучшения клика  +1
    let liInformation = document.createElement("li")
    liInformation.setAttribute("class", "liInformationFirst")
    liInformation.style.textAlign = "match-justify"
    liInformation.style.border = "solid white"
    liInformation.style.borderRadius = "10%"
    liInformation.style.marginTop = "5%"
    
    liInformation.textContent = "Улучшить на 1"
    information.append(liInformation)

    
    //Реализация покупки клика +1 кнопка
    let liInformationEventFirst = document.querySelector(".liInformationFirst")
    liInformationEventFirst.addEventListener("click", () => buyUpgradeClick())

    // Улучшения клика  +5
    let liInformationTwo = document.createElement("li")
    liInformationTwo.setAttribute("class", "liInformationTwo")
    liInformationTwo.style.border = "solid white"
    liInformationTwo.style.borderRadius = "10%"
    liInformationTwo.style.marginTop = "5%" 

    liInformationTwo.textContent = "Улучшить на 5"
    information.append(liInformationTwo)

    //Реализация покупки клика +5 кнопка
    let liInformationEventTwo = document.querySelector(".liInformationTwo")
    liInformationEventTwo.addEventListener("click", () => buyUpgradeClickLvlFive())
    

    // Создаем блок (контейнер) под цену наших услуг по усилинею клика
    let containerSavePriceLiElement = document.createElement("container")
    containerSavePriceLiElement.setAttribute("class", "containerSavePriceLiElementStyle")
    containerSavePriceLiElement.style.paddingTop = "1%"

    div__BlockTwo.append(containerSavePriceLiElement)

    // Создаем li 1,2....
    //li-1
    liContainerPriceOne = document.createElement("li")
    liContainerPriceOne.setAttribute("class", "liContainerPriceStyle")
    liContainerPriceOne.textContent = `Цена: ${PriceClick__lvlFirst + "$"}`
    liContainerPriceOne.style.paddingBottom = "20px"



    liContainerPriceTwo = document.createElement("li")
    liContainerPriceTwo.setAttribute("class", "liContainerPriceStyle")
    liContainerPriceTwo.textContent = `Цена: ${'$', PriceClicl__lvlTwo}`
    

    //Append li elements
    containerSavePriceLiElement.append(liContainerPriceOne,liContainerPriceTwo)


    
    
//?-----------------------------------------------------------------------------------------------------------------------
//? MAIN END--------------------------------------------------------------------------------------------------------------

//? FOOTER START----------------------------------------------------------------------------------------------------------
//?-----------------------------------------------------------------------------------------------------------------------


}
generateDomElements()


//?-----------------------------------------------------------------------------------------------------------------------
// Функция обновления таблицы по клику камня
function updateTableMoneyExperience()  {
    Experience += PowerClick
    MoneyValue += PowerClick


    // Получаем TD элементы для их махинаций
    let updateTableMoney = document.querySelector(".MoneyTd")
    let updateTableExperience= document.querySelector(".ExperienceTd")

    // Прибавляем деньги
    updateTableMoney == MoneyValue
    updateTableMoney.textContent = abbreviateNumber(MoneyValue)

    // Прибавляем опыт
    updateTableExperience == Experience
    updateTableExperience.textContent = Experience
   

}
let rockLvlFirst = document.querySelector(".attack__Img__Rock__LvlFirst");
rockLvlFirst.addEventListener("click", updateTableMoneyExperience)
//?-----------------------------------------------------------------------------------------------------------------------


//?-----------------------------------------------------------------------------------------------------------------------
// Функция реализации магазина
// Функция увеливает значение на +1
function buyUpgradeClick(){
    if(MoneyValue > 0 && MoneyValue >= PriceClick__lvlFirst) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClick__lvlFirst
        updateTableMoney.textContent = MoneyValue
        

        PowerClick++   
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = PowerClick
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        
    }
}

// Функция увеливает значение на +5
function buyUpgradeClickLvlFive(){
    if(MoneyValue > 0 && MoneyValue >= PriceClicl__lvlTwo) {
        // Получаем TD элементы для их махинаций
        let updateTableMoney = document.querySelector(".MoneyTd")
        MoneyValue -= PriceClicl__lvlTwo
        updateTableMoney.textContent = MoneyValue
        

        PowerClick+=5   
        let PowerClickSchet = document.querySelector(".PowerClick")
        PowerClickSchet == PowerClick
        PowerClickSchet.textContent = PowerClick
        updateTableMoney.textContent = abbreviateNumber(MoneyValue);  // Используем функцию abbreviateNumber для обновления отображаемой суммы
        
    }
}
//?-----------------------------------------------------------------------------------------------------------------------

// Функции для сокращения числа 1 - Деньги ; 2 - Счет ; 3 - Сила клика ; 4 - Сила Рабочих
//1
function abbreviateNumber(MoneyValue){
        if (MoneyValue < 1e3) {
            return MoneyValue;
          }
          if (MoneyValue >= 1e3 && MoneyValue < 1e6) {
            return (MoneyValue / 1e3).toFixed(1) + " K";
          }
          if (MoneyValue >= 1e6 && MoneyValue < 1e9) {
            return (MoneyValue / 1e6).toFixed(1) + " M";
          }
          if (MoneyValue >= 1e9 && MoneyValue < 1e12) {
            return (MoneyValue / 1e9).toFixed(1) + " B";
          }
          if (MoneyValue >= 1e12 && MoneyValue < 1e15) {
            return (MoneyValue / 1e12).toFixed(1) + " T";
          }
          if (MoneyValue >= 1e15 && MoneyValue < 1e18) {
            return (MoneyValue / 1e15).toFixed(1) + " Q";
          }
          // Добавьте другие суффиксы при необходимости
          // В данном примере используются K (тысячи), M (миллионы), B (миллиарды) и T (триллионы)
          // 1. 1000 == 1 K == 1.000 
          // 2. 10000 == 10 K == 10.000
          // 3. 100000 == 100 K == 100.000
          // 4. 1000000 == 1 M == 1.000.000
          // 5. 10000000 == 10 M == 10.000.000
          // 6. 100000000 == 100 M == 100.000.000
          // 7. 1000000000 == 1 Md == 1.000.000.000
          // 8. 10000000000 == 10 Md == 10.000.000.000
          // 9. 100000000000 == 100 Md == 100.000.000.000
        // 10.  1000000000000 == 1 B ==  1.000.000.000.000
        // 11.  10000000000000 == 10 B == 10.000.000.000.000
        // 12.  100000000000000 == 100 B == 100.000.000.000.000
        // 13.  1000000000000000 == 1 Bd == 1.000.000.000.000.000
        // 14.  10000000000000000 == 10 Bd == 10.000.000.000.000.000
        // 15.  100000000000000000 == 100 Bd == 100.000.000.000.000.000
        // 16.  1000000000000000000 == 1 T ==  1.000.000.000.000.000.000
        // 17.
        // 18.
        // 19.
        // 20.
        // 21.
        // 22.
        // 23.
        // 24.
        // 25.
        // 26.
        // 27.
        // 28.
        // 29.
        // 30.
        // 31.
        // 32.
        // 33.



}
//2
function abbreviateScoreBoard(Experience){

}
//3
function abbreviatePowerClick(PowerClick){

}
//4
function abbreviatePowerWork(PowerWorksGuys) {

}
















//----------------------------------------------------------------------------------]
// Функция на проверку для консоли раз / раза


// let clickMeHowMany = 0;
// let rockLvlFirst = document.querySelector(".attack__Img__Rock__LvlFirst");

// rockLvlFirst.addEventListener("click", function(){
//     // Инкрементируем счетчик кликов
//     clickMeHowMany++;
//     // Выводим сообщение о количестве кликов в правильной грамматической форме
//     console.log(`Я камушек, ты кликнул на меня: ${clickMeHowMany}`);
//         if(clickMeHowMany == 100){
//             console.log("Тебе делать нехуй?)");
//         } 
// })

//----------------------------------------------------------------------------------


