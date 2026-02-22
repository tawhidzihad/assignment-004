// Function for rejected card showing
function rejectedRender(){
    filterCards.innerHTML = '';

    // Loop For Get Element 1by1
    for(let rejected of rejectedList){

        // create new element
        const div = document.createElement('div');
        div.classList.add(
            "flex",
            "justify-between",
            "rounded-sm",
            "p-5",
            "bg-[#F1F2F4]"
        );

        div.innerHTML = `
            <!-- Left Side Box -->
            <div class="space-y-4">
                <div>
                    <h2 class="companyName text-[18px] font-semibold text-[#002C5C]">${rejected.companyName}</h2>
                    <p class="position text-[#64748B]">${rejected.position}</p>
                </div>

                <div>
                    <span class="location text-[14px] text-[#64748B]">${rejected.location}</span>
                    <span class="type text-[14px] text-[#64748B]">${rejected.type}</span>
                    <span class="salary text-[14px] text-[#64748B]">${rejected.salary}</span>
                </div>

                <div>
                    <span class="staTus px-1.5 py-2 rounded-sm text-[#EF4444] border border-[#EF4444]">${rejected.status}</span>
                </div>

                <div>
                    <p class="description text-[#323B49]">${rejected.description}</p>
                </div>

                <div class="flex gap-4">
                    <button class="interviewBtn btn text-[#10B981] border border-[#10B981]">INTERVIEW</button>
                    <button class="rejectedBtn btn text-[#EF4444] border border-[#EF4444]">REJECTED</button>
                </div>
            </div>


            <!-- Right Side Box -->
            <div>
                <div class="btn rounded-full p-3">
                    <i class="deleteBtn fa-regular fa-trash-can"></i>
                </div>
            </div>
        `;

        // Append Child in Section
        filterCards.appendChild(div);
    }
} 

// Function for interview card showing
function interviewRender(){
    filterCards.innerHTML = '';

    // Loop For Get Element 1by1
    for(let interview of interViewList){

        // create new element
        const div = document.createElement('div');
        div.classList.add(
            "flex",
            "justify-between",
            "rounded-sm",
            "p-5",
            "bg-[#F1F2F4]"
        );

        div.innerHTML = `
            <!-- Left Side Box -->
            <div class="space-y-4">
                <div>
                    <h2 class="companyName text-[18px] font-semibold text-[#002C5C]">${interview.companyName}</h2>
                    <p class="position text-[#64748B]">${interview.position}</p>
                </div>

                <div>
                    <span class="location text-[14px] text-[#64748B]">${interview.location}</span>
                    <span class="type text-[14px] text-[#64748B]">${interview.type}</span>
                    <span class="salary text-[14px] text-[#64748B]">${interview.salary}</span>
                </div>

                <div>
                    <span class="staTus px-1.5 py-2 rounded-sm text-[#10B981] border border-[#10B981]">${interview.status}</span>
                </div>

                <div>
                    <p class="description text-[#323B49]">${interview.description}</p>
                </div>

                <div class="flex gap-4">
                    <button class="interviewBtn btn text-[#10B981] border border-[#10B981]">INTERVIEW</button>
                    <button class="rejectedBtn btn text-[#EF4444] border border-[#EF4444]">REJECTED</button>
                </div>
            </div>


            <!-- Right Side Box -->
            <div>
                <div class="btn rounded-full p-3">
                    <i class="deleteBtn fa-regular fa-trash-can"></i>
                </div>
            </div>
        `;
        
        // Append Child in Section
        filterCards.appendChild(div);
    }
} 


// function for showing empty box when card is empty.
function showEmptyBox(){
    if(currentStatus == "filter_all_btn"){
        if(allCards.children.length === 0){
            emptyBox.classList.remove("hidden");
        } else{
            emptyBox.classList.add("hidden");
        }
    }

    else if(currentStatus == "filter_interview_btn"){
        if(interViewList.length === 0){
            emptyBox.classList.remove("hidden")
        } else{
            emptyBox.classList.add("hidden")
        }
    }

    else if(currentStatus == "filter_rejected_btn"){
        if(rejectedList.length === 0){
            emptyBox.classList.remove("hidden");
        } else{
            emptyBox.classList.add("hidden");
        };
    };
};