import NavBar from "../NavBar/Navbar";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Details } from "@mui/icons-material";
import Navbar from "../NavBar/Navbar";
import ShopMain from "../ShopMain/ShopMain";
import About from "../About/About";
import Contact from "../Contact/Contact";

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
      <BrowserRouter>
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
