class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <menu>
            <div class="weeks">
                <a href="./#week-1">Week 1</a>
                <a href="./#week-2">Week 2</a>
            </div>
            <div class="other">
                <a href="./how-to.html">How Tos</a>
                <a href="./links.html">Links</a>
            </div>
        </menu>
    `;
  }
}

customElements.define('menu-component', Menu);

