import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
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
      <Footer />
    </main>
  );
}

                  <div className='w-full h-5.25 rounded-lg bg-[#F3F4F6]'></div>
