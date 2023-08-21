import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ShopMain from "./components/ShopMain/ShopMain";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/shoppable_demo/"}>
        <QueryClientProvider client={queryClient}>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path={"/"} element={<ShopMain />} />
            <Route path={"/About"} element={<About />} />
            <Route path={"/Contact"} element={<Contact />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
