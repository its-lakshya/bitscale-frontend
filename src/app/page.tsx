import Alert from "@/components/Alert";
import { DataGrid } from "@/components/grid/DataGrid";
import Header from "@/components/Header";
import Toolbar from "@/components/toolbar/Toolbar";

export default function DashboardPage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <Alert />
      <Toolbar />
      <DataGrid />
    </main>
  );
}
