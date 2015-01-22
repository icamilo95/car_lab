function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.state = "off";
	this.passengers = [];
}


Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};


Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function () {
	this.state = "on";
};

Car.prototype.off = function() {
	this.state = "off";
};

Car.prototype.pick_up = function(name) {
	if (this.state === "on") {
	console.log("driving to pick up " + name);
	this.passengers.push(name);
	}
};

Car.prototype.dropOff = function(name) {
	if (this.state === "on") {
		x = this.passengers.indexOf(name);	
		this.passengers.splice(x);
	}

};




module.exports=Car;