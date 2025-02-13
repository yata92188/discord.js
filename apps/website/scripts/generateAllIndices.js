import { readFile } from 'node:fs/promises';
import { generateAllIndices } from '@discordjs/scripts';

console.log('Generating all indices...');
await generateAllIndices({
	fetchPackageVersions: async (pkg) => {
		console.log(`Fetching versions for ${pkg}...`);
		return ['main'];
	},
	fetchPackageVersionDocs: async (pkg, version) => {
		console.log(`Fetching data for ${pkg} ${version}...`);
		return JSON.parse(await readFile(`${process.cwd()}/../../packages/${pkg}/docs/docs.api.json`, 'utf8'));
	},
});
console.log('Generated all indices.');
