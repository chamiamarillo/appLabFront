import React from 'react';
import {Button} from '@mui/material';
import { Icon,IconButton } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';


// import { DeleteIcon,Icon,IconButton} from '@mui/icons-material';
const Iconos = () => {
    return ( 
        <div>

          <DeleteIcon
           color="primary"
            fontSize="large"
             />

            <Icon
             color="primary">
            star
            </Icon>

<Button 
variant="contained" 
color="primary" 
startIcon={<DeleteIcon />}>
  Eliminar
</Button>
<Button 
variant="outlined" 
color="primary" 
endIcon={<AttachFileIcon />}> 
{/* //{acomoda al final el icnoco} */}
  Adjuntar
</Button>
<Button 
variant="text" 
color="secondary" 
endIcon={<AccessAlarmIcon 
  color='secondary'
  
  fontSize='small'/>}> 
{/* //{acomoda al final el icnoco} */}
  Colocar Hora
</Button>




<ThreeDRotation fontSize='large'/>



<IconButton aria-label="delete" color="primary">
  <DeleteIcon />es un boton con icono!!
</IconButton>  
        </div>


     );
}
 
export default Iconos;