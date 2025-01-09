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
import { useNavigate } from 'react-router-dom';

import Header from "../screens/header"




const columns = [

  { id: 'position', label: 'Position', minWidth: 170 },

  { id: 'agent', label: 'Agent Name', minWidth: 100 },
  
  { id: 'experienced', label: 'Experienced', minWidth: 170 },
  
  { id: 'createdAt', label: 'Created At', minWidth: 170 },

 
  
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function StickyHeadTable() {

  
    
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
 


  // inser checkbox and embassy_list cv

  const [selected, setSelected] = React.useState([]); // State for selected rows
 
  const [positionFilter, setPositionFilter] = React.useState('');
    const [nationalityFilter, setNationalityFilter] = React.useState('');
    const [genderFilter, setGenderFilter] = React.useState('');
    const [experiencedFilter, setExperiencedFilter] = React.useState("")


    



    const filteredRows = rows.filter(row => {
      // const experiences = JSON.parse(row.experience) || []; // Ensure it's an array
    
      return (
        (positionFilter ? row.position.toLowerCase() === positionFilter : true) &&
        (nationalityFilter ? row.currentNationality === nationalityFilter : true) &&
        (genderFilter ? row.sex === genderFilter : true) &&
        (experiencedFilter === "yes" ? row.experienced.toLowerCase() === "yes" :  experiencedFilter === "no" ? row.experienced.toLowerCase() === "no" : true)
        // ( experiencedFilter === "no" ? row.experienced === "yes" : true)
        
        // (acceptedFilter === "yes" ? JSON.parse(row.acceptedBy)?.some(acceptedBy => acceptedBy.accepted === "true") : true)
      );
    });
  
  

  

  
  

const [data, setData] = React.useState('');
  // insert checkbox end

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://testcvapi.ntechagent.com/api/agentsrequestget');
        const result = await response.json();
        if (result.status === 'ok') {
          console.log(result.data, "aaaaa"); // Log the fetched data for debugging
          setData(result.data);
          const sortedData = result.data
            .filter(item => item.createdAt)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setRows(sortedData);
        } else {
          console.error('Error fetching dataddddddddd:', result.message);
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

    const confirmDelete = window.confirm(`Are you sure you want to delete this item?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/api/agentsrequest/${id}`, {
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
        console.error('Delete erroraaaaaa:', error);
      }
    }
  };



  const handleRowClick = (id) => {
    navigate(`/agentsrequestdetail/${id}`);
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
                value={experiencedFilter}
                onChange={(e) => setExperiencedFilter(e.target.value)}
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

             

                              
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
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
            handleRowClick(row.id);
          }}
          selected={isSelected}
        >
         
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.id === 'actions' ? (
                  <>
                    
                    <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row.id) /* Delete functionality */ }}>
                      <DeleteIcon />
                    </IconButton>
                   
                    
                  
 
                  </>
                ) 
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



     
    </Paper>


    

    </>
  );
}