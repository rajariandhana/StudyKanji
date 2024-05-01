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
let ctr = 0;
let card;
let kanji;
let english;
let examples_table;
let examples_tbody;
let left;
let right;
let lib;
let counter;
let counternumber;
let maxCtr;
let level;
let mainbtn;

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

function Setup()
{
    card = document.querySelector('.kanjicard');
    kanji = document.getElementById('kanji');
    english = document.getElementById('english');
    examples_table = document.querySelector('.examples_table');
    examples_tbody = document.querySelector('.examples_tbody');

    examples_table.style.visibility = 'hidden';
    kanji.style.fontSize = '70px';

    counter = document.getElementById('counter');
    counternumber = document.getElementById('counternumber');

    // const htmlFileName = getHTMLFileName();
    var htmlFileName = window.location.pathname;
    let randomized;
    if(htmlFileName.includes('n5')) {randomized = ShuffleArray(library_n5); level='n5';}
    else if(htmlFileName.includes('n4')) {randomized = ShuffleArray(library_n4); level='n4';}
    console.log(htmlFileName);
    
    maxCtr = randomized.length;
    counternumber.textContent = ctr+'/'+maxCtr;
    counter.style.visibility = 'hidden';
    // mainbtn = document.querySelector('mainbtn');
    mainbtn = document.getElementById('mainbtn');
    mainbtn.addEventListener("click",Action);
    document.addEventListener("keydown", function(event){
        if(event.keyCode === 32) Action();
    });
    return randomized;
}

const randomized = Setup();
// document.querySelector(".kanjicard").addEventListener("click", Action);
// document.getElementById("mainbtn").addEventListener("click", Action);


let hidden = false;
function Action()
{
    if(hidden)
    {
        english.style.visibility = 'visible';
        examples_table.style.visibility = 'visible';
        counternumber.textContent = ctr+'/'+maxCtr;
        mainbtn.textContent = 'NEXT';
        hidden = false;
        return;
    }

    if(ctr == 0)
    {
        // examples_table.style.visibility = 'visible'
        kanji.style.fontSize = '100px';
        counter.style.visibility = 'visible';
        english.style.visibility = 'hidden';
        examples_table.style.visibility = 'hidden';
        card.style.justifyContent = '';
        mainbtn.textContent = 'NEXT';
        hidden = true;
    }
    else if(ctr == randomized.length)
    {
        kanji.textContent = 'おめでとう';
        kanji.style.fontSize = '40px';
        english.textContent = 'congrats';
        examples_table.style.visibility = 'hidden';

        mainbtn.textContent = 'HOME';

        const nextLinks = document.createElement('div');
        nextLinks.className = 'nextLinks';
        // card.appendChild(nextLinks);

        const again = document.createElement('a');
        again.textContent = 'AGAIN';
        again.href = level+'.html';
        const chooseLevel = document.createElement('a');
        chooseLevel.textContent = 'CHOOSE LEVEL';
        chooseLevel.href = 'index.html';
        nextLinks.appendChild(again);
        nextLinks.appendChild(chooseLevel);

        document.querySelector(".card").removeEventListener("click", Action);
        return;
    }
    kanji.textContent = randomized[ctr][0];
    english.textContent = randomized[ctr][1];
    examples_tbody.innerHTML = '';
    const temptr = document.createElement('tr');
    examples_tbody.appendChild(temptr);
    const temptd1 = document.createElement('td');
    const temptd2 = document.createElement('td');
    const temptd3 = document.createElement('td');
    temptr.appendChild(temptd1);
    temptr.appendChild(temptd2);
    temptr.appendChild(temptd3);
    let exlen = randomized[ctr][2].length - 1;
    for(let i=0; i<3; i++)
    {
        const tr = document.createElement('tr');
        examples_tbody.appendChild(tr);
        if(i>exlen) continue;
        for(let j=0; j<3; j++)
        {
            const td = document.createElement('td');
            td.textContent = randomized[ctr][2][i][j];
            tr.appendChild(td);
        }
    }
    examples_table.style.visibility = 'hidden';
    english.style.visibility = 'hidden';
    mainbtn.textContent = 'REVEAL';
    hidden = true;
    ctr++;
}