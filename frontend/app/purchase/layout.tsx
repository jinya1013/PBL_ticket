export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="purchase-layout">
      <header className="purchase-header">
        <h1>乗車券の購入</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}