import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../redux/Store/store";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import { setPage } from "../redux/Slice/blogSlice";
import RecentBlogList from "../components/RecentBlogList";

const BlogPage: React.FC = () => {
  const dispatch = useDispatch();
  const { recentPosts, paginatedPosts, currentPage, totalPages } =
    useSelector((state: RootState) => state.blog);

  const onPageSelect = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="py-8 max-w-full mx-8 xl:mx-[112px]">
      
      {/* Main Title */}
      <h1 className="xl:text-[243.8px] lg:text-[160.8px] md:text-9xl text-6xl font-bold mb-10 text-center border-t border-b border-black dark:border-white">
        THE BLOG
      </h1>

      {/* Recent Posts */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Recent blog posts</h2>
        <RecentBlogList posts={recentPosts} />
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-xl font-semibold mb-6">All blog posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>

        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageSelect}
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
