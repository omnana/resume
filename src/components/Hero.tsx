import { siteTexts } from '../data/texts';

const Hero = () => {
  const { greeting, name, description, buttons } = siteTexts.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white pt-16 sm:pt-20 md:pt-24">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/img_1.png" 
              alt="个人头像" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
          {greeting}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {name}
          </span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto px-4">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
            {buttons.viewProjects}
          </a>
          <a href="#contact" className="px-8 py-3 border border-gray-400 text-black rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
            {buttons.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
