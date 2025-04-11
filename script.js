// Jordan Database and application logic combined in one file

// Database of Jordan sneakers
const jordanDatabase = [
    // Air Jordan 1
    {
        name: "Air Jordan 1 'Bred'",
        model: "Air Jordan 1",
        colorway: "Black/Varsity Red",
        year: 1985,
        description: "The 'Banned' colorway that allegedly violated NBA uniform rules, creating one of Nike's most successful marketing campaigns.",
        image: "https://i.ebayimg.com/images/g/YlkAAOSwRb9h-DmJ/s-l400.jpg"
    },
    {
        name: "Air Jordan 1 'Royal'",
        model: "Air Jordan 1",
        colorway: "Black/Varsity Royal",
        year: 1985,
        description: "OG colorway featuring bold royal blue accents that has remained one of the most sought-after Jordan 1s.",
        image: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/4_85d327f7-a8cf-4ca7-8d5a-9566046ac471_540x.jpg?=75&v=1708311989"
    },
    {
        name: "Air Jordan 1 'Chicago'",
        model: "Air Jordan 1",
        colorway: "White/Black-Varsity Red",
        year: 1985,
        description: "The original colorway featuring the Chicago Bulls' team colors. One of the most iconic sneakers of all time.",
        image: "https://owp.klarna.com/product/640x640/3007065643/Nike-Air-Jordan-1-Retro-High-OG-Chicago-Lost-Found---Varsity-Red-Black-Sail-Muslin.jpg?ph=true"
    },
    {
        name: "Air Jordan 1 'Shadow'",
        model: "Air Jordan 1",
        colorway: "Black/Grey",
        year: 1985,
        description: "Subtle yet classic colorway that pairs black with medium grey for a versatile look.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFgqi9ZPL7m6AeYqgKqWK799RXNSFFfM_cQ&s"
    },
    {
        name: "Air Jordan 1 'UNC'",
        model: "Air Jordan 1",
        colorway: "White/University Blue",
        year: 1985,
        description: "Colorway inspired by Michael Jordan's alma mater, the University of North Carolina.",
        image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358"
    },
    {
        name: "Air Jordan 1 'Obsidian/UNC'",
        model: "Air Jordan 1",
        colorway: "Sail/Obsidian/University Blue",
        year: 2019,
        description: "Premium colorway combining obsidian and UNC blue with sail accents.",
        image: "https://i.ebayimg.com/images/g/V4AAAOSwNuBk0Ogm/s-l400.jpg"
    },
    {
        name: "Air Jordan 1 'Shattered Backboard'",
        model: "Air Jordan 1",
        colorway: "White/Black-Orange",
        year: 2015,
        description: "Inspired by MJ's backboard-shattering dunk during an exhibition game in Italy.",
        image: "https://www.modernnotoriety.com/wp-content/uploads/2024/07/air-jordan-1-high-og-shattered-backboard-2025.jpg"
    },
    {
        name: "Air Jordan 1 'Bred Patent'",
        model: "Air Jordan 1",
        colorway: "Black/Varsity Red (Patent Leather)",
        year: 2021,
        description: "Patent leather version of the classic Bred colorway with a high-shine finish.",
        image: "https://sneakerbardetroit.com/wp-content/uploads/2021/06/Air-Jordan-1-Patent-Bred-555088-063-Release-Date-3.png"
    },
    {
        name: "Off-White x Air Jordan 1 'Chicago'",
        model: "Air Jordan 1",
        colorway: "White/Black-Varsity Red (Deconstructed)",
        year: 2017,
        description: "Virgil Abloh's deconstructed take on the Chicago colorway as part of 'The Ten' collection.",
        image: "https://i.ebayimg.com/images/g/yfMAAOSw2NZiqlz9/s-l1200.jpg"
    },
    {
        name: "Travis Scott x Air Jordan 1 'Mocha'",
        model: "Air Jordan 1",
        colorway: "Sail/Dark Mocha-University Brown",
        year: 2019,
        description: "Travis Scott's reverse swoosh design with premium suede and hidden pocket details.",
        image: "https://m.media-amazon.com/images/I/7106ZXf0T4L._AC_UY900_.jpg"
    },

    // Air Jordan 2
    {
        name: "Air Jordan 2 'White/Varsity Red'",
        model: "Air Jordan 2",
        colorway: "White/Varsity Red",
        year: 1986,
        description: "OG colorway of the Italian-made AJ2 with luxury details and no visible Swoosh.",
        image: "https://sneakernews.com/wp-content/uploads/2014/06/air-jordan-2-white-varsity-red.jpg"
    },
    {
        name: "Air Jordan 2 'Black/Varsity Red'",
        model: "Air Jordan 2",
        colorway: "Black/Varsity Red",
        year: 1986,
        description: "Black-based version of the AJ2 with red accents and faux lizard skin details.",
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-2-gs-altermate-87.jpg"
    },
    {
        name: "Air Jordan 2 'White/Black'",
        model: "Air Jordan 2",
        colorway: "White/Black",
        year: 1986,
        description: "Clean two-tone colorway that highlights the shoe's unique silhouette.",
        image: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-2-wing-it.jpg"
    },
    {
        name: "Air Jordan 2 'Black/White'",
        model: "Air Jordan 2",
        colorway: "Black/White",
        year: 1986,
        description: "Reverse color blocking of the White/Black version for a more dramatic look.",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2010%2F09%2Fjordan-ii-black-white-retro-1.jpg?w=960&cbr=1&q=90&fit=max"
    },

    // Air Jordan 3
    {
        name: "Air Jordan 3 'White Cement'",
        model: "Air Jordan 3",
        colorway: "White/Cement Grey",
        year: 1988,
        description: "First Jordan with visible Air, elephant print, and the Jumpman logo. Saved the Jordan line.",
        image: "https://crepprotect.com/cdn/shop/articles/Screenshot_1205.png?v=1716979898"
    },
    {
        name: "Air Jordan 3 'Black Cement'",
        model: "Air Jordan 3",
        colorway: "Black/Cement Grey",
        year: 1988,
        description: "The black counterpart to the White Cement with the same iconic elephant print details.",
        image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/773d349e-788a-4ea5-ab1f-70818fb571bf/air-jordan-3-black-cement-dn3707-010-release-date.jpg"
    },
    {
        name: "Air Jordan 3 'Fire Red'",
        model: "Air Jordan 3",
        colorway: "White/Fire Red",
        year: 1988,
        description: "Vibrant red accents against a white leather upper with grey elephant print.",
        image: "https://i.ebayimg.com/images/g/s7QAAOSwgZBkDqRR/s-l1200.jpg"
    },
    {
        name: "Air Jordan 3 'True Blue'",
        model: "Air Jordan 3",
        colorway: "White/True Blue",
        year: 1988,
        description: "Classic colorway featuring bold blue accents with the signature elephant print.",
        image: "https://i.redd.it/315slww0q9651.jpg"
    },

    // Air Jordan 4
    {
        name: "Air Jordan 4 'White Cement'",
        model: "Air Jordan 4",
        colorway: "White/Cement Grey",
        year: 1989,
        description: "OG colorway with speckled cement grey accents and red flight tongue patch.",
        image: "https://sneakernews.com/wp-content/uploads/2024/06/air-jordan-4-white-cement-2025-fv5029-100-2.jpg?w=1140"
    },
    {
        name: "Air Jordan 4 'Black Cement'",
        model: "Air Jordan 4",
        colorway: "Black/Cement Grey",
        year: 1989,
        description: "Black-based version of the cement 4s with the same distinctive details.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwOSBiaVOJj01-u0AgqPpu8lZyY6bG6o7Hg&s"
    },
    {
        name: "Air Jordan 4 'Military Blue'",
        model: "Air Jordan 4",
        colorway: "White/Military Blue",
        year: 1989,
        description: "Clean colorway with military blue accents that has seen several retro releases.",
        image: "https://i.ebayimg.com/images/g/qSAAAOSwo4hmGK~w/s-l1200.jpg"
    },
    {
        name: "Air Jordan 4 'Red Thunder'",
        model: "Air Jordan 4",
        colorway: "Black/Varsity Red",
        year: 2022,
        description: "Black nubuck upper with vibrant red accents and speckled midsole details.",
        image: "https://i.ebayimg.com/images/g/RxUAAOSwRLxi2OdO/s-l1200.jpg"
    },

    // Air Jordan 5
    {
        name: "Air Jordan 5 'Grape'",
        model: "Air Jordan 5",
        colorway: "White/Fire Red-Purple Ice",
        year: 1990,
        description: "Distinctive colorway featuring vibrant purple accents and a translucent outsole.",
        image: "https://sneakernews.com/wp-content/uploads/2020/03/Air-Jordan-5-Alternate-Grape-136027-500-8.jpg"
    },
    {
        name: "Air Jordan 5 'Fire Red'",
        model: "Air Jordan 5",
        colorway: "White/Fire Red-Black",
        year: 1990,
        description: "OG colorway with reflective tongue and shark tooth midsole design.",
        image: "https://i.ebayimg.com/images/g/~RIAAOSwBexizejS/s-l1200.jpg"
    },
    {
        name: "Air Jordan 5 'Metallic'",
        model: "Air Jordan 5",
        colorway: "Black/Metallic Silver",
        year: 1990,
        description: "Black leather upper with metallic silver reflective tongue and shark teeth details.",
        image: "https://www.nicekicks.com/files/2016/03/Air-Jordan-5-Metallic-.jpg"
    },

    // Air Jordan 6
    {
        name: "Air Jordan 6 'Infrared'",
        model: "Air Jordan 6",
        colorway: "Black/Infrared",
        year: 1991,
        description: "The shoe MJ wore during his first NBA championship victory over the Lakers.",
        image: "https://m.media-amazon.com/images/I/61w1L0XTebL._AC_UY300_.jpg"
    },
    {
        name: "Air Jordan 6 'Carmine'",
        model: "Air Jordan 6",
        colorway: "White/Carmine-Black",
        year: 1991,
        description: "Vibrant red and white colorway that stands out with its bold contrast.",
        image: "https://m.media-amazon.com/images/I/61vp0qfsXvL._AC_UY900_.jpg"
    },

    // Air Jordan 7
    {
        name: "Air Jordan 7 'Bordeaux'",
        model: "Air Jordan 7",
        colorway: "White/Bordeaux-Black",
        year: 1992,
        description: "Named for its deep burgundy accents, worn during the 1992 All-Star Game.",
        image: "https://i.ebayimg.com/images/g/oOIAAOSw~w9h4FD1/s-l1200.jpg"
    },
    {
        name: "Air Jordan 7 'Olympic'",
        model: "Air Jordan 7",
        colorway: "White/True Red-Navy Blue",
        year: 1992,
        description: "USA-themed colorway worn by MJ during the 1992 Olympic 'Dream Team'.",
        image: "https://s1.dswcdn.com/uploads/Nike_Air_Jordan_Shoes/Air_Jordan_VII_7_Shoes/Air_Jordan_VII_7_Retro_304775/Nike_Air_Jordan_7_VII_Retro_Olympic_White_Gold_Obsdn_Red_304775_135.jpg"
    },

    // Air Jordan 8
    {
        name: "Air Jordan 8 'Aqua'",
        model: "Air Jordan 8",
        colorway: "White/Black-Aqua",
        year: 1993,
        description: "Colorway featuring vibrant aqua blue accents with crossover ankle straps.",
        image: "https://madeforthew.com/wp-content/uploads/2019/07/cropped-nike-wmns-air-jordan-viii-retro-white-aqua-ci1236-100-mood-1-1000x563.jpg"
    },
    {
        name: "Air Jordan 8 'Playoffs'",
        model: "Air Jordan 8",
        colorway: "Black/True Red",
        year: 1993,
        description: "Worn during MJ's third championship run and first retirement.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWOtwfHZQCT2zTJbXygP8Eq-9QCQbVfkJSg&s"
    }
];

