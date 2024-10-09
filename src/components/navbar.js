// In Next.js, you use the "use client" directive at the top of a component file to indicate that the component should be rendered on the client side. This is necessary for components that utilize hooks like useState or useEffect, which require a browser environment. Without this directive, the component would be treated as a server component, which does not support such hooks, leading to errors.
"use client";
import Image from 'next/image';
import Link from 'next/link';


import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  // Use usePathname to handle active links:
  return (
    <nav className="bg-gray-400 text-black p-4 pt-5 flex justify-between ">
      <Image src="/images/edgrun.jpg"
        width={50}
        height={50}
        className="rounded-xl"
      />


      <ul className="flex space-x-8 justify-between items-center text-xl">
        <li><Link 
        className="hover:bg-black hover:rounded-md hover:text-cyan-300 hover:p-2 hover:m-2" 
        href="/"
        >Home</Link></li>

        <li><Link 
        className="hover:bg-black hover:rounded-md hover:text-cyan-300 hover:p-2 hover:m-2" 
        href="/about"
        >About</Link></li>

        <li><Link className="hover:bg-black hover:rounded-md hover:text-cyan-300 hover:p-2 hover:m-2" href="/projects">Projects</Link></li>
        {/* Use usePathname to handle active links: */}
        <li><Link className={`p-2 rounded ${pathname === '/contact' ? 'text-red-500 bg-yellow-300' : ''} hover:bg-black hover:rounded-md hover:text-cyan-300 hover:p-2 hover:m-2 `} href="/contact">Contact</Link></li>
      </ul>


      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-500">
        <Link href="/">Toouch</Link>
      </button>


    </nav>
  );
};

