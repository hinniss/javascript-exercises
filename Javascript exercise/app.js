// // Part 1: Number Facts
// const addToPage = (data, appendElType, targetEl) => {
//   const newFact = document.createElement(appendElType);
//   newFact.textContent = data;
//   targetEl.append(newFact);
// };

// // Part 1.1
// let baseUrl = "http://numbersapi.com";
// let favNum = 7;
// $.getJSON(`${baseUrl}/${favNum}?json`).then((data) => {
//   console.log(data);
// });

// // Part 1.2
// const multipleFacts = document.querySelector("#multipleFacts");
// let baseUrl2 = "http://numbersapi.com";
// let favNums = [3, 7, 14, 42];
// $.getJSON(`${baseUrl2}/${favNums.join(",")}?json`).then((data) => {
//   for (let [num, fact] of Object.entries(data)) {
//     addToPage(fact, "li", multipleFacts);
//   }
// });

// // Part 1.3
// const factContainer = document.querySelector("#factContainer");
// let baseUrl3 = "http://numbersapi.com";
// let favNum3 = 4;
// const favNumFacts = [];
// for (let i = 0; i < 4; i++) {
//   favNumFacts.push($.getJSON(`${baseUrl3}/${favNum3}?json`));
// }

// Promise.all(favNumFacts).then((facts) => {
//   facts.forEach((fact) => {
//     addToPage(fact.text, "li", factContainer);
//   });
// });

// Part 2: Deck of Cards
// 2.1
// const baseCardUrl = "http://deckofcardsapi.com/api/deck/new/draw/?count=1";
// const getRandCard = $.getJSON(`${baseCardUrl}`).then((data) => {
//   // console.log(data.cards[0]);
//   const value = data.cards[0].value;
//   const suit = data.cards[0].suit;
//   console.log(`${value} of ${suit.toLowerCase()}`);
// });

// 2.2
let firstCard = null;
const baseCardUrl2 = "http://deckofcardsapi.com/api/deck";

$.getJSON(`${baseCardUrl2}/new/draw`)
  .then((data) => {
    firstCard = data.cards[0];
    const deckId = data.deck_id;
    return $.getJSON(`${baseCardUrl2}/${deckId}/draw/?count=1`);
  })
  .then((data) => {
    const secondCard = data.cards[0];
    console.log(`${firstCard.value} of ${firstCard.suit.toLowerCase()}`);
    console.log(`${secondCard.value} of ${secondCard.suit.toLowerCase()}`);
  });