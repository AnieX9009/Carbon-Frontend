import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import { motion } from "framer-motion";
import { FaLinkedin, FaLeaf, FaTree, FaRecycle, FaGlobeAmericas } from 'react-icons/fa';

const bannerContent = {
  backgroundImage: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  title: "Our Dream Team",
  subtitle: "Dedicated professionals working towards a sustainable future",
};

interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedin: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const DreamTeam = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Rajiv K. Chechi",
      title: "",
      image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1750662106/Screenshot-2024-11-12-at-9.33.59_PM_1_jpmzbw.png",
      linkedin: "https://www.linkedin.com/in/dr-rajiv-k-74ba0b57/",
    },
    {
      name: "Dr. Vanadeep Kaluvagunta",
      title: "",
      image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1750663203/Screenshot-2024-11-12-at-9.56.32_PM_1_yv4tuo.png",
      linkedin: "https://www.linkedin.com/in/drkvanadeep/",
    },
    {
      name: "Surbhi Hirawat",
      title: "",
      image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1750662369/Screenshot-2024-11-12-at-9.31.49_PM-e1731465717983_1_czye6w.png",
      linkedin: "https://www.linkedin.com/in/surbhihirawat/",
    },
    {
      name: "Siddhant Bhandari",
      title: "Head of IT Infrastructure and Security",
      image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1750662714/upscaled_image_etafqo.png",
      linkedin: "https://www.linkedin.com/in/siddhantbhandari1/",
    },

  ];

  const handleViewProfile = (linkedinUrl: string) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <SmoothScroll>
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Navbar />

        {/* Hero Banner */}
        <div
          style={{
            backgroundImage: `url('${bannerContent.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative overflow-hidden"
        >
          <div className="text-center z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {bannerContent.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            >
              {bannerContent.subtitle}
            </motion.p>
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              {bannerContent.cta}
            </motion.button> */}
          </div>

          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <img src={curve} className="absolute bottom-0 w-full z-20" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Introduction */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-16 md:mb-24 max-w-5xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
              Meet Our Sustainability Champions
            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-xl md:text-2xl text-gray-600">
              A team dedicated to creating impactful carbon offset solutions and environmental conservation
            </motion.h3>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <FaRecycle className="text-green-500 text-3xl mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800">15+</p>
              <p className="text-gray-600">Sustainability Projects</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <FaGlobeAmericas className="text-green-500 text-3xl mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800">200+</p>
              <p className="text-gray-600">Carbon Offset Tons</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <FaTree className="text-green-500 text-3xl mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800">500+</p>
              <p className="text-gray-600">Trees Planted</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <FaLeaf className="text-green-500 text-3xl mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-800">100%</p>
              <p className="text-gray-600">Passionate Team</p>
            </motion.div>
          </motion.section>

          {/* Team Members */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]"> {/* Added flex container with fixed height */}
                  <div className="flex justify-between items-start flex-grow"> {/* Added flex-grow */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      {member.title && <p className="text-green-600">{member.title}</p>} {/* Only render if title exists */}
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                  <div className="mt-4"> {/* Changed from mt-6 to mt-4 for consistent spacing */}
                    <button
                      onClick={() => handleViewProfile(member.linkedin)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Mission Statement */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-7xl mx-auto mt-16 bg-green-600 rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Nature conservation"
                />
              </div>
              <div className="p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6">
                  We are committed to creating a sustainable future through innovative carbon offset solutions and environmental conservation efforts.
                </p>
                <p className="text-lg">
                  Our team combines expertise across multiple disciplines to develop comprehensive strategies for reducing carbon footprints and promoting ecological balance.
                </p>
                {/* <button className="mt-8 bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                  Join Our Initiative
                </button> */}
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 rounded-lg p-6 text-center"
                >
                  <FaLeaf className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h4>
                  <p className="text-gray-600">Creating solutions that last for generations</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 rounded-lg p-6 text-center"
                >
                  <FaTree className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-gray-600">Pioneering new approaches to carbon offset</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 rounded-lg p-6 text-center"
                >
                  <FaGlobeAmericas className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Impact</h4>
                  <p className="text-gray-600">Measuring success by real environmental change</p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default DreamTeam;