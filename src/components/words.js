var Subjects = [
	"Aamir Khan",
       "Aarun Nagar"
];

function randomWord() {
	return Subjects[Math.floor(Math.random() * Subjects.length)];
}

export { randomWord };
