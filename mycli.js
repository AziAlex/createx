#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { Command } = require('commander')

const program = new Command()

const dirsWithUi = ['shared'];

function getTargetPath(dirname, component) {
  const baseDir = dirsWithUi.includes(dirname) ? `${dirname}/ui` : dirname 
  return path.join(process.cwd(), 'src', baseDir, component)
}

program
  .command('create <dirname> <component> [files...]')
  .description('create shared')
  .action((dirname, component, files) => {
    const dirPath = getTargetPath(dirname, component)

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
      console.log(
        `Shared component 'shared/ui/${dirname}' successfully created.`,
      )

      const indexPath = path.join(dirPath, 'index.tsx')
      const indexCode = `const index = () => {
  return (
    <div>index</div>
  )
}

export default index;
`
      fs.writeFileSync(indexPath, indexCode)

      const stylePath = path.join(dirPath, 'style.module.scss')
      fs.writeFileSync(stylePath, '')

      console.log(
        `Files 'index.tsx' и 'style.module.scss' successfully created.`,
      )
    } else {
      console.error(`Shared '${dirname}' already exists.`)
      return
    }

    if (files && files.length > 0) {
      files.forEach((filename) => {
        const filePath = path.join(dirPath, filename)
        fs.writeFileSync(filePath, '')
        console.log(`Shared '${filename}' created.`)
      })
    }
  })

program.parse(process.argv)
