import { connect } from 'react-redux'
import AddCar from '../components/AddCar';
import {addCar} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        
    }
}

// add mapDispatchToProps function here

export default connect(null, mapDispatchToProps)(AddCar)