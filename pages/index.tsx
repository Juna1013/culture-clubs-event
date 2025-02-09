import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const clubCategories = [
    {
      title: '音楽系',
      description: '音楽を通じて感動を創造する',
      clubs: ['吹奏楽部', '軽音楽部', '合唱部'],
      emoji: '🎵'
    },
    {
      title: '芸術系',
      description: '想像力を形にする',
      clubs: ['美術部', '書道部', '写真部'],
      emoji: '🎨'
    },
    {
      title: '表現系',
      description: '想いを伝える',
      clubs: ['演劇部', '放送部', '文芸部'],
      emoji: '🎭'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <main className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ようこそ、部活動へ！
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              仲間と共に成長し、新しい可能性を見つけよう
            </p>
            <a 
              href="/about" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              部活動を詳しく見る
            </a>
          </div>
        </main>
      </div>

      {/* Club Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            部活動カテゴリー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{category.emoji}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.clubs.map((club) => (
                    <li 
                      key={club}
                      className="text-gray-700 flex items-center space-x-2"
                    >
                      <span>⋆</span>
                      <span>{club}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            説明会に参加しませんか？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            4月15日(火)に体育館で文化部合同説明会を開催します。
            あなたの興味のある部活動を見つけましょう！
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              参加申し込み
            </a>
            <a 
              href="/about" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;