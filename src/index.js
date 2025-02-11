// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/helper.css';
// import './styles/index.css';
// import './styles/mediaQueries.css';
// import App from './App';
// import List from "./screens/list";
// import ListDetail from "./screens/listDetail";
// import Footer from "./screens/footer";
// import Home from "./screens/home";
// import UploadPdf from "./screens/uploadpdf";
// import ImageUploader from './screens/imageUploader';
// import TestpdfGen from "./screens/testpdfGen";
// import InputDesigntest from "./screens/inputsDesigntest";
// import TestpdfDesign from "./screens/testPdfdesign";
// import Setting from "./screens/setting";
// import Testpage from "./screens/test";
// import SignUp from "./screens/auth/signup";
// import Login from "./screens/auth/login";
// import Requestforagent from "./screens/requestforagent"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AgeCal from "./screens/ageCal";
// import ProtectedRoute from './screens/auth/ProtectedRoute'; // Import the ProtectedRoute
// import Listforagent from "./screens/listforagent"
// import RequesList from "./screens/requestList"
// import Agentrequestdetail from "./screens/requestdetail"
// import ApplicantsVideos from "./screens/applicantsvideos"


// import TestMysql from "./screens/testmysql";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ProtectedRoute element={<Home />} adminOnly={true} />,
//     // element: <Home />,
//     errorElement: <div>404 Not Found</div>
//   },
//   // {
//   //   path: "/a",
//   //   element: <ProtectedRoute element={<App />} adminOnly={true} />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   {
//     path: "/list",
//     element: <ProtectedRoute element={<List />} adminOnly={true} />, // Protect this route
//     // element: <List />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/listforagent",
//     element: <ProtectedRoute element={<Listforagent />} />, // Protect this route
//     // element: <Listforagent />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/list/:listid",
//     element: <ProtectedRoute element={<ListDetail />} /> // Protect this route
//     // element: <ListDetail />
//   },
//   // {
//   //   path: "/uploadpdf",
//   //   element: <ProtectedRoute element={<UploadPdf />} adminOnly={true} /> // Protect this route
//   // },
//   // {
//   //   path: "/imageuploader",
//   //   element: <ProtectedRoute element={<ImageUploader />} adminOnly={true} /> // Protect this route
//   // },
//   // {
//   //   path: '/testpdfgen',
//   //   element: <ProtectedRoute element={<TestpdfGen />} />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   // {
//   //   path: '/inputdesign',
//   //   element: <ProtectedRoute element={<InputDesigntest />} />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   // {
//   //   path: '/age',
//   //   // element: <ProtectedRoute element={<AgeCal />} />,
//   //   element: <AgeCal />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   // {
//   //   path: '/pdf',
//   //   element: <ProtectedRoute element={<TestpdfDesign />} />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   {
//     path: '/setting',
//     element: <ProtectedRoute element={<Setting />} adminOnly={true} />,
//     errorElement: <div>404 Not Found</div>
//   },
//   // {
//   //   path: '/test',
//   //   element: <ProtectedRoute element={<Testpage />} />,
//   //   errorElement: <div>404 Not Found</div>
//   // },
//   {
//     path: '/signup',
//     element: <ProtectedRoute element={<SignUp />} adminOnly={true} />, // Protect signup for admin only
//     // element: <SignUp />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/login',
//     element: <Login />,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/requestforagent',
//     // element: <Requestforagent />,
//     element: <ProtectedRoute element={<Requestforagent />}/>,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/requestlist',
//     // element: <RequesList />,
//     element: <ProtectedRoute element={<RequesList />} adminOnly={true} />,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/agentsrequestdetail/:id',
//     // element: <Agentrequestdetail />,
//     element: <ProtectedRoute element={<Agentrequestdetail />} adminOnly={true} />,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/applicantsvideos',
//     // element: <Agentrequestdetail />,
//     element: <ProtectedRoute element={<ApplicantsVideos />}  />,
//     errorElement: <div>404 Not Found</div>
//   },
//   // {
//   //   path: '/testmysql',
//   //   element: <TestMysql />,
//   //   errorElement: <div>404 Not Found</div>
//   // }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     <Footer /> {/* Render the Footer */}
//   </React.StrictMode>
// );


/////////////////////////////////////////////////////////////////////


import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/helper.css';
import './styles/index.css';
import './styles/mediaQueries.css';
import List from "./screens/list";
import ListDetail from "./screens/listDetail";
import Footer from "./screens/footer";
import Home from "./screens/home";
import Setting from "./screens/setting";
import SignUp from "./screens/auth/signup";
import Login from "./screens/auth/login";
import Requestforagent from "./screens/requestforagent"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './screens/auth/ProtectedRoute'; // Import the ProtectedRoute
import Listforagent from "./screens/listforagent"
import RequesList from "./screens/requestList"
import Agentrequestdetail from "./screens/requestdetail"
import ApplicantsVideos from "./screens/applicantsvideos"
import ReportList from "./screens/reportlist"
import ApplicantsHistory from "./screens/applicantaHistory"


import AgeCal from "./screens/ageCal";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<Home />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },
  
  {
    path: "/list",
    element: <ProtectedRoute element={<List />} adminOnly={true} />, // Protect this route
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/listforagent",
    element: <ProtectedRoute element={<Listforagent />} />, // Protect this route
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/list/:listid",
    element: <ProtectedRoute element={<ListDetail />} /> // Protect this route
  },
  
  {
    path: '/setting',
    element: <ProtectedRoute element={<Setting />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },
  
  {
    path: '/signup',
    element: <ProtectedRoute element={<SignUp />} adminOnly={true} />, 
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: '/requestforagent',
   
    element: <ProtectedRoute element={<Requestforagent />}/>,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: '/requestlist',
    element: <ProtectedRoute element={<RequesList />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: '/agentsrequestdetail/:id',
    element: <ProtectedRoute element={<Agentrequestdetail />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: '/applicantsvideos',
    element: <ProtectedRoute element={<ApplicantsVideos />}  />,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: '/reportlist',
    element: <ProtectedRoute element={<ReportList />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },

  // {
  //       path: '/age',
  //       // element: <ProtectedRoute element={<AgeCal />} />,
  //       element: <AgeCal />,
  //       errorElement: <div>404 Not Found</div>
  //     },


      {
        path: '/applicanthistory',
        element: <ProtectedRoute element={<ApplicantsHistory />} adminOnly={true} />,
        errorElement: <div>404 Not Found</div>
      },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer /> 
  </React.StrictMode>
);