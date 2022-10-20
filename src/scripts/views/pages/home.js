/* eslint-disable no-undef */
/* eslint-disable no-console */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="content">
    <h3 class="content__heading">Home Page</h3>
    <div id="restaurants" class="restaurants">

    </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homePage();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
