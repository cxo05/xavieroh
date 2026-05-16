import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-full mx-auto w-full max-w-4xl bg-white">
      <Header />
      <div className="px-4">
        <Sidebar />
        <style>{`
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
        <div className="flex justify-center">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
