import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('custom-input')
export class CustomInput extends LitElement {
  @property({ type: String })
  textValue: string = '';

  static styles = css`
    input {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      font-size: 1em;
      padding: 0.5em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.textValue = target.value;
  }

  render() {
    return html`
      <input
        type="text"
        .value="${this.textValue}"
        @input="${this.handleInput}"
        placeholder="Enter text here . . ."
      />
    `;
  }
}

declare global {
   interface HTMLElementTagNameMap {
     "custom-input": CustomInput;
   }
 }