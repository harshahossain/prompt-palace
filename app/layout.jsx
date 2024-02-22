import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

//metadatra
export const metadata = {
  title: "Promt Palace",
  description: "Discover, Create & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
