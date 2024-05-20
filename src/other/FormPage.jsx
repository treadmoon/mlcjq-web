import React, { useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function FormPage(props) {
  return (
    <div>
      <h4>FormPage</h4>
      <UseHookFormAPP />
      {/* <InputPage /> */}
      {/* <DynamicTableForm /> */}
    </div>
  );
}

function UseHookFormAPP() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: [{ chinese: "梅" }],
      lastName: [{ chinese: "浅" }],
    },
  });

  const testKey = register("testKey", { required: true });
  console.log("testKey", testKey);

  return (
    <>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register("firstName.0.chinese")} />
        <br />
        <input {...register("lastName.0.chinese")} />
        <br />
        {errors.lastName && <p>Last name is required.</p>}
        <br />
        <input {...register("age", { pattern: /\d+/, required: true })} />
        {errors.age && `Please enter number for age`}
        <br />
        <input type="submit" />
      </form>
      <br />
      <input
        type="text"
        onChange={e => {
          setValue("age", e.target.value);
        }}
      />
    </>
  );
}

function InputPage(props) {
  console.log("laod InputPage");
  const nameRef = useRef();
  const formRef = useRef();
  const [age, setAge] = useState(12);
  return (
    <div>
      <form ref={formRef}>
        <input
          type="text"
          name="myname"
          ref={nameRef}
          onChange={() => {
            console.log(formRef);
          }}
        />
        <br />
        <input
          type="text"
          value={age}
          name={age}
          onChange={e => setAge(e.target.value)}
        />
      </form>
    </div>
  );
}

function DynamicTableForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      tableData: [{ name: "hai", age: "12" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tableData",
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table>
        <thead>
          <tr>
            <th>name </th>
            <th>age </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item, index) => (
            <tr key={item.id}>
              <td>
                <input {...register(`tableData.${index}.name`)} />
              </td>
              <td>
                <input {...register(`tableData.${index}.age`)} />
              </td>
              <td>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => append({})}>
        Add Row
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default FormPage;
