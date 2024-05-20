- 在```.gitlab-ci.yml```文件的开头添加一行变量，这样就可以让gitlab使用完整克隆而不是浅克隆了。如下：

```
variables:
  GIT_STRATEGY: clone
```

- 使用```pnpm、yarn```要启用```corepack```

#### 这段错误很难找

- Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for  one of the following reasons:1. You might have mismatching versions of React and the renderer (such as React DOM)2. You might be breaking the Rules of Hooks3. You might have more than one copy of React in the same appSee <https://reactjs.org/link/invalid-hook-call> for tips about how to debug and fix this problem.
- 无效的挂钩调用。钩子只能在函数组件的主体内部调用。这可能是由于以下原因之一：1。React和渲染器（如React DOM）2的版本可能不匹配。你可能违反了胡克规则3。您可能在同一个应用程序中有多个React副本请参阅<https://reactjs.org/link/invalid-hook-call>有关如何调试和修复此问题的提示。
