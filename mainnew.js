/*
libraries are stored on nx.js as a list 
TEMPLATE
english
kanji
[
    [kanji, hiragana, english]
]

['','',[['','',''],]],
['english','kanji',[['kanji1','hiragana1','english1'],['kanji2','hiragana2','english2'],]],
*/
function ShuffleArray(array)
{
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--)
    {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // console.log(shuffled.length);
    // console.log(shuffled);
    return shuffled;
}

let ctr = 0;
let card;
let kanji;
let english;
let onyomi;
let kunyomi;
let examples;
let lib;
let counter;
let maxCtr;
let level;
function Setup() {
    card = document.querySelector('.card');
    kanji = document.getElementById('kanji');
    english = document.getElementById('english');
    onyomi = document.getElementById('onyomi');
    kunyomi = document.getElementById('kunyomi');
    examples = document.querySelector('.examples');
    // right.style.visibility = "hidden";
    onyomi.style.visibility = 'hiddent';
    kunyomi.style.visibility = 'hiddent';
    examples.style.visibility = 'hiddent';
    kanji.style.fontSize = '40px';

    // const htmlFileName = getHTMLFileName();
    var htmlFileName = window.location.pathname;
    let randomized;
    if(htmlFileName.includes('n5')) {randomized = ShuffleArray(library_n5); level='n5';}
    else if(htmlFileName.includes('n4')) {randomized = ShuffleArray(library_n4); level='n4';}
    console.log(htmlFileName);
    counter = document.querySelector('.counter');
    maxCtr = randomized.length;
    counter.textContent = ctr+'/'+maxCtr;
    counter.style.visibility = 'hidden';
    return randomized;
}

const randomized = Setup();
document.querySelector(".card").addEventListener("click", Next);


let hidden = false;
function Next()
{
    if(hidden)
    {
        english.style.visibility = 'visible';
        onyomi.style.visibility = 'visible';
        kunyomi.style.visibility = 'visible';
        examples.style.visibility = 'visible';
        hidden = false;
        counter.textContent = ctr+'/'+maxCtr;
        return;
    }
    else if(ctr == 0)
    {
        // right.style.display = 'flex';
        kanji.style.fontSize = '80px';
        counter.style.visibility = 'visible';
        card.style.justifyContent = '';
        hidden = true;
    }
    else if(ctr == randomized.length)
    {
        // right.style.display = 'none';
        kanji.textContent = 'おめでとう';
        // kanji.textContent = 'under construction';
        kanji.style.fontSize = '40px';
        english.textContent = 'congrats';
        // english.textContent = 'sisanya otw';
        card.style.justifyContent = 'center';

        const nextLinks = document.createElement('div');
        nextLinks.className = 'nextLinks';
        card.appendChild(nextLinks);

        const again = document.createElement('a');
        again.textContent = 'AGAIN';
        again.href = level+'.html';
        const chooseLevel = document.createElement('a');
        chooseLevel.textContent = 'CHOOSE LEVEL';
        chooseLevel.href = 'index.html';
        nextLinks.appendChild(again);
        nextLinks.appendChild(chooseLevel);

        document.querySelector(".card").removeEventListener("click", Next);
        return;
    }
    kanji.textContent = randomized[ctr][0];
    english.textContent = randomized[ctr][1];
    // onyomi.textContent = randomized[ctr][2];
    // kunyomi.textContent = randomized[ctr][3];
    onyomi.textContent = ''
    onctr = 0;
    for(let i=0; i<randomized[ctr][2].length; i++)
    {
        onyomi.textContent += randomized[ctr][2][i] + ' | ';
        onctr++;
        if(onctr==3) break;
    }
    onyomi.textContent = onyomi.textContent.slice(0,-2);
    kunyomi.textContent = ''

    kunctr = 0;
    for(let i=0; i<randomized[ctr][3].length; i++)
    {
        kunyomi.textContent += randomized[ctr][3][i] + ' | ';
        kunctr++;
        if(kunctr==3) break;
    }
    kunyomi.textContent = kunyomi.textContent.slice(0,-2);

    examples.innerHTML = '';
    for(let i=0; i<randomized[ctr][4].length; i++)
    {
        const tr = document.createElement('tr');
        examples.appendChild(tr);
        for(let j=0; j<3; j++)
        {
            const td = document.createElement('td');
            td.textContent = randomized[ctr][4][i][j];
            tr.appendChild(td);
        }
    }
    english.style.visibility = 'hidden';
    onyomi.style.visibility = 'hidden';
    kunyomi.style.visibility = 'hidden';
    examples.style.visibility = 'hidden';
    hidden = true;
    ctr++;
}