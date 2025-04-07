// Clock functionality
function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    const minHand = document.querySelector('.min-hand');
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    // Add active class for glow effect when hands overlap
    const isHandsOverlapping = (
        Math.abs(hourDegrees - minsDegrees) < 3 ||
        Math.abs(minsDegrees - secondsDegrees) < 3 ||
        Math.abs(hourDegrees - secondsDegrees) < 3
    );
    
    hourHand.classList.toggle('active', isHandsOverlapping);
    minHand.classList.toggle('active', isHandsOverlapping);
    secondHand.classList.toggle('active', isHandsOverlapping);
    
    // Update date with flip animation
    updateDateDisplay(now);

    // Smooth transition fix when hands complete a full rotation
    if (seconds === 0) secondHand.style.transition = 'none';
    if (mins === 0) minHand.style.transition = 'none';
    if (hour === 0) hourHand.style.transition = 'none';
    
    setTimeout(() => {
        if (seconds === 0) secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        if (mins === 0) minHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        if (hour === 0) hourHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }, 50);
}

// Date display
let displayDate = '';

function updateDateDisplay(now) {
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const dateStr = now.getDate().toString().padStart(2, '0');
    const dayStr = now.toLocaleDateString('en-US', { weekday: 'short' });
    const fullDateStr = `${dateStr}`;
    
    if (displayDate !== fullDateStr) {
        displayDate = fullDateStr;
        
        const dateNumber = document.querySelector('.date-number');
        const dayDisplay = document.querySelector('.day-display');
        
        // Update the date display
        dateNumber.textContent = dateStr;
        dayDisplay.textContent = `${month} ${dayStr}`;
    }
}

// Initialize clock
setInterval(setDate, 1000);
setDate();

// Todo List Functionality
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.className = 'todo-checkbox';
        
        const span = document.createElement('span');
        span.textContent = todo.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-todo';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        
        checkbox.addEventListener('change', () => {
            todos[index].completed = checkbox.checked;
            li.classList.toggle('completed', checkbox.checked);
            saveTodos();
        });
        
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
        todoInput.value = '';
    }
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initialize todos
renderTodos();

// Motivational Quotes
const quotes = [
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you want is on the other side of fear.",
        author: "Jack Canfield"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let what you cannot do interfere with what you can do.",
        author: "John Wooden"
    },
    {
        text: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "If you want to achieve greatness stop asking for permission.",
        author: "Anonymous"
    },
    {
        text: "Things work out best for those who make the best of how things work out.",
        author: "John Wooden"
    },
    {
        text: "To live a creative life, we must lose our fear of being wrong.",
        author: "Anonymous"
    },
    {
        text: "If you are not willing to risk the usual you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "What seems to us as bitter trials are often blessings in disguise.",
        author: "Oscar Wilde"
    },
    {
        text: "The distance between insanity and genius is measured only by success.",
        author: "Bruce Feirstein"
    },
    {
        text: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        text: "If you're going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        text: "Creativity is intelligence having fun.",
        author: "Albert Einstein"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Everything has beauty, but not everyone can see it.",
        author: "Confucius"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "Those who dare to fail miserably can achieve greatly.",
        author: "John F. Kennedy"
    }
];

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
}

// Update quote every 30 seconds
updateQuote();
setInterval(updateQuote, 30000);

// Calendar functionality
const calendarDate = new Date();

function updateCalendar() {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    
    // Update month display
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get last day of previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = daysInPrevMonth - i;
        dayDiv.className = 'other-month';
        calendarGrid.appendChild(dayDiv);
    }
    
    // Current month's days
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayDiv.className = 'current-day';
        }
        calendarGrid.appendChild(dayDiv);
    }
    
    // Next month's days
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.className = 'other-month';
        calendarGrid.appendChild(dayDiv);
    }
}

// Month navigation
document.getElementById('prevMonth').addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    updateCalendar();
});

// Initialize calendar
updateCalendar();

// Update calendar at midnight
function checkForDateChange() {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        updateCalendar();
        if (alarmTime && alarmTime < now) {
            clearAlarm();
        }
    }
}

setInterval(checkForDateChange, 1000);

// Alarm functionality
let alarmTime = null;
let alarmTimeout;
const alarmSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
alarmSound.loop = true;

