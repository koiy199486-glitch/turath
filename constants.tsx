
import React from 'react';
import type { Teacher, Course, Subject, Lecture, Assignment, Exam } from './types';

export const TEACHERS: Teacher[] = [
  { id: 1, name: 'الأستاذ علي', specialization: 'الفيزياء', avatar: 'https://picsum.photos/seed/t1/100/100' },
  { id: 2, name: 'الأستاذة فاطمة', specialization: 'الكيمياء', avatar: 'https://picsum.photos/seed/t2/100/100' },
  { id: 3, name: 'الأستاذ أحمد', specialization: 'الأحياء', avatar: 'https://picsum.photos/seed/t3/100/100' },
];

export const COURSES: Course[] = [
  { id: 1, title: 'الكورس الأول', description: 'شرح تفصيلي لمنهج الفيزياء', price: '200,000 د.ع', teacher: TEACHERS[0], image: 'https://picsum.photos/seed/c1/300/200' },
  { id: 2, title: 'الكورس الثاني', description: 'تجارب عملية في الكيمياء', price: '250,000 د.ع', teacher: TEACHERS[1], image: 'https://picsum.photos/seed/c2/300/200' },
  { id: 3, title: 'الكورس الثالث', description: 'أساسيات علم الأحياء', price: '150,000 د.ع', teacher: TEACHERS[2], image: 'https://picsum.photos/seed/c3/300/200' },
  { id: 4, title: 'كورس IQ', description: 'تنمية مهارات الذكاء', price: '100,000 د.ع', teacher: TEACHERS[0], image: 'https://picsum.photos/seed/c4/300/200' },
];

export const SUBJECTS: Subject[] = [
  { id: 1, name: 'التربية الاسلامية', image: 'https://picsum.photos/seed/s1/200/150' },
  { id: 2, name: 'اللغة العربية', image: 'https://picsum.photos/seed/s2/200/150' },
  { id: 3, name: 'اللغة الانكليزية', image: 'https://picsum.photos/seed/s3/200/150' },
];

export const LECTURES: Lecture[] = [
    { id: 1, title: 'الفصل الأول', chapter: 'الكورس الأول', isLocked: false },
    { id: 2, title: 'الثاني', chapter: 'الكورس الأول', isLocked: false },
    { id: 3, title: 'الثالث', chapter: 'الكورس الأول', isLocked: true },
    { id: 4, title: 'محاضرة واحد', chapter: 'الفصل الأول', isLocked: false },
    { id: 5, title: 'محاضرة واحد', chapter: 'الثاني', isLocked: false },
    { id: 6, title: 'محاضرة واحد', chapter: 'الثالث', isLocked: true },
];

export const ASSIGNMENTS: Assignment[] = [
    { id: 1, title: 'واجب المحاضرة الأولى', isTimed: true, requiresCamera: true },
    { id: 2, title: 'واجب المحاضرة الثانية', isTimed: false, requiresCamera: false },
];

export const EXAMS: Exam[] = [
    { id: 1, title: 'امتحان المحاضرة الأولى', isTimed: true, requiresCamera: true },
    { id: 2, title: 'امتحان المحاضرة الثانية', isTimed: true, requiresCamera: true },
];

export const InstagramIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
export const TiktokIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.55-2.02-2.34-4.75-2.21-7.45.07-1.43.39-2.83 1.02-4.11.6-1.22 1.44-2.32 2.5-3.23.02-.02.04-.04.05-.06.01.22.02.43.03.64.01 2.22.01 4.44.01 6.66 0 .33-.12.65-.34.92-.37.44-.93.68-1.5.64-.56-.03-1.09-.3-1.47-.69-.27-.29-.44-.66-.49-1.07-.12-1.22-.09-2.45-.09-3.67.01-2.52.01-5.04.02-7.56.01-.46.1-.92.2-1.37 1.11-2.18 3.32-3.52 5.72-3.49 2.25.04 4.31.95 5.66 2.65.01.02.02.03.02.04.01.08.01.16.02.23.02.73.02 1.46.01 2.19-.01.23-.05.46-.11.68-.23.77-.9 1.28-1.68 1.33-1.03.06-1.92-.61-2.19-1.59-.03-.11-.05-.23-.07-.34-.03-1.39-.02-2.79-.01-4.18z"></path></svg>);
export const YoutubeIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path></svg>);
export const SupportIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>);

export const HomeIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>);
export const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4.757a1.125 1.125 0 0 0-1.125-1.125H9.125A1.125 1.125 0 0 0 8 4.757V6M8 6h8M8 6c-1.336 0-2.286.95-2.583 2.14-1.298.53-2.345 1.33-3.148 2.305A23.933 23.933 0 0 0 12 15c4.76 0 9.12-1.533 12.73-4.356-.803-.975-1.85-1.775-3.148-2.305C18.286 6.95 17.336 6 16 6Z" /></svg>);
export const BellIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>);
export const MenuIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>);
export const LockClosedIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>);
export const ArrowDownTrayIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>);
// FIX: Update ClockIcon to accept a title prop for accessibility.
export const ClockIcon: React.FC<{className?: string; title?: string}> = ({className, title}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    {title && <title>{title}</title>}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>);
// FIX: Update CameraIcon to accept a title prop for accessibility.
export const CameraIcon: React.FC<{className?: string; title?: string}> = ({className, title}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    {title && <title>{title}</title>}
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>);
export const EyeSlashIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>);