// DOM Elements
const jordanImg = document.getElementById('jordan-img');
const jordanName = document.getElementById('jordan-name');
const jordanModel = document.getElementById('jordan-model');
const jordanColorway = document.getElementById('jordan-colorway');
const jordanYear = document.getElementById('jordan-year');
const jordanDescription = document.getElementById('jordan-description');
const newJordanBtn = document.getElementById('new-jordan-btn');
const yayBtn = document.getElementById('yay-btn');
const nayBtn = document.getElementById('nay-btn');
const ratingFeedback = document.getElementById('rating-feedback');
const calendarBtn = document.getElementById('calendar-btn');
const calendarModal = document.getElementById('calendar-modal');
const calendarContainer = document.getElementById('calendar-container');
const closeCalendarBtn = document.getElementById('close-calendar');
const currentMonthDisplay = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

// Calendar variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Function to generate a pseudo-random number based on the date
function getDateSeed(day, month, year) {
    // Create a simple hash based on the date
    return ((day * month * year) % jordanDatabase.length);
}

// Function to check if a date is in the future
function isFutureDate(day, month, year) {
    const checkDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate comparison
    return checkDate > today;
}

// Function to display a Jordan based on index
function displayJordan(jordanIndex) {
    // Get the Jordan from our database
    const jordan = jordanDatabase[jordanIndex];
    
    // Apply fade-in animation
    jordanImg.classList.remove('fade-in');
    void jordanImg.offsetWidth; // Trigger reflow
    jordanImg.classList.add('fade-in');
    
    // Update the UI with the Jordan info
    jordanName.textContent = jordan.name;
    jordanModel.textContent = `Model: ${jordan.model}`;
    jordanColorway.textContent = `Colorway: ${jordan.colorway}`;
    jordanYear.textContent = `Release Year: ${jordan.year}`;
    jordanDescription.textContent = `Description: ${jordan.description}`;
    jordanImg.src = jordan.image;
    jordanImg.alt = jordan.name;
    
    // Clear any previous rating feedback
    ratingFeedback.textContent = '';
    ratingFeedback.className = '';
}

