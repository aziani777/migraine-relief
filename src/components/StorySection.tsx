

const StorySection = () => {
  return (
    <section id="content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 scroll-animate">
            Why I Started This Site
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  My first attack hit when I was 16—my vision blurred, my hands went numb, 
                  and a blinding head pain that lasted into the next day became my unwanted 
                  introduction to migraine.
                </p>
                
                <p>
                  For years, I struggled alone. Doctors prescribed medications for attacks, 
                  but few talked about prevention. I began researching on my own and uncovered 
                  powerful insights about migraine triggers, nutrition, and natural relief techniques.
                </p>
                
                <p>
                  That's when I decided to create AntiMigraines.net—a space where people like you 
                  can find real advice, practical strategies, and hope.
                </p>
                
                <p className="font-semibold text-teal-700">
                  You're not alone. And you don't have to wait for the next attack to take action.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="italic text-gray-600">
                  Signed,<br />
                  <span className="font-semibold text-gray-900">Marie</span><br />
                  <span className="text-sm text-teal-600">Founder, fellow migraine warrior</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-6 scroll-animate">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <img 
                    src="/lovable-uploads/33d9730a-e8b6-4dc1-a8cf-1be4db71b894.png"
                    alt="Person dealing with migraine pain" 
                    className="w-full h-48 object-cover rounded-lg grayscale"
                  />
                  <p className="text-sm text-gray-500 mt-2">Before: Living with chronic migraine</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-lavender-50 rounded-lg p-6 text-center">
                  <img 
                    src="/lovable-uploads/62a80d13-01b6-4995-8034-2131ef4298e7.png"
                    alt="Person smiling, representing relief" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-sm text-teal-600 mt-2 font-medium">After: Finding natural relief strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

