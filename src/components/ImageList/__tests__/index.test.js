import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageList from '..';

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<ImageList category={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ImageList category={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
//   it('renders', () => {
//     const { getByTestId } = render(<ImageList category={portrait} />)
//     expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
//   })
})