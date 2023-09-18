import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export const About: React.FC = () => {
  return <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={logo} />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">OptiFarm
          {/* <br className="hidden lg:inline-block" />Some text */}
        </h1>
        <p className="mb-8 leading-relaxed">
          The agriculture sector in India is vast and diverse, with numerous factors affecting crop yield and quality. Farmers often face challenges in selecting the right crops for their specific regions, considering factors such as soil type, climate, and companion planting. Additionally, there is a need for sustainable and eco-friendly farming practices. This Crop Recommendation application will provide personalized crop recommendations to farmers. It will consider various environmental factors and best practices for companion planting, ultimately assisting farmers in making informed decisions that lead to improved crop yields, reduced environmental impact, and enhanced sustainability in Indian agriculture.
        </p>
        <div className="flex justify-center">
          <Link to="recommendations">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get crop recommendation</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
};
