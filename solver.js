class Square {
	constructor(val) {
		this.value = val;
		this.used = false;
	}
}
/*
const board = [
	[new Square("c"), new Square("e"), new Square("l"), new Square("a")],
	[new Square("m"), new Square("l"), new Square("u"), new Square("r")],
	[new Square("y"), new Square("e"), new Square("l"), new Square("t")],
	[new Square("d"), new Square("d"), new Square("c"), new Square("u")]
];
const board = [
	[new Square("b"), new Square("u"), new Square("n"), new Square("n"), new Square("y")],
	[new Square("c"), new Square("a"), new Square("h"), new Square("d"), new Square("e")],
	[new Square("e"), new Square("p"), new Square("v"), new Square("g"), new Square("d")],
	[new Square("e"), new Square("a"), new Square("s"), new Square("l"), new Square("g")],
	[new Square("p"), new Square("p"), new Square("t"), new Square("e"), new Square("r")],
];
*/
let final = [];
function createAdjacent(y, x, current) {
	if (current.length == 1) {
		board[y][x].used = true;
	}
	if (trie.search(current)) {
		final.push(current);
	}
	let adjacent = [];
	if (x < board.length - 1) {
		// look right
		if (!board[y][x + 1].used && trie.prefix(current + board[y][x + 1].value)) {
			adjacent.push([y, x + 1]);
		}
	}
	if (x > 0) {
		// look left
		if (!board[y][x - 1].used && trie.prefix(current + board[y][x - 1].value)) {
			adjacent.push([y, x - 1]);
		}
	}
	if (y < board.length - 1) {
		// look down
		if (!board[y + 1][x].used && trie.prefix(current + board[y + 1][x].value)) {
			adjacent.push([y + 1, x]);
		}
		if (x < board.length - 1) {
			// look down & right
			if (!board[y + 1][x + 1].used && trie.prefix(current + board[y + 1][x + 1].value)) {
				adjacent.push([y + 1, x + 1]);
			}
		}
		if (x > 0) {
			// look down & left
			if (!board[y + 1][x - 1].used && trie.prefix(current + board[y + 1][x - 1].value)) {
				adjacent.push([y + 1, x - 1]);
			}
		}
	}
	if (y > 0) {
		// look up
		if (!board[y - 1][x].used && trie.prefix(current + board[y - 1][x].value)) {
			adjacent.push([y - 1, x]);
		}
		if (x < board.length - 1) {
			// look up & right
			if (!board[y - 1][x + 1].used && trie.prefix(current + board[y - 1][x + 1].value)) {
				adjacent.push([y - 1, x + 1]);
			}
		}
		if (x > 0) {
			// look up & left
			if (!board[y - 1][x - 1].used && trie.prefix(current + board[y - 1][x - 1].value)) {
				adjacent.push([y - 1, x - 1]);
			}
		}
	}
	for (let coord of adjacent) {
		const [newY, newX] = coord;
		board[newY][newX].used = true;
		createAdjacent(newY, newX, current + board[newY][newX].value);
		board[newY][newX].used = false;
	}
	return;
}

function removeDupes(a) {
	let seen = {};
	return a.filter(item => {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}