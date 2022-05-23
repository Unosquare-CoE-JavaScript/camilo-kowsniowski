import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './components/Greeting'; //se debe importar el componente a testear

describe('Greeting component', () => {
  test('should render hello world  as a text', () => {
    // donde debe buscar
    render(<Greeting />);
    // act

    // lo que debe encontar
    const helloWorldElewment = screen.getByText('hello world');
    // la comparacion
    expect(helloWorldElewment).toBeInTheDocument();
  });

  // test 1
  test('should renders good to seeyou if the button was Not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('should renter change! if the button was clicked', () => {
    // Arrage
    render(<Greeting />);

    // Acct
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert

    const outputElement = screen.getByText('changed!');
    expect(outputElement).toBeInTheDocument();
  });
  // not visible test
  test('check if the paragrahp its good to see you its not visible', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false
    });

    expect(outputElement).not.toBeInTheDocument();
  });
});
