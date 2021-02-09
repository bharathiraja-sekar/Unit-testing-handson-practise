import { html, css, LitElement } from 'lit-element';

export class DashboardMenu extends LitElement {
  static get styles() {
    return css`
      :host {
      }
      .container {
        display: block;
        font-family: sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        background-color: #ccc;
        padding: 2px 16px;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 500px;
        padding: 15px;
        background-color: #ddd;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      img {
        height: 150px;
        width: 250px;
        padding: 20px;
      }
    `;
  }

  static get properties() {
    return {
      imageURL: { type: String },
      title: { type: String },
    };
  }

  render() {
    return html`
      <div class="card">
        <img src=${this.imageURL} alt="loan type" />
        <div class="container">
          <h4><b>${this.title}</b></h4>
        </div>
      </div>
    `;
  }
}
window.customElements.define('dashboard-menu', DashboardMenu);