// Function to display today's Jordan or a random one
function displayRandomJordan() {
    // Check if we have a stored Jordan for today
    const today = new Date().toLocaleDateString();
    const storedDate = localStorage.getItem('jordanDate');
    let jordanIndex;
    
    // If it's a new day or manual refresh, get a new Jordan
    if (storedDate !== today && !document.querySelector('.manual-refresh')) {
        jordanIndex = getDateSeed(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear());
        localStorage.setItem('jordanDate', today);
        localStorage.setItem('jordanIndex', jordanIndex);
    } else if (document.querySelector('.manual-refresh')) {
        // For manual refresh, get a truly random Jordan
        jordanIndex = Math.floor(Math.random() * jordanDatabase.length);
    } else {
        // Use the stored Jordan for today
        jordanIndex = localStorage.getItem('jordanIndex') || getDateSeed(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear());
    }
    
    displayJordan(jordanIndex);
    
    // Remove the manual refresh class if it exists
    document.querySelectorAll('.manual-refresh').forEach(el => el.classList.remove('manual-refresh'));
}

// Function to display a specific day's Jordan
function displayDayJordan(day, month, year) {
    // Check if the requested date is in the future
    if (isFutureDate(day, month, year)) {
        // Don't show future Jordans
        alert("Future Jordans are a surprise! Check back on that date.");
        return;
    }
    
    const jordanIndex = getDateSeed(day, month + 1, year);
    displayJordan(jordanIndex);
    
    // Update the header to show which day's Jordan is being displayed
    const displayDate = new Date(year, month, day);
    document.getElementById('date-display').textContent = `Jordan for ${displayDate.toLocaleDateString()}`;
    document.getElementById('date-display').classList.add('alternate-date');
    
    // Add a class to the Go Back to Today button to make it visible
    document.getElementById('today-btn').classList.add('visible');
}

