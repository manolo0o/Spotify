import { LitElement, css, html } from 'lit'
class Myelement extends LitElement  {
    constructor(){
        super();
        this.shuffleButton = "/public/shuffleButton.svg";
    }
    static styles =css`
        .principal___container{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: end;
            overflow-y: hidden;
        }   

        .container{
            width: 25%;
            height: 100vh; 
            border: 2px solid black;   
            color: white;
            overflow-x: hidden;
            overflow-y: auto;
        }

        .title__container{
            width: 100%;
            height:15%;
            border: 2px solid black;
            color:black;
        }
        .title__container {
            color: black;
            
        }
            
        .cards{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 10%;
            border: 2px solid black;
        }
        .img__select{
            width:30%;
            border: 2px solid black;
            height: 100%;
        }
        .song__duration{
            width:15%;
            border: 2px solid black;
            height: 100%;
        }


        ::-webkit-scrollbar {
            width: 0.6vh; 
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555; 
            border-radius: 5px;
        }
    `
    render(){
        return html`
            <div class="principal___container">
                <div class="container">
                    <div class="title__container">
                       <h1>Track list</h1>
                       <box-icon name='shuffle'></box-icon>
                       <box-icon name='repeat'></box-icon>
                        <p>playing next</p>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>    
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                    <div class="cards">
                        <div class="img__select">
                            <img src="" alt="">
                        </div>
                        <div class="song__duration">
                        </div>
                    </div>
                
                    
                </div>
            </div>
    `
    } 
}
customElements.define('my-element', Myelement)