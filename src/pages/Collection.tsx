
import { PageLayout } from "@/components/page-layout";

const Collection = () => {
  return (
    <PageLayout title="Collection">
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in">Our Premium Collection</h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            This page is under development. Check back soon to explore our complete SPC flooring collection.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Collection;
