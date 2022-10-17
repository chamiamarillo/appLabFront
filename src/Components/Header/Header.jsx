import React from 'react';
import Typography from '@mui/material/Typography'


const Header = () => {
    return ( 
        <div>
  <div>
            <Typography variant="h1" color="initial">
                gigante
            </Typography>
            <Typography variant="body1" align='center' color="secondary" paragraph>
                {/* paragraph o gutterbotton para darle espacio */}
                al centro
            </Typography>
            <Typography variant="body1" align='center' color="primary">
                al centro
            </Typography>

        </div>
        </div>
     );
}
 
export default Header;