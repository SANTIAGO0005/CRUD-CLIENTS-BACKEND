import { StyledTreeItem } from "./StyledTreeItem";
import FolderIcon from "@mui/icons-material/Folder";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import DnsIcon from "@mui/icons-material/Dns";

export const TreeItemBd = ({
  results_sys_dbs,
  results_dbs,
  results_tbs,
  handleGetTbs,
}) => {
  const generateNodeId = (prefix) => {
    return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
  };

  return (
    <>
      <StyledTreeItem
        nodeId="system_database"
        labelText="System databases"
        labelIcon={FolderIcon}
      >
        {results_sys_dbs.map((rsb) => (
          <StyledTreeItem
            nodeId={rsb.db} // Generar nodeId único
            key={rsb.db}
            labelText={rsb.db}
            labelIcon={DnsIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
            colorForDarkMode="#B8E7FB"
            bgColorForDarkMode="#071318"
          />
        ))}
      </StyledTreeItem>
      {results_dbs.map((rsb) => {
        const tableNodeId = generateNodeId("table");
        const viewsNodeId = generateNodeId("views");
        const programmabilityNodeId = generateNodeId("programmability");
        const securityNodeId = generateNodeId("security");

        return (
          <StyledTreeItem
            onClick={(event) => handleGetTbs(event, rsb.db)}
            nodeId={rsb.db} // Generar nodeId único
            key={rsb.db}
            labelText={rsb.db}
            labelIcon={DnsIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
            colorForDarkMode="#B8E7FB"
            bgColorForDarkMode="#071318"
          >
            <StyledTreeItem
              nodeId={tableNodeId}
              labelText="Tables"
              labelIcon={FolderIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            >
              {results_tbs.map((rst) => (
                <StyledTreeItem
                  nodeId={generateNodeId(rst.table_name)} // Generar nodeId único
                  key={rst.table_name}
                  labelText={rst.table_name}
                  labelIcon={TableRowsOutlinedIcon}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                  colorForDarkMode="#B8E7FB"
                  bgColorForDarkMode="#071318"
                />
              ))}
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={viewsNodeId}
              labelText="Views"
              labelIcon={FolderIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            ></StyledTreeItem>
            <StyledTreeItem
              nodeId={programmabilityNodeId}
              labelText="Programmability"
              labelIcon={FolderIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            >
              <StyledTreeItem
                nodeId={generateNodeId("stored_procedures")} // Generar nodeId único
                labelText="Stored Procedures"
                labelIcon={FolderIcon}
                color="#1a73e8"
                bgColor="#e8f0fe"
                colorForDarkMode="#B8E7FB"
                bgColorForDarkMode="#071318"
              ></StyledTreeItem>
              <StyledTreeItem
                nodeId={generateNodeId("functions")} // Generar nodeId único
                labelText="Funtions"
                labelIcon={FolderIcon}
                color="#1a73e8"
                bgColor="#e8f0fe"
                colorForDarkMode="#B8E7FB"
                bgColorForDarkMode="#071318"
              >
                <StyledTreeItem
                  nodeId={generateNodeId("table_valued_functions")} // Generar nodeId único
                  labelText="Table-valued Functions"
                  labelIcon={FolderIcon}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                  colorForDarkMode="#B8E7FB"
                  bgColorForDarkMode="#071318"
                ></StyledTreeItem>
                <StyledTreeItem
                  nodeId={generateNodeId("scalar_valued_functions")} // Generar nodeId único
                  labelText="Scalar-valued Functions"
                  labelIcon={FolderIcon}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                  colorForDarkMode="#B8E7FB"
                  bgColorForDarkMode="#071318"
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={securityNodeId}
              labelText="Security"
              labelIcon={FolderIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            ></StyledTreeItem>
          </StyledTreeItem>
        );
      })}
    </>
  );
};
