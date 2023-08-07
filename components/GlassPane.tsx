import clsx from "clsx";
import { FC } from "react";
interface IGlassPane {
  children: React.ReactNode;
  className?: string;
}
const GlassPane: FC<IGlassPane> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
