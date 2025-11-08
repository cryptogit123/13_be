import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worldvvvvddfd");
});


const promisedSetTimeout = (delay: number) => {
  return new Promise((res, rej) => {
    setTimeout(res,delay)
  })
}

promisedSetTimeout(1000).then(() => console.log('promise resolved'))

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});