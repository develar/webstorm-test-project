class Greeter111{
    element:HTMLElement;
    span:HTMLElement;


    constructor(element:HTMLElement){
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span) ;
        this.span.innerText = new Date().toUTCString();
    }


}
function runMe() {

    var el = <HTMLParagraphElement> document.createElement("p");
    var gr = new Greeter111(el);
    document.body.appendChild(gr.element);
}

//runMe();

