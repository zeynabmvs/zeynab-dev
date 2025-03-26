// About Me Component
type AboutMeProps = {
  paragraphs: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({ paragraphs }) => (
  <section className="space-y-4">
    <div className="rounded-lg border bg-card shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className={`text-sm ${index !== paragraphs.length - 1 ? 'mb-4' : ''}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  </section>
);

export default AboutMe; 