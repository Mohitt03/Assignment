import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Add from "./components/addBook/Add";
import Book from './components/getBook/book';
import Edit from './components/updateBook/edit';
import Home from "./components/MainPage/Home";

function App() {
  const route=createBrowserRouter([
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/",
      element:<Home/>
    },  
    {
      path:"/admin",
      element:<Book/>
    },
    {
      path:"/edit/:id",
      element:<Edit/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
