import { siteTexts } from '../data/texts';

const Header = () => {
  const { title, navigation } = siteTexts.header;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-black truncate">{title}</h1>
          <div className="flex flex-wrap justify-end items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 ml-2">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">{navigation.home}</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">{navigation.about}</a>
            <a href="#projects" className="text-gray-600 hover:text-black transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">{navigation.projects}</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">{navigation.contact}</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
