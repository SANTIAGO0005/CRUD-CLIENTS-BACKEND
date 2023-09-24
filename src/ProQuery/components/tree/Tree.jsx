import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetBds, startGetTbs } from "../../../store/tree/thunks";
import { clearResults_treeTbs } from "../../../store/tree/TreeSlice";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { StyledTreeItem } from "./StyledTreeItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import FolderIcon from "@mui/icons-material/Folder";
import { TreeItemBd } from "./TreeItemBd";

export const Tree = ({ handleTreeItemClick }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();
  const { server } = useSelector((state) => state.auth);
  const { results_sys_dbs, results_dbs, results_tbs } = useSelector(
    (state) => state.tree
  );
  useEffect(() => {
    if (!dataLoaded) {
      dispatch(startGetBds());
      setDataLoaded(true);
    }
  }, [dataLoaded]);

  const handleGetTbs = (event, db) => {
    event.preventDefault();
    dispatch(clearResults_treeTbs());
    dispatch(startGetTbs(db));
  };

  return (
    <div>
      <TreeView
        aria-label="gmail"
        defaultExpanded={["2"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{
          height: "100%",
          flexGrow: 1,
          maxWidth: 600,
          overflowY: "auto",
        }}
      >
        <StyledTreeItem
          nodeId="servidor"
          labelText="Servidor"
          labelInfo={`${server}`}
          labelIcon={StorageIcon}
          onClick={() => handleTreeItemClick("Servidor")}
        />

        <StyledTreeItem
          nodeId="seguridad"
          labelText="Seguridad"
          labelIcon={SecurityIcon}
        />
        <StyledTreeItem
          nodeId="database"
          labelText="Bases de datos"
          labelIcon={FolderIcon}
        >
          <TreeItemBd
            results_sys_dbs={results_sys_dbs}
            results_dbs={results_dbs}
            results_tbs={results_tbs}
            handleGetTbs={handleGetTbs}
          />
        </StyledTreeItem>
      </TreeView>
    </div>
  );
};