const setAlarmBtn = document.getElementById('setAlarm');
const clearAlarmBtn = document.getElementById('clearAlarm');
const alarmTimeInput = document.getElementById('alarmTime');
const alarmStatus = document.getElementById('alarmStatus');

function setAlarm() {
    const timeInput = alarmTimeInput.value;
    if (timeInput) {
        const [hours, minutes] = timeInput.split(':');
        const now = new Date();
        const alarmDate = new Date();
        alarmDate.setHours(parseInt(hours));
        alarmDate.setMinutes(parseInt(minutes));
        alarmDate.setSeconds(0);
        
        // If alarm time is earlier than current time, set it for next day
        if (alarmDate < now) {
            alarmDate.setDate(alarmDate.getDate() + 1);
        }
        
        const timeToAlarm = alarmDate - now;
        alarmTime = alarmDate;
        
        alarmTimeout = setTimeout(() => {
            playAlarm();
        }, timeToAlarm);
        
        setAlarmBtn.disabled = true;
        clearAlarmBtn.disabled = false;
        alarmTimeInput.disabled = true;
        
        // Calculate time remaining
        const hoursRemaining = Math.floor(timeToAlarm / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeToAlarm % (1000 * 60 * 60)) / (1000 * 60));
        alarmStatus.textContent = `Alarm set for ${timeInput} (in ${hoursRemaining}h ${minutesRemaining}m)`;
        alarmStatus.classList.add('alarm-active');
    }
}

function clearAlarm() {
    alarmTime = null;
    clearTimeout(alarmTimeout);
    alarmSound.pause();
    alarmSound.currentTime = 0;
    
    setAlarmBtn.disabled = false;
    clearAlarmBtn.disabled = true;
    alarmTimeInput.disabled = false;
    alarmStatus.textContent = '';
    alarmStatus.classList.remove('alarm-active');
}

function playAlarm() {
    alarmSound.play();
    alarmStatus.textContent = 'Alarm ringing! Click Clear to stop.';
}

setAlarmBtn.addEventListener('click', setAlarm);
clearAlarmBtn.addEventListener('click', clearAlarm);

// Weather and Air Quality Update
async function updateWeather() {
    try {
        // Get user's location
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        });
        
        const { latitude, longitude } = position.coords;
        console.log('Location obtained:', { latitude, longitude });
        
        // API keys
        const OPENWEATHER_API_KEY = '864ca27aff92d0976b36c616beed145c';
        
        // Weather API call
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPENWEATHER_API_KEY}`;
        console.log('Fetching weather data...');
        
        const weatherResponse = await fetch(weatherUrl);
        if (weatherResponse.status === 401) {
            throw new Error('Weather API key not active yet. Please wait a few hours and try again.');
        } else if (!weatherResponse.ok) {
            throw new Error(`Weather API failed: ${weatherResponse.status} ${weatherResponse.statusText}`);
        }
        
        const weatherData = await weatherResponse.json();
        console.log('Weather data received:', weatherData);

        // Update weather information
        document.getElementById('temp').textContent = `${Math.round(weatherData.main.temp)}°C`;
        document.getElementById('humidity').textContent = `${weatherData.main.humidity}%`;
        document.getElementById('wind').textContent = `${Math.round(weatherData.wind.speed * 3.6)} km/h`;
        document.getElementById('feels-like').textContent = `${Math.round(weatherData.main.feels_like)}°C`;

        // Update weather icon
        const weatherIcon = document.querySelector('.temperature i');
        const weatherCode = weatherData.weather[0].icon;
        weatherIcon.className = getWeatherIcon(weatherCode);

        // Add weather animation based on condition
        createWeatherAnimation(weatherData.weather[0].main);
        
        // Since weather data is working, try fetching AQI data
        try {
            const WAQI_API_KEY = '03e3535ab46e2737d11c84315865bbf4998a14d3';
            const aqiUrl = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${WAQI_API_KEY}`;
            console.log('Fetching AQI data...');
            
            const aqiResponse = await fetch(aqiUrl);
            if (!aqiResponse.ok) {
                throw new Error(`AQI API failed: ${aqiResponse.status} ${aqiResponse.statusText}`);
            }
            const aqiData = await aqiResponse.json();
            console.log('AQI data received:', aqiData);

            if (!aqiData.data || typeof aqiData.data.aqi !== 'number') {
                throw new Error('Invalid AQI data format');
            }

            // Update AQI information
            const aqi = aqiData.data.aqi;
            document.getElementById('aqi').textContent = aqi;
            
            // Update AQI status and color
            const aqiStatus = document.getElementById('aqi-status');
            aqiStatus.className = 'aqi-status';
            
            if (aqi <= 50) {
                aqiStatus.textContent = 'Good';
                aqiStatus.classList.add('aqi-good');
            } else if (aqi <= 100) {
                aqiStatus.textContent = 'Moderate';
                aqiStatus.classList.add('aqi-moderate');
            } else {
                aqiStatus.textContent = 'Poor';
                aqiStatus.classList.add('aqi-poor');
            }
        } catch (aqiError) {
            console.error('AQI update failed:', aqiError);
            document.getElementById('aqi').textContent = '--';
            document.getElementById('aqi-status').textContent = 'AQI Unavailable';
        }
        
    } catch (error) {
        console.error('Weather update failed:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack
        });
        
        // Show error state in the UI
        document.getElementById('temp').textContent = '--°C';
        document.getElementById('humidity').textContent = '--%';
        document.getElementById('wind').textContent = '-- km/h';
        document.getElementById('feels-like').textContent = '--°C';
        document.getElementById('aqi').textContent = '--';
        
        // Show more specific error message
        const aqiStatus = document.getElementById('aqi-status');
        aqiStatus.className = 'aqi-status';
        if (error.message.includes('permission')) {
            aqiStatus.textContent = 'Location access needed';
        } else if (error.message.includes('not active yet')) {
            aqiStatus.textContent = 'Weather API activating...';
        } else if (error.message.includes('Weather API')) {
            aqiStatus.textContent = 'Weather unavailable';
        } else {
            aqiStatus.textContent = 'Service unavailable';
        }
    }
}

