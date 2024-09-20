export function Tag({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <strong className="bg-gray-600 py-1 px-5 rounded-xl text-sm font-medium">
      {children}
    </strong>
  );
}
