import { useState } from 'react'
import bgimg from './bgimg.jpg';

function App() {

  // store value of a dozen
  const dozenQty = 12

  // store # dozens of cookies recieved per dough baby by size
  const smallQty = 4,
        largeQty = 3.5

  // initialize calculator values
  let doughBabyQty = 0,
      cookies = 0,
      doughBabies = 0,
      wholeBabies = 0
  
  const [ dozensNeeded, setDozensNeeded ] = useState( 0 ),
        [ cookiesNeeded, setCookiesNeeded ] = useState( 0 ),
        [ doughBabiesNeeded, setDoughBabiesNeeded ] = useState( 0 ),
        [ wholeNeeds, setWholeNeeds ] = useState( 0 )

  // ingredients
  // dough baby ingredients
  const dbMargarine = 1, // 1 pack of margarine
        dbPwdSugar = 3, // 3 cups powdered sugar
        dbFlour = 5, // 5 cups of flour
        dbTartar = 1, // 1 tsp cream of tartar
        dbSoda = 1, // 1 tsp baking soda
        dbAlmond = 1, // 1 tsp almond extract
        dbVanilla = 1 // 1 tsp vanilla

  const [ margarineNeeded, setMargarineNeeded ] = useState( 0 ),
        [ pwdSugarNeeded, setPwdSugarNeeded ] = useState( 0 ),
        [ flourNeeded, setFlourNeeded ] = useState(0),
        [ tartarNeeded, setTartarNeeded ] = useState(0),
        [ sodaNeeded, setSodaNeeded ] = useState(0),
        [ almondNeeded, setAlmondNeeded ] = useState(0),
        [ vanillaNeeded, setVanillaNeeded ] = useState(0)

  // frosting ingredients
  const fPwdSugar = 2, // 2lbs powdered sugar
        fCrisco = 1, // 1 cup crisco
        fMilk = .75, // .75 cup milk
        fAlmond = 1, // 1 tsp almond extract
        fVanilla = 1 // 1 tsp vanilla

  const [ fPwdSugarNeeded, setFPwdSugarNeeded ] = useState(0),
        [ criscoNeeded, setCriscoNeeded ] = useState(0),
        [ milkNeeded, setMilkNeeded ] = useState(0),
        [ fAlmondNeeded, setFAlmondNeeded ] = useState(0),
        [ fVanillaNeeded, setFVanillaNeeded ] = useState(0)

  // handle calculator function
  const calcHandler = (e) => {
    
    // get user input values from form
    const iVal = document.getElementById('iNeedDough').value,
          sVal = document.querySelector('input[name="cookieSize"]:checked').value

    // calculate how many cookies we will get from a dough baby based on the size of the cookie
    if (sVal !== "large") {
      doughBabyQty = dozenQty * smallQty
    } else {
      doughBabyQty = dozenQty * largeQty
    }

    // calcuate how many cookies we actually need from input
    cookies = iVal * dozenQty

    // convert to dough babies
    doughBabies = cookies / doughBabyQty // fraction
    wholeBabies = Math.ceil(doughBabies) // rounded up

    setDozensNeeded(dozensNeeded => dozensNeeded = iVal)
    setCookiesNeeded(cookiesNeeded => cookiesNeeded = cookies)
    setWholeNeeds(wholeNeeds => wholeNeeds = wholeBabies)
    setDoughBabiesNeeded(doughBabiesNeeded => doughBabiesNeeded = doughBabies.toFixed(3))

    setMargarineNeeded(margarineNeeded => margarineNeeded = dbMargarine * wholeBabies)
    setPwdSugarNeeded(pwdSugarNeeded => pwdSugarNeeded = dbPwdSugar * wholeBabies)
    setFlourNeeded(flourNeeded => flourNeeded = dbFlour * wholeBabies)
    setTartarNeeded(tartarNeeded => tartarNeeded = dbTartar * wholeBabies)
    setSodaNeeded(sodaNeeded => sodaNeeded = dbSoda * wholeBabies)
    setAlmondNeeded(almondNeeded => almondNeeded = dbAlmond * wholeBabies)
    setVanillaNeeded(vanillaNeeded => vanillaNeeded = dbVanilla * wholeBabies)

    setFPwdSugarNeeded(fPwdSugarNeeded => fPwdSugarNeeded = fPwdSugar * wholeBabies )
    setCriscoNeeded(criscoNeeded => criscoNeeded = fCrisco * wholeBabies )
    setMilkNeeded(milkNeeded => milkNeeded = fMilk * wholeBabies)
    setFAlmondNeeded(fAlmondNeeded => fAlmondNeeded = fAlmond * wholeBabies)
    setFVanillaNeeded(fVanillaNeeded => fVanillaNeeded = fVanilla * wholeBabies)
    
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <div className="App">
      <header className="wrapper mb-lg pt-lg">
        <div className="bumper">
          <h1 className="text-center">Dough Baby Cookies</h1>
          <h3 className="text-center"><em>Calculator</em></h3>
        </div>
      </header>
      <main className="wrapper">
        <div className="bumper">
          <div className="mb-md">
            <form onSubmit={ submitHandler }>
              <label htmlFor="smallCookie" className='check flex jc-space-between ai-center flex-col text-center'>
                <strong>Small Cookies</strong><em>(4 Dozen Cookies Per Dough Baby)</em>
                <input  type="radio"
                        id="smallCookie"
                        name="cookieSize"
                        value="small"
                        defaultChecked
                        onChange={ calcHandler } />
                <span class="mark"></span>
              </label>
              <br/>
              <label htmlFor="largeCookie" className='check flex jc-space-between ai-center flex-col text-center'>
                <strong>Large Cookies</strong><em>(3.5 Dozen Cookies Per Dough Baby)</em>
                <input  type="radio"
                        id="largeCookie"
                        name="cookieSize"
                        value="large"
                        onChange={ calcHandler } />
                <span class="mark"></span>
              </label>
              <br/>
              <div className="flex jc-space-between ai-center">
                <label htmlFor="iNeedDough"><strong>Dozens Needed: </strong></label>
                <input  type="number"
                        id="iNeedDough"
                        name="iNeedDough"
                        value={ dozensNeeded }
                        onChange={ calcHandler } />
              </div>
              
            </form>
          </div>
          <div className="mb-md">
            <h3 className="mb-sm">The Numbers</h3>
            <div className="boxed">
              <div className="flex jc-space-between underlined">
                <p>Dozens of cookies needed:</p>
                <p className='ml-sm text-right half-width'><strong>{ dozensNeeded }</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Individual cookies needed:</p>
                <p className='ml-sm text-right half-width'><strong>{ cookiesNeeded }</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Dough babies needed:</p>
                <p className='ml-sm text-right half-width'><strong>{ doughBabiesNeeded }</strong></p>
              </div>
              <div className="flex jc-space-between">
                <p>Whole dough babies needed:</p>
                <p className='ml-sm text-right half-width'><strong>{ wholeNeeds }</strong></p>
              </div>
            </div>
          </div>
          <div className='mb-md'>
            <h3>Dough Baby Ingredients Needed</h3>
            <h4 className='mb-sm'><em>For {wholeNeeds } Dough Babies</em></h4>
            <div className="boxed">
              <div className="flex jc-space-between underlined">
                <p>Sticks margarine<br/>(1 pack per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ margarineNeeded } packs</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Cups powdered sugar<br/>(3 cups per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ pwdSugarNeeded } cups</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Cups flour<br/>(5 cups per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ flourNeeded } cups</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Teaspoons cream of tartar<br/>(1 tsp per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ tartarNeeded } tsp</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Teaspoons baking soda<br/>(1 tsp per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ sodaNeeded } tsp</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Teaspoons almond extract<br/>(1 tsp per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ almondNeeded } tsp</strong></p>
              </div>
              <div className="flex jc-space-between">
                <p>Teaspoons vanilla<br/>(1 tsp per dough baby)</p>
                <p className='ml-sm text-right half-width'><strong>{ vanillaNeeded } tsp</strong></p>
              </div>
            </div>
          </div>
          <div>
            <h3>Frosting Ingredients Needed</h3>
            <h4 className='mb-sm'><em>For {wholeNeeds } Dough Babies</em></h4>
            <div className="boxed">
              <div className="flex jc-space-between underlined">
                <p>Lbs. powdered sugar<br/>(2 lbs. per batch)</p>
                <p className='ml-sm text-right half-width'><strong>{ fPwdSugarNeeded } lbs.</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Cups crisco<br/>(1 cup per batch)</p>
                <p className='ml-sm text-right half-width'><strong>{ criscoNeeded } cups</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Cups milk<br/>(.75 per batch)</p>
                <p className='ml-sm text-right half-width'><strong>{ milkNeeded } cups</strong></p>
              </div>
              <div className="flex jc-space-between underlined">
                <p>Teaspoons almond extract<br/>(1 tsp per batch)</p>
                <p className='ml-sm text-right half-width'><strong>{ fAlmondNeeded } tsp</strong></p>
              </div>
              <div className="flex jc-space-between">
                <p>Teaspoons vanilla<br/>(1 tsp per batch)</p>
                <p className='ml-sm text-right half-width'><strong>{ fVanillaNeeded } tsp</strong></p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <footer className="wrapper mt-md pb-lg">
        <div className="bumper">
          <a href="https://github.com/CharlesInteractive/dough-baby-calculator" target="_blank" rel="noreferrer">
            <h2 className="code text-white">View on GitHub</h2>
          </a>
        </div>
      </footer>
    </div>
    <div className="background" style={{backgroundImage: `url(${bgimg})`}}></div>
    </>
  )
}

export default App
