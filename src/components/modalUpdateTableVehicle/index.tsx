import React from 'react';
import {
   Modal,
   Backdrop,
   Fade,
   Grid,
   Button,
   Typography,
   Box,
   useMediaQuery,
   useTheme,
   Theme,
 } from "@mui/material";

import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { makeStyles } from '@mui/styles';
import { IVehicles, theadVehicles } from '@pages/home';

interface Props {
   children?: React.ReactNode;
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   key: number;
   indexClicked: number;
   disabled: boolean;
   label: string;
   veiculo?: IVehicles;
   onSave?: (veiculo: IVehicles) => void;
 }


const ModalUpdateVehicle: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles();
   const theme = useTheme();
   const isFullHD = useMediaQuery(theme.breakpoints.only("xl"));
 
   const [openModal, setOpenModal] = React.useState(false);
   // const [editedVeiculo, setEditedVeiculo] = React.useState<IVehicles>(props!.veiculo);

 
   const handleCloseModal = () => {
     setOpenModal(false);
   };
 
   const handleOpeModal = () => {
     setOpenModal(true);
   };
 
   const handleOnClickTurnOffEmployee = (event) => {
     event.key = props.indexClicked;
     return props.onClick && props.onClick(event);
   };
   
   // console.log(theadVehicles[1])

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      // setEditedVeiculo(prevVeiculo => ({ ...prevVeiculo, [name]: value }));
    }
  
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      // setEditedVeiculo(prevVeiculo => ({ ...prevVeiculo, [name]: checked }));
    }
  
    const handleSaveClick = () => {
      // props.onSave && props.onSave(editedVeiculo);
    }

   return (
     <>
       <Button
         key={props.key}
         className={classes.button}
         onClick={handleOpeModal}
         style={{ fontSize: isFullHD ? "1.6rem" : "1.2rem" }}
         disabled={props.disabled}
       >
         <Typography
           variant={"body2"}
           style={{
             fontWeight: 700,
             color: props.disabled
               ? theme.palette.primary.light
               : theme.palette.primary.main,
             opacity: props.disabled ? "0.5" : "1",
           }}
         >
           {props.label}
         </Typography>
       </Button>
       <Modal
         className={classes.modal}
         open={openModal}
         onClose={handleCloseModal}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
           timeout: 500,
         }}
       >
         <Fade in={openModal}>
           <Grid
             container
             spacing={4}
             className={classes.container}
             style={{ textAlign: "center" }}
           >
             <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
               <Grid container spacing={4}>
                 <Grid
                   item
                   xs={12}
                   style={{
                     display: "flex",
                     justifyContent: "flex-end",
                     border: "0px solid blue",
                     paddingBottom: 28,
                   }}
                 >
                   <Button
                     onClick={handleCloseModal}
                     style={{
                       justifyContent: "end",
                       width: "fit-content",
                       border: "0px solid red",
                     }}
                   >
                     <CloseOutlinedIcon className={classes.closeIcon} />
                   </Button>
                 </Grid>
 
                 <Grid
                   item
                   xs={12}
                   style={{ border: "0px solid blue", paddingTop: 0 }}
                 >
                   <DriveEtaOutlinedIcon
                     style={{ fontSize: "10rem", border: "0px solid red" }}
                   ></DriveEtaOutlinedIcon>
                 </Grid>
 
                 <Grid item xs={12} style={{ padding: "8px 32px 8px 32px" }}>
                  <h2>Editar Veículo</h2>
                  <label>ID:</label>
                  {/* <input type="text" name="veiculoId" value={editedVeiculo.veiculoId} disabled /> */}

                  <label>Chave:</label>
                  {/* <input type="text" name="veiculoChave" value={editedVeiculo.veiculoChave} onChange={handleInputChange} /> */}

                  <label>Título:</label>
                  {/* <input type="text" name="veiculoTitulo" value={editedVeiculo.veiculoTitulo} onChange={handleInputChange} /> */}

                  <label>Descrição:</label>
                  {/* <textarea name="veiculoDesc" value={editedVeiculo.veiculoDesc} onChange={handleInputChange}></textarea> */}

                  <label>Ativo:</label>
                  {/* <input type="text" name="veiculoAtivo" value={editedVeiculo.veiculoAtivo} onChange={handleCheckboxChange} /> */}

                  <label>Destaque:</label>
                  {/* <input type="text" name="veiculoDestaque" value={editedVeiculo.veiculoDestaque} onChange={handleCheckboxChange} /> */}

                  <div className="modal-buttons">
                     <button onClick={handleSaveClick}>Salvar</button>
                     <button onClick={handleCloseModal}>Cancelar</button>
                  </div>

                 </Grid>
 
                 <Grid item xs={12} style={{ paddingBottom: 42 }}>
                   <Grid container justifyContent="center" spacing={2}>
                     <Grid item>
                       <Button
                         onClick={handleCloseModal}
                         style={{
                           backgroundColor: theme.palette.primary.main,
                           padding: "8px 32px 8px 32px",
                         }}
                       >
                         <Typography
                           variant="subtitle2"
                           style={{
                             fontWeight: 700,
                           //   color: theme.palette.text.hint,
                             textTransform: "capitalize",
                           }}
                         >
                           Não
                         </Typography>
                       </Button>
                     </Grid>
 
                     <Grid item>
                       <Button
                         onClick={handleOnClickTurnOffEmployee}
                         style={{
                           backgroundColor: theme.palette.background.paper,
                           padding: "8px 32px 8px 32px",
                         }}
                       >
                         <Typography
                           variant="subtitle2"
                           style={{
                             fontWeight: 700,
                             color: theme.palette.primary.main,
                             textTransform: "capitalize",
                           }}
                         >
                           Inativar
                         </Typography>
                       </Button>
                     </Grid>
                   </Grid>
                 </Grid>

               </Grid>
             </Grid>
           </Grid>
         </Fade>
       </Modal>
     </>
   );
 };

export default ModalUpdateVehicle;

const useStyles = makeStyles((theme: Theme) => ({
   modal: {
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
   },
   container: {
     color: theme.palette.text.primary,
     background: "#fff",
     border: "2px solid #fff",
     borderRadius: 16,
     justifyContent: "center",
     alignContent: "baseline",
   },
   button: {
      //  backgroundColor: theme.palette.primary.main,
   //   color: theme.palette.primaryLight.main,
     fontWeight: 700,
     textTransform: "initial",
     paddingRight: "1rem",
     margin: 0,
     lineHeight: 0,
     padding: "0.6rem 3rem 0.6rem 3rem",
   },
   closeIcon: {
      fontSize: "1.5rem !important",
   },
 }));
 