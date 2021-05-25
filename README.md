## Redux 정리

```
1. 코드의 복잡성을 어떻게 낮출 것인가?
2. 리덕스는 이 코드의 복잡성을 낮춰주고, 어떤 결과를 가져올지 예측가능하게 만들어준다.
3. 리덕스의 특징
   1. Single Source of Truth - 1개의 상태
   2. 1개의 state에 모든 데이터를 넣는다.
   3. 인가된 담당자(특정 함수)를 통해서만 값을 수정한다. - 개발자가 직접 값을 수정할 수 없다.
      - reducer
      - dispatcher
   4. 데이터를 가져 갈 때도, 함부로 가져가지 못한다. - 데이터를 외부에서 직접적으로 제어 할 수 없다.
      - 예기치 않게, state가 바뀌는 것을 사전에 차단하여서, 예측 가능하도록 한다.
   5. state 값이 바뀔 때 마다, 전화를 걸어서, 데이터가 바뀌었으니, 자기가 해야할 일을 하도록 하라고 말해준다.
      - 각각의 애플리케이션은 서로에게 신경 쓸 필요 없이 자기 할 일 만 하면 된다.
   6. Undo / Redo 를 쉽게 할 수 있다.
      - 값을 바꿀 때, 원본을 직접 바꾸지 않고, 원본을 복제하고, 복제한 데이터를 수정해서, 새로운 원본으로 만드는 방법을 채택
   7. 이전의 상태에 대해서도 디버깅을 할 수 있다.
   8. 모듈 리로딩

-----------------------------------------------------------

 개념 action, dispatch, subscribe, reducer, state, getState, render
 리덕스의 핵심은 store => 은행으로 상상해보자
1. 리덕스의 핵심은 Store
2. Store는 정보가 저장되는 곳
3. Store 안에는 state라는 실제 정보가 저장된다.
   - state는 절대 직접 접속이 불가하다. 누군가를 통해야한다.
4. reducer
5. render는 UI를 만들어줄, 개발자가 작성할 코드 부분
6. Store에 접근 하기 전에, 일종의 창구 직원 역할하는 함수(dispatch, subscribe, getState)
7. render는 state 값을 참조해서, UI를 만든다.
8. state가 바뀔 때마다, render가 호출되게할 때, subscribe를 사용한다.

-----------------------------------------------------------

1. submit을 눌렀을 때, 객체 하나를 전송한다. 이때 이 객체를 action이라고 한다.
2. 이 action은 dispatch에 전달된다.
3. dispatch는 2가지 일을 한다.
   - reducer를 호출해서, state 값을 바꾼다.
     - reducer에 현재의 state 값과, action을 값이 주어진다.
     - reducer의 return 하는 객체는 state의 새로운 값이 된다.
     - reducer는 state를 입력 값으로 가지고, action을 참조해서, 새로운 state 값을 만들어서, return 해주는 state를 가공해주는 가공자이다.
   - 이후, subscribe를 이용해서, render를 호출한다.
     - 새로운 state에 맞게 UI가 변한다.

-----------------------------------------------------------

1. redux사용 안하고 만드는것 vs redux 사용하고 만드는것 비교해서 redux 쓰는 이유를 아는 것이 목표
2. 서로 상호작용하는 부품이 2개 존재. 내 색깔 바꾸고 다른 부품 색깔 바꾸고 로직이 2개씩 4개가 필요.
3. 부품이 1개더 늘어나면 3개씩 9개, 1개더 늘어나면 16개의 로직이 필요
4. 한개를 빼버리면 강하게 종속되어 있어서 프로그래밍이 죽어버림 그래서 하나의 부품이라고 볼 수 없게 됨
5. 리덕스를 도입하게되면 store를 도입해 보자
6. 4개의 부품이면 8개의 로직이 필요. store에 내 상태가 변경되었음을 알리는 로직. store에서 변경된 상태를 받아서 내 상태를 변경시키는 로직

-----------------------------------------------------------

1. store를 만들면 자동으로 그 안에 state라는게 생김
2. reducer라는 함수를 만들어서 store에 주입해 준다.
3. reducer가 하는역할은 dispatch에 의해 action이 들어오게되면 reducer가 그 action 값과 기존의 state의 값을 참조해서 새로운 state값을 만들어주는 것이다.
4. state값을 가져올 때는 getState를 쓴다.
5. reducer에 기존 state값이 undefined라면 초기화를 위해 최초로 실행되는 reducer에 대한 호출이기 때문에 원하는 값을 리턴해주면 redux의 store에는 그 초기값이 지정이 되는 것이다.

-----------------------------------------------------------

1. store에 dispatch를 호출하게 되면 store를 생성할 때 제공하는 reducer함수를 호출하도록 약속되어 있음
   reducer에게 이전의 state 값과 action 값을 전달 해줌
2. reducer는 최초 한번은 무조건 실행됨
3. reducer라고 하는 것은 이전의 state와 action을 받아서 다음의 state 값을 리턴해주는 것
4. state값을 복제하고 그 복제한 복사본을 변경한 다음에 그것을 리턴해라.

-----------------------------------------------------------

1. red() 함수를 강제로 처음 호출(fetch 실행???)하고 state값이 바뀔때마다 예를들어 dispatch를 할 때 마다 red 함수를 호출하게 하려면 subscribe에 render를 등록해 놓으면 된다.
2. Redux가 없는 코드는 각각의 component(부품) 간의 의존성이 너무 높음
   예를 들어, 다른 component의 코드를 수정하거나 삭제하면(Red 삭제), 다른 component와(Blue, Green) 연결된 코드가 얽혀있어 오류가 발생
   그러므로 component 추가, 수정, 삭제 시, 기존의 component를 모두 수정해야 함
   하지만, Redux를 통해 중앙 집중형 관리를 하면, 각각의 component는 action(상태가 바뀌었다는 것)을 store에 dispatch(통보)하면 됨
   이에 따른 자신의 변화를 작성 후 store에 subscribe(구독)하면, state가 바뀔 때마다 통보를 받기 때문에 다른 component와의 연결 없이 자신의 모양을 자유롭게 바꿀 수 있음
   즉, 수정해도 다른 부품들은 영향을 받지 않게됨
   요약하면, Redux를 통해 각 Module의 독립성을 보장받을 수 있다.
```

## 참조

```
생활코딩 Redux 참조
https://www.youtube.com/watch?v=Jr9i3Lgb5Qc&list=PLuHgQVnccGMB-iGMgONoRPArZfjRuRNVc
```
