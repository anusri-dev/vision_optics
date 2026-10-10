import { useState, useEffect, useCallback } from 'react';
import type { Product } from './products';

const KEY = 'vo_wishlist';

function load(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Simple localStorage wishlist — stores product IDs.
export function useWishlist() {
  const [ids, setIds] = useState<string[]>(load);

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(ids)); }, [ids]);

  const toggle = useCallback((product: Product) => {
    setIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  return { items: ids, toggle, has };
}
