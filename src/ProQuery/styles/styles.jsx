import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  iconsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px',
    marginLeft: '300px',
    marginRight: '100px',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#e3e9ea',
  },
  iconPaper: {
    margin: '0px',
    marginLeft: '40px',
    marginRight: '-40px',
    padding: '0px',
    textAlign: 'center',
    transition: 'background-color 0.3s', // Transición suave del color de fondo

    // Aplica un fondo blanco cuando el mouse está encima (hover)
    '&:hover': {
      backgroundColor: '#20A4F3',
    },

    // Aplica un fondo blanco cuando está activo (seleccionado)
    '&:active': {
      backgroundColor: '#20A4F3',
    },
    }, 
    selectedIcon: {
      backgroundColor: "#20A4F3",
    },
}));

export const iconStyles = {
    fontSize: '35px',
    marginBottom: '0px',
};
  
export const buttonStyles = {
      marginRight: '15px'
};
export const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "100px",
    marginRight: "-100px",
    marginTop: "-90px"
  };
  
export const tableStyles = {
    fontSize: "14px",
    marginTop: "0px", // Ajusta el espaciado superior según tus preferencias
  };
  
export const cellStyles = {
    padding: "8px 12px", // Ajusta el espaciado según tus preferencias
  };
