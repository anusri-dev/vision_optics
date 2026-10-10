import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb { label: string; path?: string; }

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-4">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-charcoal-600">
        <li><Link to="/" className="flex items-center gap-1 hover:text-violet-700" aria-label="Home"><Home className="h-3.5 w-3.5" /></Link></li>
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-violet-300" />
            {c.path && i < crumbs.length - 1
              ? <Link to={c.path} className="hover:text-violet-700">{c.label}</Link>
              : <span className="font-medium text-charcoal-900">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
