import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-full px-4 mx-auto w-full max-w-6xl bg-white">
      <Header />
      <div>
        <Sidebar />
        <div
          className="float-right"
          style={{
            width: "calc(100% - 200px)",
            minHeight: "calc(100vh - 182px)",
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
