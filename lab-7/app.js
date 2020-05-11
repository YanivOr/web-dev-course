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
  const userCard = document.createElement('user-card-component');
  userCard.setAttribute('name', name);
  userCard.setAttribute('photo', photo);
  app.appendChild(userCard);
};

document.addEventListener("DOMContentLoaded", () => {
  users.map(({
    firstName,
    lastName,
    photo
  }) => {
    createCard(`${firstName} ${lastName}`, `./images/${photo}`);
  });
});