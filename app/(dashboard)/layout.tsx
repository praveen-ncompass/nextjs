import GlassPane from "@/components/GlassPane";
import NewProject from "@/components/NewProject";
import Sidebar from "@/components/Sidebar";

import "@/styles/global.css";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex item-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
};

export default DashboardLayout;
