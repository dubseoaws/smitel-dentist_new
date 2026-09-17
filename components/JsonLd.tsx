export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Renders one <script> per entry, matching the live site's markup. */
export function JsonLdBlocks({ blocks }: { blocks: unknown[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <JsonLd key={i} data={block} />
      ))}
    </>
  );
}
