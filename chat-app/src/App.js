import './App.css';
import router from './routes';
import {RouterProvider} from "react-router-dom";
import { AuthProvider } from './firebase/server-side';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
