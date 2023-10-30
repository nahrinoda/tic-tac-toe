import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameContainer from './index';
import '@testing-library/jest-dom';

describe('GameContainer Boundary Tests', () => {
  it('does not update activeRow past its boundaries', () => {
    const { getByTestId } = render(<GameContainer />);

    const upButton = getByTestId('up-button');
    const downButton = getByTestId('down-button');

    // Test upper boundary
    fireEvent.click(upButton);
    fireEvent.click(upButton);
    expect(getByTestId('cell-1')).toBeInTheDocument(); // The activeRow should remain 0.

    // Test lower boundary
    fireEvent.click(downButton); // activeRow should now be 1
    fireEvent.click(downButton); // activeRow should now be 2
    fireEvent.click(downButton); // activeRow should remain 2, as it shouldn't go past 2.
    expect(getByTestId('cell-7')).toBeInTheDocument();
  });

  it('does not update activeCol past its boundaries', () => {
    const { getByTestId } = render(<GameContainer />);

    const leftButton = getByTestId('left-button');
    const rightButton = getByTestId('right-button');

    // Test left boundary
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    expect(getByTestId('cell-1')).toBeInTheDocument(); // The activeCol should remain 0.

    // Test right boundary
    fireEvent.click(rightButton); // activeCol should now be 1
    fireEvent.click(rightButton); // activeCol should now be 2
    fireEvent.click(rightButton); // activeCol should remain 2, as it shouldn't go past 2.
    expect(getByTestId('cell-3')).toBeInTheDocument();
  });
});
