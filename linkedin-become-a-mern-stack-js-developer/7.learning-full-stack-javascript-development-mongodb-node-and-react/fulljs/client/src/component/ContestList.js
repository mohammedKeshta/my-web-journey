import React from 'react';
import PropsType from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div className="row">
      {contests.length &&
        contests.map(contest => (
          <div className="col-md-12 mt-4 mb-4" key={contest._id}>
            {<ContestPreview contest={contest} onClick={onContestClick} />}
          </div>
        ))}
    </div>
  );
};

ContestList.propsTypes = {
  contests: PropsType.array.isRequired,
  onContestClick: PropsType.func.isRequired
};

ContestList.defaultProps = {
  contests: []
};
export default ContestList;
