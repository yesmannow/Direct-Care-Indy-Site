export function Steps() {
  const steps = [
    { title: "Enroll", description: "Sign up online in minutes" },
    { title: "Schedule", description: "Book your first appointment" },
    { title: "Message/Telehealth", description: "Connect with your provider" },
    { title: "Labs/Meds", description: "Access affordable prescriptions and tests" },
  ];
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          <div className="text-2xl font-bold text-secondary">0{index + 1}</div>
          <h3 className="text-xl font-bold mt-2">{step.title}</h3>
          <p className="mt-2">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
