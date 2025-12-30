
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const RAW_BASIC_TEXT = `
# Software Analysis & Design (SAD) - 100 Questions Each Type with Explanations

---

## SECTION 1: FILL-UPS (100 Questions with Explanations)

### 1-20: SDLC Fundamentals

1. **SDLC stands for ________________.**
   - Answer: Systems Development Life Cycle
   - Explanation: SDLC is the industry-standard framework for building software systems systematically, ensuring quality and reducing risks.

2. **SDLC provides a comprehensive ________________ that guides development teams through every stage of creating software solutions.**
   - Answer: framework/roadmap
   - Explanation: SDLC acts as a structured roadmap with defined phases, ensuring nothing is overlooked and teams know what to expect at each stage.

3. **The core SDLC phases are Planning, ________________, Design, Development, Testing, Deployment, and Maintenance.**
   - Answer: Analysis
   - Explanation: Analysis phase follows planning and involves gathering and studying requirements to understand what needs to be built.

4. **________________ phase helps identify potential problems early in the development process.**
   - Answer: Planning
   - Explanation: Early problem identification in the Planning phase prevents expensive failures later and allows proactive risk management.

5. **SDLC establishes ________________ between developers, users, and management.**
   - Answer: clear communication/common understanding
   - Explanation: Clear communication eliminates misunderstandings and ensures all stakeholders have aligned expectations about deliverables.

6. **The ________________ phase ensures the final product meets quality standards and user expectations.**
   - Answer: Testing
   - Explanation: Testing verifies functionality, identifies defects, and confirms the system meets defined requirements before deployment.

7. **________________ prevents cost overruns through careful planning and predictable outcomes.**
   - Answer: SDLC
   - Explanation: Structured planning in SDLC allocates resources efficiently, preventing scope creep and budget overruns.

8. **Without SDLC, software projects frequently fail due to ________________ about requirements.**
   - Answer: misunderstandings
   - Explanation: Lack of clear requirements documentation leads to building wrong features, resulting in project failure and rework.

9. **In the Development phase, designers convert specifications into actual ________________.**
   - Answer: code/software
   - Explanation: Development phase transforms design documents into functioning software through programming and implementation.

10. **The ________________ phase involves ongoing support and updates after deployment.**
    - Answer: Maintenance
    - Explanation: Post-deployment maintenance includes bug fixes, performance optimization, and enhancements based on user feedback.

11. **SDLC reduces project ________________ by identifying problems early.**
    - Answer: risks
    - Explanation: Early identification of issues in planning and analysis phases prevents them from becoming expensive failures.

12. **The ________________ phase is where designs transform into functioning software.**
    - Answer: Development
    - Explanation: Development is the practical implementation phase where architects and designers' plans become actual executable code.

13. **SDLC eliminates ________________ among team members.**
    - Answer: confusion
    - Explanation: Defined processes and documentation ensure all team members understand their roles, responsibilities, and project objectives.

14. **Built-in ________________ and testing phases ensure the final product meets quality standards.**
    - Answer: checkpoints
    - Explanation: Checkpoints throughout SDLC phases allow review and validation at each stage, preventing defects from advancing.

15. **Poor requirements are responsible for over ________________% of project failures.**
    - Answer: 70
    - Explanation: Studies consistently show that over 70% of project failures stem from inadequate or unclear requirements definition.

16. **SDLC helps organizations allocate ________________ efficiently.**
    - Answer: resources
    - Explanation: Structured planning allows organizations to assign budget, staff, and tools optimally across project phases.

17. **The ________________ phase involves releasing software to the production environment.**
    - Answer: Deployment
    - Explanation: Deployment includes data migration, user training, and transitioning the system from development to live operations.

18. **SDLC is a ________________, systematic approach used to plan, design, develop, test and maintain software systems.**
    - Answer: structured
    - Explanation: Structure means following defined phases, documentation standards, and best practices consistently across projects.

19. **A roadmap in SDLC ensures software is built ________________ and meets user requirements precisely.**
    - Answer: efficiently
    - Explanation: Efficiency comes from avoiding rework, following best practices, and maintaining focus on business objectives.

20. **Uncontrolled ________________ is a major cause of software project failure without SDLC.**
    - Answer: scope creep
    - Explanation: Without SDLC controls, projects often expand beyond original objectives, consuming budget and missing deadlines.

### 21-40: Information Systems Categories

21. **________________ (TPS) handle daily operational activities such as sales processing and billing.**
    - Answer: Transaction Processing Systems
    - Explanation: TPS are the backbone systems that handle routine, high-volume daily transactions critical to business operations.

22. **Management Information Systems (MIS) generate ________________ that help middle managers monitor business performance.**
    - Answer: reports/summaries
    - Explanation: MIS aggregate data from TPS and present it as meaningful reports that help managers track KPIs and trends.

23. **Decision Support Systems (DSS) provide ________________ tools that support complex decision-making.**
    - Answer: analytical
    - Explanation: DSS offer what-if analysis, forecasting, and simulation capabilities to evaluate alternatives before deciding.

24. **Executive Information Systems (EIS) deliver ________________ strategic information to top management.**
    - Answer: high-level
    - Explanation: EIS provide executive dashboards with summarized strategic data rather than operational details.

25. **________________ Systems use artificial intelligence to replicate human expertise in specific domains.**
    - Answer: Expert
    - Explanation: Expert Systems encode domain knowledge as rules, allowing them to provide recommendations like human specialists.

26. **TPS systems process ________________ of routine transactions quickly and accurately.**
    - Answer: high volumes
    - Explanation: TPS must handle thousands of transactions daily (like ATM withdrawals, credit card payments) reliably.

27. **MIS helps managers track ________________ (Key Performance Indicators).**
    - Answer: KPIs
    - Explanation: KPIs like sales, revenue, customer satisfaction are critical metrics managers use to evaluate business performance.

28. **DSS help managers evaluate ________________ and perform what-if analyses.**
    - Answer: alternatives
    - Explanation: DSS allow exploration of different scenarios (e.g., "what if we increase marketing spend by 20%?") before committing.

29. **EIS enables executives to monitor through ________________ and visualizations.**
    - Answer: dashboards
    - Explanation: Executive dashboards present critical metrics visually, allowing quick assessment of business health.

30. **Expert Systems provide ________________ and solutions based on encoded knowledge.**
    - Answer: recommendations/diagnoses
    - Explanation: Expert Systems can diagnose problems or recommend actions by applying encoded rules similar to human experts.

31. **TPS handles ________________ such as ATM withdrawals and fund transfers.**
    - Answer: banking transactions
    - Explanation: Banking TPS must ensure 100% accuracy and reliability for financial transactions 24/7.

32. **MIS transforms raw ________________ into meaningful reports.**
    - Answer: transactional data
    - Explanation: MIS takes data from TPS transactions and aggregates/summarizes it for managerial decision-making.

33. **DSS helps managers forecast ________________ and evaluate alternatives.**
    - Answer: outcomes
    - Explanation: DSS forecasting tools predict future outcomes based on different decisions, reducing uncertainty.

34. **Office Automation Systems streamline routine ________________ tasks.**
    - Answer: administrative
    - Explanation: Office Automation automates paperwork, scheduling, and document management to increase efficiency.

35. **EIS provides executives with ________________ down capability from summaries to details.**
    - Answer: drill-down
    - Explanation: Drill-down allows executives to click on summary data to see underlying details and root causes.

36. **TPS maintains ________________ properties (Atomicity, Consistency, Isolation, Durability).**
    - Answer: ACID
    - Explanation: ACID ensures transactions are reliable—they complete fully, maintain data consistency, and are never lost.

37. **MIS generates periodic reports and ________________ reports.**
    - Answer: exception
    - Explanation: Exception reports alert managers to unusual events (e.g., sales below threshold) requiring attention.

38. **DSS combines data from multiple ________________ with sophisticated algorithms.**
    - Answer: sources
    - Explanation: DSS integrate data from databases, market research, industry data to provide holistic analysis.

39. **Expert Systems use ________________ engines to apply rules and reasoning.**
    - Answer: inference
    - Explanation: Inference engines process business rules to draw conclusions, similar to logical reasoning by humans.

40. **TPS provides ________________ for all transactions.**
    - Answer: audit trails/logging
    - Explanation: Audit trails record every transaction with timestamps and user IDs for security, compliance, and troubleshooting.

### 41-100: Analysis, Design & Architecture

41. **System Analysis involves gathering and understanding business ________________.**
    - Answer: requirements
    - Explanation: The primary goal of analysis is to understand what the business needs before building a solution.

42. **________________ Elicitation includes interviews, surveys, and observation.**
    - Answer: Requirement
    - Explanation: Elicitation techniques are used to gather detailed requirements from stakeholders.

43. **A ________________ of Concept (POC) is a small-scale project to test feasibility.**
    - Answer: Proof
    - Explanation: POCs validate technical or business feasibility before full-scale development begins.

44. **Functional specifications describe ________________ the system should do.**
    - Answer: what
    - Explanation: Functional specs define behaviors and features, whereas design docs define 'how' it works.

45. **________________ requirements describe constraints like performance and security.**
    - Answer: Non-functional
    - Explanation: Non-functional requirements (NFRs) define system attributes such as scalability, reliability, and security.

46. **Data Flow Diagrams (DFD) visualize the movement of ________________ through a system.**
    - Answer: data
    - Explanation: DFDs map how data enters, flows, is processed, and is stored within a system.

47. **A use case diagram depicts interactions between users (actors) and the ________________.**
    - Answer: system
    - Explanation: Use case diagrams show the relationship and interactions between external actors and system use cases.

48. **________________ design focuses on the look and feel of the software interface.**
    - Answer: UI (User Interface)
    - Explanation: UI design deals with the visual elements and layout that users interact with.

49. **UX design focuses on the overall ________________ and satisfaction of the user.**
    - Answer: experience
    - Explanation: UX (User Experience) design ensures the product is usable, enjoyable, and accessible.

50. **________________ Architecture divides software into presentation, logic, and data tiers.**
    - Answer: Layered / N-Tier
    - Explanation: Layered architecture organizes code into separate layers to improve maintainability and separation of concerns.

51. **________________ architecture breaks applications into small, independent services.**
    - Answer: Microservices
    - Explanation: Microservices architecture structures an application as a collection of loosely coupled services.

52. **Client-Server architecture distributes tasks between service providers and service ________________.**
    - Answer: requesters/consumers
    - Explanation: Clients request services, and servers provide resources or processing in this model.

53. **Cohesion refers to how closely related the responsibilities of a single ________________ are.**
    - Answer: module/component
    - Explanation: High cohesion is desirable as it means a component focuses on a specific task.

54. **________________ refers to the degree of interdependence between software modules.**
    - Answer: Coupling
    - Explanation: Low coupling is desirable to reduce dependencies and make maintenance easier.

55. **________________ patterns are reusable solutions to common software design problems.**
    - Answer: Design
    - Explanation: Patterns like Singleton, Factory, and Observer provide standard solutions to recurring issues.

56. **The ________________ pattern ensures a class has only one instance.**
    - Answer: Singleton
    - Explanation: Singleton pattern restricts class instantiation to a single object.

57. **MVC stands for Model, ________________, Controller.**
    - Answer: View
    - Explanation: MVC is a design pattern that separates internal representation from user interface.

58. **In MVC, the ________________ handles the business logic and data.**
    - Answer: Model
    - Explanation: The Model component represents the data and the rules governing access to updates.

59. **In MVC, the ________________ manages user input and updates the model.**
    - Answer: Controller
    - Explanation: The Controller acts as an intermediary, processing input and converting it to commands for the model or view.

60. **________________ testing verifies that individual units of code work correctly.**
    - Answer: Unit
    - Explanation: Unit testing isolates the smallest parts of the program to ensure they function as intended.

61. **Integration testing checks how different ________________ work together.**
    - Answer: modules/components
    - Explanation: Integration testing ensures that combined units interact correctly via their interfaces.

62. **________________ testing treats the system as an opaque box, testing inputs and outputs.**
    - Answer: Black Box
    - Explanation: Black Box testing focuses on functionality without looking at internal code structure.

63. **White Box testing requires knowledge of the internal ________________ structure.**
    - Answer: code
    - Explanation: White Box testing involves testing internal structures or workings of an application.

64. **________________ Acceptance Testing (UAT) is the final phase before rollout.**
    - Answer: User
    - Explanation: UAT allows actual users to validate the software against their business requirements.

65. **Regression testing ensures new changes haven't broken ________________ functionality.**
    - Answer: existing
    - Explanation: Regression testing re-runs tests to confirm that recent code changes haven't adversely affected existing features.

66. **________________ testing evaluates system performance under load.**
    - Answer: Load/Performance
    - Explanation: Load testing determines how the system behaves under expected and peak usage conditions.

67. **Automated testing uses ________________ tools to execute tests.**
    - Answer: software/scripted
    - Explanation: Automation tools run tests faster and more reliably than manual testing.

68. **________________ Integration (CI) merges code changes frequently into a central repository.**
    - Answer: Continuous
    - Explanation: CI automates the integration of code changes from multiple contributors.

69. **Continuous ________________ (CD) automates the release of software to production.**
    - Answer: Deployment/Delivery
    - Explanation: CD ensures that software can be reliably released at any time.

70. **Version ________________ systems like Git track changes to source code.**
    - Answer: Control
    - Explanation: Version control allows teams to manage changes and revert to previous versions if needed.

71. **A ________________ diagram shows the static structure of a system including classes and relationships.**
    - Answer: Class
    - Explanation: Class diagrams are fundamental in object-oriented modeling to show system structure.

72. **Sequence diagrams illustrate the ________________ of messages between objects over time.**
    - Answer: exchange/flow
    - Explanation: Sequence diagrams show object interactions arranged in time sequence.

73. **Agile methodology values individuals and interactions over processes and ________________.**
    - Answer: tools
    - Explanation: This is a core value of the Agile Manifesto.

74. **Scrum is a framework for managing ________________ work.**
    - Answer: Agile/complex
    - Explanation: Scrum provides a structure of roles, events, and artifacts for Agile development.

75. **A ________________ is a time-boxed period in Scrum to complete a set of work.**
    - Answer: Sprint
    - Explanation: Sprints are fixed-length iterations, usually 2-4 weeks, to deliver increment of product.

76. **The Product ________________ is a prioritized list of features and requirements.**
    - Answer: Backlog
    - Explanation: The backlog is the single source of work for the Scrum team.

77. **A ________________ meeting is held daily to synchronize the team's activities.**
    - Answer: Stand-up/Daily Scrum
    - Explanation: Short daily meetings help the team stay aligned and identify blockers.

78. **Kanban visualizes work using a ________________ with columns.**
    - Answer: board
    - Explanation: Kanban boards visualize workflow and limit work-in-progress.

79. **Waterfall model is a ________________ design process.**
    - Answer: linear/sequential
    - Explanation: Waterfall moves through phases (Analysis, Design, Code, Test) sequentially.

80. **One disadvantage of Waterfall is difficulty accommodating ________________ after the process starts.**
    - Answer: changes
    - Explanation: Waterfall is rigid; changing requirements late in the process is costly.

81. **Capability Maturity Model Integration (CMMI) measures process ________________.**
    - Answer: maturity
    - Explanation: CMMI assesses how well an organization's processes are defined and managed.

82. **Six Sigma focuses on reducing ________________ in processes.**
    - Answer: defects/variability
    - Explanation: Six Sigma aims for near-perfect quality by minimizing process variability.

83. **Technical debt refers to the implied cost of additional ________________ caused by choosing an easy solution now.**
    - Answer: rework
    - Explanation: Choosing a quick, messy solution now creates "debt" that must be "paid" (refactored) later.

84. **Refactoring improves internal code structure without changing external ________________.**
    - Answer: behavior
    - Explanation: Refactoring cleans up code to make it more maintainable without altering functionality.

85. **API stands for Application ________________ Interface.**
    - Answer: Programming
    - Explanation: APIs allow different software applications to communicate with each other.

86. **REST is an architectural style for designing ________________ APIs.**
    - Answer: networked/web
    - Explanation: REST (Representational State Transfer) is standard for web services.

87. **JSON is a lightweight data-interchange ________________.**
    - Answer: format
    - Explanation: JSON (JavaScript Object Notation) is widely used for data transmission in web apps.

88. **SQL is used to communicate with ________________ databases.**
    - Answer: relational
    - Explanation: Structured Query Language is standard for managing RDBMS.

89. **NoSQL databases are designed for ________________ data models.**
    - Answer: non-relational/unstructured
    - Explanation: NoSQL databases handle unstructured or semi-structured data like documents or graphs.

90. **Ideally, documentation should be kept ________________ to date.**
    - Answer: up
    - Explanation: Outdated documentation can be misleading and harmful to the project.

91. **________________ charts are used in project management to schedule tasks.**
    - Answer: Gantt
    - Explanation: Gantt charts provide a visual timeline of project tasks and dependencies.

92. **Critical Path Method (CPM) identifies the ________________ sequence of tasks.**
    - Answer: longest
    - Explanation: The critical path determines the minimum time needed to complete the project.

93. **Risk management involves identifying, assessing, and ________________ risks.**
    - Answer: mitigating
    - Explanation: Risk management plans how to handle potential problems before they occur.

94. **Stakeholders are individuals or groups who have an ________________ in the project.**
    - Answer: interest
    - Explanation: Stakeholders affect or are affected by the project outcome.

95. **Return on Investment (ROI) measures the ________________ of a project.**
    - Answer: profitability/value
    - Explanation: ROI compares the gain from an investment relative to its cost.

96. **Total Cost of Ownership (TCO) includes direct and ________________ costs.**
    - Answer: indirect
    - Explanation: TCO includes acquisition, operation, and maintenance costs over the asset's life.

97. **Scalability is the ability of a system to handle ________________ load.**
    - Answer: increased/growing
    - Explanation: A scalable system maintains performance as workload increases.

98. **Reliability is the probability that a system will perform without ________________.**
    - Answer: failure
    - Explanation: Reliability is a measure of system stability and uptime over time.

99. **Maintainability is the ease with which a system can be ________________.**
    - Answer: modified/repaired
    - Explanation: High maintainability lowers the cost and effort of future updates.

100. **Usability measures how ________________ the system is to learn and use.**
     - Answer: easy
     - Explanation: Usability testing ensures the interface is intuitive for the target audience.

## SECTION 2: MATCHING (Formatted as Questions for Quiz)

1. **Match: SDLC**
   - Answer: Structured, systematic approach to plan, design, develop, test and maintain software
   - Explanation: Definition B matches Term 1.

2. **Match: Agile**
   - Answer: Iterative development methodology emphasizing rapid delivery
   - Explanation: Definition A matches Term 2.

3. **Match: TPS**
   - Answer: Handles daily operational transactions and processing
   - Explanation: Definition C matches Term 3.

4. **Match: MIS**
   - Answer: Generates reports for middle management monitoring
   - Explanation: Definition G matches Term 4.

5. **Match: DSS**
   - Answer: Provides analytical tools for complex decision-making
   - Explanation: Definition D matches Term 5.

6. **Match: EIS**
   - Answer: Delivers strategic information to top executives
   - Explanation: Definition E matches Term 6.

7. **Match: Expert Systems**
   - Answer: Replicates human expertise using AI and knowledge bases
   - Explanation: Definition F matches Term 7.

8. **Match: RUP**
   - Answer: Structured development framework with four phases
   - Explanation: Definition H matches Term 8.

9. **Match: POC**
   - Answer: Small-scale demonstration validating feasibility
   - Explanation: Definition I matches Term 9.

10. **Match: SAD**
   - Answer: Systematic process of understanding business needs and designing solutions
   - Explanation: Definition J matches Term 10.

## SECTION 3: TRUE OR FALSE

1. **SDLC is a structured approach that ensures software is built efficiently and meets user requirements.**
   - Answer: TRUE
   - Explanation: SDLC's structured phases and best practices ensure quality and alignment with business needs.

2. **SDLC eliminates the need for testing in software development.**
   - Answer: FALSE
   - Explanation: SDLC includes Testing as a critical phase—it doesn't eliminate testing, it emphasizes it.

3. **The seven core SDLC phases include Planning, Analysis, Design, Development, Testing, Deployment, and Maintenance.**
   - Answer: TRUE
   - Explanation: These seven phases provide a complete lifecycle from conception through ongoing support.

4. **Risk Reduction is one of the critical benefits of implementing SDLC.**
   - Answer: TRUE
   - Explanation: SDLC identifies and addresses risks early, preventing costly failures later.

5. **Clear communication between developers, users, and management is not important in SDLC.**
   - Answer: FALSE
   - Explanation: Clear communication is essential—it's one of SDLC's core benefits.

6. **SDLC prevents cost overruns through careful planning and predictable outcomes.**
   - Answer: TRUE
   - Explanation: Structured planning allocates resources efficiently and prevents scope creep.

7. **Software projects without SDLC rarely fail due to misunderstandings about requirements.**
   - Answer: FALSE
   - Explanation: Studies show over 70% of failures result from unclear requirements—SDLC addresses this.

8. **SDLC reduces post-deployment issues by ensuring quality standards are met.**
   - Answer: TRUE
   - Explanation: Built-in quality checkpoints mean fewer defects reach production.

9. **SDLC is optional for small software projects.**
   - Answer: FALSE
   - Explanation: SDLC principles are valuable for any project size—they prevent common failures.

10. **The Maintenance phase in SDLC involves only bug fixes.**
    - Answer: FALSE
    - Explanation: Maintenance includes bug fixes, enhancements, performance optimization, and preventive updates.

11. **SDLC guides development teams through every stage of creating software solutions.**
    - Answer: TRUE
    - Explanation: That's SDLC's core purpose—providing guidance from planning through maintenance.

12. **Budget Control is a benefit of implementing SDLC methodology.**
    - Answer: TRUE
    - Explanation: Structured planning prevents budget overruns by controlling scope and resources.

13. **SDLC establishes confusion and misunderstandings among team members.**
    - Answer: FALSE
    - Explanation: SDLC does the opposite—it establishes clear communication and understanding.

14. **The Testing phase verifies functionality and quality of software.**
    - Answer: TRUE
    - Explanation: Testing systematically verifies that software meets requirements and functions correctly.

15. **SDLC is a roadmap that guarantees high-quality software delivery.**
    - Answer: TRUE
    - Explanation: When followed properly, SDLC dramatically improves quality and success rates.

16. **Poor requirements are responsible for less than 30% of project failures.**
    - Answer: FALSE
    - Explanation: Studies show poor requirements cause over 70% of failures—not less than 30%.

17. **SDLC helps organizations allocate resources efficiently.**
    - Answer: TRUE
    - Explanation: Planning phase allocates budget, staff, and tools appropriately across phases.

18. **The Deployment phase involves releasing software to production environment.**
    - Answer: TRUE
    - Explanation: Deployment includes migration, training, and transition to live operations.

19. **SDLC is a chaotic and unstructured approach to software development.**
    - Answer: FALSE
    - Explanation: SDLC is highly structured with defined phases and best practices.

20. **Scope creep can be controlled through SDLC methodology.**
    - Answer: TRUE
    - Explanation: SDLC's planning and change management prevent uncontrolled scope expansion.

21. **Transaction Processing Systems (TPS) handle high volumes of routine transactions quickly.**
    - Answer: TRUE
    - Explanation: TPS are designed for speed and reliability processing thousands of daily transactions.

22. **Management Information Systems (MIS) are designed for top executive decision-making.**
    - Answer: FALSE
    - Explanation: MIS serve middle managers—EIS serve top executives. MIS provide tactical, not strategic information.

23. **Decision Support Systems provide analytical tools for complex decision-making.**
    - Answer: TRUE
    - Explanation: DSS include forecasting, simulation, and what-if analysis tools for complex decisions.

24. **Executive Information Systems deliver low-level operational details to executives.**
    - Answer: FALSE
    - Explanation: EIS deliver high-level strategic summaries, not operational details. Drill-down is available if needed.

25. **Expert Systems use artificial intelligence to replicate human expertise.**
    - Answer: TRUE
    - Explanation: Expert Systems encode domain knowledge as rules that inference engines process.

26. **TPS systems process data only in batch mode, not in real-time.**
    - Answer: FALSE
    - Explanation: Modern TPS process both in real-time (ATMs, credit cards) and batch mode (payroll).

27. **MIS helps middle managers monitor business performance and track KPIs.**
    - Answer: TRUE
    - Explanation: MIS dashboards and reports help managers monitor key performance indicators.

28. **DSS systems perform what-if analyses to evaluate alternatives.**
    - Answer: TRUE
    - Explanation: What-if analysis is a core DSS capability—exploring different scenarios before deciding.

29. **Office Automation Systems are used only for strategic planning.**
    - Answer: FALSE
    - Explanation: Office Automation handles routine administrative tasks like scheduling, email, document management.

30. **EIS provides executives with drill-down capability from summaries to details.**
    - Answer: TRUE
    - Explanation: Drill-down lets executives click on summary data to see underlying details.

31. **Banking ATM withdrawals are examples of TPS applications.**
    - Answer: TRUE
    - Explanation: ATM systems are classic TPS examples—high volume, real-time, critical reliability.

32. **MIS transforms transactional data into meaningful reports and visualizations.**
    - Answer: TRUE
    - Explanation: MIS aggregates and transforms raw TPS data into actionable reports for managers.

33. **Expert Systems use inference engines to apply rules and reasoning.**
    - Answer: TRUE
    - Explanation: Inference engines process knowledge base rules to derive conclusions like human experts.

34. **DSS is primarily used for routine day-to-day operational transactions.**
    - Answer: FALSE
    - Explanation: DSS supports complex decision-making and analysis, not routine transactions—that's TPS.

35. **TPS must maintain ACID properties for data integrity.**
    - Answer: TRUE
    - Explanation: ACID (Atomicity, Consistency, Isolation, Durability) ensures transactions never lose data or corrupt.

36. **EIS systems focus on detailed operational data.**
    - Answer: FALSE
    - Explanation: EIS focuses on strategic summaries—detailed operational data is for TPS and MIS.

37. **MIS generates only periodic reports, never on-demand queries.**
    - Answer: FALSE
    - Explanation: MIS generates periodic reports AND supports on-demand queries when managers need information.

38. **DSS incorporates simulation capabilities and analytical models.**
    - Answer: TRUE
    - Explanation: Simulation and modeling are DSS hallmarks—exploring "what if" scenarios mathematically.

39. **Office Automation Systems streamline routine administrative tasks.**
    - Answer: TRUE
    - Explanation: Office systems automate paperwork, scheduling, email, document management.

40. **Expert Systems provide recommendations based on encoded knowledge.**
    - Answer: TRUE
    - Explanation: Expert Systems encode rules and knowledge, then provide recommendations through inference.

41. **System Analysis focuses on understanding business needs and identifying problems.**
    - Answer: TRUE
    - Explanation: Analysis is about understanding what's needed, not yet how to build it.

42. **The Design phase creates system architecture and data models.**
    - Answer: TRUE
    - Explanation: Design translates requirements into technical specifications and architecture.

43. **Requirement analysis is optional for software development projects.**
    - Answer: FALSE
    - Explanation: Requirement analysis is critical—poor requirements cause over 70% of project failures.

44. **Good analysis and design prevent unnecessary development work.**
    - Answer: TRUE
    - Explanation: Clear upfront understanding prevents building wrong features and expensive rework.

45. **Requirement Elicitation gathers requirements through interviews and surveys.**
    - Answer: TRUE
    - Explanation: Elicitation uses multiple techniques (interviews, surveys, workshops, observation) to discover needs.

46. **Requirement Validation ensures accuracy without stakeholder review.**
    - Answer: FALSE
    - Explanation: Validation requires stakeholder review—confirming documented requirements match actual needs.

47. **Clear requirements dramatically reduce misunderstandings in projects.**
    - Answer: TRUE
    - Explanation: Documented requirements create a shared understanding preventing costly misunderstandings.

48. **A Proof of Concept (POC) is used after full system implementation.**
    - Answer: FALSE
    - Explanation: POC is used before full development to validate feasibility and reduce risks.

49. **POCs help identify technical challenges early before major resource commitment.**
    - Answer: TRUE
    - Explanation: POC is specifically designed to identify and solve technical risks early.

50. **Functional Specification serves as the blueprint for system development.**
    - Answer: TRUE
    - Explanation: Functional Spec documents all system behaviors—what developers must implement.

51. **System Inputs define all data sources and integration points.**
    - Answer: TRUE
    - Explanation: Inputs document where the system receives data from (users, files, other systems).

52. **Processing Rules specify business logic and validations within the system.**
    - Answer: TRUE
    - Explanation: Processing Rules document calculations, workflows, and business logic requirements.

53. **User Interface design is not critical for system success.**
    - Answer: FALSE
    - Explanation: UI is critical—poor UI frustrates users even if the system functions perfectly.

54. **Simple UI design with only essential information enhances productivity.**
    - Answer: TRUE
    - Explanation: Simple, uncluttered interfaces reduce cognitive load and help users work faster.

55. **Good UI design reduces training time and minimizes user errors.**
    - Answer: TRUE
    - Explanation: Intuitive UI means faster training and fewer mistakes by users.

56. **Consistency in UI design reduces cognitive load for users.**
    - Answer: TRUE
    - Explanation: Consistent layouts, colors, and interactions help users understand the system intuitively.

57. **Poor UI design rarely leads to system rejection.**
    - Answer: FALSE
    - Explanation: Users reject poorly designed systems, regardless of backend quality—UI is critical.

58. **POCs provide realistic cost estimation for project planning.**
    - Answer: TRUE
    - Explanation: POC experience provides actual data for estimating full project costs.

59. **System Outputs details all reports and data transmissions.**
    - Answer: TRUE
    - Explanation: Outputs document all reports, displays, exports, and notifications the system produces.

60. **Performance Requirements establish response times and scalability targets.**
    - Answer: TRUE
    - Explanation: Performance Reqs specify how fast the system must respond and how many users it must support.

61. **Coding Standards ensure consistent code style and naming conventions.**
    - Answer: TRUE
    - Explanation: Standards make code readable, maintainable, and easier for teams to collaborate.

62. **Version Control enables tracking of code changes and rollback capability.**
    - Answer: TRUE
    - Explanation: Version Control is essential for tracking changes, enabling rollback, and parallel development.

63. **Code Reviews are unnecessary for maintaining code quality.**
    - Answer: FALSE
    - Explanation: Code Reviews catch bugs early and share knowledge—they're essential for quality.

64. **Testing should occur only at the end of development cycle.**
    - Answer: FALSE
    - Explanation: Continuous testing throughout development catches bugs when they're easiest to fix.

65. **Software Architecture represents the fundamental structure of a system.**
    - Answer: TRUE
    - Explanation: Architecture is foundational—it defines components, interactions, and overall structure.

66. **Layered Architecture separates functionality into horizontal layers.**
    - Answer: TRUE
    - Explanation: Layered (presentation, business logic, data) separates concerns and improves maintainability.

67. **Microservices breaks systems into large monolithic components.**
    - Answer: FALSE
    - Explanation: Microservices breaks systems into small independent services, not large monolithic ones.

68. **Client-Server architecture divides system into service providers and consumers.**
    - Answer: TRUE
    - Explanation: Client-Server separates clients (users) from servers (resources), enabling scalability.

69. **Well-designed architecture creates robust and reliable systems.**
    - Answer: TRUE
    - Explanation: Good architecture anticipates failures and handles them gracefully.

70. **Good architecture reduces future maintenance costs and complexity.**
    - Answer: TRUE
    - Explanation: Well-structured systems are easier and cheaper to modify and maintain.

71. **Black Box Testing requires knowledge of internal code structure.**
    - Answer: FALSE
    - Explanation: Black Box tests without code knowledge—only inputs and outputs matter.

72. **White Box Testing examines internal code structure and logic paths.**
    - Answer: TRUE
    - Explanation: White Box requires code knowledge and tests specific logic, branches, and conditions.

73. **Unit Testing tests individual code components in isolation.**
    - Answer: TRUE
    - Explanation: Unit tests verify single functions/classes work correctly before integration.

74. **Integration Testing tests the entire system end-to-end.**
    - Answer: FALSE
    - Explanation: Integration Testing tests component interactions. System Testing tests end-to-end.

75. **System Testing verifies end-to-end functionality of the entire system.**
    - Answer: TRUE
    - Explanation: System Testing evaluates the complete system meeting all requirements.

76. **User Acceptance Testing (UAT) involves stakeholder validation.**
    - Answer: TRUE
    - Explanation: UAT is the final test by actual users/stakeholders before production release.

77. **Selenium is used only for desktop application testing.**
    - Answer: FALSE
    - Explanation: Selenium is primarily for web application testing across browsers, not desktop apps.

78. **Selenium IDE is used for creating simple tests without programming.**
    - Answer: TRUE
    - Explanation: Selenium IDE records and plays back tests without coding, for simple test cases.

79. **UML is a standardized visual language for modeling software systems.**
    - Answer: TRUE
    - Explanation: UML provides standard diagrams (use cases, class, sequence) for design communication.

80. **Use Case diagrams show system interactions from developer perspective.**
    - Answer: FALSE
    - Explanation: Use Cases show interactions from user perspective, not developer perspective.

81. **Agile is an iterative development methodology emphasizing rapid delivery.**
    - Answer: TRUE
    - Explanation: Agile delivers working software frequently in short sprints with continuous feedback.

82. **Agile projects deliver increments in short cycles called sprints.**
    - Answer: TRUE
    - Explanation: Sprints (typically 2-4 weeks) deliver working software enabling rapid feedback.

83. **Waterfall approach is the same as Agile methodology.**
    - Answer: FALSE
    - Explanation: Waterfall is sequential; Agile is iterative. They're fundamentally different approaches.

84. **Sprint Planning involves selecting work items for the upcoming sprint.**
    - Answer: TRUE
    - Explanation: Sprint Planning commits the team to achievable work for the upcoming sprint.

85. **Sprint Review demonstrates completed work to stakeholders and gathers feedback.**
    - Answer: TRUE
    - Explanation: Sprint Review shows working software to stakeholders to gather feedback.

86. **Sprint Retrospective involves reflection on process improvements.**
    - Answer: TRUE
    - Explanation: Retrospective allows the team to reflect on what worked and what to improve.

87. **Rational Unified Process (RUP) has five development phases.**
    - Answer: FALSE
    - Explanation: RUP has four phases: Inception, Elaboration, Construction, Transition.

88. **RUP Inception phase defines project scope and feasibility.**
    - Answer: TRUE
    - Explanation: Inception establishes the project vision and business case.

89. **RUP Construction phase builds the system incrementally.**
    - Answer: TRUE
    - Explanation: Construction iteratively builds and integrates system components.

90. **RUP Transition phase delivers the product to users.**
    - Answer: TRUE
    - Explanation: Transition handles deployment and transition to production operations.

91. **Quality Assurance (QA) is reactive and detects defects.**
    - Answer: FALSE
    - Explanation: QA is proactive—preventing defects. QC is reactive—detecting defects.

92. **Quality Control (QC) is reactive and detects defects through testing.**
    - Answer: TRUE
    - Explanation: QC tests code and finds defects after they're written.

93. **Six Sigma aims to reduce defects to 3.4 per million opportunities.**
    - Answer: TRUE
    - Explanation: Six Sigma targets 99.99966% quality—nearly eliminating defects.

94. **Six Sigma uses statistical analysis and process control.**
    - Answer: TRUE
    - Explanation: Six Sigma is data-driven, using statistics to identify and eliminate root causes.

95. **CMMI defines maturity levels for measuring process capability.**
    - Answer: TRUE
    - Explanation: CMMI's five levels measure how advanced and disciplined processes are.

96. **Software Documentation preserves institutional knowledge of a project.**
    - Answer: TRUE
    - Explanation: Documentation is the institutional memory preventing knowledge loss when people leave.

97. **Technical Documentation is intended for end-users only.**
    - Answer: FALSE
    - Explanation: Technical docs are for developers, architects, IT ops—not end users.

98. **User Documentation enables end users to operate the system effectively.**
    - Answer: TRUE
    - Explanation: User manuals and tutorials help end users learn to use the system.

99. **Process Documentation standardizes development workflows and procedures.**
    - Answer: TRUE
    - Explanation: Process docs describe how the team works—testing procedures, deployment steps, code review processes.

100. **Good documentation reduces onboarding time for new team members.**
     - Answer: TRUE
     - Explanation: New developers can understand systems faster with good documentation.
`;

