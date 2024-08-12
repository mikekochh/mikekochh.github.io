import './index.scss';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card rounded-md w-max p-2 px-4 m-2 shadow-sm cursor-default golden-ratio-0">{experience}</div>
    );
    
}

export default ExperienceCard;