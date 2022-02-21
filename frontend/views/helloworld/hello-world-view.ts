import '@vaadin/button';
import '@vaadin/notification';
import { Notification } from '@vaadin/notification';
import '@vaadin/text-field';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import '@ui5/webcomponents/dist/DatePicker.js';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  @state()
  date = '';

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'flex-col', 'p-m', 'gap-m', 'items-start');
  }

  render() {
    return html`
      <ui5-date-picker @change=${(e: any) => (this.date = e.detail.value)}></ui5-date-picker>
      <span>Selected date: ${this.date}</span>
    `;
  }
}
