import React, { useState } from 'react';
import { Calendar, Music, Clock, CheckCircle, Circle } from 'lucide-react';
import { format, parseISO, isAfter, isBefore } from 'date-fns';
import { ko } from 'date-fns/locale';
import { lessons } from './data/lessons';
import './App.css';

function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const toggleLessonCompletion = (lessonId) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const getLessonStatus = (lesson) => {
    const lessonDate = parseISO(lesson.date);
    const today = new Date();
    
    if (completedLessons.has(lesson.id)) {
      return 'completed';
    } else if (isBefore(lessonDate, today)) {
      return 'past';
    } else if (isAfter(lessonDate, today)) {
      return 'upcoming';
    } else {
      return 'today';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'today': return '#f59e0b';
      case 'past': return '#6b7280';
      case 'upcoming': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '완료';
      case 'today': return '오늘';
      case 'past': return '지난 강의';
      case 'upcoming': return '예정';
      default: return '';
    }
  };

  const progressPercentage = (completedLessons.size / lessons.length) * 100;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <Music className="logo-icon" />
            <h1>첼로 아카데미</h1>
          </div>
          <div className="progress-section">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="progress-text">
              {completedLessons.size} / {lessons.length} 강의 완료 ({Math.round(progressPercentage)}%)
            </span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="lessons-grid">
          {lessons.map((lesson) => {
            const status = getLessonStatus(lesson);
            const isSelected = selectedLesson?.id === lesson.id;
            
            return (
              <div 
                key={lesson.id}
                className={`lesson-card ${status} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedLesson(lesson)}
              >
                <div className="lesson-header">
                  <div className="lesson-week">
                    <Calendar className="week-icon" />
                    <span>{lesson.week}주차</span>
                  </div>
                  <div className="lesson-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(status) }}
                    >
                      {getStatusText(status)}
                    </span>
                    <button
                      className="completion-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLessonCompletion(lesson.id);
                      }}
                    >
                      {completedLessons.has(lesson.id) ? 
                        <CheckCircle className="check-icon completed" /> : 
                        <Circle className="check-icon" />
                      }
                    </button>
                  </div>
                </div>

                <div className="lesson-date">
                  <Clock className="date-icon" />
                  <span>{format(parseISO(lesson.date), 'yyyy년 M월 d일 (E)', { locale: ko })}</span>
                </div>

                <div className="lesson-content">
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <p className="lesson-composer">{lesson.composer}</p>
                </div>

                <div className="lesson-type">
                  <span className={`type-badge ${lesson.type}`}>
                    {lesson.type === 'suite' && '모음곡'}
                    {lesson.type === 'sonata' && '소나타'}
                    {lesson.type === 'piece' && '곡'}
                    {lesson.type === 'rehearsal' && '리허설'}
                    {lesson.type === 'concert' && '연주회'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {selectedLesson && (
          <div className="lesson-detail">
            <div className="detail-header">
              <h2>{selectedLesson.title}</h2>
              <button 
                className="close-button"
                onClick={() => setSelectedLesson(null)}
              >
                ×
              </button>
            </div>
            <div className="detail-content">
              <div className="detail-info">
                <p><strong>작곡가:</strong> {selectedLesson.composer}</p>
                <p><strong>일정:</strong> {format(parseISO(selectedLesson.date), 'yyyy년 M월 d일 (E)', { locale: ko })}</p>
                <p><strong>주차:</strong> {selectedLesson.week}주차</p>
                <p><strong>설명:</strong> {selectedLesson.description}</p>
              </div>
              <div className="detail-actions">
                <button 
                  className={`action-button ${completedLessons.has(selectedLesson.id) ? 'completed' : ''}`}
                  onClick={() => toggleLessonCompletion(selectedLesson.id)}
                >
                  {completedLessons.has(selectedLesson.id) ? '완료 취소' : '완료 표시'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;