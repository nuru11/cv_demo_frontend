// import React, { useState, useEffect } from 'react';
// import Inputs from "../Components/Inputs/Inputs"

// const AgeCalculator = () => {
//   const [dob, setDob] = useState('');
//   const [age, setAge] = useState('');

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       return age - 1;
//     }
//     return age;
//   };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Age Calculator</h2>
//       <form>
//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <Inputs
//             type="date"
//             id="dob"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <Inputs
//             type="number"
//             id="age"
//             value={age}
//             readOnly
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgeCalculator;



///////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

// const AgeCalculator = () => {
//     const [dob, setDob] = useState('');
//     const [age, setAge] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [styles, setStyles] = useState({
//         styleOne: false,
//         styleTwo: false,
//         styleThree: false,
//         all: false,
//     });
//     const [dateOfIssue, setDateOfIssue] = useState('');
//     const [dateOfExpiry, setDateOfExpiry] = useState('');
//     const [expiryError, setExpiryError] = useState('');

//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();

//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age -= 1;
//         }
//         return age;
//     };

//     useEffect(() => {
//         if (dob) {
//             const calculatedAge = calculateAge(dob);
//             setAge(calculatedAge);

//             // Set error message if age is less than 19
//             if (calculatedAge < 19) {
//                 setErrorMessage('Applicant age should be more than 19');
//             } else {
//                 setErrorMessage(''); // Clear error message if age is valid
//             }
//         } else {
//             setAge('');
//             setErrorMessage(''); // Clear error message if no DOB is entered
//         }
//     }, [dob]);

//     useEffect(() => {
//         // Automatically set Date of Expiry to 5 years after Date of Issue
//         if (dateOfIssue) {
//             const issueDate = new Date(dateOfIssue);
//             const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
//             setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

//             // Check if expiry date has passed
//             if (expiryDate < new Date()) {
//                 setExpiryError('The expiry date has passed.');
//             } else {
//                 setExpiryError(''); // Clear error if valid
//             }
//         } else {
//             setDateOfExpiry('');
//             setExpiryError(''); // Clear error if no issue date is entered
//         }
//     }, [dateOfIssue]);

//     const handleStyleChange = (event) => {
//         const { name, checked } = event.target;

//         // If "All" checkbox is checked, set all styles to true
//         if (name === 'all') {
//             setStyles({
//                 styleOne: checked,
//                 styleTwo: checked,
//                 styleThree: checked,
//                 all: checked,
//             });
//         } else {
//             // If any style is unchecked, uncheck "All"
//             if (checked) {
//                 setStyles((prev) => ({ ...prev, [name]: checked }));
//             } else {
//                 setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
//             }
//         }
//     };

//     return (
//         <Container maxWidth="xs">
//             <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
//                 <Typography variant="h5" component="h2" align="center" gutterBottom>
//                     Age Calculator
//                 </Typography>
//                 <Grid container spacing={2} alignItems="center">
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Birth"
//                             type="date"
//                             fullWidth
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Age"
//                             type="number"
//                             fullWidth
//                             value={age}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Error Message */}
//                 {errorMessage && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {errorMessage}
//                     </Typography>
//                 )}

//                 {/* Date of Issue and Date of Expiry */}
//                 <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Issue"
//                             type="date"
//                             fullWidth
//                             value={dateOfIssue}
//                             onChange={(e) => setDateOfIssue(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Expiry"
//                             type="date"
//                             fullWidth
//                             value={dateOfExpiry}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Expiry Error Message */}
//                 {expiryError && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {expiryError}
//                     </Typography>
//                 )}

//                 {/* Checkboxes Section */}
//                 <Box sx={{ mt: 4 }}>
//                     <Typography variant="h6" gutterBottom>
//                         Select Styles
//                     </Typography>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.all}
//                                 onChange={handleStyleChange}
//                                 name="all"
//                             />
//                         }
//                         label="All"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleOne}
//                                 onChange={handleStyleChange}
//                                 name="styleOne"
//                             />
//                         }
//                         label="Style One"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleTwo}
//                                 onChange={handleStyleChange}
//                                 name="styleTwo"
//                             />
//                         }
//                         label="Style Two"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleThree}
//                                 onChange={handleStyleChange}
//                                 name="styleThree"
//                             />
//                         }
//                         label="Style Three"
//                     />
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default AgeCalculator;


//////////////////////////

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//     const [applicantImage, setApplicantImage] = useState(null);
//     const [applicantallImage, setApplicantallImage] = useState(null);
    
//     const [applicantpassportImage, setApplicantpassportImage] = useState(null);
//     const [applicantallpassportImage, setApplicantallpassportImage] = useState(null);
    
//     const [fullBodyImage, setFullBodyImage] = useState(null);
//     const [fullBodyallImage, setFullBodyallImage] = useState(null);
    
//     const [age, setAge] = useState('');
//     const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' }); // Example personal info
//     const applicantFileInputRef = useRef(null);
//     const passportFileInputRef = useRef(null);
//     const fullBodyFileInputRef = useRef(null);

//     const applicantssubmitImage = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
        
//         // Append images and personal info
//         formData.append("applicantimage", applicantImage);
//         formData.append("passportimage", applicantpassportImage);
//         formData.append("fullbodyimage", fullBodyImage);
//         formData.append("name", "personalInfo.name");
//         formData.append("age", 22);
        
//         const result = await axios.post(
//             "http://localhost:4000/applicantupload-image",
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );

//         // Reset state after submission
//         setApplicantImage(null);
//         setApplicantpassportImage(null);
//         setFullBodyImage(null);
//         setAge('');
//     };

//     const applicantonInputChange = (setImage) => (e) => {
//         const selectedFile = e.target.files[0];
//         setImage(selectedFile);
//     };

//     const applicantgetImage = async () => {
//         const result = await axios.get("http://localhost:4000/applicantget-image");
//         setApplicantallImage(result.data.data);
//     };

//     return (
//         <div className="image-upload">
//             <form onSubmit={applicantssubmitImage} className="file-upload-form">
//                 {/* Applicant Image Upload */}
//                 <label>
//                     <span>Applicant Personal Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantImage)}
//                         style={{ display: "none" }}
//                         ref={applicantFileInputRef}
//                     />
//                     <button type="button" onClick={() => applicantFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Passport Image Upload */}
//                 <label>
//                     <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantpassportImage)}
//                         style={{ display: "none" }}
//                         ref={passportFileInputRef}
//                     />
//                     <button type="button" onClick={() => passportFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Full Body Image Upload */}
//                 <label>
//                     <span>Full Body Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setFullBodyImage)}
//                         style={{ display: "none" }}
//                         ref={fullBodyFileInputRef}
//                     />
//                     <button type="button" onClick={() => fullBodyFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Age Input */}
//                 <label>
//                     <span>Age <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="number"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                         min="18"
//                         required
//                     />
//                 </label>

//                 <button type="submit">Submit</button>
//             </form>

//             {/* Image Preview (optional) */}
//             {applicantallImage && applicantallImage.length > 0 && (
//                 <div className="image-preview">
//                     <h4>Uploaded Images:</h4>
//                     {applicantallImage.map((image, index) => (
//                         <img
//                             key={index}
//                             className="input-personal-image"
//                             alt="Uploaded"
//                             src={`./applicantimage/${image.applicantImage}`} // Adjust path as necessary
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default YourComponent;



//////////////////////////////////


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);

//   const [image2, setImage2] = useState(null);
//   const [allImage2, setAllImage2] = useState(null);

 

//   useEffect(() => {
//     getImages(); // Fetch images when the component mounts
//   }, []);


//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/tget-images");
//       setAllImage(result.data.data); // Assuming your API returns an array of images
//     } catch (error) {
//       console.error(error);
//     }
//   };
// //   const submitImage = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("image", image);
// //     // formData.append("image2", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

// //   const submitImage2 = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     // formData.append("image", image);
// //     formData.append("imaget", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const onInputChange2 = (e) => {
//     console.log(e.target.files[0]);
//     setImage2(e.target.files[0]);
//   };

// //   const getImage = async () => {
// //     const result = await axios.get("http://localhost:4000/tget-image");
// //     console.log(result);
// //     setAllImage(result.data.data);
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={submitImage}>
// //         <input type="file" accept="image/*" onChange={onInputChange}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimagetest/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}

// // <form onSubmit={submitImage2}>
// //         <input type="file" accept="image/*" onChange={onInputChange2}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimgtwo/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}
// //     </div>
// //   );

// const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image) formData.append("image", image);
//     if (image2) formData.append("imaget", image2);
  
//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       // Handle successful upload...
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   return (
//     <div>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         <button type="submit">Submit</button>
//       </form>
//       {/* {allImage && allImage.map((data) => (
//         <img key={data.image} src={`http://localhost:4000/images/${data.image}`} height={100} width={100} alt="uploaded" />
//       ))} */}

// {/* {allImage == null
//         ? ""
//         : allImage.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })} */}




//     </div>
//   );
// }
// export default App;



/////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [allimages, setallImages] = useState([]);
//   const [formData, setFormData] = useState({
//     image: null,
//     image2: null,
//     name: "",
//     surname: "",
//     placeofbirth: "",
//     passportnum: "",
//     nationality: "",
//     martialstatus: "",
//     numberofchildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationattainment: "",
//     postappliedfor: "",
//     contractperiod: "",
//     arabicdegree: "",
//     englishdegree: "",
//     ownphonenum: "",
//     contactphonenum: "",
//     dateofbirth: "",
//     age: "",
//     dateofissue: "",
//     expireddate: "",
//     country: "",
//     position: "",
//     period: "",
//     babysitting: false,
//     cleaning: false,
//     washing: false,
//     cooking: false,
//     eldercare: false,
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: "",
//   });

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     if (formData.image) data.append("image", formData.image);
//     if (formData.image2) data.append("imaget", formData.image2);
//     Object.keys(formData).forEach((key) => {
//       if (key !== "image" && key !== "image2") {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />
//         <input type="text" name="placeofbirth" placeholder="Place of Birth" value={formData.placeofbirth} onChange={handleChange} />
//         <input type="text" name="passportnum" placeholder="Passport Number" value={formData.passportnum} onChange={handleChange} />
//         <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
//         <input type="text" name="martialstatus" placeholder="Marital Status" value={formData.martialstatus} onChange={handleChange} />
//         <input type="number" name="numberofchildren" placeholder="Number of Children" value={formData.numberofchildren} onChange={handleChange} />
//         <input type="text" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />
//         <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
//         <input type="number" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
//         <input type="text" name="educationattainment" placeholder="Education Attainment" value={formData.educationattainment} onChange={handleChange} />
//         <input type="text" name="postappliedfor" placeholder="Post Applied For" value={formData.postappliedfor} onChange={handleChange} />
//         <input type="text" name="contractperiod" placeholder="Contract Period" value={formData.contractperiod} onChange={handleChange} />
//         <input type="text" name="arabicdegree" placeholder="Arabic Degree" value={formData.arabicdegree} onChange={handleChange} />
//         <input type="text" name="englishdegree" placeholder="English Degree" value={formData.englishdegree} onChange={handleChange} />
//         <input type="text" name="ownphonenum" placeholder="Own Phone Number" value={formData.ownphonenum} onChange={handleChange} />
//         <input type="text" name="contactphonenum" placeholder="Contact Phone Number" value={formData.contactphonenum} onChange={handleChange} />
//         <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
//         <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
//         <input type="date" name="dateofissue" value={formData.dateofissue} onChange={handleChange} />
//         <input type="date" name="expireddate" value={formData.expireddate} onChange={handleChange} />
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
//         <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
//         <input type="text" name="period" placeholder="Period" value={formData.period} onChange={handleChange} />
        
//         {/* Checkboxes for additional services */}
//         <label>
//           Babysitting:
//           <input type="checkbox" name="babysitting" checked={formData.babysitting} onChange={handleChange} />
//         </label>
//         <label>
//           Cleaning:
//           <input type="checkbox" name="cleaning" checked={formData.cleaning} onChange={handleChange} />
//         </label>
//         <label>
//           Washing:
//           <input type="checkbox" name="washing" checked={formData.washing} onChange={handleChange} />
//         </label>
//         <label>
//           Cooking:
//           <input type="checkbox" name="cooking" checked={formData.cooking} onChange={handleChange} />
//         </label>
//         <label>
//           Eldercare:
//           <input type="checkbox" name="eldercare" checked={formData.eldercare} onChange={handleChange} />
//         </label>

//         <input type="number" name="monthlysalarySaudi" placeholder="Monthly Salary (Saudi)" value={formData.monthlysalarySaudi} onChange={handleChange} />
//         <input type="number" name="monthlysalaryJordan" placeholder="Monthly Salary (Jordan)" value={formData.monthlysalaryJordan} onChange={handleChange} />

//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image2: e.target.files[0] })} />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
//       {images.length === 0 ? (
//         <p>No images found.</p>
//       ) : (
//         images.map((data) => (
//           <div key={data._id}>
//             <img src={`http://localhost:4000/applicantimagetest/${data.image}`} height={100} width={100} alt="Uploaded" />
//             {data.image2 && (
//               <img src={`http://localhost:4000/applicantimgtwo/${data.image2}`} height={100} width={100} alt="Uploaded" />
//             )}
//             {/* Display additional fields */}
//             <p>Name: {data.name} {data.surname}</p>
//             <p>Nationality: {data.nationality}</p>
//             <p>Education: {data.educationattainment}</p>
//             {/* Add more fields as needed */}
//           </div>
//         ))
//       )}

// {images == null
//         ? ""
//         : images.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })}

//     </div>
//   );
// }

// export default App;




////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [imagePreview1, setImagePreview1] = useState(null);
//   const [imagePreview2, setImagePreview2] = useState(null);

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const onInputChange = (e) => {
//     const file = e.target.files[0];
//     setImage1(file);
//     if (file) {
//       setImagePreview1(URL.createObjectURL(file));
//     }
//   };

//   const onInputChange2 = (e) => {
//     const file = e.target.files[0];
//     setImage2(file);
//     if (file) {
//       setImagePreview2(URL.createObjectURL(file));
//     }
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image1) formData.append("image", image1);
//     if (image2) formData.append("imaget", image2);

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return ( 
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         {imagePreview1 && <img src={imagePreview1} alt="Preview 1" height={100} width={100} />}
        
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         {imagePreview2 && <img src={imagePreview2} alt="Preview 2" height={100} width={100} />}
        
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
  



///////////////////////////////////////////////////
// import React, { useState, useRef, useCallback } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button
// } from '@mui/material';

// import imagePlaceholder from "../image_placeholder/download.png"
// import { useDropzone } from 'react-dropzone';
// import Tesseract from 'tesseract.js';

// function App() {
//   const [passportData, setPassportData] = useState({
//     name: '',
//     surname: '',
//     nationality: '',
//     age: '',
//     passportNumber: '',
//     placeOfBirth: '',
//     birthDate: ''
//   });
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: "",
//     placeOfBirth: "",
//     passportNo: "", // Not required
//     nationality: "",
//     maritalStatus: "",
//     numberOfChildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationAttainment: "",
//     postAppliedFor: "",
//     contractPeriod: "",
//     arabicDegree: "",
//     englishDegree: "",
//     ownPhoneNumber: "",
//     contactPhoneNumber: "",
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: ""
//   });

//   const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);
//   const applicantpassportimagefileInputRef = useRef(null);
//   const [imageforpassportimage, setImageforpassportimage] = useState(null)



//   const [showModal, setShowModal] = useState(false);

//   const updateText = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];

//     const currState = { ...personalInfo };
//     if (Array.isArray(currState[targetStateField])) {
//       let arrIndex = e.target.id.split('-')[2];
//       currState[targetStateField][arrIndex][e.target.id.split('-')[3]] = e.target.value;
//     } else {
//       currState[targetStateField] = e.target.value;
//     }

//     setPersonalInfo(currState);
//   };

//   const addRecord = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];
//     const currState = { ...personalInfo };

//     let count = currState[targetStateField];
//     let newRecord = typeof count[0] === 'object' ? { ...count[0] } : '';

//     for (let item in newRecord) {
//       newRecord[item] = '';
//     }

//     count.push(newRecord);
//     currState[targetStateField] = count;

//     setPersonalInfo(currState);
//   };

//   const submit = () => {
//     setShowModal(true);
//   };

//   const confirmSubmission = async () => {
//     const { name, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

//     // Check if required fields are filled (passportNo is not required)
//     if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
//       toast.error("Please fill all the required fields.", {
//         position: "top-center"
//       });
//       return;
//     }

//     // Proceed with form submission logic here
//     // ...
//     toast.success("Form submitted successfully!");
//     setShowModal(false); // Close the modal after submission
//   };

//   const cancelSubmission = () => {
//     setShowModal(false); // Close the modal without submitting
//   };

//   const onInputChangeforpassportimagea = (e) => {
//     const file = e.target.files[0];
//     console.log(e.target.files[0]);
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file))
//     }
//   };

