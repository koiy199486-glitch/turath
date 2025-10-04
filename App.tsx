
import React, { useState, useRef, useEffect } from 'react';
import { Screen, Teacher, Course, Subject, Lecture, Assignment, Exam } from './types';
import { TEACHERS, COURSES, SUBJECTS, LECTURES, ASSIGNMENTS, EXAMS, InstagramIcon, TiktokIcon, YoutubeIcon, SupportIcon, HomeIcon, BriefcaseIcon, BellIcon, MenuIcon, LockClosedIcon, ArrowDownTrayIcon, ClockIcon, CameraIcon, EyeSlashIcon } from './constants';

const App: React.FC = () => {
    const [screen, setScreen] = useState<Screen>(Screen.Welcome);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(TEACHERS[0]);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(COURSES[0]);
    const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(LECTURES[3]);
    const [activeTab, setActiveTab] = useState('courses');
    
    const navigate = (newScreen: Screen) => setScreen(newScreen);

    const selectTeacher = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        navigate(Screen.TeacherDetail);
    };

    const selectCourse = (course: Course) => {
        setSelectedCourse(course);
        navigate(Screen.CourseDetail);
    };

    const selectLecture = (lecture: Lecture) => {
        setSelectedLecture(lecture);
        navigate(Screen.Lecture);
    }
    
    const renderScreen = () => {
        switch (screen) {
            case Screen.Welcome:
                return <WelcomeScreen onNavigate={navigate} />;
            case Screen.Login:
                return <LoginScreen onNavigate={navigate} />;
            case Screen.SignUp:
                return <SignUpScreen onNavigate={navigate} />;
            case Screen.Terms:
                return <TermsScreen onNavigate={navigate} />;
            case Screen.Otp:
                return <OtpScreen onNavigate={navigate} />;
            case Screen.Home:
                return <HomeScreen onNavigate={navigate} onSelectTeacher={selectTeacher} onSelectCourse={selectCourse}/>;
            case Screen.TeacherDetail:
                return <TeacherDetailScreen onNavigate={navigate} teacher={selectedTeacher} activeTab={activeTab} setActiveTab={setActiveTab} onSelectCourse={selectCourse} />;
            case Screen.CourseDetail:
                 return <CourseDetailScreen onNavigate={navigate} course={selectedCourse} onSelectLecture={selectLecture}/>;
            case Screen.Lecture:
                 return <LectureScreen onNavigate={navigate} course={selectedCourse} lecture={selectedLecture}/>;
            default:
                return <WelcomeScreen onNavigate={navigate} />;
        }
    };

    return (
        <div className="bg-white min-h-screen w-full max-w-md mx-auto font-sans shadow-2xl">
            {renderScreen()}
        </div>
    );
};


// --------------------
// UI Components
// --------------------

const Logo: React.FC = () => (
    <div className="text-center">
        <h1 className="text-5xl font-black text-white" style={{fontFamily: "'Cairo', sans-serif", fontWeight: 900}}>التراث</h1>
        <p className="text-white text-lg -mt-2">Academy</p>
    </div>
);

const SocialLinks: React.FC = () => (
    <div className="flex flex-col items-center mt-auto pb-8">
        <p className="text-sm text-gray-500 mb-2">Support</p>
        <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center"><InstagramIcon className="w-5 h-5"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center"><TiktokIcon className="w-5 h-5"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center"><SupportIcon className="w-5 h-5"/></a>
            <a href="#" className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center"><YoutubeIcon className="w-5 h-5"/></a>
        </div>
    </div>
);

const AuthHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="relative bg-purple-700 h-64 rounded-b-3xl flex flex-col items-center justify-center pt-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-teal-500 rounded-full opacity-30"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500 rounded-full opacity-20"></div>
             <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <path d="M-3.66,45.88 C169.34,142.13 314.33,-47.73 503.38,82.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#0d9488'}}></path>
            </svg>
        </div>
        <div className="relative z-10">
            <Logo />
            {children}
        </div>
    </div>
);

