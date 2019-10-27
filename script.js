

var memes = [
	'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
	'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
	'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
	'Dude, you congratulated a potato for getting a part in Toy Story',
	'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
	'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
];

var random = document.querySelector('#random');

random.innerHTML = memes[Math.floor(Math.random() * memes.length)];





/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
	var input = e.target.input;

	if (input.value) {
		var message = buildMessage(input.value);
		conversation.appendChild(message);
		
	}

	input.value = '';
	conversation.scrollTop = conversation.scrollHeight;

	e.preventDefault();
}

function buildMessage(text) {
	var element = document.createElement('div');

	element.classList.add('message', 'sent');

	element.innerHTML = text;
		
			
	return element;
}

