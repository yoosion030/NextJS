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

## ☑ 3. Static Pre Rendering

noscript

> 유저가 브라우저에서 자바스크립트를 비활성화 했을 때만 나오는 태그

**client-side-rendering => ReactJS**

> 브라우저가 자바스크립트를 가져와서 client-side의 자바스크립트가 모든 UI를 만듦

- 느린 연결로 웹페이지에 들어갈 경우 초기 화면은 빈 화면이 뜸

=> 아직 자바스크립트 코드를 안가져왔기 때문 자바스크립트 코드를 가져와야 비로소 UI들을 볼 수 있음

- HTML이 js 코드를 가져왔을 때 보여짐

**pre-rendering => NextJS**

> 앱의 초기상태를 활용해서 미리 렌더링 되어짐

- 유저들의 연결 속도가 느리거나 자바스크립트가 비활성화 되어있더라도 페이지를 볼 수 있음
- js 코드를 가져오기 전에도 HTML이 보여짐
- 페이지가 로딩 됐을 때, ReactJS가 넘겨받아서 동작시키게 함

NextJS는 HTML을 페이지의 소스코드에 넣어주기 때문에 유저는 자바스크립트와 ReactJS가 로딩되지 않았더라도 콘텐츠를 볼 수 있음

ReactJS가 로딩되었을 때 기본적으로 이미 존재하는 것들과 연결이 되어서 일반적인 ReactJS앱이 됨

**hydration**

> ReactJS를 프론트엔드 안에서 실행시키는 것

맨 처음 페이지에 들어갔을 때 HTML을 보여지게하고 그러고 나서 ReactJS가 클라이언트로 전송됐을 때 ReactJS 앱이 됨
