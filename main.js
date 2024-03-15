const library_n5 = 
[
    ['fire','火',[['花火','はなび','fireworks'],['火山','かざん','volcano'],['火曜日','かようび','tuesday']]],
    ['water','水',[['洪水','こうずい','flood'],['水曜日','かようび','wednesday']]],
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

function Setup() {
    const randomized = ShuffleArray(library_n5);
    card = document.querySelector('.card');
    kanji = document.getElementById('kanji');
    english = document.getElementById('english');
    examples = document.querySelector('.examples');
    left = document.querySelector('.left');
    right = document.querySelector('.right');
    // right.style.visibility = "hidden";
    right.style.display = 'none';
    kanji.style.fontSize = '40px';
    return randomized;
}

const randomized = Setup();
document.querySelector(".card").addEventListener("click", Next);


let hidden = true;
function Next()
{
    if(hidden)
    {
        examples.style.visibility = 'visible';
        hidden = false;
        return;
    }
    if(ctr == 0)
    {
        right.style.display = 'flex';
        kanji.style.fontSize = '80px';
    }
    if(ctr == randomized.length)
    {
        right.style.display = 'none';
        kanji.textContent = 'おめでとう';
        kanji.style.fontSize = '40px';
        english.textContent = 'congrats';
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
    hidden = true;
    ctr++;
}