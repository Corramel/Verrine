const request = require('request-promise');
const fs = require('fs');
const download = require('download');
const mkdirp = require('mkdirp');
const eventEmitter = require('events')
var originalText;
//var emitter = new eventEmitter;
var stop = false;
//var emitterC = new eventEmitter;
//emitterC.on('go', stupidNigger);
//emitter.on('move', runIt);
emitterB = new eventEmitter;
emitterB.on('forth', function(){
  console.log("I ran");
  console.log(originalTextArrE.length);
  if(stop){
    console.log("END YOU STUPID FUCK");
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
//var runMyMom = doThis();
/*function parseArray(){
return new Promise(function(resolve, reject){
  if(originalTextArrE){
  resolve(doMe());
} else {
  reject(":(");
};
})
} */
//var myPromise = parseArray();

/*myPromise.then(doThis).catch(function handleError(error){
  console.log(error);
}); */
//for(var i = 0; i < originalTextArrD.length; i++){
    //emitterC.emit('go');
    //doThis(andThenThis());
//  };
/*function andThenThis(){
  //return new Promise(resolve =>{
  var meme = request('https://www.instagram.com' + originalTextArrD[i], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("Got the body!"); // Show the HTML for the Google homepage.
        var bodyArr = body.split("<");
        //console.log(bodyArr);
        var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
        originalTextArrE.push(bodyArrB[0]);
        //console.log(originalTextArrE);
        //console.log(bodyArrB);
        emitterB.emit('forth');
      } else {
        console.warn(error);
      }
      //resolve(meme);
//    })
  });
}*/



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
/* ok main line async function doMe(){
  await originalTextArrD.forEach(function(item){
      request('https://www.instagram.com' + item, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //console.log("Got the body!"); // Show the HTML for the Google homepage.
          var bodyArr = body.split("<");
          //console.log(bodyArr);
          var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
          originalTextArrE.push(bodyArrB[0]);
          //console.log(originalTextArrE);
          //console.log(bodyArrB);
          //console.log(originalTextArrE);
          textArrTemp = originalTextArrE;
          //console.log("Call back being sent!");
          //console.log(textArrTemp);
        } else {
          console.warn(error);
        }

      });
    });
    return oPisAF;
  }
function doThis(callback){
  if(callback){
  originalTextArrD.forEach(function(item){
      request('https://www.instagram.com' + item, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //console.log("Got the body!"); // Show the HTML for the Google homepage.
          var bodyArr = body.split("<");
          //console.log(bodyArr);
          var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
          originalTextArrE.push(bodyArrB[0]);
          //console.log(originalTextArrE);
          //console.log(bodyArrB);
          //console.log(originalTextArrE);
          textArrTemp = originalTextArrE;
          //console.log("Call back being sent!");
          //console.log(textArrTemp);
          callback(originalTextArrE);
        } else {
          console.warn(error);
          callback(null, error);
        }

      });
    });
  }
/*  request('https://www.instagram.com' + originalTextArrD[i], function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Got the body!"); // Show the HTML for the Google homepage.
      var bodyArr = body.split("<");
      //console.log(bodyArr);
      var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
      originalTextArrE.push(bodyArrB[0]);
      //console.log(originalTextArrE);
      //console.log(bodyArrB);
      emitterB.emit('forth');
    } else {
      console.warn(error);
    }

  }); */
  /*if(stop){
    console.log("WTF");
    emitter.emit('move');
    console.log('continue');
    break;
  }*/
//}
/*originalTextArrD.forEach(function(item){
  request('https://www.instagram.com' + item, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("Got the body!"); // Show the HTML for the Google homepage.
      var bodyArr = body.split("<");
      //console.log(bodyArr);
      var bodyArrB = bodyArr.filter(item => item.startsWith(`meta property="og:image" content="`));
      originalTextArrE.push(bodyArrB[0]);
      //console.log(originalTextArrE);
      //console.log(bodyArrB);
      if(originalTextArrE.length > (originalTextArrD.length-20)){
        ee.emit('continue');

      }
    } else {
      console.warn(error);
    }

  });
});*/
/* this too async function doThisToo(){
  var meme = await doThis(function(result, error){
    if(error){console.log(error)};
    return(result);
  });
  console.log(meme);
  return meme;
}
async function allTogether(){
  var meme = await doMe();
  console.log(meme)
  return meme;
}
function runIt(array){
  console.log("getting image..");
  var modifiedTextArr = [];
  originalTextArrE.forEach(function(item){
    modifiedTextArr = modifiedTextArr.concat(item.split(`"`));
  });
  var textArrFinal = modifiedTextArr.filter(item => item.startsWith("https://sc"));
  textArrFinal.forEach(function(item){
    download(item, {
      directory:'/results'
    }).then(({filename, image}) => {
      console.log('File saved to', filename)}).catch((err) => {
        console.warn(err);
      });
  })
} */
function ifThisWorksImKms(){
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
ifThisWorksImKms();
//.then(runIt(result)).catch(function(err){
//  throw err;
//});
/*request('https://www.instagram.com/p/BejrYYlDWhg/?taken-by=jessicababyfat', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  } else {
    console.warn(error);
  }
}); */
