# 키워드들

## 변수 정의 키워드

### const
`const`는 정말 환영받는 ES6 / Typescript 추가 제안 입니다. 변경 할수 없는 값을 지정 할 수 있습니다.

이 키워드는 값이 변경 되지 않을 것이라고 보장합니다. 그럼으로 안심하고 값을 사용 할 수 있습니다.

자바스크립트는 클로저 등을 통해 의도 하지 않게 값이 바뀔 우려가 있습니다. 그런 우려를 해소해 줄 수 있습니다.

```typescript
import _ from 'lodash'
interface IHamburger {
  ham: boolean
  cheese: boolean
  tomato: boolean
}

const name: string = 'super hamburger'
function nameMaker(hamburger: IHamburger) {
  return _.remove(Object.keys(hamburger), (value) => {
    return hamburger[value]
  }).join(' ') + name
}

// nameMaker 가 name 을 변경 하지 못 할 것 입니다.
console.log(nameMaker({ham: true, cheese: true, tomato: false}))
```

이 키워드가 지정되면 반듯이 값이 지정 되어야 합니다.
```typescript
const foo // Error: const declarations must be initialized
```

이 키워드가 지정된 값이 배열 혹은 오브젝트이면 맴버는 변경이 가능 합니다.
```typescript
const foo = [0, 1, 2]
foo.push(3) // [0, 1, 2, 3]
const bar = {a: 'a'}
foo.a = 'A' // {a: 'A'}
```

## 형 정의 키워드

### this
함수 내의 this 를 정의 합니다.
```typescript
import _ from 'lodash'
interface IHamburger {
  ham: boolean
  cheese: boolean
  tomato: boolean
}

function nameMaker(this: IHamburger, name: string) {
  if(this.cheese){
    console.log('cheese', name)
  }
}

function nameMaker(this: IHamburger, name: string) {
  return _.remove(Object.keys(this), (value) => {
    return this[value]
  }).join(' ') + name
}

// 함수 사용하기
// name 부터가 첫번째 매개변수 이다.
nameMaker.call({ham: true, cheese: true, tomato: false}, 'super burger')
```