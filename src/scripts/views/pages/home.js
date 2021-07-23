import RestaurantDb from '../../data/restaurantdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
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
        <h2>Explore Rastaurant</h2>
        <div id="loader" class="loader loading"></div>
        <div id="offline"></div>
          <section id="list" class="content"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.ListRestaurant();
    const restaurantContainer = document.querySelector('#list');
    const offlineCondition = document.querySelector('#offline');
    const condition = navigator.onLine;
    const loading = document.querySelector('#loader');

    if (condition === false) {
      offlineCondition.innerHTML = `
        <div class="detail-nodb">
          <h3>Your Connection Offline</h3>
          <p>This Mode Offline</p>
        </div>
     `;
    }
    restaurants.forEach((restaurant) => {
      loading.style.display = 'none';
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
