
import { useState } from 'react';
import { Lock, User, Mail, Key, Users, BookOpen, Calendar, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const MemberArea = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-teal-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Espace Membre
            </h1>
            <p className="text-xl text-gray-600">
              Accédez à des ressources exclusives pour mieux gérer vos migraines
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login/Register Form */}
            <div className="bg-white rounded-xl shadow-lg border border-lavender-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-lavender-500 p-3 rounded-full">
                  <Lock className="text-white" size={24} />
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 rounded-lg p-1 flex">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isLogin 
                        ? 'bg-white text-teal-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !isLogin 
                        ? 'bg-white text-teal-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Inscription
                  </button>
                </div>
              </div>

              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

                <Button className="w-full bg-gradient-to-r from-teal-500 to-lavender-500 hover:from-teal-600 hover:to-lavender-600 text-white py-3">
                  {isLogin ? 'Se connecter' : "S'inscrire"}
                </Button>
              </form>

              {isLogin && (
                <div className="text-center mt-4">
                  <a href="#" className="text-sm text-teal-600 hover:text-teal-800">
                    Mot de passe oublié ?
                  </a>
                </div>
              )}
            </div>

            {/* Member Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-lavender-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="text-teal-600 mr-2" size={24} />
                  Avantages Membres
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="text-lavender-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Guides Exclusifs</h4>
                      <p className="text-sm text-gray-600">Accès à des guides détaillés sur la gestion des migraines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-lavender-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Journal Personnel</h4>
                      <p className="text-sm text-gray-600">Outil de suivi personnalisé pour vos migraines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="text-lavender-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800">Communauté</h4>
                      <p className="text-sm text-gray-600">Forum privé pour échanger avec d'autres membres</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-lavender-100 to-teal-100 rounded-xl p-6 border border-lavender-200">
                <blockquote className="text-gray-700 italic mb-4">
                  "L'espace membre m'a permis de mieux comprendre mes déclencheurs et de réduire significativement la fréquence de mes migraines."
                </blockquote>
                <div className="text-sm text-gray-600">
                  — Marie, membre depuis 6 mois
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberArea;
