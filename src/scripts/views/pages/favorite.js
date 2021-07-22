/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { favoriteRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="hero">
        <div class="hero_title">
          <h1>Drink, Food &  Enjoy With Your Family</h1>
          <h2>Food tasted better when you eat it your family and friends.</h2>
          <a href="#main-content">Explore Restaurant</a>
        </div>
      </div>
    <div id="main-content" class="container">
        <h2>Your Favorite Restaurant</h2>
          <section id="list" class="content"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list');
    const noDataContainer = document.querySelector('#main-content');

    if (restaurants.length === 0) {
      noDataContainer.innerHTML = `
      <h2>Your Favorite Restaurant</h2>
      <div class="detail-nodb">
          <h1>Please choose your favorite restaurant</h1>
      </div>
     `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += favoriteRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
