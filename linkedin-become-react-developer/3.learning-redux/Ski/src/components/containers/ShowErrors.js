import ShowErrors from '../ui/ShowErrors';
import { clearError } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = status => ({ errors: status.errors });

const mapDispatchToProps = dispatch => ({
  onClearError(index) {
    dispatch(clearError(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowErrors);