//   const onInputChangeforpassportimage = (e) => {
//     const file = e.target.files[0];
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file));
//         recognizeMRZa(file); // Call recognizeMRZ here to process the uploaded image
        

//       }
// };

// const recognizeMRZa = (file) => {
//   Tesseract.recognize(
//       file,
//       'eng',
//       {
//           logger: (m) => console.log(m), // Log progress
//       }
//   ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//   });
// };

//   /////////////////////////////////////////

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     recognizeMRZ(file);
//   }, []);

//   const recognizeMRZ = (file) => {
//     Tesseract.recognize(
//       file,
//       'eng',
//       {
//         logger: (m) => console.log(m), // Log progress
//       }
//     ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//     });
//   };

//   const extractPassportData = (text) => {
    



   



//     const lines = text.split('\n');
//     const mrzLines = lines.filter(line => line.match(/^[A-Z0-9<]+$/));

//     if (mrzLines.length < 2) return { name: '', surname: '', nationality: '', age: '', passportNumber: '', placeOfBirth: '', birthDate: '' };

//     const line1 = mrzLines[0]; // e.g., P<UTOEJANE<<<JOHN<<<<<<<<<<<<<<<<<<<<<<<<<
//     const line2 = mrzLines[1]; // e.g., 1234567890UTO7408129M1204159<<<<<<<<<<<<<<<<<

//     // Extracting name
//     const names = line1.substring(5, 44).replace(/</g, ' ').trim().split('<<');
//     const surname = names[0] ? names[0].trim() : ''; // Add check for surname
//     const name = names[1] ? names[1].trim() : ''; // Add check for given name

//     const nationality = line2.substring(10, 13) || '';
//     const passportNumber = line2.substring(0, 9) || '';

//     // Extracting birth date and gender
//     const birthDate = line2.substring(13, 19) || ''; // Birthdate in YYMMDD format
//     const gender = line2.charAt(20) || '';

//     // Calculate age
//     const year = birthDate ? parseInt(birthDate.substring(0, 2), 10) : 0;
//     const month = birthDate ? parseInt(birthDate.substring(2, 4), 10) : 0;
//     const day = birthDate ? parseInt(birthDate.substring(4, 6), 10) : 0;
//     const age = new Date().getFullYear() - (year < 50 ? 2000 + year : 1900 + year); // Basic age calculation

//     // Extracting place of birth
//     const placeOfBirth = line1.substring(44, 69).replace(/</g, ' ').trim() || '';


    

//     // Format birth date as YYYY-MM-DD for display
//     const formattedBirthDate = birthDate ? `20${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}` : '';


//     const startIndex = 5; // Starting at character 5
//     const firstEndIndex = line1.indexOf('<', startIndex); // Find the first '<' after the start index

//     const extractedTexts = [];

//     if (firstEndIndex !== -1) {
//       // First extraction
//       const firstResult = line1.substring(startIndex, firstEndIndex);
//       extractedTexts.push(firstResult);
      
//       // Skip two characters after the first result
//       const secondStartIndex = firstEndIndex + 2;
//       const secondEndIndex = line1.indexOf('<', secondStartIndex); // Find the next '<'

     
//       if (secondEndIndex !== -1) {
//         const secondResult = line1.substring(secondStartIndex, secondEndIndex);
//         extractedTexts.push(secondResult);
        
//         // Skip one character after the second result
//         const thirdStartIndex = secondEndIndex + 1;
//         const thirdEndIndex = line1.indexOf('<', thirdStartIndex); // Find the next '<'
         
        
//         if (thirdEndIndex !== -1) {
//           const thirdResult = line1.substring(thirdStartIndex, thirdEndIndex);
//           extractedTexts.push(thirdResult);
//           personalInfo.name = thirdResult;
//         } else {
//           extractedTexts.push(line1.substring(thirdStartIndex)); // If no '<' is found, return the rest of the string
//         }
//       }
//     }


   

//     return { name, surname, nationality, age, passportNumber, placeOfBirth, birthDate: formattedBirthDate };
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });


//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop a passport photo here, or click to select one</p>
//       </div>
//        <div className="image-upload">
           
//            <div className="image-preview">
//                <img
//                    className="input-personal-image"
//                    alt="Personal"
//                    src={
//                        applicantpassportimagePreview !== null
//                            ? applicantpassportimagePreview
//                            : imagePlaceholder
//                    }
//                    onClick={() => applicantpassportimagefileInputRef.current.click()}
//                />
//            </div>
//            <input
//                type="file"
//                accept="image/*"
//                onChange={onInputChangeforpassportimage}
//                style={{ display: "none" }}
//                ref={applicantpassportimagefileInputRef}
//            />
//            <label>
//                <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
//            </label>
          
       
//    </div>
//    <div className="image-preview">
//   <img
//     className={`input-personal-image ${imageforpassportimage ? 'red-filter' : ''}`} // Apply red filter if there's an image
//     alt="Personal"
//     src={
//       applicantpassportimagePreview !== null
//         ? applicantpassportimagePreview
//         : imagePlaceholder
//     }
//     onClick={() => applicantpassportimagefileInputRef.current.click()}
//   />
// </div>
//    {passportData && (
//         <div>
//           <h3>Extracted Passport Data:</h3>
//           <p><strong>Name:</strong> {passportData.name}</p>
//           <p><strong>Surname:</strong> {passportData.surname}</p>
//           <p><strong>Nationality:</strong> {passportData.nationality}</p>
//           <p><strong>Age:</strong> {passportData.age}</p>
//           <p><strong>Passport Number:</strong> {passportData.passportNumber}</p>
//           <p><strong>Place of Birth:</strong> {passportData.placeOfBirth}</p>
//           <p><strong>Birth Date:</strong> {passportData.birthDate}</p>
//         </div>
//       )}
      
//       <NameArea callback={updateText} info={personalInfo} newField={addRecord} />
//       <Button variant="contained" color="primary" onClick={submit}>Save</Button>
//       <ToastContainer position="top-center" />

//       <Dialog open={showModal} onClose={cancelSubmission}>
//         <DialogTitle>Confirm Submission</DialogTitle>
//         <DialogContent>
//           <p>Are you sure you want to submit the form?</p>
//         </DialogContent>
//         <DialogActions>
//           <Button 
//             onClick={cancelSubmission} 
//             style={{ backgroundColor: '#f44336', color: 'white' }} // Red for "Back"
//           >
//             Back
//           </Button>
//           <Button 
//             onClick={confirmSubmission} 
//             style={{ backgroundColor: '#4caf50', color: 'white' }} // Green for "Proceed anyway"
//           >
//             Proceed anyway
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default App;





////////////////////////////////  paste to multiple field

// import React, { useState } from "react";
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";

// function App() {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: '',
//     placeOfBirth: '',
//     passportNo: '',
//     nationality: '',
//     maritalStatus: '',
//     numberOfChildren: '',
//     religion: '',
//     weight: '',
//     height: '',
//     educationAttainment: '',
//     postAppliedFor: '',
//     contractPeriod: '',
//     arabicDegree: '',
//     englishDegree: '',
//     ownPhoneNumber: '',
//     contactPhoneNumber: '',
//     monthlysalarySaudi: '',
//     monthlysalaryJordan: '',
//     Qualifications: "",
//     job: ""
//   });

//   const updateText = (e) => {
//     const { id, value } = e.target;
//     const [targetStateArea, targetStateField] = id.split('-');

//     if (targetStateArea === 'personalInfo') {
//       setPersonalInfo((prevState) => ({
//         ...prevState,
//         [targetStateField]: value
//       }));
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault(); // Prevent the default paste behavior
//     const pastedData = e.clipboardData.getData('text/plain');

//     // Split the pasted data into lines
//     const lines = pastedData.split('\n').map(line => line.trim());

//     console.log(pastedData)
    
//     // Create a temporary object to hold extracted values
//     const newPersonalInfo = { ...personalInfo };

//     // Map the fields based on the pasted data
//     lines.forEach(line => {
//       if (line.includes('Surname')) {
//         newPersonalInfo.surname = line.split('Surname')[1].trim();
//       }
//       if (line.includes('Given Names')) {
//         newPersonalInfo.name = line.split('Given Names')[1].trim();
//       }
//       if (line.includes('Marital Status')) {
//         newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
//       }
//       if (line.includes('Religion')) {
//         newPersonalInfo.religion = line.split('Religion')[1].trim();
//       }
//       if (line.includes('Job')) {
//         newPersonalInfo.job = line.split('Job')[1].trim();
//       }
//       if (line.includes('Qualifications')) {
//         newPersonalInfo.Qualifications = line.split('Qualifications')[1].trim();
//       }
//       if (line.includes('Mobile Number')) {
//         newPersonalInfo.contactPhoneNumber = line.split('Mobile Number')[1].trim();
//       }
//       if (line.includes('Passport Number')) {
//         newPersonalInfo.passportNo = line.split('Passport Number')[1].trim();
//       }
//       if (line.includes('Passport Issue Place')) {
//         newPersonalInfo.placeOfBirth = line.split('Passport Issue Place')[1].trim();
//       }
//     });

//     // Update the state with the new values
//     setPersonalInfo(newPersonalInfo);
//   };

//   return (
//     <div>
//       <NameArea 
//         callback={updateText} 
//         info={personalInfo} 
//         onPaste={handlePaste} // Pass the handlePaste function to NameArea
//       />
//     </div>
//   );
// }

// export default App;


//////////////////





// import React from 'react';
// import html2pdf from 'html2pdf.js';

// import fullbodyapplicantimage from "../image_placeholder/fullbodyapplicantimage.jpeg"
// import phoneIcon from "../image_placeholder/phoneIcon.png"
// import EmailIcon from "../image_placeholder/emailIcon.png"
// import AddressIcon from "../image_placeholder/addressIcon.png"
// import { Height } from '@mui/icons-material';

// import KaanAlRiyadhHeaderImg from "../image_placeholder/KaanAlRiyadh.png"


// const TableToPdf = () => {
//     const downloadMultipleCVs = async () => {
//         const pdfElements = [
//             { elementId: 'KaanAlRiyadhCv', filename: 'KaanAlRiyadh.pdf' },
//             // Add more elements as needed
//         ];

//         const downloadPromises = pdfElements.map(({ elementId, filename }) => {
//             const element = document.getElementById(elementId);
//             const options = {
//                 margin: [0, 0.2, 0, 0.2],
//                 marginTop: 0,
//                 filename: filename,
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//             };

//             return html2pdf().from(element).set(options).save();
//         });

//         await Promise.all(downloadPromises);
//     };

//     return (
//         <div>
//             <div id="KaanAlRiyadhCv" style={{ display: '' }}>
//                 {/* First Table */}
//                 <div style={{ background: "" }}>
//     <img
//         src={KaanAlRiyadhHeaderImg}
//         alt="header"
//         style={{ maxWidth: '100%', height: 'auto' }} // Ensures the image is contained
//     />
// </div>


//                 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>First Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الاسم الأول</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Middle Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الاسم الأوسط</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Last Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>اسم العائلة</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Surname</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>اللقب</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>CV Code</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>رمز السيرة الذاتية</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>John</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>A.</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Doe</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Smith</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV001</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Second Table */}
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Position Applied</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الوظيفة المتقدم لها</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Contract Period</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>مدة العقد</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Monthly Salary</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الراتب الشهري</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>City</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>المدينة</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Address</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>العنوان</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Software Engineer</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>12 months</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>5000 SAR</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Riyadh</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>123 Main St.</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Third Table - Passport Information */}
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Passport No</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>رقم الجواز</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Issued Date</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>تاريخ الإصدار</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Expired Date</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>تاريخ الانتهاء</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Issued Place</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>مكان الإصدار</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>A123456789</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>2020-01-01</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>2030-01-01</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Riyadh</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Personal Information and Previous Experience Tables */}
//                 <div style={{ display: 'flex', marginTop: '20px', background: "" }}>
//                     {/* Personal Information Table */}

//                     <div style={{ flex: '1', borderCollapse: 'collapse', marginRight: '10px' }}>
                    
//                     <table style={{ borderCollapse: 'collapse', minWidth: "100%" }}>
//     <thead>
//         <tr>
//             <th colSpan="2" style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'black', textAlign: 'left', fontSize: '10px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span >Personal Information</span>
//                     <span >المعلومات الشخصية</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Nationality / الجنسية</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Religion / الدين</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Age / العمر</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Gender / الجنس</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Birthday / تاريخ الميلاد</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Birthplace / مكان الميلاد</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Marital Status / الحالة الاجتماعية</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Number of Children / عدد الأطفال</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Height / الطول</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Weight / الوزن</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Education / التعليم</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>kkkk</td>
//         </tr>
//     </tbody>
// </table>




// <table style={{ borderCollapse: 'collapse', minWidth: '100%', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', width: '50%', backgroundColor: '#D050C9' }}>Training (التدريب)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Excellent (ممتاز)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Very Good (جيد جداً)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Good (جيد)</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Cleaning (تنظيف)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Laundry (غسيل)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Ironing Clothes (كي الملابس)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Baby Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Children Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Care of the Elderly (رعاية المسنين)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//     </tbody>
// </table>


// <table style={{ borderCollapse: 'collapse', minWidth: '100%', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', width: '50%', backgroundColor: '#D050C9' }}>Skills (المهارات)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Excellent (ممتاز)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Good (جيد)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Poor (ضعيف)</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Cooking (طبخ)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Arabic Cooking (الطبخ العربي)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Sewing Clothes (خياطة الملابس)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Home Nursing (تمريض منزلي)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Children's Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Driving Cars (قيادة السيارات)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Manicure Massage (مانيكير مساج)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Arabic (العربية)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>English (الإنجليزية)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//     </tbody>
// </table>

// </div>

//                     {/* Previous Experience Table */}

//                     <div style={{ flex: '1', borderCollapse: 'collapse', marginLeft: '10px', display: "flex", flexDirection: "column", justifyContent: "center",  alignItems:"center" }}>

//                         <>
//                         <table style={{ borderCollapse: 'collapse', minWidth: "100%" }}>
//     <thead>
//         <tr>
//             <th colSpan="5" style={{ 
//                 backgroundColor: '#D050C9', 
//                 border: '1px solid black', 
//                 padding: '4px', 
//                 color: 'white', 
//                 textAlign: 'left', 
//                 fontSize: '10px' 
//             }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: "black" }}>
//                     <span>Previous Experience</span>
//                     <span>الخبرة السابقة</span>
//                 </div>
//             </th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Country</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Position</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>No of Years</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>From</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>To</th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>gggg</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>kkk</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>jjj</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>jjj</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//     </thead>
//     <tbody>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>


