import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import StartIcon from '@mui/icons-material/Start';
import { startQuery, startQueryCB, startQueryGB } from '../../store/tables/thunks';
import { LoadingOverlay } from "./LoadingOverlay";
import { showNotification, showNotificationBL } from "../helpers/swalFuntion";
import { clearMessages } from "../../store/tables/BaselineSlice";

export const ButtonPage = () => {

    const {message_GB, message_CB} = useSelector((state) => state.messageBL)
    const { errorMessage } = useSelector(state => state.query);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    useEffect(() => {
        (message_CB && showNotificationBL("Generar Baseline", message_CB))
    },[message_CB])

    useEffect(() => {
      (message_GB && showNotificationBL("Generar Baseline", message_GB))
    },[message_GB])

    useEffect(() => {
      (errorMessage && showNotification("Ejecutar Consulta", errorMessage,'error'))
    },[errorMessage])
    
    
    const onGenerateBaseline = (event) => {
        event.preventDefault();
        dispatch(clearMessages())
        setLoading(true)
        setTimeout(() => {
          dispatch(startQueryGB())
          setLoading(false);
        }, 2000);
        
    };

    const onExecuteConsultas = (event) => {
        event.preventDefault();
        dispatch(clearMessages())
        setLoading(true)
        setTimeout(() => {
          dispatch(startQuery())
          setLoading(false);
          (!!errorMessage) && showNotification("Ejecutar Consulta", "Operación exitosa", "success");
        }, 2000);
        

    };

    const onCompareBaseline = (event) => {
        event.preventDefault();
        dispatch(clearMessages())
        setLoading(true)
        setTimeout(() => {
          dispatch(startQueryCB())
          setLoading(false);
        }, 2000);
        
    };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          dispatch(startQuery())
          setLoading(false);
          (!!errorMessage) && showNotification("Ejecutar Consulta", "Operación exitosa", "success");
        }, 2000);
    },[])
    

    const actions = [
      { icon: <StartIcon onClick={onExecuteConsultas}/>, name: 'Ejecutar_Consulta' },
      { icon: <StartIcon onClick={onGenerateBaseline}/>, name: 'Generar_Baseline' },
      { icon: <StartIcon onClick={onCompareBaseline} />, name: 'Comparar_Baseline' },
    ];

  return (<>
            <Backdrop open={open} />
            <SpeedDial
              ariaLabel="SpeedDial tooltip example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
            {loading && <LoadingOverlay />}
  </>
);
}
