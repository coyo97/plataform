import express, { Express } from "express"

export default class App {

	private appServer: Express;

	constructor() {

		this.appServer = express();
	}
	public getAppServer() {
		return this.appServer;
	}
}


