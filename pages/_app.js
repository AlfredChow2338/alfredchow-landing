import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContextProvider";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
}

export default MyApp;
