import GoalProgress from '../ui/GoalProgress';
import { connect } from 'react-redux';
import { setGoal } from '../../redux/actions';

const mapStateToProps = state => ({ goal: state.allSkiDays.length, current: state.goal });
const mapDispatchToProps = dispatch => ({
  onNewGoal(goal) {
    dispatch(setGoal(goal));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalProgress);
