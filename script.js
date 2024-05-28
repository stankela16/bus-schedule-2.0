const raspored_medakovic3 = [
    '05:45', '06:00', '06:17', '06:18', '06:34', '06:35', '06:51', '06:52',
    '07:08', '07:09', '07:25', '07:26', '07:42', '07:43',
    '07:59', '08:00', '08:16', '08:17', '08:33', '08:34',
    '08:50', '08:51', '09:07', '09:08', '09:24', '09:25',
    '09:41', '09:42', '09:58', '09:59', '10:15', '10:16',
    '10:32', '10:33', '10:49', '10:50', '11:06', '11:07',
    '11:23', '11:24', '11:40', '11:41', '11:57', '11:58',
    '12:14', '12:15', '12:31', '12:32', '12:48', '12:49',
    '13:05', '13:06', '13:22', '13:23', '13:39', '13:40',
    '13:56', '13:57', '14:13', '14:14', '14:30', '14:31',
    '14:47', '14:48', '15:04', '15:05', '15:21', '15:22',
    '15:38', '15:39', '15:55', '15:56', '16:12', '16:13',
    '16:29', '16:30', '16:46', '16:47', '17:03', '17:04',
    '17:20', '17:21', '17:37', '17:38', '17:54', '17:55',
    '18:11', '18:12', '18:28', '18:29', '18:45', '18:46',
    '19:02', '19:03', '19:19', '19:20', '19:36', '19:37',
    '19:53', '19:54', '20:10', '20:11', '20:27', '20:28',
    '20:44', '20:45', '21:01', '21:02', '21:18', '21:19',
    '21:35', '21:36', '21:53', '21:54', '22:11', '22:13',
    '22:30', '22:31'
];

const raspored_voivode_vlahovica = [
    '05:40', '05:56', '05:57', '06:13', '06:14', '06:30', '06:31',
    '06:47', '06:48', '07:04', '07:05', '07:21', '07:22',
    '07:38', '07:39', '07:55', '07:56', '08:12', '08:13',
    '08:29', '08:30', '08:46', '08:47', '09:03', '09:04',
    '09:20', '09:21', '09:37', '09:38', '09:54', '09:55',
    '10:11', '10:12', '10:28', '10:29', '10:45', '10:46',
    '11:02', '11:03', '11:19', '11:20', '11:36', '11:37',
    '11:53', '11:54', '12:10', '12:11', '12:27', '12:28',
    '12:44', '12:45', '13:01', '13:02', '13:18', '13:19',
    '13:35', '13:36', '13:52', '13:53', '14:09', '14:10',
    '14:26', '14:27', '14:43', '14:44', '15:00', '15:01',
    '15:17', '15:18', '15:34', '15:35', '15:51', '15:52',
    '16:08', '16:09', '16:25', '16:26', '16:42', '16:43',
    '16:59', '17:00', '17:16', '17:17', '17:33', '17:34',
    '17:50', '17:51', '18:07', '18:08', '18:24', '18:25',
    '18:41', '18:42', '18:58', '18:59', '19:15', '19:16',
    '19:32', '19:33', '19:49', '19:50', '20:06', '20:07',
    '20:23', '20:24', '20:40', '20:41', '20:57', '20:58',
    '21:14', '21:15', '21:31', '21:32', '21:49', '21:50',
    '22:07', '22:09', '22:26', '22:27'
];

const raspored_vv_week = [
    '05:40', '06:13', '06:30', '06:47', '07:04', '07:21', '07:38',
    '07:55', '08:12', '08:29', '08:46', '09:03', '09:20',
    '09:37', '09:54', '10:11', '10:28', '10:45', '11:02',
    '11:19', '11:36', '11:53', '12:10', '12:27', '12:44',
    '13:01', '13:18', '13:35', '13:52', '14:09', '14:26',
    '14:43', '15:00', '15:17', '15:34', '15:51', '16:08',
    '16:25', '16:42', '16:59', '17:16', '17:33', '17:50',
    '18:07', '18:24', '18:41', '18:58', '19:15', '19:32',
    '19:49', '20:06', '20:23', '20:40', '20:57', '21:14',
    '21:31', '21:49', '22:07', '22:26'
];

