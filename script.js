// ======================================
// PERSONALISED WEIGHT LOSS WORKOUT PLAN
// ======================================

const workouts = {
  0: {
    day: "Sunday: Active Recovery",
    description:
      "30–45 min walking, mobility, posture drills, deep stretching. No lifting.",
  },

  1: {
    day: "Push (Fat Loss Focus)",
    sections: {
      Compounds: [
        "Barbell Bench Press – 4×6–8",
        "Incline Dumbbell Press – 3×8–10",
      ],
      Accessories: [
        "Seated Shoulder Press – 3×8",
        "Lateral Raises – 4×15",
        "Cable Fly – 3×12–15",
      ],
      Triceps: [
        "Rope Pushdowns – 3×12–15",
      ],
      Finisher: [
        "Incline Treadmill Walk – 15 min",
      ],
    },
  },

  2: {
    day: "Pull (Back + Belly Fat)",
    sections: {
      Compounds: [
        "Pull-ups / Lat Pulldown – 4×8–10",
        "Barbell Row – 3×6–8",
      ],
      Accessories: [
        "Seated Cable Row – 3×10",
        "Face Pulls – 3×15",
      ],
      Biceps: [
        "Barbell Curl – 3×10",
      ],
      Core: [
        "Hanging Leg Raises – 3×12",
      ],
    },
  },

  3: {
    day: "Legs + Core (Fat Burn)",
    sections: {
      Compounds: [
        "Back Squat – 4×6–8",
        "Romanian Deadlift – 3×8",
      ],
      Accessories: [
        "Leg Press – 3×10",
        "Walking Lunges – 3×12/leg",
        "Standing Calf Raises – 4×15",
      ],
      Core: [
        "Plank – 3×60s",
        "Cable Crunch – 3×15",
      ],
    },
  },

  4: {
    day: "Conditioning + Cardio",
    sections: {
      Cardio: [
        "Incline Walk – 25 min",
        "Cycling / Stairmaster – 15 min",
      ],
      Core: [
        "Russian Twist – 3×20",
        "Dead Bug – 3×12",
      ],
    },
  },

  5: {
    day: "Upper Pump + Posture",
    sections: {
      Pump: [
        "Incline DB Press – 3×12",
        "Lat Pulldown – 3×12",
        "Lateral Raises – 4×15",
        "EZ Bar Curl – 3×12",
      ],
      Posture: [
        "Face Pulls – 3×15",
        "Wall Angels – 3×15",
        "Chin Tucks – 3×10",
      ],
    },
  },

  6: {
    day: "Light Cardio + Stretch",
    description:
      "30 min walking + full body stretching + posture correction.",
  },
};

// ======================================
// DATE & STORAGE
// ======================================

const todayIndex = new Date().getDay(); // 0–6
const todayDate = new Date().toISOString().split("T")[0];
const storageKey = `workout-${todayDate}`;

// ======================================
// SAVE PROGRESS
// ======================================

function saveWorkoutProgress() {
  const data = {};
  document.querySelectorAll(".exercise").forEach((exercise) => {
    const id = exercise.dataset.id;
    data[id] = {
      weight: exercise.querySelector(".weight").value,
      reps: exercise.querySelector(".reps").value,
      completed: exercise.querySelector(".completed").checked,
    };
  });
  localStorage.setItem(storageKey, JSON.stringify(data));
}

// ======================================
// LOAD PROGRESS
// ======================================

function loadWorkoutProgress() {
  const savedData =
    JSON.parse(localStorage.getItem(storageKey)) || {};

  document.querySelectorAll(".exercise").forEach((exercise) => {
    const id = exercise.dataset.id;
    if (savedData[id]) {
      exercise.querySelector(".weight").value = savedData[id].weight;
      exercise.querySelector(".reps").value = savedData[id].reps;
      exercise.querySelector(".completed").checked =
        savedData[id].completed;
    }
  });
}

// ======================================
// RENDER WORKOUT
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  const workoutContainer = document.getElementById("workout-container");
  const dayNameElement = document.getElementById("day-name");

  const workout = workouts[todayIndex];
  dayNameElement.textContent = workout.day;
  workoutContainer.innerHTML = "";

  if (workout.description) {
    workoutContainer.innerHTML = `<p>${workout.description}</p>`;
    return;
  }

  Object.entries(workout.sections).forEach(([section, exercises]) => {
    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = section;
    workoutContainer.appendChild(sectionTitle);

    exercises.forEach((exercise, index) => {
      const exerciseContainer = document.createElement("div");
      exerciseContainer.className = "exercise";
      exerciseContainer.dataset.id = `${todayDate}-${section}-${index}`;

      exerciseContainer.innerHTML = `
        <label>
          <input type="checkbox" class="completed" />
          ${exercise}
        </label>
        <div class="inputs">
          <input type="number" class="weight" placeholder="Weight (kg)" />
          <input type="number" class="reps" placeholder="Reps" />
        </div>
      `;

      exerciseContainer
        .querySelectorAll("input")
        .forEach((input) => {
          input.addEventListener("input", saveWorkoutProgress);
          input.addEventListener("change", saveWorkoutProgress);
        });

      workoutContainer.appendChild(exerciseContainer);
    });
  });

  loadWorkoutProgress();
});

// ======================================
// SERVICE WORKER (OPTIONAL)
// ======================================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(() => {});
  });
}
