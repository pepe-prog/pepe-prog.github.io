const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};
function getFormValues () {
    const websiteTypeElement = document.querySelector('#project-type');
    const pmEl = document.querySelector('#pm')
    const designEl = document.querySelector('#design')
    const developerEl = document.querySelector('#developer') 
    const qaEl = document.querySelector('#qa')

   
    return {
        websiteType: websiteTypeElement.value,
        pm: pmEl.checked,
        design: designEl.checked,
        developer: developerEl.checked,
        qa: qaEl.checked,
    }
    
}
function calculate() {
    const values = getFormValues();

    let totalPrise = 0;
    const workTypes = prices[values.websiteType]

    if (values.pm) {
        totalPrise = workTypes.pm;
    }

    if (values.design) {
        totalPrise = totalPrise + workTypes.design;
        
    }
    
     if (values.developer) {
        totalPrise = totalPrise + workTypes.developer;
        
    }

     if (values.qa) {
        totalPrise = totalPrise + workTypes.qa;
        
    }

    const totalPriceEl = document.querySelector('#total-price');
    
    totalPriceEl.textContent = totalPrise;

     
    
}



const formEL = document.querySelector('#price-form');
const emailModal = document.querySelector('#modal-email');
const succModal = document.querySelector('#modal-succ');


formEL.addEventListener('change', calculate);

formEL.addEventListener('submit', function(event) {
    event.preventDefault();

    emailModal.classList.add('modal-active');
    
})

const closeButtons = document.querySelectorAll('.close-butt');

closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        emailModal.classList.remove('modal-active');
        succModal.classList.remove('modal-active');
    
    });

});

const modalEmailCont = document.querySelector('#modal-email-cont');

modalEmailCont.addEventListener('submit', function (event) {
    event.preventDefault();
    

    // const userEmailInput = document.querySelectorAll('#user-email');
    //  if (userEmailInput.value) {
    // const formData = new FormData(formEL);
    // formData.append('Email', userEmailInput.value);

//   fetch('/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//   })
//       .then(function () {
            emailModal.classList.remove('modal-active');
            succModal.classList.add('modal-active'); 
        // }) 
        // .catch(() => alert('Че за хуйня??'))


    // return;
     
    //  }
    //  const inCont = document.querySelector('#email-in-cont');

    //  inCont.classList.add('email-in-cont-error');
});