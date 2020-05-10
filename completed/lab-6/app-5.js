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
  return `
    <div class="user-card">
      <div class="photo-row">
        <img src="${photo}" alt="">
      </div>
      <a class="name-row" href="#">${name}</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById('app');

  users.map(({
    firstName,
    lastName,
    photo,
  }) => {
    app.innerHTML += createCard(`${firstName} ${lastName}`, `./images/${photo}`);
  });
});
