let vocabularyTopics = [];

function loadVocabularyTopics() {
    vocabularyTopics = [
        {
            title: "Greetings",
            definition: "Common expressions used when meeting, greeting, or saying goodbye to people.",
            structure: `
                <strong>Meeting someone:</strong> Hello, Hi, Good morning/afternoon/evening<br>
                <strong>Asking about someone:</strong> How are you? How's it going?<br>
                <strong>Leaving:</strong> Goodbye, Bye, See you later, Have a good day
            `,
            examples: `
                <strong>Formal:</strong><br>
                • Good morning, Mr. Smith<br>
                • Nice to meet you<br>
                • Have a good day<br><br>
                <strong>Informal:</strong><br>
                • Hi! How's it going?<br>
                • Hey! What's up?<br>
                • See you later!<br>
                • Catch you later!
            `,
            exercises: [
                { question: "What do you say when you meet someone for the first time?", answer: "Nice to meet you." },
                { question: "How do you greet someone in the morning?", answer: "Good morning." },
                { question: "What's an informal way to say hello?", answer: "Hi! / Hey!" },
                { question: "How do you ask about someone's condition?", answer: "How are you?" },
                { question: "What do you say when leaving work?", answer: "Have a good day! / See you tomorrow!" },
                { question: "Respond to 'How are you?'", answer: "I'm fine, thank you. / Good, thanks." },
                { question: "What's a casual way to say goodbye?", answer: "See you later! / Bye!" },
                { question: "How do you greet someone in the evening?", answer: "Good evening." },
                { question: "What do you say at the end of the day?", answer: "Good night." },
                { question: "How do you respond to 'Nice to meet you'?", answer: "Nice to meet you too." }
            ]
        },
        {
            title: "Days of the week",
            definition: "The seven days that make up a week, used for scheduling and talking about time.",
            structure: `
                Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday<br>
                <strong>Preposition:</strong> Use 'on' with days<br>
                <strong>Weekend:</strong> Saturday and Sunday<br>
                <strong>Weekdays:</strong> Monday to Friday
            `,
            examples: `
                • I work on Monday<br>
                • The meeting is on Tuesday<br>
                • We don't work on Saturday and Sunday<br>
                • Every Wednesday I go to the gym<br>
                • Last Friday was my birthday<br>
                • Next Thursday is a holiday<br>
                • I love weekends<br>
                • Weekdays are busy
            `,
            exercises: [
                { question: "What day comes after Tuesday?", answer: "Wednesday" },
                { question: "Complete: I have English class ___ Monday.", answer: "I have English class on Monday." },
                { question: "What day comes before Sunday?", answer: "Saturday" },
                { question: "Name the weekend days:", answer: "Saturday and Sunday" },
                { question: "What day comes after Friday?", answer: "Saturday" },
                { question: "Complete: ___ is the first day of the week.", answer: "Monday is the first day of the week." },
                { question: "What are the weekdays?", answer: "Monday, Tuesday, Wednesday, Thursday, Friday" },
                { question: "Complete: I don't work ___ weekends.", answer: "I don't work on weekends." },
                { question: "What day comes before Wednesday?", answer: "Tuesday" },
                { question: "Complete: See you ___ Friday!", answer: "See you on Friday!" }
            ]
        },
        {
            title: "Months",
            definition: "The twelve months of the year, used for dates, seasons, and time expressions.",
            structure: `
                January, February, March, April, May, June, July, August, September, October, November, December<br>
                <strong>Preposition:</strong> Use 'in' with months<br>
                <strong>Seasons:</strong> Spring (Mar-May), Summer (Jun-Aug), Fall (Sep-Nov), Winter (Dec-Feb)
            `,
            examples: `
                • I was born in January<br>
                • School starts in September<br>
                • Christmas is in December<br>
                • Summer vacation is in July and August<br>
                • My birthday is in March<br>
                • It's cold in February<br>
                • Halloween is in October<br>
                • Spring begins in March
            `,
            exercises: [
                { question: "What month comes after January?", answer: "February" },
                { question: "Complete: Christmas is ___ December.", answer: "Christmas is in December." },
                { question: "What month has only 28 days (usually)?", answer: "February" },
                { question: "Name the summer months:", answer: "June, July, August" },
                { question: "What month comes before October?", answer: "September" },
                { question: "Complete: School starts ___ September.", answer: "School starts in September." },
                { question: "What's the first month of the year?", answer: "January" },
                { question: "What's the last month of the year?", answer: "December" },
                { question: "Name the spring months:", answer: "March, April, May" },
                { question: "Complete: My vacation is ___ July.", answer: "My vacation is in July." }
            ]
        },
        {
            title: "Numbers (1-100 and high numbers)",
            definition: "Cardinal numbers used for counting, quantities, prices, and mathematical operations.",
            structure: `
                <strong>1-20:</strong> one, two, three... twenty<br>
                <strong>Tens:</strong> twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety<br>
                <strong>Hundreds:</strong> one hundred, two hundred, etc.<br>
                <strong>Thousands:</strong> one thousand, ten thousand, etc.
            `,
            examples: `
                <strong>Basic numbers:</strong><br>
                • 21 = twenty-one<br>
                • 35 = thirty-five<br>
                • 99 = ninety-nine<br><br>
                <strong>Large numbers:</strong><br>
                • 100 = one hundred<br>
                • 1,000 = one thousand<br>
                • 1,000,000 = one million<br>
                • 1,000,000,000 = one billion
            `,
            exercises: [
                { question: "How do you say 47?", answer: "forty-seven" },
                { question: "How do you write 'three thousand five hundred'?", answer: "3,500" },
                { question: "What number comes after nineteen?", answer: "twenty" },
                { question: "How do you say 100?", answer: "one hundred" },
                { question: "Write in words: 73", answer: "seventy-three" },
                { question: "How do you say 1,000,000?", answer: "one million" },
                { question: "What's 50 + 30?", answer: "eighty" },
                { question: "Write in numbers: sixty-two", answer: "62" },
                { question: "How do you say 1,000?", answer: "one thousand" },
                { question: "What comes before forty?", answer: "thirty-nine" }
            ]
        },
        {
            title: "Ordinal numbers",
            definition: "Numbers that show position or order (first, second, third, etc.).",
            structure: `
                <strong>Special forms:</strong> 1st (first), 2nd (second), 3rd (third)<br>
                <strong>Regular pattern:</strong> 4th, 5th, 6th... + th<br>
                <strong>Usage:</strong> the + ordinal number
            `,
            examples: `
                • The first day of school<br>
                • My second car<br>
                • On the 5th of May<br>
                • She finished third in the race<br>
                • It's my tenth birthday<br>
                • The twenty-first century<br>
                • He lives on the fourth floor<br>
                • This is our first meeting
            `,
            exercises: [
                { question: "What's the ordinal for 1?", answer: "first" },
                { question: "What's the ordinal for 3?", answer: "third" },
                { question: "Complete: Today is the ___ of January. (5)", answer: "Today is the fifth of January." },
                { question: "What's the ordinal for 12?", answer: "twelfth" },
                { question: "Complete: This is my ___ year here. (2)", answer: "This is my second year here." },
                { question: "What's the ordinal for 21?", answer: "twenty-first" },
                { question: "Complete: She lives on the ___ floor. (9)", answer: "She lives on the ninth floor." },
                { question: "What's the ordinal for 30?", answer: "thirtieth" },
                { question: "Complete: It's our ___ anniversary. (10)", answer: "It's our tenth anniversary." },
                { question: "What's the ordinal for 2?", answer: "second" }
            ]
        },
        {
            title: "Dates",
            definition: "Ways to express and write dates in English.",
            structure: `
                <strong>Format 1:</strong> Month + ordinal + year<br>
                <strong>Format 2:</strong> Ordinal + of + month + year<br>
                <strong>Writing:</strong> 1/15/2023 or 15/1/2023<br>
                <strong>Prepositions:</strong> on + date, in + month/year
            `,
            examples: `
                • January 15th, 2023<br>
                • The 15th of January, 2023<br>
                • My birthday is on March 3rd<br>
                • I was born in 1995<br>
                • The meeting is on Friday, May 10th<br>
                • School starts on September 1st<br>
                • Today is Monday, October 23rd<br>
                • Christmas is on December 25th
            `,
            exercises: [
                { question: "How do you say 3/15/2023?", answer: "March fifteenth, twenty twenty-three" },
                { question: "Complete: My birthday is ___ May 5th.", answer: "My birthday is on May 5th." },
                { question: "How do you write 'the second of June'?", answer: "June 2nd" },
                { question: "Complete: I was born ___ 1990.", answer: "I was born in 1990." },
                { question: "How do you say today's date? (use any date)", answer: "Today is [day], [month] [ordinal], [year]" },
                { question: "Complete: Christmas is ___ December 25th.", answer: "Christmas is on December 25th." },
                { question: "How do you write 'July fourth'?", answer: "July 4th" },
                { question: "Complete: The meeting is ___ Monday.", answer: "The meeting is on Monday." },
                { question: "How do you say 12/31/2023?", answer: "December thirty-first, twenty twenty-three" },
                { question: "Complete: School ends ___ June.", answer: "School ends in June." }
            ]
        },
        {
            title: "Countries and nationalities",
            definition: "Names of countries and their corresponding nationalities and languages.",
            structure: `
                <strong>Pattern:</strong> Country → Nationality → Language<br>
                <strong>Examples:</strong><br>
                • Spain → Spanish → Spanish<br>
                • France → French → French<br>
                • Germany → German → German
            `,
            examples: `
                • I'm from Peru. I'm Peruvian<br>
                • She lives in Italy. She's Italian<br>
                • They speak Chinese in China<br>
                • He's American. He's from the United States<br>
                • We're studying English in England
            `,
            exercises: [
                { question: "What nationality is someone from Brazil?", answer: "Brazilian" },
                { question: "What language do they speak in France?", answer: "French" },
                { question: "Where are Japanese people from?", answer: "Japan" },
                { question: "What nationality is someone from Mexico?", answer: "Mexican" },
                { question: "Complete: I'm from Canada. I'm ___", answer: "Canadian" }
            ]
        },
        {
            title: "Colors and adjectives",
            definition: "Basic colors and descriptive adjectives used to describe objects, people, and places.",
            structure: `
                <strong>Basic colors:</strong> red, blue, green, yellow, black, white, brown, pink, purple, orange<br>
                <strong>Adjectives:</strong> big, small, old, new, hot, cold, good, bad, beautiful, ugly
            `,
            examples: `
                • My car is red<br>
                • She has blue eyes<br>
                • The house is very big<br>
                • It's a beautiful day<br>
                • The coffee is too hot
            `,
            exercises: [
                { question: "What color do you get when you mix red and yellow?", answer: "Orange" },
                { question: "Opposite of 'big'", answer: "Small" },
                { question: "Opposite of 'hot'", answer: "Cold" },
                { question: "What color is the sun?", answer: "Yellow" },
                { question: "Describe a nice day", answer: "It's a beautiful/good day" }
            ]
        },
        {
            title: "Emotions and feelings",
            definition: "Words to express how you feel emotionally and physically.",
            structure: `
                <strong>Positive:</strong> happy, excited, proud, confident, relaxed<br>
                <strong>Negative:</strong> sad, angry, worried, scared, tired<br>
                <strong>Neutral:</strong> surprised, confused, bored
            `,
            examples: `
                • I'm happy about the news<br>
                • She feels worried about the exam<br>
                • He's excited about the trip<br>
                • We're tired after work<br>
                • They look confused
            `,
            exercises: [
                { question: "How do you feel when you win something?", answer: "Happy/excited/proud" },
                { question: "How do you feel before an important exam?", answer: "Nervous/worried" },
                { question: "What's the opposite of happy?", answer: "Sad" },
                { question: "How do you feel when you don't understand?", answer: "Confused" },
                { question: "How do you feel after a long day?", answer: "Tired" }
            ]
        },
        {
            title: "Jobs and occupations",
            definition: "Common professions and occupations people have.",
            structure: `
                <strong>Pattern:</strong> I'm a/an + job<br>
                <strong>Question:</strong> What do you do? / What's your job?<br>
                <strong>Workplace:</strong> I work in/at + place
            `,
            examples: `
                • I'm a teacher. I work at a school<br>
                • She's a doctor. She works in a hospital<br>
                • He's an engineer. He works for a company<br>
                • They're students. They study at university<br>
                • My mother is a nurse
            `,
            exercises: [
                { question: "Who works in a hospital?", answer: "Doctor/nurse" },
                { question: "Who teaches students?", answer: "Teacher" },
                { question: "Who cooks food in a restaurant?", answer: "Chef/cook" },
                { question: "Who fixes cars?", answer: "Mechanic" },
                { question: "Complete: I'm ___ engineer", answer: "an" }
            ]
        },
        {
            title: "Family members",
            definition: "Words for family relationships and relatives.",
            structure: `
                <strong>Immediate family:</strong> mother, father, sister, brother, son, daughter<br>
                <strong>Extended family:</strong> grandmother, grandfather, aunt, uncle, cousin<br>
                <strong>In-laws:</strong> mother-in-law, father-in-law, sister-in-law, brother-in-law
            `,
            examples: `
                • My mother is a teacher<br>
                • I have two brothers and one sister<br>
                • My grandmother is 80 years old<br>
                • His wife is my sister-in-law<br>
                • Our children are cousins
            `,
            exercises: [
                { question: "Your mother's mother is your ___", answer: "grandmother" },
                { question: "Your father's brother is your ___", answer: "uncle" },
                { question: "Your uncle's children are your ___", answer: "cousins" },
                { question: "Your brother's wife is your ___", answer: "sister-in-law" },
                { question: "Your parents' parents are your ___", answer: "grandparents" }
            ]
        },
        {
            title: "Food and drink",
            definition: "Common foods, beverages, and meals.",
            structure: `
                <strong>Meals:</strong> breakfast, lunch, dinner<br>
                <strong>Food categories:</strong> meat, vegetables, fruits, dairy<br>
                <strong>Drinks:</strong> water, coffee, tea, juice, milk
            `,
            examples: `
                • I have coffee for breakfast<br>
                • We eat lunch at 12:00<br>
                • She likes vegetables and fruits<br>
                • He drinks water every day<br>
                • They're having dinner now
            `,
            exercises: [
                { question: "What do you eat in the morning?", answer: "Breakfast" },
                { question: "Name three fruits", answer: "Apple, banana, orange" },
                { question: "What do you drink when you're thirsty?", answer: "Water" },
                { question: "What meal do you have at night?", answer: "Dinner" },
                { question: "Name two dairy products", answer: "Milk, cheese" }
            ]
        },
        {
            title: "Weather and seasons",
            definition: "Words to describe weather conditions and the four seasons.",
            structure: `
                <strong>Seasons:</strong> spring, summer, autumn/fall, winter<br>
                <strong>Weather:</strong> sunny, rainy, cloudy, windy, snowy, hot, cold, warm, cool<br>
                <strong>Questions:</strong> What's the weather like? How's the weather?
            `,
            examples: `
                • It's sunny today<br>
                • It's raining outside<br>
                • Summer is hot and winter is cold<br>
                • I like spring because it's warm<br>
                • The weather is nice today
            `,
            exercises: [
                { question: "What season comes after winter?", answer: "Spring" },
                { question: "What's the weather like when it rains?", answer: "Rainy/wet" },
                { question: "Which season is the hottest?", answer: "Summer" },
                { question: "What do you wear when it's cold?", answer: "Coat/jacket" },
                { question: "Complete: It's ___ outside. Take an umbrella", answer: "raining" }
            ]
        },
        {
            title: "House and furniture",
            definition: "Rooms in a house and common furniture items.",
            structure: `
                <strong>Rooms:</strong> bedroom, bathroom, kitchen, living room, dining room<br>
                <strong>Furniture:</strong> bed, table, chair, sofa, desk, wardrobe<br>
                <strong>Prepositions:</strong> in the bedroom, on the table, under the bed
            `,
            examples: `
                • I sleep in the bedroom<br>
                • We cook in the kitchen<br>
                • The sofa is in the living room<br>
                • There's a table in the dining room<br>
                • My clothes are in the wardrobe
            `,
            exercises: [
                { question: "Where do you sleep?", answer: "In the bedroom" },
                { question: "Where do you cook food?", answer: "In the kitchen" },
                { question: "What do you sit on?", answer: "Chair/sofa" },
                { question: "Where do you keep your clothes?", answer: "In the wardrobe" },
                { question: "What room do you watch TV in?", answer: "Living room" }
            ]
        },
        {
            title: "Clothes and appearance",
            definition: "Clothing items and words to describe how people look.",
            structure: `
                <strong>Clothes:</strong> shirt, pants, dress, shoes, jacket, hat<br>
                <strong>Appearance:</strong> tall, short, thin, fat, young, old<br>
                <strong>Hair:</strong> long, short, curly, straight, blonde, brown, black
            `,
            examples: `
                • I'm wearing a blue shirt<br>
                • She has long blonde hair<br>
                • He's tall and thin<br>
                • They're wearing black shoes<br>
                • My jacket is red
            `,
            exercises: [
                { question: "What do you wear on your feet?", answer: "Shoes" },
                { question: "What do you wear when it's cold?", answer: "Jacket/coat" },
                { question: "Opposite of 'tall'", answer: "Short" },
                { question: "What do you wear on your head?", answer: "Hat" },
                { question: "Describe your hair", answer: "It's long/short/curly/straight" }
            ]
        },
        {
            title: "Health and body",
            definition: "Parts of the body and health-related vocabulary.",
            structure: `
                <strong>Body parts:</strong> head, eyes, nose, mouth, arms, hands, legs, feet<br>
                <strong>Health:</strong> sick, healthy, pain, headache, cold, fever<br>
                <strong>Expressions:</strong> I have a headache, I feel sick
            `,
            examples: `
                • My head hurts<br>
                • I have a cold<br>
                • She feels sick<br>
                • His arm is broken<br>
                • We need to see a doctor
            `,
            exercises: [
                { question: "What do you see with?", answer: "Eyes" },
                { question: "What do you walk with?", answer: "Legs/feet" },
                { question: "What do you have when your head hurts?", answer: "Headache" },
                { question: "Who do you see when you're sick?", answer: "Doctor" },
                { question: "What do you smell with?", answer: "Nose" }
            ]
        },
        {
            title: "Sports and activities",
            definition: "Common sports, games, and leisure activities.",
            structure: `
                <strong>Sports:</strong> football, basketball, tennis, swimming, running<br>
                <strong>Activities:</strong> reading, watching TV, listening to music, dancing<br>
                <strong>Verbs:</strong> play (sports), go (swimming), do (exercise)
            `,
            examples: `
                • I play football on weekends<br>
                • She goes swimming every day<br>
                • We like watching movies<br>
                • He listens to music<br>
                • They do exercise in the morning
            `,
            exercises: [
                { question: "What sport do you play with a ball and your feet?", answer: "Football/soccer" },
                { question: "What do you do in a swimming pool?", answer: "Swim" },
                { question: "What do you do with books?", answer: "Read" },
                { question: "What do you do with music?", answer: "Listen" },
                { question: "Name a sport you play with your hands", answer: "Basketball/tennis" }
            ]
        },
        {
            title: "Animals and pets",
            definition: "Common animals, pets, and words related to animals.",
            structure: `
                <strong>Pets:</strong> dog, cat, bird, fish, rabbit<br>
                <strong>Farm animals:</strong> cow, pig, horse, chicken, sheep<br>
                <strong>Wild animals:</strong> lion, elephant, tiger, bear, monkey
            `,
            examples: `
                • I have a dog as a pet<br>
                • Cats like to sleep<br>
                • Cows give us milk<br>
                • Lions live in Africa<br>
                • Birds can fly
            `,
            exercises: [
                { question: "What animal says 'meow'?", answer: "Cat" },
                { question: "What animal gives us milk?", answer: "Cow" },
                { question: "What animals can fly?", answer: "Birds" },
                { question: "What's the king of the jungle?", answer: "Lion" },
                { question: "What pet lives in water?", answer: "Fish" }
            ]
        }
    ];
}
