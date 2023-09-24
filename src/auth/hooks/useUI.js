import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  startNewCredentials,
  startSaveCredentials,
} from "../../store/login/thunks";

export const useUI = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
    handleClose();
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  
  const onSaveCredential = () => {
    dispatch(startSaveCredentials());
    handleCloseModal();
  };
  const onClickNewCredential = () => {
    handleOpenModal();
    dispatch(startNewCredentials());
  };
  return {
    openModal,
    open,
    anchorEl,
    handleOpenModal,
    handleCloseModal,
    handleClick,
    handleClose,
    onSaveCredential,
    onClickNewCredential,
  };
};
