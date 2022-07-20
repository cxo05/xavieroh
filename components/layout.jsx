import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-full px-4 mx-auto w-full max-w-6xl bg-white">
      <Header />
      <div>
        <Sidebar />
        <div style={{ float: "right", width: "calc(100% - 200px)" }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
