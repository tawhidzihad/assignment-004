let interViewList = [];
let rejectedList = [];
let currentStatus = "all";

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
};