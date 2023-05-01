// import * as React from 'react';
// import Switch from '@mui/material/Switch';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

// export default function Filtros() {
//   return (
//     <div>
//       <Switch {...label} defaultChecked />
//       <Switch {...label} />

//     </div>
//   );
// }
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Filtros() {
    return (
        <FormControl component="fieldset" sx={{ marginLeft: 10 }}>
              <Typography sx={{ fontSize: 30 }} aria-label="simple table"  >
            {/* <FormLabel component="legend">Filtro tarjetas</FormLabel> */}
            <FormGroup aria-label="position" row>

                <FormControlLabel
                    value="aceptado"
                    control={<Switch color="warning" />}
                    label="Aceptado"
                    labelPlacement="start"
                 
                    style={{ color: "#14C38E", marginRight: "10px"}}//color="warning"
                />
                <FormControlLabel
                    value="rechazado"
                    control={<Switch color="warning" />}
                    label="Rechazado"
                    labelPlacement="start"

                    style={{ color: "#14C38E", marginRight: "10px" }}//color="warning"
                />
                <FormControlLabel
                    value="pendiente"
                    control={<Switch color="warning" />}
                    label="Pendiente"
                    labelPlacement="start"

                    style={{ color: "#14C38E", marginRight: "10px" }}//color="warning"
                />
                <FormControlLabel
                    value="fecha_hoy"
                    control={<Switch color="warning" />}
                    label="Fecha_hoy"
                    labelPlacement="start"

                    style={{ color: "#43a047" }}
                />

            </FormGroup>
            </Typography>
        </FormControl>
    );
}