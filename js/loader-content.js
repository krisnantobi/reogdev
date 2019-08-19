function misi() {
    $.getJSON('src/content/misi.json', function (data) {
        $.each(data, function (i, val) {
            $('#misi').append(''+
            	' <div class="col-md-6 col-lg-4">'+
		          '<div class="feature-block">'+
		           ' <img src="'+val.img+'" alt="img" class="img-fluid">'+
		            '<h4></h4>'+
		            '<p>'+val.text+'</p>'+
		          '</div>'+
		        '</div> '
            	);
        })
    })
}
misi();

function new_event() {
    $.getJSON('src/content/events.json', function (data) {
    	let event = data[0];
    	$('#new-event').append(''+
	    	'<div class="container">'+
		      '<div class="row justify-content-center">'+
		        '<div class="col-md-5 col-lg-3">'+
		        	'<a href="'+event.url+'">'+
		          		'<img target="_blank" src="'+event.img+'" alt="About">'+
		          	'</a>'+
		        '</div>'+
		        '<div class="col-md-7 col-lg-5">'+
		          '<div class="about-content">'+
		            '<h2>'+event.title+'</h2>'+
		            '<p>'+event.body+'</p>'+
		            '<a target="_blank" href="'+event.url+'" class="btn-get-started scrollto">JOIN DONG</a>'+
		          '</div>'+
		        '</div>'+
		      '</div>'+
		    '</div>'
    	);

    	$('#footer-new-event').append(''+
            '<p style="color:#fff;">'+event.body.substr(0, 100)+'</p>'+
            '<a target="_blank" href="'+event.url+'" class="btn-get-started scrollto" style="background: #f0cc3c;color:#fff;">Join dong</a>'
    	);
    	$('#footer-new-event-img').append(''+
    		'<img target="_blank" src="'+event.img+'" width="70%">'
    	);
    })
}
new_event();

function events() {
    $.getJSON('src/content/events.json', function (data) {
    	$.each(data, function(i, event){
    		$('#events').append(''+    	
		        '<div class="col-md-6 col-lg-3">'+
		          '<div class="feature-block">'+
		            '<img sizes="(max-width: 1400px) 100vw, 1400px"'+
                        'src="'+event.img+'" alt="img" class="img-fluid"'+
                        'srcset="'+event.srcset+'"  >'+
		            '<h4>'+event.title+'</h4>'+
		            '<p>'+event.body+'</p>'+
		          '</div>'+
		        '</div>'
	    	);
    	})
    })
}
events();

function galery() {
    $.getJSON('src/content/galery.json', function (data) {
    	$.each(data, function(i, img){
    		$('#galery').append(''+
        		'<div><img src="img/galery/1.jpeg" alt="img"></div>'
	    	);
    	})
    })
}
// galery();

function sosial_media() {
    $.getJSON('src/content/sosial-media.json', function (data) {
    	$.each(data, function(i, val){
    		$('#sosial-media').append(''+
        		'<li><a target="_blank" href="'+val.link+'"><i class="fa '+val.icon+'"></i></a></li>'
	    	);
    	})
    })
}
sosial_media();
