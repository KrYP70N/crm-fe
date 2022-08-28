import React from "react";

export const theme : string = 'light';

const ThemeContext : React.Context<string> = React.createContext(theme);

export default ThemeContext;