// Function to go back to today's Jordan
function goBackToToday() {
    displayRandomJordan();
    document.getElementById('date-display').textContent = 'Jordan of the Day';
    document.getElementById('date-display').classList.remove('alternate-date');
    document.getElementById('today-btn').classList.remove('visible');
}

// Function to generate and display the calendar
function generateCalendar(month, year) {
    // Update the month and year display
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;
    
    // Clear previous calendar
    while (calendarContainer.firstChild) {
        calendarContainer.removeChild(calendarContainer.firstChild);
    }
    
    // Add day names header
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysHeader = document.createElement('div');
    daysHeader.className = 'days-header';
    
    dayNames.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'day-name';
        dayEl.textContent = day;
        daysHeader.appendChild(dayEl);
    });
    
    calendarContainer.appendChild(daysHeader);
    
    // Create the calendar grid
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';
    
    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Get the number of days in the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Create empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        
        // Check if this day is in the future
        const isFuture = isFutureDate(day, month, year);
        
        // Mark today's date
        const isToday = (day === new Date().getDate() && 
                        month === new Date().getMonth() && 
                        year === new Date().getFullYear());
        
        if (isToday) {
            dayCell.classList.add('today');
        }
        
        if (isFuture) {
            // This is a future date, apply special styling
            dayCell.classList.add('future');
            
            // Add day number
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayCell.appendChild(dayNumber);
        } else {
            // Only get Jordan thumbnail for past or current days
            const jordanIndex = getDateSeed(day, month + 1, year);
            const jordan = jordanDatabase[jordanIndex];
            
            // Create a preview element for the day's Jordan
            const preview = document.createElement('div');
            preview.className = 'jordan-preview';
            preview.style.backgroundImage = `url(${jordan.image})`;
            
            // Add day number
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            
            // Add tooltip with Jordan info
            dayCell.title = jordan.name;
            
            // Append elements to the day cell
            dayCell.appendChild(preview);
            dayCell.appendChild(dayNumber);
            
            // Add click event to show this day's Jordan
            dayCell.addEventListener('click', () => {
                displayDayJordan(day, month, year);
                closeCalendar();
            });
        }
        
        calendarGrid.appendChild(dayCell);
    }
    
    calendarContainer.appendChild(calendarGrid);
    
    // Disable next month button if it would take us to a future month
    const nextMonth = new Date();
    nextMonth.setDate(1); // First day of current month
    
    if (month === nextMonth.getMonth() && year === nextMonth.getFullYear()) {
        nextMonthBtn.disabled = true;
    } else {
        nextMonthBtn.disabled = false;
    }
}

