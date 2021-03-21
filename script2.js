function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data.motivation.length)
        var index = getRandomInt(0,data.motivation.length)
        console.log(data.motivation[index])
        document.querySelector("#quote-text").innerHTML = data.motivation[index].quote;
        document.querySelector("#author-text").innerHTML = data.motivation[index].author;
      })
