import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import { fetchTransactions } from '../actions/transactions';

const mapStateToProps = (state) => {
return state.transactions;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTransactions: (token, since) => {
      dispatch(fetchTransactions(token, since));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
