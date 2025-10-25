import ResourceCard from '../ResourceCard';

export default function ResourceCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ResourceCard
        name="988 Suicide Crisis Helpline"
        contact="988"
        description="24/7 crisis support for anyone experiencing suicidal thoughts or emotional distress."
        availability="24/7, Canada-wide"
      />
    </div>
  );
}
