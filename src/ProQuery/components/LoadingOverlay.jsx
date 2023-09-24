import { CircularProgress } from "@mui/material"
import { useStyles } from "../styles"


export const LoadingOverlay = () => {
    const classes = useStyles()
    return (
        <div className={classes.overlay}>
        <CircularProgress color="primary" />
      </div>
    )
}