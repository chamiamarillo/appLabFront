import React from 'react';
import teal from '@mui/material/colors/teal'
import green from '@mui/material/colors/teal'

import { createTheme} from '@mui/material/styles';

const Theme1=createTheme({
    palette:{
        primary:{
            // main:"#b4e0bc"
            main:green[400]
        },
        secondary:{
            // main:teal[400]
            // main:"#43a047"
            // main:green[400]
            main:"#b4e0bc"
        },
        verdeC:{
            main:"#b4e0bc"

        }
    }
})
 
export default Theme1;