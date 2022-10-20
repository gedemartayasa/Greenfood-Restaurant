/* eslint-disable no-unused-vars */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content" id="favorite" tabindex="0">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
          
        </div>
      </div>
      <div class="empty-restaurant">
        <div class="text-center"></div>
        <div class="empty-message">No restaurant list here</div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const element = document.createElement('.empty-restaurant');

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('favorite').focus();
    });
  },
};

export default Like;
