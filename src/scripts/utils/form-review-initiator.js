import RestaurantDb from '../data/restaurantdb';

const FormReviewInitiator = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantDb.ReviewRestaurant(dataInput);

  const reviewContainer = document.querySelector('.info-db-reviews');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="info-db-reviews">
        <div class="review">
            <h4>${name}</h4>
            <p>${date}</p>
            <h5>${review}</h5>
        </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default FormReviewInitiator;
