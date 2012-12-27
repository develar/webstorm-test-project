/**
 * Created with IntelliJ IDEA.
 * User: Elena.Pogorelova
 * Date: 10/31/12
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
        interface Person {
    firstname: string;
    lastname: string;
}
class Student {
    _fullname:string;


    constructor(public firstname, public middleinitial, public lastname) {
        this._fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

function greeter(person:Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user1 = new Student("Ekaterina", "A.", "Alekseeva");

document.body.innerHTML = greeter(user1).toLowerCase();