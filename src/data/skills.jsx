import {
    BrainCircuit, Eye, MessageSquareText, LineChart, Server, Box,
    Code, Database, CreditCard, Smartphone, Gamepad2, Binary,
} from 'lucide-react';

// `tag` links a skill to project tags, so each card can show how many projects use it.
export const skillsData = {
    core: [
        {
            id: 'ai',
            tag: 'AI',
            nameEn: 'AI & Neural Networks',
            nameAr: 'الذكاء الاصطناعي والشبكات العصبية',
            descEn: 'Artificial neural networks, knowledge-based and expert systems, and fuzzy logic: from difficulty engines for games to rule engines that recommend fixes on a production line.',
            descAr: 'الشبكات العصبية الاصطناعية والأنظمة القائمة على المعرفة والأنظمة الخبيرة والمنطق الضبابي: من محركات صعوبة للألعاب إلى محركات قواعد تقترح الحلول على خطوط الإنتاج.',
            icon: <BrainCircuit size={26} />,
        },
        {
            id: 'cv',
            tag: 'Computer Vision',
            nameEn: 'Computer Vision & Image Processing',
            nameAr: 'الرؤية الحاسوبية ومعالجة الصور',
            descEn: 'Object detection with YOLO, multi-object tracking, broadcast-to-pitch homography, k-means team clustering, and classical image processing (contours, morphology, colour-space thresholding).',
            descAr: 'كشف الأجسام بـ YOLO، وتتبع الأجسام المتعددة، وتحويل Homography من البث إلى الملعب، وتجميع الفرق بـ k-means، ومعالجة الصور الكلاسيكية (الحواف، المورفولوجيا، العتبات اللونية).',
            icon: <Eye size={26} />,
        },
        {
            id: 'nlp',
            tag: 'LLM & NLP',
            nameEn: 'NLP, LLMs & RAG',
            nameAr: 'معالجة اللغة والنماذج اللغوية وRAG',
            descEn: 'Arabic NLP with LSTM, BiLSTM, attention and fine-tuned BERT, plus bilingual retrieval-augmented generation with vector search, Reciprocal Rank Fusion and cross-encoder re-ranking.',
            descAr: 'معالجة اللغة العربية بـ LSTM وBiLSTM والانتباه وBERT المضبوط، إضافة إلى التوليد المعزّز بالاسترجاع ثنائي اللغة مع البحث المتجهي وReciprocal Rank Fusion وإعادة الترتيب بـ Cross-Encoder.',
            icon: <MessageSquareText size={26} />,
        },
        {
            id: 'ml',
            tag: 'Machine Learning',
            nameEn: 'Machine Learning & Data Science',
            nameAr: 'تعلم الآلة وعلم البيانات',
            descEn: 'Deep learning, data analysis and spatial data analysis, with model benchmarking, feature selection and imbalanced classification.',
            descAr: 'التعلم العميق وتحليل البيانات والتحليل المكاني، مع مقارنة النماذج واختيار الميزات والتصنيف للبيانات غير المتوازنة.',
            icon: <LineChart size={26} />,
        },
        {
            id: 'fullstack',
            tag: 'Laravel',
            nameEn: 'Full-Stack Development',
            nameAr: 'التطوير المتكامل',
            descEn: 'Laravel REST APIs and React.js frontends for production platforms, covering scheduling engines, payment services (ClickPay), accounting integrations (Daftra) and real-time features.',
            descAr: 'واجهات Laravel البرمجية وواجهات React.js لمنصات حقيقية، تشمل محركات الجدولة وخدمات الدفع (ClickPay) وتكامل الأنظمة المحاسبية (Daftra) والميزات الفورية.',
            icon: <Server size={26} />,
        },
        {
            id: 'sim',
            tag: 'Simulation',
            nameEn: 'Physics Simulation & Computational Geometry',
            nameAr: 'المحاكاة الفيزيائية والهندسة الحسابية',
            descEn: 'Real-time collision and deformation engines written from first principles: spring-mass models, octrees, spatial hashing and GJK/EPA collision detection in C#.',
            descAr: 'محركات تصادم وتشوه في الوقت الحقيقي مكتوبة من المبادئ الأولى: نماذج الكتلة والنابض وOctree والتجزئة المكانية وكشف التصادم بـ GJK/EPA بلغة C#.',
            icon: <Box size={26} />,
        },
    ],
    familiar: [
        { id: 'react', tag: 'React', name: 'React.js & Landing Pages', icon: <Code size={20} /> },
        { id: 'sql', name: 'SQL & Databases', icon: <Database size={20} /> },
        { id: 'payments', name: 'Payment Services', icon: <CreditCard size={20} /> },
        { id: 'mobile', tag: 'Mobile', name: 'Mobile Interfaces', icon: <Smartphone size={20} /> },
        { id: 'pygame', name: 'Pygame', icon: <Gamepad2 size={20} /> },
        { id: 'algo', tag: 'Algorithms', name: 'Algorithms & Parallel Computing', icon: <Binary size={20} /> },
    ],
    // Tech chips, shown in the animated marquee.
    stack: [
        'Python', 'YOLO', 'OpenCV', 'k-means', 'Homography', 'BERT', 'LSTM', 'BiLSTM', 'ChromaDB',
        'RAG', 'Fuzzy Logic', 'Expert Systems', 'Laravel', 'PHP', 'React.js', 'REST APIs', 'SQL',
        'ClickPay', 'Daftra API', 'C#', 'Unity', 'GJK / EPA', 'Pygame', 'MPI', 'Flutter',
    ],
};
