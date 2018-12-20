# 빌트인 타입들
유용한 빌트인 타입들을 모아서 정리하고 사용 법을 작성 합니다.

## 맴버 재설정

### Partial
아래 `hamburger` 멤버는 모두 `undefined` 이 될 수 있습니다.
```typescript
interface IHamburger {
  ham: boolean
  cheese: boolean
  tomato: boolean
}

class Tom {
  constructor(hamburger: Partial<IHamburger>){
    // cheese 는 undefined 이 될 수 있다.
    console.log(hamburger.cheese)
  }
}
```

### Required
아래 `hamburger` 멤버는 모두 값이 있어야 합니다.
```typescript
interface IHamburger {
  ham: boolean
  cheese?: boolean
  tomato?: boolean
}

class Tom {
  constructor(hamburger: Required<IHamburger>){
    // cheese 는 값이 반듯이 있다.
    console.log(hamburger.cheese)
  }
}
```

### PICK
아래 `INewHamberger` 멤버는 `IHamburger` 에서 가져온 `ham`, `cheese` 과 새로운 `INewHamberger`의 맴버인 인 `chicken`을 합해서 `ham`, `cheese`, `chicken` 이 됩니다.

```typescript
interface IHamburger {
  ham: boolean
  cheese: boolean
  tomato: boolean
}

interface INewHamburger extends Pick<IHamburger, 'ham' | 'cheese'>{
  chicken: boolean
}

```

