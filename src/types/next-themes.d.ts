declare module "next-themes" {
  export interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    storageKey?: string
    value?: {
      light: string
      dark: string
      system: string
    }
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element

  export function useTheme(): {
    theme: string | undefined
    setTheme: (theme: string) => void
    resolvedTheme: string | undefined
    themes: string[]
    systemTheme: string | undefined
  }
}
