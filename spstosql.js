import fs from 'fs';
import xlsx from 'xlsx';
import {parse} from 'csv-parse';
import {todayDate, createQueryLine} from './modules/utils.js';
import {argv} from './modules/arguments.js';

const extension = argv.filename.split('.')[1];
const table_name = argv.tablename;
const id = argv.id;
const id_lang = 1;
const date = todayDate();

if (extension == 'xlsx') {
	const writeStream = fs.createWriteStream(`${table_name}_${date}.sql`);
	const file = xlsx.readFile(argv.filename);
	const sheets = file.SheetNames;

	for (let i = 0; i < sheets.length; i++) {
		const temp = xlsx.utils.sheet_to_json(
			file.Sheets[file.SheetNames[i]],
			{ 
				range: 1, 
				header: ['id','meta_title','meta_description']
			}
		);

		temp.forEach((line) => {
			const csvLine = createQueryLine(table_name, line, id, id_lang);
			//console.log(csvLine + '\r');
			writeStream.write(csvLine);
		});
	}
} else if (extension == 'csv') {
	const writeStream = fs.createWriteStream(`${table_name}_${date}.sql`);
	const delimeter = ',';

	fs.createReadStream(argv.filename)
	.pipe(parse({
			delimiter: delimeter,
			from_line: 2,
			columns: ['id','meta_title','meta_description']
		})).on("data", (line) => {
			const csvLine = createQueryLine(table_name, line, id, id_lang);
			//console.log(csvLine + '\r');
			writeStream.write(csvLine);
	})
} else {
	console.error(`¡La extensión de archivo ${extension} no es válida!`);
}

