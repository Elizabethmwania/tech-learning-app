import BackToTop from "../BackToTop/scrollButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <BackToTop />
    <Footer />
  </>
);

export default Layout;
