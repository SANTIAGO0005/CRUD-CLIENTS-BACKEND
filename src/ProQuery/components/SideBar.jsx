import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";

import { Box, CssBaseline, Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { startGetBds } from "../../store/tree/thunks";
import { Tree } from "./tree/Tree";

const drawerWidth = 310;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const SideBar = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  handleTreeItemClick,
}) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();

  const theme = useTheme();
  const drawerWidth = 310;

  useEffect(() => {
    if (!dataLoaded) {
      dispatch(startGetBds());
      setDataLoaded(true);
    }
  }, [dataLoaded]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Pro Query
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Tree handleTreeItemClick={handleTreeItemClick} />
        </Drawer>
      </Box>
    </>
  );
};
