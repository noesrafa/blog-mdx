import { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/src/components/Mdx";

interface Props {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const Page: FC<Props> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);

  return (
    <div>
      <h1>{doc.title}</h1>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default Page;
