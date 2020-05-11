const createCard = (name, image) => {

  const app = document.getElementById('app');

  // create
  const userCard = document.createElement('div');
  const photoRow = document.createElement('div');
  const photoImage = document.createElement('img');
  const nameRow = document.createElement('a');
  const nameText = document.createTextNode(name);

  // append
  app.appendChild(userCard);
  userCard.appendChild(photoRow);
  userCard.appendChild(nameRow);
  photoRow.appendChild(photoImage);
  nameRow.appendChild(nameText);

  // class
  userCard.classList.add('user-card');
  photoRow.classList.add('photo-row');
  nameRow.classList.add('name-row');

  // attributes
  photoImage.setAttribute('src', image);
  nameRow.setAttribute('href', '#');
}

document.addEventListener("DOMContentLoaded", () => {
  createCard('Yaniv Or', './images/user-1.png');
});