// Update weather every 5 minutes
updateWeather();
setInterval(updateWeather, 5 * 60 * 1000);

// Helper function to map weather codes to icons
function getWeatherIcon(code) {
    const iconMap = {
        '01d': 'fas fa-sun',
        '01n': 'fas fa-moon',
        '02d': 'fas fa-cloud-sun',
        '02n': 'fas fa-cloud-moon',
        '03d': 'fas fa-cloud',
        '03n': 'fas fa-cloud',
        '04d': 'fas fa-cloud',
        '04n': 'fas fa-cloud',
        '09d': 'fas fa-cloud-rain',
        '09n': 'fas fa-cloud-rain',
        '10d': 'fas fa-cloud-sun-rain',
        '10n': 'fas fa-cloud-moon-rain',
        '11d': 'fas fa-bolt',
        '11n': 'fas fa-bolt',
        '13d': 'fas fa-snowflake',
        '13n': 'fas fa-snowflake',
        '50d': 'fas fa-smog',
        '50n': 'fas fa-smog'
    };
    return iconMap[code] || 'fas fa-sun';
}

// Weather Animations
function createWeatherAnimation(weatherCode) {
    const container = document.getElementById('weatherAnimation');
    container.innerHTML = '';
    
    switch(weatherCode) {
        case 'Rain':
            for(let i = 0; i < 20; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.style.left = `${Math.random() * 100}%`;
                drop.style.animationDelay = `${Math.random() * 2}s`;
                container.appendChild(drop);
            }
            break;
            
        case 'Snow':
            for(let i = 0; i < 30; i++) {
                const flake = document.createElement('div');
                flake.className = 'snow-flake';
                flake.style.left = `${Math.random() * 100}%`;
                flake.style.animationDelay = `${Math.random() * 3}s`;
                container.appendChild(flake);
            }
            break;
            
        case 'Clear':
            for(let i = 0; i < 5; i++) {
                const ray = document.createElement('div');
                ray.className = 'sun-ray';
                ray.style.left = `${20 + (i * 15)}%`;
                ray.style.top = `${20 + (i * 15)}%`;
                ray.style.width = `${30 + (i * 10)}px`;
                ray.style.height = `${30 + (i * 10)}px`;
                ray.style.animationDelay = `${i * 0.4}s`;
                container.appendChild(ray);
            }
            break;
    }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = true;

// Function to update theme
function updateTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Clear existing content
    themeToggle.textContent = '';
    
    // Create and append icon element
    const icon = document.createElement('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.appendChild(icon);
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    isDarkTheme = savedTheme === 'dark';
    updateTheme(isDarkTheme);
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    updateTheme(isDarkTheme);
});

