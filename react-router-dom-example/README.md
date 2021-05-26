## Reac-Router-DOM

```
yarn add react-router-dom
```

## Routing

```
사용자가 어떤 주소로 들어왔을 때 그 주소에 해당하는 적당한 페이지를 사용자에게 보내주는 것
```

## BrouserRouter

```
1.  http://localhost:3000/
    path="/"

2.  http://localhost:3000/topics
    path="/"
    path="/topics"

3. 웹서버 설정을 바꿔서 어떤 path로 들어오건 간에 root 페이지에있는 html 파일을 서비스 할 수 있다면 BrouserRouter를 쓰면 된다
   그게 안되면 HashRouter를 써라

* HTML5의 history API를 활용해서 UI를 업데이트 한다
* 동적인 페이지에 적합하다. (서버에 있는 데이터들을 스크립트에 의해 가공 처리 한 후 생서되어 전달되는 웹페이지)
* 새로 고침 하면 경로를 찾기 못해서 에러가 난다. (주소를 사용하여 페이지를 찾아갈 때에도 에러 발생)
* 이를 해결하기 위해서는 서버에 추가적인 세팅이 필요하다. 페이지의 유무를 서버에 알려줘야 하며 서버 세팅시 검색엔진에 신경써야한다.
* github pages에서 설정하기 복잡하다. (배포가 복잡)
참조 : https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC
```

## Route, Switch, Link

```
1. component가 어디에 있더라도 Route path를 지정만 해주면 그 주소와 매칭되는 component는 화면에 나타날 것이다.

2. <Route path="/topics"><Topics></Topics></Route>
   <Route path="/topics"><Topics></Topics></Route>
   이렇게 되어 있으면 Topics가 2번 출력되게 된다.
   즉, Route path와 일치하는 컴포넌트는 어디에 있건 누구건 화면에 출력된다.

3. exact를 쓰지 않고도 exact를 쓴것과 같은 효과를 낼 수 있는 것
   -> switch

4. Switch라는 component로 route를 감싸게 되면 react-router-dom은 path와 일치하는 첫번째 component가 발견되면 나머지 component는 버린다.
    따라서 모든 component는 exact가 없으면 <Route path="/"><Home></Home></Route>에 모두가 걸리기 때문에 언제나 Home이 제일 먼저 출력되어 버리고 나머지는 출력기회를 잃게된다.
    이때, <Route path="/"><Home></Home></Route>를 끝에 놓게되면
    <Route path="/topics"><Topics></Topics></Route>
    <Route path="/contact"><Contact></Contact></Route>
    <Route path="/"><Home></Home></Route>
    생각한대로 출력되어진다.

5. 사용자에게 존재하지 않는 페이지를 보여주고 싶을때
    <Route exact path="/"><Home></Home></Route>         // ---> 여기에 exact 추가하고
    <Route path="/topics"><Topics></Topics></Route>
    <Route path="/contact"><Contact></Contact></Route>
    <Route path="/">Not found</Route>                   // 이것 추가

6. Link는 페이지 새로고침 없이 페이지 전환 하게 해주는 것
```

## HashRouter

```
웹서버에서는 #아래는 무시되기 때문에 javascript만 반응 할 수 있게 한 것
http://localhost:3000/#/contact

* URL의 hash를 활용한 라우터이다.
* 주소에 #가 붙는다.
* 정적인 페이지에 적합하다. (미리 저장된 페이지가 그대로 보여지는 웹페이지)
* 검색 엔진으로 읽지 못한다. # 값 때문에 서버가 읽지 못하고 서버가 페이지의 유무를 알지 못하기 때문. (그 이유 때문에 거의 사용하지 않는다.)
* 새로고침 해도 에러가 나지 않는다.
* github pages에서 설정하기 간편하다. (배포가 간편)

참조 : https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC
```

## NavLink

```
1.Link와 기능은 거의 동일

2.클릭한 것 class="active" 가 동적으로 생성
  따라서 사용자가 현재 어떤 페이지가 위치하고 있는지 Nav에 사용자가 위치하고 있는곳을 표시할 수있음
```

## Nested Routing

```

```
