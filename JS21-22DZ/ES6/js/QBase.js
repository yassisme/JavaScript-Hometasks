'use strict'

var QBase= {
	title: 'Тест по географии',
	question: [
	{
		q:'Столица Республики Македония?',
		answer:[
			{text:'Скопье', check: true},
			{text:'Куманово', check: false},
			{text:'Битола', check: false}
		]
	},
	{
		q:'В какой стране находится город Бейрут?',
		answer:[
			{text:'Сирия', check: false},
			{text:'Иран', check:false},
			{text:'Ливан', check: true}
			]
	}
	]
};


localStorage.setItem('DBase',JSON.stringify(QBase));

var Data = localStorage.getItem('DBase');

var Data = JSON.parse(Data);
