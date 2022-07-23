import "./App.css";
import Section from "./components/Section/Section";
import FeaturesList from "./components/FeaturesList/FeaturesList";
import features from "./data/features.json";

import TeamMembers from "./components/TeamMembers/TeamMembers";
import teamMembers from "./data/teamMembers.json";

function App() {
  return (
    <div>
      <Section>
        <FeaturesList features={features} />
      </Section>
      <Section title="Команда">
        <TeamMembers teamMembers={teamMembers} />
      </Section>
    </div>
  );
}

export default App;
