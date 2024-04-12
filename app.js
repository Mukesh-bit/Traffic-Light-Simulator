const redSignal = document.querySelector(".red")
const yellowSignal = document.querySelector(".yellow")
const greenSignal = document.querySelector(".green")
const text = document.querySelector('.text h1')

const trafficSignal = {
  1:{color: 'red', waitTime: 3000, },
  2:{color: 'yellow', waitTime: 4000,  },
  3:{color: 'green', waitTime: 5000,  },
}

redSignal.style.backgroundColor = 'red';
text.innerHTML = "Please Stop"
text.style.color = 'red'




let signalNumber = 1

function runTrafficSignals() {
  setTimeout(() => {

    signalNumber++;

    if(signalNumber > 3) signalNumber = 1;

    if(signalNumber === 1) {
      redSignal.style.backgroundColor = 'red';
      yellowSignal.style.backgroundColor = '';
      greenSignal.style.backgroundColor = '';

      text.innerHTML = "Please Stop"
      text.style.color = 'red'
    }
    if(signalNumber === 2) {
      yellowSignal.style.backgroundColor = 'yellow';
      redSignal.style.backgroundColor = '';
      greenSignal.style.backgroundColor = '';

      text.innerHTML = "Please Wait"
      text.style.color = 'yellow'


    }
    if(signalNumber === 3) {
      greenSignal.style.backgroundColor = 'green';
      redSignal.style.backgroundColor = '';
      yellowSignal.style.backgroundColor = '';

      text.innerHTML = "Now Go"
      text.style.color = 'green'


    }

    runTrafficSignals()

  }, trafficSignal[signalNumber].waitTime)
}

runTrafficSignals()