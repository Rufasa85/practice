import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const picture =  {
    name: 'Grocery aisle',
    category: 'commercial',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
 src:"null"
  };

afterEach(cleanup)

describe('Modal is rendering', () => {

  it('renders', () => {
    render(<Modal photo={picture} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal photo={picture} />);
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders', () => {
    const { getByTestId } = render(<Modal photo={picture} />)
    expect(getByTestId('closeme')).toHaveTextContent('Close this modal')
  })
})