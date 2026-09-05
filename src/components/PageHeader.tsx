export function PageHeader({ title, description, eyebrow }: { title: string; description?: string; eyebrow?: string }) {
  return <div className="page-header">
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </div>;
}
