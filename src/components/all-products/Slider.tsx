'use client';

import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value: number) {
  return `${value} IP`;
}

const marks: { value: number; label: string }[] = [{ value: 10, label: '10' }];

for (let i = 100; i <= 1000; i += 100) {
  marks.push({
    value: i,
    label: i.toString(),
  });
}

export default function MySlider() {
  return (
    <Box sx={{ width: '90%', margin: '40px auto' }}>
      <Slider
        defaultValue={100} 
        getAriaValueText={valuetext}
        step={null}
        marks={marks}
        valueLabelDisplay="on"
        min={10} 
        max={1000} 
      />
    </Box>
  );
}