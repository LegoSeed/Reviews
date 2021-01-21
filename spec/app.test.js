 /**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
/* eslint-disable cSpell:disable */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Experience from '../client/components/reviewMod/experience';
import Review from '../client/components/reviewMod/review';
import 'regenerator-runtime/runtime';

const flushPromises = () => new Promise(setImmediate);

const mockData = {
  data: [{
    _id: '6001e26cc5b30a24b9327999',
    product_id: 4,
    product_name: 'Prego Ducati',
    username: 'Kayleigh82',
    title: 'Granite',
    review: 'Nostrum voluptate consequuntur voluptatum quo repellat enim sunt praesentium. Ad ut dolorum necessitatibus vel ut sapiente officiis atque. Nesciunt quasi totam magni neque et et ut nemo. Qui enim recusandae magnam. Aliquid eum laboriosam est aperiam dignissimos expedita.',
    rating: 3,
    buy_again: false,
    would_recommend_to_friend: false,
    play_experience: 5,
    difficulty_level: 4,
    value_for_money_: 0,
    helpful_count: 86,
    unhelpful_count: 83,
    createdAt: '2021-01-15T18:43:56.022Z',
    updatedAt: '2021-01-15T18:43:56.022Z',
    __v: 0,
  }],
};

jest.useFakeTimers();
describe('Review component', () => {
  test('renders Review component', async (done) => {
    /* eslint-disable-next-line react/jsx-filename-extension */
    const wrapper = mount(<Review reviews={mockData} />);

    await flushPromises();
    wrapper.update();
    expect(wrapper.exists()).toBe(true);
    done();
  });
});
