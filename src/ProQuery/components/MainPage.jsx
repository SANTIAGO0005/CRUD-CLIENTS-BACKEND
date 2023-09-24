import styled from "@emotion/styled";
import { IconsPage } from "./IconsPage";
import { TablesPages } from "./TablesPages";
import { useState } from "react";
import { ButtonPage } from "./ButtonPage";




const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  

export const MainPage = ({open, selectedItem}) => {

    const [activeTable, setActiveTable] = useState(null); // Estado para rastrear la tabla activa

    const showTable = (tableNumber) => {
        setActiveTable(tableNumber); // Actualizar el estado para mostrar la tabla seleccionada
    };

    return( 
        <>
            {(
              selectedItem === "Servidor" && 
              <Main open={open}>
                  <DrawerHeader />
                  <IconsPage showTable={showTable} />
                  <TablesPages activeTable={activeTable} />
                  <ButtonPage />
              </Main>
            )}
        </>)
}