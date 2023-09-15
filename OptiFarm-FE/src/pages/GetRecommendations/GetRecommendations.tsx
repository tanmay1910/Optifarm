import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Basic } from './Basic';
import { Advance } from './Advance';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const GetRecommendations: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Basic" />
                    <Tab label="Advance" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Basic />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Advance />
            </CustomTabPanel>
        </Box>
    );
}

const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
