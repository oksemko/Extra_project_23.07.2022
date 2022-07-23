import SocialLink from "../SocalLinks/SocialLink";

export default function TeamMemberItem({ avatar, name, profession, links }) {
  return (
    <li>
      <img src={avatar} alt={name} width="270"></img>
      <h3>{name}</h3>
      <p>{profession}</p>
      <SocialLink links={links} />
    </li>
  );
}
