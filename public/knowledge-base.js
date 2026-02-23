// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// OEM PUMP SPECIFICATION INTELLIGENCE
// Source: Aggregated manufacturer platform data
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// --- General Pump (Interpump / GP) ---
// Platform Traits: Belt-drive pumps commonly rated 1450-1750 RPM. Max fluid temperature typically ~165Â°F.
// Sensitive to inlet restriction; cavitation often misdiagnosed as valve failure.
// Vacuum tolerance limited; buffer tank plumbing must be correct.
// Diagnostic Priorities:
// 1) Confirm actual RPM matches pump rating
// 2) Verify inlet flow before suspecting packings or valves
// 3) Check unloader behavior before internal failure diagnosis

// --- Annovi Reverberi (AR) ---
// Platform Traits: Widely used in both direct-drive (3400 RPM) and belt-drive platforms.
// Seal wear often shows via weep hole leakage.
// High RPM direct-drive versions more sensitive to heat and supply issues.
// Diagnostic Priorities:
// 1) Identify RPM class first (3400 vs 1450)
// 2) Verify water supply adequacy
// 3) Look for air leaks before diagnosing valve failure

// --- Comet ---
// Platform Traits: Often used on mid/high GPM belt-drive rigs.
// Oversized pumps relative to engine HP can cause hunting/surging.
// Good thermal tolerance but sensitive to inlet restriction.
// Diagnostic Priorities:
// 1) Confirm engine HP vs pump demand
// 2) Verify nozzle sizing
// 3) Inspect inlet filter before internal pump diagnosis

// --- Udor ---
// Platform Traits: Designed for agricultural duty cycles.
// Strong suction capability but still limited by plumbing design.
// Often used with buffer tanks and chemical rigs.
// Diagnostic Priorities:
// 1) Confirm suction line integrity
// 2) Inspect tank outlet and bulkhead restrictions
// 3) Evaluate vacuum conditions before internal failure assumptions

// --- Pump Identification Logic ---
// If user provides model number: lookup pump architecture
// If only physical description, ask:
//   "Is the shaft 24mm solid, hollow, or keyed?"
//   "Is pump spinning engine speed (~3400) or belt-driven slower?"
// If unknown: default to conservative belt-drive diagnostic assumptions


// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// OEM ENGINE ARCHITECTURE INTELLIGENCE
// Source: Aggregated manufacturer platform data
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// --- Honda GX Series (Carbureted Industrial Gas) ---
// Rated around 3600 RPM. Mechanical governor controls load response.
// Pressure output directly tied to RPM stability.
// Diagnostic Priorities:
// 1) Verify throttle linkage and governor response
// 2) Check for unloader drag causing hunting
// 3) Air filter or fuel delivery issues can mimic pump failure

// --- Honda IGX Series (EFI Industrial Gas) ---
// Electronic throttle control. ECU adjusts RPM based on load demand.
// Diagnostic Priorities:
// 1) Sudden RPM changes often load-related, not fuel blockage
// 2) Electrical faults or sensor issues may limit power output
// 3) Do not assume carburetor-related causes

// --- Briggs & Stratton Vanguard ---
// Strong torque curve suited for belt-drive pumps.
// Kill wire grounding faults can cause intermittent shutdown.
// Diagnostic Priorities:
// 1) Inspect wiring and ground circuits
// 2) Confirm charging system behavior
// 3) Verify RPM under load before pump diagnosis

// --- Kohler Gas Engines ---
// Industrial carbureted platforms similar to GX but with different electrical layouts.
// Diagnostic Priorities:
// 1) Starter circuit and safety interlocks frequently involved in no-start issues
// 2) Verify throttle plate movement and governor action

// --- Kubota Diesel Engines (Pressure Washer Applications) ---
// Operate at lower RPM with higher torque output. Typically paired with belt-drive pumps.
// Diagnostic Priorities:
// 1) Do not compare RPM expectations to gas engines
// 2) Load problems may appear as slow power drop rather than surging

// --- Predator Industrial Gas Engines ---
// GX-style architecture with mechanical governor. RPM stability may vary more under heavy load.
// Diagnostic Priorities:
// 1) Verify governor spring tension
// 2) Check fuel supply and airflow before pump diagnosis

// --- Engine Identification Prompts ---
// If engine unknown, ask:
//   "Is it Honda GX-style carbureted, EFI (IGX), diesel, or Predator-style?"
//   "Does it run at full speed constantly or adjust RPM automatically?"


// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// FIELD EXPERIENCE INTELLIGENCE
// Source: Aggregated patterns from public repair discussions and contractor forums
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// --- Common Pressure Problems (Field Patterns) ---
// Pressure drops under trigger with steady engine RPM:
//   Most likely inlet restriction or air ingestion.
//   Often caused by debris in inlet filter or undersupplied buffer tank.
//   Pump failure is uncommon as first cause.
//
// Hose vibration or pulsing:
//   Commonly cavitation or unloader instability.
//   Check water supply before internal valves.
//
// Machine builds pressure in bypass but not while spraying:
//   Usually flow limitation or incorrect nozzle sizing.

// --- Common Burner Complaints (Field Patterns) ---
// Burner completely dead:
//   Frequently electrical safety chain issue rather than fuel.
//
// Burner lights only while spraying:
//   Often normal design behavior depending on flow switch logic.
//
// Smoke or sooting:
//   Incorrect fuel nozzle size or airflow imbalance more common than coil issues.

// --- Engine-Related Field Patterns ---
// GX-style engines hunting:
//   Often load/unloader interaction rather than carburetor failure.
//
// EFI engines losing power:
//   Frequently sensor or load detection behavior, not fuel blockage.
//
// Diesel rigs losing pressure:
//   Often belt slip or load mismatch rather than engine failure.

// --- Tool & Accessory Misdiagnosis ---
// Oversized surface cleaner: common cause of perceived pressure loss.
// Incorrect downstream injector orientation: common cause of no chemical draw.

// --- Diagnostic Priority from Field Experience ---
// 1) Verify water supply
// 2) Confirm RPM stability
// 3) Inspect nozzle/unloader behavior
// 4) Check electrical safety chain
// 5) Only then suspect internal pump or burner failure
