/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Review from '../client/components/reviewMod/review';
import Helpful from '../client/components/reviewMod/helpful';

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//  test components mounting?

describe('<Helpful />', () => {
// add all test blocks here
  test('renders a Helpful component to the dom', () => {
    const wrapper = shallow(<Helpful />);
    expect(wrapper.find()).to.have.lengthOf(0);
  });
});
