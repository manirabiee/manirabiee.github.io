import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const navItems = [
  { name: 'خانه', path: '/', scrollTo: 'home' },
  { name: 'درباره ما', path: '/#about', scrollTo: 'about' },
  { name: 'خدمات مدرسه', path: '/#services', scrollTo: 'services' },
  { name: 'تصاویر', path: '/#portfolio', scrollTo: 'portfolio' },
  { name: 'اخبار مدرسه', path: '/#blog', scrollTo: 'blog' },
  { name: 'تماس با ما', path: '/#contact', scrollTo: 'contact' },
];

const services = [
  {
    icon: 'fa-chalkboard-teacher',
    title: 'آموزش هوشمند',
    description: 'کلاس‌های هوشمند با تخته‌های دیجیتال و محتوای تعاملی، یادگیری را جذاب‌تر کرده و فهم مطالب را آسان‌تر می‌کند.',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'دوره‌های تیزهوشان',
    description: 'دانش‌آموزان مستعد در کلاس‌های ویژه، با حل مسائل پیچیده و روش‌های نوین آموزشی، مهارت‌های فکری خود را تقویت می‌کنند.',
  },
  {
    icon: 'fa-flask',
    title: 'فعالیت‌های پژوهشی و آزمایشگاهی',
    description: 'هر هفته دانش‌آموزان در آزمایشگاه مدرسه تحقیق می‌کنند و با انجام آزمایش‌های علمی، مفاهیم را عمیق‌تر درک می‌کنند.',
  },
  {
    icon: 'fa-user-tie',
    title: 'مشاوره و راهنمایی تحصیلی',
    description: 'مشاوران مدرسه هر هفته جلسات مشاوره برگزار می‌کنند تا دانش‌آموزان مسیر تحصیلی و شغلی خود را بهتر بشناسند.',
  },
  {
    icon: 'fa-person-running',
    title: 'ورزش و سلامت',
    description: 'هر شنبه، دانش‌آموزان در زمین ورزشی مدرسه انواع ورزش‌ها را تمرین می‌کنند تا سالم و پرانرژی بمانند.',
  },
  {
    icon: 'fa-trophy',
    title: 'مسابقات و جشنواره‌های سرگرمی و ورزشی',
    description: 'مدرسه هر ماه مسابقات علمی، فرهنگی و ورزشی برگزار می‌کند تا دانش‌آموزان استعدادهای خود را نشان دهند.',
  },
];

const stats = [
  { icon: 'fa-users', count: 400, label: 'تعداد دانش‌آموزان' },
  { icon: 'fa-thumbs-up', count: 800, label: 'فارغ‌التحصیلان موفق' },
  { icon: 'fa-edit', count: 500, label: 'تعداد دبیران مجرب' },
  { icon: 'fa-trophy', count: 100, label: 'مقام‌های رباتیک' },
];

const portfolioItems = [
  { category: 'application', src: '/images/portfolio/img-1.jpg', title: 'فعالیت‌ها' },
  { category: 'application', src: '/images/portfolio/img-2.jpg', title: 'فعالیت‌ها' },
  { category: 'design', src: '/images/portfolio/img-3.jpg', title: 'رباتیک' },
  { category: 'application', src: '/images/portfolio/img-4.jpg', title: 'فعالیت‌ها' },
  { category: 'design', src: '/images/portfolio/img-5.jpg', title: 'رباتیک' },
  { category: 'design', src: '/images/portfolio/img-6.jpg', title: 'رباتیک' },
];

