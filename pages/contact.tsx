// pages/about.tsx
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold">お問い合わせ</h2>
        <p className="mt-4">ご不明な点がありましたら、以下の連絡先までお願いします。</p>
      </main>
    </div>
  );
};

export default About;
