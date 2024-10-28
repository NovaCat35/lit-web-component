import "../src/custom-form.ts";
import "../src/custom-button.ts";

export default {
  parameters: {
    layout: "centered",ac
  },
};

export const story1 = () => '<custom-form></custom-form>'; // my magna opus
export const story2 = () => `
  <div style="color: #138ed3; display:flex; flex-direction: column; align-items: center;">
    <h1 style="filter: drop-shadow(2px 2px 3px #f691c5);">Custom Buttons</h1>
    <div style="display:flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
      <custom-button type="alert" text="⚠️ Danger Ahead"></custom-button>
      <custom-button type="success" text="👍 Operation Successful"></custom-button>
      <custom-button type="error" text="😤 Something Went Wrong"></custom-button>
      <custom-button type="info" text="ℹ️ More Info"></custom-button>
    </div>
  </div>
`;
