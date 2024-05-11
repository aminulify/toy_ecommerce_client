import { createBrowserRouter } from 'react-router-dom';
import Home from '../Shared/Home/Home';
import Layout from '../Layout/Layout';
import RecommendedViewMore from '../Recommanded_Items/RecommendedViewMore';
import SpecificProducts from '../SpecificProducts/SpecificProducts';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/categories')
        },
        {
          path: "/products/:id",
          element: <SpecificProducts></SpecificProducts>,
          // loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: "/recommended_products",
          element: <RecommendedViewMore></RecommendedViewMore>,
          loader: ()=> fetch('http://localhost:5000/recommanded_products')
        }
      ]
    }
  ]);

export default router;