// </>


// {/* full body box */}
// <div style={{border: "10px solid green", borderRadius: "23px", marginTop: '20px', background: "red", height: '520px'}}>
//     <div style={{
//         background: "blue", 
//         maxWidth: "300px", 
//         minWidth: "300px", 
//         height: "100%", 
//         border: "10px solid red", 
//         borderRadius: "10px", 
//         overflow: 'hidden' // Ensure anything exceeding the bounds is hidden
//     }}>
//         <img 
//             src={fullbodyapplicantimage} 
//             style={{
//                 height: "100%", 
//                 width: "auto", 
//                 display: 'block' // Prevents any extra space at the bottom
//             }} 
//             alt="" 
//         />
//     </div>
// </div>



// </div>
//                 </div>


//                 {/* footer */}
//                 <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//                 <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row", background: "", width: "100%" }}>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={phoneIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Phone</div>
                        
//                         </div>

//                         <div>0582894204 & 0550507629&</div>

//                         <div>0550507629 & 0595855829</div>

//                     </div>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={EmailIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Email</div>
                        
//                         </div>

//                         <div>canoffice16@gmail.co</div>

                        

//                     </div>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={AddressIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Address</div>
                        
//                         </div>

//                         <div>
//   Prince Saud bin Abdul Aziz Al Saud <br /> Al Kabeer – Riyadh KSA PO
// </div>
                       

//                     </div>


//                     </div>


//                 </div>
//                 {/* footer end */}


//             </div>
//             <button onClick={downloadMultipleCVs} style={{ marginTop: '20px' }}>
//                 Generate PDF
//             </button>
//         </div>
//     );
// };

// export default TableToPdf;



/////////////////////////////////////////////////////////


// import React, { useState } from 'react';

