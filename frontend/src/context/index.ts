import {createContext} from "react";

interface IIsAuthContext {
    isAuth: boolean;
}

const defaultState = {
    isAuth: false,
};

export const AuthContext: any = createContext<IIsAuthContext>(defaultState);
