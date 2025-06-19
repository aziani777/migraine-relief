
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Common Nutrient Deficiencies Linked to Migraine (And What to Do About Them)",
      summary: "Discover the essential vitamins and minerals that could be missing from your diet and triggering your migraines. Learn practical ways to address these deficiencies naturally.",
      image: "/lovable-uploads/6638a65a-6bb0-4231-aa3b-a81218afbbc5.png",
      readTime: "8 min read",
      date: "December 5, 2024",
      slug: "nutrient-deficiencies"
    },
    {
      id: 2,
      title: "What an Aura Really Means – And When to Take Action",
      summary: "Understanding the warning signs your body gives you before a migraine attack. Learn to recognize aura symptoms and use them as your early intervention opportunity.",
      image: "/lovable-uploads/1f1876b5-3ea6-4dbc-b3cd-51be6c333873.png",
      readTime: "6 min read",
      date: "December 3, 2024",
      slug: "migraine-aura"
    },
    {
      id: 3,
      title: "How Sleep, Light, and Diet Can Trigger Your Migraine",
      summary: "Explore the three most common lifestyle triggers that could be causing your migraines. Get actionable tips to modify your environment and habits for better prevention.",
      image: "/lovable-uploads/5a782d54-fa69-494b-bcef-fbd11285ee35.png",
      readTime: "10 min read",
      date: "December 1, 2024",
      slug: "sleep-light-diet"
    },
    {
      id: 4,
      title: "Natural Migraine Relief: What Actually Works?",
      summary: "A science-backed look at natural remedies that have shown real promise in migraine prevention and treatment. Separate fact from fiction in the world of natural health.",
      image: "/lovable-uploads/51fffc0b-51cd-4335-bf3a-e3875f3a78f7.png",
      readTime: "12 min read",
      date: "November 28, 2024",
      slug: "natural-migraine-relief"
    },
    {
      id: 5,
      title: "When Should You Track Your Migraine?",
      summary: "Learn the best practices for migraine tracking and how the data you collect can help you and your healthcare provider identify patterns and triggers.",
      image: "/lovable-uploads/0749db91-4a5e-42e2-9c98-a7132ab2feef.png",
      readTime: "5 min read",
      date: "November 25, 2024",
      slug: "migraine-tracking"
    },
    {
      id: 6,
      title: "The Hidden Connection Between Stress and Migraines",
      summary: "Uncover how chronic stress impacts your migraine frequency and intensity. Discover evidence-based stress management techniques that can reduce your migraine burden.",
      image: "/lovable-uploads/efd55834-d3be-4d12-90b9-22f659e990cc.png",
      readTime: "9 min read",
      date: "November 22, 2024",
      slug: "stress-migraine-connection"
    },
    {
      id: 7,
      title: "Migraine in Women: Understanding Hormonal Triggers",
      summary: "Learn about the unique challenges women face with hormonal migraines. Get practical strategies for managing migraines during menstruation, pregnancy, and menopause.",
      image: "/lovable-uploads/a2790d58-1d26-4f63-8be0-6a74b592b76a.png",
      readTime: "11 min read",
      date: "November 20, 2024",
      slug: "hormonal-migraines"
    },
    {
      id: 8,
      title: "Breaking the Migraine-Medication Cycle: A Gentle Approach",
      summary: "Understand medication overuse headaches and learn how to safely reduce dependence on pain medications while maintaining effective migraine management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&h=300",
      readTime: "13 min read",
      date: "November 18, 2024",
      slug: "medication-cycle"
    },
    {
      id: 9,
      title: "The Role of Exercise in Migraine Prevention",
      summary: "Discover how the right type and amount of exercise can significantly reduce migraine frequency. Learn to exercise safely without triggering a migraine attack.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=300",
      readTime: "7 min read",
      date: "November 15, 2024",
      slug: "exercise-prevention"
    },
    {
      id: 10,
      title: "Creating Your Migraine-Friendly Environment at Home and Work",
      summary: "Transform your living and working spaces to minimize migraine triggers. Get practical tips for lighting, air quality, noise control, and ergonomic improvements.",
      image: "/lovable-uploads/eaa4f8f8-08df-4cfe-a81d-4ef4fef81644.png",
      readTime: "8 min read",
      date: "November 12, 2024",
      slug: "migraine-friendly-environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Migraine Education & Relief Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evidence-based articles on migraine prevention, natural remedies, and lifestyle strategies 
            to help you take control of your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 cursor-pointer ${
                hoveredCard === post.id ? 'shadow-lg transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full h-48 object-cover transition-transform duration-300 ${
                    hoveredCard === post.id ? 'scale-105' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                
                {post.slug ? (
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read More
                    <ArrowRight 
                      size={16} 
                      className={`ml-1 transition-transform duration-300 ${
                        hoveredCard === post.id ? 'translate-x-1' : ''
                      }`} 
                    />
                  </Link>
                ) : (
                  <span className="inline-flex items-center text-gray-400 font-semibold">
                    Coming Soon
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
