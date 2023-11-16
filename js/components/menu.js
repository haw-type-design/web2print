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
                <a href="./#week-3">Week 3</a>
                <a href="./#week-4">Week 4</a>
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

