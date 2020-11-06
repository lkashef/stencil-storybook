import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component spec', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component class="my-component">
        Hello, World! I'm <span class="my-component__name"></span>
      </my-component>
    `);
  });

  it('renders with values spec', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component class="my-component" first="Stencil" last="'Don't call me a framework' JS">
        Hello, World! I'm <span class="my-component__name">Stencil 'Don't call me a framework' JS</span>
      </my-component>
    `);
  });
});
