__AEC Website Content \- Developer Implementation Guide__

__Document Version:__ 1\.0  
__Date:__ January 28, 2026  
__Client:__ Australian Education Centre \(AEC\)  
__Prepared For:__ Web Developer Team

__Table of Contents__

1. [Project Overview](#project-overview)
2. [Content Structure](#content-structure)
3. [Technical Requirements](#technical-requirements)
4. [Page\-by\-Page Implementation Guide](#page-by-page-implementation-guide)
5. [Design & UX Guidelines](#design--ux-guidelines)
6. [Forms & Interactive Elements](#forms--interactive-elements)
7. [SEO & Metadata Requirements](#seo--metadata-requirements)
8. [Assets Required](#assets-required)
9. [Testing Checklist](#testing-checklist)

__1\. Project Overview__

__Purpose__

Complete website rebuild for Australian Education Centre, a Sri Lankan\-based international education consultancy specializing in Australian, New Zealand, and worldwide study destinations\.

__Target Audience__

- Sri Lankan students \(primary\)
- Parents of prospective international students
- Working professionals seeking career change via education
- Age range: 16\-45 years

__Key Differentiators to Emphasize__

1. First MARA\-registered agent in Sri Lanka \(20\+ years\)
2. Complete end\-to\-end service \(pre\-departure to PR\)
3. 4 global offices \(Melbourne, Adelaide, Colombo, Dubai\)
4. PIER\-qualified counselors
5. 95% visa success rate

__2\. Content Structure__

__Site Map \(Primary Navigation\)__

HOME

Ôö£ÔöÇÔöÇ STUDY IN AUSTRALIA

Ôöé   Ôö£ÔöÇÔöÇ Why Study in Australia?

Ôöé   Ôö£ÔöÇÔöÇ Universities & Colleges

Ôöé   Ôöé   Ôö£ÔöÇÔöÇ Colleges/Institutes/Pathway Providers

Ôöé   Ôöé   ÔööÔöÇÔöÇ Universities

Ôöé   Ôö£ÔöÇÔöÇ Course Finder

Ôöé   Ôö£ÔöÇÔöÇ Short & Specialized Courses

Ôöé   Ôö£ÔöÇÔöÇ Scholarships

Ôöé   Ôö£ÔöÇÔöÇ University Exploration Tours

Ôöé   ÔööÔöÇÔöÇ FAQs

Ôöé

Ôö£ÔöÇÔöÇ PR PATHWAYS AFTER STUDY

Ôöé   Ôö£ÔöÇÔöÇ Visa Options \(485, 407, 482\)

Ôöé   Ôö£ÔöÇÔöÇ Step\-by\-Step Journey to PR

Ôöé   Ôö£ÔöÇÔöÇ Permanent Residency Categories

Ôöé   ÔööÔöÇÔöÇ FAQs

Ôöé

Ôö£ÔöÇÔöÇ PARTNER & FAMILY VISAS

Ôöé   Ôö£ÔöÇÔöÇ Bring Your Partner & Family

Ôöé   Ôö£ÔöÇÔöÇ Partner's Work Rights

Ôöé   Ôö£ÔöÇÔöÇ Benefits for Children

Ôöé   ÔööÔöÇÔöÇ FAQs

Ôöé

Ôö£ÔöÇÔöÇ AUSTRALIAN SCHOOL SECTOR

Ôöé   Ôö£ÔöÇÔöÇ What Makes Schools Special

Ôöé   Ôö£ÔöÇÔöÇ School Types & Programs

Ôöé   Ôö£ÔöÇÔöÇ Age\-Appropriate Entry Points

Ôöé   Ôö£ÔöÇÔöÇ Costs & Investment

Ôöé   Ôö£ÔöÇÔöÇ Accommodation & Welfare

Ôöé   ÔööÔöÇÔöÇ Application Process

Ôöé

Ôö£ÔöÇÔöÇ UNIVERSITY TOURS

Ôöé   Ôö£ÔöÇÔöÇ Who This Tour Is For

Ôöé   ÔööÔöÇÔöÇ Why Choose AEC Tours

Ôöé

Ôö£ÔöÇÔöÇ STUDY WORLDWIDE

Ôöé   Ôö£ÔöÇÔöÇ Country Pages \(21 countries\)

Ôöé   Ôö£ÔöÇÔöÇ How to Choose the Right Country

Ôöé   Ôö£ÔöÇÔöÇ Compare Destinations Tool

Ôöé   Ôö£ÔöÇÔöÇ Special Section: MBBS in Belarus & Georgia

Ôöé   ÔööÔöÇÔöÇ FAQs

Ôöé

Ôö£ÔöÇÔöÇ OUR SERVICES

Ôöé   Ôö£ÔöÇÔöÇ Pre\-Departure Services

Ôöé   Ôö£ÔöÇÔöÇ Arrival & Settlement Services

Ôöé   Ôö£ÔöÇÔöÇ Post\-Study Career Services

Ôöé   Ôö£ÔöÇÔöÇ IELTS/PTE Preparation

Ôöé   Ôö£ÔöÇÔöÇ Partner & Family Visa Services

Ôöé   ÔööÔöÇÔöÇ For Parents \- Resources

Ôöé

Ôö£ÔöÇÔöÇ ABOUT US

Ôöé   Ôö£ÔöÇÔöÇ Our Story

Ôöé   Ôö£ÔöÇÔöÇ Our Mission & Values

Ôöé   Ôö£ÔöÇÔöÇ Why Choose AEC

Ôöé   ÔööÔöÇÔöÇ Professional Credentials

Ôöé

ÔööÔöÇÔöÇ CONTACT US

    Ôö£ÔöÇÔöÇ Book FREE Consultation

    Ôö£ÔöÇÔöÇ Office Locations

    Ôö£ÔöÇÔöÇ Business Hours

    ÔööÔöÇÔöÇ Testimonials

__3\. Technical Requirements__

__Platform Recommendations__

- __CMS:__ WordPress, Webflow, or custom framework
- __Responsive Design:__ Mobile\-first approach \(60% of traffic expected from mobile\)
- __Performance:__ Page load under 3 seconds
- __Browser Support:__ Chrome, Firefox, Safari, Edge \(latest 2 versions\)
- __Accessibility:__ WCAG 2\.1 AA compliance

__Required Integrations__

1. __Contact Forms:__ Email notifications to [edu@multinational\.com\.au](mailto:edu@multinational.com.au)
2. __CRM Integration:__ Capture lead data for follow\-up
3. __WhatsApp Button:__ Direct link to \+94 77 395 0448
4. __Google Maps:__ Office location embedding
5. __Analytics:__ Google Analytics 4 tracking
6. __Social Media:__ Facebook, Instagram, LinkedIn integration
7. __Chat Widget:__ Optional live chat or chatbot

__SEO Requirements__

- Clean URL structure \(no query parameters\)
- Proper heading hierarchy \(H1\-H6\)
- Meta titles \(50\-60 characters\)
- Meta descriptions \(150\-160 characters\)
- Alt text for all images
- Schema markup for organization, local business, courses
- XML sitemap
- Robots\.txt configuration

__4\. Page\-by\-Page Implementation Guide__

__HOME PAGE__

__Hero Section__

- __Layout:__ Full\-width background image/video
- __Headline:__ "Your Complete Journey to Australian & New Zealand Education"
- __Sub\-headline:__ "From Visa to Career Success \- We're With You Every Step"
- __CTA Buttons:__ 
	- Primary: "Check Your Eligibility \- FREE" \(links to form\)
	- Secondary: "Explore Our Services" \(links to services page\)

__Section 2: Why We're Different__

- __Layout:__ 2\-column grid \(3 columns on desktop\)
- __6 Key Differentiators:__ Each as a card with icon, heading, and description
- __Statistics Bar:__ 4 key stats \(20\+ Years, PIER Qualified, MARA Registered, 4 Offices\)
- __CTA:__ "Book Your FREE Consultation" button

__Section 3: Study Destinations Overview__

- __Layout:__ Card carousel or grid
- __Countries Featured:__ Australia \(primary\), New Zealand, UK, Canada, USA, UAE
- __Each Card:__ Flag icon, country name, brief description, "Learn More" link
- __CTA:__ "Explore All 18 Countries We Serve"

__Section 4: How We Help You__

- __Layout:__ Timeline or step\-by\-step visual
- __5 Stages:__ 
	1. FREE Assessment & Counseling
	2. University Selection & Application
	3. Visa Processing & Documentation
	4. Pre\-Departure & Travel Assistance
	5. Settlement & Career Support
- __CTA:__ "See Our Complete Services"

__Section 5: Success Stories__

- __Layout:__ Testimonial slider \(3\-4 visible at once\)
- __4 Featured Testimonials:__ Include student name, photo \(if available\), program, university
- __CTA:__ "Read More Success Stories"

__Section 6: Why Choose AEC__

- __Layout:__ 2\-column list with checkmarks
- __10 Key Points:__ All differentiators listed in source content
- __CTA:__ "Learn More About Us"

__Section 7: Latest News/Blog__

- __Layout:__ 3\-column grid \(latest 3 articles\)
- __Each Card:__ Featured image, title, excerpt, "Read More" link
- __Note:__ Placeholder content needed if blog not yet active

__Section 8: Contact CTA__

- __Layout:__ Full\-width colored background
- __Headline:__ "Ready to Start Your Journey?"
- __3 Options:__ 
	1. FREE Eligibility Assessment \(form link\)
	2. Book a FREE Consultation \(booking link\)
	3. Call Us Now \(phone number with click\-to\-call\)

__Footer__

- __Column 1:__ Logo, tagline, social media icons
- __Column 2:__ Quick Links \(Study Destinations, Services, About, Contact\)
- __Column 3:__ Contact Info \(address, phone, email, hours\)
- __Column 4:__ Newsletter signup
- __Bottom Bar:__ Copyright, privacy policy, terms & conditions

__STUDY IN AUSTRALIA PAGE__

__Hero Section__

- __Headline:__ "Study in Australia \- Your Gateway to World\-Class Education"
- __Breadcrumbs:__ Home > Study in Australia
- __Quick Links:__ Jump to sections \(Why Australia, Universities, Courses, etc\.\)

__Section 1: Why Study in Australia?__

- __Content from source:__ All 11 reasons listed
- __Layout:__ Accordion or expandable cards
- __Each Reason:__ Icon, heading, detailed description

__Section 2: Australian Qualifications Framework__

- __Visual:__ AQF pyramid/hierarchy diagram
- __Interactive:__ Clickable levels with details
- __10 Levels:__ From Certificate I to Doctoral Degree

__Section 3: Universities & Colleges__

*Sub\-section A: Colleges/Institutes/Pathway Providers*

- __Introduction:__ Text about pathway programs
- __Benefits:__ 5 key benefits listed
- __Popular Programs:__ Table format 
	- Columns: Program, Duration, Entry, Progression
	- Programs: Certificate IV Business, Diploma Engineering, etc\.
- __CTA:__ "Find Your Pathway Program"

*Sub\-section B: Universities*

- __Introduction:__ Overview of Australian university system
- __Group of Eight:__ Logos and brief descriptions
- __Australian Technology Network:__ Logos and descriptions
- __Innovative Research Universities:__ Logos and descriptions
- __Regional Universities:__ List with specializations
- __CTA:__ "Search Universities" \(links to course finder\)

__Section 4: Course Finder__

- __Tool:__ Interactive search/filter interface
- __Filters:__ 
	- Study Level \(dropdown\)
	- Field of Study \(dropdown\)
	- Location \(dropdown\)
	- Budget Range \(slider\)
- __Results Display:__ Grid of courses with key details
- __Each Result:__ Course name, institution, duration, fees, entry requirements
- __CTA:__ "Request More Information" button on each result

__Section 5: Short & Specialized Courses__

*Category A: Under 3 Months*

- __Table Format:__ 
	- Columns: Course Category, Examples, Duration, Cost Range, Visa Requirements
	- 9 categories listed in source content

*Category B: CRICOS\-Registered \(Above 3 Months\)*

- __Table Format:__ 
	- Columns: Course Category, Examples, Duration, Entry Requirements
	- 8 categories listed in source content

*Important Notes:*

- __Highlight Box:__ Student visa requirements
- __CTA:__ "Get Personalized Course Recommendations"

__Section 6: Scholarships__

- __Introduction:__ Overview of scholarship opportunities
- __Types of Scholarships:__ 
	1. Australian Government Scholarships \(Australia Awards\)
	2. University Scholarships \(table with types and values\)
	3. External Scholarships \(list of organizations\)
- __Application Process:__ 6\-step timeline
- __Tips for Success:__ 8\-point checklist
- __CTA:__ "Check Your Scholarship Eligibility"

__Section 7: University Exploration Tours__

- __Overview:__ Description of tour program
- __Benefits:__ 10 benefits listed
- __Past Tour Highlights:__ Photo gallery with captions
- __Upcoming Tours:__ Table with dates, cities, registration links
- __CTA:__ "Register for Next Tour"

__Section 8: FAQs__

- __Layout:__ Accordion\-style expandable questions
- __13 Questions:__ All from source content
- __Each Answer:__ Detailed response with relevant links
- __CTA:__ "Still Have Questions? Ask Our Counselors"

__PR PATHWAYS AFTER STUDY PAGE__

__Hero Section__

- __Headline:__ "Your Pathway to Permanent Residency in Australia"
- __Sub\-headline:__ "From Student to PR \- We Guide You Every Step"
- __Breadcrumbs:__ Home > PR Pathways

__Section 1: Overview__

- __Introduction:__ Text explaining PR pathways
- __Success Rate Highlight:__ "95% visa success rate"
- __Timeline Visual:__ Average timeline from study to PR \(5\-7 years\)

__Section 2: Temporary Visa Options__

*Option 1: Subclass 485 \- Temporary Graduate Visa*

- __Card Layout:__ Each visa stream as a separate card
- __2 Streams:__ 
	- Graduate Work Stream \(18 months\)
	- Post\-Study Work Stream \(2\-4 years\)
- __Details per Stream:__ Duration, eligibility, work rights, cost
- __CTA:__ "Check Your Eligibility"

*Option 2: Subclass 407 \- Training Visa*

- __Description:__ Overview and purpose
- __Benefits:__ 5 key benefits listed
- __Duration:__ Up to 2 years
- __Pathway:__ How it leads to 482 and then PR
- __CTA:__ "Explore Training Opportunities"

*Option 3: Subclass 482 \- Temporary Skill Shortage Visa*

- __Description:__ Overview of employer sponsorship
- __3 Streams:__ Short\-term, Medium\-term, Labour Agreement
- __Comparison Table:__ Columns for duration, PR pathway, requirements
- __Benefits:__ 8 benefits listed
- __CTA:__ "Find Sponsoring Employers"

__Section 3: Your Step\-by\-Step Journey to PR__

- __Visual:__ Interactive timeline or flowchart
- __9 Steps:__ From arrival to PR grant
- __Each Step:__ Detailed description, typical duration, required actions
- __Downloads:__ "Complete PR Pathway Guide" PDF

__Section 4: Permanent Residency Categories__

- __Introduction:__ Overview of PR visa subclasses
- __4 Main Categories:__ 
	1. Skilled Independent \(Subclass 189\)
	2. Skilled Nominated \(Subclass 190\)
	3. Skilled Regional \(Subclass 491\)
	4. Employer Nomination Scheme \(Subclass 186\)
- __Comparison Table:__ Columns for requirements, processing time, cost, benefits
- __Points Calculator:__ Interactive tool for Subclass 189/190
- __CTA:__ "Get Your PR Assessment"

__Section 5: FAQs__

- __Accordion Layout:__ 9 questions from source content
- __Each Answer:__ Detailed with relevant links
- __CTA:__ "Book a PR Consultation"

__PARTNER & FAMILY VISAS PAGE__

__Hero Section__

- __Headline:__ "Bring Your Partner & Family to Australia"
- __Sub\-headline:__ "Expert Guidance on Dependent Visas and Family Pathways"
- __Breadcrumbs:__ Home > Partner & Family Visas

__Section 1: Overview__

- __Introduction:__ Why family unity matters
- __Key Benefits:__ Highlighted box with 5 benefits
- __Success Stories:__ 2\-3 brief testimonials from couples/families

__Section 2: Your Partner's Work Rights__

- __Table Format:__ 
	- Columns: Your Visa Type, Partner's Work Rights, Annual Income Potential
	- 8 visa types listed from source content
- __Important Notes:__ 3 key points highlighted
- __CTA:__ "Calculate Your Family's Total Income"

__Section 3: How to Include Your Partner__

- __Step\-by\-Step Process:__ 7 steps from source content
- __Visual:__ Flowchart or numbered timeline
- __Each Step:__ Brief description, estimated timeframe
- __Download:__ "Partner Visa Checklist" PDF

__Section 4: Benefits for Your Children__

- __Layout:__ Icon\-based grid \(3 columns\)
- __9 Benefits:__ From source content
- __Age\-Specific Information:__ 
	- Children under 18 \(3 points\)
	- Children 18\-23 \(3 points\)
- __Education Costs:__ Comparison table \(public vs\. private schools\)

__Section 5: Requirements to Include Partner__

- __Two Sections:__ 
	1. Relationship Requirements \(5 points\)
	2. Additional Documentation \(checklist of 15 items\)
- __Visual:__ Checklist format with checkboxes
- __Important Tips:__ Highlight box with 4 tips

__Section 6: Partner Visa Costs__

- __Table Format:__ 
	- Columns: Cost Type, Amount \(AUD\)
	- 7 cost items listed from source content
- __Total Cost Estimate:__ Highlighted
- __Note:__ Additional charges for health/police checks

__Section 7: FAQs__

- __Accordion Layout:__ 13 questions from source content
- __Each Answer:__ Detailed response
- __CTA:__ "Get Personalized Family Visa Advice"

__AUSTRALIAN SCHOOL SECTOR PAGE__

__Hero Section__

- __Headline:__ "World\-Class Education for Your Child in Australia"
- __Sub\-headline:__ "From Primary to Year 12 \- Setting the Foundation for Success"
- __Breadcrumbs:__ Home > Australian School Sector

__Section 1: What Makes Australian Schools Special__

- __Introduction:__ Overview paragraph
- __7 Key Strengths:__ Card layout with icons
- __Each Card:__ Heading, description, supporting statistics
- __CTA:__ "Find the Right School for Your Child"

__Section 2: School Types & Programs__

*Government \(Public\) Schools*

- __Description:__ Overview and benefits
- __5 Key Points:__ From source content
- __Cost Range:__ $10,000\-$15,000 per year highlighted

*Independent \(Private\) Schools*

- __Description:__ Overview and benefits
- __5 Key Points:__ From source content
- __Cost Range:__ $20,000\-$40,000 per year highlighted

*Catholic Schools*

- __Description:__ Overview and benefits
- __5 Key Points:__ From source content
- __Cost Range:__ $15,000\-$25,000 per year highlighted

*Comparison Table:*

- Columns: School Type, Fees, Class Size, Facilities, Religious Focus
- 3 rows \(Government, Independent, Catholic\)

__Section 3: Age\-Appropriate Entry Points__

- __Visual:__ Timeline showing ages 5\-18
- __4 Education Stages:__ 
	1. Primary School \(Years 1\-6, Ages 5\-11\)
	2. Junior Secondary \(Years 7\-8, Ages 12\-13\)
	3. Senior Secondary \(Years 9\-10, Ages 14\-15\)
	4. Final Years \(Years 11\-12, Ages 16\-17\)
- __Each Stage:__ Description, curriculum focus, typical subjects
- __Popular Entry Points:__ Highlighted callout box

__Section 4: Costs & Investment__

- __Table 1: Annual School Fees__ 
	- Columns: School Type, Tuition, Other Fees, Total
	- 3 school types with ranges
- __Table 2: Additional Costs__ 
	- List format: Uniforms, Books, Excursions, etc\.
	- Each item with cost range
- __Table 3: Living Costs \(Parent Guardian\)__ 
	- Monthly breakdown: Accommodation, Food, Transport, etc\.
	- Total monthly and annual costs
- __Cost Saving Tips:__ Highlighted box with 5 tips
- __CTA:__ "Get a Personalized Cost Estimate"

__Section 5: Accommodation & Welfare__

*Homestay Accommodation*

- __Description:__ Overview and benefits
- __Cost:__ $250\-$350 per week highlighted
- __6 Benefits:__ Listed with icons

*Boarding Schools*

- __Description:__ Overview and benefits
- __Cost:__ $15,000\-$30,000 per year highlighted
- __6 Benefits:__ Listed with icons

*Parent Guardian Arrangements*

- __Description:__ When parents can accompany child
- __Requirements:__ 5 key requirements listed
- __Benefits:__ 4 benefits listed

*Welfare Requirements*

- __Note:__ Under 18 students need approved welfare
- __Options:__ 3 options listed
- __Our Support:__ What AEC provides

__Section 6: The Application Process__

- __Visual:__ 8\-step timeline from source content
- __Each Step:__ Number, description, typical timeframe
- __Download:__ "School Application Checklist" PDF
- __CTA:__ "Start Your Child's Application Today"

__UNIVERSITY TOURS PAGE__

__Hero Section__

- __Headline:__ "Experience Australian Universities First\-Hand"
- __Sub\-headline:__ "Guided Campus Tours \- Make Informed Decisions Before You Apply"
- __Breadcrumbs:__ Home > University Tours
- __Featured Image:__ Group photo from past tour

__Section 1: Overview__

- __Introduction:__ What the tours offer
- __Next Tour Details:__ Dates, cities, registration deadline
- __CTA:__ "Register for Next Tour" \(prominent button\)

__Section 2: Who This Tour Is For__

- __5 Target Groups:__ From source content
- __Each Group:__ Icon, heading, brief description
- __Testimonials:__ 2\-3 quotes from past tour participants

__Section 3: What's Included__

*Universities You'll Visit*

- __Melbourne:__ 5 universities listed
- __Adelaide:__ 3 universities listed
- __Sydney \(Optional\):__ 3 universities listed
- __Map Visual:__ Australian map showing tour route

*Tour Package Includes*

- __15 Items:__ From source content
- __Layout:__ Checklist with checkmarks
- __Exclusions:__ Clearly noted \(flights, personal expenses\)

__Section 4: Sample Itinerary__

- __Day\-by\-Day Breakdown:__ 5\-7 days
- __Each Day:__ Morning, afternoon, evening activities
- __Visual:__ Timeline or schedule table
- __Flexibility Note:__ Can be customized

__Section 5: What You'll Experience__

- __8 Activities:__ From source content
- __Layout:__ Grid with photos and descriptions
- __Each Activity:__ Icon, heading, description

__Section 6: Why Choose AEC Tours__

- __9 Reasons:__ From source content
- __Layout:__ Numbered list with icons
- __Past Tour Gallery:__ Photo carousel with captions

__Section 7: Tour Packages & Pricing__

- __Table Format:__ 
	- Columns: Package Type, Duration, Cities, Universities, Price
	- 3 packages \(Basic, Standard, Premium\)
- __Group Discounts:__ Noted below table
- __Payment Plans:__ Available options
- __CTA:__ "Book Your Tour Today"

__Section 8: Testimonials__

- __3\-4 Detailed Reviews:__ From past participants
- __Each Testimonial:__ Photo, name, current status, quote
- __Video Testimonials:__ If available

__Section 9: Registration__

- __Form:__ Embedded or linked
- __Required Info:__ Name, email, phone, preferred dates, group size
- __CTA:__ "Secure Your Spot Now"

__STUDY WORLDWIDE PAGE__

__Hero Section__

- __Headline:__ "Study Worldwide \- 18 Countries, Endless Opportunities"
- __Sub\-headline:__ "From Europe to Asia \- We Connect You to Quality Education Globally"
- __Breadcrumbs:__ Home > Study Worldwide
- __World Map:__ Interactive with pins on all countries

__Section 1: Countries We Serve__

- __Layout:__ Grid of country cards \(3\-4 columns\)
- __21 Countries:__ Each as a clickable card
- __Each Card:__ 
	- Country flag
	- Country name
	- Brief tagline \(from source content\)
	- "Learn More" button
- __Sort/Filter:__ By region, popularity, cost

__Section 2: How to Choose the Right Country__

- __Decision Framework:__ 8 factors from source content
- __Layout:__ Accordion or expandable sections
- __Each Factor:__ Description, questions to consider, examples

__Section 3: Compare Destinations Tool__

- __Interactive Tool:__ Select 2\-3 countries to compare
- __Comparison Criteria:__ 12 factors from source content
- __Results Display:__ Side\-by\-side table
- __CTA:__ "Get Personalized Destination Advice"

__Section 4: Special Section \- MBBS in Belarus & Georgia__

- __Standalone Section:__ Prominent placement
- __Why MBBS Abroad:__ 5 reasons from source content
- __Belarus Information:__ 
	- 6 advantages
	- Top medical universities \(table\)
	- Admission process \(6 steps\)
	- Cost breakdown \(table\)
- __Georgia Information:__ 
	- Similar structure to Belarus
- __Recognition:__ NMC \(India\), SLMC \(Sri Lanka\) acceptance noted
- __FAQs:__ 10 questions specific to MBBS
- __CTA:__ "Schedule MBBS Consultation"

__Section 5: Regional Groupings__

- __Tab Navigation:__ Europe, North America, Asia\-Pacific, Middle East
- __Each Tab:__ List of countries in that region with brief highlights
- __CTA:__ "Explore All Countries"

__Section 6: Common FAQs__

- __Accordion Layout:__ 15 general questions from source content
- __Each Answer:__ Detailed with links to country pages
- __CTA:__ "Ask Our Study Abroad Experts"

__Individual Country Pages \(Template Structure\)__

*Apply this structure to all 21 country pages*

__Hero Section__

- __Headline:__ "Study in \[Country Name\]"
- __Tagline:__ From source content
- __Breadcrumbs:__ Home > Study Worldwide > \[Country\]
- __Hero Image:__ Landmark or campus scene

__Section 1: Why Study in \[Country\]__

- __Overview:__ 1\-2 paragraphs
- __Key Highlights:__ 8\-10 points from source content
- __Layout:__ Icon\-based grid

__Section 2: Top Universities__

- __List:__ 5\-10 featured universities
- __Each University:__ Logo, name, brief description, rankings
- __CTA:__ "View Complete University List"

__Section 3: Popular Programs__

- __Table Format:__ 
	- Columns: Program, Level, Duration, Average Fees
	- 8\-12 programs from source content

__Section 4: Cost of Living__

- __Table:__ Monthly breakdown
- __Items:__ Accommodation, Food, Transport, Utilities, etc\.
- __Total:__ Monthly and annual estimates
- __Comparison:__ Note how it compares to other countries

__Section 5: Student Life__

- __5\-6 Aspects:__ From source content
- __Layout:__ Text with supporting images
- __Each Aspect:__ Description and benefits

__Section 6: Visa Information__

- __Student Visa Requirements:__ List from source content
- __Processing Time:__ Typical duration
- __Work Rights:__ During and after studies
- __Post\-Study Options:__ PR/work visa pathways \(if applicable\)

__Section 7: Admission Process__

- __Timeline:__ Visual flowchart \(6\-8 steps\)
- __Each Step:__ Description, typical duration, documents needed
- __Download:__ "Application Checklist for \[Country\]" PDF

__Section 8: Scholarships__

- __Available Scholarships:__ Table with types and values
- __Eligibility:__ General requirements
- __How to Apply:__ Brief process
- __CTA:__ "Check Scholarship Eligibility"

__Section 9: FAQs__

- __Accordion:__ 8\-10 country\-specific questions
- __Answers:__ Detailed responses

__Section 10: Contact CTA__

- __Headline:__ "Ready to Study in \[Country\]?"
- __3 Options:__ Assessment, Consultation, Call
- __Country\-Specific Note:__ Any special services AEC offers for this destination

__OUR SERVICES PAGE__

__Hero Section__

- __Headline:__ "Complete Support from Application to Career Success"
- __Sub\-headline:__ "One\-Stop Solution for Your International Education Journey"
- __Breadcrumbs:__ Home > Our Services

__Section 1: Service Overview__

- __Introduction:__ What makes AEC services comprehensive
- __Service Categories:__ 6 main categories \(cards or tabs\)
- __Each Category:__ Icon, name, brief description, "Learn More" link

__Section 2: Pre\-Departure Services__

- __Table Format:__ 
	- Columns: Service, What's Included, Timeline
	- 10 services from source content
- __Additional Details:__ 4 specific services expanded
- __CTA:__ "Download Pre\-Departure Checklist"

__Section 3: Arrival & Settlement Services__

- __Introduction:__ Support doesn't stop at visa approval
- __12 Services:__ From source content
- __Layout:__ Grid with icons and descriptions
- __Melbourne & Adelaide Offices:__ Highlight on\-ground support
- __Success Story:__ 1\-2 testimonials about settlement support

__Section 4: Post\-Study Career Services__

- __Introduction:__ Your career success is our success
- __11 Services:__ From source content
- __Layout:__ Categorized by career stage 
	- Job Search Support \(4 services\)
	- Visa Sponsorship \(3 services\)
	- Professional Development \(4 services\)
- __Success Rate:__ Highlight employment/sponsorship statistics
- __CTA:__ "Explore Career Opportunities"

__Section 5: IELTS/PTE Preparation__

*Overview*

- Introduction to test preparation services
- Success rates and average score improvements

*Course Options*

- __Table Format:__ 
	- Columns: Course Type, Duration, Schedule, Fee
	- 4 course options from source content
- __Each Course:__ Detailed breakdown of what's included

*What You'll Get*

- __12 Features:__ From source content
- __Layout:__ Checklist with checkmarks

*Test Registration Assistance*

- __Services Provided:__ 5 points from source content
- __Test Center Partnerships:__ If applicable

*Course Schedule*

- __Sample Timetable:__ Visual weekly schedule
- __Batch Sizes:__ Class size information
- __Flexibility:__ Online and in\-person options

*Student Results*

- __Success Stories:__ 3\-4 students with before/after scores
- __Average Improvements:__ Statistics chart
- __CTA:__ "Enroll in Next Batch"

__Section 6: Partner & Family Visa Services__

- __Introduction:__ Expert guidance for family visas
- __7 Services:__ From source content
- __Layout:__ Numbered list with descriptions
- __Cost Information:__ Fee structure table
- __CTA:__ "Schedule Family Visa Consultation"

__Section 7: For Parents \- Resources & Information__

- __Introduction:__ Addressing parental concerns
- __7 Resources:__ From source content
- __Layout:__ Download links or modal content
- __Parent Workshops:__ Upcoming dates if applicable
- __Parent Testimonials:__ 2\-3 quotes
- __CTA:__ "Join Our Parent Support Group"

__Section 8: Service Packages__

- __Comparison Table:__ 
	- Columns: Basic, Standard, Premium
	- Rows: Services included, Price
	- 3 package tiers
- __Custom Packages:__ Note about tailored solutions
- __CTA:__ "Choose Your Package"

__ABOUT US PAGE__

__Hero Section__

- __Headline:__ "Your Trusted Partner for International Education Since 2005"
- __Sub\-headline:__ "20\+ Years of Expertise, Ethical Guidance, and Student Success"
- __Breadcrumbs:__ Home > About Us
- __Hero Image:__ Team photo or office exterior

__Section 1: Our Story__

- __Timeline Visual:__ Key milestones from 2005 to present
- __Major Events:__ 
	- 2005: Company founded
	- First MARA registration in Sri Lanka
	- Melbourne office opening
	- Adelaide office opening
	- Dubai office opening
	- Major achievements \(student numbers, visa approvals\)
- __Narrative:__ 3\-4 paragraphs about company evolution
- __Founder's Message:__ If available

__Section 2: Our Mission__

- __Mission Statement:__ From source content
- __Visual:__ Infographic or highlighted text
- __Supporting Text:__ 2\-3 paragraphs elaborating on mission

__Section 3: Our Values__

- __6 Core Values:__ From source content
- __Layout:__ Grid with icons
- __Each Value:__ Name, definition, how we demonstrate it

__Section 4: Why Choose AEC__

- __10 Differentiators:__ From source content
- __Layout:__ Alternating text and image sections
- __Each Point:__ Heading, detailed description, supporting statistic
- __Visual Breaks:__ Photos of team, offices, events

__Section 5: By the Numbers__

- __Statistics Dashboard:__ Visual display
- __Key Metrics:__ 
	- 20\+ Years Experience
	- 2,500\+ Students Placed
	- 95% Visa Success Rate
	- 4 Global Offices
	- 100\+ Partner Institutions
	- 18 Countries Served
	- MARA Registered
	- PIER Qualified

__Section 6: Our Team__

- __Introduction:__ What makes our counselors different
- __Team Grid:__ Photos and bios
- __Each Team Member:__ 
	- Photo
	- Name
	- Position
	- Qualifications \(PIER, MARA, etc\.\)
	- Specialization
	- Years of experience
- __Team Size:__ Mention if all counselors not listed

__Section 7: Our Professional Credentials__

- __Table Format:__ 
	- Columns: Registration/Qualification, Number, Details
	- 3 rows from source content
- __Logos:__ MARA, PIER, QEAC
- __Verification Links:__ If applicable
- __What This Means for You:__ 4 benefits from source content

__Section 8: Our Offices__

- __4 Office Locations:__ Maps and details
- __Each Office:__ 
	- City name
	- Full address
	- Photo
	- Phone
	- Email
	- Services offered at this location
- __Global Coverage:__ Time zone advantage noted

__Section 9: Partnerships__

- __Introduction:__ Our institutional partnerships
- __Partner Logos:__ Grid display \(100\+ universities\)
- __Grouped by Country:__ Collapsible sections
- __CTA:__ "See Complete Partner List"

__Section 10: Testimonials__

- __Video Testimonials:__ If available \(3\-4 videos\)
- __Written Testimonials:__ 6\-8 detailed reviews
- __Rating Display:__ Overall satisfaction metrics
- __CTA:__ "Read More Success Stories"

__Section 11: Company Certifications__

- __Display:__ Logos and names
- __Certifications:__ Any ISO, quality certifications
- __Industry Memberships:__ Associations and organizations

__CONTACT US PAGE__

__Hero Section__

- __Headline:__ "Let's Start Your Education Journey Today"
- __Sub\-headline:__ "FREE Consultation \- No Obligation \- Expert Advice"
- __Breadcrumbs:__ Home > Contact Us

__Section 1: Quick Contact Options__

- __3 Large Buttons:__ 
	- Book FREE Consultation \(calendar/form link\)
	- Call Us Now \(click\-to\-call: \+94 11 5500100\)
	- WhatsApp Us \(direct link: \+94 77 395 0448\)

__Section 2: Office Locations__

- __4 Offices:__ Each as a separate card
- __Each Office Card:__ 
	- Office name \(e\.g\., "Colombo Head Office"\)
	- Full address
	- Embedded Google Map
	- Phone number
	- Email address
	- Business hours
	- Services available
	- "Get Directions" link

__Colombo Office \(Head Office\)__

- Address: 421\-1/1 Thimbirigasyaya Road, Colombo 05, Sri Lanka
- Phone: \+94 11 5500100
- Mobile/WhatsApp: \+94 77 395 0448
- Email: [edu@multinational\.com\.au](mailto:edu@multinational.com.au)
- Hours: Mon\-Fri 8:30 AM \- 5:30 PM, Sat 9:30 AM \- 3:30 PM

__Melbourne Office__

- Address: Suite 32, Level 3, 801 Glenferrie Road, Hawthorn, Victoria 3122, Australia
- \[Add other details if provided\]

__Adelaide Office__

- Address: Level 1, 136 Greenhill Road, Unley, South Australia 5061, Australia
- \[Add other details if provided\]

__Dubai Office__

- Address: \[To be provided\]
- \[Add other details if provided\]

__Section 3: Business Hours & Availability__

- __Regular Hours:__ Table display
- __Time Zone Note:__ For international clients
- __After Hours:__ Emergency contact if applicable
- __Best Times to Call:__ Highlighted

__Section 4: What to Bring for Consultation__

- __Checklist:__ 6 items from source content
- __Layout:__ Bulleted list with icons
- __Download:__ "Consultation Preparation Guide" PDF

__Section 5: FREE Resources Available__

- __Downloads Section:__ 
	- Country comparison guides
	- Cost calculators
	- Application checklists
	- Visa requirement guides
	- Scholarship lists
- __Each Resource:__ Icon, name, brief description, download button

__Section 6: Connect With Us__

- __Social Media Links:__ Large icon buttons 
	- Facebook
	- Instagram
	- LinkedIn
	- YouTube \(if applicable\)
- __Newsletter Signup:__ Embedded form 
	- Headline: "Get Expert Tips & Updates"
	- Email field \+ Subscribe button
	- Privacy note

__Section 7: Contact Form__

- __Headline:__ "Send Us Your Query"
- __Form Fields:__ 
	- Name\*
	- Email\*
	- Phone\*
	- I'm interested in \(dropdown\): 
		- Study in Australia
		- Study in New Zealand
		- Study Worldwide
		- PR Pathways
		- Partner/Family Visas
		- IELTS/PTE Preparation
		- University Tours
		- Other
	- Message\*
	- reCAPTCHA
	- Submit Button: "Send Message"
- __Response Time Note:__ "We'll respond within 24 hours"

__Section 8: Testimonials__

- __4 Featured Reviews:__ From "What Our Students Say" section
- __Each Testimonial:__ 
	- Quote
	- Student name
	- Program/Status
	- Location
- __CTA:__ "Read All Success Stories"

__Section 9: Final CTA__

- __Large Section:__ Colored background
- __Headline:__ "Ready to Start Your Journey?"
- __Text:__ Brief motivational paragraph
- __3 Options Repeated:__ 
	- FREE Eligibility Assessment
	- Book a FREE Consultation
	- Call Us Now

__5\. Design & UX Guidelines__

__Brand Colors__

- __Primary:__ To be provided \(suggest navy blue or deep green for education/trust\)
- __Secondary:__ To be provided \(suggest gold or orange for accents\)
- __Accent:__ To be provided
- __Neutral:__ Gray scale for text and backgrounds
- __Success:__ Green for positive actions/messages
- __Warning:__ Orange for important notices
- __Error:__ Red for alerts

__Typography__

- __Headings:__ Clean, professional sans\-serif \(e\.g\., Montserrat, Poppins, Inter\)
- __Body Text:__ Readable serif or sans\-serif \(e\.g\., Open Sans, Roboto, Lato\)
- __Size Hierarchy:__ 
	- H1: 36\-48px
	- H2: 28\-36px
	- H3: 24\-28px
	- H4: 20\-24px
	- Body: 16\-18px
	- Small: 14px

__Spacing & Layout__

- __Container Width:__ 1200px max for content
- __Grid:__ 12\-column responsive grid
- __Section Padding:__ 80px top/bottom on desktop, 40px on mobile
- __Element Margins:__ Consistent 20px\-40px spacing
- __White Space:__ Generous use for readability

__Buttons & CTAs__

- __Primary CTA:__ Large, high contrast, prominent placement
- __Secondary CTA:__ Outlined or ghost style
- __Button States:__ Normal, Hover, Active, Disabled
- __Button Sizes:__ 
	- Large: For primary actions \(min 48px height\)
	- Medium: For secondary actions \(min 40px height\)
	- Small: For tertiary actions \(min 32px height\)

__Imagery__

- __Hero Images:__ High\-quality, relevant \(students, campuses, cities\)
- __Icon Style:__ Consistent line or solid style throughout
- __Aspect Ratios:__ 
	- Hero: 16:9 or 21:9
	- Cards: 4:3 or 1:1
	- Thumbnails: 1:1
- __Alt Text:__ Required for all images \(SEO and accessibility\)

__Mobile Responsiveness__

- __Breakpoints:__ 
	- Mobile: 320px\-767px
	- Tablet: 768px\-1023px
	- Desktop: 1024px\+
- __Mobile Priorities:__ 
	- Touch\-friendly buttons \(min 44x44px\)
	- Simplified navigation \(hamburger menu\)
	- Stacked layouts \(no side\-by\-side on small screens\)
	- Click\-to\-call and WhatsApp prominent
	- Form fields large enough for mobile input

__Navigation__

- __Primary Navigation:__ 
	- Sticky header on scroll
	- Mega menu for main categories
	- Search functionality
	- CTA button in header \("FREE Assessment"\)
- __Mobile Navigation:__ 
	- Hamburger menu
	- Full\-screen overlay or slide\-in drawer
	- Collapsible sub\-menus
- __Breadcrumbs:__ On all pages except homepage
- __Footer Navigation:__ Condensed site map

__Interactive Elements__

- __Accordions:__ For FAQs, long lists
- __Tabs:__ For categorized content
- __Carousels:__ For testimonials, galleries \(with controls, not auto\-play\)
- __Modals:__ For forms, videos, detailed info
- __Tooltips:__ For additional context on hover
- __Progress Indicators:__ For multi\-step forms

__Accessibility__

- __Color Contrast:__ WCAG AA minimum \(4\.5:1 for text\)
- __Keyboard Navigation:__ All interactive elements accessible
- __Screen Readers:__ Proper ARIA labels
- __Focus Indicators:__ Visible outline on focus
- __Font Sizes:__ Minimum 16px for body text
- __Link Text:__ Descriptive, not "click here"

__6\. Forms & Interactive Elements__

__FREE Eligibility Assessment Form__

__Location:__ Dedicated page \+ modal popup from multiple CTAs

__Form Structure:__ Multi\-section, single\-page layout with progress indicator

__Section 1: Personal Details__

- Full Name\* \(text input\)
- Email Address\* \(email input with validation\)
- Phone Number\* \(tel input with country code dropdown\)
- Current Country of Residence\* \(dropdown\)
- Your Age\* \(dropdown: 16\-18, 19\-24, 25\-32, 33\-40, 41\-54, 55\+\)
- Interested Country\* \(dropdown: Australia, New Zealand, Both\)

__Section 2: Education Background__

- Highest Education Level Completed\* \(dropdown: O\-Level/Grade 11, A\-Level/Grade 12/13, Diploma, Bachelor's Degree, Master's Degree, Other\)
- Duration of the Qualification\* \(dropdown: Less than 01 year, 01 year, 1\.5 Years, 02 Years, 03 Years, 04 Years, More than 05 Years\)
- Year of Completion \(number input\)
- Field of Study \(text input with autocomplete suggestions\)
- University/School Name \(text input\)
- Academic Results/GPA \(text input, optional\)
- Program Level You're Interested In\* \(dropdown: High School Years 9\-12, Certificate III\-IV, Diploma/Advanced Diploma, Bachelor's Degree, Master's Degree, PhD/Research\)
- Preferred Field of Study\* \(text input with autocomplete\)
- Do you have any study gaps?\* \(dropdown: No gaps, Less than 1 year, 1\-2 years, 2\-5 years, More than 5 years\)
- If yes, explain reason for gap \(textarea, conditional display\)

__Section 3: English Language Ability__

- Have you taken an English Test?\* \(radio: Yes/No\)
- If Yes, conditional fields: 
	- Test Type\* \(dropdown: IELTS Academic, IELTS General, PTE Academic, TOEFL, Other\)
	- Overall Score\* \(number input\)
	- Individual Scores \(4 number inputs: Listening, Reading, Writing, Speaking\)
	- Test Date \(date picker\)
- When do you plan to take/retake the test?\* \(dropdown: Next month, 2\-3 months, 4\-6 months, Not sure yet\)

__Section 4: Financial Capacity__

- Who will sponsor your studies?\* \(dropdown: Parents, Self\-funded, Family member, Employer, Bank loan, Other\)
- Sponsor's Annual Income\* \(dropdown in LKR: Under LKR 1M, LKR 1\-2M, LKR 2\-5M, LKR 5\-10M, Above LKR 10M\)
- Available Savings/Funds\* \(dropdown in LKR: Under LKR 2M, LKR 2\-5M, LKR 5\-10M, LKR 10\-20M, Above LKR 20M\)
- Interested in education loan information? \(radio: Yes/No\)
- Annual budget for studies\* \(dropdown: Under AUD 30,000, AUD 30\-40,000, AUD 40\-50,000, Above AUD 50,000, Flexible\)

__Section 5: Family & Dependents__

- Are you married?\* \(radio: Yes/No\)
- If married, conditional fields: 
	- Do you plan to bring your partner/spouse?\* \(radio: Yes, No, Undecided\)
	- Does your partner have work experience or qualifications? \(radio: Yes/No\)
	- If yes, partner's occupation and experience \(text input\)
	- Partner's highest education level \(dropdown, same as above\)
- Do you have children?\* \(radio: Yes/No\)
- If yes, number and ages of children \(text input\)

__Section 6: Timeline & Preferences__

- When do you plan to start studies?\* \(dropdown: Next 3 months, 3\-6 months, 6\-12 months, More than 1 year, Flexible\)
- Preferred study location in Australia \(dropdown: No preference, Sydney NSW, Melbourne VIC, Brisbane QLD, Adelaide SA, Perth WA, Regional areas\)
- Interested in PR pathways?\* \(radio: Yes, No, Not sure yet\)
- Have you previously been refused any visa?\* \(radio: Yes/No\)
- If yes, which country and reason \(textarea, conditional\)

__Section 7: Additional Information__

- How did you hear about us?\* \(dropdown: Facebook, Google Search, Friend/Family referral, School/College, Education fair, Instagram, Other\)
- Any specific questions or concerns? \(textarea\)
- Best time to call you\* \(dropdown: Morning 9\-12, Afternoon 12\-3, Evening 3\-6, Flexible\)

__Privacy & Consent__

- Checkbox: "I agree to be contacted by Australian Education Centre regarding my study plans and consent to the use of my information as per the Privacy Policy\."\*

__Submit Button:__ "Get My FREE Assessment Now"

__Form Behavior:__

- __Validation:__ Real\-time validation on blur, comprehensive check on submit
- __Required Fields:__ Marked with asterisk, error messages if empty
- __Progress Indicator:__ Show section completion \(1/7, 2/7, etc\.\)
- __Save Progress:__ Optional browser storage for incomplete forms
- __Loading State:__ Show spinner on submit, disable button to prevent double submission

__Success Message \(Full Screen or Modal\):__

Ô£ô Thank you\! Your eligibility assessment has been submitted successfully\.

What happens next:

1\. Our expert PIER counselors will review your information within 24 hours

2\. You'll receive a detailed email with your eligibility assessment

3\. One of our counselors will call you to discuss your personalized pathway

4\. We'll provide course recommendations and next steps

Your reference number: \[Auto\-generated, e\.g\., AEC\-20260128\-001\]

Questions? Call us: \+94 11 5500100

WhatsApp: \+94 77 395 0448

__Error Handling:__

- Display error message if submission fails
- Offer retry button
- Show support contact information

__Consultation Booking Form__

__Location:__ Multiple CTAs throughout site

__Integration:__ Calendar system \(e\.g\., Calendly, Acuity Scheduling\) or custom booking

__Required Information:__

- Name\*
- Email\*
- Phone\*
- Preferred Date\* \(calendar picker, only show available slots\)
- Preferred Time\* \(dropdown of available times\)
- Consultation Type\* \(dropdown: In\-person at Colombo office, Video call, Phone call\)
- Topic of Discussion\* \(dropdown: Study in Australia, Study Worldwide, PR Pathways, Partner Visas, IELTS/PTE, University Tours, General Inquiry\)
- Brief message about your situation \(textarea, optional\)

__Confirmation:__

- Immediate email confirmation with: 
	- Appointment details
	- Counselor name \(if assigned\)
	- Office address/meeting link
	- What to bring \(documents list\)
	- How to reschedule
	- Contact information

__Course Finder Tool__

__Location:__ Dedicated page with tool

__Filters \(Left Sidebar or Top Bar\):__

- Country\* \(multi\-select checkboxes\)
- Study Level\* \(multi\-select checkboxes\)
- Field of Study\* \(dropdown with search\)
- Institution Type \(checkboxes: University, College, Private Institute\)
- Location/City \(multi\-select\)
- Duration \(range slider: 0\-48 months\)
- Tuition Fees \(range slider in AUD\)
- Intake \(checkboxes: January, February, etc\.\)
- Scholarship Available \(checkbox\)

__Search Bar:__

- Free text search across course names, institutions
- Autocomplete suggestions as user types

__Results Display \(Main Area\):__

- __Sorting:__ Dropdown \(Relevance, Alphabetical, Fees Low\-High, Fees High\-Low, Duration\)
- __View Toggle:__ Grid view or List view
- __Results Count:__ "Showing X of Y courses"
- __Pagination:__ Load more or numbered pages

__Each Result Card:__

- Institution logo
- Course name \(linked to detail page\)
- Institution name
- Location \(city, country\)
- Study level \(badge\)
- Duration
- Tuition fees per year
- Intakes \(next available intake highlighted\)
- Brief description \(first 100 characters\)
- Buttons: "More Details" | "Request Information"

__Course Detail Page \(when clicked\):__

- Full course description
- Entry requirements
- Course structure/subjects
- Career outcomes
- Fee breakdown
- Available intakes
- Scholarship information
- Application deadline
- "Apply Now" CTA button
- Related courses section

__Tool Behavior:__

- __Filter Updates:__ Real\-time results update as filters change
- __URL Parameters:__ Filters encoded in URL for sharing
- __Save Search:__ Option to save filter preferences \(requires login or cookie\)
- __Empty State:__ If no results, show message and suggest broadening filters
- __Mobile:__ Filters in collapsible panel or modal

__Compare Destinations Tool__

__Location:__ Study Worldwide page

__Interface:__

- __Selection:__ Dropdown or searchable list to select 2\-3 countries
- __Display:__ Side\-by\-side comparison table

__Comparison Criteria \(from source content\):__

- Tuition fees \(average range\)
- Cost of living \(monthly estimate\)
- Part\-time work rights \(hours per week\)
- Post\-study work visa \(duration\)
- PR pathways \(Yes/No \+ brief description\)
- Language of instruction
- Popular programs
- Climate
- Student visa requirements
- Processing time
- Application deadlines
- Quality of education \(global rankings\)

__Table Structure:__

- Rows: Criteria
- Columns: Selected countries
- Color Coding: Visual indicators for better/worse \(e\.g\., lower cost = green\)

__Actions:__

- Change selected countries \(dropdown in each column\)
- Print comparison
- Download as PDF
- Share via email/social

__CTA Below Table:__

- "Need help choosing? Talk to our counselors"
- "Get personalized recommendation" \(links to assessment form\)

__Scholarship Search/Filter__

__Location:__ Scholarships page

__Filters:__

- Country \(multi\-select\)
- Study Level \(multi\-select\)
- Field of Study \(dropdown\)
- Scholarship Type \(Government, University, External\)
- Amount/Value \(range slider\)
- Deadline \(date range\)

__Results:__

- Scholarship name
- Offered by \(institution/organization\)
- Country
- Value \(amount or percentage\)
- Eligibility summary
- Application deadline
- "More Details" link

__Detail Page:__

- Full eligibility criteria
- Required documents
- Application process
- Selection criteria
- Previous recipients \(if shareable\)
- Apply button \(external link or internal application\)

__IELTS/PTE Course Registration__

__Location:__ IELTS/PTE Preparation page

__Course Selection:__

- Display 4 course options as cards
- Each card: Course name, duration, schedule, fees, "Enroll Now" button

__Enrollment Form:__

- Personal details \(name, email, phone\)
- Current English level \(self\-assessment or test score\)
- Preferred course\* \(dropdown of 4 options\)
- Preferred batch start date\* \(dropdown of upcoming batches\)
- Target test date \(date picker, optional\)
- Target score \(text input, optional\)
- Previous test attempts \(number input \+ scores\)
- Payment method\* \(radio: Full payment, Installments\)
- Terms & conditions checkbox\*

__Payment:__

- Integration with payment gateway \(if online payment\)
- Or confirmation with payment instructions \(bank transfer details\)

__7\. SEO & Metadata Requirements__

__Homepage__

- __Title:__ "Australian Education Centre \- Your Complete Partner for International Education | Study in Australia & Worldwide"
- __Meta Description:__ "20\+ years expertise in international education\. MARA registered migration agents\. Free assessment, visa support, settlement services\. Study in Australia, New Zealand & 18 countries\."
- __H1:__ "Your Complete Journey to Australian & New Zealand Education"
- __Keywords:__ Australian education, study abroad, MARA agent Sri Lanka, student visa Australia, international education consultant

__Study in Australia Page__

- __Title:__ "Study in Australia \- Universities, Courses, Scholarships | Free Counseling | AEC"
- __Meta Description:__ "Expert guidance on studying in Australia\. Explore universities, courses, scholarships, PR pathways\. Free eligibility assessment by PIER qualified counselors\."
- __H1:__ "Study in Australia \- Your Gateway to World\-Class Education"

__PR Pathways Page__

- __Title:__ "PR Pathways After Study in Australia \- 485, 482 Visa to Permanent Residency | AEC"
- __Meta Description:__ "Complete guide to Australian permanent residency after study\. Temporary Graduate Visa 485, Employer Sponsorship 482, pathway to PR\. Expert MARA agent support\."
- __H1:__ "Your Pathway to Permanent Residency in Australia"

__Individual Country Pages__

- __Title Template:__ "Study in \[Country\] \- Universities, Costs, Student Visa | AEC \[Country\] Expert"
- __Meta Description Template:__ "Complete guide to studying in \[Country\]\. Top universities, popular programs, student visa, cost of living, scholarships\. Free assessment by expert counselors\."
- __H1 Template:__ "Study in \[Country\]"

__Blog/News \(if implemented\)__

- __Title Template:__ "\[Article Title\] | AEC Blog \- International Education Insights"
- __Meta Description:__ First 150 characters of article summary
- __Canonical URLs:__ Set for all pages

__URL Structure__

- __Homepage:__ multinational\.com\.au
- __Main Pages:__ /study\-in\-australia, /pr\-pathways, /partner\-family\-visas
- __Sub\-pages:__ /study\-in\-australia/universities, /study\-in\-australia/scholarships
- __Country Pages:__ /study\-worldwide/united\-kingdom, /study\-worldwide/canada
- __Services:__ /services/ielts\-preparation, /services/career\-support
- __Static Pages:__ /about\-us, /contact\-us
- __Blog:__ /blog/article\-title\-slug

__Schema Markup__

__Organization Schema:__

json

\{

  "@context": "https://schema\.org",

  "@type": "EducationalOrganization",

  "name": "Australian Education Centre",

  "alternateName": "AEC",

  "url": "https://multinational\.com\.au",

  "logo": "https://multinational\.com\.au/logo\.png",

  "description": "International education consultancy specializing in Australian, New Zealand, and worldwide study destinations\.",

  "address": \{

    "@type": "PostalAddress",

    "streetAddress": "421\-1/1 Thimbirigasyaya Road",

    "addressLocality": "Colombo",

    "postalCode": "00500",

    "addressCountry": "LK"

  \},

  "telephone": "\+94\-11\-5500100",

  "email": "edu@multinational\.com\.au",

  "sameAs": \[

    "https://facebook\.com/\.\.\.",

    "https://instagram\.com/\.\.\.",

    "https://linkedin\.com/\.\.\."

  \]

\}

__LocalBusiness Schema:__ For each office location

__Course Schema:__ For each course listed \(if applicable\)

__FAQPage Schema:__ For FAQ sections

__8\. Assets Required__

__Images__

__Homepage:__

- Hero image/video \(students on campus, diverse, high\-quality\) \- 1920x1080px minimum
- Icons for 6 differentiators \(consistent style, SVG preferred\)
- Country flags \(SVG or high\-res PNG\)
- Team/office photos \(if not using stock\)
- Testimonial photos \(with permission\)

__Study in Australia Page:__

- University logos \(Group of Eight, ATN, IRU, Regional\)
- Campus images for variety
- Icons for AQF levels
- Scholarship images

__Country Pages \(21 sets\):__

- Hero image per country \(landmark or campus\)
- University logos \(top 5\-10 per country\)
- City/student life images

__University Tours Page:__

- Group photos from past tours
- Campus visit images
- Itinerary icons

__Services Pages:__

- Service category icons \(pre\-departure, settlement, career, etc\.\)
- Before/after images for IELTS/PTE success stories

__About Us Page:__

- Team photos \(professional headshots\)
- Office photos \(interior/exterior for all 4 locations\)
- MARA, PIER, QEAC logos
- Timeline milestone images

__Contact Us Page:__

- Office exterior photos
- Map screenshots \(or embedded Google Maps\)

__General:__

- Logo \(multiple formats: full color, white, black, icon only\)
- Favicon \(multiple sizes: 16x16, 32x32, 180x180, 192x192, 512x512\)
- Social media share images \(1200x630px for Facebook/LinkedIn, 1024x512px for Twitter\)

__Documents/Downloads__

- Country comparison guides \(PDFs\)
- Cost calculators \(Excel or web tool\)
- Application checklists per country \(PDFs\)
- Visa requirement guides \(PDFs\)
- Pre\-departure checklist \(PDF\)
- School application checklist \(PDF\)
- Partner visa checklist \(PDF\)
- Consultation preparation guide \(PDF\)

__Videos \(Optional but Recommended\)__

- Welcome/intro video from founder/CEO \(2\-3 minutes\)
- Testimonial videos from successful students \(1\-2 minutes each\)
- University tour recap videos
- "How to apply" process videos

__Icons__

- Service categories \(6\-8 icons\)
- Country flags \(21 countries\)
- Social media icons
- Contact method icons \(phone, email, WhatsApp, location\)
- Feature icons \(checkmarks, stars, arrows, etc\.\)

__9\. Testing Checklist__

__Functional Testing__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All links working \(internal and external\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All forms submitting correctly
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Form validation working \(required fields, format checks\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Email notifications sending \(contact form, assessment form, booking confirmations\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Search functionality working \(course finder, site search\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Filter/sort tools working \(compare destinations, course finder\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Interactive elements functioning \(accordions, tabs, modals, carousels\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Download links working \(PDFs, guides\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Payment integration working \(if applicable\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Social media sharing working
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Newsletter signup working

__Browser Compatibility__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Chrome \(latest 2 versions\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Firefox \(latest 2 versions\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Safari \(latest 2 versions\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Edge \(latest 2 versions\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Mobile Safari \(iOS\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Mobile Chrome \(Android\)

__Device Testing__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Desktop \(1920x1080, 1366x768\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Laptop \(1440x900, 1280x800\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Tablet Portrait \(768x1024\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Tablet Landscape \(1024x768\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Mobile Large \(414x896\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Mobile Medium \(375x667\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Mobile Small \(360x640\)

__Performance__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Page load times under 3 seconds
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Images optimized \(compressed, appropriate sizes\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)CSS/JS minified
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Lazy loading implemented for images
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Caching configured
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)CDN configured \(if applicable\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Google PageSpeed Insights score \(aim for 90\+\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)GTmetrix score \(aim for A\)

__SEO__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All meta titles present and appropriate length
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All meta descriptions present and appropriate length
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)H1 tags present on all pages \(only one per page\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Proper heading hierarchy \(H1 > H2 > H3, no skipping\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Alt text on all images
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Schema markup implemented
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)XML sitemap generated
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Robots\.txt configured
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Canonical URLs set
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)404 page created
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Redirects set up \(if migrating from old site\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Google Search Console connected
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Google Analytics connected

__Accessibility__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Color contrast meets WCAG AA standards
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All interactive elements keyboard accessible
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Focus indicators visible
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)ARIA labels present where needed
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Form labels properly associated
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Skip to content link present
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Test with screen reader \(NVDA or JAWS\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)No automatic audio/video play
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Text resizable up to 200%

__Content__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All content proofread \(no typos, grammatical errors\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All phone numbers clickable \(tel: links\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All email addresses clickable \(mailto: links\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All addresses have Google Maps links
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Consistent terminology throughout site
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)All dates updated to current year where applicable
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Placeholder content removed
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Copyright year updated

__Security__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)SSL certificate installed \(HTTPS\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Forms protected with reCAPTCHA or similar
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)No sensitive data exposed in URLs
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Privacy policy page present
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Terms & conditions page present
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Cookie consent banner \(if required by region\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Contact form spam protection

__Integration Testing__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)CRM integration working \(leads captured\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Email service integration working \(newsletters, notifications\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Analytics tracking working \(pageviews, events, conversions\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Social media pixels installed \(Facebook, LinkedIn, etc\.\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)WhatsApp button working
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Google Maps embedded correctly
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Calendar/booking system integrated
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Payment gateway integrated \(if applicable\)

__User Acceptance Testing__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Client review of all content
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Client approval of design
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Test by sample users from target audience
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Feedback incorporated
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Final client sign\-off

__10\. Post\-Launch Requirements__

__Immediate \(Day 1\-7\)__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Monitor site uptime
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Check analytics setup \(data flowing correctly\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Monitor form submissions \(ensure receiving\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Check email deliverability
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Monitor site speed/performance
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Review error logs

__Short\-term \(Week 2\-4\)__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Submit sitemap to search engines
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Set up Google Search Console
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Set up Google Business Profile
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Initial SEO ranking check
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Set up social media profiles \(if not existing\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Create initial blog content \(if blog planned\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Set up conversion tracking

__Medium\-term \(Month 2\-3\)__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Review analytics data
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)A/B test key pages \(homepage, forms\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Optimize based on user behavior
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Expand content \(blog posts, guides\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Build backlinks
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Social media marketing launch

__Ongoing__

- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Regular content updates \(news, blogs\)
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Monthly SEO review
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Monthly analytics review
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Quarterly design/UX improvements
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Annual comprehensive audit
- ![](data:image/x-wmf;base64,183GmgAAAAAAABsAGABgAAAAAAByVwEACQAAA34BAAABACMBAAAAAAQAAAADAQgABQAAAAsCAAAAAAUAAAAMAhgAGwADAAAAHgAHAAAA/AIAAP///wAAAAQAAAAtAQAACQAAAB0GIQDwABgAGwAAAAAABAAAAC0BAAAJAAAAHQYhAPAAGAAMAAAADwAFAAAACwIAAAAABQAAAAwCGAAbAAUAAAABAv///wAFAAAALgEAAAAABQAAAAIBAQAAACMBAABACSAAzAAAAAAADQANAAUAAQAoAAAADQAAAA0AAAABABgAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////AKCgoOPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWn////////////////////////////////////j4+P///8AoKCgaWlp////////////////////////////////////4+Pj////AKCgoGlpaf///////////////////////////////////+Pj4////wCgoKBpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnj4+P///8AoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg////AAQAAAAnAf//AwAAAAAA)Regular security updates

__11\. Content Management Notes__

__Editable Content__

Client should be able to update without developer:

- News/blog posts
- Testimonials
- Team member bios
- Office hours
- Contact information
- FAQs
- Scholarship listings
- Course listings

__Static Content__

Requires developer for changes:

- Main navigation structure
- Page layouts
- Design elements
- Forms \(structure, not copy\)
- Complex integrations

__Version Control__

- Staging site for testing changes
- Backup before major updates
- Change log maintained

__12\. Third\-Party Integrations Needed__

__Essential__

1. __Email Service:__ \(e\.g\., SendGrid, AWS SES, Mailchimp\) for form notifications, newsletters
2. __Analytics:__ Google Analytics 4
3. __Maps:__ Google Maps API
4. __reCAPTCHA:__ Google reCAPTCHA v3 for forms

__Recommended__

1. __CRM:__ \(e\.g\., HubSpot, Salesforce, Zoho\) for lead management
2. __Live Chat:__ \(e\.g\., Tawk\.to, Drift, Intercom\) for real\-time support
3. __Booking:__ \(e\.g\., Calendly, Acuity\) for consultation scheduling
4. __Payment Gateway:__ \(if offering paid services online\)
5. __Social Media:__ Facebook Pixel, LinkedIn Insight Tag for tracking

__Optional__

1. __Email Marketing:__ Mailchimp or similar for newsletters
2. __Helpdesk:__ Zendesk or similar for ticket management
3. __Video Hosting:__ YouTube or Vimeo for testimonial videos

__13\. Handover Documentation__

Upon completion, developer should provide:

1. __Source Code:__ Complete, commented, organized
2. __CMS Documentation:__ How to update content
3. __Admin Credentials:__ All logins \(secure document\)
4. __Hosting Details:__ Server access, DNS settings
5. __Third\-Party Accounts:__ All integrations, API keys
6. __Maintenance Guide:__ Common tasks, troubleshooting
7. __Backup Strategy:__ Automated backup schedule
8. __Support Plan:__ Post\-launch support details

__14\. Contact for Clarifications__

For any questions during development:

__Client Contact:__

- Company: Australian Education Centre
- Email: [edu@multinational\.com\.au](mailto:edu@multinational.com.au)
- Phone: \+94 11 5500100

__Key Stakeholders:__

- Content Approver: \[Name\]
- Technical Approver: \[Name\]
- Design Approver: \[Name\]

__15\. Project Timeline \(Suggested\)__

__Phase 1: Design & Planning \(2\-3 weeks\)__

- Wireframes
- Design mockups
- Client approval

__Phase 2: Development \(6\-8 weeks\)__

- Homepage
- Main pages \(Study, Services, About, Contact\)
- Country pages
- Forms and tools
- Testing

__Phase 3: Content Population \(2 weeks\)__

- Text content
- Images
- Documents

__Phase 4: Testing & Refinement \(2 weeks\)__

- QA testing
- Client UAT
- Fixes and adjustments

__Phase 5: Launch \(1 week\)__

- Final checks
- Go live
- Monitoring

__Total Estimated Timeline: 13\-16 weeks__

__END OF DOCUMENT__

For the complete content details, please refer to the original source document: AEC\_Website\_Content\_V28012026\.docx

__Document Prepared By:__ \[Your Name\]  
__Date:__ January 28, 2026  
__Version:__ 1\.0

