import React, { forwardRef, useRef, cloneElement, useState } from "react";

function Myform(props) {
  const [va, setVa] = useState(1);
  const [vb, setVb] = useState(2);
  const [vc, setVc] = useState(3);
  console.log("----load----", va, vb, vc);
  return (
    <>
      {va}-{vb}-{vc}
      <button
        onClick={() => {
          console.log("clicl111-----------");
          setVa((pre) => {
            console.log("setva", pre);
            setVb((val) => {
              console.log("setvb", val);
              setVc((cval) => {
                console.log("setVc", cval);
                return cval + 2;
              });
              return val + 2;
            });
            return pre * 2;
          });
        }}
      >
        click1
      </button>
      <button
        onClick={() => {
          console.log("clicl222-----------");
          setVa((pre) => {
            console.log("setva", pre);
            return pre * 2;
          });
          setVb((val) => {
            console.log("setvb", val);
            return val + 2;
          });
          setVc((cval) => {
            console.log("setVc", cval);
            return cval + 2;
          });
        }}
      >
        click2
      </button>
      {/* <FormDemo></FormDemo> */}
    </>
  );
}

export default Myform;

const FormDemo = () => {
  const form = useRef(null);
  const submit = () => {
    /* 表单提交 */
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };
  const reset = () => {
    /* 表单重置 */
    form.current.resetForm();
  };
  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input />
        </FormItem>
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="concellbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
};

const Form = forwardRef(({ children }, ref) => {
  const formRef = useRef(null);
  ref.current = {
    submitForm: (cb) => {
      const res = {};
      for (let i = 0; i < formRef.current.length; i++) {
        res[formRef.current[i].name] = formRef.current[i].value;
      }
      cb(res);
    },
    resetForm: () => {
      for (let i = 0; i < formRef.current.length; i++) {
        formRef.current[i].value = "";
      }
    },
  };
  return (
    <form ref={formRef}>
      {children.map((child) => {
        if (child.type.name === "FormItem") {
          return (
            <div style={{ display: "flex" }} key={child.props.name}>
              {child}
            </div>
          );
        }
      })}
    </form>
  );
});

const FormItem = ({ name, label, children }) => {
  return (
    <>
      <label style={{ flex: 1 }}>{label}：</label>
      {cloneElement(children, { name })}
    </>
  );
};

const Input = ({ name }) => {
  return (
    <input
      style={{ margin: "5px 0px" }}
      name={name}
      ref={(node) => {
        console.log("ref", node);
      }}
    />
  );
};
