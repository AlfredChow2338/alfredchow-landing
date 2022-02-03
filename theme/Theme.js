import { grey } from "@mui/material/colors";

export const getDesignTokens = (matrix) => ({
    palette: {
        mode: matrix === true ? "dark" : "light",
        primary: {
            ...grey,
        },
        ...(matrix === true && {
            background: grey[900],
            text: grey[50],
            codeblock: grey[600],
        }),
        ...(matrix === false && {
            background: grey[50],
            text: grey[900],
            codeblock: grey[200],
        }),
    },
});
