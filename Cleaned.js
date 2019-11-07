const request = require('request-promise');
const fs = require('fs');
const download = require('download');
const mkdirp = require('mkdirp');
const eventEmitter = require('events')
var originalText;
//var emitter = new eventEmitter;
var stop = false;
//var emitterC = new eventEmitter;
//emitter.on('move', runIt);
emitterB = new eventEmitter;
emitterB.on('forth', function(){
  console.log("I ran");
  console.log(originalTextArrE.length);
  if(stop){
  
    //meme.abort();
  }
  if(originalTextArrE.length > (originalTextArrD.length-5)){
    stop = true;
  };
});
try{
  originalText = fs.readFileSync('sourcefile.txt', 'utf8');
} catch(e) {
    console.error(e);
  }
var textArrFinal;
var textArrTemp;
var originalTextArrA = originalText.split("<");
var originalTextArrB = originalTextArrA.filter(item => item.startsWith("a href="));
var originalTextArrC = [];
originalTextArrB.forEach(function(item){
  originalTextArrC = originalTextArrC.concat(item.split(`"`));
});
var originalTextArrD = originalTextArrC.filter(item => item.startsWith("/p"));
var originalTextArrE = [];



function ifThisWorksImDying(){
  return new Promise(function(resolve, reject){
    resolve(function(){
      console.log("Resolving");
      return originalTextArrD.map((function(item){
          request('https://www.instagram.com' + item).then(function(htmlString){
            //if (!error && response.statusCode == 200) {
              //console.log("Got the body!"); // Show the HTML for the Google homepage.
              var bodyArr = htmlString.split("<");
              //console.log(bodyArr);
              var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
              console.log("Call back being sent!");
              console.log("getting image..");
              var modifiedTextArr = [];
              bodyArrB.map((function(item){
                modifiedTextArr = modifiedTextArr.concat(item.split(`"`));
              }));
              var textArrFinal = modifiedTextArr.filter(item => item.startsWith("https://sc"));
              textArrFinal.forEach(function(item){
                download(item, {
                  directory:'/results'
                }).then(({filename, image}) => {
                  console.log('File saved to', filename)}).catch((err) => {
                    console.warn(err);
                  });
              })
            //  return bodyArrB;

        });
        //return meme;
      }));
    }
  );
  })
}


async function megaTest(){
console.log("calling...");
var result = await ifThisWorksImDying();
console.log(result());
}

function wowThisWorks(){
  originalTextArrD.map((function(item){
     request('https://www.instagram.com' + item).then(function(htmlString){
       //if (!error && response.statusCode == 200) {
         //console.log("Got the body!"); // Show the HTML for the Google homepage.
         var bodyArr = htmlString.split("<");
         //console.log(bodyArr);
         var bodyArrB = bodyArr.filter(item => (item.startsWith(`meta property="og:image" content="`) || item.startsWith(`meta property="og:video" content="https`)));
         console.log("Call back being sent!");
         console.log("getting image..");
         console.log(bodyArrB);
         var modifiedTextArr = [];
         bodyArrB.map((function(item){
           modifiedTextArr = modifiedTextArr.concat(item.split(`"`));
         }));
         var textArrFinal = modifiedTextArr.filter(item => item.startsWith("https://sc"));
         console.log(textArrFinal);
         if(textArrFinal.length > 1){
         if(textArrFinal[0].indexOf("mp4")>-1){
         download(textArrFinal[0], './results').then(() => {
             console.log('done!');
         });
       } else {
           download(textArrFinal[1], './results').then(() => {
               console.log('done!');
         });
       }
       } else {
           download(textArrFinal[0], './results').then(() => {
               console.log('done!');
         });
           /*.then(({filename, image}) => {
             console.log('File saved to', filename)}).catch((err) => {
               console.warn(err);
             });
         }) */
       //  return bodyArrB;

}
   });
   //return meme;
 }));
}
wowThisWorks();
