import { Link } from "react-router-dom";
import { type BlogPost } from "../types";
import { useTheme } from "../context/ThemeContext";

const tagStyles = [
    "text-[#6941C6] bg-[#F9F5FF]",
    "text-[#363F72] bg-[#F8F9FC]",
    "text-[#026AA2] bg-[#F0F9FF]",
    "text-[#C4320A] bg-[#FFF6ED]",
];

interface BlogCardProps {
    post: BlogPost;
    orientation?: "vertical" | "horizontal";
    imageClassName?: string;
    containerClassName?: string;
    shadow?: boolean;
}

const BlogCard = ({
    post,
    orientation = "vertical",
    imageClassName = "w-full h-56 object-cover",
    containerClassName = "",
    shadow = true,
}: BlogCardProps) => {
    
    const { theme } = useTheme();
    const horizontalView = orientation === "horizontal";

    return (
        <div
            className={[
                "rounded-2xl overflow-hidden transition hover:scale-[1.01]",
                shadow ? "shadow-md" : "",
                horizontalView ? "flex flex-col md:flex-row" : "",
                containerClassName,
            ].join(" ")}
        >
            <img
                src={post.image}
                alt={post.title}
                className={`rounded-2xl ${imageClassName}`}
            />

            <div
                className={`p-4 space-y-3 ${
                    horizontalView ? "md:w-3/5 px-4" : ""
                }`}
            >
                <div className="text-xs text-[#6941C6]">
                    {post.author} • {post.date}
                </div>

                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {post.title}
                    </h2>

                    <Link
                        to={`/blog/${post.id}`}
                        className="xl:flex items-center p-1 text-blue-600 dark:text-blue-400"
                    >
                        <img
                            src={
                                theme === "light"
                                    ? "/assets/readMore.svg"
                                    : "/assets/readMoreDark.svg"
                            }
                            alt=""
                            className="w-2.5 h-2.5"
                        />
                    </Link>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.preview}
                </p>

                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-2xl ${
                                tagStyles[Math.floor(Math.random() * tagStyles.length)]
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
