<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workout Tracker</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap');
        
        :root {
            --primary: #ff4d00;
            --primary-dark: #cc3d00;
            --secondary: #00d4ff;
            --bg-dark: #0a0e1a;
            --bg-card: #141824;
            --bg-input: #1a1f2e;
            --text: #e8e9ed;
            --text-dim: #9ba3b4;
            --success: #00ff88;
            --warning: #ffd700;
            --border: #2a3142;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Barlow', sans-serif;
            background: var(--bg-dark);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        /* Background effect */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(255, 77, 0, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.06) 0%, transparent 50%);
            pointer-events: none;
            z-index: 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 20px;
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(20, 24, 36, 0.6) 100%);
            border-radius: 20px;
            border: 1px solid var(--border);
            position: relative;
            overflow: hidden;
        }
        
        header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 77, 0, 0.1), transparent);
            animation: shine 3s infinite;
        }
        
        @keyframes shine {
            to { left: 100%; }
        }
        
        h1 {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 4rem;
            letter-spacing: 4px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            position: relative;
        }
        
        .subtitle {
            color: var(--text-dim);
            font-size: 1.1rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .day-selector {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 12px;
            margin-bottom: 30px;
        }
        
        .day-btn {
            padding: 15px;
            background: var(--bg-card);
            border: 2px solid var(--border);
            color: var(--text);
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.2rem;
            letter-spacing: 1px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .day-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: var(--primary);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.4s ease, height 0.4s ease;
            z-index: 0;
        }
        
        .day-btn:hover::before {
            width: 300px;
            height: 300px;
        }
        
        .day-btn span {
            position: relative;
            z-index: 1;
        }
        
        .day-btn.active {
            background: var(--primary);
            border-color: var(--primary);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 77, 0, 0.3);
        }
        
        .workout-container {
            display: none;
        }
        
        .workout-container.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .workout-header {
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(20, 24, 36, 0.8) 100%);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid var(--border);
            margin-bottom: 25px;
        }
        
        .workout-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.5rem;
            letter-spacing: 2px;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .workout-description {
            color: var(--text-dim);
            font-size: 1rem;
            line-height: 1.8;
        }
        
        .section {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 25px;
        }
        
        .section-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.8rem;
            letter-spacing: 2px;
            color: var(--secondary);
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--border);
        }
        
        .exercise-card {
            background: var(--bg-input);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }
        
        .exercise-card:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 15px rgba(255, 77, 0, 0.2);
            transform: translateX(5px);
        }
        
        .exercise-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .exercise-name::before {
            content: '▸';
            color: var(--primary);
            font-size: 1.5rem;
        }
        
        .exercise-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .detail-item {
            background: rgba(255, 77, 0, 0.05);
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.9rem;
        }
        
        .detail-label {
            color: var(--text-dim);
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2px;
        }
        
        .detail-value {
            color: var(--text);
            font-weight: 600;
        }
        
        .tracking-section {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px dashed var(--border);
        }
        
        .tracking-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
            margin-bottom: 15px;
        }
        
        .input-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        
        .input-group label {
            font-size: 0.85rem;
            color: var(--text-dim);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }
        
        .input-group input {
            background: var(--bg-dark);
            border: 2px solid var(--border);
            color: var(--text);
            padding: 12px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .input-group input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(255, 77, 0, 0.1);
        }
        
        .progress-display {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
            border: 1px solid var(--success);
            border-radius: 10px;
            padding: 15px;
            margin-top: 12px;
        }
        
        .progress-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            font-size: 0.95rem;
        }
        
        .progress-item:last-child {
            margin-bottom: 0;
        }
        
        .progress-label {
            color: var(--text-dim);
            font-weight: 500;
        }
        
        .progress-value {
            color: var(--success);
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        .progress-value.increase {
            color: var(--success);
        }
        
        .progress-value.decrease {
            color: var(--warning);
        }
        
        .timer-container {
            background: linear-gradient(135deg, var(--bg-dark) 0%, rgba(26, 31, 46, 0.8) 100%);
            border: 2px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            margin-top: 15px;
            text-align: center;
        }
        
        .timer-display {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 3rem;
            letter-spacing: 3px;
            color: var(--primary);
            margin-bottom: 15px;
            text-shadow: 0 0 20px rgba(255, 77, 0, 0.3);
        }
        
        .timer-display.active {
            animation: pulse 1s ease infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .timer-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 12px 24px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.1rem;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
        }
        
        .btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 77, 0, 0.4);
        }
        
        .btn:active {
            transform: translateY(0);
        }
        
        .btn-secondary {
            background: var(--bg-input);
            border: 2px solid var(--border);
        }
        
        .btn-secondary:hover {
            background: var(--bg-card);
            border-color: var(--primary);
        }
        
        .simple-item {
            background: var(--bg-input);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 12px;
        }
        
        .simple-item-name {
            font-weight: 600;
            color: var(--text);
            margin-bottom: 5px;
        }
        
        .simple-item-details {
            color: var(--text-dim);
            font-size: 0.9rem;
        }
        
        .nutrition-note {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 77, 0, 0.1) 100%);
            border: 1px solid var(--warning);
            border-radius: 12px;
            padding: 20px;
            margin-top: 25px;
        }
        
        .nutrition-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.3rem;
            letter-spacing: 2px;
            color: var(--warning);
            margin-bottom: 10px;
        }
        
        .save-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success);
            color: var(--bg-dark);
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 1rem;
            box-shadow: 0 8px 25px rgba(0, 255, 136, 0.4);
            transform: translateX(400px);
            transition: transform 0.4s ease;
            z-index: 1000;
        }
        
        .save-notification.show {
            transform: translateX(0);
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .day-selector {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .tracking-grid {
                grid-template-columns: 1fr;
            }
            
            .timer-display {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>WORKOUT TRACKER</h1>
            <div class="subtitle">Track Progress • Build Strength</div>
        </header>
        
        <div class="day-selector" id="daySelector"></div>
        
        <div id="workoutContent"></div>
        
        <div class="save-notification" id="saveNotification">Progress Saved ✓</div>
    </div>

    <script>
        const workouts = {
            // SUNDAY
            0: {
                day: "Sunday: Active Recovery & Mobility",
                warmup: [
                    { name: "Easy walk", duration: "10 min", intensity: "conversational" },
                    { name: "Thoracic rotations", reps: 10 },
                    { name: "Hip CARs (controlled articular rotations)", reps: 6 }
                ],
                description: "Active recovery to maintain weekly NEAT and improve posture. Keep heart rate low, focus on mobility and breathing.",
                sections: {
                    Mobility: [
                        {
                            name: "Full body dynamic stretch circuit",
                            details: "3 rounds: 30s each movement (hamstring sweep, world's greatest stretch, child's pose to cobra)",
                        },
                        {
                            name: "Wall posture holds",
                            details: "2 × 90s — back against wall, chin tucked, ribs down, glutes engaged"
                        }
                    ],
                    LightCardio: [
                        { name: "Walk / easy cycle", duration: "30–45 min", intensity: "brisk" }
                    ]
                },
                cooldown: [
                    { name: "Foam roll (quads/upper back)", duration: "3–5 min total" },
                    { name: "Deep breathing 3×5 breaths", notes: "diaphragmatic" }
                ],
                nutritionNote: "First meal by 12:30. Creatine 5g with first meal. If pulses missing, prioritize curd/milk/sprouts today.",
            },
            // MONDAY
            1: {
                day: "Day 1 — Push (Fat-loss Focus)",
                warmup: [
                    { name: "General warmup", duration: "5–8 min", type: "rowing or brisk walk" },
                    { name: "Shoulder band pullaparts", reps: "2 * 20" },
                    { name: "1 light set of bench (50% working)", reps: 8 }
                ],
                sections: {
                    Compounds: [
                        {
                            name: "Barbell Bench Press",
                            sets: 4,
                            reps: "6–8",
                            tempo: "2-0-1 (eccentric 2s, pause 0s, concentric explosive 1s)",
                            rest: "90–120s",
                            RPE: "8 on last set",
                            cues: "shoulder blades squeezed, drive feet, chest up",
                            progression: "add 1.25–2.5 kg when you hit 8×4 cleanly",
                            alternative: "Push-ups (weighted if possible) 4×10–15",
                            trackable: true
                        },
                        {
                            name: "Incline Dumbbell Press",
                            sets: 3,
                            reps: "8–10",
                            tempo: "2-0-1",
                            rest: "75–90s",
                            RPE: "7–8",
                            cues: "upper chest focus, controlled descent",
                            progression: "increase DB weight or 1 rep/week",
                            trackable: true
                        }
                    ],
                    Accessories: [
                        {
                            name: "Seated Dumbbell Shoulder Press",
                            sets: 3,
                            reps: "8–10",
                            tempo: "2-0-1",
                            rest: "60–75s",
                            RPE: "7–8",
                            cues: "avoid arching back, core braced",
                            alternative: "Standing barbell push press (lighter) 3×6",
                            trackable: true
                        },
                        {
                            name: "Lateral Raises",
                            sets: 4,
                            reps: "12–15",
                            tempo: "1-0-1",
                            rest: "45–60s",
                            cues: "elbows slightly bent, lead with elbow",
                            notes: "use moderate weight for strict form",
                            trackable: true
                        },
                        {
                            name: "Cable Fly (low tension chest squeeze)",
                            sets: 3,
                            reps: "12–15",
                            tempo: "2-0-1",
                            rest: "45–60s",
                            cues: "squeeze chest at top",
                            trackable: true
                        }
                    ],
                    Triceps: [
                        {
                            name: "Rope Pushdowns",
                            sets: 3,
                            reps: "12–15",
                            tempo: "2-0-1",
                            rest: "45–60s",
                            cues: "full extension, slow eccentric",
                            trackable: true
                        }
                    ],
                    Finisher: [
                        {
                            name: "Incline treadmill walk",
                            duration: "15 min",
                            intensity: "incline 8–12%, speed 4–5 km/h",
                            purpose: "post-workout calories + belly fat reduction"
                        }
                    ],
                    Posture: [
                        {
                            name: "Wall Angels",
                            sets: 2,
                            reps: 15,
                            cues: "slow, scapula control"
                        }
                    ]
                },
                cooldown: [{ name: "pec stretch", duration: "2 × 30s/side" }],
                nutritionNote: "Train fasted at 7 AM. First meal 12:30–1 PM: 3 bowls pulses, salad. Creatine with meal. If pulses missing, have 1–2 cups curd + roasted chana as backup.",
            },
            // TUESDAY
            2: {
                day: "Day 2 — Pull (Back + Core)",
                warmup: [
                    { name: "General warmup", duration: "5–8 min", type: "rower or jog" },
                    { name: "Scapular pullups / banded rows", reps: "2×10" }
                ],
                sections: {
                    Compounds: [
                        {
                            name: "Pull-ups / Lat Pulldown",
                            sets: 4,
                            reps: "6–10 (or 8–12 lat pulldown)",
                            tempo: "2-0-1",
                            rest: "90s",
                            RPE: "8",
                            cues: "lead with elbows, full scapular depression",
                            progression: "add reps then add weight via belt",
                            trackable: true
                        },
                        {
                            name: "Barbell Bent-over Row",
                            sets: 3,
                            reps: "6–8",
                            tempo: "2-0-1",
                            rest: "90s",
                            RPE: "8",
                            cues: "neutral spine, pull to lower ribcage",
                            alternative: "Dumbbell row slower 3×8",
                            trackable: true
                        }
                    ],
                    Accessories: [
                        {
                            name: "Seated Cable Row",
                            sets: 3,
                            reps: "10",
                            tempo: "2-0-1",
                            rest: "60–75s",
                            cues: "full squeeze, control eccentric",
                            trackable: true
                        },
                        {
                            name: "Face Pulls",
                            sets: 3,
                            reps: "12–15",
                            tempo: "2-0-1",
                            rest: "45–60s",
                            cues: "lead with elbows, upper back contraction",
                            trackable: true
                        }
                    ],
                    Biceps: [
                        {
                            name: "Barbell Curls",
                            sets: 3,
                            reps: "8–10",
                            tempo: "2-0-1",
                            rest: "60–75s",
                            cues: "strict form, full ROM",
                            trackable: true
                        }
                    ],
                    Core: [
                        {
                            name: "Hanging Leg Raises",
                            sets: 3,
                            reps: "10–12",
                            tempo: "1-0-1",
                            rest: "60s",
                            alternative: "lying leg raises",
                            trackable: true
                        }
                    ]
                },
                cooldown: [{ name: "upper back stretch", duration: "2 × 30s" }],
                nutritionNote: "First meal 12:30. Aim for >30 g protein at this meal via pulses + milk/curd. Creatine with this meal if not taken earlier.",
            },
            // WEDNESDAY
            3: {
                day: "Day 3 — Legs + Core (Metabolic Emphasis)",
                warmup: [
                    { name: "Bike / light jog", duration: "5–7 min" },
                    { name: "Leg swings + bodyweight squats", reps: "2×10 each" }
                ],
                sections: {
                    Compounds: [
                        {
                            name: "Back Squat",
                            sets: 4,
                            reps: "6–8",
                            tempo: "2-0-1",
                            rest: "120s",
                            RPE: "8",
                            cues: "knees out, chest up, drive through heels",
                            progression: "add 2.5–5 kg when all reps are clean",
                            trackable: true
                        },
                        {
                            name: "Romanian Deadlift (RDL)",
                            sets: 3,
                            reps: "8",
                            tempo: "3-0-1 (slow ecc)",
                            rest: "90–120s",
                            cues: "hinge at hips, hamstrings tight",
                            trackable: true
                        }
                    ],
                    Accessories: [
                        {
                            name: "Leg Press",
                            sets: 3,
                            reps: "10",
                            tempo: "2-0-1",
                            rest: "60–90s",
                            trackable: true
                        },
                        {
                            name: "Walking Lunges",
                            sets: 3,
                            reps: "12 steps / leg",
                            tempo: "2-0-1",
                            rest: "60s",
                            cues: "long stride to hit glutes",
                            trackable: true
                        },
                        {
                            name: "Standing Calf Raises",
                            sets: 4,
                            reps: "15–20",
                            rest: "30–45s",
                            trackable: true
                        }
                    ],
                    Core: [
                        {
                            name: "Plank",
                            sets: 3,
                            duration: "45–60s",
                            cues: "ribcage down, glutes squeezed"
                        },
                        {
                            name: "Cable Crunch",
                            sets: 3,
                            reps: "12–15",
                            rest: "45–60s",
                            trackable: true
                        }
                    ],
                    Finisher: [
                        {
                            name: "Conditioning circuit (optional)",
                            details: "3 rounds: 10 kb swings / 8 burpees / 200m row — rest 90s between rounds"
                        }
                    ]
                },
                cooldown: [{ name: "hamstring stretch", duration: "2 × 30s each" }],
                nutritionNote: "Leg days are heavy — ensure first meal (12:30) has both pulses + milk/curd if pulses limited. Creatine with first meal.",
            },
            // THURSDAY
            4: {
                day: "Day 4 — Conditioning + Low-impact Cardio",
                warmup: [
                    { name: "Easy walk or cycle", duration: "5–8 min" },
                    { name: "Dynamic mobility flow", duration: "5 min" }
                ],
                sections: {
                    Cardio: [
                        {
                            name: "Incline Treadmill Walk",
                            duration: "25 min",
                            intensity: "moderate (RPE 5–6)",
                            notes: "high incline 8–12% brisk walk"
                        },
                        {
                            name: "Cycling or Stairmaster",
                            duration: "15 min",
                            intensity: "moderate"
                        }
                    ],
                    Core: [
                        {
                            name: "Russian Twist",
                            sets: 3,
                            reps: "20",
                            rest: "45s",
                            trackable: true
                        },
                        {
                            name: "Dead Bug",
                            sets: 3,
                            reps: "12/side",
                            rest: "30s",
                            trackable: true
                        }
                    ]
                },
                cooldown: [{ name: "full body stretch", duration: "5–8 min" }],
                nutritionNote: "Cardio days are good for lower protein days. If pulses missing, prioritize curd/milk + extra salad. Creatine with first meal.",
            },
            // FRIDAY
            5: {
                day: "Day 5 — Upper Pump + Posture",
                warmup: [
                    { name: "Row or light bike", duration: "5–8 min" },
                    { name: "Band pullaparts + scapular pulls", reps: "2×15" }
                ],
                sections: {
                    Pump: [
                        {
                            name: "Incline Dumbbell Press",
                            sets: 3,
                            reps: "10–12",
                            tempo: "2-0-1",
                            rest: "60s",
                            purpose: "pump & upper chest",
                            trackable: true
                        },
                        {
                            name: "Lat Pulldown",
                            sets: 3,
                            reps: "10–12",
                            rest: "60s",
                            cues: "slow eccentric",
                            trackable: true
                        },
                        {
                            name: "Lateral Raises",
                            sets: 4,
                            reps: "12–15",
                            rest: "45s",
                            trackable: true
                        },
                        {
                            name: "EZ Bar Curls",
                            sets: 3,
                            reps: "10–12",
                            rest: "60s",
                            trackable: true
                        }
                    ],
                    Posture: [
                        {
                            name: "Face Pulls",
                            sets: 3,
                            reps: "15",
                            rest: "45s",
                            cues: "squeeze scapula",
                            trackable: true
                        },
                        {
                            name: "Wall Angels",
                            sets: 3,
                            reps: 15
                        },
                        {
                            name: "Chin Tucks",
                            sets: 3,
                            reps: 10
                        }
                    ],
                    Finisher: [
                        {
                            name: "Farmer's Walk / Loaded carry",
                            sets: 3,
                            duration: "30s walk",
                            rest: "60–90s",
                            purpose: "posture + core tension"
                        }
                    ]
                },
                cooldown: [{ name: "pec/chest openers", duration: "2 × 30s" }],
                nutritionNote: "Upper pump day — steady protein across meals. If hostel food limited, consider roasted chana or extra curd for an added protein hit.",
            },
            // SATURDAY
            6: {
                day: "Day 6 — Light Cardio + Stretch (Active Recovery)",
                warmup: [{ name: "Easy movement", duration: "5 min" }],
                description: "Low intensity day to accumulate steps and ensure recovery before Sunday active recovery. Good day to audit food and plan for low-pulse days.",
                sections: {
                    Cardio: [
                        { name: "Brisk walk or light jog", duration: "30 min" },
                        { name: "Optional swim", duration: "20–30 min, easy" }
                    ],
                    Stretch: [
                        { name: "Full body stretch routine", duration: "10–12 min" },
                        { name: "Hip flexor stretch", duration: "2 × 30s/side" }
                    ],
                    Posture: [
                        { name: "Wall angels", sets: 3, reps: 15 },
                        { name: "Face pulls (light)", sets: 3, reps: 15 }
                    ]
                },
                cooldown: [{ name: "breathing + foam roll", duration: "5 min" }],
                nutritionNote: "Use this day to restock pulses if possible. Creatine 5g with first meal. If no pulses, keep calories controlled and prioritize curd/milk/sprouts."
            }
        };

        let currentDay = 1;
        let timerInterval = null;
        let timerSeconds = 0;

        // Initialize
        function init() {
            createDaySelector();
            loadWorkout(currentDay);
        }

        // Create day selector buttons
        function createDaySelector() {
            const selector = document.getElementById('daySelector');
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            
            days.forEach((day, index) => {
                const btn = document.createElement('button');
                btn.className = `day-btn ${index === currentDay ? 'active' : ''}`;
                btn.innerHTML = `<span>${day}</span>`;
                btn.onclick = () => {
                    currentDay = index;
                    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    loadWorkout(index);
                };
                selector.appendChild(btn);
            });
        }

        // Load workout for specific day
        function loadWorkout(dayIndex) {
            const workout = workouts[dayIndex];
            const content = document.getElementById('workoutContent');
            
            let html = `
                <div class="workout-container active">
                    <div class="workout-header">
                        <div class="workout-title">${workout.day}</div>
                        ${workout.description ? `<div class="workout-description">${workout.description}</div>` : ''}
                    </div>
            `;

            // Warmup
            if (workout.warmup) {
                html += `<div class="section">
                    <div class="section-title">Warmup</div>`;
                workout.warmup.forEach(item => {
                    html += `<div class="simple-item">
                        <div class="simple-item-name">${item.name}</div>
                        <div class="simple-item-details">
                            ${item.duration || ''} ${item.reps ? `${item.reps} reps` : ''} 
                            ${item.intensity || ''} ${item.type || ''}
                        </div>
                    </div>`;
                });
                html += `</div>`;
            }

            // Sections
            if (workout.sections) {
                for (const [sectionName, exercises] of Object.entries(workout.sections)) {
                    html += `<div class="section">
                        <div class="section-title">${sectionName}</div>`;
                    
                    exercises.forEach((exercise, exIndex) => {
                        const exerciseId = `day${dayIndex}-${sectionName}-${exIndex}`;
                        
                        if (exercise.trackable) {
                            html += createTrackableExercise(exercise, exerciseId, dayIndex);
                        } else {
                            html += `<div class="simple-item">
                                <div class="simple-item-name">${exercise.name}</div>
                                <div class="simple-item-details">
                                    ${exercise.sets ? `${exercise.sets} sets` : ''} 
                                    ${exercise.reps ? `× ${exercise.reps}` : ''}
                                    ${exercise.duration || ''} 
                                    ${exercise.details || ''} 
                                    ${exercise.cues || ''}
                                </div>
                            </div>`;
                        }
                    });
                    
                    html += `</div>`;
                }
            }

            // Cooldown
            if (workout.cooldown) {
                html += `<div class="section">
                    <div class="section-title">Cooldown</div>`;
                workout.cooldown.forEach(item => {
                    html += `<div class="simple-item">
                        <div class="simple-item-name">${item.name}</div>
                        <div class="simple-item-details">
                            ${item.duration || ''} ${item.notes || ''}
                        </div>
                    </div>`;
                });
                html += `</div>`;
            }

            // Nutrition note
            if (workout.nutritionNote) {
                html += `<div class="nutrition-note">
                    <div class="nutrition-title">🥗 Nutrition Note</div>
                    <div>${workout.nutritionNote}</div>
                </div>`;
            }

            html += `</div>`;
            content.innerHTML = html;
            
            // Attach event listeners
            attachEventListeners();
        }

        // Create trackable exercise HTML
        function createTrackableExercise(exercise, exerciseId, dayIndex) {
            const restTime = exercise.rest ? parseRestTime(exercise.rest) : 60;
            
            return `
                <div class="exercise-card">
                    <div class="exercise-name">${exercise.name}</div>
                    
                    <div class="exercise-details">
                        ${exercise.sets ? `<div class="detail-item">
                            <div class="detail-label">Sets</div>
                            <div class="detail-value">${exercise.sets}</div>
                        </div>` : ''}
                        
                        ${exercise.reps ? `<div class="detail-item">
                            <div class="detail-label">Reps</div>
                            <div class="detail-value">${exercise.reps}</div>
                        </div>` : ''}
                        
                        ${exercise.tempo ? `<div class="detail-item">
                            <div class="detail-label">Tempo</div>
                            <div class="detail-value">${exercise.tempo}</div>
                        </div>` : ''}
                        
                        ${exercise.rest ? `<div class="detail-item">
                            <div class="detail-label">Rest</div>
                            <div class="detail-value">${exercise.rest}</div>
                        </div>` : ''}
                        
                        ${exercise.RPE ? `<div class="detail-item">
                            <div class="detail-label">RPE</div>
                            <div class="detail-value">${exercise.RPE}</div>
                        </div>` : ''}
                    </div>
                    
                    ${exercise.cues ? `<div class="detail-item" style="margin-top: 10px;">
                        <div class="detail-label">Form Cues</div>
                        <div class="detail-value" style="font-size: 0.9rem;">${exercise.cues}</div>
                    </div>` : ''}
                    
                    <div class="tracking-section">
                        <div class="tracking-grid">
                            <div class="input-group">
                                <label>This Week Weight (kg)</label>
                                <input type="number" 
                                       step="0.5" 
                                       id="${exerciseId}-current-weight" 
                                       data-exercise-id="${exerciseId}"
                                       class="weight-input"
                                       placeholder="0">
                            </div>
                            
                            <div class="input-group">
                                <label>This Week Reps</label>
                                <input type="number" 
                                       id="${exerciseId}-current-reps" 
                                       data-exercise-id="${exerciseId}"
                                       class="reps-input"
                                       placeholder="0">
                            </div>
                        </div>
                        
                        <div id="${exerciseId}-progress"></div>
                        
                        <div class="timer-container">
                            <div class="timer-display" id="${exerciseId}-timer">00:00</div>
                            <div class="timer-buttons">
                                <button class="btn" onclick="startTimer('${exerciseId}', ${restTime})">Start ${restTime}s Rest</button>
                                <button class="btn btn-secondary" onclick="stopTimer('${exerciseId}')">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Parse rest time from string
        function parseRestTime(restStr) {
            const match = restStr.match(/(\d+)/);
            return match ? parseInt(match[0]) : 60;
        }

        // Attach event listeners to inputs
        function attachEventListeners() {
            document.querySelectorAll('.weight-input, .reps-input').forEach(input => {
                const exerciseId = input.dataset.exerciseId;
                
                // Load saved data
                const savedData = getSavedData(exerciseId);
                if (input.classList.contains('weight-input')) {
                    input.value = savedData.currentWeight || '';
                } else {
                    input.value = savedData.currentReps || '';
                }
                
                // Update progress on change
                input.addEventListener('input', () => {
                    updateProgress(exerciseId);
                    saveData(exerciseId);
                    showSaveNotification();
                });
            });
            
            // Initial progress display
            document.querySelectorAll('.weight-input').forEach(input => {
                updateProgress(input.dataset.exerciseId);
            });
        }

        // Update progress display
        function updateProgress(exerciseId) {
            const currentWeight = parseFloat(document.getElementById(`${exerciseId}-current-weight`).value) || 0;
            const currentReps = parseInt(document.getElementById(`${exerciseId}-current-reps`).value) || 0;
            
            const savedData = getSavedData(exerciseId);
            const lastWeight = savedData.lastWeight || 0;
            const lastReps = savedData.lastReps || 0;
            
            const weightDiff = currentWeight - lastWeight;
            const repsDiff = currentReps - lastReps;
            
            const progressDiv = document.getElementById(`${exerciseId}-progress`);
            
            if (currentWeight > 0 || currentReps > 0) {
                let html = '<div class="progress-display">';
                
                if (lastWeight > 0 || lastReps > 0) {
                    html += '<div class="progress-item">';
                    html += '<span class="progress-label">Last Week:</span>';
                    html += `<span class="progress-value">${lastWeight}kg × ${lastReps} reps</span>`;
                    html += '</div>';
                    
                    html += '<div class="progress-item">';
                    html += '<span class="progress-label">Weight Change:</span>';
                    html += `<span class="progress-value ${weightDiff > 0 ? 'increase' : weightDiff < 0 ? 'decrease' : ''}">${weightDiff > 0 ? '+' : ''}${weightDiff.toFixed(1)}kg</span>`;
                    html += '</div>';
                    
                    html += '<div class="progress-item">';
                    html += '<span class="progress-label">Reps Change:</span>';
                    html += `<span class="progress-value ${repsDiff > 0 ? 'increase' : repsDiff < 0 ? 'decrease' : ''}">${repsDiff > 0 ? '+' : ''}${repsDiff}</span>`;
                    html += '</div>';
                } else {
                    html += '<div class="progress-item">';
                    html += '<span class="progress-label">First entry - track progress next week!</span>';
                    html += '</div>';
                }
                
                html += '</div>';
                progressDiv.innerHTML = html;
            } else {
                progressDiv.innerHTML = '';
            }
        }

        // Timer functions
        function startTimer(exerciseId, seconds) {
            stopTimer(exerciseId); // Stop any existing timer
            
            timerSeconds = seconds;
            const timerDisplay = document.getElementById(`${exerciseId}-timer`);
            timerDisplay.classList.add('active');
            
            updateTimerDisplay(exerciseId);
            
            timerInterval = setInterval(() => {
                timerSeconds--;
                updateTimerDisplay(exerciseId);
                
                if (timerSeconds <= 0) {
                    stopTimer(exerciseId);
                    playBeep();
                    alert('Rest period complete! Ready for next set.');
                }
            }, 1000);
        }

        function stopTimer(exerciseId) {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            const timerDisplay = document.getElementById(`${exerciseId}-timer`);
            if (timerDisplay) {
                timerDisplay.classList.remove('active');
            }
        }

        function updateTimerDisplay(exerciseId) {
            const minutes = Math.floor(timerSeconds / 60);
            const seconds = timerSeconds % 60;
            const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById(`${exerciseId}-timer`).textContent = display;
        }

        function playBeep() {
            // Simple beep using Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }

        // Local storage functions
        function getSavedData(exerciseId) {
            const saved = localStorage.getItem(exerciseId);
            if (saved) {
                return JSON.parse(saved);
            }
            return {
                currentWeight: 0,
                currentReps: 0,
                lastWeight: 0,
                lastReps: 0
            };
        }

        function saveData(exerciseId) {
            const currentWeight = parseFloat(document.getElementById(`${exerciseId}-current-weight`).value) || 0;
            const currentReps = parseInt(document.getElementById(`${exerciseId}-current-reps`).value) || 0;
            
            const existingData = getSavedData(exerciseId);
            
            const data = {
                currentWeight: currentWeight,
                currentReps: currentReps,
                lastWeight: existingData.currentWeight || existingData.lastWeight,
                lastReps: existingData.currentReps || existingData.lastReps
            };
            
            localStorage.setItem(exerciseId, JSON.stringify(data));
        }

        function showSaveNotification() {
            const notification = document.getElementById('saveNotification');
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }

        // Initialize on load
        init();
    </script>
</body>
</html>
