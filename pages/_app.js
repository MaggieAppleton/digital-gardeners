import "../styles/tailwind.css";
import Sidemenu from "../components/Sidemenu";

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Sidemenu />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
