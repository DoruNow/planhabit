module.exports = [
  {
    name: "start",
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
    tabs: [
      {
        name: "Explanation",
        component: "ExplanationComponent",
      },
      {
        name: "Intr0",
        component: "TODO",
      },
      {
        name: "Demo",
        component: "TODO",
      },
      {
        name: "About",
        component: "TODO2",
      },
    ],
  },
  {
    name: "behavior",
    title: "Current habit list",
    menuItem: "Evaluation",
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
    tabs: [
      {
        name: "Explanation",
        component: "ExplanationComponent",
      },
      {
        name: "List",
        component: "BehaviorListComponent",
      },
      {
        name: "Examples",
        component: "TODO",
      },
      {
        name: "Fan Favorites",
        component: "TODO1",
      },
    ],
  },
  {
    name: "new-connections",
    title: "Planned habit list",
    menuItem: "Start Planning",
    explanation: [
      {
        text: "What we achieved so far is to write down a chain of habits.A very effective way of introducing new habits is to insert them into this chain.Starting small is important so try to keep it simple.Only one change for now is a solid choice.An equally good choice is to aim to become consistent with the Behavior list as it is.",
        class: "text-subtitle-1",
      },
      {
        text: "What we need to understand here is that the most important aspect of habit creation is a good system, not the goal habit itself.We have to respect the complexity of our brain and avoid rushing into too many changes at once.I hope I convinced you to start simple.",
        class: "text-subtitle-1",
      },
      {
        text: "Now let's jump in and write our Behavior list as a chain, and if you decide to add your first new habit, let's add that sucker in as well.",
        class: "text-subtitle-1",
      },
    ],
    tabs: [
      {
        name: "Explanation",
        component: "ExplanationComponent",
      },
      {
        name: "Listing",
        component: "Listing",
      },
      {
        name: "Examples",
        component: "TODO",
      },
      {
        name: "Fan Favorites",
        component: "TODO1",
      },
    ],
  },
];
