const HINT_ENROLLMENT_URL = "https://directcareindy.hint.com";

const EnrollmentForm = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 bg-blue-600 text-white text-center">
          <h2 className="text-2xl font-bold">Secure Membership Enrollment</h2>
          <p className="opacity-90">Powered by Hint Health - HIPAA compliant</p>
          <p id="hint-accessibility-note" className="text-sm mt-2 opacity-90">
            Screen reader note: the embedded form is hosted by Hint Health and opens to a secure payment step.
          </p>
        </div>
        <div className="relative w-full" style={{ height: "800px" }}>
          <iframe
            src={HINT_ENROLLMENT_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Hint Health Enrollment"
            aria-label="Hint Health enrollment form"
            aria-describedby="hint-accessibility-note"
            loading="eager"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
