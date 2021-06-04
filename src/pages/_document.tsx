import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preload" href="/fonts/SegoeUI/SegoeUI-400.ttf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/SegoeUI/SegoeUI-Semilight-350.ttf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/SegoeUI/SegoeUI-Semibold-600.ttf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/SegoeUI/SegoeUI-Gras-700.ttf" as="font" crossOrigin="" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}