import { notFound } from "next/navigation"

// Unknown paths under a locale (e.g. /nl/does-not-exist) only render the localized
// not-found.tsx when a segment calls notFound(), so catch them all here.
export default function CatchAllPage() {
  notFound()
}
