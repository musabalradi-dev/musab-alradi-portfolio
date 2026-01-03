// assets/js/hero-animations.js
class HeroAnimations {
    constructor() {
        this.imageContainer = document.querySelector('.image-container');
        this.profileImage = document.querySelector('.profile-image');
        this.init();
    }
    
    init() {
        this.addMouseTracking();
        this.addScrollEffects();
        this.addClickEffects();
        this.addParallaxEffect();
        this.addTechBadgeHover();
    }
    
    // تتبع حركة الماوس
    addMouseTracking() {
        this.imageContainer.addEventListener('mousemove', (e) => {
            const rect = this.imageContainer.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.imageContainer.style.setProperty('--mouse-x', `${x}%`);
            this.imageContainer.style.setProperty('--mouse-y', `${y}%`);
            
            // تأثير ميل خفيف
            const tiltX = (y - 50) / 10;
            const tiltY = (x - 50) / 10;
            
            this.imageContainer.style.transform = `
                translateY(var(--float-y, 0))
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
            `;
        });
        
        this.imageContainer.addEventListener('mouseleave', () => {
            this.imageContainer.style.transform = 'translateY(var(--float-y, 0))';
            this.imageContainer.style.setProperty('--mouse-x', '50%');
            this.imageContainer.style.setProperty('--mouse-y', '50%');
        });
    }
    
    // تأثيرات التمرير
    addScrollEffects() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
            
            // تأثير parallax خفيف
            const parallaxValue = scrollTop * 0.1;
            this.imageContainer.style.setProperty('--float-y', `${parallaxValue}px`);
            
            // تغيير السرعة حسب اتجاه التمرير
            if (Math.abs(scrollTop - lastScrollTop) > 50) {
                if (scrollDirection === 'down') {
                    this.imageContainer.classList.add('scrolled');
                    setTimeout(() => {
                        this.imageContainer.classList.remove('scrolled');
                    }, 1000);
                }
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // تأثيرات النقر
    addClickEffects() {
        this.profileImage.addEventListener('click', (e) => {
            e.preventDefault();
            
            // تأثير موجة من مركز النقر
            const ripple = document.createElement('div');
            const rect = this.profileImage.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(67, 97, 238, 0.3);
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                transform: scale(0);
                animation: ripple 0.6s linear;
                z-index: 9;
                pointer-events: none;
            `;
            
            // إضافة أنيميشن الريبل للـ CSS مؤقتاً
            if (!document.querySelector('#ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            this.imageContainer.appendChild(ripple);
            
            // إزالة العنصر بعد الأنيميشن
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // تأثير اهتزاز خفيف
            this.profileImage.style.animation = 'none';
            setTimeout(() => {
                this.profileImage.style.animation = '';
            }, 100);
        });
    }
    
    // تأثير Parallax للأشكال الهندسية
    addParallaxEffect() {
        const shapes = document.querySelectorAll('.geometric-shape');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const scrollFactor = 0.3;
            
            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrollTop * scrollFactor * speed);
                shape.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // تأثيرات Hover لشعارات التكنولوجيا
    addTechBadgeHover() {
        const badges = document.querySelectorAll('.tech-badge');
        
        badges.forEach(badge => {
            const icon = badge.querySelector('i');
            
            badge.addEventListener('mouseenter', () => {
                // تأثير الاهتزاز
                badge.style.animation = 'none';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 10);
                
                // تغيير الأيقونة مؤقتاً
                const originalClass = icon.className;
                icon.className = 'bx bx-bolt';
                
                setTimeout(() => {
                    icon.className = originalClass;
                }, 500);
            });
            
            // عرض اسم التكنولوجيا
            badge.addEventListener('mouseenter', () => {
                const techName = this.getTechName(badge);
                this.showTooltip(badge, techName);
            });
            
            badge.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }
    
    getTechName(badge) {
        const iconClass = badge.querySelector('i').className;
        if (iconClass.includes('bxl-react')) return 'React';
        if (iconClass.includes('bxl-nodejs')) return 'Node.js';
        if (iconClass.includes('bxl-javascript')) return 'JavaScript';
        return 'Technology';
    }
    
    showTooltip(element, text) {
        let tooltip = document.querySelector('.tech-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tech-tooltip';
            document.body.appendChild(tooltip);
        }
        
        const rect = element.getBoundingClientRect();
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: fixed;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top - 30}px;
            transform: translateX(-50%);
            pointer-events: none;
            white-space: nowrap;
        `;
        tooltip.style.opacity = '1';
    }
    
    hideTooltip() {
        const tooltip = document.querySelector('.tech-tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        }
    }
}

// تهيئة الأنيميشن
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimations();
});