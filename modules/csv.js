import { parse } from 'csv-parse'
import fs from 'fs'
import { todayDate, createQueryLine } from './utils.js'

var date = todayDate()

const csvToSql = async (table_name, argv, id_lang) => {
  const writeStream = fs.createWriteStream(`${table_name}_${date}.sql`)
  const delimeter = ','

  fs.createReadStream(argv.filename)
    .pipe(
      parse({
        delimiter: delimeter,
        from_line: 2,
        columns: ['id', 'meta_title', 'meta_description'],
      })
    )
    .on('data', (line) => {
      const csvLine = createQueryLine(table_name, line, argv.id, id_lang)
      //console.log(csvLine + '\r');
      writeStream.write(csvLine)
    })
}

export default csvToSql
