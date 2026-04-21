import Client from "./Client";

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default function Page({ params }: any) {
  return <Client params={params} />;
}
