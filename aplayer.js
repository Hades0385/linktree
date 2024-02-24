const ap = new APlayer({
    container: document.getElementById('player'),
    //lrcType: 1,
    listFolded: true,
    audio: [
            {
                name:'僕は...',
                artist: 'あたらよ',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1200619736002723990/ca4f6bc76bd6c02a.mp3?ex=65e286c3&is=65d011c3&hm=a25a0dea0d57f32088b656561669090680614942ad707af047d7e179172a85d1&',
                cover: 'https://www.uta-net.com/libs/cacheimg.php?p=kashi&f=350000/348810.jpg',
                lrc: '',
            },
            {
                name:'恋ダコ',
                artist: 'Lefty Hand Cream',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1175298316947431464/love_callus.mp3?ex=65e2b15a&is=65d03c5a&hm=080bcda19ce9b89218bd78c5240c3ba33b84d69f9c409d379f319cea3f1c305c&',
                cover: 'https://www.uta-net.com/libs/cacheimg.php?p=kashi&f=330000/327169.jpg',
                lrc: ''
            },
            {
                name:'Wherever you are',
                artist: 'cover by Kobasolo',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1109304959482208338/Wherever_you_are_Kobasolo_.mp3?ex=65e28d40&is=65d01840&hm=76f3388e84df846f9a8c8e9f5bc3b7c36c4006ede8902738d7516a96a52152e7&',
                cover: 'https://i.kfs.io/album/tw/328901,0v3/fit/500x500.jpg',
                lrc: '[00:00]曲名:Wherever you are[00:00.50]演唱者：ONE OK ROCK[00:01.00]作詞：Taka[00:01.50]作曲：Taka[00:02.00]Cover by Kobasolo & Lefty Hand Cream[00:02.96]I\'m telling you(我要跟妳說)[00:08.00]I softly whisper(讓我輕聲傾訴)[00:11.40]Tonight tonight(今晚，就在今晚)[00:19.10]You are my angel(妳是我的天使)[00:24.50]愛してるよ(我愛妳)[00:30.00]2人は一つに(兩個人合而為一)[00:34.10]Tonight tonight(今晚，就在今晚)[00:41.10]I just say…(我只是想說...)[00:44.30]Wherever you are,(無論妳在哪裡)[00:46.00]I\'ll always make you smile(我會永遠讓妳微笑)[00:50.00]Wherever you are,(無論妳在哪裡)[00:51.90]I\'m always by your side(我會永遠陪在妳身旁)[00:55.10]Whatever you say,君を思う 気持ち(無論妳說 妳的心意是什麼)[01:01.40]I promise you "forever" right now(我現在就對妳承諾『永遠』)[01:14.00]I don\'t need a reason(我不需要任何理由)[01:19.70]I just want you baby(我是真的需要妳 baby)[01:23.50]Alright alright(是的，沒錯)[01:30.70]Day after day(每日每夜)[01:36.00]この先長いことずっと(未來這漫長的路途)[01:41.50]どうかこんな僕とずっと(請和這樣的我一起)[01:45.50]死ぬまで stay with me(直到死亡來臨前 陪在我身邊好不好)[01:52.50]We carry on…(我們一起走下去...)[01:58.80]Wherever you are,(無論妳在哪裡)[02:00.30]I\'ll always make you smile(我會永遠讓妳微笑)[02:04.20]Wherever you are,(無論妳在哪裡)[02:06.10]I\'m always by your side(我會永遠陪在妳身旁)[02:09.90]Whatever you say,君を思う 気持ち(無論妳說 妳的心意是什麼)[02:15.70]I promise you "forever" right now(我現在就對妳承諾『永遠』)[02:20.70]Wherever you are,(無論妳在哪裡 )[02:22.50]I never make you cry(我絕不會讓你哭泣)[02:26.00]Wherever you are,(無論妳在哪裡)[02:27.90] I never say goodbye(我絕不會離開妳)[02:32.00]Whatever you say, 君を思う氣持ち(無論妳說 妳的心意是什麼)[02:37.90]I promise you "forever" right now(我現在就向妳承諾 直到永遠)[02:43.20]僕らが出逢った日は2人にとって(我們相遇的那天 )[02:48.30]一番目の記念すべき日だね(對兩人來說是最值得紀念的日子吧)[02:54.50]そして今日という日は2人にとって(而今天 對我們來說 )[03:00.00]二番目の記念すべき日だね(是第二個最值得紀念的日子 對吧)[03:32.80]心から愛しい人(打從心底去愛的人)[03:38.00]心から愛せる人(打從心裡愛著的人)[03:43.78]この僕の愛の真ん中には(因為住在我心底最深處)[03:49.90]いつも心(きみ)がいるから(始終都是你)[03:54.50]Wherever you are,(無論妳在哪裡)[03:56.30]I\'ll always make you smile(我會永遠讓妳微笑)[04:00.00]Wherever you are,(無論妳在哪裡)[04:01.80]I\'m always by your side(我會永遠陪在妳身旁)[04:05.88]Whatever you say,君を思う 気持ち(無論妳說 妳的心意是什麼)[04:11.70]I promise you "forever" right now(我現在就對妳承諾『永遠』)[04:22.00]Wherever you are(無論妳在哪裡)[04:28.00]Wherever you are(無論妳在哪裡)[04:34.00]翻譯/來源:https://youtu.be/l-XRDlV08Uw?list=RDl-XRDlV08Uw'
            },
            {
                name:'数センチメンタル',
                artist: 'こはならむ',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1097507039518924910/ed.mp3?ex=65e5c614&is=65d35114&hm=d20435097474fba2b5b51e273a4f153b03b9b5d178be9cec5a06a2e98f4d11c0&',
                cover: 'https://linkstorage.linkfire.com/medialinks/images/d5b4bff0-75fe-4ca8-b57c-eebd88280754/artwork-440x440.jpg',
                lrc: '[00:00]曲名:数センチメンタル(幾度感傷)\n[00:02]演唱者: こはならむ\n[00:04]作詞:タカノシンヤ・KERENMI\n[00:06]作曲：KERENMI\n[00:08]字幕 : 碧幻Bihuan / 翻譯 : Bass Punch\n[00:09.450]近づきそうな距離でも(即便距離看似近在咫尺)\n[00:13.058]わからなくなる夕暮れ(卻依舊無法理解的黃昏)\n[00:17.262]迷い込んでいる 迷路の(那使我逐漸迷失其中迷宮的)\n[00:21.262]出口はどこか(出口究竟在哪)\n[00:25.195]異常が日常になって(異常已儼然成為了日常)\n[00:27.439]反則だ　待て待て(犯規啊 等一下等一下)\n[00:29.564]別に どうでもいい(無所謂 反正跟我沒關係)\n[00:31.311]素直になれない(無法變得更坦白點)\n[00:34.119]いつまでも このままでいたいかも(一直以來總覺得 也許會這樣直到永遠)\n[00:38.034]そんな気持ちは溶けた(但那樣的情感早已煙消雲散)\n[00:42.536]僕らは探してた(我們所尋找的那)\n[00:46.826]お揃いの心を(靈犀相通的心)\n[00:50.651]僕らは交わしてた(我們彼此間所交換著的)\n[00:54.636]まとまらないセリフを(參差零亂的對白)\n[00:59.024]触れたい手の熱が(觸碰手心的熱量)\n[01:02.912]心まで届いて(直直傳達內心)\n[01:07.126]僕は背伸びしてた(我緩緩踮起腳尖)\n[01:11.075]大人びてる君を見て(看望著似已長高成人的你)\n[01:14.976]知りたいんだ(還想了解更多)\n[01:16.904]君のこと(有關你的事)\n[01:18.693]近づきたくて(想再靠的近一點)\n[01:20.701]夢じゃ足りなくて(若只是夢的話還不夠啊)\n[01:22.603]心が痛くて(心有點痛啊)\n[01:25.085]もっと(再更多一些啊)\n[01:36.157]自覚芽生えそうかも(自我意識中好像萌生了甚麼)\n[01:40.263]わかりかけてきてる(似懂又非懂般)\n[01:44.765]迷い込んでいる迷路に日差しがさした(陽光照入了那使我迷失方向的迷宮)\n[01:52.627]自分はどうしたいんだっけ(自己究竟想做些甚麼)\n[01:54.696]気持ちの持ちようだって(心中該抱持著些甚麼想法)\n[01:56.96]記憶のかけらを拾い集めてた(蒐集撿起那散落的記憶碎片)\n[02:01.388]いつまでもこのままでいちゃダメだ(才發現到這樣繼續下去是行不通的)\n[02:05.153]時計の針進めた(時鐘的指針不斷前擺)\n[02:12.00]僕らは探してた(我們所尋找的那)\n[02:16.091]お揃いの心を(靈犀相通的心)\n[02:20.336]僕らは交わしてた(我們彼此間所交換著的)\n[02:24.262]まとまらないセリフを(參差零亂的對白)\n[02:28.369]重ねた手の熱が(重疊手心的熱量)\n[02:32.526]心まで届いて(直直傳達內心)\n[02:36.47]僕ら駆け出してた(我們盡情的奔馳著)\n[02:40.577]茜色の空を背に(背向那茜紅浸染的天空)\n[02:44.52]知りたいんだ(還想知道更多)\n[02:46.305]この先も(從此以後)\n[02:48.25]近づきたくて(想再靠的近一點)\n[02:50.212]夢じゃ足りなくて(若只是夢的話還不夠啊)\n[02:52.184]心が痛くて(心有點痛啊)\n[02:54.719]もっと(想再多一些)\n[02:56.23]近づきたくて(想再靠的近一點)\n[02:58.38]近くにいたくて(只想你待在身旁)\n[03:00.347]心が見たくて(想要一窺你的內心)\n[03:02.758]もっと(想再多一些)\n[03:04.384]言葉にしたくて(全化作言語傾訴)\n[03:07.082]字幕 : 碧幻Bihuan / 翻譯 : Bass Punch\n[03:08.418]來源:https://youtu.be/cjkkFFF2N0k'
            },
            {
                name:'小さな恋のうた Piano ver',
                artist: '椎名真昼',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1094085096803414036/Little_Love_Song.mp3?ex=65e28da6&is=65d018a6&hm=8650e248a6d63b3d66197e90c9a6c021c8e9901c79bb6d37db125ba9bbb4f9a9&',
                cover: 'https://cdn.discordapp.com/attachments/972483073717465149/1094076327730094090/ab67616d0000b27333c656eee25e1e3cfd13a0cc.png',
                lrc: '[00:00]曲名:小さな恋のうた(小小戀歌)Piano ver\n[00:03]演唱者:椎名真昼\n[00:06]作詞:上江洌清作\n[00:09]作曲:MONGOL800\n[00:12.680]広い宇宙の数あるひとつ(廣闊的宇宙當中)\n[00:17.241]青い地球の広い世界で(藍色的地球的廣闊世界)\n[00:22.022]小さな恋の思いは届く(小小戀愛的思念)\n[00:26.627]小さな島のあなたのもとへ(傳達到在那細小島嶼的你身上)\n[00:32.333]あなたと出会い時は流れる(和你相遇之時)\n[00:36.870]思いを込めた手紙も増える(思念的信件與日俱增)\n[00:41.441]いつしか二人 互いに響く(不知不覺間我們互相影響著)\n[00:45.879]時に激しく 時に切なく(時而激烈地　時而難過)\n[00:50.551]響くは遠く遥かかなたへ(溫柔的歌迴響到遙遠的遠方)\n[00:54.855]やさしい歌は世界を変える(連世界也改變了)\n[01:02.763]ほら あなたにとって(看吧，對你來說重要的人)\n[01:06.366]大事な人ほど すぐそばにいるの(就是可以一直在身邊)\n[01:11.672]ただ あなたにだけ届いて欲しい(只是現在我最想送給你的)\n[01:17.477]響け恋の歌(就是唱這戀愛之歌)\n[01:20.614]ほら(看吧)\n[01:25.085]ほら(看吧)\n[01:29.490]ほら(看吧)\n[01:34.261]響け恋の歌(唱這首戀愛之歌)\n[01:36.930]あなたは気付く 二人は歩く(你還記得我們二人漫步)\n[01:40.634]暗い道でも日々照らす月(在月亮照射下的黑暗道路上)\n[01:45.005]握りしめた手 離すことなく(我們緊握著手說要永不分離)\n[01:49.376]思いは強く 永遠誓う(強烈地發誓永遠也要這樣)\n[01:53.814]永遠の淵 きっと僕は言う(就像不變的河川對於我而言)\n[01:58.251]思い変わらず同じ言葉を(已想不到其他的言詞)\n[02:02.689]それでも足りず(儘管如此也不足夠)\n[02:04.958]涙に変わり 喜びになり(就將它變成眼淚變成喜悅)\n[02:09.363]言葉にできず(如果說話會傷害人的話)\n[02:11.465]ただ抱きしめる ただ抱きしめる(那就改變成擁抱吧　改變成擁抱吧)\n[02:19.139]ほら あなたにとって(看吧，對你來說重要的人)\n[02:22.843]大事な人ほど すぐそばにいるの(就是可以一直在身邊)\n[02:28.181]ただ あなたにだけ届いて欲しい(只是 現在我最想送給你的)\n[02:33.987]響け恋の歌(就是唱這戀愛之歌)\n[02:37.090]ほら(看吧)\n[02:41.528]ほら(看吧)\n[02:45.999]ほら(看吧)\n[02:50.771]響け恋の歌(唱這首戀愛之歌)\n[02:57.311]夢ならば覚めないで(如果夢就此不醒來)\n[03:06.286]あなたと過ごした時 永遠の星となる(能夠和你一直一起　就像那永恆的星星)\n[03:15.062]ほら あなたにとって(看吧，對你來說重要的人)\n[03:18.565]大事な人ほど すぐそばにいるの(就是可以一直在身邊)\n[03:23.837]ただ あなたにだけ届いて欲しい(只是 現在我最想送給你的)\n[03:29.610]響け恋の歌(就是唱這戀愛之歌)\n[03:32.713]ほら あなたにとって(看吧，對你來說重要的人)\n[03:36.316]大事な人ほど すぐそばにいるの(就是可以一直在身邊)\n[03:41.588]ただ あなたにだけ届いて欲しい(只是 現在我最想送給你的)\n[03:47.461]響け恋の歌(就是唱這戀愛之歌)\n[03:50.597]ほら(看吧)\n[03:54.902]ほら(看吧)\n[03:59.473]ほら(看吧)\n[04:03.977]響け恋の歌(就是唱這戀愛之歌)\n[04:08]演奏、字幕:https://youtu.be/wIYhtsFxDRI'
            },
        /*  {
                name:'アイドル(偶像)',
                artist: 'YOASOBI',
                url: 'https://cdn.discordapp.com/attachments/875012646540283924/1096707598092357772/Idol_YOASOBI_OP.mp3',
                cover: 'https://www.uta-net.com/libs/cacheimg.php?p=kashi&f=340000/335761.jpg',
                lrc: '[00:00]曲名:アイドル(偶像)\n[00:01.60]演唱者:YOASOBI[00:02.90]作詞・作曲・編曲:Ayase\n[00:04.21]無敵の笑顔が荒らすメディア(展露無敵的笑容風靡媒體)\n[00:07.21]知らないその秘密ミステリアス(渴望知曉的秘密充滿神秘)\n[00:10.00]抜けてるとこさえ彼女のエリア(縱使是那脫穎而出之處 也是她的領域)\n[00:13.00]完璧で嘘つきな君は(完美無瑕卻謊話連篇的你)\n[00:15.79]天才的なアイドル様(天才橫逸的偶像大人)\n[00:21.08]今日何食べた？ 好きな本は？(今天吃了甚麼？喜歡的書是？)\n[00:24.17]遊びに行くならどこに行くの？(如果要出去玩會到哪裡去呢？)\n[00:26.96]何も食べてない、それは内緒("我什麼也沒吃"、"那是秘密")\n[00:30.00]何を聞かれてものらりくらり(被問到任何事情都要模稜兩可)\n[00:32.54]そう淡々と、だけど燦々と(淡然地，卻又燦然地)\n[00:35.38]見えそうで見えない秘密は蜜の味(散發著甜蜜香氣的 那似是而非的秘密)\n[00:38.33]あれもないないない(絕對不可能會是那樣)\n[00:39.79]これもないないない(也不可能會是這樣發展)\n[00:41.21]好きなタイプは？相手は？(喜歡的類型是？對象呢？)\n[00:42.92]さあ答えて(來 回答吧)\n[00:44.21]誰かを好きになること(喜歡上某個人這種事)\n[00:47.17]なんて私わからなくてさ(連我自己也不太清楚)\n[00:50.04]嘘か本当か知り得ない(是真是假亦無從得知)\n[00:52.83]そんな言葉にまた一人堕ちる(這種話語又讓一個人深陷其中)\n[00:56.58]また好きにさせる(對你死心塌地)\n[00:58.71]誰もが目を奪われてく(任誰都被奪去目光)\n[01:01.54]君は完璧で究極のアイドル(你是既完美又究極的偶像)\n[01:04.83]金輪際現れない(由始至終從未顯露)\n[01:07.38]一番星の生まれ変わり(光芒初現的星光轉世)\n[01:10.21]あぁ(啊啊)\n[01:11.08]その笑顔で愛してるって(用那份笑容訴說愛的話語)\n[01:13.83]誰も彼も虜にしていく(讓每個人都成為你的俘虜)\n[01:16.92]その瞳がその言葉が嘘でも(那雙眼眸 那些話語即使全是謊言)\n[01:19.92]それは完全な愛(但那就是完美無瑕的愛)\n[01:22.21]はいはい、あの子は特別です(是的 沒錯 那個孩子是獨一無二的)\n[01:25.29]我々は端からおまけです(而我們從最初就不過只是陪襯人物罷了)\n[01:28.21]お星様の引き立て役Bです(只是單純受到星辰所提拔的角色B而已)\n[01:31.21]すべてがあの子のおかげな訳(這都歸功於那孩子的福呀)\n[01:33.88]ない、しゃらくさい(才怪，臉皮真厚)\n[01:34.88]妬み嫉妬なんてないわけがない(怎麼可能不羡慕不妒忌)\n[01:37.08]これはネタじゃないからこそ許せない(這不是在譁眾取寵正因如此才不可饒恕)\n[01:39.21]完璧じゃない(並非十全十美)\n[01:40.38]君じゃ許せない(這樣的你無法原諒)\n[01:41.33]自分を許せない(無法原諒自己)\n[01:42.50]誰よりも強い君以外は認めない(絕不承認比誰都強大的你以外的任何人)\n[01:44.88]誰もが信じ崇めてる(任誰都信仰崇拜着你)\n[01:47.83]まさに最強で無敵のアイドル(名副其實最強無敵的偶像)\n[01:51.21]弱点なんて見当たらない(無懈可擊無可挑剔)\n[01:53.67]一番星を宿してる(埋藏着初耀星光)\n[01:56.67]弱い心って見せちゃダメダメ(軟弱的心向人展現可不行不行)\n[01:59.71]知りたくない心見せずに(對不願曝光的一面不露聲色)\n[02:02.75]唯一無二じゃなくちゃイヤイヤ(如果不是獨一無二才不要不要)\n[02:05.67]それこそ本物のアイ(這才是真正的愛)\n[02:08.71]得意の笑顔で沸かすメディア(展露拿手的笑容轟動媒體)\n[02:11.96]隠し切るこの秘密だけは(惟獨這個秘密要隱瞞到底)\n[02:14.96]愛してるってウソで積むキャリア(謊言愛語堆砌而成的職歷)\n[02:18.46]これこそ私なりのアイだ(這正是屬於我對愛的會意)\n[02:21.54]流れる汗も綺麗なアクア(流下汗水也不失優雅風範的水藍寶石(阿奎亞))\n[02:24.67]ルビーを隠したこのまぶた(以及隱藏了紅寶石(露比)的面容)\n[02:27.92]歌い踊り舞う私はマリア(載歌載舞我心中的瑪麗亞)\n[02:31.25]そう嘘はとびきりのアイだ(這種謊言可是無比的愛呀)\n[02:35.25]誰かに愛されたことも(未曾被別人所愛過)\n[02:38.29]誰かのこと愛したこともない(又或是愛上其他人)\n[02:41.75]そんな私の嘘がいつか(像這樣的我撤的謊)\n[02:45.21]ほんとになること信じてる(也終會有一天成真如此堅信着)\n[02:48.88]いつかきっと全部手に入れる(總有一天肯定能得到這一切)\n[02:51.83]私はそう欲張りのアイドル(我就是這般貪得無厭的偶像)\n[02:55.12]等身大でみんなのこと(因為我希望能不加矯飾)\n[02:57.58]ちゃんと愛したいから(真摯地愛着大家)\n[03:00.42]今日も嘘をつくの(今天亦同樣口是心非)\n[03:02.71]この言葉がいつか(但我仍然祈禱著)\n[03:04.67]ほんとになる日を願って(這些話化為真實的一日)\n[03:07.17]それでもまた君と(即便如此我仍然)\n[03:09.00]君にだけは言えずにいたけど(還未對你和妳好好訴說過便離你而去)\n[03:12.42]あぁ(啊啊)\n[03:13.00]やっと言えた(終於說出口了)\n[03:14.42]これは絶対嘘じゃない(這句沒有半分虛假的)\n[03:16.54]“愛してる”(「我愛你們」)[03:19]歌曲:https://youtu.be/m9SMT5ipbxk'
            },*/
        ]
    });