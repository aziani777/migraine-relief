
import { useState, useEffect } from 'react';
import { Clock, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EbookOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 17,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-lavender-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-teal-200 shadow-xl">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-br-lg">
              <span className="font-bold text-sm">LIMITED TIME OFFER</span>
            </div>
            
            <CardContent className="p-8 pt-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="text-teal-600" size={24} />
                    <span className="text-teal-600 font-semibold">EXCLUSIVE EBOOK</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    28-Day Natural Migraine Relief Program
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Meal Plans & Lifestyle Guide
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                    <span className="text-gray-600 ml-2">(127 reviews)</span>
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-bold text-teal-600">5.99€</span>
                    <span className="text-xl text-gray-500 line-through">29.99€</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                      80% OFF
                    </span>
                  </div>
                  
                  <Button className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-lg px-8 py-3">
                    Download Now
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="text-red-500" size={20} />
                    <span className="text-red-500 font-semibold">Offer expires in:</span>
                  </div>
                  
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="bg-gray-800 text-white rounded-lg p-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs uppercase">Hours</div>
                    </div>
                    <div className="bg-gray-800 text-white rounded-lg p-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs uppercase">Minutes</div>
                    </div>
                    <div className="bg-gray-800 text-white rounded-lg p-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs uppercase">Seconds</div>
                    </div>
                  </div>
                  
                  <div className="bg-lavender-100 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What's included:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 28-day meal plan</li>
                      <li>• Natural remedies guide</li>
                      <li>• Lifestyle modification tips</li>
                      <li>• Trigger identification worksheet</li>
                      <li>• Progress tracking templates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EbookOfferSection;
