import { render } from '@testing-library/vue';
import FileUpload from './file-upload.vue';

test('renders the file-upload component', () => {
  const { getByText } = render(FileUpload);
  expect(getByText('Click to upload')).toBeTruthy();
});
