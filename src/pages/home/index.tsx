import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import TableGeneric, { Column } from '@components/tableGeneric';

interface Props {
    children?: React.ReactNode;
}

export interface IVehicles {
    veiculoId: string;
    veiculoChave: string;
    veiculoTitulo: string;
    veiculoDesc: string;
    veiculoAtivo: string;
    veiculoDestaque: string;
    blank?: string;
}

export const theadVehicles: Column<IVehicles>[] = [
    { title: "Id", field: "veiculoId", align: "center" },
    { title: "Chave", field: "veiculoChave", align: "center" },
    { title: "Titulo", field: "veiculoTitulo", align: "center" },
    { title: "Descricao", field: "veiculoDesc", align: "center" },
    { title: "Ativo", field: "veiculoAtivo", align: "center" },
    { title: "Destaque", field: "veiculoDestaque", align: "center" },
    { title: "", field: "blank", align: "center" },
  ];

const Home: React.FC<Props> = ({ children, ...props }) => {
  const [data, setData] = React.useState([]);
  const [editing, setEditing] = React.useState(false);
    const [formData, setFormData] = React.useState({
    veiculoId: '',
    veiculoChave: '',
    veiculoTitulo: '',
    veiculoDesc: '',
    veiculoAtivo: false,
    veiculoDestaque: false,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/veiculos.json');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleEditClick = (veiculo) => {
    setFormData(veiculo);
    setEditing(true);
  };



  return (
    <Grid container justifyContent={"center"}>
        <Grid item xs={11}>
            <Grid container gap={4}>
                <Grid item>
                    <Typography variant='h3' style={{fontWeight: 700}}>
                        Veículos
                    </Typography>
                </Grid>
                <Grid item>
                    <TableGeneric
                        columns={theadVehicles}
                        data={data}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
