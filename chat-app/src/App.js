import logo from './logo.svg';
import './App.css';
import router from './routes';
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
