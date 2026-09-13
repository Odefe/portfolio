document.documentElement.classList.add('js');

document.querySelectorAll('.menu-toggle').forEach((button) => {
  const nav = document.getElementById(button.getAttribute('aria-controls'));
  button.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); button.setAttribute('aria-expanded', open); button.textContent = open ? 'Close' : 'Menu'; });
});

const image = (src, alt, label, copy) => ({ src, alt, label, copy });
const code = (label, snippet, copy) => ({ code: snippet, label, copy });
const P = (id, category, title, summary, stack, visuals, overview, solution, challenges, impact) => ({ id, category, title, summary, stack, visuals, overview, solution, challenges, impact });
const fixmylgaScreens = [
  {
    src: 'fixmylga/01_homepage_hero.png', width: 2559, height: 1400,
    alt: 'FixMyLGA homepage with the community reporting introduction and main navigation',
    label: 'Community Reporting Homepage',
    content: [
      { paragraph: 'I designed the FixMyLGA homepage to explain the purpose of the platform and direct users toward reporting and browsing local issues.' },
      { paragraph: 'The page introduces the core idea:' },
      { quote: 'Report local issues. Track what gets fixed.' },
      { paragraph: 'Users can access issue browsing, the progress tracker, their profile, notifications, and the reporting flow from the main navigation.' },
      { paragraph: 'The homepage also introduces the platform as a community reporting system rather than only a complaint form.' }
    ]
  },
  {
    src: 'fixmylga/02_homepage_how_it_works.png', width: 2536, height: 1186,
    alt: 'Four stages of the FixMyLGA issue lifecycle: Report, Verify, Track, and Fix',
    label: 'Report, Verify, Track and Fix Workflow',
    content: [
      { paragraph: 'I created a four-stage workflow to explain how an issue moves through the platform.' },
      { paragraph: 'The process is:' },
      { steps: [
        { label: 'Report', copy: 'Residents submit a local issue with location and evidence.' },
        { label: 'Verify', copy: 'Nearby users confirm whether the issue is still present.' },
        { label: 'Track', copy: 'Users follow verification activity, updates, and progress.' },
        { label: 'Fix', copy: 'Resolution evidence can be recorded when the problem has been addressed.' }
      ] },
      { paragraph: 'This section gives users a view of the issue lifecycle before they submit a report.' }
    ]
  },
  {
    src: 'fixmylga/03_homepage_recent_issues.png', width: 2537, height: 1171,
    alt: 'Recent community issue cards with location, report evidence, and verification progress',
    label: 'Recent Community Issues',
    content: [
      { paragraph: 'I built a recent-issues section that surfaces reports from different locations and categories.' },
      { paragraph: 'Each card displays information such as:' },
      { list: ['Category', 'Report image', 'Issue title', 'LGA', 'State', 'Resolution status', 'Verification progress'] },
      { paragraph: 'Users can move through recent reports or open the full issue browser.' },
      { paragraph: 'This gives the homepage live platform content instead of static information.' }
    ]
  },
  {
    src: 'fixmylga/04_browse_issues_fct_lga_list.png', width: 2535, height: 1299,
    alt: 'Location-based issue browser showing the FCT LGA list and report filters',
    label: 'State and LGA Issue Browser',
    content: [
      { paragraph: 'I created a location-based issue browser where users can explore reports across Nigeria.' },
      { paragraph: 'Users can filter reports by:' },
      { list: ['State', 'Issue category', 'Status'] },
      { paragraph: 'After selecting a state, the platform displays its Local Government Areas and the number of reported issues in each location.' },
      { paragraph: 'This structure makes it possible to move from a national view to a local view without searching for individual reports manually.' }
    ]
  },
  {
    src: 'fixmylga/05_abuja_municipal_lga_page.png', width: 2559, height: 1302,
    alt: 'Abuja Municipal LGA dashboard with local information, a map, and issue activity',
    label: 'Local Government Area Dashboard',
    content: [
      { paragraph: 'I created dedicated pages for Local Government Areas so users can view local information and issue activity in one place.' },
      { paragraph: 'The Abuja Municipal page includes:' },
      { list: ['LGA name', 'State', 'Area', 'Towns and communities', 'Languages', 'Landmarks', 'Map', 'Follow option', 'Active issue statistics', 'Resolution information'] },
      { paragraph: 'Users can follow an LGA to receive updates about issues in that area.' }
    ]
  },
  {
    src: 'fixmylga/06_my_profile_summary.png', width: 2546, height: 1271,
    alt: 'User profile dashboard summarizing reports, verifications, and resolved issues',
    label: 'User Contribution Dashboard',
    content: [
      { paragraph: 'I built a user profile dashboard that gives contributors a summary of their activity across the platform.' },
      { paragraph: 'The dashboard tracks:' },
      { list: ['Approved reports', 'Nearby verifications', 'Community-verified reports', 'Resolved issues'] },
      { paragraph: 'Users can also see approved submissions and reported issues that have been resolved.' },
      { paragraph: 'This gives contributors a record of their participation rather than treating each report as an isolated action.' }
    ]
  },
  {
    src: 'fixmylga/07_my_profile_activity_notifications.png', width: 2159, height: 1288,
    alt: 'Profile activity history, followed LGAs, and notification preferences',
    label: 'Activity History and Notification Controls',
    content: [
      { paragraph: 'I added an activity history so users can review their previous reports and moderation outcomes.' },
      { paragraph: 'The profile also supports following LGAs and managing notification preferences for events such as:' },
      { list: ['Replies to comments', 'Updates to participated issues', 'Issues within followed LGAs', 'Community verification updates'] },
      { paragraph: 'This gives users control over which platform events they want to follow.' }
    ]
  },
  {
    src: 'fixmylga/08_admin_reports_list.png', width: 2559, height: 1397,
    alt: 'Administrator report list with moderation statuses, submission details, and filters',
    label: 'Admin Report Management',
    content: [
      { paragraph: 'I created an administration workflow for reviewing and managing submitted issues.' },
      { paragraph: 'Administrators can view reports alongside:' },
      { list: ['Category', 'LGA', 'Status', 'Submitting user', 'Submission date'] },
      { paragraph: 'The interface supports report states including approved, pending, rejected, merged, and removed.' },
      { paragraph: 'Admins can also filter reports by category, state, removal status, and moderation status.' },
      { paragraph: 'This creates a moderation layer between user submissions and public issue records.' }
    ]
  },
  {
    src: 'fixmylga/09_admin_add_public_source_issue.png', width: 2559, height: 1393,
    alt: 'Administrator workflow for importing an issue from a public source URL',
    label: 'Public Source Report Import',
    content: [
      { paragraph: 'I added a workflow for issues that originate outside FixMyLGA.' },
      { paragraph: 'Administrators can provide the URL of a public post and retrieve its source information and media.' },
      { paragraph: 'The imported evidence can then be published as an issue while preserving attribution to the original account or platform.' },
      { paragraph: 'This allows relevant civic reports from social platforms to become part of the FixMyLGA tracking system.' }
    ]
  },
  {
    src: 'fixmylga/10_report_issue_category_location.png', width: 2559, height: 1299,
    alt: 'Issue reporting form with category selection and current-location capture',
    label: 'Issue Reporting — Category and Location',
    content: [
      { paragraph: 'I designed the reporting process as a sequence of steps rather than one large form.' },
      { paragraph: 'Users begin by selecting a category such as:' },
      { list: ['Flooding & Drainage', 'Public Infrastructure', 'Roads', 'Waste & Sanitation', 'Other'] },
      { paragraph: 'The user then captures their current location.' },
      { paragraph: 'The location requirement connects the report to where the issue is being observed.' }
    ]
  },
  {
    src: 'fixmylga/11_report_issue_evidence_description.png', width: 2559, height: 1304,
    alt: 'Issue reporting form with photo and video evidence inputs, a title, and a description',
    label: 'Issue Reporting — Evidence Submission',
    content: [
      { paragraph: 'I added media evidence requirements to the reporting workflow.' },
      { paragraph: 'Users can submit:' },
      { list: ['Photo 1', 'Photo 2', 'Video'] },
      { paragraph: 'The page also communicates evidence rules such as evidence age and video length.' },
      { paragraph: 'After uploading evidence, users provide a title and description explaining the physical issue.' },
      { paragraph: 'Character limits help keep reports focused and easier to review.' }
    ]
  },
  {
    src: 'fixmylga/12_issue_detail_oluwaga_bus_stop_top.png', width: 2536, height: 1312,
    alt: 'Oluwaga Bus Stop issue detail showing location, verification, and original source information',
    label: 'Public Issue Detail Page',
    content: [
      { paragraph: 'I created issue pages that act as the central record for each reported problem.' },
      { paragraph: 'The page displays:' },
      { list: ['Issue category', 'Title', 'LGA', 'State', 'Verification count', 'Administrator verification', 'Sharing options', 'Source information', 'First reported date'] },
      { paragraph: 'For reports originating from public platforms, the page also displays the original source and attribution.' }
    ]
  },
  {
    src: 'fixmylga/13_issue_detail_oluwaga_bus_stop_media.png', width: 2558, height: 1287,
    alt: 'Issue evidence media, community verification actions, and resolution timeline',
    label: 'Community Verification and Resolution Tracking',
    content: [
      { paragraph: 'I designed the issue detail page to display the evidence associated with a report, including video and images.' },
      { paragraph: 'Users can verify that the issue is still present or indicate that the problem has been solved.' },
      { paragraph: 'The issue timeline records when the report first appeared and provides a basis for tracking its progress.' },
      { paragraph: 'This turns the issue page into a record that can continue to change after the original report is submitted.' }
    ]
  }
];
const fixmylgaCaseStudy = [
  {
    id: 'overview', title: 'Project Overview', nav: 'Overview',
    blocks: [
      { paragraph: 'I built **FixMyLGA**, a web platform for reporting and tracking issues within Local Government Areas in Nigeria.' },
      { paragraph: 'The platform gives residents a way to report problems such as flooding, road damage, waste disposal, drainage issues, and public infrastructure faults. Reports include location data and media evidence so other users and administrators can understand what is happening.' },
      { paragraph: 'I also built community verification, LGA browsing, issue status tracking, user activity history, notification preferences, public-source reporting, and an administration system for reviewing reports.' },
      { paragraph: 'The goal was to create a public record of local problems from the point they are reported through verification and resolution.' }
    ]
  },
  {
    id: 'tech-stack', title: 'Tech Stack', nav: 'Tech Stack',
    groups: [
      { title: 'Backend', items: ['Python', 'Django', 'Django Admin'] },
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Django Templates'] },
      { title: 'Database', items: ['PostgreSQL', 'PostGIS'] },
      { title: 'Platform Features', items: ['Browser Geolocation', 'Image Upload', 'Video Upload', 'User Authentication', 'Role-based Administration', 'Notification System', 'Location and LGA Data', 'Social/Public Source Import', 'Issue Moderation', 'Community Verification'], features: true }
    ]
  },
  {
    id: 'problem-solution', title: 'Problem Statement & Solution', nav: 'Problem & Solution',
    subsections: [
      {
        title: 'Problem Statement',
        blocks: [
          { paragraph: 'Many local issues are reported through social media, messaging apps, or informal community discussions. These reports can become difficult to track because there is no central place showing:' },
          { list: ['where the problem happened', 'when it was reported', 'whether it is still present', 'evidence of the issue', 'whether other residents have confirmed it', 'whether the issue has been resolved', 'which LGA the report belongs to'] },
          { paragraph: 'This makes it difficult to create a record of recurring problems and track what happens after a complaint is made.' }
        ]
      },
      {
        title: 'Solution',
        blocks: [
          { paragraph: 'I created FixMyLGA as a central reporting and tracking platform.' },
          { paragraph: 'Users can submit issues using their current location, attach photos and video, select an issue category, and describe the problem.' },
          { paragraph: 'Other residents can verify existing reports instead of creating duplicate reports. Each issue has a timeline where activity and resolution status can be tracked.' },
          { paragraph: 'Users can also browse issues by state and LGA, follow LGAs, receive notifications, and track their own contributions.' },
          { paragraph: 'For reports that already exist on social platforms, the admin interface supports creating an issue from a public source while retaining source attribution.' }
        ]
      }
    ]
  },
  {
    id: 'challenges', title: 'Key Challenges', nav: 'Challenges', numbered: true,
    subsections: [
      {
        title: 'Location-based reporting',
        blocks: [
          { paragraph: 'A major part of the platform was connecting reports to the location where the problem exists.' },
          { paragraph: 'I added current-location capture to the reporting process so reports can be connected to the correct geographic area and LGA.' }
        ]
      },
      {
        title: 'Evidence quality',
        blocks: [
          { paragraph: 'A text-only complaint does not always provide enough context.' },
          { paragraph: 'I designed the reporting flow around evidence submission, including:' },
          { list: ['two photos', 'one video', 'evidence age requirements', 'video duration limits', 'issue title and description'] },
          { paragraph: 'This gives each report supporting material that can be reviewed by users and administrators.' }
        ]
      },
      {
        title: 'Duplicate reports',
        blocks: [
          { paragraph: 'A community platform can quickly become filled with multiple reports about the same problem.' },
          { paragraph: 'I added a verification system where nearby users can confirm that an issue still exists. This allows community participation without requiring everyone to create another report.' }
        ]
      },
      {
        title: 'Moderation',
        blocks: [
          { paragraph: 'Public reporting requires a way to review submissions before they become part of the platform.' },
          { paragraph: 'I created an admin workflow where reports can be reviewed and assigned statuses such as:' },
          { list: ['Pending', 'Approved', 'Rejected', 'Merged', 'Removed'] },
          { paragraph: 'Admins can also filter reports by category, state, LGA, moderation status, and removal status.' }
        ]
      },
      {
        title: 'Reports from outside the platform',
        blocks: [
          { paragraph: 'Some civic issues first appear on Instagram or other public channels.' },
          { paragraph: 'I added a public-source workflow that lets administrators retrieve a public post and create an issue while keeping attribution to the original source.' }
        ]
      },
      {
        title: 'Tracking issues after submission',
        blocks: [
          { paragraph: 'Reporting an issue is only the first part of the process.' },
          { paragraph: 'I created issue pages that display the report, evidence, verification count, first-reported date, status, and resolution actions so users can follow what happens after submission.' }
        ]
      }
    ]
  },
  {
    id: 'results', title: 'Result and Impact', nav: 'Results',
    blocks: [
      { paragraph: 'FixMyLGA became a working platform covering the reporting lifecycle:' },
      { lifecycle: 'Report → Verify → Track → Fix' },
      { paragraph: 'The finished system allows residents to:' },
      { list: ['submit reports with location and evidence', 'browse issues across LGAs', 'verify existing issues', 'follow local areas', 'track report activity', 'receive issue notifications', 'share reports', 'record issue resolution'] },
      { paragraph: 'The administration side provides tools for moderation, categorisation, filtering, report management, and public-source intake.' },
      { paragraph: 'The project demonstrates my work across backend development, frontend development, data modelling, location-based workflows, media handling, authentication, moderation, and product design.' }
    ]
  }
];
const operationsScreens = [
  {
    "src": "operations/01_operations_hub_home.png",
    "width": 2559,
    "height": 1338,
    "alt": "Operations Hub — Business Process Workspace in the Operations Hub",
    "label": "Operations Hub — Business Process Workspace",
    "content": [
      {
        "paragraph": "I built a central Operations Hub to bring several administrative and finance workflows into one application."
      },
      {
        "paragraph": "From the home page, users can access internal memos, bank instructions, land receipts, documentation receipts, development receipts, bank uploads, airtime uploads, commission processing, salary preparation, contracts, deeds of assignment, and subscription forms."
      },
      {
        "paragraph": "The home page acts as the entry point to the system and gives users one place to access processes that were previously handled through separate files and templates."
      }
    ]
  },
  {
    "src": "operations/02_salary_management_module.png",
    "width": 2559,
    "height": 1344,
    "alt": "Salary and Staff Payroll Management in the Operations Hub",
    "label": "Salary and Staff Payroll Management",
    "content": [
      {
        "paragraph": "I built a salary management section for maintaining staff payroll information and preparing monthly salary records."
      },
      {
        "paragraph": "The module stores staff ID, employee name, monthly gross salary, bank, and account number, with payroll month and year controls."
      },
      {
        "paragraph": "Staff records stored here can also be referenced by the bank-upload workflow, reducing repeated entry of employee payment information."
      },
      {
        "paragraph": "The system provides a central source for staff salary and bank records used during payroll processing."
      }
    ]
  },
  {
    "src": "operations/03_monthly_payroll_calculation_schedule.png",
    "width": 2559,
    "height": 1531,
    "alt": "Monthly Payroll Calculation Schedule in the Operations Hub",
    "label": "Monthly Payroll Calculation Schedule",
    "content": [
      {
        "paragraph": "I prepared a payroll schedule that calculates monthly salary payments and payroll deductions for staff."
      },
      {
        "paragraph": "The schedule contains employee information, annual salary, monthly gross salary, payable gross salary, net pay, employee pension contribution, PAYE, statutory deductions, employer pension contribution, and bank information."
      },
      {
        "paragraph": "The payroll structure converts salary information into the figures required for payment and statutory reporting."
      },
      {
        "paragraph": "I also created a salary summary section so payroll totals can be reviewed before payment files are prepared."
      }
    ]
  },
  {
    "src": "operations/04_staff_salary_payment_summary.png",
    "width": 1036,
    "height": 1422,
    "alt": "Staff Salary Payment Summary in the Operations Hub",
    "label": "Staff Salary Payment Summary",
    "content": [
      {
        "paragraph": "I created a salary payment summary that converts payroll results into a payment instruction format."
      },
      {
        "paragraph": "The document lists each employee, bank, account number, and salary amount and calculates the total amount scheduled for payment."
      },
      {
        "paragraph": "This gives the finance team a document that can be reviewed against the payroll schedule before payments are processed."
      },
      {
        "paragraph": "It also provides a record of the beneficiaries and amounts included in a payroll run."
      }
    ]
  },
  {
    "src": "operations/05_payroll_bank_upload_file.png",
    "width": 2559,
    "height": 1528,
    "alt": "Automated Payroll Bank Upload File in the Operations Hub",
    "label": "Automated Payroll Bank Upload File",
    "content": [
      {
        "paragraph": "I created a bank-upload workflow that converts payroll records into the structure required for bulk salary payments."
      },
      {
        "paragraph": "For each payment, the file prepares the transaction reference, beneficiary name, payment amount, payment date, beneficiary code, account number, bank sort code, and debit account."
      },
      {
        "paragraph": "Salary and allowance payments can be separated into individual transactions while retaining a consistent transaction reference structure."
      },
      {
        "paragraph": "This reduces the manual work involved in converting payroll results into a bank-ready payment file."
      }
    ]
  },
  {
    "src": "operations/06_commission_entry_form.png",
    "width": 2559,
    "height": 1341,
    "alt": "Sales Commission Processing in the Operations Hub",
    "label": "Sales Commission Processing",
    "content": [
      {
        "paragraph": "I built a commission-processing workflow for calculating and recording sales commissions."
      },
      {
        "paragraph": "The user enters the transaction date, client, consultant, number of plots, amount paid, commission percentage, estate, consultant bank, and account number."
      },
      {
        "paragraph": "The system then calculates the consultant's commission and adds the transaction to the current commission schedule."
      },
      {
        "paragraph": "This moves the commission calculation process from spreadsheet entry into a guided workflow."
      }
    ]
  },
  {
    "src": "operations/07_commission_schedule_calculation.png",
    "width": 2559,
    "height": 1339,
    "alt": "Commission Calculation and Schedule in the Operations Hub",
    "label": "Commission Calculation and Schedule",
    "content": [
      {
        "paragraph": "I created a commission schedule that calculates the amount payable to each consultant after a client transaction is entered."
      },
      {
        "paragraph": "The system displays the client, consultant, commission type, percentage, calculated commission, estate, and total commission for the current schedule."
      },
      {
        "paragraph": "After a direct consultant is added, the workflow also asks whether the transaction has an indirect consultant entitled to an additional commission."
      },
      {
        "paragraph": "This allows multiple commission structures to be processed from the same client transaction."
      }
    ]
  },
  {
    "src": "operations/08_direct_indirect_commission_processing.png",
    "width": 2559,
    "height": 1341,
    "alt": "Direct and Indirect Consultant Commission Processing in the Operations Hub",
    "label": "Direct and Indirect Consultant Commission Processing",
    "content": [
      {
        "paragraph": "I added support for transactions involving both direct and indirect consultants."
      },
      {
        "paragraph": "After the direct commission is recorded, the system can capture an indirect consultant, bank, and account number and apply the corresponding commission percentage."
      },
      {
        "paragraph": "This allows the same client transaction to generate separate consultant payments while keeping the relationship between the payments and the original sale."
      },
      {
        "paragraph": "It also removes the need to calculate the second commission manually."
      }
    ]
  },
  {
    "src": "operations/09_commission_approval_schedule.png",
    "width": 2559,
    "height": 1528,
    "alt": "Sales Commission Approval Schedule in the Operations Hub",
    "label": "Sales Commission Approval Schedule",
    "content": [
      {
        "paragraph": "I created a commission approval schedule from the transaction information captured in the application."
      },
      {
        "paragraph": "The report presents the client, consultant, number of plots, amount paid, administrative fee, amount after the fee, commission percentage, direct commission, indirect commission, and withholding tax."
      },
      {
        "paragraph": "It also calculates the total commission amount required for approval."
      },
      {
        "paragraph": "This provides management and finance with a structured document for reviewing commission payments before funds are released."
      }
    ]
  },
  {
    "src": "operations/10_commission_bank_transfer_instruction.png",
    "width": 1042,
    "height": 1417,
    "alt": "Commission Bank Transfer Instruction in the Operations Hub",
    "label": "Commission Bank Transfer Instruction",
    "content": [
      {
        "paragraph": "I built a transfer-instruction document from approved commission records."
      },
      {
        "paragraph": "The system converts calculated commission amounts into a beneficiary payment schedule containing consultant name, bank, account number, and amount payable."
      },
      {
        "paragraph": "Direct and indirect consultant payments are listed separately and combined into a total transfer amount."
      },
      {
        "paragraph": "This means the same commission data can move from calculation to approval and then to payment preparation without rebuilding the schedule manually."
      }
    ]
  },
  {
    "src": "operations/11_commission_bank_upload_file.png",
    "width": 2559,
    "height": 1528,
    "alt": "Commission Bank Upload Preparation in the Operations Hub",
    "label": "Commission Bank Upload Preparation",
    "content": [
      {
        "paragraph": "I created a bank-upload file from the commission payment schedule."
      },
      {
        "paragraph": "The system prepares beneficiary name, payment amount, payment date, beneficiary code, account number, bank sort code, and debit account in the format required for payment processing."
      },
      {
        "paragraph": "This connects the commission workflow directly to the payment stage and reduces duplicate entry between the approval schedule and bank file."
      }
    ]
  },
  {
    "src": "operations/12_internal_memo_entry.png",
    "width": 2559,
    "height": 1341,
    "alt": "Internal Memo Preparation in the Operations Hub",
    "label": "Internal Memo Preparation",
    "content": [
      {
        "paragraph": "I built an internal memo workflow for preparing expenditure and approval requests."
      },
      {
        "paragraph": "Users can enter the memo date and expenditure items, including description, quantity, unit cost, total, and remarks."
      },
      {
        "paragraph": "The system calculates the memo total automatically and allows authorised signatures to be selected before the document is generated."
      },
      {
        "paragraph": "This provides a structured method for preparing internal approval documents."
      }
    ]
  },
  {
    "src": "operations/13_internal_memo_document_generation.png",
    "width": 2559,
    "height": 1338,
    "alt": "Word and PDF Memo Generation in the Operations Hub",
    "label": "Word and PDF Memo Generation",
    "content": [
      {
        "paragraph": "I added document generation to the internal memo workflow."
      },
      {
        "paragraph": "Once the memo information has been entered, the application creates the document and provides Word and PDF versions for download."
      },
      {
        "paragraph": "The values entered once in the application are transferred into the document template, including the expenditure items and calculated total."
      },
      {
        "paragraph": "This removes the need to recreate the memo manually in Word after completing the calculations."
      }
    ]
  },
  {
    "src": "operations/14_generated_internal_memo.png",
    "width": 1155,
    "height": 1599,
    "alt": "Generated Expenditure Approval Memo in the Operations Hub",
    "label": "Generated Expenditure Approval Memo",
    "content": [
      {
        "paragraph": "This is an example of the document generated by the Internal Memo module."
      },
      {
        "paragraph": "The output includes the company header, memo information, expenditure table, calculated total, and approval signature sections."
      },
      {
        "paragraph": "I designed the workflow so data entered in the application is converted into a document ready for review, approval, printing, or filing."
      },
      {
        "paragraph": "This demonstrates the final output of the memo automation process."
      }
    ]
  },
  {
    "src": "operations/15_bank_instruction_entry.png",
    "width": 2559,
    "height": 1344,
    "alt": "Bank Transfer Instruction Generator in the Operations Hub",
    "label": "Bank Transfer Instruction Generator",
    "content": [
      {
        "paragraph": "I built a bank-instruction workflow for preparing transfer letters from company bank accounts."
      },
      {
        "paragraph": "Users select the source bank, transaction date, and beneficiary information, including bank, account number, amount, and remarks."
      },
      {
        "paragraph": "The application totals the transactions and can add authorised signatories before producing the final document."
      },
      {
        "paragraph": "This replaces editing a previous bank letter whenever a new transfer instruction is required."
      }
    ]
  },
  {
    "src": "operations/16_generated_bank_transfer_instruction.png",
    "width": 1147,
    "height": 1599,
    "alt": "Generated Bank Transfer Instruction in the Operations Hub",
    "label": "Generated Bank Transfer Instruction",
    "content": [
      {
        "paragraph": "This screenshot shows a bank transfer instruction produced by the application."
      },
      {
        "paragraph": "The generated document contains the bank address, instruction date, source account, beneficiaries, beneficiary banks, account numbers, transfer amounts, total payment value, and authorised signatory sections."
      },
      {
        "paragraph": "The application converts the transaction records entered through the form into a formatted bank instruction ready for review and submission."
      },
      {
        "paragraph": "It demonstrates the connection between data entry and document generation within the Operations Hub."
      }
    ]
  },
  {
    "src": "operations/17_land_receipt_data_entry.png",
    "width": 2559,
    "height": 1345,
    "alt": "Land Sales Receipt Generator in the Operations Hub",
    "label": "Land Sales Receipt Generator",
    "content": [
      {
        "paragraph": "I built a receipt-generation workflow for property transactions."
      },
      {
        "paragraph": "The form captures customer name, address, location, transaction date, receipt number, file number, payment duration, cost price, number of plots, plot size, amount paid, outstanding balance, payment type, estate, plot type, and reconciling bank."
      },
      {
        "paragraph": "This gives the operations team one form for entering the information required to prepare a property payment receipt."
      }
    ]
  },
  {
    "src": "operations/18_land_receipt_transaction_configuration.png",
    "width": 2559,
    "height": 1341,
    "alt": "Property Transaction and Receipt Configuration in the Operations Hub",
    "label": "Property Transaction and Receipt Configuration",
    "content": [
      {
        "paragraph": "I configured the receipt workflow to support different estates, plot sizes, payment types, transaction values, and payment schedules."
      },
      {
        "paragraph": "As the transaction information is entered, the system keeps the cost price, amount paid, and outstanding balance available for review before the receipt is generated."
      },
      {
        "paragraph": "Dropdown fields are provided for recurring options such as duration, plot size, estate, plot type, payment type, and reconciling bank."
      },
      {
        "paragraph": "This reduces repeated typing and keeps receipt information aligned with the available property options."
      }
    ]
  },
  {
    "src": "operations/19_completed_land_receipt_entry.png",
    "width": 2559,
    "height": 1336,
    "alt": "Completed Property Receipt Transaction in the Operations Hub",
    "label": "Completed Property Receipt Transaction",
    "content": [
      {
        "paragraph": "This screenshot shows a completed property transaction being prepared for receipt generation."
      },
      {
        "paragraph": "The form contains the customer information, receipt and file references, number of plots, land size, cost price, payment type, and related transaction information."
      },
      {
        "paragraph": "The workflow is designed so the user completes the property transaction once and then generates the corresponding receipt from the captured information."
      },
      {
        "paragraph": "This reduces the need to type the same customer and transaction details into a separate receipt template."
      }
    ]
  },
  {
    "src": "operations/20_generated_land_sales_receipt.png",
    "width": 1164,
    "height": 1599,
    "alt": "Generated Land Sales Receipt in the Operations Hub",
    "label": "Generated Land Sales Receipt",
    "content": [
      {
        "paragraph": "This is an example of a land sales receipt generated from the Operations Hub."
      },
      {
        "paragraph": "The receipt includes customer information, receipt and file numbers, payment method, land information, plot quantity, size, transaction description, amount paid, outstanding balance, and payment totals."
      },
      {
        "paragraph": "The output also provides sections for company and customer signatures."
      },
      {
        "paragraph": "I built the process so information entered through the receipt form is transferred into a formatted document that can be issued to the customer and retained for company records."
      }
    ]
  }
];
// Each Operations source folder is an independent portfolio project.
const operationsProjects = [
  {
    ...P('operations-hub', 'full-stack', 'Operations Hub',
      'A business automation workspace that brings everyday finance and administration tools into one place.',
      ['Python', 'Streamlit', 'Workflow design'], operationsScreens.slice(0, 1),
      'I built a shared home for the administrative tools used to prepare receipts, internal memos, payroll, commissions, and bank transfer instructions. Each workflow has its own purpose and dedicated project walkthrough.',
      'Recurring work meant finding the right file, opening a template, and moving between disconnected tools. The Hub gives users one starting point for choosing the process they need and moving into a focused workflow.',
      'The workspace needed to make a broad set of tools easy to find without treating every task as the same process. I organised the entry points around familiar business activities, while giving each tool its own data entry and output requirements.',
      'The result is a practical front door to the business automation tools. The projects below show how each workflow turns repeated administrative work into structured data entry, calculations, and reusable documents.'),
    automation: {
      kind: 'hub', category: 'Business automation workspace', outcome: 'One workspace. Five focused workflows.',
      headline: 'Everyday operations, brought together.',
      benefit: 'A clear starting point for the documents, calculations, and payment preparation that keep a business moving.',
      output: 0, outputLabel: 'The shared workspace',
      benefits: ['Find tools by business task', 'Move into a focused workflow', 'Keep related operations accessible'],
      steps: [['Choose', 'Select the business task from the home page.'], ['Prepare', 'Enter and review the information in its dedicated tool.'], ['Produce', 'Create the document or schedule the task requires.']],
      galleryIntro: 'The home page is the entry point. Explore each individual tool in the project collection.'
    }
  },
  {
    ...P('automated-receipt-generator', 'full-stack', 'Automated Receipt Generator',
      'Turn property payment details into a formatted customer receipt, without retyping the transaction into a separate template.',
      ['Python', 'Streamlit', 'Document generation'], operationsScreens.slice(16, 20),
      'I built a receipt generator for property transactions. It brings customer details, receipt references, plot information, payment amounts, and outstanding balances into one guided form.',
      'Preparing a receipt by hand means copying customer and payment details into a document and checking that every reference still matches. I connected the transaction form to a receipt template so the captured information carries through to the final document.',
      'Property receipts vary by estate, plot size, payment type, and payment duration. I used recurring options and a structured transaction view to keep those choices readable and make the amount paid and balance available for review.',
      'The workflow saves the repeated typing and formatting needed for each receipt. Operations staff can review one set of transaction details and produce a consistent document for the customer and company records.'),
    automation: {
      kind: 'receipts', category: 'Receipt automation', outcome: 'Enter once. Generate the customer receipt.',
      headline: 'From payment details to a polished receipt.',
      benefit: 'Customer, property, and payment information flows from a single form into the finished receipt. The time saving comes from removing the second round of typing and formatting.',
      output: 3, outputLabel: 'Generated customer receipt',
      benefits: ['Reuse the captured transaction details', 'Review amounts and outstanding balances', 'Keep the receipt format consistent'],
      steps: [['Capture', 'Enter the customer, property, and payment details.'], ['Review', 'Check receipt references, amount paid, and balance.'], ['Generate', 'Create a formatted receipt for the customer and records.']],
      galleryIntro: 'All four receipt screens, together: transaction entry, configuration, the completed form, and the generated land sales receipt.'
    }
  },
  {
    ...P('internal-memo-generator', 'full-stack', 'Internal Memo & Approval Generator',
      'Prepare expenditure requests with calculated totals and generate Word and PDF memos ready for review.',
      ['Python', 'Streamlit', 'Word & PDF'], operationsScreens.slice(11, 14),
      'I built a document generator for internal expenditure memos. Users enter the memo date, expenditure items, quantities, unit costs, and remarks, then produce a formatted request for review and approval.',
      'A typical memo requires calculations in one place and document formatting in another. I connected the line items and calculated total to a document template, with Word and PDF downloads from the same captured information.',
      'The output needed to carry the expenditure table, total, memo information, and signature sections into a readable business document. I kept the calculation and document preparation in one workflow, with signatory selection before generation.',
      'Staff can prepare the expenditure information once and generate both document formats. This removes the need to rebuild the table and totals in Word, and produces a consistent memo for review, printing, and filing.'),
    automation: {
      kind: 'memos', category: 'Memo & document automation', outcome: 'One expenditure list. Word and PDF outputs.',
      headline: 'The request is ready for review.',
      benefit: 'Enter the expenditure items, let the workflow calculate the total, and generate a memo with the information and signature sections already in place.',
      output: 2, outputLabel: 'Generated approval memo',
      benefits: ['Calculate expenditure totals from line items', 'Generate Word and PDF from the same data', 'Prepare consistent documents for approval'],
      steps: [['Itemise', 'Add descriptions, quantities, unit costs, and remarks.'], ['Calculate', 'Review the total and select the signatory sections.'], ['Download', 'Generate Word and PDF memos for review and approval.']],
      galleryIntro: 'Follow the memo from expenditure entry to document generation and the finished approval request.'
    }
  },
  {
    ...P('payroll-salary-automation', 'full-stack', 'Payroll & Salary Automation',
      'Connect employee records, monthly payroll calculations, payment summaries, and bank upload preparation.',
      ['Python', 'Streamlit', 'Spreadsheet generation'], operationsScreens.slice(1, 5),
      'I built a salary workflow that maintains staff payroll and bank records and uses them to prepare monthly salary schedules. The workflow connects calculation, review, and payment file preparation.',
      'Monthly payroll involves moving employee details, salary figures, and bank information between multiple documents. I connected the staff records to a calculation schedule, salary payment summary, and structured bank upload so the same information can be reused.',
      'The schedule needed to expose gross salary, payable salary, net pay, and the pension and PAYE calculations shown in the source workflow. The payment outputs also needed consistent beneficiary details, references, and totals for finance to review.',
      'The workflow reduces repeated entry of employee payment details and the manual conversion of payroll results into bank upload rows. Finance can review the salary schedule and payment summary before using the prepared payment file.'),
    automation: {
      kind: 'payroll', category: 'Payroll automation', outcome: 'Staff records to salary payment preparation.',
      headline: 'A connected path from payroll to payment.',
      benefit: 'Use the same employee and bank records through monthly calculations, the payment summary, and the bank upload file, reducing the work of assembling each output separately.',
      output: 2, outputLabel: 'Salary payment summary',
      benefits: ['Reuse staff salary and bank records', 'Review payroll calculations and totals', 'Prepare structured bank upload rows'],
      steps: [['Maintain', 'Keep staff salary and bank information together.'], ['Calculate', 'Prepare the monthly schedule and review the totals.'], ['Prepare', 'Generate the payment summary and bank upload file.']],
      galleryIntro: 'Four connected stages: staff records, the monthly calculation schedule, the payment summary, and the bank upload file.'
    }
  },
  {
    ...P('sales-commission-automation', 'full-stack', 'Sales Commission Automation',
      'Calculate direct and indirect commissions, prepare approval schedules, and turn the results into payment files.',
      ['Python', 'Streamlit', 'Spreadsheet generation'], operationsScreens.slice(5, 11),
      'I built a commission workflow for property sales, from entering the customer transaction and consultant details to preparing the commission schedule and payment outputs.',
      'A single sale can involve direct and indirect consultants, separate calculations, and multiple payment records. I connected those stages so the original transaction supplies the commission calculations, approval schedule, transfer instruction, and bank upload.',
      'Direct and indirect payments needed to stay connected to the same sale while retaining their own beneficiaries and amounts. I also made the approval schedule show the fees, commission percentages, withholding tax, and total needed for review.',
      'The workflow removes repeated commission calculations and the need to rebuild payment schedules after review. Sales, management, and finance can work from the same captured transaction information through payment preparation.'),
    automation: {
      kind: 'commissions', category: 'Commission automation', outcome: 'One sales record, through review to payment.',
      headline: 'Keep every commission connected to the sale.',
      benefit: 'Calculate direct and indirect consultant payments from the captured transaction, then carry those results into the review schedule and payment documents.',
      output: 4, outputLabel: 'Commission transfer instruction',
      benefits: ['Calculate direct and indirect commissions', 'Bring commission details into one review schedule', 'Reuse results for payment preparation'],
      steps: [['Record', 'Capture the sale, consultants, and commission percentages.'], ['Review', 'Calculate commissions and prepare the approval schedule.'], ['Prepare', 'Produce the transfer instruction and bank upload file.']],
      galleryIntro: 'Six screens cover the complete commission workflow, including direct and indirect consultants, approval reporting, and payment preparation.'
    }
  },
  {
    ...P('bank-transfer-instruction-generator', 'full-stack', 'Bank Transfer Instruction Generator',
      'Turn beneficiary details and payment amounts into a formatted bank transfer letter with a calculated total.',
      ['Python', 'Streamlit', 'Document generation'], operationsScreens.slice(14, 16),
      'I built a generator for company bank transfer instructions. Users select the source bank, date, and beneficiary details, then create a formatted instruction for review and submission.',
      'Reusing an old bank letter means replacing beneficiary details, payment amounts, and totals by hand. I built a dedicated entry form that transfers the current transaction records into the document template.',
      'The final instruction needed to keep the source account, beneficiary banks, account numbers, payment values, total, and signatory sections aligned. I brought those details into one preparation workflow so they can be reviewed before the document is used.',
      'Each instruction can be prepared from the current payment details without rewriting a previous letter. The workflow handles the document formatting and total, leaving a structured instruction ready for finance to review and submit.'),
    automation: {
      kind: 'bank-instructions', category: 'Payment document automation', outcome: 'Payment details in. Transfer letter ready.',
      headline: 'A transfer instruction, without rewriting the letter.',
      benefit: 'Capture the beneficiaries and amounts once. The generator totals the payments and arranges the details into a consistent bank instruction document.',
      output: 1, outputLabel: 'Generated bank transfer instruction',
      benefits: ['Capture beneficiaries in a structured form', 'Calculate the total payment value', 'Generate a consistent transfer letter'],
      steps: [['Enter', 'Select the source bank and add beneficiary details.'], ['Check', 'Review payment amounts, total, and signatories.'], ['Generate', 'Create the instruction for review and submission.']],
      galleryIntro: 'The payment entry form and the bank transfer instruction it produces.'
    }
  }
];
const projects = [
P('fixmylga','full-stack','FixMyLGA','Civic issue reporting and tracking across Nigeria’s states and 774 LGAs.',['Django','PostGIS','JavaScript'],fixmylgaScreens,'I designed and built a community reporting platform where residents can report local issues, browse activity by state and LGA, and track what gets fixed.','Local issues need an ongoing record beyond the first report. I connected location capture and media evidence to public issue pages, community verification, moderation, and resolution tracking. I also built contributor profiles, notification controls, and a public-source import workflow that preserves attribution.','I structured the reporting process into clear steps while keeping location, evidence, moderation outcomes, source attribution, and ongoing updates connected.','The implemented workflows give residents a record of their contributions, administrators tools to review reports, and communities issue histories they can continue to verify and update. The 13 screens below show the work across public, contributor, and administrator views.'),
P(
'fleet-management',
'data',
'Fleet Management System',
'A connected Google Sheets workspace for vehicle records, driver management, expenses, fuel activity, maintenance schedules, and fleet reporting.',
['Google Sheets','Formulas','KPI Reporting'],
[
image(
'01_fleet_operations_dashboard.png',
'Fleet Operations Dashboard',
'Fleet Operations Dashboard',
'I created a dashboard that summarizes fleet activity for a selected date range. The dashboard reports measures including vehicle count with expenses, total expenses, fuel costs, average litres, overdue services, upcoming services, total litres used, and average fuel spend. I also added an expense-category chart and a vehicle-level table for analysing costs across the fleet. This gives management one reporting view rather than requiring them to review transaction sheets manually.'
),
image(
'02_fleet_expense_tracking.png',
'Fleet Expense and Cost Tracking',
'Fleet Expense and Cost Tracking',
'I created the Expenses sheet as the main operational input table. Each transaction can record date, licence plate, vehicle, make, model, expense category, description, amount, odometer, fuel litres, driver, and location. The table supports costs such as repairs, tyres, fuel, servicing, damages, registration, and other vehicle expenses. These transactions feed the reporting and maintenance sections of the workbook.'
),
image(
'03_vehicle_service_schedule.png',
'Vehicle Maintenance and Service Schedule',
'Vehicle Maintenance and Service Schedule',
'I created a maintenance schedule that tracks the service position of each vehicle. For each vehicle, the system displays licence plate, vehicle name, last service date, time since last service, recommended service date, and service status. The schedule reads service information from recorded fleet activity and calculates when maintenance is due. Conditional formatting highlights vehicles that require attention.'
),
image(
'04_driver_management_register.png',
'Driver Management Register',
'Driver Management Register',
'I created a driver register for managing the fleet\'s driver records. The sheet contains information including driver name, transporter ID, driver status, car park, vehicle tag, assigned van, start date, full-time or part-time status, uniform information, damage description, damage cost, and birthday. Driver status is also visually flagged, making active and inactive drivers easy to identify. The driver table acts as a source for driver selections elsewhere in the workbook.'
),
image(
'05_vehicle_master_database.png',
'Vehicle Master Database',
'Vehicle Master Database',
'I created a vehicle register that acts as the main source of fleet information. The table stores fields such as VIN, vehicle name, licence plate, make, model, kilometres, sub-model, status, operational status, vehicle provider, pickup date, registration type, year, ownership type, ownership dates, and registration expiry. Other parts of the workbook reference this sheet when vehicle information is needed.'
),
image(
'06_fleet_system_user_guide.png',
'Workbook Guide and Operating Instructions',
'Workbook Guide and Operating Instructions',
'I created a Guide sheet to document how the fleet system should be used. It explains the role of the main worksheets and tells users where information should be entered. The guide separates vehicle master data, daily expense entry, service monitoring, driver records, driver account records, and dashboard reporting. This makes the workbook easier to hand over and maintain.'
),
image(
'07_driver_account_management.png',
'Driver Account Management',
'Driver Account Management',
'I created a driver account table for maintaining driver access records and connecting login information with driver names. The sheet contains driver, email, and account credential fields and supports the administrative side of driver account management.'
),
image(
'08_dropdown_reference_configuration.png',
'Dropdown and Reference Data Configuration',
'Dropdown and Reference Data Configuration',
'I created a reference sheet that controls dropdown options used throughout the fleet workbook. The sheet stores allowed values for fields including vehicle names, vehicle make, model, operational status, vehicle provider, vehicle year, and expense categories. Centralising these selections reduces inconsistent entries such as different spellings of the same category or vehicle status. This also makes it easier to add or change available options without editing each operational sheet separately.'
)
],
'I built a connected fleet management system in Google Sheets for managing vehicles, drivers, expenses, fuel activity, maintenance schedules, and operational reporting.',
'Fleet information was spread across separate records, making vehicle costs, driver assignments, fuel activity, and maintenance status difficult to review together. I connected the main fleet records through shared fields such as licence plates, vehicle records, and driver information so operational activity could feed one reporting system.',
'I structured the workbook around connected vehicle, driver, expense, maintenance, and reference tables. Formulas connect operational records to the dashboard, while dropdown controls standardize recurring inputs. Service calculations identify upcoming and overdue maintenance, and transaction records support vehicle-level cost analysis.',
'The finished workbook provides one fleet reporting system covering vehicle records, 50+ drivers, 20+ vehicles, expense tracking, fuel analysis, service monitoring, driver administration, dropdown controls, and date-based dashboard reporting.'
),
...operationsProjects,
P('backorder','full-stack','Backorder Reporting & Customer Email Automation','A browser workflow for preserving delivery context and preparing customer updates in bulk.',['Python','Streamlit','Pandas'],[image('backorder-merge.png','Backorder report merge workflow','Report merge','I built the upload and merge stage that combines source reports while retaining the delivery information maintained between runs.'),image('backorder-report.png','Customer report stage','Customer report staging','I created a controlled step for generating customer-specific views from the consolidated backorder data.'),image('backorder-email.png','Outlook draft preparation','Outlook draft preparation','I added batch draft preparation so final customer messages remain under human review before sending.')],'A Streamlit tool for a lighting distributor managing backordered products.','I built a repeatable process that merges reports, preserves delivery dates, supports EX-STOCK status, and prepares reports and Outlook drafts.','Changing source exports had to be reconciled without overwriting manual delivery context.','The workflow reduces repetitive spreadsheet handling and centralizes customer update preparation.'),
P('blue-tarp','data','Blue Tarp Detection','Remote-sensing classification for blue-tarp signals in Haiti imagery.',['R','tidymodels','ranger'],[image('blue-tarp-imagery.jpg','Satellite imagery used in blue tarp classification','Satellite imagery','I prepared imagery inputs for a supervised classification workflow that separates tarp and non-tarp signals.'),image('blue-tarp-roc.png','ROC curve for blue tarp model','Model discrimination','I evaluated model discrimination with ROC analysis rather than relying on a single summary score.'),image('blue-tarp-importance.png','Feature importance chart for blue tarp model','Feature importance','I inspected which spectral features had the strongest influence on the selected model.')],'An auditable pixel-classification pipeline for identifying blue tarp signals.','I compared models with stratified validation, tuning, threshold selection, and image-level estimates.','The independent holdout was from a different distribution, making domain shift visible.','The selected model reached 96.07% F1 on test data; the holdout result was kept visible as an honest generalization check.'),
P('ecommerce','data','UK E-Commerce Analysis','Transaction analysis for sales, customer, loyalty, and income patterns.',['Excel','Tableau'],[image('ecommerce-sales.png','UK e-commerce sales view','Sales view','I cleaned transaction records before building the sales analysis view.'),image('ecommerce-loyalty.png','UK e-commerce customer and loyalty view','Customer and loyalty view','I translated the cleaned records into a view for comparing customer and loyalty patterns.'),image('ecommerce-trends.png','UK e-commerce trends view','Trend view','I built the time-based visual layer for following sales trends.')],'A commercial analysis built from cleaned transaction data.','I prepared the records, carried out descriptive analysis, and built Tableau views around commercial questions.','The input had to be consistent before regional and customer comparisons could be trusted.','The final Tableau views connect cleaned transactions to sales, loyalty, regional, and income analysis.'),
P('admissions','data','Texas College Admissions Intelligence','A comparative decision aid for 15 universities.',['Power BI','Excel','Mapping'],[image('admissions-rate.png','University admission rates','Admission-rate comparison','I organized admissions research into one visual comparison.'),image('admissions-sat.png','SAT score comparison','Score comparison','I built a comparable SAT view from normalized public research.'),image('admissions-map.png','Map of universities','University map','I placed the university options geographically so location could be considered alongside the numbers.')],'A Power BI decision aid using public admissions research.','I consolidated admit rates and SAT/ACT ranges and categorized schools for easier comparison.','Public admissions information varies considerably in format and density.','The work replaced scattered research with a comparative view of rates, scores, geography, and fit categories.'),
P('mortality','data','Mortality Causes Analysis','Public-health data cleaning and analysis of cause-of-death trends over time.',['Excel','Power Query','CSV'],[image('mortality-hiv.png','HIV/AIDS mortality trend chart','HIV/AIDS trend','I created a cause-specific trend view from the cleaned public-health data.'),image('mortality-kidney.png','Chronic kidney disease mortality trend','Kidney disease trend','I built the time-series view for chronic kidney disease mortality.'),image('mortality-cleaning.png','Power Query cleaned data sheet','Data cleaning','I cleaned and prepared the source dataset in Power Query before analysis.')],'An analysis of annual mortality by cause.','I cleaned the dataset, carried out descriptive analysis, and built visual trend views.','The cause categories and years had to be made consistent before comparison.','The project turns raw mortality data into readable cause-of-death trends.'),
P('cleanup','data','SQL Cleanup Analytics','SQL aggregation and Tableau views for cleanup volume and regional ranking.',['SQL','Tableau'],[image('cleanup-state.png','Cleanup volume by state','State analysis','I aggregated cleanup data in SQL and built the Tableau state comparison.'),image('cleanup-zone.png','Cleanup volume by zone','Zone analysis','I created a regional view for comparing cleanup activity by zone.'),image('cleanup-query.png','SQL ranking query','Ranking query','I wrote the query that calculates and ranks total cleaned pounds by state.')],'SQL analysis followed by Tableau reporting.','I calculated cleanup types, active groups, trash patterns, and regional rankings before visualizing the results.','The analysis needed a consistent aggregation layer before the comparisons were visualized.','The result connects SQL rankings to readable Tableau views.'),
P('travel','data','Travel Planner System','Google Sheets system for itinerary, budget, reservations, and travel preparation.',['Google Sheets'],[image('travel-dashboard.png','Travel planner dashboard','Planning dashboard','I built a dashboard to bring the trip plan into one at-a-glance view.'),image('travel-expenses.png','Travel budget view','Budget tracking','I created a dedicated expense view for planning and tracking travel costs.'),image('travel-itinerary.png','Daily travel itinerary','Daily itinerary','I structured the day-by-day itinerary so reservations and activities can be followed in sequence.'),image('travel-accommodation.png','Accommodation research','Accommodation research','I organized accommodation options and decisions inside the planning system.'),image('travel-bucket-list.png','Travel bucket list','Bucket list','I added a bucket list view for places, activities, and trip priorities.'),image('travel-bucket-planner.png','Bucket list planner','Activity planning','I connected ideas to a planning view for deciding what fits the trip.'),image('travel-flight.png','Flight research','Flight research','I structured flight options for comparison before booking.'),image('travel-packing.png','Packing list','Packing list','I built a packing checklist to support pre-trip preparation.'),image('travel-shopping.png','Pre-trip shopping list','Shopping list','I added a shopping list for items needed before departure.'),image('travel-reservations.png','Reservation tracker','Reservation tracker','I created a reservation tracker for keeping bookings together.'),image('travel-road-trip.png','Road trip planner','Road trip planning','I included a road-trip planning view for routes and stops.'),image('travel-tb.png','Travel planning view','Trip planning','I added a supporting trip-planning sheet for organizing the wider itinerary.'),image('travel-calendar.png','Travel calendar','Travel calendar','I connected the trip schedule to a calendar view.'),image('travel-dashboard.png','Travel planner dashboard','Planning dashboard','I built the summary view that brings the trip plan into one place.')],'A multi-sheet travel planning system.','I organized a connected workbook covering dashboard, budget, itinerary, flights, accommodation, packing, reservations, and research.','The information had to remain easy to navigate across several planning needs.','The result is a complete, usable travel planning workspace.'),
P('google-calendar','data','Hotel Booking & Room Management System','From guest reservations to room availability and daily income: a connected hotel operations workspace.',['Google Sheets','Google Forms','Apps Script'],[
image('calendar-183.png','Hotel calendar showing booked rooms, guest counts and daily income','The daily operations view','I built a calendar that brings booked rooms, guest totals, and daily income together for the selected date range.'),
image('calendar-220.png','Availability grid for 12 hotel rooms with booked and available dates','Room availability at a glance','I created a colour-coded availability grid across 12 rooms, with check-out dates treated as available for the next stay.'),
image('calendar-181.png','Hotel booking form with room selection','Reservation intake','I structured the booking form around room selection, covering standard rooms, deluxe apartments, and presidential suites.'),
image('calendar-182.png','Hotel booking form collecting stay dates and guest details','Guest and stay details','The form captures stay dates, customer details, and guest counts in a consistent reservation record.'),
image('calendar-232.png','Date range selector and reservation records','One date range, connected views','I connected the selected reporting window to the reservation records used by the calendar and availability views.'),
image('calendar-230.png','Hotel booking workbook instructions','Designed for day-to-day handover','I documented each worksheet, the date-selection controls, and the maintenance steps needed to keep the workbook usable.')
],'A hotel booking and room management system connecting Google Forms reservation intake with a Google Sheets operations workspace. Staff can review stays, check availability across 12 rooms, and see booked-room counts, guest totals, and daily income in one calendar.',
'Hotel reservations need to be visible across room allocation, stay dates, and daily operations. I connected form submissions, room pricing, a shared date range, a booking calendar, and a colour-coded room availability grid to support those decisions.',
'The calendar and availability grid need consistent dates and stay boundaries. I treated check-out dates as available and documented the refresh controls and manual duplicate-record cleanup needed to keep the views accurate.',
'The result is a connected hotel operations tool: structured booking intake, room-by-room availability, and a daily view of guests and income, with instructions for staff handover.'),
P('family-feud','full-stack','Family Feud Conference Game','A browser-based conference game built with HTML and JavaScript.',['HTML','JavaScript'],[{embed:'assets/games/family-feud-conference-game.html',alt:'Working Family Feud conference game interface',label:'Conference game interface',copy:'This is the actual runnable conference game interface. I built the self-contained HTML and JavaScript interaction for gameplay, answer reveal, and live event use.'}],'A standalone browser game for a conference setting.','I built the HTML and JavaScript interaction layer for game play and answer reveal.','The experience had to work as a self-contained browser application in a live event setting.','The result is a usable browser-based conference game.')
];

