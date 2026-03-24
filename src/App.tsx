import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { Home } from './pages/Home'

const ExamSimulation = lazy(() =>
  import('./pages/ExamSimulation').then((m) => ({ default: m.ExamSimulation })),
)
const SubjectDetail = lazy(() =>
  import('./pages/SubjectDetail').then((m) => ({ default: m.SubjectDetail })),
)
const Session = lazy(() => import('./pages/Session').then((m) => ({ default: m.Session })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })))
const Cookies = lazy(() => import('./pages/Cookies').then((m) => ({ default: m.Cookies })))
const LegalNotice = lazy(() =>
  import('./pages/LegalNotice').then((m) => ({ default: m.LegalNotice })),
)

export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="assignatures" element={<Home />} />
        <Route path="taller" element={<Navigate to="/assignatures" replace />} />
        <Route path="simulador" element={<ExamSimulation />} />
        <Route path="sobre" element={<About />} />
        <Route path="privacitat" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="avis-legal" element={<LegalNotice />} />
        <Route path="assignatura/:subjectId" element={<SubjectDetail />} />
        <Route path="assignatura/:subjectId/:activityId" element={<Session />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
