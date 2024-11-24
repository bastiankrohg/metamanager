import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/metamanager-logo.svg"
            alt="MetaManager Logo"
            width={150} // Adjust as needed
            height={50} // Adjust as needed
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a href="#blog" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>
        </nav>

        {/* Sign In / Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/signin" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
            Sign In
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;