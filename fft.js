const Player = (name, marker) => {
	const getName = () => prompt('What is your name?');
	return { name, marker, getName };
};

const player1 = Player(getName(), 'X');
