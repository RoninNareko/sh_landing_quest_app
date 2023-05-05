import Gallery from "@/components/Gallery/Gallery";
import AboutUs from "@/components/AboutUs/AboutUs";
import Technologies from "@/components/Technologies/Technologies";
import Header from "@/components/Header/Header";
import Questions from "@/components/Questions/Questions";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Review from "@/components/Review/Review";
import Steps from "@/components/Steps/Steps";

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
