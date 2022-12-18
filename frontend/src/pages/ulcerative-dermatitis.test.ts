import { render } from '@testing-library/vue';
import UlcerativeDermatitis from './ulcerative-dermatitis.vue';

test('renders the ulcerative-dermatitis component', () => {
  const { getByText } = render(UlcerativeDermatitis);
  expect(getByText('Score Ulcerative Dermatitis')).toBeTruthy();
});