export const RAW_APP_TEXT = `
# Software Analysis & Design (SAD) - Application-Based Questions with Increasing Difficulty

---

## SECTION 1: APPLICATION-BASED FILL-UPS (100 Questions)

### Level 1: Basic Application (1-25)

1. **A retail company wants to process 10,000 daily transactions (sales, returns, inventory updates). Which information system would best serve their operational needs?**
   - Answer: Transaction Processing Systems (TPS)
   - Explanation: TPS handles high-volume routine transactions in real-time, perfect for retail operations.
   - Difficulty: Basic

2. **A manufacturing firm needs to monitor production efficiency, machine downtime, and labor costs daily. Which system should they implement?**
   - Answer: Management Information Systems (MIS)
   - Explanation: MIS generates reports for middle managers to monitor performance metrics and KPIs.
   - Difficulty: Basic

3. **An e-commerce company is planning to develop a new order management system. They want to understand current workflows first. Which SDLC phase should they begin with?**
   - Answer: Analysis/Planning
   - Explanation: Analysis phase involves interviewing stakeholders and documenting current processes before design begins.
   - Difficulty: Basic

4. **A bank is developing a new loan approval system. Before investing $500,000, they want to test if the technology can handle 1,000 concurrent users. What should they conduct?**
   - Answer: Proof of Concept (POC)
   - Explanation: POC validates technical feasibility before committing major resources.
   - Difficulty: Basic

5. **A hospital wants to store patient data, process appointments, maintain medical records, and generate compliance reports. How many different information systems would they minimally need?**
   - Answer: At least 3 (TPS for appointments/records, MIS for reports, Expert Systems for diagnoses)
   - Explanation: Different organizational needs require different system types.
   - Difficulty: Basic

6. **A startup is building a web application using an iterative approach with 2-week delivery cycles. Which development methodology are they following?**
   - Answer: Agile
   - Explanation: Agile breaks projects into short sprints (typically 2-4 weeks) with iterative delivery.
   - Difficulty: Basic

7. **A software company wants to reduce defects from 10 defects per 1,000 lines of code to nearly zero. Which quality improvement framework should they adopt?**
   - Answer: Six Sigma
   - Explanation: Six Sigma targets 3.4 defects per million opportunities—nearly eliminating defects.
   - Difficulty: Basic

8. **A development team is reviewing code for bugs, security issues, and design improvements before integration. What practice are they performing?**
   - Answer: Code Reviews
   - Explanation: Code reviews catch issues early and share knowledge across the team.
   - Difficulty: Basic

9. **A company's new system has a layered architecture with separate presentation, business logic, and data layers. What architectural pattern are they using?**
   - Answer: Layered Architecture
   - Explanation: Layered architecture separates concerns into horizontal layers for maintainability.
   - Difficulty: Basic

10. **A tester is testing a login function without seeing the source code—only entering credentials and checking if login succeeds or fails. Which testing type is this?**
    - Answer: Black Box Testing
    - Explanation: Black Box tests functionality without knowledge of internal code structure.
    - Difficulty: Basic

11. **A financial institution must ensure that every transaction either completes fully or rolls back completely—no partial transactions. Which property must their TPS maintain?**
    - Answer: ACID (Atomicity)
    - Explanation: Atomicity ensures transactions are "all-or-nothing"—critical for financial systems.
    - Difficulty: Basic

12. **An e-learning platform wants to allow students to download course materials, track progress, submit assignments, and view grades. Which documentation type must be comprehensive for students to navigate the system?**
    - Answer: User Documentation
    - Explanation: User documentation helps end users operate the system without technical knowledge.
    - Difficulty: Basic

13. **A company discovers that 40% of its software projects fail. After implementing proper requirement analysis and documentation, failures drop to 12%. This improvement aligns with which SDLC benefit?**
    - Answer: Risk Reduction/Quality Assurance
    - Explanation: Clear requirements reduce project failures by over 70%—this company saw significant improvement.
    - Difficulty: Basic

14. **A development team uses Git to track code changes, create branches for features, and enable rollback if needed. What development practice are they implementing?**
    - Answer: Version Control
    - Explanation: Version Control tracks changes and enables safe parallel development and rollback.
    - Difficulty: Basic

15. **A project manager wants to prevent defects before they occur through process standards and reviews, not just find defects during testing. Which quality approach are they emphasizing?**
    - Answer: Quality Assurance (QA)
    - Explanation: QA is proactive—preventing defects through process improvement.
    - Difficulty: Basic

16. **A bank's new system must support 500,000 concurrent users with 2-second response times. Where in the functional specification should this requirement be documented?**
    - Answer: Performance Requirements
    - Explanation: Performance Requirements specify response times, throughput, and scalability targets.
    - Difficulty: Basic

17. **A company is implementing SOA (Service-Oriented Architecture) and wants services to be usable by multiple applications. What characteristic of SOA are they leveraging?**
    - Answer: Reusability
    - Explanation: SOA services are designed as reusable components across multiple applications.
    - Difficulty: Basic

18. **An airline's reservation system allows agents to book flights, check seat availability, and process payments simultaneously across 200 locations. Which information system is this?**
    - Answer: Transaction Processing System (TPS)
    - Explanation: TPS handles concurrent, high-volume transactions reliably.
    - Difficulty: Basic

19. **A software development company scores itself as "Initial" on the CMMI maturity model, meaning its processes are ad-hoc. What is their most critical improvement priority?**
    - Answer: Standardizing and documenting development processes
    - Explanation: Level 1 to Level 2 requires moving from ad-hoc to planned, repeatable processes.
    - Difficulty: Basic

20. **A company's customer support team struggles because system documentation is outdated and developers have left. What problem is the company experiencing?**
    - Answer: Loss of institutional memory/lack of documentation
    - Explanation: Documentation preserves knowledge; without it, organizations face increased support costs.
    - Difficulty: Basic

21. **An online retailer needs to ensure that inventory data is synchronized between the warehouse and the website every 5 minutes. This is an example of a ________________ requirement.**
    - Answer: performance/non-functional
    - Explanation: Synchronization timing is a constraint on system operation, making it a non-functional requirement.

22. **A project team decides to use a Kanban board to visualize their workflow. This practice is associated with ________________ development.**
    - Answer: Agile/Lean
    - Explanation: Kanban boards are a visual tool used to implement Agile and Lean software development.

23. **During a Sprint Retrospective, the team discusses why a critical bug was missed. This activity focuses on process ________________.**
    - Answer: improvement
    - Explanation: Retrospectives are designed to identify areas for improvement in the development process.

24. **A company adopts a cloud-first strategy, migrating all local servers to AWS. This is a major change in their IT ________________.**
    - Answer: infrastructure/architecture
    - Explanation: Moving to the cloud represents a fundamental shift in how the system is deployed and managed.

25. **A developer writes a script to automatically deploy the latest code to the staging server every night. This is an example of ________________ deployment.**
    - Answer: automated
    - Explanation: Automated deployment reduces manual effort and error in the release process.

### Level 2: Intermediate Application (26-60)

26. **A healthcare organization is redesigning its patient management system. They interviewed doctors, nurses, and administrators and identified 150 conflicting requirements. In which SDLC phase should they reconcile these conflicts?**
    - Answer: Requirement Analysis (Analysis Phase)
    - Explanation: Analysis phase examines requirements for completeness, feasibility, consistency, and alignment with objectives.
    - Difficulty: Intermediate

27. **A manufacturing company built a system in 8 months but it doesn't match what users wanted. The team skipped requirement validation with stakeholders. Which SDLC phase should they have emphasized more?**
    - Answer: Requirement Validation
    - Explanation: Validation confirms documented requirements match actual stakeholder needs, preventing this expensive mismatch.
    - Difficulty: Intermediate

28. **A fintech startup is deciding between monolithic architecture and microservices. They predict 300% user growth in 2 years and need to add features independently. Which architecture would be more suitable and why?**
    - Answer: Microservices
    - Explanation: Microservices can scale independently and be deployed separately, ideal for rapid growth and feature additions.
    - Difficulty: Intermediate

29. **An e-commerce platform's UI has all 200+ product filters on one page. Users are confused, navigation is slow, and cart abandonment is high. Which UI design principle is being violated?**
    - Answer: Simplicity/Consistency/Clear Navigation
    - Explanation: Cluttered interfaces overwhelm users; simplicity displays only essential information.
    - Difficulty: Intermediate

30. **A company implements continuous testing throughout development (unit tests, integration tests, daily). Versus a competitor who tests only at the end. How many more defects will the late-testing company likely find post-deployment?**
    - Answer: Significantly more (typically 3-5x more)
    - Explanation: Early testing catches bugs when they're cheapest to fix; late testing finds problems after deployment begins.
    - Difficulty: Intermediate

31. **A DSS helps a retailer decide whether to open 10 new stores. It models different scenarios: 8 stores (low risk, 15% ROI), 15 stores (high risk, 35% ROI). What DSS capability is this?**
    - Answer: What-if Analysis / Scenario Modeling
    - Explanation: DSS allows exploring different scenarios to evaluate alternatives before committing.
    - Difficulty: Intermediate

32. **A bank's TPS processes 5 million transactions daily. Yesterday, a power failure corrupted 2,000 in-progress transactions. The system needs which two critical ACID properties to prevent this?**
    - Answer: Atomicity (all-or-nothing) and Durability (never lose committed data)
    - Explanation: Atomicity prevents partial transactions; Durability prevents data loss even during failures.
    - Difficulty: Intermediate

33. **A software company uses RUP methodology. They're in the Construction phase building features incrementally. What RUP phase comes next?**
    - Answer: Transition
    - Explanation: RUP phases: Inception → Elaboration → Construction → Transition (to production).
    - Difficulty: Intermediate

34. **A development team discovered that 80% of defects were introduced in the Design phase but only found during Testing (4 months later). How could they reduce time-to-fix using better practices?**
    - Answer: Formal Design Reviews / Peer Reviews
    - Explanation: Design reviews catch defects when they're cheapest to fix, before development begins.
    - Difficulty: Intermediate

35. **An Agile team completes a 2-week sprint. In the Sprint Review, stakeholders ask for a major architectural change. Should the team commit this to the current sprint or the next?**
    - Answer: The next sprint (after proper analysis and planning)
    - Explanation: Sprint Planning has already committed work; new scope should be planned for the next sprint.
    - Difficulty: Intermediate

36. **A company wants to move from Waterfall to Agile. Their concern: "We'll lose traceability of requirements to code." How does Agile address this concern?**
    - Answer: User stories, acceptance criteria, and continuous testing maintain requirement traceability
    - Explanation: Agile uses user stories and acceptance tests instead of massive requirement documents.
    - Difficulty: Intermediate

37. **A Legacy system has poor documentation. Engineers estimate: with documentation 3 days to implement a feature, without 12 days (including reverse-engineering). For a 100-feature project, how much time does poor documentation waste?**
    - Answer: Approximately 900 days (9 days × 100 features)
    - Explanation: Documentation saves significant time—poor documentation multiplies across projects.
    - Difficulty: Intermediate

38. **A startup's MIS dashboard shows 25% month-over-month customer churn. Managers need deeper analysis: which customers are churning, why, at what stage? Which system should they implement?**
    - Answer: Decision Support System (DSS)
    - Explanation: DSS provides analytical tools and models for complex decision-making beyond what MIS reports offer.
    - Difficulty: Intermediate

39. **A hospital implements an Expert System for diagnosis. When doctors disagree with the system's recommendation, it suggests they're wrong. What is missing from the Expert System design?**
    - Answer: Explanation capability / Human oversight / Confidence levels
    - Explanation: Expert Systems should explain their reasoning and support human decision-making, not replace human judgment.
    - Difficulty: Intermediate

40. **A development company's Selenium tests run for 8 hours covering 500 test cases. With parallel execution across 10 machines, how long would testing take?**
    - Answer: Approximately 48 minutes (with proper load distribution)
    - Explanation: Selenium Grid enables distributed testing, dramatically reducing testing time.
    - Difficulty: Intermediate

41. **A mobile app development team uses Client-Server architecture where all processing happens on the server. If the server is down, users can't work offline. What architectural tradeoff are they making?**
    - Answer: Trading offline capability for centralized control/security/consistency
    - Explanation: Architectural decisions involve tradeoffs—this design prioritizes centralization over offline functionality.
    - Difficulty: Intermediate

42. **A UML Use Case diagram shows a "Place Order" use case. The system's processing includes price validation, inventory checking, payment processing, and order confirmation. Are all these activities captured in a single use case?**
    - Answer: Yes, but they represent the internal flow; the use case shows the user-visible interaction
    - Explanation: Use cases show user perspective of system interactions; internal processing is in design documents.
    - Difficulty: Intermediate

43. **A company analyzes project data: successful projects spent 20% planning/design, 60% development, 20% testing. Failed projects spent 5% planning/design, 80% development, 15% testing. What does this indicate?**
    - Answer: Insufficient upfront analysis and design increases rework during development
    - Explanation: Adequate planning prevents expensive rework later—rushed planning increases total project cost.
    - Difficulty: Intermediate

44. **A regression testing suite tests the entire system after each code change. Currently, 10% of tests fail. Should the team always fix these failures before deploying?**
    - Answer: Depends—identify whether failures indicate regression (new bugs) or test flakiness
    - Explanation: False positives waste time; true regressions must be fixed. Good testing distinguishes between them.
    - Difficulty: Intermediate

45. **An organization wants to achieve CMMI Level 3 (Defined). Their current processes are at Level 2. What is the minimum effort they must undertake?**
    - Answer: Document and standardize their processes across all projects; ensure all follow the same procedures
    - Explanation: Level 3 requires moving from "managed" (team-specific) to "defined" (organization-wide) processes.
    - Difficulty: Intermediate

46. **A software team realizes that their code base has become difficult to maintain due to tight coupling between modules. They decide to refactor the code to improve modularity. This addresses ________________ debt.**
    - Answer: technical
    - Explanation: Technical debt accumulates when shortcuts are taken, making future development harder.

47. **A user complains that the system is difficult to navigate and the font size is too small. This is a ________________ issue.**
    - Answer: usability/accessibility
    - Explanation: Usability issues affect how easily users can interact with the system.

48. **A security audit reveals that sensitive user data is stored in plain text. The recommendation is to encrypt the database. This is a ________________ requirement.**
    - Answer: security/non-functional
    - Explanation: Security requirements protect data and are a critical type of non-functional requirement.

49. **A project is behind schedule. The manager decides to add five new developers to the team. According to Brooks' Law, this will likely make the project ________________.**
    - Answer: later
    - Explanation: Adding manpower to a late software project makes it later due to communication overhead.

50. **A web application experiences slow load times during peak hours. The team decides to implement caching. This is an optimization for ________________.**
    - Answer: performance
    - Explanation: Caching improves performance by reducing the need to fetch data from the source repeatedly.

51. **A developer is tasked with creating a new feature. They start by writing a test case that fails, then write the code to pass the test. This methodology is called ________________.**
    - Answer: Test-Driven Development (TDD)
    - Explanation: TDD involves writing tests before writing the actual code.

52. **A system is designed to handle failure of a single component without crashing the entire application. This characteristic is called ________________.**
    - Answer: fault tolerance
    - Explanation: Fault tolerance ensures system availability even in the presence of faults.

53. **A company wants to ensure that their software complies with GDPR regulations. This is a ________________ requirement.**
    - Answer: legal/compliance
    - Explanation: Compliance requirements ensure that the system adheres to laws and regulations.

54. **During the design phase, the team creates a prototype to get user feedback. This helps in validating ________________.**
    - Answer: requirements
    - Explanation: Prototyping allows users to visualize the system and confirm that requirements are met.

55. **A database administrator is optimizing SQL queries to improve report generation speed. This is part of ________________ tuning.**
    - Answer: performance/database
    - Explanation: Optimizing database queries is a common technique to improve system performance.

56. **A team uses a burn-down chart to track progress during a Sprint. If the line is above the ideal trend, it means the team is ________________ schedule.**
    - Answer: behind
    - Explanation: A burn-down chart shows work remaining; being above the line means less work has been completed than planned.

57. **A critical bug is found in production. The team releases a quick fix immediately. This is often called a ________________.**
    - Answer: hotfix/patch
    - Explanation: A hotfix is a patch applied to a live system to fix a critical issue.

58. **A software application is being internationalized to support multiple languages. This process is known as ________________.**
    - Answer: localization/internationalization
    - Explanation: Adapting software for different languages and regions.

59. **A company uses a centralized identity provider for single sign-on (SSO). This improves user ________________.**
    - Answer: experience/convenience
    - Explanation: SSO simplifies the login process for users accessing multiple applications.

60. **A system administrator sets up automated backups to prevent data loss. This is part of a ________________ plan.**
    - Answer: disaster recovery
    - Explanation: Disaster recovery plans ensure that data can be restored in case of a catastrophic event.

### Level 3: Advanced Application (61-100)

61. **A large financial institution is selecting an architecture for a new trading platform. Trading volume will spike 1000x during market crashes, requiring instant scaling. Which architecture best addresses this?**
    - Answer: Microservices with auto-scaling capabilities
    - Explanation: Microservices allow scaling individual components (trading engine, risk analysis) based on demand, while monolithic systems struggle.
    - Difficulty: Advanced

62. **A company's POC for a new technology succeeded, but the full production system failed. The POC proved technology worked but didn't test: user load, data volume, integration with legacy systems, or operation complexity. What critical POC failure occurred?**
    - Answer: POC was too narrow; didn't validate real-world complexity or operational readiness
    - Explanation: POCs must address the riskiest assumptions; this one only validated technical feasibility, not practical viability.
    - Difficulty: Advanced

63. **An organization is implementing Six Sigma in software development. They're at 20 defects per 1,000 lines of code. To reach Six Sigma (3.4 per million), what percentage improvement is required?**
    - Answer: 99.88% defect reduction (from 20/1000 to 3.4/1000000)
    - Explanation: Six Sigma represents extraordinary quality improvement—only achievable through systematic process control.
    - Difficulty: Advanced

64. **A company developed separate systems for different departments: Sales (TPS), Finance (MIS), Strategy (DSS). Now they need integrated reporting across all three. What architectural challenge must they solve?**
    - Answer: Data integration / API design / ETL processes
    - Explanation: Integrating separate systems requires managing data consistency, latency, and synchronization.
    - Difficulty: Advanced

65. **A development team discovers that fixing a defect found in Production costs 40x more than fixing it during Development. Their testing coverage is only 30%. Should they increase testing to 100%?**
    - Answer: Increase to 70-80% optimal coverage (diminishing returns beyond this)
    - Explanation: Complete coverage often costs more than the defects it would catch; balance coverage against cost.
    - Difficulty: Advanced

66. **An Agile team struggles because stakeholders keep changing requirements mid-sprint. How should the team modify their process while maintaining Agile principles?**
    - Answer: Implement a change control process; allow urgent changes mid-sprint only for blocking issues; plan new requests for next sprint
    - Explanation: Agile accommodates change but requires mechanisms to avoid chaos; change must be controlled, not unlimited.
    - Difficulty: Advanced

67. **A company's EIS shows revenue up 10% and customer satisfaction up 15%. But drill-down reveals: large customers are churning 25%, offset by many small customers. What critical insight did the summary miss?**
    - Answer: Customer segmentation analysis / customer lifetime value analysis
    - Explanation: Aggregate metrics hide dangerous trends; drill-down helped but executives need proactive segmentation analysis.
    - Difficulty: Advanced

68. **A regulatory-heavy industry (healthcare, finance) must maintain 99.99% system availability and audit trails of all transactions. Which architectural quality attributes are most critical?**
    - Answer: Reliability, Auditability, Security, Recoverability
    - Explanation: Different industries have different quality priorities; regulatory requirements drive architectural decisions.
    - Difficulty: Advanced

69. **A company implements component-driven development, reusing a critical component across 50 products. A severe bug is discovered in that component. What is the blast radius and how should they mitigate it?**
    - Answer: All 50 products are affected; rapid testing/patching/rollout needed; component versioning prevents this in future
    - Explanation: Component reuse amplifies both benefits (faster development) and risks (single point of failure).
    - Difficulty: Advanced

70. **A DSS helps executives evaluate an acquisition: Build Internal (5 years, $50M, 80% success), Buy Competitor (2 years, $200M, 40% success), Partner (3 years, $20M, 60% success). What DSS capability is this scenario testing?**
    - Answer: Complex multi-criteria decision analysis with risk/time/cost tradeoffs
    - Explanation: DSS must model complex scenarios with multiple competing factors to support executive decisions.
    - Difficulty: Advanced

71. **A system's response time SLA is 2 seconds but varies: 1 second during off-peak, 5 seconds during peak (100x load). The performance requirement was 2 seconds for "average load." What went wrong?**
    - Answer: Vague requirement definition; should specify response time at peak load, 99th percentile, or different SLAs for different loads
    - Explanation: Performance requirements must be precise about conditions—"average" hides critical variability.
    - Difficulty: Advanced

72. **A company uses Layered Architecture with direct database access from presentation layer, bypassing business logic. When they need to change business rules, what problem occurs?**
    - Answer: Rules must be updated in multiple places (presentation, reports, APIs); inconsistency and defects result
    - Explanation: Proper layering isolates business logic in one place; direct database access violates separation of concerns.
    - Difficulty: Advanced

73. **An Expert System for medical diagnosis is 95% accurate in controlled tests but 60% accurate in production. What explains the gap?**
    - Answer: Different data quality, edge cases not in training, operator mistakes, integration with incomplete patient records
    - Explanation: Controlled testing doesn't reflect production complexity; AI systems require careful real-world validation.
    - Difficulty: Advanced

74. **A company transitions from SDLC Waterfall (11-month cycle) to Agile (2-week sprints). Time-to-market drops from 11 months to 4 months. What hidden benefit do they gain?**
    - Answer: Faster feedback loops enable rapid course correction, reducing build-wrong-thing risk
    - Explanation: Agile's benefit isn't just speed—it's enabling course correction before major investment is wasted.
    - Difficulty: Advanced

75. **A requirement states: "The system shall be user-friendly." Is this a good requirement? How should it be written?**
    - Answer: No—it's vague/unmeasurable. Better: "90% of new users complete first transaction within 5 minutes with error rate <5%"
    - Explanation: Requirements must be testable; "user-friendly" is subjective and unmeasurable.
    - Difficulty: Advanced

76. **A company's code review process averages 4 hours per code review. They have 500 code reviews annually. A tool automates 90% of checks, reducing review time to 1.5 hours. What is the annual time saved?**
    - Answer: 1,250 hours annually (500 reviews × 2.5 hours saved)
    - Explanation: Small improvements in frequent processes create large organizational value.
    - Difficulty: Advanced

77. **Version Control shows: Developer A committed code that broke Developer B's tests 3 days ago, but B just noticed. What practice should be implemented to prevent this?**
    - Answer: Continuous Integration (automated testing on every commit)
    - Explanation: CI catches integration problems immediately, preventing days-late discovery.
    - Difficulty: Advanced

78. **A company's Black Box tests pass 100% but users report "the system is unusable when I do X." Why might this happen?**
    - Answer: Black Box tests might not cover real user workflows; test cases might not reflect actual usage patterns
    - Explanation: Black Box tests validate requirements but can miss user experience issues; UAT is critical.
    - Difficulty: Advanced

79. **A system uses Client-Server architecture with a single point of failure (one server). Users demand 99.99% availability. What architectural change is needed?**
    - Answer: Redundant servers with load balancing and failover; distributed architecture instead of single point of failure
    - Explanation: Availability requirements drive architectural decisions; single points of failure cannot achieve 99.99% uptime.
    - Difficulty: Advanced

80. **A UML Class diagram shows 15 classes with complex inheritance hierarchies and 200+ associations. Is this good design? How should it be simplified?**
    - Answer: No—too complex; refactor into smaller, loosely-coupled components using composition over inheritance
    - Explanation: Complex class diagrams indicate poor separation of concerns; divide into manageable modules.
    - Difficulty: Advanced

81. **An organization discovers that 60% of "enhancements" they implement are actually fixing design flaws. What does this indicate about their SDLC?**
    - Answer: Design phase is inadequate; requirements weren't translated into quality designs; design reviews are missing
    - Explanation: High correction rates indicate earlier phases failed; fix root causes, not just symptoms.
    - Difficulty: Advanced

82. **A DSS for supply chain optimization recommends actions that contradict management's judgment. Should they override the system or follow it?**
    - Answer: Investigate why the recommendation differs; likely the model is missing constraints or data the manager knows
    - Explanation: DSS should support decision-making, not replace judgment; when there's conflict, investigate underlying assumptions.
    - Difficulty: Advanced

83. **An Expert System for loan approval uses 50 rules based on historical data. New regulations require different rules. How easily can this be changed?**
    - Answer: Very easily—rules are separated from inference engine; just update the knowledge base
    - Explanation: Expert Systems' strength is separating knowledge (rules) from reasoning engine, enabling rapid changes.
    - Difficulty: Advanced

84. **A Microservices-based e-commerce system has 30 independent services. Service A calls Service B, which calls Service C (3-hop dependency). If any service is slow, the entire flow is slow. What problem is this?**
    - Answer: Cascading latency / Microservices complexity tradeoff
    - Explanation: Microservices gain independence but pay with increased latency; service design must minimize hops.
    - Difficulty: Advanced

85. **A company's CMMI assessment shows: repeatable processes, but inconsistent documentation quality. What maturity level are they at, and what's the improvement priority?**
    - Answer: Level 2 (Managed); priority is improving documentation standards to move toward Level 3 (Defined)
    - Explanation: Level 2 has managed processes; Level 3 requires standardized, consistent processes across organization.
    - Difficulty: Advanced

86. **A testing team creates 500 manual test cases (15 hours to execute weekly). Automated testing infrastructure costs $100k upfront and $10k annually. Break-even is in _____ years.**
    - Answer: Approximately 0.3 years (4 months) if automation reduces testing time to 2 hours
    - Explanation: Automation ROI is often very high for frequently-executed test suites.
    - Difficulty: Advanced

87. **A system's functional specification says: "User can view product details." This is vague. What additional details should be specified?**
    - Answer: What details (name, price, reviews, images, availability)? How many reviews? Sorting order? Load time SLA? Mobile/desktop variations?
    - Explanation: "View details" is too vague; specification must clarify what data, in what format, with what constraints.
    - Difficulty: Advanced

88. **Requirement elicitation interviews reveal: stakeholders want "real-time reporting" but the underlying data is updated daily. What conflict must be resolved?**
    - Answer: Clarify whether "real-time" means as-soon-as-data-available or if hourly refresh suffices; adjust expectations
    - Explanation: Elicitation must uncover hidden conflicts; feasibility and cost implications must be discussed upfront.
    - Difficulty: Advanced

89. **A company's system has poor User Documentation. Support costs are $2M annually (1000 support hours at $2k/hour). Quality documentation costs $200k to create. The ROI period is _____ months.**
    - Answer: 1.2 months (if documentation reduces support hours by just 10%)
    - Explanation: Documentation ROI is often very high in support-heavy organizations.
    - Difficulty: Advanced

90. **A Proof of Concept succeeds using toy data (1000 records) but fails in production (100 million records). What critical aspect wasn't tested?**
    - Answer: Scalability / Performance under realistic data volume / Database indexing / Memory usage
    - Explanation: POC must test with representative data volume to catch scalability issues before production.
    - Difficulty: Advanced

91. **An organization wants to improve from 70% code coverage to 95% coverage. Is this economically justified?**
    - Answer: Probably not—diminishing returns kick in; typical cost-benefit sweet spot is 70-80% coverage
    - Explanation: Getting last 25% coverage typically requires 2-3x effort; most defects are caught by 80% coverage.
    - Difficulty: Advanced

92. **A White Box test finds that function F() has 16 possible execution paths but tests cover only 8. Is this adequate?**
    - Answer: Inadequate—only 50% path coverage; should aim for 80%+ to catch conditional logic defects
    - Explanation: White Box testing must exercise different code paths; 50% coverage leaves many defects uncaught.
    - Difficulty: Advanced

93. **A company's Agile velocity is stable at 40 story points per sprint. A stakeholder asks: "When will we finish 500 features?" How should you respond?**
    - Answer: Depends on feature size—if 500 features = 1000 points, approximately 25 sprints (13 months)
    - Explanation: Stable velocity enables accurate forecasting; must account for planning, design, testing overhead.
    - Difficulty: Advanced

94. **A legacy system was built without SDLC discipline. Maintenance consumes 80% of the budget; new feature development is 20%. For modernization, should the company rebuild or refactor?**
    - Answer: Depends on technical debt severity and business agility needs; likely incremental refactoring with parallel Agile new development
    - Explanation: Full rebuilds are risky; incremental modernization while delivering new features is safer.
    - Difficulty: Advanced

95. **A system's architecture must support: 10 million users, $100M transaction volume daily, 99.99% availability, <100ms response time. Which non-functional requirements are most constraining and which drive architectural decisions most?**
    - Answer: 99.99% availability and <100ms response time are most constraining; drive redundancy, caching, and distribution decisions
    - Explanation: Performance and availability requirements fundamentally shape system architecture.
    - Difficulty: Advanced

96. **An Expert System for tax compliance has 5000+ rules built over 10 years. Every tax law change requires modifications. Is there a structural problem?**
    - Answer: Yes—rules are too monolithic; should be organized by rule category/hierarchy for easier maintenance
    - Explanation: As rule bases grow, organization and modularity become critical; flat 5000-rule structure is unmaintainable.
    - Difficulty: Advanced

97. **A company transitions to Microservices: 1 monolithic system becomes 20 microservices. They expect 50% faster development. Will they achieve this? Why or why not?**
    - Answer: Probably not—while individual service development accelerates, testing, deployment, and coordination complexity increase
    - Explanation: Microservices provide benefits but come with operational complexity that can offset development speed gains.
    - Difficulty: Advanced

98. **A functional specification is 200 pages long; it takes developers 3 months to fully understand. Is this adequate? How should it be improved?**
    - Answer: Too long—should be 20-50 pages with visual diagrams; complex specs should be presented as use cases, not prose documents
    - Explanation: Specification clarity (structure, visuals) matters more than length; poorly organized specs cause misunderstandings.
    - Difficulty: Advanced

99. **A company's Quality Assurance focuses on: process definition, team training, and audits. A major defect escapes to production. What QA gap is revealed?**
    - Answer: Lack of design reviews and requirement validation; QA prevented defects in process but not in requirements/design quality
    - Explanation: QA must cover earlier phases (requirements, design) not just process compliance and code reviews.
    - Difficulty: Advanced

100. **An organization has succeeded with SDLC Waterfall for 5 years but now needs to launch 20 features in 12 months (vs. 2-3 features/year currently). What fundamental change is required, and what are the risks?**
     - Answer: Shift to Agile methodology to enable parallel development and faster feedback; risks include team skill gaps, customer involvement demands, and testing complexity
     - Explanation: Business demands drive methodology changes; the shift requires not just process changes but organizational culture transformation.
     - Difficulty: Advanced

---

## SECTION 2: APPLICATION-BASED TRUE/FALSE (50 Advanced Scenario Questions)

### Scenario-Based True/False (1-50)

1. **A retail company's TPS processes transactions via a single database server. Even if they implement perfect application-level error handling, they cannot achieve 99.99% availability.**
   - Answer: TRUE
   - Explanation: Single points of failure prevent high availability regardless of software quality; architecture must include redundancy.
   - Difficulty: Advanced

2. **An organization's EIS shows aggregate metrics that all look healthy, but a drill-down reveals severe problems in specific segments. This proves that drill-down capability alone solves decision-making problems.**
   - Answer: FALSE
   - Explanation: Executives need proactive anomaly detection and segmentation analysis, not just reactively drilling down.
   - Difficulty: Advanced

3. **A company tested 100% of code paths with White Box testing and achieved 100% code coverage. They are guaranteed zero production defects.**
   - Answer: FALSE
   - Explanation: Coverage doesn't guarantee correctness; edge cases, integration, and requirement mismatches can still cause defects.
   - Difficulty: Advanced

4. **An Expert System diagnoses disease X with 99% accuracy in trials but 75% accuracy in production because real patients have comorbidities not in training data. The system design is fundamentally flawed.**
   - Answer: TRUE
   - Explanation: Expert Systems must be validated with representative real-world data; training on limited datasets is a critical design flaw.
   - Difficulty: Advanced

5. **A Microservices-based system with 50 independent services is less reliable than a monolithic system because each service is a potential point of failure.**
   - Answer: FALSE
   - Explanation: Microservices can be more reliable with proper redundancy per service; monolithic systems have single points of failure.
   - Difficulty: Advanced

6. **A company spent 10% on design and 85% on development (5% on testing). Their project failed because they skipped the Analysis phase.**
   - Answer: TRUE
   - Explanation: Insufficient analysis and design led to building the wrong solution; this time allocation indicates poor planning.
   - Difficulty: Advanced

7. **A POC proves that technology works at small scale (1000 users, 1000 records). Scaling to production (1 million users, 100 million records) is guaranteed to work.**
   - Answer: FALSE
   - Explanation: POC at small scale doesn't prove production readiness; scaling introduces new problems (data volumes, latency, concurrency).
   - Difficulty: Advanced

8. **A DSS recommends Product Launch A, but the executive team's gut feeling says Product B. The executive should override the DSS because human judgment is superior.**
   - Answer: FALSE
   - Explanation: When DSS recommendation conflicts with judgment, investigate why; likely the model is missing data or constraints the executive knows.
   - Difficulty: Advanced

9. **An organization achieves CMMI Level 5 (Optimizing). Their software projects have zero defects and always meet timelines and budgets.**
   - Answer: FALSE
   - Explanation: Level 5 means continuous improvement and very high maturity, but zero defects/budget overruns is unrealistic.
   - Difficulty: Advanced

10. **A company's MIS dashboard shows revenue up 15% YoY. The business is definitely healthier than last year.**
    - Answer: FALSE
    - Explanation: Aggregate metrics hide problems (churned valuable customers offset by many small new ones); needs deeper analysis.
    - Difficulty: Advanced

11. **A legacy system with poor documentation requires 10 days per feature. A similar new system with quality documentation requires 3 days per feature. The 70% time savings justifies documentation investment.**
    - Answer: TRUE
    - Explanation: Documentation ROI is very high; reduced development time, support costs, and risk easily justify upfront investment.
    - Difficulty: Advanced

12. **A Waterfall project is in the Testing phase and discovers major design flaws. Going back to fix the design will delay the project significantly.**
    - Answer: TRUE
    - Explanation: Late-stage defect discovery in Waterfall is expensive; this is a major risk of sequential methodology.
    - Difficulty: Advanced

13. **An Agile team implements continuous code reviews (every commit reviewed before merge) and continuous testing (automated tests on every commit). They don't need a dedicated QA team.**
    - Answer: FALSE
    - Explanation: Developers' automated tests catch functional bugs, but QA explores edge cases, usability, and explores untested paths.
    - Difficulty: Advanced

14. **A requirement states: "The system shall respond within 2 seconds." This is a good, testable requirement.**
    - Answer: FALSE
    - Explanation: Should specify: 2 seconds for what load (peak/average)? What percentile (99th/95th/average)? Should be more precise.
    - Difficulty: Advanced

15. **A company uses Layered Architecture but finds developers frequently bypass business logic layer to directly access data from presentation layer. This violates separation of concerns and risks inconsistency.**
    - Answer: TRUE
    - Explanation: Bypassing layers defeats architectural benefits; direct data access makes business rule changes difficult and error-prone.
    - Difficulty: Advanced

16. **A Black Box testing team achieves 100% functional coverage (tests all specified behaviors). Users report "the system is slow" and "navigation is confusing." This proves the test suite was inadequate.**
    - Answer: TRUE
    - Explanation: Black Box covers functional requirements but misses performance and usability issues; UAT and performance testing are needed.
    - Difficulty: Advanced

17. **An Expert System for medical diagnosis should be trained on diverse patient data including rare diseases and comorbidities to achieve production-level accuracy.**
    - Answer: TRUE
    - Explanation: AI systems need representative training data; narrow training causes poor real-world performance.
    - Difficulty: Advanced

18. **A Microservices architecture has 30 services with average 5-hop dependencies (Service A calls B calls C calls D calls E). Performance should be acceptable as long as each hop is fast.**
    - Answer: FALSE
    - Explanation: Cumulative latency from multiple hops becomes problematic; cascading failures increase with dependency chains.
    - Difficulty: Advanced

19. **A company's requirements analysis identified 200 conflicting requirements. They resolved 150 conflicts in the Analysis phase and deferred 50 to be "figured out during development."**
    - Answer: FALSE
    - Explanation: All requirements must be resolved in Analysis; deferring conflicts to development causes scope creep and rework.
    - Difficulty: Advanced

20. **Code reviews catch 65% of bugs before they reach testing. Automated tools catch 30% of bugs. The total defect prevention is 95%.**
    - Answer: FALSE
    - Explanation: Can't add percentages; many bugs overlap (both code review and tools catch same bugs). Total is less than 95%.
    - Difficulty: Advanced

21. **A performance requirement specifies: "Response time shall be <100ms." If the system achieves 99ms average response time, the requirement is met.**
    - Answer: FALSE
    - Explanation: Should specify 99th percentile or max, not average; average of 99ms likely means some users experience >100ms responses.
    - Difficulty: Advanced

22. **A TPS for ATM transactions must achieve 99.999% availability (5 nines = 26 seconds downtime/year). This is achievable with a single well-designed server.**
    - Answer: FALSE
    - Explanation: Five nines requires redundant servers, failover, and distributed architecture; single server cannot achieve this.
    - Difficulty: Advanced

23. **An Agile team's Sprint Retrospective reveals that they're implementing 30% more features but with 2x more bugs. They should increase testing rigor rather than reducing scope.**
    - Answer: TRUE
    - Explanation: Quality must not be sacrificed for velocity; improved testing is better than reduced scope.
    - Difficulty: Advanced

24. **Six Sigma's goal of 3.4 defects per million opportunities is mathematically achievable in software development with proper process control.**
    - Answer: TRUE
    - Explanation: Six Sigma is achievable in software with rigorous quality processes, though it's expensive and often unnecessary.
    - Difficulty: Advanced

25. **A company's DSS for inventory optimization recommends 20% higher stock levels. The recommendation contradicts the CFO's financial constraints. The DSS is wrong and should be overridden.**
    - Answer: FALSE
    - Explanation: DSS recommendation might be optimal mathematically but miss financial constraints; investigate whether constraint was input.
    - Difficulty: Advanced

26. **A system audit reveals that developers have production database access. This is a security risk but speeds up debugging, so it is an acceptable practice.**
    - Answer: FALSE
    - Explanation: Direct production access violates separation of duties and increases risk of data corruption or leakage.

27. **A critical API change is made without updating the documentation. This will likely cause integration issues for other teams.**
    - Answer: TRUE
    - Explanation: Undocumented changes lead to broken integrations and wasted developer time.

28. **An application is designed with a single database instance. It can easily scale to handle millions of concurrent writes without architectural changes.**
    - Answer: FALSE
    - Explanation: Single database instances have limits; scaling write-heavy loads often requires sharding or distributed databases.

29. **A team decides to use a NoSQL database for a financial ledger requiring complex transactions. This is the best choice.**
    - Answer: FALSE
    - Explanation: Relational databases with ACID compliance are generally better suited for financial transactions.

30. **A project uses open-source libraries without checking licenses. This creates a potential legal risk.**
    - Answer: TRUE
    - Explanation: License incompatibility can force a company to open-source their proprietary code or face lawsuits.

31. **Continuous Deployment means that every code change that passes automated tests is automatically released to production.**
    - Answer: TRUE
    - Explanation: This is the definition of Continuous Deployment, aiming for rapid delivery.

32. **In a Microservices architecture, each service must use the same programming language and database technology.**
    - Answer: FALSE
    - Explanation: Microservices allow polyglot persistence and different languages per service, though standardization is often preferred.

33. **A company implements a robust disaster recovery plan but never tests it. The plan is reliable.**
    - Answer: FALSE
    - Explanation: Untested DR plans often fail due to outdated procedures or unforeseen technical issues.

34. **User Experience (UX) design is only concerned with how the application looks.**
    - Answer: FALSE
    - Explanation: UX focuses on the entire user journey, usability, and satisfaction, not just aesthetics (UI).

35. **Refactoring code should be done only when adding new features.**
    - Answer: FALSE
    - Explanation: Refactoring should be a continuous process to keep technical debt low.

36. **A scalable system always delivers high performance.**
    - Answer: FALSE
    - Explanation: Scalability is about handling growth; a system can be scalable but have high latency (poor performance) per request.

37. **It is better to have a slightly slower system that is correct than a fast system that produces incorrect results.**
    - Answer: TRUE
    - Explanation: Correctness is fundamental; speed is irrelevant if the data is wrong.

38. **Documentation is a waste of time in Agile projects.**
    - Answer: FALSE
    - Explanation: Agile values working software over comprehensive documentation, but essential documentation is still required.

39. **Security should be considered only at the end of the development lifecycle.**
    - Answer: FALSE
    - Explanation: Security must be "shifted left" and integrated throughout the SDLC (DevSecOps).

40. **Pair programming involves two developers working on the same code at one workstation.**
    - Answer: TRUE
    - Explanation: One drives (types), the other navigates (reviews), improving code quality and knowledge sharing.

41. **A monolithic application is always harder to deploy than microservices.**
    - Answer: FALSE
    - Explanation: Monoliths can be simpler to deploy (one artifact) compared to coordinating many microservices.

42. **Static code analysis tools can find all bugs in software.**
    - Answer: FALSE
    - Explanation: Static analysis finds patterns and syntax issues but cannot detect runtime logic errors or design flaws.

43. **It is acceptable to store passwords in the database if they are encrypted.**
    - Answer: FALSE
    - Explanation: Passwords should be hashed (and salted), not just encrypted, because encryption is reversible.

44. **Feature flags allow enabling or disabling features without deploying new code.**
    - Answer: TRUE
    - Explanation: Feature flags decouple deployment from release, allowing controlled rollouts.

45. **A 99.9% availability SLA allows for roughly 8.7 hours of downtime per year.**
    - Answer: TRUE
    - Explanation: 0.1% of a year (8760 hours) is approximately 8.76 hours.

46. **Load balancers distribute network traffic across multiple servers to ensure no single server bears too much load.**
    - Answer: TRUE
    - Explanation: This improves responsiveness and availability of applications.

47. **Serverless computing means there are no servers involved.**
    - Answer: FALSE
    - Explanation: Servers exist but are managed by the cloud provider; developers focus on code.

48. **Containerization (e.g., Docker) ensures software runs the same in different environments.**
    - Answer: TRUE
    - Explanation: Containers package code and dependencies together, eliminating "it works on my machine" issues.

49. **Technical debt should always be paid down to zero.**
    - Answer: FALSE
    - Explanation: Some technical debt is acceptable for speed; the goal is to manage it, not necessarily eliminate it entirely at all costs.

50. **The goal of software engineering is to produce high-quality software within budget and time constraints.**
    - Answer: TRUE
    - Explanation: Balancing quality, cost, and time is the central challenge of software engineering.
`;
