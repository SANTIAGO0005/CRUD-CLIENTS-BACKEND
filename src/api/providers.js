

import axios from 'axios'; // Asegúrate de importar Axios de esta manera

const endpoint = "http://127.0.0.1:8000/"; // Reemplaza 'django-endpoint' con la URL correcta de tu endpoint de Django

export const loginDB = async (server, database, user, password, port ) => {
  try {

      await axios.post(endpoint, {
        server: server,
        database: database,
        user: user,
        password: password,
        port: port
      });
    return {
      ok: true,
      server,
      database,
      user,
      password,
      port
    };
  } catch (error) {
      return { ok: false, errorMessage: error.response.data.error_message };
  }
};

export const getCredentials = async () => {
  try {
    const response = await axios.get(`${endpoint}api/users/`);
    const results = response.data
    return {
      ok: true,
      results
    };
  } catch (error) {
      return { ok: false, errorMessage: error.response.data.error_message };
  }
};

export const NewCredentials = async (NewCredential) => {
  try {
    console.log(NewCredential);
    const response = await axios.post(`${endpoint}api/users/`, NewCredential);
    const { id , nameconection, server, database, user, port } = response.data
    return {
      ok: true,
      id,
      nameconection,
      server,
      database,
      user,
      port 
    }
  } catch (error) {
      return { ok: false, errorMessage: error.response.data };
  }
};

export const UpdateCredentials = async (credential, id) => {
  try {
    
    await axios.put(`${endpoint}api/users/${id}/`, credential);
    
    return {
      ok: true,
      id
    }
  } catch (error) {
      return { ok: false, errorMessage: error.response.data };
  }
};

export const DeleteCredentials = async (id) => {
  try {
    
    await axios.delete(`${endpoint}api/users/${id}/`);
    
    return {
      ok: true,
    }
  } catch (error) {
      return { ok: false, errorMessage: error.response.data };
  }
};




export const database_query = async ( server, database, user, password, port ) => {
  try {
    const response = await axios.post(`${endpoint}api/query_all/`, {
      server: server,
      database: database,
      user: user,
      password: password,
      port: port
    });
    
    const result1 = response.data.results
    const result2 = response.data.resultsThresholds

    return {
      ok: true,
      result1,
      result2
    };
  } catch (error) {
    return { ok: false, errorMessage: error.response.data.error_message };
  }
};

export const Genrate_baseline = async ( server, database, user, password, port ) => {
  try {
    const response = await axios.post(`${endpoint}api/query_baseline/`, {
      server: server,
      database: database,
      user: user,
      password: password,
      port: port
    });

    const { results }= response.data

    return {
      ok: true,
      results
    };
  } catch (error) {
    return { ok: false, errorMessage: error.response.data.error_message };
  }
};

export const Compare_baseline = async ( server, database, user, password, port ) => {
  try {
    const response = await axios.post(`${endpoint}api/query_compare/`, {
      server: server,
      database: database,
      user: user,
      password: password,
      port: port
    });

    const { results }= response.data

    return {
      ok: true,
      results
    };
  } catch (error) {
    return { ok: false, errorMessage: error.response.data.error_message };
  }
};

 