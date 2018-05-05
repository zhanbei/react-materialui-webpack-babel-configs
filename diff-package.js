'use strict';

const targetPackage = require('../package');
const templatePackage = {
	scripts: require('./package/scripts'),
	devDependencies: require('./package/devDpendencies'),
};

if (JSON.stringify(targetPackage.devDependencies) !== JSON.stringify(templatePackage.devDependencies)) {
	console.log('Filed package.json#devDependencies are different from the template.');
	diffStruct(templatePackage.devDependencies, targetPackage.devDependencies);
}

if (JSON.stringify(targetPackage.scripts) !== JSON.stringify(templatePackage.scripts)) {
	console.log('Filed package.json#scripts are different from the template.');
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
