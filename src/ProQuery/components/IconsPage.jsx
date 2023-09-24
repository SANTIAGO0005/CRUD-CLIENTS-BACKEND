import { Grid, Paper, Typography } from "@mui/material";
import { useIcons } from "../hooks";
import { useStyles } from "../styles";
import { useState } from "react";

export const IconsPage = ({ showTable }) => {
  const classes = useStyles();
  const { icons } = useIcons();
  const [selected, setSelected] = useState(null);

  const handleIconClick = (index) => {
    if (selected === index) {
      // Deselecciona si ya está seleccionado
      setSelected(null);
    } else {
      setSelected(index);
      showTable(index + 1);
    }
  };

  return (
    <>
      <div className={classes.iconsContainer}>
        <Grid container spacing={1}>
          {icons.map((item, index) => (
            <Grid
              item
              xs={1.8}
              key={index}
              
            >
              <Paper
                align="center"
                className={`${classes.iconPaper} ${
                  selected === index ? classes.selectedIcon : ""
                }`}
                onClick={() => handleIconClick(index)}
              >
                {item.icon}
                <Typography align="center">{item.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
