const path = require('path');

const title = 'Template Project';

module.exports = {
	outputDir: path.resolve(__dirname, 'docs'),
	pages: {
		index: {
			title,
			entry: 'src/main.js',
		}, 
	},
	publicPath: "./",
};
