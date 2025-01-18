
import { FC } from 'react';

interface LineItemProps {
  left: string;
  middle?: string;
  right: string;
  link?: string; // Optional link property
}

const LineItem: FC<LineItemProps> = ({ left, middle, right, link }) => {
  const content = (
    <div className="py-1">
      <div className="flex">
        <div className="flex-none px-1">{left}</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
        </div>
        <div className="flex-none px-1 text-right">{right}</div>
      </div>
      {middle && (
        <div className="text-center font-sm truncate zero-auto max-75">
          <div className="italic" dangerouslySetInnerHTML={{ __html: middle }}></div>
        </div>
      )}
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export default LineItem;