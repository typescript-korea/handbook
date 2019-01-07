# 꿀팁

## 프로젝트 전역 스코프 타입 정의

타입을 지정 할때 한 파일안에 `interface` 와 로직 코드 등이 혼제 하여 혼란 스럽고 가독 성이 떨어 질수 있다. 아래와 같은 코드를 많이 작성 하였을 것 입니다.
```typescript

interface IDeepOptions {
  deep1?: string
  deep2?: string
  deep3?: string
}

interface IOtherDeepOptions {
    deep1?: string
    deep2?: string
    deep3?: string
}

interface IMyAwesomeOptions {
  name: string
  someDeepOptions: IDeepOptions
  otherDeepOptions: IOtherDeepOptions
}

class mMyAweSome {
  name: string
  constructor(options: IMyAwesomeOptions) {
    this.name = options.name
  }
  // ... logic !!
}
```

이렇게 많은 로직과 타입 정의가 한 파일에 혼합 되어 있으면 상당히 보기 불편 합니다.

이런것은 프로젝트안에서만 약속한 이름으로 타입들을 정해 놓는 것이 좋습니다.


./types/project/index.d.ts
```typescript
declare module 'project' {
  export interface IDeepOptions {
    deep1?: string
    deep2?: string
    deep3?: string
  }
  
  export interface IOtherDeepOptions {
      deep1?: string
      deep2?: string
      deep3?: string
  }
  
  export interface IMyAwesomeOptions {
    name: string
    someDeepOptions: IDeepOptions
    otherDeepOptions: IOtherDeepOptions
  }
}

```
./src/index.ts
```typescript
import {IMyAwesomeOptions} from 'project'

class mMyAweSome {
  name: string
  constructor(options: IMyAwesomeOptions) {
    this.name = options.name
  }
  // ... logic !!
}

```

위와 같이 깔끔하게 정리 할 수 있습니다.
