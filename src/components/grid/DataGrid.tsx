import { gridData } from "@/data/gridData";
import TableHeader from "./table/TableHeader";
import TableRow from "./table/TableRow";
import GridRunningNotification from "../notification/GridRunningNotification";

export const DataGrid: React.FC = () => {
  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white relative">
      
      <GridRunningNotification />

      <div className="flex-1 min-h-0 overflow-auto">
        <table className="min-w-max border-collapse border-spacing-0">
          <TableHeader />
          <tbody>
            {gridData.map((data, index) => (
              <TableRow key={index} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
