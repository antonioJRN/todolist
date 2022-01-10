import styled from "styled-components";

export const Todo = styled.div`
  height: 100%;
  width: 800px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: block;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
  box-shadow: 0 0 50px;
  border-radius: 5px;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const DivForm = styled.div`
  display: block;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    background: linear-gradient(
      to bottom, #ff0066, #ff1794, #ff33cc, #d92bcc,
      #7317cc, #0000cc, #3366cc, #87cefa
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
    margin-bottom: 60px;
  }

  form {
    .title-div, .description-div{
    position: relative;
    margin: 30px 0;
        
    }

    .title-input, .description-input {
      width: 50%;
      margin-left: 25%;
      align-items: center;
      padding: 10px;
      letter-spacing: 1px;
      color: #02588d;
      font-size: 15px;
      border: none;
      outline: 0;
      border-bottom: 2px solid #d3d3d3;
      transition: all 1s ease-in-out;
    }

    .title-input:focus, 
    .description-input:focus,
    .title-input:invalid,
    .description-input:invalid {
      background: transparent;
      border-bottom: 2px solid transparent;
      border-image: linear-gradient(
        to left, #ff0066, #ff1794, #ff33cc, #d92bcc,
      #7317cc, #0000cc, #3366cc, #87cefa
      );
      border-image-slice: 1;
    }

    label {
      position: absolute;
      margin-left: 25%;
      left: 1px;
      bottom: 10px;
      color: #02588d;
      font-size: 15px;
      pointer-events: none;
      transition: all 1s ease-in-out;
    }
    .title-input:focus ~ label, 
    .description-input:focus ~ label,
    .title-input:valid ~ label,
    .description-input:valid ~ label{
      transform: translateY(-30px);
      }

    .todo-button {
      text-align: center;
    }

    button {
      width: 120px;
      font-size: 18px;
      letter-spacing: 2px;
      padding: 5px;
      overflow: hidden;
      border-radius: 15px;
      z-index: 1;
      background: linear-gradient(-90deg, #ff0066, #ff1794, #ff33cc, #d92bcc,
      #7317cc, #0000cc, #3366cc, #87cefa);
      color: #fff;
      border: 2px solid #7317cc;
      opacity: 0.8;
      position: relative;
    }

    button:hover {
      color: #7317cc;
      cursor: pointer;
      text-shadow: 2px -2px 2px #d3d3d3;
    }

    button:after {
      position: absolute;
      content: "";
      z-index: -1;
      display: block;
      background: #fff;
    }

    button[class^="submit"]::after {
      transition: all 0.3s;
    }

    button[class^="submit"]:hover::after {
      transition: all 0.4s;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .submit::after {
      top: 0;
      bottom: 0;
      left: 100%;
      right: -100%;
    }


  }
`;

export const Task = styled.ul`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 0 10px;
  margin-top: 20px;
  background: #E0FFFF;
  
  li {
    list-style-type: none;
    padding: 1px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-top: -10px;
    margin-bottom: 5px;
  }

  .description {
    font-size: 15px;
    margin-left: 10px;
    margin-top: -3px;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-bottom: -10px;
    padding: 2px;

  }

  .button-update {
    text-align: center;
    width: 50px;
      font-size: 10px;
      letter-spacing: 1px;
      padding: 5px;
      overflow: hidden;
      border-radius: 15px;
      z-index: 1;
      background: linear-gradient(-90deg, #ff0066, #ff1794, #ff33cc, #d92bcc,
      #7317cc, #0000cc, #3366cc, #87cefa);
      color: #fff;
      border: 2px solid #7317cc;
      opacity: 0.8;
      position: relative;
      margin-right: 15px;
  }

  .button-delete {
    text-align: center;
    width: 50px;
      font-size: 10px;
      letter-spacing: 1px;
      padding: 5px;
      overflow: hidden;
      border-radius: 15px;
      z-index: 1;
      background: linear-gradient(-90deg, #ff0066, #ff1794, #ff33cc, #d92bcc,
      #7317cc, #0000cc, #3366cc, #87cefa);
      color: #fff;
      border: 2px solid #7317cc;
      opacity: 0.8;
      position: relative;
  }

  .button-update:hover {
      color: #7317cc;
      cursor: pointer;
      text-shadow: 2px -2px 2px #d3d3d3;
    }

  .button-update:after {
    position: absolute;
    content: "";
    z-index: -1;
    display: block;
    background: #fff;
  }

    button[class^=".button-update"]::after {
      transition: all 0.3s;
    }

    button[class^=".button-update"]:hover::after {
      transition: all 0.4s;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .button-update::after {
      top: 0;
      bottom: 0;
      left: 100%;
      right: -100%;
    }

  .button-delete:hover {
    color: #7317cc;
    cursor: pointer;
    text-shadow: 2px -2px 2px #d3d3d3;
  }

  .button-delete:after {
    position: absolute;
    content: "";
    z-index: -1;
    display: block;
    background: #fff;
  }

    button[class^=".button-delete"]::after {
      transition: all 0.3s;
    }

    button[class^=".button-delete"]:hover::after {
      transition: all 0.4s;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .button-delete::after {
      top: 0;
      bottom: 0;
      left: 100%;
      right: -100%;
    }

`;