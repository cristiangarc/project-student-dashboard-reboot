const About = () => {
    const teamMembers = [
        {
            name: "Cristian Garcia",
            github: "https://github.com/cristiangarc",
            funFact: "I've traveled to ~20 states across the US",
        },
        {
            name: "Julissa Garcia",
            github: "https://github.com/JuliGarc91",
            funFact: "",
        },
        {
            name: "Enoch Tagoe",
            github: "https://github.com/EnochTagoe1",
            funFact: "",
        },
    ];

    return (
        <div className="members">
            {teamMembers.map((member) => (
                <div className="team-member">
                    <p>Name: {member.name}</p>
                    <a href={member.github} target="_blank">
                        Github: {member.github}
                    </a>
                    <p>Fun Fact: {member.funFact}</p>
                </div>
            ))}
        </div>
    );
};

export default About;
