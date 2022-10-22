import React from "react";
import Head from "next/head";
import Image from "next/image";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";

import styles from "../styles/Home.module.css";
import { ThemeContext } from "../context/ThemeContextProvider";

const email_address = "alfredchow2338@gmail.com";
const github_repo = "https://github.com/AlfredChow2338?tab=repositories";

const CodeBlockText = ({ children, theme }) => (
    <code
        style={{
            backgroundColor: theme.palette.codeblock,
            borderRadius: 5,
            margin: "0.5em",
            padding: "0.5em",
            fontSize: "1.1rem",
            fontFamily:
                "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
        }}
    >
        {children}
    </code>
);

export default function Home() {
    const theme = useTheme();
    const { matrix, toggleMatrix } = React.useContext(ThemeContext);
    const ModeSwitch = styled(Switch)(() => ({
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: grey[600],
            "&:hover": {
                backgroundColor: alpha(
                    grey[600],
                    theme.palette.action.hoverOpacity
                ),
            },
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: grey[600],
        },
    }));
    const handleChangeMatrixMode = (e) => {
        toggleMatrix();
    };
    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: theme.palette.background,
                color: theme.palette.text,
            }}
        >
            <Head>
                <title>Alfred Chow</title>
                <meta name="keywords" content="Alfred Chow" />
                <link rel="icon" href="/propic-circle.png" />
            </Head>

            <main className={styles.main}>
                <Box pt={6}>
                <Box display="flex" justifyContent="center">
                        <div 
                          style={{
                            borderRadius: '50%', 
                            overflow: 'hidden',
                            width: '100px', 
                            height: '100px'
                          }}
                        >
                            <Image
                                src="/propic.jpeg"
                                alt="Alfred Chow"
                                width={100}
                                height={100}
                            />
                        </div>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <h1 className={styles.title}>Alfred Chow</h1>
                    </Box>
                    <Box>
                        <p className={styles.description}>
                            I&apos;m a HK-based Software Engineer. 
                            My favorite technologies are
                            <CodeBlockText theme={theme}>
                                Flutter
                            </CodeBlockText>
                            ,{" "}
                            <CodeBlockText theme={theme}>
                                React.js
                            </CodeBlockText>
                            ,{" "}
                            <CodeBlockText theme={theme}>
                                TypeScript
                            </CodeBlockText>
                            ,{" "}
                            <CodeBlockText theme={theme}>GraphQL</CodeBlockText>{" "}
                            and{" "}
                            <CodeBlockText theme={theme}>Golang</CodeBlockText>.
                        </p>
                    </Box>
                    <Box
                        mt={8}
                        mb={8}
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <a
                            href={`mailto:${email_address}`}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>Contact Me &rarr;</h2>
                            {/* <p>{email_address}</p> */}
                            <Box textAlign="center">
                                <Image
                                    src={matrix ? "/gmail.png" : "/gmail.png"}
                                    width="160"
                                    height="160"
                                />
                            </Box>
                        </a>
                        <a
                            href={github_repo}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>Github Repo &rarr;</h2>
                            <Box textAlign="center">
                                <Image
                                    src={
                                        matrix
                                            ? "/github_dark.png"
                                            : "/github.png"
                                    }
                                    width="160"
                                    height="160"
                                />
                            </Box>
                        </a>
                    </Box>
                </Box>
                <Box textAlign="center" mb={4}> 
                    <FormControlLabel
                        control={
                            <ModeSwitch
                                checked={matrix}
                                onChange={handleChangeMatrixMode}
                            />
                        }
                        label={matrix ? "Dark" : "Light"}
                    />
                </Box>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/AlfredChow2338"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copyright reserved by Alfred Chow &copy;
                </a>
            </footer>
        </div>
    );
}
