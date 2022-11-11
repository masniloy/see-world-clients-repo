import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Signin from './Pages/Shared/Header/Signin/Signin';
import Signup from './Pages/Shared/Header/Signup/Signup';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Home', element: <Home></Home>
        },
        {
          path: '/Services',
          loader: async () => {
            return fetch('https://b6a11-service-review-server-side-masniloy.vercel.app/Services')
          },
          element: <Services></Services>
        },
        {
          path: '/Blog', element: <Blog></Blog>
        },
        {
          path: '/Signin', element: <Signin></Signin>
        },
        {
          path: '/Signup', element: <Signup></Signup>
        }


      ]

    },

  ])

  return (
    <div data-theme="bumblebee" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
