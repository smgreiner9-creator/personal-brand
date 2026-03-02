import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-4xl font-bold text-text">404</h1>
      <p className="mt-4 text-body">this page doesn&apos;t exist yet.</p>
      <div className="mt-8">
        <Button href="/">back home</Button>
      </div>
    </div>
  );
}
