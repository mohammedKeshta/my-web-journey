import SkiDayCount from '../ui/SkiDayCount';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  total: state.allSkiDays.length,
  powder: state.allSkiDays.filter(skiDay => skiDay.powder).length,
  backcountry: state.allSkiDays.filter(skiDay => skiDay.backcountry).length
});

const Container = connect(mapStateToProps)(SkiDayCount);
export default Container;
