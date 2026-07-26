/**
 * Team.jsx
 */

import { User, GitBranch } from "lucide-react";

import {
  CONTAINER,
  SECTION_Y,
  CARD,
  BG_PRIMARY,
  FOCUS_RING,
} from "../../layouts/layout";

import SectionHeader from "../common/SectionHeader";

const TEAM_MEMBERS = [
  {
    name: "Satyam Kumar Jha",
    role: "Web Development & CAD Work",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Aman Chaudhary",
    role: "Team Lead | IoT & Embedded Systems",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Himanshu Prajapati",
    role: "Full-Stack Developer",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Aryan Verma",
    role: "IoT, Documentation & Web Development",
    github: "#",
    linkedin: "#",
  },
];

const SOCIAL_LINK_CLASS = `rounded-lg p-2 text-[#94A3B8] transition-colors duration-200 hover:bg-[#0F172A] hover:text-[#F8FAFC] ${FOCUS_RING}`;

function Team() {
  return (
    <section
      id="team"
      className={`${BG_PRIMARY} ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Team"
          headingId="team-heading"
          title="The People Building It"
          subtitle="Meet the team behind the Smart Rural Environment & Farm Safety Platform."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`${CARD} flex flex-col justify-between p-6 text-center transition-transform hover:-translate-y-1`}
            >
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F172A]">
                  <User
                    className="h-7 w-7 text-[#94A3B8]"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#94A3B8]">
                  {member.role}
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className={SOCIAL_LINK_CLASS}
                  aria-label={`${member.name} GitHub`}
                >
                  <GitBranch size={18} />
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={SOCIAL_LINK_CLASS}
                  aria-label={`${member.name} LinkedIn`}
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;