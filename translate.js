// Live translate page functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const selectLanguage = document.getElementById('select-language');
    const translationResult = document.getElementById('translation-result');
    const speakBtn = document.getElementById('speak-btn');
    
    // Sample translations for demonstration
    const commonPhrases = {
        "hello": {
            en: "Hello",
            es: "Hola",
            fr: "Bonjour",
            de: "Hallo",
            it: "Ciao",
            ja: "こんにちは",
            zh: "你好",
            ru: "Привет",
            pt: "Olá",
            th: "สวัสดี"
        },
        "thank you": {
            en: "Thank you",
            es: "Gracias",
            fr: "Merci",
            de: "Danke",
            it: "Grazie",
            ja: "ありがとう",
            zh: "谢谢",
            ru: "Спасибо",
            pt: "Obrigado/a",
            th: "ขอบคุณ"
        },
        "excuse me": {
            en: "Excuse me",
            es: "Disculpe",
            fr: "Excusez-moi",
            de: "Entschuldigung",
            it: "Scusi",
            ja: "すみません",
            zh: "打扰一下",
            ru: "Извините",
            pt: "Com licença",
            th: "ขอโทษ"
        },
        "how are you": {
            en: "How are you?",
            es: "¿Cómo estás?",
            fr: "Comment ça va?",
            de: "Wie geht es dir?",
            it: "Come stai?",
            ja: "お元気ですか？",
            zh: "你好吗？",
            ru: "Как дела?",
            pt: "Como você está?",
            th: "คุณเป็นอย่างไรบ้าง"
        },
        "where is the bathroom": {
            en: "Where is the bathroom?",
            es: "¿Dónde está el baño?",
            fr: "Où sont les toilettes?",
            de: "Wo ist die Toilette?",
            it: "Dov'è il bagno?",
            ja: "お手洗いはどこですか？",
            zh: "洗手间在哪里？",
            ru: "Где находится ванная комната?",
            pt: "Onde fica o banheiro?",
            th: "ห้องน้ำอยู่ที่ไหน"
        },
        "i don't understand": {
            en: "I don't understand",
            es: "No entiendo",
            fr: "Je ne comprends pas",
            de: "Ich verstehe nicht",
            it: "Non capisco",
            ja: "わかりません",
            zh: "我不明白",
            ru: "Я не понимаю",
            pt: "Eu não entendo",
            th: "ฉันไม่เข้าใจ"
        },
        "how much does it cost": {
            en: "How much does it cost?",
            es: "¿Cuánto cuesta?",
            fr: "Combien ça coûte?",
            de: "Wie viel kostet das?",
            it: "Quanto costa?",
            ja: "いくらですか？",
            zh: "多少钱？",
            ru: "Сколько это стоит?",
            pt: "Quanto custa?",
            th: "ราคาเท่าไร"
        },
        "my name is": {
            en: "My name is...",
            es: "Me llamo...",
            fr: "Je m'appelle...",
            de: "Ich heiße...",
            it: "Mi chiamo...",
            ja: "私の名前は...です",
            zh: "我的名字是...",
            ru: "Меня зовут...",
            pt: "Meu nome é...",
            th: "ฉันชื่อ..."
        },
        // Added new common phrases
        "good morning": {
            en: "Good morning",
            es: "Buenos días",
            fr: "Bonjour",
            de: "Guten Morgen",
            it: "Buongiorno",
            ja: "おはようございます",
            zh: "早上好",
            ru: "Доброе утро",
            pt: "Bom dia",
            th: "สวัสดีตอนเช้า"
        },
        "good evening": {
            en: "Good evening",
            es: "Buenas noches",
            fr: "Bonsoir",
            de: "Guten Abend",
            it: "Buonasera",
            ja: "こんばんは",
            zh: "晚上好",
            ru: "Добрый вечер",
            pt: "Boa noite",
            th: "สวัสดีตอนเย็น"
        },
        "goodbye": {
            en: "Goodbye",
            es: "Adiós",
            fr: "Au revoir",
            de: "Auf Wiedersehen",
            it: "Arrivederci",
            ja: "さようなら",
            zh: "再见",
            ru: "До свидания",
            pt: "Adeus",
            th: "ลาก่อน"
        },
        "please": {
            en: "Please",
            es: "Por favor",
            fr: "S'il vous plaît",
            de: "Bitte",
            it: "Per favore",
            ja: "お願いします",
            zh: "请",
            ru: "Пожалуйста",
            pt: "Por favor",
            th: "กรุณา"
        },
        "sorry": {
            en: "Sorry",
            es: "Lo siento",
            fr: "Désolé(e)",
            de: "Entschuldigung",
            it: "Scusa/Mi dispiace",
            ja: "すみません",
            zh: "对不起",
            ru: "Извините",
            pt: "Desculpe",
            th: "ขอโทษ"
        },
        "can you help me": {
            en: "Can you help me?",
            es: "¿Puede ayudarme?",
            fr: "Pouvez-vous m'aider?",
            de: "Können Sie mir helfen?",
            it: "Può aiutarmi?",
            ja: "手伝っていただけますか？",
            zh: "您能帮我吗？",
            ru: "Вы можете мне помочь?",
            pt: "Pode me ajudar?",
            th: "คุณช่วยฉันได้ไหม"
        },
        "i need a doctor": {
            en: "I need a doctor",
            es: "Necesito un médico",
            fr: "J'ai besoin d'un médecin",
            de: "Ich brauche einen Arzt",
            it: "Ho bisogno di un medico",
            ja: "医者が必要です",
            zh: "我需要医生",
            ru: "Мне нужен врач",
            pt: "Preciso de um médico",
            th: "ฉันต้องการหมอ"
        },
        "where is the train station": {
            en: "Where is the train station?",
            es: "¿Dónde está la estación de tren?",
            fr: "Où est la gare?",
            de: "Wo ist der Bahnhof?",
            it: "Dov'è la stazione ferroviaria?",
            ja: "駅はどこですか？",
            zh: "火车站在哪里？",
            ru: "Где находится вокзал?",
            pt: "Onde fica a estação de trem?",
            th: "สถานีรถไฟอยู่ที่ไหน"
        },
        "i am lost": {
            en: "I am lost",
            es: "Estoy perdido/a",
            fr: "Je suis perdu(e)",
            de: "Ich habe mich verirrt",
            it: "Mi sono perso/a",
            ja: "道に迷いました",
            zh: "我迷路了",
            ru: "Я заблудился/заблудилась",
            pt: "Estou perdido/a",
            th: "ฉันหลงทาง"
        },
        "do you speak english": {
            en: "Do you speak English?",
            es: "¿Habla inglés?",
            fr: "Parlez-vous anglais?",
            de: "Sprechen Sie Englisch?",
            it: "Parla inglese?",
            ja: "英語を話せますか？",
            zh: "您会说英语吗？",
            ru: "Вы говорите по-английски?",
            pt: "Você fala inglês?",
            th: "คุณพูดภาษาอังกฤษได้ไหม"
        },
        "i would like to order": {
            en: "I would like to order",
            es: "Quisiera ordenar",
            fr: "Je voudrais commander",
            de: "Ich möchte bestellen",
            it: "Vorrei ordinare",
            ja: "注文したいです",
            zh: "我想点餐",
            ru: "Я бы хотел(а) заказать",
            pt: "Eu gostaria de pedir",
            th: "ฉันต้องการสั่งอาหาร"
        },
        "the check please": {
            en: "The check, please",
            es: "La cuenta, por favor",
            fr: "L'addition, s'il vous plaît",
            de: "Die Rechnung, bitte",
            it: "Il conto, per favore",
            ja: "お会計をお願いします",
            zh: "请结账",
            ru: "Счёт, пожалуйста",
            pt: "A conta, por favor",
            th: "ขอบิลด้วย"
        },
        "how do i get to": {
            en: "How do I get to...?",
            es: "¿Cómo llego a...?",
            fr: "Comment puis-je aller à...?",
            de: "Wie komme ich zu...?",
            it: "Come arrivo a...?",
            ja: "...へはどうやって行きますか？",
            zh: "我怎么去...？",
            ru: "Как мне добраться до...?",
            pt: "Como eu chego a...?",
            th: "ฉันจะไป...ได้อย่างไร"
        },
        "i need water": {
            en: "I need water",
            es: "Necesito agua",
            fr: "J'ai besoin d'eau",
            de: "Ich brauche Wasser",
            it: "Ho bisogno di acqua",
            ja: "水が必要です",
            zh: "我需要水",
            ru: "Мне нужна вода",
            pt: "Preciso de água",
            th: "ฉันต้องการน้ำ"
        }
    };
    
    // Additional contextual information for common phrases
    const contextInfo = {
        "hello": "A common greeting used when meeting someone.",
        "thank you": "Express gratitude or appreciation.",
        "excuse me": "Used to get attention politely or apologize for an interruption.",
        "how are you": "A friendly way to ask about someone's wellbeing.",
        "where is the bathroom": "Important phrase when you need to find facilities.",
        "i don't understand": "Helpful when you're having trouble comprehending.",
        "how much does it cost": "Essential for shopping or using services.",
        "my name is": "Used when introducing yourself to others.",
        // Added new context info
        "good morning": "A greeting used specifically in the morning hours.",
        "good evening": "A greeting used in the evening hours.",
        "goodbye": "A farewell phrase used when leaving or ending a conversation.",
        "please": "Used to make requests more polite.",
        "sorry": "Used to apologize or express regret.",
        "can you help me": "A polite way to ask for assistance.",
        "i need a doctor": "Critical phrase to use in medical emergencies.",
        "where is the train station": "Useful for finding transportation.",
        "i am lost": "Important phrase when you need directions.",
        "do you speak english": "Helpful when trying to find someone who speaks your language.",
        "i would like to order": "Used in restaurants when ready to place an order.",
        "the check please": "Used in restaurants when ready to pay.",
        "how do i get to": "Used when asking for directions to a specific location.",
        "i need water": "Important basic need phrase, especially in hot weather or emergencies."
    };
    
    // Cultural notes for certain phrases in specific languages
    const culturalNotes = {
        "fr": {
            "hello": "In France, greetings are important. 'Bonjour' is used during the day, while 'Bonsoir' is used in the evening.",
            "thank you": "The French are formal about politeness. Add 'beaucoup' (merci beaucoup) to emphasize gratitude.",
            "good morning": "In French, 'Bonjour' is used for both 'hello' and 'good morning' - there's no separate morning greeting.",
            "the check please": "In French restaurants, it's considered slightly rude to ask for the check without having finished your meal completely."
        },
        "ja": {
            "hello": "In Japan, 'こんにちは' (Konnichiwa) is often accompanied by a bow as a sign of respect.",
            "thank you": "Different levels of formality exist in Japanese. 'ありがとうございます' (Arigatō gozaimasu) is more formal.",
            "i would like to order": "In Japan, you often call a waiter by saying 'すみません' (sumimasen) before placing an order.",
            "goodbye": "In Japanese, 'さようなら' (sayōnara) implies a long farewell. For casual partings, 'じゃあね' (jā ne) is more common."
        },
        "es": {
            "hello": "In Spanish-speaking countries, greetings often include asking about wellbeing, e.g., 'Hola, ¿cómo estás?'",
            "how are you": "Responses to '¿Cómo estás?' are usually positive even if you're not feeling great - it's more of a greeting than a genuine question.",
            "good morning": "In Spain, breakfast is typically light, so 'Buenos días' might be said until lunchtime, which is often around 2pm.",
            "please": "In many Spanish-speaking countries, 'por favor' is used less frequently than 'please' in English."
        },
        "de": {
            "hello": "Germans tend to be formal in initial meetings. 'Hallo' is casual; 'Guten Tag' is more formal.",
            "goodbye": "Germans often say 'Tschüss' (informal) instead of 'Auf Wiedersehen' (formal) among friends.",
            "the check please": "In Germany, servers won't bring your bill until you specifically ask for it, as bringing it unasked is considered rushing customers."
        },
        "zh": {
            "hello": "In Chinese culture, it's common to greet someone by asking if they've eaten yet: '你吃了吗?' (Nǐ chī le ma?)",
            "thank you": "Chinese people sometimes wave off thanks from friends and family as unnecessary, as helping each other is expected.",
            "i need water": "In China, people typically drink hot water rather than cold water, as it's believed to be healthier."
        }
    };
    
    // Function to translate and provide context
    function translateAndExplain(text, targetLang) {
        if (!text || !targetLang) {
            return "<p class='placeholder-text'>Enter text and select a language</p>";
        }
        
        text = text.toLowerCase().trim();
        
        // Check if it's a common phrase we know
        if (commonPhrases[text] && commonPhrases[text][targetLang]) {
            let result = `<div class="translation-content">`;
            result += `<h3 class="translation-heading">Translation</h3>`;
            result += `<p class="translated-text">${commonPhrases[text][targetLang]}</p>`;
            
            // Add context if available
            if (contextInfo[text]) {
                result += `<h3 class="context-heading">Context</h3>`;
                result += `<p class="context-text">${contextInfo[text]}</p>`;
            }
            
            // Add cultural note if available
            if (culturalNotes[targetLang] && culturalNotes[targetLang][text]) {
                result += `<h3 class="cultural-heading">Cultural Note</h3>`;
                result += `<p class="cultural-text">${culturalNotes[targetLang][text]}</p>`;
            }
            
            result += `</div>`;
            return result;
        } else {
            // Simulate API translation
            return `<div class="translation-content">
                <h3 class="translation-heading">Translation</h3>
                <p class="translated-text"> </p>
                <p class="api-note"> Not a common word! Try something else.</p>
            </div>`;
        }
    }
    
    // Handle search input (with debounce)
    let debounceTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const text = searchInput.value;
            const targetLang = selectLanguage.value;
            
            if (text && targetLang) {
                const result = translateAndExplain(text, targetLang);
                translationResult.innerHTML = result;
            } else if (!text) {
                translationResult.innerHTML = "<p class='placeholder-text'>Enter text to translate</p>";
            } else if (!targetLang) {
                translationResult.innerHTML = "<p class='placeholder-text'>Select a language</p>";
            }
        }, 500);
    });
    
    // Handle language selection change
    selectLanguage.addEventListener('change', function() {
        const text = searchInput.value;
        const targetLang = selectLanguage.value;
        
        if (text && targetLang) {
            const result = translateAndExplain(text, targetLang);
            translationResult.innerHTML = result;
        }
    });
    
    // Text-to-speech functionality
    speakBtn.addEventListener('click', function() {
        const text = searchInput.value;
        const targetLang = selectLanguage.value;
        
        if (!text || !targetLang) {
            alert('Please enter text and select a language first');
            return;
        }
        
        // Check if browser supports speech synthesis
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance();
            
            // Get translated text if available
            if (commonPhrases[text.toLowerCase().trim()] && commonPhrases[text.toLowerCase().trim()][targetLang]) {
                utterance.text = commonPhrases[text.toLowerCase().trim()][targetLang];
            } else {
                utterance.text = text;
            }
            
            // Set language
            switch(targetLang) {
                case 'en': utterance.lang = 'en-US'; break;
                case 'es': utterance.lang = 'es-ES'; break;
                case 'fr': utterance.lang = 'fr-FR'; break;
                case 'de': utterance.lang = 'de-DE'; break;
                case 'it': utterance.lang = 'it-IT'; break;
                case 'ja': utterance.lang = 'ja-JP'; break;
                case 'zh': utterance.lang = 'zh-CN'; break;
                case 'ru': utterance.lang = 'ru-RU'; break;
                case 'pt': utterance.lang = 'pt-BR'; break;
                case 'th': utterance.lang = 'th-TH'; break;
                default: utterance.lang = 'en-US';
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Your browser does not support text-to-speech');
        }
    });
});