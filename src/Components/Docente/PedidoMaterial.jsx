import React from 'react'
import Avatar from '@mui/material/Avatar';
import {Button, IconButton, Autocomplete, TextField, Box, Grid, Typography, ThemeProvider } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import pipeta from '../Image/pipeta.png';
import { margin } from '@mui/system';

const PedidoMaterial = (props) => {


    return (
    

            <Grid container direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderBottom: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider', paddingX: 2, borderRadius: 4, paddingY: 1, marginBottom: 3
                }}
                spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }}>

                {/* TITULO */}
                <Grid container direction="row"
                    justifyContent="start"
                    alignItems="center"  >
                    <Grid item xs={1} container justifyContent="center"  >
                    <img width={40} alt="" heigth={40} src={pipeta} />
                    </Grid>
                    <Grid item xs={3} container justifyContent="start">
                    <Typography sx={{ fontSize: 40 }} color="text.secondary">
                        Materiales
                    </Typography>
                    </Grid>
                </Grid>



                <Grid container direction="row"
                    justifyContent="flex-end"
                    alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >

                    <Grid item xs={1} container justifyContent="center">
                    <Typography sx={{ fontSize: 14 }} aria-label="simple table" color="text.secondary">
                        Confirmar
                    </Typography>
                    </Grid>
                    <Grid item xs={1} container justifyContent="center">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Desechar
                    </Typography>
                    </Grid>
                </Grid>
                {/* COMIENZA EL FORMULARIO DE MATERIALES */}

                
                <Grid container component="form" onSubmit={props.cargaMaterial} noValidate direction="row"
                    justifyContent="start"
                    alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >
                    <Grid item xs={5} container justifyContent="start" >
                    <Autocomplete
                        disablePortal
                        fullWidth
                        id="combo-box-demo"
                        options={props.listaMateriales}
                        getOptionLabel={(option) => option.descripcion}
                        onChange={(event, value) =>props.set_IdMat(event, value)}
                        renderInput={(params) => {
                        return (
                            <TextField {...params}
                            margin="normal"

                            name="descripcion_material"
                            label={"descripcion_material"}
                            InputLabelProps={{ className: "autocompleteLabel", shrink: true, }}
                            InputProps={{
                                ...params.InputProps,
                            }}
                            />
                        );
                        }}
                    />
                    </Grid>
                    <Grid item xs={1} container justifyContent="center" />
                    <Grid item xs={2} container justifyContent="center">
                    <TextField
                        sx={{ marginTop: 1 }}

                        id="cant_material"
                        variant="outlined"
                        name="cant_material"
                        label="cant_material"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                        inputProps: {
                            max: 100, min: 0
                        }
                        }}

                    />


                    </Grid>
                    <Grid item xs={2} container justifyContent="center" />
                    <Grid item xs={1} container justifyContent="center">
                    <Button fullWidth
                    margin="normal"
                variant="text"
                type="submit"
                >
                <Avatar> 
                                        <AddCircleIcon bgcolor={"secondary"} color={"primary"} />
                                        </Avatar>
            </Button>  
            
                </Grid>
                <Grid  item xs={1} container justifyContent="center">
                <Avatar> 
                                        <DeleteForeverIcon color={"rojo"} />
                                        </Avatar> 
                    </Grid>
                </Grid>
                <Grid></Grid>
                </Grid>

   
)
}



export default PedidoMaterial