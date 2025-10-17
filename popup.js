document.addEventListener("DOMContentLoaded", () => {
  let contador = 0;

  const mostrarContador = () => {
    const contadorDiv = document.getElementById("contador");
    contadorDiv.textContent = contador;
    contador.color = contador % 2 === 0 ? "black" : "red"; 
    contadorDiv.classList.remove("flash");
    void contadorDiv.offsetWidth; // Force reflow
    contadorDiv.classList.add("flash");
  };

  const guardarContador = () => {
    chrome.storage.local.set({ contador });
  };

  const actualizarYGuardarContador = (nuevoValor) => {
    contador = nuevoValor;
    mostrarContador();
    guardarContador();
  };

  document.getElementById("sumar").addEventListener('click', () => {
    actualizarYGuardarContador(contador + 1);
  });

  document.getElementById("restar").addEventListener('click', () => {
    actualizarYGuardarContador(contador - 1);
  });

  document.getElementById("reiniciar").addEventListener('click', () => {
    actualizarYGuardarContador(0);
  });

  chrome.storage.local.get("contador", (data) => {
    if (typeof data.contador === "number") {
      contador = data.contador;
    } else {
      contador = 0;
    }
    mostrarContador();
  });

  let contador2 = 0;

  const mostrarContador2 = () => {
    const contadorDiv2 = document.getElementById("contador2");
    contadorDiv2.textContent = contador2;

    contadorDiv2.classList.remove("flash");
    void contadorDiv2.offsetWidth; // Force reflow
    contadorDiv2.classList.add("flash");
  };

  const guardarContador2 = () => {
    chrome.storage.local.set({ contador2 });
  };

  const actualizarYGuardarContador2 = (nuevoValor) => {
    contador2 = nuevoValor;
    mostrarContador2();
    guardarContador2();
  };

  document.getElementById("sumar2").addEventListener('click', () => {
    actualizarYGuardarContador2(contador2 + 1);
  });

  document.getElementById("restar2").addEventListener('click', () => {
    actualizarYGuardarContador2(contador2 - 1);
  });
    document.getElementById("reiniciar").addEventListener('click', () => {
    actualizarYGuardarContador2(0);
  });

  chrome.storage.local.get("contador2", (data) => {
    if (typeof data.contador2 === "number") {
      contador2 = data.contador2;
    } else {
      contador2 = 0;
    }
    mostrarContador2();
  });
});