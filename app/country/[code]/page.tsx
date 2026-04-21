import CountryDetailClient from "./CountryDetailClient";

export async function generateStaticParams() {
  return [{ code: 'us' }, { code: 'eu' }, { code: 'jp' }, { code: 'kr' }, { code: 'gb' }, { code: 'de' }];
}

export default function Page({ params }: any) {
  return <CountryDetailClient params={params} />;
}
