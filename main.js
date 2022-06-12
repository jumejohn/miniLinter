let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');
//console.log(storyWords.length);

//console.log(storyWords);

let betterWords = storyWords.filter( function( el ) {
    return !unnecessaryWords.includes( el );
  } );
//console.log(betterWords);

let overusedCounter1 = 0;
let overusedCounter2 = 0;
let overusedCounter3 = 0;
const overusedBetterWords = betterWords.forEach(betterWord => {
  if (betterWord === overusedWords[0]) {overusedCounter1++;}
  if (betterWord === overusedWords[1]) {overusedCounter2++;}   
  if (betterWord === overusedWords[2]) {overusedCounter3++;}
});
//console.log(`There are ${overusedCounter1} "really" ${overusedCounter2} "very", and ${overusedCounter3} "basically" in this story.`);

let sentenceCount = 0;
const sentenceBetterWords = betterWords.forEach(sentence =>{
    if (sentence.includes('.')){sentenceCount++;}
    else if (sentence.includes('!')) {sentenceCount++;}
});
 //console.log(`There are ${sentenceCount} sentences in this story.`);

var storyStats = () => {
    let length = betterWords.length;
    console.log(`There are ${length} words in this story.`);
    console.log(`There are ${overusedCounter1} "really" ${overusedCounter2} "very", and ${overusedCounter3} "basically" in this story.`);
    console.log(`There are ${sentenceCount} sentences in this story.`);
    console.log(betterWords.join(' '));
};

storyStats();
