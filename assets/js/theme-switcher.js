class ThemeSwitcher {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light-mode';
        
        this.init();
    }
    
    init() {
        // Set initial theme
        document.body.className = this.currentTheme;
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    toggleTheme() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            this.currentTheme = 'light-mode';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            this.currentTheme = 'dark-mode';
        }
        
        // Save to localStorage
        localStorage.setItem('theme', this.currentTheme);
        
        // Dispatch custom event for other components
        document.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: this.currentTheme }
        }));
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});