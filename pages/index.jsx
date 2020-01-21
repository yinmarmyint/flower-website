import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import AboutUs from "./AboutUs";
import Service from "./Service";
import CustomerSay from "./CustomerSay";
import Footer from "./Footer";

export default () => (
  <Layout>
    <HomePage />
    <AboutUs />
    <Service />
    <CustomerSay />
    <Footer />
  </Layout>
);
