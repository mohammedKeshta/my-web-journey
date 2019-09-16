import React from 'react';

const ContestPreview = props => {
  const { categoryName, contestName, categoryImage, contestDescription, id, _id } = props.contest;
  const handleContestDetailsClick = id => {
    console.log(id);
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

export default ContestPreview;
