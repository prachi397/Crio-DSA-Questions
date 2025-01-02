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
