module.exports = {
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			customFileProtocol: "./",
			protocols: [
				{
					name: "gremic",
					schemes: ["gremic"],
				},
			],
		},
	},
	productionSourceMap: false,
};