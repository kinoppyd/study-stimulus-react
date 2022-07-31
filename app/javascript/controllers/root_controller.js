import { Controller } from "@hotwired/stimulus";
import { render, destroy } from './reactComponent';

// Connects to data-controller="root"
export default class extends Controller {
  connect() {
    const reactRoot = this.targets.find("root");
    const props = {
      onChange: this.onChange.bind(this)
    }
    render(reactRoot, props);
  }

  onChange() {
    console.log("change");
  }

  disconnect() {
    const reactRoot = this.targets.find("root");
    destroy(reactRoot);
  }
}
