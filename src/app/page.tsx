import Header from "@/components/Header";
import Alert from "@/components/Alert";
import Toolbar from "@/components/toolbar/Toolbar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Alert />
      <Toolbar />
    </main>
  );
}
