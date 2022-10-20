/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable space-infix-ops */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <p>${fetchFoods(restaurant.menus.foods)}</p>
    <h4>Menu Minuman</h4>
    <p>${fetchDrinks(restaurant.menus.drinks)}</p>
    <h4>Customer Reviews</h4>
    <p>${fetchCustomerReviews(restaurant.customerReviews)}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
  </div>
  
`;

const fetchCustomerReviews = (reviews) => {
  let list = '';
  reviews.forEach((review) => {
    list += `
    <div>
      <p><b>${review.name}</b></p>
      <p>${review.date}</p>
      <small>${review.review}</small>
    </div>`;
  });
  return list;
};

const fetchFoods = (foods) => {
  let list = '';
  foods.forEach((food) => {
    list += `
    <div>
      <p><b>${food.name}</b></p>
    </div>`;
  });
  return list;
};

const fetchDrinks = (drinks) => {
  let list = '';
  drinks.forEach((drink) => {
    list += `
    <div>
      <p><b>${drink.name}</b></p>
    </div>`;
  });
  return list;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload" class="restaurant-item__header__picture" alt="${restaurant.name}"
        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant-name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
