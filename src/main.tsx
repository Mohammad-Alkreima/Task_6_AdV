import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store/store";
import { ThemeProvider } from "./context/ThemeContext"; 
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage"; 
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import NewsletterPage from "./pages/NewsletterPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path :"", element: <BlogPage /> },
            { path: "blog/:id", element: <BlogDetailPage /> }, 
            { path: "projects", element: <ProjectsPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "newsletter", element: <NewsletterPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider> 
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
