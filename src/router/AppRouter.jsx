import {  Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../ProQuery/components";
import { LoginPage } from "../auth"
import {  useSelector } from "react-redux"



export const AppRouter = () => {
  
    const {status} = useSelector( state=> state.auth)
    
    return (<>
      <Routes>
      {/* <Route path="/" element={ <HomePage/> } /> */}
        {
         ( status === 'not-authenticated' || status === 'checking' )
          ? (
              <>
                <Route path="/auth/*" element={ <LoginPage/>}/>
                <Route  path="/*" element={ <Navigate to="/auth/login"/>}/>
              </>
            )
          : (
              <>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/*" element={ <Navigate to='/'/> } />
              </>
            )
        }
      </Routes>
    </>)
}