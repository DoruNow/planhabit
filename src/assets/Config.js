module.exports = [
    {
        name: "start",
        component: "Start",
        title: "Welcome to the Habit Planner",
        menuItem: "Intro",
        explanation: [
            {
                text: "First and foremost, this is a habit planner, not a tracker. We'll get to tracking soon.",
                class: "text-subtitle-1",
            },
            {
                text: "Planning our lives for success is not easy, this process takes time.",
                class: "text-subtitle-1",
            },
            {
                text: "We do believe in privacy so we do not save/sell your data, we do not set cookies, there's no login, no annoying emails, everything happens in your browser. Data will not be lost between restarts, only if you reinstall your browser. Have no fear, we plan to implement a way for you to either save locally, print your data in a nice way, and also load a saved file.",
                class: "text-subtitle-1",
            },
            {
                text: "Congrats, you really read all of it, first task completed! Let's start with our current Behavior.",
                class: "text-subtitle-1",
            },
        ],
        tabs: ["Intro", "Explanation", "Demo", "About"],
    },
    {
        name: "behavior",
        component: "Behavior",
        title: "Current habit list",
        menuItem: "Start Planning",
        explanation: [
            {
                text: "Planning the future is sometimes easier when we understand the present.Starting small is very important.",
                class: "font-weight-medium text-subtitle-1",
            },
            {
                text: "Let's write down some habits we already have in place, in the order of their occurence.",
                class: "text-subtitle-1",
            },
            {
                text: "Let's start by focusing on a part of your day you want to improve. Choose a part of the day where your schedule is the most structuredand can be improved.I guess for most of us mornings are a good candidate.",
                class: "text-subtitle-1",
            },
        ],
        tabs: ["List", "Explanation", "Examples", "Fan Favorites"],
    },
];
