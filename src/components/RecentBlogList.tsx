import type { BlogPost } from "../types";
import BlogCard from "./BlogCard";

interface Props {
    posts: BlogPost[];
}

const RecentBlogList: React.FC<Props> = ({ posts }) => {
    if (posts.length < 4) return null;

    const [mainPost, secondPost, thirdPost, lastPost] = posts;

    return (
        <div className="grid gap-8">

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                <BlogCard
                    post={mainPost}
                    imageClassName="w-full h-56"
                    shadow={false}
                />

                <div className="flex flex-col gap-6">
                    {[secondPost, thirdPost].map((item) => (
                        <BlogCard
                            key={item.id}
                            post={item}
                            orientation="horizontal"
                            imageClassName="rounded-2xl w-full h-50 md:w-80"
                            shadow={false}
                        />
                    ))}
                </div>

            </div>

            <BlogCard
                post={lastPost}
                imageClassName="rounded-2xl lg:w-[50%] h-56"
                containerClassName="flex flex-col lg:flex-row"
                shadow={false}
            />

        </div>
    );
};

export default RecentBlogList;
