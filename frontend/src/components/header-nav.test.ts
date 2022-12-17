// Write tests for the header-nav component

import { render } from '@testing-library/vue';
import HeaderNav from './header-nav.vue';

test('renders the header-nav component', () => {
  const { getByText } = render(HeaderNav);

  expect(getByText('Click on the Vite and Vue logos to learn more')).toBeTruthy();
});
