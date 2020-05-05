const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 280px;
      background: #eeeeee;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 3px 3px 5px 0px rgba(130,130,130,0.75);
    }
    
    .photo-row {
      margin: 15px 0px;
    }
    
    .photo-row img {
      border-radius: 50%;
    }
    
    .name-row {
      margin: 5px 0px;
      color: #333333;
      font-size: 20px;
      text-decoration: none;
    }
    
    .name-row:hover {
      text-decoration: underline;
    }
  </style>

  <div class="photo-row">
    <img src="" alt="">
  </div>
  <a class="name-row" href="#"></a>
`;


class UserCardComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.nameRow = this._shadowRoot.querySelector('.name-row');
    this.photoRow = this._shadowRoot.querySelector('.photo-row img');
  }

  static get observedAttributes() {
    return ['name', 'photo'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'name':
        this.nameRow.innerHTML = newVal;
        break;
      case 'photo':
        this.photoRow.setAttribute('src', newVal);
        break;
    }
  }
}

window.customElements.define('user-card-component', UserCardComponent);
