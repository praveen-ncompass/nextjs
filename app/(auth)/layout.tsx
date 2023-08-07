import GlassPane from "@/components/GlassPane";

import '@/styles/global.css'

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex item-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default AuthLayout;
