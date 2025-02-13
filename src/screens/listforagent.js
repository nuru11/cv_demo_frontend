// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

// import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';

// import Header from "../screens/header"


// //  insert checkbox and embassy_list pdf

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'surname', label: 'Surname', minWidth: 100 },
//   { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
//   { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  
//   // { id: 'country', label: 'Country', minWidth: 170 },
// //   { id: 'createdAt', label: 'Created At', minWidth: 170 },
  
// //   { id: 'actions', label: 'Actions', minWidth: 100 },
// ];

// export default function StickyHeadTable() {


//     const agentName = localStorage.getItem('userdata'); // Get the token
    
  
//     if (agentName) {
//       // Decode the token to check if the user is an admin
//       // const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
//        // Check if user is admin
//       console.log(agentName, "  kssssssssss"); //
//       // console.log(isAdmin.toJson())
//     }

 
    
//   const navigate = useNavigate();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [rows, setRows] = React.useState([]);
  
//   // inser checkbox and embassy_list cv

//   const [selected, setSelected] = React.useState([]); // State for selected rows



//   const [positionFilter, setPositionFilter] = React.useState('');
//     const [nationalityFilter, setNationalityFilter] = React.useState('');
//     const [genderFilter, setGenderFilter] = React.useState('');
//     const [experienceFilter, setExperienceFilter] = React.useState('');



//     const filteredRows = rows.filter(row => {
//       const experiences = JSON.parse(row.experience) || []; // Ensure it's an array
    
//       return (
//         (positionFilter ? row.postappliedfor === positionFilter : true) &&
//         (nationalityFilter ? row.currentNationality === nationalityFilter : true) &&
//         (genderFilter ? row.sex === genderFilter : true) &&
//         (experienceFilter === "yes" ? experiences.some(exp => exp.name !== "") : true)
//       );
//     });
  
  

    
// const [data, setData] = React.useState('');
//   // insert checkbox end

// //   React.useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('https://testcvapi.ntechagent.com/tt');
// //         const result = await response.json();
// //         if (result.status === 'ok') {
// //           console.log(result.data); // Log the fetched data for debugging
// //           setData(result.data);
// //           const sortedData = result.data
// //             .filter(item => item.createdAt)
// //             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
// //           setRows(sortedData);
// //         } else {
// //           console.error('Error fetching data:', result.message);
// //         }
// //       } catch (error) {
// //         console.error('Fetch error:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);


// React.useEffect(() => {
    

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://testcvapi.ntechagent.com/detail/get_applicant_for_agent?agentname=${agentName}`);
//         const result = await response.json();
//         if (result.status === 'ok') {
//           console.log('Fetched dataaaaaaa:', result.data); // Log the fetched data
//           setData(result.data);

//           console.log(result.data); // Log the fetched data for debugging
//           setData(result.data);
//           const sortedData = result.data
//             .filter(item => item.createdAt)
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setRows(sortedData);

         
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, [agentName]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

 
  
  
//   const handleRowClick = (id) => {
//     navigate(`/list/${id}`);
//   };

  

//   return (
//     <>
    
            
            
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//     <Header /> 

//       <div style={{ padding: '16px' }}>
//               <TextField
//                 select
//                 label="Position"
//                 value={positionFilter}
//                 onChange={(e) => setPositionFilter(e.target.value)}
//                 SelectProps={{
//                   native: true,
//                 }}
//                 variant="outlined"
//                 style={{ marginRight: '16px' }}
//               >
//                 <option value=""></option>
//                 <option value="driver">Driver</option>
//                 <option value="housemaid">Housemaid</option>
//                 {/* Add more options as needed */}
//               </TextField>
    
             
//               <TextField
//                 select
//                 label="Experienced"
//                 value={experienceFilter}
//                 onChange={(e) => setExperienceFilter(e.target.value)}
//                 SelectProps={{
//                   native: true,
//                 }}
//                 variant="outlined"
//                 style={{ marginRight: '16px', width: "130px" }}
//               >
//                 <option value=""></option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//                 {/* Add more options as needed */}
//               </TextField>

//               {/* <div>{JSON.parse(data.experience) ?? "kkk"}</div> */}
//               {/* <div>{data[1].experience ? JSON.parse(data[1].experience).map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> ) : <div>lllll</div>}</div> */}
              
//             </div>
            
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>

//                <TableCell padding="checkbox">
                              
//                               </TableCell>

                              
//               {columns.map((column) => (
//                 <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//   {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((row) => {
//       const isSelected = selected.indexOf(row.id) !== -1;
//       return (
//         <TableRow
//           hover
//           role="checkbox"
//           tabIndex={-1}
//           key={row.id}
//           onClick={(event) => { 
//             // event.stopPropagation(); // Prevent row click from toggling checkbox
//             handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
//           }}
//           selected={isSelected}
//         >
//           <TableCell padding="checkbox">
           
//           </TableCell>
//           {columns.map((column) => {
//             const value = row[column.id];
//             return (
//               <TableCell key={column.id} align={column.align}>
//                 {column.id === 'actions' ? (
//                   <>
                  
                  
//                   </>
//                 ) : (
//                   value
//                 )}
//               </TableCell>
//             );
//           })}
//         </TableRow>
//       );
//     })}

   
// </TableBody>


//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />


//     </Paper>


    


//     </>
//   );
// }







/////////////////////////////////////////////////////////////





