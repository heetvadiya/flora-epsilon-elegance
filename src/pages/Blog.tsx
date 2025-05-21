
import { PageLayout } from "@/components/page-layout";

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif mb-6 opacity-0 animate-fade-in">Blog</h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            This page is under development. Check back soon for articles about SPC flooring and interior design.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