const BottomNav: React.FC<{onNavigate: (screen: Screen) => void}> = ({onNavigate}) => (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-gray-800 text-white rounded-t-2xl shadow-lg flex justify-around items-center p-2 z-50">
        <button onClick={() => onNavigate(Screen.Home)} className="flex flex-col items-center text-xs">
            <HomeIcon className="w-6 h-6 mb-1"/>
            <span>الرئيسية</span>
        </button>
        <button className="flex flex-col items-center text-xs">
            <BriefcaseIcon className="w-6 h-6 mb-1"/>
            <span>رسائلي</span>
        </button>
        <button className="relative flex flex-col items-center text-xs">
            <BellIcon className="w-6 h-6 mb-1"/>
            <span className="absolute -top-1 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">1</span>
            <span>الاشعارات</span>
        </button>
         <button className="flex flex-col items-center text-xs">
            <MenuIcon className="w-6 h-6 mb-1"/>
            <span>القائمة</span>
        </button>
    </div>
);


// --------------------
// Authentication Screens
// --------------------

const WelcomeScreen: React.FC<{ onNavigate: (screen: Screen) => void }> = ({ onNavigate }) => (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <AuthHeader>
            <h2 className="text-white text-3xl font-bold mt-8">مرحبا بك!</h2>
        </AuthHeader>
        <div className="flex-grow flex flex-col justify-center items-center p-8 space-y-4">
            <button onClick={() => onNavigate(Screen.SignUp)} className="w-full bg-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                انشاء حساب جديد
            </button>
            <button onClick={() => onNavigate(Screen.Login)} className="w-full bg-white border-2 border-purple-700 text-purple-700 font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                تسجيل دخول
            </button>
        </div>
        <SocialLinks />
    </div>
);

const LoginScreen: React.FC<{ onNavigate: (screen: Screen) => void }> = ({ onNavigate }) => (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <AuthHeader>
            <h2 className="text-white text-3xl font-bold mt-8">أهلا بعودتك!</h2>
        </AuthHeader>
        <div className="flex-grow flex flex-col justify-center p-8 space-y-4">
            <input type="text" placeholder="اسم المستخدم" className="w-full bg-gray-200 text-gray-700 text-right py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="password" placeholder="كلمة المرور" className="w-full bg-gray-200 text-gray-700 text-right py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <div className="flex justify-between items-center text-sm px-2">
                <a href="#" className="text-gray-500">نسيت كلمة المرور؟</a>
                <label className="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                    <span>تذكرني</span>
                </label>
            </div>
            <button onClick={() => onNavigate(Screen.Home)} className="w-full mt-4 bg-white border-2 border-purple-700 text-purple-700 font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                تسجيل دخول
            </button>
            <p className="text-center text-sm text-gray-500 pt-4">
                مستخدم جديد؟ <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Screen.SignUp); }} className="text-purple-700 font-bold">انشاء حساب</a>
            </p>
        </div>
        <SocialLinks />
    </div>
);

const SignUpScreen: React.FC<{ onNavigate: (screen: Screen) => void }> = ({ onNavigate }) => (
     <div className="min-h-screen flex flex-col bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-full h-48 z-0">
             <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <path d="M-3.66,45.88 C169.34,-42.13 314.33,147.73 503.38,22.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#8B5CF6'}}></path>
            </svg>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
                <path d="M-3.66,45.88 C169.34,102.13 314.33,-47.73 503.38,82.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#3B82F6'}}></path>
            </svg>
        </div>
        <div className="flex-grow flex flex-col z-10">
            <div className="pt-20">
                <Logo />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center p-8 space-y-4">
                <input type="tel" placeholder="رقم الهاتف" className="w-full bg-gray-200 text-gray-700 text-right py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button onClick={() => onNavigate(Screen.Terms)} className="w-full bg-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    انشاء حساب
                </button>
            </div>
            <SocialLinks />
        </div>
    </div>
);

