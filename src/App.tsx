import { Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { About } from './pages/About'
import { Cookies } from './pages/Cookies'
import { ExamSimulation } from './pages/ExamSimulation'
import { Home } from './pages/Home'
import { LegalNotice } from './pages/LegalNotice'
import { Privacy } from './pages/Privacy'
import { Session } from './pages/Session'
import { SubjectDetail } from './pages/SubjectDetail'

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
