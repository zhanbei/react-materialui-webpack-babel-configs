'use strict';

const targetPackage = require('../package');
const templatePackage = {
	scripts: require('./package/scripts'),
	devDependencies: require('./package/devDependencies'),
};

if (!targetPackage.devDependencies) {
	console.log('Field package.json#devDependencies is empty.');
} else if (JSON.stringify(targetPackage.devDependencies) !== JSON.stringify(templatePackage.devDependencies)) {
	console.log('Field package.json#devDependencies is different from the template.');
	diffStruct(templatePackage.devDependencies, targetPackage.devDependencies);
}

if (!targetPackage.scripts) {
	console.log('Field package.json#scripts is empty.');
} else if (JSON.stringify(targetPackage.scripts) !== JSON.stringify(templatePackage.scripts)) {
	console.log('Field package.json#scripts is different from the template.');
	diffStruct(templatePackage.scripts, targetPackage.scripts);
}

// Show the differences between the template struct and the target struct.
function diffStruct(template, target) {
	// @see https://stackoverflow.com/questions/1960473/get-all-unique-values-in-an-array-remove-duplicates
	const keys = [...new Set([...Object.keys(template), ...Object.keys(target)])];
	keys.map(key => {
		if (target[key] !== template[key]) {
			console.log(`  -> "${key}" `);
			console.log(`    -->> "${template[key]}"`);
			console.log(`    -->> "${target[key]}"`);
		}
	});
}
