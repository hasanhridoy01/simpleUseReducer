import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main/Main.jsx';
import Reducer from './components/Reducer/Reducer.jsx';
import ReducerTwo from './components/Reducer/ReducerTwo.jsx';
import GetPost from './components/GetPost/GetPost.jsx';

//Create a new router route on this project....................!
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Reducer />
      },
      {
        path: '/reducerTwo',
        element: <ReducerTwo />
      },
      {
        path: '/getPost',
        element: <GetPost />
      }
    ]
  }
]);

//initial router instance...................!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
