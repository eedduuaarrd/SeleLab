import type { Question } from '../../types/content'
import { examSrc } from './constants'

const PDF =
  'https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2025/angles/ord/pau_angl25jl.pdf'

/** Listening — sèrie 1-A. Respostes segons pauta oficial (transcripció). */
export const VERBATIM_PAU25_ANGLES: Question[] = [
  {
    kind: 'mcq',
    id: 'en25-l-1',
    prompt: 'Why is Uluru considered sacred by the Anangu people?',
    options: [
      'It is made of a rare type of sandstone.',
      'It holds deep connections to their Tjukurpa, or belief system.',
      'It is the deepest natural formation in Australia.',
      'It was used as a meeting point for caretakers.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 1', 'L1'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-2',
    prompt: 'Why do the Anangu discourage ascending Uluru?',
    options: [
      'It poses significant risks to visitors.',
      'They encourage exploring other cultural experiences instead.',
      'They think it violates the sacred meaning of the site.',
      'There are no established trails to follow.',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 2', 'L2'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-3',
    prompt: 'According to Chris Wood, how did Uluru form?',
    options: [
      'In the same way as the Himalayas.',
      'Through the erosion of a mountain range.',
      'Through the petrification of an ancient sea.',
      'From the gradual accumulation of desert sand.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 3', 'L3'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-4',
    prompt: 'Why is Uluru red?',
    options: [
      'It contains copper minerals.',
      'The sandstone oxidizes when in contact to the air.',
      'It is actually grey, not red.',
      'The soil around it stains the rock.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 4', 'L4'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-5',
    prompt: 'When is the worst time to visit Uluru?',
    options: [
      'December to February.',
      'June to August.',
      'March to May.',
      'September to November.',
    ],
    correctIndex: 0,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 5', 'L5'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-6',
    prompt: 'What safety precautions are important when visiting Uluru?',
    options: [
      'Avoiding interactions with local wildlife.',
      'Drinking water and using sun protection.',
      'Hiring a ranger or tour guide.',
      'Avoiding travel in the winter months.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 6', 'L6'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-7',
    prompt: 'What does the Uluru Cultural Center offer visitors?',
    options: [
      'Accommodation for overnight stays.',
      'Guided tours of the rock base.',
      'Insights into Anangu culture.',
      'Spiritual support.',
    ],
    correctIndex: 2,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 7', 'L7'),
  },
  {
    kind: 'mcq',
    id: 'en25-l-8',
    prompt: 'What surprises visitors about Uluru’s surroundings?',
    options: [
      'The absence of vegetation.',
      'The many caves, waterholes, and wildlife.',
      'The availability of tourist shops and restaurants.',
      'The lack of walking paths around the base.',
    ],
    correctIndex: 1,
    examSource: examSrc(PDF, 'PAU 2025 · Anglès · sèrie 1-A · Listening 8', 'L8'),
  },
]
