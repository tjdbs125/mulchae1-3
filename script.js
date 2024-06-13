const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6thZHgy2386EvZ-Ank_AIU8x2UivI-ak2bKBqFd4PJdsgRk5V5NMmoc5pahClkVV5D1oFWIyg6EQOsElOVABBkrZbDC1tfiakuEH6GxEqGLsbN99TPJ8zsLzttDopErwtAbXNvDptRjUFjOHCnfUhh_F0_GJbTHxk8uzg9OTk5rHDAoyR8GXqY6yZxMdP/s1053/KakaoTalk_20240531_151835582_12.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoZRbOiUiFS7W_Tu1vEtPQDJEr_YyumT_zbnFRVA5r8Jx0KvNVO0gYDZGO5GtArILx_MEqHGdUMJN0dhIZFzgBkc9xPGJlMvLOozrKMC5j8f_Yx3mG6QJTJYzdYJHKi9IlM7QO8RXVJDC1HGayv8oKQcd7NhS1HXPpRbJ_G5_70O0JFdHdw3fyIOExMCj-/s558/KakaoTalk_20240614_005045491.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-AMziRtZDe8MCTF5vn6EMrkcbz4qu_10jFACQvnYKL4MJXP86WXA5gdCMfF2FTaSzq4Y15l0oNNtIoZrLRMYRG6pvGdwyAszEkvgzz3y46Zm3kUUjRgqyQu-X8wM01wtPflU2ReU0MxaKKMBCx1Jrrs8eieA0YBeoqgoxtRfn3g4ALhyDpE22WgHaskUO/s994/KakaoTalk_20240531_151835582_13.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibcAmWhWUtQLuiM4ezOWtABjoOurMPbLLI44PYqXqeSC5Wl7Z5FarUtrjwXWycQtWYd11Q59o-nXp2csB2-PctPfJQFiaHkQtf76dk0jVkfYdcghf5mYLNjKQa_o_iTqT8Cvfu49VxgH8ATPgKMrqsSnV6P1SFT2QS80fZSQOJ0-wrE4UZva-c1hxZdgUW/s557/KakaoTalk_20240614_005045491_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJn5ZcHQ2AKVoeAGuAf0K-EIjuaFvE0RbUmdZixP5r89562OqZD8HwEfqNMzHZVP-3YZ3qGmyFIuecTOzk4UlDC83NUIzBG-Rdg_SapqiUrba9Kz_1OrusqOhqFlyAWkrJbse3U0l7q-Rm7S-G_OXR5XaWMJ_CD0A4d7_6B5d9LXaJHYL36jVEYl_x7TUH/s979/KakaoTalk_20240531_151835582_14.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1oYngFQNQzX9_JWB831yHaV0cQ9gZXtVaWI8a1LQUHM_v8B3b4RW5nj3yXGYCY-j2Y9-d5GlWTVYOR9_6yp58R0_yW0-iEBQ9BpICvxjX1f9_pwzgF8VoQg6BHZ5QzYTc3V_PMg5cgzeIllBydEdg5cl_UsdJXIUheNyMxsm6RTZYLZhxPRBKZarHV8k4/s572/KakaoTalk_20240614_005045491_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLDztEyeOh_PWAbkcUkbzGIwZWWc-QN92A-Cod0Ek95w-XOqIVrynU-HjusxKgi79VkaDuXHMfeWEIWEJNJUHrVYZcsM8imXMSzzK556C7Jtn1crRA18l41UyjY5eA84VHJ0sb_hUoEm3JSyzy78acrrsvePTVJEu53zGkIsQNgxlW2cDVKdx457n-b0Hs/s1021/KakaoTalk_20240531_151835582_15.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL_27-5hmowhUnGIzLUuYXxmeN4fId3rdptubCQvINGY5eCkhMpJ1-b4Zgc4zXv1ZApqnwF3n448HoW8c-ZmRHjE0YeuN0XCGnRZihjnhUUEcYTz6VsYsYs10v6gACtVvgca-OO-UGWCfgoS0u5woejKXrAgeSzuDTg_kI_4ZkVaSo8Q3RHjVi6F2YcEp2/s571/KakaoTalk_20240614_005045491_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNDzpopXPdBbb4fLXZolGudefprcMts-3JAJyW8Kf1MtnVslPE56MsueDOqewP2gG9jy0qbb68H1ACNAtX9jZHzP60ySFVvQjzW9R2SSElEmHe-tgWHCVWbpeinStuRhVyqHv2HFBLUddlElUKnh7k3B8AAlMGTCzvLyAc8nkiQ_20ep1_EGgxy_vhUy8j/s976/KakaoTalk_20240531_151835582_16.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfrRymw4fANyLVtEWQKgcyM-1M7nVFfjzSDnWyunE8lZOojIKvd43br3E_e_wVH5xoUj0nMkwBUWmar90vtLbYKIpkewdXQbE46NFnADrBdTIPm0VAnsRSYquLaPSp3HPNFkmsdku5NxBiLlHfgPSp17k4qTCsU5LysvP8ULqAJi_1hZSZChNBZ8oBVg_l/s560/KakaoTalk_20240614_005045491_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaIq3HhnRMfsSGjUjIC32_pyWSsrqI1rs5Trg6KqDeU8XsxBtqcw9zABsiBT2sldFljiz8YTQI0_hS-9_wv3UEDXqaW-JlWv0qSZzDaBNfPjgeHDhbeMh2JHeGDDZM978Hdjgc1JbsczT281zecVLThRQhcRjxlSpBF4nqzC3K43ZEvxRycb-WrvBAhryi/s985/KakaoTalk_20240531_151835582_17.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaIq3HhnRMfsSGjUjIC32_pyWSsrqI1rs5Trg6KqDeU8XsxBtqcw9zABsiBT2sldFljiz8YTQI0_hS-9_wv3UEDXqaW-JlWv0qSZzDaBNfPjgeHDhbeMh2JHeGDDZM978Hdjgc1JbsczT281zecVLThRQhcRjxlSpBF4nqzC3K43ZEvxRycb-WrvBAhryi/s985/KakaoTalk_20240531_151835582_17.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfmxldit1zg-BeAWB2PbS4rhV0Hefc1iZ5H2-nj3YG_SjiT9wB77JX7ptmrVTvHU9rtcViDxvWGwQar7UNMOqASJO7XNVrFLqaF2e_ugYHQP4W2odJ-8xtvoLxEpvwy7pLdOTmiQWLVX2JNGzdIvSR2F2h1qUJqC38Ng2-gIxBrIaTDZbKXyovX8v1AI2U/s1006/KakaoTalk_20240531_151835582_18.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCQKXmOebAyhFB3UeUtUh-XSmxgb63OezV1eoWbU7Mbfwq17uFx1V4ukpo_NTIGiJMjUZ5_TQkLzF0PlAG8_IGgt051d9Rv6vqnTKLZEieLaOjheV5L2Ywd_cQ87k59ZjcVMtjJC0idaZgVUqLh1q3gCg8FnTcCHsbuXOoUu3TV5B-VvzcsT_QRaTFOlJf/s584/KakaoTalk_20240614_005045491_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivOKFzDnZ7ntrIt69igo68eHXGfp6oRbdohz8aRG6-YXdxTBQ28kNJO7hnP1-UibbMUx2KsEiy93gpvmdtWeIE01EeHnoXD032wXJ8xAbJ8gHrcPkF1J9OV8-d8OBC6JUZsVS4iwiH8O1BJyluEMU7zHl8bJeEHrcw8XMK4GwZ5qrlIwK7n2utXKlNaB2X/s1000/KakaoTalk_20240531_151835582_19.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieaksyDpKaFIVnQ8VNPYtlhFs7RWPMTFD6Py2NHu4wlYKZSpVNiChp0WGLsdFlubmAxQIUDFge_hfODWg3f1y0PgqjbgnfX3p3wuwO3lhjYdJ_efQbYD_k0A6TD1KzqT9ERpUV86LAIdrGS-Gk99zhGGkV8U96OMP27A7poq_YLAlyL4XMEz1kEKrhCvWi/s584/KakaoTalk_20240614_005045491_07.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjctCckFVe2hQHRqIzfUC7mnsAAQB64oT0soryXX8e29nGqEgTNJDe-NZWqkxwKX9V-oxx4mt0Kgxtg-Z7o3Od7kDu_66_LDBnuCOcomMlEufsMW7J3LrLE6tDHf0j3oe8s4DrtHAH33XgNgHDA9BbhVG-BQonUKH4Y_OfHcOHmHFJfy543-k2usUO3QfTb/s1008/KakaoTalk_20240531_151835582_20.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT84QUFqK6EqbwIdgDo_Db29MTYoTnkXwiZTIizW0CsxpOfRWp0O9Y2dJT2A14xbWCFXtVuxA2CR7ypenURzAbw5OiJXd-DK-rRToQjjMTK7YjxzVQSAhliw6t51cJLXE_hEL1LBpNxdVVQaJQOv8d-i0_IgIWnlEBsKyAwaEsxpGX2AtLpQE6EFi9wyJo/s576/KakaoTalk_20240614_005045491_08.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2bnjCJxPiIHd0s2_S61kl_SjeRSRbtAv6WcPPkeaLeoUG_Z2Kh2YPRO_micoGv6wnJCshNqFeUeeQFWUGbS_VgeHtNsST_lbgdxWjOEuEFBnJ890KotfUlY9A4A6dkG-mDitUDcU54FqgJA9UQlJ9qyEvVL-v0QxOo-cZxAJPqZyjlu8HrRuI3ZuWATGh/s948/KakaoTalk_20240531_151835582_21.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXJ6AA16YHyhgPKSNEDIuEC0aizuq5X9HippdGXkjWj5jwc0xU3TmYBFCwR62JLFA1DRMA-ATvpKzkoq8LUITTW7UItlAZVEEQjQU0BPND0RYi_hitj-FMWwgS9TfhSU06yDZDMpQCEv1VwjySiDoJiotgmgBjlEo3D68SryQA8l-BN8wyvaVyji9iorRb/s461/KakaoTalk_20240614_005045491_09.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 11,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGtbA-mWqCG0IX6u25IsbG_p9jycOBVXGLN7XR1IG13ZESXgAShjHu8oYuiDmcnyNr4HKDmqD0k_YIhYAIemULlEuyqS7IX1w6SvW_jcj7ar9rjhcKWbXZfMpmiIGaHoNV5pai0ljNz4XaKLQrFZyWU8ICEhmoqdO_5WKu1Rnxl6fhEfcfFZOxsAR5vw_-/s1009/KakaoTalk_20240531_151835582_22.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFtEbeDXGcdZ_HHibHO3bLYtUPtf0WQriU1Bh2E6-x67llYJxmjfx2Qhn08TFVLlEYj3veR24GeBIFlupM4Zd8XmKtQQ9oCGcqhc7YrOGP9T79CpNtoKHXFKRUqT5I9T_nYJ27FFzx754wr1HPhMPXO1E1EfPEpFbCSaxLGwEWOehYANoJYCHvE0Op5Rde/s730/KakaoTalk_20240614_005045491_10.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 12,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZDV2Fd9Fs6kYhhKDW3DtJ7cwMXlm8KJqb3ZzGIibVvrLsEAaitWukNA86k2IKr5B6VDR5BZa54Bbaw3gUkiSo6MpT1ph3hFvjP6owVqj-o_XgHTthjkRX8aR3WiiPrJG5FfYWHd6JoSFTc5f4zr1hNZhyyghgyP_Pqg-UFdPGV_yea4vbd14skMWtnWol/s566/KakaoTalk_20240531_151835582_23.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglruijhNryMhf1iGzHhIG_xzLO-OCSEYNbbeKgIseJibKFXc_xptXdcWdv3DWDe1YqFmJ2WYFZhfWWVrRfl0iOY32r_xEIWtSv2YaR5iXjlMAd1BEZS2Zlsbzkh9vzKEeyJhN-3vsiZn45dnBsD6V931DbZ_y3KEgOjogtQ5OhZt_Ri8yjQxXYbTPvfcp-/s579/KakaoTalk_20240614_005045491_11.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();