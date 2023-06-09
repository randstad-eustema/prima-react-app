import { BrowserRouter, Routes, Route } from "react-router-dom";
// Contexts
import { AuthProvider } from "./contexts/AuthContext";
// Layouts
import BaseLayout from "./layouts/BaseLayout";

// Public pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ErrorPage from "./pages/ErrorPage";

// Private Pages
import PrivateRoutes from "./middleware/PrivateRoutes";
import AdminHomePage from "./pages/AdminHomePage";
import AdminPostsPage from "./pages/AdminPostsPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/admin" element={<PrivateRoutes />}>
            <Route index element={<AdminHomePage />} />
            <Route path="/admin/posts" element={<AdminPostsPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