import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Button from '@mui/material/Button'; // Import Button component
import { useNavigate } from 'react-router-dom';
import Header from "../screens/header";

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surname', label: 'Surname', minWidth: 100 },
  { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
  
  { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
];

export default function StickyHeadTable() {
  const agentName = localStorage.getItem('userdata');

  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  
  const [positionFilter, setPositionFilter] = React.useState('');
  const [experienceFilter, setExperienceFilter] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [acceptedFilter, setAcceptedFilter] = React.useState('');

  const filteredRows = rows.filter(row => {
    const experiences = JSON.parse(row.experience) || [];
    const acceptedByArray = JSON.parse(row.acceptedBy) || [];

    
     
  
    // Check if there are any accepted entries
    const hasAccepted = acceptedByArray.some(entry => entry.accepted === "true");
  
    // Show row if no agents have accepted or if the Wahat agent has accepted
    const showRow = !hasAccepted || 
                    (acceptedByArray.some(entry => entry.agent === agentName && entry.accepted === "true"));
  
    return (
      showRow &&
      (positionFilter ? row.postappliedfor === positionFilter : true) &&
      (experienceFilter === "yes" ? experiences.some(exp => exp.name !== "") : true) &&
      (positionFilter ? row.postappliedfor === positionFilter : true) &&
        (experienceFilter === "yes" ? experiences.some(exp => exp.name !== "") : true) &&
        (acceptedFilter === "yes" ? JSON.parse(row.acceptedBy)?.some(acceptedBy => acceptedBy.accepted === "true") : true)
    );
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`https://testcvapi.ntechagent.com/detail/get_applicant_for_agent?agentname=${agentName}`);
      const result = await response.json();
      if (result.status === 'ok') {
        // setData(result.data);
        const sortedData = result.data
        .filter(item => {
          const acceptedByArray = JSON.parse(item.acceptedBy || '[]');
          // Check if the current agent has accepted this applicant
          const hasAccepted = acceptedByArray.some(entry => entry.accepted === "true");
          const isAcceptedByCurrentAgent = acceptedByArray.some(entry => entry.agent === agentName && entry.accepted === "true");

          // Show if accepted by the current agent or not accepted by anyone
          return isAcceptedByCurrentAgent || !hasAccepted;
        }).filter(item => item.finished !== true)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRows(sortedData);
      } else {
        console.error('Error fetching data:', result.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [agentName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (id) => {
    navigate(`/list/${id}`);
  };

  
 
  const handleAccept = async (applicantId, acceptedby) => {
    try {
      const acceptedByArray = typeof acceptedby === 'string' ? JSON.parse(acceptedby) : acceptedby;
  
      const updatedAcceptedBy = acceptedByArray.map(entry => {
        if (entry.agent === agentName) {
          return { ...entry, accepted: "true" };
        }
        return entry;
      });
  
      const updateResponse = await fetch(`https://testcvapi.ntechagent.com/edit_for_agent/${applicantId}?agentname=${agentName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ acceptedBy: JSON.stringify(updatedAcceptedBy) }),
      });
  
      const updateResult = await updateResponse.json();
  
      // Check for status and message correctly
      if (updateResult.status === 'error' && updateResult.message.includes('Cannot accept') && updateResult.status !== 'ok') {
        console.log("llllllllllllllllllllllllllllllllllll", updateResult.message)
        console.error('Cannot accept: Some agents have already accepted this application.');
        setError('This applicant is reserved.');
        setOpenSnackbar(true);
        fetchData();
        updateResult.message = ""
      } else if (updateResult.status === 'ok') {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", updateResult.message)
        console.log(`Accepted applicant with ID: ${applicantId}`);
        setSuccess('Accepted successfully!');
        setOpenSnackbar(true);
        fetchData();
      } else {
        console.error('Error updating applicant:', updateResult.message);
        setError(`Request failed: ${updateResult.message}`);
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error in handleAccept:', error);
      setError('Request failed');
      setOpenSnackbar(true);
    }

    
  };

const handleCloseSnackbar = () => {
  setOpenSnackbar(false);

  setError('')
};

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Header /> 

        <div style={{ padding: '16px' }}>
          <TextField
            select
            label="Position"
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            style={{ marginRight: '16px' }}
          >
            <option value=""></option>
            <option value="driver">Driver</option>
            <option value="housemaid">Housemaid</option>
          </TextField>
    
          <TextField
            select
            label="Experienced"
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            style={{ marginRight: '16px', width: "130px" }}
          >
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </TextField>

          <TextField
            select
            label="Accepted Applications"
            value={acceptedFilter}
            onChange={(e) => setAcceptedFilter(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            style={{ marginRight: '16px', width: "130px" }}
          >
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </TextField>


        </div>
            
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="center" style={{ minWidth: 100 }}>Actions</TableCell> {/* New Actions column */}
              </TableRow>
            </TableHead>
            <TableBody>
  {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
    <TableRow
    hover
    role="checkbox"
    tabIndex={-1}
    key={row.id}
    onClick={(event) => { 
      event.stopPropagation(); // Prevent row click from toggling checkbox
      handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
    }}
    >
      <TableCell padding="checkbox"></TableCell>
      {columns.map((column) => {
        const value = row[column.id];
        return (
          <TableCell key={column.id} align={column.align}>
            {value}
          </TableCell>
        );
      })}
      <TableCell align="center">
        {/* <di>{row.acceptedBy}</di> */}
      {JSON.parse(row.acceptedBy)?.some(entry => entry.agent === agentName && entry.accepted === "true") ? (
          <Typography 
          variant="body1" 
          style={{ color: 'green', cursor: 'default' }} // Style for the green text
        >
          Accepted
        </Typography>
        ) : (
         

<Button 
variant="contained" 
color="primary" 
onClick={(event) => {
  event.stopPropagation(); // Prevent row click
  handleAccept(row.id, row.acceptedBy); // Call the accept function
}}
>
Accept
</Button>
        )}

         
        
      </TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>



      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
                  {error || success}
                </Alert>
              </Snackbar>
    </>
  );
}