import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);
  const [data, setData] = useState("");
  //const onSubmit = (data) => setData(JSON.stringify(data));

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input type="text" placeholder="First name" {...register("FirstName", { required: true, maxLength: 80 })} />
      {errors.FirstName && <span>This field is required</span>}
      <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
      <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.Email && <span>This field is required</span>}
      {errors.Email && <span>sem @</span>}
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
      {data}
    </form>
  );
}
