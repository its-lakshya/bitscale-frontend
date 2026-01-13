const HeaderShimmerCell = () => (
  <div className="w-full h-5.25 rounded-lg bg-[#E5E7EB] animate-pulse" />
);

const ShimmerCell = () => (
  <div className="w-full h-5.25 rounded-lg bg-[#E5E7EB] animate-pulse" />
);

const headerCell =
  "px-3 py-2 w-52 h-[34px] bg-[#FAFAFA] border border-[#E5E7EB] border-l-0 text-left text-xs font-medium text-[#374151]";

export const TableHeaderShimmer: React.FC = () => {
  return (
    <thead className="sticky top-0">
      <tr>
        <th className={`${headerCell} w-[60px]`}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>

        <th className={headerCell}>
          <HeaderShimmerCell />
        </th>
      </tr>
    </thead>
  );
};

export const TableRowShimmer: React.FC = () => {
  return (
    <tr className="text-xs font-normal">
      <td className="px-3 py-1.5 border border-[#F3F4F6] text-[#6B7280]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 max-w-52 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>

      <td className="px-3 py-1.5 max-w-52 border border-[#F3F4F6]">
        <ShimmerCell />
      </td>
    </tr>
  );
};