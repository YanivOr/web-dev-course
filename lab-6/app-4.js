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
  app.innerHTML = createCard('Yaniv Or', './images/user-1.png');
});
