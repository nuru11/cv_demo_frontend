import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete'; 
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';
import Header from "../screens/header"


//  insert checkbox and embassy_list pdf
import Checkbox from '@mui/material/Checkbox';
import html2pdf from 'html2pdf.js';
import embassylistpdftopimage from "../../src/image_placeholder/embassylistpdftopimage.jpeg"
import Barcode from 'react-barcode';
import { useRef } from 'react';

// insert checkbox and embassy_list pdf end

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surname', label: 'Surname', minWidth: 100 },
  
  { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  
  // { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },

  // { id: 'currentNationality', label: 'Nationality', minWidth: 170 },

  {id: "status", label: "Status", minWidth: 100},
  
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function StickyHeadTable() {

 
    
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [editData, setEditData] = React.useState({});
  
  // Menu state
  
  // inser checkbox and embassy_list cv

  const [selected, setSelected] = React.useState([]); // State for selected rows
  const [isAnyChecked, setIsAnyChecked] = React.useState(false);

  const selectedRows = rows.filter(row => selected.includes(row.id));


  const [positionFilter, setPositionFilter] = React.useState('');
    const [nationalityFilter, setNationalityFilter] = React.useState('');
    const [genderFilter, setGenderFilter] = React.useState('');
    const [experienceFilter, setExperienceFilter] = React.useState('');
    const [acceptedFilter, setAcceptedFilter] = React.useState('');


    



    const filteredRows = rows.filter(row => {
      const experiences = JSON.parse(row.experience) || []; // Ensure it's an array

      const showdoneapplicants = row.finished
    
      return (
        showdoneapplicants &&
        (positionFilter ? row.postappliedfor === positionFilter : true) &&
        (nationalityFilter ? row.currentNationality === nationalityFilter : true) &&
        (genderFilter ? row.sex === genderFilter : true) &&
        (experienceFilter === "yes" ? experiences.some(exp => exp.name !== "") : true) &&
        (acceptedFilter === "yes" ? JSON.parse(row.acceptedBy)?.some(acceptedBy => acceptedBy.accepted === "true") : true)
      );
    });
  
  

  const handleSelectAllClick = (event) => {


    if (event.target.checked) {
        const newSelecteds = rows.map((row) => row.id);
        setSelected(newSelecteds);
        setIsAnyChecked(true); // Set to true if any checkbox is checked
        return;
      }
      setSelected([]);
      setIsAnyChecked(false); // 


    
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
  
    setSelected(newSelected);
    setIsAnyChecked(newSelected.length > 0); // Update visibility based on selected count
  };


  const pdfRef = useRef();


  
  const today = new Date();
  // Format the date as MM/DD/YYYY
  const formattedTodayDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;




   // Get today's date
  //  const today = new Date();

   // Define arrays for day and month names
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
   // Get the required date parts
   const dayName = dayNames[today.getDay()];
   const monthName = monthNames[today.getMonth()];
   const dayNumber = today.getDate();
   const year = today.getFullYear();


   const downloadCV = () => {
    const element = pdfRef.current;
    const isMobile = window.innerWidth <= 768;
    const config = {
      filename: 'Embassy_list.pdf',
      margin: [1, 0.2, 0, 0.2],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: isMobile ? 1 : 2, logging: true, dpi: 300, letterRendering: true },
      jsPDF: { unit: 'mm', format: isMobile ? 'A4' : 'letter', orientation: 'Portrait' }
    };
  
    html2pdf()
      .from(element)
      .set(config)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages();
          const phoneNumber = `${dayName}, ${monthName} ${dayNumber}, ${year}`; // Replace with your phone number
          const email = "www.ntechagent.com | +251 911 454176 | ntechagent@gmail.com"; // Replace with your email
    
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(5);
    
            // Set positions
            const pageYPosition = pdf.internal.pageSize.getHeight() - 10; // Y position for footer
            const leftXPosition = 3; // X position for left side text
            const rightXPosition = pdf.internal.pageSize.getWidth() - 22; // Base position for page number
            const centerXPosition = pdf.internal.pageSize.getWidth() / 2 + 10; // Center position
    
            // Add phone number on the left
            pdf.text(`${phoneNumber}`, leftXPosition, pageYPosition);
    
            // Add email in the center
            pdf.text(` ${email}`, centerXPosition, pageYPosition, { align: 'center' });
    
            // Add page number and total pages to the footer on the right
            pdf.text(`Page ${i} of ${totalPages}`, rightXPosition, pageYPosition);
            // pdf.text(`${email}`, rightXPosition, pageYPosition);
          }
        })
        .save();
    };

   
    
