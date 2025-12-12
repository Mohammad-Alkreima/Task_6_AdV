import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../redux/Store/store";
import { setLatestNewsletterPosts } from "../redux/Slice/blogSlice";
import BlogCard from "../components/BlogCard";
import NewsletterHero from "../components/NewsLetterHero";

const NewsletterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const newsletterPosts = useSelector(
    (state: RootState) => state.blog.latestNewsletterPosts
  );

  useEffect(() => {
    dispatch(setLatestNewsletterPosts());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Hero Section */}
      <NewsletterHero />

      {/* Latest Newsletter Posts */}
      <section className="mt-10 mb-16">
        <h2 className="text-xl font-semibold mb-6">All blog posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletterPosts.map((article) => (
            <BlogCard key={article.id} post={article} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default NewsletterPage;
