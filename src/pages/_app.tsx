import React from 'react';
import {AppProps} from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import Head from 'next/head';

import {theme} from '@shared/styles/theme';

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        const jssStyles: any = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>UI Exercise</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}
