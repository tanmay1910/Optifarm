import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export const About: React.FC = () => {
  return <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={logo} />
        <div className="flex justify-center">
          <Link to="recommendations">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get crop recommendation</button>
          </Link>
        </div>
      </div>
      <div className="lg:flex-grow md:w-1/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">OptiFarm
          {/* <br className="hidden lg:inline-block" />Some text */}
        </h1>
        <p>
          The agriculture sector in India is vast and diverse, with numerous factors affecting crop yield and quality. Farmers often face challenges in selecting the right crops for their specific regions, considering factors such as soil type, climate, and companion planting. Additionally, there is a need for sustainable and eco-friendly farming practices. This Crop Recommendation application will provide personalized crop recommendations to farmers. It will consider various environmental factors and best practices for companion planting, ultimately assisting farmers in making informed decisions that lead to improved crop yields, reduced environmental impact, and enhanced sustainability in Indian agriculture.
        </p>
        <br>
        </br>
        <strong>Our Mission</strong>
        <p>Our mission is to revolutionize agriculture by making advanced farming techniques accessible to every farmer. We aim to improve crop yields, reduce environmental impact, and enhance the livelihoods of farming communities.</p>
        <br>
        </br>
        <strong>Meet the Team</strong>
        <p>
          Our team comprises experienced agronomists, data scientists, and developers who share a common goal: to empower farmers with knowledge and technology.</p>
        <ul>
          <li><strong>Tanmay Patil</strong></li>
          <li><strong>Raunak Jaiswal</strong></li>
          <li><strong>Anushka Suryawanshi</strong></li>
          <li><strong>Pooja Pandey</strong></li>
          <li><strong>Shuv Pranjal</strong></li>
          <li><strong>Mohit Mundra</strong></li>
          <li><strong>Ashwini Jadhav</strong></li>
          <li><strong>Gandharv Sachdeva</strong></li>
          <li><strong>Geetanjali Shaligram</strong></li>
        </ul>
      </div>
    </div>
  </section>
  };
