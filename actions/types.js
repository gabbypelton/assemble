// I get tired of writing out types
// twice for every value times three if async
// this is my solution for that

const syncTypes = [];
const asyncTypes = [
	"LOGIN",
	"REGISTER",
	"GET_OWN_SERVERS",
	"FIND_SERVERS"
];
const typesObject = {};

syncTypes.forEach(type => {
	typesObject[type] = type;
});

asyncTypes.forEach(type => {
	typesObject[type] = type;
	typesObject[type + "_SUCCESS"] = type + "_SUCCESS";
	typesObject[type+ "_FAIL"] = type + "_FAIL";
});

export default typesObject;
