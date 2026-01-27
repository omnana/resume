import { siteTexts } from '../data/texts';

const Contact = () => {
  const { title, introduction, methods } = siteTexts.contact;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          {title}
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700 mb-8 text-lg">
            {introduction}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">✉</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{methods.email.title}</h3>
              <a href={`mailto:${methods.email.address}`} className="text-blue-600 hover:text-blue-500">
                {methods.email.address}
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{methods.github.title}</h3>
              <a 
                href={methods.github.url}
                className="text-blue-600 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {methods.github.display}
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{methods.linkedin.title}</h3>
              <a 
                href={methods.linkedin.url}
                className="text-blue-600 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {methods.linkedin.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
