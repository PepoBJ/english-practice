let writingTopics = [];

function loadWritingTopics() {
    writingTopics = [
        {
            title: "ACCIDENT",
            definition: "Describe a small accident that happened to you.",
            structure: `
                <strong>You should say:</strong><br>
                • How the accident happened<br>
                • What you did about it<br>
                • How long it took to get better<br>
                • How you felt about it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                Last month, I had a small accident at home. I was walking in the kitchen when I fell down. There was water on the floor and I didn't see it. I hurt my arm when I fell.<br><br>
                
                After the accident, I put some ice on my arm. It was very painful. My mother helped me and we went to see a doctor. The doctor said my arm was okay, but I needed to be careful.<br><br>
                
                It took about one week for my arm to feel better. During this time, I couldn't write very well at school. I had to use my other hand for some things.<br><br>
                
                I felt scared at first because it hurt a lot. But I learned to be more careful when I walk. Now I always look at the floor before I walk, especially in the kitchen. I don't want to have another accident like this.
            `,
            exercises: [
                { question: "Where did the accident happen?", answer: "In the kitchen at home" },
                { question: "Why did the person fall?", answer: "There was water on the floor" },
                { question: "What part of the body was hurt?", answer: "The arm" },
                { question: "How long did it take to feel better?", answer: "About one week" },
                { question: "What did the person learn?", answer: "To be more careful when walking" }
            ]
        },
        {
            title: "AMBITION",
            definition: "Describe something you want to do in the future.",
            structure: `
                <strong>You should say:</strong><br>
                • What you want to do<br>
                • When you want to do it<br>
                • How it will change your life<br>
                • Why it is important to you
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My biggest dream for the future is to become a teacher. I want to teach English to young children. I think teaching is a very good job because you can help people learn new things.<br><br>
                
                I want to finish my studies in about three years. After that, I will look for a job at a school. I hope to start working as a teacher when I am 25 years old.<br><br>
                
                If I become a teacher, my life will be very different. I will have a good job and I can help my family. I will also meet many children and their parents. I think I will be very happy.<br><br>
                
                This dream is important to me because I love children and I want to help them. When I was young, my teachers helped me a lot. Now I want to do the same for other children. Teaching is not just a job for me - it is something I really want to do.
            `,
            exercises: [
                { question: "What does the person want to become?", answer: "A teacher" },
                { question: "What subject does she want to teach?", answer: "English" },
                { question: "When does she want to start working?", answer: "When she is 25 years old" },
                { question: "Why does she want to be a teacher?", answer: "She loves children and wants to help them" },
                { question: "How will it change her life?", answer: "She will have a good job and help her family" }
            ]
        },
        {
            title: "ANIMAL/PET",
            definition: "Talk about a pet that you had or know.",
            structure: `
                <strong>You should say:</strong><br>
                • What kind of animal it was<br>
                • What it looked like<br>
                • How you took care of it<br>
                • Why you liked or didn't like it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                When I was a child, I had a small dog called Max. He was a brown and white dog with short hair. He was not very big, but he was very friendly and happy all the time.<br><br>
                
                I took care of Max every day. I gave him food in the morning and evening. I also gave him water and took him for walks in the park. Sometimes I played with him in the garden.<br><br>
                
                I really loved Max because he was always happy to see me. When I came home from school, he ran to me and jumped up and down. He was like my best friend. But sometimes he was noisy and woke up the neighbors.<br><br>
                
                Dogs are very popular pets in my country. Many families have dogs because they are good friends and they can protect the house. I think dogs are the best pets because they love their families very much. I want to have another dog in the future.
            `,
            exercises: [
                { question: "What was the dog's name?", answer: "Max" },
                { question: "What did the dog look like?", answer: "Brown and white with short hair, not very big" },
                { question: "How did the person take care of the dog?", answer: "Gave food and water, took for walks, played with him" },
                { question: "What did the dog do when the person came home?", answer: "Ran to him and jumped up and down" },
                { question: "Why are dogs popular pets?", answer: "They are good friends and can protect the house" }
            ]
        },
        {
            title: "APARTMENT/HOUSE",
            definition: "Describe a house or apartment where you lived.",
            structure: `
                <strong>You should say:</strong><br>
                • What it looked like<br>
                • Where it was<br>
                • Who lived there with you<br>
                • What you liked about living there
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I lived in a small house with my family for many years. The house had two floors and four rooms. On the first floor, there was a kitchen, a living room, and a small bathroom. On the second floor, there were two bedrooms.<br><br>
                
                The house was in a quiet street near the center of town. There were many trees around the house and a small garden in front. The neighbors were very friendly and we knew all of them.<br><br>
                
                I lived there with my parents and my younger brother. We were very happy in that house. My brother and I shared one bedroom, and my parents had the other bedroom.<br><br>
                
                I loved living in that house because it was comfortable and peaceful. The garden was beautiful and I liked to sit there and read books. The house was also near my school, so I could walk there every day. It was a perfect place for a family like ours.
            `,
            exercises: [
                { question: "How many floors did the house have?", answer: "Two floors" },
                { question: "What rooms were on the first floor?", answer: "Kitchen, living room, and small bathroom" },
                { question: "Where was the house located?", answer: "In a quiet street near the center of town" },
                { question: "Who lived in the house?", answer: "The person, parents, and younger brother" },
                { question: "Why did the person like the house?", answer: "It was comfortable, peaceful, had a beautiful garden, and was near school" }
            ]
        },
        {
            title: "BOOK",
            definition: "Describe a book that you enjoyed reading.",
            structure: `
                <strong>You should say:</strong><br>
                • What the book was about<br>
                • When you read it<br>
                • Why you chose this book<br>
                • What you learned from it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                Last year, I read a very interesting book called "The Little Prince". It is a famous story about a young prince who travels to different planets and meets many strange people.<br><br>
                
                I read this book during my summer vacation. It took me about two weeks to finish it because I read it slowly. I wanted to understand every part of the story very well.<br><br>
                
                I chose this book because my teacher said it was very good. She told our class that it was not just for children, but adults could enjoy it too. I was curious about why this book was so popular.<br><br>
                
                From this book, I learned that the most important things in life are not money or big houses. The book taught me that friendship, love, and kindness are more valuable. It also showed me that adults sometimes forget how to see the world like children do. This book changed the way I think about many things.
            `,
            exercises: [
                { question: "What is the name of the book?", answer: "The Little Prince" },
                { question: "What is the story about?", answer: "A young prince who travels to different planets" },
                { question: "How long did it take to read?", answer: "About two weeks" },
                { question: "Why did the person choose this book?", answer: "The teacher said it was very good" },
                { question: "What did the person learn?", answer: "That friendship, love, and kindness are most important" }
            ]
        },
        {
            title: "CHOICE",
            definition: "Describe an important choice you had to make.",
            structure: `
                <strong>You should say:</strong><br>
                • What choice you had to make<br>
                • When you had to make it<br>
                • What you decided<br>
                • How you feel about your choice now
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                Two years ago, I had to make an important choice about my studies. I finished high school and I had to decide what to study at university. This was very difficult for me.<br><br>
                
                I had two options. I could study business like my father wanted, or I could study art like I wanted. My parents thought business was better because I could find a good job easily. But I loved drawing and painting.<br><br>
                
                After thinking for many weeks, I decided to study art. It was not easy to tell my parents, but I explained that art made me happy. Finally, they understood and supported my decision.<br><br>
                
                Now I am very happy with my choice. I love my art classes and I am learning many new things. My parents are proud of me because I work hard. I think it is important to follow your dreams, even when it is difficult. I made the right choice for me.
            `,
            exercises: [
                { question: "What choice did the person have to make?", answer: "What to study at university" },
                { question: "What were the two options?", answer: "Study business or study art" },
                { question: "What did the parents want?", answer: "They wanted him to study business" },
                { question: "What did the person decide?", answer: "To study art" },
                { question: "How does the person feel now?", answer: "Very happy with the choice" }
            ]
        },
        {
            title: "CHILDHOOD",
            definition: "Describe a memory from when you were a child.",
            structure: `
                <strong>You should say:</strong><br>
                • What happened<br>
                • How old you were<br>
                • Who was with you<br>
                • Why you remember it well
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I have a very happy memory from when I was seven years old. It was my first day at a new school and I was very nervous. I didn't know any children there and I was scared.<br><br>
                
                My mother took me to school that morning. She walked with me to my new classroom and introduced me to my teacher, Mrs. Garcia. The teacher was very kind and smiled at me.<br><br>
                
                During the first break, a girl named Ana came to talk to me. She asked if I wanted to play with her and her friends. We played games in the playground and I had a lot of fun. By the end of the day, I had made three new friends.<br><br>
                
                I remember this day very well because it taught me something important. I learned that new situations are not always scary. Sometimes they can bring good things into your life. Ana became my best friend and we are still friends today. That first day at school was the beginning of a beautiful friendship.
            `,
            exercises: [
                { question: "How old was the person?", answer: "Seven years old" },
                { question: "Why was the person nervous?", answer: "It was the first day at a new school" },
                { question: "Who was the teacher?", answer: "Mrs. Garcia" },
                { question: "What was the name of the girl who talked to him?", answer: "Ana" },
                { question: "What did the person learn?", answer: "That new situations are not always scary" }
            ]
        },
        {
            title: "CITY OR TOWN",
            definition: "Describe a city or town you have visited.",
            structure: `
                <strong>You should say:</strong><br>
                • Where it is<br>
                • When you went there<br>
                • What you did there<br>
                • What you thought about it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                Last summer, I visited the city of Barcelona in Spain. It is a big city near the sea in the east of Spain. I went there with my family for our summer vacation.<br><br>
                
                We stayed in Barcelona for one week in July. The weather was very hot and sunny every day. We stayed in a small hotel near the beach, so we could walk to the sea easily.<br><br>
                
                During our visit, we did many interesting things. We walked around the old part of the city and saw beautiful old buildings. We also went to the beach every day and swam in the sea. The food was delicious - we ate a lot of fish and rice.<br><br>
                
                I loved Barcelona because it was so different from my hometown. The city was full of life and there were always people in the streets. The architecture was amazing and the people were very friendly. I want to go back to Barcelona again because there are still many places I want to see there.
            `,
            exercises: [
                { question: "Which city did the person visit?", answer: "Barcelona in Spain" },
                { question: "When did they visit?", answer: "Last summer for one week in July" },
                { question: "Where did they stay?", answer: "In a small hotel near the beach" },
                { question: "What did they do there?", answer: "Walked around old city, went to beach, swam, ate local food" },
                { question: "What did the person think about Barcelona?", answer: "Loved it because it was full of life and very different" }
            ]
        },
        {
            title: "FAMILY",
            definition: "Describe a member of your family you admire.",
            structure: `
                <strong>You should say:</strong><br>
                • Who this person is<br>
                • What they are like<br>
                • What they do<br>
                • Why you admire them
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                The person in my family I admire most is my grandmother. She is 75 years old but she is still very active and strong. She has gray hair and always wears a big smile on her face.<br><br>
                
                My grandmother is a very kind and patient person. She never gets angry and always listens to everyone's problems. She loves to cook and makes the best food in our family. She also likes to tell us stories about her life when she was young.<br><br>
                
                Even though she is old, my grandmother still works in her small garden every day. She grows vegetables and flowers. She also helps take care of my little cousins when their parents are working.<br><br>
                
                I admire my grandmother because she is always happy and positive. She has lived through many difficult times, but she never complains. She taught me that family is the most important thing in life. She shows love to everyone and makes our family strong. I hope I can be like her when I am old.
            `,
            exercises: [
                { question: "Who does the person admire?", answer: "His grandmother" },
                { question: "How old is the grandmother?", answer: "75 years old" },
                { question: "What does the grandmother like to do?", answer: "Cook, tell stories, work in garden, take care of cousins" },
                { question: "What is the grandmother's personality like?", answer: "Kind, patient, never gets angry, always happy" },
                { question: "Why does the person admire her?", answer: "She is always positive, shows love to everyone, makes family strong" }
            ]
        },
        {
            title: "DAY",
            definition: "Describe a typical day in your life.",
            structure: `
                <strong>You should say:</strong><br>
                • What time you wake up<br>
                • What you do during the day<br>
                • What you do in the evening<br>
                • How you feel about your daily routine
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I want to tell you about a typical day in my life. I usually wake up at 7 AM when my alarm clock rings. The first thing I do is brush my teeth and wash my face with cold water.<br><br>
                
                After breakfast, I go to university by bus. My classes start at 9 AM and finish at 3 PM. I study different subjects like English, math, and science. During lunch break, I eat with my friends in the cafeteria.<br><br>
                
                When I come home at 4 PM, I rest for a little while. Then I do my homework and help my mother prepare dinner. We eat together as a family at 7 PM and talk about our day.<br><br>
                
                In the evening, I watch TV or read a book. Sometimes I call my friends or play games on my phone. I go to bed at 10 PM because I need to wake up early the next day. I like my daily routine because it is simple and organized.
            `,
            exercises: [
                { question: "What time does the person wake up?", answer: "At 7 AM" },
                { question: "How does he go to university?", answer: "By bus" },
                { question: "What time do classes finish?", answer: "At 3 PM" },
                { question: "What does he do in the evening?", answer: "Watch TV, read, call friends, or play games" },
                { question: "What time does he go to bed?", answer: "At 10 PM" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (Memorable)",
            definition: "Describe a memorable experience you had.",
            structure: `
                <strong>You should say:</strong><br>
                • What the experience was<br>
                • When it happened<br>
                • Who was with you<br>
                • Why it was memorable
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of my most memorable experiences was my first airplane trip. It happened two years ago when I was 16 years old. I had never been on a plane before, so I was very excited and a little scared.<br><br>
                
                I was traveling with my family to visit my uncle who lives in another city. We had to wake up very early to get to the airport. When I saw the big airplane, I couldn't believe I was going to fly in it.<br><br>
                
                During the flight, I sat next to the window and looked down at the clouds and the small houses below. Everything looked so tiny from up there. The flight attendant was very nice and gave us drinks and snacks.<br><br>
                
                This experience was memorable because it was my first time flying and it opened my eyes to how big the world is. I felt like an adult and it made me want to travel to more places. Now I am not scared of flying anymore and I hope to take many more trips in the future.
            `,
            exercises: [
                { question: "What was the memorable experience?", answer: "The first airplane trip" },
                { question: "How old was the person?", answer: "16 years old" },
                { question: "Who was traveling with him?", answer: "His family" },
                { question: "Where did he sit on the plane?", answer: "Next to the window" },
                { question: "Why was it memorable?", answer: "It was his first time flying and opened his eyes to the world" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (Success)",
            definition: "Describe a time when you were successful at something.",
            structure: `
                <strong>You should say:</strong><br>
                • What you were successful at<br>
                • When this happened<br>
                • How you prepared for it<br>
                • How you felt about your success
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I want to tell you about a time when I was very successful. It was when I won first place in a school English competition last year. I was very surprised because I didn't expect to win.<br><br>
                
                The competition was in November and all the students in my grade could participate. We had to write a short story in English and then read it in front of the judges. I was very nervous about speaking in public.<br><br>
                
                I prepared for the competition for three weeks. I wrote my story about a friendship between a boy and a dog. I practiced reading it many times at home. My English teacher helped me with pronunciation and grammar.<br><br>
                
                When they announced that I was the winner, I felt so happy and proud. My parents were very excited too. This success gave me more confidence in my English skills. It also taught me that hard work and practice can help you achieve your goals. I will never forget this special day.
            `,
            exercises: [
                { question: "What competition did the person win?", answer: "A school English competition" },
                { question: "What did students have to do?", answer: "Write a short story and read it to judges" },
                { question: "What was the story about?", answer: "A friendship between a boy and a dog" },
                { question: "How long did he prepare?", answer: "Three weeks" },
                { question: "How did he feel when he won?", answer: "Happy and proud" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (School)",
            definition: "Describe an important experience you had at school.",
            structure: `
                <strong>You should say:</strong><br>
                • What happened at school<br>
                • When it happened<br>
                • Who was involved<br>
                • What you learned from it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I want to tell you about an important experience I had at school. It happened during my second year when I had to give a presentation in front of my whole class. I was very nervous because I don't like speaking in public.<br><br>
                
                The presentation was about animals and I chose to talk about dolphins. I had to prepare for two weeks and learn a lot of information. My teacher helped me organize my ideas and practice speaking clearly.<br><br>
                
                On the day of the presentation, I felt very scared. My hands were shaking and my voice was quiet at first. But my classmates were very kind and listened carefully. My teacher smiled at me and this made me feel better.<br><br>
                
                This experience taught me that I can do difficult things if I practice and prepare well. I also learned that my classmates are supportive and want me to succeed. Now I am not as scared of speaking in public and I feel more confident in class.
            `,
            exercises: [
                { question: "What did the person have to do?", answer: "Give a presentation in front of the class" },
                { question: "What was the presentation about?", answer: "Animals, specifically dolphins" },
                { question: "How long did he prepare?", answer: "Two weeks" },
                { question: "How did he feel on presentation day?", answer: "Very scared, hands shaking, quiet voice" },
                { question: "What did he learn?", answer: "He can do difficult things with practice and his classmates are supportive" }
            ]
        },
        {
            title: "ENVIRONMENT",
            definition: "Describe an environmental problem in your area.",
            structure: `
                <strong>You should say:</strong><br>
                • What the problem is<br>
                • What causes this problem<br>
                • How it affects people<br>
                • What can be done about it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                In my city, we have a big problem with air pollution. The air is not clean and sometimes you can see gray smoke in the sky. This problem is getting worse every year and it makes many people worried.<br><br>
                
                The main cause of this problem is the many cars and buses on our roads. There are also some factories near the city that produce smoke. When there is no wind, the dirty air stays over the city for many days.<br><br>
                
                This pollution affects people's health. Many people cough more and have problems breathing. Children and old people are especially affected. Some people have to go to the hospital because of breathing problems.<br><br>
                
                I think we can solve this problem if we work together. People can use public transport more and walk or ride bicycles for short trips. The government should also make rules for factories to produce less pollution. If we all help, we can make our air cleaner and healthier.
            `,
            exercises: [
                { question: "What environmental problem does the city have?", answer: "Air pollution" },
                { question: "What causes this problem?", answer: "Many cars, buses, and factories producing smoke" },
                { question: "Who is especially affected?", answer: "Children and old people" },
                { question: "What solutions does the person suggest?", answer: "Use public transport, walk, ride bicycles, government rules for factories" },
                { question: "What happens when there is no wind?", answer: "The dirty air stays over the city for many days" }
            ]
        },
        {
            title: "FAVORITES (TV Program)",
            definition: "Describe your favorite TV program.",
            structure: `
                <strong>You should say:</strong><br>
                • What the program is<br>
                • What it is about<br>
                • When you watch it<br>
                • Why you like it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My favorite TV program is called "Nature World". It is a documentary program about animals and plants from different countries around the world. I have been watching this program for three years and I never get bored of it.<br><br>
                
                Each episode shows different animals in their natural homes. Last week, the program was about penguins in Antarctica. The week before, it showed lions in Africa. The program also explains how animals live and what they eat.<br><br>
                
                I usually watch "Nature World" on Sunday evenings at 8 PM. Sometimes I watch it with my family, but often I watch it alone because I like to concentrate on the information. Each episode is one hour long.<br><br>
                
                I love this program because I learn many new things about animals and nature. The photography is beautiful and the narrator has a nice voice. It makes me want to travel and see these animals in real life. This program also teaches me why we need to protect nature and animals.
            `,
            exercises: [
                { question: "What is the name of the TV program?", answer: "Nature World" },
                { question: "What type of program is it?", answer: "A documentary about animals and plants" },
                { question: "When does the person watch it?", answer: "Sunday evenings at 8 PM" },
                { question: "How long is each episode?", answer: "One hour long" },
                { question: "Why does the person like it?", answer: "Learns new things, beautiful photography, makes him want to travel" }
            ]
        },
        {
            title: "FESTIVAL",
            definition: "Describe a festival or celebration in your country.",
            structure: `
                <strong>You should say:</strong><br>
                • What the festival is<br>
                • When it happens<br>
                • What people do during it<br>
                • Why it is important
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of the most important festivals in my country is the New Year celebration. It happens every year on December 31st and January 1st. This is a very special time for families and friends to come together.<br><br>
                
                During this festival, people have big parties and eat special food. Many families prepare traditional dishes and invite relatives to their homes. At midnight, everyone watches fireworks in the sky and makes wishes for the new year.<br><br>
                
                People also give gifts to each other and children receive money from their grandparents. Many people wear new clothes and clean their houses before the celebration. Some people go to church to pray for good luck in the new year.<br><br>
                
                This festival is important because it brings families together and gives people hope for the future. It is a time to forget about problems from the past year and think about new possibilities. Everyone feels happy and optimistic during this celebration. It is my favorite time of the year.
            `,
            exercises: [
                { question: "What festival is described?", answer: "New Year celebration" },
                { question: "When does it happen?", answer: "December 31st and January 1st" },
                { question: "What do people do at midnight?", answer: "Watch fireworks and make wishes" },
                { question: "What do children receive?", answer: "Money from their grandparents" },
                { question: "Why is this festival important?", answer: "Brings families together and gives hope for the future" }
            ]
        },
        {
            title: "FOOD",
            definition: "Describe a traditional food from your country.",
            structure: `
                <strong>You should say:</strong><br>
                • What the food is<br>
                • What it is made of<br>
                • When people eat it<br>
                • Why you like or dislike it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I want to tell you about a traditional food from my country called "empanadas". These are small pies that are very popular here. You can find them in restaurants, street markets, and many people make them at home.<br><br>
                
                Empanadas are made with a thin pastry that is filled with different ingredients. The most common filling is meat with onions, but you can also find them with cheese, chicken, or vegetables. They are baked in the oven until they are golden brown.<br><br>
                
                People eat empanadas at different times. Some people have them for lunch or dinner, and others eat them as a snack. They are very popular at parties and family gatherings. Many people also eat them while watching football games.<br><br>
                
                I really love empanadas because they are delicious and convenient to eat. You can hold them in your hand and they are not messy. They are also not expensive, so students like me can afford them. My favorite type is the one with meat and cheese. They remind me of home and family celebrations.
            `,
            exercises: [
                { question: "What is the traditional food called?", answer: "Empanadas" },
                { question: "What are they made of?", answer: "Thin pastry filled with meat, cheese, chicken, or vegetables" },
                { question: "When do people eat them?", answer: "Lunch, dinner, snacks, parties, family gatherings, football games" },
                { question: "Why does the person like them?", answer: "Delicious, convenient, not expensive, remind of home" },
                { question: "What is the person's favorite type?", answer: "The one with meat and cheese" }
            ]
        },
        {
            title: "LEISURE ACTIVITY",
            definition: "Describe a leisure activity you enjoy doing.",
            structure: `
                <strong>You should say:</strong><br>
                • What the activity is<br>
                • When you do it<br>
                • Who you do it with<br>
                • Why you enjoy it
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My favorite leisure activity is playing basketball. I started playing when I was 12 years old and I have loved this sport ever since. It is a great way to exercise and have fun at the same time.<br><br>
                
                I usually play basketball three times a week after school or work. I go to a court near my house where there are always other people who want to play. Sometimes I play with my friends, and other times I join games with people I don't know.<br><br>
                
                Most of the time I play with a group of friends from my neighborhood. We have known each other for many years and we play very well together. Sometimes my brother joins us too, and we teach younger kids how to play.<br><br>
                
                I enjoy basketball because it helps me stay healthy and strong. It also helps me forget about stress from school or work. When I play, I feel free and happy. I have made many good friends through basketball, and it has taught me about teamwork and never giving up. It is more than just a game for me.
            `,
            exercises: [
                { question: "What is the person's favorite leisure activity?", answer: "Playing basketball" },
                { question: "When did he start playing?", answer: "When he was 12 years old" },
                { question: "How often does he play?", answer: "Three times a week" },
                { question: "Who does he usually play with?", answer: "Friends from his neighborhood and sometimes his brother" },
                { question: "Why does he enjoy it?", answer: "Helps stay healthy, forget stress, feel free and happy, made friends" }
            ]
        }
    ];
}

// Initialize topics when the script loads
loadWritingTopics();
