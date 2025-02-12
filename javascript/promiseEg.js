//create the promise
let isMomHappy = true;
const willGetNewPhone = () => {
  return new Promise((resolve, reject) => {
    if (isMomHappy) {
      let phone = {
        brand: "samsung",
        color: "black",
      };
      resolve(phone);
    } else {
      reject("Mom is angry, so you won't get anything");
    }
  });
};
// //consuming the promise
// const askMom = function(){
//     willGetNewPhone()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// }
// askMom();

//chaining of promises
const showOff = function (phone) {
  return new Promise((resolve, reject) => {
    if (isMomHappy) {
      resolve(`Hi friends, I have a new ${phone.color} ${phone.brand}`);
    } else {
      reject("I did not get phone.");
    }
  });
};
//consuming the chained promises
const askMom = function () {
  willGetNewPhone()
    .then(showOff)
    .then(function(fullfilled){
        console.log(fullfilled);
    })
    .catch((err) => console.log(err));
};
askMom();

//using async await
async function askMomAgain(){
    try{
        const phone = await willGetNewPhone();
        const message = await showOff(phone);
        console.log(message+` from async function`);
    }catch(err){
        console.log(err);
    }
}
askMomAgain();

//promise.all
let promise1 = Promise.resolve(1);
let promise2 = 42;
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,'foo');
});
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})
