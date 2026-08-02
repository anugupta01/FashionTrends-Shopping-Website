import Link from "next/link";

export interface Crumb { label: string; url?: string; }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {crumbs.map((c, i) =>
          c.url && i < crumbs.length - 1 ? (
            <li className="breadcrumb-item" key={i}>
              <Link href={c.url}>{c.label}</Link>
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page" key={i}>
              {c.label}
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