const raspored_m3_week = [
    '06:00', '06:34', '06:51', '07:08', '07:25', '07:42', '07:59',
    '08:16', '08:33', '08:50', '09:07', '09:24', '09:41',
    '09:58', '10:15', '10:32', '10:49', '11:06', '11:23',
    '11:40', '11:57', '12:14', '12:31', '12:48', '13:05',
    '13:22', '13:39', '13:56', '14:13', '14:30', '14:47',
    '15:04', '15:21', '15:38', '15:55', '16:12', '16:29',
    '16:46', '17:03', '17:20', '17:37', '17:54', '18:11',
    '18:28', '18:45', '19:02', '19:19', '19:36', '19:53',
    '20:10', '20:27', '20:44', '21:01', '21:18', '21:35',
    '21:53', '22:11', '22:30'
];



function parseTimeStr(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const now = new Date();
    const dateInBelgrade = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' }));
    return new Date(dateInBelgrade.getFullYear(), dateInBelgrade.getMonth(), dateInBelgrade.getDate(), hours, minutes);
}

let initialTime = null;
let globalClock = null;
let lastUpdatedMinutes = null;

function updateGlobalClock() {
    globalClock = new Date();
    if (globalClock.getMinutes() !== lastUpdatedMinutes) {
        updateDepartures();
    }
}

function calculateMinutesUntilDeparture(departures, now) {
    const minutesUntilDeparture = [];
    let count = 0;
    for (const departureStr of departures) {
        const departureTime = parseTimeStr(departureStr);
        if (departureTime > now) {
            const minutesUntil = Math.round((departureTime - now) / 60000);
            minutesUntilDeparture.push(minutesUntil);
            count += 1;
            if (count === 5) break;
        }
    }
    return minutesUntilDeparture;
}
function updateDepartures() {
    const now = new Date();
    const nowInBelgrade = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' }));
    const dayOfWeek = nowInBelgrade.getDay();

    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    const medakovic3List = document.getElementById('medakovic3-list');
    const voivodeVlahovicaList = document.getElementById('voivode-vlahovica-list');

    medakovic3List.innerHTML = '';
    voivodeVlahovicaList.innerHTML = '';

    const medakovic3Departures = isWeekend ? calculateMinutesUntilDeparture(raspored_m3_week, nowInBelgrade) : calculateMinutesUntilDeparture(raspored_medakovic3, nowInBelgrade);
    const voivodeVlahovicaDepartures = isWeekend ? calculateMinutesUntilDeparture(raspored_vv_week, nowInBelgrade) : calculateMinutesUntilDeparture(raspored_voivode_vlahovica, nowInBelgrade);

    medakovic3Departures.forEach(mins => {
        const li = document.createElement('li');
        li.textContent = mins === 0 ? 'Sada' : `Za ${mins} minuta`;
        medakovic3List.appendChild(li);
    });

    voivodeVlahovicaDepartures.forEach(mins => {
        const li = document.createElement('li');
        li.textContent = mins === 0 ? 'Sada' : `Za ${mins} minuta`;
        voivodeVlahovicaList.appendChild(li);
    });

    lastUpdatedMinutes = now.getMinutes();
}

setInterval(updateGlobalClock, 1000);
setInterval(updateClock, 1000);
window.onload = function() {
    initialTime = new Date();
    updateDepartures();
    updateClock();
};


function formatTime(time, withoutSeconds = false) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: withoutSeconds ? undefined : '2-digit',
        hour12: false,
        timeZone: 'Europe/Belgrade'
    };
    return time.toLocaleTimeString('en-GB', options);
}

function updateClock() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit',
        timeZone: 'Europe/Belgrade'
    };
    let dateStr = now.toLocaleDateString('sr-Latn-RS', options);
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

    document.getElementById('date').textContent = dateStr;
    document.getElementById('clock').textContent = formatTime(now);
}

setInterval(updateClock, 1000);
window.onload = function() {
    updateClock();
};

/*window.onload = function() {
    initialTime = new Date();
    updateDepartures();
    updateClock();
    showNearbyDepartures();
};
*/
function refreshPage() {
    location.reload();
}

