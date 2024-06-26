import {
  useContext,
  useState,
  useMemo,
  useEffect,
  isValidElement,
  cloneElement,
} from "react";
import FormContext from "./context";

export default function FormItem({
  name,
  children,
  label,
  height = 50,
  labelWidth,
  required = false,
  rules = {},
  trigger = "onChange",
  validateTrigger = "onChange",
}) {
  const formInstance = useContext(FormContext);
  const { registerValidateFields, dispatch, unRegisterValidate } = formInstance;
  const [, forceUpdate] = useState({});
  const onStoreChange = useMemo(() => {
    /* 管理层改变 => 通知表单项 */
    const onStoreChange = {
      changeValue() {
        forceUpdate({});
      },
    };
    return onStoreChange;
  }, [formInstance]);
  useEffect(() => {
    /* 注册表单 */
    name && registerValidateFields(name, onStoreChange, { ...rules, required });
    return function () {
      /* 卸载表单 */
      name && unRegisterValidate(name);
    };
  }, [onStoreChange]);
  /* 使表单控件变成可控制的 */
  const getControlled = (child) => {
    const mergeChildrenProps = { ...child.props };
    if (!name) return mergeChildrenProps;
    /* 改变表单单元项的值 */
    const handleChange = (e) => {
      const value = e.target.value;
      /* 设置表单的值 */
      dispatch({ type: "setFieldsValue" }, name, value);
    };
    mergeChildrenProps[trigger] = handleChange;
    if (required || rules) {
      /* 验证表单单元项的值 */
      mergeChildrenProps[validateTrigger] = (e) => {
        /* 当改变值和验证表单，用统一一个事件 */
        if (validateTrigger === trigger) {
          handleChange(e);
        }
        /* 触发表单验证 */
        dispatch({ type: "validateFieldValue" }, name);
      };
    }
    /* 获取 value */
    mergeChildrenProps.value = dispatch({ type: "getFieldValue" }, name) || "";
    return mergeChildrenProps;
  };
  let renderChildren;
  if (isValidElement(children)) {
    /* 获取 | 合并 ｜ 转发 | =>  props  */
    renderChildren = cloneElement(children, getControlled(children));
  } else {
    renderChildren = children;
  }
  return (
    <Label
      height={height}
      label={label}
      labelWidth={labelWidth}
      required={required}
    >
      {renderChildren}
      <Message name={name} {...dispatch({ type: "getFieldModel" }, name)} />
    </Label>
  );
}

function Label({ children, label, labelWidth, required, height }) {
  return (
    <div className="form-label" style={{ height: height + "px" }}>
      <div className="form-label-name" style={{ width: `${labelWidth}px` }}>
        {required ? <span style={{ color: "red" }}>*</span> : null}
        {label}:
      </div>{" "}
      {children}
    </div>
  );
}

function Message(props) {
  const { status, message, required, name, value } = props;
  let showMessage = "";
  let color = "#fff";
  if (required && !value && status === "reject") {
    showMessage = `${name} 为必填项`;
    color = "red";
  } else if (status === "reject") {
    showMessage = message;
    color = "red";
  } else if (status === "pendding") {
    showMessage = null;
  } else if (status === "resolve") {
    showMessage = "校验通过";
    color = "green";
  }
  return (
    <div className="form-message">
      <span style={{ color }}>{showMessage}</span>
    </div>
  );
}

export const Input = (props) => {
  return <input className="form-input" {...props} />;
};

export function Select({ children, ...props }) {
  return (
    <select {...props} className="form-input">
      <option label={props.placeholder} value={null}>
        {props.placeholder}
      </option>
      {children}
    </select>
  );
}
/* 绑定静态属性   */
Select.Option = function (props) {
  return <option {...props} className="" label={props.children}></option>;
};
