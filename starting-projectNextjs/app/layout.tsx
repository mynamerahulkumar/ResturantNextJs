import './globals.css'

export const metadata = {// metadata is an object that contains the title and description of the page
  title: 'NextJS Course App',// this is the title of the page
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* // the children prop is the content of the page */}
    </html>
  );
}
