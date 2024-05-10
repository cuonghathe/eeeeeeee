const video = [{
  thumb : 'pic/thumbnail-4.webp',
  chpic: 'pic/channel-4.jpeg',
  titile: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
  chname: 'Veritasium',
  stat: {
    views:'18M views',
    Udate:'4 months ago'
  }
},
{ thumb : 'pic/thumbnail-2.webp',
  chpic: 'pic/channel-4.jpeg',
  titile: 'Try Not To Laugh Challenge #9',
  chname: 'Markiplier',
  stat: {
    views:'19M views',
    Udate:'4 years ago'
  }
},
{ thumb : 'pic/thumbnail-2.webp',
  chpic: 'pic/channel-4.jpeg',
  titile: 'Try Not To Laugh Challenge #9',
  chname: 'Markiplier',
  stat: {
    views:'19M views',
    Udate:'4 years ago'
  }
},
{ thumb : 'pic/thumbnail-2.webp',
  chpic: 'pic/channel-4.jpeg',
  titile: 'Try Not To Laugh Challenge #9',
  chname: 'Markiplier',
  stat: {
    views:'19M views',
    Udate:'4 years ago'
  }
}
];

let videoHTML ='';

video.forEach((video)=>{
  videoHTML += `
    <div class="video">
    <div>
      <img class="thumb" src="${video.thumb}">
    </div>

    <div class="video-titile">
      <div class="chapic">
        <img class="chapc" src="${video.chpic}">
      </div>

      <div class="vidinfo">
        <p class="titile">
          ${video.titile}
        </p>
        <p class="name">
          ${video.chname}
        </p>
        <p class="stat">
          ${video.stat.views} · ${video.stat.Udate}
        </p>
      </div>
    </div>
  </div>
`;
});

console.log(videoHTML);

