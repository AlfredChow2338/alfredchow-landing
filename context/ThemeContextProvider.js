import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getDesignTokens } from "../theme/Theme";

const defaultState = {
    matrix: true,
    toggleMatrix: () => {},
};

export const ThemeContext = React.createContext(defaultState);

const ThemeContextProvider = ({ children }) => {
    const [matrix, setMatrix] = React.useState(true);
    const toggleMatrix = () => {
        setMatrix((prev) => !prev);
    };
    const theme = React.useMemo(
        () => createTheme(getDesignTokens(matrix)),
        [matrix]
    );
    return (
        <ThemeContext.Provider value={{ matrix, toggleMatrix }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
