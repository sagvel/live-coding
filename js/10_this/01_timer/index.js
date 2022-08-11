// 1. What is context +++
// 2. When context is lost +++
// 3. How to fix context +++

// function getName() {
//   console.log(this);
//   return 'James';
// }

// getName();

// const obj = {
//   run: () => {
//     console.log(obj);
//   },
// };

// obj.run();

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalID: 0,

  // input: nothing
  // output: nothing
  startTimer() {
    // console.log('startTimer context', this);
    // console.log(this.getTime());
    // input: callback, delay(number)
    // output: ID

    // const callback = function () {
    //   console.log('callback context', this);
    //   this.secondsPassed += 1;
    // };

    // const bindedCallback = callback.bind(this);

    // this.intervalID = setInterval(bindedCallback, 1000);
    this.intervalID = setInterval(() => {
      // console.log('callback context', this);
      // console.log(this.getTime());
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.intervalID);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toFixed().padStart(2, '0')}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// test data
// timer.startTimer(); // context +
// console.log(timer.getTime());

// 1. func called separately
// const func = timer.startTimer;
// func.bind({ message: 'I brocken context' })();
// func(); // context -

// 2. callback function -> lost context

// 3. nested functions -> lost context

export default timer;
