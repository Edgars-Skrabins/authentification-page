const toggleSwitch = document.querySelector('.top-section input[type="checkbox"]');

function switchTheme(e:any) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'none');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

let sectionList:HTMLElement[] = [];

sectionList.push(document.getElementById("section-login"));
sectionList.push(document.getElementById("section-contact"));
sectionList.push(document.getElementById("section-contact-info"));
sectionList.push(document.getElementById("section-checkout"));


const btnSignIn:HTMLElement = document.getElementById("btn-login-signin");
btnSignIn.addEventListener("click", () =>
{
    event.preventDefault();
    switchSections("section-contact");
})

const btnContactSubmit:HTMLElement = document.getElementById("btn-contact-submit");
btnContactSubmit.addEventListener("click", () =>
{
    event.preventDefault();
    switchSections("section-contact-info");
})

const btnContactInfoSubmit:HTMLElement = document.getElementById("btn-contact-info-submit");
btnContactInfoSubmit.addEventListener("click", () =>
{
    event.preventDefault();
    switchSections("section-checkout");
})

const btnCheckoutContinue:HTMLElement = document.getElementById("btn-checkout-continue");
btnCheckoutContinue.addEventListener("click", () =>
{
    event.preventDefault();
    switchSections("section-login");
})


// function switchSections(sectionName:string): void
// {
//     sectionList.forEach(section =>
//     {
//         if(section.id === sectionName)
//         {
//             section.classList.remove("hidden");
//         }
//         else{
//             section.classList.add("hidden");
//         }
//     })
// }

function switchSections(sectionName: string):void {
    sectionList.forEach(section =>
    {
        section.classList.add("hidden");
    })
    let sectionElement= document.getElementById(sectionName);
    sectionElement.classList.remove("hidden");

}
