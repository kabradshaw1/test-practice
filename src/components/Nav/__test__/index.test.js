import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visiable', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelTest } = render(<Nav/>);
    expect(getByLabelTest('camera')).toHaveTextContent('📸');
  });
});

describe('links are visable', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  })
})