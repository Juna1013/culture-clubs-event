import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <h1 className="text-2xl font-bold tracking-wider hover:text-blue-200 transition-colors duration-300">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎺</span>
              <span>文化部合同説明会</span>
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: '参加団体' },
                { href: '/contact', label: 'お問い合わせ' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href}
                    className="relative py-2 group"
                  >
                    <span className="relative z-10 hover:text-blue-200 transition-colors duration-300">
                      {label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4">
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: '参加団体' },
                { href: '/contact', label: 'お問い合わせ' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href}
                    className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;