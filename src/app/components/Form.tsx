"use client";

import React from "react";

function Form({value, onChange}: {value: number; onChange: (amount: number) => void}) {
  return (
    <form className="w-full">
      <label className="block space-y-3 text-lg">
        <span className="font-bold text-sky-800 ">Monto en PYG:</span>
        <input
          className="block w-full rounded-full bg-sky-100 p-2 text-right text-3xl text-sky-900 focus:outline-none focus:ring ring-sky-900"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Form;
