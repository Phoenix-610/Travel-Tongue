// Translations for medical terms
    const medicalTranslations = {
        "It hurts here": {
            ja: "ここが痛いです",
            es: "Me duele aquí",
            fr: "J'ai mal ici",
            de: "Hier tut es weh",
            it: "Mi fa male qui",
            zh: "这里疼",
            ru: "Здесь болит",
            pt: "Dói aqui",
            th: "เจ็บตรงนี้"
        },
        "I have a headache/fever/cough": {
            ja: "頭痛/熱/咳があります",
            es: "Tengo dolor de cabeza/fiebre/tos",
            fr: "J'ai mal à la tête/de la fièvre/une toux",
            de: "Ich habe Kopfschmerzen/Fieber/Husten",
            it: "Ho mal di testa/febbre/tosse",
            zh: "我头痛/发烧/咳嗽",
            ru: "У меня головная боль/жар/кашель",
            pt: "Tenho dor de cabeça/febre/tosse",
            th: "ฉันปวดหัว/มีไข้/ไอ"
        },
        "I'm allergic to...": {
            ja: "私は...にアレルギーがあります",
            es: "Soy alérgico/a a...",
            fr: "Je suis allergique à...",
            de: "Ich bin allergisch gegen...",
            it: "Sono allergico/a a...",
            zh: "我对...过敏",
            ru: "У меня аллергия на...",
            pt: "Eu sou alérgico/a a...",
            th: "ฉันแพ้..."
        }
    };// Generator page functionality
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const cheatSheetResult = document.getElementById('cheat-sheet-result');
    const cheatSheetContent = document.getElementById('cheat-sheet-content');
    
    // Sample phrases based on travel purpose
    const phraseSets = {
        travel: {
            basic: [
                { phrase: "Hello", context: "Basic greeting" },
                { phrase: "Thank you", context: "Expressing gratitude" },
                { phrase: "Excuse me", context: "Getting attention politely" },
                { phrase: "Where is...?", context: "Asking for directions" },
                { phrase: "How much?", context: "Asking for price" }
            ],
            intermediate: [
                { phrase: "I would like to order...", context: "At restaurants" },
                { phrase: "Can you recommend...?", context: "Asking for suggestions" },
                { phrase: "Is there public transportation nearby?", context: "Finding transportation" },
                { phrase: "I need help", context: "Requesting assistance" },
                { phrase: "Do you speak English?", context: "Language barrier" },
                { phrase: "I don't understand", context: "Communication difficulty" },
                { phrase: "Can I have the check, please?", context: "At restaurants" }
            ],
            advanced: [
                { phrase: "I'm looking for local experiences", context: "Beyond tourist attractions" },
                { phrase: "What would you recommend for someone who wants to experience the local culture?", context: "Cultural immersion" },
                { phrase: "Could you explain the history of this place?", context: "Learning about history" },
                { phrase: "I'm allergic to...", context: "Medical information" },
                { phrase: "Is this price negotiable?", context: "Shopping" },
                { phrase: "I'd like to reserve a table for...", context: "Making reservations" },
                { phrase: "How often does the train/bus come?", context: "Public transportation" },
                { phrase: "Can you recommend a place that locals enjoy?", context: "Authentic experiences" },
                { phrase: "What's the story behind this dish?", context: "Food culture" }
            ]
        },
        business: {
            basic: [
                { phrase: "Nice to meet you", context: "Introductions" },
                { phrase: "My name is...", context: "Self-introduction" },
                { phrase: "I work for...", context: "Company information" },
                { phrase: "Do you have a business card?", context: "Networking" },
                { phrase: "Let's schedule a meeting", context: "Planning" }
            ],
            intermediate: [
                { phrase: "I'd like to discuss our potential collaboration", context: "Business discussion" },
                { phrase: "What are your thoughts on this proposal?", context: "Seeking opinions" },
                { phrase: "Let me explain our company's position", context: "Company stance" },
                { phrase: "I agree with your assessment", context: "Agreement" },
                { phrase: "I have some concerns about...", context: "Expressing concerns" },
                { phrase: "Could we go over the details again?", context: "Clarification" }
            ],
            advanced: [
                { phrase: "I believe we can find a mutually beneficial solution", context: "Negotiation" },
                { phrase: "Let's analyze the market implications", context: "Market analysis" },
                { phrase: "What are the terms of the agreement?", context: "Contract discussion" },
                { phrase: "I'm authorized to make decisions up to...", context: "Authority level" },
                { phrase: "We need to consider the regulatory implications", context: "Compliance" },
                { phrase: "Let's discuss the implementation timeline", context: "Project planning" },
                { phrase: "What metrics will we use to measure success?", context: "Performance measurement" }
            ]
        },
        medical: {
            basic: [
                { phrase: "I don't feel well", context: "General illness" },
                { phrase: "I need a doctor", context: "Medical assistance" },
                { phrase: "It hurts here", context: "Indicating pain" },
                { phrase: "I have a headache/fever/cough", context: "Common symptoms" },
                { phrase: "I'm allergic to...", context: "Allergies" }
            ],
            intermediate: [
                { phrase: "I take medication for...", context: "Current treatments" },
                { phrase: "I need to refill my prescription", context: "Medication" },
                { phrase: "What are the side effects?", context: "Medication information" },
                { phrase: "When should I take this medicine?", context: "Dosage instructions" },
                { phrase: "Do I need to see a specialist?", context: "Referral" },
                { phrase: "I have health insurance", context: "Payment information" }
            ],
            advanced: [
                { phrase: "I have a pre-existing condition", context: "Medical history" },
                { phrase: "What are the treatment options?", context: "Treatment discussion" },
                { phrase: "Can you explain this diagnosis?", context: "Understanding condition" },
                { phrase: "Are there any risks associated with this procedure?", context: "Medical procedures" },
                { phrase: "I'd like a second opinion", context: "Additional consultation" },
                { phrase: "My family has a history of...", context: "Genetic predisposition" },
                { phrase: "What preventive measures should I take?", context: "Prevention" }
            ]
        },
        cultural: {
            basic: [
                { phrase: "What is this celebration?", context: "Cultural events" },
                { phrase: "Is this traditional?", context: "Cultural traditions" },
                { phrase: "Can I take a photo?", context: "Photography etiquette" },
                { phrase: "What does this symbolize?", context: "Cultural symbols" },
                { phrase: "When was this created?", context: "Historical context" }
            ],
            intermediate: [
                { phrase: "What's the significance of this festival?", context: "Festival meaning" },
                { phrase: "Can you teach me about local customs?", context: "Learning customs" },
                { phrase: "What is considered polite here?", context: "Etiquette" },
                { phrase: "Is there a dress code for this place?", context: "Appropriate attire" },
                { phrase: "What's the story behind this tradition?", context: "Cultural history" }
            ],
            advanced: [
                { phrase: "How has this tradition evolved over time?", context: "Cultural evolution" },
                { phrase: "What philosophical ideas influence this practice?", context: "Cultural philosophy" },
                { phrase: "How does this art form reflect your society's values?", context: "Art and society" },
                { phrase: "Can you explain the historical context?", context: "Historical perspective" },
                { phrase: "What role does this play in contemporary society?", context: "Modern relevance" }
            ]
        },
        emergency: {
            basic: [
                { phrase: "Help!", context: "Urgent assistance" },
                { phrase: "Call an ambulance!", context: "Medical emergency" },
                { phrase: "Call the police!", context: "Security emergency" },
                { phrase: "Fire!", context: "Fire emergency" },
                { phrase: "I'm lost", context: "Location issue" }
            ],
            intermediate: [
                { phrase: "I've lost my passport", context: "Document loss" },
                { phrase: "I need to contact my embassy", context: "Diplomatic assistance" },
                { phrase: "My wallet was stolen", context: "Theft report" },
                { phrase: "Is there a hospital nearby?", context: "Medical facility" },
                { phrase: "Where is the nearest police station?", context: "Security assistance" }
            ],
            advanced: [
                { phrase: "I need to file a police report", context: "Official documentation" },
                { phrase: "I need travel insurance assistance", context: "Insurance claim" },
                { phrase: "What are the emergency evacuation procedures?", context: "Evacuation" },
                { phrase: "I need to report a serious incident", context: "Incident reporting" },
                { phrase: "Is there a 24-hour pharmacy?", context: "Medication emergency" }
            ]
        },
        student: {
            basic: [
                { phrase: "Where is the library?", context: "Finding resources" },
                { phrase: "When is the deadline?", context: "Assignment timing" },
                { phrase: "Can you explain this again?", context: "Clarification" },
                { phrase: "How do I register for classes?", context: "Administrative" },
                { phrase: "Is there student housing?", context: "Accommodation" }
            ],
            intermediate: [
                { phrase: "What are the requirements for this course?", context: "Course information" },
                { phrase: "Can I schedule office hours?", context: "Faculty meeting" },
                { phrase: "How do I access online resources?", context: "Digital resources" },
                { phrase: "Is there a student discount?", context: "Financial" },
                { phrase: "Are there study groups?", context: "Collaborative learning" }
            ],
            advanced: [
                { phrase: "I'd like to discuss my research proposal", context: "Academic research" },
                { phrase: "What funding opportunities are available?", context: "Financial support" },
                { phrase: "Can you recommend academic journals in this field?", context: "Research resources" },
                { phrase: "How can I improve my thesis statement?", context: "Academic writing" },
                { phrase: "What internship opportunities are available?", context: "Professional development" }
            ]
        },
        others: {
            basic: [
                { phrase: "Yes", context: "Affirmation" },
                { phrase: "No", context: "Negation" },
                { phrase: "I don't know", context: "Uncertainty" },
                { phrase: "Maybe", context: "Possibility" },
                { phrase: "Goodbye", context: "Departure" }
            ],
            intermediate: [
                { phrase: "I'm interested in learning more", context: "Curiosity" },
                { phrase: "Could you write that down?", context: "Documentation" },
                { phrase: "Is there a better time to discuss this?", context: "Scheduling" },
                { phrase: "I appreciate your help", context: "Gratitude" },
                { phrase: "Let me think about it", context: "Consideration" }
            ],
            advanced: [
                { phrase: "I'd like to explore this topic further", context: "In-depth discussion" },
                { phrase: "What are the long-term implications?", context: "Future thinking" },
                { phrase: "How does this compare to alternatives?", context: "Comparative analysis" },
                { phrase: "Could you provide some context?", context: "Background information" },
                { phrase: "What evidence supports this position?", context: "Critical thinking" }
            ]
        }
    };

    // Languages for demonstration
    const languages = {
        en: "English",
        es: "Spanish",
        fr: "French",
        de: "German",
        it: "Italian",
        ja: "Japanese",
        zh: "Chinese",
        ru: "Russian",
        pt: "Portuguese",
        th: "Thai"
    };

    // Comprehensive translations database
    const translations = {
        // Basic greetings and common phrases
        "Hello": {
            es: "Hola", fr: "Bonjour", de: "Hallo", it: "Ciao", 
            ja: "こんにちは", zh: "你好", ru: "Привет", pt: "Olá", th: "สวัสดี"
        },
        "Thank you": {
            es: "Gracias", fr: "Merci", de: "Danke", it: "Grazie", 
            ja: "ありがとう", zh: "谢谢", ru: "Спасибо", pt: "Obrigado/a", th: "ขอบคุณ"
        },
        "Excuse me": {
            es: "Disculpe", fr: "Excusez-moi", de: "Entschuldigung", it: "Scusi", 
            ja: "すみません", zh: "对不起", ru: "Извините", pt: "Com licença", th: "ขอโทษ"
        },
        "Where is...?": {
            es: "¿Dónde está...?", fr: "Où est...?", de: "Wo ist...?", it: "Dov'è...?", 
            ja: "...はどこですか？", zh: "...在哪里？", ru: "Где...?", pt: "Onde fica...?", th: "...อยู่ที่ไหน?"
        },
        "How much?": {
            es: "¿Cuánto cuesta?", fr: "Combien ça coûte?", de: "Wie viel kostet das?", it: "Quanto costa?", 
            ja: "いくらですか？", zh: "多少钱？", ru: "Сколько стоит?", pt: "Quanto custa?", th: "ราคาเท่าไหร่?"
        },
        "I would like to order...": {
            es: "Me gustaría pedir...", fr: "Je voudrais commander...", de: "Ich möchte... bestellen", it: "Vorrei ordinare...", 
            ja: "...を注文したいです", zh: "我想点...", ru: "Я хотел бы заказать...", pt: "Eu gostaria de pedir...", th: "ฉันต้องการสั่ง..."
        },
        "Can you recommend...?": {
            es: "¿Puede recomendar...?", fr: "Pouvez-vous recommander...?", de: "Können Sie... empfehlen?", it: "Può consigliare...?", 
            ja: "...をお勧めできますか？", zh: "您能推荐...吗？", ru: "Можете порекомендовать...?", pt: "Pode recomendar...?", th: "คุณช่วยแนะนำ...ได้ไหม?"
        },
        "Is there public transportation nearby?": {
            es: "¿Hay transporte público cerca?", fr: "Y a-t-il des transports en commun à proximité?", de: "Gibt es öffentliche Verkehrsmittel in der Nähe?", it: "C'è un trasporto pubblico nelle vicinanze?", 
            ja: "近くに公共交通機関はありますか？", zh: "附近有公共交通吗？", ru: "Есть ли поблизости общественный транспорт?", pt: "Existe transporte público por perto?", th: "มีขนส่งสาธารณะใกล้ๆ ไหม?"
        },
        "I need help": {
            es: "Necesito ayuda", fr: "J'ai besoin d'aide", de: "Ich brauche Hilfe", it: "Ho bisogno di aiuto", 
            ja: "助けが必要です", zh: "我需要帮助", ru: "Мне нужна помощь", pt: "Preciso de ajuda", th: "ฉันต้องการความช่วยเหลือ"
        },
        "Do you speak English?": {
            es: "¿Habla inglés?", fr: "Parlez-vous anglais?", de: "Sprechen Sie Englisch?", it: "Parla inglese?", 
            ja: "英語を話せますか？", zh: "您会说英语吗？", ru: "Вы говорите по-английски?", pt: "Você fala inglês?", th: "คุณพูดภาษาอังกฤษได้ไหม?"
        },
        "I don't understand": {
            es: "No entiendo", fr: "Je ne comprends pas", de: "Ich verstehe nicht", it: "Non capisco", 
            ja: "理解できません", zh: "我不明白", ru: "Я не понимаю", pt: "Eu não entendo", th: "ฉันไม่เข้าใจ"
        },
        "Can I have the check, please?": {
            es: "¿Me trae la cuenta, por favor?", fr: "L'addition, s'il vous plaît?", de: "Die Rechnung, bitte?", it: "Il conto, per favore?", 
            ja: "お会計をお願いします", zh: "请结账", ru: "Счет, пожалуйста", pt: "A conta, por favor?", th: "ขอบิลด้วย ครับ/ค่ะ"
        },
        
        // Business phrases
        "Nice to meet you": {
            es: "Encantado de conocerte", fr: "Ravi de vous rencontrer", de: "Schön, Sie kennenzulernen", it: "Piacere di conoscerti", 
            ja: "はじめまして", zh: "很高兴认识你", ru: "Приятно познакомиться", pt: "Prazer em conhecê-lo/a", th: "ยินดีที่ได้รู้จัก"
        },
        "My name is...": {
            es: "Mi nombre es...", fr: "Je m'appelle...", de: "Mein Name ist...", it: "Mi chiamo...", 
            ja: "私の名前は...です", zh: "我的名字是...", ru: "Меня зовут...", pt: "Meu nome é...", th: "ฉันชื่อ..."
        },
        "I work for...": {
            es: "Trabajo para...", fr: "Je travaille pour...", de: "Ich arbeite für...", it: "Lavoro per...", 
            ja: "私は...で働いています", zh: "我在...工作", ru: "Я работаю в...", pt: "Eu trabalho para...", th: "ฉันทำงานให้กับ..."
        },
        
        // Medical phrases
        "I don't feel well": {
            es: "No me siento bien", fr: "Je ne me sens pas bien", de: "Ich fühle mich nicht wohl", it: "Non mi sento bene", 
            ja: "気分が悪いです", zh: "我感觉不舒服", ru: "Я плохо себя чувствую", pt: "Não me sinto bem", th: "ฉันรู้สึกไม่สบาย"
        },
        "I need a doctor": {
            es: "Necesito un médico", fr: "J'ai besoin d'un médecin", de: "Ich brauche einen Arzt", it: "Ho bisogno di un medico", 
            ja: "医者が必要です", zh: "我需要医生", ru: "Мне нужен врач", pt: "Preciso de um médico", th: "ฉันต้องการหมอ"
        },
        
        // Emergency phrases
        "Help!": {
            es: "¡Ayuda!", fr: "Au secours!", de: "Hilfe!", it: "Aiuto!", 
            ja: "助けて！", zh: "救命！", ru: "Помогите!", pt: "Socorro!", th: "ช่วยด้วย!"
        },
        
        // Cultural phrases
        "What is this celebration?": {
            es: "¿Qué celebración es esta?", fr: "Quelle est cette célébration?", de: "Was ist das für eine Feier?", it: "Che celebrazione è questa?", 
            ja: "これはどんなお祝いですか？", zh: "这是什么庆祝活动？", ru: "Что это за праздник?", pt: "O que é esta celebração?", th: "นี่เป็นการเฉลิมฉลองอะไร?"
        },
        
        // Student phrases
        "Where is the library?": {
            es: "¿Dónde está la biblioteca?", fr: "Où est la bibliothèque?", de: "Wo ist die Bibliothek?", it: "Dov'è la biblioteca?", 
            ja: "図書館はどこですか？", zh: "图书馆在哪里？", ru: "Где библиотека?", pt: "Onde fica a biblioteca?", th: "ห้องสมุดอยู่ที่ไหน?"
        },
        
        // Other basic phrases
        "Yes": {
            es: "Sí", fr: "Oui", de: "Ja", it: "Sì", 
            ja: "はい", zh: "是", ru: "Да", pt: "Sim", th: "ใช่"
        },
        "No": {
            es: "No", fr: "Non", de: "Nein", it: "No", 
            ja: "いいえ", zh: "不", ru: "Нет", pt: "Não", th: "ไม่"
        },
        "Goodbye": {
            es: "Adiós", fr: "Au revoir", de: "Auf Wiedersehen", it: "Arrivederci", 
            ja: "さようなら", zh: "再见", ru: "До свидания", pt: "Adeus", th: "ลาก่อน"
        }
    };

    // Translation API function - Replace with actual API in production
    function getTranslation(phrase, toLanguage) {
        // Check for medical specific translations first
        if (medicalTranslations[phrase] && medicalTranslations[phrase][toLanguage]) {
            return medicalTranslations[phrase][toLanguage];
        }
        
        // If we have a direct translation in our database
        if (translations[phrase] && translations[phrase][toLanguage]) {
            return translations[phrase][toLanguage];
        }
        
        // Otherwise, provide a placeholder that indicates what would be translated
        return `[${phrase} in ${languages[toLanguage]}]`;
    }

    // Translation dictionary for Spanish phrases
    const spanishPhrases = {
        "No me siento bien": "I don't feel well",
        "Necesito un médico": "I need a doctor",
        "Me duele aquí": "It hurts here",
        "Tengo dolor de cabeza/fiebre/tos": "I have a headache/fever/cough",
        "Soy alérgico/a a...": "I'm allergic to...",
        
        // More Spanish phrases to English translations
        "Hola": "Hello",
        "Gracias": "Thank you",
        "Disculpe": "Excuse me",
        "¿Dónde está...?": "Where is...?",
        "¿Cuánto cuesta?": "How much?",
        "Me gustaría pedir...": "I would like to order...",
        "¿Puede recomendar...?": "Can you recommend...?",
        "¿Hay transporte público cerca?": "Is there public transportation nearby?",
        "Necesito ayuda": "I need help",
        "¿Habla inglés?": "Do you speak English?"
    };

    // Translation dictionary for other languages
    const otherLanguagePhrases = {
        "fr": {
            "Bonjour": "Hello",
            "Merci": "Thank you",
            "Excusez-moi": "Excuse me",
            "Où est...?": "Where is...?",
            "Je ne me sens pas bien": "I don't feel well"
            // Add more as needed
        },
        "de": {
            "Hallo": "Hello",
            "Danke": "Thank you",
            "Entschuldigung": "Excuse me",
            "Wo ist...?": "Where is...?",
            "Ich fühle mich nicht wohl": "I don't feel well"
            // Add more as needed
        }
        // Add more languages as needed
    };

    // Generate cheat sheet
    generateBtn.addEventListener('click', function() {
        const country = document.getElementById('country').value;
        const purpose = document.getElementById('purpose').value;
        const fromLanguage = document.getElementById('from-language').value;
        const toLanguage = document.getElementById('to-language').value;
        const level = document.getElementById('level').value;

        // Validate form
        if (!country || !purpose || !fromLanguage || !toLanguage || !level) {
            alert('Please fill in all fields');
            return;
        }

        // Get appropriate phrases based on purpose and level
        let phrases = [];
        if (phraseSets[purpose] && phraseSets[purpose][level]) {
            phrases = phraseSets[purpose][level];
        } else {
            // Default to travel basic if not found
            phrases = phraseSets.travel.basic;
        }

        // Generate HTML content
        let html = `
            <div class="cheat-sheet-header">
                <h3>${languages[toLanguage]} Language Cheat Sheet</h3>
                <p>For ${purpose.charAt(0).toUpperCase() + purpose.slice(1)} in ${country.charAt(0).toUpperCase() + country.slice(1)}</p>
                <p>Level: ${level.charAt(0).toUpperCase() + level.slice(1)}</p>
            </div>
            <table class="phrase-table">
                <thead>
                    <tr>
                        <th>${languages[fromLanguage]}</th>
                        <th>${languages[toLanguage]}</th>
                        <th>Context</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Add phrase rows
        phrases.forEach(item => {
            let displayPhrase = item.phrase;
            let translationSource = item.phrase;
            
            // If source language is not English, translate the phrase for display
            if (fromLanguage !== 'en') {
                // For Spanish source language
                if (fromLanguage === 'es') {
                    // Find matching Spanish phrase or create one
                    const spanishEquivalent = Object.entries(spanishPhrases).find(
                        ([spanish, english]) => english === item.phrase
                    );
                    
                    if (spanishEquivalent) {
                        displayPhrase = spanishEquivalent[0]; // Spanish phrase
                    } else {
                        // If no direct match, create placeholder
                        displayPhrase = `[${item.phrase} en Español]`;
                    }
                }
                // For other source languages (can be expanded)
                else if (otherLanguagePhrases[fromLanguage]) {
                    const otherLangEquivalent = Object.entries(otherLanguagePhrases[fromLanguage]).find(
                        ([foreign, english]) => english === item.phrase
                    );
                    
                    if (otherLangEquivalent) {
                        displayPhrase = otherLangEquivalent[0];
                    } else {
                        displayPhrase = `[${item.phrase} in ${languages[fromLanguage]}]`;
                    }
                }
            }
            
            // Get translation for the phrase to target language
            const translatedPhrase = getTranslation(translationSource, toLanguage);
            
            html += `
                <tr>
                    <td>${displayPhrase}</td>
                    <td>${translatedPhrase}</td>
                    <td>${item.context}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
            <div class="cheat-sheet-footer">
                <p>Generated by Travel Tongue - Your Language Travel Companion</p>
                <p>Generated on: ${new Date().toLocaleDateString()}</p>
            </div>
        `;

        // Add CSS for the cheat sheet
        html += `
            <style>
                .cheat-sheet-header {
                    margin-bottom: 20px;
                    text-align: center;
                }
                .phrase-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 25px 0;
                }
                .phrase-table th, .phrase-table td {
                    padding: 12px 15px;
                    border-bottom: 1px solid rgba(132, 74, 32, 0.2);
                }
                .phrase-table th {
                    background-color: rgba(132, 74, 32, 0.1);
                    text-align: left;
                }
                .phrase-table tr:hover {
                    background-color: rgba(132, 74, 32, 0.05);
                }
                .cheat-sheet-footer {
                    margin-top: 30px;
                    font-size: 0.8rem;
                    text-align: center;
                    color: rgba(132, 74, 32, 0.6);
                }
                body.dark-mode .phrase-table th {
                    background-color: rgba(231, 197, 156, 0.1);
                }
                body.dark-mode .phrase-table td {
                    border-bottom: 1px solid rgba(231, 197, 156, 0.2);
                }
                body.dark-mode .phrase-table tr:hover {
                    background-color: rgba(231, 197, 156, 0.05);
                }
                body.dark-mode .cheat-sheet-footer {
                    color: rgba(231, 197, 156, 0.6);
                }
            </style>
        `;

        // Display cheat sheet
        cheatSheetContent.innerHTML = html;
        cheatSheetResult.classList.remove('hidden');
        downloadBtn.disabled = false;
        
        // Scroll to result
        cheatSheetResult.scrollIntoView({ behavior: 'smooth' });
    });

    // Download as PDF
    downloadBtn.addEventListener('click', function() {
        // Using jsPDF to generate PDF
        const { jsPDF } = window.jspdf;
        
        // Create PDF instance
        const pdf = new jsPDF();
        
        // Use html2canvas to capture the cheat sheet content
        html2canvas(cheatSheetContent).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190;
            const pageHeight = 290;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Add new pages if content is longer than one page
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // Save PDF
            const countryName = document.getElementById('country').value;
            const languageName = languages[document.getElementById('to-language').value];
            pdf.save(`TravelTongue_${countryName}_${languageName}_CheatSheet.pdf`);
        });
    });
});