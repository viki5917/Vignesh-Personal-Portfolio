import React,{useRef} from 'react';
import anime from 'animejs';
import './home.css'

function Home() {
  const HomeRef=useRef();
  const createBlocks = (count) => {
    const blocks = [];
  
    for (let i = 0; i < count; i++) {
      const block = React.createElement('div', { key: i, className: 'block' });
      blocks.push(block);
    }

    return blocks;
  };

  const numberOfBlocks = 100;
  const blocksToRender = createBlocks(numberOfBlocks);


  const AnimateBlocks=()=>{

      anime({
        targets:'.block',
        translateX: function(){
          return anime.random(-700,700)
        },
        translateY: function(){
          return anime.random(-500,500)
        },
        scale: function(){
          return anime.random(1,5)
        },
        duration: 3000,
        easing: 'linear',
        delay:anime.stagger(10),
        complete:AnimateBlocks,
      });
  
  }
  AnimateBlocks();
  return (
      <div className='Home' ref={HomeRef} id="Home">
        <div className='container'>
            <h2><span>FrontEnd Developer</span><br/>Vignesh S</h2>
          {blocksToRender}
        </div>
      </div>
    
  )
}

export default Home