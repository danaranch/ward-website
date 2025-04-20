import { FC } from "react";

interface LineItemProps {
  middle: string;
}

const LineItem: FC<LineItemProps> = ({ middle }) => {
  return (
    <div className="text-center py-8 rounded bg-sky-100">
      <em className="font-semibold text-lg">
        {middle}
      </em>
    </div>
  );
};

export default LineItem;
