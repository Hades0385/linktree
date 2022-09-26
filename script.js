const msg = [
    "Sometime ever, sometime never.<br> 相聚有時，後會無期。 ",
    'Don’t let the past steal your present.<br> 只要開始，雖晚不遲。',
    'Better late than never. <br>別讓過去悄悄偷走了你的當下。',
    'Stars can’t shine without darkness.<br> 如果沒有黑暗，星星如何閃耀。',
    'If you aim at the moon, even if you are lost, you will fall between the stars. <br>如果你瞄準月亮，即使迷失了，你仍會落在星河之間。',
    'Actually I wanted to say on that day, shall we never get apart, OK? <br>其實，那天我想說的是，“我們永遠不要分開了好不好？”',
    'Without you, my life don’t know how to describe.<br> 沒有妳，我的生活不知道該怎樣去形容。',
    'First I need your hand, then forever can begin.<br> 我需要牽著妳的手，才能告訴妳什麼是永遠',
    'Happiness can be found even in the darkest of times.<br> 即使在最黑暗的日子裡，也能尋到幸福。',
    'Forget others’ faults by remembering your own. <br>想想自己的錯，會忘卻別人的過。',
    'Fading is true while flowering is past. <br>凋謝是真實的，盛開只是一種過去',
    'I don’t know what to say, I’m just thinking of you a lot at this moment. <br>我不知道該說什麼，我只是突然在這一刻，很想妳。',
    'You complete me. <br> 妳使我人生完整。',
    'To the world you may be just one person. To the person you may be the world.<br>對這世界來說，妳也許只是某個人；但對某個人來說，妳卻是全世界。',
    'If I know what love is, it is because of you.<br> 因為妳，我懂得了愛。',
    'I’ll think of you every step of the way.<br> 我會想妳，在漫漫長路的每一步。',
    'Passionate love is a quenchless thirst.<br> 熱烈的愛情是不可抑制的渴望。',
    'Life is the flower for which love is the honey. <br>生命如花，愛情是蜜。',
    'Love is not only a sentiment but also an art.<br> 愛情不僅僅是感情，它也是藝術。',
    'Being with you is like walking on a very clear morning.<br> 和妳在一起就像在一個清爽的早晨漫步。',
    'You are everything when you are with me, and everything is you when you are not.<br> 跟妳在一起時，妳是一切，妳不在時，一切是妳！',
    'If i could rearrange the alphabet, i’d put y and i together. <br>如果我能重新來排列字母，我要把y（妳）跟i（我）在一起。',
    'No words are necessary between two loving hearts.<br> 兩顆相愛的心之間不需要言語。',
    'Every day without you is like a book without pages.<br> 沒有妳的日子就像一本沒有書頁的書。',
]
const randomMsg1 = msg[Math.floor(Math.random() * msg.length)];
document.getElementById("msg").innerHTML = randomMsg1