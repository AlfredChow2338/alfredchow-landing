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
    console.log(theme);
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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Box textAlign="right" pt={4}>
                    <FormControlLabel
                        control={
                            <ModeSwitch
                                checked={matrix}
                                onChange={handleChangeMatrixMode}
                            />
                        }
                        label={matrix ? "Matrix Mode" : "Light Mode"}
                    />
                </Box>
                <Box mt={6}>
                    <Box display="flex" justifyContent="center">
                        <Image
                            src={
                                matrix
                                    ? "/profile_pic_dark.jpg"
                                    : "/profile_pic.jpg"
                            }
                            alt="Alfred Chow"
                            width={200}
                            height={380}
                        />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <h1 className={styles.title}>Alfred Chow</h1>
                    </Box>
                    <Box>
                        <p className={styles.description}>
                            I&apos;m a Software Developer{" "}
                            {matrix
                                ? "living in the Matrix"
                                : "based in Hong Kong"}
                            . I work for a Singapore company remotely. My
                            favorite technologies at this moment are
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
                            <CodeBlockText theme={theme}>Node.js</CodeBlockText>
                            .
                        </p>
                    </Box>
                    <Box m={8} textAlign="center">
                        <a
                            href={`mailto:${email_address}`}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {email_address}
                        </a>
                    </Box>
                </Box>

                {/* <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div> */}
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
