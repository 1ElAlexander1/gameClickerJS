// Импорт функции по возвращению генерации блока
import {generateElementsTwoBlockDOM} from './generateBlockTwo.js'
import { buyUpgradeWorkGuys } from './updateTableMoneyExp.js'
let priceNegritenok = 50;
let priceRaznorabochiy = 120;
let priceTSP = 420;
let kuznec = 1999;
let miner = 10999;
let tntMan = 60999;

export function clearMainBlockTwo(){
    //Создаем переменную которая очистит наш второй блок
    let clearBlock = document.querySelector(".main__Block__Two")
    let parent = clearBlock.parentNode  // Обращаемся к отцу
    parent.removeChild(clearBlock)  // Говорим отцу убрать своего ребенка.
//! ----------------------------------------------------- 
    //?--------------------------------------------------
    let containerWorkGuys = document.createElement("div")
    containerWorkGuys.setAttribute("class", "containerNavWorkGuys") // Создаем блок в котором будем хранить элементы 
    parent.append(containerWorkGuys)
    //?--------------------------------------------------
    // Создаем первый блок для хранения текса
    let blockFirstWorkersText = document.createElement("div")
    blockFirstWorkersText.setAttribute("class", "blockFirstWorkersTextStyle")
    containerWorkGuys.append(blockFirstWorkersText)
    // Создали заголовки (абзацы) 
    let pTextFirst = document.createElement("p")
    pTextFirst.setAttribute("class", "pTextFirst")
    pTextFirst.textContent = "Магазин"
    let pTextTwo = document.createElement("p")
    pTextTwo.setAttribute("class", "pTextTwo")
    pTextTwo.textContent = "Рабочих"
    blockFirstWorkersText.append(pTextFirst , pTextTwo)
//! -----------------------------------------------------
    //! Создаем второй блок для хранения рабочих трех (группа 1)
    let blockTwoWorkersBuy = document.createElement("div")
    blockTwoWorkersBuy.setAttribute("class", "blockTwoWorkersBuyStyle")
    containerWorkGuys.append(blockTwoWorkersBuy)

    //todo Создаем таблицу где будем хранить рабочих с ценой
    let tableWorkersFirst = document.createElement("table")
    tableWorkersFirst.setAttribute("class", "tableWorkersFirstStyle")
    blockTwoWorkersBuy.append(tableWorkersFirst)

    //? Первая линия по таблице <===>
    let tableTrFirst = document.createElement("tr")
    tableTrFirst.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу первая линия
    let tableTd__First__left = document.createElement("td")
    tableTd__First__left.setAttribute("class", "tdElements zaglavie")
    tableTd__First__left.textContent = "Слабые рабочие: "
    let tableTd__First__right = document.createElement("td")
    tableTd__First__right.setAttribute("class","tdElements zaglavie")
    tableTd__First__right.textContent = "Цена: "
    //append таблицы в блок + первой линии в таблицу
    tableWorkersFirst.append(tableTrFirst)
    tableTrFirst.append(tableTd__First__left, tableTd__First__right)

    //? Вторая линия таблицы <===>
    let tableTrTwo = document.createElement("tr")
    tableTrTwo.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу вторая линия НЕГРИТЕНОК РАБОЧИЙ
    let tableTd__Two__left = document.createElement("td")
    tableTd__Two__left.setAttribute("class", "tdElements tdButton negritenok")
    tableTd__Two__left.textContent = "Негритенок‎ ‎ ‎ ‎  +1"
    let tableTd__Two__right = document.createElement("td")
    tableTd__Two__right.setAttribute("class","tdElements")
    tableTd__Two__right.textContent = "50 ‎ ‎ $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrTwo)
    tableTrTwo.append(tableTd__Two__left, tableTd__Two__right)

    //? Третья линия таблицы <===>
    let tableTrThree = document.createElement("tr")
    tableTrThree.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу третья линия РАЗНОРАБОЧИЙ РАБОЧИЙ
    let tableTd__Three__left = document.createElement("td")
    tableTd__Three__left.setAttribute("class", "tdElements tdButton Raznorabochiy")
    tableTd__Three__left.textContent = "Разнорабочий +3"
    let tableTd__Three__right = document.createElement("td")
    tableTd__Three__right.setAttribute("class","tdElements")
    tableTd__Three__right.textContent = "120 $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrThree)
    tableTrThree.append(tableTd__Three__left, tableTd__Three__right)

    //? Четвертая линия таблицы <===>
    let tableTrFour = document.createElement("tr")
    tableTrFour.setAttribute("class", "tableTrFirstStyle")
    // Чертим таблицу четвертая линия   TSP РАБОЧИЙ
    let tableTd__Four__left = document.createElement("td")
    tableTd__Four__left.setAttribute("class", "tdElements tdButton Tsp")
    tableTd__Four__left.textContent = "TSP ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎      +12"
    let tableTd__Four__right = document.createElement("td")
    tableTd__Four__right.setAttribute("class","tdElements")
    tableTd__Four__right.textContent = "420 $"
    // append таблицы в блок + вторая линия в таблицу
    tableWorkersFirst.append(tableTrFour)
    tableTrFour.append(tableTd__Four__left, tableTd__Four__right)
//!--------------------------------------------------------------------
    //! Создаем третий блок для хранения рабочих трех (группа 2)
    let blockThreeWorkersBuy = document.createElement("div")
    blockThreeWorkersBuy.setAttribute("class", "blockThreeWorkersBuyStyle")
    containerWorkGuys.append(blockThreeWorkersBuy)
    //☑️
    //todo Создаем таблицу где будем хранить рабочих с ценой
    let tableWorkersTwo = document.createElement("table")
    tableWorkersTwo.setAttribute("class", "tableWorkersTwoStyle")
    blockThreeWorkersBuy.append(tableWorkersTwo)
    //☑️
    //? Первая линия по таблице <===>
    let tableTrFirst__First = document.createElement("tr")
    tableTrFirst__First.setAttribute("class", "tableTrFirstStyleFirst")
    //☑️
    // Чертим таблицу первая линия
    let tableTdFirstleft__TableWorkTwo = document.createElement("td")
    tableTdFirstleft__TableWorkTwo.setAttribute("class", "tdElements zaglavie")
    tableTdFirstleft__TableWorkTwo.textContent = "Средние рабочие: "
    let tableTdFirstright__TableWorkTwo = document.createElement("td")
    tableTdFirstright__TableWorkTwo.setAttribute("class","tdElements zaglavie")
    tableTdFirstright__TableWorkTwo.textContent = "Цена: "
    //append таблицы в блок + первой линии в таблицу
    tableWorkersTwo.append(tableTrFirst__First)
    tableTrFirst__First.append(tableTdFirstleft__TableWorkTwo, tableTdFirstright__TableWorkTwo)
    //☑️
    //? Вторая линия таблицы <===>
    let tableTrTwo__TableWorkTwo = document.createElement("tr")
    tableTrTwo__TableWorkTwo.setAttribute("class", "tableTrFirstStyleFirst")
    // Чертим таблицу вторая линия НЕГРИТЕНОК РАБОЧИЙ
    let tableTdTwoleft__TableWorkTwo = document.createElement("td")
    tableTdTwoleft__TableWorkTwo.setAttribute("class", "tdElements tdButton Kuznec")
    tableTdTwoleft__TableWorkTwo.textContent = "Кузнец ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ +70 "
    let tableTdTworight__TableWorkTwo = document.createElement("td")
    tableTdTworight__TableWorkTwo.setAttribute("class","tdElements")
    tableTdTworight__TableWorkTwo.textContent = "1999 ‎ ‎ $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersTwo.append(tableTrTwo__TableWorkTwo)
    tableTrTwo__TableWorkTwo.append(tableTdTwoleft__TableWorkTwo, tableTdTworight__TableWorkTwo)
    //☑️
    //? Третья линия таблицы <===>
    let tableTrThree__TableWorkTwo = document.createElement("tr")
    tableTrThree__TableWorkTwo.setAttribute("class", "tableTrFirstStyleFirst")
    // Чертим таблицу третья линия РАЗНОРАБОЧИЙ РАБОЧИЙ
    let tableTdThreeleft__TableWorkTwo = document.createElement("td")
    tableTdThreeleft__TableWorkTwo.setAttribute("class", "tdElements tdButton Miner")
    tableTdThreeleft__TableWorkTwo.textContent = "Шахтер ‎ ‎ ‎ ‎ ‎ ‎ ‎ +390"
    let tableTdThreeright__TableWorkTwo = document.createElement("td")
    tableTdThreeright__TableWorkTwo.setAttribute("class","tdElements")
    tableTdThreeright__TableWorkTwo.textContent = "10999 $"
    //append таблицы в блок + вторая линия в таблицу
    tableWorkersTwo.append(tableTrThree__TableWorkTwo)
    tableTrThree__TableWorkTwo.append(tableTdThreeleft__TableWorkTwo, tableTdThreeright__TableWorkTwo)
    //☑️
    //? Четвертая линия таблицы <===>
    let tableTrFour__TableWorkTwo = document.createElement("tr")
    tableTrFour__TableWorkTwo.setAttribute("class", "tableTrFirstStyleStyle")
    // Чертим таблицу четвертая линия   TSP РАБОЧИЙ
    let tableTdFourleft__TableWorkTwo = document.createElement("td")
    tableTdFourleft__TableWorkTwo.setAttribute("class", "tdElements tdButton TntMan")
    tableTdFourleft__TableWorkTwo.textContent = "Тротильщик +2480  ‎ ‎ ‌‎ ‎ ‎"
    let tableTdFourright__TableWorkTwo = document.createElement("td")
    tableTdFourright__TableWorkTwo.setAttribute("class","tdElements")
    tableTdFourright__TableWorkTwo.textContent = "60999 $"
    // append таблицы в блок + вторая линия в таблицу
    tableWorkersTwo.append(tableTrFour__TableWorkTwo)
    tableTrFour__TableWorkTwo.append(tableTdFourleft__TableWorkTwo, tableTdFourright__TableWorkTwo)
    //!-------------------------------------------------------------------
    // Создаем четвертый блок для хранения рабочих трех (группа 3)
    //TODO  ДОДЕЛАТЬ ТУТ ЖЕ ПОТОМ ЕЩЕ 3 РАБОЧИХ по желанию
    // Создаем пятый блок для выхода
    let exitBlockWorkGuys = document.createElement("div")
    exitBlockWorkGuys.setAttribute("class", "exitBlockWorkGuysStyle")
    // Название кнопки
    let exitText = document.createElement("h1")
    exitText.setAttribute("class", "exitTextStyle")
    exitText.textContent = "Назад"
    // append блока и во внутрь h1
    containerWorkGuys.append(exitBlockWorkGuys)
    exitBlockWorkGuys.append(exitText)
    //! Делаем кнопки активными
    // Кнопка Назад
    exitText.addEventListener("click", function(){
        if(document.querySelector(".containerNavWorkGuys")){
            //Создаем переменную которая очистит наш второй блок
            let clearBlock = document.querySelector(".containerNavWorkGuys")
            let parent = clearBlock.parentNode  // Обращаемся к отцу
            parent.removeChild(clearBlock)  // Говорим отцу убрать своего ребенка. (рабочих)
            generateElementsTwoBlockDOM()
        } 
    })
    // Первая кнопка негра
    tableTd__Two__left.addEventListener("click", () => buyUpgradeWorkGuys(1))
    // Вторая кнопка разнорабочего
    tableTd__Three__left.addEventListener("click", () => buyUpgradeWorkGuys(2))
    // Третья кнопка TSP
    tableTd__Four__left.addEventListener("click", () => buyUpgradeWorkGuys(3))
    tableTdTwoleft__TableWorkTwo.addEventListener("click", () => buyUpgradeWorkGuys(4))
    tableTdThreeleft__TableWorkTwo.addEventListener("click", () => buyUpgradeWorkGuys(5))
    tableTdFourleft__TableWorkTwo.addEventListener("click", () => buyUpgradeWorkGuys(6))
}