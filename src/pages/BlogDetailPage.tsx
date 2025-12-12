import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../redux/Store/store";
import { setRelatedPosts } from "../redux/Slice/blogSlice"; 
import BlogCard from "../components/BlogCard";
import NewsletterHero from "../components/NewsLetterHero";

const tagColors = [
  "text-[#026AA2] bg-[#F0F9FF]",
  "text-[#363F72] bg-[#F8F9FC]",
  "text-[#6941C6] bg-[#F9F5FF]",
  "text-[#C4320A] bg-[#FFF6ED]",
];

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const allPosts = useSelector((state: RootState) => state.blog.allPosts);
  const relatedPosts = useSelector((state: RootState) => state.blog.relatedPosts);

  const currentPost = allPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(setRelatedPosts(id));
    }
  }, [id, dispatch]);

  if (!currentPost) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
        <Link
          to="/blog"
          className="text-blue-600 mt-4 inline-block hover:underline"
        >
          Go back to Blog
        </Link>
      </div>
    );
  }

  const renderRelatedPosts = () => (
    <div className="grid grid-cols-1 gap-6">
      {relatedPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Related posts for desktop */}
        <div className="md:col-span-1 hidden md:block">
          <h2 className="text-xl font-semibold mb-6 dark:text-white text-zinc-900">
            More Posts
          </h2>
          {renderRelatedPosts()}
        </div>

        {/* Main content */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <p className="text-sm text-[#6941C6] mb-1">
              {currentPost.author} • {currentPost.date}
            </p>
            <h1 className="text-4xl font-bold mb-4 dark:text-white text-zinc-900">
              {currentPost.title}
            </h1>
          </div>

          {currentPost.image && (
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-auto max-h-96 object-cover rounded-lg mb-8"
            />
          )}

          {currentPost.preview && (
            <p className="mb-6 text-gray-700 dark:text-gray-200">{currentPost.preview}</p>
          )}

          <div className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            {currentPost.sections?.map((section) => (
              <div key={section.id}>
                {section.image && (
                  <img
                    src={section.image}
                    alt="Section"
                    className="w-full h-auto max-h-80 object-cover rounded-lg mb-4"
                  />
                )}
                {section.content?.map((el, idx) => (
                  <div key={idx} className="mb-4">
                    {el.h1 && <h2 className="text-2xl font-semibold mb-2">{el.h1}</h2>}
                    {el.p && <p className="text-gray-700 dark:text-gray-200">{el.p}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {currentPost.tags?.map((tag, idx) => (
              <span
                key={idx}
                className={`${tagColors[idx % tagColors.length]} px-3 py-1 rounded-full text-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related posts for mobile */}
        <div className="md:hidden mt-8">
          <h2 className="text-xl font-semibold mb-6 dark:text-white text-zinc-900">
            More Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {renderRelatedPosts()}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full flex justify-center lg:justify-end mt-16">
        <NewsletterHero />
      </div>
    </div>
  );
};

export default BlogDetailPage;
