// import React, { useEffect, useState } from 'react';
// import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Container, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import Header from "../screens/header";
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const ApplicantsList = () => {
//     const [applicants, setApplicants] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [filter, setFilter] = useState('All');
//     const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

//     const agentName = localStorage.getItem('userdata');

//     useEffect(() => {
//         const fetchApplicants = async () => {
//             try {
//                 // Uncomment the following lines to fetch real data.
//                 const response = await fetch(`https://testcvapi.ntechagent.com/applicantshistory?agentname=${agentName}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setApplicants(data.data);

                
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchApplicants();
//     }, [agentName]);

//     const filterApplicants = () => {
//         const now = new Date();
//         return applicants.filter(applicant => {
//             const createdAt = new Date(applicant.created_at);
//             switch (filter) {
//                 case 'Today':
//                     return createdAt.toDateString() === now.toDateString();
//                 case 'Last Week':
//                     const lastWeek = new Date();
//                     lastWeek.setDate(now.getDate() - 7);
//                     return createdAt >= lastWeek && createdAt <= now;
//                 case 'Last Month':
//                     const lastMonth = new Date();
//                     lastMonth.setMonth(now.getMonth() - 1);
//                     return createdAt >= lastMonth && createdAt <= now;
//                 case 'This Year':
//                     return createdAt.getFullYear() === now.getFullYear() && createdAt.getFullYear() === selectedYear; // Filter by selected year
//                 case 'Quarter':
//                     const quarterStart = new Date();
//                     quarterStart.setMonth(Math.floor(now.getMonth() / 3) * 3, 1); // Start of current quarter
//                     return createdAt >= quarterStart && createdAt <= now && createdAt.getFullYear() === selectedYear; // Filter by selected year
//                 case 'All':
//                 default:
//                     return selectedYear === 'All' || createdAt.getFullYear() === selectedYear; // Include all applicants if year is 'All'
//             }
//         });
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
//         doc.text("Applicants List", 20, 10);

//         const tableColumn = ['S.No', 'Name', 'Post Applied For', 'Agent', 'Destination'];
//         const tableRows = [];

//         filterApplicants().forEach((applicant, index) => {
//             const applicantData = [
//                 index + 1,
//                 applicant.applicant_name,
//                 applicant.postappliedfor,
//                 applicant.agent,
//                 applicant.destination,
//             ];
//             tableRows.push(applicantData);
//         });

//         doc.autoTable({
//             head: [tableColumn],
//             body: tableRows,
//             startY: 20,
//         });

//         doc.save("Applicants_List.pdf");
//     };

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (error) {
//         return <Typography color="error">Error: {error}</Typography>;
//     }

//     const filteredApplicants = filterApplicants();

//     // Generate a list of years for the year filter
//     const currentYear = new Date().getFullYear();
//     const years = ['All', ...Array.from({ length: 5 }, (_, index) => currentYear - index)];

//     return (
//         <>
//         { window.width < 800 ?

//          // for Mobile phone devices
//          <Container maxWidth={false} style={{ padding: '0' }}>
//          <Header />



//          <Grid container spacing={2} style={{padding: "10px"}}>
//                  <Grid item xs={12} md={6}>
//                      <FormControl fullWidth style={{ marginBottom: '', marginTop: "30px" }}>
//                          <InputLabel>Filter by Time</InputLabel>
//                          <Select
//                              value={filter}
//                              onChange={(e) => {
//                                  setFilter(e.target.value);
//                                  setSelectedYear(currentYear);
//                              }}
//                          >
//                              <MenuItem value="All">All</MenuItem>
//                              <MenuItem value="Today">Today</MenuItem>
//                              <MenuItem value="Last Week">Last Week</MenuItem>
//                              <MenuItem value="Last Month">Last Month</MenuItem>
//                              <MenuItem value="This Year">This Year</MenuItem>
//                              <MenuItem value="Quarter">Quarter</MenuItem>
//                          </Select>
//                      </FormControl>
//                  </Grid>
//                  <Grid item xs={12} md={6}>
//                      <FormControl fullWidth style={{ marginTop: "10px", marginBottom: '' }}>
//                          <InputLabel>Year</InputLabel>
//                          <Select
//                              value={selectedYear}
//                              onChange={(e) => {
//                                  setSelectedYear(e.target.value);
//                                  setFilter('All');
//                              }}
//                          >
//                              {years.map(year => (
//                                  <MenuItem key={year} value={year}>{year}</MenuItem>
//                              ))}
//                          </Select>
//                      </FormControl>
//                  </Grid>
//              </Grid>
//              <Button variant="contained" color="primary" onClick={generatePDF} style={{ marginBottom: '20px', marginTop: '20px', marginLeft: "10px" }}>
//                  Download PDF
//              </Button>



//          <Typography variant="h6" style={{ marginBottom: '20px', marginTop: "30px", marginLeft: "10px" }}>
//                  Total Applicants: {filteredApplicants.length}
//              </Typography>

//          {filteredApplicants.map((applicant, index) => (
//              <div style={{margin: "10px", }}>
//                  <div style={{background: "#F8F8F8", padding: "15px", fontWeight: "bold"}}><span style={{fontWeight: "bold"}}>NO:</span> {index + 1}</div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Name</span> <span>{applicant.applicant_name}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Applicant No</span> <span>{applicant.applicationNo}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Passport No</span> <span>{applicant.passportnum}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Post Applied For</span> <span>{applicant.postappliedfor}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Visa No</span> <span>{applicant.visaNo}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Agent</span> <span>{applicant.agent}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>Destination</span> <span>{applicant.destination}</span></div>
//                  <div style={{display: "flex", justifyContent: "space-between", background: "#F8F8F8", paddingBottom: "10px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}><span style={{fontWeight: "bold"}}>finished Date</span> <span>{applicant.doneDate}</span></div>

//              </div>
//              )
//          )}
        
//      </Container>
        

//         : 


//         // for Desktop
//         <Container maxWidth={false} style={{ padding: '0' }}>
//         <Header />
//         <Container maxWidth={false} style={{ padding: '30', margin: '50' }}>
//             <div style={{ display: "flex", justifyContent: "flex-start" }}>
//                 <FormControl fullWidth style={{ marginBottom: '20px', marginTop: "30px" }}>
//                     <InputLabel>Filter by Time</InputLabel>
//                     <Select
//                         value={filter}
//                         onChange={(e) => {
//                             setFilter(e.target.value);
//                             setSelectedYear(currentYear); // Set year to current year when filter is changed
//                         }}
//                     >
//                         <MenuItem value="All">All</MenuItem>
//                         <MenuItem value="Today">Today</MenuItem>
//                         <MenuItem value="Last Week">Last Week</MenuItem>
//                         <MenuItem value="Last Month">Last Month</MenuItem>
//                         <MenuItem value="This Year">This Year</MenuItem>
//                         <MenuItem value="Quarter">Quarter</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <FormControl fullWidth style={{ marginTop: "30px", marginBottom: '20px', marginLeft: '12px' }}>
//                     <InputLabel>Year</InputLabel>
//                     <Select
//                         value={selectedYear}
//                         onChange={(e) => {
//                             setSelectedYear(e.target.value);
//                             setFilter('All'); // Set filter to "All" when year is changed
//                         }}
//                     >
//                         {years.map(year => (
//                             <MenuItem key={year} value={year}>{year}</MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//             </div>
//             <Button variant="contained" color="primary" onClick={generatePDF} style={{ marginBottom: '20px', marginTop: '20px' }}>
//                 Download PDF
//             </Button>

//             {/* Total Applicants Display */}
//             <Typography variant="h6" style={{ marginBottom: '20px' }}>
//                 Total Applicants: {filteredApplicants.length}
//             </Typography>

//             <TableContainer component={Paper} style={{ marginTop: '20px', marginBottom: "20px" }}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>S.No</TableCell>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Created At</TableCell>
//                             <TableCell>Application No</TableCell>
//                             <TableCell>Passport Number</TableCell>
//                             <TableCell>Post Applied For</TableCell>
//                             <TableCell>Visa No</TableCell>
//                             <TableCell>Agent</TableCell>
//                             <TableCell>Destination</TableCell>
//                             <TableCell>Done Date</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredApplicants.map((applicant, index) => (
//                             <TableRow key={applicant.id}>
//                                 <TableCell>{index + 1}</TableCell>
//                                 <TableCell>{applicant.applicant_name}</TableCell>
//                                 <TableCell>{applicant.created_at}</TableCell>
//                                 <TableCell>{applicant.applicationNo}</TableCell>
//                                 <TableCell>{applicant.passportnum}</TableCell>
//                                 <TableCell>{applicant.postappliedfor}</TableCell>
//                                 <TableCell>{applicant.visaNo}</TableCell>
//                                 <TableCell>{applicant.agent}</TableCell>
//                                 <TableCell>{applicant.destination}</TableCell>
//                                 <TableCell>{applicant.doneDate}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     </Container>

       
        
//         }
//         </>
//     );
// };

// export default ApplicantsList;


///////////////////////////////////////////////////////



import React, { useEffect, useState } from 'react';
import {
    CircularProgress, Typography, Container, Button, MenuItem, Select, InputLabel,
    FormControl, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import Header from "../screens/header";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ApplicantsList = () => {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800); // Initial check for mobile

    const agentName = localStorage.getItem('userdata');

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await fetch(`https://testcvapi.ntechagent.com/applicantshistory?agentname=${agentName}`);
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                const data = await response.json();
                                setApplicants(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplicants();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [agentName]);

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Applicants History List", 20, 10);
        const tableColumn = ['S.No', 'Name',   'Post Applied For',  'Agent', 'Destination', ];
        const tableRows = [];

        filterApplicants().forEach((applicant, index) => {
            const applicantData = [
                index + 1,
                applicant.applicant_name,
                // applicant.created_at,
                // applicant.applicationNo,
                // applicant.passportnum,
                applicant.postappliedfor,
                // applicant.visaNo,
                applicant.agent,
                applicant.destination,
                // applicant.doneDate || 'N/A',
            ];
            tableRows.push(applicantData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
        });
        doc.save("Applicants_List.pdf");
    };

    const filterApplicants = () => {
        const now = new Date();
        return applicants.filter(applicant => {
            const createdAt = new Date(applicant.created_at);
            switch (filter) {
                case 'Today':
                    return createdAt.toDateString() === now.toDateString();
                case 'Last Week':
                    const lastWeek = new Date();
                    lastWeek.setDate(now.getDate() - 7);
                    return createdAt >= lastWeek && createdAt <= now;
                case 'Last Month':
                    const lastMonth = new Date();
                    lastMonth.setMonth(now.getMonth() - 1);
                    return createdAt >= lastMonth && createdAt <= now;
                case 'This Year':
                    return createdAt.getFullYear() === now.getFullYear() && createdAt.getFullYear() === selectedYear;
                case 'Quarter':
                    const quarterStart = new Date();
                    quarterStart.setMonth(Math.floor(now.getMonth() / 3) * 3, 1);
                    return createdAt >= quarterStart && createdAt <= now && createdAt.getFullYear() === selectedYear;
                case 'All':
                default:
                    return selectedYear === 'All' || createdAt.getFullYear() === selectedYear;
            }
        });
    };

    // if (loading) {
    //     return <CircularProgress />;
    // }

    // if (error) {
    //     return <Typography color="error">Error: {error}</Typography>;
    // }

    const filteredApplicants = filterApplicants();
    const currentYear = new Date().getFullYear();
    const years = ['All', ...Array.from({ length: 5 }, (_, index) => currentYear - index)];


    return (
        <>
            {isMobile ? (
                // Mobile view
                <Container maxWidth={false} style={{ padding: '0' }}>
                    <Header />
                    <Grid container spacing={2} style={{padding: "10px"}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth style={{ marginBottom: '', marginTop: "30px" }}>
                                                <InputLabel>Filter by Time</InputLabel>
                                                <Select
                                                    value={filter}
                                                    onChange={(e) => {
                                                        setFilter(e.target.value);
                                                        setSelectedYear(currentYear);
                                                    }}
                                                >
                                                    <MenuItem value="All">All</MenuItem>
                                                    <MenuItem value="Today">Today</MenuItem>
                                                    <MenuItem value="Last Week">Last Week</MenuItem>
                                                    <MenuItem value="Last Month">Last Month</MenuItem>
                                                    <MenuItem value="This Year">This Year</MenuItem>
                                                    <MenuItem value="Quarter">Quarter</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth style={{ marginTop: "10px", marginBottom: '' }}>
                                                <InputLabel>Year</InputLabel>
                                                <Select
                                                    value={selectedYear}
                                                    onChange={(e) => {
                                                        setSelectedYear(e.target.value);
                                                        setFilter('All');
                                                    }}
                                                >
                                                    {years.map(year => (
                                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                    <Button variant="contained" color="primary" onClick={generatePDF} style={{ marginBottom: '20px', marginTop: '20px', marginLeft: "10px" }}>
                        Download PDF
                    </Button>
                    <Typography variant="h6" style={{ marginBottom: '20px', marginTop: "30px", marginLeft: "10px" }}>
                        Total Applicants: {filteredApplicants.length}
                    </Typography>

                    {filteredApplicants.map((applicant, index) => (
                        <div key={applicant.id} style={{ margin: "10px", marginBottom: "20px" }}>
                            <div style={{ background: "#e8e8e8", padding: "15px", fontWeight: "bold", borderBottom: "1px solid #bdc2c9" }}><span>NO:</span> {index + 1}</div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Name:</span> <span>{applicant.applicant_name}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Applicant No:</span> <span>{applicant.applicationNo}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Passport No:</span> <span>{applicant.passportnum}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Post Applied For:</span> <span>{applicant.postappliedfor}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Visa No:</span> <span>{applicant.visaNo}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Agent:</span> <span>{applicant.agent}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Destination:</span> <span>{applicant.destination}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", background: "#F8F8F8", padding: "10px", borderBottom: "1px solid #bdc2c9" }}>
                                <span style={{ fontWeight: "bold" }}>Finished Date:</span> <span>{applicant.doneDate || 'N/A'}</span>
                            </div>
                        </div>
                    ))}
                </Container>
            ) : (
                // Desktop view
                <Container maxWidth={false} style={{ padding: '0' }}>
                    <Header />
                    <Container >
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>
                            <FormControl fullWidth style={{ marginBottom: '20px', marginTop: "30px" }}>
                                <InputLabel>Filter by Time</InputLabel>
                                <Select
                                    value={filter}
                                    onChange={(e) => {
                                        setFilter(e.target.value);
                                        setSelectedYear(new Date().getFullYear());
                                    }}
                                >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="Today">Today</MenuItem>
                                    <MenuItem value="Last Week">Last Week</MenuItem>
                                    <MenuItem value="Last Month">Last Month</MenuItem>
                                    <MenuItem value="This Year">This Year</MenuItem>
                                    <MenuItem value="Quarter">Quarter</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth style={{ marginTop: "30px", marginBottom: '20px', marginLeft: '12px' }}>
                                <InputLabel>Year</InputLabel>
                                <Select
                                    value={selectedYear}
                                    onChange={(e) => {
                                        setSelectedYear(e.target.value);
                                        setFilter('All');
                                    }}
                                >
                                    {Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index).map(year => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <Button variant="contained" color="primary" onClick={generatePDF} style={{ marginBottom: '20px', marginTop: '20px' }}>
                            Download PDF
                        </Button>

                        <Typography variant="h6" style={{ marginBottom: '20px' }}>
                            Total Applicants: {filteredApplicants.length}
                        </Typography>

                        <TableContainer component={Paper} style={{ marginTop: '20px', marginBottom: "20px" }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Created At</TableCell>
                                        <TableCell>Application No</TableCell>
                                        <TableCell>Passport Number</TableCell>
                                        <TableCell>Post Applied For</TableCell>
                                        <TableCell>Visa No</TableCell>
                                        <TableCell>Agent</TableCell>
                                        <TableCell>Destination</TableCell>
                                        <TableCell>Done Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredApplicants.map((applicant, index) => (
                                        <TableRow key={applicant.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{applicant.applicant_name}</TableCell>
                                            <TableCell>{applicant.created_at}</TableCell>
                                            <TableCell>{applicant.applicationNo}</TableCell>
                                            <TableCell>{applicant.passportnum}</TableCell>
                                            <TableCell>{applicant.postappliedfor}</TableCell>
                                            <TableCell>{applicant.visaNo}</TableCell>
                                            <TableCell>{applicant.agent}</TableCell>
                                            <TableCell>{applicant.destination}</TableCell>
                                            <TableCell>{applicant.doneDate || 'N/A'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </Container>
            )}
        </>
    );
};

export default ApplicantsList;