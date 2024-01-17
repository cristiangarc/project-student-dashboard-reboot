const Aside = ({ students }) => {
    const getAllCohorts = () => {
        const cohorts = [];
        for (const student of students) {
            const current = student["cohort"]["cohortCode"];
            if (!cohorts.includes(current)) cohorts.push(current);
        }
        return cohorts;
    };

    const allCohorts = getAllCohorts();

    return (
        <div>
            <ul>
                {allCohorts.map((cohort) => (
                    <li>{cohort}</li>
                ))}
            </ul>
        </div>
    );
};

export default Aside;
