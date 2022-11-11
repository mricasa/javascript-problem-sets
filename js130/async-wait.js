/* 

from https://www.youtube.com/watch?v=DHvZLI7Db8E
 JavaScript Promises In 10 Minutes 

 https://www.youtube.com/watch?v=V_Kr9OSfDeU
  JavaScript Async Await 

promise
resolve 
reject
*/

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// })

// p.then((message)=>{
//   console.log('this is in the then ' + message);
// }).catch((message) => {
//   console.log('This is in the catch ' + message);
// }) // 


/* using callbacks example */
// const userLeft = false;
// const userWatchingCatmeme = true;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User left',
//       message: ':(',
//     })
//   } else if (userWatchingCatmeme) {
//     errorCallback({
//       name: 'User watching cat meme',
//       message: 'WebDevSipmlified < Cat',
//     })
//   } else {
//     callback('thumbs up and subscribe');
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Success: ' + message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })

/* the above example modeled using the Promise */

// const userLeft = false;
// const userWatchingCatmeme = true;


// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User left',
//         message: ':(',
//       })
//     } else if (userWatchingCatmeme) {
//       reject({
//         name: 'User watching cat meme',
//         message: 'WebDevSipmlified < Cat',
//       })
//     } else {
//       resolve('thumbs up and subscribe');
//     }
//   })
// }

// watchTutorialPromise().then((message) => {
//   console.log('Success: ' + message)
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message)
// })

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`)
    
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  })
}

function processRequest(response){
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  })
}

// makeRequest('Facebook').then(response => {
//   console.log('Response Received');
//   return processRequest(response);
// }).then(processedResponse => {
//   console.log(processedResponse);
// }).catch(err => {
//   console.log(err);
// });

async function doWork() {
  try {
    const response = await makeRequest('Facebook');
    console.log('Response Received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch(err) {
    console.log(err);
  }
}

doWork();