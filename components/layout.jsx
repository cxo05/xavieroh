import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-full px-4 mx-auto w-full max-w-6xl bg-white">
      <Header />
      <div>
        <Sidebar />
        <style jsx>{`
          .contentWidth {
            width: 100%;
            min-height: calc(100vh - 182px);
          }
          @media (min-width: 768px) {
            .contentWidth {
              width: calc(100% - 192px);
            }
          }
        `}</style>
        <div className="flex justify-center float-right contentWidth">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
