import React from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Main from "./main/Main";





const App = () => {

    return (
        <div className="app">
            <BrowserRouter>
               <Route path='/' component=''>
                   <Main/>
               </Route>
            </BrowserRouter>
        </div>
    );
};

export default App;