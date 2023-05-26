import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Layout/Main.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Blog from './components/Blog.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ChefDetail from './components/ChefDetail.jsx';
import PrivateRoute from './providers/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://the-hungry-chef-server-istiakantu.vercel.app/chefs/')
      },
      {
        path: ':id',
        element: <PrivateRoute>
          <ChefDetail></ChefDetail>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-hungry-chef-server-istiakantu.vercel.app/chefs/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Registration></Registration>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
