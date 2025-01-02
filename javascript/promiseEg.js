//create the promise
let isMomHappy = true;
const willGetNewPhone = () => {
  return new Promise((resolve, reject) => {
    if (isMomHappy) {
        let phone = {
            brand: "samsung",
            color: "black"
        }
      resolve(`Mom is happy, so you will get a brand new phone ${JSON.stringify(phone)}`);
    } else {
      reject("Mom is angry, so you won't get anything");
    }
  });
};
willGetNewPhone()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