// const PostDummyData = () => {
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handlePostDummyData = async () => {
//     const dummyData = { newValue: 6 }; // Ensure this is an integer

//     try {
//       const response = await fetch('https://testcvapi.ntechagent.com/api/count', {
//         method: 'PUT', // Assuming you want to update the count
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dummyData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to post dummy data');
//       }

//       const result = await response.text(); // Adjust if your API returns JSON
//       setMessage(`Successfully posted: ${result}`);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to post dummy data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Post Dummy Data</h2>
//       <button onClick={handlePostDummyData}>Send Dummy Data</button>
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default PostDummyData;


//////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from 'react';

// const DisplayCount = () => {
//   const [count, setCount] = useState(0);
//   const [error, setError] = useState('');

//   const fetchCount = async () => {
//     try {
//       const response = await fetch('https://testcvapi.ntechagent.com/api/count');
//       if (!response.ok) {
//         throw new Error('Failed to fetch count');
//       }
//       const data = await response.json();
//       setCount(data.cv_count); // Set the count from the response
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to fetch count. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchCount(); // Fetch the count when the component mounts
//   }, []);

//   // Helper function to format the count
//   const formatCount = (number) => {
//     if (number < 10) {
//       return `00${number}`; // Add "00" for single digits
//     } else if (number < 100) {
//       return `0${number}`; // Add "0" for two digits
//     }
//     return number.toString(); // Leave as is for three or more digits
//   };

//   return (
//     <div>
//       <h2>Current Count: {formatCount(count)}</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default DisplayCount;



///////////////////////////////////////////////////////////////////////////



// import React from 'react';
// import html2pdf from 'html2pdf.js';

// import fullbodyapplicantimage from "../image_placeholder/fullbodyapplicantimage.jpeg"
// import phoneIcon from "../image_placeholder/phoneIcon.png"
// import EmailIcon from "../image_placeholder/emailIcon.png"
// import AddressIcon from "../image_placeholder/addressIcon.png"
// import { Height } from '@mui/icons-material';

// import KaanAlRiyadhHeaderImg from "../image_placeholder/KaanAlRiyadh.png"


// const TableToPdf = () => {

  

//     const htmlString = `

//     const downloadMultipleCVs = async () => {
//         const pdfElements = [
//             { elementId: 'QimamAsiaCv', filename: 'Qimam Asia.pdf' },
//             // Add more elements as needed
//         ];

//         const downloadPromises = pdfElements.map(({ elementId, filename }) => {
//             const element = document.getElementById(elementId);
//             const options = {
//                 margin: 0,
//                 // marginTop: 0,
//                 filename: filename,
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
//             };

//             return html2pdf().from(element).set(options).save();
//         });

//         await Promise.all(downloadPromises);
//     };

//     return (
//         <div>
//             <div id="QimamAsiaCv" style={{ display: '' }}>
               

//             <div dangerouslySetInnerHTML={{ __html: bb }} />

//             </div>
//             <button onClick={downloadMultipleCVs} style={{ marginTop: '20px' }}>
//                 Generate PDF
//             </button>
//         </div>
//     );
// };

// export default TableToPdf;





// function newFunction_35() {
//     return "padding-top: 1pt;padding-left: 3pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_34() {
//     return "width:80pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_33() {
//     return "padding-left: 13pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_32() {
//     return "width:226pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:6pt";
// }

// function newFunction_31() {
//     return "padding-top: 1pt;text-indent: 0pt;text-align: right;";
// }

// function newFunction_30() {
//     return "width:117pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_29() {
//     return "padding-left: 5pt;text-indent: 0pt;line-height: 12pt;text-align: center;";
// }

// function newFunction_28() {
//     return "width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_27() {
//     return "padding-left: 5pt;text-indent: 0pt;line-height: 12pt;text-align: center;";
// }

// function newFunction_26() {
//     return "width:113pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_25() {
//     return "text-indent: 0pt;text-align: left;";
// }

// function newFunction_24() {
//     return "width:113pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_23() {
//     return "padding-left: 4pt;text-indent: 0pt;line-height: 12pt;text-align: center;";
// }

// function newFunction_22() {
//     return "text-indent: 0pt;text-align: left;";
// }

// function newFunction_21() {
//     return "text-indent: 0pt;text-align: left;";
// }

// function newFunction_20() {
//     return "width:87pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt";
// }

// function newFunction_19() {
//     return "padding-top: 3pt;padding-left: 30pt;text-indent: 0pt;line-height: 12pt;text-align: left;";
// }

// function newFunction_18() {
//     return "width:117pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_17() {
//     return "padding-top: 1pt;padding-left: 3pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_16() {
//     return "width:80pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_15() {
//     return "height:16pt";
// }

// function newFunction_14() {
//     return "padding-top: 3pt;padding-left: 5pt;text-indent: 0pt;text-align: center;";
// }

// function newFunction_13() {
//     return "width:113pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt";
// }

// function newFunction_12() {
//     return "padding-top: 3pt;padding-left: 29pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_11() {
//     return "width:113pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt";
// }

// function newFunction_10() {
//     return "padding-top: 3pt;padding-left: 24pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_9() {
//     return "width:284pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt";
// }

// function newFunction_8() {
//     return "height:23pt";
// }

// function newFunction_7() {
//     return "padding-left: 5pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_6() {
//     return "width:414pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt";
// }

// function newFunction_5() {
//     return "padding-left: 10pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_4() {
//     return "padding-top: 11pt;text-indent: 0pt;text-align: left;";
// }

// function newFunction_3() {
//     return "width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:1pt";
// }

// function newFunction_2() {
//     return "height:115pt";
// }

// function newFunction_1() {
//     return "border-collapse:collapse;margin-left:6.2175pt";
// }

// function newFunction() {
//     return "text-indent: 0pt;text-align: left;";
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////



// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete'; 
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import Header from "../screens/header";

// // Define your columns
// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'surname', label: 'Surname', minWidth: 100 },
//   { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
//   { id: 'postappliedfor', label: 'Position', minWidth: 170 },
//   { id: 'createdAt', label: 'Created At', minWidth: 170 },
//   { id: 'actions', label: 'Actions', minWidth: 100 },
// ];

// export default function StickyHeadTable() {
//   const [rows, setRows] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [positionFilter, setPositionFilter] = React.useState('');
//   const [nationalityFilter, setNationalityFilter] = React.useState('');
//   const [genderFilter, setGenderFilter] = React.useState('');

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://testcvapi.ntechagent.com/tt');
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setRows(result.data);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter rows based on the selected filters
//   const filteredRows = rows.filter(row => {
//     return (
//       (positionFilter ? row.postappliedfor === positionFilter : true) &&
//       (nationalityFilter ? row.currentNationality === nationalityFilter : true) &&
//       (genderFilter ? row.sex === genderFilter : true)
//     );
//   });

//   return (
//     <>
//       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <Header />
        
//         {/* Filter Inputs */}
//         <div style={{ padding: '16px' }}>
//           <TextField
//             select
//             label="Position"
//             value={positionFilter}
//             onChange={(e) => setPositionFilter(e.target.value)}
//             SelectProps={{
//               native: true,
//             }}
//             variant="outlined"
//             style={{ marginRight: '16px' }}
//           >
//             <option value=""></option>
//             <option value="driver">Driver</option>
//             <option value="housemaid">Housemaid</option>
//             {/* Add more options as needed */}
//           </TextField>

//           <TextField
//             select
//             label="Nationality"
//             value={nationalityFilter}
//             onChange={(e) => setNationalityFilter(e.target.value)}
//             SelectProps={{
//               native: true,
//             }}
//             variant="outlined"
//             style={{ marginRight: '16px' }}
//           >
//             <option value=""></option>
//             <option value="ETHIOPIA">Ethiopia</option>
//             {/* Add more options as needed */}
//           </TextField>

//           <TextField
//             select
//             label="Gender"
//             value={genderFilter}
//             onChange={(e) => setGenderFilter(e.target.value)}
//             SelectProps={{
//               native: true,
//             }}
//             variant="outlined"
//           >
//             <option value=""></option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </TextField>
//         </div>

//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {/* {columns.map((column) => (
//                   <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
//                     {column.label}
//                   </TableCell>
//                 ))} */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//                 <TableRow hover key={row.id}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.id === 'actions' ? (
//                           <>
//                             <IconButton onClick={() => console.log("k")}>
//                               <EditIcon />
//                             </IconButton>
//                             <IconButton color="error" onClick={() => console.log("k")}>
//                               <DeleteIcon />
//                             </IconButton>
//                           </>
//                         ) : (
//                           value
//                         )}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={filteredRows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//         //   onPageChange={handleChangePage}
//         //   onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// }


////////////////////////////////////////////////////////////////


// import React from 'react';
// import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     color: '#2ca2d4',
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   borderBox: {
//     border: '1px solid black',
//     padding: 5,
//   },
//   image: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   title: {
//     color: '#2ca2d4',
//   },
//   titleAr: {
//     color: '#AB1319',
//   },
// });

// // Create Document Component
// const MyDocument = ({ personalInfo, salaries, sponsorInformation, applicantpersonalimagePreview }) => (
//   <Document>
//     <Page size="A4" style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.header}>APPLICATION FOR EMPLOYMENT</Text>
        
//         {/* Date Applied */}
//         <View style={styles.borderBox}>
//           <Text style={styles.title}>DATE APPLIED</Text>
//           <Text>{`${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`}</Text>
//         </View>

//         {/* Position Applied For */}
//         <View style={styles.borderBox}>
//           <Text style={styles.title}>POSITION APPLIED FOR</Text>
//           <Text>no</Text>
//         </View>

//         {/* Monthly Salary */}
//         <View style={styles.borderBox}>
//           <Text style={styles.title}>MONTHLY SALARY</Text>
//           <Text>1200 sar</Text>
//         </View>

//         {/* Contract Period */}
//         <View style={styles.borderBox}>
//           <Text style={styles.title}>CONTRACT PERIOD</Text>
//           <Text>2</Text>
//         </View>

//         {/* Applicant Image */}
//         {/* <Image
//           style={styles.image}
//           src={applicantpersonalimagePreview || 'path/to/placeholder.png'} // Replace with your placeholder path
//         /> */}
//       </View>

//       {/* Full Name Section */}
//       <View style={styles.section}>
//         <Text style={styles.borderBox}>FULL NAME</Text>
//         <Text style={styles.borderBox}>nuru ibrahim ali</Text>
//       </View>

//       {/* Additional Sections */}
//       {/* Add more sections as needed following the same pattern */}
//     </Page>
//   </Document>
// );

// export default MyDocument;







//////////////////////////////////////////////////////////////////////////

// import React, { useRef, useState } from 'react';
// import html2pdf from 'html2pdf.js';
// import goldagent from "../images/goldagent.jpeg" 
// import hudud from "../image_placeholder/hudud.jpeg"
// import skywaylogo from "../image_placeholder/skywaylogo.jpeg"
// import demoimage from "../image_placeholder/demoimage.jpg"
// import barakaimg from "../image_placeholder/barakaimg.jpeg"
// import wasitimg from "../image_placeholder/wasitimg.jpeg"
// import myImage from '../images/two.png'; 
// import bodyimg from "../images/images.jpeg"
// import assawsan from "../image_placeholder/assawsan.jpeg"
// import imagePlaceholder from "../image_placeholder/download.png"
// import ouragentlogo from "../images/ouragentlogo.jpeg"
// import Header from "../screens/header"
// import VidoUploaded from "../image_placeholder/videoUploaded.jpg"
// import ProjectInfo from "../Components/Outputs/ProjectInfo";

// import phoneIcon from "../image_placeholder/phoneIcon.png"
// import EmailIcon from "../image_placeholder/emailIcon.png"
// import AddressIcon from "../image_placeholder/addressIcon.png"

// import KaanAlRiyadhHeaderImg from "../image_placeholder/KaanAlRiyadh.png"

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [pdfUrl, setPdfUrl] = useState(null); // State to hold PDF URL
//   const pdfRef = useRef();

//   const [imageforpersonalimage, setImageforpersonalimage] = useState(null);
//       const [imageforfullbodyimage, setImageforfullbodyimage] = useState(null);
//       const [imageforpassportimage, setImageforpassportimage] = useState(null)
      
  
  
//     const [applicantpersonalimagePreview, setApplicantpersonalimagePreview] = useState(null);
//     const [applicantfullbodyimagePreview, setApplicantfullbodyimageimagePreview] = useState(null);
//     const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);
  
  
//     const applicantpersonalimagefileInputRef = useRef(null);
//     const applicantfullbodyimagefileInputRef = useRef(null);
//     const applicantpassportimagefileInputRef = useRef(null);
  
//      const [dateOfIssue, setDateOfIssue] = useState('');
//       const [dateOfExpiry, setDateOfExpiry] = useState('');
//       const [expiryError, setExpiryError] = useState('');
    
    

//      const initialPersonalInfo = {emptyfield: true, name: '', middleName: "", familyName: "", email: '', phone: '', about: '', surname: "", placeOfBirth: "", passportNo: "",passportIssuePlace: "", nationality: "ETHIOPIA", maritalStatus: "", numberOfChildren: "", religion: "", weight: "", height: "", educationAttainment: "", postAppliedFor: "", contractPeriod: "2", arabicDegree: "", englishDegree: "", ownPhoneNumber: "", contactPhoneNumber: "", monthlysalarySaudi: "", monthlysalaryJordan: "", idno: "", sex: "", visaNo: "", passportType: "", placeOfIssue: "", emptyfield: false, dateOfBirth: "", age:"", country: "", position: "", period: "", applicationNo: ""}
//         const initialSponsorInfo = {visaNo: "", sponsorId: "", sponsorAdress: "", sponsorCity: "", nationalId: "", email: "", sponsorName: "", sponsorPhone: "", agent: "", sponsorArabic: '', visaType: "", fileNo: "", wakala: "", signedUp: "", biometricId: "", contract: "2", stickerVisa: "", currentNationality: "Ethiopia", laborId: "", sponsorInformationEmptyfield: false}
//       const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
//       const [sponsorInformation, setSponsorInfo] = useState(initialSponsorInfo);
//       const [educationInfo, setEducationInfo] = useState({ institute: [{ school: '', from: '', to: '', grade: '', areaStudy: '', overview: '' }] });
//       const [careerInfo, setCareerInfo] = useState({ career: [{ title: '', company: '', from: '', to: '', overview: '' }] });

//        const [salaries, setSalaries] = useState({
//             saudi: '',
//             jordan: ''
//         });

//          const [projectInfo, setProjectInfo] = useState({project: [{ name: '', link: '', overview: '', from: "", to: "", cleaning: "", laundary: "", ironingclothes: "", babycare: "", childerncare: "", careoftheelderly: "",  cooking: "", arabicCooking: "", sewingClothes: "", homeNursing: "", childrens: "", drivingCars: "", manicuring: "", arabic: "", english: ""}]});
//             const [skillInfo, setSkillInfo] = useState({ skills: [''] });
//             const [referenceInfo, setReferenceInfo] = useState({ reference: [{ name: '', email: '', phone: '' }] });


//   const handleDownloadPdf = () => {
//     const element = pdfRef.current;
//     const isSmallDevice = window.innerWidth < 768;
//     const opt = {
//       margin: [0, 0.2, 0, 0.2],
//       filename: isSmallDevice ? "mobile4" : `${name}-CV.pdf`, // Custom filename based on user's name
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: {
//         scale: isSmallDevice ? window.devicePixelRatio || 1 : 2,
//         useCORS: true,
//         windowWidth: 1920,
//         windowHeight: 1080,
//         scrollX: 0,
//         scrollY: 0,
//         },
//       jsPDF: { unit: 'in', format: isSmallDevice ? [9.5, 12] : "a4",  orientation: 'portrait', putOnlyUsedFonts: true, },
//     };

//     html2pdf().from(element).set(opt).save();
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>User Information</h1>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//       </div>
//       <button onClick={handleDownloadPdf}>Download PDF</button>

//       <div ref={pdfRef} style={{ display: '' }}>
     
// <html>
// <head>
// </head>
// <body style='margin:0'>
// <svg  version="1.1" id="main1" width="816" height="1056">
// 	<defs>
		
		
// 		<clipPath id="clip1">
// 			<path d="M0 792L0 0L0 0L612 0L612 0L612 792L612 792L0 792z" />
// 		</clipPath>
// 		<clipPath id="clip2">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip3">
// 			<path d="M18.96 213.5L549.34 213.5L549.34 213.5L549.34 197.06L549.34 197.06L18.96 197.06z" />
// 		</clipPath>
// 		<clipPath id="clip4">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip5">
// 			<path d="M18.96 228.73999L549.34 228.73999L549.34 228.73999L549.34 214.45996L549.34 214.45996L18.96 214.45996z" />
// 		</clipPath>
// 		<clipPath id="clip6">
// 			<path d="M18.96 246.14001L549.34 246.14001L549.34 246.14001L549.34 229.70001L549.34 229.70001L18.96 229.70001z" />
// 		</clipPath>
// 		<clipPath id="clip7">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip8">
// 			<path d="M18.96 263.57L549.34 263.57L549.34 263.57L549.34 247.10602L549.34 247.10602L18.96 247.10602z" />
// 		</clipPath>
// 		<clipPath id="clip9">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip10">
// 			<path d="M18.96 280.25L549.34 280.25L549.34 280.25L549.34 264.53003L549.34 264.53003L18.96 264.53003z" />
// 		</clipPath>
// 		<clipPath id="clip11">
// 			<path d="M18.96 296.93L549.34 296.93L549.34 296.93L549.34 281.21L549.34 281.21L18.96 281.21z" />
// 		</clipPath>
// 		<clipPath id="clip12">
// 			<path d="M18.96 314.33L549.34 314.33L549.34 314.33L549.34 297.88998L549.34 297.88998L18.96 297.88998z" />
// 		</clipPath>
// 		<clipPath id="clip13">
// 			<path d="M18.96 331.73L549.34 331.73L549.34 331.73L549.34 315.29L549.34 315.29L18.96 315.29z" />
// 		</clipPath>
// 		<clipPath id="clip14">
// 			<path d="M18.96 349.13L549.34 349.13L549.34 349.13L549.34 332.69L549.34 332.69L18.96 332.69z" />
// 		</clipPath>
// 		<clipPath id="clip15">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip16">
// 			<path d="M18.96 366.53L549.34 366.53L549.34 366.53L549.34 350.09L549.34 350.09L18.96 350.09z" />
// 		</clipPath>
// 		<clipPath id="clip17">
// 			<path d="M39.96 392.57L118.824 392.57L118.824 392.57L118.824 367.49002L118.824 367.49002L39.96 367.49002z" />
// 		</clipPath>
// 		<clipPath id="clip18">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip19">
// 			<path d="M18.96 392.57L549.34 392.57L549.34 392.57L549.34 367.49002L549.34 367.49002L18.96 367.49002z" />
// 		</clipPath>
// 		<clipPath id="clip20">
// 			<path d="M18.96 409.97L549.34 409.97L549.34 409.97L549.34 393.53L549.34 393.53L18.96 393.53z" />
// 		</clipPath>
// 		<clipPath id="clip21">
// 			<path d="M18.96 425.23L549.34 425.23L549.34 425.23L549.34 410.92603L549.34 410.92603L18.96 410.92603z" />
// 		</clipPath>
// 		<clipPath id="clip22">
// 			<path d="M18.96 443.35L549.34 443.35L549.34 443.35L549.34 426.19L549.34 426.19L18.96 426.19z" />
// 		</clipPath>
// 		<clipPath id="clip23">
// 			<path d="M39.96 469.39L118.824 469.39L118.824 469.39L118.824 444.31003L118.824 444.31003L39.96 444.31003z" />
// 		</clipPath>
// 		<clipPath id="clip24">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip25">
// 			<path d="M18.96 469.39L549.34 469.39L549.34 469.39L549.34 444.31003L549.34 444.31003L18.96 444.31003z" />
// 		</clipPath>
// 		<clipPath id="clip26">
// 			<path d="M39.96 495.43L118.824 495.43L118.824 495.43L118.824 470.35L118.824 470.35L39.96 470.35z" />
// 		</clipPath>
// 		<clipPath id="clip27">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip28">
// 			<path d="M18.96 495.43L549.34 495.43L549.34 495.43L549.34 470.35L549.34 470.35L18.96 470.35z" />
// 		</clipPath>
// 		<clipPath id="clip29">
// 			<path d="M39.96 523.03L118.824 523.03L118.824 523.03L118.824 496.39L118.824 496.39L39.96 496.39z" />
// 		</clipPath>
// 		<clipPath id="clip30">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip31">
// 			<path d="M18.96 523.03L549.34 523.03L549.34 523.03L549.34 496.39L549.34 496.39L18.96 496.39z" />
// 		</clipPath>
// 		<clipPath id="clip32">
// 			<path d="M39.96 549.07L118.824 549.07L118.824 549.07L118.824 523.99L118.824 523.99L39.96 523.99z" />
// 		</clipPath>
// 		<clipPath id="clip33">
// 			<path d="M18.96 724.656L549.34 724.656L549.34 724.656L549.34 54.955994L549.34 54.955994L18.96 54.955994z" />
// 		</clipPath>
// 		<clipPath id="clip34">
// 			<path d="M18.96 549.07L549.34 549.07L549.34 549.07L549.34 523.99L549.34 523.99L18.96 523.99z" />
// 		</clipPath>
// 		<clipPath id="clip35">
// 			<path d="M18.96 567.19L549.34 567.19L549.34 567.19L549.34 550.03L549.34 550.03L18.96 550.03z" />
// 		</clipPath>
// 		<clipPath id="clip36">
// 			<path d="M18.96 584.58997L549.34 584.58997L549.34 584.58997L549.34 568.15L549.34 568.15L18.96 568.15z" />
// 		</clipPath>
// 		<clipPath id="clip37">
// 			<path d="M18.96 688.9L549.34 688.9L549.34 688.9L549.34 665.26L549.34 665.26L18.96 665.26z" />
// 		</clipPath>
// 		<clipPath id="clip38">
// 			<path d="M18.96 707.016L549.34 707.016L549.34 707.016L549.34 689.856L549.34 689.856L18.96 689.856z" />
// 		</clipPath>
// 		<clipPath id="clip39">
// 			<path d="M18.96 723.696L549.34 723.696L549.34 723.696L549.34 707.976L549.34 707.976L18.96 707.976z" />
// 		</clipPath>
// 		<clipPath id="clip40">
// 			<path d="M39.48 196.58002L323.21002 196.58002L323.21002 196.58002L323.21002 171.98004L323.21002 171.98004L39.48 171.98004z" />
// 		</clipPath>
// 		<clipPath id="clip41">
// 			<path d="M323.21 196.58002L436.87 196.58002L436.87 196.58002L436.87 171.98004L436.87 171.98004L323.21 171.98004z" />
// 		</clipPath>
// 		<clipPath id="clip42">
// 			<path d="M436.87 196.58002L548.85 196.58002L548.85 196.58002L548.85 171.98004L548.85 171.98004L436.87 171.98004z" />
// 		</clipPath>
// 		<clipPath id="clip43">
// 			<path d="M39.48 601.06L236.20999 601.06L236.20999 601.06L236.20999 585.796L236.20999 585.796L39.48 585.796z" />
// 		</clipPath>
// 		<clipPath id="clip44">
// 			<path d="M365.95 601.06L548.85 601.06L548.85 601.06L548.85 585.796L548.85 585.796L365.95 585.796z" />
// 		</clipPath>
// 		<clipPath id="clip45">
// 			<path d="M39.48 620.62L236.20999 620.62L236.20999 620.62L236.20999 601.06L236.20999 601.06L39.48 601.06z" />
// 		</clipPath>
// 		<clipPath id="clip46">
// 			<path d="M365.95 620.62L548.85 620.62L548.85 620.62L548.85 601.06L548.85 601.06L365.95 601.06z" />
// 		</clipPath>
// 		<clipPath id="clip47">
// 			<path d="M39.48 646.3L236.20999 646.3L236.20999 646.3L236.20999 627.82L236.20999 627.82L39.48 627.82z" />
// 		</clipPath>
// 		<clipPath id="clip48">
// 			<path d="M236.21 646.3L365.95 646.3L365.95 646.3L365.95 627.82L365.95 627.82L236.21 627.82z" />
// 		</clipPath>
// 		<clipPath id="clip49">
// 			<path d="M365.95 646.3L548.85 646.3L548.85 646.3L548.85 627.82L548.85 627.82L365.95 627.82z" />
// 		</clipPath>
// 		<clipPath id="clip50">
// 			<path d="M39.48 664.78L236.20999 664.78L236.20999 664.78L236.20999 646.3L236.20999 646.3L39.48 646.3z" />
// 		</clipPath>
// 		<clipPath id="clip51">
// 			<path d="M236.21 664.78L365.95 664.78L365.95 664.78L365.95 646.3L365.95 646.3L236.21 646.3z" />
// 		</clipPath>
// 		<clipPath id="clip52">
// 			<path d="M365.95 664.78L548.85 664.78L548.85 664.78L548.85 646.3L548.85 646.3L365.95 646.3z" />
// 		</clipPath>
// 		<clipPath id="clip53">
// 			<path d="M323.21 689.38L436.87 689.38L436.87 689.38L436.87 664.78L436.87 664.78L323.21 664.78z" />
// 		</clipPath>
// 		<clipPath id="clip54">
// 			<path d="M436.87 689.38L548.85 689.38L548.85 689.38L548.85 664.78L548.85 664.78L436.87 664.78z" />
// 		</clipPath>
// 		<clipPath id="clip55">
// 			<path d="M323.21 707.496L436.87 707.496L436.87 707.496L436.87 689.376L436.87 689.376L323.21 689.376z" />
// 		</clipPath>
// 		<clipPath id="clip56">
// 			<path d="M436.87 707.496L548.85 707.496L548.85 707.496L548.85 689.376L548.85 689.376L436.87 689.376z" />
// 		</clipPath>
// 		<clipPath id="clip57">
// 			<path d="M436.87 724.176L548.85 724.176L548.85 724.176L548.85 707.496L548.85 707.496L436.87 707.496z" />
// 		</clipPath>
// 		<clipPath id="clip58">
// 			<path d="M17.04 726.696L551.38 726.696L551.38 726.696L551.38 53.03601L551.38 53.03601L17.04 53.03601z" />
// 		</clipPath>
// 		<clipPath id="clip59">
// 			<path d="M18 724.56L549.24 724.56L549.24 724.56L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip60">
// 			<path d="M40.32 169.44L57.72 169.44L57.72 169.44L57.72 56.160034L57.72 56.160034L40.32 56.160034z" />
// 		</clipPath>
// 		<clipPath id="clip61">
// 			<path d="M40.32 169.44L57.72 169.44L57.72 169.44L57.72 56.160034L57.72 56.160034L40.32 56.160034z" />
// 		</clipPath>
// 		<clipPath id="clip62">
// 			<path d="M0 0L2.4E-07 0L2.4E-07 0L2.4E-07 0L0 0z" />
// 		</clipPath>
// 		<clipPath id="clip63">
// 			<path d="M0 0L2.4E-07 0L2.4E-07 0L2.4E-07 0L0 0z" />
// 		</clipPath>
// 		<clipPath id="clip64">
// 			<path d="M18 724.56L549.24 724.56L549.24 724.56L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip65">
// 			<path d="M18 724.56L549.24 724.56L549.24 724.56L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip66">
// 			<path d="M0 0L2.4E-07 0L2.4E-07 0L2.4E-07 0L0 0z" />
// 		</clipPath>
// 		<clipPath id="clip67">
// 			<path d="M0 0L2.4E-07 0L2.4E-07 0L2.4E-07 0L0 0z" />
// 		</clipPath>
// 		<clipPath id="clip68">
// 			<path d="M18 724.56L549.24 724.56L549.24 724.56L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip69">
// 			<path d="M18 724.56L549.24 724.56L549.24 724.56L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 	</defs>
// 	<g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
// 		<g clip-path="url(#clip1)">
// 			<g clip-path="url(#clip2)">
// 				<path stroke="none" fill="#C5D9F0" fill-rule="evenodd" d="M39.48 595.3L548.98 595.3L548.98 595.3L548.98 620.01996L548.98 620.01996L39.48 620.01996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M119.3 381.43L236.32 381.43L236.32 381.43L236.32 398.94998L236.32 398.94998L119.3 398.94998z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 322.01L548.98 322.01L548.98 322.01L548.98 348.17L548.98 348.17L323.21 348.17z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 295.97L548.98 295.97L548.98 295.97L548.98 322.13L548.98 322.13L323.21 322.13z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 268.37L548.98 268.37L548.98 268.37L548.98 296.09L548.98 296.09L323.21 296.09z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 242.33L548.98 242.33L548.98 242.33L548.98 268.49L548.98 268.49L323.21 268.49z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 224.21L548.98 224.21L548.98 224.21L548.98 242.45001L548.98 242.45001L323.21 242.45001z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M323.21 206.81L548.98 206.81L548.98 206.81L548.98 224.33L548.98 224.33L323.21 224.33z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#92D050" fill-rule="evenodd" d="M39.48 190.82L236.33 190.82L236.33 190.82L236.33 206.20401L236.33 206.20401L39.48 206.20401z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#92D050" fill-rule="evenodd" d="M365.95 190.82L548.97003 190.82L548.97003 190.82L548.97003 206.20401L548.97003 206.20401L365.95 206.20401z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#F9BE8F" fill-rule="evenodd" d="M39.48 171.26L236.33 171.26L236.33 171.26L236.33 190.94L236.33 190.94L39.48 190.94z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#F9BE8F" fill-rule="evenodd" d="M365.95 171.26L548.97003 171.26L548.97003 171.26L548.97003 190.94L548.97003 190.94L365.95 190.94z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#C5D9F0" fill-rule="evenodd" d="M39.48 164.06L548.98 164.06L548.98 164.06L548.98 171.38L548.98 171.38L39.48 171.38z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#C5D9F0" fill-rule="evenodd" d="M39.48 67.704L548.98 67.704L548.98 67.704L548.98 127.224L548.98 127.224L39.48 127.224z" transform="matrix(1 0 0 -1 0 792)"  />
// 			</g>
// 			<g clip-path="url(#clip3)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="208.70001,208.70001">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.87352" y="208.70001,208.70001">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.86944" y="208.70001,208.70001">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="62.62428" y="208.70001,208.70001">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="147.5,152.76884" y="210.38,210.38,210.38">CH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="159.02371" y="210.38,210.38">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="165.01964,169.23271,174.16292" y="210.38,210.38,210.38,210.38">LTU</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.617,182.86797" y="210.38,210.38,210.38">&#160;M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="191.64273,198.1466" y="210.38,210.38,210.38">US</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="202.79793" y="210.38,210.38">A</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="302.09" y="208.94,208.94">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.6756" y="208.94,208.94">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="311.6516" y="208.94,208.94"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.532" y="208.94,208.94">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.7232" y="208.94,208.94">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip4)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="225.02002,225.02002">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="45.961197,52.465076,58.072556" y="225.02002,225.02002,225.02002,225.02002">URN</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="64.67604" y="225.02002,225.02002">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="70.67196" y="225.02002,225.02002">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="79.426796" y="225.02002,225.02002">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="160.7" y="225.62,225.62">H</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="166.94492" y="225.62,225.62">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="172.94084" y="225.62,225.62">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="179.18576" y="225.62,225.62">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="183.98648" y="225.62,225.62">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="189.61388" y="225.62,225.62">A</text>
// 			</g>
// 			<g clip-path="url(#clip5)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="284.69" y="225.26001,225.26001">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="288.7736" y="225.26001,225.26001">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.164" y="225.26001,225.26001">ئ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="293.8532" y="225.26001,225.26001">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.144" y="225.26001,225.26001">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="299.7296" y="225.26001,225.26001">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="302.02042" y="225.26001,225.26001">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="304.2116" y="225.26001,225.26001">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="307.0004" y="225.26001,225.26001">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.586" y="225.26001,225.26001">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.6616" y="225.26001,225.26001">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.85278" y="225.26001,225.26001">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip6)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28,46.57872" y="242.53998,242.53998,242.53998">PL</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="50.761917" y="242.53998,242.53998">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="56.757835,62.026676" y="242.53998,242.53998,242.53998">CE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="66.83736,69.08832,75.82128,80.39292" y="242.53998,242.53998,242.53998,242.53998,242.53998">&#160;OF&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="82.663795" y="242.53998,242.53998">B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="88.2912,90.950516,96.558,101.4882" y="242.53998,242.53998,242.53998,242.53998,242.53998">IRTH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="168.74" y="243.02002,243.02002">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="174.73593" y="243.02002,243.02002">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.36333" y="243.02002,243.02002">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="185.04453" y="243.02002,243.02002">I</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="280.25" y="242.18,242.18">ة</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="283.6364" y="242.18,242.18">د</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.02283" y="242.18,242.18"></text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.90323" y="242.18,242.18">و</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.38522" y="242.18,242.18">ل</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.67603" y="242.18,242.18">ا</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.86722" y="242.18,242.18">&#160;</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="303.656" y="242.18,242.18">ن</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.0344" y="242.18,242.18">ا</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="311.3252" y="242.18,242.18">ك</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.8112" y="242.18,242.18">م</text>
// 				<text style="fill:#1F2023;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.9944" y="242.18,242.18">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip7)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="260.45,260.45">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.275917,53.620438" y="260.45,260.45,260.45">GE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="173.18,178.21999" y="260.45,260.45,260.45">23</text>
// 			</g>
// 			<g clip-path="url(#clip8)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="302.33" y="259.01,259.01">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.6128" y="259.01,259.01">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.69638" y="259.01,259.01">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.28198" y="259.01,259.01">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.57278" y="259.01,259.01">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.76398" y="259.01,259.01">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip9)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28,46.57872" y="277.13,277.13,277.13">PA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="52.56468" y="277.13,277.13">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="57.24588" y="277.13,277.13">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="61.92708,67.2258" y="277.13,277.13,277.13">PO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="73.92888" y="277.13,277.13">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="79.55628,84.48648,86.73744" y="277.13,277.13,277.13,277.13">T&#160;N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="93.35088" y="277.13,277.13">O</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="155.54" y="277.13,277.13">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="160.34071,165.63943,170.68915" y="277.13,277.13,277.13,277.13">P93</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="175.69904,180.74875,185.79846,190.84818" y="277.13,277.13,277.13,277.13,277.13">5178</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="195.85808" y="277.13,277.13">6</text>
// 			</g>
// 			<g clip-path="url(#clip10)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="268.13" y="276.05,276.05">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="272.4128" y="276.05,276.05">ف</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="275.69962" y="276.05,276.05">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.7752" y="276.05,276.05">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="284.066" y="276.05,276.05">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="286.2572" y="276.05,276.05">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="289.046" y="276.05,276.05">ز</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="293.3288" y="276.05,276.05">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="295.52" y="276.05,276.05">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.00198" y="276.05,276.05">ج</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.18118" y="276.05,276.05">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="307.96997" y="276.05,276.05">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="311.55557" y="276.05,276.05">ق</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.54358" y="276.05,276.05">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.8264" y="276.05,276.05">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip11)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="293.33,293.33">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.524918" y="293.33,293.33">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.520836,58.451035" y="293.33,293.33,293.33">TE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="63.2418,65.49276,72.22572,76.79736" y="293.33,293.33,293.33,293.33,293.33">&#160;OF&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="79.06824" y="293.33,293.33">B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="84.69564,87.35496,92.96244,97.89264" y="293.33,293.33,293.33,293.33,293.33">IRTH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="152.54,157.5897,162.63942" y="293.81,293.81,293.81,293.81">28-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="165.61748" y="293.81,293.81">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="171.6134" y="293.81,293.81">p</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="177.00177" y="293.81,293.81">r</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.58737" y="293.81,293.81">-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="183.58533,188.63504,193.68475,198.73447" y="293.81,293.81,293.81,293.81,293.81">2001</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="278.33" y="292.73,292.73">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.7164" y="292.73,292.73"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.1944" y="292.73,292.73">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="289.9832" y="292.73,292.73">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="294.06677" y="292.73,292.73">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.35757" y="292.73,292.73">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.54877" y="292.73,292.73">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.33755" y="292.73,292.73">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.91516" y="292.73,292.73">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.60437" y="292.73,292.73">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="313.88718" y="292.73,292.73">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.2776" y="292.73,292.73">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.9668" y="292.73,292.73">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip12)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="310.73,310.73">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.524918" y="310.73,310.73">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.520836,58.451035" y="310.73,310.73,310.73">TE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="63.2418,65.49276,72.22572,76.79736" y="310.73,310.73,310.73,310.73,310.73">&#160;OF&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="79.06824,81.727554" y="310.73,310.73,310.73">IS</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="86.38884" y="310.73,310.73">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="91.07004,97.57392" y="310.73,310.73,310.73">UE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="150.86,155.90971,160.95943" y="311.21,311.21,311.21,311.21">29-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="163.93748" y="311.21,311.21">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="172.69232,177.61256" y="311.21,311.21,311.21">ay</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="182.29376" y="311.21,311.21">-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="185.29172,190.34143,195.39114,200.44086" y="311.21,311.21,311.21,311.21,311.21">2024</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="273.89" y="309.77,309.77">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="278.17282" y="309.77,309.77">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="280.364" y="309.77,309.77">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="283.75043" y="309.77,309.77">ص</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.32004" y="309.77,309.77"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.20044" y="309.77,309.77">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.39163" y="309.77,309.77">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.18042" y="309.77,309.77">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.75803" y="309.77,309.77">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.44724" y="309.77,309.77">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="313.73004" y="309.77,309.77">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.12045" y="309.77,309.77">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.80966" y="309.77,309.77">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip13)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="328.13,328.13">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.524918" y="328.13,328.13">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.520836,58.451035" y="328.13,328.13,328.13">TE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="63.2418,65.49276,72.22572,76.79736" y="328.13,328.13,328.13,328.13,328.13">&#160;OF&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="79.06824" y="328.13,328.13">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="83.86896" y="328.13,328.13">X</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="89.37684,94.67556" y="328.13,328.13,328.13">PI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="97.29504" y="328.13,328.13">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="102.92244" y="328.13,328.13">Y</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="150.86,155.90971,160.95943" y="328.61,328.61,328.61,328.61">28-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="163.93748" y="328.61,328.61">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="172.69232,177.61256" y="328.61,328.61,328.61">ay</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="182.29376" y="328.61,328.61">-</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="185.29172,190.34143,195.39114,200.44086" y="328.61,328.61,328.61,328.61,328.61">2029</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="274.49" y="327.17,327.17">ء</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="279.1712" y="327.17,327.17">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.462" y="327.17,327.17">ه</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.944" y="327.17,327.17">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="288.7328" y="327.17,327.17">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.422" y="327.17,327.17"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.3024" y="327.17,327.17">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.4936" y="327.17,327.17">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.28238" y="327.17,327.17">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.86" y="327.17,327.17">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.5492" y="327.17,327.17">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="313.832" y="327.17,327.17">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.2224" y="327.17,327.17">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.91162" y="327.17,327.17">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip14)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="345.53,345.53">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.87352" y="345.53,345.53">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.86944,58.799637,61.458958" y="345.53,345.53,345.53,345.53">TIO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="68.15208" y="345.53,345.53">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="74.7456" y="345.53,345.53">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="80.741516,84.9546" y="345.53,345.53,345.53">LI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="87.58404,92.51424" y="345.53,345.53,345.53">TY</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="155.3" y="346.01,346.01">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="160.10072,165.03093" y="346.01,346.01,346.01">TH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="171.25592,173.91524" y="346.01,346.01,346.01">IO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.61832,185.91704" y="346.01,346.01,346.01">PI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="188.53651" y="346.01,346.01">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="194.53244" y="346.01,346.01">N</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="293.45" y="344.57,344.57">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="297.5336" y="344.57,344.57">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.3224" y="344.57,344.57">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.39798" y="344.57,344.57">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.18677" y="344.57,344.57">ج</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.36597" y="344.57,344.57">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.65677" y="344.57,344.57">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.84796" y="344.57,344.57">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip15)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="363.41,363.41">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="50.03484" y="363.41,363.41">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="56.030758" y="363.41,363.41">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="61.658157,64.317474,69.24767" y="363.41,363.41,363.41,363.41">ITA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="75.213715,79.426796,81.67776,86.38884,91.31904" y="363.41,363.41,363.41,363.41,363.41,363.41">L&#160;STA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="97.29504,102.225235" y="363.41,363.41,363.41">TU</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="108.699234" y="363.41,363.41">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="163.58" y="363.41,363.41">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="168.2612,170.92052,177.48416" y="363.41,363.41,363.41,363.41">ING</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="183.8486,188.06168" y="363.41,363.41,363.41">LE</text>
// 			</g>
// 			<g clip-path="url(#clip16)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="264.29" y="361.97,361.97">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="268.3736" y="361.97,361.97">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="271.16238" y="361.97,361.97">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="276.54077" y="361.97,361.97">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="278.83157" y="361.97,361.97">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="282.91516" y="361.97,361.97">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.60437" y="361.97,361.97">ج</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="290.78357" y="361.97,361.97"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="295.66397" y="361.97,361.97">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="297.85516" y="361.97,361.97">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.64395" y="361.97,361.97">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="304.72754" y="361.97,361.97">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="307.01834" y="361.97,361.97">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.30914" y="361.97,361.97">ح</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.48834" y="361.97,361.97">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.77914" y="361.97,361.97">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.97034" y="361.97,361.97">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip17)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56" y="376.97,376.97">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="50.153522,56.657402" y="376.97,376.97,376.97">UM</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="65.38236" y="376.97,376.97">B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="71.009766" y="376.97,376.97">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="75.810486" y="376.97,376.97">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="81.43789,83.68885,90.421814" y="376.97,376.97,376.97,376.97">&#160;OF</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="376.97,376.97">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56,48.828842" y="390.05,390.05,390.05">CH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="55.08372,57.743042" y="390.05,390.05,390.05">IL</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="61.92624" y="390.05,390.05">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="68.17116" y="390.05,390.05">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="73.79856" y="390.05,390.05">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="78.59928" y="390.05,390.05">N</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="390.05,390.05">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip18)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="175.7" y="389.45,389.45">0</text>
// 			</g>
// 			<g clip-path="url(#clip19)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.81" y="383.69,383.69">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="286.292" y="383.69,383.69">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="288.5828" y="383.69,383.69">ف</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.77" y="383.69,383.69">ط</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.9492" y="383.69,383.69"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.8296" y="383.69,383.69">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="304.02078" y="383.69,383.69">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="306.80957" y="383.69,383.69">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.19598" y="383.69,383.69">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="313.5824" y="383.69,383.69">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.9608" y="383.69,383.69">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip20)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="406.37,406.37">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="46.9074" y="406.37,406.37">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="51.70812,55.9212" y="406.37,406.37,406.37">LI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="58.550636,64.89516,67.554474,74.28744" y="406.37,406.37,406.37,406.37,406.37">GION</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="162.62" y="406.85,406.85">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="171.37483" y="406.85,406.85">u</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="176.7632,180.73724" y="406.85,406.85,406.85">sl</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="183.12764" y="406.85,406.85">i</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="185.528" y="406.85,406.85">m</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="299.09" y="405.41,405.41">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="303.2732" y="405.41,405.41">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.9624" y="405.41,405.41">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="308.3528" y="405.41,405.41">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="311.04202" y="405.41,405.41">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.42844" y="405.41,405.41">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.71924" y="405.41,405.41">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.91043" y="405.41,405.41">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip21)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28,50.303757" y="421.63,421.63,421.63">WE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="55.084557,57.743877,64.088394" y="421.63,421.63,421.63,421.63">IGH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="70.32336" y="421.63,421.63">T</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.17" y="421.75,421.75">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.5484" y="421.75,421.75">ز</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.8312" y="421.75,421.75">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.3132" y="421.75,421.75">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.604" y="421.75,421.75">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.7952" y="421.75,421.75">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip22)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="437.83,437.83">H</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.524918" y="437.83,437.83">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="52.325638,54.98496,61.32948" y="437.83,437.83,437.83,437.83">IGH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="67.56444" y="437.83,437.83">T</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.29" y="438.43,438.43">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="304.772" y="438.43,438.43">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="309.254" y="438.43,438.43">ط</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.4332" y="438.43,438.43">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.724" y="438.43,438.43">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.9152" y="438.43,438.43">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip23)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56" y="452.71,452.71">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="48.36072" y="452.71,452.71">D</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="54.60564,61.10952,66.37836" y="452.71,452.71,452.71,452.71">UCA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="72.36432,77.29452,79.953835" y="452.71,452.71,452.71,452.71">TIO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="86.64696" y="452.71,452.71">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="93.24048" y="452.71,452.71">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="99.2364" y="452.71,452.71">L</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="452.71,452.71">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56" y="465.79,465.79">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="49.55592,54.48612,59.416317" y="465.79,465.79,465.79,465.79"></text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="65.39232,68.051636,74.61527" y="465.79,465.79,465.79,465.79"></text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="83.38008" y="465.79,465.79">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="88.1808" y="465.79,465.79">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="94.77432" y="465.79,465.79">T</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="465.79,465.79">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip24)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="147.02,152.31873" y="466.27,466.27,466.27">Pr</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="155.89436" y="466.27,466.27">i</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="158.29472" y="466.27,466.27">m</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="166.442,171.36224" y="466.27,466.27,466.27">ar</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="174.94785" y="466.27,466.27">y</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="179.62904,181.88,186.59108" y="466.27,466.27,466.27,466.27">&#160;Sc</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="190.77428" y="466.27,466.27">h</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="196.16264" y="466.27,466.27">o</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="201.55101" y="466.27,466.27">o</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="206.93938" y="466.27,466.27">lzzzzz</text>
// 			</g>
// 			<g clip-path="url(#clip25)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="261.53" y="460.51,460.51">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="267.3068" y="460.51,460.51">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="273.3824" y="460.51,460.51">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="275.57358" y="460.51,460.51">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="279.85638" y="460.51,460.51">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="283.2428" y="460.51,460.51">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.5336" y="460.51,460.51">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.7248" y="460.51,460.51">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="290.6132" y="460.51,460.51">ى</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="296.98758" y="460.51,460.51">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.46957" y="460.51,460.51">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="304.25836" y="460.51,460.51">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.33395" y="460.51,460.51">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.41754" y="460.51,460.51">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.70834" y="460.51,460.51">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.89954" y="460.51,460.51">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip26)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56,48.858723" y="478.75,478.75,478.75">PO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="55.561802" y="478.75,478.75">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="60.243004,65.1732,67.424164,73.45992" y="478.75,478.75,478.75,478.75,478.75">T&#160;AP</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="78.7188,84.017525" y="478.75,478.75,478.75">PL</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="88.20072,90.86004" y="478.75,478.75,478.75">IE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="95.64084" y="478.75,478.75">D</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="478.75,478.75">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56,48.12004,54.8414" y="491.83,491.83,491.83,491.83">FOR</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="491.83,491.83">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip27)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="151.94" y="492.31,492.31">H</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="158.18492,164.91788" y="492.31,492.31,492.31">OU</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="171.38193" y="492.31,492.31">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="176.06313" y="492.31,492.31">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.86385" y="492.31,492.31">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="189.61868" y="492.31,492.31">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="195.61461,198.27393" y="492.31,492.31,492.31">ID</text>
// 			</g>
// 			<g clip-path="url(#clip28)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="249.17" y="486.55,486.55">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="251.4608" y="486.55,486.55">ه</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="255.9428" y="486.55,486.55">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="258.7316" y="486.55,486.55">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="261.0224" y="486.55,486.55">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="263.2136" y="486.55,486.55">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="266.00238" y="486.55,486.55">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="269.9864" y="486.55,486.55">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="274.1696" y="486.55,486.55">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="277.556" y="486.55,486.55">ق</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="280.8428" y="486.55,486.55">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="283.6316" y="486.55,486.55">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.71518" y="486.55,486.55">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="290.00598" y="486.55,486.55">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="292.19717" y="486.55,486.55">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="294.98596" y="486.55,486.55">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="299.06955" y="486.55,486.55">ف</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="302.35635" y="486.55,486.55">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.14514" y="486.55,486.55">ظ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.32434" y="486.55,486.55">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.80634" y="486.55,486.55">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="317.09714" y="486.55,486.55">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="319.28833" y="486.55,486.55">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip29)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56" y="506.35,506.35">M</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="52.314842,59.047802,65.61144,70.54164" y="506.35,506.35,506.35,506.35,506.35">ONTH</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="76.796524,81.009605" y="506.35,506.35,506.35">LY</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="506.35,506.35">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56" y="519.43,519.43">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="48.241203" y="519.43,519.43">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="54.23712,58.450203" y="519.43,519.43,519.43">LA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="64.43616" y="519.43,519.43">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="70.06356" y="519.43,519.43">Y</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="519.43,519.43">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip30)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="156.02" y="519.91003,519.91003">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="160.7012" y="519.91003,519.91003">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="166.69713" y="519.91003,519.91003">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="172.32452,174.57549,179.6252" y="519.91003,519.91003,519.91003,519.91003">&#160;1,</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="182.16501,187.21472,192.26443" y="519.91003,519.91003,519.91003,519.91003">000</text>
// 			</g>
// 			<g clip-path="url(#clip31)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="270.05" y="513.31,513.31">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="276.524" y="513.31,513.31">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="280.8068" y="513.31,513.31">ه</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.2888" y="513.31,513.31">ش</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="291.36438" y="513.31,513.31">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="293.65518" y="513.31,513.31">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="295.84637" y="513.31,513.31">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.63516" y="513.31,513.31">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.20877" y="513.31,513.31">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="307.89798" y="513.31,513.31">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="310.08917" y="513.31,513.31">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.37198" y="513.31,513.31">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="316.66278" y="513.31,513.31">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.85397" y="513.31,513.31">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip32)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56,48.828842,55.561802" y="532.39,532.39,532.39,532.39">CON</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="62.145363,67.07556,72.683044,78.7188,83.98764" y="532.39,532.39,532.39,532.39,532.39,532.39">TRACT</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="532.39,532.39">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="43.56,48.858723" y="545.47,545.47,545.47">PE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="53.639523" y="545.47,545.47">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="59.266922,61.926243" y="545.47,545.47,545.47">IO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="68.62932" y="545.47,545.47">D</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="545.47,545.47">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip33)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="161.42,166.46971,168.72067,173.89987" y="545.95,545.95,545.95,545.95,545.95">2&#160;YE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="178.70059" y="545.95,545.95">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="184.69652" y="545.95,545.95">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="190.32391" y="545.95,545.95">S</text>
// 			</g>
// 			<g clip-path="url(#clip34)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.77" y="540.19,540.19">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="289.1564" y="540.19,540.19">ق</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="292.1444" y="540.19,540.19">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="294.4352" y="540.19,540.19">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="298.0208" y="540.19,540.19">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="300.8096" y="540.19,540.19">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="303.1004" y="540.19,540.19">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.2916" y="540.19,540.19">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="308.08038" y="540.19,540.19">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="311.4668" y="540.19,540.19">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.7536" y="540.19,540.19">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.9368" y="540.19,540.19">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip35)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="563.58997,563.58997">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="47.275917" y="563.58997,563.58997">R</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="52.903316" y="563.58997,563.58997">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="58.899235" y="563.58997,563.58997">B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="64.526634,67.18595,72.45479,74.70575,80.98055" y="563.58997,563.58997,563.58997,563.58997,563.58997,563.58997">IC&#160;DE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="85.77132,92.11584" y="563.58997,563.58997,563.58997">GR</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="97.76315" y="563.58997,563.58997">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="102.56387" y="563.58997,563.58997">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="165.98,171.26001,177.97427,184.68854" y="564.07,564.07,564.07,564.07,564.07">POOR</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="253.01" y="562.27,562.27">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="257.0936" y="562.27,562.27">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="259.982" y="562.27,562.27">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="262.6712" y="562.27,562.27">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="266.954" y="562.27,562.27">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="270.5396" y="562.27,562.27">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="272.8304" y="562.27,562.27">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="275.0216" y="562.27,562.27">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="277.8104" y="562.27,562.27">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.89398" y="562.27,562.27">غ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.47958" y="562.27,562.27">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.7704" y="562.27,562.27">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="290.0612" y="562.27,562.27">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="292.25238" y="562.27,562.27">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="295.14078" y="562.27,562.27">ى</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.51517" y="562.27,562.27">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.99716" y="562.27,562.27">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="308.78595" y="562.27,562.27">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.76196" y="562.27,562.27">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.94516" y="562.27,562.27">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip36)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="41.28" y="579.07,579.07">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="46.08072" y="579.07,579.07">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="52.67424,59.01876,63.231842,65.89116" y="579.07,579.07,579.07,579.07,579.07">GLIS</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="70.552444" y="579.07,579.07">H</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="76.79736,79.048325,85.32313" y="579.07,579.07,579.07,579.07">&#160;DE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="90.113884,96.458405" y="579.07,579.07,579.07">GR</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="102.10573" y="579.07,579.07">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="106.90645" y="579.07,579.07">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="165.98,171.26001,177.97427,184.68854" y="580.51,580.51,580.51,580.51,580.51">POOR</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="243.65" y="580.03,580.03">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="247.83319" y="580.03,580.03">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="250.52238" y="580.03,580.03">ز</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="254.80519" y="580.03,580.03">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="257.594" y="580.03,580.03">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="259.8848" y="580.03,580.03">ج</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="265.064" y="580.03,580.03">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="267.7532" y="580.03,580.03"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="272.6336" y="580.03,580.03">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="274.8248" y="580.03,580.03">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="277.6136" y="580.03,580.03">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="281.69717" y="580.03,580.03">غ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.28278" y="580.03,580.03">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="287.57358" y="580.03,580.03">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="289.86438" y="580.03,580.03">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="292.05557" y="580.03,580.03">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="294.94397" y="580.03,580.03">ى</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="301.31836" y="580.03,580.03">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="305.80035" y="580.03,580.03">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="308.58914" y="580.03,580.03">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="314.56516" y="580.03,580.03">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="318.74835" y="580.03,580.03">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip37)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="55.56" y="681.1,681.1">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="60.6384" y="681.1,681.1">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="63.288002" y="681.1,681.1">ف</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="66.9312" y="681.1,681.1">ط</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="72.672" y="681.1,681.1"></text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="78.0816" y="681.1,681.1">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="80.5104" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="83.6016" y="681.1,681.1">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="88.128" y="681.1,681.1">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="91.108795" y="681.1,681.1">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="94.08959" y="681.1,681.1">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="98.83679" y="681.1,681.1">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="101.81759" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="104.90879" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="107.99999" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="111.091194" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="114.182396" y="681.1,681.1">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="165.62" y="681.1,681.1">ه</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="170.1464" y="681.1,681.1">ف</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="173.45839" y="681.1,681.1">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="176.10799" y="681.1,681.1">ظ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="181.84879" y="681.1,681.1">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="184.93999" y="681.1,681.1">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="187.47919" y="681.1,681.1">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="267.89" y="681.1,681.1">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="272.9684" y="681.1,681.1">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="275.94922" y="681.1,681.1">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="282.68362" y="681.1,681.1">غ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="286.76843" y="681.1,681.1">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="289.30765" y="681.1,681.1">ا</text>
// 			</g>
// 			<g clip-path="url(#clip38)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="49.56,51.810963" y="703.416,703.416,703.416">&#160;B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="57.46824" y="703.416,703.416">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="63.464157" y="703.416,703.416">B</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="69.09156,74.27076,76.52172,81.2328" y="703.416,703.416,703.416,703.416,703.416">Y&#160;SI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="83.85228,88.78248,93.71268" y="703.416,703.416,703.416,703.416">TTI</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="96.33216" y="703.416,703.416">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="102.92568" y="703.416,703.416">G</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="156.62,161.88884,166.10191" y="703.416,703.416,703.416,703.416">CLE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="170.90263" y="703.416,703.416">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="176.89856" y="703.416,703.416">N</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="183.49208,186.1514,192.71504" y="703.416,703.416,703.416,703.416">ING</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="259.37,268.39377" y="701.856,701.856,701.856">WA</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="274.36975" y="701.856,701.856">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="279.05096" y="701.856,701.856">H</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="285.2959,287.95523,294.51886" y="701.856,701.856,701.856,701.856">ING</text>
// 			</g>
// 			<g clip-path="url(#clip39)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="72.144,77.3232" y="717.456,717.456,717.456">YE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="82.104" y="717.456,717.456">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="170.54,175.7192" y="717.456,717.456,717.456">YE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="180.5" y="717.456,717.456">S</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="272.45,277.6292" y="717.456,717.456,717.456">YE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="282.41" y="717.456,717.456">S</text>
// 			</g>
// 			<g clip-path="url(#clip40)">
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="62.4" y="187.94,187.94">P</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="68.988" y="187.94,187.94">e</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="74.496,78.324005" y="187.94,187.94,187.94">rs</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="83.844,89.856,95.868004,101.340004" y="187.94,187.94,187.94,187.94,187.94">onal</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="104.112,106.848" y="187.94,187.94,187.94">&#160;i</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="109.62,115.632" y="187.94,187.94,187.94">nf</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="118.86,124.872,128.7,137.448" y="187.94,187.94,187.94,187.94,187.94">orma</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="142.968,146.244,148.98001,154.992" y="187.94,187.94,187.94,187.94,187.94">tion</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="160.968,163.70401" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="166.476,169.212" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="171.984,174.72" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="177.49199,180.228" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="182.99998,185.736" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="188.50798,191.24399" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="194.01598,196.75198" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="199.52397,202.25998" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="205.03197,207.76797" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="210.53996,213.27597" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="216.04796,218.78397" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="221.55595,224.29196" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF3;font-weight:bold;" font-size="12" fill-opacity="1" x="227.06395,229.79996" y="187.94,187.94,187.94">&#160;&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="267.29" y="187.94,187.94">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="275.09" y="187.94,187.94">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="277.85" y="187.94,187.94">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="282.89" y="187.94,187.94">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="288.29" y="187.94,187.94">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="291.05002" y="187.94,187.94">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="295.37003" y="187.94,187.94">م</text>
// 				<text style="fill:#000000;font-family:FF4;font-weight:bold;" font-size="12" fill-opacity="1" x="263.93" y="187.94,187.94">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="232.85" y="187.94,187.94">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="237.89" y="187.94,187.94">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="241.13" y="187.94,187.94">ص</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="250.37001" y="187.94,187.94">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="12" fill-opacity="1" x="256.61002" y="187.94,187.94">ش</text>
// 			</g>
// 			<g clip-path="url(#clip41)">
// 				<text style="fill:#000000;font-family:Arial;font-weight:bold;" font-size="12" fill-opacity="1" x="350.83,359.494,368.83,377.494,385.498,388.83398,397.498,406.83398" y="188.18,188.18,188.18,188.18,188.18,188.18,188.18,188.18,188.18">CODE&#160;NO.</text>
// 			</g>
// 			<g clip-path="url(#clip42)">
// 				<text style="fill:#000000;font-family:Arial;font-weight:bold;" font-size="12" fill-opacity="1" x="479.86,486.58,493.3,500.02" y="188.18,188.18,188.18,188.18,188.18">J100</text>
// 			</g>
// 			<g clip-path="url(#clip43)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="81.384" y="596.5,596.5">O</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="89.532005" y="596.5,596.5">W</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="100.44,108.348" y="596.5,596.5,596.5">N&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="111.108,117.492004,125.064,133.176,141.084" y="596.5,596.5,596.5,596.5,596.5,596.5">PHONE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="146.976" y="596.5,596.5">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="149.724,157.632,165.468" y="596.5,596.5,596.5,596.5">NUM</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="175.884,182.616,188.472" y="596.5,596.5,596.5,596.5">BER</text>
// 			</g>
// 			<g clip-path="url(#clip44)">
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="419.83" y="600.7,600.7">ي</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="415.75" y="596.98,596.98">ص</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="430.75" y="596.98,596.98">خ</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="438.79" y="596.98,596.98">ش</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="447.31" y="596.98,596.98">ل</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="450.31" y="596.98,596.98">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="452.59" y="596.98,596.98">&#160;</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="455.35" y="596.98,596.98">ف</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="466.39" y="596.98,596.98">ت</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="469.51" y="596.98,596.98">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="472.27002" y="596.98,596.98">ه</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="477.43002" y="596.98,596.98">ل</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="480.43002" y="596.98,596.98">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="482.71002" y="596.98,596.98">&#160;</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="485.47003" y="596.98,596.98">م</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="491.95004" y="596.98,596.98">ق</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="494.83005" y="596.98,596.98">ر</text>
// 			</g>
// 			<g clip-path="url(#clip45)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="69.384,75.732" y="614.38,614.38,614.38">CO</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="83.892,91.799995" y="614.38,614.38,614.38">NT</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="97.799995" y="614.38,614.38">A</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="105.107994,111.45599" y="614.38,614.38,614.38">CT</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="117.45599" y="614.38,614.38">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="120.203995,126.588,134.16,142.272,150.18001" y="614.38,614.38,614.38,614.38,614.38,614.38">PHONE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="156.07199" y="614.38,614.38">&#160;</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="158.81999,166.728,174.564" y="614.38,614.38,614.38,614.38">NUM</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="184.98,191.71199,197.568,204.32399" y="614.38,614.38,614.38,614.38,614.38">BER&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip46)">
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="419.23" y="614.38,614.38">ب</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="427.39" y="614.38,614.38">ر</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="432.55002" y="614.38,614.38">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="435.31003" y="614.38,614.38">ق</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="439.75003" y="614.38,614.38"></text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="446.71002" y="614.38,614.38">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="448.99002" y="614.38,614.38">&#160;</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="451.75003" y="614.38,614.38">ف</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="462.79004" y="614.38,614.38">ت</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="465.91003" y="614.38,614.38">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="468.67004" y="614.38,614.38">ه</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="473.83005" y="614.38,614.38">ل</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="476.83005" y="614.38,614.38">ا</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="479.11005" y="614.38,614.38">&#160;</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="481.87006" y="614.38,614.38">م</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="488.35007" y="614.38,614.38">ق</text>
// 				<text style="fill:#000000;font-family:FF2;font-weight:bold;" font-size="12" fill-opacity="1" x="491.23007" y="614.38,614.38">ر</text>
// 			</g>
// 			<g clip-path="url(#clip47)">
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="66.144,73.68432,82.11888" y="640.9,640.9,640.9,640.9">EXP</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="90.14496,97.68528,106.31856,112.3464" y="640.9,640.9,640.9,640.9,640.9">ERIA</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="120.86928,130.22015" y="640.9,640.9,640.9">NC</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="138.25728,145.79759" y="640.9,640.9,640.9">E&#160;</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="149.54016" y="640.9,640.9">C</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="157.56624,166.95024,175.91472,185.2656" y="640.9,640.9,640.9,640.9,640.9">OUNT</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="192.83904,201.47232" y="640.9,640.9,640.9">RY</text>
// 			</g>
// 			<g clip-path="url(#clip48)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="299.69" y="640.66003,640.66003">-</text>
// 			</g>
// 			<g clip-path="url(#clip49)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="435.43" y="641.74,641.74">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="440.20358" y="641.74,641.74">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="443.43277" y="641.74,641.74">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="447.08316" y="641.74,641.74">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="450.31235" y="641.74,641.74">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="453.40115" y="641.74,641.74">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="457.33237" y="641.74,641.74">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="462.10596" y="641.74,641.74">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="468.28357" y="641.74,641.74">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="472.07437" y="641.74,641.74">خ</text>
// 			</g>
// 			<g clip-path="url(#clip50)">
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="84.024,96.47712,105.86112,114.4944,123.00624,129.03409,138.38496" y="659.38,659.38,659.38,659.38,659.38,659.38,659.38,659.38">WORKING</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="147.37152" y="659.38,659.38">&#160;</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="151.092,159.22847" y="659.38,659.38,659.38">YE</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="166.80191" y="659.38,659.38">A</text>
// 				<text style="fill:#000000;font-family:FF5;font-weight:bold;" font-size="11.04" fill-opacity="1" x="175.3248,183.95808" y="659.38,659.38,659.38">RS</text>
// 			</g>
// 			<g clip-path="url(#clip51)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="12" fill-opacity="1" x="299.69" y="659.14,659.14">-</text>
// 			</g>
// 			<g clip-path="url(#clip52)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="410.23" y="660.22,660.22">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="415.0036" y="660.22,660.22">ر</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="421.1812" y="660.22,660.22">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="424.97202" y="660.22,660.22">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="432.13242" y="660.22,660.22">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="435.3616" y="660.22,660.22">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="438.4504" y="660.22,660.22">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="442.2412" y="660.22,660.22">ت</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="451.36722" y="660.22,660.22">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="454.45602" y="660.22,660.22">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="460.77402" y="660.22,660.22">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="464.56482" y="660.22,660.22">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="473.1292" y="660.22,660.22">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="477.06042" y="660.22,660.22">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="481.834" y="660.22,660.22">د</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="486.6076" y="660.22,660.22">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="494.1892" y="660.22,660.22">و</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="14.04" fill-opacity="1" x="500.5072" y="660.22,660.22">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip53)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="370.15" y="680.62,680.62">خ</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="376.222" y="680.62,680.62">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="379.2028" y="680.62,680.62">ط</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="385.054" y="680.62,680.62">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="11.04" fill-opacity="1" x="387.5932" y="680.62,680.62">ا</text>
// 			</g>
// 			<g clip-path="url(#clip54)">
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="467.38" y="680.26,680.26">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="472.7584" y="680.26,680.26">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="475.54718" y="680.26,680.26">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="478.33597" y="680.26,680.26">س</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="484.41156" y="680.26,680.26">م</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="488.49515" y="680.26,680.26">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="490.78595" y="680.26,680.26">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="493.17636" y="680.26,680.26">ب</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="495.86557" y="680.26,680.26">&#160;</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="498.65436" y="680.26,680.26">ة</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="502.83755" y="680.26,680.26">ي</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="505.52676" y="680.26,680.26">ا</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="507.81757" y="680.26,680.26">ن</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="510.60635" y="680.26,680.26">ع</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="514.19196" y="680.26,680.26">ل</text>
// 				<text style="fill:#000000;font-family:FF1;font-weight:bold;" font-size="9.96" fill-opacity="1" x="516.4827" y="680.26,680.26">ا</text>
// 			</g>
// 			<g clip-path="url(#clip55)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="360.67,365.93884,372.6718,379.4048" y="701.376,701.376,701.376,701.376,701.376">COOK</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="384.79312,387.45245,394.01608" y="701.376,701.376,701.376,701.376">ING</text>
// 			</g>
// 			<g clip-path="url(#clip56)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="472.66" y="701.376,701.376">E</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="477.46072" y="701.376,701.376">l</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="479.86108" y="701.376,701.376">d</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="485.24945" y="701.376,701.376">e</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="490.27924" y="701.376,701.376">r</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="493.86484,496.11578" y="701.376,701.376,701.376">&#160;c</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="500.33884,505.25906" y="701.376,701.376,701.376">ar</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="508.84467" y="701.376,701.376">e</text>
// 			</g>
// 			<g clip-path="url(#clip57)">
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="485.62,490.7992" y="717.456,717.456,717.456">YE</text>
// 				<text style="fill:#000000;font-family:FF0;font-weight:bold;" font-size="9.96" fill-opacity="1" x="495.58" y="717.456,717.456">S</text>
// 			</g>
// 			<g clip-path="url(#clip58)">
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 348.59L322.19 348.59" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 347.69L322.25 347.69L322.25 347.69L322.25 348.65002L322.25 348.65002L40.44 348.65002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M235.79 594.4L235.79 207.95" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M235.73 207.89L236.69 207.89L236.69 207.89L236.69 594.46L236.69 594.46L235.73 594.46z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M547.9 205.94L549.82 205.94L549.82 205.94L549.82 619.05L549.82 619.05L547.9 619.05z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M38.52 163.7L40.44 163.7L40.44 163.7L40.44 620.97L40.44 620.97L38.52 620.97z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M235.25 170.42L237.17 170.42L237.17 170.42L237.17 205.22L237.17 205.22L235.25 205.22z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M364.99 170.42L366.91 170.42L366.91 170.42L366.91 205.22L366.91 205.22L364.99 205.22z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M547.9 163.7L549.82 163.7L549.82 163.7L549.82 205.22L549.82 205.22L547.9 205.22z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M118.88 594.4L118.88 207.95" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M118.82 207.89L119.78001 207.89L119.78001 207.89L119.78001 594.46L119.78001 594.46L118.82 594.46z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M322.25 205.94L324.194 205.94L324.194 205.94L324.194 619.05L324.194 619.05L322.25 619.05z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M435.91 594.46L437.83002 594.46L437.83002 594.46L437.83002 619.06L437.83002 619.06L435.91 619.06z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M39.06 163.64L39.06 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39 68.784L39.96 68.784L39.96 68.784L39.96 163.704L39.96 163.704L39 163.704z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M322.79 126.68L322.79 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M322.73 68.784L323.69 68.784L323.69 68.784L323.69 126.743996L323.69 126.743996L322.73 126.743996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M436.45 126.68L436.45 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M436.39 68.784L437.35 68.784L437.35 68.784L437.35 126.743996L437.35 126.743996L436.39 126.743996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M548.44 163.64L548.44 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M548.38 68.784L549.34 68.784L549.34 68.784L549.34 163.704L549.34 163.704L548.38 163.704z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M118.88 126.68L118.88 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M118.82 68.784L119.78001 68.784L119.78001 68.784L119.78001 126.743996L119.78001 126.743996L118.82 126.743996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M235.79 163.64L235.79 68.844" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M235.73 68.784L236.69 68.784L236.69 68.784L236.69 163.704L236.69 163.704L235.73 163.704z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M365.53 163.64L365.53 126.8" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M365.47 126.74L366.43 126.74L366.43 126.74L366.43 163.7L366.43 163.7L365.47 163.7z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 619.06L549.82 619.06L549.82 619.06L549.82 620.98L549.82 620.98L40.44 620.98z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 594.46L549.82 594.46L549.82 594.46L549.82 596.38L549.82 596.38L40.44 596.38z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 578.44L322.19 578.44" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 577.54L322.25 577.54L322.25 577.54L322.25 578.5L322.25 578.5L40.44 578.5z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 563.2L322.19 563.2" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 562.3L322.25 562.3L322.25 562.3L322.25 563.25995L322.25 563.25995L40.44 563.25995z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 545.8L322.19 545.8" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 544.9L322.25 544.9L322.25 544.9L322.25 545.86005L322.25 545.86005L40.44 545.86005z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 528.37L322.19 528.37" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 527.47L322.25 527.47L322.25 527.47L322.25 528.43L322.25 528.43L40.44 528.43z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 511.69L322.19 511.69" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 510.79L322.25 510.79L322.25 510.79L322.25 511.75L322.25 511.75L40.44 511.75z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 495.01L322.19 495.01" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 494.11L322.25 494.11L322.25 494.11L322.25 495.06998L322.25 495.06998L40.44 495.06998z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 477.61L322.19 477.61" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 476.71L322.25 476.71L322.25 476.71L322.25 477.66998L322.25 477.66998L40.44 477.66998z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 460.21L322.19 460.21" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 459.31L322.25 459.31L322.25 459.31L322.25 460.27L322.25 460.27L40.44 460.27z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 442.81L322.19 442.81" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 441.91L322.25 441.91L322.25 441.91L322.25 442.87003L322.25 442.87003L40.44 442.87003z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 425.41L322.19 425.41" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 424.51L322.25 424.51L322.25 424.51L322.25 425.47L322.25 425.47L40.44 425.47z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 399.37L322.19 399.37" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 398.47L322.25 398.47L322.25 398.47L322.25 399.43002L322.25 399.43002L40.44 399.43002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 381.97L322.19 381.97" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 381.07L322.25 381.07L322.25 381.07L322.25 382.03L322.25 382.03L40.44 382.03z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 366.71L322.19 366.71" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 365.81L322.25 365.81L322.25 365.81L322.25 366.77002L322.25 366.77002L40.44 366.77002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M324.19 347.21L549.81 347.21L549.81 347.21L549.81 349.13L549.81 349.13L324.19 349.13z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 322.55L322.19 322.55" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 321.65L322.25 321.65L322.25 321.65L322.25 322.61L322.25 322.61L40.44 322.61z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 296.51L322.19 296.51" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 295.61L322.25 295.61L322.25 295.61L322.25 296.56998L322.25 296.56998L40.44 296.56998z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 268.91L322.19 268.91" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 268.01L322.25 268.01L322.25 268.01L322.25 268.97003L322.25 268.97003L40.44 268.97003z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 242.87L322.19 242.87" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 241.97L322.25 241.97L322.25 241.97L322.25 242.92996L322.25 242.92996L40.44 242.92996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 224.75L322.19 224.75" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 223.85L322.25 223.85L322.25 223.85L322.25 224.80997L322.25 224.80997L40.44 224.80997z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 205.94L549.82 205.94L549.82 205.94L549.82 207.884L549.82 207.884L40.44 207.884z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 205.22L549.82 205.22L549.82 205.22L549.82 207.164L549.82 207.164L40.44 207.164z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 189.98L549.82 189.98L549.82 189.98L549.82 191.9L549.82 191.9L40.44 191.9z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 170.42L549.82 170.42L549.82 170.42L549.82 172.34L549.82 172.34L40.44 172.34z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.5 164.6L547.84 164.6" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M40.44 163.7L547.89996 163.7L547.89996 163.7L547.89996 164.66002L547.89996 164.66002L40.44 164.66002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.02 146.12L549.28 146.12" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39.96 145.22L549.34 145.22L549.34 145.22L549.34 146.18002L549.34 146.18002L39.96 146.18002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.02 127.64L549.28 127.64" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39.96 126.74L549.34 126.74L549.34 126.74L549.34 127.69996L549.34 127.69996L39.96 127.69996z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.02 103.04L549.28 103.04" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39.96 102.14L549.34 102.14L549.34 102.14L549.34 103.10002L549.34 103.10002L39.96 103.10002z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="#000000" stroke-width="0.14" stroke-linecap="square" fill="none" d="M40.02 84.924L549.28 84.924" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39.96 84.024L549.34 84.024L549.34 84.024L549.34 84.984024L549.34 84.984024L39.96 84.984024z" transform="matrix(1 0 0 -1 0 792)"  />
// 				<path stroke="none" fill="#000000" fill-rule="evenodd" d="M39 66.864L549.33997 66.864L549.33997 66.864L549.33997 68.784L549.33997 68.784L39 68.784z" transform="matrix(1 0 0 -1 0 792)"  />
// 			</g>
// 			<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M40.56 622.56L135.72 622.56L135.72 622.56L135.72 735.83997L135.72 735.83997L40.56 735.83997z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<path stroke="#000000" stroke-width="1" fill="none" d="M40.56 622.56L135.72 622.56L135.72 622.56L135.72 735.83997L135.72 735.83997L40.56 735.83997z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<g clip-path="url(#clip59)">
// 				<text style="fill:#000000;font-family:FF6;" font-size="11.04" fill-opacity="1" x="47.88" y="70.20001,70.20001">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip60)">
// 				<text style="fill:#000000;font-family:FF7;" font-size="11.04" fill-opacity="1" x="45.24" y="70.20001,70.20001">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip61)">
// 				<text style="fill:#000000;font-family:FF7;" font-size="11.064" fill-opacity="1" x="45.24" y="83.640015,83.640015">&#160;</text>
// 			</g>
// 			<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M322.91 297.24L547.42 297.24L547.42 297.24L547.42 595.92L547.42 595.92L322.91 595.92z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<path stroke="#000000" stroke-width="0.75" fill="none" d="M322.91 297.24L547.42 297.24L547.42 297.24L547.42 595.92L547.42 595.92L322.91 595.92z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<g clip-path="url(#clip62)">
// 				<text style="fill:#000000;font-family:FF8;" font-size="11.04" fill-opacity="1" x="327.41" y="210.02002,210.02002">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip63)">
// 				<text style="fill:#000000;font-family:FF8;" font-size="11.04" fill-opacity="1" x="327.41" y="222.62,222.62">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip64)">
// 				<g transform="matrix(0.39738283 0 -0 0.3607547 138.96 56.160034)">
// 				</g>
// 			</g>
// 			<g clip-path="url(#clip65)">
// 				<g transform="matrix(0.35120255 0 -0 0.31680223 323.92 496.857)">
// 				</g>
// 			</g>
// 			<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M322.91 297.24L547.42 297.24L547.42 297.24L547.42 595.92L547.42 595.92L322.91 595.92z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<path stroke="#000000" stroke-width="0.75" fill="none" d="M322.91 297.24L547.42 297.24L547.42 297.24L547.42 595.92L547.42 595.92L322.91 595.92z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<g clip-path="url(#clip66)">
// 				<text style="fill:#000000;font-family:FF8;" font-size="11.04" fill-opacity="1" x="327.41" y="210.02002,210.02002">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip67)">
// 				<text style="fill:#000000;font-family:FF8;" font-size="11.04" fill-opacity="1" x="327.41" y="222.62,222.62">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip68)">
// 				<g transform="matrix(0.351047 0 -0 0.31683955 47.907 79.27698)">
// 				</g>
// 			</g>
// 			<g clip-path="url(#clip69)">
// 				<g transform="matrix(0.351756 0 -0 0.3164108 335.6 198.81)">
// 				</g>
// 			</g>
// 		</g>
// 		<g>
// 			<text style="fill:#FF0000;font-family:Arial;" font-size="10" fill-opacity="1" x="20" y="20">Evaluation&#160;Warning&#160;:&#160;The&#160;document&#160;was&#160;created&#160;with&#160;Spire.PDF&#160;for&#160;Python.</text>
// 		</g>
// 	</g>
// </svg><br/><svg version="1.1" id="main2" width="816" height="1056">
// 	<defs>
// 		<clipPath id="clip70">
// 			<path d="M0 792L0 0L0 0L612 0L612 0L612 792L612 792L0 792z" />
// 		</clipPath>
// 		<clipPath id="clip71">
// 			<path d="M18 708.36L549.24 708.36L549.24 708.36L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip72">
// 			<path d="M18 708.36L549.24 708.36L549.24 708.36L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 		<clipPath id="clip73">
// 			<path d="M18 708.36L549.24 708.36L549.24 708.36L549.24 54L549.24 54L18 54z" />
// 		</clipPath>
// 	</defs>
// 	<g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
// 		<g clip-path="url(#clip70)">
// 			<path stroke="none" fill="#FFFFFF" fill-rule="evenodd" d="M77.34 90.21L498.51 90.21L498.51 90.21L498.51 580.86L498.51 580.86L77.34 580.86z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<path stroke="#F79546" stroke-width="2" fill="none" d="M77.34 90.21L498.51 90.21L498.51 90.21L498.51 580.86L498.51 580.86L77.34 580.86z" transform="matrix(1 0 0 -1 0 792)"  />
// 			<g clip-path="url(#clip71)">
// 				<text style="fill:#000000;font-family:FF6;" font-size="11.04" fill-opacity="1" x="288" y="460.25,460.25">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip72)">
// 				<text style="fill:#000000;font-family:FF6;" font-size="11.04" fill-opacity="1" x="290.52" y="460.25,460.25">&#160;</text>
// 			</g>
// 			<g clip-path="url(#clip73)">
// 				<g transform="matrix(0.35102466 0 -0 0.3163852 110.7 230.53003)">
// 				</g>
// 			</g>
// 		</g>
// 		<g>
// 			<text style="fill:#FF0000;font-family:Arial;" font-size="10" fill-opacity="1" x="20" y="20">Evaluation&#160;Warning&#160;:&#160;The&#160;document&#160;was&#160;created&#160;with&#160;Spire.PDF&#160;for&#160;Python.</text>
// 		</g>
// 	</g>
// </svg><br/>
// </body>
// </html>

//       </div>

//       {/* Display the PDF if it exists */}
//       {pdfUrl && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>{name} CV:</h2> {/* PDF Viewer Name */}
//           <embed src={pdfUrl} type="application/pdf" width="100%" height="600" />
//           {/* Alternatively, you could use <iframe> */}
//           {/* <iframe src={pdfUrl} width="100%" height="600" /> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



//////////////////////////////////////////////////////////////////

	// import React, { useState, useRef } from 'react';
	// import { useNavigate } from 'react-router-dom';

	// import {
	// Grid,
	// Card,
	// CardMedia,
	// CardContent,
	// Typography,
	// Dialog,
	// DialogContent,
	// IconButton,
	// Button,
	// Container
	// } from '@mui/material';
	// import CloseIcon from '@mui/icons-material/Close';
	// import thumbnail from "../image_placeholder/skywayimg.jpeg";
	// import video from "../images/testvideo.mp4"
	// import video2 from "../images/videotest2.mp4"
	// import video3 from "../images/videotest3.mp4"

	// import Header from "../screens/header";


	// const VideoScreen = () => {
	// 	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	// 	const [rows, setRows] = React.useState([]);
	// 	const [open, setOpen] = useState(false);
	// 	const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
	// 	const videoRef = useRef(null);
	// 	const agentName = localStorage.getItem('userdata');
	// 	const navigate = useNavigate();


	// 	const [data, setData] = React.useState('');
	// 	// insert checkbox end
		
	// 	const a = false
		
	// 	React.useEffect(() => {
	// 		const fetchData = async () => {
	// 		try {
	// 			const response = await fetch(`https://testcvapi.ntechagent.com/detail/get_applicant_for_agent?agentname=${agentName}`);
	// 			const result = await response.json();
	// 			if (result.status === 'ok') {
	// 			console.log(result.data); // Log the fetched data for debugging
	// 			setData(result.data);
	// 			console.log(result, " nnnnnnnnnnnnnnnnnn")
	// 			const sortedData = result.data
	// 				.filter(item => item.createdAt)
	// 				.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	// 			setRows(sortedData);
	// 			} else {
	// 			console.error('Error fetching data:', result.message);
	// 			}
	// 		} catch (error) {
	// 			console.error('Fetch error:', error);
	// 		}
	// 		};
		
	// 		fetchData();
	// 	}, []);
	
	// 	const handleClickOpen = (index) => {
	// 	setSelectedVideoIndex(index);
	// 	setOpen(true);
	// 	};
	
	// 	const handleClose = () => {
	// 	setOpen(false);
	// 	setSelectedVideoIndex(null);
	// 	if (videoRef.current) {
	// 		videoRef.current.pause(); // Pause the video when closing
	// 	}
	// 	};
	
	// 	const handleNext = () => {
	// 	if (selectedVideoIndex !== null && selectedVideoIndex < rows.length - 1) {
	// 		setSelectedVideoIndex(selectedVideoIndex + 1);
	// 	}
	// 	};

	// 	const handleRowClick = (id) => {
	// 		navigate(`/list/${id}`);
	// 	};
	
	// 	return (
	// 		<Container maxWidth={false} style={{ padding: '0 ' }}>
	// 			<Header />
	// 	<div>
	// 		<Grid container spacing={2}>
	// 		{rows.filter(video => video.video).map((video, index) => (
	// <Grid item xs={12} sm={6} md={4} key={index}>
	// 	<Card>
	// 	<CardMedia
	// 		component="img"
	// 		height="440"
	// 		image={video.personalimage ? `https://testcvapi.ntechagent.com/applicantimagetest/${video.personalimage}` : thumbnail}
	// 		alt={video.name}
	// 		onClick={() => handleClickOpen(index)}
	// 		style={{
	// 		cursor: 'pointer',
	// 		width: '100%',          // Ensure it takes the full width of the card
	// 		height: '440px',       // Maintain your specified height
	// 		objectFit: 'contain',  // Maintain aspect ratio while fitting within the dimensions
	// 		}}
	// 	/>
	// 	<CardContent>
	// 		<Typography variant="h6" noWrap>
	// 		{video.name}
	// 		</Typography>
	// 	</CardContent>
	// 	</Card>
	// </Grid>
	// ))}
	// 		</Grid>
	
	// 		<Dialog 
	// open={open} 
	// onClose={handleClose} 
	// fullWidth 
	// maxWidth="sm" 
	// PaperProps={{ style: { width: '300px', minHeight: "10vh", margin: 0, padding: 0 } }} 
	// >
	// <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
	// 	<IconButton
	// 	edge="end"
	// 	color="inherit"
	// 	onClick={handleClose}
	// 	aria-label="close"
	// 	sx={{ position: 'absolute', right: 8, top: 8 }}
	// 	>
	// 	<CloseIcon />
	// 	</IconButton>
	// 	{selectedVideoIndex !== null && rows[selectedVideoIndex].video && (
	// 	<>
	// 		<video
	// 		ref={videoRef}
	// 		controls
	// 		autoPlay
	// 		style={{
	// 			width: '100%',          // Full width of the container
	// 			height: 'auto',        // Adjust height based on aspect ratio
	// 			maxHeight: '80vh',     // Maximum height
	// 			objectFit: 'cover',    // Maintain aspect ratio
	// 		}}
	// 		src={`https://testcvapi.ntechagent.com/applicantimagetest/${rows[selectedVideoIndex].video}`}
	// 		/>
	// 		<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: "16px", background: "", width: "100%", padding: "10px" }}>
	// 		<Button onClick={(event) => { 
	// 	event.stopPropagation(); // Prevent row click from toggling checkbox
	// 	handleRowClick(rows[selectedVideoIndex].name + "-" + rows[selectedVideoIndex].middleName + "-" + rows[selectedVideoIndex].surname + "_" + rows[selectedVideoIndex].createdAt);
	// 	}} color="primary" variant="contained">
	// 			Details
	// 		</Button>
			
	// 		{selectedVideoIndex < rows.length - 1 && (
	// 			<Button onClick={handleNext} color="secondary" variant="contained">
	// 			Next
	// 			</Button>
	// 		)}
	// 		</div>
	// 	</>
	// 	)}
	// </DialogContent>
	// </Dialog>
	// 	</div>
	// 	</Container>
	// 	);
	// };
	
	// export default VideoScreen;


	////////////////////////////////////////////////////////////////////////

	import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const generatePDF = () => {
  const doc = new jsPDF();

  doc.text("LMIS REPORT", 14, 15);

  const tableColumn = ["NO", "NAME", "EP NUMBER", "LABOUR ID"];
  const tableRows = [];

  // Expanded fake data
  const dummyData = [
    ["Alex Johnson", "EP1234567", "EF123456"],
    ["Maria Gonzalez", "EP2345678", "EF234567"],
    ["James Smith", "EP3456789", "EF345678"],
    ["Emma Davis", "EP4567890", "EF456789"],
    ["Liam Brown", "EP5678901", "EF567890"],
    ["Olivia Wilson", "EP6789012", "EF678901"],
    ["Noah Martinez", "EP7890123", "EF789012"],
    ["Ava Anderson", "EP8901234", "EF890123"],
    ["William Thomas", "EP9012345", "EF901234"],
    ["Sophia Taylor", "EP0123456", "EF012345"],
    ["Mason Harris", "EP1123456", "EF112345"],
    ["Isabella Clark", "EP2123456", "EF212345"],
    ["Ethan Lewis", "EP3123456", "EF312345"],
    ["Mia Walker", "EP4123456", "EF412345"],
    ["Benjamin Hall", "EP5123456", "EF512345"],
    ["Charlotte Allen", "EP6123456", "EF612345"],
    ["Lucas Young", "EP7123456", "EF712345"],
    ["Amelia King", "EP8123456", "EF812345"],
    ["Henry Wright", "EP9123456", "EF912345"],
    ["Ella Scott", "EP1012345", "EF101234"],
    ["David Adams", "EP1112345", "EF111234"],
    ["Grace Mitchell", "EP1212345", "EF121234"],
    ["Samuel Carter", "EP1312345", "EF131234"],
    ["Chloe Perez", "EP1412345", "EF141234"],
    ["Daniel Roberts", "EP1512345", "EF151234"],
    ["Lily White", "EP1612345", "EF161234"],
    ["Michael Clark", "EP1712345", "EF171234"],
    ["Zoe Harris", "EP1812345", "EF181234"],
    ["Nathan Thompson", "EP1912345", "EF191234"],
    ["Ella Martinez", "EP2012345", "EF201234"],


	["Alex Johnson", "EP1234567", "EF123456"],
    ["Maria Gonzalez", "EP2345678", "EF234567"],
    ["James Smith", "EP3456789", "EF345678"],
    ["Emma Davis", "EP4567890", "EF456789"],
    ["Liam Brown", "EP5678901", "EF567890"],
    ["Olivia Wilson", "EP6789012", "EF678901"],
    ["Noah Martinez", "EP7890123", "EF789012"],
    ["Ava Anderson", "EP8901234", "EF890123"],
    ["William Thomas", "EP9012345", "EF901234"],
    ["Sophia Taylor", "EP0123456", "EF012345"],
    ["Mason Harris", "EP1123456", "EF112345"],
    ["Isabella Clark", "EP2123456", "EF212345"],
    ["Ethan Lewis", "EP3123456", "EF312345"],
    ["Mia Walker", "EP4123456", "EF412345"],
    ["Benjamin Hall", "EP5123456", "EF512345"],
    ["Charlotte Allen", "EP6123456", "EF612345"],
    ["Lucas Young", "EP7123456", "EF712345"],
    ["Amelia King", "EP8123456", "EF812345"],
    ["Henry Wright", "EP9123456", "EF912345"],
    ["Ella Scott", "EP1012345", "EF101234"],
    ["David Adams", "EP1112345", "EF111234"],
    ["Grace Mitchell", "EP1212345", "EF121234"],
    ["Samuel Carter", "EP1312345", "EF131234"],
    ["Chloe Perez", "EP1412345", "EF141234"],
    ["Daniel Roberts", "EP1512345", "EF151234"],
    ["Lily White", "EP1612345", "EF161234"],
    ["Michael Clark", "EP1712345", "EF171234"],
    ["Zoe Harris", "EP1812345", "EF181234"],
    ["Nathan Thompson", "EP1912345", "EF191234"],
    ["Ella Martinez", "EP2012345", "EF201234"],
    ["Jack Robinson", "EP2112345", "EF211234"],
    ["Sophia Green", "EP2212345", "EF221234"],
    ["William Parker", "EP2312345", "EF231234"],
    ["Emma Carter", "EP2412345", "EF241234"],
    ["Jacob Foster", "EP2512345", "EF251234"],
    ["Madison Bell", "EP2612345", "EF261234"],
    ["Joshua Murphy", "EP2712345", "EF271234"],
    // ["Avery Turner", "EP2812345", "EF281234"],
    // ["Logan Reed", "EP2912345", "EF291234"],
    // ["Scarlett Hughes", "EP3012345", "EF301234"],
  ];

  dummyData.forEach((item, index) => {
    tableRows.push([index + 1, ...item]);
  });

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 25,
  });

  doc.save("LMIS_REPORT.pdf");
};

const DownloadPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download LMIS Report</h1>
      <button onClick={generatePDF} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPage;
