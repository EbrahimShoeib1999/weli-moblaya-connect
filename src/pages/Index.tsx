import { motion } from "framer-motion";
import { 
  Map, 
  UserCheck, 
  Star, 
  Gift, 
  Smartphone, 
  Package,
  Download,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: Map,
      title: "خريطة معارض دمياط",
      description: "خريطة تفاعلية تعرض أماكن جميع المعارض والورش في دمياط"
    },
    {
      icon: UserCheck,
      title: "متخصص يرافق العميل",
      description: "شخص محترف من دمياط يساعدك من أول ما توصل لحد ما تشتري"
    },
    {
      icon: Star,
      title: "تقييم المعارض",
      description: "اطلع على تقييمات وتعليقات العملاء السابقين"
    },
    {
      icon: Gift,
      title: "برامج ولاء ونقاط",
      description: "احصل على نقاط مع كل عملية شراء واستبدلها بإكسسوارات"
    },
    {
      icon: Smartphone,
      title: "معاينة بتقنية AR + AI",
      description: "شوف الموبليا في أوضتك قبل ما تشتريها باستخدام الواقع المعزز"
    },
    {
      icon: Package,
      title: "تتبع مراحل التصنيع",
      description: "تابع طلبك من النجارة للدهان للتشطيب للتركيب"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      location: "القاهرة",
      text: "تجربة رائعة! المتخصص اللي رافقني كان محترف جداً وساعدني اختار أفضل قطع موبليا بسعر ممتاز.",
      rating: 5
    },
    {
      name: "فاطمة حسن",
      location: "الإسكندرية",
      text: "التطبيق سهل وعملي، تتبعت شغلي من أول يوم لحد ما وصلني البيت. ممتازين!",
      rating: 5
    },
    {
      name: "محمود عبد الله",
      location: "المنصورة",
      text: "أول مرة أشتري موبليا من دمياط بالسهولة دي. التقنية الجديدة خلتني أشوف الموبليا في بيتي قبل الشراء.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-wood-medium to-wood-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src={logo}
              alt="وصلني موبليا دمياط"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full shadow-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              من دمياط... الموبليا توصلك لحد باب بيتك
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              اكتشف أفضل معارض الموبليا في دمياط، احجز متخصص يرافقك، وتتبع طلبك خطوة بخطوة
            </motion.p>
            
            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-8 py-6 shadow-elegant">
                <Download className="ml-2 h-6 w-6" />
                حمل التطبيق الآن
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-6">
                شاهد الفيديو
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-cream">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              عن التطبيق
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              <span className="font-semibold text-primary">وصلني موبليا دمياط</span> هو التطبيق الأول من نوعه اللي بيوصلك بأفضل معارض وورش الموبليا في دمياط. 
              مش بس كده، ده بيوفرلك متخصص يرافقك ويساعدك في الاختيار، وبتقدر تتابع شغلك من أول نجارة لحد التركيب في بيتك.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">خريطة تفاعلية</h3>
                <p className="text-muted-foreground">اكتشف جميع المعارض والورش على الخريطة</p>
              </Card>
              <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">متخصصين محترفين</h3>
                <p className="text-muted-foreground">احجز متخصص يساعدك من البداية للنهاية</p>
              </Card>
              <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">تتبع الطلب</h3>
                <p className="text-muted-foreground">تابع شغلك لحظة بلحظة</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              مميزات التطبيق
            </h2>
            <p className="text-xl text-muted-foreground">
              كل اللي تحتاجه في مكان واحد
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="p-8 h-full hover:shadow-elegant transition-smooth group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-wood-medium rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AR Feature Highlight */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-blue-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-8 md:p-12 shadow-elegant bg-white/80 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    تقنية حديثة
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    شوف الموبليا في بيتك قبل ما تشتري
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    باستخدام تقنية الواقع المعزز والذكاء الاصطناعي، ارفع صورة غرفتك والتقط صورة الموديل في المعرض، 
                    وشوف شكل الموبليا في مكانها الحقيقي قبل الشراء!
                  </p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-accent mb-1">1</div>
                      <p className="text-sm text-muted-foreground">ارفع صورة غرفتك</p>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-accent mb-1">2</div>
                      <p className="text-sm text-muted-foreground">صور الموديل</p>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-accent mb-1">3</div>
                      <p className="text-sm text-muted-foreground">شاهد النتيجة</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 shadow-elegant">
                    <Smartphone className="w-full h-64 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              آراء عملائنا
            </h2>
            <p className="text-xl text-muted-foreground">
              شوف تجارب العملاء اللي استخدموا التطبيق
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="p-6 h-full shadow-soft hover:shadow-elegant transition-smooth">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-wood-medium to-wood-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              جاهز تبدأ رحلتك؟
            </h2>
            <p className="text-xl text-white/90 mb-12">
              حمل التطبيق دلوقتي واستمتع بأفضل تجربة شراء موبليا من دمياط
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-elegant">
                <Download className="ml-2 h-6 w-6" />
                تحميل للأندرويد
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-elegant">
                <Download className="ml-2 h-6 w-6" />
                تحميل للآيفون
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-white" />
                <span>4.8 تقييم</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>+10,000 تحميل</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={logo} alt="وصلني موبليا دمياط" className="w-24 h-24 rounded-full mb-4" />
              <p className="text-white/70">
                التطبيق الأول لربط العملاء بأفضل معارض وورش الموبليا في دمياط
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-smooth">الرئيسية</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">عن التطبيق</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">المميزات</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">الأسعار</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">الدعم</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-smooth">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">الشروط والأحكام</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/70">
                  <Phone className="w-5 h-5" />
                  <span>01000000000</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <Mail className="w-5 h-5" />
                  <span>info@wasalni.com</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-5 h-5" />
                  <span>دمياط، مصر</span>
                </li>
              </ul>
              
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 وصلني موبليا دمياط. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
