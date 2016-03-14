'use strict'
// Template
var TQuestion={
	q:"Question",
	a:[
		"Answer 1",
		"Answer 2"
	]
}

// QBase
var QBase=[];

	// Question 1
	var q = {
		q:"Question 1",
		a:[
		"Answer 11",
		"Answer 12"
		]
	}
	QBase.push(q);
	
	// Question 2
	var q = {
		q:"Question 2",
		a:[
		"Answer 21",
		"Answer 22",
		"Answer 23",
		"Answer 24",
		"Answer 25"
		]
	}
	QBase.push(q);
	
	// Question 3
	var q = {
		q:"Question 3",
		a:[
		"Answer 31",
		"Answer 32",
		"Answer 33"
		]
	}
	QBase.push(q);

// alert(QBase[1].a.length);

var createTest = {
	createWrapper: function() {
		var div = document.createElement('div');
		div.className = "wrapper";
		document.querySelector('body').appendChild(div);
  	},
  	createForm: function() {
  		var form = document.createElement('form');
  		document.querySelector('div').appendChild(form);
  	},
  	createTitle: function() {
  		var title = document.createElement('h1');
  		document.querySelector('form').appendChild(title);
  		title.innerHTML = 'Тест по программированию';
  	},
  	createOl: function(){
  		var questionsOl = document.createElement('ol');
  		questionsOl.type = "1";
  		document.querySelector('form').appendChild(questionsOl);
  	},
  	createQuestion: function(textArea){
  		var textArea;
  		var question = document.createElement('li');
  		question.id="id"+ i;
  		var qId = question.id;
  		document.querySelector('ol').appendChild(question);
  		question.innerHTML = textArea;
  	},
  	createAnswer: function(answerTextArea){
		var answerTextArea;
		var answer = document.createElement('input');
		answer.type = "checkbox";
		answer.name = "name";
		answer.value = "value";
		answer.id = 'idA' + i + j;
		document.getElementById('id' + i).appendChild(answer);
		var label = document.createElement('label');
		label.htmlFor = 'idA' + i + j;
		document.getElementById('idA' + i + j).appendChild(label);
		label.innerHTML = answerTextArea;
  	}
}

createTest.createWrapper();
createTest.createForm();
createTest.createTitle();
createTest.createOl();
for(var i = 0; i < QBase.length ; i++ ){
	createTest.createQuestion(QBase[i].q);
	// alert('Создан вопрос');
	for( var j = 0; j < QBase[i].a.length; j++ ){
		createTest.createAnswer(QBase[i].a[j]);
		// alert('Создан ответ');
	}
}