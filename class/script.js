class Hotel { //create class
    constructor() { //constructor
        this.hotelname = "Taj Palace";
        this.totalroom = 250;
        this.bookedroom = 229;
        this.roomprice = 8900;
        this.location = "New Delhi";
    }
    getAvailability() { //methodology(functionality)
        return this.totalroom - this.bookedroom;
    }
    printdetails() {
        let temp = `<h2>Name:${this.hotelname}</h2>`
        temp += `<h4>Total Room:${this.totalroom}<br/>`
        temp += `Booked:${this.bookedroom}<br/>`
        temp += `Price:₹${this.roomprice}<br/>`
        temp += `Location:${this.location}</h4>`
        temp += `<h3>Total Available Room:${this.getAvailability()}</h3>`
        return temp
    }
}
let hotel = new Hotel() //create instance
document.querySelector("#box").innerHTML = hotel.printdetails()