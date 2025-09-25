let grammarTopics = [];

function loadGrammarTopics() {
    grammarTopics = [
        {
            title: "Verb TO BE (affirmative, questions and negative sentences)",
            definition: "The verb 'to be' is the most important verb in English. It shows states, conditions, and identity.",
            structure: `<strong>Affirmative:</strong> Subject + am/is/are<br><strong>Questions:</strong> Am/Is/Are + subject + ?<br><strong>Negative:</strong> Subject + am/is/are + not`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use AM only with "I"<br>• Use IS with he/she/it (singular)<br>• Use ARE with you/we/they (plural)<br>• Contractions: I'm, you're, he's, she's, it's, we're, they're<br>• Negative contractions: isn't, aren't (but NOT "amn't" - say "I'm not")`,
            examples: `<strong>Affirmative:</strong><br>• I am a student<br>• She is happy<br>• They are friends<br><br><strong>Questions:</strong><br>• Are you ready?<br>• Is she coming?<br>• Am I late?<br><br><strong>Negative:</strong><br>• I am not tired<br>• She isn't here<br>• They aren't ready`,
            exercises: [
                { question: "Complete: She ___ a teacher.", answer: "She IS a teacher." },
                { question: "Make a question: You are from Spain.", answer: "Are you from Spain?" },
                { question: "Make negative: I am busy.", answer: "I am not busy." },
                { question: "Complete: They ___ students.", answer: "They ARE students." },
                { question: "Complete: ___ you ready?", answer: "ARE you ready?" },
                { question: "Contract: I am not happy.", answer: "I'm not happy." },
                { question: "Complete: He ___ at home.", answer: "He IS at home." },
                { question: "Make question: She is a doctor.", answer: "Is she a doctor?" },
                { question: "Complete: We ___ not late.", answer: "We ARE not late." },
                { question: "Contract: They are not here.", answer: "They aren't here." }
            ]
        },
        {
            title: "Personal pronouns",
            definition: "Personal pronouns replace nouns to avoid repetition. They can be subjects or objects.",
            structure: `<strong>Subject pronouns:</strong> I, you, he, she, it, we, they<br><strong>Object pronouns:</strong> me, you, him, her, it, us, them`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Subject pronouns do the action (I see you)<br>• Object pronouns receive the action (You see me)<br>• Use object pronouns after prepositions (with me, for him)<br>• "You" is the same for subject and object<br>• "It" is the same for subject and object`,
            examples: `<strong>Subject pronouns:</strong><br>• John is tall → He is tall<br>• Mary and I → We<br>• The book → It<br><br><strong>Object pronouns:</strong><br>• I see him<br>• She likes me<br>• Call them<br>• Come with us`,
            exercises: [
                { question: "Replace with a pronoun: John and Mary are students.", answer: "They are students." },
                { question: "Complete: I know ___. (Sarah)", answer: "I know her." },
                { question: "Complete: ___ are my friends. (Tom and Lisa)", answer: "They are my friends." },
                { question: "Complete: Give ___ the book. (to me)", answer: "Give me the book." },
                { question: "Complete: ___ is on the table. (the pen)", answer: "It is on the table." },
                { question: "Complete: Listen to ___. (to us)", answer: "Listen to us." },
                { question: "Replace: The teacher helps the students.", answer: "She helps them." },
                { question: "Complete: ___ live in London. (My parents)", answer: "They live in London." },
                { question: "Complete: Call ___ tomorrow. (John)", answer: "Call him tomorrow." },
                { question: "Complete: ___ am learning English. (myself)", answer: "I am learning English." }
            ]
        },
        {
            title: "Possessive adjectives (my, your, our, etc.)",
            definition: "Possessive adjectives show ownership and always come before nouns.",
            structure: `my, your, his, her, its, our, their + noun`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always come BEFORE the noun<br>• Never use with "a/an" or "the"<br>• "Its" (possessive) vs "It's" (it is)<br>• Don't confuse with possessive pronouns (mine, yours, etc.)<br>• Use with body parts, family, belongings`,
            examples: `• My car is red<br>• Your house is big<br>• His name is John<br>• Her sister is a doctor<br>• Our teacher is nice<br>• Their children are young<br>• Its color is blue (the car's color)`,
            exercises: [
                { question: "Complete: This is ___ book. (belonging to me)", answer: "This is my book." },
                { question: "Complete: ___ dog is very friendly. (belonging to them)", answer: "Their dog is very friendly." },
                { question: "Complete: What is ___ name? (belonging to you)", answer: "What is your name?" },
                { question: "Complete: ___ mother is a teacher. (belonging to him)", answer: "His mother is a teacher." },
                { question: "Complete: ___ house is beautiful. (belonging to her)", answer: "Her house is beautiful." },
                { question: "Complete: ___ car is new. (belonging to us)", answer: "Our car is new." },
                { question: "Complete: The cat hurt ___ paw. (the cat's own paw)", answer: "The cat hurt its paw." },
                { question: "Complete: ___ children go to school. (belonging to you)", answer: "Your children go to school." },
                { question: "Complete: ___ friends are coming. (belonging to me)", answer: "My friends are coming." },
                { question: "Complete: ___ office is downtown. (belonging to them)", answer: "Their office is downtown." }
            ]
        },
        {
            title: "Object pronouns: me, you, him, etc.",
            definition: "Object pronouns receive the action of the verb or come after prepositions.",
            structure: `me, you, him, her, it, us, them<br><strong>Position:</strong> After verbs and prepositions`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use after action verbs (see me, help us)<br>• Use after prepositions (with him, for her)<br>• Use in short answers (Who's there? Me!)<br>• Use after "than" in comparisons (taller than me)<br>• Never use as subjects of sentences`,
            examples: `<strong>After verbs:</strong><br>• I see him<br>• She likes me<br>• Call them<br><br><strong>After prepositions:</strong><br>• Come with us<br>• This is for her<br>• Sit next to me<br><br><strong>In comparisons:</strong><br>• She's taller than me<br>• He runs faster than us`,
            exercises: [
                { question: "Complete: Can you help ___? (us)", answer: "Can you help us?" },
                { question: "Complete: I'm looking for ___. (him)", answer: "I'm looking for him." },
                { question: "Complete: Give ___ the keys. (me)", answer: "Give me the keys." },
                { question: "Complete: She's talking to ___. (them)", answer: "She's talking to them." },
                { question: "Complete: This present is for ___. (you)", answer: "This present is for you." },
                { question: "Complete: Come with ___. (us)", answer: "Come with us." },
                { question: "Complete: I know ___. (her)", answer: "I know her." },
                { question: "Complete: Listen to ___. (me)", answer: "Listen to me." },
                { question: "Complete: He's older than ___. (me)", answer: "He's older than me." },
                { question: "Complete: Wait for ___. (them)", answer: "Wait for them." }
            ]
        },
        {
            title: "Possessive pronouns",
            definition: "Possessive pronouns show ownership without using a noun after them.",
            structure: `mine, yours, his, hers, its, ours, theirs<br><strong>Usage:</strong> Replace possessive adjective + noun`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use INSTEAD of possessive adjective + noun<br>• "This book is mine" = "This is my book"<br>• Never use "its" as possessive pronoun<br>• Can be subjects or objects<br>• Often used to avoid repetition`,
            examples: `• This book is mine (= my book)<br>• The car is theirs (= their car)<br>• Is this yours? (= your pen/book/etc.)<br>• The house is ours (= our house)<br>• That bag is hers (= her bag)<br>• The decision is his (= his decision)`,
            exercises: [
                { question: "Replace: This is my car.", answer: "This car is mine." },
                { question: "Replace: That is your book.", answer: "That book is yours." },
                { question: "Replace: This is our house.", answer: "This house is ours." },
                { question: "Replace: That is her bag.", answer: "That bag is hers." },
                { question: "Replace: This is their dog.", answer: "This dog is theirs." },
                { question: "Complete: Whose pen is this? It's ___. (belonging to me)", answer: "It's mine." },
                { question: "Complete: Is this ___ car? (belonging to you)", answer: "Is this your car? / Is this yours?" },
                { question: "Replace: These are his keys.", answer: "These keys are his." },
                { question: "Complete: The choice is ___. (belonging to us)", answer: "The choice is ours." },
                { question: "Complete: Which house is ___? (belonging to them)", answer: "Which house is theirs?" }
            ]
        },
        {
            title: "Possessive 's",
            definition: "The possessive 's shows that something belongs to someone or something.",
            structure: `<strong>Singular:</strong> Noun + 's + noun<br><strong>Plural ending in -s:</strong> Noun + ' + noun<br><strong>Irregular plural:</strong> Noun + 's + noun`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Singular nouns: always add 's (John's car)<br>• Plural nouns ending in -s: add only ' (students' books)<br>• Irregular plurals: add 's (children's toys)<br>• Use for people, animals, countries, time<br>• Don't use for things (use "of" instead)`,
            examples: `<strong>Singular:</strong><br>• John's car<br>• The cat's food<br>• My sister's friend<br><br><strong>Plural:</strong><br>• The students' books<br>• My parents' house<br>• The teachers' room<br><br><strong>Irregular plural:</strong><br>• Children's toys<br>• Women's clothes<br>• People's opinions`,
            exercises: [
                { question: "Make possessive: The book of Mary", answer: "Mary's book" },
                { question: "Make possessive: The car of my father", answer: "My father's car" },
                { question: "Make possessive: The toys of the children", answer: "The children's toys" },
                { question: "Make possessive: The house of my parents", answer: "My parents' house" },
                { question: "Make possessive: The office of the boss", answer: "The boss's office" },
                { question: "Make possessive: The books of the students", answer: "The students' books" },
                { question: "Make possessive: The tail of the dog", answer: "The dog's tail" },
                { question: "Make possessive: The room of the teachers", answer: "The teachers' room" },
                { question: "Make possessive: The clothes of women", answer: "Women's clothes" },
                { question: "Make possessive: The name of the company", answer: "The company's name" }
            ]
        },
        {
            title: "Singular and plural nouns",
            definition: "Nouns can be singular (one) or plural (more than one). Most plurals are formed by adding -s or -es.",
            structure: `<strong>Regular:</strong> noun + s<br><strong>-s, -x, -ch, -sh:</strong> noun + es<br><strong>consonant + y:</strong> change y to ies<br><strong>-f, -fe:</strong> change to ves`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Most nouns: add -s (cat → cats)<br>• After s, x, ch, sh: add -es (box → boxes)<br>• Consonant + y: change to -ies (city → cities)<br>• Some -f/-fe: change to -ves (knife → knives)<br>• Irregular plurals: child → children, man → men`,
            examples: `<strong>Regular plurals:</strong><br>• cat → cats<br>• book → books<br>• table → tables<br><br><strong>Special endings:</strong><br>• box → boxes<br>• church → churches<br>• city → cities<br>• knife → knives<br><br><strong>Irregular:</strong><br>• child → children<br>• man → men<br>• foot → feet`,
            exercises: [
                { question: "Plural of 'cat':", answer: "cats" },
                { question: "Plural of 'box':", answer: "boxes" },
                { question: "Plural of 'city':", answer: "cities" },
                { question: "Plural of 'child':", answer: "children" },
                { question: "Plural of 'knife':", answer: "knives" },
                { question: "Plural of 'church':", answer: "churches" },
                { question: "Plural of 'man':", answer: "men" },
                { question: "Plural of 'baby':", answer: "babies" },
                { question: "Plural of 'dish':", answer: "dishes" },
                { question: "Plural of 'foot':", answer: "feet" }
            ]
        },
        {
            title: "Adjectives",
            definition: "Words that describe or give more information about nouns and pronouns.",
            structure: `<strong>Position:</strong> Before nouns OR after 'be' and linking verbs<br><strong>Order:</strong> Opinion + Size + Age + Color + Origin + Material + Noun`,
            tips: `<strong>🎯 Key Tips:</strong><br>• No plural form for adjectives (big cars, NOT bigs cars)<br>• Use 'very' or 'really' to make stronger<br>• Multiple adjectives: opinion first, then fact<br>• After linking verbs: be, seem, look, feel, taste, sound<br>• Don't use 'a/an' with adjectives alone`,
            examples: `<strong>Before nouns:</strong><br>• A big house<br>• Beautiful flowers<br>• An old car<br><br><strong>After 'be':</strong><br>• The house is big<br>• She is beautiful<br>• The car is old<br><br><strong>Multiple adjectives:</strong><br>• A beautiful big old house<br>• A nice small red car`,
            exercises: [
                { question: "Put in correct order: car / red / small / nice", answer: "A nice small red car" },
                { question: "Complete: The flowers are ___. (beautiful)", answer: "The flowers are beautiful." },
                { question: "Complete: She has ___ hair. (long)", answer: "She has long hair." },
                { question: "Make stronger: The test is difficult.", answer: "The test is very difficult." },
                { question: "Complete: It's a ___ day. (sunny)", answer: "It's a sunny day." },
                { question: "Put in correct order: house / big / old / beautiful", answer: "A beautiful big old house" },
                { question: "Complete: The food tastes ___. (good)", answer: "The food tastes good." },
                { question: "Complete: He seems ___. (tired)", answer: "He seems tired." },
                { question: "Complete: They are ___ students. (intelligent)", answer: "They are intelligent students." },
                { question: "Make stronger: She is happy.", answer: "She is very happy." }
            ]
        },
        {
            title: "Imperatives: let's",
            definition: "Commands, instructions, or suggestions. 'Let's' is used to make suggestions for group actions.",
            structure: `<strong>Positive:</strong> Base verb + (object)<br><strong>Negative:</strong> Don't + base verb<br><strong>Let's:</strong> Let's + base verb<br><strong>Let's not:</strong> Let's not + base verb`,
            tips: `<strong>🎯 Key Tips:</strong><br>• No subject needed (understood 'you')<br>• Use base form of verb (no -s, no -ing)<br>• 'Let's' = Let us (suggestion for 'we')<br>• 'Please' makes imperatives more polite<br>• Common in instructions, recipes, directions`,
            examples: `<strong>Commands:</strong><br>• Open the door<br>• Don't touch that<br>• Please sit down<br><br><strong>Suggestions with Let's:</strong><br>• Let's go home<br>• Let's not wait<br>• Let's have lunch<br>• Let's watch a movie`,
            exercises: [
                { question: "Make imperative: You should close the window.", answer: "Close the window." },
                { question: "Make negative: Open the door.", answer: "Don't open the door." },
                { question: "Make suggestion: We should go to the cinema.", answer: "Let's go to the cinema." },
                { question: "Make polite: Sit down.", answer: "Please sit down." },
                { question: "Make negative suggestion: We shouldn't leave now.", answer: "Let's not leave now." },
                { question: "Make imperative: You should be quiet.", answer: "Be quiet." },
                { question: "Make suggestion: We should eat pizza.", answer: "Let's eat pizza." },
                { question: "Make negative: Call me tonight.", answer: "Don't call me tonight." },
                { question: "Make suggestion: We should study together.", answer: "Let's study together." },
                { question: "Make imperative: You should hurry up.", answer: "Hurry up." }
            ]
        },
        {
            title: "Present simple (affirmative, negative sentences and questions)",
            definition: "Present simple describes habits, routines, facts, and general truths.",
            structure: `<strong>Affirmative:</strong> Subject + base verb (+ s for 3rd person)<br><strong>Negative:</strong> Subject + don't/doesn't + base verb<br><strong>Questions:</strong> Do/Does + subject + base verb?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Add -S only for he/she/it in affirmative<br>• Use DOESN'T with he/she/it, DON'T with others<br>• Use DOES with he/she/it in questions, DO with others<br>• Never use -S after do/does/don't/doesn't<br>• Time expressions: always, usually, often, sometimes, never<br>• Signal words: every day, on Mondays, in the morning`,
            examples: `<strong>Affirmative:</strong><br>• I work every day<br>• She speaks English<br>• They live in London<br><br><strong>Negative:</strong><br>• I don't smoke<br>• She doesn't like pizza<br>• They don't work on Sundays<br><br><strong>Questions:</strong><br>• Do you like coffee?<br>• Does she work here?<br>• Where do they live?`,
            exercises: [
                { question: "Complete: She ___ (not/like) vegetables.", answer: "She doesn't like vegetables." },
                { question: "Make a question: They play football.", answer: "Do they play football?" },
                { question: "Complete: He ___ (work) in a bank.", answer: "He works in a bank." },
                { question: "Make negative: I speak French.", answer: "I don't speak French." },
                { question: "Complete: ___ you live here?", answer: "Do you live here?" },
                { question: "Complete: She ___ (not/go) to school.", answer: "She doesn't go to school." },
                { question: "Complete: We ___ (study) English.", answer: "We study English." },
                { question: "Make question: He likes music.", answer: "Does he like music?" },
                { question: "Complete: They ___ (not/have) a car.", answer: "They don't have a car." },
                { question: "Complete: ___ she work on Sundays?", answer: "Does she work on Sundays?" }
            ]
        },
        {
            title: "Word order in questions",
            definition: "The correct order of words when forming questions in English.",
            structure: `<strong>Yes/No questions:</strong> Auxiliary + Subject + Main verb + ?<br><strong>Wh- questions:</strong> Question word + Auxiliary + Subject + Main verb + ?<br><strong>With 'be':</strong> Question word + be + Subject + ?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always use auxiliary verbs (do/does, am/is/are, have/has)<br>• Subject comes AFTER auxiliary<br>• Main verb is in base form after do/does<br>• Question words: what, where, when, why, who, how<br>• Don't forget question mark at the end`,
            examples: `<strong>Yes/No questions:</strong><br>• Do you like coffee?<br>• Is she coming?<br>• Have you finished?<br><br><strong>Wh- questions:</strong><br>• What do you want?<br>• Where does she live?<br>• When are they coming?<br>• Why did you leave?<br>• How do you know?`,
            exercises: [
                { question: "Make question: She lives in Paris.", answer: "Where does she live?" },
                { question: "Make question: They are coming tomorrow.", answer: "When are they coming?" },
                { question: "Make question: He likes pizza.", answer: "What does he like?" },
                { question: "Make question: You are studying English.", answer: "What are you studying?" },
                { question: "Make question: She left because she was tired.", answer: "Why did she leave?" },
                { question: "Make question: They go to work by car.", answer: "How do they go to work?" },
                { question: "Make question: The meeting is at 3 PM.", answer: "When is the meeting?" },
                { question: "Make question: John called you.", answer: "Who called you?" },
                { question: "Make question: She bought a new dress.", answer: "What did she buy?" },
                { question: "Make question: They are going to London.", answer: "Where are they going?" }
            ]
        },
        {
            title: "Prepositions of time and place (in, on, at)",
            definition: "Small words that show relationships between nouns and other words, especially for time and location.",
            structure: `<strong>Time:</strong> in (months/years), on (days/dates), at (times)<br><strong>Place:</strong> in (enclosed spaces), on (surfaces), at (points)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• IN: months, years, seasons, morning/afternoon/evening<br>• ON: days, dates, specific days<br>• AT: exact times, night, weekend<br>• IN: countries, cities, rooms<br>• ON: streets, floors, surfaces<br>• AT: specific addresses, buildings, events`,
            examples: `<strong>Time:</strong><br>• In January, in 2023, in the morning<br>• On Monday, on May 5th, on Christmas Day<br>• At 3 o'clock, at night, at the weekend<br><br><strong>Place:</strong><br>• In London, in the room, in the car<br>• On Main Street, on the table, on the floor<br>• At home, at school, at the station`,
            exercises: [
                { question: "Complete: I was born ___ 1995.", answer: "I was born in 1995." },
                { question: "Complete: The meeting is ___ Monday.", answer: "The meeting is on Monday." },
                { question: "Complete: I get up ___ 7 AM.", answer: "I get up at 7 AM." },
                { question: "Complete: She lives ___ New York.", answer: "She lives in New York." },
                { question: "Complete: The book is ___ the table.", answer: "The book is on the table." },
                { question: "Complete: I'll see you ___ the weekend.", answer: "I'll see you at the weekend." },
                { question: "Complete: My birthday is ___ December.", answer: "My birthday is in December." },
                { question: "Complete: We met ___ the party.", answer: "We met at the party." },
                { question: "Complete: I work ___ the morning.", answer: "I work in the morning." },
                { question: "Complete: The picture is ___ the wall.", answer: "The picture is on the wall." }
            ]
        },
        {
            title: "Position of adverbs of frequency",
            definition: "Adverbs that tell us how often something happens. They have specific positions in sentences.",
            structure: `<strong>With 'be':</strong> Subject + be + adverb<br><strong>With other verbs:</strong> Subject + adverb + verb<br><strong>Order:</strong> always, usually, often, sometimes, rarely, never`,
            tips: `<strong>🎯 Key Tips:</strong><br>• AFTER 'be' verb (I am always happy)<br>• BEFORE main verbs (I always work)<br>• AFTER auxiliary verbs (I have never seen)<br>• 'Sometimes' can go at the beginning<br>• 'Never' makes the sentence negative`,
            examples: `<strong>With 'be':</strong><br>• I am always tired<br>• She is usually late<br>• They are never angry<br><br><strong>With other verbs:</strong><br>• I always eat breakfast<br>• She often goes shopping<br>• We sometimes watch TV<br><br><strong>Questions:</strong><br>• Do you often travel?<br>• Are you usually busy?`,
            exercises: [
                { question: "Put in correct position: I / am / always / happy", answer: "I am always happy." },
                { question: "Put in correct position: She / goes / usually / shopping", answer: "She usually goes shopping." },
                { question: "Put in correct position: They / are / never / late", answer: "They are never late." },
                { question: "Put in correct position: We / watch / sometimes / TV", answer: "We sometimes watch TV." },
                { question: "Put in correct position: He / is / often / tired", answer: "He is often tired." },
                { question: "Put in correct position: I / eat / rarely / fast food", answer: "I rarely eat fast food." },
                { question: "Put in correct position: She / has / never / been / abroad", answer: "She has never been abroad." },
                { question: "Put in correct position: Do / you / usually / work / late?", answer: "Do you usually work late?" },
                { question: "Put in correct position: They / are / always / friendly", answer: "They are always friendly." },
                { question: "Put in correct position: I / go / often / to the gym", answer: "I often go to the gym." }
            ]
        },
        {
            title: "Verb can",
            definition: "Modal verb used to express ability, possibility, and permission.",
            structure: `<strong>Affirmative:</strong> Subject + can + base verb<br><strong>Negative:</strong> Subject + can't/cannot + base verb<br><strong>Questions:</strong> Can + subject + base verb?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always followed by base verb (no -s, no -ing)<br>• Same form for all persons (I can, she can)<br>• Can't = cannot (informal vs formal)<br>• Use for: ability, possibility, permission<br>• Don't use 'to' after can`,
            examples: `<strong>Ability:</strong><br>• I can swim<br>• She can speak French<br>• They can't drive<br><br><strong>Permission:</strong><br>• Can I help you?<br>• You can go now<br>• Can we leave early?<br><br><strong>Possibility:</strong><br>• It can be dangerous<br>• This can happen`,
            exercises: [
                { question: "Complete: I ___ swim very well.", answer: "I can swim very well." },
                { question: "Make negative: She can drive.", answer: "She can't drive." },
                { question: "Make question: You can help me.", answer: "Can you help me?" },
                { question: "Complete: ___ I use your phone?", answer: "Can I use your phone?" },
                { question: "Complete: He ___ speak three languages.", answer: "He can speak three languages." },
                { question: "Make negative: They can come tonight.", answer: "They can't come tonight." },
                { question: "Complete: ___ you play the piano?", answer: "Can you play the piano?" },
                { question: "Complete: We ___ see the mountains from here.", answer: "We can see the mountains from here." },
                { question: "Make question: She can cook Italian food.", answer: "Can she cook Italian food?" },
                { question: "Complete: I ___ (not) understand this.", answer: "I can't understand this." }
            ]
        },
        {
            title: "Present continuous",
            definition: "Present continuous describes actions happening now or temporary situations.",
            structure: `<strong>Affirmative:</strong> Subject + am/is/are + verb-ing<br><strong>Negative:</strong> Subject + am/is/are + not + verb-ing<br><strong>Questions:</strong> Am/Is/Are + subject + verb-ing?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use for actions happening RIGHT NOW<br>• Use for temporary situations<br>• Time expressions: now, right now, at the moment, today<br>• Spelling: drop -e before -ing (make → making)<br>• Double consonant: stop → stopping, run → running<br>• Some verbs don't use continuous: like, love, hate, know, understand`,
            examples: `<strong>Affirmative:</strong><br>• I am working now<br>• She is reading a book<br>• They are playing football<br><br><strong>Negative:</strong><br>• I am not working<br>• She isn't coming<br>• They aren't listening<br><br><strong>Questions:</strong><br>• Are you working?<br>• Is she coming?<br>• What are they doing?`,
            exercises: [
                { question: "Complete: Right now, I ___ (study) English.", answer: "Right now, I am studying English." },
                { question: "Make negative: They are watching TV.", answer: "They aren't watching TV." },
                { question: "Complete: She ___ (not/come) today.", answer: "She isn't coming today." },
                { question: "Make question: He is working.", answer: "Is he working?" },
                { question: "Complete: We ___ (play) football now.", answer: "We are playing football now." },
                { question: "Complete: ___ you listening to me?", answer: "Are you listening to me?" },
                { question: "Complete: I ___ (not/sleep) right now.", answer: "I am not sleeping right now." },
                { question: "Complete: They ___ (run) in the park.", answer: "They are running in the park." },
                { question: "Make question: She is cooking dinner.", answer: "Is she cooking dinner?" },
                { question: "Complete: What ___ you ___ (do)?", answer: "What are you doing?" }
            ]
        },
        {
            title: "Present continuous vs. Present simple",
            definition: "Understanding when to use present continuous (temporary/now) vs present simple (habits/facts).",
            structure: `<strong>Present Simple:</strong> Habits, routines, facts<br><strong>Present Continuous:</strong> Actions now, temporary situations`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Present Simple: always, usually, every day, on Mondays<br>• Present Continuous: now, right now, at the moment, today<br>• Simple: permanent situations (I live in London)<br>• Continuous: temporary situations (I'm staying in London)<br>• Some verbs NEVER use continuous: know, like, want, need`,
            examples: `<strong>Present Simple (habits):</strong><br>• I work in a bank (my job)<br>• She speaks French (ability)<br>• They live in Paris (permanent)<br><br><strong>Present Continuous (now):</strong><br>• I'm working on a project (now)<br>• She's speaking French (right now)<br>• They're living in Paris (temporary)`,
            exercises: [
                { question: "Choose: I (work/am working) in a bank. (job)", answer: "I work in a bank." },
                { question: "Choose: I (work/am working) on a project. (now)", answer: "I am working on a project." },
                { question: "Choose: She (speaks/is speaking) English. (ability)", answer: "She speaks English." },
                { question: "Choose: She (speaks/is speaking) on the phone. (now)", answer: "She is speaking on the phone." },
                { question: "Choose: They (live/are living) in London. (permanent)", answer: "They live in London." },
                { question: "Choose: They (live/are living) with friends. (temporary)", answer: "They are living with friends." },
                { question: "Choose: I (go/am going) to work by bus. (habit)", answer: "I go to work by bus." },
                { question: "Choose: I (go/am going) to the cinema tonight. (plan)", answer: "I am going to the cinema tonight." },
                { question: "Choose: He (plays/is playing) football. (hobby)", answer: "He plays football." },
                { question: "Choose: He (plays/is playing) football now. (at this moment)", answer: "He is playing football now." }
            ]
        },
        {
            title: "Present continuous (future arrangements)",
            definition: "Present continuous can express future plans and arrangements that are already decided.",
            structure: `Subject + am/is/are + verb-ing + future time expression`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use for ARRANGED future plans<br>• Plans are already decided/organized<br>• Often with future time expressions<br>• More definite than 'going to'<br>• Common with: meeting, flying, leaving, coming`,
            examples: `• I'm meeting John tomorrow<br>• We're flying to London next week<br>• She's leaving at 6 PM<br>• They're coming for dinner tonight<br>• Are you working tomorrow?<br>• I'm not going to the party<br>• What are you doing this weekend?`,
            exercises: [
                { question: "Complete: I ___ (meet) my friend tomorrow.", answer: "I am meeting my friend tomorrow." },
                { question: "Complete: We ___ (fly) to Paris next month.", answer: "We are flying to Paris next month." },
                { question: "Make question: She is leaving tomorrow.", answer: "Is she leaving tomorrow?" },
                { question: "Complete: They ___ (come) for dinner tonight.", answer: "They are coming for dinner tonight." },
                { question: "Complete: ___ you working this weekend?", answer: "Are you working this weekend?" },
                { question: "Make negative: I am going to the party.", answer: "I am not going to the party." },
                { question: "Complete: He ___ (start) his new job on Monday.", answer: "He is starting his new job on Monday." },
                { question: "Complete: What ___ you ___ (do) tonight?", answer: "What are you doing tonight?" },
                { question: "Complete: She ___ (not/come) to the meeting.", answer: "She isn't coming to the meeting." },
                { question: "Complete: We ___ (have) lunch together tomorrow.", answer: "We are having lunch together tomorrow." }
            ]
        },
        {
            title: "Verb like + another verb",
            definition: "When 'like' is followed by another verb, we use either the infinitive (to + verb) or gerund (-ing form).",
            structure: `<strong>Like + infinitive:</strong> like to + base verb<br><strong>Like + gerund:</strong> like + verb-ing`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Both forms are correct and common<br>• 'Like to' = preference for specific occasions<br>• 'Like -ing' = general enjoyment<br>• Same pattern: love, hate, prefer<br>• After 'would like': always use 'to'`,
            examples: `<strong>Like + to:</strong><br>• I like to read before bed<br>• She likes to cook on weekends<br>• Do you like to travel?<br><br><strong>Like + -ing:</strong><br>• I like reading books<br>• She likes cooking<br>• Do you like traveling?<br><br><strong>Would like:</strong><br>• I would like to go<br>• Would you like to come?`,
            exercises: [
                { question: "Complete: I like ___ (read) books.", answer: "I like reading books. / I like to read books." },
                { question: "Complete: She likes ___ (cook) Italian food.", answer: "She likes cooking Italian food. / She likes to cook Italian food." },
                { question: "Complete: Do you like ___ (swim)?", answer: "Do you like swimming? / Do you like to swim?" },
                { question: "Complete: I would like ___ (visit) Paris.", answer: "I would like to visit Paris." },
                { question: "Complete: They like ___ (play) football.", answer: "They like playing football. / They like to play football." },
                { question: "Complete: Would you like ___ (come) with us?", answer: "Would you like to come with us?" },
                { question: "Complete: He doesn't like ___ (work) late.", answer: "He doesn't like working late. / He doesn't like to work late." },
                { question: "Complete: I'd like ___ (learn) Spanish.", answer: "I'd like to learn Spanish." },
                { question: "Complete: We like ___ (watch) movies.", answer: "We like watching movies. / We like to watch movies." },
                { question: "Complete: She would like ___ (meet) you.", answer: "She would like to meet you." }
            ]
        },
        {
            title: "The past of the verb be",
            definition: "Past forms of the verb 'be' are 'was' and 'were'. Used to describe past states and conditions.",
            structure: `<strong>Affirmative:</strong> I/He/She/It + was, You/We/They + were<br><strong>Negative:</strong> wasn't, weren't<br><strong>Questions:</strong> Was/Were + subject?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• WAS: I, he, she, it (singular)<br>• WERE: you, we, they (plural)<br>• 'You' always takes 'were' (even for one person)<br>• Contractions: wasn't, weren't<br>• Use for past states, not actions`,
            examples: `<strong>Affirmative:</strong><br>• I was tired yesterday<br>• She was at home<br>• They were happy<br><br><strong>Negative:</strong><br>• I wasn't busy<br>• She wasn't here<br>• They weren't ready<br><br><strong>Questions:</strong><br>• Was she at work?<br>• Were you at the party?<br>• Where were they?`,
            exercises: [
                { question: "Complete: I ___ tired yesterday.", answer: "I was tired yesterday." },
                { question: "Complete: They ___ at the cinema.", answer: "They were at the cinema." },
                { question: "Make negative: She was happy.", answer: "She wasn't happy." },
                { question: "Make question: You were at home.", answer: "Were you at home?" },
                { question: "Complete: He ___ (not) at work yesterday.", answer: "He wasn't at work yesterday." },
                { question: "Complete: ___ the weather good?", answer: "Was the weather good?" },
                { question: "Complete: We ___ very busy last week.", answer: "We were very busy last week." },
                { question: "Make question: The children were in the garden.", answer: "Were the children in the garden?" },
                { question: "Complete: It ___ (not) cold yesterday.", answer: "It wasn't cold yesterday." },
                { question: "Complete: Where ___ you last night?", answer: "Where were you last night?" }
            ]
        },
        {
            title: "Past of regular verbs",
            definition: "Regular verbs form the past tense by adding -ed to the base form.",
            structure: `Base verb + ed = Past form<br><strong>Spelling rules apply for -e, -y, and consonant doubling</strong>`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Most verbs: add -ed (work → worked)<br>• Verbs ending in -e: add -d (live → lived)<br>• Consonant + y: change to -ied (study → studied)<br>• One syllable CVC: double consonant (stop → stopped)<br>• Same form for all persons`,
            examples: `<strong>Regular patterns:</strong><br>• work → worked<br>• play → played<br>• live → lived<br>• study → studied<br>• stop → stopped<br><br><strong>In sentences:</strong><br>• I worked yesterday<br>• She played tennis<br>• They studied English`,
            exercises: [
                { question: "Past form of 'work':", answer: "worked" },
                { question: "Past form of 'study':", answer: "studied" },
                { question: "Past form of 'stop':", answer: "stopped" },
                { question: "Past form of 'live':", answer: "lived" },
                { question: "Complete: I ___ (play) football yesterday.", answer: "I played football yesterday." },
                { question: "Past form of 'try':", answer: "tried" },
                { question: "Complete: She ___ (cook) dinner last night.", answer: "She cooked dinner last night." },
                { question: "Past form of 'dance':", answer: "danced" },
                { question: "Complete: They ___ (watch) a movie.", answer: "They watched a movie." },
                { question: "Past form of 'plan':", answer: "planned" }
            ]
        },
        {
            title: "Past of irregular verbs",
            definition: "Irregular verbs have unique past forms that don't follow the -ed pattern and must be memorized.",
            structure: `Each irregular verb has its own past form<br><strong>No pattern - must be learned individually</strong>`,
            tips: `<strong>🎯 Key Tips:</strong><br>• No -ed ending for irregular verbs<br>• Each verb has unique past form<br>• Most common verbs are irregular<br>• Learn in groups with similar patterns<br>• Practice frequently used ones first`,
            examples: `<strong>Common irregular verbs:</strong><br>• go → went<br>• see → saw<br>• have → had<br>• come → came<br>• take → took<br>• make → made<br><br><strong>In sentences:</strong><br>• I went to the store<br>• She saw a movie<br>• They had dinner`,
            exercises: [
                { question: "Past form of 'go':", answer: "went" },
                { question: "Past form of 'see':", answer: "saw" },
                { question: "Past form of 'have':", answer: "had" },
                { question: "Complete: I ___ (come) home late.", answer: "I came home late." },
                { question: "Past form of 'take':", answer: "took" },
                { question: "Complete: She ___ (make) a cake.", answer: "She made a cake." },
                { question: "Past form of 'buy':", answer: "bought" },
                { question: "Complete: They ___ (eat) at a restaurant.", answer: "They ate at a restaurant." },
                { question: "Past form of 'think':", answer: "thought" },
                { question: "Complete: We ___ (find) the keys.", answer: "We found the keys." }
            ]
        },
        {
            title: "Simple past: regular and irregular verbs",
            definition: "Simple past describes completed actions in the past, using both regular (-ed) and irregular verb forms.",
            structure: `<strong>Affirmative:</strong> Subject + past form<br><strong>Negative:</strong> Subject + didn't + base verb<br><strong>Questions:</strong> Did + subject + base verb?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use past form ONLY in affirmative sentences<br>• Use base form after 'didn't' and 'did'<br>• Time expressions: yesterday, last week, ago, in 1990<br>• Same negative/question form for regular and irregular<br>• Don't mix up past form with past participle`,
            examples: `<strong>Affirmative:</strong><br>• I worked yesterday (regular)<br>• She went home (irregular)<br><br><strong>Negative:</strong><br>• I didn't work yesterday<br>• She didn't go home<br><br><strong>Questions:</strong><br>• Did you work yesterday?<br>• Did she go home?`,
            exercises: [
                { question: "Complete: I ___ (visit) my friend yesterday.", answer: "I visited my friend yesterday." },
                { question: "Complete: She ___ (go) to Paris last week.", answer: "She went to Paris last week." },
                { question: "Make negative: They played football.", answer: "They didn't play football." },
                { question: "Make negative: He came early.", answer: "He didn't come early." },
                { question: "Make question: You worked late.", answer: "Did you work late?" },
                { question: "Make question: She bought a car.", answer: "Did she buy a car?" },
                { question: "Complete: We ___ (not/see) the movie.", answer: "We didn't see the movie." },
                { question: "Complete: ___ you ___ (enjoy) the party?", answer: "Did you enjoy the party?" },
                { question: "Complete: They ___ (not/have) time.", answer: "They didn't have time." },
                { question: "Complete: When ___ she ___ (arrive)?", answer: "When did she arrive?" }
            ]
        },
        {
            title: "Past continuous",
            definition: "Past continuous describes actions that were in progress at a specific time in the past.",
            structure: `<strong>Affirmative:</strong> Subject + was/were + verb-ing<br><strong>Negative:</strong> Subject + wasn't/weren't + verb-ing<br><strong>Questions:</strong> Was/Were + subject + verb-ing?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Use for actions in progress in the past<br>• Often with time expressions: at 8 PM, while, when<br>• Interrupted actions: I was reading when he called<br>• Background actions in stories<br>• Two actions happening at same time`,
            examples: `<strong>In progress:</strong><br>• I was working at 9 AM<br>• They were watching TV<br><br><strong>Interrupted:</strong><br>• I was cooking when she arrived<br>• While I was reading, he called<br><br><strong>Two actions:</strong><br>• While I was studying, she was sleeping`,
            exercises: [
                { question: "Complete: I ___ (work) at 8 PM yesterday.", answer: "I was working at 8 PM yesterday." },
                { question: "Complete: They ___ (watch) TV when I called.", answer: "They were watching TV when I called." },
                { question: "Make question: She was cooking dinner.", answer: "Was she cooking dinner?" },
                { question: "Complete: While I ___ (read), she ___ (sleep).", answer: "While I was reading, she was sleeping." },
                { question: "Make negative: We were playing football.", answer: "We weren't playing football." },
                { question: "Complete: What ___ you ___ (do) at 7 PM?", answer: "What were you doing at 7 PM?" },
                { question: "Complete: I ___ (not/listen) to music.", answer: "I wasn't listening to music." },
                { question: "Complete: He ___ (drive) when it started raining.", answer: "He was driving when it started raining." },
                { question: "Make question: They were having dinner.", answer: "Were they having dinner?" },
                { question: "Complete: She ___ (study) while I ___ (cook).", answer: "She was studying while I was cooking." }
            ]
        },
        {
            title: "There is and there are / some / any + plural nouns",
            definition: "Used to say that something exists or doesn't exist. 'Some' and 'any' are used with plural nouns and uncountable nouns.",
            structure: `<strong>Singular:</strong> There is + a/an + singular noun<br><strong>Plural:</strong> There are + some/any + plural noun<br><strong>Questions:</strong> Is there...? / Are there...?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• THERE IS + singular (There is a book)<br>• THERE ARE + plural (There are books)<br>• SOME: positive sentences (There are some apples)<br>• ANY: negative sentences and questions (Are there any apples?)<br>• Contract: There's (only with 'is')`,
            examples: `<strong>Singular:</strong><br>• There is a cat in the garden<br>• There isn't a problem<br>• Is there a bank near here?<br><br><strong>Plural:</strong><br>• There are some books on the table<br>• There aren't any students<br>• Are there any questions?`,
            exercises: [
                { question: "Complete: ___ a book on the table.", answer: "There is a book on the table." },
                { question: "Complete: ___ some apples in the fridge.", answer: "There are some apples in the fridge." },
                { question: "Make question: There are some students.", answer: "Are there any students?" },
                { question: "Make negative: There is a problem.", answer: "There isn't a problem." },
                { question: "Complete: ___ any milk in the fridge?", answer: "Is there any milk in the fridge?" },
                { question: "Complete: ___ (not) any chairs in the room.", answer: "There aren't any chairs in the room." },
                { question: "Complete: ___ a good restaurant near here?", answer: "Is there a good restaurant near here?" },
                { question: "Complete: ___ some people waiting outside.", answer: "There are some people waiting outside." },
                { question: "Make negative: There are some cookies.", answer: "There aren't any cookies." },
                { question: "Complete: ___ (not) a parking lot here.", answer: "There isn't a parking lot here." }
            ]
        },
        {
            title: "There was and there were",
            definition: "Past forms of 'there is/are' used to say that something existed or didn't exist in the past.",
            structure: `<strong>Singular:</strong> There was + a/an + singular noun<br><strong>Plural:</strong> There were + some/any + plural noun<br><strong>Questions:</strong> Was there...? / Were there...?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• THERE WAS + singular (There was a party)<br>• THERE WERE + plural (There were many people)<br>• Use for past existence or events<br>• Same some/any rules as present<br>• Contract: There wasn't, There weren't`,
            examples: `<strong>Singular:</strong><br>• There was a meeting yesterday<br>• There wasn't a problem<br>• Was there a party?<br><br><strong>Plural:</strong><br>• There were many people<br>• There weren't any tickets<br>• Were there any questions?`,
            exercises: [
                { question: "Complete: ___ a party last night.", answer: "There was a party last night." },
                { question: "Complete: ___ many people at the concert.", answer: "There were many people at the concert." },
                { question: "Make question: There was a problem.", answer: "Was there a problem?" },
                { question: "Make negative: There were some cookies.", answer: "There weren't any cookies." },
                { question: "Complete: ___ any good movies on TV?", answer: "Were there any good movies on TV?" },
                { question: "Complete: ___ (not) a meeting yesterday.", answer: "There wasn't a meeting yesterday." },
                { question: "Complete: ___ a lot of traffic this morning?", answer: "Was there a lot of traffic this morning?" },
                { question: "Complete: ___ some interesting books in the library.", answer: "There were some interesting books in the library." },
                { question: "Make negative: There was a restaurant here.", answer: "There wasn't a restaurant here." },
                { question: "Complete: ___ (not) any students in class.", answer: "There weren't any students in class." }
            ]
        },
        {
            title: "Countable / uncountable nouns, a/an, some/any",
            definition: "Countable nouns can be counted (one book, two books). Uncountable nouns cannot be counted (water, music).",
            structure: `<strong>Countable:</strong> a/an (singular), some/any (plural)<br><strong>Uncountable:</strong> some/any (no a/an, no plural)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Countable: can count (1 apple, 2 apples)<br>• Uncountable: cannot count (water, NOT 1 water)<br>• A/AN: only with singular countable nouns<br>• SOME: positive sentences (countable plural + uncountable)<br>• ANY: questions and negatives<br>• Common uncountable: water, money, music, advice, information`,
            examples: `<strong>Countable:</strong><br>• An apple, some apples<br>• A book, some books<br>• Are there any chairs?<br><br><strong>Uncountable:</strong><br>• Some water (NOT a water)<br>• Some music (NOT musics)<br>• Any money? (NOT moneys)<br><br><strong>Mixed:</strong><br>• I need some bread and an apple`,
            exercises: [
                { question: "Complete: I need ___ apple. (countable singular)", answer: "I need an apple." },
                { question: "Complete: There is ___ water in the glass. (uncountable)", answer: "There is some water in the glass." },
                { question: "Complete: Are there ___ books? (countable plural)", answer: "Are there any books?" },
                { question: "Complete: I don't have ___ money. (uncountable)", answer: "I don't have any money." },
                { question: "Complete: She bought ___ oranges. (countable plural)", answer: "She bought some oranges." },
                { question: "Complete: Is there ___ milk? (uncountable)", answer: "Is there any milk?" },
                { question: "Complete: I need ___ information. (uncountable)", answer: "I need some information." },
                { question: "Complete: Do you have ___ pen? (countable singular)", answer: "Do you have a pen?" },
                { question: "Complete: There isn't ___ sugar. (uncountable)", answer: "There isn't any sugar." },
                { question: "Complete: I saw ___ interesting movie. (countable singular)", answer: "I saw an interesting movie." }
            ]
        },
        {
            title: "Quantifiers: How much / How many, a lot of, etc.",
            definition: "Words that express quantity or amount. Different quantifiers are used with countable and uncountable nouns.",
            structure: `<strong>Countable:</strong> How many, a few, many, a lot of<br><strong>Uncountable:</strong> How much, a little, much, a lot of<br><strong>Both:</strong> some, any, a lot of, lots of`,
            tips: `<strong>🎯 Key Tips:</strong><br>• HOW MANY + countable plural (How many books?)<br>• HOW MUCH + uncountable (How much water?)<br>• A LOT OF = lots of (both countable and uncountable)<br>• MUCH/MANY: mainly in questions and negatives<br>• A FEW (countable), A LITTLE (uncountable)`,
            examples: `<strong>Questions:</strong><br>• How many students are there?<br>• How much money do you have?<br><br><strong>Positive:</strong><br>• There are a lot of people<br>• I have a little time<br>• She has a few friends<br><br><strong>Negative:</strong><br>• There aren't many people<br>• I don't have much money`,
            exercises: [
                { question: "Complete: ___ books do you have?", answer: "How many books do you have?" },
                { question: "Complete: ___ water is there?", answer: "How much water is there?" },
                { question: "Complete: There are ___ students in class.", answer: "There are a lot of students in class." },
                { question: "Complete: I have ___ friends. (small number)", answer: "I have a few friends." },
                { question: "Complete: She has ___ money. (small amount)", answer: "She has a little money." },
                { question: "Complete: There isn't ___ time.", answer: "There isn't much time." },
                { question: "Complete: There aren't ___ chairs.", answer: "There aren't many chairs." },
                { question: "Complete: ___ coffee do you drink?", answer: "How much coffee do you drink?" },
                { question: "Complete: We have ___ work to do.", answer: "We have a lot of work to do." },
                { question: "Complete: ___ people came to the party?", answer: "How many people came to the party?" }
            ]
        },
        {
            title: "Quantifiers: too, (not) enough",
            definition: "'Too' means more than necessary (negative). 'Enough' means sufficient amount (positive).",
            structure: `<strong>Too:</strong> too + adjective/adverb<br><strong>Enough:</strong> adjective/adverb + enough OR enough + noun<br><strong>Not enough:</strong> not + adjective + enough OR not enough + noun`,
            tips: `<strong>🎯 Key Tips:</strong><br>• TOO = excessive, more than needed (problem)<br>• ENOUGH = sufficient, adequate (good)<br>• TOO comes BEFORE adjectives (too hot)<br>• ENOUGH comes AFTER adjectives (hot enough)<br>• ENOUGH comes BEFORE nouns (enough money)`,
            examples: `<strong>Too (problems):</strong><br>• It's too hot (can't work)<br>• She's too young (can't drive)<br>• This is too expensive<br><br><strong>Enough (sufficient):</strong><br>• It's hot enough (good temperature)<br>• She's old enough (can drive)<br>• I have enough money<br><br><strong>Not enough:</strong><br>• It's not hot enough<br>• I don't have enough time`,
            exercises: [
                { question: "Complete: This coffee is ___ hot. I can't drink it.", answer: "This coffee is too hot. I can't drink it." },
                { question: "Complete: She's old ___ to drive.", answer: "She's old enough to drive." },
                { question: "Complete: I don't have ___ money.", answer: "I don't have enough money." },
                { question: "Complete: This bag is ___ heavy.", answer: "This bag is too heavy." },
                { question: "Complete: Is the soup hot ___?", answer: "Is the soup hot enough?" },
                { question: "Complete: There isn't ___ time.", answer: "There isn't enough time." },
                { question: "Complete: The music is ___ loud.", answer: "The music is too loud." },
                { question: "Complete: Do we have ___ chairs?", answer: "Do we have enough chairs?" },
                { question: "Complete: This room is not big ___.", answer: "This room is not big enough." },
                { question: "Complete: The test was ___ difficult.", answer: "The test was too difficult." }
            ]
        },
        {
            title: "Comparative adjectives and adverbs, as…as",
            definition: "Used to compare two things. Shows if something is more, less, or equal to something else.",
            structure: `<strong>Short adjectives:</strong> adjective + er + than<br><strong>Long adjectives:</strong> more + adjective + than<br><strong>Equal comparison:</strong> as + adjective + as<br><strong>Adverbs:</strong> more + adverb + than`,
            tips: `<strong>🎯 Key Tips:</strong><br>• 1 syllable: add -er (tall → taller)<br>• 2+ syllables: use more (beautiful → more beautiful)<br>• Irregular: good → better, bad → worse<br>• AS...AS = equal (as tall as)<br>• NOT AS...AS = less than (not as tall as)`,
            examples: `<strong>Comparatives:</strong><br>• She's taller than me<br>• This is more expensive than that<br>• He runs faster than her<br><br><strong>As...as:</strong><br>• She's as tall as her brother<br>• This isn't as expensive as that<br>• He runs as fast as me`,
            exercises: [
                { question: "Compare: This book is ___ (interesting) than that one.", answer: "This book is more interesting than that one." },
                { question: "Compare: She's ___ (tall) than her sister.", answer: "She's taller than her sister." },
                { question: "Equal: He's ___ tall ___ his father.", answer: "He's as tall as his father." },
                { question: "Compare: This car is ___ (good) than mine.", answer: "This car is better than mine." },
                { question: "Compare: Today is ___ (hot) than yesterday.", answer: "Today is hotter than yesterday." },
                { question: "Equal: She's not ___ fast ___ him.", answer: "She's not as fast as him." },
                { question: "Compare: This test is ___ (easy) than the last one.", answer: "This test is easier than the last one." },
                { question: "Compare: London is ___ (expensive) than Madrid.", answer: "London is more expensive than Madrid." },
                { question: "Equal: My car is ___ old ___ yours.", answer: "My car is as old as yours." },
                { question: "Compare: She speaks ___ (clearly) than him.", answer: "She speaks more clearly than him." }
            ]
        },
        {
            title: "Superlative adjectives (+ ever + present perfect)",
            definition: "Used to compare one thing with all others in a group. Shows the highest or lowest degree.",
            structure: `<strong>Short adjectives:</strong> the + adjective + est<br><strong>Long adjectives:</strong> the most + adjective<br><strong>With present perfect:</strong> the + superlative + ever + present perfect`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always use THE before superlatives<br>• 1 syllable: add -est (tall → the tallest)<br>• 2+ syllables: use most (beautiful → the most beautiful)<br>• Irregular: good → the best, bad → the worst<br>• With EVER: the best movie I've ever seen`,
            examples: `<strong>Superlatives:</strong><br>• She's the tallest in the class<br>• This is the most expensive car<br>• He's the best student<br><br><strong>With ever:</strong><br>• It's the best movie I've ever seen<br>• She's the nicest person I've ever met<br>• This is the worst day I've ever had`,
            exercises: [
                { question: "Superlative: She's ___ (tall) girl in the class.", answer: "She's the tallest girl in the class." },
                { question: "Superlative: This is ___ (expensive) restaurant in town.", answer: "This is the most expensive restaurant in town." },
                { question: "With ever: It's ___ (good) book I've ever read.", answer: "It's the best book I've ever read." },
                { question: "Superlative: He's ___ (intelligent) student.", answer: "He's the most intelligent student." },
                { question: "Superlative: Today is ___ (hot) day of the year.", answer: "Today is the hottest day of the year." },
                { question: "With ever: She's ___ (kind) person I've ever met.", answer: "She's the kindest person I've ever met." },
                { question: "Superlative: This is ___ (bad) weather.", answer: "This is the worst weather." },
                { question: "Superlative: It's ___ (beautiful) place in the world.", answer: "It's the most beautiful place in the world." },
                { question: "With ever: This is ___ (difficult) test I've ever taken.", answer: "This is the most difficult test I've ever taken." },
                { question: "Superlative: She's ___ (young) in the family.", answer: "She's the youngest in the family." }
            ]
        },
        {
            title: "Be going to (plans, predictions and future time expressions)",
            definition: "Used to express future plans and predictions based on present evidence.",
            structure: `Subject + am/is/are + going to + base verb + future time expression`,
            tips: `<strong>🎯 Key Tips:</strong><br>• PLANS: decisions already made (I'm going to study tonight)<br>• PREDICTIONS: based on evidence (It's going to rain - dark clouds)<br>• Future time: tomorrow, next week, in 2025<br>• More certain than 'will' for plans<br>• Contract: I'm gonna (informal speech)`,
            examples: `<strong>Plans:</strong><br>• I'm going to study tonight<br>• We're going to visit Paris next year<br>• She's going to start a new job<br><br><strong>Predictions:</strong><br>• It's going to rain (dark clouds)<br>• She's going to be late (still at home)<br>• The team is going to win (playing well)`,
            exercises: [
                { question: "Complete: Tomorrow I ___ (visit) my grandmother.", answer: "Tomorrow I am going to visit my grandmother." },
                { question: "Complete: Look at those clouds! It ___ (rain).", answer: "Look at those clouds! It's going to rain." },
                { question: "Make question: She is going to cook dinner.", answer: "Is she going to cook dinner?" },
                { question: "Complete: We ___ (move) to a new house next month.", answer: "We are going to move to a new house next month." },
                { question: "Complete: He ___ (not/come) to the party.", answer: "He isn't going to come to the party." },
                { question: "Complete: What ___ you ___ (do) this weekend?", answer: "What are you going to do this weekend?" },
                { question: "Complete: They ___ (get) married next year.", answer: "They are going to get married next year." },
                { question: "Complete: I think she ___ (be) very successful.", answer: "I think she is going to be very successful." },
                { question: "Make negative: I am going to buy a car.", answer: "I am not going to buy a car." },
                { question: "Complete: The weather ___ (be) nice tomorrow.", answer: "The weather is going to be nice tomorrow." }
            ]
        },
        {
            title: "Adverbs of manner",
            definition: "Adverbs that describe HOW an action is done. Usually formed by adding -ly to adjectives.",
            structure: `<strong>Formation:</strong> adjective + ly = adverb<br><strong>Position:</strong> after the verb or at the end of the sentence<br><strong>Irregular:</strong> good → well, fast → fast, hard → hard`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Most adverbs: add -ly (quick → quickly)<br>• Adjectives ending in -y: change to -ily (easy → easily)<br>• Some don't change: fast, hard, late, early<br>• GOOD → WELL (He plays well, NOT good)<br>• Position: after verb or at end`,
            examples: `<strong>Regular formation:</strong><br>• She speaks clearly<br>• He drives carefully<br>• They work hard<br><br><strong>Irregular:</strong><br>• She sings well (NOT good)<br>• He runs fast<br>• They arrived late<br><br><strong>Position:</strong><br>• She answered the question correctly<br>• He opened the door quietly`,
            exercises: [
                { question: "Form adverb: She speaks (clear).", answer: "She speaks clearly." },
                { question: "Form adverb: He drives (careful).", answer: "He drives carefully." },
                { question: "Form adverb: She plays piano (good).", answer: "She plays piano well." },
                { question: "Form adverb: They work (hard).", answer: "They work hard." },
                { question: "Form adverb: He answered (quick).", answer: "He answered quickly." },
                { question: "Form adverb: She runs (fast).", answer: "She runs fast." },
                { question: "Form adverb: They arrived (late).", answer: "They arrived late." },
                { question: "Form adverb: He explained (patient).", answer: "He explained patiently." },
                { question: "Form adverb: She danced (beautiful).", answer: "She danced beautifully." },
                { question: "Form adverb: They listened (attentive).", answer: "They listened attentively." }
            ]
        },
        {
            title: "Verbs + infinitive",
            definition: "Some verbs are followed by the infinitive (to + base verb). These patterns must be memorized.",
            structure: `Verb + to + base verb<br><strong>Common verbs:</strong> want, need, hope, plan, decide, try, learn, forget, remember`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always use TO + base verb after these verbs<br>• WANT, NEED, HOPE, PLAN, DECIDE<br>• TRY, LEARN, FORGET, REMEMBER<br>• WOULD LIKE always takes infinitive<br>• Don't confuse with gerund verbs`,
            examples: `• I want to go home<br>• She needs to study<br>• We hope to see you soon<br>• They plan to travel<br>• He decided to stay<br>• I forgot to call you<br>• She learned to drive<br>• Would you like to come?`,
            exercises: [
                { question: "Complete: I want ___ (go) home.", answer: "I want to go home." },
                { question: "Complete: She needs ___ (study) more.", answer: "She needs to study more." },
                { question: "Complete: We hope ___ (see) you soon.", answer: "We hope to see you soon." },
                { question: "Complete: They decided ___ (move) to London.", answer: "They decided to move to London." },
                { question: "Complete: I forgot ___ (buy) milk.", answer: "I forgot to buy milk." },
                { question: "Complete: She learned ___ (speak) French.", answer: "She learned to speak French." },
                { question: "Complete: Would you like ___ (come) with us?", answer: "Would you like to come with us?" },
                { question: "Complete: He plans ___ (visit) his parents.", answer: "He plans to visit his parents." },
                { question: "Complete: I remember ___ (lock) the door.", answer: "I remember to lock the door." },
                { question: "Complete: They tried ___ (fix) the computer.", answer: "They tried to fix the computer." }
            ]
        },
        {
            title: "Uses of the infinitive",
            definition: "The infinitive (to + base verb) has several uses in English beyond following certain verbs.",
            structure: `<strong>Purpose:</strong> to + verb (why)<br><strong>After adjectives:</strong> adjective + to + verb<br><strong>After too/enough:</strong> too/enough + to + verb<br><strong>Subject:</strong> To + verb + is + adjective`,
            tips: `<strong>🎯 Key Tips:</strong><br>• PURPOSE: I came to help (= in order to help)<br>• AFTER ADJECTIVES: happy to see, easy to understand<br>• AFTER TOO: too difficult to understand<br>• AFTER ENOUGH: old enough to drive<br>• AS SUBJECT: To learn English is important`,
            examples: `<strong>Purpose:</strong><br>• I came to help you<br>• She went to buy food<br><br><strong>After adjectives:</strong><br>• I'm happy to see you<br>• It's easy to understand<br><br><strong>Too/Enough:</strong><br>• It's too hot to work<br>• She's old enough to drive<br><br><strong>As subject:</strong><br>• To learn English is important`,
            exercises: [
                { question: "Complete: I came ___ (help) you.", answer: "I came to help you." },
                { question: "Complete: I'm happy ___ (see) you.", answer: "I'm happy to see you." },
                { question: "Complete: It's easy ___ (understand).", answer: "It's easy to understand." },
                { question: "Complete: It's too hot ___ (work).", answer: "It's too hot to work." },
                { question: "Complete: She's old enough ___ (drive).", answer: "She's old enough to drive." },
                { question: "Complete: ___ (learn) English is important.", answer: "To learn English is important." },
                { question: "Complete: He went ___ (buy) some bread.", answer: "He went to buy some bread." },
                { question: "Complete: I'm excited ___ (travel).", answer: "I'm excited to travel." },
                { question: "Complete: The book is difficult ___ (read).", answer: "The book is difficult to read." },
                { question: "Complete: It's too late ___ (call) him.", answer: "It's too late to call him." }
            ]
        },
        {
            title: "Uses of the gerund",
            definition: "The gerund (verb + -ing) functions as a noun and has several specific uses in English.",
            structure: `<strong>After prepositions:</strong> preposition + gerund<br><strong>As subject:</strong> gerund + verb<br><strong>After certain verbs:</strong> verb + gerund<br><strong>After go:</strong> go + gerund (activities)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• AFTER PREPOSITIONS: interested in learning, good at swimming<br>• AS SUBJECT: Swimming is fun<br>• AFTER: enjoy, finish, stop, mind, avoid<br>• GO + -ING: go swimming, go shopping, go running`,
            examples: `<strong>After prepositions:</strong><br>• I'm interested in learning<br>• She's good at cooking<br>• Thank you for helping<br><br><strong>As subject:</strong><br>• Swimming is fun<br>• Reading is relaxing<br><br><strong>After verbs:</strong><br>• I enjoy reading<br>• She finished working<br><br><strong>Go + -ing:</strong><br>• Let's go swimming<br>• I go shopping on Saturdays`,
            exercises: [
                { question: "Complete: I'm interested in ___ (learn) Spanish.", answer: "I'm interested in learning Spanish." },
                { question: "Complete: ___ (swim) is good exercise.", answer: "Swimming is good exercise." },
                { question: "Complete: I enjoy ___ (read) books.", answer: "I enjoy reading books." },
                { question: "Complete: She's good at ___ (cook).", answer: "She's good at cooking." },
                { question: "Complete: Let's go ___ (shop).", answer: "Let's go shopping." },
                { question: "Complete: Thank you for ___ (help) me.", answer: "Thank you for helping me." },
                { question: "Complete: He finished ___ (work) at 6 PM.", answer: "He finished working at 6 PM." },
                { question: "Complete: ___ (learn) English takes time.", answer: "Learning English takes time." },
                { question: "Complete: I'm tired of ___ (wait).", answer: "I'm tired of waiting." },
                { question: "Complete: We go ___ (run) every morning.", answer: "We go running every morning." }
            ]
        },
        {
            title: "Verbs + gerund",
            definition: "Some verbs are always followed by the gerund (-ing form). These patterns must be memorized.",
            structure: `Verb + gerund (-ing)<br><strong>Common verbs:</strong> enjoy, finish, stop, mind, avoid, suggest, practice, keep, quit`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Always use -ING after these verbs<br>• ENJOY, FINISH, STOP, MIND, AVOID<br>• SUGGEST, PRACTICE, KEEP, QUIT<br>• Don't use infinitive with these verbs<br>• Some verbs can take both (like, love, hate)`,
            examples: `• I enjoy reading books<br>• She finished working<br>• Please stop talking<br>• Do you mind waiting?<br>• I avoid eating fast food<br>• He suggested going home<br>• She practices playing piano<br>• Keep trying!<br>• I quit smoking`,
            exercises: [
                { question: "Complete: I enjoy ___ (read) books.", answer: "I enjoy reading books." },
                { question: "Complete: She finished ___ (work) at 5 PM.", answer: "She finished working at 5 PM." },
                { question: "Complete: Please stop ___ (talk).", answer: "Please stop talking." },
                { question: "Complete: Do you mind ___ (wait)?", answer: "Do you mind waiting?" },
                { question: "Complete: I avoid ___ (eat) fast food.", answer: "I avoid eating fast food." },
                { question: "Complete: He suggested ___ (go) to the cinema.", answer: "He suggested going to the cinema." },
                { question: "Complete: She practices ___ (play) piano every day.", answer: "She practices playing piano every day." },
                { question: "Complete: Keep ___ (try)! Don't give up.", answer: "Keep trying! Don't give up." },
                { question: "Complete: I quit ___ (smoke) last year.", answer: "I quit smoking last year." },
                { question: "Complete: We considered ___ (move) to another city.", answer: "We considered moving to another city." }
            ]
        },
        {
            title: "Definite article: the or no the",
            definition: "Rules for when to use 'the' (definite article) or no article with nouns.",
            structure: `<strong>Use THE:</strong> specific things, unique things, superlatives<br><strong>No THE:</strong> general things, countries, languages, meals`,
            tips: `<strong>🎯 Key Tips:</strong><br>• THE: specific (the book on the table)<br>• NO THE: general (I like books)<br>• THE: unique things (the sun, the moon)<br>• NO THE: countries (France), languages (English)<br>• THE: superlatives (the best), ordinals (the first)`,
            examples: `<strong>Use THE:</strong><br>• The book on the table<br>• The sun is bright<br>• The best student<br>• The first day<br><br><strong>No THE:</strong><br>• I like books<br>• She speaks English<br>• We had lunch<br>• He lives in France`,
            exercises: [
                { question: "Complete: I like ___ music.", answer: "I like music." },
                { question: "Complete: ___ music is too loud.", answer: "The music is too loud." },
                { question: "Complete: She speaks ___ English.", answer: "She speaks English." },
                { question: "Complete: ___ sun is shining.", answer: "The sun is shining." },
                { question: "Complete: We had ___ breakfast at 8 AM.", answer: "We had breakfast at 8 AM." },
                { question: "Complete: ___ breakfast was delicious.", answer: "The breakfast was delicious." },
                { question: "Complete: He lives in ___ Spain.", answer: "He lives in Spain." },
                { question: "Complete: She's ___ best student.", answer: "She's the best student." },
                { question: "Complete: I love ___ chocolate.", answer: "I love chocolate." },
                { question: "Complete: ___ chocolate you bought is good.", answer: "The chocolate you bought is good." }
            ]
        },
        {
            title: "The present perfect",
            definition: "Present perfect connects past actions to the present. Shows experience, recent actions, or continuing situations.",
            structure: `<strong>Affirmative:</strong> Subject + have/has + past participle<br><strong>Negative:</strong> Subject + haven't/hasn't + past participle<br><strong>Questions:</strong> Have/Has + subject + past participle?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• HAVE with I/you/we/they<br>• HAS with he/she/it<br>• Use past participle (3rd form)<br>• Connection to NOW (still relevant)<br>• No specific past time mentioned<br>• Experience, recent actions, unfinished time`,
            examples: `<strong>Experience:</strong><br>• I have been to Paris<br>• She has never seen snow<br><br><strong>Recent:</strong><br>• I have just finished<br>• He has already left<br><br><strong>Continuing:</strong><br>• I have lived here for 5 years<br>• She has worked here since 2020`,
            exercises: [
                { question: "Complete: I ___ (visit) Paris twice.", answer: "I have visited Paris twice." },
                { question: "Complete: She ___ (never/see) snow.", answer: "She has never seen snow." },
                { question: "Complete: ___ you ___ (finish) your homework?", answer: "Have you finished your homework?" },
                { question: "Complete: He ___ (just/arrive).", answer: "He has just arrived." },
                { question: "Complete: We ___ (not/eat) lunch yet.", answer: "We haven't eaten lunch yet." },
                { question: "Complete: ___ she ___ (call) you?", answer: "Has she called you?" },
                { question: "Complete: They ___ (live) here for 10 years.", answer: "They have lived here for 10 years." },
                { question: "Complete: I ___ (already/read) this book.", answer: "I have already read this book." },
                { question: "Complete: He ___ (not/come) home yet.", answer: "He hasn't come home yet." },
                { question: "Complete: ___ you ever ___ (be) to London?", answer: "Have you ever been to London?" }
            ]
        },
        {
            title: "Present perfect + yet, just, already",
            definition: "Specific adverbs used with present perfect to show timing of actions.",
            structure: `<strong>YET:</strong> in questions and negatives (at the end)<br><strong>JUST:</strong> recent actions (before past participle)<br><strong>ALREADY:</strong> completed actions (before past participle or at end)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• YET: questions (Have you finished yet?) and negatives (I haven't finished yet)<br>• JUST: very recent (I have just arrived)<br>• ALREADY: earlier than expected (I have already finished)<br>• Position: just/already before past participle, yet at end`,
            examples: `<strong>YET:</strong><br>• Have you finished yet?<br>• I haven't eaten yet<br><br><strong>JUST:</strong><br>• I have just arrived<br>• She has just called<br><br><strong>ALREADY:</strong><br>• I have already finished<br>• He has already left<br>• Have you already eaten?`,
            exercises: [
                { question: "Complete: Have you finished ___?", answer: "Have you finished yet?" },
                { question: "Complete: I have ___ arrived.", answer: "I have just arrived." },
                { question: "Complete: She has ___ finished her work.", answer: "She has already finished her work." },
                { question: "Complete: I haven't eaten ___.", answer: "I haven't eaten yet." },
                { question: "Complete: He has ___ left the office.", answer: "He has just left the office." },
                { question: "Complete: Have you ___ seen this movie?", answer: "Have you already seen this movie?" },
                { question: "Complete: They haven't arrived ___.", answer: "They haven't arrived yet." },
                { question: "Complete: We have ___ bought the tickets.", answer: "We have just bought the tickets." },
                { question: "Complete: I have ___ done my homework.", answer: "I have already done my homework." },
                { question: "Complete: Has she called ___?", answer: "Has she called yet?" }
            ]
        },
        {
            title: "Present perfect + for or since",
            definition: "'For' shows duration (how long). 'Since' shows starting point (when it began).",
            structure: `<strong>FOR:</strong> + period of time (for 3 years, for a long time)<br><strong>SINCE:</strong> + starting point (since 2020, since Monday)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• FOR = duration (for 2 hours, for a week)<br>• SINCE = starting point (since 9 AM, since January)<br>• Use with present perfect for continuing situations<br>• Question: How long have you...?<br>• FOR: numbers, periods / SINCE: specific times, dates`,
            examples: `<strong>FOR (duration):</strong><br>• I have lived here for 5 years<br>• She has worked here for a long time<br>• We have been friends for ages<br><br><strong>SINCE (starting point):</strong><br>• I have lived here since 2019<br>• She has worked here since January<br>• We have been friends since childhood`,
            exercises: [
                { question: "Complete: I have lived here ___ 5 years.", answer: "I have lived here for 5 years." },
                { question: "Complete: She has worked here ___ 2020.", answer: "She has worked here since 2020." },
                { question: "Complete: We have been married ___ 10 years.", answer: "We have been married for 10 years." },
                { question: "Complete: He has studied English ___ January.", answer: "He has studied English since January." },
                { question: "Complete: I haven't seen him ___ a long time.", answer: "I haven't seen him for a long time." },
                { question: "Complete: They have lived there ___ they got married.", answer: "They have lived there since they got married." },
                { question: "Complete: How long have you worked here? ___ 3 years.", answer: "For 3 years." },
                { question: "Complete: I have known her ___ we were children.", answer: "I have known her since we were children." },
                { question: "Complete: She has been sick ___ a week.", answer: "She has been sick for a week." },
                { question: "Complete: We haven't talked ___ last month.", answer: "We haven't talked since last month." }
            ]
        },
        {
            title: "Present perfect vs. simple past",
            definition: "Present perfect connects to now; simple past is finished time with no connection to present.",
            structure: `<strong>Present Perfect:</strong> connection to now, no specific time<br><strong>Simple Past:</strong> finished time, specific time mentioned`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Present Perfect: still relevant now, no specific time<br>• Simple Past: finished, specific time (yesterday, in 1990)<br>• Present Perfect: experience, recent, continuing<br>• Simple Past: completed actions in past<br>• Time words: ago, yesterday, last week = Simple Past`,
            examples: `<strong>Present Perfect:</strong><br>• I have been to Paris (experience)<br>• She has just arrived (recent)<br>• We have lived here for 5 years (continuing)<br><br><strong>Simple Past:</strong><br>• I went to Paris last year (specific time)<br>• She arrived at 3 PM (specific time)<br>• We lived there for 5 years (finished)`,
            exercises: [
                { question: "Choose: I (have been/went) to Paris. (experience)", answer: "I have been to Paris." },
                { question: "Choose: I (have been/went) to Paris last year.", answer: "I went to Paris last year." },
                { question: "Choose: She (has worked/worked) here for 5 years. (still works)", answer: "She has worked here for 5 years." },
                { question: "Choose: She (has worked/worked) here for 5 years. (doesn't work now)", answer: "She worked here for 5 years." },
                { question: "Choose: (Have you seen/Did you see) this movie?", answer: "Have you seen this movie?" },
                { question: "Choose: (Have you seen/Did you see) the movie yesterday?", answer: "Did you see the movie yesterday?" },
                { question: "Choose: I (have just finished/just finished) my work.", answer: "I have just finished my work." },
                { question: "Choose: I (have finished/finished) my work at 5 PM.", answer: "I finished my work at 5 PM." },
                { question: "Choose: We (have lived/lived) here since 2020.", answer: "We have lived here since 2020." },
                { question: "Choose: We (have lived/lived) there when we were young.", answer: "We lived there when we were young." }
            ]
        },
        {
            title: "The passive",
            definition: "The passive voice emphasizes the action or result rather than who does the action.",
            structure: `<strong>Present:</strong> am/is/are + past participle<br><strong>Past:</strong> was/were + past participle<br><strong>Future:</strong> will be + past participle<br><strong>Present Perfect:</strong> have/has been + past participle`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Focus on action, not who does it<br>• Use when doer is unknown, obvious, or unimportant<br>• BY + agent (optional): The book was written by Shakespeare<br>• Common in formal writing, news, instructions<br>• Only transitive verbs can be passive`,
            examples: `<strong>Present:</strong><br>• English is spoken here<br>• The house is cleaned every day<br><br><strong>Past:</strong><br>• The book was written in 1990<br>• The windows were broken<br><br><strong>Future:</strong><br>• The meeting will be held tomorrow<br><br><strong>With agent:</strong><br>• The song was sung by Madonna`,
            exercises: [
                { question: "Make passive: They speak English here.", answer: "English is spoken here." },
                { question: "Make passive: Shakespeare wrote this play.", answer: "This play was written by Shakespeare." },
                { question: "Make passive: They will build a new school.", answer: "A new school will be built." },
                { question: "Make passive: Someone has stolen my car.", answer: "My car has been stolen." },
                { question: "Make passive: They clean the office every day.", answer: "The office is cleaned every day." },
                { question: "Make passive: The police caught the thief.", answer: "The thief was caught by the police." },
                { question: "Make passive: They will finish the project next week.", answer: "The project will be finished next week." },
                { question: "Make passive: Someone has broken the window.", answer: "The window has been broken." },
                { question: "Make passive: They make cars in this factory.", answer: "Cars are made in this factory." },
                { question: "Make passive: The teacher explained the lesson.", answer: "The lesson was explained by the teacher." }
            ]
        },
        {
            title: "Used to",
            definition: "'Used to' describes past habits or states that are no longer true in the present.",
            structure: `<strong>Affirmative:</strong> Subject + used to + base verb<br><strong>Negative:</strong> Subject + didn't use to + base verb<br><strong>Questions:</strong> Did + subject + use to + base verb?`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Past habits/states that are NOT true now<br>• 'Used to' in positive, 'use to' after didn't/did<br>• Different from 'be used to' (be accustomed to)<br>• Shows contrast between past and present<br>• Cannot use for single past actions`,
            examples: `<strong>Past habits:</strong><br>• I used to smoke (but I don't now)<br>• She used to live in Paris<br>• We used to play football<br><br><strong>Questions/Negatives:</strong><br>• Did you use to smoke?<br>• I didn't use to like coffee<br>• She didn't use to wear glasses`,
            exercises: [
                { question: "Complete: I ___ (smoke) but I quit.", answer: "I used to smoke but I quit." },
                { question: "Complete: She ___ (live) in London.", answer: "She used to live in London." },
                { question: "Make question: You used to play piano.", answer: "Did you use to play piano?" },
                { question: "Make negative: I used to drink coffee.", answer: "I didn't use to drink coffee." },
                { question: "Complete: We ___ (go) to the beach every summer.", answer: "We used to go to the beach every summer." },
                { question: "Complete: ___ you ___ (have) long hair?", answer: "Did you use to have long hair?" },
                { question: "Complete: He ___ (not/like) vegetables.", answer: "He didn't use to like vegetables." },
                { question: "Complete: They ___ (be) very close friends.", answer: "They used to be very close friends." },
                { question: "Make question: She used to work here.", answer: "Did she use to work here?" },
                { question: "Complete: I ___ (not/understand) English.", answer: "I didn't use to understand English." }
            ]
        },
        {
            title: "Time sequencers and connectors",
            definition: "Words that show the order of events and connect ideas in time.",
            structure: `<strong>Sequence:</strong> first, then, next, after that, finally<br><strong>Time:</strong> when, while, before, after, as soon as<br><strong>Contrast:</strong> but, however, although`,
            tips: `<strong>🎯 Key Tips:</strong><br>• FIRST, THEN, NEXT, FINALLY for order<br>• WHEN = at the same time<br>• WHILE = during (continuous actions)<br>• BEFORE/AFTER = time relationship<br>• Use commas after sequencers at beginning`,
            examples: `<strong>Sequence:</strong><br>• First, I wake up. Then, I have breakfast<br>• Next, I go to work. Finally, I come home<br><br><strong>Time connectors:</strong><br>• When I arrived, she was cooking<br>• While I was reading, he called<br>• Before I left, I locked the door<br>• After we ate, we watched TV`,
            exercises: [
                { question: "Complete: ___, I wake up. ___, I have breakfast.", answer: "First, I wake up. Then, I have breakfast." },
                { question: "Complete: ___ I arrived, she was cooking.", answer: "When I arrived, she was cooking." },
                { question: "Complete: ___ I was reading, he called.", answer: "While I was reading, he called." },
                { question: "Complete: ___ I left, I locked the door.", answer: "Before I left, I locked the door." },
                { question: "Complete: ___ we ate, we watched TV.", answer: "After we ate, we watched TV." },
                { question: "Put in order: Finally / First / Then / Next", answer: "First, Then, Next, Finally" },
                { question: "Complete: ___ I finish work, I'll call you.", answer: "When I finish work, I'll call you." },
                { question: "Complete: ___ she was studying, I was cooking.", answer: "While she was studying, I was cooking." },
                { question: "Complete: ___ the movie, we went home.", answer: "After the movie, we went home." },
                { question: "Complete: ___, we had dinner.", answer: "Finally, we had dinner." }
            ]
        },
        {
            title: "Defining relative clauses",
            definition: "Clauses that give essential information about a noun. They define which person or thing we mean.",
            structure: `<strong>People:</strong> who/that + verb<br><strong>Things:</strong> which/that + verb<br><strong>Possession:</strong> whose + noun<br><strong>Place:</strong> where<br><strong>Time:</strong> when`,
            tips: `<strong>🎯 Key Tips:</strong><br>• WHO/THAT for people (The man who lives here)<br>• WHICH/THAT for things (The book which I read)<br>• WHOSE for possession (The woman whose car...)<br>• No commas in defining clauses<br>• Essential information - can't remove`,
            examples: `<strong>People:</strong><br>• The man who lives next door<br>• The teacher that taught me<br><br><strong>Things:</strong><br>• The book which I bought<br>• The car that he drives<br><br><strong>Possession:</strong><br>• The woman whose car was stolen<br>• The student whose homework...`,
            exercises: [
                { question: "Complete: The man ___ lives next door is nice.", answer: "The man who lives next door is nice." },
                { question: "Complete: The book ___ I read was interesting.", answer: "The book which/that I read was interesting." },
                { question: "Complete: The woman ___ car was stolen called police.", answer: "The woman whose car was stolen called police." },
                { question: "Complete: The restaurant ___ we went to was expensive.", answer: "The restaurant which/that we went to was expensive." },
                { question: "Complete: The teacher ___ taught me was very kind.", answer: "The teacher who taught me was very kind." },
                { question: "Complete: The house ___ they bought is beautiful.", answer: "The house which/that they bought is beautiful." },
                { question: "Complete: The student ___ homework was late got detention.", answer: "The student whose homework was late got detention." },
                { question: "Complete: The movie ___ we watched was boring.", answer: "The movie which/that we watched was boring." },
                { question: "Complete: The person ___ called you left a message.", answer: "The person who called you left a message." },
                { question: "Complete: The computer ___ I use is very old.", answer: "The computer which/that I use is very old." }
            ]
        },
        {
            title: "Something, anything, somewhere, etc.",
            definition: "Indefinite pronouns and adverbs used when we don't specify exactly what, who, or where.",
            structure: `<strong>Positive:</strong> something, someone, somewhere<br><strong>Negative/Questions:</strong> anything, anyone, anywhere<br><strong>All situations:</strong> everything, everyone, everywhere`,
            tips: `<strong>🎯 Key Tips:</strong><br>• SOME- words: positive sentences<br>• ANY- words: negative sentences and questions<br>• EVERY- words: all situations<br>• NO- words: negative meaning (nothing = not anything)<br>• Adjectives come AFTER these words`,
            examples: `<strong>Positive:</strong><br>• I saw something interesting<br>• Someone called you<br>• Let's go somewhere nice<br><br><strong>Negative/Questions:</strong><br>• I don't know anything<br>• Did anyone call?<br>• Are you going anywhere?<br><br><strong>Everything/Everyone:</strong><br>• Everything is ready<br>• Everyone is here`,
            exercises: [
                { question: "Complete: I saw ___ interesting. (positive)", answer: "I saw something interesting." },
                { question: "Complete: I don't know ___. (negative)", answer: "I don't know anything." },
                { question: "Complete: Did ___ call me? (question)", answer: "Did anyone call me?" },
                { question: "Complete: Let's go ___ nice. (positive)", answer: "Let's go somewhere nice." },
                { question: "Complete: I can't find my keys ___. (negative)", answer: "I can't find my keys anywhere." },
                { question: "Complete: ___ is ready for the party. (all)", answer: "Everything is ready for the party." },
                { question: "Complete: Is there ___ I can do? (question)", answer: "Is there anything I can do?" },
                { question: "Complete: ___ came to the meeting. (all people)", answer: "Everyone came to the meeting." },
                { question: "Complete: I have ___ to tell you. (positive)", answer: "I have something to tell you." },
                { question: "Complete: We didn't go ___ yesterday. (negative)", answer: "We didn't go anywhere yesterday." }
            ]
        },
        {
            title: "Will, won't (predictions, decisions, offers, promises)",
            definition: "'Will' expresses future predictions, spontaneous decisions, offers, and promises.",
            structure: `Subject + will/won't + base verb`,
            tips: `<strong>🎯 Key Tips:</strong><br>• PREDICTIONS: I think it will rain<br>• DECISIONS: I'll have the pizza (deciding now)<br>• OFFERS: I'll help you<br>• PROMISES: I won't be late<br>• Contract: I'll, you'll, he'll, she'll, we'll, they'll`,
            examples: `<strong>Predictions:</strong><br>• I think it will rain tomorrow<br>• She won't pass the exam<br><br><strong>Decisions:</strong><br>• I'll have coffee (deciding now)<br>• We'll take the bus<br><br><strong>Offers/Promises:</strong><br>• I'll help you<br>• I won't tell anyone`,
            exercises: [
                { question: "Complete: I think it ___ rain tomorrow.", answer: "I think it will rain tomorrow." },
                { question: "Complete: Don't worry, I ___ help you.", answer: "Don't worry, I'll help you." },
                { question: "Complete: I promise I ___ (not) be late.", answer: "I promise I won't be late." },
                { question: "Complete: A: Tea or coffee? B: I ___ have coffee.", answer: "I'll have coffee." },
                { question: "Complete: She ___ (not) come to the party.", answer: "She won't come to the party." },
                { question: "Complete: ___ you help me with this?", answer: "Will you help me with this?" },
                { question: "Complete: I think they ___ win the game.", answer: "I think they will win the game." },
                { question: "Complete: Don't worry, I ___ call you later.", answer: "Don't worry, I'll call you later." },
                { question: "Complete: The weather ___ (not) be good tomorrow.", answer: "The weather won't be good tomorrow." },
                { question: "Complete: I ___ never forget this day.", answer: "I will never forget this day." }
            ]
        },
        {
            title: "Have to, don't have to, must, must not, can't",
            definition: "Modal verbs expressing obligation, necessity, prohibition, and lack of obligation.",
            structure: `<strong>Obligation:</strong> have to, must<br><strong>No obligation:</strong> don't have to<br><strong>Prohibition:</strong> must not, can't`,
            tips: `<strong>🎯 Key Tips:</strong><br>• HAVE TO = external obligation (rules, laws)<br>• MUST = internal obligation (personal feeling)<br>• DON'T HAVE TO = no obligation (optional)<br>• MUST NOT = prohibition (forbidden)<br>• CAN'T = not allowed`,
            examples: `<strong>Obligation:</strong><br>• I have to work tomorrow<br>• You must see a doctor<br><br><strong>No obligation:</strong><br>• You don't have to come<br><br><strong>Prohibition:</strong><br>• You must not smoke here<br>• You can't park here`,
            exercises: [
                { question: "Complete: I ___ work tomorrow. (obligation)", answer: "I have to work tomorrow." },
                { question: "Complete: You ___ see a doctor. (strong advice)", answer: "You must see a doctor." },
                { question: "Complete: You ___ come if you don't want to. (no obligation)", answer: "You don't have to come if you don't want to." },
                { question: "Complete: You ___ smoke in the hospital. (prohibition)", answer: "You must not smoke in the hospital." },
                { question: "Complete: You ___ park here. (not allowed)", answer: "You can't park here." },
                { question: "Complete: Students ___ wear uniforms. (school rule)", answer: "Students have to wear uniforms." },
                { question: "Complete: You ___ shout in the library. (forbidden)", answer: "You must not shout in the library." },
                { question: "Complete: You ___ pay now. (optional)", answer: "You don't have to pay now." },
                { question: "Complete: I ___ finish this today. (personal necessity)", answer: "I must finish this today." },
                { question: "Complete: Children ___ play in the street. (dangerous)", answer: "Children can't play in the street." }
            ]
        },
        {
            title: "Should",
            definition: "'Should' gives advice, recommendations, and expresses what is right or best to do.",
            structure: `Subject + should/shouldn't + base verb`,
            tips: `<strong>🎯 Key Tips:</strong><br>• ADVICE: You should study more<br>• RECOMMENDATIONS: You should visit Paris<br>• RIGHT THING: We should help others<br>• Less strong than 'must'<br>• Same form for all persons`,
            examples: `• You should study more<br>• She should see a doctor<br>• We should leave now<br>• You shouldn't smoke<br>• Should I call him?<br>• What should I do?<br>• You should have asked me`,
            exercises: [
                { question: "Complete: You ___ study more for the exam.", answer: "You should study more for the exam." },
                { question: "Complete: She ___ see a doctor about that cough.", answer: "She should see a doctor about that cough." },
                { question: "Complete: You ___ (not) eat so much sugar.", answer: "You shouldn't eat so much sugar." },
                { question: "Complete: ___ I call him now?", answer: "Should I call him now?" },
                { question: "Complete: We ___ help our neighbors.", answer: "We should help our neighbors." },
                { question: "Complete: You ___ (not) drive when you're tired.", answer: "You shouldn't drive when you're tired." },
                { question: "Complete: What ___ I wear to the party?", answer: "What should I wear to the party?" },
                { question: "Complete: Students ___ do their homework.", answer: "Students should do their homework." },
                { question: "Complete: You ___ be more careful.", answer: "You should be more careful." },
                { question: "Complete: ___ we leave now?", answer: "Should we leave now?" }
            ]
        },
        {
            title: "Might",
            definition: "'Might' expresses possibility - something that could happen but we're not sure.",
            structure: `Subject + might/might not + base verb`,
            tips: `<strong>🎯 Key Tips:</strong><br>• POSSIBILITY: It might rain (maybe 50%)<br>• Less certain than 'will'<br>• More polite than 'may' in requests<br>• Same form for all persons<br>• No -s, no -ing after might`,
            examples: `• It might rain tomorrow<br>• She might be late<br>• I might go to the party<br>• He might not come<br>• We might need help<br>• They might call later`,
            exercises: [
                { question: "Complete: It ___ rain tomorrow. (possibility)", answer: "It might rain tomorrow." },
                { question: "Complete: She ___ be late. (possible)", answer: "She might be late." },
                { question: "Complete: I ___ go to the party. (not sure)", answer: "I might go to the party." },
                { question: "Complete: He ___ (not) come tonight.", answer: "He might not come tonight." },
                { question: "Complete: We ___ need your help.", answer: "We might need your help." },
                { question: "Complete: The store ___ be closed.", answer: "The store might be closed." },
                { question: "Complete: I ___ be a little late.", answer: "I might be a little late." },
                { question: "Complete: They ___ call us later.", answer: "They might call us later." },
                { question: "Complete: The weather ___ (not) be good.", answer: "The weather might not be good." },
                { question: "Complete: You ___ want to check that.", answer: "You might want to check that." }
            ]
        },
        {
            title: "If + present, will + base form (first conditional)",
            definition: "First conditional expresses real possibilities and likely results in the future.",
            structure: `If + present simple, will + base verb<br>OR<br>Will + base verb + if + present simple`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Real future possibilities<br>• IF clause = present simple<br>• Main clause = will + base verb<br>• Can reverse order (comma only when if-clause first)<br>• Use for: predictions, warnings, promises`,
            examples: `• If it rains, I will stay home<br>• If you study hard, you will pass<br>• I will call you if I have time<br>• What will you do if you win?<br>• If she comes early, we will go shopping`,
            exercises: [
                { question: "Complete: If it ___ (rain), I ___ (stay) home.", answer: "If it rains, I will stay home." },
                { question: "Complete: If you ___ (study), you ___ (pass) the exam.", answer: "If you study, you will pass the exam." },
                { question: "Complete: I ___ (call) you if I ___ (have) time.", answer: "I will call you if I have time." },
                { question: "Complete: If she ___ (come) early, we ___ (go) shopping.", answer: "If she comes early, we will go shopping." },
                { question: "Complete: What ___ you ___ (do) if you ___ (win)?", answer: "What will you do if you win?" },
                { question: "Complete: If they ___ (not/hurry), they ___ (miss) the train.", answer: "If they don't hurry, they will miss the train." },
                { question: "Complete: We ___ (have) a picnic if the weather ___ (be) nice.", answer: "We will have a picnic if the weather is nice." },
                { question: "Complete: If you ___ (not/study), you ___ (fail).", answer: "If you don't study, you will fail." },
                { question: "Complete: She ___ (be) happy if you ___ (visit) her.", answer: "She will be happy if you visit her." },
                { question: "Complete: If I ___ (see) him, I ___ (tell) him.", answer: "If I see him, I will tell him." }
            ]
        },
        {
            title: "If + past, would + base form (second conditional)",
            definition: "Second conditional expresses unreal or imaginary situations and their results.",
            structure: `If + past simple, would + base verb<br>OR<br>Would + base verb + if + past simple`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Unreal/imaginary situations<br>• IF clause = past simple (but meaning is not past)<br>• Main clause = would + base verb<br>• Use 'were' for all persons with 'be'<br>• For dreams, wishes, impossible situations`,
            examples: `• If I had money, I would travel<br>• If she were here, she would help<br>• I would buy a car if I had money<br>• What would you do if you won the lottery?<br>• If I were you, I would study more`,
            exercises: [
                { question: "Complete: If I ___ (have) money, I ___ (travel).", answer: "If I had money, I would travel." },
                { question: "Complete: If she ___ (be) here, she ___ (help) us.", answer: "If she were here, she would help us." },
                { question: "Complete: What ___ you ___ (do) if you ___ (win) the lottery?", answer: "What would you do if you won the lottery?" },
                { question: "Complete: If I ___ (be) you, I ___ (study) more.", answer: "If I were you, I would study more." },
                { question: "Complete: I ___ (buy) a house if I ___ (have) enough money.", answer: "I would buy a house if I had enough money." },
                { question: "Complete: If they ___ (live) here, we ___ (see) them more often.", answer: "If they lived here, we would see them more often." },
                { question: "Complete: She ___ (be) happier if she ___ (have) a job.", answer: "She would be happier if she had a job." },
                { question: "Complete: If it ___ (not/rain), we ___ (go) to the beach.", answer: "If it didn't rain, we would go to the beach." },
                { question: "Complete: I ___ (help) you if I ___ (can).", answer: "I would help you if I could." },
                { question: "Complete: If he ___ (speak) English, he ___ (get) the job.", answer: "If he spoke English, he would get the job." }
            ]
        },
        {
            title: "Expressing movement",
            definition: "Prepositions and verbs used to describe movement and direction.",
            structure: `<strong>Direction:</strong> to, into, onto, towards<br><strong>Origin:</strong> from, out of, off<br><strong>Through:</strong> through, across, along, around`,
            tips: `<strong>🎯 Key Tips:</strong><br>• TO = direction (go to school)<br>• INTO = entering (go into the house)<br>• FROM = starting point (come from home)<br>• THROUGH = passing inside (walk through the park)<br>• ACROSS = from one side to other (across the street)`,
            examples: `• Go to the store<br>• Walk into the room<br>• Come from the office<br>• Drive through the tunnel<br>• Run across the street<br>• Walk along the river<br>• Go around the corner`,
            exercises: [
                { question: "Complete: I'm going ___ the store.", answer: "I'm going to the store." },
                { question: "Complete: She walked ___ the room.", answer: "She walked into the room." },
                { question: "Complete: He came ___ work early.", answer: "He came from work early." },
                { question: "Complete: We drove ___ the tunnel.", answer: "We drove through the tunnel." },
                { question: "Complete: Look both ways before crossing ___ the street.", answer: "Look both ways before crossing across the street." },
                { question: "Complete: They walked ___ the river.", answer: "They walked along the river." },
                { question: "Complete: Turn ___ the corner.", answer: "Turn around the corner." },
                { question: "Complete: The cat jumped ___ the table.", answer: "The cat jumped onto the table." },
                { question: "Complete: She got ___ the car.", answer: "She got out of the car." },
                { question: "Complete: Walk ___ the bridge.", answer: "Walk across the bridge." }
            ]
        },
        {
            title: "Word order of phrasal verbs",
            definition: "Rules for the position of objects with separable and inseparable phrasal verbs.",
            structure: `<strong>Separable:</strong> verb + object + particle OR verb + particle + object<br><strong>Inseparable:</strong> verb + particle + object (only)<br><strong>Pronoun objects:</strong> must separate (turn it on, NOT turn on it)`,
            tips: `<strong>🎯 Key Tips:</strong><br>• SEPARABLE: turn on/off, pick up, put on/off<br>• INSEPARABLE: look after, look for, get over<br>• PRONOUNS: always separate (turn it on)<br>• NOUNS: can separate or not (turn on the light / turn the light on)<br>• Learn which verbs are separable/inseparable`,
            examples: `<strong>Separable:</strong><br>• Turn on the TV / Turn the TV on<br>• Turn it on (NOT turn on it)<br><br><strong>Inseparable:</strong><br>• Look after the children<br>• Look for my keys<br>• Get over the problem`,
            exercises: [
                { question: "Correct: Turn on it. (the TV)", answer: "Turn it on." },
                { question: "Complete: Please turn ___ the lights ___. (on)", answer: "Please turn on the lights. / Please turn the lights on." },
                { question: "Complete: I'm looking ___ my keys.", answer: "I'm looking for my keys." },
                { question: "Complete: She looks ___ her children.", answer: "She looks after her children." },
                { question: "Complete: Put ___ your coat ___. (on)", answer: "Put on your coat. / Put your coat on." },
                { question: "Correct: Put on it. (the coat)", answer: "Put it on." },
                { question: "Complete: I need to get ___ this problem.", answer: "I need to get over this problem." },
                { question: "Complete: Pick ___ the book ___. (up)", answer: "Pick up the book. / Pick the book up." },
                { question: "Correct: Pick up it. (the book)", answer: "Pick it up." },
                { question: "Complete: Take ___ your shoes ___. (off)", answer: "Take off your shoes. / Take your shoes off." }
            ]
        },
        {
            title: "So, neither + auxiliaries",
            definition: "Used to show agreement with positive statements (so) and negative statements (neither).",
            structure: `<strong>Positive agreement:</strong> So + auxiliary + subject<br><strong>Negative agreement:</strong> Neither + auxiliary + subject<br><strong>Alternative:</strong> subject + auxiliary + too/either`,
            tips: `<strong>🎯 Key Tips:</strong><br>• SO = agree with positive (I like coffee. So do I.)<br>• NEITHER = agree with negative (I don't like tea. Neither do I.)<br>• Use same auxiliary as original statement<br>• Alternative: Me too / Me neither (informal)<br>• Invert subject and auxiliary`,
            examples: `<strong>Positive:</strong><br>• A: I like pizza. B: So do I.<br>• A: She is tired. B: So am I.<br><br><strong>Negative:</strong><br>• A: I don't like coffee. B: Neither do I.<br>• A: She isn't ready. B: Neither am I.<br><br><strong>Informal:</strong><br>• A: I'm hungry. B: Me too.<br>• A: I don't like it. B: Me neither.`,
            exercises: [
                { question: "A: I like pizza. B: So ___ I.", answer: "So do I." },
                { question: "A: I don't like coffee. B: Neither ___ I.", answer: "Neither do I." },
                { question: "A: She is tired. B: So ___ I.", answer: "So am I." },
                { question: "A: I can't swim. B: Neither ___ I.", answer: "Neither can I." },
                { question: "A: I have been to Paris. B: So ___ I.", answer: "So have I." },
                { question: "A: I won't go. B: Neither ___ I.", answer: "Neither will I." },
                { question: "A: I'm studying English. B: So ___ I.", answer: "So am I." },
                { question: "A: I haven't finished. B: Neither ___ I.", answer: "Neither have I." },
                { question: "A: I would like to travel. B: So ___ I.", answer: "So would I." },
                { question: "A: I wasn't there. B: Neither ___ I.", answer: "Neither was I." }
            ]
        },
        {
            title: "Past perfect",
            definition: "Past perfect shows which action happened first when talking about two past actions.",
            structure: `Subject + had + past participle<br><strong>Use:</strong> Action that happened BEFORE another past action`,
            tips: `<strong>🎯 Key Tips:</strong><br>• Shows 'past of the past'<br>• Use when you have TWO past actions<br>• Earlier action = past perfect<br>• Later action = simple past<br>• Often with: after, before, when, by the time`,
            examples: `• When I arrived, she had already left<br>• I had finished work before he called<br>• After we had eaten, we watched TV<br>• By the time I got there, the movie had started<br>• She had never seen snow before she moved to Canada`,
            exercises: [
                { question: "Complete: When I arrived, she ___ already ___ (leave).", answer: "When I arrived, she had already left." },
                { question: "Complete: I ___ (finish) work before he called.", answer: "I had finished work before he called." },
                { question: "Complete: After we ___ (eat), we watched TV.", answer: "After we had eaten, we watched TV." },
                { question: "Complete: By the time I got there, the movie ___ (start).", answer: "By the time I got there, the movie had started." },
                { question: "Complete: She ___ never ___ (see) snow before.", answer: "She had never seen snow before." },
                { question: "Complete: I ___ (not/meet) him before yesterday.", answer: "I hadn't met him before yesterday." },
                { question: "Complete: ___ you ___ (finish) when I called?", answer: "Had you finished when I called?" },
                { question: "Complete: They ___ (live) there for 5 years before they moved.", answer: "They had lived there for 5 years before they moved." },
                { question: "Complete: When we arrived, the party ___ already ___ (end).", answer: "When we arrived, the party had already ended." },
                { question: "Complete: I realized I ___ (forget) my keys.", answer: "I realized I had forgotten my keys." }
            ]
        },
        {
            title: "Reported speech",
            definition: "How to report what someone said, changing direct speech to indirect speech.",
            structure: `<strong>Present → Past:</strong> say/tell + (that) + past form<br><strong>Pronouns change:</strong> I → he/she, you → I/he/she<br><strong>Time changes:</strong> today → that day, tomorrow → the next day`,
            tips: `<strong>🎯 Key Tips:</strong><br>• SAY + (that) / TELL + person + (that)<br>• Present → Past, Past → Past Perfect<br>• Change pronouns and time expressions<br>• Questions: ask + if/whether + statement order<br>• Commands: tell + person + to + infinitive`,
            examples: `<strong>Statements:</strong><br>• "I am tired" → He said (that) he was tired<br>• "I will call you" → She said she would call me<br><br><strong>Questions:</strong><br>• "Are you ready?" → He asked if I was ready<br><br><strong>Commands:</strong><br>• "Close the door" → She told me to close the door`,
            exercises: [
                { question: "Report: 'I am tired.' (He said)", answer: "He said (that) he was tired." },
                { question: "Report: 'I will call you.' (She said)", answer: "She said (that) she would call me." },
                { question: "Report: 'Are you ready?' (He asked me)", answer: "He asked me if I was ready." },
                { question: "Report: 'Close the door.' (She told me)", answer: "She told me to close the door." },
                { question: "Report: 'I have finished.' (He said)", answer: "He said (that) he had finished." },
                { question: "Report: 'I can swim.' (She said)", answer: "She said (that) she could swim." },
                { question: "Report: 'Where do you live?' (He asked me)", answer: "He asked me where I lived." },
                { question: "Report: 'Don't go.' (She told me)", answer: "She told me not to go." },
                { question: "Report: 'I went to Paris.' (He said)", answer: "He said (that) he had gone to Paris." },
                { question: "Report: 'Will you help me?' (She asked)", answer: "She asked if I would help her." }
            ]
        },
        {
            title: "Questions without auxiliaries",
            definition: "Questions where the question word is the subject, so no auxiliary verb is needed.",
            structure: `Question word + verb + object/complement<br><strong>Who/What as subject:</strong> No do/does/did needed`,
            tips: `<strong>🎯 Key Tips:</strong><br>• When WHO/WHAT is the SUBJECT, no auxiliary needed<br>• WHO called? (not Who did call?)<br>• WHAT happened? (not What did happen?)<br>• Use normal word order (subject + verb)<br>• Only for who/what as subject`,
            examples: `<strong>Subject questions:</strong><br>• Who called you? (someone called)<br>• What happened? (something happened)<br>• Who lives here? (someone lives)<br><br><strong>Object questions (need auxiliary):</strong><br>• Who did you call? (you called someone)<br>• What did you see? (you saw something)`,
            exercises: [
                { question: "Make question: Someone called. → ___ called?", answer: "Who called?" },
                { question: "Make question: Something happened. → ___ happened?", answer: "What happened?" },
                { question: "Make question: Someone lives here. → ___ lives here?", answer: "Who lives here?" },
                { question: "Make question: Something broke. → ___ broke?", answer: "What broke?" },
                { question: "Make question: Someone is coming. → ___ is coming?", answer: "Who is coming?" },
                { question: "Make question: Something fell. → ___ fell?", answer: "What fell?" },
                { question: "Make question: Someone knows the answer. → ___ knows the answer?", answer: "Who knows the answer?" },
                { question: "Make question: Something smells good. → ___ smells good?", answer: "What smells good?" },
                { question: "Make question: Someone won the game. → ___ won the game?", answer: "Who won the game?" },
                { question: "Make question: Something is wrong. → ___ is wrong?", answer: "What is wrong?" }
            ]
        },
        {
            title: "Review of forms: present, past and future",
            definition: "Summary of all main verb forms and tenses covered in A2 level English.",
            structure: `<strong>Present:</strong> Simple, Continuous, Perfect<br><strong>Past:</strong> Simple, Continuous, Perfect<br><strong>Future:</strong> Will, Going to, Present Continuous`,
            tips: `<strong>🎯 Key Tips:</strong><br>• PRESENT: habits (simple), now (continuous), experience (perfect)<br>• PAST: finished actions (simple), in progress (continuous), before past (perfect)<br>• FUTURE: predictions (will), plans (going to), arrangements (present continuous)<br>• Choose based on time and meaning, not just time words`,
            examples: `<strong>Present:</strong><br>• I work here (simple)<br>• I am working now (continuous)<br>• I have worked here for 5 years (perfect)<br><br><strong>Past:</strong><br>• I worked yesterday (simple)<br>• I was working at 9 AM (continuous)<br>• I had worked before he arrived (perfect)<br><br><strong>Future:</strong><br>• I will work tomorrow (will)<br>• I'm going to work hard (going to)<br>• I'm working tomorrow (arrangement)`,
            exercises: [
                { question: "Choose tense: I ___ (work) here every day. (habit)", answer: "I work here every day." },
                { question: "Choose tense: I ___ (work) right now. (at this moment)", answer: "I am working right now." },
                { question: "Choose tense: I ___ (work) here for 5 years. (continuing)", answer: "I have worked here for 5 years." },
                { question: "Choose tense: I ___ (work) yesterday. (finished)", answer: "I worked yesterday." },
                { question: "Choose tense: I ___ (work) when he called. (in progress)", answer: "I was working when he called." },
                { question: "Choose tense: I think I ___ (work) tomorrow. (prediction)", answer: "I think I will work tomorrow." },
                { question: "Choose tense: I ___ (work) tomorrow. (plan)", answer: "I am going to work tomorrow." },
                { question: "Choose tense: I ___ (meet) him at 3 PM. (arrangement)", answer: "I am meeting him at 3 PM." },
                { question: "Choose tense: I ___ (finish) before he arrived. (earlier past)", answer: "I had finished before he arrived." },
                { question: "Choose tense: I ___ (never/see) this before. (experience)", answer: "I have never seen this before." }
            ]
        }
    ];
}