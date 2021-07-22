/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import UrlParser from '../../routes/url-perser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestaurantDb from '../../data/restaurantdb';
import FormReviewInitiator from '../../utils/form-review-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant"></div>
    <div id="loader" class="loader loading"></div>
    <div class="detail-db">
      <h1>Post Reviews</h1>
        <div class="form-review">
          <form>
              <label class="label-form" for="inputName">Name</label>
              <input type="text" id="inputName">
              <label class="label-form" for="inputReview">Review</label>
              <textarea rows="4" cols="50" name="comment"  id="inputReview">Your comments for this restaurant....</textarea>
              <button class="btn-form" id="submit-review" type="submit">Post Review</button>
          </form>
        </div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const fromReview = document.querySelector('.detail-db');
    const loading = document.querySelector('#loader');

    try {
      const restaurants = await RestaurantDb.DetailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

      loading.style.display = 'none';

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurants.id,
          name: restaurants.name,
          rating: restaurants.rating,
          city: restaurants.city,
          pictureId: restaurants.pictureId,
        },
      });
    } catch (err) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `
      <div class="hero">
        <div class="hero_title">
          <h1>Drink, Food &  Enjoy With Your Family</h1>
          <h2>Food tasted better when you eat it your family and friends.</h2>
          <a href="#main-content">Explore Restaurant</a>
        </div>
      </div>
      <div class="detail-nodb">
          <h1>Sorry Error, Please check your connection or refresh your browser!</h1>
      </div>
     `;
      fromReview.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        FormReviewInitiator(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
