import SkiDayList from '../ui/SkiDayList';
import { removeDay } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (status, props) => ({ days: status.allSkiDays, filter: props.match.params.filter });

const mapDispatchToProps = dispatch => ({
  onRemoveDay(date) {
    dispatch(removeDay(date));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkiDayList);
