//CALENDAR

let cal = document.getElementById("calendar");
let now = new Date();
let Year = now.getFullYear();
let Month = now.getMonth();
let Day = now.getDate();

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function createCalendar(elem, year, month, today){
	let date = new Date(year, month);
	let table = '<h1 onclick="toDate()">' + months[month] + '  ' + year + '</h1>' + '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th class="redTitle">вс</th></tr><tr>';

	// пробелы для первого ряда
	// с понедельника до первого дня месяца
	// * * * 1  2  3  4
	for (let i = 0; i < getDay(date); i++) {
		table += '<td></td>';
	}
	
	// <td> ячейки календаря с датами
	while (date.getMonth() == month){
		if (date.getDate() == today && now.getMonth() == month) table += '<td class="today">' + date.getDate() + '</td>';
		else if (getDay(date) % 7 == 6) table += '<td class="redTitle">' + date.getDate() + '</td>';
		else table += '<td>' + date.getDate() + '</td>';

		if (getDay(date) % 7 == 6) {
			table += '</tr><tr>'
		}

		date.setDate(date.getDate() + 1);
	}

	// добить таблицу пустыми ячейками, если нужно
	// 29 30 31 * * * *
	if (getDay(date) != 0) {
		for (let i = getDay(date); i < 7; i++) {
			table += '<td></td>';
		}
	}

	//закрыть таблицу
	table += '</tr></table>';

	elem.innerHTML = table;
}

function getDay(date){
	let day = date.getDay();
	if (day == 0) day = 7;
	return day - 1;
}

function toDate(){
	Year = now.getFullYear();
	Month = now.getMonth();
	Day = now.getDate();
	createCalendar(cal, Year, Month, Day);	
}

function backMonth(){
	Month --;
	if (Month == 0) {
		Month = 11;
		Year--;
	}
	createCalendar(cal, Year, Month, Day);
}

function nextMonth(){
	Month ++;
	if (Month == 12) {
		Month = 0;
		Year++;
	}
	createCalendar(cal, Year, Month, Day);
}

createCalendar(cal, now.getFullYear(), now.getMonth(), now.getDate());
