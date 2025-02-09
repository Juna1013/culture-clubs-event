import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const clubCategories = [
    {
      title: '天文部',
      description: '街の天文台、目指します！',
      clubs: ['吹奏楽部', '軽音楽部', '合唱部'],
      emoji: '⭐'
    },
    {
      title: 'ラジオ部',
      description: '屋上でラジオを聞こう！',
      clubs: ['美術部', '書道部', '写真部'],
      emoji: '📻'
    },
    {
      title: 'MDL',
      description: 'ものづくり、しませんか？',
      clubs: ['演劇部', '放送部', '文芸部'],
      emoji: '🔧'
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
              Welcome to NITIC!!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              仲間と共に成長し、新しい可能性を見つけよう
            </p>
            <a 
              href="/about" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              What's Club?
            </a>
          </div>
        </main>
      </div>

      {/* Club Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Event Details
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

      <Footer />
    </div>
  );
};

export default Home;