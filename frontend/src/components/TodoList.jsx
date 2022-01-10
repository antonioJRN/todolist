import React, { useState, useContext } from "react";
import Switch from "react-switch";
import AddTask from "./AddTask"
import { shade } from "polished";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Todo } from "./styles";
import ContextTheme from "../App";

function TodoList() {

  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ContextTheme);
  const theme = useContext(ContextTheme);
  return (
      <Todo>
        <div>
          <AddTask />
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
          />
          </div>
      </Todo> 
  )
}

export default TodoList
