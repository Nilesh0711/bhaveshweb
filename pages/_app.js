import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
    return <>
    {/* <Navbar/> */}
    <Component {...pageProps} /> 
    {/* <Footer/> */}
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    </>
}

export default MyApp;
