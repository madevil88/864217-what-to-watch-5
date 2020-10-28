const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomDate = () => {
  const currentDate = new Date();
  return new Date(currentDate.setHours(getRandomInteger(-1, -20000)));
};

export default [
  {
    text: `I think it's gonna be The Hill's Have Eyes tonight. The missus saw the trailer for the remake last night, and after a comment by me about yet another old film being butchered she's decided she wants to see the original.`,
    rating: 8.9,
    firstName: `Martin`,
    secondName: `Imber`,
    date: getRandomDate()
  }, {
    text: `I'm working through the Arnie back-catalogue I received today. Just watched True Lies, now on Eraser`,
    rating: 8.0,
    firstName: `Racquel`,
    secondName: `Darrian`,
    date: getRandomDate()
  }, {
    text: `Watched House Of Flying Daggers last night, the first film i've watched since i got a new surround system, and was suitably impressed. So tonight i'll be looking through my collection trying to decide which film would have the best 5.1 soundtrack, and that's what i'll be watching.`,
    rating: 8.0,
    firstName: `Wilde`,
    secondName: `Karde`,
    date: getRandomDate()
  }, {
    text: `Tonight mathew i will Maybe be watching some family guy (watching them all again, halfway through Season 2) That or Firefly (wife watched serenity, but wasnt that keen, so trying to get her to watch the original series, before we watch it again.. And maybe desparate houswives at 10.. i mean the wife will be watching it i will mearly be peering over the laptop..`,
    rating: 7.2,
    firstName: `Jaym`,
    secondName: `Zee`,
    date: getRandomDate()
  }, {
    text: `I'm off to see the parallax view at the glasgow film theatre ...... haven't seen it for years but i rememeber it being good, thought it would be cool to see it on the big screen..... ahhh i love those american 70's paranoid conspiracy flicks`,
    rating: 7.6,
    firstName: `Harry`,
    secondName: `Potter`,
    date: getRandomDate()
  }, {
    text: `Really enjoyed parallax view, hadn't seen it for a long time, still just as good as i rememebered it......gonna have to watch the conversation this week, very similar in tone to parallax`,
    rating: 7.0,
    firstName: `Tom`,
    secondName: `Hanks`,
    date: getRandomDate()
  }, {
    text: `Tonight me and the wife are going to sit down and watch Don't Say a Word, with Michael Douglas and Shaun Bean in it. Not seen this yetand not read a lot about it so hopefully its good.`,
    rating: 7.7,
    firstName: `Jack`,
    secondName: `Nicholson`,
    date: getRandomDate()
  }, {
    text: `Seriously though. I gave it another go tonight and have to say I thoroughly enjoyed it. I would recommend it to anyone who liked AvP or Pitch Black. Looks like I'll have to watch The Decent pretty soon now.`,
    rating: 8.3,
    firstName: `Harrison`,
    secondName: `Ford`,
    date: getRandomDate()
  }, {
    text: `I love the films and would snap up anything new. Thanx in advance`,
    rating: 7.7,
    firstName: `Penelope`,
    secondName: `Cruz`,
    date: getRandomDate()
  }, {
    text: `After being shocked by Cannibal Holocaust I didnt watch any off the above,decided on Million Dollar Baby which was equally shocking for other reasons.What a fantastic movie,very moving.`,
    rating: 8.1,
    firstName: `Jennifer`,
    secondName: `Aniston`,
    date: getRandomDate()
  }
];
