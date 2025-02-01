// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const ProtectedRoute = ({ element, adminOnly }) => {
//   const location = useLocation(); // Get the current location

//   const checkTokenExpiration = () => {
//     const expirationTime = localStorage.getItem('tokenExpiration');
//     if (expirationTime && new Date().getTime() > expirationTime) {
//       localStorage.removeItem('token'); // Remove token
//       localStorage.removeItem('tokenExpiration'); // Remove expiration
//       localStorage.removeItem("userdata");
//       return false; 
//     }
//     return true; 
//   };

//   const isAuthenticated = checkTokenExpiration();
//   const token = localStorage.getItem('token'); // Get the token
//   let isAdmin = false;

//   if (token) {
//     // Decode the token to check if the user is an admin
//     const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
//     isAdmin = payload.isAdmin || false; // Check if user is admin
//   }

//   // Check for admin access
//   if (adminOnly && !isAdmin) {
//     return <Navigate to="/listforagent" state={{ from: location.pathname }} />; // Redirect non-admins to /listforagent
//   }

//   return isAuthenticated && token ? element : <Navigate to="/login" state={{ from: location.pathname }} />; // Redirect to login with state
// };

// export default ProtectedRoute;


///////////////////////////////////////////////////////////////


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element, adminOnly }) => {
  const location = useLocation(); // Get the current location

  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > expirationTime) {
      localStorage.removeItem('token'); // Remove token
      localStorage.removeItem('tokenExpiration'); // Remove expiration
      localStorage.removeItem("userdata");
      return false; 
    }
    return true; 
  };

  const isAuthenticated = checkTokenExpiration();
  const token = localStorage.getItem('token'); // Get the token
  let isAdmin = false;

  if (token) {
    // Decode the token to check if the user is an admin
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    isAdmin = payload.isAdmin || false; // Check if user is admin
  }

  // Check for admin access
  if (adminOnly && !isAdmin) {
    return <Navigate to="/listforagent" state={{ from: location.pathname }} />; // Redirect non-admins to /listforagent
  }

  // Check if the user is authenticated and allowed to access the requested page
  if (isAuthenticated && token) {
    return element; // Allow access to the requested element
  }

  // If not authenticated, redirect to login with intended path
  return <Navigate to="/login" state={{ from: location.pathname }} />;
};

export default ProtectedRoute;


///////////////////////////////////////////////////////////////


// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const ProtectedRoute = ({ element, adminOnly }) => {
//   const location = useLocation(); // Get the current location

//   const checkTokenExpiration = () => {
//     const expirationTime = localStorage.getItem('tokenExpiration');
//     if (expirationTime && new Date().getTime() > expirationTime) {
//       localStorage.removeItem('token'); // Remove token
//       localStorage.removeItem('tokenExpiration'); // Remove expiration
//       localStorage.removeItem("userdata");
//       return false; 
//     }
//     return true; 
//   };

//   const isAuthenticated = checkTokenExpiration();
//   const token = localStorage.getItem('token'); // Get the token
//   let isAdmin = false;


//   const isAdminfromHeader = () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         try {
//             const payload = JSON.parse(atob(token.split('.')[1]));
//             return payload.isAdmin || false;
//         } catch (error) {
//             console.error("Failed to decode token:", error);
//             return false;
//         }
//     }
//     return false;
// };

//   if (token) {
//     // Decode the token to check if the user is an admin
//     const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
//     isAdmin = payload.isAdmin || false; // Check if user is admin
//   }

//   // Check for admin access
//   if (adminOnly && !isAdmin && !isAdminfromHeader()) {

//     console.log("protecttttttttt pageeee ", isAdmin)
//     return <Navigate to="/listforagent" state={{ from: location.pathname }} />; // Redirect non-admins to /listforagent
//   }

//   // Check if the user is authenticated and allowed to access the requested page
//   if (isAuthenticated && token) {
//     return element; // Allow access to the requested element
//   }

//   // If not authenticated, redirect to login with intended path
//   return <Navigate to="/login" state={{ from: location.pathname }} />;
// };

// export default ProtectedRoute;