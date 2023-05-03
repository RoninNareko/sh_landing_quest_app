import HomePageHeader from "@/components/HomePage/HomePageHeader/HomePage.Header";
import HomePageAboutUs from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs";
import HomePageTechnologies from "@/components/HomePage/HomePageTechnologies/HomePageTechnologies";
import HomePageSteps from "@/components/HomePage/HomePageSteps/HomePageSteps";
import HomePageQuestions from "@/components/HomePage/HomePageQuestions/HomePageQuestions";
import HomePageReview from "@/components/HomePage/HomePageReview/HomePageReview";
import HomePageGallery from "@/components/HomePage/HomePageGallery/HomePageGallery";
import HomePageContactUs from "@/components/HomePage/HomePageContactUs/HomePageContactUs";
import HomePageFooter from "@/components/HomePage/HomePageFooter/HomePageFooter";

export default function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <HomePageAboutUs />
      <HomePageTechnologies />
      <HomePageSteps />
      <HomePageQuestions />
      <HomePageReview />
      <HomePageGallery />
      <HomePageContactUs />
      <HomePageFooter />
    </div>
  );
}
