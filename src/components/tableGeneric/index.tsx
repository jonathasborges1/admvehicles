import ModalUpdateVehicle from '@components/modalUpdateTableVehicle';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, Typography, createStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';

export interface Column<T> {
   title: string;
   field: keyof T;
   align: "center" | "left" | "right";
   width?: string;
 }

interface Props<T> {
   columns: Column<T>[];
   data: T[];
   labelButton?: string;
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
 }

 const TableGeneric = <T extends {}>({ ...props }: Props<T>) => {
   const classes = useStyles();
   return (
      <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {props.columns.map((column, indexTHead) => (
              <TableCell
                key={column.title}
                className={classes.tableCellHead}
                align={props.columns[indexTHead].align}
                width={props.columns[indexTHead].width}
              >
                <Grid container style={{ border: "0px solid black" }}>
                  <Grid item xs={12} style={{ border: "0px solid blue" }}>
                    <Typography variant={"body1"} style={{ fontWeight: 600 }}>
                      {column.title}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
            {props.data.map((row, indexRow) => (
                <TableRow key={indexRow}>
                  {props.columns.map((column, indexTBody) => (
                    <TableCell
                      key={column.title}
                      className={classes.tableCellBody}
                      align={props.columns[indexTBody].align}
                    >
                     {
                        `${row[column.field]}` !== "undefined" ? 
                        (
                        <Typography variant="body1">
                           {`${row[column.field]}`}
                        </Typography>) 
                        : 
                        (<ModalUpdateVehicle key={indexTBody} indexClicked={indexRow} disabled={false} label={'Editar'}></ModalUpdateVehicle>)
                     }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
      </Table>


    </TableContainer>
   )
}

export default TableGeneric;


const useStyles = makeStyles((theme: Theme) => ({
   container: {
      width: "100%",
      overflowX: "hidden", // esconde scroll horizontal
      boxShadow: "none",
      backgroundColor: theme.palette.background.default,
    },
    table: {
      borderSpacing: "0px 1rem", // Aplica espacamento entre as linhas
      borderCollapse: "separate", // Aplica espacamento entre as linhas
    },
    tableHead: {},
    tableRow: {
      backgroundColor: "#FFFFFF", // Aplica background Branco em cada Celula
    },
    tableCellHead: {
      padding: "1rem 1.5rem 1rem 1.5rem",
    },
    tableCellBody: {
      padding: "1.8rem 1.4rem 1.8rem 1.4rem", // !important
      lineHeight: 0,
    },
    buttonTable: {
      color: theme.palette.primary.main,
      textTransform: "initial",
      fontWeight: 700,
      paddingRight: "1rem",
      padding: 0,
      margin: 0,
      lineHeight: 0,
    },
    typography: {
      lineHeight: "1.4rem",
    },
}));