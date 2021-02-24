import { connect } from 'react-redux';
import { getPark } from '../../actions/park_actions';
import Park from './park';

const mapStateToProps = (state, ownProps) => {
    return {
        park: state.entities.parks[ownProps.match.params.parkId]
    }
};

// may not need
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         getPark: () => dispatch(getPark(state.entities.parks[ownProps.match.params.parkId]))
//     }
// };

export default connect(mapStateToProps, null)(Park);