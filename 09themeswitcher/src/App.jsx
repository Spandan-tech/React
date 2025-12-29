
import { useEffect, useState, useMemo, useCallback } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = useCallback(() => {
    setThemeMode("light")
  }, [])

  const darkTheme = useCallback(() => {
    setThemeMode("dark")
  }, [])

  // actual change in theme
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(themeMode)
    console.log('Theme changed to:', themeMode) // Debug log
  }, [themeMode])

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    themeMode,
    lightTheme,
    darkTheme
  }), [themeMode, lightTheme, darkTheme])
  

  return (
    <ThemeProvider value={contextValue}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App