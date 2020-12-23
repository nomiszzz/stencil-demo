import { newSpecPage } from '@stencil/core/testing';
import { ZText } from '../z-text';

describe('z-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZText],
      html: `<z-text></z-text>`,
    });
    expect(page.root).toEqualHtml(`
      <z-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-text>
    `);
  });
});
