import xlsx from 'xlsx'
import fs from 'fs'
import { todayDate, createQueryLine } from './utils.js'

var date = todayDate()

const xlsxToSql = (table_name, argv, id_lang) => {
  const writeStream = fs.createWriteStream(`${table_name}_${date}.sql`)
  const file = xlsx.readFile(argv.filename)
  const sheets = file.SheetNames

  for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]], {
      range: 1,
      header: ['id', 'meta_title', 'meta_description'],
    })

    temp.forEach((line) => {
      const csvLine = createQueryLine(table_name, line, argv.id, id_lang)
      //console.log(csvLine + '\r');
      writeStream.write(csvLine)
    })
  }
}

export default xlsxToSql
