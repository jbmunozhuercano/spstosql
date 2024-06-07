import xlsxToSql from './modules/xlsx.js'
import csvToSql from './modules/csv.js'
import { argv } from './modules/arguments.js'

const extension = argv.filename.split('.')[1]
const table_name = argv.tablename
const id_lang = 1
const id_shop = 1

if (extension == 'xlsx') {
  xlsxToSql(table_name, argv, id_lang, id_shop)
} else if (extension == 'csv') {
  csvToSql(table_name, argv, id_lang, id_shop)
} else {
  console.error(`¡La extensión de archivo ${extension} no es válida!`)
}
