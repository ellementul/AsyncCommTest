module.exports = function CrModule(Commun, type){
	let send = Commun.connect(input);



	function input(msg){
		let res = type.test(msg);

		if(res)
			throw new TypeError();

		send(type.rand());
	}
}