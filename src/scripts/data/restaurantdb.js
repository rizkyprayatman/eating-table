import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDb {
  static async ListRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async DetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async ReviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    return response.json();
  }
}

export default RestaurantDb;
