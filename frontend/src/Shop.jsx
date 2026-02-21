import FaultyTerminal from './components/FaultyTerminal';

export default function shop() {

  return (

    <div className='BGCon'>
    <FaultyTerminal
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
    />

    <div className="shop"></div>


    </div>
  )
}
