import StaffCard from '../StaffCard';

export default function StaffCardExample() {
  return (
    <div className="p-6 max-w-md">
      <StaffCard
        name="Ms. Johnson"
        role="Mental Health Contact Teacher"
        room="Room 214"
        hours="Before school, Lunch, After school"
        description="Quick check-in, help you figure out next steps."
      />
    </div>
  );
}
