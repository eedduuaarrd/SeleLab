/**
 * Metadades mínimes per a JSON-LD (ItemList) sense importar el banc d’exàmens.
 * Mantenir alineat amb `bank.ts` quan s’afegeixin o canviïn assignatures.
 */
export const SUBJECT_INDEX_FOR_SCHEMA: { id: string; name: string }[] = [
  { id: 'catala', name: 'Llengua catalana i literatura' },
  { id: 'castella', name: 'Llengua castellana i literatura' },
  { id: 'angles', name: 'Llengua estrangera: anglès' },
  { id: 'historia', name: "Història d'Espanya / Història" },
  { id: 'filosofia', name: 'Filosofia' },
  { id: 'matematiques', name: 'Matemàtiques' },
  { id: 'fisica', name: 'Física' },
  { id: 'quimica', name: 'Química' },
  { id: 'biologia', name: 'Biologia' },
  { id: 'cmc', name: 'Ciències per al món contemporani' },
  { id: 'historia-art', name: "Història de l'art" },
]
