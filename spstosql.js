import xlsxToSql from './modules/xlsx.js'
import csvToSql from './modules/csv.js'
import { argv } from './modules/arguments.js'

const extension = argv.filename.split('.')[1]
const table_name = argv.tablename
const id_lang = 1

if (extension == 'xlsx') {
  xlsxToSql(table_name, argv, id_lang)
} else if (extension == 'csv') {
  csvToSql(table_name, argv, id_lang)
} else {
  console.error(`¡La extensión de archivo ${extension} no es válida!`)
}