// Function to show the calendar modal
function showCalendar() {
    // Generate the calendar for the current month and year
    generateCalendar(currentMonth, currentYear);
    calendarModal.classList.add('show');
}

// Function to close the calendar modal
function closeCalendar() {
    calendarModal.classList.remove('show');
}

// Event listener for the "Show Me Another Jordan" button
newJordanBtn.addEventListener('click', function() {
    // Add a class to indicate this is a manual refresh
    this.classList.add('manual-refresh');
    displayRandomJordan();
    
    // Reset the date display
    document.getElementById('date-display').textContent = 'Jordan of the Day';
    document.getElementById('date-display').classList.remove('alternate-date');
    document.getElementById('today-btn').classList.remove('visible');
});

// Event listeners for rating buttons
yayBtn.addEventListener('click', function() {
    ratingFeedback.textContent = '👍 You would rock these!';
    ratingFeedback.className = 'yay-animation';
});

nayBtn.addEventListener('click', function() {
    ratingFeedback.textContent = '👎 Not your style!';
    ratingFeedback.className = 'nay-animation';
});

// Event listener for the calendar button
calendarBtn.addEventListener('click', showCalendar);

// Event listener for closing the calendar
closeCalendarBtn.addEventListener('click', closeCalendar);

// Event listeners for navigating months in the calendar
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Event listener for the "Today" button
document.getElementById('today-btn').addEventListener('click', goBackToToday);

// Close calendar when clicking outside the calendar content
calendarModal.addEventListener('click', function(e) {
    if (e.target === calendarModal) {
        closeCalendar();
    }
});

// Display a Jordan when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayRandomJordan();
    
    // Create a date display if it doesn't exist
    if (!document.getElementById('date-display')) {
        const dateDisplay = document.createElement('h1');
        dateDisplay.id = 'date-display';
        dateDisplay.textContent = 'Jordan of the Day';
        document.querySelector('header').prepend(dateDisplay);
    }
    
    // Create a "Today" button if it doesn't exist
    if (!document.getElementById('today-btn')) {
        const todayBtn = document.createElement('button');
        todayBtn.id = 'today-btn';
        todayBtn.textContent = 'Back to Today';
        todayBtn.addEventListener('click', goBackToToday);
        document.querySelector('.controls').appendChild(todayBtn);
    }
});
