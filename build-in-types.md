# 빌트인 타입들
유용한 빌트인 타입들을 모아서 정리하고 사용 법을 작성 합니다.

## 맴버 재설정

### PICK
아래 `INewHamberger` 멤버는 `chicken`, `ham`, `cheese` 가 됩니다.

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