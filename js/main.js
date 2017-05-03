// 3.
	// document.getElementById("piscine").innerHTML = "something something"

// 4.
	// function something() {
	// 	 var steal = document.getElementById("text").textContent
	// 	 document.getElementById('piscine').innerHTML = "<h1>" + steal + "</h1>"
	// }
	// something()

// 5.
	// function Info() {
	// 	var username = document.getElementById("username").value
	// 	console.log("Your name is " + username + " and it's a great one.")
	// }

//6.
	// var apple = ["MacBook", "iPad", "iPhone", "iPod", "MacBook Pro"]

	// for(i = 0; i < apple.length; i++) {
	// 	console.log(apple[i])
	// }

// 7.
	// var appleObject = {
	// 	creator: "Steve Jobs",
	// 	year: 1976,
	// 	free: false
	// }
	// console.log(appleObject.creator)
	// console.log(appleObject.year)
	// console.log(appleObject.free)

// 8.
	var waterArray = [
		{
			name: "Evian",
			origin:"French Alps",
			taste: 10
		},
		{
			name: "ArrowHead",
			origin:"USA",
			taste: 5
		},
		{
			name: "Dasani",
			origin:"USA",
			taste: 4
		},
		{
			name: "Volvic",
			origin:"France",
			taste: 4
		}
	]

	for(i = 0; i < waterArray.length; i++) {
		if(waterArray[i].taste <= 5) {
			console.log(waterArray[i].name + " " + waterArray[i].taste)
		}
	}