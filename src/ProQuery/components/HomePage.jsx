import { useState } from "react";
import { SideBar } from "./SideBar";
import { MainPage } from "./MainPage";

export const HomePage = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTreeItemClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <>
      <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        handleTreeItemClick={handleTreeItemClick}
      />
      <MainPage open={open} selectedItem={selectedItem}/>
    </>
  );
};
