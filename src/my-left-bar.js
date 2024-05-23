import { html, css, LitElement} from "lit"
import infinitLogo from "./assest/mastercard-line.svg"
import userLogo from "./assest/Ellipse 13.svg"
import compassLogo from "./assest/Frame 24.svg"
import earphonesLogo from "./assest/Frame 19.svg"
import heartLogo from "./assest/Frame 23.svg"
import bookLogo from "./assest/Frame 20.svg"
import gearLogo from "./assest/Frame 22.svg"
import exitLogo from "./assest/Frame 26.svg"

export class MyLeftBar extends LitElement {
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="leftBar__user">
          <a href="#">
            <img src=${infinitLogo}>
          </a>
          <a href="#">
            <img src=${userLogo}>
          </a>
        </div>
        <hr>
        <div class="leftBar__options">
          <a href="#">
            <img src=${compassLogo}>
          </a>
          <a href="#">
            <img src=${earphonesLogo}>
          </a>
          <a href="#">
            <img src=${heartLogo}>
          </a>
          <a href="#">
            <img src=${bookLogo}>
          </a>
        </div>
        <div class="leftBar__exit">
          <a href="#">
            <img src=${gearLogo}>
          </a>
          <a href="#">
            <img src=${exitLogo}>
          </a>
        </div>
      `
    }
  
    static get styles() {
      return css`
        :host{
          display:flex;
          flex-direction: column;
          align-items: center;
          /*justify-content: center;*/
          height: 98vh;
        }
        img{
          width: 2.5em;
          height: auto;
        }
        .leftBar__user{
          display: flex;
          flex-direction: column;
          margin: 2em 0;
        }
        .leftBar__options{
          display: flex;
          flex-direction: column;
          margin-top: 2em;
          gap: 1em
        }
        .leftBar__exit{
          position: absolute;
          bottom: 5em;
          display: flex;
          flex-direction: column;
        }
      `
    }
  }
  