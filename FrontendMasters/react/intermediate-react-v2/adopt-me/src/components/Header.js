// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { Link } from '@reach/router';
import { css, jsx } from '@emotion/core';

export const Header = () => {
  return (
    <div
      css={css`
        padding: 10px;
      `}
    >
      <Link to="/">
        <h1 className="logo">Adopt Me</h1>
      </Link>
    </div>
  );
};

export default Header;
