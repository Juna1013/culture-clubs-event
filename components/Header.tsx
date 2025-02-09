// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">部活動紹介</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/about">部活動紹介</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
