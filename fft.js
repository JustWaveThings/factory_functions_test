///

const Player = () => {
	let name = 'Alex';

	const setName = (newName) => {
		name = newName;
	};
	const getName = () => name;
	return { getName, setName };
};

const player1 = Player();

console.log(player1);
player1.name = 'Tabitha';
console.log(player1);
player1.setName();
console.log(player1);
/* console.log(player1);
player1.name = 'toby';
console.log(player1);
player1.name = 'jeremy';
console.log(player1);
player1.set();
console.log(player1);
 */
