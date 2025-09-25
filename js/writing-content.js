let writingTopics = [];

function loadWritingTopics() {
    writingTopics = [
        {
            title: "ACCIDENT",
            definition: "Describe a minor accident that you had in the past.",
            structure: `
                <strong>You should say:</strong><br>
                • How the accident happened<br>
                • What you did about it<br>
                • How long you took to recover<br>
                • and explain how you felt about the accident
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                Last year, I had a minor accident while I was working from home in Abancay. I was carrying my laptop to another room when I tripped over one of Ethan's toys on the floor. I fell down and hurt my wrist quite badly.<br><br>
                
                Immediately after the accident, I put ice on my wrist to reduce the swelling. Neli helped me bandage it, and we decided to go to the local clinic the next day. The doctor said it was just a sprain, not a fracture, which was a relief.<br><br>
                
                It took about two weeks for my wrist to recover completely. During this time, I had to be careful when typing for my work at Globant, especially when working on the Disney project. I had to take frequent breaks and use my left hand more than usual.<br><br>
                
                I felt quite frustrated at first because the accident happened due to my carelessness. However, it taught me to be more careful around the house, especially with two young children. Now I always make sure to put away Ethan's toys after he plays, and I'm more aware of my surroundings when walking around the house.
            `,
            exercises: [
                { question: "What caused your accident?", answer: "I tripped over my son's toy while carrying my laptop" },
                { question: "What was your immediate reaction?", answer: "I put ice on my wrist and my wife helped bandage it" },
                { question: "How long did it take to recover?", answer: "About two weeks to recover completely" },
                { question: "What did you learn from this experience?", answer: "To be more careful and keep toys organized" },
                { question: "How did it affect your work?", answer: "I had to take breaks and be careful when typing" }
            ]
        },
        {
            title: "AMBITION",
            definition: "Describe an ambition you have for the future.",
            structure: `
                <strong>You should say:</strong><br>
                • What this ambition is<br>
                • When you expect to achieve it<br>
                • How it will change your life in the future<br>
                • and explain why this ambition is important to you
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My biggest ambition for the future is to become a Senior Data Engineering Manager at a major technology company, possibly leading international projects like the Disney project I currently work on at Globant.<br><br>
                
                I expect to achieve this goal within the next 5 to 7 years. I'm currently 30 years old and have been building my experience in data engineering. I plan to continue developing my technical skills while also improving my leadership and management abilities.<br><br>
                
                Achieving this ambition will significantly change my life. Financially, it will provide better stability for my family - Neli, Ethan, and Anne. We could afford a bigger house in Abancay or even consider moving to Lima for better opportunities. It would also allow me to travel more for work, gaining international experience.<br><br>
                
                This ambition is important to me because I want to provide the best possible future for my children. As a father of two young kids, I feel responsible for ensuring they have access to good education and opportunities. Additionally, I'm passionate about data engineering and want to make a meaningful impact in the technology industry, especially in projects that reach millions of people worldwide like Disney's platforms.
            `,
            exercises: [
                { question: "What is your main ambition?", answer: "To become a Senior Data Engineering Manager" },
                { question: "When do you plan to achieve it?", answer: "Within the next 5 to 7 years" },
                { question: "How will it change your life?", answer: "Better financial stability and opportunities for my family" },
                { question: "Why is this important to you?", answer: "To provide for my children and make an impact in technology" },
                { question: "What steps are you taking?", answer: "Developing technical skills and leadership abilities" }
            ]
        },
        {
            title: "ANIMAL/PET",
            definition: "Talk about a pet that you once had.",
            structure: `
                <strong>You should say:</strong><br>
                • What kind of animal it was<br>
                • What kind of care it needed<br>
                • What you liked/didn't like about it<br>
                • and say whether it is a popular pet to own or not and why
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                When I was younger, before I got married to Neli, I had a small dog named Rocky. He was a mixed breed, part terrier and part something else we never figured out. He was brown and white with very expressive eyes.<br><br>
                
                Rocky needed quite a bit of care. I had to walk him twice a day, feed him regularly, and make sure he had fresh water. Living in Abancay, he also needed protection from the mountain cold during winter months. I had to brush his fur regularly and take him to the vet for vaccinations.<br><br>
                
                What I loved most about Rocky was his loyalty and playful nature. He would always greet me enthusiastically when I came home from work. However, what I didn't like was that he would sometimes bark at night, disturbing the neighbors. He also had a habit of chewing my shoes when he was bored.<br><br>
                
                Dogs are very popular pets in Peru, especially in smaller cities like Abancay. Many families have dogs for companionship and security. They're considered part of the family. Now that I have two young children, Ethan and Anne, I'm considering getting another dog when they're a bit older, as pets can teach children responsibility and provide them with a loyal companion.
            `,
            exercises: [
                { question: "What kind of pet did you have?", answer: "A mixed breed dog named Rocky" },
                { question: "What care did it need?", answer: "Daily walks, regular feeding, grooming, and vet visits" },
                { question: "What did you like about it?", answer: "His loyalty and playful nature" },
                { question: "What didn't you like?", answer: "He barked at night and chewed shoes" },
                { question: "Are dogs popular pets in your area?", answer: "Yes, very popular in Peru for companionship and security" }
            ]
        },
        {
            title: "APARTMENT/HOUSE",
            definition: "Describe a house/apartment you have lived in.",
            structure: `
                <strong>You should say:</strong><br>
                • Why you liked living there<br>
                • When you lived there<br>
                • How it looked inside<br>
                • and explain what kind of area it was in
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                I currently live in a comfortable house in Abancay, Apurímac, Peru, where I've been living with my wife Neli and our two children, Ethan and Anne, for the past three years.<br><br>
                
                I really like living here because it's spacious enough for our growing family and has a quiet environment perfect for working from home. Since I work as a data engineer for Globant on the Disney project, I need a peaceful space for video calls and concentrated work. The house also has a small garden where Ethan can play safely.<br><br>
                
                Inside, our house has three bedrooms, a living room, a kitchen, and two bathrooms. The living room is where we spend most of our family time, with comfortable sofas and a TV. My home office is in one of the bedrooms, equipped with my computer setup for work. The kitchen is modern and well-equipped, which Neli appreciates for preparing meals for our family.<br><br>
                
                Our house is located in a residential area of Abancay, surrounded by the beautiful Andes mountains. It's a safe, family-friendly neighborhood with other young families. The area is quiet but not isolated - we have access to schools, markets, and healthcare facilities within a reasonable distance. The mountain views are spectacular, and the climate is generally pleasant year-round, which makes it an ideal place to raise our children.
            `,
            exercises: [
                { question: "Where do you currently live?", answer: "In a house in Abancay, Apurímac, Peru" },
                { question: "Why do you like living there?", answer: "It's spacious, quiet for work, and has a garden for my son" },
                { question: "How many rooms does it have?", answer: "Three bedrooms, living room, kitchen, and two bathrooms" },
                { question: "What kind of area is it?", answer: "A safe residential area surrounded by mountains" },
                { question: "How long have you lived there?", answer: "For the past three years with my family" }
            ]
        },
        {
            title: "BOOK",
            definition: "Describe a book you enjoyed reading.",
            structure: `
                <strong>You should say:</strong><br>
                • What the book was<br>
                • What it was about<br>
                • When you read it<br>
                • and explain whether you liked it or not and why
            `,
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One book that I really enjoyed reading was "The Data Warehouse Toolkit" by Ralph Kimball. Although it might sound technical and boring to some people, it was fascinating for me as a data engineer.<br><br>
                
                The book is about data warehousing and business intelligence. It explains how to design and build data warehouses that help companies make better decisions based on their data. It covers dimensional modeling, which is a technique I use daily in my work at Globant, especially on the Disney project where we handle massive amounts of user data.<br><br>
                
                I read this book about two years ago when I was looking to advance my career in data engineering. I would read it in the evenings after Ethan went to bed, and sometimes during my lunch breaks. It took me about three months to finish because I wanted to understand every concept thoroughly.<br><br>
                
                I really liked this book because it changed how I approach my work. The concepts I learned helped me become more efficient and effective in my role. The author explains complex topics in a clear, practical way with real-world examples. What I appreciated most was how the book connected theory with practice. Now, when I'm working on data pipelines for Disney's platforms, I apply many of the principles I learned from this book. It's definitely a book I would recommend to other data professionals.
            `,
            exercises: [
                { question: "What book did you enjoy?", answer: "The Data Warehouse Toolkit by Ralph Kimball" },
                { question: "What was it about?", answer: "Data warehousing and business intelligence techniques" },
                { question: "When did you read it?", answer: "About two years ago, over three months" },
                { question: "Why did you like it?", answer: "It improved my work skills and connected theory with practice" },
                { question: "How do you use what you learned?", answer: "I apply the principles in my work on Disney's data platforms" }
            ]
        },
        {
            title: "CHOICE",
            definition: "Describe an important choice you had to make in your life.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of the most important choices I had to make in my life was deciding to specialize in data engineering and accept the position at Globant to work on the Disney project.<br><br>
                
                This choice came about three years ago when I was working in a different field and had the opportunity to transition into technology. I had to choose between staying in my comfortable but limited job or taking a risk to enter the competitive world of data engineering.<br><br>
                
                I believe I made a very good choice. This decision has allowed me to work on exciting projects like Disney's data platforms, earn a better salary to support Neli and our children, and develop skills that are in high demand globally. It also gave me the flexibility to work from home in Abancay, which means I can spend more time with Ethan and Anne.<br><br>
                
                I felt nervous and excited about this choice at the same time. It required a lot of studying and learning new technologies, but seeing how it has improved our family's quality of life and my professional growth makes me confident that it was the right decision.
            `,
            exercises: [
                { question: "What important choice did you make?", answer: "To specialize in data engineering and join Globant" },
                { question: "When did you make this choice?", answer: "About three years ago" },
                { question: "Was it a good choice?", answer: "Yes, it improved my career and family life" },
                { question: "How did you feel about it?", answer: "Nervous but excited about the opportunity" }
            ]
        },
        {
            title: "CHILDHOOD",
            definition: "Describe something you enjoyed doing as a child.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                When I was a child growing up in Peru, one of my favorite activities was playing football with my friends in the neighborhood. We would play almost every afternoon after school in a small field near our houses.<br><br>
                
                I used to play this sport from when I was about 7 years old until I was around 15. We would gather after finishing our homework, usually around 4 PM, and play until it got dark. During weekends, we would sometimes play for hours, organizing small tournaments with other neighborhood teams.<br><br>
                
                I played with my school friends and neighbors. There were usually about 10-12 kids, and we would divide into two teams. Some of my closest friendships were formed during these games. We didn't have proper equipment - just a ball and some stones to mark the goals.<br><br>
                
                I don't play football regularly anymore because of my work responsibilities and family commitments with Neli, Ethan, and Anne. However, I still enjoy watching matches on TV, and I'm looking forward to teaching Ethan how to play when he gets older.<br><br>
                
                I enjoyed it so much because it was pure fun and freedom. There was no pressure, just the joy of running, competing, and being with friends. It taught me teamwork, perseverance, and how to handle both winning and losing gracefully - skills that have helped me in my professional life as a data engineer.
            `,
            exercises: [
                { question: "What did you enjoy as a child?", answer: "Playing football with neighborhood friends" },
                { question: "When and where did you do it?", answer: "Afternoons after school in a local field" },
                { question: "Who did you do it with?", answer: "School friends and neighbors, about 10-12 kids" },
                { question: "Do you still do it?", answer: "Not regularly, but I watch games and plan to teach my son" }
            ]
        },
        {
            title: "CITY OR TOWN",
            definition: "Describe a city you know well.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                The city I know best is Abancay, the capital of Apurímac region in Peru, where I currently live with my family. It's a medium-sized city with approximately 60,000 inhabitants, nestled in the Andes mountains.<br><br>
                
                Abancay has a mix of colonial and modern buildings. The main square features a beautiful colonial church and government buildings, while the newer areas have modern houses and commercial centers. Most buildings are low-rise due to earthquake regulations, and many homes have traditional red tile roofs that give the city a distinctive character.<br><br>
                
                Transportation in Abancay includes buses, taxis, and motorcycle taxis called "mototaxis." Many people also walk or use bicycles for short distances. The city is small enough that you can walk across the center in about 20 minutes. There's also a small airport that connects to Lima and other major cities.<br><br>
                
                What I particularly like about Abancay is its peaceful atmosphere and the stunning mountain scenery that surrounds us. The climate is pleasant year-round, and it's a safe place to raise children like Ethan and Anne. The cost of living is reasonable, which allows me to work remotely for Globant while maintaining a good quality of life. However, what I sometimes dislike is the limited entertainment options and the fact that some modern services and products take longer to arrive here compared to larger cities like Lima.
            `,
            exercises: [
                { question: "Which city do you know well?", answer: "Abancay, the capital of Apurímac region in Peru" },
                { question: "How big is the city?", answer: "Medium-sized with approximately 60,000 inhabitants" },
                { question: "What transportation is available?", answer: "Buses, taxis, mototaxis, bicycles, and walking" },
                { question: "What do you like about it?", answer: "Peaceful atmosphere, mountain scenery, and good for raising children" }
            ]
        },
        {
            title: "FAMILY",
            definition: "Describe someone in your family who you like.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                The person in my family who I like most is my wife, Neli. She is not just my spouse but also my best friend and the mother of our two beautiful children, Ethan and Anne.<br><br>
                
                Neli is a beautiful woman with long dark hair and warm brown eyes. She has a gentle smile that can light up any room. She's of average height and has a graceful way of moving. What strikes people most about her appearance is her kind and welcoming expression.<br><br>
                
                As a person, Neli is incredibly patient, caring, and intelligent. She has an amazing ability to stay calm under pressure, which is especially valuable when dealing with our two young children. She's also very organized and manages our household efficiently while I work on my data engineering projects for Globant. Neli is supportive of my career and understands the demands of working on international projects like Disney.<br><br>
                
                I like Neli because she brings balance to my life. While I can get absorbed in technical work and data analysis, she keeps me grounded and reminds me of what's truly important - our family. She's an excellent mother to Ethan and Anne, always patient and loving. Her sense of humor helps us get through difficult times, and her wisdom often guides our family decisions. She makes our house in Abancay feel like a true home.
            `,
            exercises: [
                { question: "Who do you like most in your family?", answer: "My wife, Neli" },
                { question: "What does she look like?", answer: "Beautiful with long dark hair, brown eyes, and a kind smile" },
                { question: "What kind of person is she?", answer: "Patient, caring, intelligent, and organized" },
                { question: "Why do you like her?", answer: "She brings balance to my life and is an excellent mother" }
            ]
        },
        {
            title: "DAY",
            definition: "Describe a typical day at work, school or college.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My typical workday as a data engineer at Globant starts early at around 7:00 AM when I wake up in our house in Abancay. I begin by having breakfast with Neli and helping her get Ethan ready for the day, while Anne is still sleeping.<br><br>
                
                By 8:30 AM, I'm in my home office starting my workday. I usually begin by checking emails and messages from my team members who work on the Disney project. From 9:00 AM to 12:00 PM, I focus on coding and developing data pipelines. I take a short break around 10:30 AM to have coffee and check on the family.<br><br>
                
                Lunch is at 1:00 PM with Neli and the kids. After lunch, I continue working from 2:00 PM to 6:00 PM, which includes team meetings via video calls with colleagues from different time zones. I usually have one or two important meetings during this time to discuss project progress and technical challenges.<br><br>
                
                I've had this routine for about three years since joining Globant, and it works well for our family life. However, I would like to change the timing of some international meetings because they sometimes extend into the evening, which means less time with Ethan and Anne. I'd also like to have a dedicated break in the afternoon to take a short walk and enjoy the beautiful mountain views around Abancay.
            `,
            exercises: [
                { question: "What time do you start work?", answer: "Around 8:30 AM in my home office" },
                { question: "What do you do in the morning?", answer: "Check emails, code, and develop data pipelines" },
                { question: "How long have you had this routine?", answer: "About three years since joining Globant" },
                { question: "What would you like to change?", answer: "Meeting times and add an afternoon walk break" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (Memorable)",
            definition: "Describe a memorable event in your life.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of the most memorable events in my life was the birth of my first child, Ethan, which took place two years ago in Abancay.<br><br>
                
                The event happened at the local hospital in Abancay on a beautiful morning in early spring. Neli had been in labor for several hours, and I was both nervous and excited. The medical team was very professional and supportive throughout the process.<br><br>
                
                What happened exactly was that after a long night of waiting and supporting Neli, our son Ethan was finally born healthy and strong. The moment I heard his first cry and saw him for the first time was absolutely incredible. The doctor placed him in Neli's arms, and we both started crying tears of joy. It was a perfect moment that I will never forget.<br><br>
                
                This event was memorable for me because it marked the beginning of my journey as a father. It changed my perspective on life completely and gave me new motivation to work hard and provide for my family. Holding Ethan for the first time made me realize the true meaning of responsibility and unconditional love. Now, watching him grow and develop his personality every day continues to be one of the greatest joys of my life, along with his little sister Anne who joined our family 11 months later.
            `,
            exercises: [
                { question: "What memorable event do you describe?", answer: "The birth of my first child, Ethan" },
                { question: "When and where did it happen?", answer: "Two years ago at the local hospital in Abancay" },
                { question: "What happened exactly?", answer: "Ethan was born healthy after a long labor" },
                { question: "Why was it memorable?", answer: "It marked the beginning of my journey as a father" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (Success)",
            definition: "Describe a particular event in which you were successful.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                A particular event where I was successful was when I completed a critical data migration project for Disney's platform while working at Globant, which happened about 18 months ago.<br><br>
                
                The situation was quite challenging because we needed to migrate millions of user records from an old system to a new, more efficient database structure without any data loss or downtime. This happened over several weeks, but the critical implementation was during a weekend in our home office in Abancay, coordinating with teams in different time zones.<br><br>
                
                The preparation involved months of planning, testing, and creating backup strategies. I had to learn new technologies, work closely with international teams, and develop scripts that could handle massive amounts of data safely. I spent many evenings after Ethan went to bed studying and preparing for this project, while Neli was pregnant with Anne.<br><br>
                
                When the migration was completed successfully without any issues, I felt an incredible sense of achievement and relief. My manager and the Disney team were very pleased with the results, and it led to more responsibilities and recognition within Globant. I felt proud that I could deliver such an important project while working remotely from Abancay, proving that location doesn't limit professional success. This achievement also gave me confidence in my technical abilities and opened doors for future challenging projects.
            `,
            exercises: [
                { question: "What success do you describe?", answer: "Completing a critical data migration project for Disney" },
                { question: "When and where did it happen?", answer: "18 months ago, working from home in Abancay" },
                { question: "What preparation was involved?", answer: "Months of planning, testing, learning new technologies" },
                { question: "How did you feel about the success?", answer: "Proud and confident, it led to more recognition" }
            ]
        },
        {
            title: "EVENT-EXPERIENCE (School)",
            definition: "Describe an enjoyable event that you experienced when you were at school.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                An enjoyable event I experienced at school was our annual science fair when I was in my final year of high school. This was a special event where students could present their own research projects and experiments.<br><br>
                
                What happened was that I decided to create a project about renewable energy, specifically solar panels. I built a small working model that could power LED lights and charge small devices. I spent weeks researching, building, and testing my project. On the day of the fair, I presented my work to teachers, parents, and other students.<br><br>
                
                What was good about it was that my project won second place in the technology category. More importantly, I discovered my passion for understanding how systems work and solving technical problems. The judges were impressed with my presentation and the practical application of my project. I also enjoyed seeing other students' creative projects and learning from them.<br><br>
                
                I particularly remember this event because it was the first time I felt truly confident about my technical abilities. It gave me the motivation to pursue a career in technology, which eventually led me to become a data engineer at Globant. Looking back, I can see how this experience planted the seeds for my current success working on projects like Disney's data platforms. It taught me that with dedication and curiosity, I could tackle complex technical challenges.
            `,
            exercises: [
                { question: "What school event do you describe?", answer: "The annual science fair in my final year" },
                { question: "What was your project?", answer: "A solar panel model that could power LED lights" },
                { question: "What was good about it?", answer: "Won second place and discovered my passion for technology" },
                { question: "Why do you remember it?", answer: "It gave me confidence and led to my tech career" }
            ]
        },
        {
            title: "ENVIRONMENT",
            definition: "Describe a serious environmental problem in your country.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of the most serious environmental problems in Peru is deforestation in the Amazon rainforest, which affects not only our country but the entire world.<br><br>
                
                The effects of this problem are devastating. We're losing biodiversity as many plant and animal species lose their natural habitat. This also contributes to climate change because trees that absorb carbon dioxide are being cut down. Additionally, it affects indigenous communities who depend on the forest for their livelihood. Even here in Abancay, we can feel the effects through changes in weather patterns and rainfall.<br><br>
                
                This problem is caused by several factors including illegal logging, cattle ranching, agriculture expansion, and mining activities. Many companies cut down trees to create space for farming or to extract valuable timber. Sometimes, local communities also contribute to the problem because they need land for agriculture to survive economically.<br><br>
                
                To solve this problem, the government needs to enforce stricter laws against illegal logging and provide economic alternatives for local communities. We can also promote sustainable tourism and support companies that use environmentally friendly practices. As individuals, we can reduce paper consumption, support reforestation projects, and educate others about the importance of preserving our forests. In my work with technology at Globant, I try to promote digital solutions that reduce paper usage, and I teach Ethan about the importance of protecting nature.
            `,
            exercises: [
                { question: "What environmental problem do you describe?", answer: "Deforestation in the Amazon rainforest" },
                { question: "What are the effects?", answer: "Loss of biodiversity, climate change, affects indigenous communities" },
                { question: "What causes this problem?", answer: "Illegal logging, cattle ranching, agriculture, and mining" },
                { question: "What solutions do you suggest?", answer: "Stricter laws, economic alternatives, sustainable tourism" }
            ]
        },
        {
            title: "FAMILY (Admire)",
            definition: "Describe the person in your family who you most admire.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                The person in my family who I most admire is my mother. She is my inspiration and has been the strongest influence in my life.<br><br>
                
                My mother is now in her 60s and has lived through many challenges in Peru. She raised three children mostly on her own while working multiple jobs to support our family. She worked as a teacher during the day and took on additional work in the evenings to make sure we had everything we needed for school and life.<br><br>
                
                Currently, she is retired but still very active in her community. She volunteers at a local school helping children with reading difficulties, and she also helps take care of elderly neighbors. Even though she's getting older, she remains energetic and always finds ways to help others. She visits us in Abancay regularly and loves spending time with her grandchildren, Ethan and Anne.<br><br>
                
                I admire her so much because of her incredible strength and selflessness. Despite facing financial difficulties and personal challenges, she never gave up and always put her children's needs before her own. She taught me the value of hard work, education, and helping others. Her determination to give us a better life motivated me to study hard and eventually become a data engineer. She also taught me the importance of family, which is why I work so hard to provide for Neli and our children. Her wisdom and unconditional love continue to guide me in my role as a husband and father.
            `,
            exercises: [
                { question: "Who do you most admire?", answer: "My mother" },
                { question: "What has she done in her life?", answer: "Raised three children while working multiple jobs" },
                { question: "What does she do now?", answer: "Volunteers at school and helps elderly neighbors" },
                { question: "Why do you admire her?", answer: "Her strength, selflessness, and dedication to family" }
            ]
        },
        {
            title: "FAVORITES (TV Program)",
            definition: "Describe your favorite television program.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                My favorite television program is a documentary series called "How It's Made" which shows how different products and technologies are manufactured and developed.<br><br>
                
                This is an educational documentary program where each episode focuses on the manufacturing process of various items, from simple everyday objects to complex technological devices. The program shows step-by-step how things are made in factories, explaining the science and engineering behind each process. What happens during the program is that cameras follow the entire production line, and a narrator explains each stage clearly.<br><br>
                
                I usually watch this program in the evenings after work, around 8:00 PM when Ethan and Anne are sleeping. Sometimes Neli joins me, and we watch it together while relaxing after a busy day. I also sometimes watch episodes during my lunch break when I need a mental break from my data engineering work at Globant.<br><br>
                
                I enjoy this program so much because it satisfies my curiosity about how things work, which is probably related to my profession as a data engineer. I find it fascinating to see the engineering solutions and the precision required in manufacturing processes. It also gives me ideas that I can sometimes apply to my work when designing data pipelines - thinking about efficiency, quality control, and systematic processes. Additionally, it's relaxing and educational at the same time, which makes it perfect for unwinding after working on complex Disney project requirements.
            `,
            exercises: [
                { question: "What's your favorite TV program?", answer: "How It's Made documentary series" },
                { question: "What type of program is it?", answer: "Educational documentary about manufacturing processes" },
                { question: "When do you watch it?", answer: "Evenings around 8 PM and sometimes during lunch" },
                { question: "Why do you enjoy it?", answer: "It satisfies my curiosity and relates to my engineering work" }
            ]
        },
        {
            title: "FESTIVAL",
            definition: "Describe a festival that is important in your country.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                One of the most important festivals in Peru is Inti Raymi, the Festival of the Sun, which celebrates the winter solstice and honors the Inca sun god Inti.<br><br>
                
                This festival occurs every year on June 24th, primarily in Cusco, but it's celebrated throughout Peru including here in Apurímac. During this festival, I usually spend time with my family watching the traditional ceremonies on television, and we often prepare special foods. In Abancay, there are smaller local celebrations with traditional music and dance. Neli and I like to take Ethan to see the colorful costumes and listen to the Andean music, though Anne is still too young to fully appreciate it.<br><br>
                
                What I like most about Inti Raymi is how it connects us to our ancient Inca heritage and brings communities together. The festival features beautiful traditional clothing, impressive ceremonies, and wonderful music that makes me feel proud of our Peruvian culture. I also enjoy the special foods that are prepared during this time, especially the traditional dishes that remind me of my childhood.<br><br>
                
                This festival is important because it preserves our indigenous culture and traditions that date back hundreds of years. It helps younger generations, like Ethan, learn about our history and cultural identity. Inti Raymi also attracts tourists from around the world, which helps our economy. For me personally, it's a time to reflect on our roots and share our cultural heritage with my children, ensuring that these important traditions continue to the next generation.
            `,
            exercises: [
                { question: "What festival do you describe?", answer: "Inti Raymi, the Festival of the Sun" },
                { question: "When does it occur?", answer: "Every year on June 24th" },
                { question: "What do you like about it?", answer: "It connects us to Inca heritage and brings communities together" },
                { question: "Why is it important?", answer: "It preserves indigenous culture and teaches younger generations" }
            ]
        },
        {
            title: "FOOD",
            definition: "Describe a special dish from your country.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                A special dish from Peru that I would like to describe is "Ceviche," which is considered our national dish and represents the best of Peruvian cuisine.<br><br>
                
                Ceviche is prepared using fresh raw fish, typically sea bass or sole, which is cut into small cubes and "cooked" in citrus juices, mainly lime juice. The acid in the lime juice chemically cooks the fish. It's then mixed with sliced red onions, chili peppers (ají), salt, and pepper. The dish is garnished with cilantro and served with sweet potato, corn, and sometimes lettuce.<br><br>
                
                Ceviche is traditionally served in restaurants along the coast, especially in Lima, but you can find good versions throughout Peru. It's typically eaten as lunch, never for dinner, because it's believed that seafood should be consumed fresh during the day. Here in Abancay, we have some restaurants that serve decent ceviche, though it's not as fresh as on the coast.<br><br>
                
                I would definitely recommend ceviche to any visitor to Peru. It's not just food; it's a cultural experience that represents our connection to the Pacific Ocean and our culinary creativity. The combination of fresh fish, tangy lime, and spicy peppers creates a unique flavor that you can't find anywhere else in the world. However, I would advise visitors to eat it only at reputable restaurants to ensure the fish is fresh and properly prepared. When Neli and I travel to Lima, we always make sure to have authentic ceviche, and I look forward to introducing this dish to Ethan and Anne when they're older.
            `,
            exercises: [
                { question: "What dish do you describe?", answer: "Ceviche, Peru's national dish" },
                { question: "How is it prepared?", answer: "Raw fish cooked in lime juice with onions and peppers" },
                { question: "Where is it served?", answer: "Restaurants throughout Peru, especially on the coast" },
                { question: "Would you recommend it?", answer: "Yes, it's a unique cultural and culinary experience" }
            ]
        },
        {
            title: "LEISURE ACTIVITY",
            definition: "Describe something you do in your free time.",
            examples: `
                <strong>Sample Writing:</strong><br><br>
                In my free time, I enjoy learning new programming technologies and working on personal coding projects, which helps me stay current in my field as a data engineer.<br><br>
                
                I usually engage in this activity during weekends, typically on Saturday afternoons when Neli is taking care of Ethan and Anne, or sometimes in the evenings after the children are asleep. I spend about 2-3 hours at a time exploring new tools, reading technical documentation, or building small applications that interest me.<br><br>
                
                I do this activity in my home office in Abancay, the same space where I work for Globant during the week. I have a comfortable setup with multiple monitors and all the necessary equipment. Sometimes I also work on my laptop in the living room while the family is nearby, so I can still be present even while learning.<br><br>
                
                I like doing this because it keeps me competitive in the rapidly changing technology industry and often helps me bring new ideas to my work on the Disney project. Learning new technologies is like solving puzzles, which I find intellectually stimulating and rewarding. It also gives me a sense of personal growth and achievement. Additionally, this hobby has practical benefits - the skills I learn often make me more efficient at work and sometimes lead to better opportunities. It's also a way for me to ensure I can continue providing well for my family by staying relevant in my profession. Even though it's technically work-related, I genuinely enjoy the process of discovery and problem-solving that comes with learning new technologies.
            `,
            exercises: [
                { question: "What do you do in your free time?", answer: "Learn new programming technologies and work on coding projects" },
                { question: "When do you do it?", answer: "Saturday afternoons and evenings after children sleep" },
                { question: "Where do you do it?", answer: "In my home office or living room in Abancay" },
                { question: "Why do you like it?", answer: "It keeps me competitive and helps with personal growth" }
            ]
        }
    ];
}
