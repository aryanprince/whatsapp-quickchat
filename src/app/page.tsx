import PhoneInputForm from "./phone-input-form";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex flex-1 flex-col justify-center gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">WhatsApp QuickChat</h1>
          <p className="text-sm">
            Start a WhatsApp chat without creating a new contact.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <PhoneInputForm />
        </div>
      </div>
    </div>
  );
}
