const testContentV2 = {
    sections: [
        {
            title: "Grammar",
            questions: [
                {
                    id: 1,
                    question: "She _____ a teacher at the local school.",
                    options: ["am", "is", "are", "be"],
                    correct: 1,
                    explanation: "Use 'is' with third person singular (she, he, it)."
                },
                {
                    id: 2,
                    question: "We _____ to the cinema every Friday.",
                    options: ["go", "goes", "going", "went"],
                    correct: 0,
                    explanation: "Present simple with 'we' uses the base form 'go'."
                },
                {
                    id: 3,
                    question: "_____ you like pizza?",
                    options: ["Do", "Does", "Are", "Is"],
                    correct: 0,
                    explanation: "Use 'Do' for questions with 'you' in present simple."
                },
                {
                    id: 4,
                    question: "My brother _____ football every weekend.",
                    options: ["play", "plays", "playing", "played"],
                    correct: 1,
                    explanation: "Third person singular adds 's' to the verb."
                },
                {
                    id: 5,
                    question: "I _____ watching TV right now.",
                    options: ["am", "is", "are", "be"],
                    correct: 0,
                    explanation: "Present continuous with 'I' uses 'am'."
                },
                {
                    id: 6,
                    question: "They _____ studying for the exam.",
                    options: ["am", "is", "are", "be"],
                    correct: 2,
                    explanation: "Present continuous with 'they' uses 'are'."
                },
                {
                    id: 7,
                    question: "Yesterday, I _____ to the park.",
                    options: ["go", "goes", "went", "going"],
                    correct: 2,
                    explanation: "Past simple of 'go' is 'went'."
                },
                {
                    id: 8,
                    question: "She _____ her homework last night.",
                    options: ["do", "does", "did", "done"],
                    correct: 2,
                    explanation: "Past simple of 'do' is 'did'."
                },
                {
                    id: 9,
                    question: "We _____ happy yesterday.",
                    options: ["was", "were", "are", "is"],
                    correct: 1,
                    explanation: "Past tense of 'be' with 'we' is 'were'."
                },
                {
                    id: 10,
                    question: "Tomorrow, she _____ visit her grandmother.",
                    options: ["will", "is", "was", "has"],
                    correct: 0,
                    explanation: "Future simple uses 'will' + base verb."
                },
                {
                    id: 11,
                    question: "I _____ going to travel next month.",
                    options: ["am", "is", "are", "will"],
                    correct: 0,
                    explanation: "'Be going to' future with 'I' uses 'am'."
                },
                {
                    id: 12,
                    question: "She _____ lived here for five years.",
                    options: ["have", "has", "had", "having"],
                    correct: 1,
                    explanation: "Present perfect with 'she' uses 'has'."
                },
                {
                    id: 13,
                    question: "I _____ never been to Paris.",
                    options: ["have", "has", "had", "am"],
                    correct: 0,
                    explanation: "Present perfect with 'I' uses 'have'."
                },
                {
                    id: 14,
                    question: "This book is _____ than that one.",
                    options: ["good", "better", "best", "more good"],
                    correct: 1,
                    explanation: "Comparative form of 'good' is 'better'."
                },
                {
                    id: 15,
                    question: "She is the _____ student in the class.",
                    options: ["smart", "smarter", "smartest", "most smart"],
                    correct: 2,
                    explanation: "Superlative form of 'smart' is 'smartest'."
                },
                {
                    id: 16,
                    question: "I _____ swim when I was young.",
                    options: ["can", "could", "should", "must"],
                    correct: 1,
                    explanation: "Past ability is expressed with 'could'."
                },
                {
                    id: 17,
                    question: "You _____ eat more vegetables.",
                    options: ["can", "could", "should", "must"],
                    correct: 2,
                    explanation: "'Should' gives advice or recommendations."
                },
                {
                    id: 18,
                    question: "There _____ a cat in the garden.",
                    options: ["is", "are", "was", "were"],
                    correct: 0,
                    explanation: "'There is' is used with singular nouns."
                },
                {
                    id: 19,
                    question: "There _____ many books on the table.",
                    options: ["is", "are", "was", "were"],
                    correct: 1,
                    explanation: "'There are' is used with plural nouns."
                },
                {
                    id: 20,
                    question: "I don't have _____ money.",
                    options: ["some", "any", "many", "much"],
                    correct: 1,
                    explanation: "Use 'any' in negative sentences."
                },
                {
                    id: 21,
                    question: "Would you like _____ coffee?",
                    options: ["some", "any", "many", "much"],
                    correct: 0,
                    explanation: "Use 'some' in offers and requests."
                },
                {
                    id: 22,
                    question: "How _____ apples do you want?",
                    options: ["much", "many", "some", "any"],
                    correct: 1,
                    explanation: "Use 'many' with countable nouns."
                },
                {
                    id: 23,
                    question: "How _____ water do you drink?",
                    options: ["much", "many", "some", "any"],
                    correct: 0,
                    explanation: "Use 'much' with uncountable nouns."
                },
                {
                    id: 24,
                    question: "The meeting is _____ 3 o'clock.",
                    options: ["in", "on", "at", "by"],
                    correct: 2,
                    explanation: "Use 'at' with specific times."
                },
                {
                    id: 25,
                    question: "My birthday is _____ May.",
                    options: ["in", "on", "at", "by"],
                    correct: 0,
                    explanation: "Use 'in' with months."
                },
                {
                    id: 26,
                    question: "The party is _____ Saturday.",
                    options: ["in", "on", "at", "by"],
                    correct: 1,
                    explanation: "Use 'on' with days of the week."
                },
                {
                    id: 27,
                    question: "If it _____ tomorrow, we will stay home.",
                    options: ["rain", "rains", "will rain", "rained"],
                    correct: 1,
                    explanation: "First conditional: if + present simple, will + base form."
                },
                {
                    id: 28,
                    question: "If I _____ rich, I would travel the world.",
                    options: ["am", "was", "were", "will be"],
                    correct: 2,
                    explanation: "Second conditional uses 'were' for all persons."
                },
                {
                    id: 29,
                    question: "I _____ coffee every morning when I lived in Italy.",
                    options: ["drink", "drank", "used to drink", "am drinking"],
                    correct: 2,
                    explanation: "'Used to' expresses past habits."
                },
                {
                    id: 30,
                    question: "The book _____ by a famous author.",
                    options: ["wrote", "was written", "is writing", "writes"],
                    correct: 1,
                    explanation: "Passive voice: was/were + past participle."
                }
            ]
        },
        {
            title: "Vocabulary",
            questions: [
                {
                    id: 31,
                    question: "What do you call the person who teaches students?",
                    options: ["doctor", "teacher", "driver", "cook"],
                    correct: 1,
                    explanation: "A teacher is someone who teaches students."
                },
                {
                    id: 32,
                    question: "Where do you go to buy bread?",
                    options: ["hospital", "school", "bakery", "library"],
                    correct: 2,
                    explanation: "You buy bread at a bakery."
                },
                {
                    id: 33,
                    question: "What do you use to write on paper?",
                    options: ["spoon", "pen", "plate", "cup"],
                    correct: 1,
                    explanation: "You use a pen to write on paper."
                },
                {
                    id: 34,
                    question: "Which meal do you eat in the morning?",
                    options: ["lunch", "dinner", "breakfast", "snack"],
                    correct: 2,
                    explanation: "Breakfast is the meal you eat in the morning."
                },
                {
                    id: 35,
                    question: "What color do you get when you mix red and yellow?",
                    options: ["green", "blue", "orange", "purple"],
                    correct: 2,
                    explanation: "Red and yellow make orange."
                },
                {
                    id: 36,
                    question: "How many days are there in a week?",
                    options: ["five", "six", "seven", "eight"],
                    correct: 2,
                    explanation: "There are seven days in a week."
                },
                {
                    id: 37,
                    question: "What season comes after winter?",
                    options: ["summer", "autumn", "spring", "fall"],
                    correct: 2,
                    explanation: "Spring comes after winter."
                },
                {
                    id: 38,
                    question: "Which animal gives us milk?",
                    options: ["dog", "cat", "cow", "bird"],
                    correct: 2,
                    explanation: "Cows give us milk."
                },
                {
                    id: 39,
                    question: "What do you wear on your feet?",
                    options: ["hat", "gloves", "shoes", "scarf"],
                    correct: 2,
                    explanation: "You wear shoes on your feet."
                },
                {
                    id: 40,
                    question: "Where do you sleep at night?",
                    options: ["kitchen", "bathroom", "bedroom", "garden"],
                    correct: 2,
                    explanation: "You sleep in the bedroom."
                },
                {
                    id: 41,
                    question: "What do you use to cut paper?",
                    options: ["scissors", "hammer", "brush", "key"],
                    correct: 0,
                    explanation: "You use scissors to cut paper."
                },
                {
                    id: 42,
                    question: "Which transport flies in the sky?",
                    options: ["car", "bus", "airplane", "bicycle"],
                    correct: 2,
                    explanation: "An airplane flies in the sky."
                },
                {
                    id: 43,
                    question: "What do you do when you are tired?",
                    options: ["run", "sleep", "dance", "sing"],
                    correct: 1,
                    explanation: "When you are tired, you sleep."
                },
                {
                    id: 44,
                    question: "Which is the opposite of 'hot'?",
                    options: ["warm", "cool", "cold", "dry"],
                    correct: 2,
                    explanation: "'Cold' is the opposite of 'hot'."
                },
                {
                    id: 45,
                    question: "What do you use to see better?",
                    options: ["glasses", "shoes", "hat", "watch"],
                    correct: 0,
                    explanation: "You use glasses to see better."
                },
                {
                    id: 46,
                    question: "Where do sick people go?",
                    options: ["school", "hospital", "restaurant", "cinema"],
                    correct: 1,
                    explanation: "Sick people go to the hospital."
                },
                {
                    id: 47,
                    question: "What do you call your father's brother?",
                    options: ["cousin", "uncle", "nephew", "grandfather"],
                    correct: 1,
                    explanation: "Your father's brother is your uncle."
                },
                {
                    id: 48,
                    question: "Which fruit is yellow and long?",
                    options: ["apple", "orange", "banana", "grape"],
                    correct: 2,
                    explanation: "A banana is yellow and long."
                },
                {
                    id: 49,
                    question: "What do you use to clean your teeth?",
                    options: ["soap", "toothbrush", "towel", "comb"],
                    correct: 1,
                    explanation: "You use a toothbrush to clean your teeth."
                },
                {
                    id: 50,
                    question: "How many months are there in a year?",
                    options: ["ten", "eleven", "twelve", "thirteen"],
                    correct: 2,
                    explanation: "There are twelve months in a year."
                }
            ]
        },
        {
            title: "Reading Comprehension",
            questions: [
                {
                    id: 51,
                    passage: "My name is Sarah and I am 25 years old. I work as a nurse in a big hospital in the city center. I start work at 7 AM and finish at 3 PM. I really enjoy helping people and making them feel better. After work, I usually go to the gym or meet my friends for coffee. On weekends, I like to visit my parents who live in a small town outside the city. They have a beautiful garden with many flowers and vegetables. My mother is an excellent cook and always prepares delicious meals when I visit. My father likes to show me his new plants and tell me stories about when he was young. I love spending time with my family because they make me feel happy and relaxed.",
                    question: "What is Sarah's job?",
                    options: ["teacher", "nurse", "doctor", "cook"],
                    correct: 1,
                    explanation: "The text states 'I work as a nurse in a big hospital'."
                },
                {
                    id: 52,
                    passage: "My name is Sarah and I am 25 years old. I work as a nurse in a big hospital in the city center. I start work at 7 AM and finish at 3 PM. I really enjoy helping people and making them feel better. After work, I usually go to the gym or meet my friends for coffee. On weekends, I like to visit my parents who live in a small town outside the city. They have a beautiful garden with many flowers and vegetables. My mother is an excellent cook and always prepares delicious meals when I visit. My father likes to show me his new plants and tell me stories about when he was young. I love spending time with my family because they make me feel happy and relaxed.",
                    question: "What time does Sarah start work?",
                    options: ["6 AM", "7 AM", "8 AM", "9 AM"],
                    correct: 1,
                    explanation: "The text says 'I start work at 7 AM'."
                },
                {
                    id: 53,
                    passage: "My name is Sarah and I am 25 years old. I work as a nurse in a big hospital in the city center. I start work at 7 AM and finish at 3 PM. I really enjoy helping people and making them feel better. After work, I usually go to the gym or meet my friends for coffee. On weekends, I like to visit my parents who live in a small town outside the city. They have a beautiful garden with many flowers and vegetables. My mother is an excellent cook and always prepares delicious meals when I visit. My father likes to show me his new plants and tell me stories about when he was young. I love spending time with my family because they make me feel happy and relaxed.",
                    question: "Where do Sarah's parents live?",
                    options: ["in the city center", "in a big hospital", "in a small town", "in another country"],
                    correct: 2,
                    explanation: "The text mentions 'my parents who live in a small town outside the city'."
                },
                {
                    id: 54,
                    passage: "My name is Sarah and I am 25 years old. I work as a nurse in a big hospital in the city center. I start work at 7 AM and finish at 3 PM. I really enjoy helping people and making them feel better. After work, I usually go to the gym or meet my friends for coffee. On weekends, I like to visit my parents who live in a small town outside the city. They have a beautiful garden with many flowers and vegetables. My mother is an excellent cook and always prepares delicious meals when I visit. My father likes to show me his new plants and tell me stories about when he was young. I love spending time with my family because they make me feel happy and relaxed.",
                    question: "What does Sarah's father like to do?",
                    options: ["cook meals", "go to the gym", "show his plants and tell stories", "meet friends"],
                    correct: 2,
                    explanation: "The text says 'My father likes to show me his new plants and tell me stories'."
                },
                {
                    id: 55,
                    passage: "Tom is a student at the local university. He studies computer science and is in his second year. Every morning, he wakes up at 6:30 AM and has breakfast with his roommate, Mike. They live in a small apartment near the campus. Tom's classes start at 8 AM and he usually has four classes each day. His favorite subject is programming because he enjoys creating new software. During lunch break, he often goes to the library to study or do homework. After classes, Tom works part-time at a computer store to earn some money. He helps customers choose the right computer for their needs. In the evening, he likes to relax by playing video games or watching movies with his friends. On weekends, Tom visits his girlfriend, Lisa, who studies at a different university in the next city.",
                    question: "What does Tom study?",
                    options: ["medicine", "computer science", "business", "art"],
                    correct: 1,
                    explanation: "The text states 'He studies computer science'."
                },
                {
                    id: 56,
                    passage: "Tom is a student at the local university. He studies computer science and is in his second year. Every morning, he wakes up at 6:30 AM and has breakfast with his roommate, Mike. They live in a small apartment near the campus. Tom's classes start at 8 AM and he usually has four classes each day. His favorite subject is programming because he enjoys creating new software. During lunch break, he often goes to the library to study or do homework. After classes, Tom works part-time at a computer store to earn some money. He helps customers choose the right computer for their needs. In the evening, he likes to relax by playing video games or watching movies with his friends. On weekends, Tom visits his girlfriend, Lisa, who studies at a different university in the next city.",
                    question: "Who is Tom's roommate?",
                    options: ["Lisa", "Mike", "his girlfriend", "his brother"],
                    correct: 1,
                    explanation: "The text mentions 'has breakfast with his roommate, Mike'."
                },
                {
                    id: 57,
                    passage: "Tom is a student at the local university. He studies computer science and is in his second year. Every morning, he wakes up at 6:30 AM and has breakfast with his roommate, Mike. They live in a small apartment near the campus. Tom's classes start at 8 AM and he usually has four classes each day. His favorite subject is programming because he enjoys creating new software. During lunch break, he often goes to the library to study or do homework. After classes, Tom works part-time at a computer store to earn some money. He helps customers choose the right computer for their needs. In the evening, he likes to relax by playing video games or watching movies with his friends. On weekends, Tom visits his girlfriend, Lisa, who studies at a different university in the next city.",
                    question: "What is Tom's favorite subject?",
                    options: ["mathematics", "programming", "history", "English"],
                    correct: 1,
                    explanation: "The text says 'His favorite subject is programming'."
                },
                {
                    id: 58,
                    passage: "Tom is a student at the local university. He studies computer science and is in his second year. Every morning, he wakes up at 6:30 AM and has breakfast with his roommate, Mike. They live in a small apartment near the campus. Tom's classes start at 8 AM and he usually has four classes each day. His favorite subject is programming because he enjoys creating new software. During lunch break, he often goes to the library to study or do homework. After classes, Tom works part-time at a computer store to earn some money. He helps customers choose the right computer for their needs. In the evening, he likes to relax by playing video games or watching movies with his friends. On weekends, Tom visits his girlfriend, Lisa, who studies at a different university in the next city.",
                    question: "Where does Tom work part-time?",
                    options: ["at the library", "at a restaurant", "at a computer store", "at the university"],
                    correct: 2,
                    explanation: "The text states 'Tom works part-time at a computer store'."
                }
            ]
        }
    ]
};
