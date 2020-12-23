import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'z-text',
  styleUrl: 'z-text.css',
  shadow: true,
})
export class ZText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
