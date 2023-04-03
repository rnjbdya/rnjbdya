const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	alert(`Thank you for your message, ${name}! We will respond to your email (${email}) as soon as possible. Your message was: "${message}"`);
});
