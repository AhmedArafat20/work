import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="aboutus">
      <div className="bg-{#f5ebe0} container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            تخفيضات لفترة محدودة
          </h2>
          <ul
            className="text-gray-600 arabic-text text-xl grid grid-cols-1 md:grid-cols-2 gap-4"
            data-aos="fade-up"
          >
            <li>تركيب زجاج للمحلات التجاريه</li>
            <li>تركيب زجاج دبل استركشر</li>
            <li>تركيب كلادينج</li>
            <li>تركيب زجاج للمكاتب الادارية</li>
            <li>تركيب نوافذ زجاج سيكوريت</li>
            <li>تركيب شورات زجاج سيكوريت</li>
            <li>تركيب زجاج سيكوريت للمنازل</li>
            <li>تركيب الابواب الزجاج للفنادق</li>
            <li>تركيب قواطع زجاج سيكوريت</li>
            <li>تفصيل طاولات زجاج سيكوريت</li>
            <li>تغير مكائن الابواب مع الضمان</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
