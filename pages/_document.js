import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta
            name="google-site-verification"
            content="lVH0-KJ-iBda_czKdAm2XIE2Nrdaq4f3UhMp_M90Ba4"
          />
          <meta name="author" content="lolc myanmar" />
          <meta
            name="description"
            content="LOLC Myanmar Micro-Finance Company Ltd (LMML), the LOLC Group’s Greenfield lending operation in Myanmar is among a select group of privately owned micro finance institutions. Since its launch in 2013, LMML has consolidated its position in the highly competitive Myanmar market and is currently considered to be among the top 05 MFI’s in Myanmar."
          />
          <meta
            name="keywords"
            content="lolc, lolc myanmar, microfinance, micro-finance, myanmar microfinance"
          />
          <meta name="geo.region" content="MM-06" />
          <meta
            name="geo.placename"
            content="LOLC Myanmar Headquarters 1, No. (163), Shwe Hnin Si Kan St., (5) Ward, Mayangone Township, Yangon Region"
          />
          <meta
            name="geo.position"
            content="16.8749573361129; 96.1450978461653"
          />
          <meta name="ICBM" content="16.8749573361129, 96.1450978461653" />
          <meta name="revisit-after" content="7 days" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/lolcmm"
          />
          <meta property="og:site_name" content="LOLC Myanmar" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="LOLC Myanmar Micro-Finance Company Ltd (LMML), the LOLC Group’s Greenfield lending operation in Myanmar is among a select group of privately owned micro finance institutions. Since its launch in 2013, LMML has consolidated its position in the highly competitive Myanmar market and is currently considered to be among the top 05 MFI’s in Myanmar."
          />
          <meta property="og:url" content="https://www.lolcmyanmar.com" />
          <meta
            property="og:image"
            content="https://www.lolcmyanmar.com/static/image/lolc-logo.png"
          />
          <link
            rel="shortcut icon"
            href="/static/image/lolc-logo.png"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />

          {/* React Slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Electrolize|Julius+Sans+One|Nunito|Stardos+Stencil|Suranna&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.20.0/polyfill.min.js"
          />
          <script type="text/javascript" src="/static/messenger.js" />
        </Head>
        <body className="custom_class" id="root">
          <Main />
          <NextScript />
          <div id="fb-root" />
          <div
            className="fb-customerchat"
            // attribution=setup_tool
            page_id="1895592307333722"
          />
        </body>
      </html>
    );
  }
}
