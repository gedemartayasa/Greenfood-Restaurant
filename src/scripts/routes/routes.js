import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
