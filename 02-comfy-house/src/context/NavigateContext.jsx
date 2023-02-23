import React, { useReducer } from 'react';
import reducer from '../reducers/NavigateReducer';

const NavigateContext = React.createContext();

const initialState = {
    isSidebarOpen: false,
};

const NavigateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: 'SIDEBAR_OPEN' });
    };

    const closeSidebar = () => {
        dispatch({ type: 'SIDEBAR_CLOSE' });
    };

    return <NavigateContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</NavigateContext.Provider>;
};

export { NavigateContext, NavigateProvider };
