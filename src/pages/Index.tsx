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
  Youtube,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  const features = [
    {
      icon: Map,
      title: "خريطة معارض دمياط",
      description: "خريطة تفاعلية تعرض أماكن جميع المعارض والورش في دمياط مع إمكانية البحث والتصفية",
      color: "from-primary to-wood-medium"
    },
    {
      icon: UserCheck,
      title: "متخصص يرافق العميل",
      description: "شخص محترف من دمياط يساعدك من أول ما توصل لحد ما تشتري ويضمن لك أفضل الأسعار",
      color: "from-accent to-blue-accent"
    },
    {
      icon: Star,
      title: "تقييم المعارض",
      description: "اطلع على تقييمات وتعليقات العملاء السابقين واختار المعرض الأنسب ليك",
      color: "from-wood-medium to-wood-dark"
    },
    {
      icon: Gift,
      title: "برامج ولاء ونقاط",
      description: "احصل على نقاط مع كل عملية شراء واستبدلها بإكسسوارات ومنتجات مكملة",
      color: "from-primary to-accent"
    },
    {
      icon: Smartphone,
      title: "معاينة بتقنية AR + AI",
      description: "شوف الموبليا في أوضتك قبل ما تشتريها باستخدام الواقع المعزز والذكاء الاصطناعي",
      color: "from-blue-accent to-accent"
    },
    {
      icon: Package,
      title: "تتبع مراحل التصنيع",
      description: "تابع طلبك لحظة بلحظة من النجارة للدهان للتشطيب للتركيب في بيتك",
      color: "from-wood-dark to-primary"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      location: "القاهرة",
      text: "تجربة رائعة! المتخصص اللي رافقني كان محترف جداً وساعدني اختار أفضل قطع موبليا بسعر ممتاز. التطبيق سهل وفعلاً وفر عليا وقت وفلوس كتير.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"
    },
    {
      name: "فاطمة حسن",
      location: "الإسكندرية",
      text: "التطبيق سهل وعملي، تتبعت شغلي من أول يوم لحد ما وصلني البيت. الموبليا جت في الميعاد بالظبط وبجودة عالية. ممتازين فعلاً!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"
    },
    {
      name: "محمود عبد الله",
      location: "المنصورة",
      text: "أول مرة أشتري موبليا من دمياط بالسهولة دي. التقنية الجديدة خلتني أشوف الموبليا في بيتي قبل الشراء. فكرة عبقرية!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud"
    }
  ];

  const stats = [
    { number: "10,000+", label: "عميل راضي" },
    { number: "500+", label: "معرض وورشة" },
    { number: "4.8", label: "تقييم التطبيق" },
    { number: "98%", label: "نسبة الرضا" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-wood-medium to-wood-dark">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={logo}
                alt="وصلني موبليا دمياط"
                className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full shadow-2xl relative z-10 border-4 border-white/20"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Badge variant="premium" className="mb-4 text-base px-4 py-2">
                <Sparkles className="w-4 h-4 ml-2" />
                التطبيق الأول من نوعه
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              من دمياط... الموبليا توصلك
              <br />
              <span className="text-cream">لحد باب بيتك</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
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
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button size="xl" variant="hero">
                <Download className="ml-2 h-6 w-6" />
                حمل التطبيق الآن
              </Button>
              <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10">
                <ArrowRight className="ml-2 h-6 w-6" />
                شاهد الفيديو
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 backdrop-blur-md">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
      <section className="py-24 bg-gradient-to-b from-background to-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge variant="accent" className="mb-4 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 ml-2" />
              عن التطبيق
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">حل متكامل لشراء الموبليا</span>
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              <span className="font-semibold text-primary">وصلني موبليا دمياط</span> هو التطبيق الأول من نوعه اللي بيوصلك بأفضل معارض وورش الموبليا في دمياط. 
              مش بس كده، ده بيوفرلك متخصص يرافقك ويساعدك في الاختيار، وبتقدر تتابع شغلك من أول نجارة لحد التركيب في بيتك.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: MapPin, title: "خريطة تفاعلية", desc: "اكتشف جميع المعارض والورش", color: "bg-gradient-to-br from-primary to-wood-medium" },
              { icon: UserCheck, title: "متخصصين محترفين", desc: "احجز متخصص يساعدك", color: "bg-gradient-to-br from-accent to-blue-accent" },
              { icon: Package, title: "تتبع الطلب", desc: "تابع شغلك لحظة بلحظة", color: "bg-gradient-to-br from-wood-medium to-wood-dark" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 shadow-soft card-hover border-0 bg-white/80 backdrop-blur-sm">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-elegant`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4 text-sm px-4 py-2">
              <Star className="w-4 h-4 ml-2 fill-current" />
              المميزات
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">كل اللي تحتاجه في مكان واحد</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نوفرلك تجربة شاملة ومتكاملة لشراء الموبليا من دمياط بكل سهولة واحترافية
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <Card className="p-8 h-full card-hover border-0 shadow-soft group bg-white">
                  <CardHeader className="p-0 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-soft`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AR Feature Highlight */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-blue-accent/5 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-elegant bg-white/90 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <CardContent className="p-8 md:p-12">
                  <Badge variant="premium" className="mb-4 text-sm px-4 py-2">
                    <Sparkles className="w-4 h-4 ml-2" />
                    تقنية حديثة
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient-accent">شوف الموبليا في بيتك</span>
                    <br />
                    قبل ما تشتري
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    باستخدام تقنية الواقع المعزز والذكاء الاصطناعي، ارفع صورة غرفتك والتقط صورة الموديل في المعرض، 
                    وشوف شكل الموبليا في مكانها الحقيقي قبل الشراء!
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { num: "1", text: "ارفع صورة غرفتك" },
                      { num: "2", text: "صور الموديل" },
                      { num: "3", text: "شاهد النتيجة" }
                    ].map((step, i) => (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-2 mx-auto shadow-soft">
                          {step.num}
                        </div>
                        <p className="text-xs text-muted-foreground">{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" variant="accent">
                    جرب الآن
                    <ArrowRight className="mr-2 h-5 w-5" />
                  </Button>
                </CardContent>
                <div className="relative p-8 md:p-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-accent rounded-3xl blur-2xl opacity-20"></div>
                    <div className="relative bg-gradient-to-br from-accent to-blue-accent rounded-3xl p-12 shadow-elegant">
                      <Smartphone className="w-full h-64 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background to-cream">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4 text-sm px-4 py-2">
              <Star className="w-4 h-4 ml-2 fill-current" />
              التقييمات
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">آراء عملائنا</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              شوف تجارب العملاء اللي استخدموا التطبيق
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
              >
                <Card className="p-8 h-full shadow-soft card-hover border-0 bg-white">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full shadow-soft"
                      />
                      <div>
                        <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/80 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-wood-medium to-wood-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="premium" className="mb-6 text-base px-6 py-2">
              <Download className="w-5 h-5 ml-2" />
              حمل التطبيق الآن
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              جاهز تبدأ رحلتك؟
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              حمل التطبيق دلوقتي واستمتع بأفضل تجربة شراء موبليا من دمياط
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Button size="xl" variant="hero">
                <Download className="ml-2 h-6 w-6" />
                تحميل للأندرويد
              </Button>
              <Button size="xl" variant="hero">
                <Download className="ml-2 h-6 w-6" />
                تحميل للآيفون
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Star, text: "4.8 تقييم" },
                { icon: Download, text: "+10,000 تحميل" },
                { icon: CheckCircle2, text: "98% رضا العملاء" },
                { icon: Sparkles, text: "تحديثات دورية" }
              ].map((item, i) => (
                <div key={i} className="glass-effect rounded-2xl p-6 backdrop-blur-md">
                  <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-white/90 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="وصلني موبليا دمياط" className="w-16 h-16 rounded-full" />
                <div className="font-bold text-xl">وصلني موبليا دمياط</div>
              </div>
              <p className="text-white/70 leading-relaxed">
                التطبيق الأول لربط العملاء بأفضل معارض وورش الموبليا في دمياط
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                روابط سريعة
              </h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />الرئيسية</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />عن التطبيق</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />المميزات</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />الأسعار</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                الدعم
              </h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-smooth flex items-center gap-2"><ArrowRight className="w-4 h-4" />الشروط والأحكام</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                تواصل معنا
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/70 hover:text-white transition-smooth">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>01000000000</span>
                </li>
                <li className="flex items-center gap-3 text-white/70 hover:text-white transition-smooth">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@wasalni.com</span>
                </li>
                <li className="flex items-center gap-3 text-white/70 hover:text-white transition-smooth">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>دمياط، مصر</span>
                </li>
              </ul>
              
              <div className="flex gap-3 mt-6">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-smooth shadow-soft hover:shadow-elegant"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
            <p>© 2024 وصلني موبليا دمياط. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-2">
              <span>صنع بـ</span>
              <span className="text-red-400">❤️</span>
              <span>في مصر</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
