// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Box,
// } from '@mui/material';

// import Header from "../screens/header"

// const Settings = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [notifications, setNotifications] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic
//     console.log({ username, email, notifications });
//   };

//   return (
//     <Container maxWidth={false} style={{ padding: '0 ' }} >
//         <Header />

//         <Container maxWidth="sm">
//       <Box sx={{ mt: 4, mb: 2 }}>
//         <Typography variant="h4" align="center">
//           Settings
//         </Typography>
//       </Box>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Username"
//           variant="outlined"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           type="email"
//           variant="outlined"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           margin="normal"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={notifications}
//               onChange={(e) => setNotifications(e.target.checked)}
//             />
//           }
//           label="Enable Notifications"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Save Settings
//         </Button>
//       </form>
//       </Container>
//     </Container>
//   );
// };

// export default Settings;



//////////////////////////////////////////////////////////////////



// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormControlLabel,
//     InputLabel,
//     MenuItem,
//     Select,
//     Switch,
//     Typography,
// } from '@mui/material';

// const SettingsScreen = () => {
//     const [settings, setSettings] = useState({
//         theme: 'light',
//         notifications: true,
//         language: 'en',
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setSettings({
//             ...settings,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Settings saved:', settings);
//         // Logic to save settings can be added here
//     };

//     const handleInstall = (browser) => {
//         // alert(`Installing for ${browser}`);

//         if (browser === "Chrome") {
//           window.open("https://chrome.google.com/webstore/detail/your-chrome-extension-id", "_blank");
//         } else if (browser === "Firefox") {
//           window.open("https://addons.mozilla.org/addon/nuratech-tools/", "_blank");
//         } else {
//           alert("This extension is only available for Chrome and Firefox.");
//         }
//         // Here you can add logic to redirect or open installation links
//     };

//     return (
//         <Box sx={{ padding: 3 }}>
//             <Typography variant="h4" gutterBottom>
//                 Settings
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 {/* <FormControl fullWidth sx={{ mb: 2 }}>
//                     <InputLabel>Theme</InputLabel>
//                     <Select
//                         name="theme"
//                         value={settings.theme}
//                         onChange={handleChange}
//                     >
//                         <MenuItem value="light">Light</MenuItem>
//                         <MenuItem value="dark">Dark</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <FormControlLabel
//                     control={
//                         <Switch
//                             name="notifications"
//                             checked={settings.notifications}
//                             onChange={handleChange}
//                         />
//                     }
//                     label="Enable Notifications"
//                 /> */}
//                 {/* <FormControl fullWidth sx={{ mb: 2 }}>
//                     <InputLabel>Language</InputLabel>
//                     <Select
//                         name="language"
//                         value={settings.language}
//                         onChange={handleChange}
//                     >
//                         <MenuItem value="en">English</MenuItem>
//                         <MenuItem value="es">Spanish</MenuItem>
//                         <MenuItem value="fr">French</MenuItem>
//                     </Select>
//                 </FormControl> */}
//                 <Button variant="contained" type="submit" sx={{ mb: 2 }}>
//                     Save Settings
//                 </Button>
//             </form>
//             <Typography variant="h6" gutterBottom>
//                 Install Extension
//             </Typography>
//             <Button
//                 variant="outlined"
//                 onClick={() => handleInstall('Firefox')}
//                 sx={{ mr: 2 }}
//             >
//                 Install for Firefox
//             </Button>
//             <Button
//                 variant="outlined"
//                 onClick={() => handleInstall('Chrome')}
//             >
//                 Install for Chrome
//             </Button>
//         </Box>
//     );
// };

// export default SettingsScreen;




//////////////////////////////////////////////////




import React, { useState } from 'react';
import {
    Container,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    Switch,
    Typography,
} from '@mui/material';
import Header from "../screens/header";
const SettingsScreen = () => {
    const [settings, setSettings] = useState({
        theme: 'light',
        notifications: true,
        language: 'en',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Settings saved:', settings);
        // Logic to save settings can be added here
    };

    const handleInstall = (browser) => {
        alert(`Installing for ${browser}`);
        // Here you can add logic to redirect or open installation links
    };

    return (
        <Container maxWidth={false} style={{ padding: '0 ' }}>
            <Header />
        <Box sx={{ padding: 3, }}>
            
            <Typography variant="h4" gutterBottom>
                Settings
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Theme</InputLabel>
                    <Select
                        name="theme"
                        value={settings.theme}
                        onChange={handleChange}
                    >
                        <MenuItem value="light">Light</MenuItem>
                        <MenuItem value="dark">Dark</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Switch
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                    }
                    label="Enable Notifications"
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Language</InputLabel>
                    <Select
                        name="language"
                        value={settings.language}
                        onChange={handleChange}
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" type="submit" sx={{ mb: 2 }}>
                    Save Settings
                </Button>
            </form>
            <Typography variant="h6" gutterBottom>
                Install Extension
            </Typography>
            <Button
                variant="outlined"
                onClick={() => handleInstall('Firefox')}
                sx={{ mr: 2 }}
            >
                Install for Firefox
            </Button>
            <Button
                variant="outlined"
                onClick={() => handleInstall('Chrome')}
            >
                Install for Chrome
            </Button>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Quick Links
            </Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="User" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Account Settings" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Privacy" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Security" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Help" />
                </ListItem>
            </List>
        </Box>
        </Container>
    );
};

export default SettingsScreen;