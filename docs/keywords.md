# 키워드들

## 형 정의 키워드

### this
함수 내의 this 를 정의 합니다.
```typescript
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
```