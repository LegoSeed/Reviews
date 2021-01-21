/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Rating from '../client/components/reviewMod/star_rating';
import StarRatings from '../client/components/reviewMod/star_rating';
import 'regenerator-runtime/runtime';

describe('<Rating />', () => {
// add all test blocks here
  test('renders a Rating component to the dom', async (done) => {
    const wrapper = await shallow(<Rating />);
    expect(wrapper.exists()).toBe(true);
    done();
  });

  test('renders a StarRatings component to the dom', async (done) => {
    const wrapper = await shallow(<StarRatings />);
    expect(wrapper.exists()).toBe(true);
    done();
  });
});
