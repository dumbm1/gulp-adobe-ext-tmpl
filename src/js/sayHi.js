;(function sayHi() {
  let elem = document.getElementsByTagName('h1')[0];
  elem.innerHTML = getPhrase();

  function getPhrase() {
    let hour = new Date().getHours();
    let hiPhrase = 'Hi!';
    const DAY_LENGTH = 24;
    let timesOfDay = {
      morning: {
        time: 4,
        phrase: 'Good morning!',
      },
      afternoon: {
        time: 12,
        phrase: "Good afternoon!",
      },
      evening: {
        time: 16,
        phrase: "Good evening!",
      },
      night: {
        time: 0,
        phrase: "Good night!",
      }
    };

    if (hour >= timesOfDay.night.time && hour < timesOfDay.morning.time) {
      return timesOfDay.night.phrase;
    }
    if (hour >= timesOfDay.morning.time && hour < timesOfDay.afternoon.time) {
      return timesOfDay.morning.phrase;
    }
    if (hour >= timesOfDay.afternoon.time && hour < timesOfDay.evening.time) {
      return timesOfDay.afternoon.phrase;
    }
    if (hour >= timesOfDay.evening.time && hour < DAY_LENGTH) {
      return timesOfDay.evening.phrase;
    }
    return hiPhrase;
  }



}());