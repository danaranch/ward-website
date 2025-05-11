import LightRays from "./LightRays";

type ActionButtonProps = {
  link: string;
  text: string;
};

export default function ActionButton({ link, text }: ActionButtonProps) {
  return (
    <div className="text-center py-2">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="relative bg-transparent text-sky-600 font-semibold py-2 px-8 border-2 border-sky-600 rounded">
          <span
            className="-z-10 absolute top-0 h-full"
            style={{ left: -1, top: -1 }}
          >
            <LightRays color="#0ea5e9" />
          </span>
          {text}
        </button>
      </a>
    </div>
  );
}
