//Import own components
import { Hero } from './_components/hero/hero';
import { PollSection } from './_components/poll-section/poll-section';
import { SixProblemSection } from './_components/six-problem-section/six-problem-section';
import { FunctionsAxilSection } from './_components/functions-axil-section/functions-axil-section';
import { WhyChooseAxilSection } from './_components/why-choose-axil/why-choose-axil';
import { FaqSection } from './_components/faq/faq';
import { ContactSection } from './_components/contact/contact';
export default function Home() {
  return (
    <main className="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Hero />
      <PollSection />
      <SixProblemSection />
      <FunctionsAxilSection />
      <WhyChooseAxilSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
