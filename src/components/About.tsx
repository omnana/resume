import { skills } from '../data/skills';
import { siteTexts } from '../data/texts';

const About = () => {
  const { title, introduction, skills: skillsText } = siteTexts.about;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {introduction.paragraph1}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {introduction.paragraph2}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">{skillsText.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h4 className="text-black font-medium">{skill.name}</h4>
                  <p className="text-gray-600 text-sm">{skill.category}</p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ 
                          width: skill.level === 'expert' ? '100%' : 
                                 skill.level === 'advanced' ? '80%' : 
                                 skill.level === 'intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
