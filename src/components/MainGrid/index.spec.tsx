import React from 'react';
import { render } from '@testing-library/react';
import MainGrid from './index';
import '@testing-library/jest-dom';

describe('MainGrid', () => {
  it('should highlight the correct cell based on activeRow and activeCol', () => {
    const { getByTestId } = render(<MainGrid activeRow={0} activeCol={1} />);

    expect(getByTestId('cell-1')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-2')).toHaveClass('bg-pink-300');
    expect(getByTestId('cell-3')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-4')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-5')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-6')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-7')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-8')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-9')).not.toHaveClass('bg-pink-300');
  });

  it('should not highlight any cell when out of grid bounds', () => {
    const { getByTestId } = render(<MainGrid activeRow={3} activeCol={3} />);

    expect(getByTestId('cell-1')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-2')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-3')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-4')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-5')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-6')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-7')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-8')).not.toHaveClass('bg-pink-300');
    expect(getByTestId('cell-9')).not.toHaveClass('bg-pink-300');
  });
});
