import { motion } from "framer-motion";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img22 from '../assets/img22.jpg'
import img23 from '../assets/img23.jpg'
import img25 from '../assets/img25.jpg'
import img26 from '../assets/img26.jpg'
import img28 from '../assets/img28.jpg'
import img29 from '../assets/img29.jpg'
import img30 from '../assets/img30.jpg'
import img31 from '../assets/img31.jpg'
import img32 from '../assets/img32.jpg'
import img33 from '../assets/img33.jpg'
import img34 from '../assets/img34.jpg'
import img39 from '../assets/img39.jpg'
import img40 from '../assets/img40.jpg'
import img41 from '../assets/img41.jpg'
import img42 from '../assets/img42.jpg'
import img60 from '../assets/img60.jpg'
import img61 from '../assets/img61.jpg'
import img62 from '../assets/img62.jpg'
import img63 from '../assets/img63.jpg'
import img64 from '../assets/img64.jpg'
import img65 from '../assets/img65.jpg'
import img66 from '../assets/img66.jpg'
import img67 from '../assets/img67.jpg'
import img68 from '../assets/img68.jpg'
import img69 from '../assets/img69.jpg'



const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gray-100" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center arabic-text text-gray-800 mb-8">بعض اعمالنا</h2>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">زجاج سيكوريت 12 ملي</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[img1, img2, img3, img4, img5, img7, img6, img8, img10, img9, img11, img12].map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-11">زجاج سيكوريت دبل استركشر</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[img22, img23, img25, img30 , img29, img26,  img28, img32, img34, img31, img33, img39, img41, img40, img42].map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-11">الالمنيوم و الكلادينج</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[img61, img62, img60, img63 , img64, img65,  img66, img67, img68, img69].map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
