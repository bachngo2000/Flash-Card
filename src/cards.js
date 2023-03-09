var index;
    //dictionary to hold set of questions and answers 
    const Qset = [
        "Is D.C considred a state?",
        "What do we call the first 10 amendments?",
        "How many US representatives are there?",
        "Who was the US president during the Great Depression and WWII?",
        "How many US senators are there?",
        "Who is serving as Vice President?",
        "How many US senators are there?",
        "How many US states are there?",
        "What does IRS stand for?",
        "How many justices does the Supreme Court have?",
    ];

    const Aset = [
        "No, it's a federal district",
        "The Bill of Rights",
        "435",
        "Franklin D. Roosevelt",
        "100",
        "Kamala Harris",
        "100",
        "50",
        "Internal Revenue Service",
        "9",
    ];

    const getRandom = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getQuestion = () => {
        const randomIndex = getRandom(Qset.length);
        index = randomIndex;
        return Qset[randomIndex];
    }

    const getAnswer = () => {
        return Aset[index];
    }
export { getQuestion, getAnswer, index };