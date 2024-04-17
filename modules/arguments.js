import yargs from 'yargs/yargs';

const argv = yargs(process.argv.slice(2))
	.option('filename', {
		demandOption: true,
		alias: 'fn',
		type: 'string',
		describe: 'Nombre del archivo a tratar'
	})
	.option('tablename', {
		demandOption: true,
		alias: 'tb',
		type: 'string',
		describe: 'Nombre de la tabla'
	})
	.option('id',{
		demandOption: true,
		alias: 'k',
		type: 'string',
		describe: 'Nombre del id para la cláusula WHERE'
	}).argv;

export {argv};