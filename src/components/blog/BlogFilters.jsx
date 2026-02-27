import { FiSearch } from "react-icons/fi";

const BlogFilters = ({ activeCategory, setActiveCategory, searchTerm, setSearchTerm }) => {
  const categories = ["All", "Development", "Design", "SEO", "Security"];

  return (
    <div className="col-lg-12 mt-5">
      <div className="bg-white p-3 rounded-4 shadow-sm border d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 transition-smooth hover-shadow-md">
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm px-4 rounded-pill fw-bold transition-all duration-300 ${activeCategory === cat ? 'bg-navy text-white shadow-md' : 'bg-light text-mid-gray hover-cyan-bg'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="position-relative w-100 search-container" style={{ maxWidth: '400px' }}>
          <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-cyan search-icon transition-smooth" />
          <input 
            type="text" 
            className="form-control ps-5 rounded-pill border-light bg-light py-2 shadow-none focus-ring-cyan transition-smooth" 
            placeholder="Search by topic or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;