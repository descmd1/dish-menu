import Table from './Table'
import Dish1 from '../src/assests/dish1.xml'
import Dish2 from '../src/assests/dish2.xml'
import Dish3 from '../src/assests/dish3.xml'

const App = () => {
  return (
    <div>
      <hi>Grill Restaurant Menu</hi>
      <Table dish={Dish1}/>
      <Table dish={Dish2} />
      <Table dish={Dish3}/>
    </div>
  )
}


export default App;