// Countdown Timer
class CountdownTimer {
    constructor() {
        this.eventName = '';
        this.targetDate = null;
        this.interval = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('setCountdown').addEventListener('click', () => this.startCountdown());
        document.getElementById('clearCountdown').addEventListener('click', () => this.clearCountdown());
    }

    startCountdown() {
        this.eventName = document.getElementById('eventName').value;
        this.targetDate = new Date(document.getElementById('eventDateTime').value);
        
        if (!this.eventName || !this.targetDate) {
            alert('Please enter event name and date/time');
            return;
        }

        document.getElementById('setCountdown').disabled = true;
        document.getElementById('clearCountdown').disabled = false;
        
        this.interval = setInterval(() => this.updateCountdown(), 1000);
        this.updateCountdown();
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            this.clearCountdown();
            document.getElementById('eventStatus').textContent = `${this.eventName} has ended!`;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
        document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
        
        document.getElementById('eventStatus').textContent = this.eventName;
    }

    clearCountdown() {
        clearInterval(this.interval);
        document.getElementById('setCountdown').disabled = false;
        document.getElementById('clearCountdown').disabled = true;
        document.getElementById('eventStatus').textContent = '';
        document.getElementById('eventName').value = '';
        document.getElementById('eventDateTime').value = '';
        
        document.getElementById('countdownDays').textContent = '00';
        document.getElementById('countdownHours').textContent = '00';
        document.getElementById('countdownMinutes').textContent = '00';
        document.getElementById('countdownSeconds').textContent = '00';
    }
}

// Pomodoro Timer
class PomodoroTimer {
    constructor() {
        this.isRunning = false;
        this.isWorkTime = true;
        this.timeLeft = 25 * 60; // 25 minutes in seconds
        this.interval = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startPomodoro').addEventListener('click', () => this.start());
        document.getElementById('pausePomodoro').addEventListener('click', () => this.pause());
        document.getElementById('resetPomodoro').addEventListener('click', () => this.reset());
        
        document.getElementById('workDuration').addEventListener('change', () => this.updateDuration());
        document.getElementById('breakDuration').addEventListener('change', () => this.updateDuration());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            document.getElementById('startPomodoro').disabled = true;
            document.getElementById('pausePomodoro').disabled = false;
            this.interval = setInterval(() => this.tick(), 1000);
        }
    }

    pause() {
        this.isRunning = false;
        document.getElementById('startPomodoro').disabled = false;
        document.getElementById('pausePomodoro').disabled = true;
        clearInterval(this.interval);
    }

    reset() {
        this.pause();
        this.isWorkTime = true;
        this.updateDuration();
        this.updateDisplay();
        document.querySelector('.pomodoro-status').textContent = 'Work Time';
    }

    tick() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
            this.updateDisplay();
        } else {
            this.switchMode();
        }
    }

    switchMode() {
        this.isWorkTime = !this.isWorkTime;
        const workDuration = document.getElementById('workDuration').value;
        const breakDuration = document.getElementById('breakDuration').value;
        
        this.timeLeft = (this.isWorkTime ? workDuration : breakDuration) * 60;
        document.querySelector('.pomodoro-status').textContent = this.isWorkTime ? 'Work Time' : 'Break Time';
        
        // Play notification sound
        this.playNotification();
    }

    updateDuration() {
        if (!this.isRunning) {
            const duration = this.isWorkTime ? 
                document.getElementById('workDuration').value : 
                document.getElementById('breakDuration').value;
            this.timeLeft = duration * 60;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        document.getElementById('pomodoroMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('pomodoroSeconds').textContent = String(seconds).padStart(2, '0');
    }

    playNotification() {
        // Create oscillator for audio notification
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    }
}

// Initialize timers
const countdownTimer = new CountdownTimer();
const pomodoroTimer = new PomodoroTimer(); 