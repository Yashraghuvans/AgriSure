import './globals.css';

export const metadata = {
  title: 'AgriSure: Smart Climate-Resilient Crop Insurance',
  description: 'Building Farmer Trust with Smart Insurance using AI & Data.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark bg-gray-900 text-gray-100">{children}</body>
    </html>
  );
}