import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <AboutMe />
            <About />
            <Services />
            <Portfolio />
            <CTA />
            <Footer />
        </main>
    );
}
