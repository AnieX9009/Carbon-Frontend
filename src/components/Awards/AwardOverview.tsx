import { motion } from "framer-motion";
import { Award,  FileText, Users,  FlaskConical, Globe, Calendar, Target, Scale, Zap, GraduationCap, Heart, Languages, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import  { useState } from "react";

const AwardOverview = () => {
  const [activeTab, setActiveTab] = useState("about");

  const awardRecipients = [
    { date: "March 18, 2016", recipient: "Dr. Shanmugamurthy Lakshmanan", award: "Star of the Universe", contribution: "For VETHA initiatives bridging ancient and modern science." },
    { date: "Nov 6, 2020", recipient: "Pramodh Adi", award: "Barbara Thiele Award", contribution: "For selfless service to humanity during the Covid-19 pandemic." },
    { date: "Aug 6, 2022", recipient: "Kanhaiya Lal Gupta", award: "G. Venkatasubramaniyan Award", contribution: "For selfless service to humanity through yoga instruction." },
    { date: "March 17, 2024", recipient: "Mohanapriya Raman", award: "Volunteer of the Year Award", contribution: "For relentless efforts in integrating eastern and western education." },
    { date: "March 17, 2024", recipient: "Dr. Geeta Sandeep Nadela", award: "Researcher of the Year Award", contribution: "For developing quantitative validation models of education effectiveness." },
    { date: "March 17, 2024", recipient: "Siddhant Bhandari", award: "GVS Inventor of the Year Award", contribution: "For creating a framework for the world's first digital green currency, UNY." },
    { date: "March 17, 2024", recipient: "Dr. Saravana Prakash Thirumuruganandham", award: "Distinguished Researcher Award", contribution: "For integrating ancient and modern studies in Biophysics." },
    { date: "March 17, 2024", recipient: "Surbhi Hirawat", award: "Barbara Thiele Woman of the Year Award", contribution: "For inventing green loyalty altruistic gamification." },
    { date: "March 17, 2024", recipient: "T. S. Nandakumar", award: "Barbara Thiele Musician of the Year Award", contribution: "For excellence in Mridangam playing." },
    { date: "March 17, 2024", recipient: "A2B Indian Vegetarian Restaurants", award: "Barbara Thiele Business of the Year Award", contribution: "For excellence in holistic culinary practices." },
    { date: "August 7, 2025", recipient: "Saravanan Kuppusamy and Sai R Anand", award: "Barbara Thiele Visionary Sci-Fi Literary Award", contribution: "For the novel PARALLELS honoring exceptional contribution to Science Fiction and Literary Innovation." }
  ];

  const trlLevels = [
    { level: "TRL 1", description: "Basic principles observed (scientific research begins)" },
    { level: "TRL 2", description: "Technology concept formulated" },
    { level: "TRL 3", description: "Experimental proof of concept" },
    { level: "TRL 4", description: "Technology validated in lab" },
    { level: "TRL 5", description: "Technology validated in relevant environment" },
    { level: "TRL 6", description: "Prototype demonstrated in relevant environment" },
    { level: "TRL 7", description: "System prototype demonstrated in operational environment" },
    { level: "TRL 8", description: "System completed and qualified through tests and demonstrations" },
    { level: "TRL 9", description: "Actual system proven and deployed in real-world use" }
  ];

  const eligibilityCriteria = [
    { 
      title: "Technological & Scientific Innovation", 
      icon: <Zap className="w-5 h-5" />,
      items: [
        "Research-Based Contribution: Unique scientific discoveries, new technologies, or complex engineering processes",
        "Complexity and R&D Intensity: High technical complexity, significant capital, and scientific/technological risk"
      ]
    },
    { 
      title: "Impact-Driven Focus", 
      icon: <Target className="w-5 h-5" />,
      items: [
        "Positive Societal and Environmental Impact: Address pressing issues aligned with UN SDGs",
        "Intentional Impact Design: Social/environmental goals as central mission"
      ]
    },
    { 
      title: "Early to Mid-Stage Development", 
      icon: <Scale className="w-5 h-5" />,
      items: [
        "Project Phase and Proof of Concept: Minimum TRL 4 (proof of concept or prototype)",
        "Scalability Potential: Potential to scale and create broader impacts"
      ]
    },
    { 
      title: "Inclusivity and Accessibility", 
      icon: <Users className="w-5 h-5" />,
      items: [
        "Diversity of Backgrounds and Roles: Open regardless of formal leadership positions",
        "Global Eligibility: Open to applicants from any country and sector"
      ]
    },
    { 
      title: "Legal and Language Requirements", 
      icon: <Languages className="w-5 h-5" />,
      items: [
        "Minimum Age Requirement: At least 18 years old by application deadline",
        "English Proficiency: Minimum B2 CEFR level for effective communication"
      ]
    }
  ];

  const selectionCriteria = [
    { name: "Embedded Positive Impact", description: "Intentionality, integration of impact, scalability, measurement" },
    { name: "Technological and Scientific Innovation", description: "Uniqueness, scientific foundation, addressing major issues" },
    { name: "Financial Sustainability", description: "Viable revenue model, strategic planning, growth and scalability" },
    { name: "Market Strategy", description: "Addressing unmet needs, competitive edge, customer validation" },
    { name: "Team Quality", description: "Complementary skills, competence, access to advisors and networks" },
    { name: "Leadership Character", description: "Entrepreneurial mindset, alignment with SFUO values, community engagement" }
  ];

  const selectionProcess = [
    { step: "Initial Screening", description: "Applications reviewed for completeness and eligibility" },
    { step: "Shortlisting & Due Diligence", description: "Detailed review against criteria, verification of documentation" },
    { step: "Jury Review", description: "Presentations and interviews with SFUO judges and experts" },
    { step: "Final Decision", description: "Awards granted promptly upon recognition of merit" }
  ];

  const tabs = [
    { id: "about", name: "About", icon: <Heart className="w-4 h-4" /> },
    { id: "eligibility", name: "Eligibility", icon: <CheckCircle className="w-4 h-4" /> },
    { id: "application", name: "Application", icon: <FileText className="w-4 h-4" /> },
    { id: "selection", name: "Selection", icon: <Target className="w-4 h-4" /> },
    { id: "recipients", name: "Recipients", icon: <Award className="w-4 h-4" /> },
    { id: "trl", name: "TRL Reference", icon: <FlaskConical className="w-4 h-4" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-700 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Barbara Thiele Award
                </h3>
                <p className="text-muted-foreground">
                  Honors Barbara Thiele, a lifelong advocate for unity, compassion, and humanitarian progress. 
                  Recognizes innovators combining technological or scientific innovation with compassion for humanity.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-700 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  G. Venkatasubramaniyan (GVS) Award
                </h3>
                <p className="text-muted-foreground">
                  Commemorates Venkat Iyer, known as the 'Nikola Tesla of India'. Celebrates invention, research, 
                  entrepreneurship, and humanitarian service that transforms society through compassion-driven innovation.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-800">Technology Readiness Levels (TRLs)</h4>
                <p className="text-sm text-muted-foreground">
                  Applicants should reference TRLs when describing their projects. The scale ranges from TRL 1 (basic principles observed) 
                  to TRL 9 (actual system proven and deployed).
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-800">Award Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Scientific and technological innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Peace and social betterment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Environmental sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Humanitarian service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Education and research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Arts and cultural innovation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        );
      
      case "eligibility":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {eligibilityCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg border border-green-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-700">
                  <div className="bg-green-100 p-2 rounded-full">
                    {criterion.icon}
                  </div>
                  {criterion.title}
                </h3>
                <ul className="space-y-2">
                  {criterion.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        );
      
      case "application":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-700">Submission Methods</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Online form at www.1World1Nation.org</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Email to awards@1world1nation.org</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Email to awards@sfuo.org</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-700">Required Documentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Resume/CV highlighting experience and achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Research documentation (technical papers, reports, summaries)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-700">Optional Documentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Theory of Change / Impact Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Competitive Landscape Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Up to three additional attachments</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-800">Important Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Application Deadline</h4>
                    <p className="text-sm text-muted-foreground">June 25, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Incomplete Applications</h4>
                    <p className="text-sm text-muted-foreground">May be disqualified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">Open to applicants from any country</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Project Stage</h4>
                    <p className="text-sm text-muted-foreground">Early to mid-stage development (TRL 4+)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case "selection":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-green-800">Selection Process</h3>
              <div className="space-y-6">
                {selectionProcess.map((process, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">{index + 1}</div>
                      {index < selectionProcess.length - 1 && <div className="w-0.5 h-12 bg-green-300 my-1"></div>}
                    </div>
                    <div>
                      <h4 className="font-semibold">{process.step}</h4>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-green-800">Selection Criteria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectionCriteria.map((criterion, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-green-50 p-3 rounded-lg border border-green-200"
                  >
                    <h4 className="font-medium text-sm">{criterion.name}</h4>
                    <p className="text-xs text-muted-foreground">{criterion.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-800">General Rules & Conditions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Applicants grant SFUO a non-exclusive license to share submissions for educational or promotional use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>SFUO bears no liability associated with participation or acceptance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Verification documents may be required for finalists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Awards are non-transferable and symbolize SFUO's commitment to global unity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        );
      
      case "recipients":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="p-3 text-left font-semibold text-green-800 border-b border-green-200">Date</th>
                    <th className="p-3 text-left font-semibold text-green-800 border-b border-green-200">Recipient</th>
                    <th className="p-3 text-left font-semibold text-green-800 border-b border-green-200">Award</th>
                    <th className="p-3 text-left font-semibold text-green-800 border-b border-green-200">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {awardRecipients.map((recipient, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-green-100 hover:bg-green-50"
                    >
                      <td className="p-3 text-sm">{recipient.date}</td>
                      <td className="p-3 font-medium">{recipient.recipient}</td>
                      <td className="p-3 text-green-700">{recipient.award}</td>
                      <td className="p-3 text-muted-foreground text-sm">{recipient.contribution}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      
      case "trl":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {trlLevels.map((trl, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg border border-green-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-green-700">{trl.level}</span>
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-700">{index + 1}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{trl.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400">
         Awards Overview 
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Recognizing innovators and humanitarians advancing peace, sustainability, and social betterment
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="inline-flex rounded-lg bg-green-50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white shadow text-green-700"
                  : "text-green-600 hover:bg-green-100"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-6 md:p-8">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default AwardOverview;