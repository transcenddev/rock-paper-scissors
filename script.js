// Game elements
const spans = document.querySelectorAll('#player span');
const pc = document.querySelector('#pc');
const msg = document.querySelector('p.result');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const roundCounterEl = document.getElementById('round-counter');
const streakEl = document.getElementById('streak-counter');
const streakContainerEl = document.querySelector('.streak');
const bestStreakEl = document.getElementById('best-streak');
const winRateEl = document.getElementById('win-rate');

// Game state
let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;
let currentStreak = 0;
let bestStreak = 0;
let totalGames = 0;
let wonGames = 0;

// Theme colors based on results
const themes = {
  win: '#10b981',
  lose: '#ef4444',
  draw: '#f59e0b'
};

// Sound effects (optional)
const sounds = {
  click: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAABAAABVgANTU1NTU1Q0NDQ0NDUFBQUFBQXl5eXl5ea2tra2tra3l5eXl5eYaGhoaGhpOTk5OTk6Gh'),
  win: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAXgAVVVVVVVVgICAgICAsLCwsLCw0NDQ0NDQ8PDw8PDw//////////8AAAA'),
  lose: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAXgAVVVVVVVVgICAgICAsLCwsLCw0NDQ0NDQ8PDw8PDw//////////8AAAA')
};

// Game functions
const clicked = function(event) {
  if (!document.body.classList.contains('noclick')) {
    document.body.classList.add('noclick');
    
    // Optional sound effect
    try {
      sounds.click.play();
    } catch (e) {
      // Ignore sound errors
    }
    
    const target = event.target;
    target.classList.add('chosen');
    
    // Hide other choices
    for (let span of spans) {
      if (target !== span) {
        span.classList.add('hidden');
      }
    }
    
    // Computer choice
    const random = parseInt(Math.random() * 3);
    pc.textContent = spans[random].textContent;
    pc.dataset.id = spans[random].id;
    pc.classList.remove('hidden');
    pc.classList.add('shake');
    
    setTimeout(() => {
      pc.classList.remove('shake');
      results(target);
    }, 500);
  }
};

const results = function(target) {
  totalGames++;
  roundCounter++;
  roundCounterEl.textContent = roundCounter;
  
  msg.classList.remove('win', 'lose', 'draw');
  
  let result;
  
  // Determine winner
  if (target.id === pc.dataset.id) {
    result = 'draw';
    msg.textContent = 'Draw';
    currentStreak = 0;
  } else if (
    (target.id === 'rock' && pc.dataset.id === 'scissors') || 
    (target.id === 'paper' && pc.dataset.id === 'rock') || 
    (target.id === 'scissors' && pc.dataset.id === 'paper')
  ) {
    result = 'win';
    msg.textContent = 'You Win!';
    playerScore++;
    playerScoreEl.textContent = playerScore;
    currentStreak++;
    wonGames++;
    
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
      bestStreakEl.textContent = bestStreak;
    }
    
    // Show streak if > 2
    if (currentStreak >= 2) {
      streakEl.textContent = currentStreak;
      streakContainerEl.classList.add('active');
    }
    
    // Optional sound effect
    try {
      sounds.win.play();
    } catch (e) {
      // Ignore sound errors
    }
  } else {
    result = 'lose';
    msg.textContent = 'You Lose';
    computerScore++;
    computerScoreEl.textContent = computerScore;
    currentStreak = 0;
    
    // Optional sound effect
    try {
      sounds.lose.play();
    } catch (e) {
      // Ignore sound errors
    }
  }
  
  // Add result class
  msg.classList.add(result);
  
  // Change background color hint based on result
  document.body.style.backgroundColor = `color-mix(in srgb, ${themes[result]} 10%, var(--bg-color))`;
  
  // Update win rate
  const winRate = Math.round((wonGames / totalGames) * 100);
  winRateEl.textContent = winRate;
  
  // Show result
  msg.classList.remove('hidden');
  
  // Auto reset after delay
  setTimeout(reset, 1500);
};

const reset = function() {
  // Reset UI
  for (let span of spans) {
    span.classList.remove('hidden', 'chosen');
  }
  
  msg.classList.add('hidden');
  pc.classList.add('hidden');
  
  // Reset streak display if not active
  if (currentStreak < 2) {
    streakContainerEl.classList.remove('active');
  }
  
  // Reset background color
  document.body.style.backgroundColor = '';
  
  setTimeout(function() {
    document.body.classList.remove('noclick');
  }, 500);
};

const resetScores = function() {
  playerScore = 0;
  computerScore = 0;
  roundCounter = 1;
  currentStreak = 0;
  totalGames = 0;
  wonGames = 0;
  
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  roundCounterEl.textContent = '1';
  streakEl.textContent = '0';
  winRateEl.textContent = '0';
  
  streakContainerEl.classList.remove('active');
};

// Add event listeners
for (let span of spans) {
  span.addEventListener('click', clicked);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
  // Quick choices with number keys
  if (event.key === '1' || event.key === '1') {
    document.getElementById('rock').click();
  } else if (event.key === '2') {
    document.getElementById('paper').click();
  } else if (event.key === '3') {
    document.getElementById('scissors').click();
  } 
  // Reset scores with "R" key
  else if (event.key === 'r' || event.key === 'R') {
    resetScores();
  }
});

// Preload sounds
for (let sound in sounds) {
  sounds[sound].volume = 0.3;
  sounds[sound].load();
}