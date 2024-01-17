const About = () => {
    const teamMembers = [
        {
            name: "Cristian Garcia",
            github: "https://github.com/cristiangarc",
            funFact: "",
        },
        { name: "Julissa Garcia", github: "", funFact: "" },
        { name: "Enoch Tagoe", github: "", funFact: "" },
    ];

    return (
        <div>
            {teamMembers.map((member) => (
                <div>
                    <p>Name: {member.name}</p>
                    <p>Github: {member.github}</p>
                    <p>Fun Fact: {member.funFact}</p>
                </div>
            ))}
        </div>
    );
};

export default About;
