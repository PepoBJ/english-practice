const cheatsheetContent = {
    grammar: [
        {
            title: "Verb TO BE",
            rule: "I am, you are, he/she/it is, we are, they are",
            examples: ["I am a student", "She is happy", "Are you ready?"],
            negative: "I am not, you aren't, he/she/it isn't, we aren't, they aren't",
            question: "Am I...? Are you...? Is he/she/it...? Are we/they...?"
        },
        {
            title: "Personal Pronouns",
            rule: "Subject: I, you, he, she, it, we, they / Object: me, you, him, her, it, us, them",
            examples: ["I see him", "She likes me", "Call them"],
            negative: "Use with negative verbs",
            question: "Who...? What...?"
        },
        {
            title: "Possessive Adjectives",
            rule: "my, your, his, her, its, our, their + noun",
            examples: ["My car", "Your house", "His name"],
            negative: "Not my, not your, etc.",
            question: "Whose...?"
        },
        {
            title: "Possessive Pronouns",
            rule: "mine, yours, his, hers, ours, theirs (no noun after)",
            examples: ["This is mine", "The book is yours"],
            negative: "It's not mine",
            question: "Whose is this?"
        },
        {
            title: "Possessive 's",
            rule: "Name + 's / Plural + '",
            examples: ["John's car", "The students' books"],
            negative: "Not John's",
            question: "Whose car is it?"
        },
        {
            title: "Singular and Plural Nouns",
            rule: "Add -s, -es, -ies / Irregular: man-men, child-children",
            examples: ["book-books", "box-boxes", "city-cities"],
            negative: "No plural form needed",
            question: "How many...?"
        },
        {
            title: "Adjectives",
            rule: "Before noun or after be/seem/look",
            examples: ["A big house", "She is tall", "It looks nice"],
            negative: "Not + adjective",
            question: "What...like? How...?"
        },
        {
            title: "Present Simple",
            rule: "I/you/we/they + verb / he/she/it + verb+s",
            examples: ["I work", "She works", "Do you work?"],
            negative: "don't/doesn't + verb",
            question: "Do/Does + subject + verb?"
        },
        {
            title: "Present Continuous",
            rule: "am/is/are + verb+ing",
            examples: ["I am working", "She is reading", "Are you coming?"],
            negative: "am not/isn't/aren't + verb+ing",
            question: "Am/Is/Are + subject + verb+ing?"
        },
        {
            title: "Past Simple",
            rule: "Regular: verb+ed / Irregular: went, saw, did",
            examples: ["I worked", "She went", "Did you see?"],
            negative: "didn't + verb",
            question: "Did + subject + verb?"
        },
        {
            title: "Past Continuous",
            rule: "was/were + verb+ing",
            examples: ["I was working", "They were playing"],
            negative: "wasn't/weren't + verb+ing",
            question: "Was/Were + subject + verb+ing?"
        },
        {
            title: "Future - be going to",
            rule: "am/is/are + going to + verb",
            examples: ["I'm going to travel", "She's going to study"],
            negative: "am not/isn't/aren't going to + verb",
            question: "Am/Is/Are + subject + going to + verb?"
        },
        {
            title: "Future - will",
            rule: "will + verb",
            examples: ["I will help", "She will come", "Will you go?"],
            negative: "won't + verb",
            question: "Will + subject + verb?"
        },
        {
            title: "Present Perfect",
            rule: "have/has + past participle",
            examples: ["I have lived here", "She has finished", "Have you been?"],
            negative: "haven't/hasn't + past participle",
            question: "Have/Has + subject + past participle?"
        },
        {
            title: "Present Perfect with for/since",
            rule: "for + period of time / since + point in time",
            examples: ["for 3 years", "since 2020", "since Monday"],
            negative: "haven't/hasn't + for/since",
            question: "How long have you...?"
        },
        {
            title: "Present Perfect with yet/already/just",
            rule: "yet (negative/questions), already (positive), just (recent past)",
            examples: ["I haven't finished yet", "I've already done it", "I've just arrived"],
            negative: "haven't...yet",
            question: "Have you...yet?"
        },
        {
            title: "Past Perfect",
            rule: "had + past participle",
            examples: ["I had finished before she arrived"],
            negative: "hadn't + past participle",
            question: "Had + subject + past participle?"
        },
        {
            title: "Modal Verbs - can/could",
            rule: "can/could + verb (ability, possibility, permission)",
            examples: ["I can swim", "Could you help?", "I could run fast"],
            negative: "can't/couldn't + verb",
            question: "Can/Could + subject + verb?"
        },
        {
            title: "Modal Verbs - should",
            rule: "should + verb (advice, recommendation)",
            examples: ["You should study", "She should go", "Should I call?"],
            negative: "shouldn't + verb",
            question: "Should + subject + verb?"
        },
        {
            title: "Modal Verbs - must/have to",
            rule: "must/have to + verb (obligation)",
            examples: ["I must go", "You have to work", "Must I pay?"],
            negative: "mustn't/don't have to + verb",
            question: "Must/Do you have to + verb?"
        },
        {
            title: "Modal Verbs - might",
            rule: "might + verb (possibility)",
            examples: ["It might rain", "She might come"],
            negative: "might not + verb",
            question: "Might + subject + verb?"
        },
        {
            title: "Used to",
            rule: "used to + verb (past habits)",
            examples: ["I used to smoke", "She used to live here"],
            negative: "didn't use to + verb",
            question: "Did + subject + use to + verb?"
        },
        {
            title: "Comparatives",
            rule: "adjective+er than / more + adjective + than",
            examples: ["taller than", "more beautiful than", "better than"],
            negative: "not as...as",
            question: "Which is + comparative?"
        },
        {
            title: "Superlatives",
            rule: "the + adjective+est / the most + adjective",
            examples: ["the tallest", "the most beautiful", "the best"],
            negative: "not the + superlative",
            question: "What is the + superlative?"
        },
        {
            title: "First Conditional",
            rule: "If + present simple, will + verb",
            examples: ["If it rains, I will stay home", "If you study, you will pass"],
            negative: "If + present, won't + verb",
            question: "What will happen if...?"
        },
        {
            title: "Second Conditional",
            rule: "If + past simple, would + verb",
            examples: ["If I had money, I would travel", "If she studied, she would pass"],
            negative: "If + past, wouldn't + verb",
            question: "What would you do if...?"
        },
        {
            title: "Passive Voice",
            rule: "be + past participle",
            examples: ["The book was written by him", "English is spoken here"],
            negative: "be + not + past participle",
            question: "Is/Was + subject + past participle?"
        },
        {
            title: "Relative Clauses",
            rule: "who (people), which (things), that (people/things), whose (possession)",
            examples: ["The man who lives here", "The book which I read", "The car that I bought"],
            negative: "Use with negative verbs",
            question: "Who/Which/What...?"
        },
        {
            title: "There is/There are",
            rule: "There is + singular / There are + plural",
            examples: ["There is a book", "There are books", "Is there a pen?"],
            negative: "There isn't/aren't",
            question: "Is/Are there...?"
        },
        {
            title: "There was/There were",
            rule: "There was + singular / There were + plural",
            examples: ["There was a party", "There were people", "Was there music?"],
            negative: "There wasn't/weren't",
            question: "Was/Were there...?"
        },
        {
            title: "Some/Any",
            rule: "some (positive), any (negative/questions)",
            examples: ["I have some money", "I don't have any money", "Do you have any?"],
            negative: "any in negative sentences",
            question: "any in questions"
        },
        {
            title: "Much/Many/A lot of",
            rule: "much (uncountable), many (countable), a lot of (both)",
            examples: ["much water", "many books", "a lot of time/friends"],
            negative: "not much/many",
            question: "How much/many?"
        },
        {
            title: "Too/Enough",
            rule: "too + adjective (excessive), adjective + enough (sufficient)",
            examples: ["too hot", "too expensive", "old enough", "big enough"],
            negative: "not...enough",
            question: "Is it too...? Is it...enough?"
        },
        {
            title: "Countable/Uncountable Nouns",
            rule: "Countable: can count (a book, books) / Uncountable: can't count (water, music)",
            examples: ["a book, two books", "some water", "much time"],
            negative: "Use any with uncountable",
            question: "How many (countable)? How much (uncountable)?"
        },
        {
            title: "Articles - a/an/the",
            rule: "a/an (first mention), the (specific/known)",
            examples: ["a book", "an apple", "the book I bought"],
            negative: "no article with general plurals",
            question: "Which + the?"
        },
        {
            title: "Prepositions of Time",
            rule: "at (time), on (days/dates), in (months/years/periods)",
            examples: ["at 3 o'clock", "on Monday", "in January", "in the morning"],
            negative: "Use with negative time expressions",
            question: "When...?"
        },
        {
            title: "Prepositions of Place",
            rule: "at (point), on (surface), in (enclosed space)",
            examples: ["at home", "on the table", "in the box", "under the bed"],
            negative: "not at/on/in",
            question: "Where...?"
        },
        {
            title: "Adverbs of Frequency",
            rule: "always, usually, often, sometimes, rarely, never (before main verb, after be)",
            examples: ["I always work", "She is usually late", "Do you often travel?"],
            negative: "never, rarely",
            question: "How often...?"
        },
        {
            title: "Adverbs of Manner",
            rule: "adjective + ly (carefully, quickly, slowly)",
            examples: ["He drives carefully", "She speaks slowly", "They work hard"],
            negative: "don't + verb + adverb",
            question: "How...?"
        },
        {
            title: "Question Words",
            rule: "What, Where, When, Who, Why, How, Which, Whose",
            examples: ["What is this?", "Where are you?", "When did you arrive?"],
            negative: "Use with negative answers",
            question: "All are question words"
        },
        {
            title: "Word Order in Questions",
            rule: "Question word + auxiliary + subject + main verb",
            examples: ["What do you do?", "Where did you go?", "How are you?"],
            negative: "Don't change word order in negative answers",
            question: "Follow question word order"
        },
        {
            title: "Reported Speech",
            rule: "Change tenses back: present→past, past→past perfect",
            examples: ["He said he was tired", "She told me she had finished"],
            negative: "He said he wasn't...",
            question: "He asked if/whether..."
        },
        {
            title: "Gerunds and Infinitives",
            rule: "verb + ing (gerund) / to + verb (infinitive)",
            examples: ["I enjoy swimming", "I want to go", "I like reading"],
            negative: "don't enjoy + gerund, don't want + infinitive",
            question: "Do you enjoy + gerund? Do you want + infinitive?"
        },
        {
            title: "Phrasal Verbs",
            rule: "verb + preposition/adverb (meaning changes)",
            examples: ["turn on", "turn off", "look up", "give up", "put on"],
            negative: "don't + phrasal verb",
            question: "Can you + phrasal verb?"
        },
        {
            title: "Something/Anything/Nothing",
            rule: "something (positive), anything (negative/questions), nothing (negative meaning)",
            examples: ["I have something", "I don't have anything", "There's nothing here"],
            negative: "anything, nothing",
            question: "Is there anything?"
        },
        {
            title: "Somewhere/Anywhere/Nowhere",
            rule: "somewhere (positive), anywhere (negative/questions), nowhere (negative meaning)",
            examples: ["I'm going somewhere", "I'm not going anywhere", "There's nowhere to go"],
            negative: "anywhere, nowhere",
            question: "Are you going anywhere?"
        },
        {
            title: "Imperatives",
            rule: "Base form of verb (commands, instructions, requests)",
            examples: ["Sit down", "Don't smoke", "Please help me", "Let's go"],
            negative: "Don't + verb",
            question: "Can you + verb? (polite request)"
        }
    ],
    vocabulary: [
        {
            category: "Time Expressions",
            items: ["always", "usually", "often", "sometimes", "never", "every day", "once a week", "twice a month", "already", "yet", "just", "since", "for", "ago"]
        },
        {
            category: "Question Words",
            items: ["What", "Where", "When", "Who", "Why", "How", "Which", "Whose", "How much", "How many", "How long", "How often"]
        },
        {
            category: "Prepositions of Time",
            items: ["at (time)", "on (days/dates)", "in (months/years)", "during", "for", "since", "until", "by", "before", "after"]
        },
        {
            category: "Prepositions of Place",
            items: ["at (specific point)", "on (surface)", "in (enclosed space)", "under", "over", "between", "among", "next to", "behind", "in front of"]
        },
        {
            category: "Connectors",
            items: ["and", "but", "or", "so", "because", "although", "however", "first", "then", "finally", "also", "too", "either"]
        }
    ],
    phrases: [
        {
            situation: "Greetings",
            phrases: ["Hello/Hi", "Good morning/afternoon/evening", "How are you?", "Nice to meet you", "See you later", "Goodbye/Bye"]
        },
        {
            situation: "Asking for Information",
            phrases: ["Excuse me, where is...?", "Could you tell me...?", "Do you know...?", "What time is it?", "How much does it cost?"]
        },
        {
            situation: "Shopping",
            phrases: ["How much is this?", "Can I try it on?", "Do you have it in...?", "I'll take it", "Can I pay by card?"]
        },
        {
            situation: "Restaurant",
            phrases: ["I'd like to order...", "Can I have the menu?", "What do you recommend?", "The bill, please", "Is service included?"]
        },
        {
            situation: "Directions",
            phrases: ["Go straight", "Turn left/right", "It's on your left/right", "It's opposite...", "It's next to..."]
        }
    ]
};
