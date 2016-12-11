$(function(){



	var html = $('#test').html();
	console.log(html);
	var articles = [
	{
		title: 'Article 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi labore, magni illum nemo ipsum quod voluptates. Incidunt aut neque quaerat mollitia perspiciatis assumenda asperiores consequatur, soluta unde quae. Porro?'

	},
	{
		title: 'Article 2',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum hic modi, necessitatibus illum impedit praesentium porro. Quas quasi culpa ad incidunt modi ipsum libero fugiat velit distinctio iusto. Molestias!'

	},
	{
		title: 'Article 3',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nobis nesciunt, quia quidem esse voluptatum nam possimus molestiae natus omnis! Nisi, quae. Et vitae illo optio aut, cumque blanditiis repellendus.'
	}
	];
	var content = tmpl(html, {
		data: articles
	});
	$('body').append(content);

})