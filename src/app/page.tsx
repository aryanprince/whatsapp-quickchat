export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="container mx-auto flex flex-1 flex-col justify-center gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">WhatsApp QuickChat</h1>
          <p className="text-sm">
            Start a WhatsApp chat without creating a new contact.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <input type="text" className="w-fit" />
          <button>Send</button>
        </div>
      </div>
    </main>
  );
}
