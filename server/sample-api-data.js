/* eslint-disable cSpell:disable */

app.get('/reviews', async (req, res) => {
  try {
    const results = await Review.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

const sample = [
  {
    _id: '6001e26cc5b30a24b9327999',
    product_id: 0,
    product_name: 'Prego Ducati',
    username: 'Kayleigh82',
    title: 'Granite',
    review: 'Nostrum voluptate consequuntur voluptatum quo repellat enim sunt praesentium. Ad ut dolorum necessitatibus vel ut sapiente officiis atque. Nesciunt quasi totam magni neque et et ut nemo. Qui enim recusandae magnam. Aliquid eum laboriosam est aperiam dignissimos expedita.',
    rating: 5,
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
  },
  {
    _id: '6001e26cc5b30a24b932799a',
    product_id: 0,
    product_name: 'Prego Ducati',
    username: 'Kian.Koelpin7',
    title: 'ability',
    review: 'Facere magni reiciendis amet quia itaque quaerat tempore. Et veniam voluptates consequatur dolor quia quidem. Voluptas laborum sit praesentium beatae. Vitae doloremque magnam natus blanditiis sit ab. Perspiciatis et voluptatem laudantium est perspiciatis ut consequatur minus voluptatem.',
    rating: 5,
    buy_again: true,
    would_recommend_to_friend: true,
    play_experience: 5,
    difficulty_level: 4,
    value_for_money_: 2,
    helpful_count: 30,
    unhelpful_count: 28,
    createdAt: '2021-01-15T18:43:56.022Z',
    updatedAt: '2021-01-15T18:43:56.022Z',
    __v: 0,
  },
  {
    _id: '6001e26cc5b30a24b932799b',
    product_id: 0,
    product_name: 'Prego Ducati',
    username: 'Emerald48',
    title: 'Shilling',
    review: 'Quia autem sit reiciendis omnis amet est ut fugit et. Asperiores delectus minus aut illum corrupti sit in. Doloribus dolore adipisci eum et qui doloribus quo ex. Voluptas possimus vitae similique aut corporis sint earum perferendis quo. Eveniet aliquid officia perspiciatis aspernatur. Ipsum exercitationem odio.',
    rating: 5,
    buy_again: true,
    would_recommend_to_friend: true,
    play_experience: 5,
    difficulty_level: 4,
    value_for_money_: 0,
    helpful_count: 67,
    unhelpful_count: 21,
    createdAt: '2021-01-15T18:43:56.022Z',
    updatedAt: '2021-01-15T18:43:56.022Z',
    __v: 0,
  },
];
