/* eslint-disable linebreak-style */
const seeProjectBtns = document.querySelectorAll(
  '.card-info-link-container button',
);
// Mobile Pop up
const mobileExitBtn = document.querySelector(
  '.mobile-details-first-row-container img',
);
const mobileDetailsPopupBgContainer = document.querySelector(
  '.mobile-details-popup-bg-container',
);
const mobileProjectsData = [
  {
    id: 0,
    title: 'Tonic',
    snapshootUrl: '/images/Snapshoot Portfolio1.png',
    clientName: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['Html', 'CSS', 'Javascript'],
    previewLinkUrl: '#',
    sourceLinkUrl: '#',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    snapshootUrl: '/images/Snapshoot Portfolio2.png',
    clientName: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['Html', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
  {
    id: 2,
    title: 'Tonic',
    snapshootUrl: '/images/Snapshoot Portfolio3.png',
    clientName: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['Html', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    snapshootUrl: '/images/Snapshoot Portfolio4.png',
    clientName: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['Html', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
];
const mobileTitle = document.querySelector(
  '.mobile-details-first-row-container h2',
);
const mobileSnapshoot = document.querySelector('.popup-snapshoot');
const mobileClientName = document.querySelector('.client-name');
const mobileRole = document.querySelector('.my-role');
const mobileYear = document.querySelector('.date-year');
const mobileDescription = document.querySelector('.popup-description');
// Desktop
const desktopExitBtn = document.querySelector(
  '.desktop-details-first-row-container img',
);
const desktopDetailsPopupBgContainer = document.querySelector(
  '.desktop-details-popup-bg-container',
);
const desktopProjectData = [
  {
    id: 0,
    title: 'Tonic',
    snapshootUrl: '/images/Snapshoot Portfolio5.png',
    clientName: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['Html', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    snapshootUrl: '/images/Snapshoot Portfolio6.png',
    clientName: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    stacks: ['Html', 'Ruby on rails', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
  {
    id: 2,
    title: 'Facebook 360',
    snapshootUrl: '/images/Snapshoot Portfolio7.png',
    clientName: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    stacks: ['Html', 'Ruby on rails', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
  {
    id: 3,
    title: 'Uber Navigation',
    snapshootUrl: '/images/Snapshoot Portfolio8.png',
    clientName: 'Uber',
    role: 'Lead Developer',
    year: 2018,
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    stacks: ['Html', 'Ruby on rails', 'CSS', 'Javascript'],
    previewLinkUrl: '',
    sourceLinkUrl: '',
  },
];
const desktopTitle = document.querySelector(
  '.desktop-details-first-row-container h2',
);
const desktopSnapshoot = document.querySelector(
  '.desktop-details-snapshoot-container img',
);
const desktopClientName = document.querySelector('.desktop-client-name');
const desktopRole = document.querySelector('.desktop-my-role');
const desktopYear = document.querySelector('.desktop-date-year');
const desktopDescription = document.querySelector('.desktop-popup-description');

// Mobile
if (window.innerWidth <= 375) {
  // exit button functionality
  mobileExitBtn.addEventListener('click', () => {
    mobileDetailsPopupBgContainer.style.display = 'none';
  });

  // each project show info functionality
  seeProjectBtns.forEach((seeProjectBtn, index) => {
    seeProjectBtn.addEventListener('click', () => {
      // show popup
      mobileDetailsPopupBgContainer.style.display = 'block';
      // replace each card info
      mobileProjectsData.forEach((card) => {
        if (index === card.id) {
          mobileTitle.innerHTML = card.title;
          mobileSnapshoot.src = card.snapshootUrl;
          mobileClientName.innerHTML = card.clientName;
          mobileRole.innerHTML = card.role;
          mobileYear.innerHTML = card.year;
          mobileDescription.innerHTML = card.description;
        }
      });
    });
  });
} else {
  // Desktop
  // exit button functionality
  desktopExitBtn.addEventListener('click', () => {
    desktopDetailsPopupBgContainer.style.display = 'none';
  });
  // each project show info functionality
  seeProjectBtns.forEach((seeProjectBtn, index) => {
    seeProjectBtn.addEventListener('click', () => {
      // show popup
      desktopDetailsPopupBgContainer.style.display = 'block';
      // write from here
      // replace each card info
      desktopProjectData.forEach((card) => {
        if (index === card.id) {
          desktopTitle.innerHTML = card.title;
          desktopSnapshoot.src = card.snapshootUrl;
          desktopClientName.innerHTML = card.clientName;
          desktopRole.innerHTML = card.role;
          desktopYear.innerHTML = card.year;
          desktopDescription.innerHTML = card.description;
        }
      });
    });
  });
}
