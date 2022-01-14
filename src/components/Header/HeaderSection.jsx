import Paper from '@mui/material/Paper';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeIcon from '@mui/icons-material/Home';

const HeaderSection = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper elevation={0} sx={{ marginBottom: 5, padding: 1.5 }}>
            <Tabs value={value} onChange={handleChange} aria-label="header nav bar">
                <Tab icon={<HomeIcon />} label="HOME" />
                <Tab icon={<LibraryBooksIcon />} label="ABOUT SOLARIS" />
                <Tab icon={<PersonPinIcon />} label="ABOUT ME" />
            </Tabs>
        </Paper>
    )
}

export default HeaderSection;