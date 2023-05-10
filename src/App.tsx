import "./App.css";
import {Suspense, useContext} from "react";
import { Outlet } from "react-router-dom";

import ResponseBody from "./layouts/ResponseBody.tsx";
import AppContext from "./utils/AppContext.tsx";


function App() {
    const {user} = useContext(AppContext)
  return (
    <>
        {!user ? location.replace("/login") :
      <ResponseBody>
        <Suspense>
          <Outlet />
        </Suspense>
      </ResponseBody>
        }
    </>
  );
}

export default App;
