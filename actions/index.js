import * as session from "./session";
import * as servers from "./servers";
console.log(servers);

export default {
	...servers,
	...session
}