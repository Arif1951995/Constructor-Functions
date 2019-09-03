const Car = (model, company, manufacturingDate, color, enginNumber, isElectric, seatCapcity, milage, fuel, numberPlate, owner, speed, price) => {
  return  {
    model,
    company,
    manufacturingDate,
    color,
    enginNumber,
    isElectric,
    seatCapcity,
    milage,
    fuel,
    numberPlate,
    owner,
    speed,
    price,
    wheels: 4,
  }
}
const mobile = (model, screenSize, operatingSystem, ram, isDual, batteryTiming, warrenty, storage, accessories, color, frontCamera, backCamera, madeBy, poweredBy, price) => {
  return {
    model,
    screenSize,
    operatingSystem,
    ram,
    isDual,
    batteryTiming,
    warrenty,
    storage,
    accessories,
    color,
    frontCamera,
    backCamera,
    madeBy,
    poweredBy,
    price

  }


}


const Book = (title, author, publishedAt, totalEditions, pages, publishedBy, price) => {
  return {
    title,
    author,
    publishedAt,
    totalEditions,
    pages,
    publishedBy,
    price
  }
}
