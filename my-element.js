/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      button {
        background: deeppink;
        border-radius: .25rem;
        padding-inline: 1rem;
        padding-block: .5rem;
        font-size: 1rem;
        font-family: sans-serif;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
      arrProp: {type: Array}
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
    this.arrProp = []
  }

  render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <div>
        ${this.arrProp.map(it => html`<p>${it}</p>`)}
      </div>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('my-element', MyElement);
