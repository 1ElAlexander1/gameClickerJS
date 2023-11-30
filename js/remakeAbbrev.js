// Функции для сокращения числа 1 - Деньги ; 2 - Счет ; 3 - Сила клика ; 4 - Сила Рабочих
// 1 Money - Деньги
export function abbreviateNumber(MoneyValue){
        if (MoneyValue < 1e3) {
            return MoneyValue 
          }
          if (MoneyValue >= 1e3 && MoneyValue < 1e6) {
            return (MoneyValue / 1e3).toFixed(1) + " K"
            // Тут проверяем 100 > ? тогда остается.  Если 1.000 есть и она менее 6 нулей (лям) то К после М
          }
          if (MoneyValue >= 1e6 && MoneyValue < 1e9) {
            return (MoneyValue / 1e6).toFixed(1) + " M";
          }
          if (MoneyValue >= 1e9 && MoneyValue < 1e12) {
            return (MoneyValue / 1e9).toFixed(1) + " Md";
          }
          if (MoneyValue >= 1e12 && MoneyValue < 1e15) {
            return (MoneyValue / 1e12).toFixed(1) + " B";
          }
          if (MoneyValue >= 1e15 && MoneyValue < 1e18) {
            return (MoneyValue / 1e15).toFixed(1) + " Bd";
          }
          if (MoneyValue >= 1e18 && MoneyValue < 1e21) {
            return (MoneyValue / 1e18).toFixed(1) + " T";
          }
          if (MoneyValue >= 1e21 && MoneyValue < 1e24) {
            return (MoneyValue / 1e21).toFixed(1) + " Td";
          }
          if (MoneyValue >= 1e24 && MoneyValue < 1e27) {
            return (MoneyValue / 1e24).toFixed(1) + " Q";
          }
          if (MoneyValue >= 1e27 && MoneyValue < 1e30) {
            return (MoneyValue / 1e27).toFixed(1) + " Qd";
          }
          if (MoneyValue >= 1e30 && MoneyValue < 1e33) {
            return (MoneyValue / 1e30).toFixed(1) + " Qn";
          }
          if (MoneyValue >= 1e33 && MoneyValue < 1e36) {
            return (MoneyValue / 1e33).toFixed(1) + " Qnd";
          }
          if (MoneyValue >= 1e36 && MoneyValue < 1e39) {
            return (MoneyValue / 1e36).toFixed(1) + " Sxn";
          }
          if (MoneyValue >= 1e39 && MoneyValue < 1e42) {
            return (MoneyValue / 1e39).toFixed(1) + " Sxd";
          }
          if (MoneyValue >= 1e42 && MoneyValue < 1e45) {
            return (MoneyValue / 1e42).toFixed(1) + " Spn";
          }
          if (MoneyValue >= 1e45 && MoneyValue < 1e48) {
            return (MoneyValue / 1e45).toFixed(1) + " Spd";
          }
          if (MoneyValue >= 1e48 ) {
            return " Очень много бабла чувак…";
          }
  
}
// 2 Experiance - Опыт
export function abbreviateScoreBoard(Experience){
    if (Experience < 1e3) {
        return Experience 
      }
      if (Experience >= 1e3 && Experience < 1e6) {
        return (Experience / 1e3).toFixed(1) + " K"
        // Тут проверяем 100 > ? тогда остается.  Если 1.000 есть и она менее 6 нулей (лям) то К после М
      }
      if (Experience >= 1e6 && Experience < 1e9) {
        return (Experience / 1e6).toFixed(1) + " M";
      }
      if (Experience >= 1e9 && Experience < 1e12) {
        return (Experience / 1e9).toFixed(1) + " Md";
      }
      if (Experience >= 1e12 && Experience < 1e15) {
        return (Experience / 1e12).toFixed(1) + " B";
      }
      if (Experience >= 1e15 && Experience < 1e18) {
        return (Experience / 1e15).toFixed(1) + " Bd";
      }
      if (Experience >= 1e18 && Experience < 1e21) {
        return (Experience / 1e18).toFixed(1) + " T";
      }
      if (Experience >= 1e21 && Experience < 1e24) {
        return (Experience / 1e21).toFixed(1) + " Td";
      }
      if (Experience >= 1e24 && Experience < 1e27) {
        return (Experience / 1e24).toFixed(1) + " Q";
      }
      if (Experience >= 1e27 && Experience < 1e30) {
        return (Experience / 1e27).toFixed(1) + " Qd";
      }
      if (Experience >= 1e30 && Experience < 1e33) {
        return (Experience / 1e30).toFixed(1) + " Qn";
      }
      if (Experience >= 1e33 && Experience < 1e36) {
        return (Experience / 1e33).toFixed(1) + " Qnd";
      }
      if (Experience >= 1e36 && Experience < 1e39) {
        return (Experience / 1e36).toFixed(1) + " Sxn";
      }
      if (Experience >= 1e39 && Experience < 1e42) {
        return (Experience / 1e39).toFixed(1) + " Sxd";
      }
      if (Experience >= 1e42 && Experience < 1e45) {
        return (Experience / 1e42).toFixed(1) + " Spn";
      }
      if (Experience >= 1e45 && Experience < 1e48) {
        return (Experience / 1e45).toFixed(1) + " Spd";
      }
      if (Experience >= 1e48 ) {
        return " Очень много опыта чувак…";
      }
}
//3 Power-Click - Сила-Клика
export function abbreviatePowerClick(PowerClick){
  if (PowerClick < 1e3) {
    return PowerClick 
  }
  if (PowerClick >= 1e3 && PowerClick < 1e6) {
    return (PowerClick / 1e3).toFixed(2) + " K"
    // Тут проверяем 100 > ? тогда остается.  Если 1.000 есть и она менее 6 нулей (лям) то К после М
  }
  if (PowerClick >= 1e6 && PowerClick < 1e9) {
    return (PowerClick / 1e6).toFixed(2) + " M";
  }
  if (Experience >= 1e9 && Experience < 1e12) {
    return (PowerClick / 1e9).toFixed(2) + " Md";
  }
  if (PowerClick >= 1e12 && PowerClick < 1e15) {
    return (PowerClick / 1e12).toFixed(2) + " B";
  }
  if (PowerClick >= 1e15 && PowerClick < 1e18) {
    return (PowerClick / 1e15).toFixed(2) + " Bd";
  }
  if (PowerClick >= 1e18 && PowerClick < 1e21) {
    return (PowerClick / 1e18).toFixed(2) + " T";
  }
  if (PowerClick >= 1e21 && PowerClick < 1e24) {
    return (PowerClick / 1e21).toFixed(2) + " Td";
  }
  if (PowerClick >= 1e24 && PowerClick < 1e27) {
    return (PowerClick / 1e24).toFixed(2) + " Q";
  }
  if (PowerClick >= 1e27 && PowerClick < 1e30) {
    return (PowerClick / 1e27).toFixed(2) + " Qd";
  }
  if (PowerClick >= 1e30 && PowerClick < 1e33) {
    return (PowerClick / 1e30).toFixed(2) + " Qn";
  }
  if (PowerClick >= 1e33 && PowerClick < 1e36) {
    return (PowerClick / 1e33).toFixed(2) + " Qnd";
  }
  if (PowerClick >= 1e36 && PowerClick < 1e39) {
    return (PowerClick / 1e36).toFixed(2) + " Sxn";
  }
  if (PowerClick >= 1e39 && PowerClick < 1e42) {
    return (PowerClick / 1e39).toFixed(2) + " Sxd";
  }
  if (PowerClick >= 1e42 && PowerClick < 1e45) {
    return (PowerClick / 1e42).toFixed(2) + " Spn";
  }
  if (PowerClick >= 1e45 && PowerClick < 1e48) {
    return (PowerClick / 1e45).toFixed(2) + " Spd";
  }
  if (PowerClick >= 1e48 ) {
    return "SuperClick!";
  }
}
//4 Power-Click-Guys - Сила-Клика-Рабочих
function abbreviatePowerWork(PowerWorksGuys) {
}
//5 Price - Цена
//priceClick -> +1
export function abbreviatePriceFirst(PriceClick__lvlFirst){
  if (PriceClick__lvlFirst < 1e3) {
      return PriceClick__lvlFirst 
    }
    if (PriceClick__lvlFirst >= 1e3 && PriceClick__lvlFirst < 1e6) {
      return (PriceClick__lvlFirst / 1e3).toFixed(1) + " K"
    }
    if (PriceClick__lvlFirst >= 1e6 && PriceClick__lvlFirst < 1e9) {
      return (PriceClick__lvlFirst / 1e6).toFixed(1) + " M";
    }
    if (PriceClick__lvlFirst >= 1e9 && PriceClick__lvlFirst < 1e12) {
      return (PriceClick__lvlFirst / 1e9).toFixed(1) + " Md";
    }
    if (PriceClick__lvlFirst >= 1e12 && PriceClick__lvlFirst < 1e15) {
      return (PriceClick__lvlFirst / 1e12).toFixed(1) + " B";
    }
    if (PriceClick__lvlFirst >= 1e15 && PriceClick__lvlFirst < 1e18) {
      return (PriceClick__lvlFirst / 1e15).toFixed(1) + " Bd";
    }
    if (PriceClick__lvlFirst >= 1e18 && PriceClick__lvlFirst < 1e21) {
      return (PriceClick__lvlFirst / 1e18).toFixed(1) + " T";
    }
    if (PriceClick__lvlFirst >= 1e21 && PriceClick__lvlFirst < 1e24) {
      return (PriceClick__lvlFirst / 1e21).toFixed(1) + " Td";
    }
    if (PriceClick__lvlFirst >= 1e24 && PriceClick__lvlFirst < 1e27) {
      return (PriceClick__lvlFirst / 1e24).toFixed(1) + " Q";
    }
    if (PriceClick__lvlFirst >= 1e27 && PriceClick__lvlFirst < 1e30) {
      return (PriceClick__lvlFirst / 1e27).toFixed(1) + " Qd";
    }
    if (PriceClick__lvlFirst >= 1e30 && PriceClick__lvlFirst < 1e33) {
      return (PriceClick__lvlFirst / 1e30).toFixed(1) + " Qn";
    }
    if (PriceClick__lvlFirst >= 1e33 && PriceClick__lvlFirst < 1e36) {
      return (PriceClick__lvlFirst / 1e33).toFixed(1) + " Qnd";
    }
    if (PriceClick__lvlFirst >= 1e36 && PriceClick__lvlFirst < 1e39) {
      return (PriceClick__lvlFirst / 1e36).toFixed(1) + " Sxn";
    }
    if (PriceClick__lvlFirst >= 1e39 && PriceClick__lvlFirst < 1e42) {
      return (MoneyValue / 1e39).toFixed(1) + " Sxd";
    }
    if (PriceClick__lvlFirst >= 1e42 && PriceClick__lvlFirst < 1e45) {
      return (PriceClick__lvlFirst / 1e42).toFixed(1) + " Spn";
    }
    if (PriceClick__lvlFirst >= 1e45 && PriceClick__lvlFirst < 1e48) {
      return (PriceClick__lvlFirst / 1e45).toFixed(1) + " Spd";
    }
    if (PriceClick__lvlFirst >= 1e48 ) {
      return "Over price…";
    }

}
//priceClick -> +10
export function abbreviatePriceTwo(PriceClick__lvlTwo){
  if (PriceClick__lvlTwo < 1e3) {
      return PriceClick__lvlTwo 
    }
    if (PriceClick__lvlTwo >= 1e3 && PriceClick__lvlTwo < 1e6) {
      return (PriceClick__lvlTwo / 1e3).toFixed(1) + " K"
    }
    if (PriceClick__lvlTwo >= 1e6 && PriceClick__lvlTwo < 1e9) {
      return (PriceClick__lvlTwo / 1e6).toFixed(1) + " M";
    }
    if (PriceClick__lvlTwo >= 1e9 && PriceClick__lvlTwo < 1e12) {
      return (PriceClick__lvlTwo / 1e9).toFixed(1) + " Md";
    }
    if (PriceClick__lvlTwo >= 1e12 && PriceClick__lvlTwo < 1e15) {
      return (PriceClick__lvlTwo / 1e12).toFixed(1) + " B";
    }
    if (PriceClick__lvlTwo >= 1e15 && PriceClick__lvlTwo < 1e18) {
      return (PriceClick__lvlTwo / 1e15).toFixed(1) + " Bd";
    }
    if (PriceClick__lvlTwo >= 1e18 && PriceClick__lvlTwo < 1e21) {
      return (PriceClick__lvlTwo / 1e18).toFixed(1) + " T";
    }
    if (PriceClick__lvlTwo >= 1e21 && PriceClick__lvlTwo < 1e24) {
      return (PriceClick__lvlTwo / 1e21).toFixed(1) + " Td";
    }
    if (PriceClick__lvlTwo >= 1e24 && PriceClick__lvlTwo < 1e27) {
      return (PriceClick__lvlTwo / 1e24).toFixed(1) + " Q";
    }
    if (PriceClick__lvlTwo >= 1e27 && PriceClick__lvlTwo < 1e30) {
      return (PriceClick__lvlTwo / 1e27).toFixed(1) + " Qd";
    }
    if (PriceClick__lvlTwo >= 1e30 && PriceClick__lvlTwo < 1e33) {
      return (PriceClick__lvlTwo / 1e30).toFixed(1) + " Qn";
    }
    if (PriceClick__lvlTwo >= 1e33 && PriceClick__lvlTwo < 1e36) {
      return (PriceClick__lvlTwo / 1e33).toFixed(1) + " Qnd";
    }
    if (PriceClick__lvlTwo >= 1e36 && PriceClick__lvlTwo < 1e39) {
      return (PriceClick__lvlTwo / 1e36).toFixed(1) + " Sxn";
    }
    if (PriceClick__lvlTwo >= 1e39 && MoneyValue < 1e42) {
      return (PriceClick__lvlTwo / 1e39).toFixed(1) + " Sxd";
    }
    if (PriceClick__lvlTwo >= 1e42 && MoneyValue < 1e45) {
      return (PriceClick__lvlTwo / 1e42).toFixed(1) + " Spn";
    }
    if (PriceClick__lvlTwo >= 1e45 && PriceClick__lvlTwo < 1e48) {
      return (PriceClick__lvlTwo / 1e45).toFixed(1) + " Spd";
    }
    if (PriceClick__lvlTwo >= 1e48 ) {
      return "Over price…";
    }

}
//priceClick -> +100
export function abbreviatePriceThree(PriceClick__lvlThree){
  if (PriceClick__lvlThree < 1e3) {
      return PriceClick__lvlThree 
    }
    if (PriceClick__lvlThree >= 1e3 && PriceClick__lvlThree < 1e6) {
      return (PriceClick__lvlThree / 1e3).toFixed(1) + " K"
    }
    if (PriceClick__lvlThree >= 1e6 && PriceClick__lvlThree < 1e9) {
      return (PriceClick__lvlThree / 1e6).toFixed(1) + " M";
    }
    if (PriceClick__lvlThree >= 1e9 && PriceClick__lvlThree < 1e12) {
      return (PriceClick__lvlThree / 1e9).toFixed(1) + " Md";
    }
    if (PriceClick__lvlThree >= 1e12 && PriceClick__lvlThree < 1e15) {
      return (PriceClick__lvlThree / 1e12).toFixed(1) + " B";
    }
    if (PriceClick__lvlThree >= 1e15 && PriceClick__lvlThree < 1e18) {
      return (PriceClick__lvlThree / 1e15).toFixed(1) + " Bd";
    }
    if (PriceClick__lvlThree >= 1e18 && PriceClick__lvlThree < 1e21) {
      return (PriceClick__lvlThree / 1e18).toFixed(1) + " T";
    }
    if (PriceClick__lvlThree >= 1e21 && PriceClick__lvlThree < 1e24) {
      return (PriceClick__lvlThree / 1e21).toFixed(1) + " Td";
    }
    if (PriceClick__lvlThree >= 1e24 && PriceClick__lvlThree < 1e27) {
      return (PriceClick__lvlThree / 1e24).toFixed(1) + " Q";
    }
    if (PriceClick__lvlThree >= 1e27 && PriceClick__lvlThree < 1e30) {
      return (PriceClick__lvlThree / 1e27).toFixed(1) + " Qd";
    }
    if (PriceClick__lvlThree >= 1e30 && PriceClick__lvlThree < 1e33) {
      return (PriceClick__lvlThree / 1e30).toFixed(1) + " Qn";
    }
    if (PriceClick__lvlThree >= 1e33 && PriceClick__lvlThree < 1e36) {
      return (PriceClick__lvlThree / 1e33).toFixed(1) + " Qnd";
    }
    if (PriceClick__lvlThree >= 1e36 && PriceClick__lvlThree < 1e39) {
      return (PriceClick__lvlThree / 1e36).toFixed(1) + " Sxn";
    }
    if (PriceClick__lvlThree >= 1e39 && MonePriceClick__lvlThreeyValue < 1e42) {
      return (PriceClick__lvlThree / 1e39).toFixed(1) + " Sxd";
    }
    if (PriceClick__lvlThree >= 1e42 && PriceClick__lvlThree < 1e45) {
      return (PriceClick__lvlThree / 1e42).toFixed(1) + " Spn";
    }
    if (PriceClick__lvlThree >= 1e45 && PriceClick__lvlThree < 1e48) {
      return (PriceClick__lvlThree / 1e45).toFixed(1) + " Spd";
    }
    if (PriceClick__lvlThree >= 1e48 ) {
      return "Over price…";
    }

}
