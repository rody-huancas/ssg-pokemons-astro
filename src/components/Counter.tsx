import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);

  return (
    <div class="flex flex-col items-center justify-center gap-7">
      <h1 class="text-5xl">Counter</h1>
      <h3 class="text-xl">Value: {counter()}</h3>

      <div class="flex gap-4">
        <button
          class="bg-blue-500 p-2 rounded"
          onClick={() => setCounter((prev) => ++prev)}
        >
          +1
        </button>
        <button
          class="bg-blue-500 p-2 rounded"
          onClick={() => setCounter((prev) => --prev)}
        >
          -1
        </button>
      </div>
    </div>
  );
};
