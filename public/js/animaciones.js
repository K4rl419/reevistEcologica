document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.max-w-full.bg-white.border');
    
    function cardHoverEffect() {
        this.classList.add('transform', 'scale-[1.10]', 'shadow-2xl', 'transition-all', 'duration-300', 'ring-2', 'ring-green-500');
        this.classList.remove('shadow-lg');
        const img = this.querySelector('img');
        if(img) {
            img.classList.add('brightness-105', 'contrast-105', 'transition-all', 'duration-500');
        }
        const title = this.querySelector('h5');
        if(title) {
            title.classList.add('text-green-600', 'transition-colors', 'duration-300');
        }
    }
    
    function cardHoverOut() {
        this.classList.remove('transform', 'scale-[1.10]', 'shadow-2xl', 'ring-2', 'ring-green-500');
        this.classList.add('shadow-lg');
        
        const img = this.querySelector('img');
        if(img) {
            img.classList.remove('brightness-105', 'contrast-105');
        }
        
        const title = this.querySelector('h5');
        if(title) {
            title.classList.remove('text-green-600');
        }
    }

    cards.forEach(card => {
        card.addEventListener('mouseenter', cardHoverEffect);
        card.addEventListener('mouseleave', cardHoverOut);
    });

    const buttons = document.querySelectorAll('a.inline-flex.items-center');
    
    function buttonHoverEffect() {
        this.classList.add('bg-green-600', 'scale-110', 'shadow-lg', 'ring-2', 'ring-white');
        this.classList.remove('bg-blue-700');
    }
    
    function buttonHoverOut() {
        this.classList.remove('bg-green-600', 'scale-110', 'shadow-lg', 'ring-2', 'ring-white');
        this.classList.add('bg-blue-700');
    }
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', buttonHoverEffect);
        button.addEventListener('mouseleave', buttonHoverOut);
    });

    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    
    function carouselHoverEffect() {
        const img = this.querySelector('img');
        if(img) {
            img.classList.add('brightness-110', 'contrast-110', 'scale-105', 'transition-all', 'duration-500');
        }
    }
    
    function carouselHoverOut() {
        const img = this.querySelector('img');
        if(img) {
            img.classList.remove('brightness-110', 'contrast-110', 'scale-105');
        }
    }
    
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', carouselHoverEffect);
        item.addEventListener('mouseleave', carouselHoverOut);
    });

    const noticiasTitle = document.querySelector('h2.text-6xl');
    const noticiasSubtitle = document.querySelector('h2.text-4xl');
    
    function titleHoverEffect() {
        noticiasTitle.classList.add('animate-pulse', 'text-green-800', 'drop-shadow-lg');
        noticiasSubtitle.classList.add('text-green-600', 'scale-105', 'transition-all', 'duration-300');
    }
    
    function titleHoverOut() {
        noticiasTitle.classList.remove('animate-pulse', 'text-green-800', 'drop-shadow-lg');
        noticiasTitle.classList.add('text-green-700');
        noticiasSubtitle.classList.remove('text-green-600', 'scale-105');
    }
    
    noticiasTitle.addEventListener('mouseenter', titleHoverEffect);
    noticiasTitle.addEventListener('mouseleave', titleHoverOut);

    
});