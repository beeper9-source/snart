// 첼로 아카데미 강의 일정 데이터
export const lessons = [
  {
    id: 1,
    week: 1,
    date: '2025-08-06',
    title: 'Cello Suite 1 BWV 1007 Prelude 1, Allegro Moderato 알레그로 모데라토 1',
    composer: 'J.S. Bach',
    type: 'suite',
    completed: false,
    description: '바흐의 첫 번째 첼로 모음곡 프렐류드 첫 번째 부분을 학습합니다.'
  },
  {
    id: 2,
    week: 2,
    date: '2025-08-13',
    title: 'Cello Suite 1 BWV 1007 Prelude 1, Allegro Moderato 알레그로 모데라토 2',
    composer: 'J.S. Bach',
    type: 'suite',
    completed: false,
    description: '바흐의 첫 번째 첼로 모음곡 프렐류드 두 번째 부분을 학습합니다.'
  },
  {
    id: 3,
    week: 3,
    date: '2025-08-20',
    title: '브레발 첼로 소나타 1',
    composer: 'Jean-Baptiste Bréval',
    type: 'sonata',
    completed: false,
    description: '브레발의 첫 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 4,
    week: 4,
    date: '2025-08-27',
    title: '브레발 첼로 소나타 2',
    composer: 'Jean-Baptiste Bréval',
    type: 'sonata',
    completed: false,
    description: '브레발의 두 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 5,
    week: 5,
    date: '2025-09-03',
    title: '브레발 첼로 소나타 3',
    composer: 'Jean-Baptiste Bréval',
    type: 'sonata',
    completed: false,
    description: '브레발의 세 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 6,
    week: 6,
    date: '2025-09-10',
    title: '브레발 첼로 소나타 4',
    composer: 'Jean-Baptiste Bréval',
    type: 'sonata',
    completed: false,
    description: '브레발의 네 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 7,
    week: 7,
    date: '2025-09-17',
    title: '마르첼로 첼로 소나타 1',
    composer: 'Benedetto Marcello',
    type: 'sonata',
    completed: false,
    description: '마르첼로의 첫 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 8,
    week: 8,
    date: '2025-09-24',
    title: '마르첼로 첼로 소나타 2',
    composer: 'Benedetto Marcello',
    type: 'sonata',
    completed: false,
    description: '마르첼로의 두 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 9,
    week: 9,
    date: '2025-10-01',
    title: '마르첼로 첼로 소나타 3',
    composer: 'Benedetto Marcello',
    type: 'sonata',
    completed: false,
    description: '마르첼로의 세 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 10,
    week: 10,
    date: '2025-10-15',
    title: '마르첼로 첼로 소나타 4',
    composer: 'Benedetto Marcello',
    type: 'sonata',
    completed: false,
    description: '마르첼로의 네 번째 첼로 소나타를 학습합니다.'
  },
  {
    id: 11,
    week: 11,
    date: '2025-10-22',
    title: '바흐 무반주 첼로 모음곡 Minuets 1',
    composer: 'J.S. Bach',
    type: 'suite',
    completed: false,
    description: '바흐의 무반주 첼로 모음곡 미뉴엣 첫 번째 부분을 학습합니다.'
  },
  {
    id: 12,
    week: 12,
    date: '2025-10-29',
    title: '바흐 무반주 첼로 모음곡 Minuets 2',
    composer: 'J.S. Bach',
    type: 'suite',
    completed: false,
    description: '바흐의 무반주 첼로 모음곡 미뉴엣 두 번째 부분을 학습합니다.'
  },
  {
    id: 13,
    week: 13,
    date: '2025-11-05',
    title: 'Chanson Triste 1',
    composer: 'Pyotr Ilyich Tchaikovsky',
    type: 'piece',
    completed: false,
    description: '차이코프스키의 슬픈 노래 첫 번째 부분을 학습합니다.'
  },
  {
    id: 14,
    week: 14,
    date: '2025-11-12',
    title: 'Chanson Triste 2',
    composer: 'Pyotr Ilyich Tchaikovsky',
    type: 'piece',
    completed: false,
    description: '차이코프스키의 슬픈 노래 두 번째 부분을 학습합니다.'
  },
  {
    id: 15,
    week: 15,
    date: '2025-11-19',
    title: '리허설',
    composer: 'Various',
    type: 'rehearsal',
    completed: false,
    description: '클래스 연주회를 위한 전체 리허설을 진행합니다.'
  },
  {
    id: 16,
    week: 16,
    date: '2025-11-26',
    title: '클래스 연주회',
    composer: 'Various',
    type: 'concert',
    completed: false,
    description: '16주간의 학습 성과를 보여주는 클래스 연주회입니다.'
  }
];

export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByType = (type) => {
  return lessons.filter(lesson => lesson.type === type);
};

export const getUpcomingLessons = () => {
  const today = new Date();
  return lessons.filter(lesson => new Date(lesson.date) >= today);
};
