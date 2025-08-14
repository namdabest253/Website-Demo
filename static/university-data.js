// University Data for Toolkit
// This file contains all university information in a structured format
// Support for HTML content, links, and line breaks

const universityData = {
    northwestern: {
        name: "Northwestern University",
        logo: "../images/northwestern_coat_of_arms.png",
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf",
        sections: {
            overview: {
                title: "Career Services Overview",
                description: "Northwestern University offers comprehensive career services including career counseling, job search assistance, and industry networking events. The Kellogg School and other departments provide specialized resources for different fields.",
                items: [
                    "Career Services Center - 1st floor Norris",
                    "Industry-specific career advisors",
                    "Quarterly career fairs",
                    "Alumni mentorship programs"
                ]
            },
            advising: {
                title: "",
                description: "",
                items: [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            resume: {
                title: "Resume & Application Tips", 
                description: "Tailored resume advice for Northwestern students, including industry-specific formatting and content recommendations.",
                items: [
                    "Northwestern resume template available",
                    "Weekly resume review sessions", 
                    "Industry-specific resume workshops",
                    "Cover letter writing assistance"
                ]
            },
            network: {
                title: "Networking Opportunities",
                description: "Connect with Northwestern alumni and industry professionals through various networking platforms and events.",
                items: [
                    "Northwestern Network alumni platform",
                    "Industry networking events",
                    "Professional organization chapters", 
                    "LinkedIn Northwestern group"
                ]
            }
        }
    },

    uchicago: {
        name: "University of Chicago",
        logo: "../images/uchicago_coat_of_arms.png", 
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf",
        sections: {
            overview: {
                title: "Career Advancement Overview",
                description: "The University of Chicago's Career Advancement Office provides a wide range of advising services, experiential programs and toolkits to prepare students and recent alumni for career success. Students book one-on-one advising through UChicago Handshake and can access drop‑in sessions, career cohorts, industry‑specific programs and networking events. The office also maintains virtual resources like resume templates, interview toolkits and networking guides.",
                items: [
                    '<a href="https://careeradvancement.uchicago.edu" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Advancement Office</a>',
                    '<a href="" target="_blank" rel="noopener noreferrer" class="card-header-link">Specialized advisors by college and industry</a>',
                    '<a href="" target="_blank" rel="noopener noreferrer" class="card-header-link">UChicago Careers platform</a>',
                    '<a href="https://careeradvancement.uchicago.edu/student-opportunities/month-long-programs/jeff-metcalf-internship-program/" target="_blank" rel="noopener noreferrer" class="card-header-link">Metcalf Internship Program</a>'
                ]
            },
            advising: {
                title: "Personalized Advising & Support",
                description: "You can schedule an appointment with a career advisor at Career Advancement to discuss career paths and school resources through the Handshake platform. A best practice is to include details in the notes section on what you want to discuss with the adviser.",
                items: [
                    '<strong>Advising appointments</strong> – Students and alumni (up to 5 years post-graduation) can schedule individual sessions via Handshake. The appointment system lets users choose a category (e.g., general career advising, industry-specific program, fellowships) and preferred format (in-person, phone, virtual).<br><a href="https://careeradvancement.uchicago.edu" target="_blank" rel="noopener noreferrer" class="card-header-link">Advising Appointments</a><br><a href="https://grad.uchicago.edu/" target="_blank" rel="noopener noreferrer" class="card-header-link">Advising For Gradudate Students</a>',
                    '<strong>Walk-in advising</strong> – 15-minute virtual drop-in sessions for quick résumé/cover letter questions. During Spring Quarter 2025 walk-ins were offered Tuesdays & Wednesdays 1-2:30 p.m. and Fridays 9-11 a.m.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/walk-in-advising/" target="_blank" rel="noopener noreferrer" class="card-header-link">Walking Advising</a>',
                    '<strong>Specialized support centers</strong> – <a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/student-athlete-career-resource-center/#:~:text=Student" target="_blank" rel="noopener noreferrer" class="card-header-link">Student-Athlete Career Resource Center</a>, <a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/odyssey-career-resource-center/" target="_blank" rel="noopener noreferrer" class="card-header-link">Odyssey (FGLI) Career Resource Center</a> and <a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/transfer-student-career-resource-center/" target="_blank" rel="noopener noreferrer" class="card-header-link">Transfer Student Career Resource Center</a> provide targeted advising, experiential learning opportunities and networking events.',
                    '<strong>International student advising</strong> – <a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/international-resources/international-student-career-resource-center/#:~:text=International%20Student%20Career%20Resource%20Center" target="_blank" rel="noopener noreferrer" class="card-header-link">The International Student Career Resource Center</a> encourages international students to meet with <a href="https://careeradvancement.uchicago.edu/" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Advancement</a> advisers via Handshake and provides guidance on CPT/OPT and work authorization.'
                ]
            },
            career: {
                title: "Career exploration & Experiential Programs",
                description: "UChicago has a variety of content, events, and organizations to support you in exploring career paths. Career Advancement provides assessment tools include career roadmaps and worksheets you can develop with a career adviser. Experiences include city specific employer visits called “treks”, career fairs, job shadowing, and student competitions. UChicago has dozens of student clubs focused on professions, providing exposure to industries and vocations, experiential training and peer advice.",
                items: [
                    '<strong>Career Exploration appointments & self-assessments</strong> – Students can meet with advisers and use worksheets (Academic Favorites, Value Chart, Skills Inventory, Energy Engagement Map) to clarify interests.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/discover-your-passion/career-exploration/#:~:text=Career%20Exploration%20Resources" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Exploration Resources</a>',
                    '<strong>Career Exploration Week (CEW)</strong> – Four-day program for incoming first-year students held in early September. Participants visit employers, connect with alumni and choose a track (business, finance, cinematic arts & journalism, legal professions, policy & data, global health, healthcare, quantum, etc.). The 2025 program cost ≈$1,000. The Trott Emerging Business Leaders (TEBL) cohort has a private Business CEW and more opportunities (first-years only)<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/career-exploration-week/" target="_blank" rel="noopener noreferrer" class="card-header-link">CEW info</a><br><a href="https://careeradvancement.uchicago.edu/careers-in/business/trott-emerging-business-leaders/" target="_blank" rel="noopener noreferrer" class="card-header-link">TEBL (Business)</a>',
                    '<strong>Treks</strong> – Two-day career exploration trips where groups of 15-25 students visit employers across the U.S. and abroad. Treks help students clarify goals, build networks and learn about career paths; previous attendees reported increased confidence and clear next steps.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/treks/#:~:text=Career%20Advancement%20Treks" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Treks (General Info)</a><br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/treks/apply-to-upcoming-treks/" target="_blank" rel="noopener noreferrer" class="card-header-link">Apply to Treks</a><br><a href="https://careeradvancement.uchicago.edu/trek-map-2024.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Trek destinations</a>',
                    '<strong>Job Shadowing Program</strong> – 1 to 5-day unpaid experiences where students observe/shadow alumni/professionals at work. Placements depend on industry and location preference; students coordinate logistics and cover their own costs. Hosts include Amazon, Apple and other organizations.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/day-long-programs/job-shadowing-program/#:~:text=Job%20Shadowing%20Program%20Overview" target="_blank" rel="noopener noreferrer" class="card-header-link">Program Overview</a><br><a href="https://careeradvancement.wufoo.com/forms/m6j1gi50m9ny18/" target="_blank" rel="noopener noreferrer" class="card-header-link">Application Form</a>',
                    '<strong>Micro-Metcalf Program</strong> – Short-term paid micro-internships (20-40 hours over 2-4 weeks) where students work on specific projects, usually remote. Open to all undergraduates, including CPT-eligible international students; micro-internships help build skills and networks.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/month-long-programs/micro-metcalf-program/#:~:text=Micro" target="_blank" rel="noopener noreferrer" class="card-header-link">Micro-Metcalf Program</a><br><a href="https://info.parkerdewey.com/student/uchicago" target="_blank" rel="noopener noreferrer" class="card-header-link">Apply</a>',
                    '<strong>Metcalf Clinics</strong> – Project-based co-op experiences in which teams of undergraduates tackle research and analysis projects for employer partners. Projects span clean energy, biotech, quantum computing, finance and more. Applications open each quarter with deadlines for fall, winter and spring; students work remotely, access coaches and present results.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/month-long-programs/metcalf-clinics/#:~:text=Metcalf%20Clinics" target="_blank" rel="noopener noreferrer" class="card-header-link">Metcalf Clinics Overview</a>',
                    '<strong>UChicago Private Markets Program</strong> – One-week immersive program in September combining academic lectures and networking in private equity. Participants build financial models and discuss case studies with professionals and alumni; pre-program training covers accounting and valuation.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/uchicago-private-markets-program/#:~:text=Networking%20101%20%20%2085Muse" target="_blank" rel="noopener noreferrer" class="card-header-link">Private Markets Program</a>',
                    '<strong>Other experiential programs</strong> – Jeff Metcalf Internship Program (full-term internships), On-Campus Employment, International Immersion Programs, competitions (Stock Pitch, APAC Healthcare Investment Competition), etc.<br><a href="https://www.google.com/search?q=jeff+metcalf+internship+program&oq=jeff+metc&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDzSAQgyMjk3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" class="card-header-link">Metcalf Internship Program</a><br><a href="https://careeradvancement.uchicago.edu/student-opportunities/month-long-programs/competitions/" target="_blank" rel="noopener noreferrer" class="card-header-link">UChicago Career Competitions</a>',
                    '<strong>Student clubs & RSOs</strong> – Blue Chips investment club (manages a $200 k value-focused portfolio; membership via application/interview; open to 1st-/2nd-years). Eckhart Consulting provides strategy consulting experience; students work with big clients across areas such as product innovation and data analysis.<br><a href="https://collegeadmissions.uchicago.edu/campus-life/student-orgs-activities/" target="_blank" rel="noopener noreferrer" class="card-header-link">Student Orgs. & Activities</a><br><a href="https://leadership.uchicago.edu/get-involved/recognized-student-organizations-rso/" target="_blank" rel="noopener noreferrer" class="card-header-link">RSO</a>\'s',
                    '<strong>Major-specific & multi-year programs</strong> – 4+1 Scholars Program allows students to earn a UChicago master\'s degree one year after completing their bachelor\'s degree. Benefits include a streamlined admissions process, automatic $5,000 scholarship and a $5,000 internship stipend for 2nd/3rd-year admits. Dedicated advisers help students choose programs and prepare their applications.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/one-and-multi-year-programs/uchicago-advanced-scholars-4-1-masters-programs/" target="_blank" rel="noopener noreferrer" class="card-header-link">UChicago 4+1 Masters Program</a><br><a href="https://careeradvancement.uchicago.edu/student-opportunities/one-and-multi-year-programs/specialized-career-cohorts/" target="_blank" rel="noopener noreferrer" class="card-header-link">Specialized Career Cohorts</a>'
                ]
            },
            resume: {
                title: "Resume & Application Resources",
                description: 'Resume & Interview Toolkit - Virtual library offering: "Writing Resumes: A Guide for Undergraduates"; résumé templates and videos; "Curriculum Vitae: A Guide for Undergraduates"; and "Online Applicant Tracking System Tips & Tricks." Cover-letter resources include a guide, template and video.',
                items: [
                    '<strong>Resume & Interview Toolkit</strong> – Virtual library offering: "Writing Resumes: A Guide for Undergraduates"; Resume templates and videos; "Curriculum Vitae: A Guide for Undergraduates"; and "Online Applicant Tracking System Tips & Tricks." Cover-letter resources include a guide, template and video.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/get-career-ready/resume-and-interview-toolkit/#:~:text=Resumes" target="_blank" rel="noopener noreferrer" class="card-header-link">Resume / Cover Letter Toolkit</a><br><a href="https://uchicago.app.box.com/s/blf992g5qbw69xfsady6vakcg4y9nrui" target="_blank" rel="noopener noreferrer" class="card-header-link">Resume Template</a>',
                    '<strong>Personal statements & grad‑school essays</strong> – Guidance is provided in the toolkit, but Career Advancement does not edit personal statements for graduate or professional school (students are referred to appropriate campus offices).<br><a href="https://careeradvancement.uchicago.edu/careers-in/healthcare/application-components/essays/" target="_blank" rel="noopener noreferrer" class="card-header-link">Personal Statement Tips</a><br><a href="https://www.law.uchicago.edu/news/their-own-words-admissions-essays-worked" target="_blank" rel="noopener noreferrer" class="card-header-link">Law School Samples</a>'
                ]
            },
            interview: {
                title: "Interview Preparation Resources",
                description: "UChicago's Career Advancement office provides several resources for students to develop their interview skills. The resources include training guides, interview practice platforms, and live interview practice.",
                items: [
                    '<strong>Practice Interview Program</strong> – Students book mock interviews through Handshake with MBA students or alumni who have industry experience. They can choose behavioral, case or finance technical interviews. Mock interviews are conducted virtually and follow a structured late-cancellation policy.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/practice-interview-program/#:~:text=Practice%20Interview%20Program" target="_blank" rel="noopener noreferrer" class="card-header-link">Practice Interview Program</a><br><a href="https://careeradvancement.uchicago.edu/star-method.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Ace the STAR Methodology</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/get-career-ready/recruitment-ready-checklist/" target="_blank" rel="noopener noreferrer" class="card-header-link">Recruitment Ready Checklist</a><br><a href="https://careeradvancement.uchicago.edu/experience-mapping-tool.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Use Experience Mapping Tool</a>',
                    '<strong>Big Interview platform</strong> – Web-based practice tool accessible 24/7 that allows students to record and review their answers to common questions.<br><a href="https://uchicago.biginterview.com" target="_blank" rel="noopener noreferrer" class="card-header-link">Log In - Big Interview</a>',
                    '<strong>Interview guides & videos</strong> – Employment Interview guide and behavioural interview videos in the Résumé & Interview Toolkit.<br><a href="https://uchicagoedu.sharepoint.com/sites/careersinbusiness/_layouts/15/stream.aspx?id=%2Fsites%2Fcareersinbusiness%2FPodcasts%20%20Recordings%2FTips%20on%20Interview%20Preparation%20%2D%20Spring%202020%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e88ffd4%2D9103%2D4ca0%2D94a3%2Dc041b927f2bb" target="_blank" rel="noopener noreferrer" class="card-header-link">Tips on Interview Prep</a><br><a href="https://careeradvancement.uchicago.edu/employment-interview-guide.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Interview Guide</a><br><a href="https://uchicago.account.box.com/login?redirect_url=https%3A%2F%2Fuchicago.app.box.com%2Fs%2Fo4gdogks9rdfufybnp1ql6scaib51dkz" target="_blank" rel="noopener noreferrer" class="card-header-link">Ace Behavioral Interviews</a>'
                ]
            },
            network: {
                title: "UChicago Network",
                description: "Strategies and tactics using networking and LinkedIn provide substantial benefits in your career exploration. In addition to standalone guides, career advisers in Career Advancement can provide you with best practices for Networking and LinkedIn.",
                items: [
                    '<strong>LinkedIn headshot opportunities</strong> – During Careers in the Humanities Week, Career Advancement offers "Snapshots for Success" sessions where students can obtain a professional LinkedIn profile picture.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/careers-in-the-humanities-week/#:~:text=Monday%20March%2031%20,Reserve%20a%20Time%20Slot%20Here" target="_blank" rel="noopener noreferrer" class="card-header-link">Snapshots for Success</a>',
                    '<strong>Networking 101 guidance</strong> – The Networking 101 guide explains the basics of networking and highlights tools such as the UChicago Alumni Directory and LinkedIn for building connections.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/grow-your-network/networking-101/#:~:text=Networking%20101" target="_blank" rel="noopener noreferrer" class="card-header-link">Networking 101</a><br><a href="https://careeradvancement.uchicago.edu/networking-101.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Networking & Sample emails/ questions</a><br><a href="https://grad.uchicago.edu/career-development/career-development-resources/networking-resources/" target="_blank" rel="noopener noreferrer" class="card-header-link">Networking Essentials</a>',
                    '<strong>UChicago Alumni Directory</strong> – Students can search the alumni database to find graduates working in their field and request informational interviews. The directory is highlighted on the International Student Career Resource Center and Careers-in-Law pages as a key networking tool.<br><a href="https://alumniandfriends.uchicago.edu/s/login/?ec=302&inst=Vw&startURL=%2Fcareer-resources%2Falumni-directory" target="_blank" rel="noopener noreferrer" class="card-header-link">UChicago alumni page</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/grow-your-network/alumni-directory/#:~:text=Alumni%20Directory" target="_blank" rel="noopener noreferrer" class="card-header-link">Alumni Directory</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/international-resources/international-student-career-resource-center/#:~:text=,in%20your%20field%20of%20interest" target="_blank" rel="noopener noreferrer" class="card-header-link">International Resources - Networking</a><br><a href="https://careeradvancement.uchicago.edu/careers-in/law/exploring-careers-in-law/#:~:text=,Careers%20in%20Law%20Career%20Adviser" target="_blank" rel="noopener noreferrer" class="card-header-link">Careers in Law - Networking</a>',
                    '<strong>Networking 101 guide & webinars</strong> – Career Advancement\'s Networking 101 page offers a downloadable guide and videos on effective networking. It stresses that networking is essential and encourages students to reach out to peers, faculty and alumni.<br><a href="https://careeradvancement.uchicago.edu/networking-101.pdf" target="_blank" rel="noopener noreferrer" class="card-header-link">Networking 101 - guide</a><br><a href="https://youtu.be/-gaAtm4CJR8?si=y2XF1uDeOcGetNSk" target="_blank" rel="noopener noreferrer" class="card-header-link">Power of UChicago Network</a>',
                    '<strong>Job shadowing & treks</strong> – Both programs provide structured opportunities to network with alumni and professionals in various industries.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/day-long-programs/job-shadowing-program/#:~:text=Job%20Shadowing%20Program%20Overview" target="_blank" rel="noopener noreferrer" class="card-header-link">Job Shadowing</a><br><a href="https://careeradvancement.uchicago.edu/student-opportunities/week-long-programs/treks/#:~:text=Career%20Advancement%20Treks" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Treks (General Info)</a>',
                    '<strong>Muse</strong> – No-code mini-site builder that allows students to create a personal minisite, link it to their résumé and LinkedIn profile and share it with alumni and potential employers. The tool helps students showcase skills and interests.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/grow-your-network/muse/#:~:text=Muse" target="_blank" rel="noopener noreferrer" class="card-header-link">More about Muse (Portfolio)</a><br><a href="https://www.loom.com/share/e7350d2057c54f49b47b602b21037fb1" target="_blank" rel="noopener noreferrer" class="card-header-link">Muse tour (Video)</a>'
                ]
            },
            job: {
                title: "Job & Internship Search",
                description: "UChicago's Career Advancement connects students with hundreds of internship and job applications through the Handshake platform. The department provides guides for general search strategies and specific industries. Career advisors are a great resource for search tactics as well.",
                items: [
                    '<strong>UChicago Handshake</strong> – Primary career platform for students and alumni (up to five years out). Users search for jobs/internships, including Jeff Metcalf positions, by logging in and filtering for the "Metcalf" label under "Jobs → All Filters". Students can also sign up for weekly Metcalf newsletters and book advising appointments via Handshake.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/uchicago-handshake/#:~:text=UChicago%20Handshake" target="_blank" rel="noopener noreferrer" class="card-header-link">UChicago Handshake</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/uchicago-handshake/#:~:text=How%20to%20Search%20for%20Metcalf,Internships%20on%20Handshake" target="_blank" rel="noopener noreferrer" class="card-header-link">Handshake ( Step-by-step)</a><br><a href="https://uchicago.joinhandshake.com/explore" target="_blank" rel="noopener noreferrer" class="card-header-link">Handshake - Log In</a>',
                    '<strong>External job boards</strong> – Career Advancement lists external job sites (Career Builder, Indeed, LinkedIn Jobs, Monster, etc.) for additional search options. The office notes these resources are for informational purposes only and not endorsed by UChicago.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/external-job-boards/#:~:text=External%20Job%20Boards" target="_blank" rel="noopener noreferrer" class="card-header-link">External Job Boards</a>',
                    '<strong>Industry newsletters & guides</strong> – Students can sign up for industry-specific newsletters and review Industry Guides for fields such as Arts & Humanities, Business, Computer Science and Policy. Career Pathways and Starting Salaries provides typical roles and salary ranges by industry.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/discover-your-passion/industry-guides/#:~:text=Industry%20Guides" target="_blank" rel="noopener noreferrer" class="card-header-link">Industry Guides</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/discover-your-passion/career-pathways-and-starting-salaries/#:~:text=Once%20you%27ve%20identified%20a%20career,a%20career%20in%20that%20field" target="_blank" rel="noopener noreferrer" class="card-header-link">Career Pathways</a>',
                    '<strong>International student resources</strong> – Advice on résumé/cover-letter formats, CPT/OPT and internship search strategies is provided in the International Student Career Resource Center.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/international-resources/international-student-career-resource-center/#:~:text=International%20Student%20Career%20Resource%20Center" target="_blank" rel="noopener noreferrer" class="card-header-link">Resources for International Students</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/find-opportunities/international-resources/international-student-career-resource-center/#:~:text=Becoming%20familiar%20with%20work%20authorization,OIA%29%20webpage" target="_blank" rel="noopener noreferrer" class="card-header-link">Work Authorization Information</a>',
                    '<strong>Recruiting Ready & Early Recruiting Success</strong> – Programs and guides that teach students about recruiting timelines, search strategies and networking. Sessions include Finance Recruiting Roadmap, Recruiting Bootcamp and employer networking events. The Early Recruiting Success Guide encourages students to start their job search in August and apply early.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/get-career-ready/recruiting-ready-programs/#:~:text=Recruiting%20Ready%20Programs" target="_blank" rel="noopener noreferrer" class="card-header-link">Recruiting Ready Programs</a><br><a href="https://careeradvancement.uchicago.edu/career-toolkit/get-career-ready/early-recruiting-success-guide/#:~:text=Early%20Recruiting%20Success%20Guide" target="_blank" rel="noopener noreferrer" class="card-header-link">Early recruiting Success Guide</a>'
                ]
            },
            emails: {
                title: "Sample Emails & Etiquette",
                description: "Communication best practices are essential in both networking and the interview process. In addition to the template.",
                items: [
                    '<strong>Thank-you note template</strong> – A Career Advancement blog post provides a simple email template: “Hi [name], Thank you for meeting with me … I really enjoyed learning about [team/opportunity] … I look forward to hearing from you, and I hope [personal comment] … Sincerely, [name]”. The post stresses promptness—send the note immediately after the interview.<br><a href="https://uchicagocareeradvancement.wordpress.com/2015/01/23/sending-thank-you-notes-like-a-pro/#:~:text=Hi%20X%2C" target="_blank" rel="noopener noreferrer" class="card-header-link">Thank you note templates</a>',
                    '<strong>Cover-letter & personal statement templates</strong> – Provided in the Resume & Interview Toolkit. Information & links above.',
                    '<strong>Other sample outreach</strong> – Careers-in-Law page suggests using LinkedIn and the alumni directory for informational interviews and encourages students to speak with advisers if they need help crafting outreach messages.<br><a href="https://careeradvancement.uchicago.edu/careers-in/law/exploring-careers-in-law/#:~:text=How%20Can%20I%20Figure%20out,the%20Right%20Career%20for%20Me" target="_blank" rel="noopener noreferrer" class="card-header-link">Career in Law?</a>'
                ]
            },
            contact: {
                title: "Contacting Career Advancement Office",
                description: "",
                items: [
                    '<strong>Handshake appointments</strong> – Go to Handshake, click Career Center → Appointments, and choose Schedule New Appointment. Select an appointment category (e.g., general advising, 4+1 Scholars program, industry-specific adviser), choose a time and indicate whether the meeting will be in person, by phone or virtual.<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/advising-appointments/#:~:text=Advising%20Appointments" target="_blank" rel="noopener noreferrer" class="card-header-link">Handshake Appointements</a>',
                    '<strong>Walk-in hours</strong> – Join virtual drop-in advising sessions (times vary by quarter). Sessions were Tuesdays & Wednesdays 1-2:30 p.m. and Fridays 9-11 a.m..<br><a href="https://careeradvancement.uchicago.edu/career-toolkit/personalized-support/walk-in-advising/#:~:text=Walk" target="_blank" rel="noopener noreferrer" class="card-header-link">Walk-in Advising</a>',
                    '<strong>Email & office location</strong> – Career Advancement is located in Ida Noyes Hall, 1212 E 59th St. The general phone number is 773-702-7040. Specific program contact emails (e.g., 4+1Scholars@uchicago.edu for 4+1) are provided on respective webpages.<br><a href="https://careeradvancement.uchicago.edu/student-opportunities/one-and-multi-year-programs/uchicago-advanced-scholars-4-1-masters-programs/uchicago-advanced-scholars-faq/#:~:text=Please%20reach%20out%20to%204%2B1Scholars%40uchicago,with%20any%20questions" target="_blank" rel="noopener noreferrer" class="card-header-link">More / Q&A</a>'
                ]
            }
        }
    },

    umich: {
        name: "University of Michigan",
        logo: "../images/umich_coat_of_arms.png",
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf", 
        sections: {
            overview: {
                title: "Career Center Overview",
                description: "The University of Michigan Career Center provides comprehensive career services to help students and alumni achieve their professional goals.",
                items: [
                    "Career Center - Student Activities Building",
                    "One-on-one career coaching",
                    "Industry career fairs",
                    "Wolverine Network alumni connections"
                ]
            },
            resume: {
                title: "Resume & Interview Prep",
                description: "Professional development resources including resume writing, interview preparation, and application strategies.",
                items: [
                    "Michigan resume templates",
                    "Mock interview sessions",
                    "Application essay workshops", 
                    "Portfolio development guidance"
                ]
            },
            network: {
                title: "Michigan Network",
                description: "Tap into the powerful Michigan alumni network spanning across industries and geographic locations.",
                items: [
                    "Michigan Alumni Association",
                    "Industry-specific networking events",
                    "Regional alumni chapters",
                    "Mentorship connection programs"
                ]
            }
        }
    },

    uic: {
        name: "University of Illinois Chicago",
        logo: "../images/iit_coat_of_arms.png",
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf",
        sections: {
            overview: {
                title: "Career Services Overview", 
                description: "UIC Career Services provides students and alumni with the resources, programs, and connections needed to achieve career success.",
                items: [
                    "Career Services - Student Services Building",
                    "Major and career exploration",
                    "Job and internship search assistance",
                    "Graduate school preparation"
                ]
            },
            resume: {
                title: "Professional Development",
                description: "Resources to help students develop professional skills and create competitive application materials.",
                items: [
                    "Resume and cover letter reviews",
                    "Interview preparation workshops",
                    "LinkedIn profile optimization",
                    "Professional dress and etiquette"
                ]
            },
            network: {
                title: "UIC Network",
                description: "Connect with UIC alumni and professionals in Chicago and beyond through various networking opportunities.", 
                items: [
                    "UIC Alumni Association",
                    "Chicago professional meetups",
                    "Industry-specific networking",
                    "Mentoring programs"
                ]
            }
        }
    },

    loyola: {
        name: "Loyola University Chicago",
        logo: "../images/loyola_coat_of_arms.png",
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf",
        sections: {
            overview: {
                title: "Career Development Overview",
                description: "Loyola's Career Development Center empowers students to explore, pursue, and achieve meaningful careers aligned with their values and goals.",
                items: [
                    "Career Development Center - Damen Student Center",
                    "Values-based career exploration", 
                    "Experiential learning opportunities",
                    "Post-graduation support services"
                ]
            },
            resume: {
                title: "Career Preparation",
                description: "Comprehensive career preparation services to help students present themselves professionally to employers.",
                items: [
                    "Resume and cover letter assistance",
                    "Interview skills development",
                    "Professional portfolio creation",
                    "Personal branding workshops"
                ]
            },
            network: {
                title: "Loyola Network", 
                description: "Engage with the Loyola community of alumni and professionals committed to social justice and service.",
                items: [
                    "Loyola Alumni Network",
                    "Service-oriented career paths",
                    "Chicago-area networking events",
                    "Values-based mentoring"
                ]
            }
        }
    },

    iwu: {
        name: "Illinois Wesleyan University",
        logo: "../images/iwu_coat_of_arms.png", 
        pdfGuide: "../images/DRIVING FORWARD 2025 Program Review.pdf",
        sections: {
            overview: {
                title: "Career Center Overview",
                description: "Illinois Wesleyan's Career Center provides personalized career guidance and resources to help students transition from college to career.",
                items: [
                    "Career Center - Memorial Center",
                    "Personalized career counseling",
                    "Liberal arts career exploration",
                    "Alumni career connections"
                ]
            },
            resume: {
                title: "Professional Development",
                description: "Professional development programs designed to help liberal arts students articulate their skills and experiences.",
                items: [
                    "Liberal arts resume strategies",
                    "Skills-based interview preparation",
                    "Graduate school application support",
                    "Professional communication workshops"
                ]
            },
            network: {
                title: "IWU Network",
                description: "Connect with Illinois Wesleyan's close-knit alumni community across various career fields and industries.",
                items: [
                    "IWU Alumni Association",
                    "Small college networking advantage",
                    "Cross-industry connections", 
                    "Mentorship matching program"
                ]
            }
        }
    }
};

// Function to dynamically generate university menu
function generateUniversityMenu() {
    const universityList = document.getElementById('university-list');
    if (!universityList) return;

    universityList.innerHTML = '';
    
    Object.keys(universityData).forEach(universityKey => {
        const university = universityData[universityKey];
        const universityItem = document.createElement('div');
        universityItem.className = 'university-item';
        universityItem.setAttribute('data-university', universityKey);
        
        universityItem.innerHTML = `
            <img src="${university.logo}" alt="${university.name}" class="university-logo">
            <span class="university-name">${university.name}</span>
        `;
        
        universityList.appendChild(universityItem);
    });
}

// Function to dynamically generate university content
function generateUniversityContent(universityKey) {
    const university = universityData[universityKey];
    if (!university) return '';

    const sectionsHTML = Object.keys(university.sections).map((sectionKey, index) => {
        const section = university.sections[sectionKey];
        const isActive = index === 0 ? 'active' : '';
        
        const itemsHTML = section.items.map(item => `<li>${item}</li>`).join('');
        
        return `
            <div class="content-section">
                <button class="section-toggle ${isActive}" data-section="${sectionKey}">
                    ${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                </button>
                <div class="section-content ${isActive}" id="${universityKey}-${sectionKey}">
                    <h4>${section.title}</h4>
                    <p>${section.description}</p>
                    <ul class="resource-list">
                        ${itemsHTML}
                    </ul>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="university-content" id="${universityKey}-content" style="display: none;">
            <div class="university-header">
                <h3>${university.name}</h3>
                <a href="${university.pdfGuide}" target="_blank" class="pdf-link">
                    University Career Guide
                </a>
            </div>
            <div class="content-sections">
                ${sectionsHTML}
            </div>
        </div>
    `;
}

// Function to load all university content
function loadAllUniversityContent() {
    const universityContentContainer = document.querySelector('.university-content-container');
    if (!universityContentContainer) return;

    Object.keys(universityData).forEach(universityKey => {
        const contentHTML = generateUniversityContent(universityKey);
        universityContentContainer.insertAdjacentHTML('beforeend', contentHTML);
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { universityData, generateUniversityMenu, generateUniversityContent, loadAllUniversityContent };
}
