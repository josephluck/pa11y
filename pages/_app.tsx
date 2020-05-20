import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../design/global";

const theme = {};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
