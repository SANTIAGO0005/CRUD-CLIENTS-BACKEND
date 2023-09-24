import { useSelector } from "react-redux";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { iconStyles } from "../styles";

export const useIcons = () => {
    
    const {
        has_low_free_porc,
        has_low_config_value,
        has_low_SrvRole,
        has_low_Days,
        has_low_Results
      } = useSelector((state) => state.thresholds);
    
      const getIcon = (condition) => {
        return condition ? (
          <WarningRoundedIcon style={iconStyles} />
        ) : (
          <CheckBoxOutlinedIcon style={iconStyles} />
        );
      };
    
      const icons = [
        { icon: getIcon(has_low_free_porc), title: "Discos" },
        { icon: getIcon(has_low_config_value), title: "Cmd Shell" },
        { icon: getIcon(has_low_SrvRole), title: "Builtin Admin" },
        { icon: getIcon(has_low_Days), title: "Backups" },
        { icon: getIcon(has_low_Results), title: "Jobs" },
        { icon: getIcon(false), title: "Logins" }, // Ejemplo de valor estático
        { icon: getIcon(false), title: "Linken server" }, // Ejemplo de valor estático
        { icon: getIcon(false), title: "DBbs" }, // Ejemplo de valor estático
        { icon: getIcon(false), title: "Actualizacion." },
      ];
    
    return {
        icons
    }
}