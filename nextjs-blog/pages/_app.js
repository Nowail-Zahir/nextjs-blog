// `pages/_app.js`
import '../style/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}