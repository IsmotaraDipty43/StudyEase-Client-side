import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Signup from "../Authentication/Signup";
import Login from "../Authentication/Login";
import CollegeDetails from "../Component/CollegeDetails";
import CollegeList from "../Pages/CollegeList";
import MyCollege from "../Pages/MyCollege";
import Admission from "../Pages/Admission";
import Private from "./Private";
import ErrorMessage from "../Component/ErrorMessage";
import Profile from "../Component/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<ErrorMessage></ErrorMessage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:'/college/:id',
          element:<Private><CollegeDetails></CollegeDetails></Private>
        },
        {
          path:'/colleges',
          element:<CollegeList></CollegeList>
        },
        {
          path:'/my-college',
          element:<Private><MyCollege></MyCollege></Private>
        },
        {
          path:'/admission',
          element:<Admission></Admission>
        }
      ,
      {
        path:'/profile',
        element:<Profile></Profile>
      }
      ]
 }
       
  
   
  ]);




export default router;