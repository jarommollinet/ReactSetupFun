import React, { useState, useEffect } from 'react';
import './App.css';

// Assuming the JSON structure is similar to the example provided
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamsData {
  teams: Team[];
}

// Function component for the heading section
function HeadingSection() {
  return <h1>Welcome to the NCAA Basketball Teams Site</h1>;
}

// Class component for individual team cards
// Class component for individual team cards
class TeamCard extends React.Component<Team> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card">
        <div className="card-content">
          <h2 className="card-title">{school}</h2>
          <p className="card-mascot">Mascot: {name}</p>
          <p className="card-location">
            Location: {city}, {state}
          </p>
        </div>
      </div>
    );
  }
}

// Function component to list all team cards
function TeamsList() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    import('./CollegeBasketballTeams.json')
      .then((data: TeamsData) => {
        setTeams(data.teams);
      })
      .catch((error) => {
        console.error('Failed to load team data:', error);
      });
  }, []);

  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingSection />
        <TeamsList />
      </header>
    </div>
  );
}

export default App;
