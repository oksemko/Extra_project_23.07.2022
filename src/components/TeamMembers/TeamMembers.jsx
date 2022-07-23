import TeamMemberItem from "./TeamMemberItem";
import PropTypes from "prop-types";

export default function TeamMembers({ teamMembers }) {
  return (
    <ul>
      {teamMembers.map(({ id, avatar, name, profession, links }) => (
        <TeamMemberItem
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          profession={profession}
          links={links}
        />
      ))}
    </ul>
  );
}

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      links: PropTypes.shape({
        instagram: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        facebook: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
      }),
    })
  ),
};
