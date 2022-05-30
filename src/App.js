import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.quotes = [
      ['Oscar Wilde','Be yourself; everyone else is already taken.'],
      ['Albert Einstein',"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."],
      ['Dr. Seus',"You know you're in love when you can't fall asleep because reality is finally better than your dreams."],
      ['Mark Twain',"If you tell the truth, you don't have to remember anything."],
      ['Albert Hubbert',"A friend is someone who knows all about you and still loves you."],
      ['Mahatma Gandhi',"Live as if you were to die tomorrow. Learn as if you were to live forever."],
      ['Friedrich Nietzsche',"Without music, life would be a mistake."],
      ['Andre Gide',"It is better to be hated for what you are than to be loved for what you are not."],
      ['Mark Twain',"Good friends, good books, and a sleepy conscience: this is the ideal life."]
    ]
    this.update = this.update.bind(this)
    this.createColor = this.createColor.bind(this)
  }

  update(){
    this.forceUpdate()
  }

  createColor(){
    const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    let str = '#'

    for(let i = 0; i<6; i++){
        str += (chars[Math.floor(Math.random()*15)])
    }
    return str
  }


  render(){
    let color = this.createColor()
    const randNum = Math.floor(Math.random()*9)

    let contStyle = {
      background:color,
      textAlign:'center',
      fontSize:'30px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'100vh',
    }
    let style = {
      width:'550px',
      height: '300px',
      padding:'40px',
      background:'white',
      borderRadius: '5px',
      color:color
    }
    let styleAuthor = {
      fontWeight:'200',
      fontSize:'20px',
      marginLeft:'300px',
      marginTop:'20px'
    }
    let buttonsStyle = {
      display:'flex',
      justifyContent:'center',
    }
    let btnBgStyle = {
      background: color,
      color: 'white'
    }
    let btnColorStyle = {
      color:color
    }

    return (
      <div style={contStyle} className='container-fluid'>
        <div id='quote-box' style={style}>
          <p id='text'>"{this.quotes[randNum][1]}"</p>
          <p id='author' style={styleAuthor}>{this.quotes[randNum][0]}</p>
          <div id="buttons" style={buttonsStyle}>
            <div id="links" style={{display:'flex',justifyContent:"start",width:'50%',gap:'20px'}}>
              <a id="tweet-quote" href='https://twitter.com/intent/tweet' target="_blank" style={btnColorStyle}><i class="fa-brands fa-twitter"></i></a>
              <a href='https://www.twitch.tv/' target="_blank"><i class="fa-brands fa-twitch" style={btnColorStyle}></i></a>
            </div>
            
            <div id="quote-btn" style={{display:'flex',justifyContent:'end',width:'50%'}}>
              <button id='new-quote' className='btn' onClick={this.update} style={btnBgStyle}>New Quote</button>
            </div>
          </div>
      </div>
      </div>
    )
  }
}


export default App;
