// components/ResumeToLatexConverter.tsx
import React from 'react';

interface LanguagePair {
  en: string;
  ja: string;
}

interface Contact {
    name: string;
  email: string;
  github: string;
  linkedin: string;
}

interface Education {
  school: string;
  degree: LanguagePair;
  gpa: string;
  year: string;
  location?: string;
}

interface Certification extends LanguagePair {}

interface LanguageSkill extends LanguagePair {}

interface GroupedSkills {
  [key: string]: (string | LanguagePair)[];
}

interface ProjectDetail extends LanguagePair {}

interface Project {
  id: string;
  title: LanguagePair;
  description: LanguagePair;
  techStack: string[];
  link?: string;
  details: ProjectDetail[];
}

interface ExperienceDetail extends LanguagePair {}

interface Achievement extends LanguagePair {}

interface Experience {
  company: LanguagePair;
  position: LanguagePair;
  location: LanguagePair;
  period: LanguagePair;
  description: LanguagePair;
  techStack: string[];
  details: ExperienceDetail[];
  achievements?: Achievement[];
}

interface ResumeData {
  contact: Contact;
  education: Education[];
  certifications: Certification[];
  languageSkills: LanguageSkill[];
  groupedSkills: GroupedSkills;
  projects: Project[];
  experience: Experience[];
}

interface ResumeToLatexConverterProps {
  resumeData: ResumeData;
  language?: 'en' | 'ja';
}

