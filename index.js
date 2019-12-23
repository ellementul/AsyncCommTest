function randTest(gen, valid, repeat){
	if(typeof gen !== "function")
		throw new TypeError("The generator isn't function!");

	if(typeof valid !== "function")
		throw new TypeError("The validator isn't function!");

	repeat = parseInt(repeat);
	if(repeat < 1)
		repeat = 1;


	function connect(outFunc){

		setTimeout(testing, 0, outFunc);
		return inputTest;
	}

	function testing(outFunc){
		console.log("Testing...");

		let numberMsg = repeat;

		while(numberMsg--)
			outFunc(gen());
	}

	function inputTest(mess){
		let res = valid(mess);

		if(res)
			throw new TypeError(res);

		repeat--;

		if(repeat === 0)
			console.log('Success!');
	}

	return {
		connect,
	};
}

module.exports = {
	randTest,
};