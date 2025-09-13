import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon } from 'react-icons/fa';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const timelineData = [
  {
    timelineType: "work",
    name: "Flipkart (Iriis Payroll)",
    title: "Junior Research Analyst",
    techStack: "IDS, CCTV Systems, Network Security, Monitoring",
    summaryPoints: "Implemented and managed IDS (Intrusion Detection Systems) to monitor network traffic, detect anomalies, and enhance Flipkart's warehouse security infrastructure. Configured and maintained CCTV surveillance systems, integrating real-time monitoring and alert mechanisms to strengthen physical and operational security.",
    dateRange: "July 2025 - Present"
  },
  {
    timelineType: "work",
    name: "Travelplus (Remote)",
    title: "Technical Operation Intern",
    techStack: "HTML, CSS, JavaScript, Biometric Systems, Network Infrastructure",
    summaryPoints: "Assisted in facility management automation, including biometric systems, digital locks, and centralized monitoring dashboards for smooth hotel operations. Monitored and maintained IT/network infrastructure, supporting hotel operations such as booking systems, Wi-Fi, and access control. Developed responsive and interactive web pages using HTML, CSS, and JavaScript to enhance user experience and functionality.",
    dateRange: "February 2024 - April 2024"
  },
  {
    timelineType: "work",
    name: "Cognifyz Technologies (Remote)",
    title: "UI/UX Intern",
    techStack: "Figma, UI/UX Design, Prototyping, Wireframing",
    summaryPoints: "Created intuitive and responsive web/mobile interfaces using design tools and front-end technologies to improve user engagement. Developed interactive prototypes and wireframes, collaborating with teams to transform requirements into user-centered designs.",
    dateRange: "May 2024 - June 2024"
  },
  {
    timelineType: "education",
    name: "Bapatla Engineering College, Bapatla",
    title: "Bachelor of Technology - Cyber Security",
    techStack: "",
    summaryPoints: "Comprehensive study of cybersecurity principles, network security, ethical hacking, and digital forensics.",
    dateRange: "2021 - 2025"
  },
  {
    timelineType: "education",
    name: "Narayan Junior College",
    title: "Intermediate - Science Stream",
    techStack: "",
    summaryPoints: "Foundation in mathematics, physics, and chemistry with focus on analytical thinking.",
    dateRange: "2019 - 2021"
  },
  {
    timelineType: "education",
    name: "Vignan High School",
    title: "SSC - Board of Secondary Education, Andhra Pradesh",
    techStack: "",
    summaryPoints: "Secondary education with strong foundation in core subjects.",
    dateRange: "2018 - 2019"
  }
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;