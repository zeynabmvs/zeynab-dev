type AboutMeProps = {
  paragraphs: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({ paragraphs }) => (
  <div className="card p-6">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    {paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className={`text-muted ${
          index !== paragraphs.length - 1 ? "mb-4" : ""
        }`}
      >
        {paragraph}
      </p>
    ))}
  </div>
);

export default AboutMe;
