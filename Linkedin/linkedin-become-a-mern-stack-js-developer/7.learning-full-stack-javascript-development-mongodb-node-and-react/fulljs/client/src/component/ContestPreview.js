import React from 'react';
import PropsType from 'prop-types';

const ContestPreview = ({ contest, onClick }) => {
  const { categoryName, contestName, categoryImage, contestDescription, id, _id } = contest;
  const handleContestDetailsClick = id => {
    onClick(id);
  };
  return (
    <>
      <div className="media" id={`contest-${id}`}>
        <img className="mr-3" src={categoryImage} alt={contestName} />
        <div className="media-body">
          <h3 className="mt-0 text-info pointer" onClick={() => handleContestDetailsClick(_id)}>
            {categoryName}
          </h3>
          <h5 className="mt-0">{contestName}</h5>
          {contestDescription}
        </div>
      </div>
    </>
  );
};

ContestPreview.propsTypes = {
  id: PropsType.number.isRequired,
  categoryName: PropsType.string.isRequired,
  contestName: PropsType.string.isRequired,
  categoryImage: PropsType.string.isRequired,
  contestDescription: PropsType.string.isRequired,
  onClick: PropsType.func.isRequired
};

export default ContestPreview;
