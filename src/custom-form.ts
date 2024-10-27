import {LitElement, html, css} from 'lit';
import {customElement, state, property, query} from 'lit/decorators.js';

/**
 * GOAL: Utlizing web component for great functionality (this is my magna opus...of this demo)
 * Note to self: LitElement already uses shadow DOM by default.
 * Note to self: Form info https://github.com/lit/lit/discussions/2489
 */

@customElement('custom-form')
export class CustomForm extends LitElement {
  @property()
  showText: boolean = false;

  @property()
  showCompanionMessage: boolean = false;

  @state()
  private user = { fname: '', lname: '', companion: '' };

  static styles = css`
    .greeting {
      background: #1ea0ba;
      color: white;
      padding: 10px 30px;
      border-radius: 6px;
      text-align: center;
      margin-bottom: 20px;
    }
    .greeting-intro {
      font-weight: 600;
      font-size: 1.1rem;
      font-family: "Lucida Console", "Courier New", monospace;
    }
    .greeting-companion{
      padding: 5px 10px;
      background: #083c69;
      border-radius: 3px;
    }
    button {  
      cursor: pointer;
      padding: 15px 30px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
      font-size: 1.05rem;
      transition: ease-in-out all .25s;
    }
    button:hover {
      background-color: #1ea0ba;
    }
    button:active {
      background-color: #1eba42;
    }

    div[disabled] {
      color: #ececec;
      background-color: #a5adba;
    }
    div[disabled] .greeting-intro {
      text-decoration: line-through;
    }
    div[disabled] .greeting-companion {
      background-color: #d81178;
      font-weight: bold;
    }

    p[hidden] {
      display: none;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
    }
    form {
      gap: 5px;
    }
    label{
      color: #4a5366;
    }
    .input-container {
      margin-bottom: 5px;
    }
    input, select {
      padding: 8px 10px;
      border-radius: 5px;
      border: 1.5px solid #3f4e62;
    }
    .form-btns-container {
      margin-top: 15px;
    }
    span.required {
      color: #f22033;
    }
  `

  render() {
    return html`
      <div class='greeting' ?disabled=${this.showText}>
        <p class='greeting-intro'>Hello, ${this.user.fname == "" && this.user.lname == "" ? 'World' : `${this.user.fname} ${this.user.lname}`}!</p>
        ${this.user.companion !== '' ? html`<p class='greeting-companion'>${this.showCompanionMessage ? `${this.user.companion} CHOOSES YOU!` : `I CHOOSE YOU . . . ${this.user.companion} !!`}</p>` : ''}
      </div>

      <form class="flex-column" @submit=${this.handleSubmit}>
        <div class='input-container flex-column'>
          <label for='fname'>First Name<span class='required'> *</span></label>
          <input id="fname" type='text' placeholder="Ash"required/>
        </div>
        <div class='input-container flex-column'>
          <label for='fname'>Last Name<span class='required'> *</span></label>
          <input id="lname" type='text' placeholder="Ketchum" required/>
        </div>
        <div class='opt-container flex-column'>
          <label for='companion'>Pick a companion</label>
          <select id='companion'>
            <option value="" selected disabled hidden>Choose here</option>
            <option value='PIKACHU ⚡️'>Pikachu</option>
            <option value='SQUIRTLE 🌊'>Squirtle</option>
            <option value='CHARMANDER 🔥🔥'>Charmander</option>
            <option value='BULBASAUR 🌱🌺'>Bulbasaur</option>
          </select>
        </div>
        <div class='form-btns-container'>
          <button type="submit">Submit</button>
          <input id='greeting-checkbox' type="checkbox" @click=${this.toggleText}>Click Me</>
        </div>
      </form>
    `;
  }

  toggleText() {
    this.showText = !this.showText;
    this.showCompanionMessage = !this.showCompanionMessage; // Changes the companion greeting text when checkbox toggled
  }

  @query('#fname')
    inputFname!: HTMLInputElement;
  @query('#lname')
    inputLname!: HTMLInputElement;
  @query('#companion')
    selectedCompanion!: HTMLSelectElement;

  handleSubmit(e: Event) {
    e.preventDefault();
    this.user = {
      fname: this.inputFname.value,
      lname: this.inputLname.value,
      companion: this.selectedCompanion.value,
    };
  }
}

export default CustomForm;