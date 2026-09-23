// The real layout (with <html>) lives in [locale]/layout.tsx. This pass-through root
// lets not-found.tsx catch the notFound() that layout throws for unknown locales.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
