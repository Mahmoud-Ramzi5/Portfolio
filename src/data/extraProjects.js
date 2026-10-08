// Two-person course projects with Mohamed Ghassan Alkhani (the work was split between them).
// They are commented out, so the site does not show them yet. To publish one,
// move its object out of the comment block below (keep the commas valid).
export const extraProjects = [
/*
    {
        "id": "submarine",
        "featured": false,
        "type": "course",
        "year": "",
        "titleEn": "Submarine Physics Simulator",
        "titleAr": "محاكي فيزياء الغواصة",
        "shortDescEn": "A browser-based 3D submarine simulation with real hydrodynamic forces: buoyancy, drag and thrust.",
        "shortDescAr": "محاكاة ثلاثية الأبعاد لغواصة تعمل في المتصفح، بقوى هيدروديناميكية حقيقية: الطفو والسحب والدفع.",
        "detailedDescEn": "A hand-written physics engine applies Newton's second law to weight, Archimedes' buoyancy, quadratic drag and propeller thrust. Dive, Float and Stay modes change the ballast mass. A live control panel adjusts every physical parameter, from mass and drag coefficient to water density. The scene is built with Three.js and includes a shader-animated ocean, cubemaps and icebergs.",
        "detailedDescAr": "محرك فيزيائي مكتوب يدوياً يطبّق قانون نيوتن الثاني على الوزن وطفو أرخميدس والسحب التربيعي ودفع المروحة، مع أوضاع غوص وطفو وثبات تغيّر كتلة الصابورة. تتيح لوحة تحكم حية تعديل كل المعاملات الفيزيائية من الكتلة ومعامل السحب إلى كثافة الماء، ضمن مشهد Three.js يضم محيطاً متحركاً بالـ Shaders وصور سماء وجبالاً جليدية.",
        "highlightsEn": [
            "Weight, buoyancy, drag and thrust forces integrated over time",
            "Live parameter tuning with dat.GUI",
            "Ocean surface animated by a custom shader"
        ],
        "highlightsAr": [
            "دمج قوى الوزن والطفو والسحب والدفع عبر الزمن",
            "ضبط المعاملات مباشرة عبر dat.GUI",
            "سطح محيط متحرك بـ Shader مخصص"
        ],
        "tags": [
            "Simulation"
        ],
        "tech": [
            "JavaScript",
            "Three.js",
            "WebGL",
            "Vite",
            "dat.GUI"
        ],
        "mainImg": "projects/submarine/01.webp",
        "gallery": [
            "projects/submarine/01.webp",
            "projects/submarine/02.webp",
            "projects/submarine/03.webp",
            "projects/submarine/04.webp"
        ],
        "video": "",
        "roleEn": "Two-person project with Mohamed Ghassan Alkhani, with the work split between the two of us.",
        "roleAr": "مشروع لشخصين مع محمد غسان الخاني، مع تقسيم العمل بيننا."
    },
    {
        "id": "al-aqsa-3d",
        "featured": false,
        "type": "course",
        "year": "",
        "titleEn": "Al-Aqsa Mosque 3D Explorer",
        "titleAr": "جولة ثلاثية الأبعاد في المسجد الأقصى",
        "shortDescEn": "A walkable real-time 3D reconstruction of the Al-Aqsa Mosque compound, built from scratch in modern OpenGL.",
        "shortDescAr": "إعادة بناء ثلاثية الأبعاد لمجمّع المسجد الأقصى يمكن التجول فيها في الوقت الحقيقي، مبنية من الصفر باستخدام OpenGL.",
        "detailedDescEn": "A hand-written OpenGL 4.6 renderer. Each landmark (the Dome of the Rock, the Qibli Mosque inside and out, minarets, walls) is a C++ class that builds its own geometry. The scene adds imported models, a moving sun for a day/night cycle, Phong lighting, a skybox, first- and third-person cameras, and spatial footstep audio.",
        "detailedDescAr": "محرك عرض مكتوب يدوياً بـ OpenGL 4.6. كل معلم (قبة الصخرة، المسجد القبلي من الداخل والخارج، المآذن، الأسوار) صنف C++ يبني هندسته بنفسه، إضافة إلى نماذج مستوردة وشمس متحركة لدورة الليل والنهار وإضاءة Phong وسماء محيطة وكاميرا بمنظور الشخص الأول والثالث وأصوات خطوات.",
        "highlightsEn": [
            "Architecture generated in code",
            "Day/night lighting and a skybox",
            "First- and third-person exploration"
        ],
        "highlightsAr": [
            "مبانٍ مولّدة برمجياً",
            "إضاءة الليل والنهار وسماء محيطة",
            "تجول بمنظور الشخص الأول والثالث"
        ],
        "tags": [
            "Simulation"
        ],
        "tech": [
            "C++",
            "OpenGL 4.6",
            "GLSL",
            "GLFW",
            "GLM",
            "irrKlang"
        ],
        "mainImg": "",
        "gallery": [],
        "video": "",
        "roleEn": "Two-person project with Mohamed Ghassan Alkhani, with the work split between the two of us.",
        "roleAr": "مشروع لشخصين مع محمد غسان الخاني، مع تقسيم العمل بيننا."
    },
    {
        "id": "huffzip",
        "featured": false,
        "type": "course",
        "year": "",
        "titleEn": "HuffZip: Multithreaded File Compressor",
        "titleAr": "HuffZip: ضاغط ملفات متعدد المسارات",
        "shortDescEn": "A desktop archiver written from scratch that compresses files and whole folders with Huffman or Shannon-Fano coding, runs in the background, and supports AES password protection.",
        "shortDescAr": "برنامج أرشفة مكتبي مكتوب من الصفر يضغط الملفات والمجلدات كاملة بترميز Huffman أو Shannon-Fano، ويعمل في الخلفية، ويدعم الحماية بكلمة مرور AES.",
        "detailedDescEn": "Both entropy coders are implemented by hand. Huffman builds its tree from a priority queue, and Shannon-Fano splits the frequency table recursively. Custom BitWriter and BitReader classes pack the variable-length codes into a custom archive format that keeps relative folder paths, so you can list an archive and extract only the files you choose.\n\nCompression runs on background tasks with async/await, progress reporting, pause and resume (ManualResetEventSlim) and cancellation tokens, so the UI never freezes, even on large video and audio files. Archives can be encrypted with AES, using a key derived through PBKDF2, and the app adds a right-click option to Windows Explorer.",
        "detailedDescAr": "خوارزميتا الترميز مكتوبتان يدوياً: يبني Huffman شجرته من طابور أولويات، ويقسم Shannon-Fano جدول التكرارات تقسيماً عودياً. وتحزم صنفا BitWriter وBitReader المخصصان الرموز متغيرة الطول في صيغة أرشيف خاصة تحفظ المسارات النسبية للمجلدات، فيمكن عرض محتوى الأرشيف واستخراج الملفات المختارة فقط.\n\nيعمل الضغط في مهام خلفية باستخدام async/await مع عرض التقدم والإيقاف المؤقت والاستئناف (ManualResetEventSlim) والإلغاء (Cancellation Tokens)، فلا تتجمد الواجهة حتى مع ملفات الفيديو والصوت الكبيرة. ويمكن تشفير الأرشيف بـ AES بمفتاح مشتق عبر PBKDF2، ويضيف البرنامج خياراً إلى قائمة النقر الأيمن في مستكشف Windows.",
        "highlightsEn": [
            "Huffman and Shannon-Fano coders implemented from scratch",
            "Bit-level I/O and a custom multi-file archive format",
            "Background tasks with progress, pause/resume and cancellation",
            "AES encryption with PBKDF2 key derivation"
        ],
        "highlightsAr": [
            "ترميز Huffman وShannon-Fano مكتوبان من الصفر",
            "قراءة وكتابة على مستوى البت وصيغة أرشيف متعددة الملفات",
            "مهام خلفية مع عرض التقدم والإيقاف والاستئناف والإلغاء",
            "تشفير AES مع اشتقاق المفتاح عبر PBKDF2"
        ],
        "tags": [
            "Algorithms"
        ],
        "tech": [
            "C#",
            ".NET 6",
            "Windows Forms",
            "async/await",
            "AES",
            "PBKDF2"
        ],
        "mainImg": "",
        "gallery": [],
        "video": "",
        "roleEn": "Two-person project with Mohamed Ghassan Alkhani, with the work split between the two of us.",
        "roleAr": "مشروع لشخصين مع محمد غسان الخاني، مع تقسيم العمل بيننا."
    },
    {
        "id": "ludo-ai",
        "featured": false,
        "type": "course",
        "year": "",
        "titleEn": "Ludo AI: Expectimax Player",
        "titleAr": "لودو بالذكاء الاصطناعي: خوارزمية Expectimax",
        "shortDescEn": "A complete Ludo rules engine with a computer opponent that plans under dice uncertainty using Expectimax search.",
        "shortDescAr": "محرك قواعد كامل للعبة لودو مع خصم حاسوبي يخطط في ظل عشوائية النرد باستخدام بحث Expectimax.",
        "detailedDescEn": "Ludo turns depend on dice rolls, so plain Minimax does not fit. The AI uses Expectimax, which adds chance nodes that average over all six dice values between the player's (MAX) and the opponent's (MIN) layers. It generates every possible successor state for each roll down to a configurable depth.\n\nThe rules engine handles entering the board on a six, moving around the shared track and into the home stretch, capturing pieces, protected squares and win detection. Leaf states are scored on distance travelled, pieces on safe squares and pieces still in base.",
        "detailedDescAr": "يعتمد كل دور في لودو على رمية النرد، لذا لا تناسبه خوارزمية Minimax العادية. يستخدم الذكاء الاصطناعي Expectimax التي تضيف عقد احتمال تحسب المتوسط على قيم النرد الست بين طبقتي اللاعب (MAX) والخصم (MIN)، وتولّد كل الحالات اللاحقة الممكنة لكل رمية حتى عمق قابل للضبط.\n\nيدير محرك القواعد الدخول إلى الرقعة بالرقم ستة، والتحرك على المسار المشترك ثم إلى طريق المنزل، وأسر القطع، والمربعات المحمية، واكتشاف الفوز. وتُقيَّم الحالات الطرفية حسب المسافة المقطوعة والقطع على المربعات الآمنة والقطع الباقية في القاعدة.",
        "highlightsEn": [
            "Expectimax search with chance nodes for the dice",
            "Generation of every successor state per roll",
            "Heuristic evaluation of board states"
        ],
        "highlightsAr": [
            "بحث Expectimax مع عقد احتمال للنرد",
            "توليد جميع الحالات اللاحقة لكل رمية",
            "تقييم تقديري لحالات الرقعة"
        ],
        "tags": [
            "AI",
            "Algorithms",
            "Game"
        ],
        "tech": [
            "Python"
        ],
        "mainImg": "projects/ludo-ai/01.webp",
        "gallery": [
            "projects/ludo-ai/01.webp",
            "projects/ludo-ai/02.webp",
            "projects/ludo-ai/03.webp"
        ],
        "video": "",
        "roleEn": "Two-person project with Mohamed Ghassan Alkhani, with the work split between the two of us.",
        "roleAr": "مشروع لشخصين مع محمد غسان الخاني، مع تقسيم العمل بيننا."
    },
    {
        "id": "lisp-compiler",
        "featured": false,
        "type": "course",
        "year": "",
        "titleEn": "Lisp Compiler Front-End",
        "titleAr": "الواجهة الأمامية لمترجم Lisp",
        "shortDescEn": "Hand-written ANTLR4 grammars for a large subset of Common Lisp, a visitor that builds an abstract syntax tree, and Graphviz export of both trees to PDF.",
        "shortDescAr": "قواعد ANTLR4 مكتوبة يدوياً لجزء كبير من لغة Common Lisp، مع Visitor يبني شجرة التركيب المجردة، وتصدير الشجرتين إلى PDF عبر Graphviz.",
        "detailedDescEn": "The front end of a compiler. Custom lexer and parser grammars cover definitions (defun, defvar, defmacro, defclass, lambda), bindings (let, let*, setq, setf), control flow (if, cond, case, loop, do, return-from, throw/catch), logic and arithmetic, and I/O and format forms. A visitor turns the parse tree into a cleaner AST, and both trees are rendered as PDFs so each stage of compilation can be inspected.",
        "detailedDescAr": "الواجهة الأمامية لمترجم. تغطي قواعد المحلل اللفظي والنحوي المخصصة التعريفات (defun وdefvar وdefmacro وdefclass وlambda)، والربط (let وlet* وsetq وsetf)، والتحكم بالتدفق (if وcond وcase وloop وdo وreturn-from وthrow/catch)، والمنطق والحساب، والإدخال والإخراج وformat. ويحوّل Visitor شجرة التحليل إلى شجرة تركيب مجردة أنظف، وتُرسم الشجرتان كملفات PDF لفحص كل مرحلة من مراحل الترجمة.",
        "highlightsEn": [
            "ANTLR4 lexer and parser grammars written by hand",
            "Visitor-based AST construction",
            "Parse tree and AST visualised with Graphviz"
        ],
        "highlightsAr": [
            "قواعد ANTLR4 للمحلل اللفظي والنحوي مكتوبة يدوياً",
            "بناء شجرة التركيب المجردة عبر Visitor",
            "رسم شجرة التحليل وشجرة التركيب عبر Graphviz"
        ],
        "tags": [
            "Algorithms"
        ],
        "tech": [
            "Python",
            "ANTLR4",
            "Graphviz"
        ],
        "mainImg": "projects/lisp-compiler/01.webp",
        "gallery": [
            "projects/lisp-compiler/01.webp",
            "projects/lisp-compiler/02.webp",
            "projects/lisp-compiler/03.webp"
        ],
        "video": "",
        "roleEn": "Two-person project with Mohamed Ghassan Alkhani, with the work split between the two of us.",
        "roleAr": "مشروع لشخصين مع محمد غسان الخاني، مع تقسيم العمل بيننا."
    },
*/
];
