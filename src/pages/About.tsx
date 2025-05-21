
import { PageLayout } from "@/components/page-layout";

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in">About FLORA by Epsilon</h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            This page is under development. Check back soon for the full story of Epsilon and the vision behind FLORA.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
