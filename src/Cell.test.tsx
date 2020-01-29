import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Cell';

test('should render cell with "live" class', () => {
  const { container } = render(<Cell i={true}/>);
  expect(container.firstChild).toHaveClass('live')
});

test('should render cell without "live" class if "i" property set to "false"', () => {
   const { container } = render(<Cell i={false}/>);
   expect(container.firstChild).not.toHaveClass('live')
});