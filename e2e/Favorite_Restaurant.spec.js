/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite_Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#main-content');
  I.see('Please choose your favorite restaurant', '.detail-nodb');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Please choose your favorite restaurant', '.detail-nodb');

  I.amOnPage('/');

  I.seeElement('#list');

  const firstRestaurant = locate('.card h1 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('#list');
  const likedRestaurantTitle = await I.grabTextFrom('.card h1');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Please choose your favorite restaurant', '.detail-nodb');

  I.amOnPage('/');

  I.seeElement('#list');

  const firstRestaurant = locate('.card h1 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  const likedRestaurantTitle = await I.grabTextFrom('.card h1 a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  // mengklik card restaurant yg ada di fav
  const firstFavRestaurant = locate('.card h1 a').first();
  I.click(firstFavRestaurant);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/Favorite');
  I.seeElement('#main-content');
  const noFavRestaurant = await I.grabTextFrom('.detail-nodb h1');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual('Please choose your favorite restaurant', noFavRestaurant);
});
