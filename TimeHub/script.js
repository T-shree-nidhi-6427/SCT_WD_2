
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function goHome() {
  showPage('home');
}


let swTime = 0;
let swInterval;

function startStopwatch() {
  if (!swInterval) {
    swInterval = setInterval(() => {
      swTime++;
      displayStopwatch();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(swInterval);
  swInterval = null;
}

function resetStopwatch() {
  pauseStopwatch();
  swTime = 0;
  displayStopwatch();
}

function displayStopwatch() {
  let hrs = Math.floor(swTime / 3600);
  let mins = Math.floor((swTime % 3600) / 60);
  let secs = swTime % 60;

  document.getElementById('sw-display').textContent =
    `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}


let pomoTime = 25 * 60;
let pomoInterval;

function startPomodoro() {
  if (!pomoInterval) {
    pomoInterval = setInterval(() => {
      if (pomoTime > 0) {
        pomoTime--;
        displayPomodoro();
      }
    }, 1000);
  }
}

function pausePomodoro() {
  clearInterval(pomoInterval);
  pomoInterval = null;
}

function resetPomodoro() {
  pausePomodoro();
  pomoTime = 25 * 60;
  displayPomodoro();
}

function displayPomodoro() {
  let mins = Math.floor(pomoTime / 60);
  let secs = pomoTime % 60;
  document.getElementById('pomo-display').textContent =
    `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}


let eggInterval;
let eggTime = 0;

function startEgg(minutes) {
  clearInterval(eggInterval);
  eggTime = minutes * 60;
  displayEgg();

  eggInterval = setInterval(() => {
    if (eggTime > 0) {
      eggTime--;
      displayEgg();
    }
  }, 1000);
}

function displayEgg() {
  let mins = Math.floor(eggTime / 60);
  let secs = eggTime % 60;
  document.getElementById('egg-display').textContent =
    `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}
