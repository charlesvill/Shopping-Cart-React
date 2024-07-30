import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar/navbar.jsx';

describe("Navbar component", () => {
  it("renders NavBar", () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

});

