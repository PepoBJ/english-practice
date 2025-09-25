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
        }
    ];
}
