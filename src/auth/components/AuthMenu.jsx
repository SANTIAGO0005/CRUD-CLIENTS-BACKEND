import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

import { useUI } from "../hooks/useUI";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCredential } from "../../store/login/CredentialsSlice";
import { useForm } from "../../ProQuery/hooks/useForm";

export const AuthMenu = () => {
  const { active: credential } = useSelector((state) => state.credentials);
  const dispatch = useDispatch();
  const {
    nameconection,
    server,
    database,
    user,
    port,
    onInputChange,
    formState,
  } = useForm(credential);
  const {
    open,
    openModal,
    anchorEl,
    handleCloseModal,
    handleOpenModal,
    handleClick,
    handleClose,
    onSaveCredential,
    onClickNewCredential,
  } = useUI();

  // useEffect(() => {
  //   dispatch(setActiveCredential(formState));
  // }, [formState]);

  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={onClickNewCredential} disableRipple>
            <EditIcon sx={{ mr: 1 }} />
            New Conection
          </MenuItem>
          <MenuItem onClick={handleOpenModal} disableRipple>
            <EditIcon sx={{ mr: 1 }} />
            Edit Conection
          </MenuItem>
          <MenuItem onClick={handleOpenModal} disableRipple>
            <EditIcon sx={{ mr: 1 }} />
            Delete Conection
          </MenuItem>
        </Menu>

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>New Connection</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ mb: 2, mt: 1 }}
              fullWidth
              label="Name conexión"
              value={nameconection}
              onChange={onInputChange}
            />
            <TextField
              sx={{ mb: 2, mt: 1 }}
              fullWidth
              label="Server"
              value={server}
              onChange={onInputChange}
            />
            <TextField
              sx={{ mb: 2, mt: 1 }}
              fullWidth
              label="Database"
              value={database}
              onChange={onInputChange}
            />
            <TextField
              sx={{ mb: 2, mt: 1 }}
              fullWidth
              label="User"
              value={user}
              onChange={onInputChange}
            />
            <TextField
              sx={{ mb: 2, mt: 1 }}
              fullWidth
              label="Port"
              value={port}
              onChange={onInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancelar</Button>
            <Button onClick={onSaveCredential}>Guardar</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
