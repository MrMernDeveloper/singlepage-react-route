
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './components/Header/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/Products/Friendetails/Frienddetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/postDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home> },
        { path: '/product', element: <Products></Products> },
        {
          path: '/friend',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
        
          element: <Friends></Friends>
        },
        {
          path: '/friend/:id',
          loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          
          element: <Posts></Posts>
        },
        {
          path: 'posts/:id',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          },
          element:<PostDetails></PostDetails>
          
        },
        { path: '/about', element: <About></About> },
    
      ]
    },
   
    { path: '*', element: <div><h1>This route not found 404</h1></div>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
     
    </div>
  );
}

export default App;
