import MUIDataTable from "mui-datatables";
import { columns1, columns2, columns3, columns4, columns5 } from "../helpers";
import { useSelector } from "react-redux";
import { containerStyles, tableStyles} from '../styles/styles.jsx'

export const TablesPages = ({ activeTable }) => {
  const {
    results_disks,
    results_cmdshell,
    results_builtinadmin,
    results_StatusBackups,
    results_ListJobs
  } = useSelector((state) => state.query);

  return (
    <div style={containerStyles}>
    {activeTable === 1 && results_disks && (
      <MUIDataTable
        title={"Discos"}
        data={results_disks}
        columns={columns1}
        style={tableStyles}
      />
    )}
    {activeTable === 2 && results_cmdshell && (
      <MUIDataTable
        title={"Cmd Shell"}
        data={results_cmdshell}
        columns={columns2}
        style={tableStyles}
      />
    )}
    {activeTable === 3 && results_builtinadmin && (
      <MUIDataTable
        title={"Builtin Admin"}
        data={results_builtinadmin}
        columns={columns3}
        style={tableStyles}
      />
    )}
    {activeTable === 4 && results_StatusBackups && (
      <MUIDataTable
        title={"Backups"}
        data={results_StatusBackups}
        columns={columns4}
        style={tableStyles}
      />
    )}
    {activeTable === 5 && results_ListJobs && (
      <MUIDataTable
        title={"Jobs"}
        data={results_ListJobs}
        columns={columns5}
        style={tableStyles}
      />
    )}
  </div>
  );
};
