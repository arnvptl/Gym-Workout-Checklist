// Define workout plan with details for each day
const workouts = {
  0: {
    day: "Day 7: Rest or Active Recovery",
    description: "Light activities: Yoga, swimming, walking, or cycling. Focus on mobility, posture drills, and stretching.",
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
      "Posture Work": [
        "Wall Angels: 2 sets x 15 reps",
        "Doorway Chest Stretch: 2 x 30s each side"
      ]
    },
  },
  2: {
    day: "Day 2: Cardio + Core + Mobility",
    sections: {
      "Cardio (Pick One)": [
        "Treadmill Intervals: 6 rounds – 1 min jog, 2 min walk",
        "Cycling: 20-30 min at moderate pace",
        "Stairmaster: 15-20 min"
      ],
      "Core Training": [
        "Hanging Leg Raises: 3 sets x 12 reps",
        "Cable Crunches: 3 sets x 15 reps",
        "Plank with Shoulder Taps: 3 sets x 30s"
      ],
      "Mobility & Posture": [
        "Cat-Cow Stretch: 10 reps",
        "YTWL Raises: 2 rounds",
        "Chin Tucks: 3 sets x 10 reps"
      ]
    }
  },
  3: {
    day: "Day 3: Pull (Back, Biceps, Rear Delts)",
    sections: {
      "Compound Movements": [
        "Pull-Ups: 4 sets x 6-8 reps",
        "Barbell Rows: 4 sets x 8-10 reps",
      ],
      "Accessory Movements": [
        "Seated Cable Rows: 3 sets x 10-12 reps",
        "Face Pulls: 3 sets x 12-15 reps",
        "Reverse Pec Deck / Rear Delt Flyes: 3 sets x 15 reps"
      ],
      "Biceps Isolation": [
        "Barbell Curls: 3 sets x 10-12 reps",
        "Incline Dumbbell Curls: 3 sets x 10-12 reps"
      ],
      "Posture Work": [
        "Superman Hold: 3 sets x 30s",
        "Band Pull-Aparts: 2 sets x 15 reps"
      ]
    }
  },
  4: {
    day: "Day 4: Legs (Quads, Hamstrings, Glutes, Calves)",
    sections: {
      "Compound Movements": [
        "Barbell Back Squats: 4 sets x 6-8 reps",
        "Romanian Deadlifts: 3 sets x 8-10 reps",
      ],
      "Accessory Movements": [
        "Leg Press: 4 sets x 10-12 reps",
        "Walking Lunges: 3 sets x 12 steps per leg",
        "Hip Thrusts: 3 sets x 12 reps"
      ],
      "Calves Isolation": [
        "Standing Calf Raises: 4 sets x 15-20 reps",
        "Seated Calf Raises: 3 sets x 15-20 reps",
      ],
      "Posture/Mobility": [
        "Hip Flexor Stretch: 2 x 30s/side",
        "Deep Bodyweight Squats Hold: 2 x 30s"
      ]
    }
  },
  5: {
    day: "Day 5: Full Body + Conditioning",
    sections: {
      "Compound Movements": [
        "Deadlifts: 4 sets x 6 reps",
        "Push Press: 3 sets x 8 reps",
        "Dumbbell Lunges: 3 sets x 10/leg",
      ],
      "Accessory Movements": [
        "Cable Chest Fly: 3 sets x 12-15 reps",
        "Lat Pulldown or Pull-ups: 3 sets x 10-12 reps",
        "T-Bar Row: 3 sets x 10 reps"
      ],
      "Conditioning Finisher (Pick 1)": [
        "Farmer's Walk: 3 rounds x 30s heavy",
        "Battle Ropes: 5 rounds x 30s",
        "Rowing Machine: 5 min moderate intensity"
      ]
    }
  },
  6: {
    day: "Day 6: Light Cardio + Stretch & Posture Focus",
    sections: {
      "Cardio": [
        "Brisk Walk / Light Jog: 30 min",
        "Swimming / Cycling (if available): 20–30 min"
      ],
      "Full Body Stretch Routine": [
        "Chest & Shoulder Opener: 2 x 30s",
        "Hamstring Stretch: 2 x 30s/leg",
        "Hip Flexor Stretch: 2 x 30s/leg",
        "Upper Back Stretch on Foam Roller: 2 mins"
      ],
      "Posture Work (Daily if possible)": [
        "Wall Angels: 3 sets x 15 reps",
        "Face Pulls (light): 3 sets x 15 reps",
        "Superman Stretch: 3 sets x 30s"
      ]
    }
  }
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
