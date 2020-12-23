import { newE2EPage } from '@stencil/core/testing';

describe('z-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<z-text></z-text>');

    const element = await page.find('z-text');
    expect(element).toHaveClass('hydrated');
  });
});
