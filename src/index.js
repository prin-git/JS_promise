function promiseFun(x) {
  return new Promise((resolve, reject) => {
    if (x > 10) {
      x = x + 1;
      resolve(x);
    } else {
      reject(new Error("fail"));
    }
  });
}

promiseFun(1)
  .then((res) => console.log("resolve-first", res))
  .catch((err) => console.log("err-first", err));

promiseFun(11)
  .then((res) => console.log("resolve-sec", res))
  .catch((err) => console.log("err-sec", err));
