import React, { Suspense } from 'react'
import ErrorBoundary from './components/eb'
import ThemeContext from './context/theme.context'


const App = () : JSX.Element => {
  const StyleGuide = React.lazy(() => import('./views/StyleGuide/StyleGuide.view'))

  return (
    <ThemeContext.Provider value='light'>
      <div className="App">
        <Suspense fallback={<div>loading ...</div>}>
          <ErrorBoundary>
            <StyleGuide />
          </ErrorBoundary>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
