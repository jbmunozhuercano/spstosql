const todayDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return concatZeros(day, month, year, hours, minutes, seconds)
}

const concatZeros = (...elements) => {
  let result

  elements.forEach((e, i) => {
    i === 0
      ? (result = e < 10 ? ('0' + e).slice(-2) : e)
      : (result += e < 10 ? ('0' + e).slice(-2) : e)
  })

  return result
}

export { todayDate }

const createQueryLine = (table_name, line, id, id_lang) => {
  const metaTitle = line['meta_title'].replaceAll('"', "'")
  const metaDescription = line['meta_description'].replaceAll('"', "'")

  return `UPDATE ${table_name} SET meta_title = "${metaTitle}", meta_description = "${metaDescription}" WHERE ${id} = ${line['id']} AND id_lang = ${id_lang};\n`
}

export { createQueryLine }
