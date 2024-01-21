import { v4 } from "uuid";
import "./About.css";

const About = () => {
    const teamMembers = [
        {
            name: "Cristian Garcia",
            github: "https://github.com/cristiangarc",
            funFact: "I love eating at restaurants",
        },
        {
            name: "Julissa Garcia",
            github: "https://github.com/JuliGarc91",
            funFact: "I love mafia movies; my fave is GoodFellas",
        },
        {
            name: "Enoch Tagoe",
            github: "https://github.com/EnochTagoe1",
            funFact: "I love travelling",
        },
    ];

    return (
        <div>
            <h2>Team Members</h2>
            <div className="members">
                {teamMembers.map((member) => (
                    <div key={v4()} className="team-member">
                        <p>{member.name}</p>
                        <p>Github:</p>
                        <a href={member.github} target="_blank">
                            {member.github}
                        </a>
                        <p>Fun Fact:</p>
                        <p>"{member.funFact}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
