
import React, { createContext, useCallback, useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/home';
import TestPage1 from './pages/test1';
import TestPage2 from './pages/test2';
import SelectPage1 from './pages/select1';
import ResultPage from './pages/result';

export const AppContext = createContext();

function App() {

    
    const [point, setPoint] = useState(0);

    const managePoint = useCallback((value) => {
        console.log('Clicked!');
        console.log('Before Point => ' + point);
        setPoint(point + value);
        console.log('After Point => ' + point);
    }, [point, setPoint]);
    

    

    return(
        <AppContext.Provider value={{point, managePoint}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test1" element={<TestPage1 />} />
                <Route path="/test2" element={<TestPage2 />} />
                <Route path="/select-page2" element={<SelectPage1 />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;