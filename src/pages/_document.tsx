import Document, { Html, Head, Main, NextScript } from 'next/Document'

export default class MyDocument extends Document {
  render () {
    return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
                 rel="stylesheet"/>

                 <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

                </Head>
                <body>
                {/* todo conteudo da nossa aplicacao e renderizado aqui dentro do <Main/> */}
                    <Main/>
                    <NextScript/>
                    {/* NextScript e onde o Next vai por os aquivos .js que a aplicacao precisa pra funcioar */}
                </body>
            </Html>
    )
  }
}
