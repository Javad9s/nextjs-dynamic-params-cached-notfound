import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
export const dynamic = 'force-static';
function isAllNumbers(str: string): boolean {
  return /^\d+$/.test(str);
}
export default function Page({ params: { id } }: Props) {
  if (!isAllNumbers(id)) {
    notFound();
  }
  const currentDate = new Date();
  return <div>{`Params : ${id} - Generated at ${currentDate}`}</div>;
}
