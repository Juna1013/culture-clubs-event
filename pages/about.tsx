// pages/about.tsx
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold">参加団体一覧</h2>
        <p className="mt-4">以下、本イベントの参加団体です。</p>
      </main>
    </div>
  );
};

export default About;
