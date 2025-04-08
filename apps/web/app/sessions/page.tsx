import { SiteHeader } from "@repo/ui/components/site-header";

import data from "#data/data.json";
import { DataTable } from "#components/data-table";

export default function Home() {
  return (
    <>
      <SiteHeader title="Sessions" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
