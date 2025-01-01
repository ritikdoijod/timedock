export const metadata = {
  title: "TimeDock",
  description: "TimeDock is a timesheet frontend application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
