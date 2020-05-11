const users = [
  {
    firstName: 'Yaron',
    lastName: 'Katz',
    photo: 'user-1.png',
  },
  {
    firstName: 'Sharon',
    lastName: 'Gruner',
    photo: 'user-2.png',
  },
  {
    firstName: 'Eyal',
    lastName: 'Cohen',
    photo: 'user-3.png',
  },
  {
    firstName: 'Tali',
    lastName: 'Levi',
    photo: 'user-4.png',
  },
];

const createCard = (name, photo) => {

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
  photoImage.setAttribute('src', photo);
  nameRow.setAttribute('href', '#');
}

document.addEventListener("DOMContentLoaded", () => {
  users.map(({
    firstName,
    lastName,
    photo
  }) => {
    createCard(`${firstName} ${lastName}`, `./images/${photo}`);
  });
});
