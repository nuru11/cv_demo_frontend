
// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Dialog,
//   DialogContent,
//   IconButton,
//   Button,
//   Container
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import thumbnail from "../image_placeholder/skywayimg.jpeg";

// import Header from "../screens/header";


// const VideoScreen = () => {
// 	 const [rowsPerPage, setRowsPerPage] = React.useState(10);
// 	  const [rows, setRows] = React.useState([]);
// 	const [open, setOpen] = useState(false);
// 	const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
// 	const videoRef = useRef(null);
// 	const agentName = localStorage.getItem('userdata');
// 	const navigate = useNavigate();


// 	const [data, setData] = React.useState('');
// 	  // insert checkbox end
	
// 	  const a = false
	
// 	  React.useEffect(() => {
// 		const fetchData = async () => {
// 		  try {
// 			const response = await fetch(`https://testcvapi.ntechagent.com/detail/get_applicant_for_agent?agentname=${agentName}`);
// 			const result = await response.json();
// 			if (result.status === 'ok') {
// 			  console.log(result.data); // Log the fetched data for debugging
// 			  setData(result.data);
// 			  console.log(result, " nnnnnnnnnnnnnnnnnn")
// 			  const sortedData = result.data
// 				.filter(item => item.createdAt)
// 				.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
// 			  setRows(sortedData);
// 			} else {
// 			  console.error('Error fetching data:', result.message);
// 			}
// 		  } catch (error) {
// 			console.error('Fetch error:', error);
// 		  }
// 		};
	
// 		fetchData();
// 	  }, []);
  
// 	const handleClickOpen = (index) => {
// 	  setSelectedVideoIndex(index);
// 	  setOpen(true);
// 	};
  
// 	const handleClose = () => {
// 	  setOpen(false);
// 	  setSelectedVideoIndex(null);
// 	  if (videoRef.current) {
// 		videoRef.current.pause(); // Pause the video when closing
// 	  }
// 	};
  
// 	const handleNext = () => {
// 	  if (selectedVideoIndex !== null && selectedVideoIndex < rows.length - 1) {
// 		setSelectedVideoIndex(selectedVideoIndex + 1);
// 	  }
// 	};

// 	const handleRowClick = (id) => {
// 		navigate(`/list/${id}`);
// 	  };
  
// 	return (
// 		<Container maxWidth={false} style={{ padding: '0 ' }}>
// 			<Header />
// 	  <div>
// 		<Grid container spacing={2}>
// 		{rows.filter(video => video.video).map((video, index) => (
//   <Grid item xs={12} sm={6} md={4} key={index}>
//     <Card>
//       <CardMedia
//         component="img"
//         height="440"
//         image={video.personalimage ? `https://testcvapi.ntechagent.com/applicantimagetest/${video.personalimage}` : thumbnail}
//         alt={video.name}
//         onClick={() => handleClickOpen(index)}
//         style={{
//           cursor: 'pointer',
//           width: '100%',          // Ensure it takes the full width of the card
//           height: '440px',       // Maintain your specified height
//           objectFit: 'contain',  // Maintain aspect ratio while fitting within the dimensions
//         }}
//       />
//       <CardContent>
//         <Typography variant="h6" noWrap>
//           {video.name}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// ))}
// 		</Grid>
  
// 		<Dialog 
//   open={open} 
//   onClose={handleClose} 
//   fullWidth 
//   maxWidth="sm" 
//   PaperProps={{ style: { width: '300px', minHeight: "10vh", margin: 0, padding: 0 } }} 
// >
//   <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
//     <IconButton
//       edge="end"
//       color="inherit"
//       onClick={handleClose}
//       aria-label="close"
//       sx={{ position: 'absolute', right: 8, top: 8 }}
//     >
//       <CloseIcon />
//     </IconButton>
//     {selectedVideoIndex !== null && rows[selectedVideoIndex].video && (
//       <>
//         <video
//           ref={videoRef}
//           controls
//           autoPlay
//           style={{
//             width: '100%',          // Full width of the container
//             height: 'auto',        // Adjust height based on aspect ratio
//             maxHeight: '80vh',     // Maximum height
//             objectFit: 'cover',    // Maintain aspect ratio
//           }}
//           src={`https://testcvapi.ntechagent.com/applicantimagetest/${rows[selectedVideoIndex].video}`}
//         />
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: "16px", background: "", width: "100%", padding: "10px" }}>
//           <Button onClick={(event) => { 
//       event.stopPropagation(); // Prevent row click from toggling checkbox
//       handleRowClick(rows[selectedVideoIndex].name + "-" + rows[selectedVideoIndex].middleName + "-" + rows[selectedVideoIndex].surname + "_" + rows[selectedVideoIndex].createdAt);
//     }} color="primary" variant="contained">
//             Details
//           </Button>
		  
//           {selectedVideoIndex < rows.length - 1 && (
//             <Button onClick={handleNext} color="secondary" variant="contained">
//               Next
//             </Button>
//           )}
//         </div>
//       </>
//     )}
//   </DialogContent>
// </Dialog>
// 	  </div>
// 	  </Container>
// 	);
//   };
  
