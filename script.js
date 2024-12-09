// Define workout plan with details for each day
const workouts = {
  0: {
    day: "Day 7: Rest or Active Recovery",
    description: "Light activities: Yoga, swimming, walking, or cycling.",
  },
  1: {
    day: "Day 1: Push (Chest, Shoulders, Triceps)",
    sections: {
      "Compound Movements": [
        "Barbell Bench Press: 4 sets x 6-8 reps - Focus on progressive overload; rest 2-3 minutes.",
        "Incline Dumbbell Press: 3 sets x 8-12 reps - Target upper chest with controlled movement.",
      ],
      "Accessory Movements": [
        "Overhead Dumbbell Shoulder Press: 3 sets x 8-12 reps",
        "Incline Dumbbell Flyes: 3 sets x 10-12 reps",
        "Lateral Raises: 4 sets x 12-15 reps",
      ],
      "Triceps Isolation": [
        "Skull Crushers (EZ Bar): 3 sets x 10-12 reps",
        "Cable Rope Pushdowns: 3 sets x 12-15 reps",
      ],
    },
  },
  2: {
    day: "Day 2: Pull (Back, Biceps, Rear Delts)",
    sections: {
      "Compound Movements": [
        "Pull-Ups (Weighted if possible): 4 sets x 6-8 reps - Aim for controlled full range of motion.",
        "Barbell Rows: 4 sets x 8-10 reps - Maintain a flat back and focus on squeezing shoulder blades.",
      ],
      "Accessory Movements": [
        "Seated Cable Rows: 3 sets x 10-12 reps",
        "Face Pulls: 3 sets x 12-15 reps",
      ],
      "Biceps Isolation": [
        "Barbell Bicep Curls: 3 sets x 10-12 reps",
        "Incline Dumbbell Curls: 3 sets x 10-12 reps",
      ],
      Optional: ["Dumbbell Shrugs: 3 sets x 15-20 reps"],
    },
  },
  3: {
    day: "Day 3: Legs (Quads, Hamstrings, Glutes, Calves)",
    sections: {
      "Compound Movements": [
        "Barbell Back Squats: 4 sets x 6-8 reps - Depth is key; go below parallel if flexibility allows.",
        "Romanian Deadlifts (RDLs): 3 sets x 8-10 reps - Focus on hamstring stretch and hip hinge.",
      ],
      "Accessory Movements": [
        "Leg Press: 4 sets x 10-12 reps",
        "Walking Dumbbell Lunges: 3 sets x 12 steps per leg",
      ],
      "Calves Isolation": [
        "Standing Calf Raises: 4 sets x 15-20 reps",
        "Seated Calf Raises: 3 sets x 15-20 reps",
      ],
    },
  },
  4: {
    day: "Day 4: Push (Variation)",
    sections: {
      "Compound Movements": [
        "Incline Barbell Bench Press: 4 sets x 6-8 reps",
        "Flat Dumbbell Press: 3 sets x 8-12 reps",
      ],
      "Accessory Movements": [
        "Standing Overhead Barbell Press: 4 sets x 8-10 reps",
        "Chest Dips (Weighted if possible): 3 sets x 10-12 reps",
        "Cable Chest Flyes: 3 sets x 12-15 reps",
      ],
      "Triceps Isolation": [
        "Overhead Dumbbell Tricep Extensions: 3 sets x 10-12 reps",
        "Close-Grip Push-Ups: 3 sets x AMRAP",
      ],
    },
  },
  5: {
    day: "Day 5: Pull (Variation)",
    sections: {
      "Compound Movements": [
        "Lat Pulldowns: 4 sets x 8-10 reps - Focus on pulling to chest with controlled tempo.",
        "Dumbbell Rows: 3 sets x 10-12 reps",
      ],
      "Accessory Movements": [
        "Chest-Supported T-Bar Rows: 3 sets x 8-12 reps",
        "Reverse Flyes: 3 sets x 12-15 reps",
      ],
      "Biceps Isolation": [
        "Hammer Curls: 3 sets x 10-12 reps",
        "Concentration Curls: 3 sets x 12-15 reps",
      ],
    },
  },
  6: {
    day: "Day 6: Legs (Variation)",
    sections: {
      "Compound Movements": [
        "Front Squats: 4 sets x 6-8 reps",
        "Sumo Deadlifts: 4 sets x 6-8 reps",
      ],
      "Accessory Movements": [
        "Bulgarian Split Squats: 3 sets x 10-12 reps per leg",
        "Leg Extensions (Machine): 3 sets x 12-15 reps",
      ],
      "Calves Isolation": [
        "Donkey Calf Raises (Machine or Weighted): 4 sets x 15-20 reps",
        "Tibialis Raises: 3 sets x 15-20 reps",
      ],
    },
  },
};
// Fetch current day
const today = new Date().getDay();

// Save workout progress to localStorage
function saveWorkoutProgress() {
  const data = {};
  document.querySelectorAll(".exercise").forEach((exercise) => {
    const id = exercise.dataset.id;
    const weight = exercise.querySelector(".weight").value;
    const reps = exercise.querySelector(".reps").value;
    const checked = exercise.querySelector(".completed").checked;
    data[id] = { weight, reps, checked };
  });
  localStorage.setItem(`workout-day-${today}`, JSON.stringify(data));
}

// Load workout progress from localStorage
function loadWorkoutProgress() {
  const savedData =
    JSON.parse(localStorage.getItem(`workout-day-${today}`)) || {};
  document.querySelectorAll(".exercise").forEach((exercise) => {
    const id = exercise.dataset.id;
    if (savedData[id]) {
      exercise.querySelector(".weight").value = savedData[id].weight;
      exercise.querySelector(".reps").value = savedData[id].reps;
      exercise.querySelector(".completed").checked = savedData[id].checked;
    }
  });
}

// Display workout for the day
document.addEventListener("DOMContentLoaded", () => {
  const workoutContainer = document.getElementById("workout-container");
  const dayNameElement = document.getElementById("day-name");

  const workout = workouts[today];
  dayNameElement.textContent = workout.day;

  if (workout.description) {
    workoutContainer.innerHTML = `<p>${workout.description}</p>`;
  } else {
    Object.keys(workout.sections).forEach((section) => {
      const sectionTitle = document.createElement("p");
      sectionTitle.textContent = section;
      workoutContainer.appendChild(sectionTitle);

      workout.sections[section].forEach((exercise, index) => {
        const exerciseContainer = document.createElement("div");
        exerciseContainer.classList.add("exercise");
        exerciseContainer.dataset.id = `${section}-${index}`;

        exerciseContainer.innerHTML = `
          <label>
            <input class="completed" type="checkbox"> ${exercise}
          </label>
          <div class="inputs">
            <input class="weight" type="number" placeholder="Weight (kg)">
            <input class="reps" type="number" placeholder="Reps">
          </div>
        `;

        // Add listeners for automatic saving
        exerciseContainer
          .querySelectorAll("input")
          .forEach((input) =>
            input.addEventListener("input", saveWorkoutProgress)
          );

        workoutContainer.appendChild(exerciseContainer);
      });
    });
  }

  // Load saved data
  loadWorkoutProgress();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered: ', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
  });
}
