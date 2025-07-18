import Navbar from '@/components/Navbar';
import HomeSection from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

/*Page functionnnn */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
