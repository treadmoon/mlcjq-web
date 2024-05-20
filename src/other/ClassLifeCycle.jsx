import React, { Component } from "react";

class ClassLifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("constructor ClassLifeCycle", props);

    this.state = {
      name: "ming",
      age: 24,
    };
  }

  //   construct之后，渲染之前，一般用于服务端
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  //   代替componentWillMount
  //   在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据 shouldComponentUpdate()
  //   的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
  //   getDerivedStateFromProps() {
  //     console.log("getDerivedStateFromProps");
  //   }

  //   dom挂在，可ajax请求数据
  componentDidMount() {
    console.log("componentDidMount");
  }

  //   的触发不是因为传递 props 变化，而是父组件只要被 re-render（重渲染），
  //   那么子组件的 componentWillReceiveProps 就会被执行
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  // 1.主要用于性能优化(部分更新)
  // 2.唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，
  // 在这里return false可以阻止组件的更新
  // 3.因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，
  // 因此需要在子组件的该生命周期中做判断
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  // 代替update
  //  在最近一次渲染输出（提交到 DOM 节点）之前调用。
  //   getSnapshotBeforeUpdate() {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h4>parent:{this.state.age}</h4>
        <button
          onClick={() => {
            this.setState({
              age: (Math.random() * 99).toFixed(),
            });
          }}
        >
          click
        </button>
        <LChild parent={this.state} />
      </div>
    );
  }
}

class LChild extends Component {
  constructor(props) {
    super(props);

    console.log("constructor LChild", props);
    this.state = {
      parent: props.parent,
      son: "ning",
      age: 2,
    };
  }

  UNSAFE_componentWillMount() {
    console.log("LChild componentWillMount");
  }

  //   getDerivedStateFromProps() {
  //     console.log("LChild getDerivedStateFromProps");
  //   }

  componentDidMount() {
    console.log("LChild componentDidMount");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("LChild componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LChild shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("LChild componentWillUpdate");
  }

  //   getSnapshotBeforeUpdate() {
  //     console.log("LChild getSnapshotBeforeUpdate");
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("LChild componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("LChild componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h4>LChild</h4>
      </div>
    );
  }
}

export default ClassLifeCycle;
