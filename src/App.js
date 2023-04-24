import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {

  const Layout = () =>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/Contact",
          element:<Contact/>,
        },
        {
          //Page de fallback
          path:"*",
          element:fallback(),
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const fallback = () => <Home />; // Fallback Page

export default App;
