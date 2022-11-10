import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Rangeslider.scss";

export default function ColorSlider({range, setRange, filterByRange}) {
    const handleChange = (event, newValue) => {
        setRange(newValue);
        filterByRange(range);
    };

    return (
        <Box sx={{ width: 200 }} className="app__rangeslider">
            <Slider
                getAriaLabel={() => 'Price range'}
                value={range}
                onChange={handleChange}
                style={{color: "#52af77"}}
            />
        </Box>
    );
}