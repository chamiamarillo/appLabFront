
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {Grid, Box } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


import moment from 'moment'



export default function Filtros(props) {
    const fecha = new Date();
    const fechaActual = (moment(fecha).format('DD/MM/YYYY'));
    
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      console.log(event.target.checked);
    }; 


    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>

       <Grid container component="form" onSubmit={props.cargaEncabezado} noValidate direction="row"
    justifyContent="center"
    alignItems="center"

    sx={{
      '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
      borderLeft: 'var(--Grid-borderWidth) solid',
      borderRight: 'var(--Grid-borderWidth) solid',
      borderBottom: 'var(--Grid-borderWidth) solid',
      borderColor: 'divider', paddingX: 4, borderRadius: 4, paddingY:2,marginX:4
    }}
    spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }}>
        <Grid item xs={2}  sx={{m:2}} container  >
            <FormControl   variant="filled" fullWidth>
            <InputLabel  variant="standard"  id="estado" >Filtrar por estado</InputLabel>
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
            

            >
           
            <MenuItem   sx={{ width:100, fontSize: 14 }} value={"TODOS"}> TODOS </MenuItem>
            <MenuItem   sx={{ width:100, fontSize: 14 }} value={"ACEPTADO"}> ACEPTADO </MenuItem>
            <MenuItem sx={ {width:100, fontSize: 14 }} value={"PENDIENTE"}>PENDIENTE</MenuItem>
            <MenuItem sx={ {width:100, fontSize: 14 }} value={"RECHAZADO"}>RECHAZADO</MenuItem>
            
           

            </Select>
        </FormControl>
        </Grid>


        {/* <Grid item xs={2} container  >
        <FormControl component="fieldset" sx={{ marginLeft: 10 }}>
               <Typography sx={{ fontSize: 30 }} aria-label="simple table"  >
            <FormLabel component="legend">Pedidos de Hoy</FormLabel>
            <FormGroup aria-label="position" column>

               
                <FormControlLabel
                    value="fecha_hoy"
                    control={
                    <Switch 
                    color="warning" 
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    
                    />}
                    label={fechaActual}
                    labelPlacement="top"

                    style={{ color: "#43a047" }}
                />
                
                

            </FormGroup>
          
        </FormControl>
        </Grid>  */}

        <Grid item xs={2} sx={{m:2}}>
      <Typography sx={{ fontSize: 12 }} aria-label="simple table" color="text.secondary" >
        {/* <fieldset  style={{width:"145px",height:"56px"}} > */}
       
          <legend>fecha inicio de busqueda </legend>
     
        
        <input  type="date" 
        style={{ border: "none",padding:"10px",width: "80%",fontSize:"14px",fontFamily:"cursive",color: "grey"}}
              
        //   min={formatManiana} 
        id="fecha_utilizacion" name="fecha_utilizacion" ></input>
         {/* </fieldset> */}
        </Typography>
       
       
      </Grid>

      <Grid item xs={2} sx={{m:2}}>
      <Typography sx={{ fontSize: 12 }} aria-label="simple table" color="text.secondary" >
        {/* <fieldset  style={{width:"145px",height:"56px"}} > */}
       
          <legend>fecha fin de busqueda</legend>
     
        
        <input  type="date" 
        style={{ border: "none",padding:"10px",width: "80%",fontSize:"14px",fontFamily:"cursive",color: "grey"}}
              
        //   min={formatManiana} 
        id="fecha_utilizacion" name="fecha_utilizacion" ></input>
         {/* </fieldset> */}
        </Typography>
       
       
      </Grid>

        </Grid>
        </Box>
/* <Stack direction="row" spacing={2} justifyContent="center"lignItems="center" mb={2}>
     
<div>
    <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
    >
       Filtrar por estados
    </Button>
    <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
    >
        {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                    transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
            >
                <Paper>
                <Grid item xs={1} container justifyContent="center"  >
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                        >
                           
                            
         
                            <MenuItem onClick={handleClose}> Profile </MenuItem>
                            <MenuItem onClick={handleClose}> My account </MenuItem>
                            <MenuItem onClick={handleClose}> Logout </MenuItem>
                            
                        </MenuList>
                    </ClickAwayListener>
                    </Grid>  
                </Paper>
              
            </Grow>
        )}
    </Popper>
</div>
</Stack> */
    );
}