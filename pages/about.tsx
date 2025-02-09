// pages/about.tsx
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold">部活動紹介</h2>
        <p className="mt-4">こちらは私たちの部活動の紹介ページです。</p>
      </main>
    </div>
  );
};

export default About;
