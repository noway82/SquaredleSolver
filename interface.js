const board = [];

function sortLengths(arr) {
	let lengths = [];
	for (let str of arr) {
		if (!lengths.includes(str.length)) {
			lengths.push(str.length);
		}
	}
	lengths.sort((a, b) => {
		return a - b;
	});
	for (let length of lengths) {
		$("#display").append("<ul class='wordBlock' id='" + length + "'><h2>" + length + " letters</h2></ul>");
	}
	for (let word of arr) {
		console.log(word, word.length);
		$("#" + word.length).append("<li class='word'>" + word + "</li>");
	}
}

$(document).ready(() => {
	$("#boardsize").on("change", () => {
		if ($("#boardsize").val() < 3) {
			return;
		}
		$("#board").empty();
		let td = "";
		for (let i = 0; i < $("#boardsize").val(); i++) {
			td += "<td><input type='text' maxlength='1' class='letterInput'></td>";
		}
		for (let j = 0; j < $("#boardsize").val(); j++) {
			$("#board").append("<tr>" + td + "</tr>");
		}
	});
	$("#start").on("click", () => {
		$("#display").empty();
		let row = [];
		for (let i = 0; i < $("#boardsize").val(); i++) {
			row.push(new Square());
		}
		for (let y = 0; y < board.length; y++) {
			for (let x = 0; x < board.length; x++) {
				for (let row of board) {
					for (let square of row) {
						square.used = false;
					}
				}
				createAdjacent(y, x, board[y][x].value);
			}
		}
		final = removeDupes(final);
		$("#display").append("<p>Total words found: " + final.length + "</p>");
		console.log(final);
		sortLengths(final);
	});
});
