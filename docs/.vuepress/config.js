const _ = require('lodash')
const fs = require('fs')
const {join} = require('path')

const joinPath = (a, b) => (
  `${_.trimEnd(a, '/')}/${_.trimStart(b, '/')}`
)

const px = (path, sidebar) => {
  const paths = sidebar.map((value) => {
    if(typeof  value === 'string'){
      return joinPath(path, value)
    }
    return [joinPath(path, value[0]), value[1]]
  })

  return _.remove(paths, (value) => {
    const path = typeof value === 'string' ? value : value[0]
    const originPath = join(process.cwd(), 'docs', path)
    return fs.existsSync(`${originPath}.md`)
      || fs.existsSync(`${originPath}.html`)
      || fs.existsSync(join(originPath, 'README.md'))
  })
}

const sidebar = [
  '/introduction',
  '/keywords',
  '/build-in-types'
]


module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: '한국어',
      title: '형태명령 손책',
      description: '타입스크립트 스터티용 핸드북입니다.'
    },
    '/en/': {
      lang: 'English',
      title: 'Typescript Handbook',
      description: 'Typescript handbook for study'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        sidebar: px('/',[
          ['/', '홈'],
          ...sidebar
        ])
      },
      '/en/': {
        sidebar: px('/en/',[
          ['/', 'home'],
          ...sidebar
        ])
      }
    },
  }
}