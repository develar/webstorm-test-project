var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
var button = document.createElement('button');
button.innerText = "Say Hello";
function boo(a, b) {
    alert(a);
}
function update() {
    boo(greeter.greet(), greeter.greet());
}
button.onclick = update;
document.body.appendChild(button);
//@ sourceMappingURL=helloWorld.js.map
