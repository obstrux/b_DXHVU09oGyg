import AlertDetailClient from "./AlertDetailClient";

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default function Page() {
  return <AlertDetailClient />;
}
