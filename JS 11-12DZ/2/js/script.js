$(function(){

	var html = $('#test').html();

	console.log(html);

	var profile = [
			{	//box header
				name: 'Харченко Ярослав Олегович',
				imgSrc: "'img/photo.png'",
				discription: 'Студент Харьковского Национального Университета Радиоэлектроники'
			},
			{	//box motivation
				motivationList: ['Прикладная математика не для меня :)','Перспективы в зарплате по специальности не впечатляют','Интересно заниматься Web']
			},
			{
				//box contacts
				phone: '+380500476490',
				vk: "'https://vk.com/is__me'"
			},
			{
				//box feedback
				feedback:'Обязуюсь быть максимально добросовестным студентом и работником , в перспективе :)'
			}
		];

	var content = tmpl(html,{
		data: profile
	});

	$('body').append(content);

});