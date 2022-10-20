/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content__heading');
  I.see('No restaurant list here', '.empty-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurant list here', '.empty-restaurant');

  I.amOnPage('/');
  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantName);
  // … kita akan mengisi uji coba berikutnya …
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');

  I.seeElement('.restaurant-item a');
  const firstLikedRestaurant = locate('.restaurant-item a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.restaurant__name');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/like');
  I.see('No restaurant list here', '.empty-restaurant');
});
