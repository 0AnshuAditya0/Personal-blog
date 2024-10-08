// Mark this as a Client Component

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-purple-700 text-white p-4 pt-5 flex justify-between ">
      {/* Navbar Links */}
      <ul className="flex space-x-8">
        <Image src="/images/edgrun.jpg"
        width={50}
        height={50}
        className="rounded-xl"
         
        />
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
