export default function SocialLink({
  links: { instagram, twitter, facebook, linkedin },
}) {
  return (
    <ul>
      <li>
        <a href={instagram}>Instagram</a>
      </li>
      <li>
        <a href={twitter}>Twitter</a>
      </li>
      <li>
        <a href={facebook}>Facebook</a>
      </li>
      <li>
        <a href={linkedin}>LinkedIn</a>
      </li>
    </ul>
  );
}
