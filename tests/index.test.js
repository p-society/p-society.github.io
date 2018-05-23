const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

describe('yml format', () => {
  it('checks for yml format', () => {
    fs.readdir(path.resolve(__dirname, '../_contributors-app'), (err, files) => {
      if (err) throw new Error(err)
      files.forEach((file) => {
        try {
          var doc = fs.readFileSync(path.resolve(__dirname, `../_contributors-app/${file}`))
          const data = Buffer.from(doc, 'base64').toString('ascii')
          const first = String(data).slice(3)
          const second = first.indexOf('---')
          const third = first.substr(0, second)
          const finalString = yaml.safeLoad(third)
          expect(typeof (finalString).project).toBe('object')
          expect(typeof (finalString).name).toBe('string')
          expect(typeof (finalString).description).toBe('string')
          expect(typeof (finalString).picUrl).toBe('string')
          expect(typeof (finalString).skills).toBe('string')
          expect(typeof (finalString).speciality).toBe('string')
          expect(typeof (finalString).githubUsername).toBe('string')
        } catch (e) {
          throw new Error(e)
        }
      })
    })
  })
})
