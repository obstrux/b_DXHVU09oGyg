import CaseDetailClient from "./CaseDetailClient";

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default function Page({ params }: any) {
  return <CaseDetailClient params={params} />;
}
