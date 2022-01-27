# NextJS Introduction

## ☑ 1. Library VS Framework

**library**

> 개발자로서 자신이 사용하는 것

내가 원하는대로 코드를 작성할 수 있고 사용하고 싶을 때 사용할 수 있음

**framework**

> 자신의 코드를 불러오는 것

내가 코드를 적절한 위치에 잘 적기만 한다면 framework는 내 코드를 불러와서 모든걸 동작하게 함

### ReactJS ( library ) VS NextJS ( framework )

차이점

- **NextJS**에는 REactDOM.render 가 없음
- **ReactJ**S는 어디에서 컴포넌트를 호출하고 라우팅을 할지 자유롭지만 **NextJS**는 정해진 틀 안에서 코드를 짜야하기 때문에 그 규칙을 따라야 함

## ☑ 2. Pages

- pages 폴더 안에 있는 파일 명 -> 해당 파일 url의 이름  
  **따로 라우팅 안해줘도 됨 개꿀 ㅋ**
- 컴포넌트의 이름은 중요하지 않음
- 홈 화면은 기본적으로 **index.js**에서 나옴
- React를 import안해줘도 됨

주의점

- **화면에 보여질 컴포넌트는 export default 해줘야함**
- useState나 useEffect와 같은 react method를 쓰고 싶다면 import 구문을 써줘야함
