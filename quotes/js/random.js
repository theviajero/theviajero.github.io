$(document).ready(function(){


	p1 = '“Be yourself; everyone else is already taken.” \n ― Oscar Wilde'
	p2 = '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.” \n ― Dr. Seuss'
	p3 = '“A room without books is like a body without a soul.” \n ― Marcus Tullius Cicero'
	p4 = '“So many books, so little time.” \n ― Frank Zappa'
	p5 = '“In three words I can sum up everything I\'ve learned about life: it goes on.” \n ― Robert Frost'
	p6 = '“Friendship is born at that moment when one man says to another: "What! You too? I thought that no one but myself . . ."” \n ― C.S. Lewis, The Four Loves '
	p7 = '“If you tell the truth, you don\'t have to remember anything.” \n ― Mark Twain'
	p8 = '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” \n ― Maya Angelou'
	p9 = '“Live as if you were to die tomorrow. Learn as if you were to live forever.” \n ― Mahatma Gandhi'
	p10 = '“I am so clever that sometimes I don\'t understand a single word of what I am saying.” ― Oscar Wilde, The Happy Prince and Other Stories '
	
	phrases = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];
	num2 = Math.floor(Math.random() * 10);

	
	$( ".addhere" ).append( "<p>", document.createTextNode(phrases[num2]), "</p>" );


	$("#boton").click(function(ev){
		ev.preventDefault();
		$('#twb iframe').remove();

		$(".addhere").empty();
		num = Math.floor(Math.random() * 10);
		console.log(phrases[num]);
		$(".addhere").append("<p>", document.createTextNode( phrases[num] ), "</p>").hide().fadeIn(1000);;
		
		// Generate new markup
            var tweetBtn = $('<a></a>')
            .addClass('twitter-share-button')
            .attr('href', 'http://twitter.com/share')
            .attr('data-url', 'http://theviajerock.tk')
            .attr('data-text', phrases[num]);
	    $('#twb').append(tweetBtn);
	    twttr.widgets.load();

		
	});

});




