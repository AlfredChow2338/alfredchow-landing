import React, { useState } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from '@material-ui/core/TextField';
import { useTheme } from "@mui/material/styles";

import styles from "../../styles/Home.module.css";
import { CodeBlockText } from "..";
import map from "./util";

const convertChineseToKongGirlPinYin = (text) => {
  const textArr = text.split('')
  return textArr.map(char => `${map[char] || ''} `)
}

export default function Translator() {
  const theme = useTheme();
  const [text, setText] = useState('')
  const handleChangeText = (e) => {
    setText(e.target.value)
  }
    return (
      <div style={{
        backgroundColor: theme.palette.background,
        color: theme.palette.text,
      }}>
        <Head>
            <title>Kong Girl Translator</title>
            <meta name="keywords" content="Kong Girl Translator" />
            <link rel="icon" href="/propic-circle.png" />
        </Head>
        <main className={styles.main}>
          <Box display="flex" justifyContent="center" alignItems='center' height='100vh' flexDirection='column'>
            <Box>
              <TextField
                placeholder="Input some Chinese..."
                style={{ width: 300, textAlign: 'center'}}
                inputProps={{
                  style: { color: theme.palette.text, backgroundColor: theme.palette.background }
                }}
                InputProps={{ disableUnderline: true }}
                // color='primary'
                variant="filled"
                value={text}
                onChange={handleChangeText} 
              />
            </Box>
            <Box mt={4}>
              <CodeBlockText theme={theme}>
                Output: 
              </CodeBlockText>
              {convertChineseToKongGirlPinYin(text)}
              </Box>
          </Box>
        </main>
      </div>
    )
}