import React, {useState, createContext} from "react";
import TodoList from "./components/TodoList";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { ThemeContext, ThemeProvider } from "styled-components";

function App() { 

  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const ContextTheme = createContext()

  return (
    <ThemeProvider theme={light}>
      <div className="todo-app">
        <GlobalStyle />
        <ContextTheme.Provider value={{toggleTheme}, {theme}}>
          <TodoList />
        </ContextTheme.Provider>
      </div>
    </ThemeProvider>
  );
  }
export default App;
