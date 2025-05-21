
import { PageLayout } from "@/components/page-layout";

const Inquire = () => {
  return (
    <PageLayout title="Inquire Now">
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in">Inquire About Our Products</h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            This page is under development. Check back soon to submit inquiries about FLORA products.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Inquire;
