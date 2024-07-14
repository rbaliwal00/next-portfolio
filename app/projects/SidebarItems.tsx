"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import ReactIcon from '../icons/Logos/reactjs-line.svg';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { blueGrey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SidebarItems = () => {
     const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='projects__sidebar'>
      
        <div >
        <Checkbox
            {...label}
            sx={{
                color: blueGrey[300],
                '&.Mui-checked': {
                color: blueGrey[300],
                },
            }} />
                </div>
                <div>
                    <label htmlFor="projects-1" className='projects__label'>
                                    <Image src={ReactIcon} alt="react" width={24} height={24} />
                        React
                    </label>
                </div>
      
    </div>

  )
};

export default SidebarItems;