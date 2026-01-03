class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                
                // Main Title
                'nav.title': 'Musab Alradi | Full Stack Developer',

                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.services': 'Services',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact',

                // Hero Section
                'hero.welcome': 'Hello, I\'m',
                'hero.name': 'Musab Alradi',
                'hero.title': 'Full Stack Developer',
                'hero.description': 'A full stack developer specializing in web and mobile application development using the latest technologies. I have extensive experience in designing and developing innovative software solutions that meet client needs.',
                'hero.download': 'Download CV',
                'hero.contact': 'Contact Me',
                
                // About Section
                'about.title': 'About Me',
                'about.experience': 'Years Experience',
                'about.para1': 'I am Musab Alradi, a professional software developer with over 8+ years of experience in software development. I specialize in web and mobile application development using the latest technologies. I have extensive experience in designing and developing innovative software solutions that meet client needs.',
                'about.para2': 'I work on transforming ideas into effective software solutions with a focus on user experience, high performance, and security. I have a strong passion for learning new technologies and continuously improving my skills.',
                'about.skills': 'Technical Skills',
                'about.projects': 'Projects Completed',
                'about.clients': 'Happy Clients',
                'about.success': 'Success Rate',
                
                // Services Section
                'services.title': 'Services I Provide',
                'services.web.title': 'Web Development',
                'services.web.desc': 'Design and develop integrated websites and web applications using the latest technologies.',
                'services.mobile.title': 'Mobile Applications',
                'services.mobile.desc': 'Develop mobile applications for iOS and Android using Flutter and React Native.',
                'services.software.title': 'Software Development',
                'services.software.desc': 'Building custom software systems that meet unique business requirements.',
                'services.database.title': 'Database Management',
                'services.database.desc': 'Designing and managing databases and optimizing query performance.',
                
                // Projects Section
                'projects.title': 'Previous Projects',
                'projects.project1.title': 'Store Management System',
                'projects.project1.desc': 'Integrated system for managing inventory, sales, and employees in stores.',
                'projects.project2.title': 'Food Delivery Application',
                'projects.project2.desc': 'Mobile application that connects restaurants to customers with an order tracking system.',
                'projects.project3.title': 'Educational Platform',
                'projects.project3.desc': 'Platform for educational courses with a progress tracking system and tests.',
                
                // Contact Section
                'contact.title': 'Contact Me',
                'contact.email': 'Email',
                'contact.phone': 'Phone Number',
                'contact.location': 'Location',
                'contact.map': 'Sudan, Sinnar',
                'contact.form.name': 'Full Name',
                'contact.form.email': 'Email Address',
                'contact.form.message': 'Your Message',
                'contact.form.submit': 'Send Message',
                
                // Footer
                'footer.copyright': '© 2024 Musab Alradi. All rights reserved.',
                
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.services': 'Services',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact'
            },
            ar: {
                
                // العنوان الرئيسي
                'nav.title': 'مصعب الرضي | مطور برامج متكامل',

                // القائمة
                'nav.home': 'الصفحة الرئيسية',
                'nav.about': 'عنّي',
                'nav.services': 'خدمات',
                'nav.projects': 'مشاريع',
                'nav.contact': 'اتصل بي',
                
                // Hero Section
                'hero.welcome': 'مرحباً، أنا',
                'hero.name': 'مصعب الرضي',
                'hero.title': 'مطور برامج متكامل',
                'hero.description': 'مطور برامج متكامل متخصص في تطوير تطبيقات الويب والجوال باستخدام أحدث التقنيات. لدي خبرة واسعة في تصميم وتطوير حلول برمجية مبتكرة تلبي احتياجات العملاء.',
                'hero.download': 'تحميل السيرة الذاتية',
                'hero.contact': 'اتصل بي',
                
                // About Section
                'about.title': 'عنّي',
                'about.experience': 'سنوات خبرة',
                'about.para1': 'أنا مصعب الرضي، مطور برامج محترف بأكثر من 8+ سنوات من الخبرة في مجال تطوير البرمجيات. أتخصص في تطوير تطبيقات الويب والجوال باستخدام أحدث التقنيات. لدي خبرة واسعة في تصميم وتطوير حلول برمجية مبتكرة تلبي احتياجات العملاء.',
                'about.para2': 'أعمل على تحويل الأفكار إلى حلول برمجية فعالة مع التركيز على تجربة المستخدم والأداء العالي والأمان. لدي شغف كبير لتعلم التقنيات الجديدة وتحسين مهاراتي باستمرار.',
                'about.skills': 'المهارات التقنية',
                'about.projects': 'مشروع مكتمل',
                'about.clients': 'عميل سعيد',
                'about.success': 'معدل النجاح',
                
                // Services Section
                'services.title': 'الخدمات التي أقدمها',
                'services.web.title': 'تطوير الويب',
                'services.web.desc': 'تصميم وتطوير مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات.',
                'services.mobile.title': 'تطبيقات الجوال',
                'services.mobile.desc': 'تطوير تطبيقات جوال لأنظمة iOS و Android باستخدام Flutter و React Native.',
                'services.software.title': 'تطوير البرمجيات',
                'services.software.desc': 'بناء أنظمة برمجية مخصصة تلبي متطلبات العمل الفريدة.',
                'services.database.title': 'إدارة قواعد البيانات',
                'services.database.desc': 'تصميم وإدارة قواعد البيانات وتحسين أداء الاستعلامات.',
                
                // Projects Section
                'projects.title': 'المشاريع السابقة',
                'projects.project1.title': 'نظام إدارة المتاجر',
                'projects.project1.desc': 'نظام متكامل لإدارة المخزون والمبيعات والموظفين في المتاجر.',
                'projects.project2.title': 'تطبيق توصيل الطعام',
                'projects.project2.desc': 'تطبيق جوال يربط المطاعم بالعملاء مع نظام تتبع الطلبات.',
                'projects.project3.title': 'منصة تعليمية',
                'projects.project3.desc': 'منصة للدورات التعليمية مع نظام تتبع التقدم والاختبارات.',
                
                // Contact Section
                'contact.title': 'اتصل بي',
                'contact.email': 'البريد الإلكتروني',
                'contact.phone': 'رقم الهاتف',
                'contact.location': 'الموقع',
                'contact.map': 'السودان، سنار',
                'contact.form.name': 'الاسم الكامل',
                'contact.form.email': 'البريد الإلكتروني',
                'contact.form.message': 'رسالتك',
                'contact.form.submit': 'إرسال الرسالة',
                
                // Footer
                'footer.copyright': '© 2024 مصعب الرضي. جميع الحقوق محفوظة.',
                
                // Navigation
                'nav.home': 'الرئيسية',
                'nav.about': 'عنّي',
                'nav.services': 'الخدمات',
                'nav.projects': 'المشاريع',
                'nav.contact': 'اتصل'
            }
        };
        
        this.init();
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
        
        // Update active button state
        this.updateActiveButton();
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        
        // Update HTML dir attribute for RTL support
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        this.updateTextContent();
        
        // Update form placeholders
        this.updatePlaceholders();
        
        // Update active button
        this.updateActiveButton();
        
        // Save to localStorage
        localStorage.setItem('language', lang);
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }
    
    updateTextContent() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
    }
    
    updatePlaceholders() {
        // Update form placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (this.translations[this.currentLang][key]) {
                element.placeholder = this.translations[this.currentLang][key];
            }
        });
    }
    
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    translate(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});