import axios from "axios";


const endpoint = "http://127.0.0.1:8000/";

export const getDbsTree = async ( server, database, user, password, port ) => {
    try {
      const response = await axios.post(`${endpoint}api/tree/dbs/`, {
        server: server,
        database: database,
        user: user,
        password: password,
        port: port
      });
      
      const result1 = response.data.results.results_sys_dbs
      const result2 = response.data.results.results_dbs
  
      return {
        ok: true,
        result1,
        result2
      };
    } catch (error) {
      return { ok: false, errorMessage: error.response.data.error_message };
    }
  };

  export const getTbsTree = async ( server, database, user, password, port ) => {
    try {
      const response = await axios.post(`${endpoint}api/tree/tbs/`, {
        server: server,
        database: database,
        user: user,
        password: password,
        port: port
      });
      
      const result = response.data.results_tbs
    
      return {
        ok: true,
        result
      };
    } catch (error) {
      return { ok: false, errorMessage: error.response.data.error_message };
    }
  };