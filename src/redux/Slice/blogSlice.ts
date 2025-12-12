import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type BlogPost } from "../../types";
import blogData from "../../data/blogData";

// ثوابت للإعدادات
const NUM_RELATED_POSTS = 9;
const NUM_LATEST_NEWSLETTERS = 3;
const NUM_RECENT_POSTS = 4;
const POSTS_PER_PAGE = 6;

// نوع حالة البلوق
interface BlogState {
  allPosts: BlogPost[];
  recentPosts: BlogPost[];
  paginatedPosts: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  totalPages: number;
  latestNewsletterPosts: BlogPost[];
  relatedPosts: BlogPost[];
}

// دالة مساعدة لتقسيم الصفحات
const paginatePosts = (posts: BlogPost[], page: number, perPage: number) => {
  const startIndex = (page - 1) * perPage;
  return posts.slice(startIndex, startIndex + perPage);
};

// الحالة الابتدائية
const initialState: BlogState = {
  allPosts: blogData,
  recentPosts: blogData.slice(0, NUM_RECENT_POSTS),
  currentPage: 1,
  postsPerPage: POSTS_PER_PAGE,
  paginatedPosts: [],
  totalPages: Math.ceil((blogData.length - NUM_RECENT_POSTS) / POSTS_PER_PAGE),
  latestNewsletterPosts: [],
  relatedPosts: [],
};

// الـ Slice
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    ...initialState,
    paginatedPosts: paginatePosts(
      blogData.slice(NUM_RECENT_POSTS),
      initialState.currentPage,
      POSTS_PER_PAGE
    ),
  },
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.paginatedPosts = paginatePosts(
        state.allPosts.slice(NUM_RECENT_POSTS),
        state.currentPage,
        state.postsPerPage
      );
    },

    setLatestNewsletterPosts: (state) => {
      state.latestNewsletterPosts = state.allPosts.slice(0, NUM_LATEST_NEWSLETTERS);
    },

    setRelatedPosts: (state, action: PayloadAction<string>) => {
      const currentId = action.payload;
      const filteredPosts = state.allPosts.filter(post => post.id !== currentId);
      // اختيار عشوائي مع ترتيب ثابت للتوزيع
      const shuffled = [...filteredPosts].sort(() => Math.random() - 0.5);
      state.relatedPosts = shuffled.slice(0, NUM_RELATED_POSTS);
    },
  },
});

export const { setPage, setLatestNewsletterPosts, setRelatedPosts } = blogSlice.actions;
export default blogSlice.reducer;
