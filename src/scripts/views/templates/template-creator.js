/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
    <div class="img-db">
        <img class="img-restaurant" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
        <div class="tittle-name">
            <h1>Restaurant</h1>
            <h2>${restaurants.name}</h2>
        </div>
    </div>
    <div class="detail-db">
    <h1>Information</h1>
      <div class="info-db">
        <div class="info-restaurant">
          <img src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurants.pictureId}" alt="${restaurants.name}" />
          <h3><span>Rating : ${restaurants.rating} <i class="fa fa-star"></i></span><h3>
        </div>
        <div class="info-restaurant">
          <h2>${restaurants.name}</h2>
          <h4>Lokasi : ${restaurants.city}</h4>
          <h4>Alamat : ${restaurants.address}</h4>
          <h4>Kategori : ${restaurants.categories.map((category) => category.name)}</h4>
          <h4>Description :</h4>
          <p>${restaurants.description}</p>
        </div>
      </div>
      <h1>Menu</h1>
      <div class="info-db-menu">
        <div class="info-menu">
          <h3>Foods Menu</h3>
          <ul>${restaurants.menus.foods.map((food) => `
            <li>${food.name}</li>
          `).join('')}</ul>
        </div>
        <div class="info-menu">
          <h3>Drinks Menu</h3>
          <ul>${restaurants.menus.drinks.map((drink) => `
            <li>${drink.name}</li>
          `).join('')}</ul>
        </div>
      </div>
      <h1>Customer Reviews</h1>
      <div class="info-db-reviews">
          ${restaurants.customerReviews.map((review) => `
          <div class="review">
          <h4>${review.name}</h4>
          <p>${review.date}</p>
          <h5>${review.review}</h5>
          </div>
          `).join('')}
      </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="card ${restaurants.Id}" id="mainContent">
        <div class="city">${restaurants.city}</div>
            <div class="img-tumb">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}"/>
        </div>
        <div class="details">
            <span class="rating">Rating : ${restaurants.rating} <i class="fa fa-star"></i></span>
            <h1><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h1>
            <p>${restaurants.description.slice(0, 150)}...</p>
        </div>
    </div>
`;

const favoriteRestaurantItemTemplate = (restaurants) => `
    <div class="card ${restaurants.Id}" id="mainContent">
        <div class="city">${restaurants.city}</div>
            <div class="img-tumb">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}"/>
        </div>
        <div class="details">
            <span class="rating">Rating : ${restaurants.rating} <i class="fa fa-star"></i></span>
            <h1><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h1>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  favoriteRestaurantItemTemplate,
};
