import Gallery from "@/components/HomePage/Gallery/Gallery";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Technologies from "@/components/HomePage/Technologies/Technologies";
import Header from "@/components/HomePage/Header/Header";
import Questions from "@/components/HomePage/Questions/Questions";
import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Footer from "@/components/HomePage/Footer/Footer";
import Review from "@/components/HomePage/Review/Review";
import Steps from "@/components/HomePage/Steps/Steps";

export default function Index() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Technologies />
      <Steps />
      <Questions />
      <Review />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}
