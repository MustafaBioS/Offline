import FaultyTerminal from './components/FaultyTerminal';

export default function shop() {

  return (

    <div className='BGCon'>
    {/* <FaultyTerminal
      className='BG'
      scale={1}
      gridMul={[2, 1]}
      digitSize={1.5}
      scanlineIntensity={0.3}
      glitchAmount={1}
      flickerAmount={1}
      chromaticAberration={0.05}
      curvature={0.2}
      tint="#00ff00"
    /> */}

    <div className="shopCon">
      <div className="grid-item">
        <img src=""></img>
        <h1>Title</h1>
        <p>Desc</p>
        <div>Row of Price</div>
        <button>Buy Now</button>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>


    </div>
  )
}