const TermsScreen: React.FC<{ onNavigate: (screen: Screen) => void }> = ({ onNavigate }) => (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-full h-48 z-0">
             <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
                <path d="M-3.66,45.88 C169.34,-42.13 314.33,147.73 503.38,22.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#8B5CF6'}}></path>
            </svg>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
                <path d="M-3.66,45.88 C169.34,102.13 314.33,-47.73 503.38,82.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#3B82F6'}}></path>
            </svg>
        </div>
        <div className="flex-grow flex flex-col p-6 z-10">
            <div className="pt-10 self-center">
                 <Logo />
            </div>
            <h2 className="text-2xl font-bold text-center my-6 text-gray-800">شروط الاستخدام</h2>
            <div className="bg-white p-4 rounded-lg shadow-inner flex-grow overflow-y-auto text-sm text-gray-600 text-right space-y-3">
                <p>لقبول بالشروط باستخدامك لبرنامج الأكاديمية، فانك توافق على الالتزام بهذه الشروط وسياسات ذات الصلة. إذا كنت لا توافق، يرجى عدم استخدام البرنامج.</p>
                <p>حقوق النشر والملكية الفكرية مع المحاضرات والمحتوى التعليمي المنشور في البرنامج مملوك لأساتذة أو لإدارة الأكاديمية.</p>
                <p>يمنع نسخ أو إعادة نشر أو توزيع أي محتوى إلا بإذن كتابي من صاحب الحق.</p>
                <p>فقط البرنامج يحق إزالة أي محتوى مخالف لحقوق النشر أو القوانين.</p>
                <p>مسؤوليات الأساتذة على الأساتذة التأكد من أن المحتوى المقدم أصلي وغير منسوخ من أي أطراف أخرى دون إذن.</p>
                <p>المحتوى يجب أن يكون خاليًا من أي مواد مسيئة أو مخالفة للقوانين المحلية.</p>
            </div>
            <div className="mt-6 flex flex-col items-center">
                <button onClick={() => onNavigate(Screen.Otp)} className="w-full max-w-xs bg-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-lg">
                    استمرار
                </button>
                 <div className="mt-8">
                    <SocialLinks />
                 </div>
            </div>
        </div>
    </div>
);


