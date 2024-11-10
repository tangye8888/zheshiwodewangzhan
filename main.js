document.addEventListener('DOMContentLoaded', function() {
    // 轮播功能
    const carousel = {
        container: document.querySelector('.carousel'),
        items: document.querySelectorAll('.carousel-item'),
        controls: document.querySelectorAll('.carousel-control'),
        currentIndex: 0,
        interval: null,
        
        init() {
            this.addEventListeners();
            this.startAutoPlay();
        },
        
        addEventListeners() {
            this.controls.forEach(control => {
                control.addEventListener('click', (e) => {
                    if (control.classList.contains('prev')) {
                        this.prev();
                    } else {
                        this.next();
                    }
                });
            });
            
            this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        },
        
        next() {
            this.items[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            this.items[this.currentIndex].classList.add('active');
        },
        
        prev() {
            this.items[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
            this.items[this.currentIndex].classList.add('active');
        },
        
        startAutoPlay() {
            this.interval = setInterval(() => this.next(), 5000);
        },
        
        stopAutoPlay() {
            clearInterval(this.interval);
        }
    };

    // 作品筛选功能
    const portfolio = {
        filterButtons: document.querySelectorAll('.filter-btn'),
        items: document.querySelectorAll('.portfolio-item'),
        
        init() {
            this.addEventListeners();
        },
        
        addEventListeners() {
            this.filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    this.filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    const filter = button.getAttribute('data-filter');
                    this.filterItems(filter);
                });
            });
        },
        
        filterItems(filter) {
            this.items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    };

    // 平滑滚动
    const smoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };

    // 表单提交
    const contactForm = {
        form: document.querySelector('.contact-form'),
        
        init() {
            if (this.form) {
                this.form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // 这里添加表单提交逻辑
                    alert('消息已发送！');
                    this.form.reset();
                });
            }
        }
    };

    // 导航栏滚动效果
    const navbar = {
        nav: document.querySelector('.navbar'),
        
        init() {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    this.nav.style.background = 'rgba(255, 255, 255, 0.95)';
                    this.nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    this.nav.style.background = 'rgba(255, 255, 255, 0.8)';
                    this.nav.style.boxShadow = 'none';
                }
            });
        }
    };

    // 初始化所有功能
    carousel.init();
    portfolio.init();
    smoothScroll.init();
    contactForm.init();
    navbar.init();
}); 