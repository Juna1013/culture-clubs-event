// pages/index.tsx
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold">ようこそ、部活動へ！</h2>
        <p className="mt-4">私たちの部活動についてもっと知りたい方は、部活動紹介ページをご覧ください。</p>
      </main>
    </div>
  );
};

export default Home;
