import './App.css';
import Contact from './components/Contact/Contact';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Header from './components/header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';

function App() {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
}

export default App;