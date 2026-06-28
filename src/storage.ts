export interface StudyState {
  favorites: string[]
  mistakeIds: string[]
  wrongCounts: Record<string, number>
  answeredIds: string[]
}

const STORAGE_KEY = 'bmb-question-bank:2026-v1'

export const emptyStudyState: StudyState = {
  favorites: [],
  mistakeIds: [],
  wrongCounts: {},
  answeredIds: [],
}

export function loadStudyState(): StudyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStudyState

    const saved = JSON.parse(raw) as Partial<StudyState>

    return {
      favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
      mistakeIds: Array.isArray(saved.mistakeIds) ? saved.mistakeIds : [],
      wrongCounts:
        saved.wrongCounts && typeof saved.wrongCounts === 'object'
          ? saved.wrongCounts
          : {},
      answeredIds: Array.isArray(saved.answeredIds) ? saved.answeredIds : [],
    }
  } catch {
    return emptyStudyState
  }
}

export function saveStudyState(state: StudyState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
