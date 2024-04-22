/*
TEMPLATE
english
kanji
[
    [kanji, hiragana, english]
]

['','',[['','',''],['','',''],['','',''],]],
kurang lebih ini formatnya
['kanji','english',[['kanji1','hiragana1','english1'],['kanji2','hiragana2','english2'],['','',''],]]

INI EXAMPLE NYA
['','',''],
*/
const library_n5 = [
    ['一','one',[['一月','いちがつ','January'],['一人', 'ひとり', 'one'],]],
    ['二','two',[['二月','にがつ','February'],['二人', 'ふたり', 'two'],]],
    ['三','three',[['三月', 'さんがつ', 'March'],]],
    ['四','four',[['四月', 'しがつ', 'April'],]],
    ['五','five',[['五月','ごがつ','May'],['五分', 'ごふん', 'five minutes'],]],
    ['六','six',[['六月','ろくがつ','June'],['六番','ろくばん','number six'],]],
    ['七','seven',[['七月','しちがつ','July'],]],
    ['八','eight',[['八月','はちがつ','August'],]],
    ['九','nine',[['九月','くがつ','September'],]],
    ['十','ten',[['十月','じゅうがつ','October'],]],

    ['百','hundreds',[['百年','ひゃくねん','100 years'],]],
    ['千','thousand',[['千円','せんえん','1000 yen'],]],
    ['万','ten thousand',[['せんまん','千万','10 million'],['万引き','まんびき','shoplifter'],]],
    ['父','father',[['お父さん', 'おとうさん', 'father'],]],
    ['母','mother',[['お母さん', 'おかあさん', 'mother'],]],
    ['友','friend',[['友だち', 'ともだち', 'friend'], ['友人', 'ゆうじん', 'friend'],]],
    ['女','woman',[['女性', 'じょせい', 'woman'], ['女の子', 'おんなのこ', 'girl'],]],
    ['男','man',[['男性', 'だんせい', 'man'], ['男の子', 'おとこのこ', 'boy'],]],
    ['人','person',[['日本人', 'にほんじん', 'japanese'],['外国人','がいこくじん','foreigner'],]],
    ['子','child',[['子ども', 'こども', 'child'],['椅子','いす','chair'],]],

    ['日','sun',[['日曜日', 'にちようび', 'Sunday'], ['休日', 'きゅうじつ', 'holiday'],]],
    ['月','month; moon',[['月曜日', 'げつようび', 'Monday'], ['月光','げっこう', 'moonlight'], ['一ヶ月', 'いっかげつ', 'once a month'],]],
    ['火','fire',[['火曜日', 'かようび', 'Tuesday'], ['花火', 'はなび', 'fireworks'],['火山','かざん','volcano'],]],
    ['水','water',[['水曜日', 'すいようび', 'Wednesday'],['洪水','こうずい','flood'],['水着','みずぎ','swimsuit'],]],
    ['木','tree',[['木曜日', 'もくようび', 'Thursday'],]],
    ['金','gold',[['金曜日', 'きんようび', 'Friday'], ['お金', 'おかね', 'money'],['金魚','きんぎょ','goldfish'],]],
    ['土','earth',[['土曜日', 'どようび', 'Saturday'],['土産','みやげ','present'],]],
    ['本','book',[['日本', 'にほん', 'Japan'], ['本屋', 'ほんや', 'book store'],['脚本','きゃくほん','script'],]],

    ['休','rest',[['夏休み', 'なつやすみ', 'summer vacation'], ['運休', 'うんきゅう', 'service suspended'],]],
    ['語','language',[['日本語', 'にほんご', 'Japanese'], ['英語', 'えいご', 'English'], ['物語', 'ものがたり', 'story; legend'],]],
    ['年','year',[['一年', 'いちねん', 'one year'], ['今年', 'ことし', 'this year'],['来年','らいねん','next year'],]],
    ['午','noon',[['午後','ごご','afternoon; p.m.'],['午前','ごぜん','morning; a.m.'],['正午', 'しょうご', 'noon; mid-day'],]],
    ['前','before',[['お前', 'おまえ', 'you (informal)'],['以前','いぜん','before this'],['気前','きまえ','generosity'],]],
    ['後','last',[['後ろ', 'うしろ', 'back'],['以後','いご','after this'],]],
    ['時','time',[['時間', 'じかん', 'hour'],['時間割り','じかんわり','schedule'],]],
    ['間','interval',[['三時間', 'さんじかん', 'three hours'],['間も無く','まもなく','soon'],['間違い','まちがい','mistake'],]],
    ['毎','every',[['毎日', 'まいにち', 'every day'],['毎晩','まいばん','every night'],]],
    
    ['先','previous',[['先生', 'せんせい', 'teacher'],['真っ先','まっさき','the beginning'],]],
    ['今','now',[['今日', 'きょう', 'today'],['今後','こんご','from now on'],]],
    ['何','what',[['何か', 'なんか', 'something'],]],
    ['上','above',[['上手', 'じょおず', 'good at'],['屋上','おくじょう','rooftop'],['海上','かいじょう','above sea'],]],
    ['下','below',[['不思議', 'ふしぎ', 'weird'],]],
    ['左','left',[['左足', 'ひだりあし', 'left foot'],]],
    ['右','right',[['右手', 'みぎて', 'right hand'],]],

    ['北','north',[['北海道', 'ほっかいどう', 'Hokkaido'],['東北','とうほく','northeast'],['北西','ほくせい','northwest'],]],
    ['南','south',[['南部', 'なんぶ', 'southern part'],['南極','なんきょく','south pole'],['南西','みなみにし','southwest'],]],
    ['東','east',[['東京', 'とうきょう', 'Tokyo; eastern capital'],['東部','とうぶ','eastern part'],]],
    ['西','west',[['関西', 'かんさい', 'Kansai'],['西洋','せいよう','the west'],]],

    ['外','foreign',[['外国人', 'がいこくじん', 'foreigner'],['意外','いがい','unexpected'],['海外','かいがい','overseas'],]],
    ['名','name',[['名前', 'なまえ', 'name'],['有名','ゆうめい','famous'],['署名','しょめい','signature'],]],
    ['高','high',[['高い','たかい','high; tall'],['高校生', 'こうこうせい', 'high school student'],]],
    ['小','little',[['小学校', 'しょうがっこう', 'primary school'],['最小','さいしょう','least'],['小雨','こあめ','light rain'],]],
    ['中','inside',[['真夜中','まよなか','midnight'],['中学校', 'ちゅうがっこう', 'middle school'],['空中','くうちゅう','in the air'],]],
    ['大','big',[['大学', 'だいがく', 'university'], ['大阪', 'おおさか', 'Osaka'],['巨大','きょだい','huge'],]],

    ['長','long; leader',[['長い','ながい','long'],['会長','かいちょう','chairman'],]],
    ['半','half',[['半分', 'はんぶん', 'half'],['後半','こうはん','second half'],['大半','たいはん','majority'],]],
    ['分','part; minute',[['三分', 'さんぶん', '3 minutes'],]],
    ['学','learn',[['学校', 'がっこう', 'school'],['科学','かがく','science'],]],
    ['校','school',[['校舎', 'こうしゃ', 'school building'],['校長','こうちょう','principal'],]],
    ['生','life',[['生きる','いきる','to live'],['誕生日', 'たんじょうび', 'birthday'],['生まれ','うまれ','to give birth'],]],
    ['山','mountain',[['富士山', 'ふじさん', 'Mount Fuji'],['山登り','やまのぼり','mountain climbing'],]],
    ['川','river',[['川口', 'かわぐち', 'mouth of river'],['河川','かせん','rivers'],]],
    ['白','white',[['白鳥','はくちょう','swan'],['空白','くうはく','empty void'],['告白','こくはく','confession'],]],

    ['天','heaven',[['天気', 'てんき', 'weather'],['天才','てんさい','genius'],]],
    ['雨','rain',[['雨天','うてん','rainy weather'],['雨漏り','あまもり','roof leak'],]],
    ['電','electricity',[['電話', 'でんわ', 'phone'], ['電車', 'でんしゃ', 'train'],]],
    ['気','feeling',[['空気', 'くうき', 'air'],['気持ち','きもち','feeling'],]],
    ['車','car',[['自転車', 'じてんしゃ', 'bicycle'],]],
    ['国','country',[['中国', 'ちゅうごく', 'China'],['外国','がいこく','foreign country'],]],
    ['円','circle; yen',[['百円', 'ひゃくえん', '100 yen'],]],
    
    ['話','to speak',[['会話', 'かいわ', 'conversation'],['神話','しんわ','myth; legend'],]],
    ['聞','to hear',[['聞かす','きかす','to inform about'],['新聞', 'しんぶん', 'newspaper'],]],
    ['食','to eat',[['食べる','たべる','to eat'],['食べ物', 'たべもの', 'food'],['会食','かいしょく','dining together'],]],
    ['読','to read',[['読み方', 'よみかた', 'way of reading'],['句読点','くとうてん','punctuation mark(s)'],['読み書き','よみかき','reading and writing'],]],
    ['来','to come',[['未来', 'みらい', 'future'],['以来','いらい','since'],['元来','げんらい','originally'],]],
    
    ['書','to write',[['教科書','きょうかしょ','textbook'],['願書', 'がんしょ', 'written application'],['原書','げんしょ','original document'],]],
    ['見','to see',[['意見','いけん','opinion'],['花見','はなみ','flower seeing'],['会見','かいけん','interview; audience'],]],
    ['行','to go',[['旅行', 'りょこう', 'trip'],['急行','きゅうこう','express'],['刊行','かんこう','publication; issue'],]],
    ['出','to go out',[['出口', 'でぐち', 'exit'],['家出','いえで','leaving home'],]],
    ['入','to go in',[['入口', 'いりぐち', 'entrance'],]],
    ['会','to meet',[['会社', 'かいしゃ', 'company'],['会議','かいぎ','meeting; conference'],['会員','かいいん','member'],]],

    ['友','friend',[['友だち','ともだち','friend'],['親友','しんゆう','close friend'],['友情','ゆうじょう','friendship'],]],
    ['古','old',[['古代','こだい','ancient times'],['稽古','けいこ','practice; training'],['古典','こてん','old book; classics'],]],
    ['多','many',[['多少','たしょう','more or less'],['多数','たすう','countless'],]],
    ['安','cheap',[['安心','あんしん','relief'],['安全','あんぜん','safety'],['安定','あんてい','stability'],]],
    ['店','store',[['喫茶店','きっさてん','coffee shop'],['書店','しょてん','bookstore'],['開店','かいてん','grand opening'],]],
    ['手','hand',[['握手','あくしゅ','handshake'],['下手','へた','unskillful'],['運転手','うんてんしゅ','driver'],]],
    ['新','new',[['新しい','あたらしい','new'],['革新','かくしん','reform; innovation'],['新刊','しんかん','new book'],]],
    ['社','company',[['会社','かいしゃ','company'],['社会','しゃかい','society'],['支社','ししゃ','branch office'],]],
    ['','',[]],

    ['空','sky',[['空っぽ','からっぽ','emptiness'],['架空','かくう','aerial'],['空地','くうち','vacant land'],]],
    ['耳','ear',[['耳障り','みみざわり','hurting one\'s ear'],['耳許','みみもと','close to the ear'],]],
    ['立','to stand',[['起立','きりつ','standing up'],['逆立ち','さかだち','handstand'],]],
    ['花','flower',[['花嫁','はなよめ','bride'],['花束','はなたば','bouquet'],]],
    ['言','to say',[['言葉','ことば','words'],['言い出す','いいだす','to start talking'],['言い方','いいかた','speaking style'],]],
    ['買','to buy',[['購買','こうばい','purchase'],['買収','ばいしゅう','corruption'],['売買','ばいばい','trade'],]],
    ['週','week',[['今週','こんしゅう','this week'],['週間','しゅうかん','weekly'],['週末','しゅうまつ','weekend'],]],
    ['道','road',[['横断歩道','おうだんほどう','pedestrian'],['回り道','まわりみち','detour'],['街道','かいどう','highway'],]],
    ['足','foot',[['駆け足','かけあし','running fast'],['手足','てあし','one\'s hand and feet'],['足し算','たしざん','audition'],]],
    ['飲','drink',[['飲物','drink; beverage',''],]],
    ['駅','station',[['駅員','えきいん','station attendant'],['駅長','えきちょう','station master'],['駅弁','えきべん','station lunch box'],]],
    ['魚','fish',[['金魚','きんぎょ','goldfish'],]],



];