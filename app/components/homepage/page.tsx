
import BungalowSection from "./BungalowSection";
import ConstructionProcess from "./ConstructionProcess";
import CTASection from "./CTASection";
import FeaturedPlots from "./FeaturedPlots";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Services from "./Services";
import SolarEnergy from "./SolarEnergy";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";
const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <SolarEnergy />
            <FeaturedPlots />
            <BungalowSection />
            <ConstructionProcess />
            <RecentProjects />
            <TeamSection />
            <Testimonials />
            <CTASection />
        </>
    )
}

export default HomePage