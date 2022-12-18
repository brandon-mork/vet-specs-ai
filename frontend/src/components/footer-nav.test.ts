import { render, RenderOptions } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import FooterNav from './footer-nav.vue';

function _renderOptions(): RenderOptions {
  return {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  };
}

test('renders the footer-nav component', () => {
  const { getByText } = render(FooterNav, _renderOptions());
  expect(getByText('© 2023 Vet Specs Inc. All rights reserved.')).toBeTruthy();
});

test('renders a link to the privacy policy', () => {
  const { getByText } = render(FooterNav, _renderOptions());
  expect(getByText('Privacy Policy')).toBeTruthy();
});

test('renders a link to the changelog', () => {
  const { getByText } = render(FooterNav, _renderOptions());
  expect(getByText('Changelog')).toBeTruthy();
});
