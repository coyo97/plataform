
import App from "./app";
import * as dotenv from "dotenv"

if(process.env.NODE_ENV !== 'production') {
	dotenv.config();
}
//todo: Is necessary review all env variable
const server: App = new App();

server.getAppServer().listen(process.env.PORT, () => {
	console.log(`App is running at http://localhost: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
