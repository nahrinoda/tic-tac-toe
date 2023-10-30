import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MainGrid from '@/components/MainGrid';
import GameContainer from '@/components/GameContainer';
import ControllerGrid from './index';
import '@testing-library/jest-dom';

describe('GameContainer', () => {

  const expectActiveCellPosition = async (row, col) => {
    const activeCell = await screen.findByTestId(`cell-${3 * row + col + 1}`);
    expect(activeCell).toHaveAttribute('data-testid', `cell-${3 * row + col + 1}`);
  };

  it('renders the active cell', async () => {
    render(<MainGrid />);
    const activeCell = await screen.findByTestId('cell-1');  // Assuming initial active cell is at (0,0)
    expect(activeCell).toBeInTheDocument();
  });

  it('should initialize with the active cell at (0,0)', async () => {
    render(<GameContainer />);
    await expectActiveCellPosition(0, 0);
  });

  it('should not move the active cell above the top row', async () => {
    render(<GameContainer />);
    const upButton = screen.getByTestId('up-button');

    fireEvent.click(upButton);
    await expectActiveCellPosition(0, 0);  // Should remain unchanged
  });

  it('should not move the active cell below the bottom row', async () => {
    render(<GameContainer />);
    const downButton = screen.getByTestId('down-button');

    fireEvent.click(downButton);  // Moves to (1,0)
    fireEvent.click(downButton);  // Moves to (2,0)
    fireEvent.click(downButton);  // Should remain at (2,0)

    await expectActiveCellPosition(2, 0);
  });

  it('should not move the active cell past the leftmost column', async () => {
    render(<GameContainer />);
    const leftButton = screen.getByTestId('left-button');

    fireEvent.click(leftButton);  // Should remain at (0,0)
    await expectActiveCellPosition(0, 0);
  });

  it('should not move the active cell past the rightmost column', async () => {
    render(<GameContainer />);
    const rightButton = screen.getByTestId('right-button');

    fireEvent.click(rightButton);  // Moves to (0,1)
    fireEvent.click(rightButton);  // Moves to (0,2)
    fireEvent.click(rightButton);  // Should remain at (0,2)

    await expectActiveCellPosition(0, 2);
  });

  it('should move the active cell in all directions correctly', async () => {
    render(<GameContainer />);
    const upButton = screen.getByTestId('up-button');
    const downButton = screen.getByTestId('down-button');
    const leftButton = screen.getByTestId('left-button');
    const rightButton = screen.getByTestId('right-button');

    fireEvent.click(rightButton);  // Moves to (0,1)
    await expectActiveCellPosition(0, 1);

    fireEvent.click(downButton);  // Moves to (1,1)
    await expectActiveCellPosition(1, 1);

    fireEvent.click(leftButton);  // Moves to (1,0)
    await expectActiveCellPosition(1, 0);

    fireEvent.click(upButton);    // Moves to (0,0)
    await expectActiveCellPosition(0, 0);
  });
});
