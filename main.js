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
const library_n5 = [
    ['一','one',[['一人', 'ひとり', 'one']]],
    ['二','two',[['二人', 'ふたり', 'two']]],
    ['三','three',[['三月', 'さんがつ', 'three']]],
    ['四','four',[['四季', 'しき', 'four']]],
    ['五','five',[['五分', 'ごふん', 'five']]],
    ['六','six',[]],
    ['七','seven',[]],
    ['八','eight',[]],
    ['九','nine',[]],
    ['十','ten',[]],
    ['百','hundreds',[]],
    ['千','thousand',[]],
    ['万','ten thousand; myriad',[]],
    ['父','father',[['お父さん', 'おとうさん', 'father']]],
    ['母','mother',[['お母さん', 'おかあさん', 'mother']]],
    ['友','friend',[['友だち', 'ともだち', 'friend'], ['友人', 'ゆうじん', 'friend']]],
    ['女','womanfemale',[['女性', 'じょせい', 'womanfemale'], ['女の子', 'おんなのこ', 'womanfemale']]],
    ['男','man; male',[['男性', 'だんせい', 'man; male'], ['男の子', 'おとこのこ', 'man; male']]],
    ['人','person; person counter suffix',[['日本人', 'にほんじん', 'person; person counter suffix']]],
    ['子','child',[['子ども', 'こども', 'child']]],
    ['日','sun; day; day counter suffix',[['日曜日', 'にちようび', 'sun; day; day counter suffix'], ['お日さま', 'おひさま', 'sun; day; day counter suffix']]],
    ['月','month names; other times; moon; month',[['月曜日', 'げつようび', 'month names; other times; moon; month'], ['お月さま', 'おつきさま', 'month names; other times; moon; month'], ['一ヶ月', 'いっかげつ', 'month names; other times; moon; month']]],
    ['火','fire; light',[['火曜日', 'かようび', 'fire; light'], ['花火', 'はなび', 'fire; light']]],
    ['水','water',[['水曜日', 'すいようび', 'water']]],
    ['木','tree; wood',[['木曜日', 'もくようび', 'tree; wood']]],
    ['金','goldmetal; money',[['金曜日', 'きんようび', 'goldmetal; money'], ['お金もち', 'おかねもち', 'goldmetal; money']]],
    ['土','earth; ground; soil',[['土曜日', 'どようび', 'earth; ground; soil']]],
    ['本','root; book; slender object counter',[['日本', 'にほん', 'root; book; slender object counter'], ['本屋', 'ほんや', 'root; book; slender object counter']]],
    ['休','rest; vacation',[['休けい', 'きゅうけい', 'rest; vacation'], ['夏休み', 'なつやすみ', 'rest; vacation']]],
    ['語','word; speech; language; narration; to tell; to speak',[['日本語', 'にほんご', 'word; speech; language; narration; to tell; to speak'], ['英語', 'えいご', 'word; speech; language; narration; to tell; to speak'], ['物語', 'ものがたり', 'word; speech; language; narration; to tell; to speak']]],
    ['年','yearyear counter',[['一年', 'いちねん', 'yearyear counter'], ['今年', 'ことし', 'yearyear counter']]],
    ['午','noon',[['正午', 'しょうご', 'noon']]],
    ['前','before; in front of; previous',[['午前', 'ごぜん', 'before; in front of; previous']]],
    ['後','behind; after',[['午後', 'ごご', 'behind; after']]],
    ['時','time; hour counter',[['時間', 'じかん', 'time; hour counter']]],
    ['間','intervalspaceroomtime',[['三時間', 'さんじかん', 'intervalspaceroomtime']]],
    ['毎','every',[['毎日', 'まいにち', 'every']]],
    ['先','previousahead',[['先生', 'せんせい', 'previousahead']]],
    ['今','nowthe present',[['今日', 'きょうこんにち', 'nowthe present']]],
    ['何','whathow many',[['何日', 'なんにち', 'whathow many']]],
    ['上','topabove; to raise; to rise; to go up',[['上手', 'じょおず', 'topabove; to raise; to rise; to go up']]],
    ['下','bottomunderdown',[['下着', 'したぎ', 'bottomunderdown']]],
    ['左','left',[['左足', 'ひだりあし', 'left']]],
    ['右','right',[['右手', 'みぎて', 'right']]],
    ['北','north',[['北海道', 'ほっかいどう', 'north']]],
    ['南','south',[['南', 'みなみ', 'south']]],
    ['東','east',[['東京', 'とうきょう', 'east']]],
    ['西','west',[['関西', 'かんさい', 'west']]],
    ['外','outsideforeignother',[['外国人', 'がいこくじん', 'outsideforeignother']]],
    ['名','namefamefamous; name',[['名前', 'なまえ', 'namefamefamous; name']]],
    ['高','highcostlytall',[['高校', 'こうこう', 'highcostlytall']]],
    ['小','smalllittle',[['小学校', 'しょうがっこう', 'smalllittle']]],
    ['中','middlecenterwithininside',[['中学校', 'ちゅうがっこう', 'middlecenterwithininside']]],
    ['大','greatbig',[['大学', 'だいがく', 'greatbig'], ['大阪', 'おおさか', 'greatbig']]],
    ['長','head of an organizationleader; long',[]],
    ['半','half',[['半分', 'はんぶん', 'half']]],
    ['分','partshare; minute counter; to divideseparate; to understand',[['三分', 'さんぶん', 'partshare; minute counter; to divideseparate; to understand']]],
    ['学','learningscience; to learn',[['学校', 'がっこう', 'learningscience; to learn']]],
    ['校','school',[['学校', 'がっこう', 'school']]],
    ['生','birthlife; to give birth; to live; raw',[['誕生日', 'たんじょうび', 'birthlife; to give birth; to live; raw']]],
    ['山','mountain',[['富士山', 'ふじさん', 'mountain']]],
    ['川','riverstream',[['川上', 'かわかみ', 'riverstream']]],
    ['白','white',[]],
    ['天','heavensky',[['天気', 'てんき', 'heavensky']]],
    ['雨','rain',[]],
    ['電','electricityelectric powered',[['電話', 'でんわ', 'electricityelectric powered'], ['電車', 'でんしゃ', 'electricityelectric powered']]],
    ['気','spiritintentionmindpowerenergy',[['空気', 'くうき', 'spiritintentionmindpowerenergy']]],
    ['車','wheel; vehicle; car',[['自転車', 'じてんしゃ', 'wheel; vehicle; car']]],
    ['国','countrynation',[['中国', 'ちゅうごく', 'countrynation']]],
    ['円','circle; yen (money)',[['百円', 'ひゃくえん', 'circle; yen (money)']]],
    ['話','talktopicstory; to talk',[['会話', 'かいわ', 'talktopicstory; to talk']]],
    ['聞','to hearto listento ask',[['新聞', 'しんぶん', 'to hearto listento ask']]],
    ['食','eatingmealfood',[['食べ物', 'たべもの', 'eatingmealfood']]],
    ['読','to read',[['読書', 'どくしょ', 'to read']]],
    ['来','to come',[['未来', 'みらい', 'to come']]],
    ['書','bookdocument; to write',[['書道', 'しょどう', 'bookdocument; to write']]],
    ['見','to show',[]],
    ['行','to go',[['旅行', 'りょこう', 'to go']]],
    ['出','to go outleave',[['出口', 'でぐち', 'to go outleave']]],
    ['入','enterto go into insert',[['入口', 'いりぐち', 'enterto go into insert']]],
    ['会','to meet',[['会社', 'かいしゃ', 'to meet']]],
];
const library_n4 = [
    ['不','not',[['寝不足', 'ねぶそく', 'not']]],
    ['世','world',[['世界', 'せかい', 'world']]],
    ['主','master',[['主義', 'しゅぎ', 'master']]],
    ['事','abstract thing',[['食事', 'しょくじ', 'abstract thing']]],
    ['乗','ride',[['乗り場', 'の\u3000ば', 'ride']]],
    ['京','capital',[['京都', 'きょうと', 'capital']]],
    ['仕','serve',[['仕事', 'しごと', 'serve']]],
    ['代','substitute',[['古代', 'こだい', 'substitute']]],
    ['以','since',[['以上', 'いじょう', 'since']]],
    ['低','low',[['最低', 'さいてい', 'low']]],
    ['作','make',[['手作り', 'てづくり', 'make']]],
    ['体','body',[['体育館', 'たいいくかん', 'body']]],
    ['住','dwell',[['住所', 'じゅうしょ', 'dwell']]],
    ['使','use',[['大使館', 'たいしかん', 'use']]],
    ['便','convenience',[['郵便局', 'ゆうびんきょく', 'convenience']]],
    ['借','borrow',[['貸借', 'たいしゃく', 'borrow']]],
    ['働','work',[['活動', 'かつどう', 'work']]],
    ['元','origin',[['地元', 'じもと', 'origin']]],
    ['兄','older brother',[['兄', 'あに', 'older brother']]],
    ['光','light',[['観光', 'かんこう', 'light']]],
    ['写','copy',[['写真', 'しゃしん', 'copy']]],
    ['冬','winter',[['冬季', 'とうき', 'winter']]],
    ['切','cut',[['大切', 'たいせつ', 'cut']]],
    ['別','separate',[['送別', 'そうべつ', 'separate']]],
    ['力','power',[['電力', 'でんりょく', 'power']]],
    ['勉','diligence',[['勉強', 'べんきょう', 'diligence']]],
    ['動','move',[['自動車', 'じどうしゃ', 'move']]],
    ['区','ward',[['地区', 'ちく', 'ward']]],
    ['医','doctor',[['医師', 'いし', 'doctor']]],
    ['去','leave',[['去年', 'きょねん', 'leave']]],
    ['合','fit',[]],
    ['台','base',[]],
    ['同','same',[]],
    ['味','flavor',[['意味', 'いみ', 'flavor']]],
    ['品','article',[['食品', 'しょくひん', 'article']]],
    ['員','member',[['全員', 'ぜんいん', 'member']]],
    ['問','question',[['質問', 'しつもん', 'question']]],
    ['図','drawing',[['地図', 'ちず', 'drawing']]],
    ['地','ground',[['地球', 'ちきゅう', 'ground']]],
    ['堂','public chamber',[['食堂', 'しょくどう', 'public chamber']]],
    ['場','place',[['場所', 'ばしょ', 'place']]],
    ['声','voice',[]],
    ['売','sell',[]],
    ['夏','summer',[]],
    ['夕','evening',[['夕食', 'ゆうしょく', 'evening']]],
    ['夜','night',[['今夜', 'こんや', 'night']]],
    ['太','fat',[]],
    ['好','like',[['お好み焼き', 'おこのみやき', 'like']]],
    ['妹','younger sister',[]],
    ['姉','older sister',[]],
    ['始','begin',[]],
    ['字','character',[['漢字', 'かんじ', 'character']]],
    ['室','room',[['和室', 'わしつ', 'room']]],
    ['家','house',[]],
    ['寒','cold',[]],
    ['屋','premise',[['居酒屋', 'いざかや', 'premise']]],
    ['工','craft',[['工事', 'こうじ', 'craft']]],
    ['市','city',[]],
    ['帰','return home',[['帰国する', 'きこく', 'return home']]],
    ['広','wide',[['広島', 'ひろしま', 'wide']]],
    ['度','degrees',[]],
    ['建','build',[['建物', 'たてもの', 'build']]],
    ['引','pull',[['引越し', 'ひっこ', 'pull']]],
    ['弟','younger brother',[]],
    ['弱','weak',[]],
    ['強','strong',[]],
    ['待','wait',[]],
    ['心','heart',[]],
    ['思','think',[]],
    ['急','hurry',[['特急', 'とっきゅう', 'hurry']]],
    ['悪','bad',[]],
    ['意','idea',[['意見', 'いけん', 'idea']]],
    ['所','place',[['休憩所', 'きゅうけいじょ', 'place']]],
    ['持','hold',[]],
    ['教','teach',[['教育', 'きょういく', 'teach']]],
    ['文','writing',[['作文', 'さくぶん', 'writing']]],
    ['料','fee',[['料金', 'りょうきん', 'fee']]],
    ['方','direction',[['夕方', 'ゆうがた', 'direction']]],
    ['旅','trip',[['旅行', 'りょこう', 'trip']]],
    ['族','tribe',[['家族', 'かぞく', 'tribe']]],
    ['早','early',[]],
    ['明','bright',[]],
    ['映','reflect',[['映画', 'えいが', 'reflect']]],
    ['春','spring',[['青春', 'せいしゅん', 'spring']]],
    ['昼','daytime',[['昼間', 'ひるま', 'daytime']]],
    ['暑','hot',[]],
    ['暗','dark',[['暗記', 'あんき', 'dark']]],
    ['曜','weekday',[['月曜日', 'げつようび', 'weekday']]],
    ['有','be',[['有名', 'ゆうめい', 'be']]],
    ['服','clothes',[['洋服', 'ようふく', 'clothes']]],
    ['朝','morning',[['朝食', 'ちょうしょく', 'morning']]],
    ['村','village',[['山村', 'さんそん', 'village']]],
    ['林','woods',[]],
    ['森','forest',[]],
    ['業','business',[['営業', 'えいぎょう', 'business']]],
    ['楽','pleasure',[]],
    ['歌','song',[]],
    ['止','stop',[['禁止', 'きんし', 'stop']]],
    ['死','death',[]],
    ['民','people',[]],
    ['池','pond',[]],
    ['注','pour',[['注文', 'ちゅうもん', 'pour']]],
    ['洋','ocean, western',[['洋食', 'ようしょく', 'ocean, western']]],
    ['洗','wash',[['洗濯', 'せんたく', 'wash']]],
    ['海','sea',[['海岸', 'かいがん', 'sea']]],
    ['漢','China',[]],
    ['牛','cow',[['牛肉', 'ぎゅうにく', 'cow']]],
    ['物','thing',[['博物館', 'はくぶつかん', 'thing']]],
    ['特','special',[['特別', 'とくべつ', 'special']]],
    ['犬','dog',[]],
    ['理','reason',[]],
    ['産','give birth',[]],
    ['用','use',[]],
    ['田','rice paddy',[]],
    ['町','town',[]],
    ['画','picture',[['計画', 'けいかく', 'picture']]],
    ['界','world',[]],
    ['病','sick',[['病院', 'びょういん', 'sick']]],
    ['発','departure',[['出発', 'しゅっぱつ', 'departure']]],
    ['県','prefecture',[]],
    ['真','true',[]],
    ['着','wear / arrive',[['到着', 'とうちゃく', 'wear / arrive']]],
    ['知','know',[]],
    ['短','short',[]],
    ['研','sharpen',[]],
    ['私','me',[['私立', 'しりつ', 'me']]],
    ['秋','autumn',[]],
    ['究','research',[]],
    ['答','answer',[['解答欄', 'かいとうらん', 'answer']]],
    ['紙','paper',[['紙袋', 'かみふくろ', 'paper']]],
    ['終','end',[]],
    ['習','learn',[]],
    ['考','think about',[]],
    ['者','someone',[]],
    ['肉','meat',[['豚肉', 'ぶたにく', 'meat']]],
    ['自','oneself',[['自分', 'じぶん', 'oneself']]],
    ['色','color',[]],
    ['英','England',[['英語', 'えいご', 'England']]],
    ['茶','tea',[['茶色', 'ちゃいろ', 'tea']]],
    ['菜','vegetable',[]],
    ['薬','medicine',[]],
    ['親','parent',[['両親', 'りょうしん', 'parent']]],
    ['計','measure',[]],
    ['試','test',[]],
    ['説','theory',[['小説', 'しょうせつ', 'theory']]],
    ['貸','lend',[]],
    ['質','quality',[]],
    ['赤','red',[]],
    ['走','run',[]],
    ['起','wake up',[]],
    ['転','revolve',[]],
    ['軽','light',[]],
    ['近','near',[]],
    ['送','send',[['回送', 'かいそう', 'send']]],
    ['進','advance',[]],
    ['運','carry',[]],
    ['遠','far',[]],
    ['都','metropolis',[]],
    ['重','heavy',[]],
    ['野','field',[]],
    ['銀','silver',[['銀行', 'ぎんこう', 'silver']]],
    ['門','gates',[]],
    ['開','open',[]],
    ['院','institution',[]],
    ['集','collect',[]],
    ['青','blue',[]],
    ['音','sound',[['音節', 'おんせつ', 'sound']]],
    ['頭','head',[]],
    ['題','topic',[]],
    ['顔','face',[]],
    ['風','wind',[['台風', 'たいふう', 'wind']]],
    ['飯','meal',[]],
    ['館','public building',[]],
    ['首','neck',[]],
    ['験','test',[]],
    ['鳥','bird',[['七面鳥', 'しちめんちょう', 'bird']]],
    ['黒','black',[['黒板', 'こくばん', 'black']]],
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
    kanji.textContent = randomized[ctr][0];
    english.textContent = randomized[ctr][1];
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