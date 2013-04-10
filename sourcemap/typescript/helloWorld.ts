class Greeter {
	greeting: string;
	constructor (message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}   

var greeter = new Greeter("world");

var button = document.createElement('button')
button.innerText = "Say Hello"

function boo(a, b) {
    alert(a);
}

function update() {
    boo(greeter.greet(), greeter.greet())
}

button.onclick = update

document.body.appendChild(button)