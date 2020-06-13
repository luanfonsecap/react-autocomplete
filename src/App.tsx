import React, { useMemo } from "react";

import "./App.css";
import Autocomplete from "./components/Autocomplete";

function App() {
  const options = useMemo(() => {
    return [
      "Azul",
      "Amarelo",
      "Vermelho",
      "Verde",
      "Laranja",
      "Preto",
      "Cinza",
      "Branco",
    ];
  }, []);

  return (
    <div>
      <h1>React Autocomplete</h1>

      <Autocomplete suggestions={options} />
    </div>
  );
}

export default App;
