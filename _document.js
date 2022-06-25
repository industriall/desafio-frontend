import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <meta name="description" content="Desafio_ALL"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}