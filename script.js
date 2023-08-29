async function fetchData() { 
    try {
      const response = await fetch('data.json');
      const data = await response.json();
  
      const jobsListPhotosnap = document.getElementById('job-photosnap');
      const jobsListManage = document.getElementById('job-manage');
      const jobsListAccount = document.getElementById('job-account');
      const jobsListMyHome = document.getElementById('job-myhome');
      const jobsListLoopStudios = document.getElementById('job-loopstudios');
      const jobsListFaceIt = document.getElementById('job-FaceIt');
      const jobsListShortly = document.getElementById('job-shortly');
      const jobsListInsure = document.getElementById('job-Insure');
      const jobsListEyecamCo = document.getElementById('job-EyecamCo');
      const jobsListTheAirFilterCompany = document.getElementById('job-TheAirFilterCompany');

  
      data.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
          <img src="${job.logo}" alt="${job.company} Logo">
          <h2>${job.company}</h2>
          <p id="position">${job.position}</p>
          <p>${job.role} - ${job.level}</p>
          <p>${job.location}</p>
          <p>${job.languages.join(', ')}</p>
          <p>${job.tools.join(', ')}</p>
          <p>${job.postedAt}</p>
          <p>${job.contract}</p>
      `;

      if (job.company === 'Photosnap') {
        jobsListPhotosnap.appendChild(jobCard);

      } else if (job.company === 'Manage') {
        jobsListManage.appendChild(jobCard);  

      } else if (job.company === 'Account'){
        jobsListAccount.appendChild(jobCard);
        
      } else if (job.company === 'MyHome'){
        jobsListMyHome.appendChild(jobCard);

      } else if (job.company === 'Loop Studios'){
        jobsListLoopStudios.appendChild(jobCard);

      } else if (job.company === 'FaceIt'){
        jobsListFaceIt.appendChild(jobCard);

      } else if (job.company === 'Shortly'){
        jobsListShortly.appendChild(jobCard);

      } else if (job.company === 'Insure'){
        jobsListInsure.appendChild(jobCard);

      } else if (job.company === 'Eyecam Co.'){
        jobsListEyecamCo.appendChild(jobCard);

      } else if (job.company === 'The Air Filter Company'){
        jobsListTheAirFilterCompany.appendChild(jobCard);
      } 
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

fetchData();
