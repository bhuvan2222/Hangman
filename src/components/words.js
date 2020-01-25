var Subjects = [
	"PYTHON",
	"JAVA",
	"C",
	"DATABASE MANAGEMENT SYSTEM",
	"ADVANCED DATABASE MANAGEMENT SYSTEM",
	"COMPUTER SYSTEM ARCHITECTURE",
	"OPERATING SYSTEM",
	"PHYSICS",
	"COMPUTER NETWORKS",
	"LINUX",
	"SOFTWARE ENGINEERING"
];

function randomWord() {
	return Subjects[Math.floor(Math.random() * Subjects.length)];
}

export { randomWord };
