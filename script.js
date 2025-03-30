const translations = {
    it: { visit: "🌍 Posti da Visitare", restaurants: "🍽️ Ristoranti", stations: "🚉 Stazioni Ferroviarie", port: "⛵ Porto" },
    en: { visit: "🌍 Places to Visit", restaurants: "🍽️ Restaurants", stations: "🚉 Train Stations", port: "⛵ Port" },
    de: { visit: "🌍 Sehenswürdigkeiten", restaurants: "🍽️ Restaurants", stations: "🚉 Bahnhöfe", port: "⛵ Hafen" },
    fr: { visit: "🌍 Lieux à Visiter", restaurants: "🍽️ Restaurants", stations: "🚉 Gares", port: "⛵ Port" },
    es: { visit: "🌍 Lugares para Visitar", restaurants: "🍽️ Restaurantes", stations: "🚉 Estaciones de Tren", port: "⛵ Puerto" },
    ru: { visit: "🌍 Места для посещения", restaurants: "🍽️ Рестораны", stations: "🚉 Железнодорожные станции", port: "⛵ Порт" }
};

function updateLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.querySelectorAll(".dropdown-menu li").forEach(item => {
    item.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang");
        
        document.getElementById("selected-lang").innerHTML = this.innerHTML;
        
        const googleTranslateElement = new google.translate.TranslateElement({
            pageLanguage: 'it',
            includedLanguages: 'it,en,de,fr,es,ru',
            autoDisplay: false
        }, 'google_translate_element');
        
        googleTranslateElement.showBanner();
        googleTranslateElement.translate(lang);
        
        document.querySelector(".custom-dropdown").classList.remove("active");
    });
});

updateLanguage("it");
