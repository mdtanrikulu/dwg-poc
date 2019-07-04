const spawn = require('child_process').spawn;
function executeScript(command, parameter = [], cwd = null) {
	const child = cwd
		? spawn(command, parameter, { cwd: cwd})
		: spawn(command, parameter);

	return new Promise((resolve, reject) => {
		child.stderr.on('data', function(data) {
			const errorData = data.toString('utf8');
			console.error('STDERR:', errorData);
			if (errorData.includes('Cloning')) return;
			reject(data);
		});
		child.stdout.on('data', function(data) {
			const resultData = data.toString('utf8')
			console.log('STDOUT:', resultData);
			if(resultData.includes('Serving pages from memory'))
				resolve(child);
		});
		child.on('exit', function(exitCode) {
			console.log('Child exited with code: ' + exitCode);
			resolve(exitCode);
		});
	});
}

module.exports = executeScript;
