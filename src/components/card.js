import axios from "axios";

//const entryPoint = document.querySelector(".cards-container");

 const Card = (article) => {
  const mainCard = document.createElement("div");
  const cardHead = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const imageBox = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardName = document.createElement("span");

  // mainCard.appendChild(cardHead);
  // mainCard.appendChild(cardAuthor);
  // cardAuthor.appendChild(imageBox);
  // imageBox.appendChild(cardImage);
  // cardAuthor.appendChild(cardName);

  mainCard.classList.add("card");
  cardHead.classList.add("headline");
  cardAuthor.classList.add("author");
  imageBox.classList.add("img-container");

  cardHead.textContent = article.headline;
  cardImage.src = article.authorPhoto;
  cardAuthor.textContent = `By ${article.authorName}`;

  mainCard.appendChild(cardHead);
  mainCard.appendChild(cardAuthor);
  cardAuthor.appendChild(imageBox);
  imageBox.appendChild(cardImage);
  cardAuthor.appendChild(cardName);

  mainCard.addEventListener('click', () => {
    console.log(article.headline);
  })
  return mainCard;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}


const cardAppender = (selector) => {
  const url = `http://localhost:5000/api/articles/`;
  axios.get(url)
  .then (resp => {
    console.log("data",resp.data.articles)
    const article = resp.data.articles
    //const newCard = Card(resp.data);
    // for(selector in article) {
    //   article[selector].forEach(data => {
    //     const newCard = Card(data);
    //     mainCard.appendChild(newCard)
    //     console.log(newCard);
    //   })
    // }

    entryPoint.appendChild(newCard);
  })
  .catch(error => {
    const errorText = document.createElement = document.createElement('p');
    errorText.textContent = "There is an error!";
    entryPoint.appendChild(errorText)
  });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
