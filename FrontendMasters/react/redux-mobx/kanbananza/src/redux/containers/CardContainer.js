import { connect } from 'react-redux';
import Card from '../../components/Card';

const mapStateToProps = (state, { cardId }) => ({
  card: state.cards.entities[cardId],
});

export default connect(mapStateToProps)(Card);
