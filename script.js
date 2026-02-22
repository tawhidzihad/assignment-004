let interViewList = [];
let rejectedList = [];
let currentStatus = "all";

// Filterd Card Store
const filterCards = document.getElementById("filtered_cards");


// all Cards & Full Main Container 
const allCards = document.getElementById("cards");
const mainContainer = document.querySelector("main");

// Count Buttons 
let totalCount = document.getElementById("totalCount");
let interViewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

// Availabe Jobs 
let availableJobs = document.getElementById("avlJobs");

// Toggle Filter Buttons
const filterAllBtn = document.getElementById("filter_all_btn");
const filterInterviewBtn = document.getElementById("filter_interview_btn");
const filterRejectedBtn = document.getElementById("filter_rejected_btn");

// ----------------------------------------------------------

// Cards Count Function
function calculateTotal (){
    
    availableJobs.innerText = allCards.children.length;
    
    totalCount.innerText = allCards.children.length;
    interViewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateTotal();


// Function For Toggle Button & Change Style.
function toggleStyle(id){

    // All Button by Default Style Adding
    filterAllBtn.classList.add("border-gray-300", "text-black");
    filterInterviewBtn.classList.add("border-gray-300", "text-black");
    filterRejectedBtn.classList.add("border-gray-300", "text-black");

    filterAllBtn.classList.remove("bg-[#3B82F6]", "text-white");
    filterInterviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
    filterRejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

    // Get Clicked Button as Parameter.
    const selectedButton = document.getElementById(id);
    currentStatus = id;

    // Selected Buttons Catch BG & Text Color.
    selectedButton.classList.add("bg-[#3B82F6]", "text-white");


    // This condition for toggling.
    if(id == "filter_interview_btn"){
        allCards.classList.add("hidden");
        filterCards.classList.remove("hidden");
        availableJobs.innerText = `${interViewList.length} of ${allCards.children.length}`;
        interviewRender();
    }

    else if(id == "filter_all_btn"){
        allCards.classList.remove("hidden");
        filterCards.classList.add("hidden");
        availableJobs.innerText = `${allCards.children.length}`;
    }

    else if(id == "filter_rejected_btn"){
        allCards.classList.add("hidden");
        filterCards.classList.remove("hidden");
        availableJobs.innerText = `${rejectedList.length} of ${allCards.children.length}`;
        rejectedRender();
    }
};



// Event Delegation To Collet Info.
mainContainer.addEventListener("click", function(event){
    // Condition interview btn was clicked
    if(event.target.classList.contains("interviewBtn")){
        // get full div to collect info
        const parentNode = event.target.parentNode.parentNode;

        // Collect text using query selector.
        const companyName = parentNode.querySelector(".companyName").innerText;
        const position = parentNode.querySelector(".position").innerText;
        const location = parentNode.querySelector(".location").innerText;
        const type = parentNode.querySelector(".type").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        
        const status = parentNode.querySelector(".staTus");
        status.classList.add("text-[#10B981]", "border", "border-[#10B981]");
        status.innerText = "Interview";

        // Collect all info as a Object.
        const infoCard = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "Interview",
            description
        };

        // Find and pust only 1 time
        const cardExist = interViewList.find(item => item.companyName == infoCard.companyName);
        if(!cardExist){
            interViewList.push(infoCard);
        }

        // Remove From Array.
        rejectedList = rejectedList.filter(item => item.companyName != infoCard.companyName)

        if(currentStatus == "filter_rejected_btn"){
            rejectedRender();
        }

        calculateTotal();
    }

    // Condition rejected btn was clicked
    else if(event.target.classList.contains("rejectedBtn")){
        // get full div to collect info
        const parentNode = event.target.parentNode.parentNode;

        // Collect text using query selector.
        const companyName = parentNode.querySelector(".companyName").innerText;
        const position = parentNode.querySelector(".position").innerText;
        const location = parentNode.querySelector(".location").innerText;
        const type = parentNode.querySelector(".type").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        
        const status = parentNode.querySelector(".staTus");
        status.classList.add("text-[#EF4444]", "border", "border-[#EF4444]");
        status.innerText = "Rejected";

        // Collect all info as a Object.
        const infoCard = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "Rejected",
            description
        };


        const cardExist = rejectedList.find(item => item.companyName == infoCard.companyName);
        if(!cardExist){
            rejectedList.push(infoCard);
        }


        // Remove From Array.
        interViewList = interViewList.filter(item => item.companyName != infoCard.companyName)

        if(currentStatus == "filter_interview_btn"){
            interviewRender();
        }

        calculateTotal();
    }

    //Condition for delete btn waas clicked
    else if(event.target.classList.contains("deleteBtn")){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        
        // It will remove full card
        parentNode.remove();

        calculateTotal();
    }
});
