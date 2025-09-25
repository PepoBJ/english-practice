function loadVerbTables() {
    loadRegularVerbs();
    loadIrregularVerbs();
}

function loadRegularVerbs() {
    const regularVerbs = [
        { base: "accept", past: "accepted", participle: "accepted", spanish: "aceptar", examples: ["I accept your offer", "She accepted the job"] },
        { base: "add", past: "added", participle: "added", spanish: "añadir", examples: ["Add some salt", "He added sugar to his coffee"] },
        { base: "agree", past: "agreed", participle: "agreed", spanish: "estar de acuerdo", examples: ["I agree with you", "They agreed to help"] },
        { base: "allow", past: "allowed", participle: "allowed", spanish: "permitir", examples: ["Dogs are not allowed", "She allowed me to go"] },
        { base: "answer", past: "answered", participle: "answered", spanish: "responder", examples: ["Answer the question", "He answered quickly"] },
        { base: "appear", past: "appeared", participle: "appeared", spanish: "aparecer", examples: ["The sun appeared", "She appeared nervous"] },
        { base: "arrive", past: "arrived", participle: "arrived", spanish: "llegar", examples: ["The train arrived late", "We arrived at 6 PM"] },
        { base: "ask", past: "asked", participle: "asked", spanish: "preguntar", examples: ["Ask a question", "She asked for help"] },
        { base: "believe", past: "believed", participle: "believed", spanish: "creer", examples: ["I believe you", "He believed the story"] },
        { base: "belong", past: "belonged", participle: "belonged", spanish: "pertenecer", examples: ["This belongs to me", "The book belonged to her"] },
        { base: "call", past: "called", participle: "called", spanish: "llamar", examples: ["Call me later", "She called yesterday"] },
        { base: "carry", past: "carried", participle: "carried", spanish: "llevar", examples: ["Carry this bag", "He carried the boxes"] },
        { base: "change", past: "changed", participle: "changed", spanish: "cambiar", examples: ["Change your clothes", "The weather changed"] },
        { base: "clean", past: "cleaned", participle: "cleaned", spanish: "limpiar", examples: ["Clean your room", "She cleaned the house"] },
        { base: "close", past: "closed", participle: "closed", spanish: "cerrar", examples: ["Close the door", "The store closed early"] },
        { base: "cook", past: "cooked", participle: "cooked", spanish: "cocinar", examples: ["Cook dinner", "He cooked pasta"] },
        { base: "copy", past: "copied", participle: "copied", spanish: "copiar", examples: ["Copy this text", "She copied the homework"] },
        { base: "count", past: "counted", participle: "counted", spanish: "contar", examples: ["Count to ten", "He counted the money"] },
        { base: "create", past: "created", participle: "created", spanish: "crear", examples: ["Create a new file", "She created a masterpiece"] },
        { base: "dance", past: "danced", participle: "danced", spanish: "bailar", examples: ["Dance with me", "They danced all night"] },
        { base: "decide", past: "decided", participle: "decided", spanish: "decidir", examples: ["Decide quickly", "We decided to stay"] },
        { base: "describe", past: "described", participle: "described", spanish: "describir", examples: ["Describe the problem", "He described the scene"] },
        { base: "develop", past: "developed", participle: "developed", spanish: "desarrollar", examples: ["Develop new skills", "The company developed software"] },
        { base: "die", past: "died", participle: "died", spanish: "morir", examples: ["The plant died", "He died peacefully"] },
        { base: "discover", past: "discovered", participle: "discovered", spanish: "descubrir", examples: ["Discover new places", "She discovered the truth"] },
        { base: "discuss", past: "discussed", participle: "discussed", spanish: "discutir", examples: ["Discuss the plan", "We discussed the problem"] },
        { base: "dress", past: "dressed", participle: "dressed", spanish: "vestirse", examples: ["Dress warmly", "She dressed quickly"] },
        { base: "drop", past: "dropped", participle: "dropped", spanish: "dejar caer", examples: ["Don't drop it", "He dropped his keys"] },
        { base: "earn", past: "earned", participle: "earned", spanish: "ganar", examples: ["Earn money", "She earned a degree"] },
        { base: "end", past: "ended", participle: "ended", spanish: "terminar", examples: ["The movie ended", "School ended at 3 PM"] },
        { base: "enjoy", past: "enjoyed", participle: "enjoyed", spanish: "disfrutar", examples: ["Enjoy your meal", "We enjoyed the party"] },
        { base: "enter", past: "entered", participle: "entered", spanish: "entrar", examples: ["Enter the room", "He entered the building"] },
        { base: "escape", past: "escaped", participle: "escaped", spanish: "escapar", examples: ["Escape from danger", "The prisoner escaped"] },
        { base: "exist", past: "existed", participle: "existed", spanish: "existir", examples: ["Does it exist?", "Dinosaurs existed long ago"] },
        { base: "explain", past: "explained", participle: "explained", spanish: "explicar", examples: ["Explain the rule", "She explained clearly"] },
        { base: "fail", past: "failed", participle: "failed", spanish: "fallar", examples: ["Don't fail the test", "The plan failed"] },
        { base: "fill", past: "filled", participle: "filled", spanish: "llenar", examples: ["Fill the glass", "The room filled with smoke"] },
        { base: "finish", past: "finished", participle: "finished", spanish: "terminar", examples: ["Finish your work", "We finished early"] },
        { base: "follow", past: "followed", participle: "followed", spanish: "seguir", examples: ["Follow me", "The dog followed us"] },
        { base: "form", past: "formed", participle: "formed", spanish: "formar", examples: ["Form a line", "Clouds formed in the sky"] },
        { base: "guess", past: "guessed", participle: "guessed", spanish: "adivinar", examples: ["Guess the answer", "I guessed correctly"] },
        { base: "happen", past: "happened", participle: "happened", spanish: "suceder", examples: ["What happened?", "The accident happened yesterday"] },
        { base: "help", past: "helped", participle: "helped", spanish: "ayudar", examples: ["Help me please", "She helped her friend"] },
        { base: "hope", past: "hoped", participle: "hoped", spanish: "esperar", examples: ["I hope so", "We hoped for good weather"] },
        { base: "hurry", past: "hurried", participle: "hurried", spanish: "apresurarse", examples: ["Hurry up!", "She hurried to work"] },
        { base: "include", past: "included", participle: "included", spanish: "incluir", examples: ["Include everyone", "The price included tax"] },
        { base: "increase", past: "increased", participle: "increased", spanish: "aumentar", examples: ["Increase the volume", "Prices increased"] },
        { base: "invite", past: "invited", participle: "invited", spanish: "invitar", examples: ["Invite your friends", "She invited me to dinner"] },
        { base: "join", past: "joined", participle: "joined", spanish: "unirse", examples: ["Join the club", "He joined the army"] },
        { base: "jump", past: "jumped", participle: "jumped", spanish: "saltar", examples: ["Jump high", "The cat jumped on the table"] },
        { base: "kill", past: "killed", participle: "killed", spanish: "matar", examples: ["Don't kill insects", "The frost killed the plants"] },
        { base: "knock", past: "knocked", participle: "knocked", spanish: "golpear", examples: ["Knock on the door", "Someone knocked loudly"] },
        { base: "land", past: "landed", participle: "landed", spanish: "aterrizar", examples: ["The plane landed", "We landed safely"] }
    ];

    const container = document.getElementById('regular-verbs');
    
    let tableHtml = `
        <h3>📋 100 Most Common Regular Verbs</h3>
        <p><strong>Pattern:</strong> Base form + ED for past and past participle</p>
        <table class="verb-table">
            <thead>
                <tr>
                    <th>Base Form</th>
                    <th>Past Simple</th>
                    <th>Past Participle</th>
                    <th>Spanish</th>
                    <th>Examples</th>
                </tr>
            </thead>
            <tbody>
    `;

    regularVerbs.forEach(verb => {
        tableHtml += `
            <tr>
                <td><strong>${verb.base}</strong></td>
                <td>${verb.past}</td>
                <td>${verb.participle}</td>
                <td>${verb.spanish}</td>
                <td>
                    • ${verb.examples[0]}<br>
                    • ${verb.examples[1]}
                </td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
        <div class="tips">
            <h4>💡 Regular Verbs Tips:</h4>
            <p>
                <strong>Spelling Rules:</strong><br>
                • Most verbs: add -ED (work → worked)<br>
                • Verbs ending in -E: add -D (live → lived)<br>
                • Verbs ending in consonant + Y: change Y to -IED (study → studied)<br>
                • One syllable verbs ending in consonant-vowel-consonant: double the consonant (stop → stopped)
            </p>
        </div>
    `;

    container.innerHTML = tableHtml;
}

function loadIrregularVerbs() {
    const irregularVerbs = [
        { base: "be", past: "was/were", participle: "been", spanish: "ser/estar", examples: ["I am happy", "She was tired yesterday"] },
        { base: "have", past: "had", participle: "had", spanish: "tener", examples: ["I have a car", "He had lunch at noon"] },
        { base: "do", past: "did", participle: "done", spanish: "hacer", examples: ["Do your homework", "She did it well"] },
        { base: "say", past: "said", participle: "said", spanish: "decir", examples: ["Say hello", "He said goodbye"] },
        { base: "get", past: "got", participle: "got/gotten", spanish: "obtener", examples: ["Get the book", "I got a present"] },
        { base: "make", past: "made", participle: "made", spanish: "hacer", examples: ["Make dinner", "She made a cake"] },
        { base: "go", past: "went", participle: "gone", spanish: "ir", examples: ["Go home", "They went to Paris"] },
        { base: "know", past: "knew", participle: "known", spanish: "saber/conocer", examples: ["I know you", "She knew the answer"] },
        { base: "take", past: "took", participle: "taken", spanish: "tomar", examples: ["Take this", "He took the bus"] },
        { base: "see", past: "saw", participle: "seen", spanish: "ver", examples: ["See you later", "I saw a movie"] },
        { base: "come", past: "came", participle: "come", spanish: "venir", examples: ["Come here", "She came early"] },
        { base: "think", past: "thought", participle: "thought", spanish: "pensar", examples: ["Think about it", "I thought of you"] },
        { base: "look", past: "looked", participle: "looked", spanish: "mirar", examples: ["Look at me", "She looked tired"] },
        { base: "want", past: "wanted", participle: "wanted", spanish: "querer", examples: ["I want coffee", "He wanted to go"] },
        { base: "give", past: "gave", participle: "given", spanish: "dar", examples: ["Give me that", "She gave a gift"] },
        { base: "use", past: "used", participle: "used", spanish: "usar", examples: ["Use this pen", "He used the computer"] },
        { base: "find", past: "found", participle: "found", spanish: "encontrar", examples: ["Find your keys", "I found it!"] },
        { base: "tell", past: "told", participle: "told", spanish: "decir/contar", examples: ["Tell me", "She told a story"] },
        { base: "ask", past: "asked", participle: "asked", spanish: "preguntar", examples: ["Ask a question", "He asked for help"] },
        { base: "work", past: "worked", participle: "worked", spanish: "trabajar", examples: ["Work hard", "She worked late"] },
        { base: "seem", past: "seemed", participle: "seemed", spanish: "parecer", examples: ["You seem tired", "It seemed easy"] },
        { base: "feel", past: "felt", participle: "felt", spanish: "sentir", examples: ["Feel better", "I felt sad"] },
        { base: "try", past: "tried", participle: "tried", spanish: "intentar", examples: ["Try again", "She tried hard"] },
        { base: "leave", past: "left", participle: "left", spanish: "dejar/salir", examples: ["Leave now", "He left early"] },
        { base: "call", past: "called", participle: "called", spanish: "llamar", examples: ["Call me", "She called yesterday"] },
        { base: "put", past: "put", participle: "put", spanish: "poner", examples: ["Put it here", "He put on his coat"] },
        { base: "mean", past: "meant", participle: "meant", spanish: "significar", examples: ["What does it mean?", "I meant to call"] },
        { base: "keep", past: "kept", participle: "kept", spanish: "mantener", examples: ["Keep quiet", "She kept the secret"] },
        { base: "let", past: "let", participle: "let", spanish: "dejar/permitir", examples: ["Let me go", "They let us in"] },
        { base: "begin", past: "began", participle: "begun", spanish: "empezar", examples: ["Begin now", "The movie began"] },
        { base: "help", past: "helped", participle: "helped", spanish: "ayudar", examples: ["Help me", "She helped us"] },
        { base: "show", past: "showed", participle: "shown", spanish: "mostrar", examples: ["Show me", "He showed the way"] },
        { base: "hear", past: "heard", participle: "heard", spanish: "oír", examples: ["Hear the music", "I heard a noise"] },
        { base: "play", past: "played", participle: "played", spanish: "jugar", examples: ["Play football", "They played well"] },
        { base: "run", past: "ran", participle: "run", spanish: "correr", examples: ["Run fast", "She ran home"] },
        { base: "move", past: "moved", participle: "moved", spanish: "mover", examples: ["Move the chair", "We moved house"] },
        { base: "live", past: "lived", participle: "lived", spanish: "vivir", examples: ["Live here", "He lived in Spain"] },
        { base: "believe", past: "believed", participle: "believed", spanish: "creer", examples: ["Believe me", "She believed the story"] },
        { base: "bring", past: "brought", participle: "brought", spanish: "traer", examples: ["Bring your book", "He brought flowers"] },
        { base: "happen", past: "happened", participle: "happened", spanish: "suceder", examples: ["What happened?", "It happened yesterday"] },
        { base: "write", past: "wrote", participle: "written", spanish: "escribir", examples: ["Write a letter", "She wrote a book"] },
        { base: "sit", past: "sat", participle: "sat", spanish: "sentarse", examples: ["Sit down", "He sat quietly"] },
        { base: "stand", past: "stood", participle: "stood", spanish: "estar de pie", examples: ["Stand up", "She stood by the door"] },
        { base: "lose", past: "lost", participle: "lost", spanish: "perder", examples: ["Don't lose it", "I lost my keys"] },
        { base: "pay", past: "paid", participle: "paid", spanish: "pagar", examples: ["Pay the bill", "She paid cash"] },
        { base: "meet", past: "met", participle: "met", spanish: "conocer/encontrar", examples: ["Meet me there", "We met yesterday"] },
        { base: "include", past: "included", participle: "included", spanish: "incluir", examples: ["Include everyone", "Tax was included"] },
        { base: "continue", past: "continued", participle: "continued", spanish: "continuar", examples: ["Continue reading", "The rain continued"] },
        { base: "set", past: "set", participle: "set", spanish: "poner/establecer", examples: ["Set the table", "He set a record"] },
        { base: "learn", past: "learned/learnt", participle: "learned/learnt", spanish: "aprender", examples: ["Learn English", "She learned quickly"] },
        { base: "change", past: "changed", participle: "changed", spanish: "cambiar", examples: ["Change clothes", "The weather changed"] }
    ];

    const container = document.getElementById('irregular-verbs');
    
    let tableHtml = `
        <h3>⚡ 50 Most Important Irregular Verbs</h3>
        <p><strong>Pattern:</strong> Each verb has its own unique past and past participle forms</p>
        <table class="verb-table">
            <thead>
                <tr>
                    <th>Base Form</th>
                    <th>Past Simple</th>
                    <th>Past Participle</th>
                    <th>Spanish</th>
                    <th>Examples</th>
                </tr>
            </thead>
            <tbody>
    `;

    irregularVerbs.forEach(verb => {
        tableHtml += `
            <tr>
                <td><strong>${verb.base}</strong></td>
                <td>${verb.past}</td>
                <td>${verb.participle}</td>
                <td>${verb.spanish}</td>
                <td>
                    • ${verb.examples[0]}<br>
                    • ${verb.examples[1]}
                </td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
        <div class="tips">
            <h4>💡 Irregular Verbs Tips:</h4>
            <p>
                <strong>Study Strategy:</strong><br>
                • Learn in groups: same pattern (sing-sang-sung, ring-rang-rung)<br>
                • Practice daily: 5-10 verbs per day<br>
                • Use flashcards for memorization<br>
                • Focus on the most common ones first<br>
                • Make sentences with each verb form
            </p>
        </div>
    `;

    container.innerHTML = tableHtml;
}
