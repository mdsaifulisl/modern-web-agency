import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";

const BlogCard = ({ post }) => (
  <div className="col-md-6 col-lg-4">
    <article className="blog-card h-100 bg-white rounded-4 shadow-sm overflow-hidden border transition-smooth hover-lift-up">
      <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
        <Image src={post.image} alt={post.title} fill className="object-fit-cover transition-smooth card-img" />
        <div className="position-absolute bottom-0 start-0 p-3 z-2">
          <span className="badge bg-navy text-white border border-cyan border-opacity-25 backdrop-blur-sm">{post.category}</span>
        </div>
        <div className="img-overlay"></div>
      </div>
      <div className="p-4 card-content">
        <div className="d-flex align-items-center gap-3 text-mid-gray small mb-3">
          <span className="d-flex align-items-center gap-1"><FiCalendar className="text-cyan" /> {post.date}</span>
          <span className="d-flex align-items-center gap-1"><FiClock className="text-cyan" /> {post.readTime}</span>
        </div>
        <h4 className="fw-bold text-navy mb-3 h5 lh-base">
          <Link href={`/blog/${post.id}`} className="text-decoration-none text-navy title-link transition-colors">
            {post.title}
          </Link>
        </h4>
        <p className="text-mid-gray small mb-4 line-clamp-2">{post.excerpt}</p>
        <Button href={`/blog/${post.id}`} variant="link" className="fw-bold d-flex align-items-center gap-2 group">
          Continue Reading <FiArrowRight className="arrow-icon transition-smooth" />
        </Button>
      </div>
    </article>
  </div>
);

export default BlogCard;


