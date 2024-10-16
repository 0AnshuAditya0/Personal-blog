// In Next.js, you use the "use client" directive at the top of a component file to indicate that the component should be rendered on the client side. This is necessary for components that utilize hooks like useState or useEffect, which require a browser environment. Without this directive, the component would be treated as a server component, which does not support such hooks, leading to errors.
"use client";
import Image from 'next/image';
import Link from 'next/link';


import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  // Use usePathname to handle active links:
  return (
    <nav 
    className="bg-indigo-900 text-white p-4 pt-5 flex justify-between font-ubuntu font-semibold fixed w-full"
    >
      <Image src="/images/edgrun.jpg"
        width={50}
        height={50}
        className="rounded"
      />


      <ul className="flex space-x-8 justify-between items-center ">
        <li><Link 
        className=" hover:text-cyan-300 hover:p-2 hover:m-2" 
        href="/home"
        >Home</Link></li>

        <li><Link 
        className=" hover:text-cyan-300 hover:p-2 hover:m-2" 
        href="/about"
        >About</Link></li>

        <li><Link className=" hover:text-cyan-300 hover:p-2 hover:m-2" href="/project">Projects</Link></li>
        {/* Use usePathname to handle active links: */}
        <li><Link className={`p-2 rounded ${pathname === '/contact' ? 'text-red-500 bg-yellow-300' : ''} hover:text-cyan-300 hover:p-2 hover:m-2 `} href="/contact">Contact</Link></li>
      </ul>


      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>


    </nav>
  );
};

