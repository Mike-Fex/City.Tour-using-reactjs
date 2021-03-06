import React,{useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';



// const [filter, setFilter] = useState('');
// const searchText = (event) =>{
//   setFilter(event.target.value);
// }

// let dataSearch = CardItem.cardData.filter(item =>{

// return Object.keys(item).some(key =>
//   item[key].toString(). toLowerCase().includes(filter.toString().toLowerCase())
  
//   )
// });

function Cards() {
  return (
    <div className='cards'>
      {/* <div className= "test">
        <div className='searchword'>
          <h1 className='searchh1'>Search</h1>

        </div>
        <div className='inputdiv'>
          <input
          type="text"
          className='input'
          value={filter}
          onChange={searchText.bind(this)}
          
          
          >
          
          </input>
        </div>

      </div> */}
    
      <h1 className="cardstitle" >City Tours</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./mikeimages/img-1.jpg'
              text='The beautiful capital city of kenya'
              label='Nairobi'
              path='/services'
            />
            <CardItem
              src='./mikeimages/img-8.jpg'
              text='Guts Bridge mombasa'
              label='Mombasa'
              path='/services'
            />
             <CardItem
              src='./mikeimages/img-7.jpg'
              text='National park landscape'
              label='Nakuru'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./mikeimages/img-5.jpg'
              text='Skyline Lake Victoria View'
              label='Kisumu'
              path='/services'
            />
            <CardItem
              src='./mikeimages/img-9.jpg'
              text='Ruins of ancient Gedi(Gede)'
              label='Malindi'
              path='/products'
            />
            <CardItem
              src='./mikeimages/img-2.jpg'
              text='beauty'
              label='Nairobi'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;