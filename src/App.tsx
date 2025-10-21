import { useState, useEffect } from "react"

import BeerCard, { type BeerCardProps } from "./components/BeerCard"

const App = () => {

  const [data, setData] = useState<BeerCardProps[]>([])

  useEffect(() => {
    fetch("/data.json")
    .then(resp => resp.json())
    .then(dat => setData(dat))
  }, [])

  return (
    <div className="beerCardWrapper">
      { data.length>0 ?
        data.map(beer => <BeerCard key={beer.name} {...beer} />)
        :
        <>
          <p>Loading</p>
        </>
      }
    </div>
  )
}

export default App