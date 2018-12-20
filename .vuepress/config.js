const _ = require('lodash')

const joinPath = (a, b) => (
  `${_.trimEnd(a, '/')}/${_.trimStart(b, '/')}`
)

const px = (path, sidebar) => {
  return sidebar.map((value) => {
    if(typeof  value === 'string'){
      return joinPath(path, value)
    }
    return [joinPath(path, value[0]), value[1]]
  })
}

const sidebar = [
  '/introduction'
]


module.exports = {
  base: process.env.NODE_ENV === 'production' ? 'typescript-korea.github.io' :'/',
  locales: {
    '/': {
      lang: 'ko-KR',
      title: '형태명령 손책',
      description: '타입스크립트 스터티용 핸드북입니다.'
    },
    '/en/': {
      lang: 'en-US',
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