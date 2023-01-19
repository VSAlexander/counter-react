import { useState } from 'react';

const carList = [
  { id: 'audi', brand: 'Audi' },
  { id: 'bmw', brand: 'BMW' },
  { id: 'mercedes', brand: 'Mercedes' },
  { id: 'kia', brand: 'KIA' },
  { id: 'toyota', brand: 'Toyota' },
  { id: 'skoda', brand: 'Skoda' },
  { id: 'porsche', brand: 'Porsche' },
  { id: 'seat', brand: 'Seat' },
  { id: 'jaguar', brand: 'Jaguar' },
  { id: 'amc', brand: 'AMC' },
  { id: 'buick', brand: 'Buick' },
  { id: 'lincoln', brand: 'Lincoln' },
];

export function Vouter() {
  const [cars, setCars] = useState(carList.reduce((obj, item) => Object.assign(obj, { [item.id]: 0 }), {}));

  const handleClick = event => {
    const { name } = event.target;
    setCars(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Car</th>
            <th scope="col">Votes</th>
          </tr>
        </thead>
        <tbody>
          {carList.map((car, index) => (
            <tr key={car.id}>
              <th scope="row">{index}</th>
              <td>{car.brand}</td>
              <td>{cars[car.id]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center fs-3">Every vote matters!</p>
      <div className="d-flex justify-content-center wrap">
        {carList.map(car => (
          <button
            type="button"
            className="btn btn-success btn-lg me-3"
            key={car.id}
            name={car.id}
            onClick={handleClick}
          >
            {car.brand}
          </button>
        ))}
      </div>
    </>
  );
}
