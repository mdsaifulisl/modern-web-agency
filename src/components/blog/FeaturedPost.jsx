import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const FeaturedPost = ({ post }) => {
  if (!post) return null;
  
  return (
    <div className="col-lg-12 mt-n5 position-relative z-2">
      <div className="bg-white rounded-5 shadow-lg overflow-hidden border-0 featured-card-hover transition-smooth">
        <div className="row g-0">
          <div className="col-md-6 position-relative overflow-hidden" style={{ minHeight: '350px' }}>
            <Image src={post.image} alt="Featured" fill className="object-fit-cover featured-img transition-smooth" />
          </div>
          <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
            <span className="badge bg-yellow text-navy mb-3 align-self-start shadow-sm">Featured Post</span>
            <h2 className="fw-bold text-navy mb-3 transition-colors">{post.title}</h2>
            <p className="text-mid-gray mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <Button variant="primary" className="rounded-pill hover-scale-sm">Read Full Article</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;