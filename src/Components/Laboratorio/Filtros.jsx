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

import {Grid} from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';





import { axiosGetPedido } from '../../Services/getPedidosService';
export default function Filtros(props) {



    return (
        <Grid container direction="row"
        justifyContent="center"
       
        alignItems="center" mb={2} >
        <Grid item xs={3} container justifyContent="center"  >
            <FormControl fullWidth>
            <InputLabel id="estado" >Filtrar por estado</InputLabel>
            <Select
            InputLabelProps={{
                shrink: true,
            }}
            labelId="estado"
            id="estado"
            value={props.tipo_pedido}
            label="estado"
            onChange={props.cargarEstado}
            defaultValue={""}
            size={1}

            >
           
          
            <MenuItem sx={{ fontSize: 14 }} value={"ACEPTADO"}>ACEPTADO</MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={"PENDIENTE"}>PENDIENTE</MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={"RECHAZADO"}>RECHAZADO</MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={"TODOS"}>TODOS</MenuItem>

            </Select>
        </FormControl>
        </Grid>
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
        </Grid>
    );
}