const [data, setData] = React.useState('');
  // insert checkbox end


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/tt?agentname=${agentName}`);
        const result = await response.json();
        if (result.status === 'ok') {
          console.log(result.data); // Log the fetched data for debugging
          setData(result.data);
          console.log(result, " nnnnnnnnnnnnnnnnnn")
          const sortedData = result.data
            .filter(item => item.createdAt).filter(item => item.finished === true)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

           
          setRows(sortedData);

        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/tget-images/${id}?agentname=${agentName}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.status === 'ok') {
          setRows(rows.filter(row => row.id !== id));
          console.log("aaaaaaaaaaaa ", result)
        } else {
          console.error('Error deleting data:', result.message);
        }
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

 

 




  /////////////////////////////////////////////////  delete


  
const [message, setMessage] = React.useState('');



const handleDeleteImages = async (e) => {
  e.preventDefault();
  setMessage('');

  const confirmDelete = window.confirm('Are you sure you want to delete these items?');

  // Assuming 'selected' is a string of comma-separated IDs
  const idArray = selected

  if (idArray.length === 0) {
    setMessage('Please enter valid IDs.');
    return;
  }

  if (confirmDelete) {

  try {
    const response = await fetch(`https://testcvapi.ntechagent.com/deletemultipeapplicants?agentname=${agentName}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: idArray }), // Use idArray here
    });

    if (response.ok) {
      const data = await response.json();

      // Update state by filtering out the deleted rows
      setRows(rows.filter(row => !idArray.includes(row.id))); // Use includes here

      setMessage(`Successfully deleted ${data.deletedCount} images.`);
      
    } else {
      const errorData = await response.json();
      setMessage(errorData.message || 'Error deleting images.');
    }
  } catch (error) {
    console.error('Error deleting images:', error);
    setMessage('An error occurred while deleting images.');
  }
};
};


  ///////////////////////////////////////////////// delete end




  const handleSubmitforRestoreButton = async (id) => {

  

     

   

    editData.finished = false


    try {
      const response = await fetch(`https://testcvapi.ntechagent.com/tget-images/${id}?agentname=${agentName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      const result = await response.json();
      if (result.status === 'ok') {
        setRows(rows.map(row => (row.id === id ? result.data : row)));

        
       
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };


  const handleRowClick = (id) => {
    navigate(`/list/${id}`);
  };

 

 
  const agentName = localStorage.getItem('userdata');

 

  React.useEffect(() => {
    const parsedData = editData.availablefor ? JSON.parse(editData.availablefor) : {};
    
    setCheckboxState({
      golden: parsedData.golden === "true",
      bela: parsedData.bela === "true",
      skyway: parsedData.skyway === "true",
      baraka: parsedData.baraka === "true",
      kaan: parsedData.kaan === "true",
      qimam: parsedData.qimam === "true",
    });
  }, [editData.availablefor]);



 
  const initialCheckboxState = {
    golden: editData.availablefor && JSON.parse(editData.availablefor).golden === "true",
    bela: editData.availablefor && JSON.parse(editData.availablefor).bela === "true",
    skyway: editData.availablefor && JSON.parse(editData.availablefor).skyway === "true",
    baraka: editData.availablefor && JSON.parse(editData.availablefor).baraka === "true",
    kaan: editData.availablefor && JSON.parse(editData.availablefor).kaan === "true",
    qimam: editData.availablefor && JSON.parse(editData.availablefor).qimam === "true",
  };
  
  const [checkboxState, setCheckboxState] = React.useState(initialCheckboxState);


  const handleCheckboxChange = (event) => {
    console.log("kkkkkkkkkkaaaaaaaaaaaaa")
    // checkboxState.golden = editData.availablefor &&  JSON.parse(editData.availablefor).golden === "true" ? true : false
    const { name, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };


  

 

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  

  const chunks = chunkArray(selectedRows, 3);

// Helper function to split an array into chunks of a given size.

  


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
                {/* Add more options as needed */}
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
                {/* Add more options as needed */}
              </TextField>

            
            </div>
            
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

               <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  indeterminate={selected.length > 0 && selected.length < rows.length}
                                  checked={rows.length > 0 && selected.length === rows.length}
                                  onChange={handleSelectAllClick}
                                />
                              </TableCell>

                              
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} >
                  {column.label} 
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody translate='no'>
  {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      const isSelected = selected.indexOf(row.id) !== -1;
      return (
        <TableRow
          hover
          role="checkbox"
          tabIndex={-1}
          key={row.id}
          onClick={(event) => { 
            // event.stopPropagation(); // Prevent row click from toggling checkbox
            handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
          }}
          selected={isSelected}
        >
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isSelected}
              onChange={(event) => {
                event.stopPropagation(); // Prevent checkbox click from triggering row click
                handleClick(row.id);
              }}

              onClick={(event) => { event.stopPropagation(); /* Edit functionality */ }}
            />
          </TableCell>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.id === 'actions' ? (
                  <>

                    <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row.id) /* Delete functionality */ }}>
                      <DeleteIcon />
                    </IconButton>

                    <button onClick={(event) => { event.stopPropagation(); handleSubmitforRestoreButton(row.id) }} >Resotre</button>
                    
                  </>
                ) : column.id === "status" ? 
                <>
               <TableCell align="center">
  {JSON.parse(row.acceptedBy)?.some(entry => entry.accepted === "true") ? (
    // If at least one agent is accepted, display their names
    JSON.parse(row.acceptedBy)?.map(entry => (
      entry.accepted === "true" ? (
        <Typography 
          key={entry.agent} 
          variant="body1" 
          style={{ color: 'green', cursor: 'default' }} 
        >
          {entry.agent}: Accepted
        </Typography>
      ) : null 
    ))
  ) : (
    
    <Typography 
      variant="body1" 
      style={{ color: 'blue', cursor: 'default' }} 
    >
      Live
    </Typography>
  )}
</TableCell>

                </>

        :
                
                (
                  value
                )}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })}
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


{isAnyChecked && (
  <button onClick={downloadCV} style={{ marginTop: '20px', marginLeft: "30px", marginBottom: "20px" }}>
    Download summary
  </button>
)}

{isAnyChecked && (
  <button onClick={handleDeleteImages} style={{ marginTop: '20px', marginLeft: "30px", marginBottom: "20px", background: "red" }}>
    delete
  </button>
)}


     

    </Paper>


    


<div style={{display: "none"}}>
<div id="embassy_list" ref={pdfRef}>

<style>
    {`
      /* First page: use the original top margin */
      @page :first {
        margin-top: 20mm;
        margin-right: 0.2mm;
        margin-bottom: 0mm;
        margin-left: 0.2mm;
      }
      /* All other pages: Use a proper top margin of 10mm */
      @page {
        margin-top: 10mm;
        margin-right: 0.2mm;
        margin-bottom: 0mm;
        margin-left: 0.2mm;
      }
    `}
  </style>
  
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <img
      src={embassylistpdftopimage}
      alt="header"
      style={{ maxWidth: '98%' }} // Ensures the image is contained
    />
  </div>
  
  {/*
    Get chunks of 3 applicants each.
    You can create the chunks array once outside of the render if you prefer.
  */}
  {chunkArray(selectedRows, 3).map((chunk, chunkIndex, allChunks) => (
    <div
      key={chunkIndex}
      style={{
        // Only add top margin for the first page; subsequent pages have margin 0.
        marginTop: chunkIndex === 0 ? '20px' : '0',
        // Force a page break after every chunk except the last one.
        pageBreakAfter: chunkIndex < allChunks.length - 1 ? 'always' : 'auto',
      }}
    >
      <table
        style={{
          width: '97%',
          borderCollapse: 'collapse',
          margin: '0 auto',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>SNo</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Applicant Name</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Passport #</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Sponsor ID</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Visa No.</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Application No</th>
            <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Bar Code</th>
          </tr>
        </thead>
        <tbody>
          {chunk.map((row, index) => (
            <tr key={row.id}>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {chunkIndex * 3 + index + 1}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {row.name} {row.middleName} {row.surname}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {row.passportnum}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {row.sponsorId}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {row.visaNo}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                {row.applicationNo}
              </td>
              <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                <Barcode
                  displayValue={false}
                  value={row.applicationNo && row.applicationNo.length === 10 ? row.applicationNo : "E333777777"}
                  height={23}
                  width={1.7}
                  marginBottom={1}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>


</div>
    </>
  );
}