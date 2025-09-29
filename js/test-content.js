const testContent = {
    sections: [
        {
            title: "Grammar",
            questions: [
                {
                    id: 1,
                    question: "It's _____ useful machine.",
                    options: ["∅", "an", "a", "my"],
                    correct: 1,
                    explanation: "Use 'an' before words starting with vowel sounds."
                },
                {
                    id: 2,
                    question: "With this makeup, your eyes look _____.",
                    options: ["different", "differentes", "differents", "differenties"],
                    correct: 0,
                    explanation: "'Different' is the correct adjective form."
                },
                {
                    id: 3,
                    question: "_____ is Maria?",
                    options: ["Where", "When", "Why", "Where from"],
                    correct: 0,
                    explanation: "'Where' asks about location."
                },
                {
                    id: 4,
                    question: "_____ your name Marcus? B: Yes, _____.",
                    options: ["Are, it is", "Is, are they", "Is, he is", "Is, it is"],
                    correct: 3,
                    explanation: "Use 'Is' for singular and 'it is' for confirmation."
                },
                {
                    id: 5,
                    question: "I'm afraid but I can't go to your party. _____ schedule this week is completely full.",
                    options: ["Our", "My", "Its", "Mine"],
                    correct: 1,
                    explanation: "'My' is the possessive adjective for 'I'."
                },
                {
                    id: 6,
                    question: "He _____ video games at the moment.",
                    options: ["doesn't play", "don't play", "isn't playing", "isn't plaing"],
                    correct: 2,
                    explanation: "Present continuous for actions happening now."
                },
                {
                    id: 7,
                    question: "Did she _____ a doctor?",
                    options: ["become", "became", "becames", "becomes"],
                    correct: 0,
                    explanation: "Use base form after 'did'."
                },
                {
                    id: 8,
                    question: "They _____ sleep last night because there was a lot of noise.",
                    options: ["could", "was", "weren't", "couldn't"],
                    correct: 3,
                    explanation: "'Couldn't' expresses inability in the past."
                },
                {
                    id: 9,
                    question: "There are 2 _____ of jam in the fridge.",
                    options: ["jars", "jar", "cans", "cans"],
                    correct: 0,
                    explanation: "Plural form 'jars' with number 2."
                },
                {
                    id: 10,
                    question: "A: Have you ever _____ to Milan? B: Yes. I _____ there last month.",
                    options: ["go – was", "been – did go", "go – were", "been – went"],
                    correct: 3,
                    explanation: "Present perfect uses 'been', past simple uses 'went'."
                },
                {
                    id: 11,
                    question: "I go _____ with my friends to the disco every weekend.",
                    options: ["into", "to", "on", "out"],
                    correct: 3,
                    explanation: "'Go out' means to go for entertainment."
                },
                {
                    id: 12,
                    question: "There are many tourists _____ New York.",
                    options: ["in", "on", "at", "to"],
                    correct: 0,
                    explanation: "Use 'in' for cities and countries."
                },
                {
                    id: 13,
                    question: "My apartment is _____ the first floor.",
                    options: ["in", "on", "at", "to"],
                    correct: 1,
                    explanation: "Use 'on' for floors."
                },
                {
                    id: 14,
                    question: "My birthday is _____ the 10th of June.",
                    options: ["in", "on", "at", "to"],
                    correct: 1,
                    explanation: "Use 'on' for specific dates."
                },
                {
                    id: 15,
                    question: "Lili and Niels _____ together for 3 years.",
                    options: ["has lived", "have lived", "lives", "did live"],
                    correct: 1,
                    explanation: "Present perfect with plural subject uses 'have'."
                },
                {
                    id: 16,
                    question: "He did a _____ exam. He passed the exam _____.",
                    options: ["brilliant, brilliant", "brilliantly, brilliant", "brilliant, brilliantly", "brilliantly, brilliantly"],
                    correct: 2,
                    explanation: "Adjective before noun, adverb after verb."
                },
                {
                    id: 17,
                    question: "There is a picture _____ the clock.",
                    options: ["in", "above", "behind", "into"],
                    correct: 1,
                    explanation: "'Above' indicates position higher than something."
                },
                {
                    id: 18,
                    question: "What is _____ movie you have ever seen?",
                    options: ["the most funny", "most funny", "funniest", "the funniest"],
                    correct: 3,
                    explanation: "Superlative form with 'the'."
                },
                {
                    id: 19,
                    question: "I think his room is a little _____ mine.",
                    options: ["bigger", "the bigger than", "bigger than", "biggest"],
                    correct: 2,
                    explanation: "Comparative form uses 'bigger than'."
                },
                {
                    id: 20,
                    question: "This is the _____ summer we _____ had! Incredibly unforgettable!",
                    options: ["best – have", "worst – have ever", "best – have ever", "worst – ever"],
                    correct: 2,
                    explanation: "Superlative with present perfect 'have ever'."
                },
                {
                    id: 21,
                    question: "Who is the actor _____ played the main character in the movie Titanic?",
                    options: ["whom", "who", "which", "whose"],
                    correct: 1,
                    explanation: "'Who' is used for people as subjects."
                },
                {
                    id: 22,
                    question: "Who is the artist _____ paintings are famous for sunflowers?",
                    options: ["who", "which", "whose", "whom"],
                    correct: 2,
                    explanation: "'Whose' shows possession."
                },
                {
                    id: 23,
                    question: "Why is there _____ written on the paper?",
                    options: ["anything", "nothing", "none", "nobody"],
                    correct: 1,
                    explanation: "'Nothing' means no thing at all."
                },
                {
                    id: 24,
                    question: "Have you ever been to a place where there's _____ to sit?",
                    options: ["nowhere", "anywhere", "any", "where"],
                    correct: 0,
                    explanation: "'Nowhere' means no place."
                },
                {
                    id: 25,
                    question: "Were the documents _____ on time?",
                    options: ["submit", "submitted", "submitting", "submitted"],
                    correct: 1,
                    explanation: "Past participle in passive voice."
                },
                {
                    id: 26,
                    question: "This house is our house. This house is _____.",
                    options: ["mine", "our", "us", "ours"],
                    correct: 3,
                    explanation: "'Ours' is the possessive pronoun for 'our'."
                },
                {
                    id: 27,
                    question: "If Charlie _____ a new TV, he _____ have enough money to pay his rent.",
                    options: ["buy-will", "buy-won't", "buys-won't", "buys-∅"],
                    correct: 2,
                    explanation: "First conditional: if + present, will + base form."
                },
                {
                    id: 28,
                    question: "If he _____ more fans, he _____ play at bigger venues.",
                    options: ["has-∅", "has-would", "had-will", "had-would"],
                    correct: 3,
                    explanation: "Second conditional: if + past, would + base form."
                },
                {
                    id: 29,
                    question: "We _____ be lucky.",
                    options: ["might", "must", "can", "must not"],
                    correct: 0,
                    explanation: "'Might' expresses possibility."
                },
                {
                    id: 30,
                    question: "I _____ smoke when I was in my 20s.",
                    options: ["∅", "used to", "was", "use"],
                    correct: 1,
                    explanation: "'Used to' expresses past habits."
                }
            ]
        },
        {
            title: "Vocabulary",
            questions: [
                {
                    id: 31,
                    question: "three, two, one, _____",
                    options: ["five", "four", "zero", "six"],
                    correct: 2,
                    explanation: "The sequence counts down to zero."
                },
                {
                    id: 32,
                    question: "Thursday, Friday, Saturday, _____",
                    options: ["Monday", "Sunday", "Tuesday", "Sunday"],
                    correct: 1,
                    explanation: "Days of the week sequence."
                },
                {
                    id: 33,
                    question: "stepmother, stepsister, _____",
                    options: ["stepuncle", "stepbrother", "stepcousin", "stepfather"],
                    correct: 1,
                    explanation: "Family relationship pattern."
                },
                {
                    id: 34,
                    question: "He is _____.",
                    options: ["shaved", "shave", "shaves", "a shave"],
                    correct: 0,
                    explanation: "'Shaved' is the past participle/adjective."
                },
                {
                    id: 35,
                    question: "After hours of work, he felt completely _____.",
                    options: ["energized", "energizing", "exhausted", "exhausting"],
                    correct: 2,
                    explanation: "'Exhausted' means very tired."
                },
                {
                    id: 36,
                    question: "The _____ child shared her toys with everyone in the class.",
                    options: ["selfish", "generous", "angry", "narrow"],
                    correct: 1,
                    explanation: "'Generous' means willing to share."
                },
                {
                    id: 37,
                    question: "To apply for the position, you need to have a _____ in marketing or business administration.",
                    options: ["degree", "hobby", "skill", "grade"],
                    correct: 0,
                    explanation: "A 'degree' is a university qualification."
                },
                {
                    id: 38,
                    question: "The team has a _____ to discuss the goals for the next quarter.",
                    options: ["celebration", "vacations", "meeting", "day off"],
                    correct: 2,
                    explanation: "A 'meeting' is for discussion and planning."
                },
                {
                    id: 39,
                    question: "In the Winter, people usually wear _____ to stay warm.",
                    options: ["sunglasses", "skirt", "flip flops", "coats"],
                    correct: 3,
                    explanation: "'Coats' are worn for warmth in winter."
                },
                {
                    id: 40,
                    question: "The _____ forecast predicts heavy rain tomorrow.",
                    options: ["climate", "weather", "temperatura", "warm"],
                    correct: 1,
                    explanation: "'Weather' refers to daily atmospheric conditions."
                },
                {
                    id: 41,
                    question: "People enjoy outdoor activities during _____ months because it's sunny and pleasant.",
                    options: ["fall", "winter", "summer", "spring"],
                    correct: 2,
                    explanation: "'Summer' is typically sunny and warm."
                },
                {
                    id: 42,
                    question: "The _____ is usually the place where the family gathers to watch TV or relax.",
                    options: ["garage", "living room", "bedroom", "hallway"],
                    correct: 1,
                    explanation: "The 'living room' is for family activities."
                },
                {
                    id: 43,
                    question: "We _____ dinner together every Sunday.",
                    options: ["go", "have", "has", "get"],
                    correct: 1,
                    explanation: "'Have dinner' is the correct collocation."
                },
                {
                    id: 44,
                    question: "We need to _____ the lights before leaving the room to save electricity.",
                    options: ["turn off", "take off", "look up", "put away"],
                    correct: 0,
                    explanation: "'Turn off' means to switch off lights."
                },
                {
                    id: 45,
                    question: "The little boy has chubby cheeks and a _____ smile.",
                    options: ["thin", "flat", "bright", "wavy"],
                    correct: 2,
                    explanation: "A 'bright' smile is cheerful and radiant."
                },
                {
                    id: 46,
                    question: "peas, peppers, carrots, _____",
                    options: ["apples", "nuts", "onions", "pears"],
                    correct: 2,
                    explanation: "'Onions' are vegetables like the others."
                },
                {
                    id: 47,
                    question: "Who is my sister's wife? She is my _____.",
                    options: ["sister in law", "aunt", "niece", "cousin"],
                    correct: 0,
                    explanation: "Sister's wife is sister-in-law."
                },
                {
                    id: 48,
                    question: "Where can you buy pills?",
                    options: ["post office", "castle", "pharmacy", "ruins"],
                    correct: 2,
                    explanation: "Pills are bought at a pharmacy."
                },
                {
                    id: 49,
                    question: "Hello, please come _____ my office.",
                    options: ["into", "up", "at", "from"],
                    correct: 0,
                    explanation: "'Come into' means enter."
                },
                {
                    id: 50,
                    question: "Beggars are _____ but humble.",
                    options: ["poors", "poor", "pore", "rich"],
                    correct: 1,
                    explanation: "'Poor' is the correct adjective form."
                },
                {
                    id: 51,
                    question: "I am 80 years old, so I am _____.",
                    options: ["unemployed", "retired", "employed", "employee"],
                    correct: 1,
                    explanation: "'Retired' means no longer working due to age."
                },
                {
                    id: 52,
                    question: "She _____ her keys on the table but couldn't find them later.",
                    options: ["left", "forgot", "missed", "look for"],
                    correct: 0,
                    explanation: "'Left' means placed somewhere."
                },
                {
                    id: 53,
                    question: "The chef _____ a delicious cake for the celebration.",
                    options: ["made", "did", "prepared", "do"],
                    correct: 0,
                    explanation: "'Made' is used for creating food."
                },
                {
                    id: 54,
                    question: "The _____ is known as the king of the jungle.",
                    options: ["tiger", "lion", "elephant", "owl"],
                    correct: 1,
                    explanation: "The lion is called 'king of the jungle'."
                },
                {
                    id: 55,
                    question: "Please, _____ the book when you're finished reading it.",
                    options: ["back away", "take back", "give back", "back pay"],
                    correct: 2,
                    explanation: "'Give back' means to return something."
                },
                {
                    id: 56,
                    question: "The _____ soup was so spicy that I needed a glass of water!",
                    options: ["cold", "sweet", "hot", "fried"],
                    correct: 2,
                    explanation: "'Hot' can mean spicy or high temperature."
                },
                {
                    id: 57,
                    question: "He prefers to drink _____ during lunch, like orange juice or soda.",
                    options: ["beverages", "fruits", "desserts", "pie"],
                    correct: 0,
                    explanation: "'Beverages' are drinks."
                },
                {
                    id: 58,
                    question: "She bought three _____ of milk at the grocery store.",
                    options: ["∅", "bottles", "jars", "glasses"],
                    correct: 1,
                    explanation: "Milk is sold in bottles."
                },
                {
                    id: 59,
                    question: "I'd like some _____ to go with my coffee, please.",
                    options: ["oranges", "milks", "orange", "milk"],
                    correct: 3,
                    explanation: "'Milk' is uncountable, no 's' needed."
                },
                {
                    id: 60,
                    question: "On _____, children often dress up as different characters and go trick-or-treating.",
                    options: ["Christmas", "Halloween", "New Year's Eve", "Easter"],
                    correct: 1,
                    explanation: "Halloween is when children dress up and trick-or-treat."
                }
            ]
        },
        {
            title: "Reading Comprehension",
            questions: [
                {
                    id: 61,
                    passage: "Thanksgiving is a holiday celebrated predominantly in North America, and it possesses a different meaning in each of the countries where it's acknowledged. In the United States, Thanksgiving is a federal holiday (meaning all government employees and most private employees are given a day off of work), and always takes places on the Fourth Thursday in November, regardless of the date. The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims were taught (by Native Americans) how to grow and produce food on North America's unique terrain. Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they celebrated alongside the Native Americans who provided them with such valuable assistance. President Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a 'day of Thanksgiving' during one of his Civil War addresses. In America today, Thanksgiving remains firmly engrained in its historical roots, and is widely considered to be a day for giving thanks for good food, good times, and family. Thanksgiving dinner generally consists of turkey, mashed potatoes, stuffing, vegetables, gravy, and ample desserts.",
                    question: "When is Thanksgiving celebrated in the US?",
                    options: ["November 25", "Four weeks before Christmas", "Throughout November", "The Fourth Thursday in November"],
                    correct: 3,
                    explanation: "The text clearly states it's on the Fourth Thursday in November."
                },
                {
                    id: 62,
                    passage: "Thanksgiving is a holiday celebrated predominantly in North America, and it possesses a different meaning in each of the countries where it's acknowledged. In the United States, Thanksgiving is a federal holiday (meaning all government employees and most private employees are given a day off of work), and always takes places on the Fourth Thursday in November, regardless of the date. The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims were taught (by Native Americans) how to grow and produce food on North America's unique terrain. Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they celebrated alongside the Native Americans who provided them with such valuable assistance. President Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a 'day of Thanksgiving' during one of his Civil War addresses. In America today, Thanksgiving remains firmly engrained in its historical roots, and is widely considered to be a day for giving thanks for good food, good times, and family. Thanksgiving dinner generally consists of turkey, mashed potatoes, stuffing, vegetables, gravy, and ample desserts.",
                    question: "Which event(s) began the tradition of Thanksgiving?",
                    options: ["The pilgrims' food-creation success and large-scale celebratory dinner", "Nobody is certain", "An address delivered by President Lincoln", "A and C"],
                    correct: 3,
                    explanation: "Both the pilgrims' celebration and Lincoln's address contributed to the tradition."
                },
                {
                    id: 63,
                    passage: "Thanksgiving is a holiday celebrated predominantly in North America, and it possesses a different meaning in each of the countries where it's acknowledged. In the United States, Thanksgiving is a federal holiday (meaning all government employees and most private employees are given a day off of work), and always takes places on the Fourth Thursday in November, regardless of the date. The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims were taught (by Native Americans) how to grow and produce food on North America's unique terrain. Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they celebrated alongside the Native Americans who provided them with such valuable assistance. President Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a 'day of Thanksgiving' during one of his Civil War addresses. In America today, Thanksgiving remains firmly engrained in its historical roots, and is widely considered to be a day for giving thanks for good food, good times, and family. Thanksgiving dinner generally consists of turkey, mashed potatoes, stuffing, vegetables, gravy, and ample desserts.",
                    question: "Which food(s) are often prepared for Thanksgiving dinner?",
                    options: ["Turkey", "Potatoes", "Stuffing", "All of the above"],
                    correct: 3,
                    explanation: "The text mentions turkey, mashed potatoes, and stuffing among other foods."
                },
                {
                    id: 64,
                    passage: "Thanksgiving is a holiday celebrated predominantly in North America, and it possesses a different meaning in each of the countries where it's acknowledged. In the United States, Thanksgiving is a federal holiday (meaning all government employees and most private employees are given a day off of work), and always takes places on the Fourth Thursday in November, regardless of the date. The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims were taught (by Native Americans) how to grow and produce food on North America's unique terrain. Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they celebrated alongside the Native Americans who provided them with such valuable assistance. President Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a 'day of Thanksgiving' during one of his Civil War addresses. In America today, Thanksgiving remains firmly engrained in its historical roots, and is widely considered to be a day for giving thanks for good food, good times, and family. Thanksgiving dinner generally consists of turkey, mashed potatoes, stuffing, vegetables, gravy, and ample desserts.",
                    question: "Where is Thanksgiving celebrated?",
                    options: ["Only in America", "Only in Canada", "In English speaking countries", "Throughout North America and some other parts of the world, albeit in different forms and on different dates"],
                    correct: 3,
                    explanation: "The text states it's celebrated predominantly in North America with different meanings in different countries."
                },
                {
                    id: 65,
                    passage: "George is at the pet store, looking at what kind of pet he might want to get for his birthday. George asked if he could have a horse, but his parents said no because horses are too big. First, he sees dogs and cats. Baby dogs are called puppies. Baby cats are called kittens. George likes them because they are easy to take care of and can play a lot, but they will get bigger. George wants a small pet. Then George sees animals that have to live in a cage. He sees rabbits, guinea pigs, and mice. Mice are what you call more than one mouse. He likes these animals because they are small. Birds live in cages too. George sees a parrot and a canary. He likes them all, but he doesn't want to clean the cage. George sees the animals in tanks. The tanks full of water have fish and turtles in them. He thinks about a goldfish but decides he likes the turtles more. There are also tanks with rocks and sand that have snakes, spiders, and scorpions, but George is afraid of them. George likes the turtles best, but they won't fit in the little fishbowls. Turtles need bigger tanks, so they can swim sometimes and hide sometimes. George decides he wants to get a turtle for his birthday. He buys a book on how to take care of a turtle and a list of what types of turtles the store has.",
                    question: "What kind of pet did George want, but his parents said no because they were too big?",
                    options: ["A horse", "A kitten", "A puppy", "A rabbit"],
                    correct: 0,
                    explanation: "The text states George asked for a horse but his parents said no because horses are too big."
                },
                {
                    id: 66,
                    passage: "George is at the pet store, looking at what kind of pet he might want to get for his birthday. George asked if he could have a horse, but his parents said no because horses are too big. First, he sees dogs and cats. Baby dogs are called puppies. Baby cats are called kittens. George likes them because they are easy to take care of and can play a lot, but they will get bigger. George wants a small pet. Then George sees animals that have to live in a cage. He sees rabbits, guinea pigs, and mice. Mice are what you call more than one mouse. He likes these animals because they are small. Birds live in cages too. George sees a parrot and a canary. He likes them all, but he doesn't want to clean the cage. George sees the animals in tanks. The tanks full of water have fish and turtles in them. He thinks about a goldfish but decides he likes the turtles more. There are also tanks with rocks and sand that have snakes, spiders, and scorpions, but George is afraid of them. George likes the turtles best, but they won't fit in the little fishbowls. Turtles need bigger tanks, so they can swim sometimes and hide sometimes. George decides he wants to get a turtle for his birthday. He buys a book on how to take care of a turtle and a list of what types of turtles the store has.",
                    question: "What kind of pet does NOT live in a cage?",
                    options: ["Guinea pigs", "Rabbits", "Mice/Mouse", "Goldfish"],
                    correct: 3,
                    explanation: "Goldfish live in tanks with water, not cages."
                },
                {
                    id: 67,
                    passage: "George is at the pet store, looking at what kind of pet he might want to get for his birthday. George asked if he could have a horse, but his parents said no because horses are too big. First, he sees dogs and cats. Baby dogs are called puppies. Baby cats are called kittens. George likes them because they are easy to take care of and can play a lot, but they will get bigger. George wants a small pet. Then George sees animals that have to live in a cage. He sees rabbits, guinea pigs, and mice. Mice are what you call more than one mouse. He likes these animals because they are small. Birds live in cages too. George sees a parrot and a canary. He likes them all, but he doesn't want to clean the cage. George sees the animals in tanks. The tanks full of water have fish and turtles in them. He thinks about a goldfish but decides he likes the turtles more. There are also tanks with rocks and sand that have snakes, spiders, and scorpions, but George is afraid of them. George likes the turtles best, but they won't fit in the little fishbowls. Turtles need bigger tanks, so they can swim sometimes and hide sometimes. George decides he wants to get a turtle for his birthday. He buys a book on how to take care of a turtle and a list of what types of turtles the store has.",
                    question: "Which kind of pet did NOT scare George?",
                    options: ["The snakes", "The scorpions", "The canaries", "The spiders"],
                    correct: 2,
                    explanation: "The text mentions George was afraid of snakes, spiders, and scorpions, but not canaries."
                },
                {
                    id: 68,
                    passage: "George is at the pet store, looking at what kind of pet he might want to get for his birthday. George asked if he could have a horse, but his parents said no because horses are too big. First, he sees dogs and cats. Baby dogs are called puppies. Baby cats are called kittens. George likes them because they are easy to take care of and can play a lot, but they will get bigger. George wants a small pet. Then George sees animals that have to live in a cage. He sees rabbits, guinea pigs, and mice. Mice are what you call more than one mouse. He likes these animals because they are small. Birds live in cages too. George sees a parrot and a canary. He likes them all, but he doesn't want to clean the cage. George sees the animals in tanks. The tanks full of water have fish and turtles in them. He thinks about a goldfish but decides he likes the turtles more. There are also tanks with rocks and sand that have snakes, spiders, and scorpions, but George is afraid of them. George likes the turtles best, but they won't fit in the little fishbowls. Turtles need bigger tanks, so they can swim sometimes and hide sometimes. George decides he wants to get a turtle for his birthday. He buys a book on how to take care of a turtle and a list of what types of turtles the store has.",
                    question: "What kind of pet did George decide he wanted to get for his birthday?",
                    options: ["Mouse", "Goldfish", "Parrot", "Turtle"],
                    correct: 3,
                    explanation: "The text clearly states George decides he wants to get a turtle for his birthday."
                }
            ]
        }
    ]
};
