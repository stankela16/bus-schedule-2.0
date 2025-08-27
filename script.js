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
    '22:30', '22:31', '22:47', '23:05', '23:25', '23:45',
    
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
    '22:07', '22:09', '22:26', '22:27', '22:43', '23:01',
    '23:20', '23:40'
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
    '21:31', '21:49', '22:07', '22:25', '22:43', '23:01',
    '23:20', '23:40'
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
    '21:53', '22:11', '22:29', '22:47', '23:05', '23:25',
    '23:45'
];



// Helper functions for time handling (Europe/Belgrade)
function toBelgradeNow() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Belgrade' }));
}
function pad2(n) { return String(n).padStart(2, '0'); }
function makeDateForTime(baseDate, timeStr, addDays = 0) {
    const [h, m] = timeStr.split(':').map(Number);
    const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), h, m, 0, 0);
    if (addDays) d.setDate(d.getDate() + addDays);
    return d;
}
function getNextDepartures(departures, now, count = 5) {
    const today = departures.map(t => makeDateForTime(now, t, 0));
    const tomorrow = departures.map(t => makeDateForTime(now, t, 1));
    const all = today.concat(tomorrow)
        .filter(d => d > now)
        .sort((a, b) => a - b)
        .slice(0, count);
    return all.map(d => ({
        timeStr: `${pad2(d.getHours())}:${pad2(d.getMinutes())}`,
        minutes: Math.round((d - now) / 60000),
        date: d
    }));
}

function parseTimeStr(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const now = new Date();
    const dateInBelgrade = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' }));
    let polazakDate = new Date(dateInBelgrade.getFullYear(), dateInBelgrade.getMonth(), dateInBelgrade.getDate(), hours, minutes);
    // Ako je polazak ranije od trenutnog vremena (npr. 00:53, a sada je 23:55), polazak je sledeći dan
    if (polazakDate < dateInBelgrade && (hours < dateInBelgrade.getHours() || (hours === dateInBelgrade.getHours() && minutes < dateInBelgrade.getMinutes()))) {
        polazakDate.setDate(polazakDate.getDate() + 1);
    }
    return polazakDate;
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
function showModal(minutes, exactTime) {
    const modal = document.getElementById('modal');
    const modalTime = document.getElementById('modal-time');
    const modalExact = document.getElementById('modal-exact');
    modalTime.textContent = minutes === 0 ? 'Polazak je sada!' : `Polazak za ${minutes} minuta.`;
    modalExact.textContent = `Tačno vreme polaska: ${exactTime}`;
    modal.style.display = 'flex';
}

document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function addClickableDepartures(listId, departures, now) {
    const list = document.getElementById(listId);
    list.innerHTML = '';
    const upcoming = getNextDepartures(departures, now, 5);
    upcoming.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.minutes === 0 ? 'Sada' : `Za ${item.minutes} minuta`;
        li.style.cursor = 'pointer';
        li.onclick = function() {
            showModal(item.minutes, item.timeStr);
        };
        list.appendChild(li);
    });
}

function updateDepartures() {
    const nowInBelgrade = toBelgradeNow();
    const dayOfWeek = nowInBelgrade.getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const medakovic3ListId = 'medakovic3-list';
    const voivodeVlahovicaListId = 'voivode-vlahovica-list';
    const medakovic3Departures = isWeekend ? raspored_m3_week : raspored_medakovic3;
    const voivodeVlahovicaDepartures = isWeekend ? raspored_vv_week : raspored_voivode_vlahovica;
    addClickableDepartures(medakovic3ListId, medakovic3Departures, nowInBelgrade);
    addClickableDepartures(voivodeVlahovicaListId, voivodeVlahovicaDepartures, nowInBelgrade);
    lastUpdatedMinutes = nowInBelgrade.getMinutes();
}

