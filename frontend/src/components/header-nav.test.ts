import { render, RenderOptions } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import HeaderNav from './header-nav.vue';

function _renderOptions(routePath: string): RenderOptions {
  return {
    props: {
      routePath,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  };
}

test('renders the header-nav component', () => {
  const { getByLabelText } = render(HeaderNav, _renderOptions('/'));
  expect(getByLabelText('Main menu')).toBeTruthy();
});

test('Ulcerative Dermatitis link is active when current route is /', () => {
  const { getByText } = render(HeaderNav, _renderOptions('/'));
  expect(getByText('Ulcerative Dermatitis').classList).toContainEqual('active');
  expect(getByText('Features').classList).not.toContainEqual('active');
  expect(getByText('About').classList).not.toContainEqual('active');
});

test('Features link is active when current route is /features', () => {
  const { getByText } = render(HeaderNav, _renderOptions('/features'));
  expect(getByText('Ulcerative Dermatitis').classList).not.toContainEqual('active');
  expect(getByText('Features').classList).toContainEqual('active');
  expect(getByText('About').classList).not.toContainEqual('active');
});

test('About link is active when current route is /about', () => {
  const { getByText } = render(HeaderNav, _renderOptions('/about'));
  expect(getByText('Ulcerative Dermatitis').classList).not.toContainEqual('active');
  expect(getByText('Features').classList).not.toContainEqual('active');
  expect(getByText('About').classList).toContainEqual('active');
});
