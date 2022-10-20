import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: "8px",
            height: "240px"
        },
    },
}));

function PedidoDetalle({ open = { open },
    setOpen = { setOpen },
    scroll = { scroll },
    handleClose = { handleClose },
    pedido = { pedido }
}) {
    const { root } = useStyles();

    const {
        numero_tp,
        fecha_solicitud,
        numero_laboratorio,
        docente,
        cantidad_grupos,
        lista_equipos,
    } = pedido;

    //Esto se define para que no falle, pero cuando este el modelo tiene que llegar por props dentro del pedido
    const rowsReactivos = [];

    const rowsMateriales = [];

    const descriptionElementRef = React.useRef(null);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="scroll-dialog-title">Pedido n°: {numero_laboratorio}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                        <div>
                            <fieldset>
                                <label htmlFor="fecha_trabajo" id="label_fecha_trabajo">Fecha solicitud : </label> <input type="text" id="fecha_trabajo" name="fecha_trabajo" value={fecha_solicitud} disabled />
                                <label htmlFor="edificio" id="label_edificio">Edificio : </label> <input type="text" id="edificio" name="edificio" value={fecha_solicitud} disabled />
                                <label htmlFor="laboratorio" id="label_laboratorio">Laboratorio : </label> <input type="text" id="laboratorio" name="laboratorio" value={numero_laboratorio} disabled />

                                <br></br>
                                <label id="label_docente"> docente : </label> <input type="text" id="docente" name="docente" value={`${docente.nombre}  ${docente.apellido}`} disabled />
                                <label id="label_alumno"> alumnos : </label> <input type="text" id="alumno" name="alumno" value="40" disabled />
                                <label id="label_grupo"> grupos : </label> <input type="text" id="grupo" name="grupo" value={cantidad_grupos} disabled />
                            </fieldset>
                        </div>
                        <hr></hr>
                        <h4>Equipos</h4>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Descripcion</TableCell>
                                        <TableCell align="right">Tipo</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lista_equipos.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >{row.equipo.descripcion}</TableCell>
                                            <TableCell align="right">{row.equipo.clase}</TableCell>
                                            <TableCell align="right">{row.cantidad}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                        <h4>Materiales</h4>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Descripcion</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsMateriales.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.descripcion}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                        <h4>Reactivos</h4>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Descripcion</TableCell>
                                        <TableCell align="right">Cas</TableCell>
                                        <TableCell align="right">Calidad</TableCell>
                                        <TableCell align="right">Concentracion</TableCell>
                                        <TableCell align="right">Disolvente</TableCell>
                                        <TableCell align="right">Cantidad total</TableCell>
                                        <TableCell align="right">Unidad de medida</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsReactivos.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.descipcion}
                                            </TableCell>
                                            <TableCell align="right">{row.cas}</TableCell>
                                            <TableCell align="right">{row.calidad}</TableCell>
                                            <TableCell align="right">{row.concentracion}</TableCell>
                                            <TableCell align="right">{row.disolvente}</TableCell>
                                            <TableCell align="right">{row.cantidadTotal}</TableCell>
                                            <TableCell align="right">{row.unidadDeMedida}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>

            </Dialog>

        </div>
    );

}

export default PedidoDetalle;