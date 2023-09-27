import ExperienceCard from '../ExperienceCard';

export const JPMorganDetails = () => {
    return (
        <p className="text-3xl">
        <p className="preload delayedItemJob">• Engaged as a full-stack developer responsible for the enhancement and maintenance of enterprise web applications<br/></p>
        <p className="preload delayedItemJob">• Leveraging a diverse array of technologies to proficiently develop, test, and deploy code.<br/></p>
        <p className="preload delayedItemJob">• Demonstrating attentiveness to stakeholder and project manager requirements for application development.<br/></p>
        <p className="preload delayedItemJob">• Delivering technical feature presentations to non-technical audiences.<br/></p>
        <div class="experience-card-container">
            <ExperienceCard experience="ReactJS" />
            <ExperienceCard experience="Spring Boot" />
            <ExperienceCard experience="Agile" />
            <ExperienceCard experience="Jira" />
            <ExperienceCard experience="TDD" />
            <ExperienceCard experience="SQL" />
            <ExperienceCard experience="CI/CD" />
            <ExperienceCard experience="AWS" />
        </div>
        </p>
    );
}

export const CCLRDetails = () => {
    return (
        <p className="text-3xl">
            <p className="preload delayedItemJob">• Worked on a program for a legal records company that automates various tasks and streamlines development projects to successful completion.<br/></p>
            <p className="preload delayedItemJob">• Lead multiple development projects to successful completion, while elevating the user's experience through attentive strategic decision making, design, and development.<br/></p>
            <div class="experience-card-container">
                <ExperienceCard experience="JavaScript" />
                <ExperienceCard experience="ASP.NET" />
                <ExperienceCard experience="C#" />
                <ExperienceCard experience="jQuery" />
                <ExperienceCard experience="SQL" />
                <ExperienceCard experience="HTML" />
            </div>
        </p>
    );
}

export const MaxetaDetails = () => {
    return (
        <p className="text-3xl">
            <p className="preload delayedItemJob">• Worked on web applications created for a nuclear powerplant that automates day-to-day tasks and training processes.<br/></p>
            <p className="preload delayedItemJob">• Worked in a professional development team for the first time and helped solve client's business problems with software solutions.<br/> </p>
            <div class="experience-card-container">
                <ExperienceCard experience="TypeScript" />
                <ExperienceCard experience="Angular" />
                <ExperienceCard experience="Java" />
            </div>
        </p>
    );
}