import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";

import { useForm } from "../../ProQuery/hooks";
import { startGetCredentials, startLogin } from "../../store/login/thunks";
import { useEffect, useState } from "react";
import { LoadingOverlay } from "../../ProQuery/components";
import { showNotificationLogin } from "../../ProQuery/helpers";
import { checkingCredentials } from "../../store/login/LoginSlice";
import { AuthMenu } from "../components";

const formData = {
  server: "",
  database: "dba",
  user: "",
  password: "",
  port: "1433",
};

export const LoginPage = () => {
  const { credentials } = useSelector((state) => state.credentials)
  const list = credentials.map((credential) => credential.nameconection)
  const [loading, setLoading] = useState(false);
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { server, database, user, password, port, onInputChange } =
    useForm(formData);

  
  useEffect(() => {
    dispatch(startGetCredentials())
  }, [])
  
  useEffect(() => {
    errorMessage && showNotificationLogin("Conexion", errorMessage, "error");
  }, [errorMessage]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingCredentials());
    setLoading(true);
    setTimeout(() => {
      dispatch(startLogin(server, database, user, password, port));
      setLoading(false);
    }, 2000);
    dispatch(checkingCredentials());
  };

  return (
    <AuthLayout title="Conectar Server">
      <form
        aria-label="submit-form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={5} sx={{ mt: 2 }}>
            <Autocomplete
              fullWidth
              options={list} // Lista de opciones
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Conexion"
                  placeholder="name"
                  name="server"
                  value={server}
                  onChange={onInputChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={5} sx={{ mt: 3 , ml:2}}>
            <AuthMenu />
          </Grid>
          <Grid item xs={8} sx={{ mt: 2 }}>
            <TextField
              label="Server"
              placeholder="0.0.0.0"
              fullWidth
              name="server"
              value={server}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={8} sx={{ mt: 2 }}>
            <TextField
              label="DataBase"
              placeholder="DBA"
              fullWidth
              name="database"
              value={database}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={8} sx={{ mt: 2 }}>
            <TextField
              label="User"
              placeholder="fulano"
              fullWidth
              name="user"
              value={user}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={10} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              fullWidth
              name="password"
              inputProps={{
                "data-testid": "password",
              }}
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={3} sx={{ mt: 2 }}>
            <TextField
              label="Port"
              placeholder="0.0.0.0"
              fullWidth
              name="port"
              value={port}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={1} sx={{ mb: 2, mt: 1, ml: 16 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Conectar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {loading && <LoadingOverlay />}
    </AuthLayout >
  );
};
