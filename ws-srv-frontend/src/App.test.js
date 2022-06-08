import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Test header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test/);
  expect(linkElement).toBeInTheDocument();
});

test('check if there is a Toast', () => {
  render(<App />);
  const toastElement = screen.getByLabelText('toast');
  expect(toastElement).toBeInTheDocument();
});

test('check if there is a Chart', () => {
  render(<App />);
  const toastElement = screen.getByLabelText('chart');
  expect(toastElement).toBeInTheDocument();
});

test('renders ID 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/ID 1/);
  expect(linkElement).toBeInTheDocument();
});

test('renders ID 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/ID 2/);
  expect(linkElement).toBeInTheDocument();
});