/*
TEMPLATE
english
kanji
[
    [kanji, hiragana, english]
]

['','',[['','',''],]],
['english','kanji',[['kanji1','hiragana1','english1'],['kanji2','hiragana2','english2'],]],

*/
const library_n5 = 
[
    // ['fire','火',[['花火','はなび','fireworks'],['火山','かざん','volcano'],['火曜日','かようび','tuesday']]],
    // ['water','水',[['洪水','こうずい','flood'],['水曜日','かようび','wednesday']]],
    ['one','一',[['一人','ひとり','one person'],['一番','いちばん','best'],['一月','いちがつ','January'],]],
    ['two','二',[['第二','だいに','the second'],['二月','にがつ','February'],]],
    ['three','三',[['三月','さんがつ','March'],['三角','さんかく','triangle'],]],
    ['four','四',[['四月','しがつ','April'],['四級','よんきゅう','fourth grade'],]],
    ['five','五',[['五月','がつ','May'],['五ヶ月','ごがげつ','five months'],]],
    ['six','六',[['六月','がつ','June'],['六日','むいか','sixth of'],]],
    ['seven','七',[['七月','がつ','July'],['七不思議','ななふしぎ','The Seven Wonders'],]],
    ['eight','八',[['八月','がつ','August'],['八年間','はちねんかん','eight years'],]],
    ['nine','九',[['九月','がつ','September'],['九ヶ月','きゅうかげつ','nine months'],]],
    ['ten','十',[['十月','がつ','October'],['十二月','じゅうにがつ','December'],]],
    ['hundred','百',[['','',''],]],
    ['thousand','千',[['','',''],]],
    ['ten thousand','万',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],
    ['','',[['','',''],]],



];
const library_n4 =
[
    ['','coming soon',[['','',''],]],
];

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
let examples;
let left;
let right;
let lib;
let counter;
let maxCtr;
let level;
function Setup() {
    card = document.querySelector('.card');
    kanji = document.getElementById('kanji');
    english = document.getElementById('english');
    examples = document.querySelector('.examples');
    left = document.querySelector('.left');
    right = document.querySelector('.right');
    // right.style.visibility = "hidden";
    right.style.display = 'none';
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
        examples.style.visibility = 'visible';
        english.style.visibility = 'visible';
        hidden = false;
        counter.textContent = ctr+'/'+maxCtr;
        return;
    }
    else if(ctr == 0)
    {
        right.style.display = 'flex';
        kanji.style.fontSize = '80px';
        counter.style.visibility = 'visible';
        card.style.justifyContent = '';
        hidden = true;
    }
    else if(ctr == randomized.length)
    {
        right.style.display = 'none';
        // kanji.textContent = 'おめでとう';
        kanji.textContent = 'under construction';
        kanji.style.fontSize = '40px';
        // english.textContent = 'congrats';
        english.textContent = 'sisanya otw';
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
    kanji.textContent = randomized[ctr][1];
    english.textContent = randomized[ctr][0];
    examples.innerHTML = '';
    for(let i=0; i<randomized[ctr][2].length; i++)
    {
        const tr = document.createElement('tr');
        examples.appendChild(tr);
        for(let j=0; j<3; j++)
        {
            const td = document.createElement('td');
            td.textContent = randomized[ctr][2][i][j];
            tr.appendChild(td);
        }
    }
    examples.style.visibility = 'hidden';
    english.style.visibility = 'hidden';
    hidden = true;
    ctr++;
}