const OtpScreen: React.FC<{ onNavigate: (screen: Screen) => void }> = ({ onNavigate }) => {
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        const target = e.target as HTMLInputElement;
        if (target.value.length === 1 && index < inputs.current.length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="relative h-64">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-600 rounded-full opacity-50"></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-40"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-48 border-4 border-gray-400 rounded-3xl flex items-center justify-center bg-white/50 backdrop-blur-sm">
                        <div className="w-10 h-1 bg-gray-400 absolute top-4 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center px-8 text-center">
                <h2 className="text-2xl font-bold text-teal-600 mb-2">إكمال عملية التسجيل</h2>
                <p className="text-gray-500">ادخل الكود الذي تم ارساله الى الرقم</p>
                <p className="text-gray-700 font-bold my-2" dir="ltr">964+ 780 599 7772</p>

                <div className="flex justify-center space-x-4 space-x-reverse my-6" dir="ltr">
                    {[0, 1, 2, 3].map(i => (
                        <input
                            key={i}
                            // FIX: Ensure ref callback does not return a value to match the expected `Ref<HTMLInputElement>` type.
                            ref={el => { inputs.current[i] = el; }}
                            type="text"
                            maxLength={1}
                            onInput={(e) => handleInput(e, i)}
                            className="w-14 h-14 bg-gray-200 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    ))}
                </div>
                
                <p className="text-sm text-gray-500">لم يصلك الكود؟</p>
                <button className="text-purple-700 font-bold">اعد ارسال الكود</button>

                <button onClick={() => onNavigate(Screen.Home)} className="w-full max-w-xs mt-8 bg-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-lg">
                    تحقق
                </button>
            </div>
            <SocialLinks />
        </div>
    );
};


// --------------------
// Main App Screens
// --------------------

const HomeScreen: React.FC<{ onNavigate: (screen: Screen) => void, onSelectTeacher: (teacher: Teacher) => void, onSelectCourse: (course: Course) => void }> = ({ onNavigate, onSelectTeacher, onSelectCourse }) => (
    <div className="bg-gray-900 min-h-screen pb-24 text-white">
        <header className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">اسم التطبيق الانكليزي</h1>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </header>

        <div className="h-40 bg-gray-700 m-4 rounded-lg flex items-center justify-center">
            <p>لوحة اعلانات متحركة</p>
        </div>

        <section className="my-6">
            <div className="flex justify-between items-center px-4 mb-2">
                <h2 className="font-bold text-lg">المواد الدراسية</h2>
                <a href="#" className="text-sm text-gray-400">عرض الكل</a>
            </div>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-2">
                {SUBJECTS.map(subject => (
                    <div key={subject.id} className="flex-shrink-0 w-32 text-center">
                        <div className="h-20 bg-gray-700 rounded-lg mb-2">
                           <img src={subject.image} alt={subject.name} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <p className="text-sm">{subject.name}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="my-6">
            <div className="flex justify-between items-center px-4 mb-2">
                <h2 className="font-bold text-lg">احدث الدورات</h2>
                <a href="#" className="text-sm text-gray-400">عرض الكل</a>
            </div>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-2">
                {COURSES.map(course => (
                    <div key={course.id} className="flex-shrink-0 w-40" onClick={() => onSelectCourse(course)}>
                        <div className="h-24 bg-gray-700 rounded-lg relative">
                             <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-b-lg">
                           <div className="flex items-center">
                             <img src={course.teacher.avatar} alt={course.teacher.name} className="w-6 h-6 rounded-full border-2 border-purple-500 mr-2"/>
                             <p className="text-xs">{course.teacher.name}</p>
                           </div>
                           <p className="text-sm font-bold mt-1">{course.description}</p>
                           <p className="text-xs text-purple-400 mt-1">{course.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="my-6">
            <div className="flex justify-between items-center px-4 mb-2">
                <h2 className="font-bold text-lg">مدرسين انضمو حديثا</h2>
                <a href="#" className="text-sm text-gray-400">عرض الكل</a>
            </div>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-2">
                {TEACHERS.map(teacher => (
                     <div key={teacher.id} className="flex-shrink-0 w-40" onClick={() => onSelectTeacher(teacher)}>
                        <div className="h-24 bg-gray-700 rounded-lg">
                           <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-b-lg">
                           <p className="text-sm font-bold">{teacher.name}</p>
                           <p className="text-xs">{teacher.specialization}</p>
                           <p className="text-xs text-gray-400 mt-1">14 مادة</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <BottomNav onNavigate={onNavigate} />
    </div>
);


const TeacherDetailScreen: React.FC<{ onNavigate: (screen: Screen) => void; teacher: Teacher | null, activeTab: string, setActiveTab: (tab:string) => void, onSelectCourse: (course: Course) => void }> = ({ onNavigate, teacher, activeTab, setActiveTab, onSelectCourse }) => {
    if (!teacher) return <div>Teacher not found</div>;

    const renderContent = () => {
        switch (activeTab) {
            case 'courses':
                return (
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
                        {COURSES.filter(c => c.teacher.id === teacher.id).map(course => (
                           <div key={course.id} className="flex-shrink-0 w-40 cursor-pointer" onClick={() => onSelectCourse(course)}>
                                <div className="h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white">صورة الأستاذ</div>
                                <div className="bg-gray-200 text-gray-800 p-2 rounded-b-lg text-center">
                                    <p className="font-bold text-sm">{course.title}</p>
                                    <p className="text-xs">{course.description}</p>
                                    <p className="text-xs font-bold text-purple-700 mt-1">{course.price}</p>
                                </div>
                           </div>
                        ))}
                    </div>
                );
            case 'assignments':
                return (
                    <div className="p-4 space-y-3">
                        {ASSIGNMENTS.map(a => (
                            <div key={a.id} className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <div className="flex -space-x-2 -space-x-reverse">
                                        {a.isTimed && <ClockIcon className="w-5 h-5 text-yellow-300" title="محدد بوقت"/>}
                                        {a.requiresCamera && <CameraIcon className="w-5 h-5 text-blue-300" title="يحتاج كاميرا"/>}
                                    </div>
                                    <span>{a.title}</span>
                                </div>
                                <div className="w-6 h-6 bg-white text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            </div>
                        ))}
                    </div>
                );
            case 'exams':
                return (
                     <div className="p-4 space-y-3">
                        {EXAMS.map(e => (
                             <div key={e.id} className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <div className="flex -space-x-2 -space-x-reverse">
                                        {e.isTimed && <ClockIcon className="w-5 h-5 text-yellow-300" title="محدد بوقت"/>}
                                        {e.requiresCamera && <CameraIcon className="w-5 h-5 text-blue-300" title="يحتاج كاميرا"/>}
                                    </div>
                                    <span>{e.title}</span>
                                </div>
                                <div className="w-6 h-6 bg-white text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            </div>
                        ))}
                    </div>
                );
            case 'results':
                return (
                     <div className="p-4 space-y-3">
                         <div className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <EyeSlashIcon className="w-5 h-5 text-gray-300"/>
                                    <p>درجة امتحان من 100</p>
                                    <span className="font-bold text-lg">90</span>
                                </div>
                                <div className="w-6 h-6 bg-white text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            </div>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-white min-h-screen">
             <header className="bg-gray-800 text-white p-4 flex items-center space-x-4 space-x-reverse rounded-b-xl">
                <img src={teacher.avatar} alt={teacher.name} className="w-20 h-20 rounded-lg border-2 border-purple-500" />
                <div>
                    <h2 className="text-xl font-bold">{teacher.name}</h2>
                    <p className="text-gray-400">{teacher.specialization}</p>
                </div>
            </header>
            <nav className="flex justify-around border-b-2 border-gray-200">
                {['courses', 'assignments', 'exams', 'results'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`py-3 px-4 font-bold ${activeTab === tab ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}>
                        {{courses: 'الدورات', assignments: 'الواجبات', exams: 'الامتحانات', results: 'النتائج'}[tab]}
                    </button>
                ))}
            </nav>
            <main>
                {renderContent()}
            </main>
        </div>
    );
};


const CourseDetailScreen: React.FC<{onNavigate: (screen: Screen) => void, course: Course | null, onSelectLecture: (lecture: Lecture) => void }> = ({onNavigate, course, onSelectLecture}) => {
    const [open, setOpen] = useState<string | null>(LECTURES[0].title);

    if (!course) return <div>Course not found</div>;

    const chapters = LECTURES.filter(l => l.chapter === course.title);

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <header className="p-4 bg-gray-900 text-center font-bold">{course.title}</header>
            <main className="p-4 space-y-3">
                {chapters.map(chapter => (
                    <div key={chapter.id}>
                        <button onClick={() => setOpen(open === chapter.title ? null : chapter.title)} className="w-full bg-gray-700 p-3 rounded-lg flex justify-between items-center text-right">
                            <span>{chapter.title}</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">1</span>
                                <span className="transform transition-transform duration-200">{open === chapter.title ? '▼' : '▶'}</span>
                            </div>
                        </button>
                        {open === chapter.title && (
                            <div className="py-2 space-y-2">
                                {LECTURES.filter(l => l.chapter === chapter.title).map(lecture => (
                                    <button key={lecture.id} onClick={() => !lecture.isLocked && onSelectLecture(lecture)} disabled={lecture.isLocked} className="w-full bg-gray-600 p-3 rounded-lg flex justify-between items-center text-right disabled:opacity-50">
                                        <span>{lecture.title}</span>
                                        {lecture.isLocked ? <LockClosedIcon className="w-5 h-5 text-red-500"/> : <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs">1</div>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </main>
        </div>
    );
};

const LectureScreen: React.FC<{onNavigate: (screen: Screen) => void, course: Course | null, lecture: Lecture | null}> = ({onNavigate, course, lecture}) => {
    const [activeTab, setActiveTab] = useState('assignments');
    
    if (!course || !lecture) return <div>Not found</div>;

    const getScoreColor = (score: number) => {
        if (score >= 8) return 'bg-green-500';
        if (score >= 5) return 'bg-orange-500';
        return 'bg-red-500';
    };

     const renderContent = () => {
        switch (activeTab) {
            case 'assignments':
                return (
                     <div className="p-4 space-y-3">
                        {ASSIGNMENTS.map(a => (
                            <div key={a.id} className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <ClockIcon className="w-5 h-5 text-yellow-300" />
                                    <CameraIcon className="w-5 h-5 text-blue-300" />
                                    <span>{a.title}</span>
                                </div>
                                <div className="w-6 h-6 bg-white text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            </div>
                        ))}
                    </div>
                );
            case 'exams':
                return (
                     <div className="p-4 space-y-3">
                        {EXAMS.slice(0,1).map(e => (
                             <div key={e.id} className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                     <ClockIcon className="w-5 h-5 text-yellow-300" />
                                    <CameraIcon className="w-5 h-5 text-blue-300" />
                                    <span>{e.title}</span>
                                </div>
                                <div className="w-6 h-6 bg-white text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            </div>
                        ))}
                    </div>
                );
            case 'results':
                const score = 9;
                return (
                     <div className="p-4 space-y-3">
                         <div className="bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <ArrowDownTrayIcon className="w-5 h-5 text-gray-300"/>
                                    <ClockIcon className="w-5 h-5 text-yellow-300"/>
                                    <p>امتحان من 10</p>
                                    <div className={`px-4 py-1 rounded-md text-white font-bold ${getScoreColor(score)}`}>
                                        النتيجة : {score}
                                    </div>
                                </div>
                            </div>
                         <button className="w-full bg-purple-800 text-white p-3 rounded-lg font-bold">طلب اعادة الامتحان</button>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <header className="p-2 space-y-1 bg-gray-900">
                <div className="bg-gray-700 p-2 text-center rounded-md font-bold text-sm">{course.title}</div>
                <div className="bg-gray-700 p-2 text-center rounded-md font-bold text-sm text-red-400">{lecture.chapter}</div>
                <div className="bg-gray-700 p-2 text-center rounded-md font-bold text-sm">{lecture.title}</div>
            </header>
            <main className="p-4">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
                    <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
                    </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 text-center mb-4">
                    وصف المحاضرة
                </div>
                
                 <nav className="flex justify-around border-b-2 border-gray-600">
                    {['assignments', 'exams', 'results'].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`py-3 px-4 font-bold ${activeTab === tab ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}>
                            {{assignments: 'الواجبات', exams: 'الامتحانات', results: 'النتائج'}[tab]}
                        </button>
                    ))}
                </nav>
                
                {renderContent()}

                <div className="flex justify-between items-center mt-4">
                     <button className="bg-purple-700 text-white p-3 rounded-lg font-bold w-32">المحاضرة السابقة</button>
                     <div className="text-3xl">{"<>"}</div>
                     <button className="bg-purple-700 text-white p-3 rounded-lg font-bold w-32">المحاضرة التالية</button>
                </div>

            </main>
        </div>
    );
};

export default App;