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

	// Question 4
	// var q = {
	// 	q:"Question 4",
	// 	a:[
	// 	"Answer 41",
	// 	"Answer 42"
	// 	]
	// }
	// QBase.push(q);

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
  		var label = document.createElement('label');
  		label.id = 'idA' + i + j;
  		label.innerHTML = answerTextArea;
		document.getElementById('id' + i).appendChild(label);
		var answer = document.createElement('input');
		answer.type = "checkbox";
		answer.name = "name";
		answer.value = "value";
		document.getElementById('idA' + i + j).appendChild(answer);
  	},
  	createButton: function(){
  		var submitButton = document.createElement('button');
  		submitButton.type = 'submit';
  		submitButton.innerHTML = 'Проверить мои результаты'; 
  		document.querySelector('form').appendChild(submitButton);
  	}
}

createTest.createWrapper();
createTest.createForm();
createTest.createTitle();
createTest.createOl();
for(var i = 0; i < QBase.length ; i++ ){
	createTest.createQuestion(QBase[i].q);
	for( var j = 0; j < QBase[i].a.length; j++ ){
		createTest.createAnswer(QBase[i].a[j]);
	}
}
createTest.createButton();