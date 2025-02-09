import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
            <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">
                About
            </h2>
            <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                    <span>🕒</span>
                    <span>開催日：2025年4月中旬</span>
                </li>
                <li className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>場所：図書館棟1階 セミナー交流室</span>
                </li>
                <li className="flex items-center space-x-2">
                    <span>✉️</span>
                    <span>info@example.com</span>
                </li>
            </ul>
        </div>

          {/* Quick Links */}
            <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">
                Clubs
            </h2>
            <ul className="space-y-2">
                {[
                    { href: '/clubs/music', label: '天文部', icon: '⭐' },
                    { href: '/clubs/art', label: 'ラジオ部', icon: '📻' },
                    { href: '/clubs/drama', label: 'MDL', icon: '🔧' },
                ].map(({ href, label, icon }) => (
                <li key={href}>
                    <Link 
                        href={href}
                        className="hover:text-blue-200 transition-colors duration-300 flex items-center space-x-2"
                    >
                    <span>{icon}</span>
                    <span>{label}</span>
                    </Link>
                </li>
                ))}
            </ul>
            </div>

          {/* Social Links */}
            <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">
                SNS
            </h2>
            <div className="flex space-x-4">
                {[
                    { label: 'Twitter', icon: '🐦' },
                    { label: 'Instagram', icon: '📸' }
                    ].map(({ icon, label }) => (
                <a
                    key={label}
                    href="#"
                    className="hover:text-blue-200 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full text-xl"
                    aria-label={label}
                >
                    {icon}
                </a>
                ))}
            </div>
            </div>
            </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-blue-400 text-center text-sm">
            <p>{currentYear} 文化部合同説明会</p>
        </div>
        </div>
    </footer>
    );
};

export default Footer;