const ResumeToLatexConverter: React.FC<ResumeToLatexConverterProps> = ({ 
  resumeData, 
  language = 'en' 
}) => {
  const escapeLatexSpecialChars = (text: string): string => {
    const specialChars: Record<string, string> = {
      '&': '\\&',
      '%': '\\%',
      '$': '\\$',
      '#': '\\#',
      '_': '\\_',
      '{': '\\{',
      '}': '\\}',
      '~': '\\textasciitilde{}',
      '^': '\\textasciicircum{}',
      '\\': '\\textbackslash{}',
    };
    
    return text.replace(/[&%$#_{}~^\\]/g, (char) => specialChars[char] || char);
  };

  const getLocalizedText = (text: LanguagePair | string): string => {
    if (typeof text === 'string') return text;
    return text[language];
  };

const generateLatex = (): string => {
    let latex = `%-------------------------------------------------------------------------------
% Generated Resume LaTeX - Detailed Version
%-------------------------------------------------------------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
\\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[2]{
\\item\\small{
    \\textbf{#1}{: #2 \\vspace{-2pt}}
}
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-4pt}}

\\renewcommand{\\labelitemii}{$\\circ$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

%-------------------------------------------------------------------------------
% HEADER
%-------------------------------------------------------------------------------
\\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
\\textbf{\\Large ${resumeData.contact.name}} & Email : \\href{mailto:${resumeData.contact.email.replace(" [at] ", "@")}}{${resumeData.contact.email.replace(" [at] ", "@")}}\\\\
& Github : \\href{${resumeData.contact.github}}{${resumeData.contact.github.replace('https://', '')}} \\\\
& LinkedIn : \\href{${resumeData.contact.linkedin}}{${resumeData.contact.linkedin.replace('https://', '')}} \\\\
\\end{tabular*}

%-------------------------------------------------------------------------------
% EDUCATION
%-------------------------------------------------------------------------------
\\section{Education}
\\resumeSubHeadingListStart
    ${resumeData.education.map(edu => `
    \\resumeSubheading
    {${escapeLatexSpecialChars(edu.school)}}{${edu.location ? escapeLatexSpecialChars(edu.location) : ''}}
    {${escapeLatexSpecialChars(getLocalizedText(edu.degree))}; GPA: ${escapeLatexSpecialChars(edu.gpa)}}{${escapeLatexSpecialChars(edu.year)}}
    `).join('')}
\\resumeSubHeadingListEnd

%-------------------------------------------------------------------------------
% EXPERIENCE
%-------------------------------------------------------------------------------
\\section{Experience}
\\resumeSubHeadingListStart
    ${resumeData.experience.map(exp => `
    \\resumeSubheading
    {${escapeLatexSpecialChars(getLocalizedText(exp.company))}}{${escapeLatexSpecialChars(getLocalizedText(exp.location))}}
    {${escapeLatexSpecialChars(getLocalizedText(exp.position))}}{${escapeLatexSpecialChars(getLocalizedText(exp.period))}}
    \\resumeItemListStart
    \\resumeItem{Description}
        {${escapeLatexSpecialChars(getLocalizedText(exp.description))}}
    \\resumeItem{Tech Stack}
        {${exp.techStack.map(t => escapeLatexSpecialChars(t)).join(', ')}}
    \\resumeItem{Details}
        {\\begin{itemize}
        ${exp.details.map(detail => `
        \\item ${escapeLatexSpecialChars(getLocalizedText(detail))}
        `).join('')}
        \\end{itemize}}
    ${exp.achievements ? `
    \\resumeItem{Achievements}
        {\\begin{itemize}
        ${exp.achievements.map(ach => `
        \\item ${escapeLatexSpecialChars(getLocalizedText(ach))}
        `).join('')}
        \\end{itemize}}
    ` : ''}
    \\resumeItemListEnd
    `).join('\n')}
\\resumeSubHeadingListEnd

%-------------------------------------------------------------------------------
% PROJECTS
%-------------------------------------------------------------------------------
\\section{Projects}
\\resumeSubHeadingListStart
    ${resumeData.projects.map(proj => `
    \\resumeSubItem{\\href{${proj.link}}{\\textbf{${escapeLatexSpecialChars(getLocalizedText(proj.title))}} (${proj.techStack.map(t => escapeLatexSpecialChars(t)).join(', ')})}}
    {${escapeLatexSpecialChars(getLocalizedText(proj.description))}
    \\begin{itemize}
        ${proj.details.map(detail => `
        \\item ${escapeLatexSpecialChars(getLocalizedText(detail))}
        `).join('')}
    \\end{itemize}}
    `).join('\n')}
\\resumeSubHeadingListEnd

%-------------------------------------------------------------------------------
% CERTIFICATIONS
%-------------------------------------------------------------------------------
\\section{Certifications}
\\resumeSubHeadingListStart
    ${resumeData.certifications.map(cert => `
    \\resumeSubItem{${escapeLatexSpecialChars(getLocalizedText(cert))}}{}
    `).join('')}
\\resumeSubHeadingListEnd

%-------------------------------------------------------------------------------
% SKILLS
%-------------------------------------------------------------------------------
\\section{Skills}
\\resumeSubHeadingListStart
    ${Object.entries(resumeData.groupedSkills).map(([category, skills]) => `
    \\resumeSubItem{\\textbf{${escapeLatexSpecialChars(category)}}}
    {${(skills as (string | LanguagePair)[]).map(skill => 
        typeof skill === 'string' ? 
        escapeLatexSpecialChars(skill) : 
        escapeLatexSpecialChars(getLocalizedText(skill))
    ).join(', ')}}
    `).join('\n')}
    \\resumeSubItem{\\textbf{Languages}}
    {${resumeData.languageSkills.map(skill => 
        escapeLatexSpecialChars(getLocalizedText(skill))).join(', ')}}
\\resumeSubHeadingListEnd

%-------------------------------------------------------------------------------
\\end{document}
`;

return latex;
};

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generateLatex());
    alert('LaTeX code copied to clipboard!');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generateLatex()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.tex';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <button 
          onClick={handleCopyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Copy LaTeX to Clipboard
        </button>
        <button 
          onClick={handleDownload}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download LaTeX File
        </button>
      </div>
      {/* <pre className="p-4 bg-gray-100 rounded overflow-auto text-xs">
        {generateLatex()}
      </pre> */}
    </div>
  );
};

export default ResumeToLatexConverter;