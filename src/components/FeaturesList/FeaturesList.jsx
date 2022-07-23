import PropTypes from "prop-types";
import {List, Title, Li} from "./FeaturesList.styled"

export default function FeaturesList({ features }) {
  return (
    <List>
      {features.map(({ id, title, text, isRed }) => (
        <Li key={id} isRed={isRed}>
          <Title>{title}</Title>
          <p>{text}</p>
        </Li>
      ))}
    </List>
  );
}

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