const blogPosts = [
  {
    img: '/images/blog/img-1.jpg',
    title: 'سفر علمی و تفریحی با قطار',
    description: 'دانش‌آموزان مدرسه در یک سفر هیجان‌انگیز علمی و تفریحی با قطار شرکت کردند. تجربه‌ای بی‌نظیر برای یادگیری، دوستی و ماجراجویی در کنار هم‌کلاسی‌ها! در نهایت با خوشی به خانه‌هایشان برمی‌گردند.',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
  {
    img: '/images/blog/img-2.jpg',
    title: 'ایستگاه موفقیت در مسیر دانش',
    description: 'تیمی از دانش‌آموزان مدرسه در یک رویداد علمی شرکت کردند. لحظات پرانرژی، یادگیری‌های جدید و تجربه‌های فراموش‌نشدنی در کنار دوستان و مربیان رقم خورد.',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
  {
    img: '/images/blog/img-3.jpg',
    title: 'افتخارآفرینی در المپیاد تکنولوژی',
    description: 'تلاش و پشتکار دانش‌آموزان مدرسه در المپیاد تکنولوژی به ثمر نشست! با کسب جوایز ارزشمند، گامی مهم در مسیر موفقیت علمی خود برداشتند. تبریک به همه شرکت‌کنندگان!',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
  {
    img: '/images/blog/img-4.jpg',
    title: 'سفر علمی دانش‌آموزان',
    description: 'دانش‌آموزان در یک سفر علمی به شهرهای مختلف، تجربه‌ای فراموش‌نشدنی کسب می‌کنند. این سفرها فرصتی برای یادگیری و دوستی‌های جدید فراهم می‌آورد و فرصتی برای رشد آن‌ها هستند.',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
  {
    img: '/images/blog/img-5.jpg',
    title: 'رقابت برنامه‌نویسی در مدرسه',
    description: 'دانش‌آموزان در یک رویداد فناوری مهارت‌های برنامه‌نویسی خود را به چالش می‌کشند. این مسابقات به آن‌ها انگیزه می‌دهد تا خلاقیت و توانایی‌های خود را گسترش دهند.',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
  {
    img: '/images/blog/img-6.jpg',
    title: 'آینده‌سازان موفق',
    description: 'با پشتکار و یادگیری، دانش‌آموزان خود را برای آینده‌ای درخشان آماده می‌کنند. تلاش و هدف‌گذاری، کلید موفقیت در مسیر پیشرفت و دستیابی به رویاها است.',
    date: '22 مرداد 1400',
    link: '/blog/single-blog',
  },
];

const testimonials = [
  {
    name: 'امین سبحانی',
    role: 'مدیر مجموعه',
    text: 'آقای امین سبحانی، مدیر مدرسه نگاه نو، با رویکردی خلاقانه و دلسوزانه محیطی پویا برای رشد دانش‌آموزان فراهم کرده است. تلاش‌های او در بهبود کیفیت آموزشی و تربیتی همواره مورد تحسین قرار گرفته است.',
  },
  {
    name: 'مرتضی عیسی',
    role: 'مشاور پایه هفتم و هشتم',
    text: 'مرتضی عیسی، مشاور پایه هفتم و هشتم مدرسه نگاه نو، با راهنمایی‌های دلسوزانه و حمایت مستمر، دانش‌آموزان را در مسیر پیشرفت تحصیلی و فردی همراهی می‌کند.',
  },
  {
    name: 'محمد امین حدادی',
    role: 'مشاور پایه نهم',
    text: 'آقای حدادی، مشاور پایه نهم مدرسه نگاه نو، با تجربه و دلسوزی، دانش‌آموزان را در مسیر تصمیم‌گیری‌های تحصیلی و شخصی راهنمایی می‌کند.',
  },
  {
    name: 'محمد نوروزی',
    role: 'معاون انضباطی پایه هفتم و هشتم',
    text: 'آقای نوروزی، معاون انضباطی پایه هفتم و هشتم مدرسه نگاه نو، با جدیت و دلسوزی در برقراری نظم و مسئولیت‌پذیری دانش‌آموزان نقش مهمی ایفا می‌کند.',
  },
  {
    name: 'محمد حسن کامبخش',
    role: 'معاون انضباطی پایه نهم',
    text: 'جناب آقای کامبخش، معاون انضباطی پایه نهم مدرسه نگاه نو، با دقت و پشتکار در ایجاد نظم و مسئولیت‌پذیری در بین دانش‌آموزان نقش مؤثری دارد.',
  },
  {
    name: 'علیرضا گلستان',
    role: 'معاون تربیتی',
    text: 'آقای گلستان، معاون انضباطی مدرسه نگاه نو، با جدیت و مسئولیت‌پذیری، محیطی منظم و آرام برای دانش‌آموزان ایجاد کرده است.',
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [filter, setFilter] = useState('*');

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3) newErrors.name = 'نام باید حداقل 3 حرف باشد';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'ایمیل نامعتبر است';
    if (!formData.message) newErrors.message = 'پیام نمی‌تواند خالی باشد';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      alert('پیام با موفقیت ارسال شد!');
    }
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === '*' ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <Router>
      <div className="font-vazir bg-gray-50 text-gray-800">
        {/* Navbar */}
        <motion.nav
          className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">نگاه نو</Link>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.scrollTo)}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Link to="/account" className="flex items-center gap-2 text-purple-600 font-bold">
                <FaUserCircle /> حساب کاربری
              </Link>
            </div>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow-md"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.scrollTo)}
                  className="block w-full text-right py-2 px-4 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/account"
                className="block w-full text-right py-2 px-4 text-purple-600 font-bold hover:bg-purple-50"
              >
                حساب کاربری
              </Link>
            </motion.div>
          )}
        </motion.nav>

        {/* Home Section */}
        <section
          id="home"
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/background/creative2-banner-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              نگاه نو، جایی برای شروع‌های بزرگ
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              مکانی برای رشد، یادگیری و شکوفایی استعدادها
            </motion.p>
            <motion.div
              className="absolute bottom-10 animate-bounce"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaChevronDown className="text-3xl" onClick={() => handleScroll('about')} />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/about-img.jpg"
                  alt="About Negaahe No"
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-purple-600 mb-4">درباره ما</h2>
                <p className="text-gray-600 mb-4">
                  دبیرستان پسرانه‌ی نگاه نو با بیش از ۴۰ سال سابقه درخشان در آموزش و پرورش، همواره در مسیر رشد
                  علمی و تربیتی دانش‌آموزان گام برداشته است. این مجموعه با بهره‌گیری از کادری مجرب و امکانات
                  آموزشی مدرن، محیطی پویا و انگیزشی را برای دانش‌آموزان فراهم می‌کند.
                </p>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">چرا نگاه نو؟</h3>
                <p className="text-gray-600 mb-4">
                  دبیرستان پسرانه‌ی نگاه نو با تکیه بر روش‌های نوین آموزشی و برنامه‌های متنوع پژوهشی، خلاقیت و
                  استعدادهای دانش‌آموزان را شکوفا می‌سازد.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com" target="_blank" className="text-purple-600 hover:text-purple-800">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://t.me/negaah_e_no" target="_blank" className="text-purple-600 hover:text-purple-800">
                    <i className="fab fa-telegram fa-2x"></i>
                  </a>
                  <a href="https://www.instagram.com/negaah_e_no/" target="_blank" className="text-purple-600 hover:text-purple-800">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">خدمات مدرسه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <i className={`fas ${service.icon} text-4xl text-purple-600 mb-4`}></i>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/background/stats-bg.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <i className={`fa ${stat.icon} text-4xl mb-4`}></i>
                  <h3 className="text-3xl font-bold">{stat.count}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">تصاویر</h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => handleFilter('*')}
                className={`px-4 py-2 rounded-full ${filter === '*' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                همه
              </button>
              <button
                onClick={() => handleFilter('design')}
                className={`px-4 py-2 rounded-full ${filter === 'design' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                رباتیک
              </button>
              <button
                onClick={() => handleFilter('application')}
                className={`px-4 py-2 rounded-full ${filter === 'application' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                فعالیت‌ها
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={item.src} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">اخبار مدرسه</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {blogPosts.map((post, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={post.img} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex justify-between items-center">
                        <a href={post.link} className="text-purple-600 hover:underline">مطالعه بیشتر</a>
                        <span className="text-gray-500">{post.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="https://my.madyar.org/Students/SHome" target="_blank" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                سامانه دانش‌آموزی
              </a>
              <a href="/classes" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                کلاس‌های فوق‌برنامه
              </a>
              <a href="/register" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                پیش‌ثبت‌نام 05-1404
              </a>
              <a href="/program" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                برنامه هفتگی 04-1403
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/background/testimonials-bg.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-8">نظرات</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white/90 p-6 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">{testimonial.name}</h3>
                    <span className="text-gray-600 block mb-4">{testimonial.role}</span>
                    <p className="text-gray-800">{testimonial.text}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">تماس با ما</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="نام"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 border-b-2 ${errors.name ? 'border-red-500' : 'border-purple-600'} focus:outline-none focus:border-purple-800`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="ایمیل"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 border-b-2 ${errors.email ? 'border-red-500' : 'border-purple-600'} focus:outline-none focus:border-purple-800`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="چگونه می‌توانیم به شما کمک کنیم؟"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-3 border-b-2 ${errors.message ? 'border-red-500' : 'border-purple-600'} focus:outline-none focus:border-purple-800`}
                  rows="6"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">دبیرستان دوره اول</h3>
                <p>تلفن: 44002078 - 44002077</p>
                <p>آدرس: بلوار فردوس، خیابان رامین جنوبی، کوچه سروی، پلاک 16</p>
                <p>ایمیل: info@negaaheno.ir</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">دبیرستان دوره دوم</h3>
                <p>تلفن: 44020395 - 44020648</p>
                <p>آدرس: آیت‌الله کاشانی، خیابان سلیمی جهرمی، کوچه نسترن شرقی، پلاک 5</p>
                <p>ایمیل: info@negaaheno.ir</p>
              </div>
            </div>
            <hr className="my-8 border-gray-600" />
            <p className="text-center">
              طراحی‌شده توسط مجتمع آموزشی{' '}
              <a href="/" className="text-purple-300 hover:underline">
                نگاه نو
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;