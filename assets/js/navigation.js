// Navigation functionality for Nibras Jordan Website

// Page templates and content
const pageTemplates = {
    about: {
        title: "About Us",
        breadcrumb: ["Home", "About Us"],
        content: `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <a href="#" onclick="navigateToPage('home')">
                            <span data-en="Home" data-ar="الرئيسية">Home</span>
                        </a>
                        <i class="bi bi-chevron-right"></i>
                        <span data-en="About Us" data-ar="من نحن">About Us</span>
                    </nav>
                    <h1 class="display-4 fw-bold mb-4" data-en="About Nibras Jordan" data-ar="حول نبراس الأردن">About Nibras Jordan</h1>
                    <p class="lead" data-en="Leading independent power producer in Jordan" data-ar="منتج مستقل رائد للطاقة في الأردن">Leading independent power producer in Jordan</p>
                </div>
            </div>
            
            <section class="py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-8">
                            <div class="content-card">
                                <h2 class="mb-4" data-en="Our Story" data-ar="قصتنا">Our Story</h2>
                                <p data-en="Nibras Jordan is a leading independent power producer, playing a pivotal role in supplying over 8% of Jordan's electricity through our two major power plants." data-ar="نبراس الأردن هي منتج مستقل رائد للطاقة، تلعب دوراً محورياً في توفير أكثر من 8% من كهرباء الأردن من خلال محطتي الطاقة الرئيسيتين.">Nibras Jordan is a leading independent power producer, playing a pivotal role in supplying over 8% of Jordan's electricity through our two major power plants.</p>
                                <p data-en="Our portfolio includes the Amman East Power Plant (400 MW) and Levant Power Plant (241 MW), delivering reliable baseload and peaking capacity to support Jordan's growing energy needs." data-ar="تشمل محفظتنا محطة عمان الشرقية للطاقة (400 ميجاواط) ومحطة بلاد الشام للطاقة (241 ميجاواط)، مما يوفر قدرة أساسية وذروة موثوقة لدعم احتياجات الأردن المتزايدة من الطاقة.">Our portfolio includes the Amman East Power Plant (400 MW) and Levant Power Plant (241 MW), delivering reliable baseload and peaking capacity to support Jordan's growing energy needs.</p>
                            </div>
                            
                            <div class="content-card">
                                <h2 class="mb-4" data-en="Our Commitment" data-ar="التزامنا">Our Commitment</h2>
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <div class="d-flex">
                                            <div class="icon-feature me-3">
                                                <i class="bi bi-shield-check"></i>
                                            </div>
                                            <div>
                                                <h5 data-en="Reliability" data-ar="الموثوقية">Reliability</h5>
                                                <p data-en="Consistent power generation with minimal downtime" data-ar="توليد طاقة ثابت مع أقل وقت توقف">Consistent power generation with minimal downtime</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex">
                                            <div class="icon-feature me-3">
                                                <i class="bi bi-leaf"></i>
                                            </div>
                                            <div>
                                                <h5 data-en="Sustainability" data-ar="الاستدامة">Sustainability</h5>
                                                <p data-en="Environmental responsibility in all operations" data-ar="المسؤولية البيئية في جميع العمليات">Environmental responsibility in all operations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Quick Facts" data-ar="حقائق سريعة">Quick Facts</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-3">
                                        <strong data-en="Total Capacity:" data-ar="إجمالي القدرة:">Total Capacity:</strong>
                                        <span>641 MW</span>
                                    </li>
                                    <li class="mb-3">
                                        <strong data-en="Market Share:" data-ar="حصة السوق:">Market Share:</strong>
                                        <span data-en="8% of Jordan's electricity" data-ar="8% من كهرباء الأردن">8% of Jordan's electricity</span>
                                    </li>
                                    <li class="mb-3">
                                        <strong data-en="Operating Since:" data-ar="تعمل منذ:">Operating Since:</strong>
                                        <span>2007</span>
                                    </li>
                                    <li class="mb-3">
                                        <strong data-en="Investment:" data-ar="الاستثمار:">Investment:</strong>
                                        <span>$660+ Million</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Explore More" data-ar="استكشف المزيد">Explore More</h3>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-primary" onclick="navigateToPage('about-mission-vision-values')">
                                        <span data-en="Mission & Vision" data-ar="المهمة والرؤية">Mission & Vision</span>
                                    </button>
                                    <button class="btn btn-outline-primary" onclick="navigateToPage('about-leadership')">
                                        <span data-en="Our Leadership" data-ar="قيادتنا">Our Leadership</span>
                                    </button>
                                    <button class="btn btn-outline-primary" onclick="navigateToPage('business')">
                                        <span data-en="Our Business" data-ar="أعمالنا">Our Business</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    business: {
        title: "Our Business",
        breadcrumb: ["Home", "Our Business"],
        content: `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <a href="#" onclick="navigateToPage('home')">
                            <span data-en="Home" data-ar="الرئيسية">Home</span>
                        </a>
                        <i class="bi bi-chevron-right"></i>
                        <span data-en="Our Business" data-ar="أعمالنا">Our Business</span>
                    </nav>
                    <h1 class="display-4 fw-bold mb-4" data-en="Our Business Portfolio" data-ar="محفظة أعمالنا">Our Business Portfolio</h1>
                    <p class="lead" data-en="Powering Jordan through strategic investments in energy infrastructure" data-ar="تشغيل الأردن من خلال الاستثمارات الاستراتيجية في البنية التحتية للطاقة">Powering Jordan through strategic investments in energy infrastructure</p>
                </div>
            </div>
            
            <section class="py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <div class="project-card">
                                <div class="project-image">
                                    <img src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Amman East Power Plant" class="img-fluid">
                                    <div class="project-badges">
                                        <span class="badge bg-primary">400 MW</span>
                                        <span class="badge bg-success">Operating</span>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h3 class="mb-3" data-en="AES Jordan PSC (IPP1)" data-ar="شركة AES الأردن (IPP1)">AES Jordan PSC (IPP1)</h3>
                                    <p data-en="Jordan's first Independent Power Producer featuring a 400 MW combined cycle gas plant." data-ar="أول منتج مستقل للطاقة في الأردن يضم محطة غاز دورة مركبة بقدرة 400 ميجاواط.">Jordan's first Independent Power Producer featuring a 400 MW combined cycle gas plant.</p>
                                    <button class="btn btn-primary" onclick="navigateToPage('business-aes-jordan-ipp1')">
                                        <span data-en="Learn More" data-ar="اعرف المزيد">Learn More</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-6">
                            <div class="project-card">
                                <div class="project-image">
                                    <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="Levant Power Plant" class="img-fluid">
                                    <div class="project-badges">
                                        <span class="badge bg-primary">241 MW</span>
                                        <span class="badge bg-success">Operating</span>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h3 class="mb-3" data-en="AES Levant Holdings BV (IPP4)" data-ar="شركة AES بلاد الشام (IPP4)">AES Levant Holdings BV (IPP4)</h3>
                                    <p data-en="241 MW tri-fuel peaking plant providing flexible grid stabilization." data-ar="محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط توفر استقرار مرن للشبكة.">241 MW tri-fuel peaking plant providing flexible grid stabilization.</p>
                                    <button class="btn btn-primary" onclick="navigateToPage('business-aes-levant-ipp4')">
                                        <span data-en="Learn More" data-ar="اعرف المزيد">Learn More</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    careers: {
        title: "Careers",
        breadcrumb: ["Home", "Careers"],
        content: `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <a href="#" onclick="navigateToPage('home')">
                            <span data-en="Home" data-ar="الرئيسية">Home</span>
                        </a>
                        <i class="bi bi-chevron-right"></i>
                        <span data-en="Careers" data-ar="الوظائف">Careers</span>
                    </nav>
                    <h1 class="display-4 fw-bold mb-4" data-en="Join Our Team" data-ar="انضم إلى فريقنا">Join Our Team</h1>
                    <p class="lead" data-en="Build your career with Jordan's leading independent power producer" data-ar="ابن مسيرتك المهنية مع منتج الطاقة المستقل الرائد في الأردن">Build your career with Jordan's leading independent power producer</p>
                </div>
            </div>
            
            <section class="py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-8">
                            <div class="content-card">
                                <h2 class="mb-4" data-en="Why Work With Us?" data-ar="لماذا تعمل معنا؟">Why Work With Us?</h2>
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <div class="d-flex">
                                            <div class="icon-feature me-3">
                                                <i class="bi bi-people"></i>
                                            </div>
                                            <div>
                                                <h5 data-en="Professional Growth" data-ar="النمو المهني">Professional Growth</h5>
                                                <p data-en="Continuous learning and development opportunities" data-ar="فرص التعلم والتطوير المستمر">Continuous learning and development opportunities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex">
                                            <div class="icon-feature me-3">
                                                <i class="bi bi-award"></i>
                                            </div>
                                            <div>
                                                <h5 data-en="Industry Leadership" data-ar="قيادة الصناعة">Industry Leadership</h5>
                                                <p data-en="Work with cutting-edge technology and best practices" data-ar="العمل مع أحدث التقنيات وأفضل الممارسات">Work with cutting-edge technology and best practices</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-card">
                                <h2 class="mb-4" data-en="Current Openings" data-ar="الوظائف المتاحة">Current Openings</h2>
                                <div class="job-listings">
                                    <div class="job-item border-bottom pb-3 mb-3">
                                        <h5 data-en="Senior Operations Engineer" data-ar="مهندس عمليات أول">Senior Operations Engineer</h5>
                                        <p class="text-muted mb-2" data-en="Full-time • Amman, Jordan" data-ar="دوام كامل • عمان، الأردن">Full-time • Amman, Jordan</p>
                                        <p data-en="Lead operational excellence initiatives and ensure optimal plant performance." data-ar="قيادة مبادرات التميز التشغيلي وضمان الأداء الأمثل للمحطة.">Lead operational excellence initiatives and ensure optimal plant performance.</p>
                                        <button class="btn btn-outline-primary btn-sm">
                                            <span data-en="Apply Now" data-ar="تقدم الآن">Apply Now</span>
                                        </button>
                                    </div>
                                    
                                    <div class="job-item border-bottom pb-3 mb-3">
                                        <h5 data-en="Maintenance Technician" data-ar="فني صيانة">Maintenance Technician</h5>
                                        <p class="text-muted mb-2" data-en="Full-time • Amman, Jordan" data-ar="دوام كامل • عمان، الأردن">Full-time • Amman, Jordan</p>
                                        <p data-en="Perform preventive and corrective maintenance on power generation equipment." data-ar="تنفيذ الصيانة الوقائية والتصحيحية على معدات توليد الطاقة.">Perform preventive and corrective maintenance on power generation equipment.</p>
                                        <button class="btn btn-outline-primary btn-sm">
                                            <span data-en="Apply Now" data-ar="تقدم الآن">Apply Now</span>
                                        </button>
                                    </div>
                                    
                                    <div class="job-item">
                                        <h5 data-en="Environmental Specialist" data-ar="أخصائي بيئي">Environmental Specialist</h5>
                                        <p class="text-muted mb-2" data-en="Full-time • Amman, Jordan" data-ar="دوام كامل • عمان، الأردن">Full-time • Amman, Jordan</p>
                                        <p data-en="Ensure compliance with environmental regulations and implement sustainability initiatives." data-ar="ضمان الامتثال للوائح البيئية وتنفيذ مبادرات الاستدامة.">Ensure compliance with environmental regulations and implement sustainability initiatives.</p>
                                        <button class="btn btn-outline-primary btn-sm">
                                            <span data-en="Apply Now" data-ar="تقدم الآن">Apply Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Benefits" data-ar="المزايا">Benefits</h3>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Competitive salary" data-ar="راتب تنافسي">Competitive salary</span>
                                    </li>
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Health insurance" data-ar="تأمين صحي">Health insurance</span>
                                    </li>
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Professional development" data-ar="تطوير مهني">Professional development</span>
                                    </li>
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Flexible working hours" data-ar="ساعات عمل مرنة">Flexible working hours</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Contact HR" data-ar="اتصل بالموارد البشرية">Contact HR</h3>
                                <p data-en="Have questions about opportunities at Nibras Jordan?" data-ar="لديك أسئلة حول الفرص في نبراس الأردن؟">Have questions about opportunities at Nibras Jordan?</p>
                                <div class="contact-info">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="bi bi-envelope text-primary me-2"></i>
                                        <span>careers@nibraspower.com</span>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-telephone text-primary me-2"></i>
                                        <span>+974 4000 0000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    
    news: {
        title: "News",
        breadcrumb: ["Home", "News"],
        content: `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <a href="#" onclick="navigateToPage('home')">
                            <span data-en="Home" data-ar="الرئيسية">Home</span>
                        </a>
                        <i class="bi bi-chevron-right"></i>
                        <span data-en="News" data-ar="الأخبار">News</span>
                    </nav>
                    <h1 class="display-4 fw-bold mb-4" data-en="Latest News" data-ar="آخر الأخبار">Latest News</h1>
                    <p class="lead" data-en="Stay updated with our latest developments and achievements" data-ar="ابق على اطلاع بآخر التطورات والإنجازات">Stay updated with our latest developments and achievements</p>
                </div>
            </div>
            
            <section class="py-5">
                <div class="container">
                    <div class="row g-4" id="all-news-grid">
                        <!-- News items will be populated by JavaScript -->
                    </div>
                </div>
            </section>
        `
    },
    
    contact: {
        title: "Contact Us",
        breadcrumb: ["Home", "Contact Us"],
        content: `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <a href="#" onclick="navigateToPage('home')">
                            <span data-en="Home" data-ar="الرئيسية">Home</span>
                        </a>
                        <i class="bi bi-chevron-right"></i>
                        <span data-en="Contact Us" data-ar="اتصل بنا">Contact Us</span>
                    </nav>
                    <h1 class="display-4 fw-bold mb-4" data-en="Get In Touch" data-ar="تواصل معنا">Get In Touch</h1>
                    <p class="lead" data-en="We're here to answer your questions and discuss opportunities" data-ar="نحن هنا للإجابة على أسئلتك ومناقشة الفرص">We're here to answer your questions and discuss opportunities</p>
                </div>
            </div>
            
            <section class="py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-8">
                            <div class="content-card">
                                <h2 class="mb-4" data-en="Send us a Message" data-ar="أرسل لنا رسالة">Send us a Message</h2>
                                <form id="contactForm">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="form-label" data-en="First Name" data-ar="الاسم الأول">First Name</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label" data-en="Last Name" data-ar="اسم العائلة">Last Name</label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label" data-en="Email" data-ar="البريد الإلكتروني">Email</label>
                                            <input type="email" class="form-control" required>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label" data-en="Phone" data-ar="الهاتف">Phone</label>
                                            <input type="tel" class="form-control">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label" data-en="Subject" data-ar="الموضوع">Subject</label>
                                            <select class="form-select" required>
                                                <option value="" data-en="Select a subject" data-ar="اختر موضوعاً">Select a subject</option>
                                                <option value="general" data-en="General Inquiry" data-ar="استفسار عام">General Inquiry</option>
                                                <option value="business" data-en="Business Partnership" data-ar="شراكة تجارية">Business Partnership</option>
                                                <option value="careers" data-en="Career Opportunities" data-ar="فرص وظيفية">Career Opportunities</option>
                                                <option value="media" data-en="Media Inquiry" data-ar="استفسار إعلامي">Media Inquiry</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label" data-en="Message" data-ar="الرسالة">Message</label>
                                            <textarea class="form-control" rows="5" required></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary btn-lg">
                                                <span data-en="Send Message" data-ar="إرسال الرسالة">Send Message</span>
                                                <i class="bi bi-arrow-right ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Contact Information" data-ar="معلومات الاتصال">Contact Information</h3>
                                <div class="contact-info">
                                    <div class="d-flex align-items-start mb-4">
                                        <i class="bi bi-geo-alt text-primary me-3 fs-5"></i>
                                        <div>
                                            <h6 data-en="Address" data-ar="العنوان">Address</h6>
                                            <p class="mb-0" data-en="Amman, Jordan" data-ar="عمان، الأردن">Amman, Jordan</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start mb-4">
                                        <i class="bi bi-telephone text-primary me-3 fs-5"></i>
                                        <div>
                                            <h6 data-en="Phone" data-ar="الهاتف">Phone</h6>
                                            <p class="mb-0">+974 4000 0000</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start mb-4">
                                        <i class="bi bi-envelope text-primary me-3 fs-5"></i>
                                        <div>
                                            <h6 data-en="Email" data-ar="البريد الإلكتروني">Email</h6>
                                            <p class="mb-0">info@nibraspower.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-card">
                                <h3 class="mb-4" data-en="Business Hours" data-ar="ساعات العمل">Business Hours</h3>
                                <div class="business-hours">
                                    <div class="d-flex justify-content-between mb-2">
                                        <span data-en="Sunday - Thursday" data-ar="الأحد - الخميس">Sunday - Thursday</span>
                                        <span>8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span data-en="Friday" data-ar="الجمعة">Friday</span>
                                        <span data-en="Closed" data-ar="مغلق">Closed</span>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span data-en="Saturday" data-ar="السبت">Saturday</span>
                                        <span data-en="Closed" data-ar="مغلق">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
};

// Navigation function
function navigateToPage(pageId, param = null) {
    const homeContent = document.getElementById('home-page');
    const dynamicContent = document.getElementById('dynamic-content');
    
    if (pageId === 'home') {
        // Show home page
        homeContent.classList.remove('d-none');
        dynamicContent.classList.add('d-none');
        document.title = 'Nibras Jordan - Independent Power Producer';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    // Hide home page and show dynamic content
    homeContent.classList.add('d-none');
    dynamicContent.classList.remove('d-none');
    
    // Get page template
    const template = pageTemplates[pageId];
    
    if (template) {
        // Update page content
        dynamicContent.innerHTML = template.content;
        document.title = `${template.title} - Nibras Jordan`;
        
        // Update language
        updateLanguage();
        
        // Load specific page data if needed
        if (pageId === 'news') {
            loadAllNews();
        }
        
        // Setup page-specific functionality
        setupPageFunctionality(pageId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Handle unknown pages
        dynamicContent.innerHTML = `
            <div class="page-header">
                <div class="container">
                    <h1 class="display-4 fw-bold mb-4" data-en="Page Not Found" data-ar="الصفحة غير موجودة">Page Not Found</h1>
                    <p class="lead" data-en="The page you're looking for doesn't exist." data-ar="الصفحة التي تبحث عنها غير موجودة.">The page you're looking for doesn't exist.</p>
                    <button class="btn btn-primary" onclick="navigateToPage('home')">
                        <span data-en="Go Home" data-ar="العودة للرئيسية">Go Home</span>
                    </button>
                </div>
            </div>
        `;
        updateLanguage();
    }
}

// Load all news for news page
function loadAllNews() {
    const allNewsData = [
        {
            id: 1,
            title: "Nibras Jordan Achieves Record Performance in Q3 2024",
            excerpt: "Our power plants delivered exceptional reliability and efficiency, contributing significantly to Jordan's energy security.",
            date: "2024-10-15",
            image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Operations"
        },
        {
            id: 2,
            title: "New Environmental Initiative Launched",
            excerpt: "Nibras Jordan announces comprehensive environmental protection program to reduce carbon footprint.",
            date: "2024-09-28",
            image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Sustainability"
        },
        {
            id: 3,
            title: "Partnership with Local Communities Strengthened",
            excerpt: "New social responsibility programs launched to support education and healthcare in surrounding communities.",
            date: "2024-09-10",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Community"
        },
        {
            id: 4,
            title: "Technology Upgrade Completed at Amman East Plant",
            excerpt: "Latest efficiency improvements increase output while reducing environmental impact.",
            date: "2024-08-22",
            image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Technology"
        },
        {
            id: 5,
            title: "Safety Milestone: 1000 Days Without Incident",
            excerpt: "Nibras Jordan celebrates exceptional safety record across all operations.",
            date: "2024-08-05",
            image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Safety"
        },
        {
            id: 6,
            title: "Annual Sustainability Report Released",
            excerpt: "Comprehensive overview of environmental and social impact initiatives for 2023.",
            date: "2024-07-18",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Sustainability"
        }
    ];
    
    const newsGrid = document.getElementById('all-news-grid');
    if (newsGrid) {
        newsGrid.innerHTML = allNewsData.map(item => `
            <div class="col-lg-4 col-md-6">
                <div class="news-card fade-in-up">
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}" class="img-fluid">
                        <div class="news-date">${formatDate(item.date)}</div>
                    </div>
                    <div class="news-content">
                        <div class="badge bg-primary mb-2">${item.category}</div>
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-excerpt">${item.excerpt}</p>
                        <a href="#" class="btn btn-outline-primary btn-sm" onclick="navigateToPage('news-detail', ${item.id})">
                            <span data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                            <i class="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Setup page-specific functionality
function setupPageFunctionality(pageId) {
    switch (pageId) {
        case 'contact':
            setupContactForm();
            break;
        case 'news':
            setupAnimations();
            break;
        default:
            setupAnimations();
            break;
    }
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Export navigation function for global access
window.navigateToPage = navigateToPage;