//MVC
function Model(data) {

	var self = this;

	self.data = data;

	self.addItem = function(item){

		if (item.length === 0) {return;}

		self.data.push(item);

		return self.data;
	};

	self.removeItem = function(item){

		var index = self.data.indexOf(item);

		if (index === -1) {return;}

		self.data.splice(index, 1);

		return self.data;
	};

	self.updateItem = function(item, value){

		var index = self.data.indexOf(item);

		if (~index) {
		    self.data[index] = value;
		    console.log(self.data[index]);
		}

	};
}

function View(model) {

	var self = this;

	function init(){

		var wrapper = tmpl($('#wrapper-template').html());
		$("body").append(wrapper);
		self.elements = {
			input: $('.item-value'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list')
		};
		self.renderList(model.data);
	};

	self.renderList = function(data){
		
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.listContainer.html(list);

	};

	init();
}

function Controller(model, view) {

	var self = this;

	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('click','.item-inner', editItem);


	function addItem(){
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	};

	function removeItem(){

		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);

	};

	function editItem(){
		var value = $(this).text();
		var input = $(this).parent().find('.item-edit');
		$(this).css('display','none');
		input.css('display','inline');	
		console.log(this);
		console.log(value);
		input.attr('value', value);
		console.log($(this).parent().parent().find('.item-edit'))
		// $(this).parent().parent().find('.item-edit').select();
		input.select();

		input.keyup(function(e){
		    if(e.keyCode == 13){
		        e.preventDefault();
		        var inputValue = $(this).val();
		        console.log(inputValue);
		        model.updateItem(value, inputValue);
		        view.renderList(model.data);
		    	}
    	});

	};

}

$(function(){

	var firstToDoList = ['Выполнить домашнее задание по JS', 'Посмотреть серию Острых козырьков', 'Поехать на курсы'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);

});