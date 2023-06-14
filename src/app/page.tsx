"use client";

import {useState, useEffect} from "react";

import Form from "./components/Form";
import cotizaciones from "./cotizaciones.json";

const COTIZACIONES = cotizaciones as Record<string, {compra: number; venta: number; currency:string}>;

export default function Home() {
  const [amount, setAmount] = useState(0);
  
  return (
    <main className="grid gap-8">
      <section>
        <Form value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="flex-1 rounded-xl bg-sky-800 p-8 text-white">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, {compra: number; venta: number; currency:string }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;

              return (
                <li key={name} className="flex items-center justify-between gap-4">
                  <div className="text-sky-100">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-2xl font-bold text-emerald-400">
                        {Number(total).toLocaleString("es-PY", {
                          style: "currency",
                          currency: value.currency,
                        })}
                      </div>
                    ) : null}
                    <div className="text-3xl font-bold text-emerald-300">
                      {Number(value.venta).toLocaleString("es-PY", {
                        style: "currency",
                        currency: value.currency,
                      })}
                    </div>
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </section>
    </main>
  );
}
