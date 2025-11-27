import { render, screen, fireEvent } from "@testing-library/react"
import LanguageSwitcher from "./LanguageSwitcher"
import { beforeEach, describe, expect, it, vi } from "vitest"

// Mock next-intl hooks
vi.mock("next-intl", () => ({
  useLocale: () => "en",
}))

// Mock navigation hooks
const mockReplace = vi.fn()
vi.mock("@/i18n/routing", () => ({
  usePathname: () => "/current-path",
  useRouter: () => ({
    replace: mockReplace,
  }),
}))

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders with current language", () => {
    render(<LanguageSwitcher />)
    expect(screen.getByRole("button", { name: /change language/i })).toBeInTheDocument()
    expect(screen.getByText("EN")).toBeInTheDocument()
    expect(screen.getByText("🇬🇧")).toBeInTheDocument()
  })

  it("opens menu on click", () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole("button", { name: /change language/i })

    fireEvent.click(button)

    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByText("Nederlands")).toBeInTheDocument()
    expect(screen.getByText("Deutsch")).toBeInTheDocument()
  })

  it("toggles menu on Enter key", () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole("button", { name: /change language/i })

    fireEvent.keyDown(button, { key: "Enter" })

    expect(screen.getByRole("menu")).toBeInTheDocument()
  })

  it("navigates through options with arrow keys", async () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole("button", { name: /change language/i })

    // Open menu
    fireEvent.click(button)

    const items = screen.getAllByRole("menuitem")

    // Initial focus should be on the current language (en -> index 1)
    // We need to wait for the useEffect to fire
    await screen.findByText("English")
    expect(items[1]).toHaveFocus()

    // Navigate to next item (en -> de)
    fireEvent.keyDown(items[1], { key: "ArrowDown" })
    expect(items[2]).toHaveFocus()
  })

  it("closes menu on Escape", () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole("button", { name: /change language/i })

    fireEvent.click(button)
    expect(screen.getByRole("menu")).toBeInTheDocument()

    // The event listener is on the items, not the container
    const firstItem = screen.getAllByRole("menuitem")[0]
    fireEvent.keyDown(firstItem, { key: "Escape" })

    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("calls router.replace when language is selected", () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole("button", { name: /change language/i })

    fireEvent.click(button)
    const dutchOption = screen.getByText("Nederlands")

    fireEvent.click(dutchOption)

    expect(mockReplace).toHaveBeenCalledWith("/current-path", { locale: "nl" })
  })
})
