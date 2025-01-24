import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');   
  const [statusClass, setStatusClass] = useState(''); 
  const [isLoading, setIsLoading] = useState(false); 
  const [errors, setErrors] = useState({}); 

  const validateForm = (e) => {
    const newErrors = {};
    
    if (!e.target.name.value) {
      newErrors.name = "الاسم مطلوب";
    }
    if (!e.target.phone.value) {
      newErrors.phone = "الهاتف مطلوب";
    }
    if (!e.target.email.value) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(e.target.email.value)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    if (!e.target.message.value) {
      newErrors.message = "الرسالة مطلوبة";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm(e)) {
      return; 
    }

    setIsLoading(true); 
    setStatusMessage(''); 
    setStatusClass(''); 

    emailjs.sendForm(
      'service_s6q46qj',  
      'template_u24kc6k', 
      e.target,
      'cd6XzKb4a3kF-2J8k'
    )
    .then((result) => {
      console.log(result.text);
      setStatusMessage('تم إرسال الرسالة بنجاح!');
      setStatusClass('text-green-500'); 
      setIsLoading(false); 
    }, (error) => {
      console.log(error.text);
      setStatusMessage('حدث خطأ أثناء الإرسال.');
      setStatusClass('text-red-500'); 
      setIsLoading(false); 
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">الاسم</label>
            <input type="text" id="name" name="name" className="w-full p-2 arabic-text border border-gray-300 rounded" required />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">الهاتف</label>
            <input type="tel" id="phone" name="phone" className="w-full arabic-text p-2 border border-gray-300 rounded" required />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" className="w-full arabic-text p-2 border border-gray-300 rounded" required />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">الرسالة</label>
            <textarea id="message" name="message" className="w-full arabic-text p-2 border border-gray-300 rounded" required></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 arabic-text text-white px-4 py-2 rounded" disabled={isLoading}>
            {isLoading ? 'جاري الإرسال...' : 'إرسال'}
          </button>
        </form>
        {statusMessage && <p className={`mt-4 text-lg ${statusClass}`}>{statusMessage}</p>} {/* عرض الرسالة مع الفئة */}
      </div>
      <div className="w-full md:w-1/2 p-4">
        <iframe
          id="map-section"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6744931008034!2d39.66476799999999!3d24.462076200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95049bcfd3d3%3A0x317a64510e6ac942!2z2LTYsdmD2Kkg2KfZhNmF2K_ZitmG2Kkg2YTZhNiy2KzYp9is!5e0!3m2!1sen!2seg!4v1730908760375!5m2!1sen!2seg" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
