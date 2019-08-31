import { connect } from 'react-redux';
import AddDayForm from '../ui/AddDayForm';
import { addDay, suggestResortNames, clearSuggestions } from '../../redux/actions';
import { withRouter } from 'react-router';

const mapStateToProps = (status, props) => ({
  suggestions: status.resortNames.suggestions,
  fetching: status.resortNames.fetching,
  router: props.match.router
});

const mapDispatchToProps = dispatch => ({
  onNewDay({ resort, date, powder, backcountry }) {
    dispatch(addDay(resort, date, powder, backcountry));
  },
  onChange(value) {
    if (value) {
      dispatch(suggestResortNames(value));
    } else {
      dispatch(clearSuggestions());
    }
  },
  onClear() {
    dispatch(clearSuggestions());
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDayForm);
export default withRouter(Container);
