import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

test('renders learn react link', () => {
  render(<Provider store={store}><CssBaseline /><App /></Provider>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