//   export default VideoScreen;


//////////////////////////////////////////////////////////////////

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Container,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import thumbnail from "../image_placeholder/skywayimg.jpeg";
import Header from "../screens/header";

const VideoScreen = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const videoRef = useRef(null);
  const agentName = localStorage.getItem('userdata');
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/detail/get_applicant_for_agent?agentname=${agentName}`);
        const result = await response.json();
        if (result.status === 'ok') {
          const sortedData = result.data
            .filter(item => item.createdAt)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setRows(sortedData);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [agentName]);

  const handleClickOpen = (index) => {
    setSelectedVideoIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideoIndex(null);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when closing
    }
  };


  const handleNext = () => {
	  if (selectedVideoIndex !== null && selectedVideoIndex < rows.length - 1) {
		setSelectedVideoIndex(selectedVideoIndex + 1);
	  }
	};

  const handleRowClick = (id) => {
    navigate(`/list/${id}`);
  };

  const filteredRows = rows.filter(video => {
    const acceptedByArray = JSON.parse(video.acceptedBy) || [];
    const isAcceptedByCurrentAgent = acceptedByArray.some(entry => entry.agent === agentName && entry.accepted === "true");
    const isAcceptedByAnyAgent = acceptedByArray.some(entry => entry.accepted === "true");

    return (isAcceptedByCurrentAgent || !isAcceptedByAnyAgent) && video.video;
  });

  return (
    <Container maxWidth={false} style={{ padding: '0' }}>
      <Header />
      <div>
        <Grid container spacing={2}>
          {filteredRows.map((video, index) => {
            const acceptedByArray = JSON.parse(video.acceptedBy) || [];
            const isAcceptedByCurrentAgent = acceptedByArray.some(entry => entry.agent === agentName && entry.accepted === "true");

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card style={{margin: "10px"}}>
                  <Box position="relative">
                    <CardMedia
                      component="img"
                      height="440"
                      image={video.personalimage ? `https://testcvapi.ntechagent.com/applicantimagetest/${video.personalimage}` : thumbnail}
                      alt={video.name}
                      onClick={() => handleClickOpen(index)}
                      style={{
                        cursor: 'pointer',
                        width: '100%',
                        height: '440px',
                        objectFit: 'contain',
                      }}
                    />
                    <IconButton
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      }}
                      onClick={() => handleClickOpen(index)}
                    >
                      <PlayArrowIcon fontSize="large" />
                    </IconButton>
                    {isAcceptedByCurrentAgent && (
                      <Typography
                        variant="caption"
                        style={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          backgroundColor: 'rgba(0, 128, 0, 0.7)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        You Accept
                      </Typography>
                    )}
                  </Box>
                  <CardContent>
                    <Typography variant="h6" noWrap>
                      {video.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Dialog 
          open={open} 
          onClose={handleClose} 
          fullWidth 
          maxWidth="sm" 
        >
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedVideoIndex !== null && filteredRows[selectedVideoIndex].video && (
              <>
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'cover',
                  }}
                  src={`https://testcvapi.ntechagent.com/applicantimagetest/${filteredRows[selectedVideoIndex].video}`}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: "16px", width: "100%", padding: "10px" }}>
                
                <div>
                name: {filteredRows[selectedVideoIndex].name} <br/>
                age: {filteredRows[selectedVideoIndex].age}

                <Typography variant="h6" noWrap>
  {JSON.parse(filteredRows[selectedVideoIndex].experience)[0].name ? (
    <span style={{ color: 'green' }}>{JSON.parse(filteredRows[selectedVideoIndex].experience)[0].name} Experienced</span>
  ) : (
    <span style={{ color: 'orange' }}>First Time</span>
  )}
</Typography> <br/>
<Button onClick={(event) => { 
                    event.stopPropagation();
                    handleRowClick(filteredRows[selectedVideoIndex].name + "-" + filteredRows[selectedVideoIndex].middleName + "-" + filteredRows[selectedVideoIndex].surname + "_" + filteredRows[selectedVideoIndex].createdAt);
                  }} color="primary" variant="contained">
                    Details
                  </Button>


                </div>
                  {/* <Button onClick={(event) => { 
                    event.stopPropagation();
                    handleRowClick(filteredRows[selectedVideoIndex].name + "-" + filteredRows[selectedVideoIndex].middleName + "-" + filteredRows[selectedVideoIndex].surname + "_" + filteredRows[selectedVideoIndex].createdAt);
                  }} color="primary" variant="contained">
                    Details
                  </Button> */}

                  <div style={{display: "flex", flexDirection: "column", justifyContent: 'flex-end'}}>
                  
                  {selectedVideoIndex < rows.length - 1 && (
  <Button 
    onClick={handleNext} 
    color="secondary" 
    variant="contained"
    style={{ padding: '6px 12px', height: 'fit-content', minWidth: 'unset' }}
  >
    Next
  </Button>
)}
</div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
};

export default VideoScreen;