// Extend the shared catalogue before cards, numbering, and navigation are built.
if (typeof portfolioUpdates !== 'undefined') {
  projects.forEach((p, index) => { if (portfolioUpdates[p.id]) projects[index] = { ...p, ...portfolioUpdates[p.id] }; });
  projects.push(...portfolioAdditions);
}
// Shared order also determines the order within each category filter.
const projectOrder = ['fixmylga', 'dashboard-showcase', 'operations-hub', 'travel', 'backorder', 'ecommerce', 'google-calendar'];
projects.sort((a, b) => {
  const rank = id => projectOrder.includes(id) ? projectOrder.indexOf(id) : projectOrder.length;
  return rank(a.id) - rank(b.id);
});
// Preserve the first nine; alternate the remaining categories without random reshuffles.
const featuredProjects = projects.slice(0, 9);
const remainingData = projects.slice(9).filter(p => p.category === 'data');
const remainingFullStack = projects.slice(9).filter(p => p.category === 'full-stack');
const mixedProjects = [];
while (remainingData.length || remainingFullStack.length) {
  if (remainingData.length) mixedProjects.push(remainingData.shift());
  if (remainingFullStack.length) mixedProjects.push(remainingFullStack.shift());
}
projects.splice(0, projects.length, ...featuredProjects, ...mixedProjects);
const travelProject = projects.find(p => p.id === 'travel');
Object.assign(travelProject, {
  title: 'Travel Planner System',
  summary: 'A connected Google Sheets workspace for trip planning, budgets, itineraries, reservations, and pre-trip preparation.',
  stack: ['Google Sheets', 'Spreadsheet Design', 'Budget Tracking', 'Itinerary Planning'],
  overview: 'I built a multi-sheet travel planning system that brings the practical details of a trip into one workspace. A dashboard connects the budget, day-by-day itinerary, transport research, accommodation, reservations, and preparation lists so the traveller can move from early ideas to a usable plan.',
  solution: 'Trip details are often spread across separate notes, booking records, and budgets. I organised the workbook around the decisions a traveller needs to make: compare flights and accommodation, choose activities, plan each day, track expenses, and keep reservations together. Dedicated packing, shopping, road-trip, and calendar views support preparation and the trip itself.',
  challenges: 'The workbook needed to cover several planning tasks without making everyday use difficult. I separated research, confirmed reservations, daily activities, and spending into dedicated views while keeping the dashboard as a common starting point. The itinerary and calendar provide complementary ways to review the schedule.',
  impact: 'The result is a complete travel planning workspace with 13 distinct views. The screenshots below follow the workflow from the dashboard and budget through the itinerary, research, reservations, and final preparation. The live workbook lets visitors explore the system directly.'
});
travelProject.visuals = travelProject.visuals.filter((v, i, list) => list.findIndex(other => other.src === v.src) === i);
// Add each project's live URL here when it is available.
const projectLiveUrls = {
  'fleet-management': 'https://docs.google.com/spreadsheets/d/1u8IMAeqs2Jh5qezia4S3tSL_AtU385bgMgLXa3QujK0/edit?usp=sharing',
  'operations-hub': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'automated-receipt-generator': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'internal-memo-generator': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'payroll-salary-automation': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'sales-commission-automation': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'bank-transfer-instruction-generator': 'https://oberatechoperations-vtyqicqwsxqdu5tm7ayzcm.streamlit.app/',
  'fixmylga': 'https://odefe.github.io/FIxMyLGA/',
  'backorder': 'https://backorderreporttool.streamlit.app',
  'blue-tarp': null,
  'ecommerce': '',
  'admissions': '',
  'mortality': null,
  'cleanup': '',
  'travel': 'https://docs.google.com/spreadsheets/d/1p9yX_3ihger632HbafQDnyoVMW0Ph15BVBEoNAzrMUw/edit?usp=sharing',
  'google-calendar': 'https://docs.google.com/spreadsheets/d/1Rl44JwjQcFmQe-lgrtwyjKylGVxmf417CHzUgswVdGA/edit?usp=sharing',
  'family-feud': 'assets/games/family-feud-conference-game.html',
};
function renderLiveSite(p) {
  const container = document.querySelector('#detail-live-site');
  const url = Object.hasOwn(p, 'liveUrl') ? p.liveUrl : projectLiveUrls[p.id];
  container.hidden = !url;
  if (container.hidden) { container.replaceChildren(); return; }
  const label = p.id === 'family-feud' ? 'Play game in a new tab' : p.id === 'google-calendar' ? 'Explore booking system' : 'View live site';
  container.innerHTML = `<a class="button button-primary" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">&#8599;</span><span class="sr-only"> (opens in a new tab)</span></a>`;
}
const byId = Object.fromEntries(projects.map((p, i) => [p.id, { ...p, number: String(i + 1).padStart(2, '0') }]));
function media(visual) { return visual.src ? `<figure class="project-figure"><img src="assets/images/projects/${visual.src}" alt="${visual.alt}" loading="lazy"><figcaption>${visual.label}</figcaption><p>${visual.copy}</p></figure>` : visual.embed ? `<figure class="project-figure game-evidence"><iframe src="${visual.embed}" title="${visual.alt}" loading="lazy"></iframe><figcaption>${visual.label}</figcaption><p>${visual.copy}</p></figure>` : `<figure class="project-figure source-evidence"><pre><code>${visual.code.replace(/</g,'&lt;')}</code></pre><figcaption>${visual.label}</figcaption><p>${visual.copy}</p></figure>`; }
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]); }
function walkthroughContent(block) {
  if (block.list) return `<ul class="walkthrough-list${block.list.length > 5 ? ' walkthrough-list-columns' : ''}">${block.list.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
  if (block.steps) return `<ol class="walkthrough-steps">${block.steps.map(step => `<li><strong>${escapeHTML(step.label)}</strong><p>${escapeHTML(step.copy)}</p></li>`).join('')}</ol>`;
  if (block.quote) return `<blockquote>${escapeHTML(block.quote)}</blockquote>`;
  return `<p>${escapeHTML(block.paragraph)}</p>`;
}
function fixmylgaWalkthrough(p) {
  const chapters = [['01', 'Homepage'], ['04', 'Locations'], ['06', 'Contributions'], ['08', 'Administration'], ['10', 'Reporting'], ['12', 'Issue tracking']];
  return `<section class="fixmylga-walkthrough screenshot-walkthrough" aria-labelledby="walkthrough-heading">
    <header class="walkthrough-heading"><div><p class="eyebrow">Implementation walkthrough</p><h2 id="walkthrough-heading">Screenshots &amp; What I Built</h2></div><p class="walkthrough-count">${p.visuals.length} screens</p></header>
    <p class="walkthrough-intro">From the first report to resolution: the public, contributor, and administrator workflows I designed and built.</p>
    <nav class="walkthrough-jump" aria-label="Screenshot walkthrough sections">${chapters.map(([number, label]) => `<a href="#fixmylga-screen-${number}"><span>${number}</span> ${label}</a>`).join('')}</nav>
    <div class="walkthrough-screens">${p.visuals.map((visual, index) => {
      const number = String(index + 1).padStart(2, '0');
      const source = `assets/images/projects/${visual.src}`;
      return `<figure class="walkthrough-screen" id="fixmylga-screen-${number}" aria-labelledby="fixmylga-title-${number}">
        <div class="walkthrough-screen-heading"><h3 id="fixmylga-title-${number}"><span>${number}</span>${escapeHTML(visual.label)}</h3><a class="walkthrough-full-size" href="${source}" target="_blank" rel="noopener" aria-label="View full-size screenshot ${number}: ${escapeHTML(visual.label)} (opens in a new tab)">View full size <span aria-hidden="true">↗</span></a></div>
        <img src="${source}" alt="${escapeHTML(visual.alt)}" width="${visual.width}" height="${visual.height}" loading="lazy" decoding="async">
        <figcaption class="walkthrough-copy">${visual.content.map(walkthroughContent).join('')}</figcaption>
      </figure>`;
    }).join('')}</div>
  </section>`;
}
function caseStudyText(value) { return escapeHTML(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
function caseStudyBlocks(blocks) {
  return blocks.map(block => {
    if (block.list) return `<ul>${block.list.map(item => `<li>${caseStudyText(item)}</li>`).join('')}</ul>`;
    if (block.lifecycle) return `<p class="fixmylga-lifecycle"><strong>${escapeHTML(block.lifecycle)}</strong></p>`;
    return `<p>${caseStudyText(block.paragraph)}</p>`;
  }).join('');
}
function fixmylgaSections(p) {
  const navigation = `<nav class="fixmylga-case-nav" aria-label="Case study sections">${fixmylgaCaseStudy.map(section => `<a href="#fixmylga-${section.id}">${escapeHTML(section.nav)}</a>`).join('')}<a href="#walkthrough-heading">Screenshots</a></nav>`;
  const content = fixmylgaCaseStudy.map((section, index) => {
    let body;
    if (section.groups) {
      body = `<div class="fixmylga-stack">${section.groups.map((group, groupIndex) => `<section class="fixmylga-stack-group${group.features ? ' fixmylga-stack-features' : ''}" aria-labelledby="fixmylga-stack-${groupIndex}"><h3 id="fixmylga-stack-${groupIndex}">${escapeHTML(group.title)}</h3><ul>${group.items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>`).join('')}</div>`;
    } else if (section.numbered) {
      body = `<ol class="fixmylga-challenges" role="list">${section.subsections.map((subsection, subsectionIndex) => `<li><h3><span>${String(subsectionIndex + 1).padStart(2, '0')}</span>${escapeHTML(subsection.title)}</h3>${caseStudyBlocks(subsection.blocks)}</li>`).join('')}</ol>`;
    } else if (section.subsections) {
      body = section.subsections.map((subsection, subsectionIndex) => `<section class="fixmylga-subsection" aria-labelledby="fixmylga-${section.id}-${subsectionIndex}"><h3 id="fixmylga-${section.id}-${subsectionIndex}">${escapeHTML(subsection.title)}</h3>${caseStudyBlocks(subsection.blocks)}</section>`).join('');
    } else {
      body = caseStudyBlocks(section.blocks);
    }
    return `<section class="presentation-section fixmylga-rich-section${section.id === 'results' ? ' presentation-impact' : ''}" id="fixmylga-${section.id}" aria-labelledby="fixmylga-${section.id}-heading"><div class="presentation-label"><span>${String(index + 1).padStart(2, '0')}</span><h2 id="fixmylga-${section.id}-heading">${escapeHTML(section.title)}</h2></div><div class="fixmylga-section-body">${body}</div></section>`;
  }).join('');
  return navigation + content + fixmylgaWalkthrough(p);
}
function operationsWalkthrough(p) {
  return `<section class="operations-walkthrough screenshot-walkthrough" aria-labelledby="operations-walkthrough-heading">
    <header class="walkthrough-heading"><div><p class="eyebrow">The implementation</p><h2 id="operations-walkthrough-heading">Screenshots &amp; What I Built</h2></div><p class="walkthrough-count">${p.visuals.length} ${p.visuals.length === 1 ? 'screen' : 'screens'}</p></header>
    <p class="walkthrough-intro">${escapeHTML(p.automation.galleryIntro)}</p>
    <div class="walkthrough-screens">${p.visuals.map((visual, index) => {
        const number = String(index + 1).padStart(2, '0');
        const source = `assets/images/projects/${visual.src}`;
        return `<figure class="walkthrough-screen${visual.height > visual.width ? ' operations-document-screen' : ''}" id="operations-screen-${number}" aria-labelledby="operations-title-${number}">
          <div class="walkthrough-screen-heading"><h3 id="operations-title-${number}"><span>${number}</span>${escapeHTML(visual.label)}</h3><a class="walkthrough-full-size" href="${source}" target="_blank" rel="noopener" aria-label="View full-size screenshot ${number}: ${escapeHTML(visual.label)} (opens in a new tab)">View full size <span aria-hidden="true">↗</span></a></div>
          <img src="${source}" alt="${escapeHTML(visual.alt)}" width="${visual.width}" height="${visual.height}" loading="lazy" decoding="async">
          <figcaption class="walkthrough-copy">${visual.content.map(walkthroughContent).join('')}</figcaption>
        </figure>`;
      }).join('')}</div>
  </section>`;
}
function operationsCollection() {
  return `<section class="operations-collection" aria-labelledby="operations-collection-heading"><header><p class="eyebrow">Explore the individual projects</p><h2 id="operations-collection-heading">Five tools. <em>Each with a purpose.</em></h2><p>Choose a workflow to see the problem it solves, how it works, and the documents it produces.</p></header><div class="operations-project-links">${operationsProjects.filter(project => project.automation.kind !== 'hub').map((project, index) => `<a href="project.html?id=${project.id}"><span class="operations-link-number">${String(index + 1).padStart(2, '0')}</span><span><strong>${escapeHTML(project.title)}</strong><small>${escapeHTML(project.automation.outcome)}</small></span><span class="operations-link-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
}
function operationsSections(p) {
  const automation = p.automation;
  const isHub = automation.kind === 'hub';
  const output = p.visuals[automation.output];
  const outputSource = `assets/images/projects/${output.src}`;
  const narrative = [['Project overview', p.overview], ['Problem & solution', p.solution], ['Key challenges', p.challenges], ['Results & impact', p.impact]];
  return `<nav class="operations-case-nav" aria-label="Business automation project navigation"><a href="${isHub ? 'projects.html?filter=full-stack' : 'project.html?id=operations-hub'}">← ${isHub ? 'Full Stack projects' : 'Operations Hub overview'}</a><a href="#operations-walkthrough-heading">View ${p.visuals.length} ${p.visuals.length === 1 ? 'screenshot' : 'screenshots'} <span aria-hidden="true">↓</span></a></nav>
    <section class="operations-feature${isHub ? ' operations-feature-hub' : ''}" aria-labelledby="operations-feature-heading">
      <div class="operations-feature-copy"><p class="eyebrow">${escapeHTML(automation.category)}</p><h2 id="operations-feature-heading">${escapeHTML(automation.headline)}</h2><p>${escapeHTML(automation.benefit)}</p><ul class="operations-benefits">${automation.benefits.map(benefit => `<li>${escapeHTML(benefit)}</li>`).join('')}</ul></div>
      <figure class="operations-output"><div class="operations-output-heading"><span>${isHub ? 'Workspace' : 'The finished output'}</span><span aria-hidden="true">↗</span></div><a href="${outputSource}" target="_blank" rel="noopener" aria-label="View full-size ${escapeHTML(output.label)} (opens in a new tab)"><img src="${outputSource}" alt="${escapeHTML(output.alt)}" width="${output.width}" height="${output.height}" decoding="async"></a><figcaption>${escapeHTML(automation.outputLabel)}<span>${isHub ? 'A home for the tools' : 'Created from the captured information'}</span></figcaption></figure>
    </section>
    ${isHub ? operationsCollection() : ''}
    <section class="operations-flow" aria-labelledby="operations-flow-heading"><div class="operations-section-heading"><p class="eyebrow">How it works</p><h2 id="operations-flow-heading">${isHub ? 'A focused path through the work.' : 'Input to output, connected.'}</h2></div><ol>${automation.steps.map(([title, copy], index) => `<li><span class="operations-step-number">0${index + 1}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(copy)}</p>${index < 2 ? '<span class="operations-step-arrow" aria-hidden="true">→</span>' : ''}</li>`).join('')}</ol></section>
    <div class="operations-narrative">${narrative.map(([title, copy], index) => `<section aria-labelledby="operations-narrative-${index}"><p class="eyebrow">0${index + 1}</p><h2 id="operations-narrative-${index}">${title}</h2><p>${escapeHTML(copy)}</p></section>`).join('')}</div>
    <section class="operations-tech" aria-labelledby="operations-tech-heading"><h2 id="operations-tech-heading">Built with</h2><ul class="tech-list">${p.stack.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>
    ${operationsWalkthrough(p)}
    ${isHub ? '' : '<aside class="operations-return"><div><p class="eyebrow">Part of the Operations Hub</p><p>Explore the other business automation projects.</p></div><a class="text-link" href="project.html?id=operations-hub">View the collection <span aria-hidden="true">↗</span></a></aside>'}`;
}
function hotelHighlights() {
  return `<section class="hotel-highlights" aria-label="Hotel system capabilities"><div><span>01 / Reservations</span><h2>A clear start for every stay.</h2><p>Capture the room, stay dates, and guest details through one booking form.</p></div><div><span>02 / Availability</span><h2>12 rooms. One shared view.</h2><p>See booked and available rooms across the selected dates.</p></div><div><span>03 / Daily operations</span><h2>Know what the day holds.</h2><p>Review booked rooms, guest counts, and daily income in the calendar.</p></div></section>`;
}
function sections(p) { if (p.caseStudy) return p.caseStudy; if (p.id === 'fixmylga') return fixmylgaSections(p); if (p.automation) return operationsSections(p); return `${p.id === 'google-calendar' ? hotelHighlights() : ''}<section class="presentation-section"><div class="presentation-label"><span>01</span><h2>Project Overview</h2></div><p>${p.overview}</p></section><section class="presentation-section"><div class="presentation-label"><span>02</span><h2>Tech Stack</h2></div><ul class="tech-list">${p.stack.map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="presentation-section"><div class="presentation-label"><span>03</span><h2>Problem Statement &amp; Solution</h2></div><p>${p.solution}</p></section><section class="presentation-section"><div class="presentation-label"><span>04</span><h2>Key Challenges</h2></div><p>${p.challenges}</p></section><section class="presentation-section presentation-impact"><div class="presentation-label"><span>05</span><h2>Results &amp; Impact</h2></div><p>${p.impact}</p></section><div class="project-gallery">${p.visuals.map(media).join('')}</div>`; }
function projectPreview(p) {
  const first = p.visuals[0];
  return first.src ? `<img src="assets/images/projects/${first.src}" alt="${escapeHTML(first.alt)}" loading="lazy">` : `<span class="project-code-card">${escapeHTML(first.label)}</span>`;
}
const grid = document.querySelector('#project-grid');
if (grid) grid.innerHTML = projects.map(p => `<article class="project-card project reveal" data-category="${p.category}"><a class="project-image" href="project.html?id=${p.id}" aria-label="View ${escapeHTML(p.title)}">${projectPreview(p)}</a><div class="project-card-body"><span class="category">${p.category === 'data' ? 'Data' : 'Full Stack'}</span><h2><a href="project.html?id=${p.id}">${escapeHTML(p.title)}</a></h2><p>${escapeHTML(p.summary)}</p><ul class="tag-list">${p.stack.slice(0,3).map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ul><a class="card-link" href="project.html?id=${p.id}">View Project <span aria-hidden="true">&#8599;</span></a></div></article>`).join('');
const filters = [...document.querySelectorAll('.filter')];
function filterProjects(kind) {
  let count = 0;
  document.querySelectorAll('.project').forEach(card => {
    card.hidden = kind !== 'all' && card.dataset.category !== kind;
    if (!card.hidden) count++;
  });
  filters.forEach(button => { const active = button.dataset.filter === kind; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', active); });
  const status = document.querySelector('#filter-status');
  if (status) status.textContent = `Showing ${count} ${kind === 'all' ? '' : kind === 'data' ? 'Data ' : 'Full Stack '}projects.`;
}
filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
if (filters.length) { const requested = new URLSearchParams(location.search).get('filter'); filterProjects(filters.some(button => button.dataset.filter === requested) ? requested : 'all'); }
const detail = document.querySelector('[data-project-detail]');
if(detail){const id=new URLSearchParams(location.search).get('id');const p=byId[id]||projects[0];detail.classList.toggle('case-study-fixmylga',p.id==='fixmylga');detail.classList.toggle('case-study-operations',Boolean(p.automation));document.title=`${p.title} | Emmanuel Oberabor`;document.querySelector('#detail-category').textContent=p.category==='data'?'Data':'Full Stack';document.querySelector('#detail-title').textContent=p.title;document.querySelector('#detail-summary').textContent=p.summary;renderLiveSite(p);renderDownloads(p);document.querySelector('#detail-number').textContent=`PROJECT / ${p.number}`;document.querySelector('#detail-content').innerHTML=sections(p);detail.classList.toggle('case-study-expanded',Boolean(p.caseStudy)||['mortality','machine-hourly-rate'].includes(p.id));setupLibrary();const i=projects.findIndex(project=>project.id===p.id);const previous=projects[(i-1+projects.length)%projects.length],next=projects[(i+1)%projects.length];document.querySelector('#detail-previous').href=`project.html?id=${previous.id}`;document.querySelector('#detail-previous').textContent=`<- ${previous.title}`;document.querySelector('#detail-next').href=`project.html?id=${next.id}`;document.querySelector('#detail-next').textContent=`${next.title} ->`;}

function renderDownloads(p) {
  if (!p.downloads?.length) return;
  const container = document.createElement('div');
  container.className = 'case-downloads';
  container.innerHTML = p.downloads.map(file => `<a class="button button-primary" href="${escapeHTML(file.url)}" ${file.view ? 'target="_blank" rel="noopener"' : 'download'}>${escapeHTML(file.label)}${file.view ? '<span class="sr-only"> (new tab)</span>' : ''}</a>`).join('');
  document.querySelector('#detail-live-site').after(container);
}
function setupLibrary() {
  const search = document.querySelector('#library-search');
  if (!search) return;
  const cards = [...document.querySelectorAll('.library-card')];
  const buttons = [...document.querySelectorAll('[data-library-group]')];
  let group = 'all';
  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    cards.forEach(card => { card.hidden = (group !== 'all' && card.dataset.libraryCategory !== group) || !card.textContent.toLowerCase().includes(query); if (!card.hidden) count++; });
    document.querySelector('#library-status').textContent = count ? `Showing ${count} of ${cards.length} files.` : 'No matching files. Try a different search or category.';
    buttons.forEach(button => button.setAttribute('aria-pressed', button.dataset.libraryGroup === group));
  }
  search.addEventListener('input', filter);
  buttons.forEach(button => button.addEventListener('click', () => { group = button.dataset.libraryGroup; filter(); }));
  filter();
}
