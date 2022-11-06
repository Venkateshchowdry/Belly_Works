import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Home from './pages/Home/Home';
import Profiles from './pages/Profiles/Profiles';
import{
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
  
}from "react-router-dom";

function App( ){
  const currentUser = true;  
    const Layout =() => {
      return(
        <div>
          <NavBar />
          <div style={{display: "flex"}}>
            <LeftBar />
            <Outlet />
            <RightBar />
          </div>
       </div>
    );

  };

  const ProtectedRoute =({children}) => {
    if(!currentUser){
      return <Navigate to="/Login"/>;
  
   }
   return children;
  };

 const router = createBrowserRouter([
  {
     path: "/",
     element:( 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
     ),
     children: [
        {
         path: "/",
         element: <Home/>,
        },
        {
         path: "/profile/:id",
         element: <Profiles/>,
        },
      ]
  },
  {
      path: "/login",
      element: <Login/>,
  },
  {
      path: "/register",
      element: <Register/>,
  },

  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>

  );
}


export default App;