document.getElementById('refreshButton').addEventListener('click', refreshPage);



function showNearbyDepartures() {
    console.log("Funkcija showNearbyDepartures() je pozvana.");

    const now = new Date();
    const currentHour = now.getHours();
    const dayOfWeek = now.getDay();

    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    const medakovic3Departures = isWeekend ? raspored_m3_week : raspored_medakovic3;
    const voivodeVlahovicaDepartures = isWeekend ? raspored_vv_week : raspored_voivode_vlahovica;

    const medakovic3List = document.getElementById('medakovic3-nearby-list');
    medakovic3List.innerHTML = ''; // Očistite prethodne polaske

    for (let i = currentHour - 1; i <= currentHour + 1; i++) {
        const listColor = i === currentHour ? '#3dc792' : i < currentHour ? 'red' : 'blue';
        medakovic3Departures.forEach(departure => {
            const departureHour = parseInt(departure.split(':')[0]);
            if (departureHour === i) {
                const li = document.createElement('li');
                li.textContent = departure;
                li.style.backgroundColor = listColor;
                medakovic3List.appendChild(li);
            }
        });
    }

    const voivodeVlahovicaList = document.getElementById('voivode-vlahovica-nearby-list');
    voivodeVlahovicaList.innerHTML = ''; // Očistite prethodne polaske

    for (let i = currentHour - 1; i <= currentHour + 1; i++) {
        const listColor = i === currentHour ? '#3dc792' : i < currentHour ? 'red' : 'blue';
        voivodeVlahovicaDepartures.forEach(departure => {
            const departureHour = parseInt(departure.split(':')[0]);
            if (departureHour === i) {
                const li = document.createElement('li');
                li.textContent = departure;
                li.style.backgroundColor = listColor;
                voivodeVlahovicaList.appendChild(li);
            }
        });
    }
}

document.getElementById('toggle-medakovic3').addEventListener('click', function() {
    const list = document.getElementById('medakovic3-nearby-list');
    if (list.style.display === 'none') {
        showNearbyDepartures();
        list.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        list.style.display = 'none';
        this.textContent = 'Show';
    }
});

document.getElementById('toggle-vv').addEventListener('click', function() {
    const list = document.getElementById('voivode-vlahovica-nearby-list');
    if (list.style.display === 'none') {
        showNearbyDepartures();
        list.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        list.style.display = 'none';
        this.textContent = 'Show';
    }
});

window.onload = function() {
    initialTime = new Date();
    updateDepartures();
    updateClock();
};






function getNearbyDepartures(departureList, time, previousCount, nextCount) {
    const nearbyDepartures = [];
    const currentTime = time.getTime();

    for (let i = 1; i <= previousCount; i++) {
        const previousTime = new Date(currentTime - i * 30 * 60000);
        const nearestDeparture = findNearestDeparture(departureList, previousTime);
        if (nearestDeparture) {
            nearbyDepartures.unshift(nearestDeparture);
        }
    }

    const nearestDepartureCurrent = findNearestDeparture(departureList, time);
    if (nearestDepartureCurrent) {
        nearbyDepartures.unshift(nearestDepartureCurrent);
    }

    for (let i = 1; i <= nextCount; i++) {
        const nextTime = new Date(currentTime + i * 30 * 60000);
        const nearestDeparture = findNearestDeparture(departureList, nextTime);
        if (nearestDeparture) {
            nearbyDepartures.push(nearestDeparture);
        }
    }

    return nearbyDepartures;
}

function findNearestDeparture(departureList, time) {
    const currentTime = time.getHours() * 60 + time.getMinutes();
    let nearestDeparture = null;
    let minDifference = Infinity;

    departureList.forEach(departureTime => {
        const [hours, minutes] = departureTime.split(':');
        const departureMinutes = parseInt(hours) * 60 + parseInt(minutes);
        const difference = Math.abs(departureMinutes - currentTime);
        if (difference < minDifference) {
            minDifference = difference;
            nearestDeparture = departureTime;
        }
    });

    return nearestDeparture;
}
