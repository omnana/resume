import { siteTexts } from '../data/texts';

const Footer = () => {
  const { copyright, builtWith } = siteTexts.footer;

  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-600">
            {copyright}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
