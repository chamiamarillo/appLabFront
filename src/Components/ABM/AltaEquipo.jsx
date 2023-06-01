import React from "react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import moment from 'moment'
import Grid from '@mui/material/Grid';
import laboratorio from '../Image/biologia.png';
import { Autocomplete, TextField, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Theme1 from '../Theme/Theme1';



function AltaEquipo(
    { open = { open },
        setOpen = { setOpen },
        scroll = { scroll },
        handleClose = { handleClose },


    }
) {

    const cargaEquipo = (second) => { }


    return (

        <ThemeProvider theme={Theme1}>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                // maxWidth="lg"
                fullWidth
                // style={width=40}
                sx={{
                    padding: 2,

                    height: 500
                }}

            >
                {/* <DialogTitle id="scroll-dialog-title">Pedido n°: {"uno"}</DialogTitle> */}
                <DialogContent
                    dividers={scroll === 'paper'
                    }
                    sx={{
                        '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider', padding: 2, borderRadius: 4, margin: 3

                    }}

                >
                    {/* <DialogContentText
                        id="scroll-dialog-description"
                        // ref={descriptionElementRef}
                        tabIndex={-1}      > */}

                    <Grid container direction='row'
                        sx={{ marginTop: 4 }} columns={{ xs: 12 }} >

                        <Grid container
                            //  component="form" 
                            noValidate direction="row"
                            justifyContent="space-around"
                            alignItems="center"


                            spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >



                            <Grid container direction="row"
                                justifyContent="start"
                                alignItems="center"  >
                                <Grid item xs={1} container justifyContent="center"  >
                                    <img width={30} alt="" heigth={30} src={laboratorio} />
                                </Grid>
                                <Grid item xs={4} container justifyContent="start">
                                    <Typography sx={{ fontSize: 30 }} color="text.secondary">
                                        Equipos
                                    </Typography>
                                </Grid>
                            </Grid>




                            <Grid container component="form" onSubmit={cargaEquipo} noValidate direction="row"
                                justifyContent="start"
                                alignItems="center" spacing={{ xs: 1, md: 1 }} columns={{ xs: 12 }} >
                                <Grid item xs={5} container justifyContent="start" >
                                    <Autocomplete
                                        disablePortal
                                        fullWidth
                                        id="combo-box-demo"
                                        // options={props.listaEquipos}

                                        // getOptionLabel={(option) => option.descripcion}
                                        // onChange={(event, value) => props.set_IdEquip(event, value)}
                                        renderInput={(params) => {
                                            return (
                                                <TextField {...params}
                                                    margin="normal"
                                                    // value={params._id}
                                                    name="descripcion_equipo"
                                                    label={"descripcion_equipo"}

                                                    InputLabelProps={{ className: "autocompleteLabel", shrink: true }}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                    }}
                                                />
                                            );
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={1} container justifyContent="center" />

                                <Grid item xs={2} container justifyContent="center" >

                                    <TextField
                                        sx={{ marginTop: 1 }}

                                        id="cant_equipo"
                                        variant="outlined"
                                        name="cant_equipo"
                                        label="cant_equipos"
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
                            </Grid>



                        </Grid>


                        <Grid container direction="row"
                            justifyContent="space-around"
                            // alignItems="center"
                            // spacing={2}
                            columns={{ xs: 12 }} >

                            <Grid item xs={4}
                                height={50}
                                bgcolor={"error"}
                                borderRadius={2}
                                // sx={{ mt: 3, mb: 2}}

                            >
                                <Button fullWidth


                                    margin="normal"
                                    variant="contained"
                                    color="error"
                                    // startIcon={<ReplyAllIcon />}
                                    // onClick={() => {
                                    //   navigate('/Docente/Pedidos')
                                    // variant="outlined"

                                    // }}
                                    style={{ borderRadius: 8 }}
                                    styled={{ textTransform: 'none' }}
                                    sx={{   height: 50 }} 
                                   >  CANCELAR</Button>

                            </Grid>

                            <Grid item xs={4}  height={50} 
         bgcolor={"primary.main"} borderRadius={2}

        >
          
            <Button
              fullWidth
             style={{   height: 50 ,borderRadius:8}}
              margin="normal"
              variant="contained"
            //   endIcon={<SendIcon />}
              color="primary"
              borderRadius={4}
             
              >
                 ALTA</Button>

                            </Grid>
                        </Grid>





                    </Grid>

                    {/* </DialogContentText> */}



                </DialogContent>
            </Dialog>



        </ThemeProvider >


    );

}

export default AltaEquipo;