export type BeerCardProps = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean,
};

const BeerCard = (props: BeerCardProps) => {
  return (
    <div className='beerCard'>
      <img src={props.image} />
      <strong>{props.name} {props.abv} {props.volume}</strong>
      <p>{props.price} Ft</p>
      {props.available ?
        <p className="available">Raktáron</p>
        :
        <p className="notAvailable">Nincs raktáron</p>
      }
    </div>
  )
}

export default BeerCard