import { Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { Home } from './pages/Home'
import { SubjectDetail } from './pages/SubjectDetail'
import { ExamSimulation } from './pages/ExamSimulation'
import { Session } from './pages/Session'

export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="assignatures" element={<Home />} />
        <Route path="taller" element={<Navigate to="/assignatures" replace />} />
        <Route path="simulador" element={<ExamSimulation />} />
        <Route path="assignatura/:subjectId" element={<SubjectDetail />} />
        <Route path="assignatura/:subjectId/:activityId" element={<Session />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
