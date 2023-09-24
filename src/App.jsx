import { Provider } from "react-redux"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store"
import { HashRouter} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "sweetalert2/dist/sweetalert2.css";
const theme = createTheme();

export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <AppRouter/>
        </ThemeProvider>
      </HashRouter>
    </Provider>
  )
}


