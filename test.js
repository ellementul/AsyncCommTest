const Types  =  require("typesjs");
const CrComm  =  require("asyncommun").CrCommunicator;

const CrTestModule  =  require("./TestModule");
const CrRandTestComm  =  require("./index").randTest;

const type = Types.Key.Def();

let generator = type.rand;
let validator = type.test;

let TestComm = new CrRandTestComm(generator, validator, 3);

CrTestModule(TestComm, type);