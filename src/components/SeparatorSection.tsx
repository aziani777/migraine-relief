

const SeparatorSection = () => {
  return (
    <section className="relative h-80 bg-gradient-to-r from-teal-600 to-lavender-600 overflow-hidden z-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/1d87af3d-435b-4b75-a9ba-389ec7a397aa.png')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-lavender-600" />
      
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center z-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate">
            Knowledge is Your Best Defense
          </h2>
          <p className="text-xl text-white/90 scroll-animate">
            Understanding migraine empowers you to take control and find relief through informed choices.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default SeparatorSection;

