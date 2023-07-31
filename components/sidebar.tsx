import Link from "next/link"
import { HomeIcon, NewspaperIcon } from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <aside className="md:h-screen py-2 px-3 float-left w-full md:w-48">
      <div className="h-full flex justify-between md:justify-start md:flex-col gap-1">
        <Link href="/">
          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <HomeIcon className="w-6 h-6"></HomeIcon>
            <span className="ml-3">Home</span>
          </div>
        </Link>
        <Link href="/posts">
          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <NewspaperIcon className="w-6 h-6"></NewspaperIcon>
            <span className="ml-3">Blog</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}
