import { title } from "assets/jss/material-kit-react.js";

const cardStyle = {
  section: {
    padding: "20px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    '@media (max-width: 968px)': {
      fontSize: '20px',
    },
  },
  description: {
    color: "#999"
  }
};

export default cardStyle;
