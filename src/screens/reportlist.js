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
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Header from "../screens/header";
import Checkbox from '@mui/material/Checkbox';
import html2pdf from 'html2pdf.js';
import embassylistpdftopimage from "../../src/image_placeholder/embassylistpdftopimage.jpeg";
import { useRef } from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  { id: 'destination', label: 'Destination', minWidth: 100 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },
  { id: 'doneDate', label: 'Done Date', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

const today = new Date();
const formattedTodayDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayName = dayNames[today.getDay()];
const monthName = monthNames[today.getMonth()];
const dayNumber = today.getDate();
const year = today.getFullYear();

export default function StickyHeadTable() {
  const generatePDF = async () => {
    const doc = new jsPDF();
    doc.text(`PENDING LMIS CONTRACTS`, 14, 15);

    const tableColumn = ["NO", "NAME", "EP NUMBER", "LABOUR ID", "Destination"];
    const tableRows = selectedRows.map((row, index) => [
      index + 1,
      `${row.name} ${row.middleName} ${row.surname}`, 
      row.passportnum,
      row.laborId,
      row.destination, 
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: {
        fontSize: 10,
      },
    });

    // Wait for the PDF to be saved
    await doc.save(`LMIS REPORT ${formattedTodayDate}.pdf`);

    // Call the function to move selected rows to history table after the PDF is saved
    handleDeleteAndMoveIntoHistoryTable();
};
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [editData, setEditData] = React.useState({});
  const [selected, setSelected] = React.useState([]);
  const [isAnyChecked, setIsAnyChecked] = React.useState(false);

  const selectedRows = rows.filter(row => selected.includes(row.id));

  const [positionFilter, setPositionFilter] = React.useState('');
  const [nationalityFilter, setNationalityFilter] = React.useState('');
  const [genderFilter, setGenderFilter] = React.useState('');
  const [experienceFilter, setExperienceFilter] = React.useState('');
  const [acceptedFilter, setAcceptedFilter] = React.useState('');

  const filteredRows = rows.filter(row => {
    const experiences = JSON.parse(row.experience) || [];
    const showdoneapplicants = row.finished;

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
      setIsAnyChecked(true);
      return;
    }
    setSelected([]);
    setIsAnyChecked(false);
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
    setIsAnyChecked(newSelected.length > 0);
  };

  const pdfRef = useRef();

  const downloadCV = () => {
    const element = pdfRef.current;
    const isMobile = window.innerWidth <= 768;
    const config = {
      filename: 'Embassy_list.pdf',
      margin: 1,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: isMobile ? 1 : 2, logging: true, dpi: 300, letterRendering: true },
      jsPDF: { unit: 'mm', format: isMobile ? 'A4' : 'letter', orientation: 'Portrait' }
    };

    html2pdf()
      .from(element)
      .set(config)
      .toPdf()
      .get('pdf')
      .then((pdf) => {})
      .save();
  };

  const [data, setData] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/tt?agentname=${agentName}`);
        const result = await response.json();
        if (result.status === 'ok') {
          console.log(result.data);
          setData(result.data);
          const sortedData = result.data
            .filter(item => item.createdAt).filter(item => item.finished === true)
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
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

  const [message, setMessage] = React.useState('');

  const handleDeleteImages = async (e) => {
    e.preventDefault();
    setMessage('');

    const confirmDelete = window.confirm('Are you sure you want to delete these items?');

    const idArray = selected;

    if (idArray.length === 0) {
      setMessage('Please enter valid IDs.', idArray);
      return;
    }

    if (confirmDelete) {
      try {
        const response = await fetch(`https://testcvapi.ntechagent.com/deletemultipeapplicants?agentname=${agentName}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: idArray }),
        });

        if (response.ok) {
          const data = await response.json();
          setRows(rows.filter(row => !idArray.includes(row.id)));
          setMessage(`Successfully deleted ${data.deletedCount} images.`);
        } else {
          const errorData = await response.json();
          setMessage(errorData.message || 'Error deleting images.');
        }
      } catch (error) {
        console.error('Error deleting images:', error);
        setMessage('An error occurred while deleting images.');
      }
    }
  };


  const [historyMessage, setHistoryMessage] = React.useState('');
const [warningMessage, setWarningMessage] = React.useState(''); // New state for the warning message

const handleDeleteAndMoveIntoHistoryTable = async (e) => {
  if (e) e.preventDefault();
  setMessage('');
  setWarningMessage(''); // Reset warning message

  const confirmDelete = window.confirm('Do you want to move these applicants into history? This action cannot be restored.');

  const idArray = selected;

  if (idArray.length === 0) {
      setMessage('Please enter valid IDs.', idArray);
      return;
  }

  if (confirmDelete) {
      try {
          const response = await fetch(`https://testcvapi.ntechagent.com/movetohistorytable?agentname=${agentName}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ids: idArray }),
          });

          if (response.ok) {
              const data = await response.json();
              setRows(rows.filter(row => !idArray.includes(row.id)));
              setMessage(`Successfully moved ${data.movedCount} items to history table.`);
          } else {
              const errorData = await response.json();
              setMessage(errorData.message || 'Error moving items to history table.');
          }
      } catch (error) {
          console.error('Error moving items to history table:', error);
          setMessage('An error occurred while moving items to history table.');
      }
  } else {
      setWarningMessage('This action cannot be restored.'); // Set the warning message
  }
};

  const handleSubmitforRestoreButton = async (id) => {
    editData.finished = false;

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

  const chunks = chunkArray(selectedRows, 10);

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
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < rows.length}
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
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
                        handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
                      }}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isSelected}
                          onChange={(event) => {
                            event.stopPropagation();
                            handleClick(row.id);
                          }}
                          onClick={(event) => { event.stopPropagation(); }}
                        />
                      </TableCell>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'actions' ? (
                              <>
                                <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row.id) }}>
                                  <DeleteIcon />
                                </IconButton>
                                <button onClick={(event) => { event.stopPropagation(); handleSubmitforRestoreButton(row.id) }}>Restore</button>
                              </>
                            ) : column.id === "status" ? (
                              <TableCell align="center">
                                {JSON.parse(row.acceptedBy)?.some(entry => entry.accepted === "true") ? (
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
                            ) : (
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
          <button onClick={generatePDF} style={{ marginTop: '20px', marginLeft: "30px", marginBottom: "20px" }}>
            Download Report List
          </button>
        )}
        {isAnyChecked && (
          <button onClick={handleDeleteImages} style={{ marginTop: '20px', marginLeft: "30px", marginBottom: "20px", background: "red" }}>
            Delete
          </button>
        )}
        
      </Paper>
      <div style={{ display: "none" }}>
        <div id="embassy_list" ref={pdfRef}>
          <style>
            {`
              @page :first {
                margin-top: 20mm;
                margin-right: 0.2mm;
                margin-bottom: 0mm;
                margin-left: 0.2mm;
              }
              @page {
                margin-top: 10mm;
                margin-right: 0.2mm;
                margin-bottom: 0mm;
                margin-left: 0.2mm;
              }
            `}
          </style>
          {chunkArray(selectedRows, 30).map((chunk, chunkIndex, allChunks) => (
            <div
              key={chunkIndex}
              style={{
                marginTop: chunkIndex === 0 ? '20px' : '0',
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
                  </tr>
                </thead>
                <tbody>
                  {chunk.map((row, index) => (
                    <tr key={row.id}>
                      <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                        {index + 1}
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
                        {row.doneDate}
                      </td>
                      <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
                        {row.applicationNo}
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