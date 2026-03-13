import React from 'react';

import atmIcon from "../assets/ATM.png";
import citizenshipIcon from "../assets/Citizenship.png";
import bucketListsIcon from "../assets/BucketLists.png";
import alfalahIcon from "../assets/alfalah-icon.png";
import kostkuIcon from "../assets/KostKuLogo.png";
import sahamIcon from "../assets/KalkulatorSahamIndonesia.png";
import rekapKursIcon from "../assets/RekapKurs.png";
import quranIcon from "../assets/Alquran.png";
import alkitabIcon from "../assets/Alkitab.png";

const Projects = () => {
  const allApps = [
    {
      title: "At The Money",
      desc: "Check the premium price of at-the-money stock options.",
      link: "https://apps.apple.com/us/app/at-the-money/id6751127098",
      icon: atmIcon,
      region: "App Store (US)"
    },
    {
      title: "U.S. Citizenship Quiz",
      desc: "Test your knowledge of U.S. civics for the naturalization test.",
      link: "https://apps.apple.com/us/app/u-s-citizenship-quiz/id6747452431",
      icon: citizenshipIcon,
      region: "App Store (US)"
    },
    {
      title: "To Achieve",
      desc: "Track your goals, bucket lists, and personal achievements.",
      link: "https://apps.apple.com/us/app/to-achieve/id6747952687",
      icon: bucketListsIcon,
      region: "App Store (US)"
    },
    {
      title: "Alfalah Residence",
      desc: "A simple application for managing a boarding house (kost).",
      link: "https://apps.apple.com/us/app/alfalah-residence/id6747454249",
      icon: alfalahIcon,
      region: "App Store (Indonesia)"
    },
    {
      title: "Kost Ku",
      desc: "Boarding house management with separate admin and user roles.",
      link: "https://apps.apple.com/us/app/kost-ku/id6748419924",
      icon: kostkuIcon,
      region: "App Store (Indonesia)"
    },
    {
      title: "Kalkulator Saham Indonesia",
      desc: "A stock market calculator for the Indonesian Stock Exchange (IDX).",
      link: "https://apps.apple.com/us/app/kalkulator-saham-indonesia/id6747694048",
      icon: sahamIcon,
      region: "App Store (Indonesia)"
    },
    {
      title: "Rekap Kurs",
      desc: "Track daily transactions across multiple currencies.",
      link: "https://apps.apple.com/us/app/alkitab-ku/id6748284202",
      icon: rekapKursIcon,
      region: "App Store (Indonesia)"
    },
    {
      title: "Al-Qur'an Indonesia",
      desc: "Read, explore, and study the Quran with Indonesian translation.",
      link: "https://apps.apple.com/us/app/al-quran-indonesia/id6748412377",
      icon: quranIcon,
      region: "App Store (Indonesia)"
    },
    {
      title: "Alkitab Ku",
      desc: "An easy-to-use app for reading the Bible in Indonesian.",
      link: "https://apps.apple.com/us/app/alkitab-ku/id6748284202",
      icon: alkitabIcon,
      region: "App Store (Indonesia)"
    }
  ];

  return (
    <main className="wrapper">
      <h2 className="section-heading">Projects</h2>
      <p className="sub-heading">Lists of personal projects.</p>

      <div className="projects-grid">
        {allApps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">
              <img src={app.icon} alt={app.title} />
            </div>

            <div className="app-info">
              <h3 className="app-title">{app.title}</h3>
              <p className="app-description">{app.desc}</p>
             
            </div>

            <div className="app-actions">
              <a href={app.link} target="_blank" rel="noreferrer" className="btn-details">
                Download
              </a>
              <span className="download-link">{app.region}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;