setInterval(updateGlobalClock, 1000);


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
    const now = new Date();
    const currentHour = now.getHours();
    const dayOfWeek = now.getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const medakovic3Departures = isWeekend ? raspored_m3_week : raspored_medakovic3;
    const voivodeVlahovicaDepartures = isWeekend ? raspored_vv_week : raspored_voivode_vlahovica;

    function getDeparturesForHours(departures, hoursArr) {
        let found = [];
        hoursArr.forEach(i => {
            departures.forEach(departure => {
                const departureHour = parseInt(departure.split(':')[0]);
                if (departureHour === i) {
                    found.push({time: departure, hour: i});
                }
            });
        });
        return found;
    }

    // Medaković 3
    const medakovic3List = document.getElementById('medakovic3-nearby-list');
    medakovic3List.innerHTML = '';
    let medakovic3Found = getDeparturesForHours(medakovic3Departures, [currentHour-1, currentHour, currentHour+1]);
    if (medakovic3Found.length === 0) {
        // Pronađi prvi naredni sat sa polascima
        for (let h = currentHour+2; h < 24; h++) {
            let nextFound = getDeparturesForHours(medakovic3Departures, [h]);
            if (nextFound.length > 0) {
                medakovic3Found = nextFound;
                break;
            }
        }
    }
    if (medakovic3Found.length === 0) {
        medakovic3List.innerHTML = '<li style="background:red;">Nema polazaka u narednim satima.</li>';
    } else {
        medakovic3Found.forEach(dep => {
            const li = document.createElement('li');
            li.textContent = dep.time;
            if (dep.hour === currentHour) li.style.backgroundColor = '#3dc792';
            else if (dep.hour < currentHour) li.style.backgroundColor = 'red';
            else li.style.backgroundColor = 'blue';
            medakovic3List.appendChild(li);
        });
    }

    // Vojvode Vlahovica
    const voivodeVlahovicaList = document.getElementById('voivode-vlahovica-nearby-list');
    voivodeVlahovicaList.innerHTML = '';
    let vvFound = getDeparturesForHours(voivodeVlahovicaDepartures, [currentHour-1, currentHour, currentHour+1]);
    if (vvFound.length === 0) {
        for (let h = currentHour+2; h < 24; h++) {
            let nextFound = getDeparturesForHours(voivodeVlahovicaDepartures, [h]);
            if (nextFound.length > 0) {
                vvFound = nextFound;
                break;
            }
        }
    }
    if (vvFound.length === 0) {
        voivodeVlahovicaList.innerHTML = '<li style="background:red;">Nema polazaka u narednim satima.</li>';
    } else {
        vvFound.forEach(dep => {
            const li = document.createElement('li');
            li.textContent = dep.time;
            if (dep.hour === currentHour) li.style.backgroundColor = '#3dc792';
            else if (dep.hour < currentHour) li.style.backgroundColor = 'red';
            else li.style.backgroundColor = 'blue';
            voivodeVlahovicaList.appendChild(li);
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

// unify onload handlers into one
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

let notificationTimeouts = [];
let notificationInterval = null;
let notificationEndTime = null;

function getUpcomingDeparturesInNext30Minutes(selectedStation) {
    const nowInBelgrade = toBelgradeNow();
    const dayOfWeek = nowInBelgrade.getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    let departuresArr = [];
    if (selectedStation === 'medakovic3') {
        departuresArr = isWeekend ? raspored_m3_week : raspored_medakovic3;
    } else {
        departuresArr = isWeekend ? raspored_vv_week : raspored_voivode_vlahovica;
    }
    const today = departuresArr.map(t => makeDateForTime(nowInBelgrade, t, 0));
    const tomorrow = departuresArr.map(t => makeDateForTime(nowInBelgrade, t, 1));
    const all = today.concat(tomorrow);
    const stationName = selectedStation === 'medakovic3' ? 'Medaković 3' : 'Vojvode Vlahovića';
    const departures = [];
    for (const d of all) {
        const diffMin = (d - nowInBelgrade) / 60000;
        if (diffMin > 0 && diffMin <= 30) {
            departures.push({
                station: stationName,
                time: `${pad2(d.getHours())}:${pad2(d.getMinutes())}`,
                minutes: Math.round(diffMin),
                date: d
            });
        }
    }
    return departures.sort((a, b) => a.date - b.date);
}

function startNotificationTimer() {
    notificationEndTime = Date.now() + 30 * 60 * 1000;
    const selectedStation = document.getElementById('station-select').value;
    localStorage.setItem('notificationActive', 'true');
    localStorage.setItem('notificationEndTime', notificationEndTime);
    localStorage.setItem('notificationStation', selectedStation);
    document.getElementById('notification-timer').style.display = 'inline-block';
    updateTimerCountdown();
    notificationInterval = setInterval(updateTimerCountdown, 1000);
    scheduleNotifications();
}

function stopNotificationTimer() {
    document.getElementById('notification-timer').style.display = 'none';
    clearInterval(notificationInterval);
    notificationInterval = null;
    notificationEndTime = null;
    notificationTimeouts.forEach(timeout => clearTimeout(timeout));
    notificationTimeouts = [];
    localStorage.removeItem('notificationActive');
    localStorage.removeItem('notificationEndTime');
    localStorage.removeItem('notificationStation');
}

function updateTimerCountdown() {
    if (!notificationEndTime) return;
    const remaining = Math.max(0, notificationEndTime - Date.now());
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    document.getElementById('timer-countdown').textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    if (remaining <= 0) stopNotificationTimer();
}

function showBusAlert(station, time, minutesUntil) {
    const alertDiv = document.getElementById('bus-alert');
    const alertText = document.getElementById('bus-alert-text');
    let msg = `🚌 Polazak sa stanice ${station} u ${time}`;
    if (minutesUntil === 0) {
        msg += ' (polazak je sada!)';
    } else if (minutesUntil === 1) {
        msg += ' (za 1 minut)';
    } else {
        msg += ` (za ${minutesUntil} minuta)`;
    }
    alertText.textContent = msg;
    alertDiv.style.display = 'flex';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 12000); // automatski nestane posle 12 sekundi
}
document.getElementById('bus-alert-close').onclick = function() {
    document.getElementById('bus-alert').style.display = 'none';
};

function showWebNotification(station, time, minutesUntil = 5) {
    showBusAlert(station, time, minutesUntil); // prikaz na sajtu
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        let bodyText = `Polazak sa stanice ${station} u ${time}`;
        if (minutesUntil === 0) {
            bodyText += ' (polazak je sada!)';
        } else if (minutesUntil === 1) {
            bodyText += ' (za 1 minut)';
        } else {
            bodyText += ` (za ${minutesUntil} minuta)`;
        }
        new Notification('Polazak autobusa', {
            body: bodyText
        });
    }
}

function scheduleNotifications() {
    notificationTimeouts.forEach(timeout => clearTimeout(timeout));
    notificationTimeouts = [];
    const selectedStation = document.getElementById('station-select').value;
    const departures = getUpcomingDeparturesInNext30Minutes(selectedStation);
    const nowInBelgrade = toBelgradeNow();
    departures.forEach(dep => {
        const notifyTime = dep.date ? (dep.date.getTime() - 5 * 60000) : (makeDateForTime(nowInBelgrade, dep.time, 0).getTime() - 5 * 60000);
        const delay = notifyTime - nowInBelgrade.getTime();
        if (delay > 0) {
            const timeout = setTimeout(() => {
                showWebNotification(dep.station, dep.time, 5);
            }, delay);
            notificationTimeouts.push(timeout);
        } else if ((dep.date ? dep.date.getTime() : makeDateForTime(nowInBelgrade, dep.time, 0).getTime()) > nowInBelgrade.getTime()) {
            // Ako je polazak za manje od 5 minuta, odmah prikazati notifikaciju sa tačnim brojem minuta
            const minutesUntil = Math.round(((dep.date ? dep.date.getTime() : makeDateForTime(nowInBelgrade, dep.time, 0).getTime()) - nowInBelgrade.getTime()) / 60000);
            showWebNotification(dep.station, dep.time, minutesUntil);
        }
    });
}

function isIosDevice() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
}
function isStandalonePWA() {
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function isNotificationSupported() {
    return typeof Notification !== 'undefined';
}

document.getElementById('enableNotifications').onclick = function() {
    if (localStorage.getItem('notificationActive') === 'true') {
        // Timer je već aktivan, samo nastavi bez resetovanja
        alert('Notifikacije su već uključene i timer je aktivan.');
        return;
    }
    // iOS napomena: sistemske notifikacije rade samo za PWA dodatu na Home Screen (iOS 16.4+)
    if (isIosDevice() && !isStandalonePWA()) {
        // Omogući bar in-app banere; objasni korisniku kako da dobije sistemske notifikacije
        alert('Na iOS uređajima, sistemske notifikacije rade samo kada aplikaciju dodate na Home Screen. Koristite Share > Add to Home Screen, pa ponovo pokrenite aplikaciju. U međuvremenu ćemo prikazivati obaveštenja unutar aplikacije.');
        startNotificationTimer();
        return;
    }

    if (!isNotificationSupported()) {
        // Nema Notification API – pokreni samo in-app obaveštenja
        alert('Sistemske notifikacije nisu podržane u ovom pregledaču. Prikazivaćemo samo obaveštenja unutar aplikacije.');
        startNotificationTimer();
        return;
    }

    if (Notification.permission === 'granted') {
        startNotificationTimer();
        return;
    }
    if (Notification.permission === 'denied') {
        // Dozvola odbijena – i dalje možemo koristiti in-app banere
        alert('Sistemske notifikacije su blokirane u pregledaču. Prikazivaćemo samo obaveštenja unutar aplikacije.');
        startNotificationTimer();
        return;
    }
    // default – zatraži dozvolu u okviru korisničkog klika
    try {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                startNotificationTimer();
            } else {
                alert('Nije dozvoljeno prikazivanje sistemskih notifikacija. Prikazivaćemo obaveštenja unutar aplikacije.');
                startNotificationTimer();
            }
        });
    } catch (e) {
        // Fallback za pregledače bez Promise varijante
        Notification.requestPermission(function(permission) {
            if (permission === 'granted') {
                startNotificationTimer();
            } else {
                alert('Nije dozvoljeno prikazivanje sistemskih notifikacija. Prikazivaćemo obaveštenja unutar aplikacije.');
                startNotificationTimer();
            }
        });
    }
};
document.getElementById('disableNotifications').onclick = stopNotificationTimer;

// extend unified onload with restoration and theme init
window.addEventListener('load', function() {
    // Restore notification timer if active
    if (localStorage.getItem('notificationActive') === 'true') {
        const endTime = parseInt(localStorage.getItem('notificationEndTime'));
        const selectedStation = localStorage.getItem('notificationStation') || 'medakovic3';
        document.getElementById('station-select').value = selectedStation;
        notificationEndTime = endTime;
        document.getElementById('notification-timer').style.display = 'inline-block';
        updateTimerCountdown();
        notificationInterval = setInterval(updateTimerCountdown, 1000);
        scheduleNotifications();
    }
    // Restore theme
    const theme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-toggle').querySelector('span');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        icon.textContent = '🌙';
    }
});

document.getElementById('theme-toggle').onclick = function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-toggle').querySelector('span');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        icon.textContent = '🌙';
    }
};
