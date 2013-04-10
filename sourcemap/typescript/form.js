var Greeter111 = (function () {
    function Greeter111(element) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    return Greeter111;
})();
function runMe() {
    var el = document.createElement("p");
    var gr = new Greeter111(el);
    document.body.appendChild(gr.element);
}
//@ sourceMappingURL=form.js.map
