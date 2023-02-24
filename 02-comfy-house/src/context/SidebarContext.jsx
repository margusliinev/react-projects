import React, { createContext, useReducer } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions';
import reducer from '../reducers/SidebarReducer';

const initialState = {
    isSidebarOpen: false,
};

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    };

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    };

    return <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</SidebarContext.Provider>;
};

export { SidebarContext, SidebarProvider };
