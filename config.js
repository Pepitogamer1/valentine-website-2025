// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Pulitasexy3000",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Quieres ser mi valentin, chiquita? 🌼🧡",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '🧡', '💛', '❤️‍🔥'],  // Heart emojis
        bears: ['🥵', '😏', '🌼']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Tu me estimas?...",                                    // First interaction
            yesBtn: "Si.",                                             // Text for "Yes" button
            noBtn: "No.",                                               // Text for "No" button
            secretAnswer: "No tontito, te amo con todo mi corazon 😘❤️‍🔥"           // Secret hover message
        },
        second: {
            text: "AY TAN LINDA, ¿y cuanto me amas????",                          // For the love meter
            startText: "Te amo un:",                                   // Text before the percentage
            nextBtn: "Y ahora la pregunta picante... 😏🔥"                                         // Text for the next button
        },
        third: {
            text: "¿Quieres ser mi super valentin este 14 de febrero? 🌼🧡", // The big question!
            yesBtn: "SI, TE AMOOO ❤️",                                             // Text for "Yes" button
            noBtn: "No."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "DIOS MIO, TE AMO, CASEMONOOOS 😍💍💖",  // Shows when they go past 5000%
        high: "Se pone candente la cosa... 🥵🔥",              // Shows when they go past 1000%
        normal: "¿Asi de poquito?... 🙄"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "AAAHHHH, soy el esposito mas feliz del UNIVERSOO!!! 🥰😍💖💘",
        message: "NOS VEMOS EL 14, a mandarnos besotes candentes, babosos y lenguados",
        emojis: "🥵🤤💋💋❤️‍🔥🔥"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#faf7eb",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#eb975e",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#6b1a34",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#aa0235"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dxpjbwdpn/video/upload/v1770785710/Kevin_Flores_-_As%C3%B3mate_a_la_ventana_letra_yaxygt.mp3", // Music streaming URL
        startText: "🎵 Ponte champetua",        // Button text to start music
        stopText: "🔇 Adios guachafita.",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
