
import { PageLayout } from "@/components/page-layout";

const Media = () => {
  return (
    <PageLayout title="Media & Gallery">
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in">Media & Gallery</h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            This page is under development. Check back soon to explore our gallery of FLORA installations.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Media;
