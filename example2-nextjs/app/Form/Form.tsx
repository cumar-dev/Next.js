"use client";
import React, { useActionState } from "react";
import { form } from "./Actions";
const initialSate = {
  success: false,
  message: "",
  error: "",
};
const Form = () => {
  const [state, formAction] = useActionState(form, initialSate);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center">
          <form action={formAction}>
            <input className="flex-1" type="text" name="name" />
            <button type="submit">submit</button>
          </form>
          {state.success && (
            <p style={{color: "green"}}>{state.message}</p>
          )}
          {
            !state.success && state.error &&(
              <p style={{color: "red"}}>{state.error}</p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Form;
