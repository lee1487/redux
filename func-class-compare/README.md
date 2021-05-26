## react class vs function

```
1. props는 functional 이건 class 건 양쪽 다 쓸 수 있다.
   그러나 state는 class방식에서만 사용할 수 있었는데 hook으로 인해 이것이 바뀌었다.
2. component가 내부적으로 자신의 상태를 바꾸고 관리하기 위해 사용되어진 state는 어떻게 functional에서 써야되고 class방식에서 써야되는지 알아보는게 목표

-------------------------------------------------------------

1. hook의 특징은 use로 시작
2. useState는 배열이 리턴되고 그배열은 2개의 값으로 이루어져 있다.
   배열이 갖고 있는 첫번째 값이 state값이 되고  state의 값을 주고 싶을 때 useState()의 첫번째 인자로
   그 값을 줄 수 있다.
3. class방식에서 random을 클릭할 때마다 값이 바뀌는 이유는 this.setState라는 메소드에 새로운 state값을 넘겨주는 것을 통해 state를 업데이트 시키고
   업데이트되면 리액트가 class의 render 메소드를 호출한다.
     -> function 에서는 useState() 값이 리턴하는 배열의 두번째 값이 상태를 바꾸는 함수이다.
4. class 방식에서는 state를 하나의 객체 안에 넣어야 했는데 functional 방식에서는 state를 만들때마다 useState를 생성 하면 된다.

-------------------------------------------------------------

함수방식이 class 방식에 버금가는 가능성을 갖게된 중요한 2가지 측면
1. useState()로 인해 state를 사용할 수 있게 되었다.
2. lifecylcle을 다룰 수 있게 되었다.

react lifecycle
1. 컴포넌트가 생성 되었다고 하면 componentWillMount라는 메소드를 react가 그 컴포넌트에 구현되어 있는 메소드를 호출하도록 약속되어 있다.
   그래서 우리가 어떤 component가 mount 즉, 생성되기 전에 처리해야될 일이 있다면 componentWillMount라는 메소드를 구현하는 것을 통해서
   또 그안에 우리가 필요로 하는 코드를 구현하는 것을 통해 component가 생성 되기 직전에 즉, render()가 호출되기 전에 해야될 일을 그안에 갖다 놓을 수 있다.
   그리고나서 render() 메소드가 호출되면 mount가 되는 것이다.
   그 다음에 해야될 일이 있다면 componentDidMount() 메소드를 그 component를 구현하는 개발자가 구현하는 것을 통해 component가 생성된 후에 해야될 일을 처리할 수 있게 할 수 있다.

2. 컴포넌트가 만들어진뒤 컴포넌트에 변화가 생길 수 있다. state가 바뀌거나 props가 바뀌거나 등등.. 그때마다 render() 메소드가 호출될 것인데
   render() 메소드가 호출되기전에 render() 메소드가 호출되어야 할 필요가 있는지 없는지 결정하는 shouldCompnentUpdate 메소드 존재
   또 componentWillUpdate, componentDidUpdate 도 존재
3. shouldCompnentUpdate는 render()를 호출할 필요가 있냐 없냐를 우리가 코드를 짜는 것을 통해서 true를 호출하면 render()가 호출되고 false를 리턴하면 render()를 호출 하지 않는
   성능과 관련된 메소드
4. class 방식에서는 lifecycle을 통해 원하는 타이밍에 정해진 이름의 메소드의 내용을 구현하는 것을통해 원하는 것을 실행 할 수 있었다.
   그게 hook을 통해서 function 방삭에서 가능해 졌다.

-------------------------------------------------------------

함수 방식에서 lifecycle 구현
useEffect

1. 어떻게 하면 이 render()와 관련된 FuncComp가 실행된 후에 추가적으로 필요로 하는 작업을 처리하게 할 수 있을까?
   -> react의 useEffect() 사용
2. useEffect()는 render()가 끝났을 때 실행되고 그 다음에 render()가 또 실행될 때마다 실행
   -> componentDidMount & componentDidUpdate와 같은 효과를 냄
3. useEffect: 이 훅의 이름이 Effect인 이유?
   ->Effect는 side effect가 생략된 말이다.
     리액트에서 사이드 이펙트라는 것은  react component의 메인 effect(funcComp가 호출되었을 때 리턴되는 결과)에서 벗어나는 작업들을 통칭하는 것
     side effect를 적당한 타이밍에 작용하도록 하는 약속된 api가 useEffect이다.
4. useEffect는 복수개 사용 가능

-------------------------------------------------------------

useEffect의 cleanup
ex) 프로세스가 종료되기 전에 사용자가 화면을 떠날 수 있다 이럴 때 메모리 누수 방지를 위해 사용
function Example(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        let mounted = true
        fetchAPI.then(() => {
            if (mounted) {
                setloading(false)
            }
        })

        return function cleanup() {
            mounted = false
        }
    }, [])

    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>
}

1. lifecycle에서 componentWillMount, componentDidMount 에서 초기 작업을 많이 실행 그뒤에 component가 소멸할 때의 뒤처리는
   componentWillUnmount를 통해서 구현
2. useEffect에서는 return 값을 함수로 주면 cleanup 가능
3. useEffect가 실행이 되고나서 다시 useEffect가 실행될 때 그전에 정리하는 작업을 필요로 한다면 return 값으로 함수를 주면 useEffect에 인자로 넘겨준 함수가
   다시 실행될때 return에 주어진 함수가 실행된다.

```
