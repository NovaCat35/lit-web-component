import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * GOAL: Demonstrate creating different web component buttons with pass in props (utilities)
 */
@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({type: String}) type : 'alert' | 'info' | 'success' | 'error' = 'info';
  @property({type: String}) text : string = 'Hello'

  static styles = css `
    button {  
      cursor: pointer;
      padding: 15px 30px;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 1.05rem;
      transition: ease-in-out all .25s;
    }
    button.info {
      background-color: #54b1d9;
    }
    button.alert {
      background-color: #f22033;
    }
    button.success {
      background-color: #5bc5a5;
    }
    button.error {
      background-color: #d81178;
    }
    button:hover {
      background-color: #1ea0ba;
    }
    button:active {
      background-color: #5bc5a5;
    }

  `
  render() {
    return html`
      <button class=${this.type} @click=${this.handleClick}>${this.text}</button>
    `
  }

  handleClick() {
    alert(`You press the ${this.text} button.`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-button": CustomButton;
  }
}