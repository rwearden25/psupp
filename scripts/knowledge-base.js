// ═══════════════════════════════════════════════════════════════
// KNOWLEDGE BASE v2.1 — General Pump + Alkota
// Auto-generated — do not edit manually
// ═══════════════════════════════════════════════════════════════
const KB = {};

// ═══ GENERAL PUMP ═══
KB.gp = {};
KB.gp.pumpModels = [["ET1509S17", "2.1", "2610", "1750", "3.7 EBHP", "11.0", "E1/ET 53"], ["ET1807S17", "2.4", "2320", "1750", "3.7 EBHP", "11.0", "E1/ET 53"], ["ET1511S17", "2.6", "2610", "1750", "4.7 EBHP", "11.0", "E1/ET 53"], ["ET1512S17", "2.9", "2610", "1750", "5.1 EBHP", "11.0", "E1/ET 53"], ["ET1809S17", "3.2", "2320", "1750", "5.0 EBHP", "11.0", "E1/ET 53"], ["ET1810S17", "3.4", "2320", "1750", "5.4 EBHP", "11.0", "E1/ET 53"], ["ET1811S17", "3.7", "2320", "1750", "5.9 EBHP", "11.0", "E1/ET 53"], ["ET1305S34", "1.6", "4450", "3400", "4.8 EBHP", "11.0", "E1/ET 53"], ["ET1306S34", "1.9", "4450", "3400", "5.6 EBHP", "11.0", "E1/ET 53"], ["ET1307S34", "2.1", "4450", "3400", "6.4 EBHP", "11.0", "E1/ET 53"], ["ET1308S34", "2.4", "4450", "3400", "7.2 EBHP", "11.0", "E1/ET 53"], ["ET1309S34", "2.6", "4450", "3400", "8.1 EBHP", "11.0", "E1/ET 53"], ["ET1310S34", "2.9", "4450", "3400", "8.9 EBHP", "11.0", "E1/ET 53"], ["ET1311S34", "3.1", "4450", "3400", "9.7 EBHP", "11.0", "E1/ET 53"], ["ET1312S34", "3.4", "4450", "3400", "10.5 EBHP", "11.0", "E1/ET 53"], ["ET1505S34", "2.1", "2610", "3400", "3.7 EBHP", "11.0", "E1/ET 53"], ["ET1506S34", "2.6", "2610", "3400", "4.7 EBHP", "11.0", "E1/ET 53"], ["ET1507S34", "3.2", "2610", "3400", "5.6 EBHP", "11.0", "E1/ET 53"], ["ET1508S34", "3.4", "2610", "3400", "6.1 EBHP", "11.0", "E1/ET 53"], ["ET1509E17", "2.1", "2610", "1700", "3.7 EBHP", "11.0", "E1/ET 53"], ["ET1807E17", "2.4", "2320", "1700", "3.8 EBHP", "11.0", "E1/ET 53"], ["ET1809E17", "3.2", "2320", "1700", "5.0 EBHP", "11.0", "E1/ET 53"], ["ET1504E34", "1.85", "2610", "3400", "3.6 EBHP", "11.0", "E1/ET 53"], ["ET1505E34", "2.1", "2610", "3400", "3.7 EBHP", "11.0", "E1/ET 53"], ["ET1506E34", "2.9", "2610", "3400", "5.2 EBHP", "11.0", "E1/ET 53"], ["ET1507E34", "3.2", "2610", "3400", "5.6 EBHP", "11.0", "E1/ET 53"], ["ET1505G6", "2.1", "2610", "3400", "5.7 GHP", "11.0", "E1/ET 53"], ["ET1506G6", "2.9", "2610", "3400", "7.7 GHP", "11.0", "E1/ET 53"], ["ET1507G6", "3.3", "2610", "3400", "8.6 GHP", "11.0", "E1/ET 53"], ["ET1508G6", "3.4", "2610", "3400", "9.1 GHP", "11.0", "E1/ET 53"], ["ET1509E17UTS", "2.1", "2610", "1700", "3.7 EBHP", "", "E1/ET 53"], ["ET1305E34UTS", "1.6", "4450", "3400", "4.9 EBHP", "11.0", "E1/ET 53"], ["ET1504E34UTS", "2.0", "2610", "3400", "3.6 EBHP", "11.0", "E1/ET 53"], ["ET1504E34UTSL", "2.0", "2610", "3400", "3.6 EBHP", "11.0", "E1/ET 53"], ["ET1505E34UTSL", "2.1", "2610", "3400", "3.8 EBHP", "11.0", "E1/ET 53"], ["ET1506E34UTSL", "2.9", "2610", "3400", "5.2 EBHP", "11.0", "E1/ET 53"], ["EP1510S17", "2.4", "3045", "1750", "5.0 EBHP", "15.4", "E2/EP 58"], ["EP1512S17", "2.9", "3045", "1750", "6.0 EBHP", "15.4", "E2/EP 58"], ["EP1513S17", "3.2", "3045", "1750", "6.6 EBHP", "15.4", "E2/EP 58"], ["EP1810S17", "3.4", "2500", "1750", "5.8 EBHP", "15.4", "E2/EP 58"], ["EP1811S17", "3.7", "2500", "1750", "6.3 EBHP", "15.4", "E2/EP 58"], ["EP1812S17", "4.0", "2500", "1750", "6.8 EBHP", "15.4", "E2/EP 58"], ["EP1813S17", "4.2", "2900", "1750", "8.3 EBHP", "15.4", "E2/EP 58"], ["EP1313S17", "2.4", "4000", "1750", "6.5 EBHP", "15.4", "E2/EP 58"], ["EP1505S34", "2.1", "3045", "3400", "4.4 EBHP", "15.4", "E2/EP 58"], ["EP1506S34", "2.9", "3045", "3400", "6.0 EBHP", "15.4", "E2/EP 58"], ["EP1508S34", "3.4", "3045", "3400", "7.1 EBHP", "15.4", "E2/EP 58"], ["EP1510S34", "4.2", "3045", "3400", "8.8 EBHP", "15.4", "E2/EP 58"], ["EP1306S34", "2.1", "4000", "3400", "5.8 EBHP", "15.4", "E2/EP 58"], ["EP1308S34", "2.6", "4000", "3400", "7.1 EBHP", "15.4", "E2/EP 58"], ["EP1310S34", "3.2", "4000", "3400", "8.8 EBHP", "15.4", "E2/EP 58"], ["EP1311S34", "3.4", "4000", "3400", "9.3 EBHP", "15.4", "E2/EP 58"], ["EP1313S34", "4.0", "4000", "3400", "10.9 EBHP", "15.4", "E2/EP 58"], ["EP1510E17", "2.4", "3045", "1750", "5.0 EBHP", "15.8", "E2/EP 58"], ["EP1512E17", "2.9", "3045", "1750", "6.0 EBHP", "15.8", "E2/EP 58"], ["EP1810E17", "3.4", "2500", "1750", "5.8 EBHP", "15.8", "E2/EP 58"], ["EP1811E17", "3.7", "2500", "1750", "6.3 EBHP", "15.8", "E2/EP 58"], ["EP1812E17", "4.0", "2500", "1750", "6.8 EBHP", "15.8", "E2/EP 58"], ["EP1505G6", "2.1", "3045", "3400", "6.6 GHP", "15.8", "E2/EP 58"], ["EP1506G6", "2.9", "3045", "3400", "9.0 GHP", "15.8", "E2/EP 58"], ["EP1508G6", "3.4", "3045", "3400", "10.9 GHP", "15.8", "E2/EP 58"], ["EP1506G8", "2.9", "3045", "3400", "9.0 GHP", "15.9", "E2/EP 58"], ["EP1508G8", "3.4", "3045", "3400", "10.6 GHP", "15.9", "E2/EP 58"], ["EP1509G8", "3.7", "3000", "3400", "11.4 GHP", "15.9", "E2/EP 58"], ["EP1510G8", "4.2", "3000", "3400", "13.0 GHP", "15.9", "E2/EP 58"], ["EP1306G8", "2.1", "4000", "3400", "8.6 GHP", "15.9", "E2/EP 58"], ["EP1308G8", "2.6", "4000", "3400", "10.7 GHP", "15.9", "E2/EP 58"], ["EP1309G8", "2.9", "4000", "3400", "11.9 GHP", "15.9", "E2/EP 58"], ["EP1310G8", "3.2", "4000", "3400", "13.2 GHP", "15.9", "E2/EP 58"], ["EP1311G8", "3.4", "4000", "3400", "14.0 GHP", "15.9", "E2/EP 58"], ["EP1313G8", "4.0", "4000", "3400", "16.4 GHP", "15.9", "E2/EP 58"], ["ES2212S", "4.76", "3000", "1450", "9.8 EBHP", "21.0", "E3/ES 59"], ["ES2213S", "5.55", "3000", "1450", "11.45 EBHP", "21.0", "E3/ES 59"], ["ES1810S", "3.43", "4000", "1750", "9.4 EBHP", "21.0", "E3/ES 59"], ["ES2010S", "3.96", "4000", "1750", "10.9 EBHP", "21.0", "E3/ES 59"], ["ES2012S", "4.76", "4000", "1750", "13.0 EBHP", "21.0", "E3/ES 59"], ["ES2013S", "5.55", "3600", "1750", "13.6 EBHP", "21.0", "E3/ES 59"], ["ESN2212S", "4.76", "3045", "1450", "9.8 EBHP", "21.0", "E3/ES 59"], ["ESN2213S", "5.55", "4000", "1450", "11.5 EBHP", "21.0", "E3/ES 59"], ["ESN1810S", "3.43", "4000", "1750", "9.4 EBHP", "21.0", "E3/ES 59"], ["ESN2010S", "3.96", "4000", "1750", "10.9 EBHP", "21.0", "E3/ES 59"], ["ESN2012S", "4.76", "4000", "1750", "13.0 EBHP", "21.0", "E3/ES 59"], ["ESN2013S", "5.55", "3625", "1750", "13.6 EBHP", "21.0", "E3/ES 59"], ["ESN1310G", "3.43", "4000", "3400", "14.0 GHP", "21.0", "E3/ES 59"], ["ESN1313G", "3.96", "4000", "3400", "16.3 GHP", "21.0", "E3/ES 59"], ["ESN1510G", "4.49", "3625", "3400", "16.7 GHP", "21.0", "E3/ES 59"], ["ESN1512G", "5.28", "3625", "3400", "19.7 GHP", "21.0", "E3/ES 59"], ["TT9111", "3.0", "1500", "1750", "3.1 EBHP", "11.2", "51"], ["TT901", "2.11", "1500", "2800", "2.2 EBHP", "11.2", "51"], ["TT951", "2.5", "1500", "2800", "2.6 EBHP", "11.2", "51"], ["TT931", "2.9", "1500", "2800", "3.0 EBHP", "11.2", "51"], ["TT941", "3.43", "1500", "2800", "3.5 EBHP", "11.2", "51"], ["T9051EBF", "2.11", "1500", "1750", "2.2 EBHP", "11.5", "Other"], ["TT9111EBF", "3.0", "1500", "1750", "3.1 EBHP", "11.5", "51"], ["TT2021EBF", "2.1", "2000", "3400", "2.9 EBHP", "11.5", "51"], ["TT9061EBF", "2.11", "1500", "3400", "2.2 EBHP", "11.5", "51"], ["TT2028EBF", "2.8", "2000", "3400", "3.8 EBHP", "11.5", "51"], ["TT9071EBF", "2.8", "1500", "3400", "2.9 EBHP", "11.5", "51"], ["TT2035EBF", "3.5", "2000", "3400", "4.8 EBHP", "11.5", "51"], ["T9051EBFU", "2.11", "1500", "1750", "2.2 EBHP", "12.0", "Other"], ["TT9061EBFU", "2.11", "1500", "3400", "2.2 EBHP", "12.0", "51"], ["TT9071EBFU", "2.8", "1500", "3400", "2.9 EBHP", "12.0", "51"], ["T9051EBFUI", "2.11", "1500", "1750", "2.2 EBHP", "12.0", "Other"], ["TT9061EBFUI", "2.11", "1500", "3400", "2.2 EBHP", "12.0", "51"], ["TT9071EBFUI", "2.8", "1500", "3400", "2.9 EBHP", "12.0", "51"], ["TT2035EBFUI", "3.5", "2000", "3400", "4.8 EBHP", "12.0", "51"], ["TT9061GBF", "2.11", "1500", "3400", "3.3 GHP", "11.4", "51"], ["TT2028GBF", "2.8", "2000", "3400", "5.8 GHP", "11.4", "51"], ["TT9071GBF", "2.8", "1500", "3400", "4.3 GHP", "11.4", "51"], ["TT2035GBF", "3.5", "2000", "3400", "7.2 GHP", "11.4", "51"], ["TT1540GBF", "4.0", "1500", "3400", "6.2 GHP", "11.4", "51"], ["TP2520J34", "1.9", "2500", "3400", "4.9 GHP", "11.4", "51"], ["TP2526J34", "2.6", "2500", "3400", "6.7 GHP", "11.4", "51"], ["TP2530J34", "2.88", "2500", "3400", "7.4 GHP", "11.4", "51"], ["TP2533J34", "3.3", "2500", "3400", "8.5 GHP", "11.4", "51"], ["TP2520J34UIL", "1.9", "2500", "3400", "4.9 GHP", "11.4", "51"], ["TP2526J34UIL", "2.6", "2700", "3400", "7.2 GHP", "11.4", "51"], ["TP2530J34UIL", "2.88", "2700", "3400", "8.0 GHP", "11.4", "51"], ["TP2533J34UIL", "3.3", "2500", "3400", "8.5 GHP", "11.4", "51"], ["TC1507S34", "3.0", "2700", "3400", "5.55 EBHP", "15.2", "60"], ["TC1508S34", "3.3", "2500", "3400", "5.65 EBHP", "15.2", "60"], ["TC1502E175", "0.25", "2500", "1750", "0.5 EBHP", "15.1", "60"], ["TC1802E175", "0.5", "2200", "1750", "0.8 EBHP", "15.1", "60"], ["TC1508E175", "1.75", "2500", "1750", "3.0 EBHP", "15.1", "60"], ["TC1509E175", "2.10", "2500", "1750", "3.6 EBHP", "15.1", "60"], ["TC1809E175", "3.10", "2200", "1750", "4.7 EBHP", "15.1", "60"], ["TC1504E345", "1.75", "2700", "3400", "3.2 EBHP", "15.1", "60"], ["TC1505E345", "2.1", "2700", "3400", "3.88 EBHP", "15.1", "60"], ["TC1506E345", "2.6", "2700", "3400", "4.81 EBHP", "15.1", "60"], ["TC1507E345", "3.0", "2700", "3400", "5.55 EBHP", "15.1", "60"], ["TC1506E346", "2.6", "2700", "3400", "4.81 EBHP", "15.1", "60"], ["TC1507E346", "3.0", "2700", "3400", "5.55 EBHP", "15.1", "60"], ["TC1508E346", "3.3", "2500", "3400", "5.65 EBHP", "15.1", "60"], ["TC1506G", "2.6", "2700", "3400", "7.21 GHP", "14.6", "60"], ["TC1507G", "3.0", "2700", "3400", "8.32 GHP", "14.6", "60"], ["TC1508G", "3.3", "2500", "3400", "8.48 GHP", "14.6", "60"], ["TC1509G", "4.0", "2500", "3400", "10.27 GHP", "14.6", "60"], ["TC1506GUI", "2.6", "2700", "3400", "7.21 GHP", "16.0", "60"], ["TC1507GUI", "3.0", "2700", "3400", "8.32 GHP", "16.0", "60"], ["TC1508GUI", "3.3", "2500", "3400", "8.48 GHP", "16.0", "60"], ["TC1509GUI", "4.0", "2500", "3400", "10.27 GHP", "16.0", "60"], ["TX1512S17", "2.6", "3000", "1750", "5.3 EBHP", "19.0", "63"], ["TX1513S17", "3.0", "3000", "1750", "6.2 EBHP", "19.0", "63"], ["TX1810S17", "3.2", "2500", "1750", "4.2 EBHP", "19.0", "63"], ["TX1812S17", "3.8", "2500", "1750", "5.2 EBHP", "19.0", "63"], ["TX1813S17", "4.1", "2500", "1750", "5.6 EBHP", "19.0", "63"], ["TX1506S34", "2.6", "3000", "3400", "5.3 EBHP", "19.0", "63"], ["TX1508S34", "3.0", "3000", "3400", "6.2 EBHP", "19.0", "63"], ["TX1510S34", "4.0", "3000", "3400", "8.2 EBHP", "19.0", "63"], ["TX1512E179", "2.6", "3000", "1750", "5.3 EBHP", "18.0", "63"], ["TX1810E179", "3.2", "2500", "1750", "4.4 EBHP", "18.0", "63"], ["TX1812E179", "3.8", "2500", "1750", "5.2 EBHP", "18.0", "63"], ["TX1505G6", "2.0", "3000", "3400", "6.2 GHP", "18.0", "63"], ["TX1506G6", "2.6", "3000", "3400", "8.0 GHP", "18.0", "63"], ["TX1508G6", "3.0", "3000", "3400", "9.2 GHP", "18.0", "63"], ["TX1506G8", "2.6", "3000", "3400", "8.0 GHP", "18.0", "63"], ["TX1508G8", "3.0", "3000", "3400", "9.2 GHP", "18.0", "63"], ["TX1509G8", "3.5", "3000", "3400", "10.8 GHP", "18.0", "63"], ["TX1510G8", "4.0", "3000", "3400", "12.3 GHP", "18.0", "63"], ["TX1508G8UIA", "3.0", "3500", "3400", "10.8 GHP", "18.2", "63"], ["TX1509G8UIA", "3.5", "3500", "3400", "12.6 GHP", "18.2", "63"], ["TX1510G8UIA", "4.0", "3500", "3400", "13.0 GHP", "18.2", "63"], ["EZ2536S", "3.6", "2500", "1750", "6.2 EBHP", "18.0", "EZ 44"], ["EZ2542S", "4.2", "2500", "1750", "7.2 EBHP", "18.0", "EZ 44"], ["EZ3040S", "4.0", "3000", "3400", "8.2 EBHP", "18.0", "EZ 44"], ["EZ2545S", "4.6", "2500", "3400", "7.9 EBHP", "18.0", "EZ 44"], ["EZ2555S", "5.5", "2500", "3400", "9.4 EBHP", "18.0", "EZ 44"], ["EZ3042S", "4.2", "3000", "1750", "8.6 EBHP", "18.0", "EZ 44"], ["EZ2530SUI", "3.0", "2500", "1750", "5.1 EBHP", "19.0", "EZ 44"], ["EZ3036SN", "3.6", "3000", "1750", "7.4 EBHP", "18.0", "EZ 44"], ["EZ2542SN", "4.2", "2650", "1750", "7.6 EBHP", "18.0", "EZ 44"], ["EZ2536E", "3.6", "2500", "1750", "6.2 EBHP", "18.5", "EZ 44"], ["EZ2542E", "4.2", "2500", "1750", "7.2 EBHP", "18.5", "EZ 44"], ["EZ2545E", "4.6", "2500", "3400", "7.9 EBHP", "18.5", "EZ 44"], ["EZ2555E", "5.5", "2500", "3400", "9.4 EBHP", "18.5", "EZ 44"], ["EZ4035E34", "3.5", "4000", "3400", "9.6 EBHP", "18.5", "EZ 44"], ["EZ4040E34", "4.0", "4000", "3400", "11.0 EBHP", "18.5", "EZ 44"], ["EZ2536EUI", "3.6", "2500", "1750", "6.2 EBHP", "18.5", "EZ 44"], ["EZ3030G34", "3.0", "3200", "3400", "9.9 GHP", "19.1", "EZ 44"], ["EZ3035G", "3.5", "3000", "3400", "10.8 GHP", "19.1", "EZ 44"], ["EZ3040G", "4.0", "3000", "3400", "12.3 GHP", "19.1", "EZ 44"], ["EZ3045G", "4.6", "3000", "3400", "14.2 GHP", "19.1", "EZ 44"], ["EZ4030G34", "3.0", "4000", "3400", "12.3 GHP", "20.0", "EZ 44"], ["EZ4035G34", "3.5", "4000", "3400", "14.4 GHP", "20.0", "EZ 44"], ["EZ4040G", "4.0", "4000", "3400", "16.4 GHP", "20.0", "EZ 44"], ["EZ3030G34UI", "3.0", "3500", "3400", "10.8 GHP", "19.3", "EZ 44"], ["EZ3035GUI", "3.5", "3500", "3400", "12.6 GHP", "19.3", "EZ 44"], ["EZ3040GUI", "4.0", "3500", "3400", "14.4 GHP", "19.3", "EZ 44"], ["T9951", "3.5", "1500", "1750", "3.6 EBHP", "19.0", "47/50/69"], ["T9971", "4.0", "2000", "1750", "5.5 EBHP", "19.0", "47/50/69"], ["TT9351", "3.5", "2500", "3400", "6.0 EBHP", "19.0", "51"], ["T991GR", "3.5", "1500", "3400", "5.4 EBHP", "24.0", "47/50/69"], ["T9971GR", "3.5", "1500", "3400", "7.2 EBHP", "24.0", "47/50/69"], ["T921", "5.0", "1700", "1050", "5.8 EBHP", "32.0", "47/50/69"], ["T1621", "5.0", "2500", "1050", "8.6 EBHP", "32.0", "47/50/69"], ["T1321", "5.5", "2100", "1150", "7.9 EBHP", "32.0", "47/50/69"], ["TS1711", "3.5", "2700", "1450", "6.5 EBHP", "32.0", "47 TS"], ["TSS1511", "4.0", "3500", "1450", "9.6 EBHP", "32.0", "47SS"], ["TS1321", "4.75", "2100", "1450", "6.8 EBHP", "32.0", "47 TS"], ["TS921", "4.75", "1800", "1450", "5.9 EBHP", "32.0", "47 TS"], ["TS1811", "4.5", "3500", "1450", "10.8 EBHP", "32.0", "47 TS"], ["TS1621", "4.75", "2500", "1450", "8.1 EBHP", "32.0", "47 TS"], ["T9211", "4.2", "3000", "1750", "8.2 EBHP", "32.0", "47/50/69"], ["T9281", "4.0", "4000", "1750", "11.0 EBHP", "32.0", "47/50/69"], ["TS2013", "5.5", "3000", "1750", "11.3 EBHP", "32.0", "47 TS"], ["TSF2819", "12.1", "2200", "1450", "18.2 EBHP", "40.7", "66 TSF"], ["TSF1819", "6.3", "4350", "1750", "18.8 EBHP", "40.7", "66 TSF"], ["TSF2019DS", "7.6", "4000", "1750", "18.7 EBHP", "40.7", "66 TSF"], ["TSP1621", "4.3", "6525", "1450", "19.2 EBHP", "51.8", "66 TSP"], ["TSP1819", "5.0", "5100", "1450", "17.5 EBHP", "51.8", "66 TSP"], ["TSP1821", "5.5", "5100", "1450", "19.2 EBHP", "51.8", "66 TSP"], ["TSP1621N", "4.3", "7250", "1450", "21.4 EBHP", "51.8", "66 TSP"], ["T41", "12.0", "900", "650", "7.4 EBHP", "37.0", "47/50/69"], ["TS1531", "7.92", "2175", "1450", "11.8 EBHP", "46.0", "47 TS"], ["TS1041", "8.0", "1600", "1450", "8.8 EBHP", "46.0", "47 TS"], ["T1631", "10.0", "2500", "1080", "15.1 EBHP", "61.0", "47/50/69"], ["AT0033", "7.93", "435", "650", "2.4 EBHP", "28.0", "Agriculture"], ["AT0055", "13.22", "725", "650", "6.6 EBHP", "36.0", "Agriculture"], ["AT0055DS", "13.22", "725", "650", "6.6 EBHP", "36.0", "Agriculture"], ["AT0055DSL", "13.22", "725", "650", "6.6 EBHP", "36.0", "Agriculture"], ["AB90DP", "23.8", "870", "650", "14.2 EBHP", "90.4", "Agriculture"], ["AB100DP", "26.4", "870", "550", "15.7 EBHP", "90.4", "Agriculture"], ["AB120DP", "31.7", "870", "550", "18.7 EBHP", "90.4", "Agriculture"], ["AB180DP", "47.6", "870", "650", "28.4 EBHP", "90.4", "Agriculture"], ["HTC1506S17", "1.35", "2200", "1750", "2.0 HP", "16.0", "Emperor HTC"], ["HTC1509S17", "2.1", "2200", "1750", "3.0 HP", "16.0", "Emperor HTC"], ["HTC1511S17", "2.6", "2200", "1750", "4.0 HP", "16.0", "Emperor HTC"], ["HTC1509E175", "2.1", "2200", "1750", "3.5 HP", "16.0", "Emperor HTC"], ["HTC1505E345", "2.1", "2200", "3400", "3.5 HP", "16.0", "Emperor HTC"], ["HTXS1813S", "3.5", "2500", "1450", "6.0 HP", "18.0", "Emperor HTXS"], ["HTXS1810S", "3.1", "2000", "1750", "4.2 HP", "18.0", "Emperor HTXS"], ["HTXS1812S", "3.8", "2000", "1750", "5.2 HP", "18.0", "Emperor HTXS"], ["HTS2210S", "4.0", "2300", "1450", "6.3 HP", "32.0", "Emperor HTS"], ["HTS2212S", "4.75", "2300", "1450", "7.5 HP", "32.0", "Emperor HTS"], ["HTS2016S", "5.6", "3000", "1450", "11.5 HP", "32.0", "Emperor HTS"], ["HTF2018S", "7.5", "3600", "1750", "18.5 HP", "41.0", "Emperor HTF"], ["HTF2221S", "10.2", "3000", "1750", "21.0 HP", "41.0", "Emperor HTF"], ["PEHT2012S", "3.96", "3000", "1450", "8.1 EBHP", "21.0", "Emperor PEHT"], ["PEHT2214S", "4.00", "3000", "950", "5.2 EBHP", "21.0", "Emperor PEHT"], ["HTCK3623S", "21.0", "1500", "1150", "22.0 HP", "79.6", "Emperor HTCK"], ["CW2040", "4.0", "2000", "1000", "7.0 EBHP", "30.0", "CW Vehicle"], ["CW3040", "5.0", "3000", "1250", "10.3 EBHP", "32.0", "CW Vehicle"], ["CW3555", "5.6", "3500", "1450", "13.4 EBHP", "32.0", "CW Vehicle"], ["CW2004", "4.0", "2000", "1750", "5.5 EBHP", "30.0", "CW Vehicle"], ["KE20A", "8.0", "4350", "1450", "", "", "KE"], ["KE22A", "10.0", "3650", "1450", "", "", "KE"], ["KE24A", "11.9", "3050", "1450", "", "", "KE"], ["KE28HA", "16.1", "2170", "1450", "", "", "KE"], ["KE30HA", "18.5", "1880", "1450", "", "", "KE"], ["KE36HA", "26.4", "1450", "1450", "", "", "KE"], ["KT16A", "7.2", "7250", "1750", "", "", "KT"], ["KT18A", "9.2", "5800", "1750", "", "", "KT"], ["KT20A", "11.4", "4650", "1750", "", "", "KT"], ["KT22A", "13.7", "3650", "1750", "", "", "KT"], ["KT24A", "16.3", "2900", "1750", "", "", "KT"], ["KT28A", "22.2", "2540", "1750", "", "", "KT"], ["KT30A", "25.4", "2175", "1750", "", "", "KT"], ["KT32A", "29.1", "1750", "1750", "", "100", "KT"], ["KT36A", "33.1", "1813", "1580", "", "", "KT"], ["KT40A", "37.5", "1450", "1450", "", "", "KT"], ["KF28A", "24.5", "3050", "1000", "", "", "KF"], ["KF30A", "28.0", "2900", "1000", "", "", "KF"], ["KF32A", "31.7", "2600", "1000", "", "", "KF"], ["KF36A", "40.0", "2000", "1000", "", "", "KF"], ["KF40A", "45.0", "1600", "1000", "", "", "KF"], ["KS28A", "29.1", "3650", "1200", "", "", "KS"], ["KS32A", "38.3", "2900", "1200", "", "", "KS"], ["KS36A", "48.3", "2350", "1200", "", "", "KS"], ["KS40A", "59.7", "2000", "1200", "", "", "KS"], ["HF18A", "10.1", "7250", "1000", "", "", "HF"], ["HF20A", "12.4", "5800", "1000", "", "", "HF"], ["HF25A", "19.4", "4060", "1000", "", "132", "HF"], ["HS18A", "12.1", "8700", "1200", "", "", "HS"], ["HS20A", "15.1", "7250", "1200", "", "", "HS"], ["LK3615", "37.0", "5800", "1500", "", "", "LK"], ["LK3617", "40.2", "5800", "1750", "", "", "LK"], ["LK4015", "45.7", "5075", "1500", "", "", "LK"], ["LK4017", "49.7", "5075", "1750", "", "", "LK"], ["LK4515", "57.6", "4060", "1500", "", "", "LK"], ["LK4517", "62.9", "4060", "1750", "", "", "LK"], ["LK5015", "71.1", "3335", "1500", "", "", "LK"], ["LK5017", "77.7", "3335", "1750", "", "", "LK"], ["LK5515", "86.1", "2755", "1500", "", "", "LK"], ["LK5517", "93.8", "2755", "1750", "", "829", "LK"], ["LK6015", "102.5", "2320", "1500", "", "", "LK"], ["LK6017", "111.8", "2320", "1750", "", "", "LK"], ["KV12", "4.1", "16000", "1750", "", "", "Other"], ["KV14", "5.5", "11600", "1750", "", "", "Other"], ["VKH12", "5.3", "21750", "1200", "", "", "VKH"], ["VKH14", "7.4", "15950", "1200", "", "", "VKH"], ["SK2015", "11.4", "21750", "1500", "", "", "SK"], ["SK2017", "11.6", "21750", "1750", "", "", "SK"], ["SK2215", "13.7", "18850", "1500", "", "", "SK"], ["SK2217", "14.0", "18850", "1750", "", "", "SK"], ["SK2415", "16.4", "15950", "1500", "", "", "SK"], ["SK2417", "16.6", "15950", "1750", "", "", "SK"], ["SK2615", "19.3", "13050", "1500", "", "840", "SK"], ["SK2617", "19.6", "13050", "1750", "", "", "SK"], ["SK2815", "22.3", "11600", "1500", "", "", "SK"], ["SK2817", "22.7", "11600", "1750", "", "", "SK"], ["SK3015", "25.4", "10150", "1500", "", "", "SK"], ["SK3017", "25.9", "10150", "1750", "", "", "SK"], ["KT45M", "19.6", "750", "600", "", "", "KT"], ["KF5M5B", "46.7", "750", "600", "", "", "KF"], ["KF5M9B", "46.7", "1160", "600", "", "", "KF"], ["MF7M5B", "53.3", "750", "218", "", "", "Other"], ["MF7M5D", "67.1", "750", "274", "", "", "Other"], ["MF7M7B", "53.3", "1090", "218", "", "", "Other"], ["MF7M7D", "67.1", "1090", "274", "", "", "Other"], ["MK9M5B", "105", "750", "289", "", "", "MK"], ["MK9M5D", "105", "750", "289", "", "", "MK"], ["MK9M8B", "105", "1090", "289", "", "", "MK"], ["MK9M8D", "105", "1090", "289", "", "", "MK"], ["WM0515C", "0.5", "1500", "1750", "", "", "WM Aggressive"], ["WM0815C", "0.8", "1500", "1750", "", "", "WM Aggressive"], ["WM1015C", "1.0", "1500", "1750", "", "", "WM Aggressive"], ["WM1615C", "1.6", "1500", "1750", "", "", "WM Aggressive"], ["WM1815C", "1.8", "1500", "1750", "", "", "WM Aggressive"], ["WM2315C", "2.3", "1500", "1750", "", "", "WM Aggressive"], ["WM3015C", "3.0", "1500", "1750", "", "", "WM Aggressive"], ["WM3615C", "3.6", "1500", "1750", "", "", "WM Aggressive"], ["WM4215C", "4.2", "1500", "1750", "", "", "WM Aggressive"], ["WM1815S", "1.8", "1500", "1750", "", "", "WM Aggressive"], ["WM2515S", "2.5", "1500", "1750", "", "", "WM Aggressive"], ["WM4215S", "4.2", "1500", "1750", "", "", "WM Aggressive"], ["EWM0515C", "0.5", "1500", "1750", "", "", "EWM Aggressive"], ["EWM0815C", "0.8", "1500", "1750", "", "", "EWM Aggressive"], ["EWM1015C", "1.1", "1500", "1750", "", "", "EWM Aggressive"], ["EWM1615C", "1.6", "1500", "1750", "", "", "EWM Aggressive"], ["EWM2315C", "2.3", "1500", "1750", "", "", "EWM Aggressive"], ["EWM3015C", "3.0", "1500", "1750", "", "", "EWM Aggressive"], ["EWM3715C", "3.7", "1500", "1750", "", "", "EWM Aggressive"], ["EWM4215C", "4.2", "1500", "1750", "", "", "EWM Aggressive"], ["EWM2515S", "2.5", "1500", "1750", "", "", "EWM Aggressive"], ["EWM4215S", "4.2", "1500", "1750", "", "", "EWM Aggressive"], ["TX1506S17SS", "1.6", "2200", "1750", "", "", "63"], ["TX1510S17SS", "2.1", "2200", "1750", "", "", "63"], ["TX1512S17SS", "2.6", "2200", "1750", "", "", "63"], ["TX1810S17SS", "3.1", "2000", "1750", "", "", "63"], ["TX1812S17SS", "3.8", "2200", "1750", "", "", "63"], ["TS2010SS", "3.4", "2200", "1450", "", "", "47 TS"], ["TS2012SS", "4.0", "3000", "1750", "", "", "47 TS"], ["TS2212SS", "4.75", "2200", "1450", "", "", "47 TS"], ["TS2016SS", "5.55", "3000", "1450", "", "", "47 TS"], ["TSF2019SS", "7.5", "3000", "1750", "", "", "66 TSF"], ["TSF2021SS", "8.5", "3000", "1750", "", "", "66 TSF"], ["TSF2221SS", "10.2", "3000", "1750", "", "", "66 TSF"], ["TSF2421SS", "12.0", "3000", "1750", "", "", "66 TSF"], ["KEZ20A", "8.0", "3000", "1450", "", "", "KE"], ["KEZ22A", "10.0", "3000", "1450", "", "", "KE"], ["KEZ24A", "11.9", "3000", "1450", "", "", "KE"], ["KEZ28HA", "16.1", "2170", "1450", "", "", "KE"], ["KEZ30HA", "18.5", "1880", "1450", "", "", "KE"], ["KEZ36HA", "26.4", "1450", "1450", "", "", "KE"], ["HFN25A", "19.44", "4060", "1000", "", "", "HFN"], ["KFZ28A", "24.5", "3000", "1000", "", "", "KFZ"], ["KFZ30A", "28.0", "2900", "1000", "", "", "KFZ"], ["KFZ36A", "36.2", "2050", "900", "", "", "KFZ"], ["NPT", "40.0", "1900", "1000", "", "", "NPT"], ["KFZ40A", "45.0", "1600", "900", "", "", "KFZ"], ["LKN3615", "37.0", "5800", "1500", "", "", "LKN"], ["LKN3617", "40.1", "5800", "1750", "", "", "LKN"], ["LKN4015", "45.7", "5075", "1500", "", "", "LKN"], ["LKN4017", "49.7", "5075", "1750", "", "", "LKN"], ["LKN4515", "57.6", "4060", "1500", "", "", "LKN"], ["LKN4517", "62.8", "4060", "1750", "", "", "LKN"], ["LKN5015", "71.0", "3335", "1500", "", "", "LKN"], ["LKN5017", "77.6", "3335", "1750", "", "829", "LKN"], ["LKN5515", "86.1", "2755", "1500", "", "", "LKN"], ["LKN5517", "93.7", "2755", "1750", "", "", "LKN"], ["LKN6015", "102.4", "2320", "1500", "", "", "LKN"], ["LKN6017", "111.7", "2320", "1750", "", "", "LKN"]];
KB.gp.seriesSpecs = {"ET SERIES": {"features": ["Solid ceramic plungers", "Build-in unloader", "New oversized plunger guide", "New dust protection chamber S E", "Nickel-plated cast manifold manufactured like W", "New generation seal package RI E", "Right side shaft, left side manifold (S),", "New oil seal", "Total start-stop feature ET Series - Hollow Shaft - Electric - Specifications:", "New optimized inlet and outlet valves", "Triplex plunger pumps"], "specs": {"maxInletPSI": "125", "maxTempF": "165", "shaft": "945 in", "oilCap": "8.5 oz", "inletPort": "1/2\"-14 BSP-F", "dischargePort": "3/8\"-19 BSP-F"}}, "EP SERIES": {"features": ["Solid ceramic plungers with innovative dual glide system", "Advanced forged brass manifold increases working", "Optimized outlet valves", "Patent-pending plunger guide bushing", "New dual lip oil seal", "Triplex plunger pumps"], "specs": {"maxInletPSI": "125", "maxTempF": "165", "shaft": "945 in", "oilCap": "15.0 oz", "inletPort": "1/2\"-14 BSP-F", "dischargePort": "3/8\"-19 BSP-F"}}, "ES SERIES": {"features": ["Solid ceramic plungers with innovative dual glide system", "Forged brass manifold", "Exclusive protection chamber between crankcase and", "Optimized outlet valves", "Patent-pending plunger guide bushing", "New dual lip oil seal", "Triplex plunger pumps"], "specs": {"maxInletPSI": "125", "maxTempF": "165", "shaft": "945 in", "oilCap": "22.0 oz", "inletPort": "1/2\"-14 BSP-F", "dischargePort": "3/8\"-19 BSP-F"}}, "ES": {"features": ["Compact design", "Die-cast, anodized aluminum oil-bath crankcase", "Unitized SS inlet and discharge valves", "Nickel-plated crankcase", "The industry\u2019s choice for high flow applications", "Includes all Emperor features", "Ideal for use in carpet cleaning and for use in industrial", "Large capacity, die-cast aluminum oil-bath crankcase", "FLOW TO 30 GPM, PRESSURE TO 4,000 PSI", "Forged brass manifold with an exclusive lifetime warranty", "Unitized Stainless Steel inlet and discharge valves", "New valve cap improves hydrostatic performance", "New dual lip oil seal", "Oversized roller bearings", "316 stainless manifold for superior corrosion protection", "Solid ceramic plungers with continuously lubricated", "Ideal for use in carpet cleaning and other industrial plant", "URETHANE COATED FOR DURABILITY AND OPERATOR PROTECTION", "Nickel-plated inlet/outlet valve plugs", "The preferred pump frame in the industry", "Dual manifolds utilizing a common crankcase", "Compact and economical design", "Duplex plunger pump, splined shaft", "Features patented \u201chigh tech\u201d packings", "Standard 24 mm solid shaft for pulley mounting", "Quick coupler and plug included", "Splash lubrication", "Long life, low and high pressure seals", "1\" Hollow shaft with gas flange", "316 stainless steel wetted parts", "Unitized, stainless steel inlet and outlet valves", "Patented inlet/outlet valve cage", "Fully anodized crankcase", "Perfect for high flow applications", "Ideal for use in carpet cleaning and other high pressure", "EASILY CHANGE WORN NOZZLES", "Large-capacity, die-cast anodized aluminum, oil-bath", "316 stainless steel manifold", "Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1,", "New plunger design improves thermal shock resistance", "Ideal for all general cleaning and misting applications", "Triplex plunger pump, splined shaft", "F2152 kit allows for easy adaptation to MSS mounting pattern", "Heavy-duty tapered roller bearings", "T41 has an aluminum manifold", "Solid ceramic plungers with continuously", "STAINLESS STEEL BODY", "HIGH IMPACT - 0 DEGREE NOZZLES (THREE)", "Over-sized connecting rods for maximum life", "Forged Stainless Steel manifold (AISI420B)", "Innovative new seal design extends seal life", "Triplex plunger pump, solid shaft", "SAE-C hydraulic shaft/flange option available", "STANDARD 1/2\" NPT CONNECTION (FEMALE)", "Oversized connecting rods for maximum life", "Vertically fitted suction/delivery valves", "Specifically designed to handle rigorous duty cycles, high", "Unitized stainless steel inlet and discharge valves", "Solid ceramic plungers with continuously lubricated packings", "Forged brass manifold with an exclusive lifetime", "Ideal for use in car wash and other high pressure", "Ideal for all general cleaning/washing applications", "Compact, high pressure", "Patented \u201chigh tech\u201d low and high pressure seals", "Packings/plungers serviceable without removing manifold", "Includes drain/priming valve kit", "Designed for rollover carwash systems", "New plunger design improves thermal shock", "Specially designed for use in prep units, conveyor", "Specially designed to handle rigorous duty cycles, high", "Oversized bearings and sight glass", "New optimized inlet and outlet valves", "Triplex plunger pump", "HARDENED STAINLESS NOZZLE INSERTS FOR LONG LIFE", "Ideal for agricultural applications", "Nickel-plated forged brass manifold with exclusive", "Aluminum manifold", "Long life, low pressure seals", "Low-high pressure packing design with integrated cooling system", "Solid ceramic plungers", "Solid ceramic plunger design with continuously", "Aluminum or forged brass manifold", "Sixplex plunger pump, solid shaft", "Flex coupling and bell housing available for direct drive", "Specifically designed for the agriculture market", "Large, lightweight connecting rods", "DIMENSIONS: 1-3/4\" LONG X 2-1/4\" WIDE", "Triplex plunger pumps"], "specs": {"maxInletPSI": "115", "maxTempF": "185", "shaft": "1.181 in", "oilCap": "40.6 oz", "inletPort": "1/2\"-14 BSP-F", "dischargePort": "3/8\"-9 BSP-F"}}, "EZ SERIES": {"features": ["Flex coupling and bell housing available for direct drive", "Solid ceramic plunger design", "Die-cast, anodized aluminum oil bath crankcase", "Unitized stainless steel inlet and discharge valves", "Forged brass manifold with an exclusive lifetime warranty", "Premium roller bearings", "Triplex plunger pumps"], "specs": {"maxInletPSI": "125", "maxTempF": "165", "shaft": "945 in", "oilCap": "14.0 oz", "inletPort": "1/2\"-14 BSP-F", "dischargePort": "3/8\"-19 BSP-F"}}, "CW": {"features": ["Forged brass manifol with exclusive lifetime warranty", "Heavy-duty tapered roller bearings", "Solid ceramic plungers with continuously lubricated", "Dual crankshaft for convenience (CW2040)", "The preferred pump frame in the car wash self-", "Large-capacity, die-cast, anodized aluminum oil-bath", "Unitized stainless steel inlet and discharge valves", "The preferred pump frame in the two-gun prep", "Large-capacity, die-cast, anodized aluminum", "Forged brass manifold with an exclusive lifetime", "Unitized SS inlet and discharge valves", "Over-sized connecting rods for maximum life", "Oversized connecting rods for maximum life", "Triplex plunger pump"], "specs": {"maxInletPSI": "125", "maxTempF": "165", "shaft": "1.378 in", "oilCap": "50.7 oz", "inletPort": "3/4\"-14 BSP-F CW1012", "dischargePort": "3/8\" BSP-F"}}, "KE Series": {"features": ["Splash lubrication KE SERIES", "Patent-pending symmetrical power end featuring top and bottom", "420 SS Manifold", "Low-high pressure packing design with integrated cooling system", "High volumetric efficient suction/delivery valves", "Pressure packing design with integrated cooling system", "SAE-B drive options available", "Double pressure packings"], "specs": {"maxInletPSI": "45", "maxTempF": "140", "oilCap": "67.63 oz", "inletPort": "1\" NPT--F KE SERIES", "dischargePort": "1/2\" NPT-F MODEL GPM PSI RPM"}}, "KS Series": {"features": ["Patent-pending symmetrical power end featuring top and bottom", "SAE-C drive options available", "420 SS Manifold", "Low-high pressure packing design with integrated cooling system", "High volumetric efficient suction/delivery valves", "Splash lubrication", "Available with external gear box (direct drive only)"], "specs": {"maxInletPSI": "45", "maxTempF": "140", "oilCap": "162.3 oz", "inletPort": "2\" NPT-F", "dischargePort": "1-1/2\" NPT-F"}}, "MKS Series": {"features": ["Low-high pressure packing design with integrated cooling system", "High volumetric efficient suction/delivery valves", "SAE-C hydraulic drive available (w/ 2500 RPM version only)", "SAE-D hydraulic drive available (w/ 1800 RPM version only)", "Splash lubrication", "Nickel-plated cast iron manifold", "Gear ratios: 1500 RPM=2.23:1, 1800 RPM=2.65:1,", "Includes drain/priming valve kit"], "specs": {"maxInletPSI": "45", "maxTempF": "140", "oilCap": "456.5 oz", "inletPort": "2.165\"/55 mm", "dischargePort": "2.165\"/55 mm"}}, "VFH Series": {"features": ["SAE-C hydraulic drive options available", "Patent-pending symmetrical power end featuring top and bottom", "Low-high pressure packing design with integrated cooling system", "Splash lubrication", "420 SS manifold", "Horizontally fitted in-line valves"], "specs": {"maxTempF": "86", "oilCap": "128.5 oz", "inletPort": "3/4\" BSP-F", "dischargePort": "1/2\" G Special"}}, "SK Series": {"features": ["Splash lubrication SK SERIES", "Pressure packing integrated cooling system", "High pressure \u201cMUD\u201d pump", "Hydraulic drive available", "420 SS manifold", "Double pressure packings", "Gear ratios: 1500 RPM=2.95:1, 1750 RPM=3.389:1", "Horizontally fitted in-line valves"], "specs": {"maxTempF": "86", "oilCap": "473.4 oz", "inletPort": "1-1/2\" BSP-F MODEL GPM PSI RPM", "dischargePort": "3/4\" HP-Special SK2015 11.4 GPM 21,750 PSI 1500 RPM"}}, "TR": {"features": ["Solid ceramic plungers Shipping Weight.......................................................2,436 lbs.", "Triplex plunger pump Inlet Pressure.............................................................30-70 PSI", "Internal gear reduction Crankcase Oil Capacity...........................9.24 gal. (vertical)", "Double end crankshaft Pump Dimensions...................................50.0\"x41.0\"x28.5\"", "Forced oil lubrication with integrated cooler, 13.75 gal. (horizontal)", "Can be mounted vertically or horizontally SR Stroke.............................................................3.54\"/90 mm", "Up to 236 GPM and 22,000 PSI Shaft Diameter...................................................2.56\"/65 mm", "300 HP or 450 HP TR Stroke...........................................................5.12\"/130 mm"], "specs": {}}, "WM Series": {"features": ["Parallel inlet and outlet valve design for efficiency and easy", "Use motor #639610, 2.5 HP, 50/60 Hz for 4.2 GPM version", "316 stainless steel fluid end for superior corrosion protection W", "Most models available with EPDM sealing option", "Solid ceramic plungers with advanced surface finish assure", "316 stainless steel fluid end for superior corrosion protection", "Compact design offers solutions to space limitations", "Solid ceramic plungers with advanced surface finish assure N E"], "specs": {"maxInletPSI": "50", "maxTempF": "140", "oilCap": "12.0 oz", "inletPort": "1/2\" NPT-F / 3/8\"-19 NPT-F (WM0515C) WM1815C 1.8 GPM 1,500 PSI 1750 RPM", "dischargePort": "3/8\" NPT-F"}}, "HFN Series": {"features": ["ASTM F51 SS manifold, 17/4 PH SS valves", "Patent-pending symmetrical power end featuring top and bottom", "316 SS fluid end and wetted parts", "Low-high pressure packing design with integrated cooling system", "High volumetric efficiency suction/delivery valves", "Splash lubrication", "Patented \u201chigh tech\u201d low and high pressure seals", "New high performance aluminum alloy connecting rods and a"], "specs": {"maxInletPSI": "45", "maxTempF": "140", "oilCap": "128.5 oz", "inletPort": "1\" NPT-F HFN25A 19.44 GPM 4,060 PSI 1000 RPM", "dischargePort": "3/4\" NPT-F"}}, "MWN Series": {"features": ["Vertically fitted suction/delivery valves", "ASTM F51 SS manifold, 17/4 PH SS valves", "Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1,", "Low-high pressure packing design with integrated cooling system", "Optional drain/prime valve kit included", "Splash lubrication"], "specs": {"maxInletPSI": "45", "maxTempF": "140", "oilCap": "304.35 oz", "inletPort": "32A 36.0 GPM 4,350 PSI 1500/1800,2200/2600 RPM", "dischargePort": "36A 45.4 GPM 3,500 PSI 1500/1800,2200/2600 RPM"}}};
KB.gp.accessories = {"Hydraulic Drive": [["HYDRAULIC", "FLANGE/COUPLER FOR 47, 66(TSF/TSP) SERIES PUMPS"], ["HYDRAULIC", "FLANGE/COUPLER FOR 70 SERIES PUMPS"], ["HYDRAULIC", "FLANGE/COUPLER FOR 71 & 72 (KF, HF, VF, VK and KS) SERIES PUMPS"], ["ZGH71SC14TS", "SAE-C-14T 12/24DP Features Snap Ring and Groove for Tach Pickup"]], "Gear Reducers & Flanges": [["ZGR0750", "2.4 to 1 Reduction for 3/4\" Shafted Engines, 3 to 5 HP, J609A (49 and 50 Series at 1450 RPM) 5.0 lbs."], ["YGR0750", "2.3 to 1 Reduction, 3/4\" Shafted Engines, 3 to 5 HP, J609A (49 and 50 Series at 1450 RPM) 4.0 lbs."], ["YGR1000", "2.2 to 1 Reduction, Dual Bearings, 1\" Shafted Engines, 11 to 18 HP, J609B (47 Series at 1450 RPM) 6.0 lbs."], ["YGR1000P", "2.2 to 1 Reduction, Dual Bearings, 1\" Shafted Engines, 11 to 24 HP, J609B (47 and 66 Series at 1450 RPM) 6.0 lbs."], ["YGR1125", "2.2 to 1 Reduction, 1-1/8\" Shaft, Dual Bearings, 11 to 18 HP, J609F (47 Series at 1450 RPM) 6.0 lbs."], ["YGR1125P", "2.2 to 1 Reduction, Dual Bearings, 1-1/8\" Shafted Engines, 11 to 24 HP, J609B (47 and 66 Series at 1450 RPM) 6.0 lbs."], ["YGR1125P31", "2.2 to 1 Reduction, Dual Bearings, 1/1/8\" Shafted Engines. 20 to 31 HP, J609B(47 and 66 Series at 1450 RPM) 6.0 lbs."], ["FLEX", "COUPLERS"], ["ZF184N", "For NEMA-C Electric Motors 184TC Frame, Use with ZG184TC Coupler (Series 63, 44, ET and EP) 3.5 lbs."]], "Pulleys & Clutches": [["ACCESSORIES", "- PULLEYS, CLUTCHES"], ["ZP100", "3.94 in. / 100 mm, 2 Groove, A Section, Aluminum 1.0 lbs."], ["ZP140", "5.51 in. / 140 mm, 2 Groove, A Section, Aluminum 1.4 lbs."], ["ZP160", "6.30 in. / 160 mm, 2 Groove, A Section, Aluminum 1.8 lbs."], ["190225", "Pulley and Rail Kit (includes 639015 and (2) 540014) 1.5 lbs."], ["639015", "1 Groove, B Section, Aluminum, 8\" Outer Diameter, 24 mm Hub 1.5 lbs."], ["ZP4140", "4 Groove, B Section, Aluminum, 32 mm"], ["ZP3B136", "Pulley, 13.95 OD, 3 Groove, SK (can be used in the CW1541 to HTCK4050S conversion)"], ["ZP3B60", "Pulley, 6.35 OD, 3 Groove, SD (can be used in the CE1541 to HTCK4050S conversion)"], ["BROWNING", "TYPE \u201cH\u201d PULLEY BUSHINGS"], ["100687", "12 Volt Double \u201cA\u201d Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs."], ["100688", "12 Volt Double \u201cA\u201d Groove Clutch Adapter Kit for 44, 50, 63, ET and EP Series Pumps 11.0 lbs."], ["100717", "12 Volt Single \u201cA\u201d Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs."], ["100718", "12 Volt Single \u201cA\u201d Groove Clutch Adapter Kit for 44, 50, 63, ET and EP Series Pumps 11.0 lbs."], ["100719", "24 Volt Double \u201cA\u201d Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs."], ["100720", "24 Volt Double \u201cA\u201d Groove Clutch Adapter Kit for 44, 50, 63,ET and EP Series Pumps 11.0 lbs."], ["100172", "12 Volt Double \u201cA\u201d Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, No Pulley 25.0 lbs."], ["100976", "12 Volt Double \u201cB\u201d Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, 12.4\" Pulley 31.0 lbs."], ["101046", "12 Volt Double \u201cB\u201d Groove Clutch Adapter Kit for 47, 59, 66 and ES/ESN Series Pumps, 9-3/4\" Pulley 33.5 lbs."], ["100977", "12 Volt Single \u201cB\u201d Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, 12.4\" Pulley 24.0 lbs."]], "Pump Oil & Kits": [["ACCESSORIES", "- OIL & OIL DRAIN KITS"], ["SERIES", "100 OIL (30 WEIGHT)"], ["100295", "Series 100 Oil, 16 oz. Bottle 3.0 lbs."], ["100552", "Series 100 Oil, 2-1/2 Gallons 25.0 lbs."], ["100214", "BULK PACKAGED: Series 100 Oil, 6-Pack of 16 oz. Bottles 7.0 lbs."], ["100216", "BULK PACKAGED: Series 100 Oil, 24-Pack of 16 oz. Bottles (Product Group: B) 25.0 lbs."], ["100553", "BULK PACKAGED: Series 100 Oil, (2) 2-1/2 Gallons (Product Group: B) 50.0 lbs."], ["100219", "BULK PACKAGED: Series 100 Oil, 15 Gallon Plastic Drum (Product Group: B) 117.0 lbs."], ["SERIES", "220 OIL (50 WEIGHT)"], ["100450", "Series 220 Industrial Oil, 2-1/2 Gallons 25.0 lbs."], ["100016", "BULK PACKAGED: Series 220 Industrial Oil, 6-Pack of 16 oz. Bottles (Product Group B) 7.0 lbs."], ["100217", "BULK PACKAGED: Series 220 Industrial Oil, 5 Gallons (Product Group B) 50.0 lbs."], ["SERIES", "8090 OIL (80/90 GEAR LUBE)"], ["100734", "Series 8090 Oil, 2-1/2 Gallons 25.0 lbs."], ["100735", "BULK PACKAGED: Series 8090 Oil (2) 2-1/2 Gallons (Twin Pack) (Product Group B) 50.0 lbs."], ["190446", "Oil Drain Kit, 1/4\" For Series 60, 63, 47, 44, 50, 60, ET, ES, EP Pumps 1.5 lbs."], ["190447", "Oil Drain Kit, 3/8\", For Series 69, 70, 76, 77 Pumps 1.5 lbs."], ["190448", "Oil Drain Kit, 1/2\", For Series 71, 72, MWS, SM Pumps 1.5 lbs."]], "Trapped Pressure Unloaders": [["ACCESSORIES", "- VALVES"], ["MODEL", "GPM RATED MAX INLET OUTLET BYPASS"], ["PULSAR4LP", "10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.5 lbs."], ["PULSAR4KLP", "10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.6 lbs."], ["PULSAR4HP", "10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.6 lbs."], ["PULSAR4KHP", "10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.7 lbs."], ["PULSAR4KHPS", "10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.6 lbs."], ["PULSAR4KHPEZ", "10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.7 lbs."], ["PULSAR4HPMS", "10.5 GPM 4,050 PSI 4,500 PSI 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 1.9 lbs."], ["PULSAR4KHPMS", "10.5 GPM 4,050 PSI 4,500 PSI 3/8\" NPT-F 3/8\" NPT-F (2) 3/8\" NPT-F 195\u00b0 F 2.0 lbs."], ["TRAPPED", "PRESSURE UNLOADERS - NO CHECK VALVES"], ["MODEL", "GPM MAX INLET OUTLET BYPASS"], ["PLSR4HVNCV", "10.5 GPM 4,050 PSI (2) 3/8\" NPT-F 3/8\" NPT-F 3/8\" NPT-F 194\u00b0 F 1.6 lbs."], ["PLSR4LVNCV", "10.5 GPM 2,600 PSI (2) 3/8\" NPT-F 3/8\" NPT-F 3/8\" NPT-F 194\u00b0 F 1.6 lbs."], ["YU2158NCV", "21.0 GPM 6,500 PSI (2) 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 200\u00b0 F 4.0 lbs."], ["YUB21405NCV", "21.0 GPM 4,050 PSI (2) 1/2\" NPT-F (2) 1/2\" NPT-F 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["MODEL", "GPM RATE MAX INLET OUTLET BYPASS"], ["YU21235", "21.0 GPM 2,300 PSI 2,600 PSI (2) 1/2\" NPT-F 1/2\" NPT-F (2) 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["YUW21235", "21.0 GPM 2,300 PSI 2,600 PSI (2) 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["YU21405", "21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2\" NPT-F 1/2\" NPT-F (2) 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["YU21405S", "21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2\" NPT-F 1/2\" NPT-F (2) 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["YUB21405", "21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 200\u00b0 F 3.1 lbs."], ["YU5221", "53.0 GPM 2,200 PSI 2,450 PSI 1\" NPT-F 1\" NPT-F 1\" NPT-F 200\u00b0 F 4.5 lbs."], ["YU2158", "21.0 GPM 5,800 PSI 6,500 PSI (2) 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 200\u00b0 F 4.0 lbs."], ["YU7221", "21.0 GPM 7,250 PSI 8,000 PSI 1/2\" BSP - F 1/2\" BSP - F 1/2\" BSP - F 194\u00b0 F 2.3 lbs."], ["YU2122SS", "21.0 GPM 2,200 PSI 2,500 PSI 1/2\" NPT 1/2\" NPT 1/2\" NPT 194\u00b0 F 3.1 lbs."], ["WYVB4021HT", "21.0 GPM 4,050 PSI 4,500 PSI 1/2\" NPT - F 1/2\" NPT - F 1/2\" NPT - F 195\u00b0 F 2.4 lbs."], ["YVB5121HT", "21.0 GPM 5,100 PSI 5,650 PSI 1/2\" NPT - F 1/2\" NPT - F 1/2\" NPT - F 195\u00b0 F 2.4 lbs."]], "Adjustable Unloaders": [["ACCESSORIES", "- VALVES"], ["MODEL", "GPM RATED MAX INLET OUTLET BYPASS"], ["YVB5K", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-M 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 1.2 lbs."], ["YVB7K", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" NPT-M 3/8\" NPT-F 3/8\" NPT-F 195\u00b0 F 1.2 lbs."], ["YVB9K", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YVB8KMS", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-M 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YVB8KMS10", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YVB9KMS2", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-F (2)3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YVB9KMSS", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 1/2\" BSP-M 3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YU4050K", "10.0 GPM 4,050 PSI 4,500 PSI 3/8\" BSP-M 3/8\" BSP-F 1/2\" BSP-F 195\u00b0 F 2.0 lbs."], ["YU5075K", "10.0 GPM 5,075 PSI 5,650 PSI 3/8\" BSP-M 3/8\" BSP-F 1/2\" BSP-F 195\u00b0 F 2.0 lbs."], ["YU5075KS", "10.0 GPM 5,075 PSI 5,650 PSI 3/8\" BSP-M 3/8\" BSP-F 1/2\" BSP-F 195\u00b0 F 2.0 lbs."], ["YU5075KMS", "10.0 GPM 5,075 PSI 5,650 PSI 3/8\" BSP-M 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 2.0 lbs."], ["YU5075KMM", "10.0 GPM 5,075 PSI 5,650 PSI 3/8\" BSP-M 3/8\" BSP-F 1/2\" BSP-F 195\u00b0 F 3.0 lbs."], ["YVB3K", "6.5 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-M 3/8\" BSP-M 3/8\" BSP-F 195\u00b0 F 1.0 lbs."], ["YVB3KA", "6.5 GPM 3,200 PSI 3,650 PSI 3/8\" NPT-M 3/8\" NPT-M 3/8\" NPT-F 195\u00b0 F 1.0 lbs."], ["YVB3KTT", "6.5 GPM 3,200 PSI 3,650 PSI 1/4\" NPT-M 3/8\" NPT-M 3/8\" NPT-F 195\u00b0 F 1.0 lbs."], ["YVB3KTTI18", "6.5 GPM 3,200 PSI 3,650 PSI 1/4\" NPT-M 3/8\" NPT-M 3/8\" NPT-F 195\u00b0 F 1.25 lbs."], ["YVB3KTTI21", "6.5 GPM 3,200 PSI 3,650 PSI 1/4\" NPT-M 3/8\" NPT-M 3/8\" NPT-F 195\u00b0 F 1.25 lbs."], ["YVB3KTTI23", "6.5 GPM 3,200 PSI 3,650 PSI 1/4\" NPT-M 3/8\" NPT-M 3/8\" NPT-F 195\u00b0 F 1.25 lbs."], ["MODEL", "GPM MAX INLET OUTLET BYPASS"], ["2100242", "8.0 GPM 4,000 PSI (2) 3/8\" NPT 3/8\" NPT (2) 3/8\" NPT 195\u00b0 F 2.0lbs."], ["ZKHM", "10.8 GPM 3,000 PSI 3/8\" BSP-F 1/4 BSP-F & 3/8\" BSP-M (2) 3/8\" BSP-F 185\u00b0 F 2.5lbs."], ["ZKHM1", "(no knob) 10.8 GPM 3,000 PSI 3/8\" BSP-F 1/4 BSP-F & 3/8\" BSP-M (2) 3/8\" BSP-F 185\u00b0 F 2.5lbs."], ["ZK4010", "2.11 to 10.5 GPM 4,000 PSI 3/8\" BSP-F 3/8\" BSP-M (2) 3/8\" BSP-M 185\u00b0 F 2.3 lbs."], ["ZK5813", "2.11 to 13.2 GPM 5,800 PSI 1/2\" BSP-F 1/2\" BSP-M (2) 1/2\" BSP-M 185\u00b0 F 6.2 lbs."], ["YU3678", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" NPT-F 3/8\" NPT-F 3/8\" NPT-F 195\u00b0 F 2.5 lbs."], ["YU3678MS", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" NPT-F 3/8\" NPT-F 3/8\" NPT-F 195\u00b0 F 2.5 lbs."]], "Control Set Unloaders": [["ACCESSORIES", "- VALVES"], ["MODEL", "GPM RATED MAX INLET OUTLET"], ["Z0KR1", "2.1 GPM 1,000 PSI 1,000 PSI 1/2\" NPT-M M22 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW1", "3.0 GPM 1,600 PSI 1,600 PSI 3/8\" BSP-F 3/8\" BSP-M 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW1SC", "3.0 GPM 1,600 PSI 1,600 PSI 3/8\" BSP-M 3/8\" BSP-M 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW326", "2.6 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW340", "4.0 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW355", "5.5 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 165\u00b0 F 2.0 lbs."], ["ZKW21", "4.5 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 200\u00b0 F 2.0 lbs."], ["ZKW21L", "4.5 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 200\u00b0 F 2.0 lbs."], ["ZKW22L", "6.0 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 200\u00b0 F 2.0 lbs."], ["ZKW2LSC", "6.0 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 200\u00b0 F 2.0 lbs."], ["ZKW2SC", "4.5 GPM 3,000 PSI 3,000 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\" 200\u00b0 F 2.0 lbs."], ["MODEL", "GPM RATED MAX INLET OUTLET INJECTOR"], ["YVB135KDM", "6.5 GPM 2,300 PSI 2,600 PSI 3/8\" BSP-F 3/8\" BSP-M N/A 195\u00b0 F 1.5 lbs. 24"], ["YVB135KDMI18", "6.5 GPM 2,300 PSI 2,600 PSI 3/8\" BSP-F 3/8\" BSP-M 1.8 mm 195\u00b0 F 1.8 lbs. 20"], ["YVB135KDMI21", "6.5 GPM 2,300 PSI 2,600 PSI 3/8\" BSP-F 3/8\" BSP-M 2.1 mm 195\u00b0 F 1.8 lbs. 20"], ["YVB351KDM", "6.5 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-M N/A 195\u00b0 F 1.8 lbs. 24"], ["YVB351KDMI18", "6.5 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-M 1.8 195\u00b0 F 1.9 lbs. 20"], ["YVB351KDMI21", "6.5 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-M 2.1 195\u00b0 F 1.9 lbs. 20"], ["YVB75KTP", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-M N/A 195\u00b0 F 1.8 lbs. 20"], ["YVB75KTPF21", "8.0 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-M 2.1 mm 195\u00b0 F 2.1 lbs. 20"], ["MODEL", "GPM RATED MAX INLET OUTLET INJECTOR"], ["YVB35KDM", "6.5 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-M N/A N/A 195\u00b0 F 1.5 lbs. 24"], ["YVB35KDMI18", "6.5 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\u201d 1.8 mm 195\u00b0 F 1.8 lbs. 20"], ["YVB35KDMI21", "6.5 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-M 1/4\u201d 2.1 mm 195\u00b0 F 1.8 lbs. 20"], ["YVB56KDM", "8.0 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-F N/A N/A 195\u00b0 F 2.5 lbs. 20"], ["YVB56KDMI21", "8.0 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-F 1/4\u201d 2.1 mm 195\u00b0 F 2.1 lbs. 20"], ["YVB75KDMN", "7.8 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-F N/A N/A 195\u00b0 F 1.8 lbs. 20"], ["YVB75KDMN21", "7.8 GPM 3,200 PSI 3,650 PSI 1/2\" BSP-F 3/8\" BSP-F 1/4\u201d 2.1 mm 195\u00b0 F 2.1 lbs. 20"], ["YU4050KDM", "10.5 GPM 4,050 PSI 4,500 PSI 1/2\" BSP-F 3/8\" BSP-F N/A N/A 195\u00b0 F 3.0 lbs. 10"], ["MODEL", "GPM RATED MAX INLET OUTLET INJECTOR"], ["YVB35KDME", "6.5 GPM 3,200 PSI 3,650 PSI 1/2\u201d BSP-F 3/8\u201d BSP-F N/A N/A 195\u00b0 F 1.5 lbs. 24"]], "Flow Sensitive Unloaders": [["ACCESSORIES", "- VALVES"], ["MODEL", "GPM MAX INLET OUTLET BYPASS"], ["ZK138", "2.3 to 10.8 GPM 3,600 PSI 3/8\" BSP-F 3/8\" BSP-M 1/2\" BSP-M 165\u00b0 F 2.3 lbs. 10"], ["ZK30", "2.1 to 3.0 GPM 1,500 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.0 lbs. 10"], ["ZK31", "3.0 to 4.2 GPM 1,500 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.0 lbs. 10"], ["ZK32", "4.2 to 5.5 GPM 1,500 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.0 lbs. 10"], ["ZK33", "5.0 to 6.0 GPM 1,500 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.0 lbs. 10"], ["ZK50", "2.1 to 3.0 GPM 3,000 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.5 lbs. 10"], ["ZK51", "3.0 to 4.2 GPM 3,000 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.5 lbs. 10"], ["ZK52", "4.2 to 6.6 GPM 3,000 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.5 lbs. 10"], ["ZK53", "6.6 to 10.8 GPM 3,000 PSI 3/8\" BSP-F 3/8\" BSP-M 165\u00b0 F 2.5 lbs. 10"], ["ZK70", "(GPV) 2.1 to 3.0 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\" BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK71", "(GPV) 3.0 to 4.2 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\" BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK72", "(GPV) 4.2 to 6.6 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\" BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK73", "(GPV) 6.6 to 10.8 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\" BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK72", "Unloader With #1 Bypass Orifice:"], ["190009", "4.2 to 6.6 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\" BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK71", "Unloader with #0 Bypass Orifice:"], ["190079", "3.0 to 4.2 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\u201d BSP-F 165\u00b0 F 5.0 lbs. 5"], ["ZK73", "Unloader With #2 Bypass Orifice:"], ["190361", "6.6 to 10.8 GPM 3,500 PSI 3/8\" BSP-F 3/8\" BSP-M 3/8\u201d BSP-F 165\u00b0 F 5.0 lbs. 5"], ["MODEL", "GPM MAX INLET OUTLET BYPASS"], ["PLSRZ36SS", "2.4 - 16 GPM 3,600 PSI 1/2\" BSP-F 1/2\" BSP-F 1/2\" BSP-F 195\u00b0 F 4.6 lbs."], ["PLSRZ87SS", "2.4 - 16 GPM 8,700 PSI 1/2\" BSP-F 1/2\" BSP-F 1/2\" BSP-F 195\u00b0 F 4.6 lbs."], ["190465", "PULSARZ As Above, With 3.5 and 4.5 Orifice"]], "Relief & Regulating Valves": [["ACCESSORIES", "- VALVES"], ["BALANCED", "RELIEF & REGULATING VALVES"], ["BALANCED", "RELIEF VALVES"], ["MODEL", "GPM RATED MAX INLET BYPASS"], ["YBRV624", "6.3 GPM 2,200 PSI 2,450 PSI 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 0.8 lbs. 40"], ["YBRV624D", "6.3 GPM 2,200 PSI 2,450 PSI (2) 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 1.0 lbs. 40"], ["YBRV631", "6.3 GPM 3,200 PSI 3,650 PSI 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 0.8 lbs 40"], ["YBRV631D", "6.3 GPM 3,200 PSI 3,650 PSI (2) 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 1.0 lbs. 40"], ["100268", "6.3 GPM 300 PSI N/A (2) 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 1.0 lbs. 40"], ["100269", "6.3 GPM 300 PSI N/A 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 0.8 lbs. 40"], ["YBRV5325", "53.0 GPM 2,600 PSI 2,900 PSI 3/4\" BSP-F 1/2\" BSP-F 195\u00b0 F 2.0 lbs. 4"], ["REGULATING", "VALVES - GREAT FOR MULTIPLE GUN APPLICATIONS"], ["MODEL", "GPM RATED INLET OUTLET BYPASS"], ["YVRP15W", "8.9 GPM 1,450 PSI 3/8\" NPT-F 3/8\" NPT-F N/A 195\u00b0 F 1.3 lbs. 25"], ["YVRP32B", "8.9 GPM 3,200 PSI 3/8\" NPT-F 3/8\" NPT-F N/A 195\u00b0 F 1.3 lbs. 25"], ["ZKSX1", "16.0 GPM 3,600 PSI 1/2\" BSP-F N/A 1/2\" BSP-F 195\u00b0 F 2.3 lbs. 1"], ["YVS5100B", "6.5 GPM 5,600 PSI 3/8\" BSP-F 3/8\" BSP-F 3/8\" BSP-F 195\u00b0 F 1.0 lbs. 25"], ["YVB4021HT", "21.0 GPM 4,050 PSI 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 195\u00b0 F 2.5 lbs. 1"], ["YVB5121HT", "21.0 GPM 5,550 PSI 1/2\" NPT-F 1/2\" NPT-F 1/2\" NPT-F 195\u00b0 F 2.5 lbs. 1"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET OUTLET BYPASS"], ["WMR15SS", "Stainless Steel 5.5 1,500 PSI N/A 3/8\" NPT-F 3/8\" NPT-F N/A 195\u00b0 F 1.0 lbs."], ["100892", "Nickel Plated 5.0 GPM 2,000 PSI N/A 3/8\" NPT-F N/A 1/4\" NPT-F 220\u00b0 F 1.4 lbs."], ["100998", "Stainless Steel 13.0 GPM 1,000 PSI N/A 3/8\" NPT-F N/A 1/2\" NPT-F 190\u00b0 F 2.0 lbs."], ["100999", "Stainless Steel 13.0 GPM 2,000 PSI N/A 3/8\" NPT-F N/A 1/2\" NPT-F 190\u00b0 F 2.0 lbs."], ["YR5221", "Brass (No CV) 53.0 GPM 2,200 PSI 2,450 PSI 1\" NPT-F 1\" NPT-F 1\" NPT-F 200\u00b0 F 4.5 lbs."]], "Safety Relief Valves": [["ACCESSORIES", "- VALVES"], ["SAFETY", "RELIEF VALVES"], ["COLD", "WATER SAFETY RELIEF VALVES"], ["MODEL", "GPM MIN MAX INLET OUTLET"], ["ZKSR", "N/A 3,000 PSI 3/8\" BSP-M 1/4\" BSP-F 165\u00b0 F 1.5 lbs."], ["100724", "6.0 GPM 2,000 PSI 6,000 PSI 1/4\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100723", "6.0 GPM 2,000 PSI 6,000 PSI 3/8\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100722", "6.0 GPM 2,000 PSI 6,000 PSI 1/2\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100611", "6.0 GPM 800 PSI 3,000 PSI 1/4\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100799", "6.0 GPM 800 PSI 3,000 PSI 3/8\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100980", "6.0 GPM 800 PSI 3,000 PSI 1/2\" NPT Side w/ 1/4\" Barb 140\u00b0 F 1.0 lbs."], ["100726", "6.0 GPM 2,000 PSI 6,000 PSI 3/8\" NPT Side 140\u00b0 F 1.0 lbs."], ["100727", "6.0 GPM 2,000 PSI 6,000 PSI 1/2\" NPT Side 140\u00b0 F 1.0 lbs."], ["100610", "6.0 GPM 800 PSI 3,000 PSI 1/4\" NPT Side 140\u00b0 F 1.0 lbs."], ["100798", "6.0 GPM 800 PSI 3,000 PSI 3/8\" NPT Side 140\u00b0 F 1.0 lbs."], ["100963", "6.0 GPM 800 PSI 3,000 PSI 3/8\" NPT Side 140\u00b0 F 1.0 lbs."], ["100728", "6.0 GPM 2,000 PSI 6,000 PSI 1/4\" NPT End 140\u00b0 F 1.0 lbs."], ["100534", "6.0 GPM 2,000 PSI 6,000 PSI 3/8\" NPT End 140\u00b0 F 1.0 lbs."], ["100729", "6.0 GPM 2,000 PSI 6,000 PSI 1/2\" NPT End 140\u00b0 F 1.0 lbs."], ["100547", "6.0 GPM 2,000 PSI 6,000 PSI 3/8\" NPT End 1/8\" F 140\u00b0 F 1.0 lbs."], ["100609", "6.0 GPM 800 PSI 3,000 PSI 1/4\" NPT End 140\u00b0 F 1.0 lbs."], ["100797", "6.0 GPM 800 PSI 3,000 PSI 3/8\u201d NPT End 140\u00b0 F 1.0 lbs."], ["100962", "6.0 GPM 800 PSI 3,000 PSI 1/2\u201d NPT End 140\u00b0 F 1.0 lbs."], ["100993", "6.0 GPM N/A 3,500 PSI 3/8\" NPT-M End 1/4\" F 140\u00b0 F 0.5 lbs."], ["101070", "6.0 GPM N/A 6,000 PSI 3/8\" NPT-M End 1/4\" F 140\u00b0 F 0.5 lbs."], ["YRV2063", "6.3 GPM N/A 2,000 PSI 3/8\" NPT-M Side 140\u00b0 F 1.5 lbs."], ["YRV3463", "6.3 GPM N/A 3,500 PSI 3/8\" NPT-M Side 140\u00b0 F 1.5 lbs."], ["ZKS3", "N/A 10,000 PSI 1/2\" NPT-M Side 284\u00b0 F 2.0 lbs."], ["MODEL", "GPM MAX INLET OUTLET"]], "Expansion Valves": [["ACCESSORIES", "- VALVES"], ["MISCELLANEOUS", "VALVES"], ["MODEL", "GPM MAX INLET OUTLET"], ["100973", "2.0 to 6.0 GPM 4,500 PSI 3/8\" NPT-M Side, 1/8\" Hole 185\u00b0 F 1.4 lbs."], ["100979", "2.0 to 6.0 GPM 4,500 PSI 1/2\" NPT-M Side, 1/8\" Hole 185\u00b0 F 1.6 lbs."], ["100556", "90\u00b0 Hose Barb 1/4\" NPT 1/4\" 145\u00b0 F 1.5 oz."], ["100557", "90\u00b0 Hose Barb 3/8\" NPT 1/4\" 145\u00b0 F 1.5 oz."], ["100558", "90\u00b0 Hose Barb 1/2\" NPT 1/4\" 145\u00b0 F 1.5 oz."], ["100844", "90\u00b0 Hose Barb 1/4\" BSP-M 1/4\" 145\u00b0 F 1.5 oz."], ["100845", "90\u00b0 Hose Barb 3/8\" BSP-M 1/4\" 145\u00b0 F 1.5 oz."], ["100846", "90\u00b0 Hose Barb 1/2\" BSP-M 1/4\" 145\u00b0 F 1.5 oz."], ["100677", "90\u00b0 Hose Barb 3/8\" NPT N/A 190\u00b0 F 1.5 oz."], ["100678", "90\u00b0 Hose Barb 1/2\" NPT N/A 190\u00b0 F 1.5 oz."], ["100679", "90\u00b0 Hose Barb 3/8\" NPT 1/4\" SS 190\u00b0 F 1.5 oz."], ["100680", "90\u00b0 Hose Barb 1/2\" NPT 1/4\" SS 190\u00b0 F 1.5 oz."], ["100156", "90\u00b0 Hose Barb 3/8\" NPT 1/4\" SS 145\u00b0 F 1.5 oz."], ["100259", "Banjo Fitting 3/8\" BSP N/A 145\u00b0 F 2.5 oz."], ["100512", "No Hose Barb 1/4\" NPT N/A 145\u00b0 F 2.0 oz."], ["100513", "No Hose Barb 3/8\" NPT N/A 145\u00b0 F 2.0 oz."], ["100514", "No Hose Barb 1/2\" NPT N/A 145\u00b0 F 2.0 oz."], ["2100612", "No Hose Barb 1/2\" NPT N/A 145\u00b0 F 2.0 oz."], ["2100612MB", "No Hose Barb 1/2\" BSP N/A 145\u00b0 F 2.0 oz."], ["2100638", "No Hose Barb 3/8\" NPT N/A 145\u00b0 F 2.0 oz."], ["2100614", "No Hose Barb 1/4\" NPT N/A 145\u00b0 F 2.0 oz."], ["EASY", "START VALVES"], ["MODEL", "GPM MAX INLET OUTLET"], ["YESTVALVE", "7.8 GPM 4,050 PSI 3/8\" NPT-M 1/4\" Hose Barb 176\u00b0 F 0.25 lbs."], ["YESTVALVE14", "7.8 GPM 4,050 PSI 1/4\" BSP-M 1/4\" Hose Barb 176\u00b0 F 0.25 lbs."], ["100323", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/4\" Hose Barb 195\u00b0 F 0.25 lbs."], ["100324", "8.0 GPM 5,000 PSI 1/4\" NPT-M 1/4\" Hose Barb 195\u00b0 F 0.25 lbs."], ["100543", "8.0 GPM 5,000 PSI 1/4\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100544", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100490", "8.0 GPM 5,000 PSI 1/2\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100970", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/4\" Hose Barb 195\u00b0 F 0.25 lbs."]], "Bleeder & Check Valves": [["ACCESSORIES", "- VALVES"], ["MISCELLANEOUS", "VALVES"], ["BLEEDER", "VALVES"], ["MODEL", "GPM MAX INLET OUTLET"], ["100325", "8.0 GPM 5,000 PSI 1/4\" NPT-M 1/8\" Hose Barb 195\u00b0 F 0.25 lbs."], ["100326", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/8\" Hose Barb 195\u00b0 F 0.25 lbs."], ["100545", "8.0 GPM 5,000 PSI 1/4\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100546", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100676", "8.0 GPM 5,000 PSI 1/4\" NPT-M 1/8\" Hose Barb 195\u00b0 F 0.25 lbs."], ["100730", "8.0 GPM 5,000 PSI 1/2\" NPT-M 1/8\" NPT-F 195\u00b0 F 0.25 lbs."], ["100684", "8.0 GPM 5,000 PSI 3/8\" NPT-M 1/8\" Hose Barb 195\u00b0 F 0.25 lbs."], ["CHECK", "VALVES"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET"], ["YCV14FB", "Brass 6.5 GPM 2,200 PSI 2,300 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV14FSS", "303 Stainless Steel 6.5 GPM 5,800 PSI 6,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV38FB", "Brass 10.5 GPM 2,200 PSI 2,300 PSI 3/8\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV38FSS", "303 Stainless Steel 10.5 GPM 5,800 PSI 6,500 PSI 3/8\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV12FB", "Brass 21.0 GPM 2,200 PSI 2,300 PSI 1/2\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV12FSS", "303 Stainless Steel 21.0 GPM 5,800 PSI 6,500 PSI 1/2\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV34FB", "Brass 47.6 GPM 2,200 PSI 2,300 PSI 3/4\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCV34FSS", "303 Stainless Steel 47.6 GPM 5,800 PSI 6,500 PSI 3/4\" BSP-F 195\u00b0 F 0.5 lbs."], ["YCVHD34FB", "W Brass 37.0 GPM 4,000 PSI 4,500 PSI 3/4\" BSP-F 195\u00b0 F 1.9 lbs."], ["YCVHD1FB", "Brass 53 GPM 4,000 PSI 4,500 PSI 1\" BSP-F 195\u00b0 F 3.0 lbs."], ["METERING", "NEEDLE VALVES - ADJUSTABLE SS STEM ALLOWS REGULATING THE OPENING IN"], ["MODEL", "GPM MAX INLET OUTLET ADJUSTMENT"], ["WMNV14SS", "5.0 GPM 4,000 PSI 1/4\" NPT-F 1/4\" NPT-F N/A 150\u00b0 F 0.3 lbs."], ["100814", "6.0 GPM 4,000 PSI 1/4\" NPT-F 1/4\" NPT-F N/A 190\u00b0 F 0.3 lbs."], ["100838", "6.0 GPM 4,000 PSI 1/4\" NPT-F 1/4\" NPT-F Side 190\u00b0 F 0.4 lbs."], ["100865", "6.0 GPM 4,000 PSI 1/4\" NPT-F 1/4\" NPT-F Bottom 190\u00b0 F 0.4 lbs."], ["PNEUMATIC", "CONTROL VALVES"], ["MODEL", "GPM RATED MAX INLET OUTLET"], ["YPCV823", "8.0 GPM 2,300 PSP 2,550 PSI 1/4\" BSP-F 1/4\" BSP-F 195\u00b0 F 1.2 lbs."], ["YPCV2175", "21.0 GPM 7,250 PSI 8,000 PSI 1/2\" BSP-F 1/2\" BSP-F 195\u00b0 F 5.8 lbs."], ["YPCV3240", "32.0 GPM 4,050 PSI 4,500 PSI 3/4\" BSP-F 3/4\" BSP-F 195\u00b0 F 5.0 lbs."], ["STEAM", "VALVES"], ["MODEL", "GPM RATED MAX INLET OUTLET"], ["Y29092008", "2.3 GPM 3,650 PSI 4,050 PSI 3/4\" 1/4\" BSP-M 1/4\" BSP-M 175\u00b0 F 0.3 lbs."], ["Y29092012", "3.4 GPM 3,650 PSI 4,050 PSI 3/4\" 1/4\" BSP-M 1/4\" BSP-M 175\u00b0 F 0.3 lbs."], ["Y29092015", "4.0 GPM 3,650 PSI 4,050 PSI 3/4\" 1/4\" BSP-M 1/4\" BSP-M 175\u00b0 F 0.3 lbs."]], "Adjustable Chemical Injectors": [["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["ZROBO0B", "2.0 mm 2.1 to 2.9 GPM 3,200 PSI 3/8\" BSP-M 3/8\" BSP-M 210\u00b0 F 1/4\" 0.8 lbs. 25"], ["ZROBO1B", "2.2 mm 2.9 to 4.0 GPM 3,200 PSI 3/8\" BSP-M 3/8\" BSP-M 210\u00b0 F 1/4\" 0.8 lbs. 25"], ["ZROBO2B", "2.5 mm 4.0 to 5.6 GPM 3,200 PSI 3/8\" BSP-M 3/8\" BSP-M 210\u00b0 F 1/4\" 0.8 lbs. 25"], ["ZROBO3B", "2.75 mm 6.6 to 10.8 GPM 3,200 PSI 3/8\" BSP-M 3/8\" BSP-M 210\u00b0 F 1/4\" 0.8 lbs. 25"], ["YAINJ18E", "1.8 mm 2.0 to 2.6 GPM 4,000 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.4 lbs. N/A"], ["YAINJ21E", "2.1 mm 2.6 to 4.0 GPM 4,000 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.4 lbs. N/A"], ["YAINJ23E", "2.3 mm 4.0 to 5.3 GPM 4,000 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.4 lbs. N/A"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100823", "1.5 mm 1.0 to 2.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\u201d NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100824", "1.8 mm 2.0 to 3.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\u201d NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100825", "2.1 mm 3.0 to 5.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\u201d NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100826", "2.3 mm 5.0 to 8.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\u201d NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100861", "1.8 mm 2.0 to 3.0 GPM 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.5 lbs. 25"], ["100862", "2.1 mm 3.0 to 5.0 GPM 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.5 lbs. 25"], ["100863", "2.3 mm 5.0 to 8.0 GPM 5,500 PSI 3/8\" NPT-M 3/8v NPT-M 190\u00b0 F 1/4\" 0.5 lbs. 25"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100810", "1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100811", "1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100812", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100813", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100827", "1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100828", "1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100829", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"], ["100830", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 195\u00b0 F 1/4\" 0.3 lbs. 25"]], "QC Chemical Injectors": [["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100575", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100576", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100577", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100617", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100618", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100619", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["QUICK", "CONNECT ADJUSTABLE CHEMICAL INJECTORS - STAINLESS STEEL PLUG"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100633", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100634", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100635", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100653", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100654", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100655", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["QUICK", "CONNECT ADJUSTABLE CHEMICAL INJECTORS - STAINLESS STEEL PLUG & COLLAR"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100763", "1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100764", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100765", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100819", "1.5 mm 1.0 to 2.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100820", "1.8 mm 2.0 to 3.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100821", "2.1 mm 3.0 to 5.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100822", "2.3 mm 5.0 to 8.0 GPM 4,250 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"]], "Fixed Chemical Injectors": [["MODEL", "ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT"], ["100336RD", "1.45 mm 1.0 to 2.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100094WT", "1.6 mm 2.0 to 3.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100835OR", "1.8 mm 2.0 to 3.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100334GY", "2.1 mm 2.0 to 4.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100333BL", "2.2 mm 3.0 to 5.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100339LG", "2.3 mm 5.0 to 8.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.4 lbs."], ["100541GY", "2.1 mm 3.0 to 5.0 5,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" (2) 0.4 lbs."], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100773", "1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100774", "1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100775", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100776", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100947", "1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100948", "1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100949", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100950", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F 1/4\" 0.3 lbs. 25"], ["100790", "2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F (2) 1/4\" 0.4 lbs. 25"], ["100791", "2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8\" NPT-M 3/8\" NPT-M 190\u00b0 F (2) 1/4\" 0.4 lbs. 25"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100570", "1.8 mm 1.0 to 3.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100571", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100572", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100594", "1.8 mm 1.0 to 3.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100595", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100616", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"]], "QC Fixed Injectors": [["QUICK", "CONNECT FIXED CHEMICAL INJECTORS - STAINLESS STEEL PLUG"], ["MODEL", "ORIFICE GPM RATED INLET OUTLET"], ["100690", "1.5 mm 1.0 to 2.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100630", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100631", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100632", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" F Coupler 3/8\" M Plug 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100636", "1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100637", "2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["100638", "2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8\" M Plug 3/8\" F Coupler 190\u00b0 F 1/4\" 0.4 lbs. 25"], ["CHEMICAL", "VALVES"], ["MODEL", "DESCRIPTION GPM RATED CONNECTIONS"], ["Y29094500", "Straight 2.6 GPM 400 PSI 1/4\" BSP-M 105\u00b0 F 1/4\" 0.5 lbs."], ["Y29095400", "90\u00b0 Elbow 2.6 GPM 400 PSI 1/4\" BSP-M 105\u00b0 F 1/4\" 0.4 lbs."], ["100145", "Close-up of Nozzle"], ["HIGH", "PRESSURE SOAP SHOOTER - Attaches to a QC on Lance or Extension Wand. Can Shoot soap up to 3 Stories!"], ["MODEL", "NOZZLE SIZE"], ["100169", "Includes 30 foot hose, filter and #3.5 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."], ["100145", "Includes 30 foot hose, filter and #4.0 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."], ["100146", "Includes 30 foot hose, filter and #4.5 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."], ["100147", "Includes 30 foot hose, filter and #5.0 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."], ["100181", "Includes 30 foot hose, filter and #6.0 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."], ["101012", "Includes 30 foot hose, filter and #7.0 stainless steel nozzle. 1/4\" QC-M, 5,000 PSI MAX."]], "Pulse Pumps": [["PUMP", "SERIES VALVE"], ["MODEL", "GPM RATED OUTLET"], ["100906", "0.75 GPM 1,500 PSI 1/4\" NPT-F 1/8\" NPT-F 1/8\" NPT-F 190\u00b0 F 1.5 lbs."], ["PUMP", "SERIES VALVE"], ["PULSE", "PUMP with BALL VALVE - 3,000 PSI WHEN BALL VALVE IS ENGAGED"], ["MODEL", "GPM RATED OUTLET"], ["100152", "0.75 GPM 1,500 PSI* 3/8\" NPT-F 1/8\" NPT-F 1/8\" NPT-F 190\u00b0 F 1.5 lbs."], ["MODEL", "GPM MAX OUTLET"], ["101067", "See Note Below* 3,000 PSI 3/8\" NPT-F 1/8\" NPT-F 1/8\" NPT-F 190\u00b0 F 2.0 lbs."]], "Spray Guns": [["ACCESSORIES", "- SPRAY GUNS & LANCES"], ["FRONT", "ENTRY SPRAY GUNS"], ["MODEL", "GPM RATED MAX INLET OUTLET"], ["YRL20", "8.0 GPM 2,900 PSI 3,200 PSI 3/8\" BSP-F 1/4\" BSP-F 320\u00b0 F 0.8 lbs."], ["ZGP11", "10.5 GPM 3,000 PSI 3,000 PSI 3/8\" BSP-F 1/4\" BSP-F 285\u00b0o F 1.2 lbs."], ["REAR", "ENTRY SPRAY GUNS"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET OUTLET"], ["YG4500S", "Straight 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 300\u00b0 F 1.2 lbs. 20"], ["YG4500SW", "Straight, Weep 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 300\u00b0 F 1.2 lbs. 20"], ["NEDG5000S", "Straight 8.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 300\u00b0 F 1.2 lbs. 20"], ["YRL2640", "Standard 8.0 GPM 3,650 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.0 lbs. 20"], ["YRL2640W", "Weep Seat 8.0 GPM 3,650 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.0 lbs. 20"], ["YG5000", "Standard 10.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.2 lbs. 20"], ["YG5000W", "Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.2 lbs. 20"], ["YG2527S", "Straight 27.0 GPM 2,500 PSI 2,500 PSI 1/2\" NPT-F 1/2\" NPT-F 320\u00b0 F 2.8 lbs. 1"], ["YG4032S", "Straight 32.0 GPM 4,050 PSI 4,050 PSI 1/2\" NPT-F 1/2\" NPT-F 320\u00b0 F 2.8 lbs. 1"], ["NEYG4500S", "Ceramic Ball 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 300\u00b0 F 1.2 lbs. 20"], ["YG4500SW", "Ceramic Ball 10.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.2 lbs. 20"], ["YG4500SW", "Straight/Weep 10.5 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 300\u00b0 F 1.2 lbs."], ["YG4010", "Standard 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.2 lbs. 15"], ["YG4010SW", "Swivel 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.2 lbs. 11"], ["YG4000", "Standard 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.8 lbs. 40"], ["YG4000WN", "Weep Seat 10.5 GPM 3,650 PSI 4,050 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.8 lbs. 40"], ["DG4000", "Standard 8.0 GPM 4,000 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.1 lbs. 20"], ["DG4000W", "Weep Seat 8.0 GPM 4,000 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.1 lbs. 20"], ["DGE4012NT", "No Trigger 12.0 GPM 4,000 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.0 lbs. 20"], ["DGE4012W", "Weep Seat 12.0 GPM 4,000 PSI 4,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["DG4512", "Standard 12.0 GPM 4,500 PSI 4,500 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.3 lbs. 20"], ["DG5010", "Standard 10.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["DG5010W", "Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["NEDGE5010", "Standard 10.5 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["DGE5010SL", "Locking Trigger 10.5 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["DCG5010", "Compensating 10.5 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs. 20"], ["YRL51", "Compensating 13.2 GPM 3,650 PSI 4,050 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.5 lbs. 20"], ["YRL56", "Compensating 8.0 GPM 5,100 PSI 5,650 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.5 lbs. 8"], ["DCG5010HE", "Excavating 10.5 GPM 5,000 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.4 lbs."]], "Wash Down Guns": [["ACCESSORIES", "- SPRAY GUNS & LANCES"], ["HIGH", "FLOW REAR ENTRY WASH DOWN SPRAY GUNS"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET OUTLET"], ["YG1635", "Wash Down 16.0 GPM 350 PSI 350 PSI 1/2\" BSP-F"], ["YG1635S", "16.0 GPM 350 PSI 350 PSI 1/2\" BSP-F 195\u00b0 F 2.1 lbs. 10"], ["YG1635SR", "w/Swivel, 16.0 GPM 350 PSI 350 PSI 1/2\" BSP-F 195\u00b0 F 2.1 lbs. 10"], ["YG1635SS", "w/Swivel, 16.0 GPM 350 PSI 350 PSI 1/2\" BSP-F 195\u00b0 F 2.1 lbs. 10"], ["YG2635AS", "26.5 GPM 350 PSI 350 PSI 1/2\" BSP-F 195\u00b0 F 3.5 lbs. 10"], ["REAR", "ENTRY SPRAY GUNS - STAINLESS STEEL"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET OUTLET"], ["YG1732", "Cartridge 32.0 GPM 1,740 PSI 1,950 PSI 1/2\" BSP-F 1/2\" BSP-F 210\u00b0 F 4.0 lbs. 20"], ["YG2953B", "Cartridge 53.0 GPM 2,900 PSI 3,200 PSI 3/4\" BSP-F 1/2\" BSP-F 210\u00b0 F 5.0 lbs. 10"], ["YG4060SS", "Blue 10.5 GPM 4,500 PSI 5,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 2.0 lbs. 2"], ["YG5200", "Red 10.5 GPM 5,800 PSI 6,400 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 2.0 lbs. 20"], ["YG7207", "Compensating 7.5 GPM 7,250 PSI 8,000 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 1.6 lbs. 1"], ["SPRAY", "GUN/LANCE COMBINATIONS"], ["MODEL", "DESCRIPTION GPM RATED MAX INLET OUTLET"], ["YRL56L", "42\" Lance 8.0 GPM 5,100 PSI 5,650 PSI 3/8\" NPT-F 1/4\" NPT-F 320\u00b0 F 3.3 lbs."], ["YG3000DS", "16\" Lance 10.5 GPM 2,750 PSI 3,050 PSI 3/8\" NPT-F 1/8\" NPT-F 140\u00b0 F 2.0 lbs."], ["YG3000D", "40\" Lance 10.5 GPM 2,750 PSI 3,050 PSI 3/8\" NPT-F 1/8\" NPT-F 140\u00b0 F 3.0 lbs."], ["Y30256717", "YG5000 Assembled with 36\" Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["100751", "YG5000 Assembled with 18\" Lance and 1/4\" Quick Disconnect 2.5 lbs."], ["100059", "YG4010 Assembled with 36\" Vented, Insulated Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["100160", "DG5010 Assembled with 36\" Insulated Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["101057", "DG5010 Assembled with 36\" Insulated lance and 1/4\" Quick Disconnect 3.0 lbs."], ["101096", "DG5010 Assembled with 48\" Insulated Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["101109", "DGE5010 Assembled with 24\" Insulated Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["101110", "DGE5010 Assembled with 36\" Insulated Lance and 1/4\" Quick Disconnect 3.0 lbs."], ["DG320014", "6.5 GPM 3,200 PSI 3,200 PSI 1/4\" NPT-F M22-F 195\u00b0 F 1.5 lbs."], ["DG320038", "6.5 GPM 3,200 PSI 3,200 PSI 3/8\" NPT-F M22-F 195\u00b0 F 1.5 lbs."], ["DG3200M", "6.5 GPM 3,200 PSI 3,200 PSI M22-M M22-F 195\u00b0 F 1.5 lbs."], ["101002", "YG7207 Spray Gun with 36\" stainless steel lance, 7.5 GPM, 7,250 PSI"], ["DGLN3230M", "Gun, Lance, 1.3mm Nozzle, M22 Inlet"], ["DGLN3299M", "Gun, Lance, 0.99 mm Nozzle, M22 Inlet"], ["DGLNH120", "Gun, Lance Kit, 1.2 mm Nozzle, M22 Inlet, 1/4\" Hose"], ["YG23LA27", "Gun, 27\" Adjustable Lance, 2.3 mm Nozzle, 21.0 GPM"]], "Lances - Stainless": [["ACCESSORIES", "- SPRAY GUNS & LANCES"], ["STAINLESS", "STEEL LANCES"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["YL8SS", "8\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 0.5 lbs. 200"], ["YL31SS", "31\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 0.7 lbs. 100"], ["YL40SS", "40\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 1.0 lbs. 100"], ["YL72SS", "72\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 1.8 lbs. 50"], ["680267", "36\" 32.0 GPM 4,000 PSI 4,000 PSI 1/2\" NPT-M 1/2\" NPT-M 3.0 lbs. N/A"], ["680268", "48\" 32.0 GPM 4,000 PSI 4,000 PSI 1/2\" NPT-M 1/2\" NPT-M 4.0 lbs. N/A"], ["680269", "60\" 32.0 GPM 4,000 PSI 4,000 PSI 1/2\" NPT-M 1/2\" NPT-M 5.0 lbs. N/A"], ["680270", "72\" 32.0 GPM 4,000 PSI 4,000 PSI 1/2\" NPT-M 1/2\" NPT-M 6.0 lbs. N/A"], ["680358", "96\" 32.0 GPM 4,000 PSI 4,000 PSI 1/2\" NPT-M 1/2\" NPT-M 8.0 lbs. N/A"], ["INSULATED", "LANCES - STRAIGHT"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["YL20PNS", "20\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.1 lbs. 25"], ["YL24PNS", "24\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.3 lbs. 25"], ["YL27PNS", "27\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.4 lbs. 25"], ["YL35PNS", "35\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 25"], ["YL47PNS", "47\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 2.2 lbs. 25"], ["YL59PNS", "59\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 2.8 lbs. 25"], ["YL67PNS", "67\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 3.0 lbs. 25"], ["YL79PNS", "79\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 3.4 lbs. 25"], ["INSULATED", "LANCES - BENT"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["YL36B", "Vented 36\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 10"], ["YL20PNB", "20\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.1 lbs. 25"], ["YL24PNB", "24\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.3 lbs. 25"], ["YL27PNB", "27\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.4 lbs. 25"], ["YL35PNB", "35\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 25"], ["YL47PNB", "47\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 2.2 lbs. 25"], ["YL59PNB", "59\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 2.8 lbs. 10"], ["YL67PNB", "67\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 3.0 lbs. 10"], ["YL79PNB", "79\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 3.0 lbs. 10"], ["ZZ15", "59\" Zinc 10.5 GPM 3,500 PSI N/A 1/4\" BSP-M 1/4\" BSP-M 284\u00b0 F 2.5 lbs. N/A"]], "Lances - Insulated": [["ACCESSORIES", "- SPRAY GUNS & LANCES"], ["INSULATED", "LANCES - CHROME PLATED"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["DL24ICS", "24\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 1.3 lbs. 25"], ["DL27ICS", "27\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 1.4 lbs. 25"], ["DL36ICS", "36\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 1.7 lbs. 25"], ["DL42ICS", "42\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 1.7 lbs. 25"], ["DL47ICS", "47\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 2.2 lbs. 25"], ["DL59ICS", "59\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 2.8 lbs. 25"], ["DL79ICS", "79\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 220\u00b0 F 3.4 lbs. 25"], ["VENTED", "LANCES - CHROME PLATED"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["DL36VCS", "36\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 25"], ["DL48VCS", "48\" 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 2.2 lbs. 25"], ["INSULATED", "LANCES - STAINLESS STEEL"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["DL36VSSB", "36\" Bent 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 25"], ["DL36VSS", "36\", Straight 10.0 GPM 4,000 PSI 5,000 PSI 1/4\" NPT-M 1/4\" NPT-M 320\u00b0 F 1.7 lbs. 25"], ["INSULATED", "HANDLE, STRAIGHT DOUBLE LANCES"], ["MODEL", "LENGTH GPM RATED MAX INLET OUTLET"], ["YDL33", "33\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\u201d NPT-M 320\u00b0 F 2.2 lbs. 20"], ["YDL41", "41\" 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\u201d NPT-M 320\u00b0 F 2.4 lbs. 20"], ["YDL41SS", "41\", SS 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\u201d NPT-M 320\u00b0 F 2.4 lbs. 10"], ["YDL33SSB", "33\", SS, Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\u201d NPT-M 320\u00b0 F 2.2 lbs. 20"], ["YDL41SSB", "41\", SS, Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4\" NPT-M 1/4\u201d NPT-M 320\u00b0 F 2.4 lbs. 20"]], "Flat Surface Cleaners": [["MODEL", "BEARING MAX GPM RATED MIN DECK INLET NOZZLE"], ["DFSCP12", "Sealed 6.5 GPM 3,500 PSI 800 PSI 12\" 3/8\" NPT-F 925020S (2) 180\u00b0 F 12.0 lbs. 99"], ["DCFSCP18", "Sealed 8.0 GPM 4,000 PSI 1,000 PSI 18\" 3/8\" NPT-F 925020M (2) 180\u00b0 F 19.0 lbs. 12"], ["DCFSCP18GZ", "Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 18\" 3/8\" NPT-F 925020M (2) 180\u00b0 F 19.0 lbs. 12"], ["DCFSCP20", "Sealed 8.0 GPM 4,000 PSI 1,000 PSI 20\" 3/8\" NPT-F 925020M (2) 180\u00b0 F 24.0 lbs. 12"], ["DCFSCP20GZ", "Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 20\" 3/8\" NPT-F 925020M (2) 180\u00b0 F 24.0 lbs. 12"], ["MODEL", "BEARING MAX GPM RATED MIN DECK INLET NOZZLE"], ["DCFSCS22Z", "Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 22\u201d 3/8\" NPT-F 925020M (3) 180\u00b0 F 28.0 lbs. 12"], ["D30001", "50' x 3/8\" complete with mounting base, 10.5x6.7x7.4x11.5\" 185\u00b0 F 4,000 PSI 12.0 lbs. 60"], ["D30002", "100' x 3/8\" complete with mounting base, 10.5x12x7.4x15.2\" 185\u00b0 F 4,000 PSI 13.0 lbs. 54"], ["D30004", "150' x 3/8\" complete with mounting base, 13.4x9.8x8.8x10.8\" 185\u00b0 F 4,000 PSI 15.0 lbs. 36"], ["D30006", "200' x 3/8\" complete with mounting base, 13.4x15x9.8x19.7\" 185\u00b0 F 4,000 PSI 12.0 lbs. 26"], ["DHR50100D", "Industrial, 100' x 3/8\", complete with mounting base and pigtail, 16.2\"x13.7\"x14.8x10\" 185\u00b0 F 5,000 PSI 20.0 lbs. 36"], ["DHR50150D", "Industrial, 150' x 3/8\", complete with mounting base and pigtail, 16.2\"x13.7\"x14.8x10\" 185\u00b0 F 5,000 PSI 22.0 lbs. 24"], ["DHRA50150", "Industrial, 150' x 3/8\", \u201cA\u201d Frame 300\u00b0 F 5,000 PSI 30.0 lbs. 18"], ["DHRA50300", "Industrial, 300' x 3/8\", \u201cA\u201d Frame 300\u00b0 F 5,000 PSI 32.0 lbs. 16"], ["DHRA50450", "Industrial, 450' x 3/8\", \u201cA\u201d Frame 300\u00b0 F 5,000 PSI 40.0 lbs. 16"], ["SHR50150", "High Temp, with stainless steel rim, 100'x3/8\" complete with mounting base 400\u00b0 F 5,000 PSI 18.0 lbs. 36"], ["2100357", "100\u2019 x 3/8\" Hose Reel on base with carry handle, can be used with the sewer attachment below 185\u00b0 F 5,000 PSI 18.0 lbs."]], "Water Brooms & Wands": [["2100358", "185\u00b0 F 5,000 PSI N/A"], ["100869C", "12\" Water Broom with (3) 65 Degree Nozzles, 36\" Molded, Insulated Lance and 1/4\" QC 3 3,000 PSI"], ["100870C", "16\" Water Broom with (4) 65 Degree Nozzles, 36\" Molded, Insulated Lance, 1/4\" QC 4 3,000 PSI"], ["2100306", "TRIKLEENER\u00ae Water Broom, 12\" Adjustable Height 3 4,500 PSI"], ["2100473", "BIKLEENER\u00ae Water Broom, 10\" Width, Adjustable Height, Two Nozzles 2 3,000 PSI"], ["NOZZLE", "HOLDER ACCEPTS STANDARD QUICK COUPLE SPRAY NOZZLES, GUN INCLUDED"], ["MODEL", "LENGTH GPM MAX OUTLET"], ["DLTG12", "12 Feet 10.5 GPM 4,000 PSI 1/4\" QC 6.1 x 7'5\" 195\u00b0 F 9.2 lbs. 55"], ["DCLTG18", "18 Feet 10.5 GPM 4,000 PSI 1/4\" QC 6.1 x 7'5\" 195\u00b0 F 11.6 lbs. 55"], ["DCLTG24", "24 Feet 10.5 GPM 4,000 PSI 1/4\" QC 6.1 x 7'8\" 195\u00b0 F 14.2 lbs. 55"]], "Spray Tips": [["ACCESSORIES", "- SPRAY TIPS & NOZZLES"], ["SPRAY", "TIPS - THROUGH-HARDENED STAINLESS STEEL ORIFICE IN A STAINLESS STEEL HOUSING"], ["SIZE", "0o 15o 25o 40o GPM @ PSI"], ["STANDARD", "NOZZLES"]], "Chemical Nozzles": [["ACCESSORIES", "- SPRAY TIPS & NOZZLES"], ["CHEMICAL", "NOZZLES"], ["915500MSS", "#50 Orifice, 15\u00b0 Spray Angle, Stainless Steel, 1/4 NPT-M 0.1 lbs. 250"], ["915500QB", "#50 Orifice, 15\u00b0 Spray Angle, Brass, Q-Style 0.1 lbs. 250"], ["965400M", "#40 Orifice, 65\u00b0 Spray Angle, 1/4\u201d NPT-M 0.1 lbs. 250"], ["965400Q", "#40 Orifice, 65\u00b0 Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250"], ["965400S", "#40 Orifice, 65\u00b0 Spray angle, 1/8\u201d NPT-M 0.1 lbs. 250"], ["925400M", "#40 Orifice, 25\u00b0 Spray Angle, 1/4\u201d NPT-M 0.1 lbs. 250"], ["925400Q", "#40 Orifice, 15\u00b0 Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250"], ["900400Q", "#40 Orifice, 0\u00b0 Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250"]], "Adjustable Nozzles": [["ACCESSORIES", "- SPRAY TIPS & NOZZLES"], ["ADJUSTABLE", "NOZZLES, VARIABLE SPRAY ANGLE AND HIGH/LOW PRESSURE SETTINGS"], ["YHL20", "#2.0/Light Green 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL25", "#2.5/Pink 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL30", "#3.0/White 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL35", "#3.5/Brown 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL40", "#4.0/Dark Yellow 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL45", "#4.5/Blue 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL50", "#5.0/Light Purple 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL55", "#5.5/Dark Red 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL60", "#6.0/Dark Green 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL70", "#7.0/Orange 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["YHL80", "#8.0/Silver 3,650 PSI 4,050 PSI 1/4\" BSP-F 195\u00b0 F 0.4 lbs. 10"], ["ADJUSTABLE", "SPRAY HIGH/LOW PRESSURE NOZZLES"], ["DHL4086", "0.86 mm/Green 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4099", "0.99 mm/Pink 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4120", "1.2 mm/Brown 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4130", "1.3 mm/Yellow 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4140", "1.4 mm/ Blue 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4150", "1.5 mm/Red 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4160", "1.6 mm/Green 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 10"], ["DHL4170", "1.7 mm/Orange 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 90"], ["DHL4180", "1.8 mm/Silver 3,200 PSI 1/4\" NPT-F 195\u00b0 F 0.5 lbs. 10"], ["ADJUSTABLE", "NOZZLES, HIGH/LOW PRESSURE SETTINGS AND VARIABLE SPRAY ANGLES"], ["YHILO110", "#3.0/White 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO120", "#3.5/Brown 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO130", "#4.0/Yellow 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO140", "#4.5/Blue 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO150", "#5.5/Red 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO160", "#6.0/Dark Green 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["YHILO170", "#7.0/Orange 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"], ["NEWYHL412", "#12.0/Yellow 4,050 PSI 4,500 PSI 1/4\" BSP-F 195\u00b0 F 0.5 lbs. 10"]], "Rotating Nozzles": [["ACCESSORIES", "- SPRAY TIPS & NOZZLES"], ["ROTATING", "NOZZLES"], ["Y3K020", "2.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K030", "3.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K035", "3.5 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K040", "4.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K045", "4.5 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K050", "5.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K055", "5.5 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K060", "6.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K065", "6.5 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y3K070", "7.0 3,000 PSI 1/4\" BSP-F 194\u00b0 F .75 lbs. 5"], ["Y5K020", "2.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K030", "3.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K035", "3.5 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K040", "4.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K045", "4.5 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K050", "5.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K055", "5.5 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K060", "6.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K065", "6.5 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K080", "8.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K090", "9.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K100", "10.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K120", "12.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["Y5K200", "20.0 5,000 PSI 1/4\" BSP-F 194\u00b0 F 1.75 lbs. 5"], ["ROTATING", "NOZZLES - SHOCK RESISTANT CERAMIC, INTERNAL STABILIZATION SPRING, CAN BE OPERATED IN ANY DIRECTION."], ["YR23K20", "2.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K25", "2.5 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K30", "3.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K35", "3.5 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K40", "4.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K45", "4.5 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K50", "5.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K55", "5.5 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K60", "6.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K65", "6.5 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K70", "7.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR23K80", "8.0 435 PSI 2,300 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K30", "3.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K35", "3.5 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K40", "4.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K45", "4.5 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K50", "5.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K55", "5.5 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K60", "6.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K65", "6.5 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K70", "7.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR36K80", "8.0 1,150 PSI 3,650 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K30", "3.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K35", "3.5 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K40", "4.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K45", "4.5 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K50", "5.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K55", "5.5 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K60", "6.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K65", "6.5 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K70", "7.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"], ["YR51K80", "8.0 2,600 PSI 5,100 PSI 1/4\" BSP-F 212\u00b0 F 0.9 lbs. 5"]], "QD Couplers": [["ACCESSORIES", "- COUPLERS & FITTINGS"], ["QUICK", "DISCONNECT COUPLERS - EPDM O-RING"], ["D10001", "1/4\" with 1/4\" NPT-F 5,000 PSI 175\u00b0 F 200"], ["D10003", "3/8\" with 3/8\" NPT-F 4,000 PSI 175\u00b0 F 200"], ["D10002", "1/4\" with 1/4\" NPT-M 5,000 PSI 175\u00b0 F 200"], ["D10004", "3/8\" with 3/8\" NPT-M 4,000 PSI 175\u00b0 F 200"], ["D10005", "3/8\" with 1/2\" NPT-M 4,000 PSI 175\u00b0 F 200"], ["D10035", "3/8\" with M22 Plug 4,000 PSI 175\u00b0 F 200"], ["D10088", "3/8\" with M22-F 4,000 PSI 175\u00b0 F 200"], ["D10124", "3/8\" with 3/8\" NPT- F, with Collar Stop 5,000 PSI 175\u00b0 F 200"], ["D10125", "3/8\" with 3/8\" NPT- M, with Collar Stop 5,000 PSI 175\u00b0 F 200"], ["D10090L", "1/2\" with 1/2\" NPT- F, with Collar Stop 5,000 PSI 175\u00b0 F 200"], ["D10091L", "1/2\" with 1/2\" NPT- M, with Collar Stop 5,000 PSI 175\u00b0 F 200"], ["100880", "O-ring Kit, 1/4\", Contains 100 Pieces 5,000 PSI 175\u00b0 F 200"], ["100881", "O-ring Kit, 3/8\", Contains 100 Pieces 4,000 PSI 175\u00b0 F 50"], ["QUICK", "DISCONNECT COUPLERS - EASY GRIP"], ["D10061", "1/4\" with 1/4\" NPT-F, with Easy-Grip Feature 5,000 PSI 175\u00b0 F 200"], ["D10062", "1/4\" with 1/4\" NPT-M, with Easy-Grip Feature 5,000 PSI 175\u00b0 F 200"], ["D10063", "3/8\" with 3/8\" NPT-F, with Easy-Grip Feature 4,000 PSI 175\u00b0 F 200"], ["D10064", "3/8\" with 3/8\" NPT-M, with Easy-Grip Feature 4,000 PSI 175\u00b0 F 200"], ["QUICK", "DISCONNECT PLUGS"], ["D11006", "1/4\" Plug with 1/4\" NPT-F, Hardened Steel, Zinc Plated 5,000 PSI 200"], ["D11007", "1/4\" Plug with 1/4\" NPT-M, Hardened Steel, Zinc Plated 5,000 PSI 200"], ["D11008", "3/8\" Plug with 3/8\" NPT-F, Hardened Steel, Zinc Plated 4,000 PSI 200"], ["D11009", "3/8\" Plug with 3/8\" NPT-M, Hardened Steel, Zinc Plated 4,000 PSI 200"], ["D10089", "3/8\" Plug with M22-M, YZD Plated 4,000 PSI 200"], ["520133", "1/4\" Plug with 1/4\" NPT-F, Hardened Steel 5,500 PSI 200"], ["520134", "1/4\" Plug with 1/4\" NPT-M, Hardened Steel 5,500 PSI 200"], ["520135", "3/8\" Plug with 3/8\" NPT-F, Hardened Steel 5,000 PSI 200"], ["520136", "3/8\" Plug with 3/8\" NPT-M, Hardened Steel 5,000 PSI 150"], ["QUICK", "DISCONNECT COUPLERS - STAINLESS STEEL"], ["D10072", "1/4\" with 1/4\" NPT-F, Stainless Steel 6,000 PSI 175\u00b0 F 200"], ["D10073", "1/4\" with 1/4\" NPT-M, Stainless Steel 6,000 PSI 175\u00b0 F 200"], ["D10074", "3/8\" with 3/8\" NPT-F, Stainless Steel 5,000 PSI 175\u00b0 F 200"], ["D10075", "3/8\" with 3/8\" NPT-M, Stainless Steel 5,000 PSI 175\u00b0 F 200"], ["D10090", "1/2\" with 1/2\" NPT-F, Stainless Steel 5,000 PSI 175\u00b0 F 200"], ["D10091", "1/2\" with 1/2\" NPT-M, Stainless Steel 5,000 PSI 175\u00b0 F 200"], ["639829", "Coupler Set, 1/2\" NPT-F, Locking Collar, Stainless Steel 10,000 PSI 175\u00b0 F N/A"]], "QD Plugs SS": [["ACCESSORIES", "- COUPLERS & FITTINGS"], ["QUICK", "DISCONNECT PLUGS - STAINLESS STEEL"], ["D10076", "1/4\" Plug with 1/4\" NPT-F, Stainless Steel 6,000 PSI 200"], ["D10077", "1/4\" Plug with 1/4\" NPT-M, Stainless Steel 6,000 PSI 200"], ["D10078", "3/8\" Plug with 3/8\" NPT-F, Stainless Steel 6,000 PSI 200"], ["D10079", "3/8\" Plug with 3/8\" NPT-M, Stainless Steel 6,000 PSI 200"], ["D10092", "1/2\" Plug with 1/2\" NPT-F, Stainless Steel 6,000 PSI 200"], ["D10093", "1/2\" Plug with 1/2\" NPT-M, Stainless Steel 6,000 PSI 200"], ["D10126", "3/8\" Plug with 1/2\" NPT-M, Stainless Steel 6,000 PSI 200"], ["D10011", "Plug N/A 3/4\" M Garden Hose 1/2\" QD-M 200"], ["D10012", "Coupler N/A 3/4\" F Garden Hose 1/2\" QD 200"], ["100275", "Garden Hose Adapter Kit N/A 3/4\" Garden Hose 1/2\" NPT-M"], ["100276", "Garden Hose Adapter Kit N/A 3/4\" Garden Hose 1/2\" NPT-M"], ["100277", "Garden Hose Adapter Kit N/A 3/4\" Garden Hose 3/8\" NPT-M"], ["D10084", "Garden Hose Inlet, Long 1/4\" NPT-F 3/4\" Garden Hose 3/8\" BSP-M 50"], ["D10085", "Garden Hose Inlet, Long 1/4\" NPT-F 3/4\" Garden Hose 1/2\" NPT-M 50"], ["GARDEN", "HOSE FITTINGS - WITH SCREENS"], ["D10016", "Garden Hose Fitting with Screen N/A 3/4\" Garden Hose 1/2\" NPT-F 200"], ["D10017", "Garden Hose Fitting with Screen N/A 3/4\" Garden Hose 3/8\" NPT-F 200"], ["D10032", "Garden Hose Fitting with Screen N/A 3/4\" Garden Hose 1/2\" NPT-M 100"], ["D10033", "Garden Hose Fitting with Screen N/A 3/4\" Garden Hose 3/8\" NPT-F"], ["680006", "Garden Hose Inlet for TP Series Pumps, with O-ring N/A 3/4\" Garden Hose 1/2\" BSP-M"], ["680007", "Garden Hose Assembly 1/4\" NPT-F 3/4\" Garden Hose 3/8\" BSP-M"], ["680073", "Garden Hose Inlet for TP/TT Series (short) N/A 3/4\" Garden Hose 1/2\" BSP-M"], ["700034", "Garden Hose Filter Washer, Stainless Steel, 30 Mesh N/A N/A N/A"], ["700004", "Garden Hose Filter Washer, Stainless Steel, 50 Mesh N/A N/A N/A 10,000"], ["D10117", "3 Way, 1/2\" NPT-F x 1/2\" NPT-F x 3/8\" NPT-F, 4,000 PSI"], ["D10118", "2 Way, 3/8\" NPT-F x 3/8\" NPT-F, Bolt-down, 5,500 PSI"], ["D10119", "3 Way, 3/8\" NPT-F, Bolt-down, 4,000 PSI"], ["D10127", "2 Way, 1/2\" NPT-F X 1/2\" NPT-F, Bolt-Down, 5,000 PSI"]], "Twist Connect Fittings": [["ACCESSORIES", "- COUPLERS & FITTINGS"], ["ZMINA14F", "1/4\" F Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINA14M", "1/4\" M Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINA38F", "3/8\" F Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINB12M", "1/2\" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINB14F", "1/4\" F Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINB14M", "1/4\" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINB38F", "3/8\" F Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["ZMINB38M", "3/8\" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30"], ["2510103", "1/4\" F Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 100"], ["D10021", "1/4\" M Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10023", "3/8\" M Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10024", "3/8\" F Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10027", "1/4\" F Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10028", "1/4\" M Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10029", "3/8\" F Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10030", "3/8\" M Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10040", "M22 QD Plug x M22 QD Plug 4,000 PSI 4,000 PSI 0.1 lbs. 200"], ["D10041", "M22 Coupler x M22 Coupler 4,000 PSI 4,000 PSI 0.3 lbs. 200"], ["D10043", "Brass Pipe Thread Reducer, 3/8\" NPT-M x 1/4\" NPT-F 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10044", "Brass Pipe Coupling, 1/4\" NPT-F 4,000 PSI 4,000 PSI 0.1 lbs. 200"], ["D10037", "M22 Coupler x 3/8\" QD Plug 4,000 PSI 4,000 PSI 0.2 lbs. 200"], ["D10052", "Union, 3/8\" NPT-M x 3/8\" NPT-M, Steel 4,000 PSI 4,000 PSI 0.2 lbs. 200"]], "High Pressure Filters": [["ACCESSORIES", "- FILTERS & STRAINERS"], ["INLINE", "HIGH-PRESSURE FILTERS"], ["DESCRIPTION", "GPM MAX INLET OUTLET"], ["100560", "100 Mesh Screen, 303 SS w/Brass Outlet 8.0 GPM 5,500 PSI 200\u00b0 F 1/4\" QD 1/4\" NPT-M 0.5 lbs."], ["100622", "200 Mesh Screen, Brass 8.0 GPM 5,000 PSI 200\u00b0 F 1/4\" NPT-M 1/4\" NPT-M 0.5 lbs."], ["100647", "100 Mesh Screen, Brass 8.0 GPM 5,000 PSI 200\u00b0 F 1/4\" NPT-F 1/4\" NPT-M 0.5 lbs."], ["CHEMICAL", "FILTERS"], ["Z0FILKIT", "Chemical Hose and Filter 0.5 lbs. N/A"], ["YF00", "Plastic Chemical Filter, 1/4\" Hose Barb 0.3 lbs. N/A"], ["YF00C", "Plastic Chemical Filter with Check Valve, 1/4\" Hose Barb 0.3 lbs. N/A"], ["YF30", "Plastic Chemical Filter with Stainless Steel Plug, 1/4\" Hose Barb 0.3 lbs. N/A"], ["YF30C", "Plastic Chemical Filter with Stainless Steel Plug, Check Valve, 1/4\" Hose Barb 0.3 lbs. N/A"], ["D40001", "Plastic Chemical Filter with Stainless Steel Plug, Check Valve, 1/4\" Hose Barb, and 4' Hose 0.5 lbs. N/A"], ["D40003", "Plastic Chemical Filter with Check Valve, Gray 0.3 lbs. N/A"], ["D40006", "Plastic Two-Step Chemical Filter, No check Valve, Black 0.3 lbs. N/A"], ["D40013", "Chemical Filter, Brass/Stainless Steel 0.5 lbs. N/A"], ["D40016", "Inlet Suction Tank Filter, 3/8\"-NPT-F, 40 Mesh, S304 0.5 lbs. N/A"]], "Inlet Filters": [["ACCESSORIES", "- FILTERS & STRAINERS"], ["INLET", "FILTERS"], ["DESCRIPTION", "GPM MAX INLET OUTLET BYPASS"], ["100649", "Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4\" GH 1/2\" NPT-M N/A 0.5 lbs."], ["100650", "Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4\" GH 3/8\" NPT-M N/A 0.5 lbs."], ["100651", "Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4\" GH 1/2\" NPT-M 1/4\" 0.5 lbs."], ["100652", "Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4\" GH 3/8\" NPT-M 1/4\" 0.5 lbs."], ["ZMFIL", "Aluminum Body, 50 Mesh 5.8 GPM 145 PSI 1/2\" BSP-F 1/2\" BSP-M (2)1/4\" BSP-F 0.5 lbs."], ["CLEAR", "BOWL FILTERS"], ["DF05050", "50 Mesh Screen 150 PSI 1/2\" NPT-F 1/2\" NPT-F N/A 0.5 lbs"], ["DF07550", "50 Mesh Screen 150 PSI 3/4\" NPT-F 3/4\" NPT-F N/A 0.5 lbs"], ["DF10050", "50 Mesh Screen 150 PSI 1\" NPT-F 1\" NPT-F N/A 0.75 lbs"], ["DF12550", "50 Mesh Screen 150 PSI 1-1/4\" NPT-F 1-1/4\" NPT-F N/A 0.75 lbs"], ["DF15050", "50 Mesh Screen 150 PSI 1-1/2\" NPT-F 1-1/2\" NPT-F N/A 1.0 lbs."], ["DF05080", "80 Mesh Screen 150 PSI 1/2\" NPT-F 1/2\" NPT-F N/A 0.5 lbs"], ["DF07580", "80 Mesh Screen 150 PSI 3/4\" NPT-F 3/4\" NPT-F N/A 0.5 lbs"], ["DF10080", "80 Mesh Screen 150 PSI 1\" NPT-F 1\" NPT-F N/A 0.75 lbs"], ["DF12580", "80 Mesh Screen 150 PSI 1-1/4\" NPT-F 1-1/4\" NPT-F N/A 0.75 lbs"], ["DF15080", "80 Mesh Screen 150 PSI 1-1/2\" NPT-F 1-1/2\" NPT-F N/A 1.0 lbs."], ["DESCRIPTION", "GPM MAX INLET OUTLET BYPASS"], ["YF5BMF", "Plastic Body, 50 Mesh 8.0 GPM 145 PSI 1/2\" BSP-M 1/2\" BSP-F 1/4\" 0.5 lbs."], ["YF5MF", "Plastic Body, 50 Mesh 8.0 GPM 145 PSI 1/2\" BSP-M 1/2\" BSP-F N/A 0.5 lbs."], ["YFY1", "Plastic Body, 50 Mesh 21.0 GPM 145 PSI 1\" BSP-F 1\" BSP-F N/A 0.5 lbs."], ["YFY34", "Plastic Body, 50 Mesh 21.0 GPM 145 PSI 3/4\" BSP-F 3/4\" BSP-F N/A 0.5 lbs."], ["YYSTR12", "Brass Body, 45 Mesh 15.0 GPM 175 PSI 1/2\" NPT-F 1/2\" NPT N/A 0.5 lbs."]], "Thermostats": [["ACCESSORIES", "- GAUGES & SWITCHES"], ["GAUGES", "& SWITCHES"], ["DESCRIPTION", "GPM MAX INLET OUTLET"], ["100272", "Flow Through Style 1 to 35 GPM 5,000 PSI Amb.-200\u00b0 1/2\" NPT 1/2\" NPT 1.0 lbs."], ["100438", "16(4)A-380V Electric Rating - 4,000 PSI 86-194\u00b0 F - - 0.5 lbs."], ["100439", "16(4)A-380V Electric Rating - 4,000 PSI 86-320\u00b0 F - - 0.5 lbs."], ["100538", "16(4)A-380V Electric Rating - 4,000 PSI 86-250\u00b0 F - - 0.5 lbs."], ["100995", "25 Amp, 250V Electric Rating 6,000 PSI 70-250\u00b0 F - - 0.5 lbs."], ["100438B", "16(4)A-380V Electric Rating - 4,000 PSI 86-194\u00b0 F - - 0.5 lbs."], ["100439B", "16(4)A-380V Electric Rating - 4,000 PSI 86-320\u00b0 F - - 0.5 lbs."], ["100538B", "16(4)A-380V Electric Rating - 4,000 PSI 86-250\u00b0 F - -- 0.5 lbs."], ["Y29026035", "Probe Pocket - 4,000 PSI N/A - 0.4 lbs."], ["YPRESSWITCH", "YPRESSWITCH535 YPRESSWITCHHP ZMSIMPLEX3"], ["PRESSURE", "SWITCHES"], ["YPRESSWITCH", "580 PSI 3,600 PSI 195\u00b0 F 1/4\" NPT-M 0.5 lbs."], ["YPRSWITCHXL", "(67\" lead) 580 PSI 3,600 PSI 195o F 1/4\" NPT-M 0.5 lbs."], ["YPRESSWITCH1535", "360 PSI 3,600 PSI 195\u00b0 F 3/8\" BSP-M 0.5 lbs."], ["YPRESSWITCH1564", "580 PSI 3,600 PSI 195\u00b0 F 3/8\" BSP-M 0.5 lbs."], ["YPRESSWITCH535", "360 PSI 3,600 PSI 195\u00b0 F 1/4\" BSP-M 0.5 lbs."], ["YPRESSWITCH564", "580 PSI 3,600 PSI 195\u00b0 F 1/4\" BSP-M 0.5 lbs."], ["YPRSWITCHHPL", "360 PSI 8,700 PSI 195\u00b0 F 3/8\" BSP-M 0.5 lbs."], ["YPRESSWITCHHP", "650 PSI 8,700 PSI 195\u00b0 F 3/8\" BSP-M 0.5 lbs."], ["YPRESSWITCH1521", "215 PSI 3,600 PSI 195\u00b0 F 1/4\u201d NPT-M 0.5 lbs."], ["YPRESSWITCH521", "215 PSI 3,600 PSI 195\u00b0 F 1/4\u201d NPT-M 0.5 lbs."], ["ZMSIMPLEX3", "725 PSI 3,000 PSI 195\u00b0 F 1/4\u201d BSP-M 0.5 lbs."]], "Flow Switches": [["ACCESSORIES", "- GAUGES & SWITCHES"], ["GAUGES", "& SWITCHES"], ["100975", "12.0 GPM 5,000 PSI 180\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 250 VAC Brass 1.25 lbs."], ["100931", "12.0 GPM 5,800 PSI 180\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 250 VAC SS 1.5 lbs."], ["100879", "12.0 GPM 4,000 PSI 180\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 250 VAC Brass 1.5 lbs."], ["100904", "12.0 GPM 4,000 PSI 180\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 250 VAC Brass 1.5 lbs."], ["101069", "YFLOSWITCH YFL7SWITCH 100329"], ["FLOW", "SWITCHES"], ["YFLOSWITCH", "8.0 GPM 3,650 PSI 4,050 PSI 175\u00b0 F 3/8\" BSP-M 3/8\" BSP-M 0.6 lbs."], ["YFL3SWITCH", "8.0 GPM 3,650 PSI 4,050 PSI 175\u00b0 F 3/8\" BSP-M 1/4\" BSP-M 0.4 lbs."], ["YFL7SWITCH", "8.0 GPM 5,100 PSI 5,100 PSI 175\u00b0 F 3/8\" BSP-F 3/8\" BSP-F 0.5 lbs."], ["103011", ".75 to 18.7 GPM 4,000 PSI 4,000 PSI 190\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 2.5 lbs."], ["100329", ".75 to 16.0 GPM 4,000 PSI 4,000 PSI 190\u00b0 F 3/8\" NPT-F 3/8\" NPT-F 2.5 lbs."], ["HIGH", "LIMIT THERMAL SWITCHES"], ["101066", "5,000 PSI 300 3/8\" NPT-M No 160\u00b0 F .5 lbs."], ["101093", "5,000 PSI 300 1/2\" NPT-M Yes, 68\" 230\u00b0 F .5 lbs."], ["101094", "5,000 PSI 300 1/2\" NPT-M Yes, 68\" 122\u00b0 F .5 lbs."], ["101113", "5,000 PSI 300 1/2\" NPT-M Yes, 68\" 150\u00b0 F .5 lbs."], ["101116", "5,000 PSI 300 3/8\" NPT-M Yes, 68\" 130\u00b0 F .5 lbs."]], "Gauges": [["ACCESSORIES", "- GAUGES & SWITCHES"], ["GAUGES", "& SWITCHES"], ["ZSPEED", "725 PSI 3,000 PSI 3/8\" NPT-M 1.1 lbs."], ["320005", "2,000 PSI 1/4\" NPT Bottom Mount 0.7 lbs."], ["320000", "3,000 PSI 1/4\" NPT Panel Mount 0.7 lbs."], ["320002", "3,000 PSI 1/4\" NPT Bottom Mount 0.7 lbs."], ["320001", "5,000 PSI 1/4\" NPT Panel Mount 0.7 lbs."], ["320003", "5,000 PSI 1/4\" NPT Bottom Mount 0.7 lbs."], ["320004", "20,000 PSI 1/2\" NPT Bottom Mount 1.0 lbs."]]};

KB.gp.oilRecommendations = {
  series8090: {
    label: "GP Series 8090", weight: "80/90 Weight Gear Lube", badge: "s8090",
    pumps: ["T41","T61","T81","T121","T151","T1551","T1591","T3551","T4251","T9971","T9971GR","TS1041","TS1531","CW1012","CW1541","CW61","CW81","YGR0750","YGR1000","YGR1000P","YGR1125","YGR1125P","ZGRS1000","ZGRS1125","ZGRS1000J","ZGRPTO"]
  },
  series220: {
    label: "GP Series 220", weight: "50 Weight", badge: "s220",
    pumps: ["HF","HFN","HTCK3623S","HTCK4050S","KE","KE36M","KEZ","KF","KF40M","KFMB","KFMZ","KFZ","KS","LK36","LK40","LK45","LK50","LK55","LK60","LKN36","LKN40","LKN45","LKN50","LKN55","LKN60","MK40","MK45","MK50","MK55","MK60","MK65","MKS40","MKS45","MKS50","MKS55","MKS60","MKS65","MW32","MW36","MW40","MW45","MW50","MW55","MW55M","MWN32","MWN36","MWN40","MWN45","MWN50","MWN55","SK","VF","VK","VS"]
  },
  series100: {
    label: "GP Series 100", weight: "30 Weight, Non-Detergent", badge: "s100",
    pumps: ["100648","100656","AT0033","AT0055","AT0088","AT0088B","AT0111","AT0177","AT0177B","CW2004","CW2040","CW24","CW3040","EZ2530SUI","EZ2536E","EZ2536EUI","EZ2536S","EZ2542E","EZ2542S","EZ2545E","EZ2545GUI","EZ2545S","EZ2555E","EZ2555S","EZ2642N","EZ3030G34","EZ3030G34UI","EZ3035G","EZ3035GUI","EZ3035GUK","EZ3036N","EZ3040G","EZ3040GUI","EZ3040GUK","EZ3040S","EZ3042S","EZ3045G","EZ4030G34","EZ4035E34","EZ4035G34","EZ4040E34","EZ4040G","HTC1505E345","HTC1506S17","HTC1509E175","HTC1509S17","HTC1511S17","HTF2018S","HTF2221S","HTF2421S","HTS2016S","HTS2210S","HTS2215S","HTS2219S","HTW3624S","HTXS1810S","HTXS1812S","HTXS1813S","T1011","T1321","T1621","T2031","T721B","T731B","T9051EBF","T9051EBFU","T9051EBFUI","T921","T9211","T9281","T9711EBF","T9721B","T9721EBF","T9731B","T9731EBF","T991","T991GR","T9951","TC1502E175","TC1504E345","TC1505E345","TC1506E345","TC1506E346","TC1506G","TC1506GUI","TC1507E345","TC1507E346","TC1507G","TC1507GUI","TC1507S34","TC1508E175","TC1508E346","TC1508G","TC1508GUI","TC1508S34","TC1509E175","TC1509E17N","TC1509G","TC1509GUI","TC1509S17","TC1511S17","TC1802E175","TC1809E175","TC1809E17N","TC1809S17","TC1811S17","TP2520J34","TP2520J34UIL","TP2526J34","TP2526J34UIL","TP2530J34","TP2530J34UIL","TP2533J34","TP2533J34UIL","TS1011","TS1021","TS1321","TS1331","TS1511","TS1621","TS1711","TS1811","TS2011","TS2012SS","TS2013","TS2016SS","TS2021","TS2212SS","TS2291","TS921","TSF1819","TSF2019","TSF2019DS","TSF2019SS","TSF2021","TSF2021SS","TSF2219","TSF2221","TSF2221SS","TSF2421","TSF2421SS","TSF2819","TT2028GBF","TT2035EBF","TT2035EBFUI","TT2035GBF","TT901","TT9061EBF","TT9061EBFU","TT9061EBFUI","TT9061GBF","TT9071EBF","TT9071EBFU","TT9071EBFUI","TT9071GBF","TT9111","TT9111EBF","TT931","TT9351","TT941","TT9441","TT951","TX1505G6","TX1506G6","TX1506G8","TX1506G8UK","TX1506S34","TX1508G6","TX1508G8","TX1508G8UIA","TX1508G8UK","TX1508S34","TX1509G8UIA","TX1509G8UK","TX1510E349","TX1510G8UIA","TX1510G8UK","TX1510S17SS","TX1510S34","TX1512E179","TX1512S17","TX1512S17SS","TX1810E179","EP1306S34","EP1308S34","EP1505G6","EP1506G6","EP1506G8","EP1508G6","EP1508G8","EP1509G8","EP1510G8","EP1306E34","EP1308E34","EP1310E34","EP1505E34","EP1506E34","EP1507E34","EP1508E34","EP1510E34","EP1505S34","EP1506S34","EP1507S34","EP1508S34","EP1510S34","ES1507S34","ES1509S34","ES1811S17","ES1813S17","ES2014S17","ET1305S34","ET1306S34","ET1307S34","ET1308S34","ET1309S34","ET1310S34","ET1311S34","ET1312S34","ET1504E34","ET1505E34","ET1505S34","ET1506S34","ET1507S34","ET1508S34","ET1509E17","ET1509S17","ET1807E17","ET1807S17","ET1809E17","ET1809S17","ET1810S17","ET1811S17","ET1511S17","ET1512S17"]
  }
};

KB.gp.troubleshooting = {
  pressure:{icon:"📉",title:"Low Pressure",desc:"Causes and remedies for loss of system pressure",causes:[{cause:"Belt slippage",remedy:"Tighten or replace belt; use correct belt type."},{cause:"Air leak in inlet plumbing",remedy:"Disassemble, reseal and reassemble all inlet connections."},{cause:"Relief valve stuck, partially plugged or improperly adjusted",remedy:"Clean, adjust relief valve; check for worn and dirty valve seats."},{cause:"Inlet suction strainer clogged or improperly sized",remedy:"Clean strainer. Use adequate size. Check more frequently."},{cause:"Worn packing — abrasives in fluid or severe cavitation",remedy:"Install proper filter. Limit suction to less than 20 ft lift / -8.5 PSI vacuum."},{cause:"Fouled or dirty inlet / discharge valves",remedy:"Clean inlet and discharge valve assemblies."},{cause:"Worn inlet or discharge valve",remedy:"Replace worn valves, valve seats and/or discharge hose."},{cause:"Leaky discharge hose",remedy:"Replace discharge hose."},{cause:"Restricted inlet or air entering inlet plumbing",remedy:"Use proper size inlet plumbing; check for airtight seal."},{cause:"Worn nozzle (too large)",remedy:"Replace nozzle with proper size."},{cause:"Insufficient RPM",remedy:"Increase RPM to rated speed per pump specifications."},{cause:"Incorrect operation of pressure adjustment valve",remedy:"Service or replace pressure adjustment valve."}]},
  pulsation:{icon:"〰️",title:"Pulsation",desc:"Irregular pulsing or surging during operation",causes:[{cause:"Valve stuck open",remedy:"Check all valves, remove foreign matter."},{cause:"Faulty pulsation damper",remedy:"Check pre-charge; if low, recharge or install a new one."},{cause:"Worn nozzle",remedy:"Replace nozzle, use proper size."},{cause:"Air leak in inlet plumbing",remedy:"Disassemble, reseal and reassemble all connections."},{cause:"Insufficient feeding",remedy:"Check suction line for obstructions, ensure water supply is adequate."},{cause:"Worn valves or pressure packings",remedy:"Replace worn valves and/or packings."}]},
  rough:{icon:"🔴",title:"Rough Running / Very Low Pressure",desc:"Pump runs extremely rough with very low output",causes:[{cause:"Inlet restrictions and/or air leaks",remedy:"Replace worn cups, clean out foreign material, replace worn valves."},{cause:"Stuck inlet or discharge valve",remedy:"Clean valves and remove foreign material; replace worn valves."},{cause:"Insufficient feeding / pump not primed",remedy:"Check suction line for obstructions, ensure water supply is adequate."},{cause:"Worn valves or pressure packings",remedy:"Replace worn valves and/or packings."},{cause:"Bends/elbows obstructing suction flow",remedy:"Redesign suction line to minimize restrictions."},{cause:"Inlet filter dirty or too small",remedy:"Clean filter. Use adequate size."},{cause:"Cavitation",remedy:"Correct suction hose sizing, ensure adequate flow rate, check water temperature."}]},
  leak:{icon:"💧",title:"Leaks (Water & Oil)",desc:"All types of water and oil leaks",items:[{subtitle:"Water Leaking from Under Manifold",causes:[{cause:"Worn packing",remedy:"Install new packing."},{cause:"Cracked plunger",remedy:"Replace plunger(s)."}]},{subtitle:"Oil Leak Between Crankcase & Pumping Section",causes:[{cause:"Worn crankcase piston rod seals or O-rings",remedy:"Replace seals and O-rings."}]},{subtitle:"Oil Leaking at Crankshaft Area",causes:[{cause:"Worn crankshaft seal or improperly installed oil seal O-ring",remedy:"Replace O-ring and/or seals."}]},{subtitle:"Oil Leaking from Underside of Crankcase",causes:[{cause:"Worn crankcase piston rod seals",remedy:"Replace seals."},{cause:"Scored piston rod",remedy:"Replace piston rod."}]},{subtitle:"Water in Crankcase (milky oil)",causes:[{cause:"Humid air condensing inside crankcase",remedy:"Change oil at regular intervals."},{cause:"Worn packing and/or piston rod sleeve",remedy:"Replace packing. Replace O-rings."},{cause:"Cracked plunger",remedy:"Replace plunger(s)."}]}]},
  noise:{icon:"🔊",title:"Loud Knocking / Noise",desc:"Unusual sounds from the pump",causes:[{cause:"Pulley loose on crankshaft",remedy:"Check key and tighten set screw."},{cause:"Broken or worn bearing or connecting rod(s)",remedy:"Replace bearing or rod(s)."},{cause:"Valve stuck open or shut",remedy:"Replace bad valve."},{cause:"Scored or worn plunger",remedy:"Replace plungers."},{cause:"Air suction in inlet line",remedy:"Check all inlet connections for airtight seal."},{cause:"Irregular drive transmission motion",remedy:"Check belts, pulleys, and drive alignment."}]},
  packing:{icon:"⚙️",title:"Frequent Packing Failure",desc:"Causes for short packing life",causes:[{cause:"Overpressure to inlet manifold",remedy:"Reduce inlet pressure."},{cause:"Abrasive material in the fluid",remedy:"Install proper filtration."},{cause:"Excessive pressure and/or temperature",remedy:"Ensure within specified range."},{cause:"Running pump dry",remedy:"Do not run pump without water."},{cause:"Upstream chemical injection",remedy:"Use downstream injection instead."},{cause:"Scored or worn plunger",remedy:"Replace plungers."}]},
  overheating:{icon:"🌡️",title:"Pump Overheating",desc:"Pump running hot",causes:[{cause:"Pump is overloaded",remedy:"Reduce pressure and/or RPM to within rated specifications."},{cause:"Oil level too low or wrong type",remedy:"Check oil level and refill with correct oil type."},{cause:"Incorrect alignment of pulleys",remedy:"Realign pulleys and transmission components."},{cause:"Pump not level",remedy:"Install level on a flat, rigid surface."},{cause:"Excessive play in crankshaft bearings",remedy:"Replace bearings."}]}
};

KB.gp.serviceProcedures = {
  valves:{icon:"🔧",title:"Servicing Valve Assemblies",desc:"Step-by-step valve inspection and replacement",steps:["All inlet and discharge valves can be serviced without disrupting plumbing.","Remove the valve cap and extract the valve assembly.","Examine O-rings and replace if cut, abraded, or distorted.","Remove valve assembly (retainer, spring, valve, valve seat) from cavity.","Remove O-ring from valve cavity.","Only one valve kit is needed to repair all valves in the pump.","Inspect manifold for wear or damage.","Install new O-ring in valve cavity.","Insert assembly into valve cavity.","Replace valve cap and torque to specifications."]},
  plungers:{icon:"🔩",title:"Replacing Plungers",desc:"Step-by-step plunger removal and replacement",steps:["Remove piston screw and plunger from piston rod.","If slinger washer comes off, replace it before installing new plunger.","Separate piston screw from plunger.","Install new O-ring and Teflon backup ring on piston screw.","Apply removable anaerobic thread sealant to threads and press into plunger.","Slide new plunger over the piston guide and torque to specifications."],notes:"Examine plunger surfaces — they should be smooth and free from scoring, pitting, or cracks."},
  vpackings:{icon:"🛞",title:"Replacing V-Packings",desc:"Step-by-step V-packing seal replacement",steps:["Remove manifold from crankcase.","Insert extractor collet through main seal retainer. Extract retainers, V-packings and head rings.","Install front head ring, V-packing and long-life ring. Press firmly into cylinder.","Insert intermediate seal retainer, pressing firmly.","Install rear head ring, V-packing and main seal retainer. Be careful not to cut O-ring.","Repeat for each cylinder.","Coat each plunger with grease and carefully remount manifold. Torque to specifications."],notes:"Order: Head Ring → V-Packing → Long Life Ring → Intermediate Seal Retainer → Head Ring → V-Packing → Main Seal Retainer."}
};

KB.gp.maintenance = {
  oilChange:"Change crankcase oil after 50-hour break-in. Then every 3 months or 500 hours.",
  every500:["Check oil level","Check / Replace valves","Check / Replace valve seats","Check / Replace valve springs","Check / Replace valve guides","Check / Replace H.P. packings","Check / Replace L.P. packings"],
  every1000:["Change oil","Full valve inspection and replacement","Complete packing inspection"],
  flushing:"Flush with clean water after every daily operation.",
  freezing:"In areas with freezing risk, protect the pump circuit. NEVER start until completely thawed.",
  startup:["Ensure suction line is perfectly airtight.","All On/Off valves completely open.","Delivery line must discharge freely for priming.","All connections correctly tightened.","Verify oil level using dipstick.","Check direction of rotation on first start.","Start off-load for at least 3 minutes before pressurizing.","Before stopping, release pressure via adjustment valve."]
};

KB.gp.systemDesign = {
  pressure:{title:"Pressure",text:"Result of forcing a known volume through a known size orifice. Measured in PSI. Never exceed maximum rated pressure."},
  flow:{title:"Flow",text:"Determined by pump shaft RPM. Faster rotation = higher output volume. Measured in GPM."},
  motor:{title:"Motor / Engine Sizing",text:"Size based on pump GPM and PSI. For gas engines, multiply electric HP by 1.5 to 1.8."},
  unloader:{title:"Unloader / Regulator Valve",text:"REQUIRED to redirect flow when gun is closed. Mount as close to pump outlet as possible."},
  inletFilter:{title:"Inlet Filter",text:"60–120 mesh screen filter necessary to prevent foreign matter from entering the system."},
  thermal:{title:"Thermal Relief Valve",text:"Opens at predetermined temperature to prevent heat damage from recirculating water."},
  hose:{title:"High Pressure Hose",text:"Must be rated at least 50% greater than operating pressure. Use permanent couplings."},
  pulley:{title:"Pulley Formula",text:"Pump Pulley = (Motor RPM ÷ Desired Pump RPM) × Motor Pulley Diameter."},
  sprayTip:{title:"Spray Tip Selection",text:"Must know output GPM and desired PSI. A tip too small causes overpressurization."},
  plumbing:{title:"Plumbing Best Practices",text:"Avoid bends and restrictions — they cause cavitation and premature wear."}
};

KB.gp.warranty = {
  pumpWarranty:"5 years from date of shipment (except Consumer Pumps and hydraulic line).",
  manifoldWarranty:"Forged brass manifolds warranted for the life of the pump.",
  consumerWarranty:"Consumer Pumps: 2 year warranty.",
  accessoryWarranty:"Accessories: 1 year warranty.",
  notCovered:["Normal wear and tear","Misuse, abuse, neglect, or unauthorized modifications","Incompatible fluids","Operation exceeding rated pressures and temperatures","Failure to follow maintenance requirements"],
  wearParts:["Packing (high and low pressure)","Plungers","Valves and valve seats","O-rings","Oil seals"]
};

// ═══ ALKOTA ═══
KB.alk = {};
KB.alk.troubleshooting = {"pressure": {"icon": "\ud83d\udcc9", "title": "Low Operating Pressure", "causes": [{"cause": "Insufficient water supply.", "remedy": "The water supply must meet or exceed the maximum discharge volume specified in the PERFORMANCE section, and minimum water inlet pressure specified in the GENERAL section of the MODEL SPECIFICATIONS section."}, {"cause": "Water supply hose too long.", "remedy": "Use shorter water supply hose."}, {"cause": "Worn belt.", "remedy": "Replace belt per CLEANER EXPLODED VIEW."}, {"cause": "Dirty or worn check valves in water pump", "remedy": "See PUMP TROUBLESHOOTING."}, {"cause": "Inlet filter screen clogged", "remedy": "Clean water filter screen or hose inlet screen."}, {"cause": "Air leak in inlet plumbing.", "remedy": "Tighten all fittings."}, {"cause": "Leaking discharge hose.", "remedy": "If a water leak is found, DO NOT OPERATE THE MACHINE. Disconnect the power and replace hose."}, {"cause": "Defective unloader valve.", "remedy": "Repair or replace unloader valve."}, {"cause": "A. Insufficient water supply. B. Incoming water hose too small. C. Water supply hose too long. D. Belt slippage. E. Worn Belt. F. Dirty or worn check valves in water pump. H. Water supply hose kinked. I. Inlet filter screen clogged. J. Motor runs slow. K. Air leak in inlet plumbing. L. Defective water pump. M. Leaking discharge plumbing. N. Restricted coil.", "remedy": "A. The water supply must meet or exceed the maximum discharge volume specified in the PERFORMANCE section, and minimum water inlet pressure specified in the GENERAL section of the MODEL SPECIFCATIONS section. B. Use larger water supply hose. C. Use shorter water supply hose. D. Tighten belt per instructions in MACHINE MAINTENANCE insert. E. Replace belt per CLEANER EXPLODED VIEW. F. See PUMP TROUBLESHOOTING. H. Straighten hose. I. Clean water filter screen or hose inlet screen. J. See \"Pump motor starts slow or overheats and stops\" above. K. Tighten all fittings. L. See PUMP TROUBLESHOOTING. M. If a water leak is found, DO NOT OPERATE THE MACHINE. Disconnect the power and repair plumbing. N. See COIL BACK PRESSURE CHECK in MACHINE MAINTENANCE."}]}, "cleaning": {"icon": "\ud83e\uddf9", "title": "Poor Cleaning Action", "causes": [{"cause": "Hard water.", "remedy": "Connect machine to water softener."}, {"cause": "Little or no chemical being drawn.", "remedy": "See \u201cmachine will not draw chemical.\u201d"}, {"cause": "Improper chemical mixture.", "remedy": "Mix chemicals per the label. Follow all mixing, handling, application, and disposal instructions."}]}, "chemical": {"icon": "\ud83e\uddea", "title": "Chemical Injection Issues", "causes": [{"cause": "No chemical solution.", "remedy": "Replenish supply."}, {"cause": "Chemical line strainer clogged. Air leak in chemical line.", "remedy": "Remove screen and clean"}, {"cause": "Restrictor orifice too large or missing.", "remedy": "Disassemble and clean. Install proper size orifice."}]}, "noise": {"icon": "\ud83d\udd0a", "title": "Excessive / Unusual Noise", "causes": [{"cause": "Defective pump.", "remedy": "See PUMP TROUBLESHOOTING."}, {"cause": "Pulleys rubbing.", "remedy": "Adjust shields or pulley(s)"}, {"cause": "A. Defective Pump. B. Defective motor. C. Pulleys rubbing. D. Misalignment of pump & motor", "remedy": "A. See PUMP TROUBLESHOOTING. B.Call service technician or take engine to Repair/Warranty station. C. Adjust shields or pulley(s). D. Realign pump and engine."}]}, "backpressure": {"icon": "\u2b06\ufe0f", "title": "Excessive Back Pressure", "causes": [{"cause": "Spray tip built up with lime.", "remedy": "Remove and clean, or replace spray tip with tip specified in the GENERAL section of MODEL SPECIFICATIONS. Flush machine per FLUSHING in MACHINE MAINTENANCE."}, {"cause": "Coil built up with lime", "remedy": "De-lime coil."}, {"cause": "Nozzle built up with lime.", "remedy": "Remove and clean, or replace Nozzle with nozzle specified in the GENERAL section of MODEL SPECIFICATIONS. Flush machine per FLUSHING in MACHINE MAINTENANCE."}, {"cause": "A. Water pump turning too fast. B. Coil built up with lime. C. Relief valve defective.", "remedy": "A. See MODEL SPECIFICATIONS. B. Delime coil. C. Remove and replace."}]}, "motor": {"icon": "\u26a1", "title": "Motor / Engine Problems", "causes": [{"cause": "No power.", "remedy": "Use a different outlet, check fuses in main disconnect switch. Replace fuse if blown."}, {"cause": "Defective motor.", "remedy": "Call service technician, or take motor to Repair/Warranty station."}, {"cause": "Pump frozen.", "remedy": "Machine must be thoroughly warmed to above freezing."}, {"cause": "Defective water pump.", "remedy": "See PUMP SERVICE."}, {"cause": "Low voltage", "remedy": "See \u201cLow voltage\u201d below."}, {"cause": "Defective motor.", "remedy": "Call service technician, or take motor to Repair/Warranty station."}, {"cause": "Motor starter \u201ckicked out\u201d (if so equipped) or thermal overload tripped.", "remedy": "Turn motor starter off to reset, then turn on, or push thermal overload reset button on motor."}, {"cause": "Defective motor.", "remedy": "Call service technician, or take motor to Repair/Warranty station."}, {"cause": "Incoming voltage incorrect.", "remedy": "Have a qualified technician check the motor terminal voltage. Correct voltage is in MODEL SPECIFICATIONS."}, {"cause": "Too long extension cord.", "remedy": "Shorten extension cord."}, {"cause": "No power.", "remedy": "Use a different outlet, check fuses in main disconnect switch. Replace fuse if blown."}, {"cause": "Defective motor.", "remedy": "Call service technician, or take motor to Repair/Warranty station."}, {"cause": "Machine improperly grounded.", "remedy": "STOP operating machine. Call service technician."}, {"cause": "osen the j-bolt on t s reached.", "remedy": "he motor mount. Retighten the pump DESVIO ESPACIO"}, {"cause": "A. No Power. B. Defective motor starter or ON/OFF switch. C. Defective motor.", "remedy": "A. Use a different outlet,check fuses in main disconnect switch. Replace fuse if blown. B. Call service technician. C. Call service technician, or take motor to Repair/Warranty station."}, {"cause": "A. Pump frozen. B. Defective motor. C. Defective water pump. D. Excessive back pressure", "remedy": "A. Machine must be thoroughly warmed to above freezing. B. Call service technician or take motor to Repair/Warranty station. C. See PUMP SERVICE . D. See \"Excessive Back Pressure\" above."}, {"cause": "A. Low voltage B. Excessive back pressure C. Defective motor", "remedy": "A. See \"Low voltage\".below. B. See \"Excessive Back Pressure\".above. C. Call service technician, or take motor to Repair/Warranty station."}, {"cause": "A. Motor starter \"kicked out\" (if so equipped) or thermal overload tripped. B. Excessive back pressure. C. Defective motor.", "remedy": "A. Turn motor starter off to reset, then turn on, or push thermal overload reset button on motor. B. See \"Excessive Back Pressure\". above C. Call service technician, or take motor to Repair/Warranty station."}, {"cause": "A. Incoming voltage incorrect. B. Not large enough extension cord. C. Too long extension cord", "remedy": "A. Have a qualified technician check the motor terminal voltage. Correct voltage is in MODEL SPECIFICATIONS. B. Use an extension cord with amperes or watts rating as high or higher than that of the MODEL SPECIFICATIONS. C. Shorten extension cord."}, {"cause": "A. Machine improperly grounded. B. Outlet not grounded", "remedy": "A. STOP! Operating machine. Call service technician. B. Have properly wired outlet installed."}]}, "belts": {"icon": "\ud83d\udd04", "title": "Belt / Drive Issues", "causes": [{"cause": "Belts too loose.", "remedy": "Tighten belt per instructions on MACHINE MAINTENANCE."}, {"cause": "Defective water pump.", "remedy": "See PUMP SERVICE."}, {"cause": "A. Belts too loose. B. Excessive Back Pressure. C. Defective Water Pump.", "remedy": "A. Tighten belt per instructions on MACHINE MAINTENANCE . B. See \"Excessive Back Pressure\" below. C. See PUMP SERVICE ."}]}, "temperature": {"icon": "\ud83c\udf21\ufe0f", "title": "Temperature Problems", "causes": [{"cause": "Gas pressure incorrect", "remedy": "Set fuel pressure at N.G. 7.5\u201d W.C. MIN/ 9\u201dMAX L.P. 10\u201d W.C. MIN/ 14\u201dMAX."}, {"cause": "Blocked main burner tube", "remedy": "Clean burner tube"}, {"cause": "Loose wires on valve", "remedy": "Secure wire connections"}, {"cause": "Loose valve wire on wiring harness", "remedy": "Repair wire on edge connector or repair wiring circuit board harness"}, {"cause": "Defective valve", "remedy": "Replace valve"}, {"cause": "Defective circuit board", "remedy": "Replace circuit board"}, {"cause": "Defective solenoid valve", "remedy": "Replace coils or solenoid valve"}, {"cause": "No gas to solenoid valve", "remedy": "Correct gas supply"}, {"cause": "Dirty connector on circuit board", "remedy": "Clean edge connector"}, {"cause": "High tension lead wire loose", "remedy": "Secure wire connection on circuit board"}, {"cause": "Electrodes loosely attached to main burner", "remedy": "Secure electrodes to main burner"}, {"cause": "Dirty electrodes", "remedy": "Clean electrodes"}, {"cause": "Wires loose in electrode porcelain", "remedy": "Replace electrode"}, {"cause": "Cracked porcelain on electrode", "remedy": "Replace electrodes"}, {"cause": "Low fuel pressure", "remedy": "See specified pressure in the FUEL section of MODEL SPECIFICATIONS."}, {"cause": "Improper fuel supply", "remedy": "Use fuel specified in FUEL section of the MODEL SPECIFICATIONS."}, {"cause": "Incoming water temperature too low", "remedy": "Raise incoming water temperature."}, {"cause": "Insufficient water", "remedy": "Increase water flow and pressure. Check coil back pressure."}, {"cause": "Improper fuel supply", "remedy": "Use fuel specified in FUEL section of the MODEL SPECIFICATIONS."}, {"cause": "Incoming water temperature too high", "remedy": "Lower incoming water temperature."}, {"cause": "Low voltage", "remedy": "See \u201cLow voltage\u201d below."}, {"cause": "Defective motor.", "remedy": "Call service technician, or take motor to Repair/Warranty station."}, {"cause": "A. Low fuel pressure. B. Water in fuel piping. C. Fuel filter clogged. D. Poor combustion. E. Improper fuel supply. F. Temperature control inoperative.", "remedy": "A. See BURNER on MODEL SPECIFICATIONS for specified pressure. B. Drain fuel tank and remove and replace filter per FUEL FILTER INSERT. C. Remove and replace fuel filter element per FUEL FILTER INSERT. D. See \"Poor combustion\".in OIL BURNER TROUBLESHOOTING. E. Use fuel specified in BURNER section of the MODEL SPECIFICATIONS. F. See HI-LIMIT TEMPERATURE CONTROL in BURNER CONTROL SECTION."}, {"cause": "A. Insufficient water. B. Temperature control inoperative. C. Improper fuel supply.", "remedy": "A. See Low Operating Pressure on MACHINE TROUBLESHOOTING. B. See HI-LIMIT TEMPERATURE CONTROL in BURNER CONTROL SECTION. C. Use fuel specified in BURNER section of the MODEL SPECIFICATIONS."}, {"cause": "A. Low voltage B. Excessive back pressure C. Defective motor", "remedy": "A. See \"Low voltage\".below. B. See \"Excessive Back Pressure\".above. C. Call service technician, or take motor to Repair/Warranty station."}]}, "burner": {"icon": "\ud83d\udd25", "title": "Burner / Ignition Issues", "causes": [{"cause": "Gas pressure incorrect", "remedy": "Set fuel pressure at N.G. 7.5\u201d W.C. MIN/ 9\u201dMAX L.P. 10\u201d W.C. MIN/ 14\u201dMAX."}, {"cause": "Blocked main burner tube", "remedy": "Clean burner tube"}, {"cause": "Loose wires on valve", "remedy": "Secure wire connections"}, {"cause": "Loose valve wire on wiring harness", "remedy": "Repair wire on edge connector or repair wiring circuit board harness"}, {"cause": "Defective valve", "remedy": "Replace valve"}, {"cause": "Defective circuit board", "remedy": "Replace circuit board"}, {"cause": "Defective solenoid valve", "remedy": "Replace coils or solenoid valve"}, {"cause": "No gas to solenoid valve", "remedy": "Correct gas supply"}, {"cause": "Dirty connector on circuit board", "remedy": "Clean edge connector"}, {"cause": "High tension lead wire loose", "remedy": "Secure wire connection on circuit board"}, {"cause": "Electrodes loosely attached to main burner", "remedy": "Secure electrodes to main burner"}, {"cause": "Dirty electrodes", "remedy": "Clean electrodes"}, {"cause": "Wires loose in electrode porcelain", "remedy": "Replace electrode"}, {"cause": "Cracked porcelain on electrode", "remedy": "Replace electrodes"}, {"cause": "Check for drafts", "remedy": "Install draft diverter."}, {"cause": "Defective thermocouple", "remedy": "Test and/or replace thermocouple."}, {"cause": "Incorrect pilot orifice", "remedy": "See pilot orifice specified in the FUEL section of MODEL SPECIFICATIONS."}]}, "steam": {"icon": "\u2668\ufe0f", "title": "Steam Issues", "causes": [{"cause": "Insufficient water", "remedy": "Increase water flow and pressure. Check coil back pressure."}, {"cause": "Improper fuel supply", "remedy": "Use fuel specified in FUEL section of the MODEL SPECIFICATIONS."}, {"cause": "Incoming water temperature too high", "remedy": "Lower incoming water temperature."}]}, "other": {"icon": "\u2753", "title": "Other Issues", "causes": [{"cause": "[Machine smokes] Improper fuel supply", "remedy": "Use fuel specified in FUEL section of the MODEL SPECIFICATIONS."}, {"cause": "[Machine smokes] Loose burner jets", "remedy": "Tighten burner jets."}, {"cause": "[Machine fumes (exhaust burns eyes)] Improper fuel pressure", "remedy": "Fuel pressure should be N.G. 7.5\u201d W.C. MIN/ 9\u201dMAX L.P. 10\u201d W.C. MIN/ 14\u201dMAX."}, {"cause": "[Machine fumes (exhaust burns eyes)] Improper venting.", "remedy": "See National Fuel Gas Code (ANSI Z223.1 and NFPA No. 54)"}, {"cause": "[Poor Combustion] Low fuel pressure", "remedy": "Fuel pressure should be N.G. 7.5\u201d W.C. MIN/ 9\u201dMAX L.P. 10\u201d W.C. MIN/ 14\u201dMAX."}, {"cause": "[Poor Combustion] Improper venting", "remedy": "See National Fuel Gas Code (ANSI Z223.1 and NFPA No. 54)"}, {"cause": "[16] 10", "remedy": "13"}, {"cause": "[14] 15", "remedy": "18"}, {"cause": "[10] 25", "remedy": "30"}, {"cause": "[6] 45", "remedy": "55"}, {"cause": "[2] 80", "remedy": "95"}, {"cause": "[AWG m\u00ednimo del cable de cobre] Amperaje de la m\u00e1quina* para cables de 3 conductores", "remedy": "Amperaje de la m\u00e1quina* para cables de 2 conductores"}, {"cause": "[15] --", "remedy": "--"}, {"cause": "[12] 20", "remedy": "25"}, {"cause": "[8] 35", "remedy": "40"}, {"cause": "[4] 60", "remedy": "70"}, {"cause": "[Heater Does not activate] Insufficient water flow.", "remedy": "Check for sufficient water flow"}, {"cause": "[TROUBLE] POSSIBLE CAUSE", "remedy": "REMEDY"}, {"cause": "[4. Machine fumes (exhaust burns eyes)] A. Too much combustion air. B. Improper fuel pressure.", "remedy": "A. See BURNER TROUBLESHOOTING INSERT. B. See FUEL in MODEL SPECIFICATIONS for specified pressure."}, {"cause": "[7. Excessive vibration] A. Defective Belt. B. Defective Pump. C. Defective accumulator", "remedy": "A. Remove and replace using belt specified in CLEANER EXPLODED VIEW or the GENERAL section of MODEL SPECIFICATIONS. B. See PUMP TROUBLESHOOTING. C. Recharge/Replace."}, {"cause": "[Spray Too Hot] Incoming water Too Hot.", "remedy": "Connect machine to cold water."}]}};

KB.alk.manuals = {"Cold Water Engine/Electric": {"pages": 0}, "UL Oil Fired": {"pages": 0}, "UL Gas Fired": {"pages": 0}, "Electric Driven Electric Fired": {"pages": 0}, "Electric Driven Oil Fired Steam": {"pages": 0}, "Oil Fired Steam Generator": {"pages": 0}, "Oil Fired Water Heater": {"pages": 0}, "Arctic Steam": {"pages": 0}, "Water Heater Gas Fired": {"pages": 0}, "Underwash Systems": {"pages": 0}, "Waste Water Treatment": {"pages": 0}};

KB.alk.maintenance = {
  general: {
    beltTension: "Check belt tension: 1/64\" deflection per inch of span between pulley centers with 6 lb force applied at the middle of the span.",
    flushing: "Flush machine with clean water after each use. Remove spray tip and run water through for 1-2 minutes.",
    storage: "For freezing conditions: Run pump anti-freeze (propylene glycol) through the pump. Drain float tank. Close ball valve.",
    oilCheck: "Check pump oil level before each use. Change pump oil per pump manufacturer's recommendations.",
    filters: "Clean inlet water filter screen regularly. A clogged filter causes low pressure and pump damage.",
    chemical: "After using chemicals, flush chemical line by placing the screen in clear water and running for 1 minute.",
    coilDeliming: "De-lime heating coil periodically. Use approved de-liming solution per manufacturer instructions.",
    nozzles: "Inspect spray tips regularly. Worn tips reduce pressure. Replace with factory-specified size."
  },
  startup: [
    "Check pump oil level.",
    "Fill fuel tank with specified fuel (if equipped).",
    "Inspect fuel filter for water contaminants (if equipped).",
    "Connect to adequate water supply (minimum 10 PSI inlet pressure).",
    "Install float tank drain plug and open ball valve (if equipped).",
    "Flush machine if first use, after repairs, or after 30+ days idle.",
    "Remove spray tip for initial priming.",
    "Start machine off-load. Allow pump to prime before applying pressure.",
    "Install spray tip once steady water flow is confirmed."
  ],
  shutdown: [
    "Release trigger gun to close spray.",
    "Turn switch to OFF position (electric) or stop engine.",
    "Turn off water supply.",
    "Squeeze trigger to release any residual pressure.",
    "If freezing conditions possible, winterize immediately."
  ]
};

KB.alk.installation = {
  electrical: "Connect to an electrically grounded circuit that is fused or circuit-breaker-protected. Circuit must match MODEL SPECIFICATIONS.",
  extensionCord: "Use only outdoor-rated extension cords with amperage rating equal to or exceeding the machine's rating. Undersized wire limits motor performance.",
  waterSupply: "Water supply must meet or exceed maximum discharge volume. Minimum inlet pressure: 10 PSI / 0.68 BAR.",
  barrier: "Install a barrier between machine and wash area to protect electrical controls, motors, and transformers from moisture.",
  ventilation: "Fuel-burning equipment requires proper ventilation for cooling, combustion air, and exhaust. Never operate indoors without adequate ventilation.",
  location: "Install on a level surface protected from strong winds, rain, snow, extreme heat, and freezing. Consider access for chemical, fuel, electrical, water, venting, and maintenance.",
  waterConditions: "Hard water causes lime/scale buildup in coils and components. Use water softener if hardness exceeds 10 grains."
};

// ═══ METADATA ═══
KB.meta = {
  version: "2.1",
  generated: new Date().toISOString().split('T')[0],
  brands: ["General Pump", "Alkota"],
  sources: {
    generalPump: [
      "2018-Catalog-Online.pdf (117 pages)",
      "Troubleshooting.pdf","ServiceManual.pdf",
      "47_Series_Service_Instructions.pdf",
      "KFMZOwnerManual.pdf","OilRecommend.pdf",
      "General_Pump_TS2021_Data_Sheet_2022.pdf",
      "MKRepairMan.pdf"
    ],
    alkota: [
      "Cold Water Engine/Electric (36 pages)",
      "UL Oil Fired (40 pages)","UL Gas Fired (28 pages)",
      "Electric Driven Electric Fired (24 pages)",
      "Electric Driven Oil Fired Steam (20 pages)",
      "Oil Fired Steam Generator (24 pages)",
      "Oil Fired Water Heater (16 pages)",
      "Arctic Steam (20 pages)",
      "Water Heater Gas Fired (20 pages)",
      "Underwash Systems (8 pages)",
      "Waste Water Treatment (12 pages)",
      "Service School Book Part 1 (245 pages)"
    ]
  },
  stats: {
    gpPumps: 372,
    gpAccessories: 851,
    gpTroubleshooting: 7,
    alkotaTroubleshooting: 11,
    alkotaManuals: 11,
    serviceSchoolPages: 245,
    totalSources:28
  }
};

// ═══ ALKOTA SERVICE SCHOOL (245 pages) ═══
KB.alk.serviceSchool = {};

KB.alk.serviceSchool.pumpTroubleshooting = {"Water leakage from under manifold": [{"cause": "Worn packings", "remedy": "Install new packing"}, {"cause": "Cracked plunger", "remedy": "Replace plunger(s)"}], "Oil leak between crankcase and pumping section": [{"cause": "Worn crankcase piston rod seals", "remedy": "Replace crankcase piston rod seals"}, {"cause": "O-rings on plunger retainer worn", "remedy": "Replace O-rings"}], "Oil leaking at crankshaft area": [{"cause": "Worn crankshaft seal", "remedy": "Remove oil seal retainer and replace damaged O-ring and/or seals"}, {"cause": "Improperly installed O-ring", "remedy": "Replace O-ring"}, {"cause": "Bad bearings", "remedy": "Replace bearings"}], "Excessive play at crankshaft pulley": [{"cause": "Worn main bearing from excessive belt tension", "remedy": "Replace crankshaft bearing. Maintain proper belt tension."}], "Water in crankcase (milky oil)": [{"cause": "Humid air condensing", "remedy": "Change oil more often. Use non-detergent oil."}, {"cause": "Worn packings", "remedy": "Replace packings"}, {"cause": "Worn plunger screw O-ring", "remedy": "Replace O-rings"}, {"cause": "Cracked plunger", "remedy": "Replace plunger(s)"}], "Oil leaking at underside of crankcase": [{"cause": "Worn crankcase piston rod seals", "remedy": "Replace seals"}, {"cause": "Scored piston rods", "remedy": "Replace piston rod"}], "Oil leaking at rear of crankcase": [{"cause": "Damaged crankcase O-ring", "remedy": "Replace O-ring"}, {"cause": "Damaged rear cover O-ring", "remedy": "Replace O-ring"}, {"cause": "Drain plug O-ring", "remedy": "Replace O-ring"}, {"cause": "Sight glass O-ring", "remedy": "Replace O-ring"}], "Loud knocking noise in pump": [{"cause": "Pulley loose on crankshaft", "remedy": "Check shaft key, tighten bolts or set screw"}, {"cause": "Damaged bearing or connection rod", "remedy": "Replace bearing or connecting rod"}, {"cause": "Check valve stuck", "remedy": "Inspect check valves"}, {"cause": "Inadequate water supply", "remedy": "Check inlet feed and adjust"}], "Frequent or premature packing failure": [{"cause": "Damaged plunger", "remedy": "Replace plunger"}, {"cause": "Over-pressure to inlet", "remedy": "Reduce inlet pressure"}, {"cause": "Abrasive material in fluid", "remedy": "Install proper filtration"}, {"cause": "Excessive pressure or temperature", "remedy": "Check pressure and fluid temperature"}, {"cause": "Running pump dry", "remedy": "Do not run pump without water"}, {"cause": "Upstream chemical injection", "remedy": "Use downstream chemical injection"}]};

KB.alk.serviceSchool.unloaderTroubleshooting = {"Frequent unloader cycles": [{"cause": "Damaged check valve O-ring", "remedy": "Replace O-ring"}, {"cause": "Leaking connections", "remedy": "Check and replace connections"}], "Unloader does not come to full pressure": [{"cause": "Restricted bypass", "remedy": "Clean or adapt bypass"}, {"cause": "Plugged nozzle", "remedy": "Clean or replace nozzle"}, {"cause": "Unloader not properly sized", "remedy": "Clean spring or change valve type"}, {"cause": "Debris lodged in unloader", "remedy": "Clean unloader"}, {"cause": "Unloader piston O-ring worn", "remedy": "Replace O-ring"}, {"cause": "Worn nozzle", "remedy": "Replace nozzle"}], "Excessive pressure spikes": [{"cause": "Not minimum 5% flow in bypass", "remedy": "Reset bypass flow"}, {"cause": "Excessive flow in bypass", "remedy": "Change valve type or adjust passages"}, {"cause": "Spring totally compressed", "remedy": "Loosen spring tension and change nozzle"}], "Unloader won't go into bypass": [{"cause": "Discharge check valve jammed", "remedy": "Clean or replace check valve"}, {"cause": "Worn discharge check valve O-ring", "remedy": "Replace O-ring"}, {"cause": "Debris in unloader valve", "remedy": "Clean unloader"}]};

KB.alk.serviceSchool.oilBurnerTroubleshooting = {"Burner will not ignite": [{"cause": "Electrodes out of alignment", "remedy": "Realign electrodes per specifications"}, {"cause": "Electrode insulator failure", "remedy": "Replace electrode insulator"}, {"cause": "Fuel solenoid valve not opening", "remedy": "Test and replace fuel solenoid"}, {"cause": "Weak transformer", "remedy": "Test and replace transformer"}, {"cause": "Faulty CAD cell", "remedy": "Test CAD cell (300-1000 ohms normal, over 1600 = defective). Replace if needed."}], "Burner running but no fire": [{"cause": "No fuel", "remedy": "Check fuel supply"}, {"cause": "Temperature control setting", "remedy": "Verify temp control setting"}, {"cause": "Vacuum switch not engaging", "remedy": "Check vacuum switch"}, {"cause": "Fuel pump failure", "remedy": "Check fuel pump operation"}, {"cause": "Fuel nozzle blockage", "remedy": "Clean or replace fuel nozzle"}, {"cause": "Air cone blocked", "remedy": "Inspect and clear air cone"}], "Low fuel pressure": [{"cause": "Clogged fuel filter", "remedy": "Replace fuel filter"}, {"cause": "Fuel leak on suction side", "remedy": "Find and repair leak"}, {"cause": "Damaged fuel line", "remedy": "Replace fuel line"}, {"cause": "Clogged burner nozzle", "remedy": "Clean or replace nozzle"}, {"cause": "Fuel too viscous (cold weather)", "remedy": "Use 60/40 blend of #2/#1 diesel in cold weather"}, {"cause": "Burner shaft coupler slipping", "remedy": "Tighten or replace coupler"}], "Losing flame retention": [{"cause": "Drawer assembly too high or low", "remedy": "Adjust using nozzle gauge"}, {"cause": "Bad fuel nozzle", "remedy": "Replace fuel nozzle"}, {"cause": "Fuel pressure too high", "remedy": "Set fuel pressure to 125 PSI"}], "Black smoke": [{"cause": "Not enough air", "remedy": "Gradually open air bands"}, {"cause": "Engine not at correct RPM", "remedy": "Check and adjust engine RPM"}], "White smoke": [{"cause": "Too much air", "remedy": "Gradually close air bands"}], "Burner motor not coming on": [{"cause": "Voltage/wiring issue", "remedy": "Check voltage and wiring"}, {"cause": "Bad electrical motor", "remedy": "Test and replace motor"}, {"cause": "Thermal overload tripped", "remedy": "Check thermal overload on motor"}, {"cause": "Cam switch failure", "remedy": "Test and replace cam switch"}], "Delayed ignition (DANGEROUS)": [{"cause": "Drawer assembly out of position", "remedy": "Set proper position using nozzle gauge"}, {"cause": "Electrodes misaligned", "remedy": "Align electrodes per specifications"}], "Wrong fuel problems": [{"cause": "Wrong fuel type", "remedy": "Use recommended fuel. NEVER use low-sulfur premium diesel."}, {"cause": "Soot buildup", "remedy": "Descale coil, adjust burner (smoke test target: 1-2)"}]};

KB.alk.serviceSchool.gasHeaterTroubleshooting = {"Won't rise to operating temperature": [{"cause": "Low fuel pressure", "remedy": "See MODEL SPECIFICATIONS for correct pressure"}, {"cause": "Poor combustion", "remedy": "Check air, fuel, and ignition"}, {"cause": "Improper fuel supply", "remedy": "Use fuel specified in MODEL SPECIFICATIONS"}, {"cause": "Temperature control inoperative", "remedy": "Test and replace temperature control"}, {"cause": "Incoming water too cold", "remedy": "Raise incoming water temperature"}], "Machine overheats (dry steam)": [{"cause": "Insufficient water flow", "remedy": "Increase water flow/pressure. Check coil back pressure."}, {"cause": "Temperature control inoperative", "remedy": "Test and replace temperature control"}, {"cause": "Improper fuel pressure", "remedy": "See MODEL SPECIFICATIONS for correct pressure"}, {"cause": "Incoming water too hot", "remedy": "Lower incoming water temperature"}], "Machine smokes": [{"cause": "Improper fuel supply", "remedy": "Use fuel specified in MODEL SPECIFICATIONS"}, {"cause": "Improper burner jets", "remedy": "Replace jets per BURNER ASSEMBLY"}, {"cause": "Loose burner jets", "remedy": "Tighten burner jets"}, {"cause": "Missing burner jets", "remedy": "Install appropriate burner jets"}], "Machine fumes (burns eyes)": [{"cause": "Improper fuel pressure", "remedy": "See MODEL SPECIFICATIONS for correct pressure"}], "Poor combustion": [{"cause": "Low fuel pressure", "remedy": "See MODEL SPECIFICATIONS"}, {"cause": "Improper fuel supply", "remedy": "Use specified fuel"}, {"cause": "Improper venting", "remedy": "See ANSI Z223.1 / NFPA No. 54"}, {"cause": "Fuel pressure too high", "remedy": "Adjust to specified pressure"}], "Pilot will not stay lit": [{"cause": "Drafts", "remedy": "Install draft diverter"}, {"cause": "Pilot flame not sharp blue", "remedy": "Clean pilot orifice"}, {"cause": "Defective thermocouple", "remedy": "Test and/or replace thermocouple"}, {"cause": "Improper fuel pressure", "remedy": "See MODEL SPECIFICATIONS"}, {"cause": "Incorrect pilot orifice", "remedy": "Replace with specified orifice"}]};

KB.alk.serviceSchool.pumpService = {
  headRemoval: ["Remove check valve caps and inspect O-rings", "Remove check valves, inspect ports, remove old O-rings", "Remove head bolts", "Remove pump head \u2014 tap lightly with rubber mallet, alternating sides", "Use proper size packing extractor to remove V-packings", "Lay out all parts in proper order", "Lightly lubricate all parts with pump oil", "Use proper packing insertion tool for reassembly", "Inspect all plungers \u2014 surfaces should be smooth, free from scoring or pitting", "Align plungers and reinstall head", "Torque head bolts: finger-tight first, then 10 ft-lbs in sequence, then full spec in sequence", "Reinstall check valves with NEW O-rings", "Reinstall check valve caps and torque to spec"],
  checkValves: "When removing valve caps and check valves, always check for: debris, worn O-rings, damaged plastic housing, damaged threads. If valve port O-ring is not removed before adding new one, the valve WILL be damaged.",
  vPackings: "Inspect for wear/damage/debris every time pump head is removed. Cannot be repaired — must be replaced if damaged. Always replace entire packing set, not individual components. Use packing removal tool to avoid damaging plungers or brass head.",
  pumpOil: "Follow manufacturer specs. Change after 50-hour break-in, then every 3 months or 500 hours. Replace shipping oil plug with vented plug before operation. Milky oil = water in crankcase (condensation, bad seals, or cracked plunger).",
  cavitation: "Occurs when water in cylinder boils due to high vacuum. Bubbles explode against ceramic plunger causing extensive damage. Lack of water is the #1 problem with pump performance.",
  plungerCracking: "Causes: thermal shock (cold water hitting hot plunger), over-tightening plunger bolt. Always check ceramics for cracks when head is removed.",
  maxTemp: "Most pumps rated for 140°F water. Damage begins at 155°F. Do not leave in bypass more than 2-3 minutes. At 3450 RPM, a valve opens and closes 57.5 times per second.",
  tools: "Typical pump repair: vacuum gauge (30 inHg to 30 PSI), pressure gauge (6000 PSI), garden hose adapter, hose barbs. Complete pump kit P/N Z09-00021. Packing kit P/N Z09-00028."
};

KB.alk.serviceSchool.unloaders = {
  function: "Responds to stoppage of flow (gun closed). Increased system pressure pushes piston down, diverting water through bypass port back to float tank or pump inlet.",
  reliefValve: "Automatically opens to relieve dangerous system pressure. Thermal relief valve prevents overheating — opens at 145°F+ to release hot water and allow cool water to enter pump.",
  easyStart: "Ball and seat bypasses water back to pump inlet until 100 PSI reached. Enables starting engine with water in system. Primarily for gas/diesel engine units.",
  chemicalInjector: "Uses pump vacuum to pull chemical/soap into water stream. If chemical line left open without chemical, it pulls AIR into pump. Always close valve when not using chemical.",
  accumulator: "Used above 2500 PSI where pulse hose not applicable. Smooths pulsations from plunger stroke.",
  pulseHose: "Essential below 2500 PSI. Flexes with pulsations to smooth them. You CANNOT replace with hydraulic or any other hose — will SEVERELY damage machine.",
  multigun: "Enables multiple gun operation without premature unloader failure. Used mostly on machines over 8 GPM.",
  floatTank: "Acts as cold water reservoir. Float valve closes when tank full. Filter at bottom prevents debris entering system. Water flows through tank entire time machine is in use."
};

KB.alk.serviceSchool.electrical = {
  controlBox: "Houses main power switch, temperature control, chemical inlet valve, auto shutdown timers, transformers, engine hour gauge.",
  gfiCord: "Personal protection device. Does NOT protect equipment from overload. Measures leakage to ground, trips at 5mA.",
  camSwitch: "Turns power on/off to pump motors and burners. Single deck for 115V, dual deck for 230V.",
  vacuumSwitch: "Pump creates vacuum pulling water from float tank. If vacuum switch not pulled down, burner will NOT fire (safety). Setpoints: 1, 2, 2.5, or 4 in Hg. Primary burner control on electric units.",
  pressureSwitch: "Activates burner at 580 PSI. No spray tip = no pressure = burner won't fire. Primary control on gas engine units. Rated 5A max.",
  flowSwitch: "Activates when water flowing. Requires 0.5 GPM. Pilot duty only.",
  tempControl: "Shuts burner off at desired temp. High limit = safety against overheating. Will NOT make water hotter — only controls/limits temperature.",
  autoShutdown: "Shuts machine down in bypass. Usually set A-1-8-0-S. Connected to vacuum switch.",
  completeShutdown: "20-second delay after trigger released. Restarts by pulling trigger. WARNING: leaks can cause restart cycling.",
  contactor: "Transfers power L1/L2/L3 to T1/T2/T3 when coil energized. Overload relay added to protect motor.",
  cadCell: "Cadmium sulfide eye senses flame. On ALL 12V burners. Normal: 300-1000 ohms. Over 1600 = defective. Infinite = open circuit (broken cell/wire).",
  heatingElements: "Used where fuel burners not applicable. Self-contained, no coil needed. MUST be wired correctly with correct voltage/amperage."
};

KB.alk.serviceSchool.coils = {
  heatTransfer: "Cold water wrap acts as pre-heater and eliminates need for insulation. Main coil absorbs majority of heat after combustion chamber.",
  parts: "Cold water wrap → Main heat transfer coils → Combustion chamber. Coils vary by main coil size, combustion chamber size, number of wraps, and pipe schedule.",
  descaling: "Use external container method. Heat to 100-120°F (do NOT overheat). Add acid when foaming stops. Complete when no foaming after adding acid. Flush with clear water after.",
  scaleImpact: "Per US Bureau of Standards: 1/16 inch scale = 15% more fuel. 1/4 inch = 30%. 3/8 inch = 45%. 1/2 inch = 60% more fuel. Water softeners strongly recommended.",
  smokeTest: "0=Dangerous (excess air/raw fuel). 1=Excellent. 2=Good (slight sooting). 3=Fair. 4=Poor. 5-9=Very to Extremely Poor. Target: 1-2. Pull handle 10 times through stack, check filter paper against gauge."
};

KB.alk.serviceSchool.burners = {
  threeEssentials: "Fuel + Air + Ignition Source — if ANY one is missing, burner will NOT function properly.",
  fuelTypes: "Best: #1/#2 home heating fuels. Standard: #2 diesel. Cold weather: 60% #2 + 40% #1 blend. Kerosene = 10-15° loss. NEVER use low-sulfur premium diesel (additives won't burn — causes smoke/soot/flames).",
  electrodes: "Incorrect alignment causes delayed ignition (DANGEROUS). Must be set per specifications.",
  fuelSolenoid: "Shuts fuel off while blower/transformer continue. Color: Green=12/24V, Grey=115V, Black=230V. Check O-rings and clear holes when servicing.",
  nozzleGauge: "Sets proper height of nozzle/igniter/drawer assembly vs air cone. Nozzle tip should touch bottom of gauge.",
  gasBurnerJets: "BTU by orifice size + gas pressure. NG: 3.5 in W.C., LP: 11 in W.C. Target: 10,000 BTU/jet stationary, 7,500 portable. 1 PSI = 27.7 in W.C.",
  burnerRings: "Cast iron ring + brass nozzles. Distributes gas pressure evenly to jets. Sizes: 20, 32, 44, 66, 88, 104 jets.",
  exhaustVenting: "Never reduce vent size. Always install draft diverter. 2:1 vertical-to-horizontal ratio. Weather cap on top. NEVER use Type B venting.",
  makeupAir: "Inside air: 1 sq in per 1,000 BTU/hr. Outside air: 1 sq in per 4,000 BTU/hr. Cross ventilation = openings near top AND bottom."
};

KB.alk.serviceSchool.nozzles = {
  sizing: "Nozzle number = GPM capacity at 4000 PSI. Spray angle does NOT affect volume. Tip color vs size NOT standard between machines. Incorrectly sized nozzle can damage machine or cause injury.",
  types: "Soap: larger orifice, lower PSI, REQUIRED for chemical. Impact: concentrates force. Rotary: spinning circular pattern. Variable fan: 0-45° adjustable.",
  maintenance: "Routinely check for debris/wear. Worn nozzle = reduced pressure. Always check nozzle orifice for scratches, wear, and debris.",
  frictionLoss: "Pressure drop per 100 ft varies by hose diameter and flow rate. Example: 4 GPM through 3/8 inch hose = 90 PSI loss per 100 ft."
};

KB.alk.serviceSchool.warranty = {
  machine: "1 year from factory delivery — free from defects in material or workmanship under normal use",
  heatingCoil: "7-year prorated warranty credit",
  pumps: "General Pump: 5 yr. AR Pump: 5 yr. Comet: 5 yr. Cat Pump: 2 yr.",
  accessories: "Unloaders, switches, relief valves, trigger guns, couplers, injectors: 6 months",
  motors: "AO Smith / Baldor / Marathon: 1 year",
  fuelPump: "3 years",
  ignition: "Wayne ignitor/transformer: 2 yr. Custom Coils: 1 yr.",
  gasComponents: "Gas valve: 1 yr. Pilot couple: 1 yr.",
  process: "Fill out warranty PDF completely. Ship parts freight prepaid with form. Separate form per machine."
};

KB.alk.serviceSchool.preServiceChecklist = ["ALWAYS check cold water operation BEFORE hot water", "Inspect power cord and wiring for damage", "Check safety ground", "Check fuel supply", "Check pump oil level", "Check discharge hose", "Check drive belts", "Check for scale deposit and sooting", "Check proper burner nozzle", "Start cleaner \u2014 check for fluid leaks", "Check system pressure & unloader operation", "Check chemical delivery", "Check trigger gun and spray nozzle", "Check burner operation", "Shut off and verify proper shutdown"];

KB.alk.serviceSchool.modelNumbering = {
  hotWater: "H[GPM][PSI] + Drive + Voltage + Burner. Example: H5030 = 5 GPM, 3000 PSI",
  coldWater: "[GPM][PSI][Construction][Frame]. Example: 5355J",
  gasFired: "[GPM][PSI][Engine/Motor][Burner]. Example: 530ENG = 5 GPM, 3000 PSI, Electric, Natural Gas"
};

// ═══════════════════════════════════════════════════════════════
// ADDITIONAL SERVICE DOCUMENTATION — Extracted from PDF manuals
// Added to knowledge base for AI search indexing
// ═══════════════════════════════════════════════════════════════
KB.docs = {};

// ─── 2018 General Pump Catalog ───
KB.docs['2018 General Pump Catalog'] = `Reliability 
 
General Pump products have been industry-tested world-wide for over 35 years. General 
Pump is affiliated with the world’s largest manufacturer of high-pressure water 
plunger pumps and accessories. You can rely on General Pump’s wide range of 
products that fill many niches in the market and cater to customers’ specific needs. 
You can depend on the flexibility and efficiency of General Pump’s manufacturing and 
distribution processes. 
Versatility
General Pump offers a variety of pumps, accessory and nozzle models with flows 
up to 236 GPM and pressures to 22,000 PSI. General Pump has put millions of 
pumps into various applications over the last 35 years. These pumps are 
complemented with a broad array of accessories and nozzles to meet specific 
customer requirements. 
Economic Quality
Maintenance and repair of GP pumps and accessories is simple and inexpensive. 
When you compare the life-cycle cost of GP to others in the market, you will find 
GP products are the choice for best value. Availability of replacement parts and kits 
is always a critical issue when choosing a supplier. General Pump is a US based 
distributor/manufacturer with a full inventory of pumps, accessories, nozzles and 
repair parts ready for immediate delivery. 
Commitment to Support
General Pump has a well-trained staff including Inside and Outside Sales, Applications 
Engineering and Design Engineering groups ready to provide customers with training, 
information and support. Comprehensive training schools are held frequently at our 
world-class training facility.

Since 1982, General Pump has developed a leading position as a designer and 
manufacturer of innovative products for the power wash industry. Located at our 
manufacturing facility in Eagan, MN our dedicated engineering teams work closely 
with our OEM partners using state-of-the-art design tools and suppliers to bring to 
market the innovative, yet cost-effective solutions to meet our customer’s needs. 
In recent years the emergence of General Pump’s own Minnesota-based 
manufacturing capability has brought a new level of service to the US market. Our 
capacity has expanded and we offer a wide range of products built to order, made 
in the USA, for the American market. 
Importantly, this local market support is now the strongest in our industry, thanks 
to the financial backing of the Interpump Group, the world’s leader in high-pressure 
plunger pump technology and production. As a result, General Pump is uniquely 
positioned in the US market to engineer, manufacture and timely deliver the 
complete range of solutions required by the power wash industry. 
Dedicated Engineering
• Design teams dedicated to accessory and nozzle development 
• Source of innovative products like the Pump Thermal Protector line (PTP), the 
Dual Port Injector, the 6,000 PSI Safety Valve, the Quick Disconnect Injector line 
and Expansion Valves 
• State-of-the-art design support including 3D CAD modeling and ANSYS fluid and 
stress analysis software 
In-House Design
• Dedicated engineering resources for product customization and design support 
• Dedicated prototype shop ensures timely turnaround of new products 
• In-house machine design has provided General Pump’s manufacturing 
department with innovative assembly work stations 

TABLE OF CONTENTS
PRESSURE CLEANING PUMPS 
E1/ET Series 53 Pumps......................................................................1 PAGES 1-20
E2/EP Series 58 Pumps .....................................................................3 
E3/ES Series 59 Pumps......................................................................5 
TT 51 Series Pumps.............................................................................6 
TT/TP 51 Series Pumps......................................................................7 
TC 60 Series Pumps.............................................................................8 
TX 63 Series Pumps..........................................................................10 
EZ 44 Series Pumps..........................................................................12 
50 Series Pumps................................................................................14 
47 Series Pumps................................................................................15 
66 Series Pumps................................................................................16 
69 Series Pumps................................................................................17 
48 Series Pumps and Pumps Made Ready ...............................18 
AT and AB Series Agricultural Pumps..........................................19 
Emperor HTC and HTXS Series Pumps .......................................21 
Emperor HTS and HTF Series Pumps ..........................................22 
Emperor HTCK3623S, HTCK4050 and PEHT Series Pumps .23
Emperor HTXS and HTS Series Pumps .......................................25 
Emperor HTF and PEHT Series Pumps........................................26 
Emperor HTCK3623S and HTCK4050S Series Pumps ...........27 
CW47 Series Pumps .........................................................................28 
CW69 Series Pumps .........................................................................29
Swivels, Squeegees, Nozzle Packs................................................30 
Regulators, Balanced Relief Valves, 
Unloaders, Check Valves .................................................................31 
Accumulators, Spray Guns, Lances...............................................32 
Flow Switches, Chemical Injectors...............................................33 
Chemical Injectors.............................................................................34 
Pulse Pumps .......................................................................................35
KE, KT, KF Series Pumps ..................................................................37 
KS, HF, HS Series Pumps.................................................................38 
MW/MWS,MF, MK Series Pumps ..................................................40 
MKS, LK, KV Series Pumps..............................................................41 
VFH, VKH, SM Series Pumps ..........................................................42 
SK, Mud Pumps..................................................................................43 
Optional Gearbox ..............................................................................43 
TR, SR Series Pumps.........................................................................44 
AGGRESSIVE ENVIRONMENT PUMPS
WM, EWM TXSS Series Pumps.......................................................45 
47SS, TSFSS, KEZ, Series Pumps...................................................46 
HFN, KFZ, Series Pumps ..................................................................47 
MWN , LKN Series Pumps...............................................................48
Industrial Unloaders, Regulating Valves, 
SS Industrial Regulating Valves......................................................49 
Safety Relief Valves, Industrial Safety Valves.............................50 
Pneumatic Valves, Jetter Valves,Check Valve, 
Foot Valve, Pulsation Dampeners.................................................51 
Hose Reel Attachment, Hydro Excavating Nozzle....................52 
Industrial Spray Guns, Rotating Nozzles.....................................53 
Industrial Rotating Nozzles, Filters, Miscellaneous..................54 
Tank Cleaning Nozzles .....................................................................55
EMPEROR PUMPS 
PAGES 21-23
VEHICLE CLEANING PUMPS 
PAGES 24-29
VEHICLE CLEANING 
ACCESSORIES 
PAGES 30-35
INDUSTRIAL PUMPS 
PAGES 37-48
INDUSTRIAL ACCESSORIES 
PAGES 49-55

TABLE OF CONTENTS
ACCESSORIES 
PAGES 57-99 Hydraulic Drive
Hydraulic Drive.........................................................................................................57 
Drive Components
Gear Reducers and Multipliers, Flex Couplers, Flanges...............................58 
Pulleys and Clutches ..............................................................................................59 
Pump Oil and Oil Drain Kits.................................................................................60 
Valves
Trapped Pressure Unloaders................................................................................61 
Adjustable Trapped Pressure Unloaders ..........................................................62 
Control Set Unloaders............................................................................................63 
Flow Sensitive Unloaders......................................................................................64 
Balanced Relief and Regulating Valves.............................................................65 
Safety Relief Valves .................................................................................................66 
Expansion Valves, Pump Thermal Protectors, 
Easy Start Valves and Steam Valves...................................................................67 
Bleeder Valves, Check Valves and Needle Valves..........................................68 
Injectors
Adjustable Chemical Injectors.............................................................................69 
Quick Connect Chemical Injectors.....................................................................70 
Fixed Chemical injectors .......................................................................................71 
Fixed Injectors, Chemical Valves and Soap Shooters...................................72 
Pulse Pumps.............................................................................................................73
Spray Guns and Lances
Front Entry and Rear Entry Spray Guns.............................................................74 
Wash Down Spray guns and Spray Guns w/Lances.....................................75 
Lances and Lance Accessories ............................................................................78 
Pressure Cleaning Accessories
Flat Surface Cleaners, Hose Reels......................................................................79 
Water Brooms, Telescoping Wands, Foamers.................................................80 
Foamers, Brushes....................................................................................................81 
Spray Tips and Nozzles
Standard Spray Tips................................................................................................82 
Chemical Nozzles and Nozzle Packs .................................................................83 
Adjustable Nozzles..................................................................................................84 
Rotating Nozzles......................................................................................................85 
Rotating Nozzles and Drain Cleaning Nozzles ...............................................86 
Nozzle Holders and Steam Nozzles...................................................................88
Couplers and Fittings
Quick Disconnect Couplers..................................................................................89 
Garden Hose Fittings and Manifold Blocks .....................................................90 
Quick Disconnect Fittings .....................................................................................91 
Filters
Inline High Pressure Filters and Chemical Filters ..........................................92 
Inlet Filters Bowl Filters and Inlet Strainers.....................................................93 
Gauges and Switches
Thermostats and Pressure Switches..................................................................94 
Flow Switches, Throttle Control, Gauges..........................................................96 
Miscellaneous Accessories
Valve Caps and High Pressure Swivels .............................................................97 
Pressure Washers, Accumulators/Pulsation Dampeners, 
Floats and Tanks ......................................................................................................98 
Sandblasting Nozzles and Service Products....................................................99 
WARRANTY INFORMATION ................................................................................100 
REFERENCE INFORMATION................................................................................103 
INDEX .......................................................................................................................105

PRESSURE CLEANING
Automotive
 Municipal vehicle maintenance 
 Bug and tar removal 
 General exterior cleaning 
Surface cleaning
 Sidewalks 
 Driveways 
Household exterior cleaning
 Mildew removal 
 Storm cleanup 
 Pool decks 
 Gutter cleaning 
Pre-painting surface preparation
 Surface cleaning 
 Paint removal
Heavy equipment maintenance
 Dirt and mud removal 
 Grease and oil removal 
 Parts washing 
Contract cleaning
 Building exterior cleaning 
 Sidewalk cleaning 
 Driveway cleaning 
 Deck cleaning 
 Restaurant kitchen cleaning 
 Hood and duct cleaning 
 Mobile vehicle wash 
 Ice abatement 
 Wet sandblasting 
 General Cleaning 
 
PRESSURE CLEANING 
PUMPS

PRESSURE 
CLEANING 
PUMPS

E1/ET SERIES 53
PRESSURE CLEANING PUMPS
UP TO 3.4 GPM
Page 1
ET Series - Features:
• Triplex plunger pumps 
• Nickel-plated cast manifold manufactured like 
heavy-duty pump line 
• New generation seal package 
• New dust protection chamber 
• Solid ceramic plungers 
• New oversized plunger guide 
• New optimized inlet and outlet valves 
• New oil seal 
ET Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions...............................................8"x7.4"x4.7" 
Crankcase Oil Capacity .................................................8.5 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group..........................................................................W
ET SERIES - 24 MM SOLID SHAFT, 1750 RPM
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1509S17 2.1 GPM 2,610 PSI 1750 RPM .590 in/15 mm .370 in./9.4 mm 3.7 EBHP 11.0 lbs.
ET1807S17 2.4 GPM 2,320 PSI 1750 RPM .708 in./18 mm .283 in./7.2 mm 3.7 EBHP 11.0 lbs.
ET1511S17 2.6 GPM 2,610 PSI 1750 RPM .590 in/15 mm .452 in./11.5 mm 4.7 EBHP 11.0 lbs.
ET1512S17 2.9 GPM 2,610 PSI 1750 RPM .590 in/15 mm .472 in./12 mm 5.1 EBHP 11.0 lbs.
ET1809S17 3.2 GPM 2,320 PSI 1750 RPM .708 in./18 mm .370 in./9.4 mm 5.0 EBHP 11.0 lbs.
ET1810S17 3.4 GPM 2,320 PSI 1750 RPM .708 in./18 mm .393 in./10 mm 5.4 EBHP 11.0 lbs.
ET1811S17 3.7 GPM 2,320 PSI 1750 RPM .708 in./18 mm .433 in./11 mm 5.9 EBHP 11.0 lbs.
ET1509S17
NEW 
SERIES!
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and fixed injector - add “UIF” to end of part number.
ET SERIES - 24 MM SOLID SHAFT, 13 MM BORE, 3400 RPM
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1305S34 1.6 GPM 4,450 PSI 3400 RPM .512 in/13 mm .197 in./5 mm 4.8 EBHP 11.0 lbs.
ET1306S34 1.9 GPM 4,450 PSI 3400 RPM .512 in/13 mm .256 in./6.5 mm 5.6 EBHP 11.0 lbs.
ET1307S34 2.1 GPM 4,450 PSI 3400 RPM .512 in/13 mm .283 in./7.2 mm 6.4 EBHP 11.0 lbs.
ET1308S34 2.4 GPM 4,450 PSI 3400 RPM .512 in/13 mm .315 in./8 mm 7.2 EBHP 11.0 lbs.
ET1309S34 2.6 GPM 4,450 PSI 3400 RPM .512 in/13 mm .354 in./9 mm 8.1 EBHP 11.0 lbs.
ET1310S34 2.9 GPM 4,450 PSI 3400 RPM .512 in/13 mm .393 in./9.9 mm 8.9 EBHP 11.0 lbs.
ET1311S34 3.1 GPM 4,450 PSI 3400 RPM .512 in/13 mm .433 in./11 mm 9.7 EBHP 11.0 lbs.
ET1312S34 3.4 GPM 4,450 PSI 3400 RPM .512 in/13 mm .453 in./11.5 10.5 EBHP 11.0 lbs.
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and fixed injector - add “UIF” to end of part number.
ET SERIES - 24 MM SOLID SHAFT, 15 MM BORE, 3400 RPM
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1505S34 2.1 GPM 2,610 PSI 3400 RPM .591 in/15 mm .197 in./5 mm 3.7 EBHP 11.0 lbs.
ET1506S34 2.6 GPM 2,610 PSI 3400 RPM .591 in/15 mm .256 in./6.5 mm 4.7 EBHP 11.0 lbs.
ET1507S34 3.2 GPM 2,610 PSI 3400 RPM .591 in/15 mm .283 in./7.2 mm 5.6 EBHP 11.0 lbs.
ET1508S34 3.4 GPM 2,610 PSI 3400 RPM .591 in/15 mm .315 in./8 mm 6.1 EBHP 11.0 lbs.
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and fixed injector - add “UIF” to end of part number.
PRESSURE CLEANING 
PUMPS

E1/ET SERIES 53
PRESSURE CLEANING PUMPS
UP TO 3.4 GPM
Page 2
ET SERIES - HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA56C)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1509E17 2.1 GPM 2,610 PSI 1700 RPM .591 in./15 mm .370 in./9.4 mm 3.7 EBHP 11.0 lbs.
ET1807E17 2.4 GPM 2,320 PSI 1700 RPM .708 in./18 mm .283 in./7.2 mm 3.8 EBHP 11.0 lbs.
ET1809E17 3.2 GPM 2,320 PSI 1700 RPM .708 in./18 mm .370 in./9.4 mm 5.0 EBHP 11.0 lbs.
ET1504E34 1.85 GPM 2,610 PSI 3400 RPM .591 in./15 mm .157 in./4 mm 3.6 EBHP 11.0 lbs.
ET1505E34 2.1 GPM 2,610 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 3.7 EBHP 11.0 lbs.
ET1506E34 2.9 GPM 2,610 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 5.2 EBHP 11.0 lbs.
ET1507E34 3.2 GPM 2,610 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 5.6 EBHP 11.0 lbs.
ET Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft ....................................................................5/8 in. 
Pump Dimensions...........................................7.3"x7.4"x5.5"
ET1509E17
NEW 
SERIES!
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and fixed injector - add “UIF” to end of part number.
ET SERIES - HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1505G6 2.1 GPM 2,610 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 5.7 GHP 11.0 lbs.
ET1506G6 2.9 GPM 2,610 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 7.7 GHP 11.0 lbs.
ET1507G6 3.3 GPM 2,610 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 8.6 GHP 11.0 lbs.
ET1508G6 3.4 GPM 2,610 PSI 3400 RPM .591 in./15 mm .315 in./8 mm 9.1 GHP 11.0 lbs.
ET Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions...........................................7.4"x7.7"x3.3"
ET1506G6
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and fixed injector - add “UIF” to end of part number.
PRESSURE 
CLEANING 
PUMPS
ET Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft ....................................................................5/8 in. 
Pump Dimensions...............................................8"x7.4"x4.7"
ET SERIES - HOLLOW SHAFT FEATURING TOTAL START-STOP, BUILT-IN UNLOADER, PRESSURE SWITCH AND CHEMICAL INJECTOR 
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ET1509E17UTS 2.1 GPM 2,610 PSI 1700 RPM .591 in./15 mm .370 in./9.4 mm 3.7 EBHP
ET1305E34UTS 1.6 GPM 4,450 PSI 3400 RPM .511 in./13 mm .197 in./5 mm 4.9 EBHP 11.0 lbs.
ET1504E34UTS 2.0 GPM 2,610 PSI 3400 RPM .591 in./15 mm .157 in./4 mm 3.6 EBHP 11.0 lbs.
ET1504E34UTSL 2.0 GPM 2,610 PSI 3400 RPM .591 in./15 mm .157 in./4 mm 3.6 EBHP 11.0 lbs.
ET1505E34UTSL 2.1 GPM 2,610 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 3.8 EBHP 11.0 lbs.
ET1506E34UTSL 2.9 GPM 2,610 PSI 3400 RPM .591 in./15 mm .236 in./6 mm 5.2 EBHP 11.0 lbs.
• Total start-stop feature 
• Right side shaft, left side manifold (S), 
 or left side shaft, right side manifold 
 (SL) 
• Build-in unloader
ET1305E34UTS

E2/EP SERIES 58
PRESSURE CLEANING PUMPS
UP TO 4.2 GPM
Page 3
EP Series - Features:
• Triplex plunger pumps 
• Advanced forged brass manifold increases working 
pressure to 4,000 PSI 
• Patent-pending plunger guide bushing 
• Solid ceramic plungers with innovative dual glide system 
• Optimized outlet valves 
• New dual lip oil seal 
EP Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................9.5"x8.38"x5.1" 
Crankcase Oil Capacity...............................................15.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group..........................................................................W
EP SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EP1510S17 2.4 GPM 3,045 PSI 1750 RPM .591 in./15 mm .394 in./10 mm 5.0 EBHP 15.4 lbs.
EP1512S17 2.9 GPM 3,045 PSI 1750 RPM .591 in./15 mm .472 in./12 mm 6.0 EBHP 15.4 lbs.
EP1513S17 3.2 GPM 3,045 PSI 1750 RPM .591 in./15 mm .512 in./13 mm 6.6 EBHP 15.4 lbs.
EP1810S17 3.4 GPM 2,500 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 5.8 EBHP 15.4 lbs.
EP1811S17 3.7 GPM 2,500 PSI 1750 RPM .709 in./18 mm .433 in./11 mm 6.3 EBHP 15.4 lbs.
EP1812S17 4.0 GPM 2,500 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 6.8 EBHP 15.4 lbs.
EP1813S17 4.2 GPM 2,900 PSI 1750 RPM .709 in./18 mm .512 in./13 mm 8.3 EBHP 15.4 lbs.
EP1313S17 2.4 GPM 4,000 PSI 1750 RPM .512 in./13 mm .512 in./13 mm 6.5 EBHP 15.4 lbs.
EP1505S34 2.1 GPM 3,045 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 4.4 EBHP 15.4 lbs.
EP1506S34 2.9 GPM 3,045 PSI 3400 RPM .591 in./15 mm .236 in./6.5 mm 6.0 EBHP 15.4 lbs.
EP1508S34 3.4 GPM 3,045 PSI 3400 RPM .591 in./15 mm .315 in./8 mm 7.1 EBHP 15.4 lbs.
EP1510S34 4.2 GPM 3,045 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 8.8 EBHP 15.4 lbs.
EP1306S34 2.1 GPM 4,000 PSI 3400 RPM .512 in./13 mm .236 in./6.5 mm 5.8 EBHP 15.4 lbs.
EP1308S34 2.6 GPM 4,000 PSI 3400 RPM .512 in./13 mm .394 in./10 mm 7.1 EBHP 15.4 lbs.
EP1310S34 3.2 GPM 4,000 PSI 3400 RPM .512 in./13 mm .394 in./10 mm 8.8 EBHP 15.4 lbs.
EP1311S34 3.4 GPM 4,000 PSI 3400 RPM .512 in./13 mm .433 in./11 mm 9.3 EBHP 15.4 lbs.
EP1313S34 4.0 GPM 4,000 PSI 3400 RPM .512 in./13 mm .512 in./13 mm 10.9 EBHP 15.4 lbs.
EP1510S17
EP Series - Hollow Shaft - Specifications:
Hollow Shaft ................................................1-1/8 (1.125) in. 
Pump Dimensions......................................9.5"x 8.38"x 5.1" 
EP SERIES - 1-1/8 (1.125)" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EP1510E17 2.4 GPM 3,045 PSI 1750 RPM .591 in./15 mm .394 in./10 mm 5.0 EBHP 15.8 lbs.
EP1512E17 2.9 GPM 3,045 PSI 1750 RPM .591 in./15 mm .472 in./12 mm 6.0 EBHP 15.8 lbs.
EP1810E17 3.4 GPM 2,500 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 5.8 EBHP 15.8 lbs.
EP1811E17 3.7 GPM 2,500 PSI 1750 RPM .709 in./18 mm .433 in./11 mm 6.3 EBHP 15.8 lbs.
EP1812E17 4.0 GPM 2,500 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 6.8 EBHP 15.8 lbs.
EP1510E17
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and injector - add “UIF” to end of part number.
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and injector - add “UIF” to end of part number.
PRESSURE 
CLEANING 
PUMPS

E2/EP SERIES 58
PRESSURE CLEANING PUMPS
UP TO 4.2 GPM
Page 4
EP SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EP1505G6 2.1 GPM 3,045 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 6.6 GHP 15.8 lbs.
EP1506G6 2.9 GPM 3,045 PSI 3400 RPM .591 in./15 mm .236 in./6 mm 9.0 GHP 15.8 lbs.
EP1508G6 3.4 GPM 3,045 PSI 3400 RPM .591 in./15 mm .315 in./8 mm 10.9 GHP 15.8 lbs.
EP Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions ........................................9.5"x8.38"x5.1"
EP1506G6
EP SERIES - 1" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EP1506G8 2.9 GPM 3,045 PSI 3400 RPM .591 in./15 mm .236 in./6 mm 9.0 GHP 15.9 lbs.
EP1508G8 3.4 GPM 3,045 PSI 3400 RPM .591 in./15 mm .315 in./8 mm 10.6 GHP 15.9 lbs.
EP1509G8 3.7 GPM 3,000 PSI 3400 RPM .591 in./15 mm .354 in./9 mm 11.4 GHP 15.9 lbs.
EP1510G8 4.2 GPM 3,000 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 13.0 GHP 15.9 lbs.
EP1306G8 2.1 GPM 4,000 PSI 3400 RPM .512 in./13 mm .236 in./6 mm 8.6 GHP 15.9 lbs.
EP1308G8 2.6 GPM 4,000 PSI 3400 RPM .512 in./13 mm .315 in./8 mm 10.7 GHP 15.9 lbs.
EP1309G8 2.9 GPM 4,000 PSI 3400 RPM .512 in./13 mm .354 in./9 mm 11.9 GHP 15.9 lbs.
EP1310G8 3.2 GPM 4,000 PSI 3400 RPM .512 in./13 mm .394 in./10 mm 13.2 GHP 15.9 lbs.
EP1311G8 3.4 GPM 4,000 PSI 3400 RPM .512 in./13 mm .433 in./11 mm 14.0 GHP 15.9 lbs.
EP1313G8 4.0 GPM 4,000 PSI 3400 RPM .512 in./13 mm .512 in./13 mm 16.4 GHP 15.9 lbs.
EP Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.........................................................................1 in. 
Pump Dimensions ........................................9.5"x8.38"x5.1"
EP1506G8
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and injector - add “UIF” to end of part number.
Available with built-in unloader - add “U” to end of part number. 
Available with built-in unloader and injector - add “UIF” to end of part number (ex. EP1313G8UIF would 
have the same specifications as the EP1313G8, with a builit-in unloader and fixed injector - see photo below).
PRESSURE 
CLEANING 
PUMPS

E3/ES SERIES 59
PRESSURE CLEANING PUMPS
UP TO 5.5 GPM
Page 5
ES Series - Features:
• Triplex plunger pumps 
• Forged brass manifold 
• Patent-pending plunger guide bushing 
• Solid ceramic plungers with innovative dual glide system 
• Optimized outlet valves 
• Exclusive protection chamber between crankcase and 
manifold 
• New dual lip oil seal 
ES Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................10.4"x8.8"x5.4" 
Crankcase Oil Capacity...............................................22.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group..........................................................................W
ES2212S
ES SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ES2212S 4.76 GPM 3,000 PSI 1450 RPM .866 in./22 mm .472 in./12 mm 9.8 EBHP 21.0 lbs.
ES2213S 5.55 GPM 3,000 PSI 1450 RPM .866 in./22 mm .512 in./13 mm 11.45 EBHP 21.0 lbs.
ES1810S 3.43 GPM 4,000 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 9.4 EBHP 21.0 lbs.
ES2010S 3.96 GPM 4,000 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 10.9 EBHP 21.0 lbs.
ES2012S 4.76 GPM 4,000 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 13.0 EBHP 21.0 lbs.
ES2013S 5.55 GPM 3,600 PSI 1750 RPM .787 in./20 mm .512 in./13 mm 13.6 EBHP 21.0 lbs.
ES Series - Solid Shaft - Nickel-Plated Specifications:
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................10.4"x8.8"x5.4" 
ESN2212S
ES SERIES - 24 MM SOLID SHAFT - NICKEL-PLATED
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ESN2212S 4.76 GPM 3,045 PSI 1450 RPM .866 in./22 mm .472 in./12 mm 9.8 EBHP 21.0 lbs.
ESN2213S 5.55 GPM 4,000 PSI 1450 RPM .866 in./22 mm .512 in./13 mm 11.5 EBHP 21.0 lbs.
ESN1810S 3.43 GPM 4,000 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 9.4 EBHP 21.0 lbs.
ESN2010S 3.96 GPM 4,000 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 10.9 EBHP 21.0 lbs.
ESN2012S 4.76 GPM 4,000 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 13.0 EBHP 21.0 lbs.
ESN2013S 5.55 GPM 3,625 PSI 1750 RPM .787 in./20 mm .512 in./13 mm 13.6 EBHP 21.0 lbs.
ES Series - Nickel-Plated - Flanged for Gas Engines Specifications:
Shaft Diameter.....................................................................1 in. 
Pump Dimensions......................................10.4"x10.3"x4.8" 
ESN1310G
ES SERIES - 1" HOLLOW SHAFT - NICKEL-PLATED, FLANGED FOR GASOLINE ENGINES (SAE J609B) 
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
ESN1310G 3.43 GPM 4,000 PSI 3400 RPM .512 in./13 mm .394 in./10 mm 14.0 GHP 21.0 lbs.
ESN1313G 3.96 GPM 4,000 PSI 3400 RPM .512 in./13 mm .512 in./13 mm 16.3 GHP 21.0 lbs.
ESN1510G 4.49 GPM 3,625 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 16.7 GHP 21.0 lbs.
ESN1512G 5.28 GPM 3,625 PSI 3400 RPM .591 in./15 mm .472 in./12 mm 19.7 GHP 21.0 lbs.
PRESSURE CLEANING 
PUMPS

51 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 6
51 Series - Features:
• Triplex plunger pumps 
• Forged brass manifold with an exclusive lifetime warranty 
• Die-cast, anodized aluminum oil-bath crankcase 
• Solid ceramic plungers with continuously lubricated 
packings 
• Unitized, stainless steel inlet and outlet valves 
• Ideal for all general cleaning and misting applications
51 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread..............................................3/8"-19 BSP-F 
Discharge Port Thread....................................1/4"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................7.0"x 6.9"x 5.1" 
Crankcase Oil Capacity...............................................11.2 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group...........................................................................U
51 SERIES - 24 MM SOLID SHAFT FOR PULLEY MOUNT OR DIRECT DRIVE WITH FLEX COUPLER AND BELL HOUSING
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TT9111 3.0 GPM 1,500 PSI 1750 RPM .708 in./18 mm .370 in./9.4 mm 3.1 EBHP 11.2 lbs.
TT901 2.11 GPM 1,500 PSI 2800 RPM .591 in./15 mm .236 in./6.0 mm 2.2 EBHP 11.2 lbs.
TT951 2.5 GPM 1,500 PSI 2800 RPM .591 in./15 mm .283 in./7.2 mm 2.6 EBHP 11.2 lbs.
TT931 2.9 GPM 1,500 PSI 2800 RPM .591 in./15 mm .315 in./8.0 mm 3.0 EBHP 11.2 lbs.
TT941 3.43 GPM 1,500 PSI 2800 RPM .591 in./15 mm .370 in./9.4 mm 3.5 EBHP 11.2 lbs.
540014 Optional Rail
TT901
51 SERIES - 5/8" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C) - WITH BUILT-IN UNLOADER
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
T9051EBFU 2.11 GPM 1,500 PSI 1750 RPM .591 in/15 mm .370 in./9.4 mm 2.2 EBHP 12.0 lbs.
TT9061EBFU 2.11 GPM 1,500 PSI 3400 RPM .591 in/15 mm .197 in./5.0 mm 2.2 EBHP 12.0 lbs.
TT9071EBFU 2.8 GPM 1,500 PSI 3400 RPM .591 in/15 mm .260 in./6.6 mm 2.9 EBHP 12.0 lbs.
 Pump with Built-in Unloader and Downstream Injector
T9051EBFUI 2.11 GPM 1,500 PSI 1750 RPM .591 in/15 mm .370 in./9.4 mm 2.2 EBHP 12.0 lbs.
TT9061EBFUI 2.11 GPM 1,500 PSI 3400 RPM .591 in/15 mm .197 in./5.0 mm 2.2 EBHP 12.0 lbs.
TT9071EBFUI 2.8 GPM 1,500 PSI 3400 RPM .591 in/15 mm .260 in./6.6 mm 2.9 EBHP 12.0 lbs.
51 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C) - W/ B/I BUILT-IN UNLOADER AND DOWNSTREAM INJECTOR
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TT2035EBFUI 3.5 GPM 2,000 PSI 3400 RPM .591 in/15 mm .315 in./8.0 mm 4.8 EBHP 12.0 lbs.
51 SERIES - 5/8" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
T9051EBF 2.11 GPM 1,500 PSI 1750 RPM .591 in./15 mm .370 in./9.4 mm 2.2 EBHP 11.5 lbs.
TT9111EBF 3.0 GPM 1,500 PSI 1750 RPM .709 in./18 mm .370 in./9.4 mm 3.1 EBHP 11.5 lbs.
TT2021EBF 2.1 GPM 2,000 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 2.9 EBHP 11.5 lbs.
TT9061EBF 2.11 GPM 1,500 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 2.2 EBHP 11.5 lbs.
TT2028EBF 2.8 GPM 2,000 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 3.8 EBHP 11.5 lbs.
TT9071EBF 2.8 GPM 1,500 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 2.9 EBHP 11.5 lbs.
51 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TT2035EBF 3.5 GPM 2,000 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 4.8 EBHP 11.5 lbs.
51 Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft ......................5/8 (.625) in. or 3/4 (.750) in. 
Pump Dimensions ........................................7.0"x 7.2"x 5.5"
TT2021EBF
51 Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft ......................5/8 (.625) in. or 3/4 (.750) in. 
Pump Dimensions...........................................7.0"x7.2"x8.0"
TT9061EBFUI
PRESSURE 
CLEANING 
PUMPS

51 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 7
TT9061GBF
51 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TT9061GBF 2.11 GPM 1,500 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 3.3 GHP 11.4 lbs.
TT2028GBF 2.8 GPM 2,000 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 5.8 GHP 11.4 lbs.
TT9071GBF 2.8 GPM 1,500 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 4.3 GHP 11.4 lbs.
TT2035GBF 3.5 GPM 2,000 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 7.2 GHP 11.4 lbs.
TT1540GBF 4.0 GPM 1,500 PSI 3400 RPM .591 in./15 mm .370 in./9.4 mm 6.2 GHP 11.4 lbs.
51 Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions ........................................7.2"x 7.2"x 5.5"
TP2520J34
51 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TP2520J34 1.9 GPM 2,500 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 4.9 GHP 11.4 lbs.
TP2526J34 2.6 GPM 2,500 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 6.7 GHP 11.4 lbs.
TP2530J34 2.88 GPM 2,500 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 7.4 GHP 11.4 lbs.
TP2533J34 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 8.5 GHP 11.4 lbs.
51 Series - Hollow Shaft -Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions ........................................7.0"x 7.2"x 5.5"
TP2530J34UIL
51 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A), WITH BUILT-IN UNLOADER AND DOWNSTREAM INJECTOR
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TP2520J34UIL 1.9 GPM 2,500 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 4.9 GHP 11.4 lbs.
TP2526J34UIL 2.6 GPM 2,700 PSI 3400 RPM .591 in./15 mm .260 in./6.6 mm 7.2 GHP 11.4 lbs.
TP2530J34UIL 2.88 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 8.0 GHP 11.4 lbs.
TP2533J34UIL 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 8.5 GHP 11.4 lbs.
51 Series - Hollow Shaft -Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions...........................................7.0"x7.2"x5.5"
PRESSURE CLEANING 
PUMPS

60 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 8
60 Series - Features:
• Triplex plunger pumps 
• Compact design 
• Forged brass manifold with an exclusive lifetime warranty 
• Long life, low pressure seals 
• Oversized bearings and sight glass 
60 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Gauge Port............................................................................1/8" 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................7.6"x 8.0"x 4.9" 
Crankcase Oil Capacity...............................................11.8 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group...........................................................................U
60 SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TC1509S17 1.75 GPM 2,500 PSI 1450 RPM .591 in./15 mm .370 in./9.4 mm 3.0 EBHP 15.2 lbs.
2.1 GPM 2,500 PSI 1750 RPM .591 in./15 mm .370 in./9.4 mm 3.6 EBHP 15.2 lbs.
TC1511S17 2.1 GPM 2,500 PSI 1450 RPM .591 in./15 mm .453 in./11.5 mm 3.6 EBHP 15.2 lbs.
2.6 GPM 2,500 PSI 1750 RPM .591 in./15 mm .453 in./11.5 mm 4.45 EBHP 15.2 lbs.
TC1809S17 2.5 GPM 2,200 PSI 1450 RPM .709 in./18 mm .370 in./9.4 mm 3.77 EBHP 15.2 lbs.
3.1 GPM 2,200 PSI 1750 RPM .709 in./18 mm .370 in./9.4 mm 4.67 EBHP 15.2 lbs.
TC1811S17 3.25 GPM 2,200 PSI 1450 RPM .709 in./18 mm .453 in./11.5 mm 4.9 EBHP 15.2 lbs.
3.9 GPM 2,200 PSI 1750 RPM .709 in./18 mm .453 in./11.5 mm 5.88 EBHP 15.2 lbs.
TC1507S34 3.0 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 5.55 EBHP 15.2 lbs.
TC1508S34 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 5.65 EBHP 15.2 lbs.
TC1509S17
60 Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft .......................5/8 (.625)in. or 3/4 (.750) in. 
Pump Dimensions ........................................7.8"x 7.3"x 5.5"
60 SERIES - 5/8" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TC1502E175 0.25 GPM 2,500 PSI 1750 RPM .591 in./15 mm .079 in./2.0 mm 0.5 EBHP 15.1 lbs.
TC1802E175 0.5 GPM 2,200 PSI 1750 RPM .709 in./18 mm .079 in./2.0 mm 0.8 EBHP 15.1 lbs.
TC1508E175 1.75 GPM 2,500 PSI 1750 RPM .591 in./15 mm .315 in./8.0 mm 3.0 EBHP 15.1 lbs.
TC1509E175 2.10 GPM 2,500 PSI 1750 RPM .591 in./15 mm .370 in./9.4 mm 3.6 EBHP 15.1 lbs.
TC1809E175 3.10 GPM 2,200 PSI 1750 RPM .709 in./18 mm .370 in./9.4 mm 4.7 EBHP 15.1 lbs.
TC1504E345 1.75 GPM 2,700 PSI 3400 RPM .591 in./15 mm .158 in./4.0 mm 3.2 EBHP 15.1 lbs.
TC1505E345 2.1 GPM 2,700 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 3.88 EBHP 15.1 lbs.
TC1506E345 2.6 GPM 2,700 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 4.81 EBHP 15.1 lbs.
TC1507E345 3.0 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 5.55 EBHP 15.1 lbs.
TC1508E175
60 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA 56C)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TC1506E346 2.6 GPM 2,700 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 4.81 EBHP 15.1 lbs.
TC1507E346 3.0 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 5.55 EBHP 15.1 lbs.
TC1508E346 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 5.65 EBHP 15.1 lbs.
PRESSURE 
CLEANING 
PUMPS

60 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 9
TC1506G
60 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TC1506G 2.6 GPM 2,700 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 7.21 GHP 14.6 lbs.
TC1507G 3.0 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 8.32 GHP 14.6 lbs.
TC1508G 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 8.48 GHP 14.6 lbs.
TC1509G 4.0 GPM 2,500 PSI 3400 RPM .591 in./15 mm .370 in./9.4 mm 10.27 GHP 14.6 lbs.
60 Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions...........................................7.6"x7.6"x5.1"
TC1506GUI
60 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609A) w/ BUILT-IN TRAPPED PRESSURE UNLOADER
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TC1506GUI 2.6 GPM 2,700 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 7.21 GHP 16.0 lbs.
TC1507GUI 3.0 GPM 2,700 PSI 3400 RPM .591 in./15 mm .283 in./7.2 mm 8.32 GHP 16.0 lbs.
TC1508GUI 3.3 GPM 2,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 8.48 GHP 16.0 lbs.
TC1509GUI 4.0 GPM 2,500 PSI 3400 RPM .591 in./15 mm .370 in./9.4 mm 10.27 GHP 16.0 lbs.
60 Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions ........................................10.4"x8.0"x7.7"
PRESSURE CLEANING 
PUMPS

63 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 10
63 Series - Features:
• Triplex plunger pumps 
• Forged brass manifold with an exclusive lifetime warranty 
• Large, lightweight connecting rods 
• Long life, low and high pressure seals 
• Oversized bearings and sight glass 
• Flex coupling and bell housing available for direct drive 
63 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Gauge Port............................................................................1/8" 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions...........................................8.4"x8.3"x4.8" 
Crankcase Oil Capacity...............................................14.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group..........................................................................W
63 SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TX1512S17 2.6 GPM 3,000 PSI 1750 RPM .591 in./15 mm .472 in./12 mm 5.3 EBHP 19.0 lbs.
TX1513S17 3.0 GPM 3,000 PSI 1750 RPM .591 in./15 mm .512 in./13 mm 6.2 EBHP 19.0 lbs.
TX1810S17 3.2 GPM 2,500 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 4.2 EBHP 19.0 lbs.
TX1812S17 3.8 GPM 2,500 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 5.2 EBHP 19.0 lbs.
TX1813S17 4.1 GPM 2,500 PSI 1750 RPM .709 in./18 mm .512 in./13 mm 5.6 EBHP 19.0 lbs.
TX1506S34 2.6 GPM 3,000 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 5.3 EBHP 19.0 lbs.
TX1508S34 3.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 6.2 EBHP 19.0 lbs.
TX1510S34 4.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 8.2 EBHP 19.0 lbs.
TX1812S17
63 Series - Hollow Shaft -Electric- Specifications:
Hollow Shaft ................................................1-1/8 (1.125) in. 
Pump Dimensions...........................................8.6"x7.9"x5.7"
63 SERIES - 1-1/8 (1.125)" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA-184TC)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TX1512E179 2.6 GPM 3,000 PSI 1750 RPM .591 in./15 mm .472 in./12 mm 5.3 EBHP 18.0 lbs.
TX1810E179 3.2 GPM 2,500 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 4.4 EBHP 18.0 lbs.
TX1812E179 3.8 GPM 2,500 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 5.2 EBHP 18.0 lbs.
TX1510E349 2.0 GPM 3,000 PSI 1750 RPM .591 in./15 mm .394 in./10 mm 4.3 EBHP 18.0 lbs.
4.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 8.2 EBHP 18.0 lbs.
TX1512E179
PRESSURE 
CLEANING 
PUMPS

63 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 11
TX1506G6
63 SERIES - 3/4" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609B)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TX1505G6 2.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .197 in./5.0 mm 6.2 GHP 18.0 lbs.
TX1506G6 2.6 GPM 3,000 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 8.0 GHP 18.0 lbs.
TX1508G6 3.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 9.2 GHP 18.0 lbs.
63 Series - 3/4" Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.......................................................3/4 (.750) in. 
Pump Dimensions...........................................8.4"x8.3"x4.8"
TX1506G8
63 SERIES - 1" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609B)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TX1506G8 2.6 GPM 3,000 PSI 3400 RPM .591 in./15 mm .256 in./6.5 mm 8.0 GHP 18.0 lbs.
TX1508G8 3.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 9.2 GHP 18.0 lbs.
TX1509G8 3.5 GPM 3,000 PSI 3400 RPM .591 in./15 mm .355 in./9.0 mm 10.8 GHP 18.0 lbs.
TX1510G8 4.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 12.3 GHP 18.0 lbs.
63 Series - 1" Hollow Shaft - Gasoline - Specifications:
Hollow Shaft..........................................................................1in. 
Pump Dimensions...........................................8.4"x8.3"x4.8"
TX1508G8UIA
63 SERIES - 1" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609B) - WITH BUILT-IN TP UNLOADER AND FIXED, DOWNSTREAM INJECTOR
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TX1508G8UIA 3.0 GPM 3,500 PSI 3400 RPM .591 in./15 mm .315 in./8.0 mm 10.8 GHP 18.2 lbs.
TX1509G8UIA 3.5 GPM 3,500 PSI 3400 RPM .591 in./15 mm .355 in./9.0 mm 12.6 GHP 18.2 lbs.
TX1510G8UIA 4.0 GPM 3,500 PSI 3400 RPM .591 in./15 mm .394 in./10 mm 13.0 GHP 18.2 lbs.
63 Series - 1" Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.........................................................................1 in. 
Pump Dimensions...........................................8.4"x8.3"x4.8" 
Inlet Port Thread.....................................................1/2" NPT-F 
Discharge Port Thread..........................................3/8" NPT-F 
PRESSURE 
CLEANING 
PUMPS

EZ SERIES 44
PRESSURE CLEANING PUMPS
UP TO 5.5 GPM
Page 12
EZ Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions...........................................8.8"x8.8"x6.3" 
Crankcase Oil Capacity...............................................14.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group..........................................................................W
EZ SERIES 44 - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EZ2536S 3.6 GPM 2,500 PSI 1750 RPM .708 in./18 mm .433 in./11 mm 6.2 EBHP 18.0 lbs.
EZ2542S 4.2 GPM 2,500 PSI 1750 RPM .708 in./18 mm .512 in./13 mm 7.2 EBHP 18.0 lbs.
EZ3040S 4.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .374 in./9.5 mm 8.2 EBHP 18.0 lbs.
EZ2545S 4.6 GPM 2,500 PSI 3400 RPM .591 in./15 mm .433 in./11 mm 7.9 EBHP 18.0 lbs.
EZ2555S 5.5 GPM 2,500 PSI 3400 RPM .591 in./15 mm .512 in./13 mm 9.4 EBHP 18.0 lbs.
 Premium Roller Bearings
EZ3042S 4.2 GPM 3,000 PSI 1750 RPM .708 in./18 mm .512 in./13 mm 8.6 EBHP 18.0 lbs.
 Pump Includes Built-in Unloader and Downstream Injector
EZ2530SUI 3.0 GPM 2,500 PSI 1750 RPM .591 in./15 mm .512 in./13 mm 5.1 EBHP 19.0 lbs.
 Nickel-Plated (pictured above)
EZ3036SN 3.6 GPM 3,000 PSI 1750 RPM .708 in./18 mm .433 in./11 mm 7.4 EBHP 18.0 lbs.
EZ2542SN 4.2 GPM 2,650 PSI 1750 RPM .708 in./18 mm .512 in./13 mm 7.6 EBHP 18.0 lbs.
EZ3036SN
EZ Series - Hollow Shaft - Electric - Specifications:
Hollow Shaft ................................................1-1/8 (1.125) in. 
Pump Dimensions...........................................8.8"x8.8"x6.3" 
EZ SERIES 44 - 1-1/8 (1.125)" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO ELECTRIC MOTORS (NEMA-184TC)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EZ2536E 3.6 GPM 2,500 PSI 1750 RPM .708 in./18 mm .433 in./11 mm 6.2 EBHP 18.5 lbs.
EZ2542E 4.2 GPM 2,500 PSI 1750 RPM .708 in./18 mm .512 in./13 mm 7.2 EBHP 18.5 lbs.
EZ2545E 4.6 GPM 2,500 PSI 3400 RPM .591 in./15 mm .433 in./11 mm 7.9 EBHP 18.5 lbs.
EZ2555E 5.5 GPM 2,500 PSI 3400 RPM .591 in./15 mm .512 in./13 mm 9.4 EBHP 18.5 lbs.
EZ4035E34 3.5 GPM 4,000 PSI 3400 RPM .512 in./13 mm .433 in./11 mm 9.6 EBHP 18.5 lbs.
EZ4040E34 4.0 GPM 4,000 PSI 3400 RPM .512 in./13 mm .512 in./13 mm 11.0 EBHP 18.5 lbs.
 Pump Includes Unloader and Downstream Injector
EZ2536EUI 3.6 GPM 2,500 PSI 1750 RPM .708 in./18 mm .433 in./11 mm 6.2 EBHP 18.5 lbs.
EZ2536E
EZ Series - Features:
• Triplex plunger pumps 
• Forged brass manifold with an exclusive lifetime warranty 
• Solid ceramic plunger design 
• Die-cast, anodized aluminum oil bath crankcase 
• Premium roller bearings 
• Flex coupling and bell housing available for direct drive 
• Unitized stainless steel inlet and discharge valves 
PRESSURE 
CLEANING 
PUMPS

EZ SERIES 44
PRESSURE CLEANING PUMPS
UP TO 5.5 GPM
Page 13
EZ3040G
EZ SERIES - 1" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609B)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EZ3030G34 3.0 GPM 3,200 PSI 3400 RPM .591 in./15 mm .299 in./7.6 mm 9.9 GHP 19.1 lbs.
EZ3035G 3.5 GPM 3,000 PSI 3400 RPM .591 in./15 mm .335 in./8.5 mm 10.8 GHP 19.1 lbs.
EZ3040G 4.0 GPM 3,000 PSI 3400 RPM .591 in./15 mm .374 in./9.5 mm 12.3 GHP 19.1 lbs.
EZ3045G 4.6 GPM 3,000 PSI 3400 RPM .591 in./15 mm .433 in./11 mm 14.2 GHP 19.1 lbs.
EZ4030G34 3.0 GPM 4,000 PSI 3400 RPM .512 in./13 mm .374 in./9.5 mm 12.3 GHP 20.0 lbs.
EZ4035G34 3.5 GPM 4,000 PSI 3400 RPM .512 in./13 mm .433 in./11 mm 14.4 GHP 20.0 lbs.
EZ4040G 4.0 GPM 4,000 PSI 3400 RPM .512 in./13 mm .512 in./13 mm 16.4 GHP 20.0 lbs.
EZ Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.........................................................................1 in. 
Pump Dimensions...........................................8.8"x9.4"x6.5"
EZ3040GUI
EZ SERIES - 1" HOLLOW SHAFT, FLANGED FOR DIRECT COUPLE TO GASOLINE ENGINES (SAE J609B) WITH BUILT-IN TP UNLOADER AND DOWNSTREAM INJECTOR
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
EZ3030G34UI 3.0 GPM 3,500 PSI 3400 RPM .591 in./15 mm .299 in./7.6 mm 10.8 GHP 19.3 lbs.
EZ3035GUI 3.5 GPM 3,500 PSI 3400 RPM .591 in./15 mm .335 in./8.5 mm 12.6 GHP 19.3 lbs.
EZ3040GUI 4.0 GPM 3,500 PSI 3400 RPM .591 in./15 mm .374 in./9.5 mm 14.4 GHP 19.3 lbs.
EZ Series - Hollow Shaft - Gasoline - Specifications:
Hollow Shaft.........................................................................1 in. 
Pump Dimensions...........................................8.8"x9.7"x6.5" 
PRESSURE CLEANING 
PUMPS

50 SERIES
PRESSURE CLEANING PUMPS
UP TO 4.0 GPM
Page 14
50 Series - Features:
• Triplex plunger pumps 
• Forged brass manifold with an exclusive lifetime 
warranty 
• Solid ceramic plunger design with continuously 
lubricated packings 
• Die-cast, anodized aluminum oil-bath crankcase 
• Standard 24 mm solid shaft for pulley mounting 
• Flex coupling and bell housing available for direct drive 
• Unitized stainless steel inlet and discharge valves 
• Ideal for all general cleaning/washing applications
50 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................9.3"x 8.3"x 5.4" 
Crankcase Oil Capacity...............................................15.2 oz. 
 Use GP Series 100 Oil (see page 60) 
Use GP Series 8090 Oil (T9971) (see page 60) 
Product Group..........................................................................W
T991
50 SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
T991 3.5 GPM 1,500 PSI 1450 RPM .787 in./20 mm .394 in./10 mm 3.6 EBHP 19.0 lbs.
4.0 GPM 1,100 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 3.0 EBHP 19.0 lbs.
T9951 3.5 GPM 1,500 PSI 1750 RPM .787 in./20 mm .335 in./8.5 mm 3.6 EBHP 19.0 lbs.
T9971 4.0 GPM 2,000 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 5.5 EBHP 19.0 lbs.
TT9351 3.5 GPM 2,500 PSI 3400 RPM .591 in./15 mm .335 in./8.5 mm 6.0 EBHP 19.0 lbs.
 T991 With Teflon Packings:
100648 3.5 GPM 1,500 PSI 1450 RPM .787 in./20 mm .394 in./10 mm 3.6 EBHP 19.0 lbs.
 T9951 With Teflon Packings:
100656 3.5 GPM 1,500 PSI 1750 RPM .787 in./20 mm .335 in./8.5 mm 3.6 EBHP 19.0 lbs.
 Pump With Gearbox
T991GR 3.5 GPM 1,500 PSI 3400 RPM .787 in./20 mm .394 in./10 mm 5.4 EBHP 24.0 lbs.
T9971GR 3.5 GPM 1,500 PSI 3400 RPM .787 in./20 mm .394 in./10 mm 7.2 EBHP 24.0 lbs.
PRESSURE 
CLEANING 
PUMPS

47 SERIES
PRESSURE CLEANING PUMPS
UP TO 5.6 GPM
Page 15
47 Series - Brass Manifold - Features:
• Forged brass manifold with an exclusive lifetime warranty 
• Large capacity, die-cast aluminum oil-bath crankcase 
• Over-sized connecting rods for maximum life 
• Heavy-duty tapered roller bearings 
• Solid ceramic plungers with continuously lubricated 
packings 
• Unitized SS inlet and discharge valves 
47 Series - Brass Manifold - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions.....12.2"x9.2"x6.9"(33.8 oz. versions) 
Pump Dimensions.....12.6"x9.2"x6.9"(40.6 oz. versions) 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
TSS1511
47 SERIES - 24 MM SOLID SHAFT - BRASS MANIFOLD
MODEL GPM PSI RPM BORE STROKE HP OIL CAPACITY SHP WGHT
T921 5.0 GPM 1,700 PSI 1050 RPM .866 in/22 mm .630 in./16 mm 5.8 EBHP 33.8 oz. 32.0 lbs.
T1621 5.0 GPM 2,500 PSI 1050 RPM .866 in/22 mm .630 in./16 mm 8.6 EBHP 40.6 oz. 32.0 lbs.
TSS1021 4.5 GPM 3,500 PSI 1125 RPM .787 in./20 mm .630 in./16 mm 9.2 EBHP 40.6 oz. 32.0 lbs.
5.6 GPM 1,700 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 6.5 EBHP 40.6 oz. 32.0 lbs.
T1011 4.5 GPM 2,000 PSI 1125 RPM .787 in./20 mm .630 in./16 mm 6.2 EBHP 33.8 oz. 32.0 lbs.
5.6 GPM 1,500 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 5.8 EBHP 33.8 oz. 32.0 lbs.
T1321 5.5 GPM 2,100 PSI 1150 RPM .866 in/22 mm .630 in./16 mm 7.9 EBHP 40.6 oz. 32.0 lbs.
TS1331 3.5 GPM 2,100 PSI 1450 RPM .787 in./20 mm .394 in/10 mm 5.0 EBHP 33.8 oz. 32.0 lbs.
4.0 GPM 2,000 PSI 1750 RPM .787 in./20 mm .394 in/10 mm 5.5 EBHP 33.8 oz. 32.0 lbs.
TS1711 3.5 GPM 2,700 PSI 1450 RPM .787 in./20 mm .394 in/10 mm 6.5 EBHP 40.6 oz. 32.0 lbs.
TS1011 4.0 GPM 2,000 PSI 1450 RPM .787 in./20 mm .472 in./12 mm 5.5 EBHP 33.8 oz. 32.0 lbs.
4.75 GPM 1,500 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 4.9 EBHP 33.8 oz. 32.0 lbs.
TSS1511 4.0 GPM 3,500 PSI 1450 RPM .787 in./20 mm .472 in./12 mm 9.6 EBHP 40.6 oz. 32.0 lbs.
TS1321 4.75 GPM 2,100 PSI 1450 RPM .866 in/22 mm .472 in./12 mm 6.8 EBHP 40.6 oz. 32.0 lbs.
TS921 4.75 GPM 1,800 PSI 1450 RPM .866 in/22 mm .472 in./12 mm 5.9 EBHP 33.8 oz. 32.0 lbs.
TS1811
4.0 GPM 3,500 PSI 1290 RPM .787 in./20 mm .551 in./14 mm 9.6 EBHP 40.6 oz. 32.0 lbs.
4.5 GPM 3,500 PSI 1450 RPM .787 in./20 mm .551 in./14 mm 10.8 EBHP 40.6 oz. 32.0 lbs.
5.0 GPM 3,500 PSI 1610 RPM .787 in./20 mm .551 in./14 mm 12.0 EBHP 40.6 oz. 32.0 lbs.
47 Series - Nickel-Plated Manifold - Specifications:
Pump dimensions.....12.6"x9.2"x6.9"(40.6 oz. versions) 
Use GP Series 100 Oil (see page 60) 
Shaft Diameter ...............................................945 in./24 mm
TS2021
47 SERIES - 24 MM SOLID SHAFT - NICKEL-PLATED MANIFOLD
MODEL GPM PSI RPM BORE STROKE HP OIL CAPACITY SHP WGHT
TS2021 4.5 GPM 3,500 PSI 1125 RPM .787 in./20 mm .630 in./16 mm 10.8 EBHP 40.6 oz. 32.0 lbs.
5.6 GPM 3,500 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 13.4 EBHP 40.6 oz. 32.0 lbs.
TS2011 4.0 GPM 3,500 PSI 1450 RPM .787 in./20 mm .472 in./12 mm 9.6 EBHP 40.6 oz. 32.0 lbs.
4.75 GPM 2,300 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 7.5 EBHP 40.6 oz. 32.0 lbs.
TS1621 4.75 GPM 2,500 PSI 1450 RPM .866 in./22 mm .472 in./12 mm 8.1 EBHP 40.6 oz. 32.0 lbs.
T9211 4.2 GPM 3,000 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 8.2 EBHP 40.6 oz. 32.0 lbs.
T9281 4.0 GPM 4,000 PSI 1750 RPM .630 in./16 mm .630 in./16 mm 11.0 EBHP 40.6 oz. 32.0 lbs.
TS2013 5.5 GPM 3,000 PSI 1750 RPM .787 in./20 mm .512 in/13 mm 11.3 EBHP 40.6 oz. 32.0 lbs.
The Preferred Pump Frame in 
the Power Cleaning Industry
47 SERIES - 24 MM SOLID SHAFT - NICKEL-PLATED MANIFOLD - CERAMIC-COATED PLUNGERS
MODEL GPM PSI RPM BORE STROKE HP OIL CAPACITY SHP WGHT
T9281 4.0 GPM 4,000 PSI 1750 RPM .630 in./16 mm .630 in./16 mm 11.0 EBHP 40.6 oz. 32.0 lbs.
PRESSURE 
CLEANING 
PUMPS

66 SERIES
PRESSURE CLEANING PUMPS
UP TO 12.0 GPM
Page 16
66 Series - TSF - Features:
• Oversized roller bearings 
• Fully anodized crankcase 
• Innovative new seal design extends seal life 
• New plunger design improves thermal shock 
resistance 
• New valve cap improves hydrostatic performance
66 Series - TSF - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions.................................14.94"x9.78"x6.99" 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
TSF 
High Flow
66 SERIES - TSF - HIGH FLOW - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TSF2019 6.3 GPM 4,350 PSI 1450 RPM .787 in./20 mm .748 in./19 mm 18.7 EBHP 40.7 lbs.
7.6 GPM 4,000 PSI 1750 RPM .787 in./20 mm .748 in./19 mm 20.8 EBHP 40.7 lbs.
TSF2021 7.0 GPM 3,600 PSI 1450 RPM .787 in./20 mm .826 in./21 mm 17.3 EBHP 40.7 lbs.
8.5 GPM 3,600 PSI 1750 RPM .787 in./20 mm .826 in./21 mm 21.0 EBHP 40.7 lbs.
TSF2219 7.7 GPM 3,000 PSI 1450 RPM .866 in./22 mm .748 in./19 mm 15.8 EBHP 40.7 lbs.
9.3 GPM 3,000 PSI 1750 RPM .866 in./22 mm .748 in./19 mm 19.1 EBHP 40.7 lbs.
TSF2221 8.5 GPM 3,000 PSI 1450 RPM .866 in./22 mm .826 in./21 mm 17.5 EBHP 40.7 lbs.
10.2 GPM 3,000 PSI 1750 RPM .866 in./22 mm .826 in./21 mm 21.0 EBHP 40.7 lbs.
TSF2421 10.0 GPM 3,000 PSI 1450 RPM .945 in./24 mm .826 in./21 mm 17.1 EBHP 40.7 lbs.
12.0 GPM 2,500 PSI 1750 RPM .945 in./24 mm .826 in./21 mm 20.5 EBHP 40.7 lbs.
TSF2819 12.1 GPM 2,200 PSI 1450 RPM 1,102 in./28 mm .748 in./19 mm 18.2 EBHP 40.7 lbs.
TSF1819 6.3 GPM 4,350 PSI 1750 RPM .709 in./18 mm .748 in./19 mm 18.8 EBHP 40.7 lbs.
 DUAL SHAFT
TSF2019DS 7.6 GPM 4,000 PSI 1750 RPM .787 in./20 mm .748 in./19 mm 18.7 EBHP 40.7 lbs.
66 Series - TSP - Features:
• Oversized roller bearings 
• Compact, high pressure 
• Fully anodized crankcase 
• Innovative new seal design extends seal life 
• New plunger design improves thermal shock 
resistance 
• New valve cap improves hydrostatic performance
66 Series - TSP - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions......................................13.84"x9.8"x7.7" 
Minimum Inlet Pressure...............................................30 PSI 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
TSP 
High Pressure
66 SERIES - TSP - HIGH PRESSURE - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
TSP1619 3.6 GPM 7,250 PSI 1450 RPM .629 in./16 mm .748 in./19 mm 17.8 EBHP 51.8 lbs.
4.3 GPM 5,800 PSI 1750 RPM .629 in./16 mm .748 in./19 mm 17.0 EBHP 51.8 lbs.
TSP1621 4.3 GPM 6,525 PSI 1450 RPM .629 in./16 mm .826 in./21 mm 19.2 EBHP 51.8 lbs.
TSP1819 5.0 GPM 5,100 PSI 1450 RPM .709 in./18 mm .748 in./19 mm 17.5 EBHP 51.8 lbs.
TSP1821 5.5 GPM 5,100 PSI 1450 RPM .709 in./18 mm .826 in./21 mm 19.2 EBHP 51.8 lbs.
 NICKEL-PLATED
TSP1621N 4.3 GPM 7,250 PSI 1450 RPM .629 in./16 mm .826 in./21 mm 21.4 EBHP 51.8 lbs.
PRESSURE 
CLEANING 
PUMPS

69 SERIES
PRESSURE CLEANING PUMPS
UP TO 12.0 GPM
Page 17
69 Series - Solid Shaft - Features:
• Triplex plunger pump, solid shaft 
• The industry’s choice for high flow applications 
• Forged brass manifold with an exclusive lifetime warranty 
(TS1531 & TS1041) 
• T41 has an aluminum manifold 
• Large-capacity, die-cast anodized aluminum, oil-bath 
crankcase 
• Over-sized connecting rods for maximum life 
• Heavy-duty tapered roller bearings 
• Unitized SS inlet and discharge valves 
• Solid ceramic plungers with continuously lubricated 
packings 
69 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter............................................1.378 in./35 mm 
Pump Dimensions......................................12.9"x11.9"x7.3" 
Crankcase Oil Capacity...............................................50.7 oz. 
Use GP Series 8090 Oil (see page 60) 
Product Group ...........................................................................Y
T41
69 SERIES - 35 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
T41 12.0 GPM 900 PSI 650 RPM 1.417 in./36 mm .945 in./24 mm 7.4 EBHP 37.0 lbs.
TS1531 7.92 GPM 2,175 PSI 1450 RPM .787 in./20 mm .866 in./22 mm 11.8 EBHP 46.0 lbs.
TS1041 8.0 GPM 1,600 PSI 1450 RPM .787 in./20 mm .866 in./22 mm 8.8 EBHP 46.0 lbs.
PRESSURE CLEANING 
PUMPS

48 SERIES
PRESSURE CLEANING PUMPS
UP TO 11.0 GPM
Page 18
48 Series - Solid Shaft - Features:
• Sixplex plunger pump, solid shaft 
• Forged brass manifold with an exclusive lifetime 
warranty 
• Dual manifolds utilizing a common crankcase 
for efficient performance 
• Perfect for high flow applications 
• Unitized Stainless Steel inlet and discharge valves 
• Solid ceramic plungers with continuously 
lubricated packings
48 Series - Solid Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread....................................Dual 3/4"-14 BSP-F 
Discharge Port Thread .........................Dual 3/8"-19 BSP-F 
Shaft Diameter ..............................................1.26 in./32 mm 
Pump Dimensions......................................16.1"x11.2"x7.9" 
Crankcase Oil Capacity...............................................54.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................Y
T1631
48 SERIES - SOLID SHAFT - 32 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
T1631 10.0 GPM 2,500 PSI 1080 RPM .866 in./22 mm .630 in./16 mm 15.1 EBHP 61.0 lbs.
T2031 9.0 GPM 3,000 PSI 1140 RPM .787 in,/20 mm .630 in./16 mm 18.5 EBHP 61.0 lbs.
11.0 GPM 2,000 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 17.1 EBHP 61.0 lbs.
PRESSURE 
CLEANING 
PUMPS
NEW!
PUMPS MADE READY
PMREZ4040G 
• 1" Hollow shaft with gas flange 
• Quick coupler and plug included 
• Maximum flow: 4.0 GPM 
• 4,000 PSI at 3400 RPM
PMRTSS1511 
• 24 mm solid shaft 
• Quick coupler and plug included 
• Maximum flow: 4.0 GPM 
• 3,500 PSI at 1450 RPM
PMREP1313G 
• 1" Hollow shaft with gas flange 
• Quick coupler and plug included 
• Maximum flow: 4.0 GPM 
• 4,000 PSI at 3400 RPM
PMRET1507G 
• 3/4" Hollow shaft with gas flange 
• Quick coupler and plug included 
• Maximum flow: 3.3 GPM 
• 2,610 PSI at 3400 RPM

AGRICULTURE SERIES
PRESSURE CLEANING PUMPS
UP TO 13.2 GPM
Page 19
AT0033 - Splined Shaft Features:
• Duplex plunger pump, splined shaft 
• Ideal for agricultural applications 
• Aluminum manifold 
• Solid ceramic plungers with continuously lubricated 
packings
AT0033 - Splined Shaft - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter.............................1.375 in./34.9 mm ASAE 
Pump Dimensions................................................12"x9"x7.3" 
Crankcase Oil Capacity...............................................22.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................Y
AT0033
AT SERIES AT0033 - 1-3/8" SPLINED SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
AT0033 7.93 GPM 435 PSI 650 RPM 1.417 in./36 mm .945 in./240 mm 2.4 EBHP 28.0 lbs.
AT0055 - Features:
• Triplex plunger pump, splined shaft 
• Aluminum or forged brass manifold 
• Large-capacity, die-cast anodized aluminum, oil-bath 
crankcase 
• Over-sized connecting rods for maximum life 
• Heavy-duty tapered roller bearing 
• Unitized SS inlet and discharge valves 
• Solid ceramic plungers with continuously lubricated 
packings
AT0055 - Specifications:
Shaft Diameter.............................1.375 in./34.9 mm ASAE 
Pump Dimensions.............................................13"x14"x7.5" 
Crankcase Oil Capacity...............................................51.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
AT0055
AT SERIES AT0055 - 1-3/8" SPLINED AND 35 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
 Single PTO Shaft, Right Side
AT0055 13.22 GPM 725 PSI 650 RPM 1.417 in./36 mm .945 in./24 mm 6.6 EBHP 36.0 lbs.
 Dual Shaft, Splined PTO on Right, Solid Shaft on Left Side:
AT0055DS 13.22 GPM 725 PSI 650 RPM 1.417 in./36 mm .945 in./24 mm 6.6 EBHP 36.0 lbs.
 Dual Shaft, Solid Shaft on Right, Splined PTO on Left Side:
AT0055DSL 13.22 GPM 725 PSI 650 RPM 1.417 in./36 mm .945 in./24 mm 6.6 EBHP 36.0 lbs.
(All splined shaft pumps require additional 
components to attach to PTO systems).
PRESSURE CLEANING 
PUMPS

AGRICULTURE SERIES
PRESSURE CLEANING PUMPS
UP TO 47.6 GPM
Page 20
AB Series Features:
• Triplex plunger pump, splined shaft 
• Specifically designed for the agriculture market 
• New optimized inlet and outlet valves 
• Solid ceramic plungers 
• New dual lip oil seal
AB Series Specifications: 
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread....................................................1-1/2" BSP 
Discharge Port Thread ..................................................1" BSP 
Shaft Diameter.............................1.375 in./34.9 mm ASAE 
Pump Dimensions ....................................17.48"x17"x8.29" 
Crankcase Oil Capacity...............................................77.8 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
AB90
AB SERIES - 1-3/8" DUAL SPLINED SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
AB90DP 23.8 GPM 870 PSI 650 RPM 1.42 in./36 mm 1.78 in./45 mm 14.2 EBHP 90.4 lbs.
AB100DP 26.4 GPM 870 PSI 550 RPM 1.57 in./40 mm 1.78 in./45 mm 15.7 EBHP 90.4 lbs.
AB120DP 31.7 GPM 870 PSI 550 RPM 1.78 in./45 mm 1.78 in./45 mm 18.7 EBHP 90.4 lbs.
AB180DP 47.6 GPM 870 PSI 650 RPM 1.97 in./50 mm 1.78 in./45 mm 28.4 EBHP 90.4 lbs.
AB SERIES - SOLID SHAFT (LEFT) AND 1-3/8" SPLINED SHAFT (RIGHT)
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
AB90PS* 23.8 GPM 870 PSI 650 RPM 1.42 in./36 mm 1.78 in./45 mm 14.2 EBHP 90.4 lbs.
AB100PS* 26.4 GPM 870 PSI 550 RPM 1.57 in./40 mm 1.78 in./45 mm 15.7 GP 90.4 lbs.
AB120PS* 31.7 GPM 870 PSI 550 RPM 1.78 in./45 mm 1.78 in./45 mm 18.7 HP 90.4 lbs.
AB180PS* 47.6 GPM 870 PSI 650 RPM 1.97 in./50 mm 1.78 in./45 mm 28.4 EBHP 90.4 lbs.
PRESSURE 
CLEANING 
PUMPS
NEW
NEW
*Also available with solid shaft (right) and PTO (left), add “L” to end of part number (ex. AB100PSL)

EMPEROR SERIES UP TO 3.8 GPM
Page 21
HTC Series 60HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specially designed to handle rigorous duty cycles, high 
temperatures and chemicals 
• Ideal for use in carpet cleaning and other high pressure 
cleaning applications
HTC Series 60HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Pump Dimensions...........................................7.8"x7.3"x5.5" 
Crankcase Oil Capacity...............................................11.8 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTC SERIES 60HT - (.945 IN.) 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTC1506S17 1.35 GPM 2,200 PSI 1750 RPM .591 in./15 mm .236 in./6 mm 2.0 HP 16.0 lbs.
HTC1509S17 2.1 GPM 2,200 PSI 1750 RPM .591 in./15 mm .370 in./9.4 mm 3.0 HP 16.0 lbs.
HTC1511S17 2.6 GPM 2,200 PSI 1750 RPM .591 in./15 mm .453 in./11.5 mm 4.0 HP 16.0 lbs.
HTXS Series 63HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specially designed to handle rigorous duty cycles, high 
temperatures and chemicals 
• Ideal for use in carpet cleaning and other high pressure 
cleaning applications
HTXS Series 63HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions...........................................8.4"x8.3"x4.8" 
Dimensions With Rails....................................8.4"x8.3"x5.6" 
Crankcase Oil Capacity...............................................14.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTXS1810S
HTXS SERIES 63HT - (.945 IN.) 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTXS1813S 3.5 GPM 2,500 PSI 1450 RPM .709 in./18 mm .512 in./13 mm 6.0 HP 18.0 lbs.
HTXS1810S 3.1 GPM 2,000 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 4.2 HP 18.0 lbs.
HTXS1812S 3.8 GPM 2,000 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 5.2 HP 18.0 lbs.
HTC SERIES 60HT - 5/8 (.625 IN.) HOLLOW SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTC1509E175 2.1 GPM 2,200 PSI 1750 RPM .591 in./15 mm .370 in./9.4 mm 3.5 HP 16.0 lbs.
HTC1505E345 2.1 GPM 2,200 PSI 3400 RPM .591 in./15 mm .197 in./5 mm 3.5 HP 16.0 lbs.
HTC1509E175
HTC1506S17
PRESSURE CLEANING 
PUMPS

EMPEROR SERIES UP TO 12.0 GPM
Page 22
HTS Series 47HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specially designed to handle rigorous duty cycles, high 
temperatures and chemicals 
• Ideal for use in carpet cleaning and other high pressure 
cleaning applications
HTS Series 47HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185° F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................12.2"x9.2"x9.9" 
Dimensions With Rails..................................12.4"x10"x6.9" 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTS2210S
HTS SERIES 47HT - 22 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTS2215S 4.0 GPM 2,300 PSI 950 RPM .866 in./22 mm .591 in./15 mm 6.3 HP 32.0 lbs.
5.0 GPM 2,300 PSI 1200 RPM .866 in./22 mm .591 in./15 mm 7.5 HP 32.0 lbs.
HTS2210S 4.0 GPM 2,300 PSI 1450 RPM .866 in./22 mm .394 in./10 mm 6.3 HP 32.0 lbs.
HTS2212S 4.75 GPM 2,300 PSI 1450 RPM .866 in./22 mm .472 in./12 mm 7.5 HP 32.0 lbs.
HTS2016S 5.6 GPM 3,000 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 11.5 HP 32.0 lbs.
HTF Series 66HT - Features:
• Triplex plunger pump 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Designed for use in prep units, conveyor and 
multiple gun applications 
• Ideal for use in carpet cleaning and for use in industrial 
plant systems where hot water is required
HTF Series 66HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ...................................13.27"x9.6"x6.23" 
Dimensions With Rails.................................13.4"x9.8"x7.5" 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTF2018S
HTF SERIES 66HT - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTF2018S 7.5 GPM 3,600 PSI 1750 RPM .787 in./20 mm .748 in./18 mm 18.5 HP 41.0 lbs.
HTF2221S 10.2 GPM 3,000 PSI 1750 RPM .866 in./22 mm .826 in./21 mm 21.0 HP 41.0 lbs.
HTF2421S 10.0 GPM 3,000 PSI 1450 RPM .945 in./24 mm .826 in./21 mm 20.5 HP 41.0 lbs.
12.0 GPM 2,500 PSI 1750 RPM .945 in./24 mm .826 in./21 mm 20.5 HP 41.0 lbs.
PRESSURE 
CLEANING 
PUMPS

EMPEROR SERIES UP TO 45.0 GPM
Page 23
PEHT Series 59HT - Features:
• Triplex plunger pump 
• Includes all Emperor features 
• Forged Stainless Steel manifold (AISI420B) 
• Nickel-plated crankcase
PEHT Series - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-11 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................10.4"x8.8"x5.4" 
Crankcase Oil Capacity ..................................................22 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
PEHT SERIES 59HT - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
PEHT2010S 4.00 GPM 3,000 PSI 1750 RPM 1.417 in./36 mm .590 in./10 mm 8.2 EBHP 21.0 lbs.
3.43 GPM 3,000 PSI 1450 RPM .787 in./20 mm .590 in./10 mm 7.0 EBHP 21.0 lbs.
PEHT2012S
4.76 GPM 3,000 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 9.8 EBHP 21.0 lbs.
3.96 GPM 3,000 PSI 1450 RPM .787 in./20 mm .472 in./12 mm 8.1 EBHP 21.0 lbs.
2.64 GPM 3,000 PSI 950 RPM .787 in./20 mm .472 in./12 mm 5.4 EBHP 21.0 lbs.
PEHT2213S 5.55 GPM 3,000 PSI 1450 RPM .688 in./22 mm .512 in./13 mm 11.4 EBHP 21.0 lbs.
3.43 GPM 3,000 PSI 950 RPM .688 in./22 mm .512 in./13 mm 7.0 EBHP 21.0 lbs.
PEHT2214S 4.00 GPM 3,000 PSI 950 RPM .688 in./22 mm .551 in./14 mm 5.2 EBHP 21.0 lbs.
PEHT2010S
HTCK Series 70HT - Features:
• Triplex plunger pump 
• Includes all Emperor features 
• Designed for rollover carwash systems 
• Ideal for use in carpet cleaning and other industrial plant 
systems where hot water is required
HTCK Series 70HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185° F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread..........................................1/2" NPT-F 
Shaft Diameter............................................1.181 in./30 mm 
Pump Dimensions......................................15.3"x13.4"x7.7" 
Crankcase Oil Capacity...............................................64.2 oz. 
Use GP Series 220 Oil (see page 60) 
Product Group ...........................................................................X
HTCK SERIES 71HT - 40 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTCK4050S 40.0 GPM 1,500 PSI 800 RPM 1.6 in./40 mm 1.9 in./50 mm 41.1 HP 157.0 lbs.
45.0 GPM 1,500 PSI 900 RPM 1.6 in./40 mm 1.9 in./50 mm 46.2 HP 157.0 lbs.
HTCK3623S
HTCK SERIES 70HT - 30 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTCK3623S
18.0 GPM 1,500 PSI 1000 RPM 1.4 in./36 mm .9 in./23 mm 18.5 HP 79.6 lbs.
21.0 GPM 1,500 PSI 1150 RPM 1.4 in./36 mm .9 in./23 mm 22.0 HP 79.6 lbs.
25.0 GPM 1,300 PSI 1350 RPM 1.4 in./36 mm .9 in./23 mm 25.6 HP 79.6 lbs.
HTCK4050S
HTCK Series 71HT - Features:
• Triplex plunger pump 
• Includes all Emperor features 
• Designed for touchless carwash systems, and multiple 
gun applications 
• Ideal for use in carpet cleaning and other industrial plant 
systems where hot water is required
HTCK Series 71HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread.................................................1-1/2" NPT-F 
Discharge Port Thread...............................................1" NPT-F 
Shaft Diameter............................................1.575 in./40 mm 
Pump Dimensions......................................20.7"x14.5"x9.9" 
Crankcase Oil Capacity ............................................124.4 oz. 
Use GP Series 220 Oil (see page 60) 
Product Group ...........................................................................X
Designed as a direct replacement 
for Cat’s 3535 with the advantage 
of GP’s Emperor HT technology!
*For additional accessories see page 27
*For additional accessories see page 27
PRESSURE CLEANING 
PUMPS
PLATINUM 
SERIES

Self-service wash
 Single or multi-bay applications 
 Spot-free rinse application 
 Chemical application 
 Pre-soak/tire-motor cleaner 
 Foam brush 
 Reclaim water 
 Weep systems 
Automatic wash
 Roll-over automatic 
 Spot-free rinse applications 
 Pre-soak systems 
 Weep systems 
 Foam applications
Tunnel Wash
 Prep Station 
 Brush wetting 
 Detergent application 
 Spot-free rinse applications 
 Bay wash-down 
 Wax applications 
Mobile vehicle wash
 Spot-free rinse applications 
Carpet cleaning 
 Truck mounted cleaning systems 
VEHICLE & CARPET CLEANING APPLICATIONS
VEHICLE 
 CLEANING 
PUMPS

EMPEROR SERIES
VEHICLE CLEANING PUMPS
UP TO 5.6 GPM
Page 25
HTXS Series - 63HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specifically designed to handle rigorous duty cycles, high 
temperatures and chemicals associated with self-service 
car wash applications 
• Compact and economical design 
HTXS Series - 63HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions...........................................8.4"x8.3"x4.8" 
Dimensions With Rails....................................8.4"x8.3"x5.6" 
Crankcase Oil Capacity...............................................14.0 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTXS1810S
HTXS SERIES 63HT - 24 MM SOLID SHAFT 
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTXS1810S 3.1 GPM 2,000 PSI 1750 RPM .709 in./18 mm .394 in./10 mm 4.2 HP 18.0 lbs.
HTXS1812S 3.8 GPM 2,000 PSI 1750 RPM .709 in./18 mm .472 in./12 mm 5.2 HP 18.0 lbs.
HTXS1813S 3.5 GPM 2,500 PSI 1450 RPM .709 in./18 mm .512 in./13 mm 6.0 HP 18.0 lbs.
HTS Series - 47HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specifically designed to handle rigorous duty cycles, high 
temperatures and chemicals associated with self-service 
car wash applications 
HTS Series - 47HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................12.2"x9.2"x6.9" 
Dimensions With Rails..................................12.4"x10"x6.9" 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTS2210S
HTS SERIES 47HT - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTS2210S 4.0 GPM 2,300 PSI 1450 RPM .866 in./22 mm .394 in./10 mm 6.3 HP 32.0 lbs.
HTS2212S 4.75 GPM 2,300 PSI 1450 RPM .866 in./22 mm .472 in./12 mm 7.5 HP 32.0 lbs.
HTS2215S 4.0 GPM 2,300 PSI 950 RPM .866 in./22 mm .591 in./15 mm 6.3 HP 32.0 lbs.
5.0 GPM 2,300 PSI 1200 RPM .866 in./22 mm .591 in./15 mm 7.5 HP 32.0 lbs.
HTS2016S 5.6 GPM 3,000 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 11.5 HP 32.0 lbs.
See pages 30-35 for Vehicle Cleaning Accessories. 
All car wash pumps are covered under warranty for damage caused by fresh water wash-out for the life of the pump.
VEHICLE 
 CLEANING 
PUMPS

EMPEROR SERIES
VEHICLE CLEANING PUMPS
UP TO 18.0 GPM
Page 26
HTF Series 66HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Specially designed for use in prep units, conveyor 
and multiple gun applications 
• Ideal for use in carpet cleaning and for use in industrial 
plant systems where hot water is required
HTF Series 66HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185° F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ...................................13.27"x9.6"x6.23" 
Dimensions With Rails.................................13.4"x9.8"x7.5" 
Crankcase Oil Capacity...............................................40.6 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
HTF2018S
HTF SERIES 66HT - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTF2421S 10.0 GPM 3,000 PSI 1450 RPM .945 in./24 mm .826 in./21 mm 20.5 GP 41.0 lbs.
12.0 GPM 2,500 PSI 1750 RM .945 in./24 mm .826 in./21 mm 20.5 GP 41.0 lbs.
HTF2018S 7.5 GPM 3,600 PSI 1750 RPM .787 in./20 mm .748 in./18 mm 18.5 HP 41.0 lbs.
HTF2221S 10.2 GPM 3,000 PSI 1750 RPM .866 in./22 mm .826 in./21 mm 21.0 HP 41.0 lbs.
PEHT Series 59HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Forged Stainless Steel manifold (AISI420B), nickel-plated 
• Specially designed to handle rigorous duty cycles, 
high temperatures and chemicals 
• Ideal for use in car wash and other high pressure 
cleaning applications
PEHT Series - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread..............................................1/2"-11 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
Pump Dimensions ........................................10.4"x8.8"x5.4" 
Crankcase Oil Capacity ..................................................22 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
PEHT2010S
See pages 30-35 for Vehicle Cleaning Accessories. 
All car wash pumps are covered under warranty for damage caused by fresh water wash-out for the life of the pump.
VEHICLE 
 CLEANING 
PUMPS
PEHT SERIES 59HT - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
PEHT2010S 4.00 GPM 3,000 PSI 1750 RPM 1.417 in./36 mm .590 in./10 mm 8.2 EBHP 21.0 lbs.
3.43 GPM 3,000 PSI 1450 RPM .787 in./20 mm .590 in./10 mm 7.0 EBHP 21.0 lbs.
PEHT2012S
4.76 GPM 3,000 PSI 1750 RPM .787 in./20 mm .472 in./12 mm 9.8 EBHP 21.0 lbs.
3.96 GPM 3,000 PSI 1450 RPM .787 in./20 mm .472 in./12 mm 8.1 EBHP 21.0 lbs.
2.64 GPM 3,000 PSI 950 RPM .787 in./20 mm .472 in./12 mm 5.4 EBHP 21.0 lbs.
PEHT2213S 5.55 GPM 3,000 PSI 1450 RPM .787 in./20 mm .512 in./13 mm 11.4 EBHP 21.0 lbs.
3.43 GPM 3,000 PSI 950 RPM .688 in./22 mm .512 in./13 mm 7.0 EBHP 21.0 lbs.
PEHT2214S 4.00 GPM 3,000 PSI 950 RPM .688 in./22 mm .551 in./14 mm 5.2 EBHP 21.0 lbs.
101112 Stainless Steel Rail Kit converts to Cat 310/5CP
PLATINUM 
SERIES

EMPEROR SERIES
VEHICLE CLEANING PUMPS
UP TO 45.0 GPM
Page 27
HTCK Series - 70HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Heavy-duty tapered roller bearings 
• Specifically designed to handle rigorous duty cycles, high 
temperatures and chemicals 
• Ideal for use in car wash and other high pressure 
cleaning applications 
HTXS Series - 63HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread..........................................1/2" NPT-F 
Shaft Diameter............................................1.181 in./30 mm 
Pump Dimensions......................................15.3"x13.4"x7.7" 
Crankcase Oil Capacity...............................................64.2 oz. 
Use GP Series 220 Oil (see page 60) 
Product Group ...........................................................................X
HTCK3623S
HTCK SERIES 70HT - 30 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTCK3623S
18.0 GPM 1,500 PSI 1000 RPM 1.4 in./36 mm .9 in./23 mm 18.5 HP 79.6 lbs
21.0 GPM 1,500 PSI 1150 RPM 1.4 in./36 mm .9 in./23 mm 22.0 HP 79.6 lbs
25.0 GPM 1,300 PSI 1350 RPM 1.4 in./36 mm .9 in./23 mm 22.3 HP 79.6 lbs
 Rail Kits:
 HT125RCK
 HT125CW - Converts - CW Pumps
 510227 Inlet Fitting Hose Barb, 1" NPT-M x 1-1/2" Hose Barb, Brass
HTCK Series - 71HT - Features:
• Triplex plunger pump 
• Features patented “high tech” packings 
• Patented inlet/outlet valve cage 
• Nickel-plated inlet/outlet valve plugs 
• Nickel-plated forged brass manifold with exclusive 
lifetime warranty 
• Heavy-duty tapered roller bearings 
• Specifically designed to handle rigorous duty cycles, high 
temperatures and chemicals 
• Ideal for use in car wash and other high pressure 
cleaning applications 
• Designed as a direct replacement for Cat’s 3535 with the 
advantage of GP’s patented HT technlogy 
HTCK Series - 71HT - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................185°
 F 
Inlet Port Thread.................................................1-1/2" NPT-F 
Discharge Port Thread...............................................1" NPT-F 
Shaft Diameter............................................1.575 in./40 mm 
Pump Dimensions......................................20.7"x14.5"x9.9" 
Crankcase Oil Capacity ............................................124.4 oz. 
Use GP Series 220 Oil (see page 60) 
Product Group ...........................................................................X
HTCK4050S
HTCK SERIES 71HT - 40 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
HTCK4050S* 40.0 GPM 1,500 PSI 800 RPM 1.6 in./40 mm 1.9 in./50 mm 41.1 HP 157.0 lbs.
45.0 GPM 1,500 PSI 900 RPM 1.6 in./40 mm 1.9 in./50 mm 46.2 HP 157.0 lbs.
 Rail Kits:
 HT150RCK - Converts Cat 3535
 HT150CWL - Converts CW1541 - Long Pump Stand
 HT150CWS - Converts CW1541 - Short Pump Stand
 638295 1" NPT Plug, 3,000 PSI, 304 SS
 638298 1-1/2" NPT Plug, 150 PSI, 304 SS
 203411 Bolts for Pump
 510476 Inlet Fitting Hose Barb, 1-1/2" NPT-M x 2" Hose Barb, Brass
See pages 30-35 for Vehicle Cleaning Accessories. 
All car wash pumps are covered under warranty for damage caused by fresh water wash-out for the life of the pump.
VEHICLE 
 CLEANING 
PUMPS

CW 47 SERIES
VEHICLE CLEANING PUMPS
UP TO 5.6 GPM
Page 28
CW 47 Series - Features:
• Forged brass manifold with an exclusive lifetime 
warranty 
• The preferred pump frame in the car wash selfservice industry 
• Dual crankshaft for convenience (CW2040) 
• Large-capacity, die-cast, anodized aluminum oil-bath 
crankcase 
• Oversized connecting rods for maximum life 
• Solid ceramic plungers with continuously lubricated 
packings 
• Unitized SS inlet and discharge valves
CW 47 Series - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165° F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter ...............................................945 in./24 mm 
 (CW2040 is dual shaft) 
Pump Dimensions......................................11.4"x10.8"x6.9" 
Dimensions With Rails ..............................11.4"x10.8"x7.9" 
Crankcase Oil Capacity...............................................33.8 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................X
CW2040
CW 47 SERIES - 24 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
CW2040
3.0 GPM 2,500 PSI 750 RPM .787 in./20 mm .630 in./16 mm 5.2 EBHP 30.0 lbs.
4.0 GPM 2,000 PSI 1000 RPM .787 in./20 mm .630 in./16 mm 7.0 EBHP 30.0 lbs.
5.0 GPM 1,500 PSI 1250 RPM .787 in./20 mm .630 in./16 mm 8.6 EBHP 30.0 lbs.
CW24 3.0 GPM 2,500 PSI 750 RPM .787 in./20 mm .630 in./16 mm 8.6 EBHP 30.0 lbs.
5.0 GPM 1,500 1250 RPM .787 in./20 mm .630 in./16 mm 8.6 EBHP 30.0 lbs.
CW3040 5.0 GPM 3,000 PSI 1250 RPM .787 in./20 mm .630 in./16 mm 10.3 EBHP 32.0 lbs.
CW3555 5.6 GPM 3,500 PSI 1450 RPM .787 in./20 mm .630 in./16 mm 13.4 EBHP 32.0 lbs.
CW2004 4.0 GPM 2,000 PSI 1750 RPM .787 in./20 mm .394 in./10 mm 5.5 EBHP 30.0 lbs.
See pages 30-35 for Vehicle Cleaning Accessories. 
All car wash pumps are covered under warranty for damage caused by fresh water wash-out for the life of the pump.
CW 47 SERIES ASSEMBLIES
MODEL
190237 CW2040 Pump and Retrofit Rail and 24 mm H Bushing for Cat 310 Replacement
190238 CW2040 Pump and Retrofit Rail and 8” OD Pulley for Cat 310 Replacement
190239 CW3040 Pump and Retrofit Rail for Cat 530 Replacement
190245 CW3040L Pump and Retrofit Rail and H Bushing for Cat 530 Replacement
VEHICLE 
 CLEANING 
PUMPS

CW 69 SERIES
VEHICLE CLEANING PUMPS
UP TO 12.0 GPM
Page 29
CW 69 Series - Features:
• Triplex plunger pump 
• The preferred pump frame in the two-gun prep 
conveyor and tunnel car wash industry 
• Forged brass manifol with exclusive lifetime warranty 
• Large-capacity, die-cast, anodized aluminum 
oil-bath crankcase 
• Over-sized connecting rods for maximum life 
• Heavy-duty tapered roller bearings 
• Solid ceramic plungers with continuously lubricated 
packings 
• Unitized stainless steel inlet and discharge valves 
CW 69 Series - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max. Fluid Temperature.................................................165°
 F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread..........................................3/8" BSP-F 
Shaft Diameter............................................1.378 in./35 mm 
Pump Dimensions......................................13.0"x11.9"x7.3" 
Crankcase Oil Capacity...............................................50.7 oz. 
Use GP Series 100 Oil (see page 60) 
Product Group ...........................................................................Y
CW 69 SERIES - 35 MM SOLID SHAFT
MODEL GPM PSI RPM BORE STROKE HP SHP WGHT
CW1012 10.0 GPM 1,200 PSI 750 RPM 1.18 in./30 mm .946 in./24 mm 8.2 EBHP 45.0 lbs.
12.0 GPM 1,000 PSI 900 RPM 1.18 in./30 mm .946 in./24 mm 8.2 EBHP 45.0 lbs.
See pages 30-35 for Vehicle Cleaning Accessories. 
All car wash pumps are covered under warranty for damage caused by fresh water wash-out for the life of the pump.
CW1012
VEHICLE 
 CLEANING 
PUMPS

VEHICLE CLEANING ACCESSORIES
Page 30
Swivels
YSW38MFB YSW38MFSS
BRASS & STAINLESS STEEL SWIVELS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET WORKING TEMP SHP WGHT
YSW38MFB Medium Resistance, Brass 10.5 GPM 3,650 PSI 4,050 PSI 3/8" BSP-M 3/8" BSP-F 194° F 0.3 lbs.
YSW14MFSS Medium Resistance, SS 10.5 GPM 5,100 PSI 5,650 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
YSW38MFSS Medium Resistance, SS 10.5 GPM 5,100 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 194° F 0.3 lbs.
YSW14MFB Medium Resistance, Brass 10.5 GPM 3,650 PSI 4,050 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
YSW9014SS Medium Resistance, SS, 90 Deg 10.5 GPM 3,650 PSI 4050 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
Squeegees
SQUEEGEES
MODEL DESCRIPTION
560002 5 Foot Tapered Wood Handle
PXW20075 30" Foam Rubber Squeegee Head, cleans dirt out of the deepest cracks, even on rough surfaces
560001 Assembled Squeegee Head and Handle
Product Group: I 560001
Product Group: H
Nozzle Packs
NOZZLE PACKS
MODEL DESCRIPTION
105140 Nozzle Kit for Laser Wash 4000, contains all nozzles for arch, 19 nozzles
105144 Nozzle Kit for D & S 5000 - Gantry, 16 Nozzles
105145 Nozzle Kit for D & S 5000 - Blaster, 12 Nozzles
105154 Nozzle Kit for SSA Futura, 30 - 1/8" NPT Nozzles
105167 Nozzle Kit for Oasis 9120 Windvan, 24 Nozzles
105169 Nozzle Kit for Oasis Rocker Panel Sprayers, 10 Nozzles
105193 Nozzle Kit for Hydrospray Rainmaker-Tower, 9 Nozzles
Product Group: I 105140
NEW!
VEHICLE 
 CLEANING 
ACCESS
ORIES
VEHICLE CLEANING REGULATORS
MODEL DESCRIPTION GPM RATED INLET OUTLET MAX TEMP SHP WGHT
100892 Nickel-plated 5.0 GPM 2,000 PSI 3/8" NPT-F 1/4" NPT-F 200° F 1.4 lbs.
100998 303 Stainless Steel, Viton, PTFE 13.0 GPM 1,000 PSI 3/8" NPT-F 1/2" NPT-F 190° F 2.0 lbs
100999 303 Stainless Steel, Viton, PTFE 13.0 GPM 2,000 PSI 3/8" NPT-F 1/2" NPT-F 190° F 2.0 lbs.
ZKSX1 316 Stainless Steel 16.0 GPM 3,600 PSI 1/2" BSP-F 1/2" BSP-F 185° F 4.5 lbs.
Product Group: S
Regulators - Great for 
Multiple Gun Prep 
Units
100892 100998/99 ZXS1 YR5221
MODEL DESCRIPTION GPM RATED MAX INLET MAX TEMP SHP WGHT
YR5221 Designed for Touch Free Car Wash Systems 53.0 GPM 2,200 PSI 2,450 PSI 1” NPT 200° F 4.5 lbs.

Unloaders
VEHICLE CLEANING ACCESSORIES
Page 31
Product Group: T
Balanced Relief Valves
PLSR4LVNCV YBRV624 YBRV5325
VEHICLE CLEANING BALANCED RELIEF VALVES
MODEL GPM RATED MAX INLET OUTLET MAX TEMP SHP WGHT
YBRV624 6.3 GPM 2,200 PSI 2,450 PSI 3/8" BSP-F 3/8" BSP-F 195° F 0.8 lbs.
YBRV624D 6.3 GPM 2,200 PSI 2,450 PSI (2) 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs.
100268 6.3 GPM 300 PSI N/A (2) 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs.
100269 6.3 GPM 300 PSI N/A 3/8" BSP-F 3/8" BSP-F 195° F 0.8 lbs.
PLSR4LVNCV 10.0 GPM 1,450 PSI 1,500 PSI (2) 3/8" BSP-F (2) 3/8" BSP-F 195° F 1.0 lbs.
PLSR4HVNCV 10.0 GPM 2,300 PSI 2,600 PSI (2) 3/8" BSP-F (2)3/8" BSP-F 195° F 1.0 lbs.
101088 30.0 GPM 350 PSI N/A 3/4" NPT-F 3/4" NPT-F 195° F 2.0 lbs.
YBRV5325 53.0 GPM 2,600 PSI 2,900 PSI 3/4" NPT-F 1/2" NPT-F 195° F 2.0 lbs.
Product Group: S YU21235 YU5221 ZK4010 PULSAR4LP
VEHICLE CLEANING UNLOADERS
MODEL GPM RATED MAX INLET OUTLET BYPASS MAX TEMP SHP WGHT
ZK4010 10.5 GPM 4,000 PSI 4,000 PSI 3/8" BSP-F 3/8" BSP-M (2) 3/8" BSP-F 185° F 2.3lbs.
PULSAR4LP 10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.5 lbs.
PULSAR4KLP 10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.5 lbs.
YU21235 21.0 GPM 2,300 PSI 2,600 PSI (2) 1/2" NPT-F 1/2" NPT-F (2) 1/2" NPT-F 200° F 3.1 lbs.
YVB5121B 21.0 GPM 5,100 PSI 5,650 PSI 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 195° F 2.5 lbs.
YU3723 37.0 GPM 2,300 PSI 2,600 PSI 3/4" NPT-F 3/4" NPT-F 3/4" NPT-F 195° F 4.1 lbs.
YU5221 53.0 GPM 2,200 PSI 2,450 PSI 1" NPT-F 1" NPT-F 1" NPT-F 200° F 4.5 lbs.
Check Valves
Product Group: T Brass 303 Stainless Steel
VEHICLE CLEANING CHECK VALVES
MODEL DESCRIPTION GPMG RATED MAX OUTLET MAX TEMP SHP WGHT
YCV14FSS 303 Stainless Steel 6.5 GPM 5,800 PSI 6,500 PSI 1/4" BSP-F 195° F 0.5 lbs.
YCV38FSS Stainless Steel 10.5 GPM 5,800 PSI 6,500 PSI 3/8" BSP-F 195° F 0.5 lbs.
YCV12FB Brass 21.0 GPM 2,200 PSI 2,300 PSI 1/2" BSP-F 195° F 0.5 lbs.
YCV12FSS 303 Stainless Steel 21.0 GPM 5,800 PSI 6,500 PSI 1/2" BSP-F 195° F 0.5 lbs.
YCV34FB Brass 48.0 GPM 2,200 PSI 2,300 PSI 3/4" BSP-F 195° F 0.8 lbs.
YCV34FSS 303 Stainless Steel 48.0 GPM 5,800 PSI 6,500 PSI 3/4" BSP-F 195° F 0.8 lbs.
NEW
NEW
VEHICLE 
 CLEANING ACCESS
ORIES
Accumulators
686010
VEHICLE CLEANING ACCUMULATORS
MODEL DESCRIPTION GPM RATED INLET SHP WGHT
686011 Non-rechargeable (pre-set on request) 10.0 GPM 3,000 PSI 1/2" NPT-M 2.5 lbs.
686028 Rechargeable 10.0 GPM 3,000 PSI 1/2" NPT-M 2.5 lbs.
686010 Rechargeable 40.0 GPM 3,000 PSI 1" NPT-M 7.0 lbs.
Product Group: K 686011 686028

VEHICLE CLEANING ACCESSORIES
Page 32
Spray Guns
YRL2640W
Product Group: I
YG4000WN YG5000W DG5010W
VEHICLE CLEANING SPRAY GUNS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX TEMP SHP WGHT
YGRN47 Rear Entry, Rinsing Nozzle 4.7 GPM 73 PSI N/A 1/2" NPT - M Nozzle 176° F 1.5 lbs.
YRL2640 Rear Entry 8.0 GPM 3,650 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs.
YRL2640W Rear Entry, Weep Seat 8.0 GPM 3,650 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs.
YG4000 Rear Entry 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.8 lbs.
YG4000WN Rear Entry, Weep Seat 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs.
YG4010 Rear Entry 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs.
YG4010W Rear Entry, Weep Seat 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs.
YG5000 Rear Entry 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs.
YG5000W Rear Entry, Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs.
DG5010 Rear Entry 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs.
DG5010W Rear Entry, Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs.
Insulated Lances
YL20PNS
Product Group: I
YL20PNB
VEHICLE CLEANING INSULATED LANCES
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX TEMP SHP WGHT
YL20PNS 20", Straight 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.1 lbs.
YL24PNS 24", Straight 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.3 lbs,
YL27PNS 27", Straight 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.4 lbs.
YL20PNB 20", Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.1 lbs.
YL24PNB 24", Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.3 lbs,
YL27PNB 27", Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 1.4 lbs.
Flexible Lances DL18FWBK
Product Group: I DL18FWRD
VEHICLE CLEANING FLEXIBLE LANCES
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX TEMP SHP WGHT
DL18FWRD 18", Red 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/8" NPT-F 200° F 1.1 lbs.
DL18FWBL 18", Blue 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/8" NPT-F 200° F 1.1 lbs.
DL18FWBK 18", Black 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/8" NPT-F 200° F 1.1 lbs.
DL18FWRDM 18", Red 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/4" NPT-M 200° F 1.1 lbs.
DL18FWBLM 18", Blue 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/4" NPT-M 200° F 1.1 lbs.
DL18FWBKM 18", Black 10.0 GPM 2,250 PSI 2,500 PSI 1/4" NPT-M 1/4" NPT-M 200° F 1.1 lbs.
DL18FWBLMSS 18", Blue, SST 10.0 GPM 3,000 PSI 3,000 PSI 1/4" NPT-M 1/4" NPT-M 200° F 1.1 lbs.
DL18FWBL
NEW
NEW
YGRN47
VEHICLE 
 CLEANING 
ACCESS
ORIES

VEHICLE CLEANING ACCESSORIES
Page 33
Reedless Flow Switches
100975 100931
Product Group: L
Chemical Injectors 
High Draw, Brass Body, SS Nozzle, 
Viton Elastomers and Ceramic Ball
100948
VEHICLE CLEANING CHEMICAL INJECTORS - HIGH DRAW, BRASS BODY, SS NOZZLE, VITON ELASTOMERS AND CERAMIC BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100947 1.6 mm 1.5 to 2.5 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4” 0.4 lbs.
100948 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4” 0.4 lbs.
100949 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4” 0.4 lbs.
100950 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4” 0.4 lbs.
Product Group: L
Chemical Injectors 
Brass Body, SS Nozzle, 
Viton Elastomers and SS Ball
100615
VEHICLE CLEANING CHEMICAL INJECTORS - BRASS BODY, SS NOZZLE, VITON ELASTOMERS AND SS BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100913 1.45 mm 1.0 to 2.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100615 1.8 mm 2.0 o 3.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 190° F N/A 0.4 lbs.
100511 2.1 mm 3.0 to 5.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
Product Group: L
Chemical Injectors 
Brass Body, SS Nozzle, 
Viton Elastomers and Teflon Ball
100872
VEHICLE CLEANING CHEMICAL INJECTORS - BRASS BODY, SS NOZZLE, VITON ELASTOMERS AND TEFLON BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100871 1.5 mm 1.0 to 2.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs.
100872 2.3 mm 5.0 to 8.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs.
VEHICLE 
 CLEANING ACCESS
ORIES
Flow Switches
Product Group: D
FLOW SWITCHES
PART 
NUMBER GPM RATED PRESSURE
MAX 
PRESSURE
MAX 
TEMP INLET OUTLET SHP WGHT
 5 Amp, 250 Volts,New High Flow Flow Switch, 4 gpm minimum activation, 12" 18 AWG LEAD:
101068 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
 With Weatherpack connector:
101069 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
101069
Product Group: D
TMT INLINE FLOW SWITCHES, 5 AMP MICROSWITCH, MINIMUM ACTIVATION FLOW, 
48” 18 AWG LEAD, NO SPRING, USES MAGNETS FOR ALL MOVEMENTS
PART 
NUMBER GPM MAX MAX TEMP INLET OUTLET VOLTAGE MATERIAL SHP WGHT
100975 12.0 GPM 5,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.25 lbs.
100931 12.0 GPM 5,800 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC SS 1.5 lbs.
 With Pilot Feature (0.5 GPM Activation):
100879 12.0 GPM 4,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.5 lbs.
 Without Pilot Feature (0.5 GPM Activation):
100904 12.0 GPM 4,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.5 lbs.
100879

VEHICLE CLEANING ACCESSORIES
Page 34
Chemical Injectors 
304 SS Body, 316 SS Nozzle, 
EPDM Elastomers and 316 SS Ball
100075 Product Group: L
VEHICLE CLEANING CHEMICAL INJECTORS - SS BODY, SS NOZZLE, EPDM ELASTOMERS AND SS BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100996 1.04 mm 1.0 to 2.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
101004 1.3 mm 1.0 to 2.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100075 1.45 mm 1.0 to 2.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100093 2.1 mm 2.0 to 4.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100074 2.2 mm 3.0 to 5.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100076 2.5 mm 5.0 to 8.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
101010 3.18 mm 5.0 to 8.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
REPAIR KITS AVAILABLE
Chemical Injectors 
CPVC Body, CPVC Nozzle, 
Kynar Hose Barb and Teflon Ball
100938
Product Group: L
VEHICLE CLEANING CHEMICAL INJECTORS - CPVC BODY, CPVC NOZZLE, KYNAR HOSE BARB AND TEFLON BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100938 1.6 mm 2.0 to 3.0 GPM 250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs.
100853 2.1 mm 3.0 to 5.0 GPM 250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs.
100955 1.4 mm 1.0 to 2.0 GPM 250 PSI 1/2" NPT-M 1/2" NPT-M 190° F 1/4" 0.4 lbs.
100956 1.6 mm 2.0 to 3.0 GPM 250 PSI 1/2" NPT-M 1/2" NPT-M 190° F 1/4" 0.4 lbs.
100957 2.1 mm 3.0 to 5.0 GPM 250 PSI 1/2" NPT-M 1/2" NPT-M 190° F 1/4" 0.4 lbs.
Chemical Injectors 
304 SS Body, 316 SS Nozzle, EDPM O-ring, 
Kynar Hose Barb and Teflon Ball
100096 Product Group: L
VEHICLE CLEANING CHEMICAL INJECTORS - SS BODY, SS NOZZLE, EPDM O-RING, KYNAR HOSE BARB AND TEFLON BALL
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100096 1.45 mm 1.0 to 2.0 GPM 250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100097 2.2 mm 3.0 to 5.0 GPM 250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
Product Group: L
Chemical Injectors 
Color-coded Kynar Hose Barbs, 
Special Elastomers, 
304 Stainless Steel
100835OR
COLOR CODED KYNAR BARBS NEW SPECIAL ELASOMERS, CERAMIC BALL, HASTELOY SPRING. REPAIRABLE!
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100336RD 1.45 mm 1.0 to 2.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100094WT 1.6 mm 2.0 to 3.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100835OR 1.8 mm 2.0 to 3.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100334GY 2.1 mm 2.0 to 4.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100333BL 2.2 mm 3.0 to 5.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100339LG 2.3 mm 5.0 to 8.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100541GY 2.1 mm 3.0 to 5.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
100781 Metering Tips
100336RD 100094WT
REPAIR KITS AVAILABLE
100334GY 100339LG 100333BL
NEW!
100541GY
100781
VEHICLE 
 CLEANING 
ACCESS
ORIES

VEHICLE CLEANING ACCESSORIES
Page 35
Product Group: L
Chemical Injectors 
304 Stainless Steel, 
Kynar Hose Barb 101035
VEHICLE CLEANING CHEMICAL INJECTORS, STAINLESS STEEL W/KYNAR HOSE BARBS
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
101033 1.04 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101034 1.04 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101035 1.04 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101073 1.3 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101074 1.3 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101075 1.3 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101030 1.45 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101031 1.45 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101032 1.45 mm 1.0 to 2.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101072 3.18 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101027 1.8 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101028 1.8 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101029 1.8 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101024 2.1 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101025 2.1 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101026 2.1 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101021 2.2 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101022 2.2 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101023 2.2 mm 2.0 to 3.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101018 2.5 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101019 2.5 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101020 2.5 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (3) 0.5 lbs.
101037 3.18 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (1) 0.4 lbs.
101038 3.18 mm 5.0 to 8.0 GPM 500 PSI 3/8" M Plug 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
101033 101038
NEW!
Pulse Pumps
100152
PULSE PUMP with BALL VALVE - 3,000 PSI WHEN BALL VALVE IS ENGAGED
MODEL GPM RATED PULSE PUMP 
PORT INLET
WATER 
INLET OUTLET MAX TEMP
SHP 
WGHT
100152 0.75 GPM 1,500 PSI* 3/8" NPT-F 1/8" NPT-F 1/8" NPT-F 190° F 1.5 lbs.
ADAPTER FITTINGS FOR 100152
PUMP SERIES FITTING 
(3/8" NPT-M) VALVE
60 (TC, HTC) 520275 103036
47 and 50 (T, TT, TS, HTS) 520274 103035
44 (EZ) 520273 103036
63 (TX, HTXS) 520273 103036
66 (TSF, HTF) 520276 103090
310/3CP/5CP (Cat) 520282 N/A
5CP3, 5CPS (Cat) 520292 N/A
5CP6 (Cat) 520343 N/A
3/8”
Product Group: S
101067
NEW! HIGH PRESSURE PULSE PUMP
MODEL GPM MAX PULSE PUMP 
PORT INLET
WATER 
INLET OUTLET MAX TEMP
SHP 
WGHT
101067 See Note Below* 3,000 PSI 3/8" NPT-F 1/8" NPT-F 1/8" NPT-F 190° F 2.0 lbs.
ADAPTER FITTINGS FOR 101067
PUMP SERIES FITTING 
(3/8" NPT-M) VALVE
60 (TC) 520275 103036
44 (EZ) 520273 103036
63 (TX) 520273 103036
47 (HTS) 520274 103035
520396 103035
66 (TSF) 520276 103090
310/3CP/5CP2 (Cat) 520282 N/A
5CP3/5CP5 (Cat) 520292 N/A
5CP6 (Cat) 520343 N/A
3/8”
*Flow will vary according to flow and pressure of the drive pump. For optimum performance, inlet pressure to the drive pump should be 
zero or negative but not to exceed drive pump specifications.
NEW! 
3,000 PSI
*Additional Pulse Pumps can be found on page 73
VEHICLE 
 CLEANING ACCESS
ORIES

INDUSTRIAL APPLICATIONS
Boats and pleasure craft
 Watermaking 
 Washdown 
 Boat hull cleaning 
Water treatment
 Reverse osmosis 
 Desalination 
 Water purification 
Sewer maintenance
 Sewer jetting 
 Root cutting 
 Hydro Excavation 
Tank cleaning
 Barrel reconditioning 
 Wine making
Mining/Oil & Gas 
 Exploration Drilling 
 Bentonite 
 Core sampling 
 BOP 
 Dyno/dynamic brake 
 Coil tubing 
 Glycol 
 Well stimulation 
 Waterblast 
 Chemical injection 
 Accumulator charging 
 
Misting/Fogging
 Evaporative cooling 
 Insect control 
 Bird control 
 Odor control 
 Fire suppression 
 Tower cooling 
 Power generation 
 
Water jet technology
 Coating removal 
 Surface preparation 
 Materials cutting/machining 
Industrial Process
 Hydraulic ram/press 
 Hydrostatic testing
Industrial cleaning 
 General cleaning 
 Surface stripping 
 Scale removal 
 Barrel cleaning 
Food processing
 Poultry deboning 
 Sanitation 
 Wine making 
 
Agricultural 
 Hydro-seeding 
 Fertilizer injection 
ATEX
Many of our industrial 
pumps can be built to 
ATEX certification.
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 37
KE Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• SAE-B drive options available 
• 420 SS Manifold
KE Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140° F 
Inlet Port Thread........................................................1" NPT--F 
Discharge Port Thread..........................................1/2" NPT-F 
Shaft Diameter................................................1.181”/30 mm 
Stroke ..............................................................0.9055”/23 mm 
Pump Dimensions......................................15.2"x13.4"x7.7" 
Crankcase Oil Capacity.............................67.63 oz./2 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight..............................................................88 lbs. 
Product Group ...........................................................................V
KE SERIES
MODEL GPM PSI RPM
KE20A 8.0 GPM 4,350 PSI 1450 RPM
KE22A 10.0 GPM 3,650 PSI 1450 RPM
KE24A 11.9 GPM 3,050 PSI 1450 RPM
KE28HA 16.1 GPM 2,170 PSI 1450 RPM
KE30HA 18.5 GPM 1,880 PSI 1450 RPM
KE36HA 26.4 GPM 1,450 PSI 1450 RPM
KE SERIES
KT Series - Features:
• Double pressure packings 
• Pressure packing design with integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• SAE-B hydraulic drive options available 
• 420 SS manifold (KT16A, 18A, 20A, 22A) 
• Nickel-plated cast iron manifold (KT24A, 28A, 30A, 32A, 36A, 40A)
KT Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.181"/30 mm 
Stroke.................................................................1.102"/26 mm 
Pump Dimensions.................................15.55"x13.4"x8.35" 
Crankcase Oil Capacity.............................67.63 oz./2 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................100 lbs. 
Product Group ...........................................................................V
KT SERIES
MODEL GPM PSI RPM
KT16A 7.2 GPM 7,250 PSI 1750 RPM
KT18A 9.2 GPM 5,800 PSI 1750 RPM
KT20A 11.4 GPM 4,650 PSI 1750 RPM
KT22A 13.7 GPM 3,650 PSI 1750 RPM
KT24A 16.3 GPM 2,900 PSI 1750 RPM
KT28A 22.2 GPM 2,540 PSI 1750 RPM
KT30A 25.4 GPM 2,175 PSI 1750 RPM
KT32A 29.1 GPM 1,750 PSI 1750 RPM
KT36A 33.1 GPM 1,813 PSI 1580 RPM
KT40A 37.5 GPM 1,450 PSI 1450 RPM
KT SERIES
* Please consult technical manual or GP Sales Representative for 
Temperature/Inlet Pressure information
KF Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• SAE-C hydraulic drive options available 
• Available with external gear box (direct drive only) 
• 420 SS Manifold
KF Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread.................................................1-1/2" NPT-F 
Discharge Port Thread...............................................1" NPT-F 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................20.7"x14.5”x9.9” 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................150 lbs. 
Product Group ...........................................................................V
KF SERIES
MODEL GPM PSI RPM
KF28A 24.5 GPM 3,050 PSI 1000 RPM
KF30A 28.0 GPM 2,900 PSI 1000 RPM
KF32A 31.7 GPM 2,600 PSI 1000 RPM
KF36A 40.0 GPM 2,000 PSI 1000 RPM
KF40A 45.0 GPM 1,600 PSI 1000 RPM
KF SERIES
ATEX Available
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 38
KS Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• SAE-C drive options available 
• Available with external gear box (direct drive only) 
• 420 SS Manifold
KS Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread.........................................................2" NPT-F 
Discharge Port Thread......................................1-1/2" NPT-F 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions ...................................23.0"x19.0"x11.0" 
Crankcase Oil Capacity..........................162.3 oz./4.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................212 lbs. 
Product Group ...........................................................................V
KS SERIES
MODEL GPM PSI RPM
KS28SA* 24.0 GPM 4,000 PSI 1000 RPM
KS28A 29.1 GPM 3,650 PSI 1200 RPM
KS32A 38.3 GPM 2,900 PSI 1200 RPM
KS36A 48.3 GPM 2,350 PSI 1200 RPM
KS40A 59.7 GPM 2,000 PSI 1200 RPM
KS SERIES
HS Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• SAE-C drive options available 
• Available with external gear box (direct drive only) 
• 420 SS manifold (HS18A is 17/4 ph)
HS Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread ..........................................3/4" NPT-F 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................21.4"x14.5"x9.4" 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................143 lbs. 
Product Group ...........................................................................V
HS SERIES
HS SERIES
MODEL GPM PSI RPM
HS18A 12.1 GPM 8,700 PSI 1200 RPM
HS20A 15.1 GPM 7,250 PSI 1200 RPM
NEW 
SERIES!
HF Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• SAE-C drive options available 
• Available with external gear box (direct drive only) 
• 420 SS manifold (HF18A is 17/4 ph)
HF Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread ..........................................3/4" NPT-F 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................20.0"x14.5"x9.4" 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................132 lbs. 
Product Group ...........................................................................V
HF SERIES
MODEL GPM PSI RPM
HF18A 8.1 GPM 8,700 PSI 800 RPM
10.1 GPM 7,250 PSI 1000 RPM
HF20A 12.4 GPM 5,800 PSI 1000 RPM
HF22A 12.05 GPM 5,800 PSI 800 RPM
15.0 GPM 5,075 PSI 1000 RPM
HF22JA* 19.7 GPM 4,000 PSI 1300 RPM
HF25A 19.4 GPM 4,060 PSI 1000 RPM
HF SERIES
Shown with optional gearbox
Shown with optional gearbox
*intermittent duty only
*intermittent duty only
INDUSTRIAL 
PUMPS

General Pump is pleased to introduce the “HY-PACK” series of pumps and hydraulic motors. This new family of products showcases our group’s expertise by 
combining efforts from both our water jetting and hydraulic divisions. The end 
result is a range of compact pump and motor combinations that drastically 
reduce assembly costs and footprint space. Contact a sales representative for details.
KE - KT - KV 
(25 - 35 HP)
KF - HF - VFH 
KS - HS - VKH 
(50 - 75 HP)
MW - SM 
(100 HP)
MF - MK - MKS 
(150 - 180 HP)
SAE B 2/4F 13T 
16/32 DP
SAE C 2/4F 14T 
12/24 DP
SAE C 4F 14T 
12/24 DP
SAE C 4F 14T 
12/24 DP 
SAE 4F 14T 
12/24DP
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 40
MW/MWS Series - Features:
• Low-high pressure packing design with integrated cooling system 
• Vertically fitted suction/delivery valves 
• Splash lubrication 
• Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1, 
2200 RPM=2.722:1, 2600 RPM=3.25:1 
• Includes drain/priming valve kit 
• F2152 kit allows for easy adaptation to MSS mounting pattern 
• SAE-C hydraulic shaft/flange option available 
MW/MWS Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140° F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................2.756"/70 mm 
Pump Dimensions ...................................29.5"x23.0"x14.5" 
Crankcase Oil Capacity.............................304.3 oz./9 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................540 lbs. 
Product Group ...........................................................................V
MW/MWS SERIES
MF Series - Features:
• Packings/plungers serviceable without removing manifold 
• Splash lubrication 
• Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1, 
2200 RPM=2.722:1, 2600 RPM=3.25:1 
• Nickel-plated cast iron manifold 
• F2152 kit allows for easy adaptation to MSS mounting pattern 
MF Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................2.756"/70 mm 
Pump Dimensions ...................................29.5"x23.0"x14.5" 
Crankcase Oil Capacity.............................304.3 oz./9 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................573 lbs. 
Product Group ...........................................................................V
MF SERIES
MK Series - Features:
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• Gear ratios: 1500 RPM=2.65:1, 1800 RPM=3.29:1 
• Includes drain/priming valve kit 
• SAE-D hydraulic drive available (w/1500 RPM version only) 
• Nickel-plated cast iron manifold
MK Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................2.165"/55 mm 
Stroke.................................................................2.835"/72 mm 
Pump Dimensions............................32.64"x29.38"x14.25" 
Crankcase Oil Capacity.......................456.5 oz./13.5 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................833 lbs. 
Product Group ...........................................................................V
MK SERIES
* Please consult technical manual or GP Sales Representative for 
Temperature/Inlet Pressure information
MK SERIES
MODEL GPM PSI RPM
MK40A 40.7 GPM 5,800 PSI 1500/1800 RPM
MK45A 51.3 GPM 4,350 PSI 1500/1800 RPM
MK50A 63.4 GPM 3,600 PSI 1500/1800 RPM
MK55A 76.6 GPM 2,900 PSI 1500/1800 RPM
MK60A 91.4 GPM 2,500 PSI 1500/1800 RPM
MK65A 107.3 GPM 2,175 PSI 1500/1800 RPM
MF SERIES
MODEL GPM PSI RPM
MF45A 71.0 GPM 2,900 PSI 1500/1800/2200/2600 RPM
MF50A 88.0 GPM 2,500 PSI 1500/1800/2200/2600 RPM
MF55A 106.0 GPM 2,030 PSI 1500/1800/2200/2600 RPM
MW/MWS SERIES
MODEL GPM PSI RPM
MW32A 36.9 GPM 4,350 PSI 1500/1800/2200/2600 RPM
MW36A 45.2 GPM 3,900 PSI 1500/1800/2200/2600 RPM
MWS40A 55.7 GPM 3,050 PSI 1500/1800/2200/2600 RPM
MWS45A 70.5 GPM 2,500 PSI 1500/1800/2200/2600 RPM
MWS50A 87.2 GPM 2,000 PSI 1500/1800/2200/2600 RPM
MWS55A 105.4 GPM 1,450 PSI 1500/1800/2200/2600 RPM
NEW 
SERIES!
Gearbox standard
ATEX Available
Gearbox standard
Gearbox standard
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 41
MKS Series - Features:
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficient suction/delivery valves 
• Splash lubrication 
• Gear ratios: 1500 RPM=2.23:1, 1800 RPM=2.65:1, 
2200 RPM=3.29:1 
• Includes drain/priming valve kit 
• SAE-C hydraulic drive available (w/ 2500 RPM version only) 
• SAE-D hydraulic drive available (w/ 1800 RPM version only) 
• Nickel-plated cast iron manifold
MKS Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140° F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................2.165"/55 mm 
Stroke.................................................................2.835"/72 mm 
Pump Dimensions............................32.64"x29.38"x14.25" 
Crankcase Oil Capacity.......................456.5 oz./13.5 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................833 lbs. 
Product Group ...........................................................................V
MKS SERIES
* Please consult technical manual or GP Sales Representative for 
Temperature/Inlet Pressure information
LK Series - Features:
• Drive shaft with double projection 
• Double pressure packings 
• Splash lubrication 
• Vertically fitted suction/delivery valves 
• Includes drain/priming valve kit 
• Gear ratios: 1500 RPM=2.95:1, 1750 RPM=3.158:1, 
1900 RPM=3.389:1 
• Nickel-plated cast iron manifold 
LK Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................3.546"/90 mm 
Pump Dimensions ...................................36.4"x26.4"x13.7" 
Crankcase Oil Capacity...........................473.5 oz./14 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................829 lbs. 
Product Group ...........................................................................V
LK SERIES
KV Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• SAE-C hydraulic drive options available 
• 420 SS manifold 
KV Series - Specifications:
Inlet Pressure ..........................................................75-100 PSI 
Max. Fluid Temperature .................................................*86°
 F 
Inlet Port Thread.....................................................3/4" BSP-F 
Discharge Port Thread ...................................1/2" G Special 
Shaft Diameter................................................1.181"/30 mm 
Stroke.................................................................0.905"/23 mm 
Pump Dimensions......................................18.2"x14.3"x7.2" 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight..............................................................88 lbs. 
Product Group ...........................................................................V
KV SERIES
KV SERIES
MODEL GPM PSI RPM
KV12 4.1 GPM 16,000 PSI 1750 RPM
KV14 5.5 GPM 11,600 PSI 1750 RPM
LK SERIES
MODEL GPM PSI RPM
LK3615 37.0 GPM 5,800 PSI 1500 RPM
LK3617 40.2 GPM 5,800 PSI 1750 RPM
LK4015 45.7 GPM 5,075 PSI 1500 RPM
LK4017 49.7 GPM 5,075 PSI 1750 RPM
LK4515 57.6 GPM 4,060 PSI 1500 RPM
LK4517 62.9 GPM 4,060 PSI 1750 RPM
LK5015 71.1 GPM 3,335 PSI 1500 RPM
LK5017 77.7 GPM 3,335 PSI 1750 RPM
LK5515 86.1 GPM 2,755 PSI 1500 RPM
LK5517 93.8 GPM 2,755 PSI 1750 RPM
LK6015 102.5 GPM 2,320 PSI 1500 RPM
LK6017 111.8 GPM 2,320 PSI 1750 RPM
MKS SERIES
MODEL GPM PSI RPM
MKS40A 48.4 GPM 5,800 PSI 1500/1800/2200 RPM
MKS45A 61.3 GPM 4,350 PSI 1500/1800/2200 RPM
MKS50A 75.8 GPM 3,625 PSI 1500/1800/2200 RPM
MKS55A 91.7 GPM 2,900 PSI 1500/1800/2200 RPM
MKS60A 109.1 GPM 2,465 PSI 1500/1800/2200 RPM
MKS65A 128.2 GPM 2,175 PSI 1500/1800/2200 RPM
NEW 
SERIES!
MKS50A-65A 
also available in 
420 SS manifold 
(MKSRH50A-65A)
ATEX Available
Gearbox standard
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 42
VFH Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• SAE-C hydraulic drive options available 
• 420 SS manifold 
VFH Series - Specifications:
Inlet Pressure ..........................................................75-100 PSI 
Max. Fluid Temperature .................................................*86° F 
Inlet Port Thread.....................................................3/4" BSP-F 
Discharge Port Thread ...................................1/2" G Special 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................24.0”x15.0”x9.0” 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................150 lbs. 
Product Group ...........................................................................V
VFH SERIES
VKH Series - Features:
• Low-high pressure packing design with integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• SAE-C hydraulic drive options available 
• 420 SS Manifold
VKH Series - Specifications:
Inlet Pressure ..........................................................75-100 PSI 
Max. Fluid Temperature .................................................*86°
 F 
Inlet Port Thread.....................................................3/4" BSP-F 
Discharge Port Thread ...................................1/2" G Special 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions............................25.39"x14.44"x15.11" 
Crankcase Oil Capacity..........................162.3 oz./4.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................212 lbs. 
Product Group ...........................................................................V
VKH SERIES
SM Series - Features:
• Double pressure packings 
• Pressure packing integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• SAE-C hydraulic mount available 
• Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1, 
2200 RPM=2.722:1, 2600 RPM=3.25:1 
• 420 SS manifold
SM Series - Specifications:
Inlet Pressure ..........................................................75-100 PSI 
Max. Fluid Temperature .................................................*86°
 F 
Inlet Port Thread.........................................................1-1/2" G 
Discharge Port Thread.................................3/4" HP-Special 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................2.756”/70 mm 
Pump Dimensions.................................34.6"x23.0"x14.13" 
Crankcase Oil Capacity.................................304 oz./9 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................573 lbs. 
Product Group ...........................................................................V
SM SERIES
* Please consult technical manual or GP Sales Representative for 
Temperature/Inlet Pressure information
VF SERIES
MODEL GPM PSI RPM
VFH12 3.3 GPM 21,750 PSI 750 RPM
4.0 GPM 17, 500 PSI 900 RPM
VFH14 4.5 GPM 16,000 PSI 750 RPM
6.0 GPM 11,600 PSI 1000 RPM
VKH SERIES
MODEL GPM PSI RPM
VKH12 5.3 GPM 21,750 PSI 1200 RPM
VKH14 7.4 GPM 15,950 PSI 1200 RPM
Shown with optional 
gearbox 
SM SERIES
MODEL GPM PSI RPM
SM14 6.9 GPM 21,750 PSI 1500/1800/2200/2600 RPM
SM16 9.0 GPM 17,400 PSI 1500/1800/2200/2600 RPM
SM18 11.4 GPM 13,050 PSI 1500/1800/2200/2600 RPM
SM20 14.0 GPM 10,875 PSI 1500/1800/2200/2600 RPM
SM22 16.9 GPM 8,700 PSI 1500/1800/2200/2600 RPM
SM24 20.1 GPM 7,250 PSI 1500/1800/2200/2600 RPM
Gearbox standard 
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 43
SK Series - Features:
• Double pressure packings 
• Pressure packing integrated cooling system 
• Horizontally fitted in-line valves 
• Splash lubrication 
• Hydraulic drive available 
• Gear ratios: 1500 RPM=2.95:1, 1750 RPM=3.389:1 
• 420 SS manifold 
SK Series - Specifications: 
Inlet Pressure ..........................................................75-100 PSI 
Max Fluid Temperature ..................................................*86°
 F 
Inlet Port Thread.................................................1-1/2" BSP-F 
Discharge Port Thread.................................3/4" HP-Special 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................3.546"/90 mm 
Pump Dimensions ...................................42.0"x26.4"x13.7" 
Crankcase Oil Capacity...........................473.4 oz./14 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................840 lbs. 
Product Group ...........................................................................V
SK SERIES
MODEL GPM PSI RPM
SK2015 11.4 GPM 21,750 PSI 1500 RPM
SK2017 11.6 GPM 21,750 PSI 1750 RPM
SK2215 13.7 GPM 18,850 PSI 1500 RPM
SK2217 14.0 GPM 18,850 PSI 1750 RPM
SK2415 16.4 GPM 15,950 PSI 1500 RPM
SK2417 16.6 GPM 15,950 PSI 1750 RPM
SK2615 19.3 GPM 13,050 PSI 1500 RPM
SK2617 19.6 GPM 13,050 PSI 1750 RPM
SK2815 22.3 GPM 11,600 PSI 1500 RPM
SK2817 22.7 GPM 11,600 PSI 1750 RPM
SK3015 25.4 GPM 10,150 PSI 1500 RPM
SK3017 25.9 GPM 10,150 PSI 1750 RPM
SK SERIES
MUD Series - Features:
• High pressure “MUD” pump 
• Specifically designed to pump fluids and muds typical of the 
drilling industry, up to 200 microns at 20% concentration 
• Self cleaning ball valves 
• Abrasion resistant packings and valves 
• High heat dissipation power end 
• Splash lubrication 
• Quick servicing of packings (patent pending) 
• Auxiliary PTO shaft available as an option 
• SAE hydraulic drive options available 
• Nickel-plated cast iron manifold 
MUD PUMPS
OPTIONAL GEARBOX
OPTIONAL GEARBOX FOR THE KS, KF, HF, HS, VKH, and VFH PUMPS
PART 
NUMBER
GEARBOX 
RATIOS
MINIMUM INPUT 
SPEED RPM
MAXIMUM INPUT 
SPEED RPM
F34207301 R=1.25:1 625 RPM 1250 RPM
F34207401 R=1.50:1 750 RPM 1500 RPM
F34207501 R=1.83:1 915 RPM 1830 RPM
“M” SERIES
MODEL GPM PSI RPM
KT45M 19.6 GPM 750 PSI 600 RPM
KF5M5B 46.7 GPM 750 PSI 600 RPM
KF5M9B 46.7 GPM 1,160 PSI 600 RPM
MF7M5B 53.3 GPM 750 PSI 218 RPM
MF7M5D 67.1 GPM 750 PSI 274 RPM
MF7M7B 53.3 GPM 1090 PSI 218 RPM
MF7M7D 67.1 GPM 1090 PSI 274 RPM
MK9M5B 105 GPM 750 PSI 289 RPM
MK9M5D 105 GPM 750 PSI 289 RPM
MK9M8B 105 GPM 1090 PSI 289 RPM
MK9M8D 105 GPM 1090 PSI 289 RPM
KT45M KF5M
MF7M MK9M
NEW 
SERIES!
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 44
TR AND SR SERIES
TR and SR Series - Features:
• Triplex plunger pump 
• Up to 236 GPM and 22,000 PSI 
• 300 HP or 450 HP 
• Can be mounted vertically or horizontally 
• Double end crankshaft 
• Internal gear reduction 
• Forced oil lubrication with integrated cooler, 
filter and gauge 
• Solid ceramic plungers 
• Available in three gear ratios (520 internal RPM): 
1500 RPM=2.90:1, 1800 RPM=3.46:1, 
2200 RPM=4.23:1 
TR and SR Series - Specifications: 
Inlet Pressure.............................................................30-70 PSI 
Shaft Diameter...................................................2.56"/65 mm 
TR Stroke...........................................................5.12"/130 mm 
SR Stroke.............................................................3.54"/90 mm 
Pump Dimensions ...................................50.0"x41.0"x28.5" 
Crankcase Oil Capacity...........................9.24 gal. (vertical) 
 13.75 gal. (horizontal) 
Use GP Series 220 Oil (see page 60) 
Shipping Weight .......................................................2,436 lbs. 
Product Group ...........................................................................V
TR and SR Series - Materials:
• Cast iron crankcase 
• 420 Stainless steel manifold 
• Steel alloy crankshaft 
• Forged steel connecting rods 
and connecting bushings 
• “R” style packings optional
CONTACT YOUR GENERAL PUMP SALES REPRESENTATIVE 
FOR FURTHER DETAILS
SR SERIES
MODEL GPM PSI RPM
SR26 19.9 GPM 21,750 PSI 1500/1800/2200 RPM
SR30 26.5 GPM 17,400 PSI 1500/1800/2200 RPM
SR32 29.8 GPM 14,500 PSI 1500/1800/2200 RPM
SR36 37.8 GPM 11,600 PSI 1500/1800/2200 RPM
SR50 73.0 GPM 5,800 PSI 1500/1800/2200 RPM
SR55 88.0 GPM 5,075 PSI 1500/1800/2200 RPM
SR60 105.0 GPM 4,350 PSI 1500/1800/2200 RPM
SR65 123.0 GPM 3,625 PSI 1500/1800/2200 RPM
SR70 143.0 GPM 3,190 PSI 1500/1800/2200 RPM
SR75 164.0 GPM 2,900 PSI 1500/1800/2200 RPM
TR SERIES
MODEL GPM PSI RPM
TR26 28.5 GPM 21,750 PSI 1500/1800/2200 RPM
TR30 37.8 GPM 17,400 PSI 1500/1800/2200 RPM
TR32 43.0 GPM 14,500 PSI 1500/1800/2200 RPM
TR36 54.4 GPM 11,600 PSI 1500/1800/2200 RPM
TR50 105.0 GPM 5,800 PSI 1500/1800/2200 RPM
TR55 127.0 GPM 5,075 PSI 1500/1800/2200 RPM
TR60 152.0 GPM 4,350 PSI 1500/1800/2200 RPM
TR65 178.0 GPM 3,625 PSI 1500/1800/2200 RPM
TR70 206.0 GPM 3,190 PSI 1500/1800/2200 RPM
TR75 237.0 GPM 2,900 PSI 1500/1800/2200 RPM
Product Group: K
INDUSTRIAL VALVES - FOR SR/TR SERIES
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
 Pneumatic Valves:
PNR4090LP 255 GPM 3,190 PSI Flanged Block Flanged Block 2 1/2" BSP - F 81.5 lbs.
PNR4090 220 GPM 5,800 PSI Flanged Block Flanged Block 2 1/2" BSP - F 81.5 lbs.
 Regulating Valves:
R4090LP 255 GPM 3,190 PSI Flanged Block Flanged Block 2-1/2" BSP-F 81.5 lbs.
R4090 220 GPM 5,800 PSI Flanged Block Flanged Block 2-1/2" BSP-F 81.5 lbs.
 Safety Relief Valves:
S4090/200 251 GPM 2,900 PSI 1-1/2" BSP-M Side N/A 44.0 lbs.
S4090/300 251 GPM 4,350 PSI 1-1/2" BSP-M Side N/A 44.0 lbs.
S4090/400 251 GPM 5,800 PSI 1-1/2" BSP-M Side N/A 44.0 lbs.
NEW
NEW
NEW
NEW PRODUCTS
ATEX 
Available
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 45
WM Series - Features:
• 316 stainless steel fluid end for superior corrosion protection 
• Solid ceramic plungers with advanced surface finish assure 
durability and longevity 
• Compact design offers solutions to space limitations 
• Parallel inlet and outlet valve design for efficiency and easy 
maintenance 
• Most models available with EPDM sealing option 
• Use motor #639610, 2.5 HP, 50/60 Hz for 4.2 GPM version
WM Series - Specifications:
Max. Inlet Pressure.........................................................50 PSI 
Max Discharge Pressure ..........................................1500 PSI 
Max Fluid Temperature................................................*140° F 
Inlet Port Thread...........1/2" NPT-F / 3/8"-19 NPT-F (WM0515C)
Discharge Port Thread..........................................3/8" NPT-F 
Shaft Diameter ..........................5/8" Hollow/24 mm Solid 
Pump Dimensions...........................................9.9"x7.5"x6.0" 
Crankcase Oil Capacity............................12.0 oz./.35 liters 
Use GP Series 100 Oil (see page 60) 
Shipping Weight..........................................................13.5 lbs. 
Product Group ...........................................................................V
WM SERIES
MODEL GPM PSI RPM
WM0515C 0.5 GPM 1,500 PSI 1750 RPM
WM0815C 0.8 GPM 1,500 PSI 1750 RPM
WM1015C 1.0 GPM 1,500 PSI 1750 RPM
WM1615C 1.6 GPM 1,500 PSI 1750 RPM
WM1815C 1.8 GPM 1,500 PSI 1750 RPM
WM2315C 2.3 GPM 1,500 PSI 1750 RPM
WM3015C 3.0 GPM 1,500 PSI 1750 RPM
WM3615C 3.6 GPM 1,500 PSI 1750 RPM
WM4215C 4.2 GPM 1,500 PSI 1750 RPM
 24 mm Solid Shaft:
WM1815S 1.8 GPM 1,500 PSI 1750 RPM
WM2515S 2.5 GPM 1,500 PSI 1750 RPM
WM4215S 4.2 GPM 1,500 PSI 1750 RPM
WM SERIES
AGGRESSIVE ENVIRONMENT PUMPS
TX Series 63SS - Features:
• 316 stainless steel fluid end for superior corrosion protection 
• Energized special pressure packings 
• 316 stainless steel inlet and outlet valves 
• Solid ceramic plungers 
• Dual Ball Bearings 
• Patented “high tech” low and high pressure seals
TX Series 63SS - Specifications:
Max. Inlet Pressure ......................................................115 PSI 
Max Fluid Temperature................................................*185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread......................................3/8"-9 BSP-F 
Shaft Diameter....................................................945"/24 mm 
Pump Dimensions...........................................8.4"x8.3"x4.8" 
Crankcase Oil Capacity............................14.0 oz./.41 liters 
Use GP Series 100 Oil (see page 60) 
Shipping Weight..........................................................22.3 lbs. 
Product Group ...........................................................................V
TX SERIES 63SS
MODEL GPM PSI RPM
TX1506S17SS 1.6 GPM 2,200 PSI 1750 RPM
TX1510S17SS 2.1 GPM 2,200 PSI 1750 RPM
TX1512S17SS 2.6 GPM 2,200 PSI 1750 RPM
TX1810S17SS 3.1 GPM 2,000 PSI 1750 RPM
TX1812S17SS 3.8 GPM 2,200 PSI 1750 RPM
TX SERIES 63SS
* Please consult technical manual or GP Sales Representative 
for Temperature/Inlet Pressure information
EWM Series - Features:
• 316 stainless steel fluid end for superior corrosion protection 
• Solid ceramic plungers with advanced surface finish assure 
durability and longevity 
• Compact design offers solutions to space limitations 
• Nickel-plated crankcase 
• 56C mounting flange 
• Use motor #639610, 2.5 HP, 50/60 Hz for 4.2 GPM version 
EWM Series - Specifications:
Max. Inlet Pressure ......................................................125 PSI 
Max Discharge Pressure ..........................................1500 PSI 
Max Fluid Temperature ...............................................*185° F 
Inlet Port Thread......................................................1.2" NPT-F
Discharge Port Thread..........................................3/8" NPT-F 
Shaft Diameter .....................................................5/8" Hollow 
Pump Dimensions......................................7.6" x 7.5" x 5.5" 
Crankcase Oil Capacity ............................. 8.5 oz./.25 liters 
Use GP Series 100 Oil (see page 60) 
Shipping Weight .......................................................11.05 lbs. 
Product Group ...........................................................................V
WM SERIES
MODEL GPM PSI RPM
EWM0515C 0.5 GPM 1,500 PSI 1750 RPM
EWM0815C 0.8 GPM 1,500 PSI 1750 RPM
EWM1015C 1.1 GPM 1,500 PSI 1750 RPM
EWM1615C 1.6 GPM 1,500 PSI 1750 RPM
EWM2315C 2.3 GPM 1,500 PSI 1750 RPM
EWM3015C 3.0 GPM 1,500 PSI 1750 RPM
EWM3715C 3.7 GPM 1,500 PSI 1750 RPM
EWM4215C 4.2 GPM 1,500 PSI 1750 RPM
 24 mm Solid Shaft:
EWM2515S 2.5 GPM 1,500 PSI 1750 RPM
EWM4215S 4.2 GPM 1,500 PSI 1750 RPM
EWM SERIES
NEW 
SERIES!
NEW
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 46
TSF Series 66SS - Features:
• New plunger design improves thermal shock resistance 
• 316 stainless steel wetted parts 
• 316 stainless steel manifold 
• Stainless steel inlet/outlet valve plugs with improved 
hydrostatic performance 
• Fully anodized crankcase 
• Patented “high tech” low and high pressure seals 
TSF Series 66SS - Specifications:
Max. Inlet Pressure ......................................................115 PSI 
Max. Fluid Temperature...............................................*185°
 F 
Inlet Port Thread ..............................................3/4"-14 BSP-F 
Discharge Port Thread....................................3/8"-19 BSP-F 
Shaft Diameter....................................................945"/24 mm 
Pump Dimensions ...................................13.4"x9.83"x6.28" 
Crankcase Oil Capacity............................40.6 oz./1.2 liters 
Use GP Series 100 Oil (see page 60) 
Shipping Weight..............................................................42 lbs. 
Product Group ...........................................................................V
TSF SERIES 66SS
MODEL GPM PSI RPM
TSF2019SS 7.5 GPM 3,000 PSI 1750 RPM
TSF2021SS 8.5 GPM 3,000 PSI 1750 RPM
TSF2221SS 10.2 GPM 3,000 PSI 1750 RPM
TSF2421SS 12.0 GPM 3,000 PSI 1750 RPM
TSF SERIES 66SS
KEZ Series - Features:
• 316 SS fluid end and wetted parts
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficiency suction/delivery valves 
• Splash lubrication 
• New high performance aluminum alloy connecting rods and a 
floating wrist pin enables extra load at half the weight, reducing 
vibrations and off center loads for quieter operation 
• Patented “high tech” low and high pressure seals 
KEZ Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*185°
 F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread..........................................1/2" NPT-F 
Shaft Diameter................................................1.181"/30 mm 
Stroke ..............................................................0.9055"/23 mm 
Pump Dimensions......................................15.1"x13.4"x7.7" 
Crankcase Oil Capacity.............................67.63 oz./2 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight..............................................................88 lbs. 
Product Group ...........................................................................V
KEZ SERIES
MODEL GPM PSI RPM
KEZ20A 8.0 GPM 3,000 PSI 1450 RPM
KEZ22A 10.0 GPM 3,000 PSI 1450 RPM
KEZ24A 11.9 GPM 3,000 PSI 1450 RPM
KEZ28HA 16.1 GPM 2,170 PSI 1450 RPM
KEZ30HA 18.5 GPM 1,880 PSI 1450 RPM
KEZ36HA 26.4 GPM 1,450 PSI 1450 RPM
KEZ SERIES
* Please consult technical manual or GP Sales Representative 
for Temperature/Inlet Pressure information
T Series 47SS - Features:
• 316 stainless manifold for superior corrosion protection 
• The preferred pump frame in the industry 
• Solid ceramic plungers with continuously lubricated packings 
• Oversized connecting rods for maximum life 
• Patented “high tech” low and high pressure seals
T Series 47SS - Specifications:
Max. Inlet Pressure ......................................................115 PSI 
Max Fluid Temperature................................................*185°
 F 
Inlet Port Thread..............................................1/2"-14 BSP-F 
Discharge Port Thread......................................3/8"-9 BSP-F 
Shaft Diameter....................................................945"/24 mm 
Pump Dimensions ........................................12.4"x9.2"x5.7" 
Crankcase Oil Capacity............................40.6 oz./1.2 liters 
Use GP Series 100 Oil (see page 60) 
Shipping Weight..........................................................31.0 lbs. 
Product Group ...........................................................................V
T SERIES 47SS
MODEL GPM PSI RPM
TS2010SS 3.4 GPM 2,200 PSI 1450 RPM
TS2012SS 4.0 GPM 3,000 PSI 1750 RPM
TS2212SS 4.75 GPM 2,200 PSI 1450 RPM
TS2016SS 5.55 GPM 3,000 PSI 1450 RPM
TS2212SS 5.55 GPM 2,200 PSI 1750 RPM
T SERIES 47SS
ATEX 
Available
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 47
KFZ Series - Features:
• 316 SS fluid end and wetted parts 
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficiency suction/delivery valves 
• Splash lubrication 
• New high performance aluminum alloy connecting rods and a 
floating wrist pin enables extra load at half the weight, reducing 
vibrations and off center loads for quieter operation 
KFZ Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max Fluid Temperature..................................................185°
 F 
Inlet Port Thread....................................................1-1/2" NPT 
Discharge Port Thread..................................................1" NPT 
Shaft Diameter ................................................1.574"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................20.7"x14.5"x9.9" 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................150 lbs. 
Product Group ...........................................................................V
KFZ SERIES
MODEL GPM PSI RPM
KFZ28A 24.5 GPM 3,000 PSI 1000 RPM
KFZ30A 28.0 GPM 2,900 PSI 1000 RPM
KFZ36A
32.2 GPM 2,300 PSI 800 RPM
36.2 GPM 2,050 PSI 900 RPM
40.0 GPM 1,900 PSI 1000 RPM
KFZ40A 45.0 GPM 1,600 PSI 900 RPM
KFZ SERIES
* Please consult technical manual or GP Sales Representative 
for Temperature/Inlet Pressure information
HFN Series - Features:
• Patent-pending symmetrical power end featuring top and bottom 
mounting holes allowing for easy left to right shaft conversion 
• Low-high pressure packing design with integrated cooling system 
• High volumetric efficiency suction/delivery valves 
• Splash lubrication 
• New high performance aluminum alloy connecting rods and a 
floating wrist pin enables extra load at half the weight, reducing 
vibrations and off center loads for quieter operation 
• Patented “high tech” low and high pressure seals 
• ASTM F51 SS manifold, 17/4 PH SS valves 
HFN Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread.........................................................1" NPT-F 
Discharge Port Thread ..........................................3/4" NPT-F 
Shaft Diameter ................................................1.575"/40 mm 
Stroke.................................................................1.969"/50 mm 
Pump Dimensions......................................20.0"x14.5"x9.4" 
Crankcase Oil Capacity..........................128.5 oz./3.8 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................132 lbs. 
Product Group ...........................................................................V
HFN SERIES
MODEL GPM PSI RPM
HFN25A 19.44 GPM 4,060 PSI 1000 RPM
HFN SERIES
ATEX 
Available
INDUSTRIAL 
PUMPS

INDUSTRIAL PUMPS
Page 48
LKN Series - Features:
• Low-high pressure packing design with integrated cooling system 
• Vertically fitted suction/delivery valves 
• Splash lubrication 
• Gear ratios: 1500 RPM=2.95:1, 1750 RPM=3.158:1, 
1900 RPM=3.389:1 
• ASTM F51 SS manifold, 17/4 PH SS valves 
LKN Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max. Fluid Temperature...............................................*140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.969"/50 mm 
Stroke:................................................................2.756"/70 mm 
Pump Dimensions ...................................36.8"x26.5"x13.7" 
Crankcase Oil Capacity...........................473.4 oz./14 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................829 lbs. 
Product Group ...........................................................................V
LKN SERIES
MODEL GPM PSI RPM
LKN3615 37.0 GPM 5,800 PSI 1500 RPM
LKN3617 40.1 GPM 5,800 PSI 1750 RPM
LKN4015 45.7 GPM 5,075 PSI 1500 RPM
LKN4017 49.7 GPM 5,075 PSI 1750 RPM
LKN4515 57.6 GPM 4,060 PSI 1500 RPM
LKN4517 62.8 GPM 4,060 PSI 1750 RPM
LKN5015 71.0 GPM 3,335 PSI 1500 RPM
LKN5017 77.6 GPM 3,335 PSI 1750 RPM
LKN5515 86.1 GPM 2,755 PSI 1500 RPM
LKN5517 93.7 GPM 2,755 PSI 1750 RPM
LKN6015 102.4 GPM 2,320 PSI 1500 RPM
LKN6017 111.7 GPM 2,320 PSI 1750 RPM
LKN SERIES
* Please consult technical manual or GP Sales Representative 
for Temperature/Inlet Pressure information
MWN Series - Features:
• Low-high pressure packing design with integrated cooling system 
• Vertically fitted suction/delivery valves 
• Splash lubrication 
• Gear ratios: 1500 RPM=1.876:1, 1800 RPM=2.238:1, 
2200 RPM=2.722:1, 2600 RPM=3.25:1 
• Optional drain/prime valve kit included 
• ASTM F51 SS manifold, 17/4 PH SS valves 
MWN Series - Specifications:
Max. Inlet Pressure.........................................................45 PSI 
Max Fluid Temperature..................................................140°
 F 
Inlet Port Thread..............................See specification sheet 
Discharge Port Thread...................See specification sheet 
Shaft Diameter................................................1.969"/50 mm 
Stroke.................................................................2.756"/70 mm 
Pump Dimensions ...................................29.5"x23.0"x15.5" 
Crankcase Oil Capacity...........................304.35 oz./9 liters 
Use GP Series 220 Oil (see page 60) 
Shipping Weight...........................................................540 lbs. 
Product Group ...........................................................................V
MWN SERIES
MODEL GPM PSI RPM
MWN32A 36.0 GPM 4,350 PSI 1500/1800,2200/2600 RPM
MWN36A 45.4 GPM 3,500 PSI 1500/1800,2200/2600 RPM
MWN40A 56.0 GPM 2,750 PSI 1500/1800,2200/2600 RPM
MWN45A 71.0 GPM 2,250 PSI 1500/1800,2200/2600 RPM
MWN50A 87.5 GPM 1,800 PSI 1500/1800,2200/2600 RPM
MWN55A 106.0 GPM 1,450 PSI 1500/1800,2200/2600 RPM
MWN SERIES
ATEX 
Available
ATEX 
Available
INDUSTRIAL 
PUMPS

INDUSTRIAL ACCESSORIES
Page 49
Industrial Unloaders
RA2L RA2 ZKX600 YVB16 ZK3608SS YVRP12029
INDUSTRIAL UNLOADERS
MODEL GPM RATED INLET OUTLET BYPASS SHP WGHT
 Manual bypass lever and automatic operation
RA2L 61.0 GPM 3,050 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 12.0 lbs.
 Automatic only
RA2 61.0 GPM 3,050 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 10.0 lbs.
ZKX600 16.0 GPM 8,700 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-M 17.6 lbs.
INDUSTRIAL UNLOADERS
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
YVB16 21.0 GPM 8,120 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 7.6 lbs.
YVB280SS 21.0 GPM 4,500 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 2.7 lbs.
YVB4021SS 21.0 GPM 4,500 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 2.0 lbs.
ZK3608SS (316 SS) 7.92 GPM 3,600 PSI 3/8" BSP-F 3/8" BSP-F (2) 3/8" BSP-F 2.3 lbs.
ZK7216SS 16.0 GPM 7,250 PSI 1/2" BSP-F 1/2" BSP-F (2) 1/2" BSP-F 5.9 lbs.
ZKBH3030 29.0 GPM 3,050 PSI 1/2" BSP-F 1/2" BSP-F 3/4" BSP-F 5.5 lbs.
YVB5121B 21.0 GPM 5,100 PSI 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 2.4 lbs.
YVRP12029 120.0 GPM 2,900 PSI (2) 1-1/4" BSP-F 1-1/4" BSP-F 1-1/2" BSP-F 6.5 lbs.
Industrial Regulating 
Valves 
R1/200 R2 R3HP/450 ZKTIMAX
INDUSTRIAL REGULATORS
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
R4090LP 255 GPM 3,190 PSI Flanged Block Flanged Block 2-1/2" BSP-F 81.5 lbs.
R4090 220 GPM 5,800 PSI Flanged Block Flanged Block 2-1/2" BSP-F 81.5 lbs.
YVS7250 21.0 GPM 7,250 PSI 1/2" BSP-F N/A 3/8" BSP-F 3.2 lbs.
R1/200A 29.0 GPM 2,900 PSI 3/4" NPT-F N/A 3/4" NPT-F 6.2 lbs.
R1/400A 29.0 GPM 5,800 PSI 3/4" NPT-F N/A 3/4" NPT-F 6.2 lbs.
R1/600A 18.5 GPM 8,700 PSI 3/4" NPT-F N/A 3/4” NPT-F 6.2 lbs.
R2 61.0 GPM 3,050 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 10.0 lbs.
R3LP/230 132.0 GPM 3,335 PSI 1-1/4" BSP-F N/A 1-1/4" BSP-F 13.2 lbs.
R3HP/450 90.0 GPM 6,525 PSI 1" BSP-F N/A 1" BSP-F 13.2 lbs.
R1503 7.9 GPM 21,750 PSI Flanged Block 1/2" BSP-F 1/2" BSP-M 14.3 lbs.
R1510 26.4 GPM 21,750 PSI Flanged Block 1/2" BSP-F 3/4" BSP-F 22.0 lbs.
R1520 63.4 GPM 21,750 PSI Flanged Block 1" BSP-F 1 1/4" BSP-M 22.0 lbs.
 Features manual bypass lever and automatic operation:
R2L 61.0 GPM 3,050 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 11.0 lbs.
 1.125" I.D. Hose Barb:
ZKTIMAX 53.0 GPM 870 PSI 3/4" BSP-F 1/2" BSP-F 1" BSP-F 4.5 lbs.
Product Group: K
Product Group: K
STAINLESS STEEL INDUSTRIAL REGULATING VALVES
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
R1X/200A 29.0 GPM 2,900 PSI 3/4" NPT-F N/A 3/4" NPT-F 6.2 lbs.
R1X/400A 29.0 GPM 5,800 PSI 3/4" NPT-F N/A 3/4" NPT-F 6.2 lbs.
R1X/600A 18.5 GPM 8,700 PSI 3/4" NPT-F N/A 3/4" NPT-F 6.2 lbs.
RX3/100 120.0 GPM 1,450 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 11.0 lbs.
RX3/300 132.0 GPM 4,350 PSI 1" BSP-F 3/4" BSP-F 1-1/4" BSP-F 11.2 lbs.
 316 Stainless Steel:
WMR15SS 5.5 GPM 1,500 PSI 3/8" NPT-F 3/8" NPT-F N/A 1.0 lbs.
WMNV14SS 5.0 GPM 4,000 PSI 1/4" NPT-F 1/4" NPT-F 90 Deg. Flow Path 0.6 lbs.
YVS23SS 5.3 GPM 2,300 PSI (2) 1/4" BSP-F 1/4" BSP-F N/A 1.0 lbs.
ZKSX1 16.0 GPM 3,600 PSI 1/2" BSP-F N/A 1/2" BSP-F 2.3 lbs.
YVS280SS 21.0 GPM 4,500 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 2.7 lbs.
YU2122SS 21.0 GPM 2,200 PSI 1/2" NPT 1/2" NPT 1/2" NPT 3.1 lbs.
Product Group: K
Industrial Regulating Valves
Stainless Steel
ZKSX1 R1X RX3 YVS280SS YU2122SS
R1503 R1510
NEW
NEW
WMNV14SS WMR15SS
INDUSTRIAL ACCESS
ORIES

INDUSTRIAL ACCESSORIES
Page 50
Industrial Safety Relief Valves
SV2 S723 SX3
INDUSTRIAL SAFETY RELIEF VALVES
MODEL GPM MAX INLET DISCHARGE SHP WGHT
S723/100 60.8 GPM 1,450 PSI 1/2" BSP-M Side 3.8 lbs.
S723/200 60.8 GPM 2,900 PSI 1/2" BSP-M Side 3.8 lbs.
S723/300 60.8 GPM 4,350 PSI 1/2" BSP-M Side 3.8 lbs.
S723/400 60.8 GPM 5,800 PSI 1/2" BSP-M Side 3.8 lbs.
S723/500 60.8 GPM 7,250 PSI 1/2" BSP-M Side 3.8 lbs.
S723/600 60.8 GPM 8,700 PSI 1/2" BSP-M Side 3.8 lbs.
S723/700 60.8 GPM 10,150 PSI 1/2" BSP-M Side 3.8 lbs.
S1520/800 63.7 GPM 11,600 PSI 1" BSP - M Side 17.7 lbs.
S1520/1000 63.7 GPM 14,500 PSI 1" BSP - M Side 17.7 lbs.
S1520/1200 63.7 GPM 17,400 PSI 1" BSP - M Side 17.7 lbs.
S1520/1500 63.7 GPM 21,750 PSI 1" BSP - M Side 17.7 lbs.
S455/100 132.0 GPM 1,450 PSI 3/4" BSP-M 36 mm Hose Barb 11.7 lbs.
S455/200 132.0 GPM 2,900 PSI 3/4" BSP-M 36 mm Hose Barb 11.7 lbs.
S455/300 132.0 GPM 4,350 PSI 3/4" BSP-M 36 mm Hose Barb 11.7 lbs.
S455/400 132.0 GPM 5,800 PSI 3/4" BSP-M 36 mm Hose Barb 11.7 lbs.
S455/450 132.0 GPM 6,525 PSI 3/4" BSP-M 36 mm Hose Barb 11.7 lbs.
S4090/200 251 GPM 2,900 PSI 1-1/2" BSP-M Side 44.0 lbs.
S4090/300 251 GPM 4,350 PSI 1-1/2" BSP-M Side 44.0 lbs.
S4090/400 251 GPM 5,800 PSI 1-1/2" BSP-M Side 44.0 lbs.
SV12/800 26.4 GPM 11,600 PSI 1/2" BSP-M Bottom 2.5 lbs.
SV12/1000 26.4 GPM 14,500 PSI 1/2" BSP-M Bottom 2.5 lbs.
SV12/1100 26.4 GPM 15,950 PSI 1/2" BSP-M Bottom 2.5 lbs.
SV12/1250 26.4 GPM 18,125 PSI 1/2" BSP-M Bottom 2.5 lbs.
SV12/1500 26.4 GPM 21,750 PSI 1/2" BSP-M Bottom 2.5 lbs.
 Stainless Steel:
YVS23SS 5.3 GPM 2,300 PSI 1/4" BSP-F 1/4” BSP-F 0.5 lbs.
SX2/100 50.0 GPM 1,450 PSI 1/2" BSP-M Bottom 2.5 lbs.
SX2/200 50.0 GPM 2,900 PSI 1/2" BSP-M Bottom 2.5 lbs.
SX2/300 50.0 GPM 4,350 PSI 1/2" BSP-M Bottom 2.5 lbs.
SX2/400 50.0 GPM 5,800 PSI 1/2" BSP-M Bottom 2.5 lbs.
SX2/500 50.0 GPM 7,250 PSI 1/2" BSP-M Bottom 2.5 lbs.
SX3/200 132.0 GPM 2,900 PSI 3/4" NPT-F Bottom 2.5 lbs.
SX3/300 132.0 GPM 4350 PSI 3/4" NPT-F Bottom 2.5 lbs.
Industrial Safety Valves
S1503 S1510
Product Group: K
Product Group: K
INDUSTRIAL SAFETY VALVES
MODEL GPM MIN SETTING PRESSURE *INLET OUTLET SHP WGHT
S1503/700 2.6 to 7.9 GPM 10,150 PSI 10,150 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/800 2.6 to 7.9 GPM 10,150 PSI 11,600 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1000 2.6 to 7.9 GPM 10,150 PSI 14,500 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1100 2.6 to 7.9 GPM 10,150 PSI 15,950 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1200 2.6 to 7.9 GPM 10,150 PSI 17,500 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1400 2.6 to 7.9 GPM 10,150 PSI 20,300 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1600 2.6 to 7.9 GPM 10,150 PSI 23,200 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1503/1800 2.6 to 7.9 GPM 10,150 PSI 26,100 PSI 1/2" BSP-M 14 mm Hose Barb 2.2 lbs.
S1510/800 5.2 to 26.4 GPM 6,960 PSI 11,600 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
S1510/1000 5.2 to 26.4 GPM 6,960 PSI 14,500 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
S1510/1100 5.2 to 26.4 GPM 6,960 PSI 15,950 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
S1510/1250 5.2 to 26.4 GPM 6,960 PSI 18,125 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
S1510/1500 5.2 to 26.4 GPM 6,960 PSI 21,750 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
S1510/1800 5.2 to 26.4 GPM 6,960 PSI 26,100 PSI 1/2" BSP-M 25 mm Hose Barb 6.0 lbs.
*Please note these valves are only for use with VFH, VKH, SM and SK Series Pumps and require use of conical seal 680086.
NEW
NEW
I
NEW
NDUSTRIAL 
ACCESS
ORIES

INDUSTRIAL ACCESSORIES
Page 51
Industrial Pneumatic Valves
YRVPP26SS FPN12
Product Group: K
INDUSTRIAL PNEUMATIC VALVES
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
PNR/1503 7.9 GPM 21,750 PSI Flanged/Block 1/2" BSP - F 1/2" BSP - F 13.2 lbs.
YRVPP26SS 21.0 GPM 4,500 PSI 1/2” BSP-F 1/2” BSP-F 1/2” BSP-F 8.2 lbs.
PNRA2 61.0 GPM 3,050 PSI 1” BSP-F 3/4” BSP-F 1-1/4” BSP-M 11.0 lbs.
PNR2 61.0 GPM 3,050 PSI 1” BSP-F 3/4” BSP-F 1-1/4” BSP-M 11.0 lbs.
PN2 61.0 GPM 7,250 PSI 1-1/2” BSP-F 1-1/2” BSP-M 1-1/2” BSP-M 55.0 lbs.
PNR1520 63.4 GPM 21,750 PSI Flanged Block 1" BSP - F 1 1/4" BSP - F 30.8 lbs.
PN4/200 132.0 GPM 2,900 PSI 1-1/2” BSP-F 1-1/2” BSP-F 1-1/2” BSP-F 35.3 lbs.
PN4/300 103.0 GPM 4,300 PSI 1-1/2” BSP-F 1-1/2” BSP-F 1-1/2” BSP-F 35.3 lbs.
PN4/450 68.7 GPM 6,530 PSI 1” BSP-F 1” BSP-F 1-1/4” BSP-F 35.3 lbs.
PN/VU2 61.0 GPM 3,050 PSI 1” BSP-F 3/4” BSP-F 1-1/4” BSP-M 17.5 lbs.
FPN12 21.0 GPM 21,750 PSI 3/8” BSP-F 3/8” BSP-F 3/8” BSP-F 55.3 lbs.
 Features No Check Valve:
PN4/200NCV 132 GPM 2,900 PSI 1-1/2" BSP-F 1-1/2" BSP-F 1-1/2" BSP-F 35.3 lbs.
PN4/300NCV 103 GPM 4,350 PSI 1-1/2" BSP-F 1-1/2" BSP-F 1-1/2" BSP-F 35.3 lbs.
PN4/450NCV 68.7 GPM 6,530 PSI 1" BSP-F 1" BSP-F 1-1/4" BSP-F 35.3 lbs.
Industrial Check Valve
UD1 Product Group: K
INDUSTRIAL CHECK VALVES
MODEL GPM RATED MAX INLET OUTLET SHP WGHT
UD1 48.0 GPM 75 PSI 2,900 PSI 3/4" BSP-M 3/4" BSP-M 1.5 lbs.
Industrial Foot Valve
Product Group: K DFV5012
INDUSTRIAL FOOT VALVES
MODEL GPM MAX INLET OUTLET BYPASS SHP WGHT
VP12 21.0 GPM 21,750 PSI 3/8" BSP-F 3/8" BSP-F 3/8" BSP-F 22.5 lbs.
DFV5010 10.0 GPM 5,000 PSI 3/8" NPT-F 1/4" NPT-F N/A 12.0 lbs.
Industrial Pulsation 
Dampeners
Product Group: K A4X
INDUSTRIAL PULSATION DAMPENERS
MODEL MATERIAL GPM RATED INLET SHP WGHT
A4X * 316 Stainless Steel 16.0 GPM 3,050 PSI 1/2" BSP-M 7.0
A7* Forged Steel 43.0 GPM 3,050 PSI 1/2" BSP-M 7.0
A7S* Forged Steel 43.0 GPM 4,750 PSI 3/4" BSP-M 12.0
A7X* 316 Stainless Steel 43.0 GPM 2,150 PSI 3/4" BSP-M 8.5
A15* Forged Steel 105.6 GPM 4,750 PSI 3/4" BSP-M 15.0
A15X* 316 Stainless Steel 105.6 GPM 2,150 PSI 3/4" BSP-M 15.0 
*190417 Recharge and Fitting (100038 recharge kit, 680135 fitting)
Jetter Valves 
For Use in Sewer Cleaning Applications
Product Group: K 100315
JETTER VALVES
MODEL DESCRIPTION SHP WGHT
100315 Use with TT and TC Pumps (Replaces Valve Cap) 0.5 lbs.
100316 Use with EZ, EP, ES/ESN Pumps (Replaces Valve Cap) 0.5 lbs.
100317 Use with 47 Series Pumps (Replaces Valve Cap, Coarse Thread) 0.5 lbs.
100072 Use with 47 Series Pumps (Replaces Valve Cap, Fine Thread) 0.5 lbs.
101065 Use with ET Series Pumps (Replaces Valve Cap) 0.5 lbs.
NEW
NEW
NEW
NEW
INDUSTRIAL ACCESS
ORIES
VP12

INDUSTRIAL ACCESSORIES
Page 52
HYDRO EXCAVATING NOZZLE
HXNOZ
TRIPLE-STREAM HYDRO EXCAVATING NOZZLE
MODEL NOZZLE 
1
NOZZLE 
2
NOZZLE 
3
NOZZLE 
EQUIVALENT
FLOW - GPM
1000 
PSI
1500 
PSI
2000 
PSI
2500 
PSI
3000 
PSI
3500 
PSI
4000 
PSI
HXNOZ
HX212 900020SH 900010SH 900020SH #5.0 2.50 GPM 3.06 GPM 3.54 GPM 3.95 GPM 4.33 GPM 4.68 GPM 5.00 GPM
HX222 900020SH 900020SH 900020SH #6.0 3.00 GPM 3.67 GPM 4.24 GPM 4.74 GPM 5.20 GPM 5.61 GPM 6.00 GPM
HX232 900020SH 900030SH 900020SH #7.0 3.50 GPM 4.29 GPM 4.95 GPM 5.53 GPM 6.06 GPM 6.55 GPM 7.00 GPM
HX323 900030SH 900020SH 900030SH #8.0 4.00 GPM 4.90 GPM 5.66 GPM 6.32 GPM 6.93 GPM 7.48 GPM 8.00 GPM
HX333 900030SH 900030SH 900030SH #9.0 4.50 GPM 5.51 GPM 6.36 GPM 7.12 GPM 7.79 GPM 8.42 GPM 9.00 GPM
HX343 900030SH 900040SH 900030SH #10.0 5.00 GPM 6.12 GPM 7.07 GPM 7.91 GPM 8.66 GPM 9.35 GPM 10.00 GPM
HX434 900040SH 900030SH 900040SH #11.0 5.50 GPM 6.74 GPM 7.78 GPM 8.70 GPM 9.53 GPM 10.29 GPM 11.00 GPM
HX444 900040SH 900040SH 900040SH #12.0 6.00 GPM 7.35 GPM 8.49 GPM 9.49 GPM 10.39 GPM 11.22 GPM 12.00 GPM
HX454 900040SH 900050SH 900040SH #13.0 6.50 GPM 7.96 GPM 9.19 GPM 10.28 GPM 11.26 GPM 12.16 GPM 13.00 GPM
HX545 900050SH 900040SH 900050SH #14.0 7.00 GPM 8.57 GPM 9.90 GPM 11.07 GPM 12.12 GPM 13.10 GPM 14.00 GPM
HX555 900050SH 900050SH 900050SH #15.0 7.50 GPM 9.19 GPM 10.61 GPM 11.86 GPM 12.99 GPM 14.03 GPM 15.00 GPM
HX565 900050SH 900060SH 900050SH #16.0 8.00 GPM 9.80 GPM 11.31 GPM 12.65 GPM 13.86 GPM 14.97 GPM 16.00 GPM
HX656 900060SH 900050SH 900060SH #17.0 8.50 GPM 10.41 GPM 12.02 GPM 13.44 GPM 14.72 GPM 15.90 GPM 17.00 GPM
HX666 900060SH 900060SH 900060SH #18.0 9.00 GPM 11.02 GPM 12.73 GPM 14.23 GPM 15.59 GPM 16.84 GPM 18.00 GPM
HX676 900060SH 900070SH 900060SH #19.0 9.50 GPM 11.64 GPM 13.44 GPM 15.02 GPM 16.45 GPM 17.77 GPM 19.00 GPM
HX767 900070SH 900060SH 900070SH #20.0 10.00 GPM 12.25 GPM 14.14 GPM 15.81 GPM 17.32 GPM 18.71 GPM 20.00 GPM
HX777 900070SH 900070SH 900070SH #21.0 10.50 GPM 12.86 GPM 14.85 GPM 16.60 GPM 18.19 GPM 19.64 GPM 21.00 GPM
HX787 900070SH 900080SH 900070SH #22.0 11.00 GPM 13.47 GPM 15.56 GPM 17.39 GPM 19.05 GPM 20.58 GPM 22.00 GPM
HX878 900080SH 900070SH 900080SH #23.0 11.50 GPM 14.08 GPM 16.26 GPM 18.18 GPM 19.92 GPM 21.51 GPM 23.00 GPM
HX888 900080SH 900080SH 900080SH #24.0 12.00 GPM 14.70 GPM 16.97 GPM 18.97 GPM 20.78 GPM 22.45 GPM 24.00 GPM
HX898 900080SH 900090SH 900080SH #25.0 12.50 GPM 15.31 GPM 17.68 GPM 19.76 GPM 21.65 GPM 23.39 GPM 25.00 GPM
HX989 900090SH 900080SH 900090SH #26.0 13.00 GPM 15.92 GPM 18.38 GPM 20.55 GPM 22.52 GPM 24.32 GPM 26.00 GPM
HX999 900090SH 900090SH 900090SH #27.0 13.50 GPM 16.53 GPM 19.09 GPM 21.35 GPM 23.38 GPM 25.26 GPM 27.00 GPM
HX9109 900090SH 900100SH 900090SH #28.0 14.00 GPM 17.15 GPM 19.80 GPM 22.14 GPM 24.25 GPM 26.19 GPM 28.00 GPM
HX10910 900100SH 900090SH 900100SH #29.0 14.50 GPM 17.75 GPM 20.51 GPM 22.93 GPM 25.11 GPM 27.13 GPM 29.00 GPM
HX101010 900100SH 900100SH 900100SH #30.0 15.00 GPM 18.37 GPM 21.21 GPM 23.72 GPM 25.98 GPM 28.06 GPM 30.00 GPM
Product Group: 
• STANDARD 1/2" NPT CONNECTION (FEMALE) 
 
• HIGH IMPACT - 0 DEGREE NOZZLES (THREE) 
 
• URETHANE COATED FOR DURABILITY AND OPERATOR PROTECTION 
 
• STAINLESS STEEL BODY 
 
• HARDENED STAINLESS NOZZLE INSERTS FOR LONG LIFE 
 
• EASILY CHANGE WORN NOZZLES 
 
• DIMENSIONS: 1-3/4" LONG X 2-1/4" WIDE 
 
• FLOW TO 30 GPM, PRESSURE TO 4,000 PSI 
 
• MULTIPLE COLOR OPTIONS AVAILABLE (with volume purchase) 
SEWER JETTING HOSE REEL ATTACHMENT
MODEL DESCRIPTION TEMP MAX PALLET 
QTY
2100358 Sewer jetting hose reel attachment - attaches to any hose reel - includes ball 
 valve, 1/4" inlet/outlet gauge and 3 sewer jet nozzles 185°
 F 5,000 PSI N/A
HOSE REEL ATTACHMENT
NEW PRODUCT! INDUSTRIAL 
ACCESS
ORIES

INDUSTRIAL ACCESSORIES
Page 53
Industrial Spray Guns
YG7207
ZP87SSL29S P12 YG7221
Product Group: K
INDUSTRIAL SPRAY GUNS
MODEL DESCRIPTION GPM MAX SHP WGHT
ZP87SS Stainless Steel Professional Gun 15.85 GPM 8,700 PSI 3.5 lbs.
ZP87SSL29 Stainless Steel Gun with 29" Lance 15.85 GPM 8,700 PSI 4.9 lbs.
ZP87SSL39 Stainless Steel Gun with 39" Lance 15.85 GPM 8,700 PSI 6.1 lbs.
ZP87SSL29S Stainless Steel Gun with 29" Lance and Shoulder Support 15.85 GPM 8,700 PSI 5.6 lbs.
ZP87SSL39S Stainless Steel Gun with 39" Lance and Shoulder Support 15.85 GPM 8,700 PSI 7.2 lbs.
INDUSTRIAL SPRAY GUNS
MODEL DESCRIPTION GPM MAX INLET SHP WGHT
YG7207 Rear Entry Spray Gun 7.5 GPM 8,000 PSI 3/8" NPT-F 1.6 lbs.
DCG5010HE Excavating Spray Gun 10.5 GPM 10,000 PSI 3/8" NPT-F 1.4 lbs.
ZP15A Gun with 29" Lance 10.6 GPM 22,000 PSI Special 12.5 lbs.
ZP15AL10 Gun with 39" Lance 10.6 GPM 22,000 PSI Special 12.0 lbs.
PS12 Submersible Dump Gun 21.0 GPM 21,750 PSI 1/2" BSP-F 12.5 lbs.
YG7221 Rear Entry Gun 21.0 GPM 7,250 PSI 1/2" BSP-F 5.0 lbs.
101002 YG7207 Spray Gun, with 36" Stainless Steel Lance 7.5 GPM 8,000 PSI 3/8" NPT-F 2.6 lbs.
YG2527S Industrial Spray Gun, Straight 27.0 GPM 2,500 PSI 1/2" NPT-F 2.8 lbs.
YG4032S Industrial Spray Gun, Straight 32.0 GPM 4,050 PSI 1/2" NPT-F 2.8 lbs.
YG23LA27 Gun, 27" Adjustable Lance, 2.3 mm Nozzle 21.0 GPM 2,000 PSI 1/2" BSP-F 3.8 lbs.
YG34LA27 Gun, 27" Adjustable Lance, 3.5 mm Nozzle 21.0 GPM 2,000 PSI 1/2" BSP-F 3.8 lbs.
YG29LA31 Gun, 31.5" Adjustable Lance, 1.5 mm Nozzle 8.0 GPM 3,000 PSI 3/8" BSP - F 3.7 lbs.
Industrial Spray Guns
Product Group: K YG7221-L51
INDUSTRIAL SPRAY GUNS WITH LANCE AND SIDE GRIPS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX TEMP SHP WGHT
YG7221-L31 31" Lance 21.0 GPM 7,250 PSI 8,100 PSI 1/2" BSP-F 1/2" BSP-M 210° F 7.0 lbs.
YG7221-L51 48" Lance 21.0 GPM 7,250 PSI 8,100 PSI 1/2" BSP-F 1/2" BSP-M 210° F 7.0 lbs.
Industrial Rotating Nozzles
ZRMAX112 Product Group: K Y5K100 YRT8720
INDUSTRIAL ROTATING NOZZLES
MODEL NOZZLE MAX INLET MAX TEMP SHP WGHT
Y5K100 #10 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs.
Y5K120 #12 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs.
Y5K150 #15 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs.
Y5K200 #20 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs.
INDUSTRIAL TUNGSTEN CARBIDE ROTATING NOZZLES
MODEL NOZZLE MIN MAX INLET MAX TEMP SHP WGHT
YRT87K20 #02 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K30 #03 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K40 #04 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K50 #05 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K60 #06 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K70 #07 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
YRT87K80 #08 2,600 PSI 8,700 PSI 1/4" BSP-F 194° F 1.2 lbs.
INDUSTRIAL ROTATING NOZZLES
MODEL ORIFICE GPM MAX INLET MAX TEMP SHP WGHT
ZRMAX112 1.10 2.02 to 4.74 GPM 11,000 PSI 3/8" BSP-F 176° F 2.2 lbs.
ZRMAX113 1.35 3.32 to 7.78 GPM 11,000 PSI 3/8" BSP-F 176° F 2.2 lbs.
ZRMAX114 1.55 4.44 to 10.40 GPM 11,000 PSI 3/8" BSP-F 176° F 2.2 lbs.
ZRMAX115 1.80 5.71 to 13.39 GPM 11,000 PSI 3/8" BSP-F 176° F 2.2 lbs.
NEW
NEW
NEW
Product Group: I
304 STAINLESS STEEL LANCES
MODEL LENGTH GPM RATED MAX INLET OUTLET SHP 
WGHT
BOX 
QTY
680267 36" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 3.0 lbs. N/A
680268 48" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 4.0 lbs. N/A
680269 60" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 5.0 lbs. N/A
680270 72" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 6.0 lbs. N/A
680358 96" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 8.0 lbs. N/A
DCG5010HE
INDUSTRIAL 
ACCESSORIES

INDUSTRIAL ACCESSORIES
Page 54
Industrial Rotating Nozzles 
Titanium Seat
ZRMAX2220
Product Group: K
INDUSTRIAL ROTATING NOZZLES - TITANIUM SEAT
MODEL ORIFICE GPM INLET OUTLET MAX TEMP SHP WGHT
ZRMAX2220 .9 1.4 to 4.7 GPM 22,000 PSI M14 x 1/2" 140° F 2.64 lbs.
ZRMAX2225 1.0 1.8 to 6.0 GPM 22,000 PSI M14 x 1/2" 140° F 2.64 lbs.
ZRMAX2231 1.1 2.2 to 7.3 GPM 22,000 PSI M14 x 1/2" 140° F 2.64 lbs.
ZRMAX2245 1.2 2.6 to 8.6 GPM 22,000 PSI M14 x 1/2" 140° F 2.64 lbs.
ZRMAX2259 1.35 3.4 to 11.2 GPM 22,000 PSI M14 x 1/2" 140° F 2.64 lbs.
Industrial Filters
F30
Product Group: K
INDUSTRIAL FILTERS
MODEL DESCRIPTION GPM PSI MESH/MICRON INLET OUTLET SHP WGHT
F50/80 Stainless Steel, Two-stage 10.5 GPM 145 PSI 70/10 Mesh 1" BSP-F 1" BSP-F 12.0 lbs.
F10 Aluminum 15.8 GPM 435 PSI 60/250 1-1/2" BSP-F 1-1/2" BSP-F 3.5 lbs.
F60 Stainless Steel, Two-stage 52.0 GPM 145 PSI 70/25 Mesh 2" BSP-F 2" BSP-M 33.0 lbs.
F20 Aluminum 53.0 GPM 145 PSI 60/250 2" BSP-F 2" BSP-F 13.0 lbs.
F30 Plastic 53.0 GPM 116 PSI 50/297 2" BSP-M 2" BSP-M 3.8 lbs.
F40 Plastic 120.0 GPM 116 PSI 50/297 3" BSP-M 3" BSP-M 6.6 lbs.
639273 Plastic 55.0 GPM 150 PSI 50/297 2" NPT-F 2" NPT-F 4.0 lbs.
639276 Plastic 125.0 GPM 150 PSI 50/297 3" NPT-F 3" NPT-F 7.0 lbs.
Industrial Accessories
190601 Product Group: J
INDUSTRIAL ACCESSORIES
MODEL DESCRIPTION
680094 Belt Tension Slide Plate, Rated for 40 Horsepower
680095 Priming/Drain Valve Kit for MS,/MW Series Pumps (includes 3 valves)
680096 Priming/Drain Valve Kit for LH/MK/MKS Series Pumps (includes 3 valves)
190600 Cylinder Prime Drain Valve Kit for MS/MW Series Pumps (includes 3 valves)
190601 Cylinder Prime Drain Valve Kit for MS/MW Series Pumps (single valve)
Flow Switches
INDUSTRIAL FLOW SWITCHES
PART 
NUMBER GPM RATED PRESSURE
MAX 
PRESSURE
MAX 
TEMP INLET OUTLET SHP WGHT
 5 Amp, 250 Volts,New High Flow Flow Switch, 4 gpm minimum activation, 12" 18 AWG LEAD:
101068 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
 With Weatherpack connector:
101069 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
Product Group: D
101068 101069
INDUSTRIAL 
ACCESS
ORIES

INDUSTRIAL ACCESSORIES
Page 55
Tank Cleaning Nozzles
Y25450000 Y25460000
Y25438060
Y25459000 Y25430060
Y25482000
Product Group: K
TANK CLEANING NOZZLES
MODEL DESCRIPTION GPM MAX SHP WGHT
Y25450000 M63 for Small Openings, 24V 4.0 to 10.5 GPM 2,000 PSI 14.0 lbs.
Y25477000 M85 Electric for Large Openings, 24V 21.0 GPM 2,000 PSI 14.0 lbs.
Y25460000 M63 Self-propelled for Small Openings 4.0 to 10.5 GPM 2,000 PSI 14.0 lbs.
Y25475000 M85 Self-propelled for Large Openings 21.0 GPM 2,000 PSI 14.0 lbs.
Y25459000 M63 Pneumatic for Small Openings 4.0 o 10.5 GPM 2,000 PSI 10.0 lbs.
Y25479000 M85 Pneumatic for Large Openings 21.0 GPM 2,000 PSI 11.5 lbs.
Y25482000 A80R Self-propelled 
 Request modified version when using non-rigid drop 6.0 to 32.0 GPM 2,000 PSI 11.0 lbs.
Y25485000 A80R2 Self-propelled (high RPM version) 
 Request modified version when using non-rigid drop 6.0 to 21.0 GPM 2,000 PSI 11.0 lbs.
Y25430060
 M21 Electric for Barrel Cleaning 
 - For use with pressure washer 
 - 110V
5.5 GPM 3,200 PSI 7.0 lbs.
Y25435060
 M25E Electric for Barrel Cleaning 
 - With suction capability 
 - 110V
6.5 GPM 2,300 PSI 9.0 lbs.
Y25438060
 M28E Electric for Barrel Cleaning 
 - With 90o motor for small areas 
 - With suction capability
6.5 GPM 2,300 PSI 9.0 lbs.
INDUSTRIAL ACCESS
ORIES

ACCESSORIES
LUBRICANTS 
 
TRAPPED PRESSURE UNLOADERS 
 
FLOW SENSITIVE UNLOADERS 
 
REGULATING VALVES 
 
SAFETY RELIEF VALVES 
 
NEEDLE VALVES 
 
PUMP THERMAL PROTECTORS 
 
CHECK VALVES 
 
CHEMICAL INJECTORS
SPRAY GUNS 
 
LANCES 
 
HOSE REELS 
 
HIGH-PRESSURE SPRAY TIPS 
 
ROTATING NOZZLES 
 
TANK CLEANING NOZZLES 
 
ADJUSTABLE NOZZLES 
 
COUPLERS AND FITTINGS 
 
INLET FILTERS AND STRAINERS
THERMOSTATS 
 
PRESSURE SWITCHES 
 
FLOW SWITCHES 
 
SWIVELS 
 
ACCUMULATORS 
 
GAUGES
HYDRAULIC DRIVE/ 
DRIVE COMPONENTS

HYDRAULIC DRIVE
Page 57
HYDRAULIC VERSIONS OF 51(TT), 60(TC) AND 63(TX) SERIES PUMPS 
SAE Type “A” Flange, 5/8” Straight Shaft 
TX1812HA17
4.20 GM 
2,645 PSI 
1750 RPM
TC1809HA17 
3.30 GM 
2,165 PSI 
1750 RPM
TT1509HA28 
3.43 GM 
2,175 PSI 
2500 RPM
639723*
Motor
HYDRAULIC FLANGE/COUPLER FOR 47, 66(TSF/TSP) SERIES PUMPS
ZGH47SB 
SAE Type “B”, 7/8” Straight Shaft
ZFH47SB
SAE Type “B”, 2 Bolt
639664*
Muncie Motor
*Call GP 
for 
hydraulic 
motor 
requirements
HYDRAULIC FLANGE/COUPLER FOR 70 SERIES PUMPS
ZGH70SB 
SAE Type “B”, 1” Straight Shaft
ZFH70SB
SAE Type “B”, 2 and 4 Bolt
639611*
Muncie Motor
HYDRAULIC FLANGE/COUPLER FOR 71 & 72 (KF, HF, VF, VK and KS) SERIES PUMPS
For separate 
coupler pieces 
call GP
ZFH71SC
SAE Type “C”, 2 and 4 Bolt 
530060 Features Tach Port
639660*
Muncie Motor
ZGH71SCB................SAE-C-1-1/4" Parallel...................40 mm Pump Hub and 1/1/4" Motor Hub, Blue Insert, 
 46 HP Max 
ZGH71SCT.................SAE-C-1-1/4" Parallel...................40 mm Pump Hub and 1-1/4" Motor Hub, Black Insert, 46 HP+ 
ZGH71SCR ................SAE-C-1-1/4" Parallel...................40 mm Pump Hub and 1-1/4" Motor Hub, Red Insert, 
 25 HP Max 
ZGH71SC14TB.........SAE-C-14T 12/24DP ....................40 mm Pump Hub and Splined 14 tooth 12/24 Motor Hub, 
 Blue Insert, 46 HP Max 
ZGH71SC14TT .........SAE-C-14T 12/24DP ....................40 mm Pump Hub and Splined 14 Tooth 12/24 Motor Hub, 
 Black Insert, 46 HP + 
ZGH71SC14TR.........SAE-C-14T 12/24DP ....................40 mm Pump Hub and splined 14 tooth 12/24 Motor Hub, 
 Red Insert, 25 HP Max 
ZGH71SC14TS SAE-C-14T 12/24DP Features Snap Ring and Groove for Tach Pickup
To be used with these GP Couplers:
HYDRAULIC DRIVE/ 
DRIVE COMPONENTS

DRIVE COMPONENTS
ACCESSORIES - GEAR REDUCERS & FLANGES
Page 58
Gear Reducers and 
Multipliers
ZGRS1000
Product Group: F
GEAR REDUCERS AND MULTIPLIERS
MODEL DESCRIPTION SHP WGHT
ZGR0750 2.4 to 1 Reduction for 3/4" Shafted Engines, 3 to 5 HP, J609A (49 and 50 Series at 1450 RPM) 5.0 lbs.
SGR1125 Mounting Plate for Flat Mounting (ZGR1000 and ZGR1125) 0.5 lbs.
ZGRS1000 2.2 to 1, 1" Shafted Engines, Up to 25 HP, J609A Flange, 47 and 66 Series pumps 9.5 lbs.
ZGRS1125 2.2 to 1, 1-1/8" Shafted Engines, Up to 25 HP, J609A Flange, 47 and 66 Series pumps 9.5 lbs.
ZGRS1000H 2.2 to 1, 1" Shaft, Honda® Approved for GX240-GX390, 47 and 66 Series pumps 9.5 lbs.
YGR0750 2.3 to 1 Reduction, 3/4" Shafted Engines, 3 to 5 HP, J609A (49 and 50 Series at 1450 RPM) 4.0 lbs.
YGR1000 2.2 to 1 Reduction, Dual Bearings, 1" Shafted Engines, 11 to 18 HP, J609B (47 Series at 1450 RPM) 6.0 lbs.
YGR1000P 2.2 to 1 Reduction, Dual Bearings, 1" Shafted Engines, 11 to 24 HP, J609B (47 and 66 Series at 1450 RPM) 6.0 lbs.
YGR1125 2.2 to 1 Reduction, 1-1/8" Shaft, Dual Bearings, 11 to 18 HP, J609F (47 Series at 1450 RPM) 6.0 lbs.
YGR1125P 2.2 to 1 Reduction, Dual Bearings, 1-1/8" Shafted Engines, 11 to 24 HP, J609B (47 and 66 Series at 1450 RPM) 6.0 lbs.
YGR1125P31 2.2 to 1 Reduction, Dual Bearings, 1/1/8" Shafted Engines. 20 to 31 HP, J609B(47 and 66 Series at 1450 RPM) 6.0 lbs.
ZGRPTO 1 to 1.9 Multiplier, 540 RPM PTO, 1-3/8" Spline Shaft, Up to 10 HP Pumps (47 and 66 Series) 9.5 lbs.
YGR1125P31 ZGRPTO
Flex Couplers
ZGL100
Product Group: F
FLEX COUPLERS
MODEL DESCRIPTION SHP WGHT
ZG56C 24 mm x 5/8" (Finger) 1.2 lbs.
ZG145TC 24 mm x 7/8" (Finger) 1.3 lbs.
ZG184TC 24 mm x 1-1/8" (Finger) 1.5 lbs.
ZG202 24 mm x 1-3/8" (Finger) 2.5 lbs.
ZGL100 24 mm x 1" (Jaw) for use with ZF811 on 8 to 11 HP Engines 3.0 lbs.
ZG184TC
Flanges
ZF184
Product Group: F
FLANGES - ENSURE PUMP & MOTOR RPMS MATCH WHEN SELECTING
MODEL DESCRIPTION SHP WGHT
ZF181 For NEMA-C Electric Motors 3.5 lbs.
ZF184N For NEMA-C Electric Motors 184TC Frame, Use with ZG184TC Coupler (Series 63, 44, ET and EP) 3.5 lbs.
ZF184 For NEMA-C Electric Motors 184TC Frame, 3 and 5 HP (Series 50 Pumps) 3.0 lbs.
ZF213215 For NEMA-C Electric Motors, 213TC, 215 TC and 184TC Frames, 5 and 7-1/2 HP (Series 66, 47, 48, ES/ESN) 4.0 lbs.
ZF213215SS For NEMA-C Electric Motors, 213TC, 215 TC and 184TC Frames, 5 and 7-1/2 HP (Series 66, 47, 48 ES/ESN), 4.0 lbs.
ZF56145 For NEMA-C Electric Motors, 56C, 145TC and 182TC Frames, 1-1/2 and 2 HP (Series 49, 50 ET and EP) 1.5 lbs.
ZF811 Gas Engine Flange for 8 to 11 GP Gas Engines (TT9351 or TT9441 Pumps) 3.0 lbs.
ZFWWS Gas Engine Flange for 3.5 to 8 HP Gas Engines (TT/TP Series 51 Pumps) 2.0 lbs.
ZFWWU For NEMA-C Electric Motors, 56C Frame (TT/TP Series 51 Pumps) 2.0 lbs.
ZFH70SB Hydraulic Flange, SAE-B (KE Series), Call GP Sales for More Information 6.0 lbs.
ZFH71SC Hydraulic Flange SAE-C (KF, HS, HF, VFH, VKH, KS Series), Call GP Sales for More Information 6.0 lbs.
HYDRAULIC DRIVE/ 
DRIVE COMPONENTS

DRIVE COMPONENTS
ACCESSORIES - PULLEYS, CLUTCHES
Page 59
Pulleys
ZUH178
Product Group: F
ZP-Pulleys ZP3B60
PULLEYS
MODEL DESCRIPTION SHP WGHT
ZP100 3.94 in. / 100 mm, 2 Groove, A Section, Aluminum 1.0 lbs.
ZP140 5.51 in. / 140 mm, 2 Groove, A Section, Aluminum 1.4 lbs.
ZP160 6.30 in. / 160 mm, 2 Groove, A Section, Aluminum 1.8 lbs.
190225 Pulley and Rail Kit (includes 639015 and (2) 540014) 1.5 lbs.
639015 1 Groove, B Section, Aluminum, 8" Outer Diameter, 24 mm Hub 1.5 lbs.
ZP4140 4 Groove, B Section, Aluminum, 32 mm
ZP3B136 Pulley, 13.95 OD, 3 Groove, SK (can be used in the CW1541 to HTCK4050S conversion)
ZP3B60 Pulley, 6.35 OD, 3 Groove, SD (can be used in the CE1541 to HTCK4050S conversion)
CLUTCHES
MODEL DESCRIPTION SHP WGHT
100687 12 Volt Double “A” Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs.
100688 12 Volt Double “A” Groove Clutch Adapter Kit for 44, 50, 63, ET and EP Series Pumps 11.0 lbs.
100717 12 Volt Single “A” Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs.
100718 12 Volt Single “A” Groove Clutch Adapter Kit for 44, 50, 63, ET and EP Series Pumps 11.0 lbs.
100719 24 Volt Double “A” Groove Clutch Adapter Kit for 47 and ES/ESN Series Pumps 11.0 lbs.
100720 24 Volt Double “A” Groove Clutch Adapter Kit for 44, 50, 63,ET and EP Series Pumps 11.0 lbs.
100172 12 Volt Double “A” Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, No Pulley 25.0 lbs.
100976 12 Volt Double “B” Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, 12.4" Pulley 31.0 lbs.
101046 12 Volt Double “B” Groove Clutch Adapter Kit for 47, 59, 66 and ES/ESN Series Pumps, 9-3/4" Pulley 33.5 lbs.
100977 12 Volt Single “B” Groove Clutch Adapter Kit for 47, 66 and ES/ESN Series Pumps, 12.4" Pulley 24.0 lbs.
100163 Clutch Assembly Tool for 7” Clutch 11.0 lbs.
BROWNING TYPE “H” PULLEY BUSHINGS
MODEL DESCRIPTION SHP WGHT
ZBBH24 24 mm 0.5 lbs.
ZUH30 30 mm, Universal 1.0 lbs.
ZBBH35 35 mm 0.5 lbs.
ZUH40 40 mm, Universal 1.0 lbs.
ZUH178 1-7/8", SD Type
Clutches
100976
Product Group: F
100687
PUMP FEET OPTIONS
MODEL DESCRIPTION SHP WGHT
ZKRAIL078 Kit, Rails, 7/8", 44, 63 Series, Small 2.0 lbs.
ZKRAIL138 Kit, Rails,1-3/8", 47, 66 Series, Large 2.0 lbs.
ZKRAIL258 Kit, Rails, 2-5/8", 47, 66 Series, Tall 2.0 lbs.
101112 Kit, Rails for Emperor Platinum Pumps 2.0 lbs.
101046
ZKRAIL138
HYDRAULIC DRIVE/ 
DRIVE COMPONENTS

DRIVE COMPONENTS
ACCESSORIES - OIL & OIL DRAIN KITS
Page 60
Oil
100295
Product Group: M
SERIES 100 OIL (30 WEIGHT)
MODEL DESCRIPTION SHP WGHT
100295 Series 100 Oil, 16 oz. Bottle 3.0 lbs.
100552 Series 100 Oil, 2-1/2 Gallons 25.0 lbs.
100214 BULK PACKAGED: Series 100 Oil, 6-Pack of 16 oz. Bottles 7.0 lbs.
100216 BULK PACKAGED: Series 100 Oil, 24-Pack of 16 oz. Bottles (Product Group: B) 25.0 lbs.
100553 BULK PACKAGED: Series 100 Oil, (2) 2-1/2 Gallons (Product Group: B) 50.0 lbs.
100219 BULK PACKAGED: Series 100 Oil, 15 Gallon Plastic Drum (Product Group: B) 117.0 lbs.
100552
Product Group: M
SERIES 220 OIL (50 WEIGHT)
MODEL DESCRIPTION SHP WGHT
100450 Series 220 Industrial Oil, 2-1/2 Gallons 25.0 lbs.
100016 BULK PACKAGED: Series 220 Industrial Oil, 6-Pack of 16 oz. Bottles (Product Group B) 7.0 lbs.
100217 BULK PACKAGED: Series 220 Industrial Oil, 5 Gallons (Product Group B) 50.0 lbs.
Product Group: M
SERIES 8090 OIL (80/90 GEAR LUBE)
MODEL DESCRIPTION SHP WGHT
100734 Series 8090 Oil, 2-1/2 Gallons 25.0 lbs.
100735 BULK PACKAGED: Series 8090 Oil (2) 2-1/2 Gallons (Twin Pack) (Product Group B) 50.0 lbs.
Product Group: M
MISCELLANEOUS
MODEL DESCRIPTION SHP WGHT
100256 Grease Gun Kit, 3 oz. Tube with Gun 2.0 lbs.
100264 Packing Lubricant, 3 oz. Tube 0.7 lbs.
100278 Industrial Packing Lubricant, 12 oz. Tube 0.75 lbs.
Product Group: M
OIL DRAIN KITS
MODEL DESCRIPTION SHP WGHT
190446 Oil Drain Kit, 1/4" For Series 60, 63, 47, 44, 50, 60, ET, ES, EP Pumps 1.5 lbs.
190447 Oil Drain Kit, 3/8", For Series 69, 70, 76, 77 Pumps 1.5 lbs.
190448 Oil Drain Kit, 1/2", For Series 71, 72, MWS, SM Pumps 1.5 lbs.
Oil Drain Kits
Oil Drain Kit
HYDRAULIC DRIVE/ 
DRIVE COMPONENTS

TRAPPED PRESSURE UNLOADERS
ACCESSORIES - VALVES
Product Group: S PULSAR4LP PULSAR4KLP PULSAR4HP PULSAR4KHP PULSAR4HPMS
PULSAR4 TRAPPED PRESSURE UNLOADERS
MODEL GPM RATED MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
 Lower Pressure Unloader, White Spring
PULSAR4LP 10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.5 lbs.
PULSAR4KLP 10.5 GPM 2,300 PSI 2,600 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.6 lbs.
 High Pressure Unloader, Blue Spring
PULSAR4HP 10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.6 lbs.
PULSAR4KHP 10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.7 lbs.
 With Stainless Steel Check Valve
PULSAR4KHPS 10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.6 lbs.
 With EZ Start and Knob
PULSAR4KHPEZ 10.5 GPM 4,050 PSI 4,500 PSI (2) 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.7 lbs.
 With Microswitch - 16A Resistive Load, 6A Inductive Load
PULSAR4HPMS 10.5 GPM 4,050 PSI 4,500 PSI 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 1.9 lbs.
PULSAR4KHPMS 10.5 GPM 4,050 PSI 4,500 PSI 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 2.0 lbs.
PULSAR4KLPMS 10.5 GPM 2,300 PSI 2,600 PSI 3/8" NPT-M 3/8" NPT - M (2) 3/8" NPT - F 195° F 2.0 lbs.
 Product Group: N
Y60014924 Pressure Adjusting Knob Kit for PULSAR4 Unloaders 0.1 lbs.
Product Group: S PLSR4LVNCV YU2158NCV YUB21405NCV
TRAPPED PRESSURE UNLOADERS - NO CHECK VALVES
MODEL GPM MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
YVB3KA/NCV 6.5 GPM 3,650 PSI 3/8" NPT - M 3/8" NPT - M 3/8" NPT - F 195° F 1.0 lbs.
PLSR4HVNCV 10.5 GPM 4,050 PSI (2) 3/8" NPT-F 3/8" NPT-F 3/8" NPT-F 194° F 1.6 lbs.
PLSR4LVNCV 10.5 GPM 2,600 PSI (2) 3/8" NPT-F 3/8" NPT-F 3/8" NPT-F 194° F 1.6 lbs.
YU2158NCV 21.0 GPM 6,500 PSI (2) 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 200° F 4.0 lbs.
YUB21405NCV 21.0 GPM 4,050 PSI (2) 1/2" NPT-F (2) 1/2" NPT-F 1/2" NPT-F 200° F 3.1 lbs.
Product Group: S YU21235 YU21405 YU5221 YU2158
TRAPPED PRESSURE UNLOADERS
MODEL GPM RATE MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
 Yellow Spring
YU21235 21.0 GPM 2,300 PSI 2,600 PSI (2) 1/2" NPT-F 1/2" NPT-F (2) 1/2" NPT-F 200° F 3.1 lbs.
 White Spring
YUW21235 21.0 GPM 2,300 PSI 2,600 PSI (2) 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 200° F 3.1 lbs.
 Green Spring 
YU21405 21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2" NPT-F 1/2" NPT-F (2) 1/2" NPT-F 200° F 3.1 lbs.
 Green Spring (features stainless steel outlet/bypass fittings)
YU21405S 21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2" NPT-F 1/2" NPT-F (2) 1/2" NPT-F 200° F 3.1 lbs.
 Blue Spring 
YUB21405 21.0 GPM 4,050 PSI 4,500 PSI (2) 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 200° F 3.1 lbs.
 Hi-Flow
YU5221 53.0 GPM 2,200 PSI 2,450 PSI 1" NPT-F 1" NPT-F 1" NPT-F 200° F 4.5 lbs.
 303 Stainless Steel
YU2158 21.0 GPM 5,800 PSI 6,500 PSI (2) 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 200° F 4.0 lbs.
YU5821 21.0 GPM 5,800 PSI 6,400 PSI 1/2" BSP - F 1/2" BSP - F 1/2" BSP - F 194° F 2.2 lbs.
YU7221 21.0 GPM 7,250 PSI 8,000 PSI 1/2" BSP - F 1/2" BSP - F 1/2" BSP - F 194° F 2.3 lbs.
 316 Stainless Steel w/ Viton
YU2122SS 21.0 GPM 2,200 PSI 2,500 PSI 1/2" NPT 1/2" NPT 1/2" NPT 194° F 3.1 lbs.
 High Temperature Brass
YVB4021HT 21.0 GPM 4,050 PSI 4,500 PSI 1/2" NPT - F 1/2" NPT - F 1/2" NPT - F 195° F 2.4 lbs.
YVB5121HT 21.0 GPM 5,100 PSI 5,650 PSI 1/2" NPT - F 1/2" NPT - F 1/2" NPT - F 195° F 2.4 lbs.
YU2122SS
Page 61
NEW
NEW
NEW
VALVES

TRAPPED PRESSURE UNLOADERS
ACCESSORIES - VALVES
Page 62
Product Group: S
YVB5K YVB9K YVB9KMS2 YU4050K YU5075K YVB3K
ADJUSTABLE TRAPPED PRESSURE UNLOADERS
MODEL GPM RATED MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
YVB5K 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-M 3/8" BSP-F 3/8" BSP-F 195° F 1.2 lbs.
YVB7K 8.0 GPM 3,200 PSI 3,650 PSI 3/8" NPT-M 3/8" NPT-F 3/8" NPT-F 195° F 1.2 lbs.
 Includes Panel Mount Feature
YVB9K 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-F 3/8" BSP-F 195° F 2.0 lbs.
 Includes 5 Amp Microswitch
YVB8KMS 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-M 3/8" BSP-F 3/8" BSP-F 195° F 2.0 lbs.
 Includes 10 Amp Microswitch
YVB8KMS10 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-F 3/8" BSP-F 195° F 2.0 lbs.
 Includes Panel Mount Feature and 5 Amp Microswitch
YVB9KMS2 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-F (2)3/8" BSP-F 195° F 2.0 lbs.
 Includes Panel Mount Feature, 5 Amp Microswitch and Stainless Steel Check Valve
YVB9KMSS 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 1/2" BSP-M 3/8" BSP-F 195° F 2.0 lbs.
 High Pressure Unloaders with KNOB (YU4050K-Black, YU5075K-Red, YVB5121B-Red)
YU4050K 10.0 GPM 4,050 PSI 4,500 PSI 3/8" BSP-M 3/8" BSP-F 1/2" BSP-F 195° F 2.0 lbs.
YU5075K 10.0 GPM 5,075 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 1/2" BSP-F 195° F 2.0 lbs.
YU5075KS 10.0 GPM 5,075 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 1/2" BSP-F 195° F 2.0 lbs.
 With 5 Amp Microswitch and Stainless Steel check Valve
YU5075KMS 10.0 GPM 5,075 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 3/8" BSP-F 195° F 2.0 lbs.
 Premium Pressure - Compensating Unloader w/Min-Max Setting, Stainless Steel Check Valve and Brass Knob
YU5075KMM 10.0 GPM 5,075 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 1/2" BSP-F 195° F 3.0 lbs.
 Trapped Pressure Unloader for the 51 and 60 Series Pumps
YVB3K 6.5 GPM 3,200 PSI 3,650 PSI 3/8" BSP-M 3/8" BSP-M 3/8" BSP-F 195° F 1.0 lbs.
YVB3KA 6.5 GPM 3,200 PSI 3,650 PSI 3/8" NPT-M 3/8" NPT-M 3/8" NPT-F 195° F 1.0 lbs.
YVB3KTT 6.5 GPM 3,200 PSI 3,650 PSI 1/4" NPT-M 3/8" NPT-M 3/8" NPT-F 195° F 1.0 lbs.
 Unloader with Knob and 1.8, 2.1 or 2.3 mm Injector
YVB3KTTI18 6.5 GPM 3,200 PSI 3,650 PSI 1/4" NPT-M 3/8" NPT-M 3/8" NPT-F 195° F 1.25 lbs.
YVB3KTTI21 6.5 GPM 3,200 PSI 3,650 PSI 1/4" NPT-M 3/8" NPT-M 3/8" NPT-F 195° F 1.25 lbs.
YVB3KTTI23 6.5 GPM 3,200 PSI 3,650 PSI 1/4" NPT-M 3/8" NPT-M 3/8" NPT-F 195° F 1.25 lbs.
Product Group: S
ZKHM ZK4010 ZK5813
TRAPPED PRESSURE UNLOADERS
MODEL GPM MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
2100242 8.0 GPM 4,000 PSI (2) 3/8" NPT 3/8" NPT (2) 3/8" NPT 195° F 2.0lbs.
ZKHM 10.8 GPM 3,000 PSI 3/8" BSP-F 1/4 BSP-F & 3/8" BSP-M (2) 3/8" BSP-F 185° F 2.5lbs.
ZKHM1 (no knob) 10.8 GPM 3,000 PSI 3/8" BSP-F 1/4 BSP-F & 3/8" BSP-M (2) 3/8" BSP-F 185° F 2.5lbs.
ZK4010 2.11 to 10.5 GPM 4,000 PSI 3/8" BSP-F 3/8" BSP-M (2) 3/8" BSP-M 185° F 2.3 lbs.
ZK5813 2.11 to 13.2 GPM 5,800 PSI 1/2" BSP-F 1/2" BSP-M (2) 1/2" BSP-M 185° F 6.2 lbs.
Product Group: S
YU3678 YU3678MS
MODIFIED PRESSURE UNLOADERS
MODEL GP RATED MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
 Includes Panel Mount Feature
YU3678 8.0 GPM 3,200 PSI 3,650 PSI 3/8" NPT-F 3/8" NPT-F 3/8" NPT-F 195° F 2.5 lbs.
 Includes Panel Mount Feature and Stainless Steel Check Valve
YU3678MS 8.0 GPM 3,200 PSI 3,650 PSI 3/8" NPT-F 3/8" NPT-F 3/8" NPT-F 195° F 2.5 lbs.
VALVES

CONTROL SET UNLOADERS
ACCESSORIES - VALVES
Page 63
Product Group: S
ZKW1 ZKW21 YVB135KDM YVB75KDM YVB55KDM YU4050KDM
DIRECT MOUNT, CONTROL SET UNLOADERS
MODEL GPM RATED MAX INLET OUTLET HOSE 
BARB
MAX 
TEMP
SHP 
WGHT
 Direct Mount Unloader with Chemical Gauge, Pressure Gauge and Filter
Z0KR1 2.1 GPM 1,000 PSI 1,000 PSI 1/2" NPT-M M22 1/4" 165° F 2.0 lbs.
 Direct Mount Unloader with 2 mm Injector
ZKW1 3.0 GPM 1,600 PSI 1,600 PSI 3/8" BSP-F 3/8" BSP-M 1/4" 165° F 2.0 lbs.
 Direct Mount Unloader Without Injector
ZKW1SC 3.0 GPM 1,600 PSI 1,600 PSI 3/8" BSP-M 3/8" BSP-M 1/4" 165° F 2.0 lbs.
 Interpump Direct Mount, Control Set Unloaders, Available With or Without Injectors
ZKW326 2.6 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 165° F 2.0 lbs.
ZKW340 4.0 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 165° F 2.0 lbs.
ZKW355 5.5 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 165° F 2.0 lbs.
 Direct Mount Unloader with 2.2 mm Injector
ZKW21 4.5 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 200° F 2.0 lbs.
 Long Body Unloader with 2.2 mm Injector
ZKW21L 4.5 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 200° F 2.0 lbs.
 Long Body Unloader with 2.5 mm Injector
ZKW22L 6.0 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 200° F 2.0 lbs.
 Long Body Unloader Without Injector
ZKW2LSC 6.0 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 200° F 2.0 lbs.
 Unloader With 2.2 mm Injector
ZKW2SC 4.5 GPM 3,000 PSI 3,000 PSI 1/2" BSP-F 3/8" BSP-M 1/4" 200° F 2.0 lbs.
190043 ZKW2SC With Banjo Fittings 2.0 lbs.
Product Group: S
DIRECT MOUNT, CONTROL SET UNLOADERS FOR TT/TP SERIES 51 PUMP
MODEL GPM RATED MAX INLET OUTLET INJECTOR MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YVB135KDM 6.5 GPM 2,300 PSI 2,600 PSI 3/8" BSP-F 3/8" BSP-M N/A 195° F 1.5 lbs. 24
YVB135KDMI18 6.5 GPM 2,300 PSI 2,600 PSI 3/8" BSP-F 3/8" BSP-M 1.8 mm 195° F 1.8 lbs. 20
YVB135KDMI21 6.5 GPM 2,300 PSI 2,600 PSI 3/8" BSP-F 3/8" BSP-M 2.1 mm 195° F 1.8 lbs. 20
YVB351KDM 6.5 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-M N/A 195° F 1.8 lbs. 24
YVB351KDMI18 6.5 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-M 1.8 195° F 1.9 lbs. 20
YVB351KDMI21 6.5 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-M 2.1 195° F 1.9 lbs. 20
YVB75KTP 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-M N/A 195° F 1.8 lbs. 20
YVB75KTPF21 8.0 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-M 2.1 mm 195° F 2.1 lbs. 20
DIRECT MOUNT, CONTROL SET UNLOADERS FOR EZ, 47, 60 AND 63 SERIES PUMPS
MODEL GPM RATED MAX INLET OUTLET HOSE 
BARB INJECTOR MAX TEMP
SHP 
WGHT
BOX 
QTY
YVB35KDM 6.5 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-M N/A N/A 195° F 1.5 lbs. 24
YVB35KDMI18 6.5 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-M 1/4” 1.8 mm 195° F 1.8 lbs. 20
YVB35KDMI21 6.5 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-M 1/4” 2.1 mm 195° F 1.8 lbs. 20
YVB56KDM 8.0 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-F N/A N/A 195° F 2.5 lbs. 20
YVB56KDMI21 8.0 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-F 1/4” 2.1 mm 195° F 2.1 lbs. 20
YVB75KDMN 7.8 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-F N/A N/A 195° F 1.8 lbs. 20
YVB75KDMN21 7.8 GPM 3,200 PSI 3,650 PSI 1/2" BSP-F 3/8" BSP-F 1/4” 2.1 mm 195° F 2.1 lbs. 20
 EZ Series Only
YU4050KDM 10.5 GPM 4,050 PSI 4,500 PSI 1/2" BSP-F 3/8" BSP-F N/A N/A 195° F 3.0 lbs. 10
Product Group: S
DIRECT MOUNT, CONTROL SET UNLOADERS FOR EP SERIES PUMPS
MODEL GPM RATED MAX INLET OUTLET HOSE 
BARB INJECTOR MAX TEMP
SHP 
WGHT
BOX 
QTY
YVB35KDME 6.5 GPM 3,200 PSI 3,650 PSI 1/2” BSP-F 3/8” BSP-F N/A N/A 195° F 1.5 lbs. 24
Product Group: S
VALVES

FLOW SENSITIVE UNLOADERS
ACCESSORIES - VALVES
Page 64
Product Group: S
ZK1 ZK3 ZK50 ZK7 ZK9
FLOW SENSITIVE UNLOADERS
MODEL GPM MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
BOX 
QTY
ZK1 2.3 to 10.8 GPM 3,600 PSI 3/8" BSP-F 1/2" BSP-M 1/2" BSP-M 165° F 2.3 lbs. 10
ZK138 2.3 to 10.8 GPM 3,600 PSI 3/8" BSP-F 3/8" BSP-M 1/2" BSP-M 165° F 2.3 lbs. 10
ZK30 2.1 to 3.0 GPM 1,500 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.0 lbs. 10
ZK31 3.0 to 4.2 GPM 1,500 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.0 lbs. 10
ZK32 4.2 to 5.5 GPM 1,500 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.0 lbs. 10
ZK33 5.0 to 6.0 GPM 1,500 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.0 lbs. 10
ZK50 2.1 to 3.0 GPM 3,000 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2” BSP-F 165°
 F 2.5 lbs. 10
ZK51 3.0 to 4.2 GPM 3,000 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.5 lbs. 10
ZK52 4.2 to 6.6 GPM 3,000 PSI 3/8" BSP-F 3/8" BSP-M 3/4" BSP-M 
or 1/2" BSP-F 165°
 F 2.5 lbs. 10
ZK53 6.6 to 10.8 GPM 3,000 PSI 3/8" BSP-F 3/8" BSP-M 3/4” BSP-M 
or 1/2" BSP-F 165°
 F 2.5 lbs. 10
ZK70 (GPV) 2.1 to 3.0 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8" BSP-F 165° F 5.0 lbs. 5
ZK71 (GPV) 3.0 to 4.2 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8" BSP-F 165° F 5.0 lbs. 5
ZK72 (GPV) 4.2 to 6.6 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8" BSP-F 165° F 5.0 lbs. 5
ZK73 (GPV) 6.6 to 10.8 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8" BSP-F 165° F 5.0 lbs. 5
ZK9 2.5 to 13.2 GPM 5,800 PSI 1/2" BSP-F 1/2" BSP-M 1/2" BSP-F 165° F 11.0 lbs. 1
 ZK72 Unloader With #1 Bypass Orifice:
190009 4.2 to 6.6 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8" BSP-F 165° F 5.0 lbs. 5
 ZK71 Unloader with #0 Bypass Orifice:
190079 3.0 to 4.2 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8” BSP-F 165° F 5.0 lbs. 5
 ZK73 Unloader With #2 Bypass Orifice:
190361 6.6 to 10.8 GPM 3,500 PSI 3/8" BSP-F 3/8" BSP-M 3/8” BSP-F 165° F 5.0 lbs. 5
Product Group: S
PLSRZ523 PLSRZ523MS PULSARZ PULSARZMS PLSRZ2140 PLSRZ2140MS
FLOW SENSITIVE UNLOADERS
MODEL GPM MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
BOX 
QTY
PLSRZ523* 2.1 to 5.3 GPM 2,300 PSI 3/8" BSP-F 3/8" BSP-F N/A 195° F 1.5 lbs. 15
 303 Stainless Steel:
PLSRZ36SS 2.4 - 16 GPM 3,600 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 195° F 4.6 lbs.
PLSRZ87SS 2.4 - 16 GPM 8,700 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 195° F 4.6 lbs.
 With 6 Amp Microswitch:
PLSRZ523MS* 2.1 to 5.3 GPM 2,300 PSI 3/8" BSP-F 3/8" BSP-F N/A 195° F 1.7 lbs. 15
PULSARZ* 2.4 to 10.5 GPM 4,000 PSI 3/8" NPT-F 3/8" NPT-F (2) 3/8" NPT-F 195° F 2.5 lbs. 12
190465 PULSARZ As Above, With 3.5 and 4.5 Orifice
 With 6 Amp Microswitch:
PULSARZMS* 2.4 to 10.5 GPM 3,650 PSI 3/8" NPT-F (2) 3/8" NPT-F N/A 195° F 2.5 lbs. 12
PLSRZ2140* 5.3 to 21.0 GPM 4,050 PSI 1/2" BSP-F 1/2" BSP-F 1/2" BSP-F 195° F 3.8 lbs. 4
 With 6 Amp Microswitch:
PLSRZ2140MS* 5.3 to 21.0 GPM 4,050 PSI 1/2" BSP-F 1/2" BSP-F N/A 195° F 4.0 lbs. 4
*PULSARZ is patented
VALVES
NEW

BALANCED RELIEF & REGULATING VALVES
ACCESSORIES - VALVES
Page 65
Product Group: T
Balanced Relief Valves
YBRV624 YBRV5325
BALANCED RELIEF VALVES
MODEL GPM RATED MAX INLET BYPASS MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YBRV624 6.3 GPM 2,200 PSI 2,450 PSI 3/8" BSP-F 3/8" BSP-F 195° F 0.8 lbs. 40
YBRV624D 6.3 GPM 2,200 PSI 2,450 PSI (2) 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs. 40
YBRV631 6.3 GPM 3,200 PSI 3,650 PSI 3/8" BSP-F 3/8" BSP-F 195° F 0.8 lbs 40
YBRV631D 6.3 GPM 3,200 PSI 3,650 PSI (2) 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs. 40
100268 6.3 GPM 300 PSI N/A (2) 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs. 40
100269 6.3 GPM 300 PSI N/A 3/8" BSP-F 3/8" BSP-F 195° F 0.8 lbs. 40
YBRV5325 53.0 GPM 2,600 PSI 2,900 PSI 3/4" BSP-F 1/2" BSP-F 195° F 2.0 lbs. 4
Product Group: T
Regulating Valves
YVB4021HT ZKSX1
REGULATING VALVES - GREAT FOR MULTIPLE GUN APPLICATIONS
MODEL GPM RATED INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YVRP15W 8.9 GPM 1,450 PSI 3/8" NPT-F 3/8" NPT-F N/A 195° F 1.3 lbs. 25
YVRP32B 8.9 GPM 3,200 PSI 3/8" NPT-F 3/8" NPT-F N/A 195° F 1.3 lbs. 25
ZKSX1 16.0 GPM 3,600 PSI 1/2" BSP-F N/A 1/2" BSP-F 195° F 2.3 lbs. 1
YVS5100B 6.5 GPM 5,600 PSI 3/8" BSP-F 3/8" BSP-F 3/8" BSP-F 195° F 1.0 lbs. 25
YVB4021HT 21.0 GPM 4,050 PSI 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 195° F 2.5 lbs. 1
YVB5121HT 21.0 GPM 5,550 PSI 1/2" NPT-F 1/2" NPT-F 1/2" NPT-F 195° F 2.5 lbs. 1
YVRP15W YVS5100B
Product Group: S
Regulating Valves
100892 100998 100999 YR5221
REGULATORS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET BYPASS MAX 
TEMP
SHP 
WGHT
WMR15SS Stainless Steel 5.5 1,500 PSI N/A 3/8" NPT-F 3/8" NPT-F N/A 195° F 1.0 lbs.
100892 Nickel Plated 5.0 GPM 2,000 PSI N/A 3/8" NPT-F N/A 1/4" NPT-F 220° F 1.4 lbs.
100998 Stainless Steel 13.0 GPM 1,000 PSI N/A 3/8" NPT-F N/A 1/2" NPT-F 190° F 2.0 lbs.
100999 Stainless Steel 13.0 GPM 2,000 PSI N/A 3/8" NPT-F N/A 1/2" NPT-F 190° F 2.0 lbs.
YR5221 Brass (No CV) 53.0 GPM 2,200 PSI 2,450 PSI 1" NPT-F 1" NPT-F 1" NPT-F 200° F 4.5 lbs.
YBRV624D
WMR15SS
VALVES

SAFETY RELIEF VALVES
ACCESSORIES - VALVES
Page 66
Product Group: T
100722 100534 YRV2063 ZKS3 ZKSR
COLD WATER SAFETY RELIEF VALVES
MODEL GPM MIN MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
ZKSR 1.3 to 
10.0 GPM N/A 3,000 PSI 3/8" BSP-M 1/4" BSP-F 165°
 F 1.5 lbs.
 Side Discharge With Hose Barb (*available preset, see below):
100724 6.0 GPM 2,000 PSI 6,000 PSI 1/4" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
100723 6.0 GPM 2,000 PSI 6,000 PSI 3/8" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
100722 6.0 GPM 2,000 PSI 6,000 PSI 1/2" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
100611 6.0 GPM 800 PSI 3,000 PSI 1/4" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
100799 6.0 GPM 800 PSI 3,000 PSI 3/8" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
100980 6.0 GPM 800 PSI 3,000 PSI 1/2" NPT Side w/ 1/4" Barb 140° F 1.0 lbs.
 Side Discharge Without Hose Barb (*available preset, see below):
100726 6.0 GPM 2,000 PSI 6,000 PSI 3/8" NPT Side 140° F 1.0 lbs.
100727 6.0 GPM 2,000 PSI 6,000 PSI 1/2" NPT Side 140° F 1.0 lbs.
100610 6.0 GPM 800 PSI 3,000 PSI 1/4" NPT Side 140° F 1.0 lbs.
100798 6.0 GPM 800 PSI 3,000 PSI 3/8" NPT Side 140° F 1.0 lbs.
100963 6.0 GPM 800 PSI 3,000 PSI 3/8" NPT Side 140° F 1.0 lbs.
 End Discharge (*available preset, see below):
100728 6.0 GPM 2,000 PSI 6,000 PSI 1/4" NPT End 140° F 1.0 lbs.
100534 6.0 GPM 2,000 PSI 6,000 PSI 3/8" NPT End 140° F 1.0 lbs.
100729 6.0 GPM 2,000 PSI 6,000 PSI 1/2" NPT End 140° F 1.0 lbs.
100547 6.0 GPM 2,000 PSI 6,000 PSI 3/8" NPT End 1/8" F 140° F 1.0 lbs.
100609 6.0 GPM 800 PSI 3,000 PSI 1/4" NPT End 140° F 1.0 lbs.
100797 6.0 GPM 800 PSI 3,000 PSI 3/8” NPT End 140° F 1.0 lbs.
100962 6.0 GPM 800 PSI 3,000 PSI 1/2” NPT End 140° F 1.0 lbs.
 316 Stainless Steel:
100993 6.0 GPM N/A 3,500 PSI 3/8" NPT-M End 1/4" F 140° F 0.5 lbs.
101070 6.0 GPM N/A 6,000 PSI 3/8" NPT-M End 1/4" F 140° F 0.5 lbs.
YRV2063 6.3 GPM N/A 2,000 PSI 3/8" NPT-M Side 140° F 1.5 lbs.
YRV3463 6.3 GPM N/A 3,500 PSI 3/8" NPT-M Side 140° F 1.5 lbs.
ZKS3 2.6 to 
26.4 GPM N/A 10,000 PSI 1/2" NPT-M Side 284°
 F 2.0 lbs.
Product Group: T 100972
HOT WATER SAFETY RELIEF VALVES - 303 STAINLESS
MODEL GPM MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
100981* 2.0 to 4.0 GPM 4,500 PSI 3/8" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
100971* 3.0 to 7.0 GPM 4,500 PSI 3/8" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
100982* 6.0 to 12.0 GPM 4,500 PSI 3/8" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
100983* 2.0 to 4.0 GPM 4,500 PSI 1/2" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
100972* 3.0 to 7.0 GPM 4,500 PSI 1/2" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
100984* 6.0 to 12.0 GPM 4,500 PSI 1/2" NPT-M Side w/ 3/8" Barb 284° F 0.5 lbs.
 *Stainless Steel Seat and Ball
 All sizes are available preset, see below.
*To order preset, add first 2 digits of desired pressure to end of current part number. Example: for a 100724 preset to 2,500 PSI, add “25” to 
end of part number. Resulting part number is 10072425
*To order preset, add first 2 digits of desired pressure to end of current part number. Example: for a 100981 preset to 2,500 PSI, add “25” to 
end of part number. Resulting part number is 10098125
VALVES
NEW

MISCELLANEOUS VALVES
ACCESSORIES - VALVES
Page 67
Product Group: T
Expansion Valves
100973
GP EXPANSION VALVES - ONLY RESETS ITSELF AFTER PUMP IS SHUT OFF - CAN BE USED REPEATEDLY ONCE RESET
MODEL GPM MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
100973 2.0 to 6.0 GPM 4,500 PSI 3/8" NPT-M Side, 1/8" Hole 185° F 1.4 lbs.
100979 2.0 to 6.0 GPM 4,500 PSI 1/2" NPT-M Side, 1/8" Hole 185° F 1.6 lbs.
 To order preset, add first 2 digits of desired pressure to end of current part number. Example: for a 100973 preset to 2,500 PSI, add “25” to 
 end of part number. Resulting part number is 10097325
Pump Thermal Protectors
Product Group: Q 100558 100156
100512
PUMP THERMAL PROTECTORS - DISC
MODEL DESCRIPTION INLET HOSE BARB RELIEF 
TEMP
SHP 
WGHT
100556 90° Hose Barb 1/4" NPT 1/4" 145° F 1.5 oz.
100557 90° Hose Barb 3/8" NPT 1/4" 145° F 1.5 oz.
100558 90° Hose Barb 1/2" NPT 1/4" 145° F 1.5 oz.
100844 90° Hose Barb 1/4" BSP-M 1/4" 145° F 1.5 oz.
100845 90° Hose Barb 3/8" BSP-M 1/4" 145° F 1.5 oz.
100846 90° Hose Barb 1/2" BSP-M 1/4" 145° F 1.5 oz.
100677 90° Hose Barb 3/8" NPT N/A 190° F 1.5 oz.
100678 90° Hose Barb 1/2" NPT N/A 190° F 1.5 oz.
100679 90° Hose Barb 3/8" NPT 1/4" SS 190° F 1.5 oz.
100680 90° Hose Barb 1/2" NPT 1/4" SS 190° F 1.5 oz.
100156 90° Hose Barb 3/8" NPT 1/4" SS 145° F 1.5 oz.
100259 Banjo Fitting 3/8" BSP N/A 145° F 2.5 oz.
PUMP THERMAL PROTECTORS - PILL STYLE
MODEL DESCRIPTION INLET HOSE BARB RELIEF 
TEMP
SHP 
WGHT
100512 No Hose Barb 1/4" NPT N/A 145° F 2.0 oz.
100513 No Hose Barb 3/8" NPT N/A 145° F 2.0 oz.
100514 No Hose Barb 1/2" NPT N/A 145° F 2.0 oz.
2100612 No Hose Barb 1/2" NPT N/A 145° F 2.0 oz.
2100612MB No Hose Barb 1/2" BSP N/A 145° F 2.0 oz.
2100638 No Hose Barb 3/8" NPT N/A 145° F 2.0 oz.
2100614 No Hose Barb 1/4" NPT N/A 145° F 2.0 oz.
Easy Start Valves
Product Group: T 100324 100543 100970
EASY START VALVES
MODEL GPM MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
YESTVALVE 7.8 GPM 4,050 PSI 3/8" NPT-M 1/4" Hose Barb 176° F 0.25 lbs.
YESTVALVE14 7.8 GPM 4,050 PSI 1/4" BSP-M 1/4" Hose Barb 176° F 0.25 lbs.
 Provides Easy Start for Manual Start Gas Engines:
100323 8.0 GPM 5,000 PSI 3/8" NPT-M 1/4" Hose Barb 195° F 0.25 lbs.
100324 8.0 GPM 5,000 PSI 1/4" NPT-M 1/4" Hose Barb 195° F 0.25 lbs.
100543 8.0 GPM 5,000 PSI 1/4" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
100544 8.0 GPM 5,000 PSI 3/8" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
100490 8.0 GPM 5,000 PSI 1/2" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
 Stainless Steel Seat and Ball
100970 8.0 GPM 5,000 PSI 3/8" NPT-M 1/4" Hose Barb 195° F 0.25 lbs.
VALVES
2100612

MISCELLANEOUS VALVES
ACCESSORIES - VALVES
Page 68
Product Group: T
Bleeder Valves
100325 100730
BLEEDER VALVES
MODEL GPM MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
100325 8.0 GPM 5,000 PSI 1/4" NPT-M 1/8" Hose Barb 195° F 0.25 lbs.
100326 8.0 GPM 5,000 PSI 3/8" NPT-M 1/8" Hose Barb 195° F 0.25 lbs.
100545 8.0 GPM 5,000 PSI 1/4" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
100546 8.0 GPM 5,000 PSI 3/8" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
 Provides Easy Start Function for Electric Start Gas Engines:
100676 8.0 GPM 5,000 PSI 1/4" NPT-M 1/8" Hose Barb 195° F 0.25 lbs.
100730 8.0 GPM 5,000 PSI 1/2" NPT-M 1/8" NPT-F 195° F 0.25 lbs.
100684 8.0 GPM 5,000 PSI 3/8" NPT-M 1/8" Hose Barb 195° F 0.25 lbs.
Product Group: T
Check Valves
Brass Stainless Steel
CHECK VALVES
MODEL DESCRIPTION GPM RATED MAX INLET MAX 
TEMP
SHP 
WGHT
YCV14FB Brass 6.5 GPM 2,200 PSI 2,300 PSI 1/4" BSP-F 195° F 0.5 lbs.
YCV14FSS 303 Stainless Steel 6.5 GPM 5,800 PSI 6,500 PSI 1/4" BSP-F 195° F 0.5 lbs.
YCV38FB Brass 10.5 GPM 2,200 PSI 2,300 PSI 3/8" BSP-F 195° F 0.5 lbs.
YCV38FSS 303 Stainless Steel 10.5 GPM 5,800 PSI 6,500 PSI 3/8" BSP-F 195° F 0.5 lbs.
YCV12FB Brass 21.0 GPM 2,200 PSI 2,300 PSI 1/2" BSP-F 195° F 0.5 lbs.
YCV12FSS 303 Stainless Steel 21.0 GPM 5,800 PSI 6,500 PSI 1/2" BSP-F 195° F 0.5 lbs.
YCV34FB Brass 47.6 GPM 2,200 PSI 2,300 PSI 3/4" BSP-F 195° F 0.5 lbs.
YCV34FSS 303 Stainless Steel 47.6 GPM 5,800 PSI 6,500 PSI 3/4" BSP-F 195° F 0.5 lbs.
YCVHD34FB Brass 37.0 GPM 4,000 PSI 4,500 PSI 3/4" BSP-F 195° F 1.9 lbs.
YCVHD1FB Brass 53 GPM 4,000 PSI 4,500 PSI 1" BSP-F 195° F 3.0 lbs.
Product Group: D
Needle Valves
100814 100838
METERING NEEDLE VALVES - ADJUSTABLE SS STEM ALLOWS REGULATING THE OPENING IN 
THE BORE FOR FINE CONTROL OF FLOW
MODEL GPM MAX INLET OUTLET ADJUSTMENT MAX 
TEMP
SHP 
WGHT
 Metering Needle Valves - Adjustable SS Stem Allows Regulating the Opening in the Bore for Fine Control of Flow:
WMNV14SS 5.0 GPM 4,000 PSI 1/4" NPT-F 1/4" NPT-F N/A 150° F 0.3 lbs.
100814 6.0 GPM 4,000 PSI 1/4" NPT-F 1/4" NPT-F N/A 190° F 0.3 lbs.
100838 6.0 GPM 4,000 PSI 1/4" NPT-F 1/4" NPT-F Side 190° F 0.4 lbs.
100865 6.0 GPM 4,000 PSI 1/4" NPT-F 1/4" NPT-F Bottom 190° F 0.4 lbs.
Product Group: D
Pneumatic Control 
Valves
YPCV823 & YPCV3240
PNEUMATIC CONTROL VALVES
MODEL GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
YPCV823 8.0 GPM 2,300 PSP 2,550 PSI 1/4" BSP-F 1/4" BSP-F 195° F 1.2 lbs.
YPCV2175 21.0 GPM 7,250 PSI 8,000 PSI 1/2" BSP-F 1/2" BSP-F 195° F 5.8 lbs.
YPCV3240 32.0 GPM 4,050 PSI 4,500 PSI 3/4" BSP-F 3/4" BSP-F 195° F 5.0 lbs.
NEW
101089 - 316 SS
VALVES
Steam Valves
Product Group: T
STEAM VALVES
MODEL GPM RATED MAX PANEL 
FITTING INLET OUTLET MAX TEMP
SHP 
WGHT
Y29092008 2.3 GPM 3,650 PSI 4,050 PSI 3/4" 1/4" BSP-M 1/4" BSP-M 175° F 0.3 lbs.
Y29092012 3.4 GPM 3,650 PSI 4,050 PSI 3/4" 1/4" BSP-M 1/4" BSP-M 175° F 0.3 lbs.
Y29092015 4.0 GPM 3,650 PSI 4,050 PSI 3/4" 1/4" BSP-M 1/4" BSP-M 175° F 0.3 lbs.
Y29092015

INJECTORS
ACCESSORIES - INJECTORS
Page 69
Product Group: L
Adjustable Chemical Injectors 
Brass
ZROBO1B YAINJ18E
ADJUSTABLE CHEMICAL INJECTORS - BRASS
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
 Chemical Injectors with Brass Knob:
ZROBO0B 2.0 mm 2.1 to 2.9 GPM 3,200 PSI 3/8" BSP-M 3/8" BSP-M 210° F 1/4" 0.8 lbs. 25
ZROBO1B 2.2 mm 2.9 to 4.0 GPM 3,200 PSI 3/8" BSP-M 3/8" BSP-M 210° F 1/4" 0.8 lbs. 25
ZROBO2B 2.5 mm 4.0 to 5.6 GPM 3,200 PSI 3/8" BSP-M 3/8" BSP-M 210° F 1/4" 0.8 lbs. 25
ZROBO3B 2.75 mm 6.6 to 10.8 GPM 3,200 PSI 3/8" BSP-M 3/8" BSP-M 210° F 1/4" 0.8 lbs. 25
 EPDM O-Ring:
YAINJ18E 1.8 mm 2.0 to 2.6 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.4 lbs. N/A
YAINJ21E 2.1 mm 2.6 to 4.0 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.4 lbs. N/A
YAINJ23E 2.3 mm 4.0 to 5.3 GPM 4,000 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.4 lbs. N/A
Product Group: L
Adjustable Chemical Injectors 
Standard
100823
ADJUSTABLE CHEMICAL INJECTORS - BRASS
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100823 1.5 mm 1.0 to 2.0 GPM 4,250 PSI 3/8" NPT-M 3/8” NPT-M 190° F 1/4" 0.3 lbs. 25
100824 1.8 mm 2.0 to 3.0 GPM 4,250 PSI 3/8" NPT-M 3/8” NPT-M 190° F 1/4" 0.3 lbs. 25
100825 2.1 mm 3.0 to 5.0 GPM 4,250 PSI 3/8" NPT-M 3/8” NPT-M 190° F 1/4" 0.3 lbs. 25
100826 2.3 mm 5.0 to 8.0 GPM 4,250 PSI 3/8" NPT-M 3/8” NPT-M 190° F 1/4" 0.3 lbs. 25
Product Group: L
Adjustable Chemical Injectors 
304 Stainless Steel
100861
ADJUSTABLE CHEMICAL INJECTORS - STAINLESS STEEL
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100861 1.8 mm 2.0 to 3.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.5 lbs. 25
100862 2.1 mm 3.0 to 5.0 GPM 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.5 lbs. 25
100863 2.3 mm 5.0 to 8.0 GPM 5,500 PSI 3/8" NPT-M 3/8v NPT-M 190° F 1/4" 0.5 lbs. 25
Product Group: L
Adjustable Chemical Injectors 
High Draw
100810
ADJUSTABLE CHEMICAL INJECTORS - HIGH DRAW - CHEMICAL DRAW UP TO 20%
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100810 1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100811 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100812 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100813 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
 High Draw Chemical Injectors with Acid Kit:
100827 1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100828 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100829 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
100830 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 195° F 1/4" 0.3 lbs. 25
INJECTORS

INJECTORS
ACCESSORIES - INJECTORS
Page 70
Product Group: L
Quick Connect Adjustable 
Chemical Injectors - Brass
100575 100618
QUICK CONNECT ADJUSTABLE CHEMICAL INJECTORS - BRASS
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100575 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100576 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100577 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100617 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100618 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100619 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
Product Group: L
Quick Connect Adjustable 
Chemical Injectors - Stainless 
Steel Plug
100634 100654
QUICK CONNECT ADJUSTABLE CHEMICAL INJECTORS - STAINLESS STEEL PLUG
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100633 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100634 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100635 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100653 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100654 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100655 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
Product Group: L
Quick Connect Adjustable 
Chemical Injectors - Stainless 
Steel Plug & Collar
100764
QUICK CONNECT ADJUSTABLE CHEMICAL INJECTORS - STAINLESS STEEL PLUG & COLLAR
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100763 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100764 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100765 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
Product Group: L
Fixed Chemical Injectors - 
Standard
100821
FIXED CHEMICAL INJECTORS - STANDARD
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100819 1.5 mm 1.0 to 2.0 GPM 4,250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100820 1.8 mm 2.0 to 3.0 GPM 4,250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100821 2.1 mm 3.0 to 5.0 GPM 4,250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100822 2.3 mm 5.0 to 8.0 GPM 4,250 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
INJECTORS

INJECTORS
ACCESSORIES - INJECTORS
Page 71
Product Group: L
Fixed Chemical Injectors - 
High Draw 
100775 100790
FIXED CHEMICAL INJECTORS - HIGH DRAW - CHEMICAL DRAW UP TO 20%
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100773 1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100774 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100775 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100776 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
 High Draw Fixed Chemical Injectors with Acid Kit:
100947 1.5 mm 1.0 to 2.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100948 1.8 mm 2.0 to 3.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100949 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
100950 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.3 lbs. 25
 High Draw Dual Port Chemical Injectors:
100790 2.1 mm 3.0 to 5.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F (2) 1/4" 0.4 lbs. 25
100791 2.3 mm 5.0 to 8.0 GPM 4,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F (2) 1/4" 0.4 lbs. 25
Product Group: L
Quick Connect Fixed 
Chemical Injectors - 
Brass 100594 100570
QUICK CONNECT FIXED CHEMICAL INJECTORS - BRASS
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100570 1.8 mm 1.0 to 3.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100571 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100572 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100594 1.8 mm 1.0 to 3.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100595 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100616 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
Product Group: L
Chemical Injectors 
Color-coded Kynar Hose Barbs, 
Special Elastomers, 
304 Stainless Steel
100835OR
COLOR CODED KYNAR BARBS NEW SPECIAL ELASOMERS, CERAMIC BALL, HASTELOY SPRING. REPAIRABLE!
MODEL ORIFICE GPM MAX INLET OUTLET MAX TEMP HOSE BARB SHP WGHT
100336RD 1.45 mm 1.0 to 2.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100094WT 1.6 mm 2.0 to 3.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100835OR 1.8 mm 2.0 to 3.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100334GY 2.1 mm 2.0 to 4.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100333BL 2.2 mm 3.0 to 5.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100339LG 2.3 mm 5.0 to 8.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" 0.4 lbs.
100541GY 2.1 mm 3.0 to 5.0 5,500 PSI 3/8" NPT-M 3/8" NPT-M 190° F 1/4" (2) 0.4 lbs.
100781 Metering Tips
100336RD 100094WT
REPAIR KITS AVAILABLE
100334GY 100339LG 100333BL
NEW!
100541GY
100781
INJECTORS

INJECTORS
ACCESSORIES - INJECTORS
Page 72
Product Group: L
Quick Connect Fixed 
Chemical Injectors - 
Stainless Steel Plug 
100630 100636
QUICK CONNECT FIXED CHEMICAL INJECTORS - STAINLESS STEEL PLUG
MODEL ORIFICE GPM RATED INLET OUTLET MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
BOX 
QTY
100690 1.5 mm 1.0 to 2.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100630 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100631 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100632 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" F Coupler 3/8" M Plug 190° F 1/4" 0.4 lbs. 25
100636 1.8 mm 2.0 to 3.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100637 2.1 mm 3.0 to 5.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
100638 2.3 mm 5.0 to 8.0 GPM 3,500 PSI 3/8" M Plug 3/8" F Coupler 190° F 1/4" 0.4 lbs. 25
Product Group: T
Chemical Valves
Y29094500 Y29095400
CHEMICAL VALVES
MODEL DESCRIPTION GPM RATED CONNECTIONS MAX 
TEMP
HOSE 
BARB
SHP 
WGHT
Y29094500 Straight 2.6 GPM 400 PSI 1/4" BSP-M 105° F 1/4" 0.5 lbs.
Y29095400 90° Elbow 2.6 GPM 400 PSI 1/4" BSP-M 105° F 1/4" 0.4 lbs.
Product Group: L
Chemical Valves
100145 Close-up of Nozzle
HIGH PRESSURE SOAP SHOOTER - Attaches to a QC on Lance or Extension Wand. Can Shoot soap up to 3 Stories!
MODEL NOZZLE SIZE
 Includes 30 Foot Hose, Filter and Nozzle:
100169 Includes 30 foot hose, filter and #3.5 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
100145 Includes 30 foot hose, filter and #4.0 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
100146 Includes 30 foot hose, filter and #4.5 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
100147 Includes 30 foot hose, filter and #5.0 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
100181 Includes 30 foot hose, filter and #6.0 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
101012 Includes 30 foot hose, filter and #7.0 stainless steel nozzle. 1/4" QC-M, 5,000 PSI MAX.
INJECTORS

PULSE PUMPS
ACCESSORIES - INJECTORS
Page 73
Product Group: S
100906
PULSE PUMP
MODEL GPM RATED PULSE PUMP 
PORT INLET
WATER 
INLET OUTLET MAX TEMP
SHP 
WGHT
100906 0.75 GPM 1,500 PSI 1/4" NPT-F 1/8" NPT-F 1/8" NPT-F 190° F 1.5 lbs.
ADAPTER FITTINGS FOR 100906
PUMP SERIES FITTING 
(1/4" NPT-M) VALVE
60 (TC, HTC) 520222 103036
47 and 50 (T, TT, TS, HTS) 520190 103035
44 (EZ), ES/ESN/EP 520197 103036
63 (TX, HTXS) 520197 103036
66 (TSF, HTF) 520223 103090
310/3CP/5CP (Cat) 520279 N/A
5CP3, 5CPS (Cat) 520341 N/A
5CP6 (Cat) 520342 N/A
Product Group: S
100152
PULSE PUMP with BALL VALVE - 3,000 PSI WHEN BALL VALVE IS ENGAGED
MODEL GPM RATED PULSE PUMP 
PORT INLET
WATER 
INLET OUTLET MAX TEMP
SHP 
WGHT
100152 0.75 GPM 1,500 PSI* 3/8" NPT-F 1/8" NPT-F 1/8" NPT-F 190° F 1.5 lbs.
ADAPTER FITTINGS FOR 100906
PUMP SERIES FITTING 
(3/8" NPT-M) VALVE
60 (TC, HTC) 520275 103036
47 and 50 (T, TT, TS, HTS) 520274 103035
44 (EZ) 520273 103036
63 (TX, HTXS) 520273 103036
66 (TSF, HTF) 520276 103090
310/3CP/5CP (Cat) 520282 N/A
5CP3, 5CPS (Cat) 520292 N/A
5CP6 (Cat) 520343 N/A
1/4"
3/8"
Product Group: S
101067
NEW! HIGH PRESSURE PULSE PUMP
MODEL GPM MAX PULSE PUMP 
PORT INLET
WATER 
INLET OUTLET MAX TEMP
SHP 
WGHT
101067 See Note Below* 3,000 PSI 3/8" NPT-F 1/8" NPT-F 1/8" NPT-F 190° F 2.0 lbs.
ADAPTER FITTINGS FOR 101067
PUMP SERIES FITTING 
(3/8" NPT-M) VALVE
60 (TC) 520275 103036
44 (EZ) 520273 103036
63 (TX) 520273 103036
47 (HTS) 520274 103035
520396 103035
66 (TSF) 520276 103090
310/3CP/5CP2 (Cat) 520282 N/A
5CP3/5CP5 (Cat) 520292 N/A
5CP6 (Cat) 520343 N/A
3/8"
*Flow will vary according to flow and pressure of the drive pump. For optimum performance, inlet pressure to the drive pump should be 
zero or negative but not to exceed drive pump specifications.
NEW! 
3,000 PSI
INJECTORS

SPRAY GUNS
ACCESSORIES - SPRAY GUNS & LANCES
Page 74
Product Group: I
Front Entry Spray Guns
ZGP11 YRL20
FRONT ENTRY SPRAY GUNS 
MODEL GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
YRL20 8.0 GPM 2,900 PSI 3,200 PSI 3/8" BSP-F 1/4" BSP-F 320° F 0.8 lbs.
ZGP11 10.5 GPM 3,000 PSI 3,000 PSI 3/8" BSP-F 1/4" BSP-F 285°o F 1.2 lbs.
Product Group: I
DG5010 YG4500S YRL2640W
YG4000
Rear Entry Spray Guns
YG5000 DG4512 DCG5010 YRL51 YRL56
REAR ENTRY SPRAY GUNS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YG4500S Straight 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs. 20
YG4500SW Straight, Weep 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs. 20
YG4500ST Straight, SS Inlet 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs. 20
DG5000S Straight 8.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs. 20
YRL2640 Standard 8.0 GPM 3,650 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs. 20
YRL2640W Weep Seat 8.0 GPM 3,650 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs. 20
YG5000 Standard 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs. 20
YG5000W Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs. 20
YG2527S Straight 27.0 GPM 2,500 PSI 2,500 PSI 1/2" NPT-F 1/2" NPT-F 320° F 2.8 lbs. 1
YG4032S Straight 32.0 GPM 4,050 PSI 4,050 PSI 1/2" NPT-F 1/2" NPT-F 320° F 2.8 lbs. 1
 Chlorine Applications:
YG4500S Ceramic Ball 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs. 20
YG4500SW Ceramic Ball 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs. 20
YG4500S Ceramic Ball 
and SS I/O 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320°
 F 1.2 lbs. 20
YG4500SW Straight/Weep 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 300° F 1.2 lbs.
YG4010 Standard 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs. 15
YG4010SW Swivel 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.2 lbs. 11
YG4000 Standard 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.8 lbs. 40
YG4000WN Weep Seat 10.5 GPM 3,650 PSI 4,050 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.8 lbs. 40
DG4000 Standard 8.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.1 lbs. 20
DG4000W Weep Seat 8.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.1 lbs. 20
DGE4012NT No Trigger 12.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.0 lbs. 20
DGE4012W Weep Seat 12.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
DG4512 Standard 12.0 GPM 4,500 PSI 4,500 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.3 lbs. 20
DG5010 Standard 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
DG5010W Weep Seat 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
DGE5010 Standard 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
DGE5010SL Locking Trigger 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
2100457 Locking, Dual Trigger 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 250° F 1.4 lbs. 20
DCG5010 Compensating 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs. 20
YRL51 Compensating 13.2 GPM 3,650 PSI 4,050 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.5 lbs. 20
YRL56 Compensating 8.0 GPM 5,100 PSI 5,650 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.5 lbs. 8
DCG5010HE Excavating 10.5 GPM 5,000 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.4 lbs.
NEW!
NEW!
NEW!
NEW!
NEW!
NEW!
DGE5010SL DGE4012NT
DGE5010 DCG5010HE
2100457
SPRAY GUNS 
& LANCES

SPRAY GUNS
ACCESSORIES - SPRAY GUNS & LANCES
Product Group: I
High Flow Rear Entry 
Wash Down Spray Guns
YG1635 YG1635SR
HIGH FLOW REAR ENTRY WASH DOWN SPRAY GUNS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YG1635 Wash Down 16.0 GPM 350 PSI 350 PSI 1/2" BSP-F Adj. Cone 
Nozzle 195°
 F 2.1 lbs. 10
YG1635N Wash Down 16.0 GPM 350 PSI 350 PSI 1/2" NPT-F Adj. Cone 
Nozzle 
YG1635S Wash Down 
w/Swivel 16.0 GPM 350 PSI 350 PSI 1/2" BSP-F Adj. Cone Nozzle 195°
 F 2.1 lbs. 10
YG1635SR
Wash Down 
w/Swivel, 
SS Pin
16.0 GPM 350 PSI 350 PSI 1/2" BSP-F Adj. Cone 
Nozzle 195°
 F 2.1 lbs. 10
YG1635SS
Wash Down 
w/Swivel, 
316 SS
16.0 GPM 350 PSI 350 PSI 1/2" BSP-F Adj. Cone 
Nozzle 195°
 F 2.1 lbs. 10
YG2635AS Wash Down 
w/Swivel 26.5 GPM 350 PSI 350 PSI 1/2" BSP-F Adj. Cone Nozzle 195°
 F 3.5 lbs. 10
Product Group: I
Rear Entry Spray Guns 
Stainless Steel
YG4060SS YG1732 YG2953B YG5200 YG7207
REAR ENTRY SPRAY GUNS - STAINLESS STEEL
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YG1732 Cartridge 32.0 GPM 1,740 PSI 1,950 PSI 1/2" BSP-F 1/2" BSP-F 210° F 4.0 lbs. 20
YG2953B Cartridge 53.0 GPM 2,900 PSI 3,200 PSI 3/4" BSP-F 1/2" BSP-F 210° F 5.0 lbs. 10
YG4060SS Blue 10.5 GPM 4,500 PSI 5,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 2.0 lbs. 2
YG5200 Red 10.5 GPM 5,800 PSI 6,400 PSI 3/8" NPT-F 1/4" NPT-F 320° F 2.0 lbs. 20
YG5200/L42 YG5200 with 42" Stainless Steel Lance
YG7207 Compensating 7.5 GPM 7,250 PSI 8,000 PSI 3/8" NPT-F 1/4" NPT-F 320° F 1.6 lbs. 1
Product Group: I
Spray Gun/Lance 
Combinations
101002 Y30256717 DG3200M
SPRAY GUN/LANCE COMBINATIONS
MODEL DESCRIPTION GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
YRL56L 42" Lance 8.0 GPM 5,100 PSI 5,650 PSI 3/8" NPT-F 1/4" NPT-F 320° F 3.3 lbs.
YG3000DS 16" Lance 10.5 GPM 2,750 PSI 3,050 PSI 3/8" NPT-F 1/8" NPT-F 140° F 2.0 lbs.
YG3000D 40" Lance 10.5 GPM 2,750 PSI 3,050 PSI 3/8" NPT-F 1/8" NPT-F 140° F 3.0 lbs.
Y30256717 YG5000 Assembled with 36" Lance and 1/4" Quick Disconnect 3.0 lbs.
100751 YG5000 Assembled with 18" Lance and 1/4" Quick Disconnect 2.5 lbs.
100059 YG4010 Assembled with 36" Vented, Insulated Lance and 1/4" Quick Disconnect 3.0 lbs.
100160 DG5010 Assembled with 36" Insulated Lance and 1/4" Quick Disconnect 3.0 lbs.
101057 DG5010 Assembled with 36" Insulated lance and 1/4" Quick Disconnect 3.0 lbs.
101096 DG5010 Assembled with 48" Insulated Lance and 1/4" Quick Disconnect 3.0 lbs.
101109 DGE5010 Assembled with 24" Insulated Lance and 1/4" Quick Disconnect 3.0 lbs.
101110 DGE5010 Assembled with 36" Insulated Lance and 1/4" Quick Disconnect 3.0 lbs.
DG320014 6.5 GPM 3,200 PSI 3,200 PSI 1/4" NPT-F M22-F 195° F 1.5 lbs.
DG320038 6.5 GPM 3,200 PSI 3,200 PSI 3/8" NPT-F M22-F 195° F 1.5 lbs.
DG3200M 6.5 GPM 3,200 PSI 3,200 PSI M22-M M22-F 195° F 1.5 lbs.
101002 YG7207 Spray Gun with 36" stainless steel lance, 7.5 GPM, 7,250 PSI
DGLN3230M Gun, Lance, 1.3mm Nozzle, M22 Inlet
DGLN3299M Gun, Lance, 0.99 mm Nozzle, M22 Inlet
DGLNH120 Gun, Lance Kit, 1.2 mm Nozzle, M22 Inlet, 1/4" Hose
YG23LA27 Gun, 27" Adjustable Lance, 2.3 mm Nozzle, 21.0 GPM
Page 75
NEW!
SPRAY GUNS 
& LANCES

LANCES
ACCESSORIES - SPRAY GUNS & LANCES
Page 76
Product Group: I
Stainless Steel Lances
YL8SS
STAINLESS STEEL LANCES
MODEL LENGTH GPM RATED MAX INLET OUTLET SHP 
WGHT
BOX 
QTY
YL8SS 8" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 0.5 lbs. 200
YL31SS 31" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 0.7 lbs. 100
YL40SS 40" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 1.0 lbs. 100
YL72SS 72" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 1.8 lbs. 50
680267 36" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 3.0 lbs. N/A
680268 48" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 4.0 lbs. N/A
680269 60" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 5.0 lbs. N/A
680270 72" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 6.0 lbs. N/A
680358 96" 32.0 GPM 4,000 PSI 4,000 PSI 1/2" NPT-M 1/2" NPT-M 8.0 lbs. N/A
Product Group: I
Insulated Lances - 
Straight
YL20PNS
INSULATED LANCES - STRAIGHT
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YL20PNS 20" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.1 lbs. 25
YL24PNS 24" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.3 lbs. 25
YL27PNS 27" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.4 lbs. 25
YL35PNS 35" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 25
YL47PNS 47" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.2 lbs. 25
YL59PNS 59" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.8 lbs. 25
YL67PNS 67" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 3.0 lbs. 25
YL79PNS 79" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 3.4 lbs. 25
Product Group: I
Insulated Lances - Bent
YL20PNB
INSULATED LANCES - BENT
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YL36B Vented 36" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 10
YL20PNB 20" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.1 lbs. 25
YL24PNB 24" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.3 lbs. 25
YL27PNB 27" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.4 lbs. 25
YL35PNB 35" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 25
YL47PNB 47" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.2 lbs. 25
YL59PNB 59" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.8 lbs. 10
YL67PNB 67" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 3.0 lbs. 10
YL79PNB 79" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 3.0 lbs. 10
ZZ15 59" Zinc 10.5 GPM 3,500 PSI N/A 1/4" BSP-M 1/4" BSP-M 284° F 2.5 lbs. N/A
SPRAY GUNS 
& LANCES

LANCES
ACCESSORIES - SPRAY GUNS & LANCES
Page 77
Product Group: I
Insulated Lances 
Chrome Plated
DL24ICS
Product Group: I
Vented Lances 
Chrome Plated
DL36VCS
INSULATED LANCES - CHROME PLATED
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
DL24ICS 24" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 1.3 lbs. 25
DL27ICS 27" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 1.4 lbs. 25
DL36ICS 36" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 1.7 lbs. 25
DL42ICS 42" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 1.7 lbs. 25
DL47ICS 47" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 2.2 lbs. 25
DL59ICS 59" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 2.8 lbs. 25
DL79ICS 79" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 220° F 3.4 lbs. 25
VENTED LANCES - CHROME PLATED
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
DL36VCS 36" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 25
DL48VCS 48" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.2 lbs. 25
DL60VCS 60" 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.7 lbs. 25
Product Group: I
Vented Lances 
Stainless Steel
DL36VSSB
INSULATED LANCES - STAINLESS STEEL
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
DL36VSSB 36" Bent 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 25
DL36VSS 36", Straight 10.0 GPM 4,000 PSI 5,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 1.7 lbs. 25
Product Group: I
Insulated Handle, 
Straight Double Lances
YDL33
INSULATED HANDLE, STRAIGHT DOUBLE LANCES
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YDL33 33" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4” NPT-M 320° F 2.2 lbs. 20
YDL41 41" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4” NPT-M 320° F 2.4 lbs. 20
YDL41SS 41", SS 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4” NPT-M 320° F 2.4 lbs. 10
YDL33SSB 33", SS, Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4” NPT-M 320° F 2.2 lbs. 20
YDL41SSB 41", SS, Bent 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4” NPT-M 320° F 2.4 lbs. 20
NEW!
SPRAY GUNS & LANCES

LANCES
ACCESSORIES - SPRAY GUNS & LANCES
Page 78
Product Group: I
Bent Double Lances 
Zinc Plated Steel
ZZDBL
BENT DOUBLE LANCES - ZINC PLATED STEEL
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YDL33B 33" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.2 lbs. 20
YDL41B 41" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.4 lbs. 20
ZZDBL 36" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-M 284° F 2.5 lbs. 300
100673 ZZDBL Lance Assembly with 1/4" QD Connector and 965400M Nozzle
100673Q ZZDBL Lance Assembly with 1/4" QD Coupler and 965400M Nozzle
ZZDBL72 72" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" BSP-M 1/4" BSP-M 284° F 3.5 lbs. 50
DLD42VS 42" Vented 10.5 4,000 PSI 4,000 PSI 1/4" NPT-M 1/4" NPT-M 320° F 2.4 10
100752 ZZDBL72 Lance Assembly with 1/4" QD Connector and 965400M Nozzle, 284o F
Product Group: I
Lances, Rectangle Handle 
Vented Grip
YLD943
VENTED GRIP LANCES - RECTANGLE HANDLE
MODEL LENGTH GPM RATED MAX INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YDL935 35" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 2.6 lbs. N/A
YLD943 43" 10.5 GPM 3,650 PSI 4,050 PSI 1/4" NPT-M 1/4" NPT-F 320° F 2.4 lbs. N/A
Product Group: I
Lances
DLE1614
LANCES
MODEL LENGTH RATED INLET OUTLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
DLE1618 16" 3,200 PSI M22-M 1/8" NPT-M 195° F 0.5 lbs. 12
DLE2818 28" 3,200 PSI M22-M 1/8" NPT-M 195° F 1.0 lbs. 12
DLE1614 16" 3,200 PSI M22-M 1/4" NPT-M 195° F 0.75 lbs. 12
DLE2214 22" 3,200 PSI M22-M 1/4" NPT-M 195° F 1.0 lbs. 12
DLE2814 28" 3,200 PSI M22-M 1/4" NPT-M 195° F 1.5 lbs. 12
Product Group: I
Lance Accessories
D20011
LANCE ACCESSORIES
MODEL DESCRIPTION BOX 
QTY
D20011 12" Gutter Cleaner, 1/4" QC Connectors, for use with #5.0 or larger nozzle 50
D22000 Adjustable Lance Handle for 1/4" Lances 200
D10036 Pivot Coupler, mounts to any 1/4" QC lance and can lock position for difficult cleaning angles, 4500 PSI 100
D22000
DLD42VS
SPRAY GUNS 
& LANCES
NEW!

PRESSURE CLEANING ACCESSORIES
ACCESSORIES - PRESSURE CLEANING
Page 79
Product Group: 
Flat Surface Cleaners DFSCP12
DCFSCP20 DCFSCS22GZ
FLAT SURFACE CLEANERS - HEAVY-DUTY ABS COVER - COMPENSATING GUN
MODEL BEARING MAX GPM RATED MIN DECK INLET NOZZLE MAX 
TEMP
SHP 
WGHT
PALLET 
QTY
DFSCP12E Sealed 4.0 GPM 3,000 PSI 800 PSI 12" M22 M, 1/4" 925020S 150° F 6.5 lbs. 100
DFSCP12 Sealed 6.5 GPM 3,500 PSI 800 PSI 12" 3/8" NPT-F 925020S (2) 180° F 12.0 lbs. 99
DCFSCP18 Sealed 8.0 GPM 4,000 PSI 1,000 PSI 18" 3/8" NPT-F 925020M (2) 180° F 19.0 lbs. 12
DCFSCP18GZ Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 18" 3/8" NPT-F 925020M (2) 180° F 19.0 lbs. 12
DCFSCP20 Sealed 8.0 GPM 4,000 PSI 1,000 PSI 20" 3/8" NPT-F 925020M (2) 180° F 24.0 lbs. 12
DCFSCP20GZ Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 20" 3/8" NPT-F 925020M (2) 180° F 24.0 lbs. 12
DCFSCP24GZ Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 24" 3/8" NPT-F 925020M (3) 190° F 26.0 lbs. 12
2100200 Caster Kit, Flat Surface Cleaner
DFSCGK Kit, Manifold, Hose, brackets, allows additional spray gun to be attached to Flat Surface Cleaner
NEW!! FLAT SURFACE CLEANERS - STAINLESS STEEL - COMPENSATING GUN - INCLUDES CASTERS
MODEL BEARING MAX GPM RATED MIN DECK INLET NOZZLE MAX 
TEMP
SHP 
WGHT
PALLET 
QTY
DCFSCS22Z Grease Zirc 8.0 GPM 4,000 PSI 1,000 PSI 22” 3/8" NPT-F 925020M (3) 180° F 28.0 lbs. 12
Product Group: 
Hose Reels
D30002 SHR50150 DHRA50150 2100357
HOSE REELS - Direct hand crank rewind with locking mechanism, solid steel construction 
with durable powdercoat paint and full flow swivel and brass joint.
MODEL DESCRIPTION TEMP MAX SHP 
WGHT PALLET
D30001 50' x 3/8" complete with mounting base, 10.5x6.7x7.4x11.5" 185° F 4,000 PSI 12.0 lbs. 60
D30002 100' x 3/8" complete with mounting base, 10.5x12x7.4x15.2" 185° F 4,000 PSI 13.0 lbs. 54
D30004 150' x 3/8" complete with mounting base, 13.4x9.8x8.8x10.8" 185° F 4,000 PSI 15.0 lbs. 36
D30006 200' x 3/8" complete with mounting base, 13.4x15x9.8x19.7" 185° F 4,000 PSI 12.0 lbs. 26
DHR50100D Industrial, 100' x 3/8", complete with mounting base and pigtail, 16.2"x13.7"x14.8x10" 185° F 5,000 PSI 20.0 lbs. 36
DHR50150D Industrial, 150' x 3/8", complete with mounting base and pigtail, 16.2"x13.7"x14.8x10" 185° F 5,000 PSI 22.0 lbs. 24
DHRA50150 Industrial, 150' x 3/8", “A” Frame 300° F 5,000 PSI 30.0 lbs. 18
DHRA50300 Industrial, 300' x 3/8", “A” Frame 300° F 5,000 PSI 32.0 lbs. 16
DHRA50450 Industrial, 450' x 3/8", “A” Frame 300° F 5,000 PSI 40.0 lbs. 16
DHRP50150 Industrial, 150' x 3/8", Pedestal 185° F 5,000 PSI 22.0 lbs. 24
SHR50150 High Temp, with stainless steel rim, 100'x3/8" complete with mounting base 400° F 5,000 PSI 18.0 lbs. 36
2100357 100’ x 3/8" Hose Reel on base with carry handle, can be used with the sewer attachment below 185° F 5,000 PSI 18.0 lbs. 20
HOSE REEL ACCESSORIES
MODEL DESCRIPTION
103166 Kit, 12 Volt motor kit for DHRA Hose Reels, Includes hardware motor and gear
2100465 Kit, Cart for DHRA Hose Reels
2100375 Kit, Cart for D3000 and DHR Hose Reels
2100379 Kit, Wall mount with swivel plate for D3000 and DHR Reels
2100462 Kit, Hose Guide, Protects hose when hose pulled, fits DHRA50150
2100463 Kit, Hose Guide, Protects hose when hose pulled, fits DHRA50300
2100503 Kit, Hose Guide, Protects hose when hose pulled, fits DHRA50450
2100437 Kit, Hose reel stacking kit, fits DHRA models, Stacks up to 4 high
NEW!
NEW!
NEW!
NEW!
NEW!
2100437* 2100462* 2100465* DHRA50300D
DFSCGK
*Hose Reels Not Included
DFSCP24GZ
SPRAY GUNS 
& LANCES

PRESSURE CLEANING ACCESSORIES
ACCESSORIES - PRESSURE CLEANING
Page 80
Product Group: T
Water Brooms
100870C
2100306
The Original 
TRIKLEENER®
WATER BROOMS
MODEL DESCRIPTION NOZZLE 
PORTS PRESSURE
100869C 12" Water Broom with (3) 65 Degree Nozzles, 36" Molded, Insulated Lance and 1/4" QC 3 3,000 PSI
100870C 16" Water Broom with (4) 65 Degree Nozzles, 36" Molded, Insulated Lance, 1/4" QC 4 3,000 PSI
2100306 TRIKLEENER® Water Broom, 12" Adjustable Height 3 4,500 PSI
2100473 BIKLEENER® Water Broom, 10" Width, Adjustable Height, Two Nozzles 2 3,000 PSI
Product Group: I
The Giraffe 
Telescoping Wands
GIRAFFE - TELESCOPING WANDS - CLEANING JOBS UP TO 3 STORIES HIGH, FOR USE WITH HOT OR COLD PRESSURE WASHERS. 
NOZZLE HOLDER ACCEPTS STANDARD QUICK COUPLE SPRAY NOZZLES, GUN INCLUDED
MODEL LENGTH GPM MAX OUTLET RETRACTED 
DIMENSIONS
MAX 
TEMP
SHP 
WGHT
PALLET 
QTY
DLTG12 12 Feet 10.5 GPM 4,000 PSI 1/4" QC 6.1 x 7'5" 195° F 9.2 lbs. 55
 Complete with the compensating gun feature:
DCLTG18 18 Feet 10.5 GPM 4,000 PSI 1/4" QC 6.1 x 7'5" 195° F 11.6 lbs. 55
DCLTG24 24 Feet 10.5 GPM 4,000 PSI 1/4" QC 6.1 x 7'8" 195° F 14.2 lbs. 55
SEWER JETTING HOSE REEL ATTACHMENT
MODEL DESCRIPTION TEMP MAX PALLET 
QTY
2100358 Sewer jetting hose reel attachment - attaches to any hose reel - includes ball 
 valve, 1/4" inlet/outlet gauge and 3 sewer jet nozzles 185°
 F 5,000 PSI N/A
2100473
NEW!
SPRAY GUNS 
& LANCES

PRESSURE CLEANING ACCESSORIES
ACCESSORIES - PRESSURE CLEANING
Page 81
Product Group: N
Foamers
YLS12T Z0FOAM
YLS12T
FOAMERS
MODEL DESCRIPTION GPM RATED MAX SHP 
WGHT
BOX 
QTY
YLS12 Foamer Lance with 1.5 mm Injector 6.5 GPM 2,900 PSI 3,200 PSI 1.5 lbs. 45
YLS12T Foamer Lance with 1.5 mm Injector (1 qt. tank) 6.5 GPM 2,900 PSI 3,200 PSI 1.5 lbs. 5
YLS12T2 Foamer Lance with 1.5mm Injector (2 ltr tank) 6.5 GPM 2,900 PSI 3,200 PSI 1.7 lbs. 5
YLS12FEI25 Foamer Lance with external injector, 2.5mm Injector 6.5 GPM 2,900 PSI 3,200 PSI 1.7 lbs. 5
YLS31T Foamer Lance with 1.25 mm Injector 5.3 GPM 2,300 PSI 2,600 PSI 1.0 lbs. 5
Z0FOAM Foamer Nozzle Kit with Tank 4.0 GPM 1,450 PSI 1,450 PSI 1.5 lbs. N/A
Product Group: N
Brushes
YROTBRUSH
BRUSHES
MODEL DESCRIPTION MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YROTBRUSH Natural Bristle Rotating Brush 435 PSI 1/4" BSP-M 140° F 1.8 lbs. 21
190091 YROTBRUSH with Lance
NEW!
The Giraffe 
Telescoping Wands 
Aluminum
GIRAFFE - TELESCOPING WANDS - ALL ALUMINUM POLE, DCLTG18A IS IN 3 SECTIONS, DCLTGA4 IS IN 4 SECTIONS. 
5/6” DOUBLE BRAID, 4,000 PSI HOSE, LIGHTWEIGHT POLES, NEW COMPENSATING GUN AND WAND BELT INCLUDED.
MODEL LENGTH GPM MAX OUTLET RETRACTED 
DIMENSIONS
MAX 
TEMP
SHP 
WGHT
PALLET 
QTY
DCLTG18A 18 Feet 10.5 GPM 4,000 PSI 1/4" QC 6.8" x 6'5" 195° F 13.0 lbs. 55
DCLTG24A4 24 Feet 10.5 GPM 4,000 PSI 1/4" QC 6.8" x 6'8" 195° F 16.5 lbs. 55
GIRAFFE ACCESSORY - PRODUCT GROUP N
PART NUMBER DESCRIPTION
D20015 Wand Belt, decreases strain on your back 
 and shoulders. Attaches to all GP telescoping wands.
Product Group: I
Product Group: 
Pressure Washer 
Carts
D80040
BRUSHES
MODEL DESCRIPTION
D80040 Small Cart, no Wheels, up to 6.5 HP Gas
D80041 Large Cart, no Wheels, up to 13 HP Gas
DP80009 1 Wheel, 10"
DP80010 1 Wheel, 13"
SPRAY GUNS 
& LANCES

SPRAY TIPS
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 82
Product Group: O
Spray Tips
925055M 925055Q 925055S
SPRAY TIPS - THROUGH-HARDENED STAINLESS STEEL ORIFICE IN A STAINLESS STEEL HOUSING
 Part Number Examples:
9 4 0 0 3 0 M
Spray Tip Tip Angle = 40° Tip Size = 03 Connection = 1/4" Male
9 1 5 0 5 5 S
Spray Tip Tip Angle = 15° Tip Size = 055 Connection = 1/8" Male 
9 0 0 0 6 0 Q
Spray Tip Tip Angle = 0° Tip Size = 06 Connection = Quick Disconnect
SIZE 0o 
Red
15o 
Yellow
25o 
Green
40o 
White
020 900020 915020 925020 940020
025 900025 915025 925025 940025
030 900030 915030 925030 940030
032 900032 915032 925032 940032
035 900035 915035 925035 940035
037 900037 915037 925037 940037
040 900040 915040 925040 940040
045 900045 915045 925045 940045
050 900050 915050 925050 940050
055 900055 915055 925055 940055
060 900060 915060 925060 940060
065 900065 915065 925065 940065
070 900070 915070 925070 940070
075 900075 915075 925075 940075
080 900080 915080 925080 940080
085 900085 915085 925085 940085
090 900090 915090 925090 940090
100 900100 915100 925100 940100
N 
O 
Z 
Z 
L 
E 
 
S 
I 
Z 
E 
GPM @ PSI
1,000 PSI 2,000 PSI 3,000 PSI 4,000 PSI 5,000 PSI
1.0 1.41 1.73 2.00 2.24
1.25 1.77 2.17 2.50 2.80
1.50 2.12 2.60 3.00 3.35
1.63 2.30 2.81 3.25 3.63
1.75 2.47 3.03 3.50 3.91
1.88 2.65 3.25 3.75 4.17
2.0 2.83 3.46 4.00 4.47
2.25 3.18 3.90 4.50 5.03
2.50 3.54 4.33 5.00 5.59
2.75 3.89 4.70 5.50 6.15
3.0 4.24 5.20 6.00 6.70
3.25 4.60 5.63 6.50 7.27
3.50 4.95 6.06 7.00 7.83
3.75 5.30 6.50 7.50 8.39
4.00 5.66 6.93 8.00 8.94
4.25 6.01 7.36 8.50 9.50
4.5 6.36 7.79 9.00 10.06
5.0 7.07 8.66 10.00 11.18
Product Group: O
Standard Nozzles
Assorted Nozzles
STANDARD NOZZLES
MODEL DESCRIPTION SHP WGHT
F - Style Spray Nozzle, 1/4" Female 0.1 lbs.
M - Style Spray Nozzle, 1/4" NPT-M 0.1 lbs.
S - Style Spray Nozzle, 1/8" NPT-M 0.1 lbs.
Q - Style Spray Nozzle, 1/4" Quick Disconnect 0.1 lbs.
Please call your GP Sales Representative for additional nozzle sizes.
SPRAY TIPS 
& NOZZLES

Page 83
HYDRO EXCAVATING NOZZLE
HXNOZ
TRIPLE-STREAM HYDRO EXCAVATING NOZZLE
MODEL NOZZLE 
1
NOZZLE 
2
NOZZLE 
3
NOZZLE 
EQUIVALENT
FLOW - GPM
1000 
PSI
1500 
PSI
2000 
PSI
2500 
PSI
3000 
PSI
3500 
PSI
4000 
PSI
HXNOZ
HX212 900020SH 900010SH 900020SH #5.0 2.50 GPM 3.06 GPM 3.54 GPM 3.95 GPM 4.33 GPM 4.68 GPM 5.00 GPM
HX222 900020SH 900020SH 900020SH #6.0 3.00 GPM 3.67 GPM 4.24 GPM 4.74 GPM 5.20 GPM 5.61 GPM 6.00 GPM
HX232 900020SH 900030SH 900020SH #7.0 3.50 GPM 4.29 GPM 4.95 GPM 5.53 GPM 6.06 GPM 6.55 GPM 7.00 GPM
HX323 900030SH 900020SH 900030SH #8.0 4.00 GPM 4.90 GPM 5.66 GPM 6.32 GPM 6.93 GPM 7.48 GPM 8.00 GPM
HX333 900030SH 900030SH 900030SH #9.0 4.50 GPM 5.51 GPM 6.36 GPM 7.12 GPM 7.79 GPM 8.42 GPM 9.00 GPM
HX343 900030SH 900040SH 900030SH #10.0 5.00 GPM 6.12 GPM 7.07 GPM 7.91 GPM 8.66 GPM 9.35 GPM 10.00 GPM
HX434 900040SH 900030SH 900040SH #11.0 5.50 GPM 6.74 GPM 7.78 GPM 8.70 GPM 9.53 GPM 10.29 GPM 11.00 GPM
HX444 900040SH 900040SH 900040SH #12.0 6.00 GPM 7.35 GPM 8.49 GPM 9.49 GPM 10.39 GPM 11.22 GPM 12.00 GPM
HX454 900040SH 900050SH 900040SH #13.0 6.50 GPM 7.96 GPM 9.19 GPM 10.28 GPM 11.26 GPM 12.16 GPM 13.00 GPM
HX545 900050SH 900040SH 900050SH #14.0 7.00 GPM 8.57 GPM 9.90 GPM 11.07 GPM 12.12 GPM 13.10 GPM 14.00 GPM
HX555 900050SH 900050SH 900050SH #15.0 7.50 GPM 9.19 GPM 10.61 GPM 11.86 GPM 12.99 GPM 14.03 GPM 15.00 GPM
HX565 900050SH 900060SH 900050SH #16.0 8.00 GPM 9.80 GPM 11.31 GPM 12.65 GPM 13.86 GPM 14.97 GPM 16.00 GPM
HX656 900060SH 900050SH 900060SH #17.0 8.50 GPM 10.41 GPM 12.02 GPM 13.44 GPM 14.72 GPM 15.90 GPM 17.00 GPM
HX666 900060SH 900060SH 900060SH #18.0 9.00 GPM 11.02 GPM 12.73 GPM 14.23 GPM 15.59 GPM 16.84 GPM 18.00 GPM
HX676 900060SH 900070SH 900060SH #19.0 9.50 GPM 11.64 GPM 13.44 GPM 15.02 GPM 16.45 GPM 17.77 GPM 19.00 GPM
HX767 900070SH 900060SH 900070SH #20.0 10.00 GPM 12.25 GPM 14.14 GPM 15.81 GPM 17.32 GPM 18.71 GPM 20.00 GPM
HX777 900070SH 900070SH 900070SH #21.0 10.50 GPM 12.86 GPM 14.85 GPM 16.60 GPM 18.19 GPM 19.64 GPM 21.00 GPM
HX787 900070SH 900080SH 900070SH #22.0 11.00 GPM 13.47 GPM 15.56 GPM 17.39 GPM 19.05 GPM 20.58 GPM 22.00 GPM
HX878 900080SH 900070SH 900080SH #23.0 11.50 GPM 14.08 GPM 16.26 GPM 18.18 GPM 19.92 GPM 21.51 GPM 23.00 GPM
HX888 900080SH 900080SH 900080SH #24.0 12.00 GPM 14.70 GPM 16.97 GPM 18.97 GPM 20.78 GPM 22.45 GPM 24.00 GPM
HX898 900080SH 900090SH 900080SH #25.0 12.50 GPM 15.31 GPM 17.68 GPM 19.76 GPM 21.65 GPM 23.39 GPM 25.00 GPM
HX989 900090SH 900080SH 900090SH #26.0 13.00 GPM 15.92 GPM 18.38 GPM 20.55 GPM 22.52 GPM 24.32 GPM 26.00 GPM
HX999 900090SH 900090SH 900090SH #27.0 13.50 GPM 16.53 GPM 19.09 GPM 21.35 GPM 23.38 GPM 25.26 GPM 27.00 GPM
HX9109 900090SH 900100SH 900090SH #28.0 14.00 GPM 17.15 GPM 19.80 GPM 22.14 GPM 24.25 GPM 26.19 GPM 28.00 GPM
HX10910 900100SH 900090SH 900100SH #29.0 14.50 GPM 17.75 GPM 20.51 GPM 22.93 GPM 25.11 GPM 27.13 GPM 29.00 GPM
HX101010 900100SH 900100SH 900100SH #30.0 15.00 GPM 18.37 GPM 21.21 GPM 23.72 GPM 25.98 GPM 28.06 GPM 30.00 GPM
Product Group: 
• STANDARD 1/2" NPT CONNECTION (FEMALE) 
• HIGH IMPACT - 0 DEGREE NOZZLES (THREE) 
• URETHANE COATED FOR DURABILITY AND OPERATOR PROTECTION 
• STAINLESS STEEL BODY 
• HARDENED STAINLESS NOZZLE INSERTS FOR LONG LIFE 
• EASILY CHANGE WORN NOZZLES 
• DIMENSIONS: 1-3/4" LONG X 2-1/4" WIDE 
• FLOW TO 30 GPM, PRESSURE TO 4,000 PSI 
• MULTIPLE COLOR OPTIONS AVAILABLE (with volume purchase) 
NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
NEW!
SPRAY TIPS 
& NOZZLES

NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 84
Product Group: O
Chemical Nozzles
Assorted Nozzles
CHEMICAL NOZZLES
MODEL DESCRIPTION SHP WGHT BOX QTY
915500MSS #50 Orifice, 15° Spray Angle, Stainless Steel, 1/4 NPT-M 0.1 lbs. 250
915500QB #50 Orifice, 15° Spray Angle, Brass, Q-Style 0.1 lbs. 250
965400M #40 Orifice, 65° Spray Angle, 1/4” NPT-M 0.1 lbs. 250
965400Q #40 Orifice, 65° Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250
965400S #40 Orifice, 65° Spray angle, 1/8” NPT-M 0.1 lbs. 250
925400M #40 Orifice, 25° Spray Angle, 1/4” NPT-M 0.1 lbs. 250
925400Q #40 Orifice, 15° Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250
900400Q #40 Orifice, 0° Spray Angle, Q-Style, 100% Brass 0.1 lbs. 250
Product Group: P
Nozzle 5-Packs 
1/4" Quick Disconnect
Nozzle 5-Pack
NOZZLE 5-PACKS - ONE EACH: 0o, 15o, 25o, 40o, PLUS ONE 65o #40 CHEMICAL
MODEL DESCRIPTION SHP WGHT
105203 #2.5 0.5 lbs.
105082 #3.0 0.5 lbs.
105083 #3.5 0.5 lbs.
105084 #4.0 0.5 lbs.
105085 #4.5 0.5 lbs.
105086 #5.0 0.5 lbs.
105087 #5.5 0.5 lbs.
105088 #6.0 0.5 lbs.
105089 #6.5 0.5 lbs.
105090 #7.0 0.5 lbs.
105194 #7.5 0.5 lbs.
Product Group: P
Nozzle 4-Packs 
1/4" Quick Disconnect
Nozzle 4-Pack
NOZZLE 4-PACKS - ONE EACH: 0o, 15o, 25o, 40o
MODEL DESCRIPTION SHP WGHT
105127 #3.0 0.5 lbs.
105120 #3.5 0.5 lbs.
105121 #4.0 0.5 lbs.
105122 #4.5 0.5 lbs.
105123 #5.0 0.5 lbs.
105124 #5.5 0.5 lbs.
105125 #6.0 0.5 lbs.
105126 #6.5 0.5 lbs.
105101 #9.0 0.5 lbs.
SPRAY TIPS 
& NOZZLES

NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 85
Product Group: A
Adjustable Nozzles 
Variable Spray Angle and 
High/Low Pressure Setting
ADJUSTABLE NOZZLES, VARIABLE SPRAY ANGLE AND HIGH/LOW PRESSURE SETTINGS
MODEL SIZE/COLOR RATED MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YHL20 #2.0/Light Green 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL25 #2.5/Pink 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL30 #3.0/White 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL35 #3.5/Brown 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL40 #4.0/Dark Yellow 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL45 #4.5/Blue 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL50 #5.0/Light Purple 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL55 #5.5/Dark Red 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL60 #6.0/Dark Green 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL70 #7.0/Orange 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
YHL80 #8.0/Silver 3,650 PSI 4,050 PSI 1/4" BSP-F 195° F 0.4 lbs. 10
Adjustable Spray 
High/Low Pressure Nozzles
ADJUSTABLE SPRAY HIGH/LOW PRESSURE NOZZLES
MODEL SIZE/COLOR RATED INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
DHL4086 0.86 mm/Green 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4099 0.99 mm/Pink 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4120 1.2 mm/Brown 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4130 1.3 mm/Yellow 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4140 1.4 mm/ Blue 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4150 1.5 mm/Red 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4160 1.6 mm/Green 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 10
DHL4170 1.7 mm/Orange 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 90
DHL4180 1.8 mm/Silver 3,200 PSI 1/4" NPT-F 195° F 0.5 lbs. 10
Product Group: A
ADJUSTABLE NOZZLES, HIGH/LOW PRESSURE SETTINGS AND VARIABLE SPRAY ANGLES
MODEL SIZE/COLOR RATED MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
YHILO110 #3.0/White 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO120 #3.5/Brown 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO130 #4.0/Yellow 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO140 #4.5/Blue 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO150 #5.5/Red 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO160 #6.0/Dark Green 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHILO170 #7.0/Orange 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
YHL412 #12.0/Yellow 4,050 PSI 4,500 PSI 1/4" BSP-F 195° F 0.5 lbs. 10
Z0MULTIREG99* 5.5 GPM 3,000 PSI 3,000 PSI 1/4" BSP-F 195° F 1.1 lbs. N/A
 *When ordering ZOMULTIREG99, specify nozzle as needed for application.
Product Group: A
Adjustable Nozzles, Premium 
High/Low Pressure Settings 
and Variable Spray Angles
YHL20
DHL4120
YHILO Z0MULTIREG99
NEW
SPRAY TIPS & NOZZLES

NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 86
Rotating Nozzles
Y3K
ROTATING NOZZLES
MODEL SIZE MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
Y3K020 2.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K030 3.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K035 3.5 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K040 4.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K045 4.5 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K050 5.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K055 5.5 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K060 6.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K065 6.5 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y3K070 7.0 3,000 PSI 1/4" BSP-F 194° F .75 lbs. 5
Y5K020 2.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K030 3.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K035 3.5 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K040 4.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K045 4.5 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K050 5.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K055 5.5 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K060 6.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K065 6.5 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K080 8.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K090 9.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K100 10.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K120 12.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Y5K200 20.0 5,000 PSI 1/4" BSP-F 194° F 1.75 lbs. 5
Product Group: A
Product Group: A
Rotating Nozzles
YR23K40 YR36K30 YR51K30
ROTATING NOZZLES - SHOCK RESISTANT CERAMIC, INTERNAL STABILIZATION SPRING, CAN BE OPERATED IN ANY DIRECTION. 
YR23K IS DESIGNED FOR LOWER PRESSURES, YR36K IS DESIGNED TO OPERATE AT PRESSURES MOST COMMON IN THE MARKET 
AND YR51K IS FOR HIGHER PRESSURES AND MORE DEMANDING APPLICATIONS.
MODEL SIZE MIN 
PRESSURE
MAX 
PRESSURE INLET MAX TEMP
SHP 
WGHT
BOX 
QTY
YR23K20 2.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K25 2.5 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K30 3.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K35 3.5 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K40 4.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K45 4.5 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K50 5.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K55 5.5 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K60 6.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K65 6.5 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K70 7.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR23K80 8.0 435 PSI 2,300 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K30 3.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K35 3.5 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K40 4.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K45 4.5 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K50 5.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K55 5.5 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K60 6.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K65 6.5 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K70 7.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR36K80 8.0 1,150 PSI 3,650 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K30 3.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K35 3.5 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K40 4.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K45 4.5 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K50 5.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K55 5.5 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K60 6.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K65 6.5 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K70 7.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
YR51K80 8.0 2,600 PSI 5,100 PSI 1/4" BSP-F 212° F 0.9 lbs. 5
Y5K
SPRAY TIPS 
& NOZZLES

NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 87
ZROTOMAX1
Adjustable Rotating Nozzles
ZRMAX581
ADJUSTABLE ROTATING NOZZLES
MODEL COLOR ORIFICE GPM RATED MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
ZROTOMAX1 Red 2.1 to 2.6 GPM 1,450 PSI 3,500 PSI 1/4" BSP-F 176° F 1.1 lbs. 15
ZROTOMAX2 Light Blue 2.9 to 4.0 GPM 1,450 PSI 3,500 PSI 1/4" BSP-F 176° F 1.1 lbs. 15
ZROTOMAX3 Black 4.2 to 5.5 GPM 1,450 PSI 3,500 PSI 1/4" BSP-F 176° F 1.1 lbs. 15
ZRMAX581 Red 140 2.3 to 4.7 GPM 5,800 PSI 5,800 PSI 1/4" BSP-F 176° F 0.7 lbs. N/A
ZRMAX583 Black 160 3.3 to 6.6 GPM 5,800 PSI 5,800 PSI 1/4" BSP-F 176° F 0.7 lbs. N/A
100467
Product Group: A
GP Viper Rotating Nozzles
GP VIPER ROTATING NOZZLES
MODEL SIZE MAX MAX 
TEMP
SHP 
WGHT
BOX 
QTY
100467 #5.5 5,000 PSI 190° F 1.1 lbs. 10
100487 #4.5 5,000 PSI 190° F 1.1 lbs. 10
Product Group: A
Y7K045
Product Group: K
Rotating Nozzles 
Stainless Steel 
With Tungsten Carbide
ROTATING NOZZLES - STAINLESS STEEL WITH TUNGSTEN CARBIDE
MODEL SIZE MAX INLET MAX 
TEMP
SHP 
WGHT
BOX 
QTY
Y7K040 #4.0 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K045 #4.5 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K050 #5.0 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K055 #5.5 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K060 #6.0 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K065 #6.5 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
Y7K070 #7.0 7,000 PSI 1/4" BSP-F 194° F 1.5 lbs. 5
YRT87K20
Product Group: K
ROTATING NOZZLES- STAINLESS STEEL WITH TUNGSTEN CARBIDE
MODEL NOZZLE MIN MAX INLET MAX 
TEMP
SHP 
WGHT 
YRT87K20 #2.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K30 #3.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K40 #4.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K50 #5.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K60 #6.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K70 #7.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
YRT87K80 #8.0 2,600 PSI 8,700 PSI 1/4" BSP-F 195° F 1.2 lbs.
Rotating Nozzles 
Stainless Steel 
With Tungsten Carbide
SPRAY TIPS & NOZZLES

NOZZLES
ACCESSORIES - SPRAY TIPS & NOZZLES
Page 88
YDRNT
Drain Cleaning Nozzles
DRAIN CLEANING NOZZLES
MODEL DESCRIPTION GPM MAX INLET SHP 
WGHT
YDRNT1 Microdrain, Brass, #3.5 2.3 GPM 1,750 PSI 1/4" BSP-M 0.2 lbs.
YDRNT2 Microdrain, Stainless Steel, #4.0 3.8 GPM 3,650 PSI 1/4" BSP-M 0.2 lbs.
YDRNT3 Microdrain, Stainless Steel, #6.0 5.7 GPM 3,650 PSI 3/8" BSP-M 0.2 lbs.
ZUDRNT Drainet, Adjustable Equivalent Orifice Diameter 16.0 GPM 3,000 PSI 3/8" BSP-M 0.2 lbs.
ZUMDRNT1 Microdrain, #5.5, Equivalent Orifice Diameter 5.1 GPM 3,500 PSI 1/8" BSP-F 0.2 lbs.
ZUMDRNT2 Microdrain, #8.5, Equivalent Orifice Diameter 7.4 GPM 3,000 PSI 1/8" BSP-F 0.2 lbs.
2900003 Sewer Jet Nozzle, #3, 1 Front, 6 Rear 3.35 GPM 5,000 PSI 1/4" NPT-F 0.2 lbs.
2900004 Sewer Jet Nozzle, #3, 3 Rear 3.35 GPM 5,000 PSI 1/4" NPT-F 0.2 lbs.
2900005 Sewer Jet Nozzle, #3, 1 Front, 3 Rear 3.35 GPM 5,000 PSI 1/4" NPT-F 0.2 lbs.
Product Group: A
YADJNOZ
Adjustable Nozzle Holder
ADJUSTABLE NOZZLE HOLDER
MODEL GPM MAX INLET OUTLET SHP 
WGHT
YADJNOZ 8.0 GPM 3,650 PSI 1/4" BSP-F 1/4" BSP-F 0.5 lbs.
Product Group: H
YDBL
Double Nozzle Holders
DOUBLE NOZZLE HOLDERS
MODEL GPM MAX INLET OUTLET SHP 
WGHT
DDBL14 10.5 GPM 2,900 PSI 1/4" BSP-F (2) 1/4" NPT-F 0.5 lbs.
YDBL14 10.5 GPM 2,900 PSI 1/4" BSP-F (2) 1/4" NPT-F 0.5 lbs.
YDBL18 10.5 GPM 2,900 PSI 1/4" BSP-F (2) 1/8" NPT-F 0.5 lbs.
ZUDBL 5.5 GPM 3,000 PSI 1/4" BSP-F (2) 1/4" BSP-F 0.5 lbs.
Product Group: H
YSTN14F
Steam Nozzle
STEAM NOZZLE
MODEL DESCRIPTION MAX INLET SHP 
WGHT
YSTN14F 1.5 mm, .06 Nozzle 1,450 PSI 1/4" BSP-F 0.3 lbs.
Product Group: A
STEAM NOZZLE
MODEL DESCRIPTION GPM RATED MAX INLET NOZZLE SHP 
WGHT
DDC25020 Duct Cleaning Nozzle, grease zirk on swivel 8.0 GPM 1,500 PSI 4,000 PSI 1/4" NPT-F 925020S (2) 12.0 lbs.
DDC25020
Duct Cleaning Nozzle
Product Group: A
NEW!
SPRAY TIPS 
& NOZZLES

COUPLERS & FITTINGS
ACCESSORIES - COUPLERS & FITTINGS
Page 89
D10001
Quick Disconnect Couplers 
EPDM O-Ring
D10002
Product Group: H
D10088
QUICK DISCONNECT COUPLERS - EPDM O-RING
PART NUMBER DESCRIPTION MAX MAX 
TEMP
BOX 
QTY
D10001 1/4" with 1/4" NPT-F 5,000 PSI 175° F 200
D10003 3/8" with 3/8" NPT-F 4,000 PSI 175° F 200
D10002 1/4" with 1/4" NPT-M 5,000 PSI 175° F 200
D10004 3/8" with 3/8" NPT-M 4,000 PSI 175° F 200
D10005 3/8" with 1/2" NPT-M 4,000 PSI 175° F 200
D10035 3/8" with M22 Plug 4,000 PSI 175° F 200
D10088 3/8" with M22-F 4,000 PSI 175° F 200
D10122 1/4" with 1/4" NPT- F, with Collar Stop 5,000 PSI 175° F 200
D10123 1/4" with 1/4" NPT- M, with Collar Stop 5,000 PSI 175° F 200
D10124 3/8" with 3/8" NPT- F, with Collar Stop 5,000 PSI 175° F 200
D10125 3/8" with 3/8" NPT- M, with Collar Stop 5,000 PSI 175° F 200
D10090L 1/2" with 1/2" NPT- F, with Collar Stop 5,000 PSI 175° F 200
D10091L 1/2" with 1/2" NPT- M, with Collar Stop 5,000 PSI 175° F 200
100880 O-ring Kit, 1/4", Contains 100 Pieces 5,000 PSI 175° F 200
100881 O-ring Kit, 3/8", Contains 100 Pieces 4,000 PSI 175° F 50
D10061
Quick Disconnect 
Couplers 
Easy-Grip Product Group: H D10062 D10063
QUICK DISCONNECT COUPLERS - EASY GRIP
PART NUMBER DESCRIPTION MAX MAX 
TEMP
BOX 
QTY
D10061 1/4" with 1/4" NPT-F, with Easy-Grip Feature 5,000 PSI 175° F 200
D10062 1/4" with 1/4" NPT-M, with Easy-Grip Feature 5,000 PSI 175° F 200
D10063 3/8" with 3/8" NPT-F, with Easy-Grip Feature 4,000 PSI 175° F 200
D10064 3/8" with 3/8" NPT-M, with Easy-Grip Feature 4,000 PSI 175° F 200
D10064
Quick Disconnect Plugs
Product Group: H
QUICK DISCONNECT PLUGS
PART NUMBER DESCRIPTION MAX BOX 
QTY
D11006 1/4" Plug with 1/4" NPT-F, Hardened Steel, Zinc Plated 5,000 PSI 200
D11007 1/4" Plug with 1/4" NPT-M, Hardened Steel, Zinc Plated 5,000 PSI 200
D11008 3/8" Plug with 3/8" NPT-F, Hardened Steel, Zinc Plated 4,000 PSI 200
D11009 3/8" Plug with 3/8" NPT-M, Hardened Steel, Zinc Plated 4,000 PSI 200
D10089 3/8" Plug with M22-M, YZD Plated 4,000 PSI 200
520133 1/4" Plug with 1/4" NPT-F, Hardened Steel 5,500 PSI 200
520134 1/4" Plug with 1/4" NPT-M, Hardened Steel 5,500 PSI 200
520135 3/8" Plug with 3/8" NPT-F, Hardened Steel 5,000 PSI 200
520136 3/8" Plug with 3/8" NPT-M, Hardened Steel 5,000 PSI 150
Quick Disconnect Couplers 
Stainless Steel
Product Group: H D10072 D10073
QUICK DISCONNECT COUPLERS - STAINLESS STEEL
PART NUMBER DESCRIPTION MAX MAX 
TEMP
BOX 
QTY
D10072 1/4" with 1/4" NPT-F, Stainless Steel 6,000 PSI 175° F 200
D10073 1/4" with 1/4" NPT-M, Stainless Steel 6,000 PSI 175° F 200
D10074 3/8" with 3/8" NPT-F, Stainless Steel 5,000 PSI 175° F 200
D10075 3/8" with 3/8" NPT-M, Stainless Steel 5,000 PSI 175° F 200
D10090 1/2" with 1/2" NPT-F, Stainless Steel 5,000 PSI 175° F 200
D10091 1/2" with 1/2" NPT-M, Stainless Steel 5,000 PSI 175° F 200
 High Pressure Quick Disconnect Coupler (not Stainless Steel)
639829 Coupler Set, 1/2" NPT-F, Locking Collar, Stainless Steel 10,000 PSI 175° F N/A
NEW!
D101023
COUPLERS & FITTINGS
520134 D10089

COUPLERS & FITTINGS
ACCESSORIES - COUPLERS & FITTINGS
Page 90
D10076
Quick Disconnect Plugs 
Stainless Steel
Product Group: H D10077
QUICK DISCONNECT PLUGS - STAINLESS STEEL
PART NUMBER DESCRIPTION MAX BOX 
QTY
D10076 1/4" Plug with 1/4" NPT-F, Stainless Steel 6,000 PSI 200
D10077 1/4" Plug with 1/4" NPT-M, Stainless Steel 6,000 PSI 200
D10078 3/8" Plug with 3/8" NPT-F, Stainless Steel 6,000 PSI 200
D10079 3/8" Plug with 3/8" NPT-M, Stainless Steel 6,000 PSI 200
D10092 1/2" Plug with 1/2" NPT-F, Stainless Steel 6,000 PSI 200
D10093 1/2" Plug with 1/2" NPT-M, Stainless Steel 6,000 PSI 200
D10126 3/8" Plug with 1/2" NPT-M, Stainless Steel 6,000 PSI 200
100275
Garden Hose Fittings
Product Group: H D10010 D10084
GARDEN HOSE FITTINGS
PART NUMBER DESCRIPTION PORT INLET OUTLET BOX 
QTY
D10010 Garden Hose Assembly N/A 3/4" M Garden Hose 1/2" QD-M 200
D10011 Plug N/A 3/4" M Garden Hose 1/2" QD-M 200
D10012 Coupler N/A 3/4" F Garden Hose 1/2" QD 200
100275 Garden Hose Adapter Kit N/A 3/4" Garden Hose 1/2" NPT-M
100276 Garden Hose Adapter Kit N/A 3/4" Garden Hose 1/2" NPT-M
100277 Garden Hose Adapter Kit N/A 3/4" Garden Hose 3/8" NPT-M
D10084 Garden Hose Inlet, Long 1/4" NPT-F 3/4" Garden Hose 3/8" BSP-M 50
D10085 Garden Hose Inlet, Long 1/4" NPT-F 3/4" Garden Hose 1/2" NPT-M 50
D10032
Garden Hose Fittings 
With Screens
Product Group: H D10017 700004
GARDEN HOSE FITTINGS - WITH SCREENS
PART NUMBER DESCRIPTION PORT INLET OUTLET BOX 
QTY
D10016 Garden Hose Fitting with Screen N/A 3/4" Garden Hose 1/2" NPT-F 200
D10017 Garden Hose Fitting with Screen N/A 3/4" Garden Hose 3/8" NPT-F 200
D10032 Garden Hose Fitting with Screen N/A 3/4" Garden Hose 1/2" NPT-M 100
D10033 Garden Hose Fitting with Screen N/A 3/4" Garden Hose 3/8" NPT-F
680006 Garden Hose Inlet for TP Series Pumps, with O-ring N/A 3/4" Garden Hose 1/2" BSP-M
680007 Garden Hose Assembly 1/4" NPT-F 3/4" Garden Hose 3/8" BSP-M
680073 Garden Hose Inlet for TP/TT Series (short) N/A 3/4" Garden Hose 1/2" BSP-M
700034 Garden Hose Filter Washer, Stainless Steel, 30 Mesh N/A N/A N/A
700004 Garden Hose Filter Washer, Stainless Steel, 50 Mesh N/A N/A N/A 10,000
720039 Garden Hose Retention Spring, Stainless Steel N/A N/A N/A
D10118
Manifold Blocks
Product Group: H D10117 D10119
MANIFOLD BLOCKS
PART NUMBER DESCRIPTION
D10117 3 Way, 1/2" NPT-F x 1/2" NPT-F x 3/8" NPT-F, 4,000 PSI
D10118 2 Way, 3/8" NPT-F x 3/8" NPT-F, Bolt-down, 5,500 PSI
D10119 3 Way, 3/8" NPT-F, Bolt-down, 4,000 PSI
D10127 2 Way, 1/2" NPT-F X 1/2" NPT-F, Bolt-Down, 5,000 PSI NEW!
NEW!
COUPLERS 
& FITTINGS
D10127

COUPLERS & FITTINGS
ACCESSORIES - COUPLERS & FITTINGS
Page 91
ZMINA-B
Quick Disconnect Fittings 
Twist Connect
D10023
Product Group: H
D10024
QUICK DISCONNECT FITTINGS - TWIST CONNECT
PART NUMBER DESCRIPTION RATED MAX SHP 
WGHT
BOX 
QTY
ZMINA14F 1/4" F Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINA14M 1/4" M Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINA38F 3/8" F Plug 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINB12M 1/2" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINB14F 1/4" F Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINB14M 1/4" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINB38F 3/8" F Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30
ZMINB38M 3/8" M Coupler 3,000 PSI 3,000 PSI 0.2 lbs. 30
2510103 1/4" F Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 100
D10021 1/4" M Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10023 3/8" M Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10024 3/8" F Plug x M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10030
Quick Disconnect Fittings 
Twist Connect - EPDM O-Ring
D10028
Product Group: H
QUICK DISCONNECT FITTINGS - TWIST CONNECT - EPDM O-RING
PART NUMBER DESCRIPTION RATED MAX SHP 
WGHT
BOX 
QTY
D10027 1/4" F Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10028 1/4" M Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10029 3/8" F Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10030 3/8" M Coupler, 1 O-ring, M22 4,000 PSI 4,000 PSI 0.2 lbs. 200
100882 O-ring Kit, 14 mm, Contains 100 Pieces
100909 O-ring Kit, 15 mm, Contains 100 Pieces
D10037
Quick Disconnect Fittings 
Twist Connect 
D10041
Product Group: H
QUICK DISCONNECT FITTINGS - TWIST CONNECT
PART NUMBER DESCRIPTION RATED MAX SHP 
WGHT
BOX 
QTY
D10040 M22 QD Plug x M22 QD Plug 4,000 PSI 4,000 PSI 0.1 lbs. 200
D10041 M22 Coupler x M22 Coupler 4,000 PSI 4,000 PSI 0.3 lbs. 200
D10043 Brass Pipe Thread Reducer, 3/8" NPT-M x 1/4" NPT-F 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10044 Brass Pipe Coupling, 1/4" NPT-F 4,000 PSI 4,000 PSI 0.1 lbs. 200
D10037 M22 Coupler x 3/8" QD Plug 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10052 Union, 3/8" NPT-M x 3/8" NPT-M, Steel 4,000 PSI 4,000 PSI 0.2 lbs. 200
D10044 D10052
COUPLERS & FITTINGS

FILTERS & STRAINERS
ACCESSORIES - FILTERS & STRAINERS
100622
Inline High-Pressure Filters
100647
Product Group: G
100560
INLINE HIGH-PRESSURE FILTERS
PART 
NUMBER DESCRIPTION GPM MAX MAX TEMP INLET OUTLET SHP WGHT
100560 100 Mesh Screen, 303 SS w/Brass Outlet 8.0 GPM 5,500 PSI 200° F 1/4" QD 1/4" NPT-M 0.5 lbs.
100622 200 Mesh Screen, Brass 8.0 GPM 5,000 PSI 200° F 1/4" NPT-M 1/4" NPT-M 0.5 lbs.
100647 100 Mesh Screen, Brass 8.0 GPM 5,000 PSI 200° F 1/4" NPT-F 1/4" NPT-M 0.5 lbs.
Chemical Filters
Product Group: G
YF00
D40013
YF00C
ZF1
D40003
ZF2
CHEMICAL FILTERS
PART 
NUMBER DESCRIPTION SHP WGHT
BOX 
QTY
Z0FILKIT Chemical Hose and Filter 0.5 lbs. N/A
YF00 Plastic Chemical Filter, 1/4" Hose Barb 0.3 lbs. N/A
YF00C Plastic Chemical Filter with Check Valve, 1/4" Hose Barb 0.3 lbs. N/A
YF30 Plastic Chemical Filter with Stainless Steel Plug, 1/4" Hose Barb 0.3 lbs. N/A
YF30C Plastic Chemical Filter with Stainless Steel Plug, Check Valve, 1/4" Hose Barb 0.3 lbs. N/A
D40001 Plastic Chemical Filter with Stainless Steel Plug, Check Valve, 1/4" Hose Barb, and 4' Hose 0.5 lbs. N/A
D40003 Plastic Chemical Filter with Check Valve, Gray 0.3 lbs. N/A
D40006 Plastic Two-Step Chemical Filter, No check Valve, Black 0.3 lbs. N/A
D40013 Chemical Filter, Brass/Stainless Steel 0.5 lbs. N/A
D40016 Inlet Suction Tank Filter, 3/8"-NPT-F, 40 Mesh, S304 0.5 lbs. N/A
D40017 Inlet Suction Tank Filter, 1/2"-NPT-F, 40 Mesh, S304 0.5 lbs. N/A
ZF1 Plastic Filter with Brass, 1/4" Hose Barb 0.2 lbs. 30
ZF2 Plastic Filter with 1/4" Hose Barb and Check Valve 0.3 lbs. 30
Page 92
NEW
FILTERS/SWITCHES 
& MISCELLANEOUS

FILTERS & STRAINERS
ACCESSORIES - FILTERS & STRAINERS
Page 93
100649
Inlet Filters
100652
Product Group: G
ZMFIL
INLET FILTERS
PART 
NUMBER DESCRIPTION GPM MAX INLET OUTLET BYPASS SHP WGHT
100649 Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4" GH 1/2" NPT-M N/A 0.5 lbs.
100650 Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4" GH 3/8" NPT-M N/A 0.5 lbs.
100651 Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4" GH 1/2" NPT-M 1/4" 0.5 lbs.
100652 Integrated Garden Hose Nut 8.0 GPM 150 PSI 3/4" GH 3/8" NPT-M 1/4" 0.5 lbs.
ZMFIL Aluminum Body, 50 Mesh 5.8 GPM 145 PSI 1/2" BSP-F 1/2" BSP-M (2)1/4" BSP-F 0.5 lbs.
YFY1
Inlet Strainers
YF5MF
Product Group: G
YYSTR12
INLET STRAINERS
PART 
NUMBER DESCRIPTION GPM MAX INLET OUTLET BYPASS SHP WGHT
YF5BMF Plastic Body, 50 Mesh 8.0 GPM 145 PSI 1/2" BSP-M 1/2" BSP-F 1/4" 0.5 lbs.
YF5MF Plastic Body, 50 Mesh 8.0 GPM 145 PSI 1/2" BSP-M 1/2" BSP-F N/A 0.5 lbs.
YFY1 Plastic Body, 50 Mesh 21.0 GPM 145 PSI 1" BSP-F 1" BSP-F N/A 0.5 lbs.
YFY34 Plastic Body, 50 Mesh 21.0 GPM 145 PSI 3/4" BSP-F 3/4" BSP-F N/A 0.5 lbs.
YYSTR12 Brass Body, 45 Mesh 15.0 GPM 175 PSI 1/2" NPT-F 1/2" NPT N/A 0.5 lbs.
Clear Bowl Filters
DF Filters Product Group: G
CLEAR BOWL FILTERS
PART 
NUMBER DESCRIPTION MAX INLET OUTLET BYPASS SHP WGHT
DF05050 50 Mesh Screen 150 PSI 1/2" NPT-F 1/2" NPT-F N/A 0.5 lbs
DF07550 50 Mesh Screen 150 PSI 3/4" NPT-F 3/4" NPT-F N/A 0.5 lbs
DF10050 50 Mesh Screen 150 PSI 1" NPT-F 1" NPT-F N/A 0.75 lbs
DF12550 50 Mesh Screen 150 PSI 1-1/4" NPT-F 1-1/4" NPT-F N/A 0.75 lbs
DF15050 50 Mesh Screen 150 PSI 1-1/2" NPT-F 1-1/2" NPT-F N/A 1.0 lbs.
DF05080 80 Mesh Screen 150 PSI 1/2" NPT-F 1/2" NPT-F N/A 0.5 lbs
DF07580 80 Mesh Screen 150 PSI 3/4" NPT-F 3/4" NPT-F N/A 0.5 lbs
DF10080 80 Mesh Screen 150 PSI 1" NPT-F 1" NPT-F N/A 0.75 lbs
DF12580 80 Mesh Screen 150 PSI 1-1/4" NPT-F 1-1/4" NPT-F N/A 0.75 lbs
DF15080 80 Mesh Screen 150 PSI 1-1/2" NPT-F 1-1/2" NPT-F N/A 1.0 lbs.
NEW!
FILTERS/SWITCHES 
& MISCELLANEOUS

GAUGES & SWITCHES
ACCESSORIES - GAUGES & SWITCHES
Y29026035
Thermostats
Product Group: R
100272 100438
THERMOSTATS
PART 
NUMBER DESCRIPTION GPM MAX MAX TEMP INLET OUTLET SHP WGHT
100272 Flow Through Style 1 to 35 GPM 5,000 PSI Amb.-200° 1/2" NPT 1/2" NPT 1.0 lbs.
 Probe Style Thermostats, Insulated SS Capilary Copper Immersion Bulb (UL/CSA Approved):
100438 16(4)A-380V Electric Rating - 4,000 PSI 86-194° F - - 0.5 lbs.
100439 16(4)A-380V Electric Rating - 4,000 PSI 86-320° F - - 0.5 lbs.
100538 16(4)A-380V Electric Rating - 4,000 PSI 86-250° F - - 0.5 lbs.
100995 25 Amp, 250V Electric Rating 6,000 PSI 70-250° F - - 0.5 lbs.
 Thermostats Bulk Packaged (25 per box). Product Group B:
100438B 16(4)A-380V Electric Rating - 4,000 PSI 86-194° F - - 0.5 lbs.
100439B 16(4)A-380V Electric Rating - 4,000 PSI 86-320° F - - 0.5 lbs.
100538B 16(4)A-380V Electric Rating - 4,000 PSI 86-250° F - -- 0.5 lbs.
Y29026035 Probe Pocket - 4,000 PSI N/A - 0.4 lbs.
ZMSIMPLEX3
Pressure Switches
Product Group: D
YPRESSWITCH YPRESSWITCH535 YPRESSWITCHHP
PRESSURE SWITCHES
PART 
NUMBER
ACTIVATED 
PRESSURE RATED PRESSURE MAX TEMP INLET SHP WGHT
 15 Amps, 250 Volts, 580 Switching Pressure, Brass Stem, Stainless Steel Nipple:
YPRESSWITCH 580 PSI 3,600 PSI 195° F 1/4" NPT-M 0.5 lbs.
YPRSWITCHXL (67" lead) 580 PSI 3,600 PSI 195o F 1/4" NPT-M 0.5 lbs.
 15 Amps, 250 Volts, 360 Switching Pressure, Brass Stem, Stainless Steel Nipple:
YPRESSWITCH1535 360 PSI 3,600 PSI 195° F 3/8" BSP-M 0.5 lbs.
 15 Amps, 250 Volts, 580 Switching Pressure, Brass Stem, Stainless Steel Nipple:
YPRESSWITCH1564 580 PSI 3,600 PSI 195° F 3/8" BSP-M 0.5 lbs.
 5 Amps, 250 Volts, 360 Switching Pressure, Brass Stem and Nipple:
YPRESSWITCH535 360 PSI 3,600 PSI 195° F 1/4" BSP-M 0.5 lbs.
 5 Amps, 250 Volts, 580 Switching Pressure, Brass Stem and Nipple:
YPRESSWITCH564 580 PSI 3,600 PSI 195° F 1/4" BSP-M 0.5 lbs.
 15 Amps, 250 Volts, 360 Switching Pressure, Stainless Steel Stem and Nipple:
YPRSWITCHHPL 360 PSI 8,700 PSI 195° F 3/8" BSP-M 0.5 lbs.
 15 Amps, 250 Volts, 650 Switching Pressure, Stainless Steel Stem and Nipple:
YPRESSWITCHHP 650 PSI 8,700 PSI 195° F 3/8" BSP-M 0.5 lbs.
 15 Amps, 250 Volts, 215 Switching Pressure, Stainless Steel Stem and Nipple:
YPRESSWITCH1521 215 PSI 3,600 PSI 195° F 1/4” NPT-M 0.5 lbs.
 15 Amps, 250 Volts, 215 Switching Pressure, Stainless Steel Stem and Nipple:
YPRESSWITCH521 215 PSI 3,600 PSI 195° F 1/4” NPT-M 0.5 lbs.
 15 Amps, 250 Volts, 435 Switching Pressure, Stainless Steel Stem and Nipple:
ZMSIMPLEX3 725 PSI 3,000 PSI 195° F 1/4” BSP-M 0.5 lbs.
Page 94 FILTERS/SWITCHES 
& MISCELLANEOUS

GAUGES & SWITCHES
ACCESSORIES - GAUGES & SWITCHES
Page 95
100975
Flow Switches 
Reedless
Product Group: D 100879
TMT INLINE FLOW SWITCHES, 5 AMP MICROSWITCH, MINIMUM ACTIVATION FLOW, 
48” 18 AWG LEAD, NO SPRING, USES MAGNETS FOR ALL MOVEMENTS
PART 
NUMBER GPM MAX MAX TEMP INLET OUTLET VOLTAGE MATERIAL SHP WGHT
100975 12.0 GPM 5,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.25 lbs.
100931 12.0 GPM 5,800 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC SS 1.5 lbs.
 With Pilot Feature (0.5 GPM Activation):
100879 12.0 GPM 4,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.5 lbs.
 Without Pilot Feature (0.5 GPM Activation):
100904 12.0 GPM 4,000 PSI 180° F 3/8" NPT-F 3/8" NPT-F 250 VAC Brass 1.5 lbs.
YFLOSWITCH
Flow Switches
Product Group: D
YFL7SWITCH 100329
FLOW SWITCHES
PART 
NUMBER GPM RATED PRESSURE
MAX 
PRESSURE
MAX 
TEMP INLET OUTLET SHP WGHT
 3 Amp, 250 Volts, 36" Cord (Mounted in Vertical Position Only):
YFLOSWITCH 8.0 GPM 3,650 PSI 4,050 PSI 175° F 3/8" BSP-M 3/8" BSP-M 0.6 lbs.
 3 Amp, 250 Volts, 48" Cord, Gauge Port:
YFL3SWITCH 8.0 GPM 3,650 PSI 4,050 PSI 175° F 3/8" BSP-M 1/4" BSP-M 0.4 lbs.
 1 Amp, 250 Volts, 48" Cord, Flow Through Design:
YFL7SWITCH 8.0 GPM 5,100 PSI 5,100 PSI 175° F 3/8" BSP-F 3/8" BSP-F 0.5 lbs.
 3 Amp, 120 Volts AC, 96" Cord, No Pilot (5 Amp Max Carrying):
103011 .75 to 18.7 GPM 4,000 PSI 4,000 PSI 190° F 3/8" NPT-F 3/8" NPT-F 2.5 lbs.
 3 Amp, 120 Volts AC, 96" Cord with Pilot Feature (5 Amp Max Carrying):
100329 .75 to 16.0 GPM 4,000 PSI 4,000 PSI 190° F 3/8" NPT-F 3/8" NPT-F 2.5 lbs.
 5 Amp, 250 Volts,New High Flow Flow Switch, 4 gpm minimum activation, 12" 18 AWG LEAD:
101068 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
 With Weatherpack connector:
101069 10.0 GPM 4,000 PSI 180°
 F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
25.0 GPM 3,000 PSI 180° F 1/2" NPT- F 1/2" NPT- F 1.9 lbs.
NEW
NEW
101069
FILTERS/SWITCHES 
& MISCELLANEOUS
HIGH LIMIT THERMAL SWITCHES
PART 
NUMBER
MAX 
PRESSURE VAC INLET CORDED MAX TEMP
SHP 
WGHT
101066 5,000 PSI 300 3/8" NPT-M No 160° F .5 lbs.
101093 5,000 PSI 300 1/2" NPT-M Yes, 68" 230° F .5 lbs.
101094 5,000 PSI 300 1/2" NPT-M Yes, 68" 122° F .5 lbs.
101113 5,000 PSI 300 1/2" NPT-M Yes, 68" 150° F .5 lbs.
101116 5,000 PSI 300 3/8" NPT-M Yes, 68" 130° F .5 lbs.
High Limit 
Thermal Switches
101066 101094

GAUGES & SWITCHES
ACCESSORIES - GAUGES & SWITCHES
Gauges
Page 96
Product Group: D
GAUGES
PART NUMBER PRESSURE PORT PORT LOCATION SHP WGHT
320005 2,000 PSI 1/4" NPT Bottom Mount 0.7 lbs.
320000 3,000 PSI 1/4" NPT Panel Mount 0.7 lbs.
320002 3,000 PSI 1/4" NPT Bottom Mount 0.7 lbs.
320001 5,000 PSI 1/4" NPT Panel Mount 0.7 lbs.
320003 5,000 PSI 1/4" NPT Bottom Mount 0.7 lbs.
320004 20,000 PSI 1/2" NPT Bottom Mount 1.0 lbs.
320001 320002
Throttle Control
Product Group: D
ZSPEED
THROTTLE CONTROL FOR GASOLINE ENGINES
PART 
NUMBER
RATED 
PRESSURE
MAX 
PRESSURE INLET SHP WGHT
ZSPEED 725 PSI 3,000 PSI 3/8" NPT-M 1.1 lbs.
FILTERS/SWITCHES 
& MISCELLANEOUS

MISCELLANEOUS ACCESSORIES
ACCESSORIES - MISCELLANEOUS
Page 97
Valve Caps 
with Gauge Ports
Product Group: D
190031
VALVE CAPS WITH GAUGE PORTS
PART 
NUMBER DESCRIPTION SHP WGHT
190029 Valve Cap with Gauge Port for 47 Series Pumps 0.5 lbs.
190031 Valve Cap with Gauge Port for TT Series Pumps 0.5 lbs.
190107 Valve Cap with Gauge Port for EZ Series Pumps 0.5 lbs.
190358 Valve Cap with Gauge Port for 47 Series Pumps, Fine Thread 0.5 lbs.
Swivels 
High Pressure
Product Group: D
YSW38MFSB YSW38MFSS D10066
D10071 D10114
HIGH PRESSURE SWIVELS
PART 
NUMBER DESCRIPTION GPM RATED MAX INLET OUTLET WORKING TEMP
SHP 
WGHT
YSW38MFB Medium Resistance, Brass 10.5 GPM 3,650 PSI 4,050 PSI 3/8" BSP-M 3/8" BSP-F 194° F 0.3 lbs.
YSW14MFB Medium Resistance, Brass 10.5 GPM 3,650 PSI 4,050 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
YSW38MFSS Medium Resistance, SS 10.5 GPM 5,100 PSI 5,650 PSI 3/8" BSP-M 3/8" BSP-F 194° F 0.3 lbs.
YSW14MFSS Medium Resistance, SS 10.5 GPM 5,100 PSI 5,650 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
YSW9014SS Medium Resistance, SS, 90 Deg 10.5 GPM 3,650 PSI 4050 PSI 1/4" BSP-M 1/4" BSP-F 194° F 0.3 lbs.
D10066 Brass 10.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-M 3/8" NPT-F 200° F 0.3 lbs.
D10099 Brass 10.0 GPM 4,000 PSI 4,000 PSI 3/8" NPT-F 3/8" NPT-F 200° F 0.3 lbs.
D10067 Stainless Steel 10.0 GPM 5,000 PSI 5,000 PSI 3/8" NPT-M 3/8" NPT-F 200° F 0.3 lbs.
D10070 Stainless Steel, QD 10.0 GPM 5,000 PSI 5,000 PSI 3/8" QD 3/8" QD Plug 200° F 0.3 lbs.
D10071 Brass, Steel. QD 10.0 GPM 4,000 PSI 4,000 PSI 3/8" QD 3/8" QD Plug 200° F 0.3 lbs.
D10114 Stainless Steel, 90o 10.0 GPM 3,000 PSI 3,000 PSI 3/8" NPT-M 3/8" NPT-F 200° F 0.3 lbs.
NEW!
FILTERS/SWITCHES 
& MISCELLANEOUS

MISCELLANEOUS ACCESSORIES
ACCESSORIES - MISCELLANEOUS
Page 98
PU1021
Complete Electric 
Pressure Washers
Product Group: E
COMPLETE ELECTRIC PRESSURE WASHERS
PART 
NUMBER DESCRIPTION SHP WGHT
PU1021 BOXJET - Turbo 21 Aluminum Manifold, Complete Plastic Enclosure, 1,000 PSI 52.0 lbs.
PU1021B BOXJET - Turbo 21 Brass Manifold, Complete Plastic Enclosure, 1,000 PSI 52.0 lbs.
PU1021QB QUIKY - Turbo 21 Brass Manifold, Partial Plastic Enclosure, 1,000 PSI 52.0 lbs.
ZMACC
Accumulators/ 
Pulsation Dampeners
Product Group: K 686028 686010
ACCUMULATORS / PULSATION DAMPENERS
PART 
NUMBER DESCRIPTION GPM RATED INLET SHP WGHT
ZMACC Rebuildable 10.0 GPM 1,350 PSI 3/4" NPT-M 0.5 lbs.
686028 Rechargeable 10.0 GPM 3,000 PSI 1/2" NPT-M 2.5 lbs.
686011 Non-rechargeable 10.0 GPM 3,000 PSI 1/2" NPT-M 2.5 lbs.
686010* Rechargeable 40.0 GPM 3,000 PSI 1" NPT-M 7.0 lbs.
 *190200 Recharge Kit for 686010
YFLOATVALVE
Float Tank 
and Valves
YRG60FV YRG30FV YFLOATANK
Product Group: N
FLOAT TANK AND VALVES
PART 
NUMBER DESCRIPTION GPM RATED INLET SHP WGHT
BOX 
QTY
YFLOATVALVE Brass, Gray Float 7.0 GPM 145 PSI 3/8" BSP-M 0.8 lbs. 25
YRG60FV Brass, Float 7.0 GPM 145 PSI 1/2" BSP-M 0.8 lbs. 25
YRG30FV Plastic, Float 7.4/10.5 GPM 145 PSI 1/2" BSP-M 0.5 lbs. 25
YFLOATANK 1.05 Gallon Plastic Tank with Cover and Brass Float Valve 3/8" BSP-M 0.5 lbs. N/A
FILTERS/SWITCHES 
& MISCELLANEOUS

MISCELLANEOUS ACCESSORIES
ACCESSORIES - MISCELLANEOUS
Page 99
Sandblasting 
Nozzles
Product Group: N
ZMSNDBLST1 DWSDBTK DSDBK1 Z0SANDKIT1
SANDBLASTING NOZZLES
PART 
NUMBER DESCRIPTION SHP WGHT
ZMSNDBLST0 1.5 mm / .059 Nozzle 2.5 lbs.
ZMSNDBLST1 1.6 mm / .063 Nozzle 2.5 lbs.
ZMSNDBLST2 1.7 mm / .067 Nozzle 2.5 lbs.
ZMSNDBLST3 1.85 mm / .073 Nozzle 2.5 lbs.
ZMSNDBLST5 2.3 mm / .091 Nozzle 2.5 lbs.
ZMSNDPOKER Sand Poker 0.5 lbs.
DWSDBTK Complete Wet Industrial Sandblast Kit, 5,500 PSI (1/4" Nozzle Not Included) 10.0 lbs.
2100206 Mixing Head, Sandblast
2100208 Mixing Head and Nozzle, Sandblast
DSDBK1 Complete Sandblast Kit, Steel and Brass, 3,500 PSI 3.5 lbs.
Z0SANDKIT1 BOXJET Electric Pressure Washer Sandblasting Kit with Hose Poker 1.0 lbs.
Service Products
Product Group: N
100783 Extraction Kit
 SERVICE PRODUCTS
PART NUMBER DESCRIPTION
KIT1S Pump Service Video
KIT2S Packing Insertion Kit and Pump Service Video
KIT3S Packing Extraction Kit and Pump Service Video
KIT4S Complete Tool Kit and Pump Service Video
KINSTX63 Packing Insertion Kit, 63 Series
KINSTSF66 Packing Insertion Kit, 66 Series, High Flow (TSF)
KINSTSP66 Packing Insertion Kit, 66 Series, High Pressure (TSP)
TOOLKITPRI Complete Packing Replacement and Insertion Kit
ZMVALAT Complete Tool Kit
ZMVTOOL Packing Insertion Tool
F26019400 Packing Extractor, Slide Hammer
27124900 Packing Extractor, 18 mm
26093400 Packing Extractor, Socket, 20 mm
26407400 Packing Extractor, 15 mm
26093500 Packing Extractor, Socket, 22 mm
26093600 Packing Insertion Socket, 24 mm
100783 Extraction Kit, 13 mm through 24 mm
 Individual Items in 100783 Extraction Kit:
2530016 Handle
2530017 Bolt
2530018 Pin
2530019 13 mm Sleeve
2530020 15 mm Sleeve
2530021 18 mm Sleeve
2530022 20 mm Sleeve
2530023 22 mm Sleeve
2530024 24 mm Sleeve
FILTERS/SWITCHES 
& MISCELLANEOUS

WARRANTY INFORMATION
Page 100
PUMP WARRANTY 
January 1, 2019 
The following statement is intended to assist our 
customers in understanding the terms of our 
war ranty, the circumstances under which we will honor 
claims, and the procedure for making 
such claims. 
General Pump warrants each pump 
manufactured by General Pump to be free of defects in 
material or workmanship for a period of five (5) years 
from the date of shipment, with the exception of Consumer Pumps and the hydraulic pump line. In 
addition, General Pump warrants all forged brass 
pump manifolds to be free of defects in material and 
workmanship and from damage resulting from 
freezing for the life of the pump. Liability under this 
warranty is on all non-wear parts and limited to the 
repair or replacement of any pump returned to General 
Pump/US which upon inspection, is judged to be 
defective due to workmanship or material failure. Any 
product returned to General Pump should be shipped 
freight prepaid to  and 
must display a Return Authorization Number obtained 
from General Pump’s Inside Sales Department 
Page 101
WARRANTY INFORMATION
In the course of marketing or 
servicing the customer or potential 
customer’s needs, General Pump 
will use it’s best judgement in its 
recommendations. However, the 
ultimate responsibility for product 
application decisions shall rest 
with the customer. The sole and 
only warranty made by General 
Pump is the limited warranty 
described above. General Pump 
makes no other warranty of any 
kind, express or implied, including 
any implied warranty or 
merchantability or of fitness for a 
particular use or purpose. General 
Pump disclaims and denies any 
liability for any direct, indirect, 
special, incidental or consequential 
damages which may be suffered as 
a result of sale, delivery, servicing, 
use, loss of any product, downtime, 
labor, freight or other charges not 
expressly included herein. The only 
liability and the total liability of 
General Pump under this limited 
warranty or in any claim regarding or 
involving General Pump is 
expressly limited to the replacement 
or purchase price of the product. 
The following items are not 
warranted, due to matters beyond 
General Pump control. 
1. Normal wear and tear to parts 
that are considered standard 
wear parts. 
2. Defects caused by the fault 
or negligence of the buyer or 
third party. 
3. Use of unauthorized repair 
parts. 
4. Modifications made by the 
customer. 
5. Car wash series pumps are 
covered for damage caused by 
fresh water wash out for the 
life of the pump. 
This warranty statement 
supercedes and replaces nondated warranties or previously 
dated warranties. 
POWER UNIT(S) 
WARRANTY 
January 1, 2019 
General Pump warrants each 
power unit in whole for 90 days 
from the date the unit is 
purchased. After 90 days, each 
pump manufactured by General 
Pump carries General Pump 
standard pump warranty. Each 
individual accessory on the power 
unit is covered by GP Companies, 
Inc. standard accessory warranty. 
ACCESSORY WARRANTY
January 1, 2019 
General Pump accessories 
are warranted by the 
manufacturer to the original 
purchaser to be free from defects 
in material and workmanship
under normal use and service. 
“Normal use and service” means 
not in excess of the 
recommended pressures and 
temperatures or handling fluids 
not compatible with component 
materials. This warranty shall not 
apply to any accessory that has 
been repaired or altered to affect 
the performance or reliability 
of the accessory. 
Warranty does not apply to: 
1. freight damage; 
2. freeze damage; 
3. damage caused by parts 
and/or accessories not 
obtained from or approved 
by General Pump; 
4. damage caused by misuse 
and/or misapplication; 
5. normal wear of moving parts 
or components affected by 
moving parts. 
The period of warranty is 
90 days from the date the 
product is purchased. Liability of 
manufacturer under the 
foregoing warranty is limited to 
repair or replacement at the 
option of the manufacturer of 
that product, which according to 
the manufacturer’s investigation 
was deemed defective at the 
time of the shipment. 
This warranty is in lieu of all 
other warranties, expressed or 
implied, including any warranty 
of merchantability and/or any 
and all other obligations or 
liabilities on the part of the 
manufacturer 

TERMS & CONDITIONS RETURN POLICY
Page 102
General Pump 
SALES POLICIES 
General Pump reserves the 
right to refuse to conduct 
business with any company not 
in good credit standing or that 
is not determined to be a 
qualified manufacturer, 
wholesaler or distributor. 
TERMS & CONDITIONS
• Credit terms are Net 30 
days, subject to credit 
department approval 
• All shipments are FOB, 
origin 
• Pricing is subject to change 
without notice
RETURN POLICY
1. To expedite the Return 
Merchandise Authorization 
(RMA) process, please have 
your General Pump invoice 
number available when you 
contact the Customer Service 
Department. 
2. An RMA number must be 
acquired before returning 
product. To obtain an RMA 
number, please call General 
Pump’s Customer Service 
Department at: 
3. An RMA number is valid for 
60 days from the date of issue. 
If the product is not received 
within 60 days, a new RMA 
number must be issues. 
4. The RMA number must appear 
on the outside of the package. 
Items received without an RMA 
number will be refused.
5. Freight for returns, except for 
products shipped in error by 
General Pump, is the 
responsibility of the customer. 
6. General Pump will repair 
or replace products 
qualified as defective under 
General Pump’s warranty. 
7. For the safety of our 
employees, all products 
used in any type of chemical 
application must include 
the MSDS sheet for the 
chemical used. 
8. If you require immediate 
replacement for products 
submitted for warranty 
consideration, General Pump 
will ship and invoice at 
current price. Standard 
warranty policy will apply 
to returned products.

REFERENCE
Page 103

REFERENCE
Page 104

INDEX
Page 105
MODEL/PART PAGE
100016.....................................................60 
100059.....................................................75 
100072.....................................................51 
100074.....................................................34 
100075.....................................................34 
100076.....................................................34 
100093.....................................................34 
100096.....................................................34 
100097.....................................................34 
100145.....................................................72 
100146.....................................................72 
100147.....................................................72 
100152 .................................................35, 73 
100156.....................................................67 
100160.....................................................75 
100163.....................................................59 
100169.....................................................72 
100172.....................................................59 
100181.....................................................72 
100214.....................................................60 
100216.....................................................60 
100217.....................................................60 
100219.....................................................60 
100256.....................................................60 
100259.....................................................67 
100264.....................................................60 
100268.....................................................31 
100268.....................................................65 
100269.....................................................31 
100269.....................................................65 
100272.....................................................94 
100275.....................................................90 
100276.....................................................90 
100277.....................................................90 
100278.....................................................60 
100295.....................................................60 
100315.....................................................51 
100316.....................................................51 
100317.....................................................51 
100323.....................................................67 
100324.....................................................67 
100325.....................................................68 
100326.....................................................68 
100329.....................................................95 
100438.....................................................94 
100439.....................................................94 
100450.....................................................60 
100467.....................................................87 
100487.....................................................87 
100490.....................................................67 
100511.....................................................33 
100512.....................................................67 
100513.....................................................67 
100514.....................................................67 
100534.....................................................66 
100538.....................................................94 
100543.....................................................67 
100544.....................................................67 
100545.....................................................68 
100546.....................................................68 
100547.....................................................66 
100552.....................................................60 
100553.....................................................60 
100556.....................................................67 
100557.....................................................67 
100558.....................................................67 
100560.....................................................92 
100570.....................................................71 
100571.....................................................71 
100572.....................................................71 
100575.....................................................70 
100576.....................................................70 
100577.....................................................70 
100594.....................................................71 
100595.....................................................71 
100609.....................................................66 
100610.....................................................66 
100611.....................................................66 
100615.....................................................33 
100616.....................................................71 
100617.....................................................70 
100618.....................................................70 
100619.....................................................70 
100622.....................................................92 
100630.....................................................72 
100631.....................................................72 
100632.....................................................72 
100633.....................................................70 
100634.....................................................70 
100635.....................................................70 
100636.....................................................72 
100637.....................................................72 
100638.....................................................72 
100647.....................................................92 
100648.....................................................14 
100649.....................................................93 
100650.....................................................93 
100651.....................................................93 
100652.....................................................93 
100653.....................................................70 
MODEL/PART PAGE
100993...............................................................66 
100995...............................................................94 
100996...............................................................34 
100998........................................................30, 65 
100999........................................................30, 65 
101002........................................................53, 75 
101004...............................................................34 
101010...............................................................34 
101012...............................................................72 
101018...............................................................35 
101019...............................................................35 
101020...............................................................35 
101021...............................................................35 
101022...............................................................35 
101023...............................................................35 
101024...............................................................35 
101025...............................................................35 
101026...............................................................35 
101027...............................................................35 
101028...............................................................35 
101029...............................................................35 
101030...............................................................35 
101031...............................................................35 
101032...............................................................35 
101033...............................................................35 
101034...............................................................35 
101035...............................................................35 
101037...............................................................35 
101038...............................................................35 
101046...............................................................59 
101057...............................................................75 
101065...............................................................51 
101066...............................................................95 
101067........................................................35, 73 
101068 ................................................33, 54, 95 
101069 ................................................33, 54, 95 
101070...............................................................66 
101072...............................................................35 
101073...............................................................35 
101074...............................................................35 
101075...............................................................35 
101088...............................................................31 
101093...............................................................95 
101094...............................................................95 
101096...............................................................75 
101109...............................................................75 
101110...............................................................75 
101112........................................................26, 59 
101113...............................................................95 
101116...............................................................95 
103011...............................................................95 
103166...............................................................79 
105082...............................................................84 
105083...............................................................84 
105084...............................................................84 
105085...............................................................84 
105086...............................................................84 
105087...............................................................84 
105088...............................................................84 
105089...............................................................84 
105090...............................................................84 
105101...............................................................84 
105120...............................................................84 
105121...............................................................84 
105122...............................................................84 
105123...............................................................84 
105124...............................................................84 
105125...............................................................84 
105126...............................................................84 
105127...............................................................84 
105140...............................................................30 
105144...............................................................30 
105145...............................................................30 
105154...............................................................30 
105167...............................................................30 
105169...............................................................30 
105193...............................................................30 
105194...............................................................84 
105203...............................................................84 
190009...............................................................64 
190029...............................................................97 
190031...............................................................97 
190043...............................................................63 
190079...............................................................64 
190091...............................................................81 
190107...............................................................97 
190225...............................................................59 
190237...............................................................28 
190238...............................................................28 
190239...............................................................28 
190245...............................................................28 
190358...............................................................97 
190361...............................................................64 
190446...............................................................60 
190447...............................................................60 
190448...............................................................60 
190465...............................................................64 
190600...............................................................54 
MODEL/PART PAGE
100654.....................................................70 
100655.....................................................70 
100656.....................................................14 
100673.....................................................78 
100676.....................................................68 
100677.....................................................67 
100678.....................................................67 
100679.....................................................67 
100680.....................................................67 
100684.....................................................68 
100687.....................................................59 
100688.....................................................59 
100690.....................................................72 
100717.....................................................59 
100718.....................................................59 
100719.....................................................59 
100720.....................................................59 
100722.....................................................66 
100723.....................................................66 
100724.....................................................66 
100726.....................................................66 
100727.....................................................66 
100728.....................................................66 
100729.....................................................66 
100730.....................................................68 
100734.....................................................60 
100735.....................................................60 
100751.....................................................75 
100752.....................................................78 
100763.....................................................70 
100764.....................................................70 
100765.....................................................70 
100773.....................................................71 
100774.....................................................71 
100775.....................................................71 
100776.....................................................71 
100781 .................................................34, 71 
100783.....................................................99 
100790.....................................................71 
100791.....................................................71 
100797.....................................................66 
100798.....................................................66 
100799.....................................................66 
100814.....................................................68 
100819.....................................................70 
100820.....................................................70 
100821.....................................................70 
100822.....................................................70 
100823.....................................................69 
100824.....................................................69 
100825.....................................................69 
100826.....................................................69 
100827.....................................................69 
100828.....................................................69 
100829.....................................................69 
100830.....................................................69 
100838.....................................................68 
100844.....................................................67 
100845.....................................................67 
100846.....................................................67 
100853.....................................................34 
100861.....................................................69 
100862.....................................................69 
100863.....................................................69 
100865.....................................................68 
100871.....................................................33 
100872.....................................................33 
100879 .................................................33, 95 
100880.....................................................89 
100881.....................................................89 
100882.....................................................91 
100892 .................................................30, 65 
100904 .................................................33, 95 
100906.....................................................73 
100909.....................................................91 
100913.....................................................33 
100931 .................................................33, 95 
100938.....................................................34 
100947 .................................................33, 71 
100948 .................................................33, 71 
100949 .................................................33, 71 
100950 .................................................33, 71 
100955.....................................................34 
100956.....................................................34 
100957.....................................................34 
100962.....................................................66 
100963.....................................................66 
100970.....................................................67 
100971...............................................................66 
100972...............................................................66 
100973...............................................................67 
100975........................................................33, 95 
100976...............................................................59 
100977...............................................................59 
100979...............................................................67 
100980...............................................................66 
100981...............................................................66 
100982...............................................................66 
100983...............................................................66 
100984...............................................................66

INDEX
Page 106
MODEL/PART PAGE
190601...............................................................54 
203411...............................................................27 
320000...............................................................96 
320001...............................................................96 
320002...............................................................96 
320003...............................................................96 
320004...............................................................96 
320005...............................................................96 
510227...............................................................27 
510476...............................................................27 
520133...............................................................89 
520134...............................................................89 
520135...............................................................89 
520136...............................................................89 
540014..................................................................6 
560001...............................................................30 
560002...............................................................30 
638295...............................................................27 
638298...............................................................27 
639015...............................................................59 
639273...............................................................54 
639276...............................................................54 
639611...............................................................57 
639660...............................................................57 
639664...............................................................57 
639723...............................................................57 
639829...............................................................89 
680006...............................................................90 
680007...............................................................90 
680073...............................................................90 
680094...............................................................54 
680095...............................................................54 
680096...............................................................54 
680267........................................................53, 76 
680268........................................................53, 76 
680269........................................................53, 76 
680270........................................................53, 76 
680358........................................................53, 76 
686010........................................................31, 98 
686011........................................................31, 91 
686028........................................................31, 91 
700004...............................................................90 
700034...............................................................90 
720039...............................................................90 
2100200 ............................................................79 
2100206 ............................................................99 
2100208 ............................................................99 
2100242 ............................................................62 
2100306 ............................................................80 
2100357 ............................................................79 
2100358.....................................................52, 80 
2100375 ............................................................79 
2100379 ............................................................79 
2100437 ............................................................79 
2100457 ............................................................74 
2100462 ............................................................79 
2100463 ............................................................79 
2100465 ............................................................79 
2100473 ............................................................80 
2100503 ............................................................79 
2100612 ............................................................67 
2100614 ............................................................67 
2100638 ............................................................67 
2510103 ............................................................91 
2530016 ............................................................99 
2530017 ............................................................99 
2530018 ............................................................99 
2530019 ............................................................99 
2530020 ............................................................99 
2530021 ............................................................99 
2530022 ............................................................99 
2530023 ............................................................99 
2530024 ............................................................99 
2900003 ............................................................88 
2900004 ............................................................88 
2900005 ............................................................88 
26093400..........................................................99 
26093500..........................................................99 
26093600..........................................................99 
26407400..........................................................99 
27124900..........................................................99 
100094WT..................................................34, 71 
100333BL...................................................34, 71 
100334GY ..................................................34, 71 
100336RD..................................................34, 71 
100339LG...................................................34, 71 
100438B.....................................................34, 94 
100541GY ..................................................34, 71 
100673Q............................................................78 
100835OR..................................................34, 71 
100869C ............................................................80 
100870C ............................................................80 
2100612MB......................................................67 
900400Q............................................................84 
915500MSS ......................................................84 
915500QB.........................................................84 
925400M ...........................................................84 
925400Q............................................................84
MODEL/PART PAGE 
D40001 ..............................................................92 
D40003 ..............................................................92 
D40006 ..............................................................92 
D40013 ..............................................................92 
D40016 ..............................................................92 
D40017 ..............................................................92 
D80040 ..............................................................81 
D80041 ..............................................................81 
DCFSCP18..........................................................79 
DCFSCP18GZ ....................................................79 
DCFSCP20..........................................................79 
DCFSCP20GZ ....................................................79 
DCFSCP24GZ ....................................................79 
DCFSCS22Z........................................................79 
DCG5010 ...........................................................74 
DCG5010HE......................................................53 
DCG5010HE......................................................74 
DCLTG18.............................................................80 
DCLTG18A ..........................................................81 
DCLTG24.............................................................80 
DCLTG24A4........................................................81 
DDBL14..............................................................88 
DDC25020.........................................................88 
DF05050 ............................................................93 
DF05080 ............................................................93 
DF07550 ............................................................93 
DF07580 ............................................................93 
DF10050 ............................................................93 
DF10080 ............................................................93 
DF12550 ............................................................93 
DF12580 ............................................................93 
DF15050 ............................................................93 
DF15080 ............................................................93 
DFSCGK ..............................................................79 
DFSCP12 ............................................................79 
DFSCP12E..........................................................79 
DFV5012 ............................................................51 
DG320014.........................................................75 
DG320038.........................................................75 
DG3200M ..........................................................75 
DG4000..............................................................74 
DG4000W ..........................................................74 
DG4512..............................................................74 
DG5010.......................................................32, 74 
DG5010W...................................................32, 74 
DGE4012NT ......................................................74 
DGE4012W........................................................74 
DGE5010............................................................74 
DG5000S............................................................74 
DGE5010SL .......................................................74 
DGLN3230M.....................................................75 
DGLN3299M.....................................................75 
DGLNH120 ........................................................75 
DHL4086............................................................85 
DHL4099............................................................85 
DHL4120............................................................85 
DHL4130............................................................85 
DHL4140............................................................85 
DHL4150............................................................85 
DHL4160............................................................85 
DHL4170............................................................85 
DHL4180............................................................85 
DHR50100D......................................................79 
DHR50150D......................................................79 
DHRA50150......................................................79 
DHRA50300......................................................79 
DHRA50450......................................................79 
DHRP50150......................................................79 
DL18FWBK.........................................................32 
DL18FWBKM.....................................................32 
DL18FWBL.........................................................32 
DL18FWBLM .....................................................32 
DL18FWBLMSS.................................................32 
DL18FWRD ........................................................32 
DL18FWRDM ....................................................32 
DL24ICS..............................................................77 
DL27ICS..............................................................77 
DL36ICS..............................................................77 
DL36VCS ............................................................77 
DL36VSS.............................................................77 
DL36VSSB..........................................................77 
DL42ICS..............................................................77 
DL47ICS..............................................................77 
DL48VCS ............................................................77 
DL59ICS..............................................................77 
DL60VCS ............................................................77 
DL79ICS..............................................................77 
DLD42VS............................................................78 
DLE1614.............................................................78 
DLE1618.............................................................78 
DLE2214.............................................................78 
DLE2814.............................................................78 
DLE2818.............................................................78 
DLTG12................................................................80 
DP80009............................................................81 
DP80010............................................................81 
DSDBK1..............................................................99 
DWSDBTK...........................................................99 
EP1306G8 ............................................................4
MODEL/PART PAGE
965400M ...........................................................84 
965400Q............................................................84 
965400S.............................................................84 
A15.......................................................................51 
A15X ....................................................................51 
A4X .....................................................................51 
A7.........................................................................51 
A7S.......................................................................51 
A7X.......................................................................51 
AB100DP............................................................20 
AB100PS ............................................................20 
AB120PS ............................................................20 
AB180DP............................................................20 
AB180PS ............................................................20 
AB90DP ..............................................................20 
AT0033................................................................19 
AT0055DS ..........................................................19 
AT0055DSL........................................................19 
CW1012..............................................................29 
CW2004..............................................................28 
CW2040..............................................................28 
CW24...................................................................28 
CW3040..............................................................28 
CW3555..............................................................28 
D10001 ..............................................................89 
D10002 ..............................................................89 
D10003 ..............................................................89 
D10004 ..............................................................89 
D10005 ..............................................................89 
D10010 ..............................................................90 
D10011 ..............................................................90 
D10012 ..............................................................90 
D10016 ..............................................................90 
D10017 ..............................................................90 
D10021 ..............................................................91 
D10023 ..............................................................91 
D10024 ..............................................................91 
D10027 ..............................................................91 
D10028 ..............................................................91 
D10029 ..............................................................91 
D10030 ..............................................................91 
D10032 ..............................................................90 
D10033 ..............................................................90 
D10035 ..............................................................89 
D10036 ..............................................................78 
D10037 ..............................................................91 
D10040 ..............................................................91 
D10041 ..............................................................91 
D10043 ..............................................................91 
D10044 ..............................................................91 
D10052 ..............................................................91 
D10061 ..............................................................89 
D10062 ..............................................................89 
D10063 ..............................................................89 
D10064 ..............................................................89 
D10066 ..............................................................97 
D10067 ..............................................................97 
D10070 ..............................................................97 
D10071 ..............................................................97 
D10072 ..............................................................89 
D10073 ..............................................................89 
D10074 ..............................................................89 
D10075 ..............................................................89 
D10076 ..............................................................90 
D10077 ..............................................................90 
D10078 ..............................................................90 
D10079 ..............................................................90 
D10084 ..............................................................90 
D10085 ..............................................................90 
D10088 ..............................................................89 
D10089 ..............................................................89 
D10090 ..............................................................89 
D10090L ............................................................89 
D10091 ..............................................................89 
D10091L ............................................................89 
D10092 ..............................................................90 
D10093 ..............................................................90 
D10099 ..............................................................97 
D10114 ..............................................................97 
D10117 ..............................................................90 
D10118 ..............................................................90 
D10119 ..............................................................90 
D10122 ..............................................................89 
D10123 ..............................................................89 
D10124 ..............................................................89 
D10125 ..............................................................89 
D10126 ..............................................................90 
D10127 ..............................................................90 
D11006 ..............................................................89 
D11007 ..............................................................89 
D11008 ..............................................................89 
D11009 ..............................................................89 
D20011 ..............................................................78 
D20015 ..............................................................81 
D22000 ..............................................................78 
D30001 ..............................................................79 
D30002 ..............................................................79 
D30004 ..............................................................79 
D30006 ..............................................................79 

INDEX
Page 107
MODEL/PART PAGE
EP1306S34 ..........................................................3 
EP1308G8 ............................................................4 
EP1308S34 ..........................................................3 
EP1309G8 ............................................................4 
EP1310G8 ............................................................4 
EP1310S34 ..........................................................3 
EP1311G8 ............................................................4 
EP1311S34 ..........................................................3 
EP1313G8 ............................................................4 
EP1313S17 ..........................................................3 
EP1313S34 ..........................................................3 
EP1505G6 ............................................................4 
EP1505S34 ..........................................................3 
EP1506G6 ............................................................4 
EP1506G8 ............................................................4 
EP1506S34 ..........................................................3 
EP1508G6 ............................................................4 
EP1508G8 ............................................................4 
EP1508S34 ..........................................................3 
EP1509G8 ............................................................4 
EP1510E17 ..........................................................3 
EP1510G8 ............................................................4 
EP1510S17 ..........................................................3 
EP1510S34 ..........................................................3 
EP1512E17 ..........................................................3 
EP1512S17 ..........................................................3 
EP1513S17 ..........................................................3 
EP1810E17 ..........................................................3 
EP1810S17 ..........................................................3 
EP1811E17 ..........................................................3 
EP1811S17 ..........................................................3 
EP1812E17 ..........................................................3 
EP1812S17 ..........................................................3 
EP1813S17 ..........................................................3 
ES1810S................................................................5 
ES2010S................................................................5 
ES2012S................................................................5 
ES2013S................................................................5 
ES2212S................................................................5 
ES2213S................................................................5 
ESN1310G............................................................5 
ESN1313G............................................................5 
ESN1510G............................................................5 
ESN1512G............................................................5 
ESN1810S ............................................................5 
ESN2010S ............................................................5 
ESN2012S ............................................................5 
ESN2013S ............................................................5 
ESN2212S ............................................................5 
ESN2213S ............................................................5 
ET1304E34UTS ...................................................2 
ET1305E34UTS ...................................................2 
ET1305S34...........................................................1 
ET1306S34...........................................................1 
ET1307S34...........................................................1 
ET1308S34...........................................................1 
ET1309S34...........................................................1 
ET1310S34...........................................................1 
ET1311S34...........................................................1 
ET1312S34...........................................................1 
ET1504E34...........................................................2 
ET1504E34UTSL.................................................2 
ET1505E34...........................................................2 
ET1505E34UTSL.................................................2 
ET1505G6.............................................................2 
ET1505S34...........................................................1 
ET1506E34...........................................................2 
ET1506E34UTSL.................................................2 
ET1506G6.............................................................2 
ET1506S34...........................................................1 
ET1507E34...........................................................2 
ET1507G6.............................................................2 
ET1507S34...........................................................1 
ET1508G6.............................................................2 
ET1508S34...........................................................1 
ET1509E17...........................................................2 
ET1509E17UTS ...................................................2 
ET1509S17...........................................................1 
ET1511S17...........................................................1 
ET1512S17...........................................................1 
ET1807E17...........................................................2 
ET1807S17...........................................................1 
ET1809E17...........................................................2 
ET1809S17...........................................................1 
ET1810S17...........................................................1 
ET1811S17...........................................................1 
EWM0515C .......................................................45 
EWM0815C .......................................................45 
EWM1015C .......................................................45 
EWM1615C .......................................................45 
EWM2315C .......................................................45 
EWM2515S........................................................45 
EWM3015C .......................................................45 
EWM3715C .......................................................45 
EWM4215C .......................................................45 
EWM4215S........................................................45 
EZ2530SUI.........................................................12 
EZ2536E.............................................................12 
EZ2536EUI.........................................................12 
EZ2536S.............................................................12 
EZ2542E.............................................................12 
EZ2542S.............................................................12 
MODEL/PART PAGE 
KF30A.............................................................37 
KF32A.............................................................37 
KF36A.............................................................37 
KF40A.............................................................37 
KF5M5B.........................................................43 
KF5M9B.........................................................43 
KFZ28A ..........................................................47 
KFZ30A ..........................................................47 
KFZ36A ..........................................................47 
KFZ40A................................................................47 
KINSTSF66 .........................................................99 
KINSTSP66.........................................................99 
KINSTX63 ...........................................................99 
KIT1S ...................................................................99 
KIT2S ...................................................................99 
KIT3S ...................................................................99 
KIT4S ...................................................................99 
KS28A..................................................................38 
KS28SA ...............................................................38 
KS32A..................................................................38 
KS36A..................................................................38 
KS40A..................................................................38 
KT16A..................................................................37 
KT18A..................................................................37 
KT20A..................................................................37 
KT22A..................................................................37 
KT24A..................................................................37 
KT28A..................................................................37 
KT30A..................................................................37 
KT32A..................................................................37 
KT36A..................................................................37 
KT40A..................................................................37 
KT45M.................................................................43 
KV12....................................................................41 
KV14....................................................................41 
LK3615 ...............................................................41 
LK3617 ...............................................................41 
LK4015 ...............................................................41 
LK4017 ...............................................................41 
LK4515 ...............................................................41 
LK4517 ...............................................................41 
LK5015 ...............................................................41 
LK5017 ...............................................................41 
LK5515 ...............................................................41 
LK5517 ...............................................................41 
LK6015 ...............................................................41 
LK6017 ...............................................................41 
LKN3615 ............................................................48 
LKN3617 ............................................................48 
LKN4015 ............................................................48 
LKN4017 ............................................................48 
LKN4515 ............................................................48 
LKN4517 ............................................................48 
LKN5015 ............................................................48 
LKN5017 ............................................................48 
LKN5515 ............................................................48 
LKN5517 ............................................................48 
LKN6015 ............................................................48 
LKN6017 ............................................................48 
MF45A.................................................................40 
MF50A.................................................................40 
MF55A.................................................................40 
MF7M5B.............................................................43 
MF7M5D ............................................................43 
MF7M7B.............................................................43 
MF7M7D ............................................................43 
MK40A................................................................40 
MK45A................................................................40 
MK50A................................................................40 
MK55A................................................................40 
MK60A................................................................40 
MK65A................................................................40 
MK9M5B ............................................................43 
MK9M5D............................................................43 
MK9M8B ............................................................43 
MK9M8D............................................................43 
MKS40A..............................................................41 
MKS45A..............................................................41 
MKS50A..............................................................41 
MKS55A..............................................................41 
MKS60A..............................................................41 
MKS65A..............................................................41 
MW32A...............................................................40 
MW36A...............................................................40 
MWN32A.......................................................48 
MWN36A.......................................................48 
MWN40A.......................................................48 
MWN45A.......................................................48 
MWN50A.......................................................48 
MWN55A.......................................................48 
MWS40A .......................................................40 
MWS45A .......................................................40 
MWS50A .......................................................40 
MWS55A .......................................................40 
PEHT2010S ..................................................23 
PEHT2010S ..................................................26
MODEL/PART PAGE
EZ2542SN ..........................................................12 
EZ2545E .............................................................12 
EZ2545S .............................................................12 
EZ2555E .............................................................12 
EZ2555S .............................................................12 
EZ3030G34........................................................13 
EZ3030G34UI ...................................................13 
EZ3035G.............................................................13 
EZ3035GUI ........................................................13 
EZ3036SN ..........................................................12 
EZ3040G.............................................................13 
EZ3040GUI ........................................................13 
EZ3040S .............................................................12 
EZ3042S .............................................................12 
EZ3045G.............................................................13 
EZ4030G34........................................................13 
EZ4035E34 ........................................................12 
EZ4035G34........................................................13 
EZ4040E34 ........................................................12 
EZ4040G.............................................................13 
F10 .......................................................................54 
F20 .......................................................................54 
F26019400........................................................99 
F30 .......................................................................54
F30..................................................................54 
F34207301...................................................43 
F34207401...................................................43 
F34207501...................................................43 
F40..................................................................54 
F50/80...........................................................54 
F60..................................................................54 
FPN12 ............................................................51 
HF18A ............................................................38 
HF20A ............................................................38 
HF22A ............................................................38 
HF22JA...........................................................38 
HF25A ............................................................38 
HFN25A.........................................................47 
HS18A............................................................38 
HS20A............................................................38 
HT125CW......................................................27 
HT125RCK ....................................................27 
HT150CWL....................................................27 
HT150CWS ...................................................27 
HT150RCK ....................................................27 
HTC1505E345 .............................................21 
HTC1506S17................................................21 
HTC1509E175 .............................................21 
HTC1509S17................................................21 
HTC1511S17................................................21 
HTCK3623S...........................................23, 27 
HTCK4050S...........................................23, 27 
HTF2018S..............................................22, 26 
HTF2221S..............................................22, 26 
HTF2421S..............................................22, 26 
HTS2016S..............................................22, 25 
HTS2210S..............................................22, 25 
HTS2212S..............................................22, 25 
HTS2215S..............................................22, 25 
HTXS1810S ...........................................21, 25 
HTXS1812S ...........................................21, 25 
HTXS1813S ...........................................21, 25 
HX101010.............................................52, 83 
HX10910................................................52, 83 
HX212.....................................................52, 83 
HX222.....................................................52, 83 
HX232.....................................................52, 83 
HX323.....................................................52, 83 
HX333.....................................................52, 83 
HX343.....................................................52, 83 
HX434.....................................................52, 83 
HX444.....................................................52, 83 
HX454.....................................................52, 83 
HX545.....................................................52, 83 
HX555.....................................................52, 83 
HX565.....................................................52, 83 
HX656.....................................................52, 83 
HX666.....................................................52, 83 
HX676.....................................................52, 83 
HX767.....................................................52, 83 
HX777.....................................................52, 83 
HX787.....................................................52, 83 
HX878.....................................................52, 83 
HX888.....................................................52, 83 
HX898..........................................................52, 83 
HX9109 .......................................................52, 83 
HX989..........................................................52, 83 
HX999..........................................................52, 83 
HXNOZ.........................................................52, 83 
KE20A..................................................................37 
KE22A..................................................................37 
KE24A..................................................................37 
KE28HA ..............................................................37 
KE30HA ..............................................................37 
KE36HA ..............................................................37 
KEZ20A ...............................................................46 
KEZ22A ...............................................................46 
KEZ24A ...............................................................46 
KEZ28HA ............................................................46 
KEZ30HA ............................................................46 
KEZ36HA ............................................................46 
KF28A..................................................................37

INDEX
Page 108
MODEL/PART PAGE
PEHT2012S .......................................................23 
PEHT2012S .......................................................26 
PEHT2213S .......................................................23 
PEHT2213S .......................................................26 
PEHT2214S .......................................................23 
PEHT2214S .......................................................26 
PLSR4HVNCV.............................................31, 61 
PLSR4LVNCV..............................................31, 61 
PLSRZ2140........................................................64 
PLSRZ2140MS..................................................64 
PLSRZ36SS ........................................................64 
PLSRZ523...........................................................64 
PLSRZ523MS ....................................................64 
PLSRZ87SS ........................................................64 
PMREP1313G...................................................18 
PMRET1507G ...................................................18 
PMREZ4040G ...................................................18 
PMRTSS1511 ....................................................18 
PN/VU2 ..............................................................51 
PN2......................................................................51 
PN4/200 ............................................................51 
PN4/200NCV....................................................51 
PN4/300 ............................................................51 
PN4/300NCV....................................................51 
PN4/450.............................................................51 
PN4/450NCV ....................................................51 
PNR/1503..........................................................51 
PNR1520............................................................51 
PNR2 ...................................................................51 
PNR4090............................................................44 
PNR4090LP.......................................................44 
PNRA2.................................................................51 
PS12 ....................................................................53 
PU1021 ..............................................................98 
PU1021B............................................................98 
PU1021QB ........................................................98 
PULSAR4HP.......................................................61 
PULSAR4HPMS ................................................61 
PULSAR4KHP....................................................61 
PULSAR4KHPEZ ...............................................61 
PULSAR4KHPMS..............................................61 
PULSAR4KHPS .................................................61 
PULSAR4KLP.....................................................31 
PULSAR4KLP.....................................................61 
PULSAR4KLPMS...............................................61 
PULSAR4LP........................................................31 
PULSAR4LP........................................................61 
PULSARZ.............................................................64 
PULSARZMS ......................................................64 
PXW20075.........................................................30 
R1/200A.............................................................49 
R1/400A.............................................................49 
R1/600A.............................................................49 
R1503 .................................................................49 
R1510 .................................................................49 
R1520 .................................................................49 
R1X/200A ..........................................................49 
R1X/400A...........................................................49 
R1X/600A ..........................................................49 
R2.........................................................................49 
R2L.......................................................................49 
R3HP/450..........................................................49 
R3LP/230...........................................................49 
R4090..........................................................44, 49 
R4090LP .....................................................44, 49 
RA2 ......................................................................49 
RA2L ....................................................................49 
RX3/100.............................................................49 
RX3/300.............................................................49 
S1503/1000......................................................50 
S1503/1100......................................................50 
S1503/1200......................................................50 
S1503/1400......................................................50 
S1503/1600......................................................50 
S1503/1800......................................................50 
S1503/700........................................................50 
S1503/800........................................................50 
S1510/1000......................................................50 
S1510/1100......................................................50 
S1510/1250......................................................50 
S1510/1500......................................................50 
S1510/1800......................................................50 
S1510/800........................................................50 
S1520/1000......................................................50 
S1520/1200......................................................50 
S1520/1500......................................................50 
S1520/800........................................................50 
S4090/200.................................................44, 50 
S4090/300.................................................44, 50 
S4090/400.................................................44, 50 
S455/100...........................................................50 
S455/200...........................................................50 
S455/300...........................................................50 
S455/400...........................................................50 
S455/450...........................................................50 
S723/100...........................................................50 
S723/200...........................................................50 
S723/300...........................................................50 
S723/400...........................................................50
MODEL/PART PAGE 
TP2533J34UIL.....................................................7 
TR26 ....................................................................44 
TR30 ....................................................................44 
TR32 ....................................................................44 
TR36 ....................................................................44 
TR50 ....................................................................44 
TR55 ....................................................................44 
TR60 ....................................................................44 
TR65 ....................................................................44 
TR70 ....................................................................44 
TR75 ....................................................................44 
TS1011................................................................15 
TS1041................................................................17 
TS1321................................................................15 
TS1331................................................................15 
TS1531................................................................17 
TS1621................................................................15 
TS1711................................................................15 
TS1811................................................................15 
TS2010SS...........................................................46 
TS2011................................................................15 
TS2012SS...........................................................46 
TS2013................................................................15 
TS2016SS...........................................................46 
TS2021................................................................15 
TS2212SS...........................................................46 
TS921..................................................................15 
TSF1819 .............................................................16 
TSF2019 .............................................................16 
TSF2019DS........................................................16 
TSF2019SS.........................................................46 
TSF2021 .............................................................16 
TSF2021SS.........................................................46 
TSF2219 .............................................................16 
TSF2221 .............................................................16 
TSF2221SS.........................................................46 
TSF2421 .............................................................16 
TSF2421SS.........................................................46 
TSF2819 .............................................................16 
TSP1619.............................................................16 
TSP1621.............................................................16 
TSP1621N..........................................................16 
TSP1819.............................................................16 
TSP1821.............................................................16 
TSS1021 .............................................................15 
TSS1511 .............................................................15 
TT1509HA28.....................................................57 
TT1540GBF ..........................................................7 
TT2021EBF...........................................................6 
TT2028EBF...........................................................6 
TT2028GBF ..........................................................7 
TT2035EBF...........................................................6 
TT2035EBFUI.......................................................6 
TT2035GBF ..........................................................7 
TT901.....................................................................6 
TT9061EBF...........................................................6 
TT9061EBFU........................................................6 
TT9061EBFUI.......................................................6 
TT9061GBF ..........................................................7 
TT9071EBF...........................................................6 
TT9071EBFU........................................................6 
TT9071EBFUI.......................................................6 
TT9071GBF ..........................................................7 
TT9111 ..................................................................6 
TT9111EBF...........................................................6 
TT931.....................................................................6 
TT9351................................................................14 
TT941.....................................................................6 
TT951.....................................................................6 
TX1505G6..........................................................11 
TX1506G6..........................................................11 
TX1506G8..........................................................11
TX1506S17SS..............................................45 
TX1506S34...................................................10 
TX1508G6.....................................................11 
TX1508G8.....................................................11 
TX1508G8UIA..............................................11 
TX1508S34...................................................10 
TX1509G8.....................................................11 
TX1509G8UIA..............................................11 
TX1510E349 ................................................10 
TX1510G8..........................................................11 
TX1510G8UIA...................................................11 
TX1510S17SS ...................................................45 
TX1510S34........................................................10 
TX1512E179 .....................................................10 
TX1512S17........................................................10 
TX1512S17SS ...................................................45 
TX1513S17........................................................10 
TX1810E179 .....................................................10 
TX1810S17........................................................10 
TX1810S17SS ...................................................45 
TX1812E179 .....................................................10 
TX1812HA17.....................................................57 
TX1812S17........................................................10 
TX1812S17SS ...................................................45 
TX1813S17........................................................10 
UD1......................................................................51 
VFH12 .................................................................42 
MODEL/PART PAGE
S723/500...........................................................50 
S723/600...........................................................50 
S723/700...........................................................50 
SGR1125 ............................................................58 
SHR50150 .........................................................79 
SK2015...............................................................43 
SK2017...............................................................43 
SK2215...............................................................43 
SK2217...............................................................43 
SK2415...............................................................43 
SK2417...............................................................43 
SK2615...............................................................43 
SK2617...............................................................43 
SK2815...............................................................43 
SK2817...............................................................43 
SK3015...............................................................43 
SK3017...............................................................43 
SM14...................................................................42 
SM16...................................................................42 
SM18...................................................................42 
SM20...................................................................42 
SM22...................................................................42 
SM24...................................................................42 
Spray Tips...........................................................82 
SR26 ....................................................................44 
SR30 ....................................................................44 
SR32 ....................................................................44 
SR36 ....................................................................44 
SR50 ....................................................................44 
SR55 ....................................................................44 
SR60 ....................................................................44 
SR65 ....................................................................44 
SR70 ....................................................................44 
SR75 ....................................................................44 
Standard Nozzles.............................................82 
SV12/1000........................................................50 
SV12/1100........................................................50 
SV12/1250........................................................50 
SV12/1500........................................................50 
SV12/800...........................................................50 
SX2/100 .............................................................50 
SX2/200 .............................................................50 
SX2/300 .............................................................50 
SX2/400..............................................................50 
SX2/500 .............................................................50 
SX3/200 .............................................................50 
SX3/300 .............................................................50 
T1011..................................................................15 
T1321..................................................................15 
T1621..................................................................15 
T1631..................................................................18 
T2031..................................................................18 
T41.......................................................................17 
T9051EBF .............................................................6 
T9051EBFU..........................................................6 
T9051EBFUI.........................................................6 
T921 ....................................................................15 
T9211..................................................................15 
T9281..................................................................15 
T9281..................................................................15 
T991 ....................................................................14 
T991GR...............................................................14 
T9951..................................................................14 
T9971..................................................................14 
T9971GR ............................................................14 
TC1502E175........................................................8 
TC1504E345........................................................8 
TC1505E345........................................................8 
TC1506E345........................................................8 
TC1506E346........................................................8 
TC1506G...............................................................9 
TC1506GUI...........................................................9 
TC1507E345........................................................8 
TC1507E346........................................................8 
TC1507G...............................................................9 
TC1507GUI...........................................................9 
TC1507S34...........................................................8 
TC1508E175........................................................8 
TC1508E346........................................................8 
TC1508G...............................................................9 
TC1508GUI...........................................................9 
TC1508S34...........................................................8 
TC1509E175........................................................8 
TC1509G...............................................................9 
TC1509GUI...........................................................9 
TC1509S17...........................................................8 
TC1802E175........................................................8 
TC1809E175........................................................8 
TC1809HA17.....................................................57 
TC1809S17...........................................................8 
TC1811S17...........................................................8 
TOOLKITPRI .......................................................99 
TP2520J34 ...........................................................7 
TP2520J34UIL.....................................................7 
TP2526J34 ...........................................................7 
TP2526J34UIL.....................................................7 
TP2530J34 ...........................................................7 
TP2530J34UIL.....................................................7 
TP2533J34 ...........................................................7 

INDEX
Page 109
MODEL/PART PAGE
VFH14 .................................................................42 
VKH12.................................................................42 
VKH14.................................................................42 
VP12....................................................................51 
WM0515C..........................................................45 
WM0815C..........................................................45
WM1015C..........................................................45 
WM1615C..........................................................45 
WM1815C..........................................................45 
WM1815S ..........................................................45 
WM2315C..........................................................45 
WM2515S ..........................................................45 
WM3015C..........................................................45 
WM3615C..........................................................45 
WM4215C..........................................................45 
WM4215S ..........................................................45 
WMNV14SS................................................49, 68 
WMR15SS...................................................49, 65 
Y25430060........................................................55 
Y25435060........................................................55 
Y25438060........................................................55 
Y25450000........................................................55 
Y25459000........................................................55 
Y25460000........................................................55 
Y25475000........................................................55 
Y25477000........................................................55 
Y25479000........................................................55 
Y25482000........................................................55 
Y25485000........................................................55 
Y29026035........................................................94 
Y29092008........................................................68 
Y29092012........................................................68 
Y29092015........................................................68 
Y29094500........................................................72 
Y29095400........................................................72 
Y30256717........................................................75 
Y3K020...............................................................86 
Y3K030...............................................................86 
Y3K035...............................................................86 
Y3K040...............................................................86 
Y3K045...............................................................86 
Y3K050...............................................................86 
Y3K055...............................................................86 
Y3K060...............................................................86 
Y3K065...............................................................86 
Y3K070...............................................................86 
Y5K020...............................................................86 
Y5K030...............................................................86 
Y5K035...............................................................86 
Y5K040...............................................................86 
Y5K045...............................................................86 
Y5K050...............................................................86 
Y5K055...............................................................86 
Y5K060...............................................................86 
Y5K065...............................................................86 
Y5K080...............................................................86 
Y5K090...............................................................86 
Y5K100...............................................................53 
Y5K100...............................................................86 
Y5K120...............................................................53 
Y5K120...............................................................86 
Y5K150...............................................................53 
Y5K200...............................................................53 
Y5K200...............................................................86 
Y60014924........................................................61 
Y7K040...............................................................87 
Y7K045...............................................................87 
Y7K050...............................................................87 
Y7K055...............................................................87 
Y7K060...............................................................87 
Y7K065...............................................................87 
Y7K070...............................................................87 
YADJNOZ ............................................................88 
YAINJ18E ............................................................69 
YAINJ21E ............................................................69 
YAINJ23E ............................................................69 
YBRV5325 ..................................................31, 65 
YBRV624.....................................................31, 65 
YBRV624D..................................................31, 65 
YBRV631 ............................................................65 
YBRV631D .........................................................65 
YCV12FB .....................................................31, 68 
YCV12FSS ...................................................31, 68 
YCV14FB.............................................................68 
YCV14FSS ...................................................31, 68 
YCV34FB .....................................................31, 68 
YCV34FSS ...................................................31, 68 
YCV38FB.............................................................68 
YCV38FSS ...................................................31, 68 
YCVHD1FB.........................................................68 
YCVHD34FB.......................................................68 
YDBL14...............................................................88 
YDBL18...............................................................88 
YDL33..................................................................77 
YDL33B...............................................................78 
YDL33SSB ..........................................................77 
YDL41..................................................................77 
YDL41B...............................................................78 
YDL41SS.............................................................77 
YDL41SSB ..........................................................77
MODEL/PART PAGE 
YLS12FEI25 ..................................................81 
YLS12T...........................................................81 
YLS12T2 ........................................................81 
YLS31T...........................................................81 
YPCV2175.....................................................68 
YPCV3240.....................................................68 
YPCV823 .......................................................68 
YPRESSWITCH..............................................94 
YPRESSWITCH564......................................94 
YPRESSWITCHHP........................................94 
YPRSWITCHHPL ..........................................94 
YPRSWITCHXL..............................................94 
YPRESSWITCH1521 ...................................94 
YPRESSWITCH1535 ...................................94 
YPRESSWITCH1564 ...................................94 
YPRESSWITCH521......................................94 
YPRESSWITCH535......................................94 
YR23K20 .......................................................86 
YR23K25 .......................................................86 
YR23K30 .......................................................86 
YR23K35 .......................................................86 
YR23K40 .......................................................86 
YR23K45 .......................................................86 
YR23K50 .......................................................86 
YR23K55 .......................................................86 
YR23K60 .......................................................86 
YR23K65 .......................................................86 
YR23K70 .......................................................86 
YR23K80 .......................................................86 
YR36K30 .......................................................86 
YR36K35 .......................................................86 
YR36K40 .......................................................86 
YR36K45 .......................................................86 
YR36K50 .......................................................86 
YR36K55 .......................................................86 
YR36K60 .......................................................86 
YR36K65 .......................................................86 
YR36K70 .......................................................86 
YR36K80 .......................................................86 
YR51K30 .......................................................86 
YR51K35 .......................................................86 
YR51K40 .......................................................86 
YR51K45 .......................................................86 
YR51K50 .......................................................86 
YR51K55 .......................................................86 
YR51K60 .......................................................86 
YR51K65 .......................................................86 
YR51K70 .......................................................86 
YR51K80 .......................................................86 
YR5221 ......................................................30, 65 
YRG30FV .......................................................98 
YRG60FV .......................................................98 
YRL20.............................................................74 
YRL2640....................................................32, 74 
YRL2640W ................................................32, 74 
YRL51.............................................................74 
YRL56.............................................................74 
YRL56L...........................................................75 
YROTBRUSH.................................................81 
YRT87K20..................................................53, 87 
YRT87K30..................................................53, 87 
YRT87K40..................................................53, 87 
YRT87K50..................................................53, 87 
YRT87K60..................................................53, 87 
YRT87K70..................................................53, 87 
YRT87K80..................................................53, 87 
YRV2063 .......................................................66 
YRV3463 .......................................................66 
YRVPP26SS...................................................51 
YSW14MFB...............................................30, 97 
YSW14MFSS.............................................30, 97 
YSW38MFB...............................................30, 97 
YSW38MFSS.............................................30, 97 
YSW9014SS..............................................30, 97 
YU2122SS .................................................49, 61 
YU21235 ...................................................31, 61 
YU21405.......................................................61 
YU21405S.....................................................61 
YU2158..........................................................61 
YU2158NCV .................................................61 
YU3678..........................................................62 
YU3678MS ...................................................62 
YU3723..........................................................31 
YU4050K.......................................................62 
YU4050KDM................................................63 
YU5075K.......................................................62 
YU5075KMM ...............................................62 
YU5075KMS.................................................62 
YU5075KS.....................................................62 
YU5221......................................................31, 61 
YU5821..........................................................61 
YU7221..........................................................61 
YUB21405 ....................................................61 
YUB21405NCV............................................61 
YUW21235 ...................................................61 
YVB135KDM ................................................63 
YVB135KDMI18..........................................63
MODEL/PART PAGE
YDL935...............................................................78 
YDRNT1 ..............................................................88 
YDRNT2 ..............................................................88 
YDRNT3 ..............................................................88 
YESTVALVE .........................................................67 
YESTVALVE14 ....................................................67 
YF00.....................................................................92 
YF00C..................................................................92 
YF30.....................................................................92 
YF30C..................................................................92 
YF5BMF...............................................................93 
YF5MF .................................................................93 
YFL3SWITCH......................................................95 
YFL7SWITCH......................................................95 
YFLOATANK........................................................98 
YFLOATVALVE.....................................................98 
YFLOSWITCH .....................................................95 
YFY1.....................................................................93 
YFY34 ..................................................................93 
YG1635...............................................................75 
YG1635N............................................................75 
YG1635S.............................................................75 
YG1635SR..........................................................75 
YG1635SS ..........................................................75 
YG1732...............................................................75 
YG23LA27...................................................53, 75 
YG2527S .....................................................53, 75 
YG2635AS..........................................................75 
YG2953B ............................................................75 
YG29LA31..........................................................53 
YG3000D............................................................75 
YG3000DS .........................................................75 
YG34LA27..........................................................53 
YG4000........................................................32, 74 
YG4000WN.................................................32, 74 
YG4010........................................................32, 74 
YG4010SW.........................................................74 
YG4010W...........................................................32 
YG4032S .....................................................53, 74 
YG4060SS ..........................................................75 
YG4500S.............................................................74 
YG4500SW.........................................................74 
YG4500T.............................................................74 
YG5000........................................................32, 74 
YG5000W....................................................32, 74 
YG5200...............................................................75 
YG5200/L42......................................................75 
YG7207........................................................53, 75 
YG7221...............................................................53 
YG7221-L31 ......................................................53 
YG7221-L51 ......................................................53 
YGR0750 ............................................................58 
YGR1000 ............................................................58 
YGR1000P..........................................................58 
YGR1125 ............................................................58 
YGR1125P..........................................................58 
YGR1125P31.....................................................58 
YGRN47 ..............................................................32 
YHILO110...........................................................85 
YHILO120...........................................................85 
YHILO130...........................................................85 
YHILO140...........................................................85 
YHILO150...........................................................85 
YHILO160...........................................................85 
YHILO170...........................................................85 
YHL20..................................................................85 
YHL25..................................................................85 
YHL30..................................................................85 
YHL35..................................................................85 
YHL40..................................................................85 
YHL412...............................................................85 
YHL45..................................................................85 
YHL50..................................................................85 
YHL55..................................................................85 
YHL60..................................................................85 
YHL70..................................................................85 
YHL80..................................................................85 
YL20PNB.....................................................32, 76 
YL20PNS .....................................................32, 76 
YL24PNB.....................................................32, 76 
YL24PNS .....................................................32, 76 
YL27PNB.....................................................32, 76 
YL27PNS .....................................................32, 76 
YL31SS................................................................76 
YL35PNB ............................................................76 
YL35PNS.............................................................76 
YL36B..................................................................76 
YL40SS................................................................76 
YL47PNB ............................................................76 
YL47PNS.............................................................76 
YL59PNB ............................................................76 
YL59PNS.............................................................76 
YL67PNB ............................................................76 
YL67PNS.............................................................76 
YL72SS................................................................76 
YL79PNB ............................................................76 
YL79PNS.............................................................76 
YL8SS...................................................................76 
YLD943...............................................................78 
YLS12 ..................................................................81 

INDEX
Page 110
MODEL/PART PAGE
YVB135KDMI21...............................................63 
YVB16 .................................................................49 
YVB280SS ..........................................................49 
YVB351KDM .....................................................63 
YVB351KDMI18...............................................63 
YVB351KDMI21...............................................63 
YVB35KDM........................................................63 
YVB35KDME......................................................63 
YVB35KDMI18..................................................63 
YVB35KDMI21..................................................63 
YVB3K .................................................................62 
YVB3KA...............................................................62 
YVB3KA/NCV ....................................................61 
YVB3KTT.............................................................62 
YVB3KTTI18.......................................................62 
YVB3KTTI21.......................................................62 
YVB3KTTI23.......................................................62 
YVB4021HT................................................61, 65 
YVB4021SS........................................................49 
YVB5121B ..................................................31, 49 
YVB5121HT.......................................................61 
YVB56KDM........................................................63 
YVB56KDMI21..................................................63 
YVB5K .................................................................62 
YVB75KDMN.....................................................63 
YVB75KDMN21................................................63 
YVB75KTP ..........................................................63 
YVB75KTPF21...................................................63 
YVB7K .................................................................62 
YVB8KMS ...........................................................62 
YVB8KMS10......................................................62 
YVB9K .................................................................62 
YVB9KMS2.........................................................62 
YVB9KMSS.........................................................62 
YVRP12029 .......................................................49 
YVRP15W...........................................................65 
YVRP32B ............................................................65 
YVS23SS.............................................................49 
YVS23SS.............................................................50 
YVS5100B..........................................................65 
YVS7250.............................................................49 
YYSTR12 .............................................................93 
Z0FILKIT..............................................................92 
Z0FOAM..............................................................81 
Z0KR1..................................................................63 
Z0MULTIREG99 ................................................85 
Z0SANDKIT1......................................................99
ZBBH24.........................................................59 
ZBBH35.........................................................59 
ZF1..................................................................92 
ZF181.............................................................58 
ZF184.............................................................58 
ZF184N..........................................................58 
ZF2 .......................................................................92 
ZF213215...........................................................58 
ZF213215SS......................................................58 
ZF56145 .............................................................58 
ZF811 ..................................................................58 
ZFH47SB.............................................................57 
ZFH70SB.............................................................57 
ZFH70SB.............................................................58 
ZFH71SC.............................................................57 
ZFH71SC.............................................................58 
ZFWWS................................................................58 
ZFWWU...............................................................58 
ZG145TC.............................................................58 
ZG184TC.............................................................58 
ZG202 .................................................................58 
ZG56C .................................................................58 
ZGH47SB............................................................57 
ZGH70SB............................................................57 
ZGH71SC14TB..................................................57 
ZGH71SC14TR..................................................57 
ZGH71SC14TS ..................................................57 
ZGH71SC14TT ..................................................57 
ZGH71SCB .........................................................57 
ZGH71SCR .........................................................57 
ZGH71SCT..........................................................57 
ZGL100 ...............................................................58 
ZGP11 .................................................................74 
ZGR0750 ............................................................58 
ZGRPTO...............................................................58 
ZGRS1000..........................................................58 
ZGRS1000H.......................................................58 
ZGRS1125..........................................................58 
ZK1.......................................................................64 
ZK138..................................................................64 
ZK30 ....................................................................64 
ZK31 ....................................................................64 
ZK32 ....................................................................64 
ZK33 ....................................................................64 
ZK3608SS ..........................................................49 
ZK4010........................................................31, 62 
ZK52 ....................................................................64 
ZK53 ....................................................................64 
ZK5813 ...............................................................62 
ZK70 ....................................................................64 
ZK71 ....................................................................64
MODEL/PART PAGE MODEL/PART PAGE 
ZK72 ...................................................................64 
ZK7216SS ..........................................................49 
ZK73 ...................................................................64 
ZK9.......................................................................64 
ZKBH3030 .........................................................49 
ZKHM ..................................................................62 
ZKHM1 ...............................................................62 
ZKRAIL078.........................................................59 
ZKRAIL138.........................................................59 
ZKRAIL258.........................................................59 
ZKS3 ....................................................................66 
ZKSR ....................................................................66 
ZKSX1 ...................................................30, 49, 65 
ZKTIMAX .............................................................49 
ZKW1...................................................................63 
ZKW1SC..............................................................63 
ZKW21 ................................................................63 
ZKW21L ..............................................................63 
ZKW22L ..............................................................63 
ZKW2LSC............................................................63 
ZKW2SC..............................................................63 
ZKW326..............................................................63 
ZKW340..............................................................63 
ZKW355..............................................................63 
ZKX600 ...............................................................49 
ZMACC ................................................................98 
ZMFIL...................................................................93 
ZMINA14F..........................................................91 
ZMINA14M ........................................................91 
ZMINA38F..........................................................91 
ZMINB12M ........................................................91 
ZMINB14F..........................................................91 
ZMINB14M ........................................................91 
ZMINB38F..........................................................91 
ZMINB38M ........................................................91 
ZMSIMPLEX3.....................................................94 
ZMSNDBLST0....................................................99 
ZMSNDBLST1....................................................99 
ZMSNDBLST2....................................................99 
ZMSNDBLST3....................................................99 
ZMSNDLBST5....................................................99 
ZMSNDPOKER..................................................99 
ZMVALAT.............................................................99 
ZMVTOOL...........................................................99 
ZP100..................................................................59 
ZP140..................................................................59 
ZP15A..................................................................53 
ZP15AL10...........................................................53 
ZP160..................................................................59 
ZP3B136.............................................................59 
ZP3B60...............................................................59 
ZP4140 ...............................................................59 
ZP87SS................................................................53 
ZP87SSL29 ........................................................53 
ZP87SSL29S......................................................53 
ZP87SSL39 ........................................................53 
ZP87SSL39S......................................................53 
ZRMAX112.........................................................53 
ZRMAX113.........................................................53 
ZRMAX114.........................................................53 
ZRMAX115.........................................................53 
ZRMAX2220 ......................................................54 
ZRMAX2225 ......................................................54 
ZRMAX2231 ......................................................54 
ZRMAX2245 ......................................................54 
ZRMAX2259 ......................................................54 
ZRMAX581.........................................................87 
ZRMAX583.........................................................87 
ZROBO0B...........................................................69 
ZROBO1B...........................................................69 
ZROBO2B...........................................................69 
ZROBO3B...........................................................69 
ZROTOMAX1......................................................87 
ZROTOMAX2......................................................87 
ZROTOMAX3......................................................87 
ZSPEED ...............................................................96 
ZUDBL.................................................................88 
ZUDRNT..............................................................88 
ZUH178 ..............................................................59 
ZUH30.................................................................59 
ZUH40.................................................................59 
ZUMDRNT1 .......................................................88 
ZUMDRNT2 .......................................................88 
ZZ15.....................................................................76 
ZZDBL..................................................................78 
ZZDBL72.............................................................78`;

// ─── 47 Series Service Instructions ───
KB.docs['47 Series Service Instructions'] = `GENERAL PUMPA member of the Interpump Group 47 Series
T
RIP
L
E
X
T
RIP
L
E
X
Triplex Plunger Pump
SERVICING INSTRUCTIONS
General Pump
is a member of
the Interpump Group
VALVE ASSEMBLIES (Figure 1)
1. All inlet and discharge valves can be serviced
without disrupting the inlet or discharge
plumbing. The inlet and discharge valves
are identical in all models.
2. To service any valve, remove valve cap and
extract valve assembly.
3. Examine o-rings and replace if there is any
evidence of cuts abrasions or distortion.
4. Remove valve assembly (retainer, spring valve,
valve seat) from valve cavity.
5. Remove o-ring from valve cavity.
6. Only one valve kit is necessary to repair all the
valves in the pump. The kit included new o-rings,
valve seat, poppet, spring and retainer, all
pre-assembled.
7. Install new o-rings in valve cavity.
8. Insert assembly into valve cavity.
9. Replace valve cap and torque to specifications.
REMOVING MANIFOLD HEAD (Figure 2)
1. Remove the fasteners retaining the head.
2. Separate head from crankcase. NOTE: It may be
necessary to tap head lightly with rawhide
mallet to loosen. CAUTION: When sliding head
from crankcase use caution not to damage
plungers.
3. The V-packing assemblies may come off with
the head. At this point, examine plungers.
Plunger surfaces should be smooth and free
from scoring or pitting; if not, replace.
4. Reinstall manifold head and torque to
specifications per sequence described below.
TORQUE SEQUENCE FOR TIGHTENING HEAD
(Figure 4)
Install all head bolts fingertight. Torque to 10 foot pounds
in sequence as shown, then retorque to specifications,
again in sequence shown.
1
2
4

47 Ser GENERAL PUMPA member of the Interpump Group ies
Servicing Instructions
REPLACING PLUNGERS (Figure 3, 5 & 6)
1. Remove stainless steel piston screw and
plunger from piston rod.
2. If slinger washer comes off with plunger, be
certain this is replaced before new plunger is
installed.
3. Separate piston screw from plunger.
4. Install new o-ring and teflon backup ring on
piston screw. NOTE: A film of grease on the
outside of the o-rings insures a better
installation.
5. Carefully press piston screw into plunger.
6. Slide new plunger over the piston guide and
torque to specifications.
3
5
5
Recommended Tools/Supplies:
1) ZMVTOOL Packing Insertion Tool
2) 100783 Complete Extraction Kit
Includes the following tools:
2530016 handle 2530022 20mm sleeve
2530017 bolt 2530023 22mm sleeve
2530018 pin 2530024 24mm sleeve
3) 190446 Oil Drain Kit
4) 100295 General Pump Series 100 Oil (1-16 oz. bottle)
100214 General Pump Series 100 Oil (6-16oz. bottles)
100216 General Pump Series 100 Oil (24-16 oz. bottles)

47 Ser GENERAL PUMPA member of the Interpump Group ies
Servicing Instructions
REPLACING V-PACKINGS (Figure 7, 8, 9 & 10))
1. Remove manifold from crankcase.
2. Insert proper extractor collet through main seal
retainer. Tighten collet and extract retainers,
v-packings and head rings.
3. Place proper insertion tool in cylinder and
install front head ring, v-packing and long life
ring and press firmly into cylinder until they
will go no further using proper insertion tool.
4. Insert intermediate seal retainer, pressing it
firmly into cylinder until it will go no further using
proper insertion tool. Install rear head ring,
v-packing and main seal retainer into cylinder
in order shown and press firmly into cylinder.
5. Repeat this sequence for each cylinder.
6. Coat each plunger with grease and carefully
remount manifold. Torque head to specifications.
7
8
9
10
O-ring
Packing
Retainer
Low
Pressure
Seal
Intermediate
Ring
Restop
Ring
High
Pressure
Seal
Head Ring
PACKING ASSEMBLY

Ref 300687 Rev. A
10-09
PROBLEM CAUSE REMEDY
Pulsation
Valve stuck open. Check all valves, remove foreign matter.
Faulty pulsation damper. Check precharge; if low, rechargeit or install a new one.
Low pressure
Worn nozzle. Replace nozzle, of proper size.
Belt slippage. Tighten or replace; use correct belt.
Air leak in inlet plumbing. Disassemble, reseal and reassemble.
Relief valve stuck; partially plugged or
improperly adjusted valve seat worn.
Clean, adjust relief valve; check for worn and dirty
valve seats. Kit available.
Inlet suction strainer clogged or improperly sized. Clean. Use adequate size. Check more frequently.
Worn packing. Abrasives in pumped fluid
or severe cavitation. Inadequate water.
Install proper filter. Suction at inlet manifold must be limited
to lifting less than 20 feet of water or -8.5 PSI vacuum.
Fouled or dirty inlet or discharge valves. Clean inlet and discharge valve assemblies.
Worn inlet, discharge valve blocked or dirty. Replace worn valve seats and/or discharge hose
Leaky discharge hose.
Pump runs extremely rough,
pressure very low.
Restricted inlet or air entering the inlet plumbing. Proper size inlet plumbing; check for air tight seal
Inlet restrictions and/or air leaks. Stuck
inlet or discharge valve.
Replace worn cup or cups, clean out foreign material,
replace worn valves.
Water leakage from under
manifold. Slight leakage.
Worn packing. Install new packing.
Cracked plunger. Replace plunger(s).
Oil leak between crankcase
and pumping section.
Worn crankcase piston rod seals. O-rings
on plunger retainer worn.
Replace crankcase piston rod seals. Replace
o-rings.
Oil leaking in the area of
crankshaft.
Worn crankshaft seal or inproperly
installed oil seal o-ring.
Remove oil seal retainer and replace damaged
o-ring and/or seals.
Bad bearing. Replace bearing and any spacer or cover damaged
by heat.
Excessive play in the end of
the crankshaft pulley.
Worn main bearing from excessive
tension on drive belt.
Replace crankcase bearing and/ or
tension drive belt.
Water in crankcase.
May be caused by humid air condensing i
nto water inside the crankcase
Change oil intervals. Use General Pump SAE 30
non-detergent oil.
Worn packing and/or piston rod sleeve,
o-rings on plunger retainer worn. Replace packing. Replace o-rings.
Cracked plunger Replace plunger(s).
Oil leaking from underside
of crankcase.
Worn crankcase piston rod seals. Replace seals.
Scored piston rod. Replace piston rod.
Oil leaking at the rear portion
of the crankcase.
Damaged crankcase, rear cover o-ring,
drain plug o-ring, or sight glass o-ring.
Replace cover or-ring, drain plug o-ring, or sight
glass o-ring.
Loud knocking noise in pump.
Pulley loose on crankshaft. Check key and tighten screw.
Broken or worn bearing on rod(s). Replace bearing or rod(s).
Valve stuck open or shut, or not opening enough. Replace bad valve.
Frequent or premature failure
of the packing.
Scored, damaged or worn plunger. Replace plungers.
Overpressure to inlet manifold. Reduce inlet pressure.
Abrasive material in the fluid being pumped. Install proper filtration on pump inlet plumbing.
Excessive pressure and/or temperature
of fluid being pumped.
Check pressures and fluid inlet temperature; be
sure they are within specified range.
Overpressure of pump. Reduce pressure.
Running pump dry. Do not run pump without water.
Upstream chemical injection. Use downstream chemical injection.
TROUBLESHOOTING
`;

// ─── General Pump TS2021 Data Sheet ───
KB.docs['General Pump TS2021 Data Sheet'] = `T Series 47 S
FEATURES
Pump Model T1011 TS1021 TS2021
Maximum Volume (GPM) 4.5 / 5.6 4.5 / 5.6 4.5 / 5.6
Maximum Discharge Pressure (PSI) 2000 / 1500 3000 / 1700 3500
Maximum Pump Speed (RPM) 1125 / 1450 
Maximum Inlet Pressure 125 PSI
Maximum Inlet Vacuum 9 ft. water (7.9 in. Hg)
Plunger Bore .787 in. / 20 mm
Plunger Stroke .630 in. / 16 mm
Crankcase Oil Capacity 33.8 oz. 37.2 oz.
Maximum Fluid Temperature 165o F
Inlet Port Thread 1/2-14 BSPP-F
Discharge Port Thread 3/8-19 BSPP-F
Shaft Diameter .945 in. / 24 mm
Weight 32 lbs.
Dimensions 12.2” x 9.2” x 6.9” 12.6” x 9.2” x 6.9” 
DIMENSIONAL DRAWING
SPECIFICATIONS
20 mm bore / 16 mm stroke
• The preferred pump frame in the pressure cleaning industry
• Forged brass manifold (T1011 and TS1021)
• Forged, nickel-plated, brass manifold (TS2021)
• Large-capacity, die-cast, anodized aluminum
oil-bath crankcase
• Over-sized connecting rods for maximum life
• Heavy-duty tapered roller bearing
• Solid ceramic plungers with continuously 
 lubricated packings
• Unitized stainless steel inlet and discharge valves
Ref 300204 Rev. N
06-22
GENERAL PUMP A member of the Interpump Group
TRIPLEX TRIPLEX
General Pump
is a member of
the Interpump Group

PARTS LIST
ITEM PART NO. DESCRIPTION KIT NO. QTY.
1. 47120841 Manifold 1
 47120941 Manifold, Ni. Plt. (TS2021) 1 
2. 99320600 Screw, M8 x 70 8
3. 203476 Washer, M8.4 8
4. 701115 O-ring, .674 x .10 1 8
5. 36200366 Seat, Valve 1 6
6. 36200176 Plate, Valve 1 6
7. 94737600 Spring 1 6
8. 36200251 Guide, Valve 1 6
9. 701002 O-ring, .797x.103 4,5 6
10. 98222000 Cap 4 6
98222200 Cap, Ni. Plt (TS2021) 5 6
11. 36703201 Valve Assembly 1 6
12. 99303900 Screw, M8 x 16 8
13. 47150122 Cover, Crankcase 1
14. 701147 O-ring, 2.675x.103 2
15. 640047 Bearing, Roller 2
16. 90162500 Seal, Oil 2 3
17. 90912600 Bushing 3
18. 47010522 Crankcase 1
ITEM PART NO. DESCRIPTION KIT NO. QTY.
19. 98210600 Oil Dip Stick 1
20. 90392200 O-ring, Cover 1
21. 47021735 Crankshaft, USA 1
22. 90055700 Ring, Snap 6
23. 640048 Key 1
24. 97738000 Pin, Wrist 3
25. 47050554 Guide, Plunger 3
26. 47030001 Connecting Rod 3
27. 99191200 Screw, M6x30 5
99183700 Screw, M6x14 (T1011) 5
28. 47160122 Cover, Crankcase 1
47160022 Cover, Crankcase (T1011) 1
29. 97596800 Oil Indicator 1
30. 98204100 Cap 1
31. 701013 O-ring, .426x.070 6 4
32. 99309900 Screw, M8 x 35 6
33. 96701400 Washer, M8.4 6
34.. 96728600 Washer, M14 6 3
35. 47040409 Plunger, 20 mm 3
36. 660067 Ring, Back-up 6 3
ITEM PART NO. DESCRIPTION KIT NO. QTY.
37. 96728000 Washer 6 3
38. 47219566 Screw, Plunger 6 3
39. 47150022 Cover, Crankcase 3
40.. 97567800 Shim 2
41. 90164800 Seal, Oil 3 1
42. 90361600 O-ring, 1.364x.070 10,28 3
43. 47080570 Retainer, Packing 10,28 3
44. 90270500 Packing 28,69 3
45. 47100051 Ring, Head, M20 7,28 3
46.. 47216970 Intermed. Ring 28, 71 3
47. 90270400 Restop Ring 28,69,71 3
48. 47200074 Pump Feet 2
49. 99364400 Screw, M10 x 18 4
50. 96710600 Washer, M10.2 4
51. 98217600 Cap 1
52. 96751400 Washer, M21.5 1
53. 98210000 Cap 1
54. 96738000 Washer, M17.5 1
56. 90271000 Seal, Low Press, 20 mm 28, 69 3
T Series 47S-20mm x 16 mm

Ref 300204 Rev. N
06-22
GENERAL PUMP A member of the Interpump Group
REPAIR KITS
KIT NO. 1 2 3 4 5 6 7 10 28 69 71
ITEM NO’s 
INCLUDED IN 
KIT
4,5,6
7,8
(11)
16 41 9, 10 9, 10 31,34,36
37,38 45 42, 43
42, 43
44, 45
46,47,56
44, 47
56 46, 47
NUMBER OF 
ASSEMBLIES 
IN KIT
6 3 2 6 6 3 6 3 1 3 3
NUMBER OF 
CYLINDERS 
KIT WILL 
SERVICE
3 3 - 3 3 3 3 3 1 3 3
Pos. Ft/lb N-M
2 22.1 30
10 95.9 130
12 14.7 20
27 7.3 10
29 8.8 12
30 14.7 20
32 14.7 20
38 14.7 20
49 29.4 40
51 29.4 40
* Decrease torque by 20% 
if threads are lubricated
TORQUE SPECS*
WARNING: High Pressure Systems require a primary pressure regulating
device (i.e. regulator, unloader) and a secondary pressure relief device
(i.e. pop-off valve, relief valve). Failure to install such relief devices
properly could result in personal injury or damage to pump or property.
GP does not assume any liability or responsibility for the operation of the 
user’s high pressure system.
WARNING: This product can expose you to chemicals including 
lead, which is know to the state of California to cause cancer and 
birth defects or other reproductive harm. For more information, go 
to `;

// ─── KFMZ Owner Manual ───
KB.docs['KFMZ Owner Manual'] = `KFMZ
Owner’s Manual
• Installation
• Use
• Maintenance

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 2
INDEX
1. INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 4
2. SYMBOL DESCRIPTIONS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 4
3. SAFETY . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 4
3.1 General safety instructions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 4
3.2 High pressure unit safety requirements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 4
3.3 Safety during operation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 5
3.4 General procedures for using nozzles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 5
3.5 Safety during unit maintenance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 5
4. PUMP IDENTIFICATION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 5
5. TECHNICAL DATA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 6
6. DIMENSIONS AND WEIGHT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 6
7. INFORMATION REGARDING PUMP USE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 7
7.1 Maximum flow and pressure values . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 7
7.2 Lowest operating RPM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 7
7.3 Recommended lubricant types and Manufacturers . . . . . . . . . . . . . . . . . . . . .Page 7
8. PORTS AND CONNECTIONS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 8
9. PUMP INSTALLATION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 8
9.1 Installation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 8
9.2 Direction of rotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 8
9.3 Version change . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 9
9.4 Hydraulic connections . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 9
9.5 Pump feeding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 9
9.6 Suction line . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 9
9.7 Delivery line . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 10
9.9 V-belt transmission . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 12
9.10 Transmission Definition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 12
9.11 Definition of belt static tension values
10. START UP AND OPERATION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 12
10.1 Preliminary inspections . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 12
10.2 Starting up . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 12
11. PREVENTATIVE MAINTENANCE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13
12. STOPPING THE PUMP FOR LONG PERIODS . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13
12.1 Inactivity for long periods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13
12.2 Filling the pump with anti-corrosion emulsion or anti-freeze . . . . . . . . . . . . .Page 13
12.3 Hoses . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 3
INDEX (continued)
13. PRECAUTIONS AGAINST FREEZING . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13
14. WARRANTY TERMS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 13
15 TROUBLESHOOTING . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 14
16. EXPLODED VIEWS AND PARTS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 15-16
17. MAINTENANCE LOG . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Page 17

Page 4
GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
2. SYMBOL DESCRIPTIONS
Warning
Potential Danger
Danger
High Voltage
Danger
Wear protective mask
Danger
Wear goggles
Danger
Wear protective gloves
Danger
Wear protective boots
Read carefully and understand
the manual before operating
the pump
1. INTRODUCTION
This manual describes the use and maintenance
instructions of the KFMZ pump, and should be carefully
read and understood before pump operation.
Correct use and adequate maintenance will guarantee the
pumps trouble-free operation for a long time. General
Pump declines any responsibility for damage caused by
misuse or the non-observance of the instructions indicated
in this manual.
Upon receiving the pump, check that it is complete and in
perfect condition. Should anything be found out of order,
please contact us before installing and starting the pump.
3. SAFETY
3.1 General Safety Indications
The misuse of pumps and high pressure units, and the
non-observance of installation and maintenance instructions may cause severe injury to people and/or damage to
property. Anyone requested to assemble or use high pressure units must possess the necessary competence to do
so, should be aware of the characteristics of the components assembled/used, and must adopt all the necessary
precautions in order to guarantee maximum safety in any
operating condition. In the interest of safety, no precaution
that is reasonably feasible must be neglected, both by the
Installer and the Operator.
3.2 High pressure unit safety requirements
1. The pressure line must always be equipped with a
safety valve.
2. High pressure unit components, in particular
for those units working outside, must be adequately
protected against rain, frost and heat.
3. The units electrical parts must be adequately
protected from bentonite spray, and must comply with
the specific norms in force.
4. High pressure hoses must be correctly sized for the
unit’s maximum operating pressure, and must only be
used within the pressure range indicated by the hose
manufacturer. The same conditions apply to all other
unit accessories where high pressure is involved.
5. The extremeties of high pressure hoses must be
sheathed and fastened to a steady structure in order
to avoid dangerous whiplashes should they burst or
should their connections break.
6. Appropriate safety guards must be provided for the
pump transmission systems (joints, pulleys and belts,
auxiliary drives).
3.3 Safety During Operation
The working area of a high pressure system must be clearly signalled. Access must be prohibited to non-authorized
personnel and, if possible, the area must be fenced in. The
personnel authorized to access this area must be previously trained, and informed about the risks that may arise
from failures or malfunctions of the high pressure unit.
Before starting the unit, the operator must check:
1. That the high pressure unit is correctly fed (see
paragraph 9.5).

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 5
3.3 Safety of Operation (continued)
2. Suction hose should clean and free from obstructions
of any kind. The use of a settling tank, where
applicable, is recommended.
3. That electrical parts are adequately protected and in
perfect condition.
4. That high pressure hoses do not show apparent signs
of abrasion, and that fittings are in perfect shape.
Any anamoly or reasonable doubt that may arise before or
during operation must be promptly reported and verified by
competent personnel. In these cases, pressure must be
immediately released and the high pressure unit stopped.
3.4 General Procedures For Using Nozzles
1. The Operator must always place his own and other
worker’s safety before any other interest; his actions
should always be governed by good sense and
responsibility.
2. The Operator must always wear a helmet with a
protective visor, waterproof clothing, and appropriate
boots capable of guaranteeing grip on wet pavement.
Note: appropriate clothing will effectively protect against
water spray, but it may not offer adequate protection
against the direct impact of water jets or sprays from a
close distance. Some circumstances may require further
protection.
3. We advise to employ a team of at least two Operators,
able to provide mutual and immediate assistance if
needed, and to rotate their duties in case of long and
heavy work.
4. Access to the work area that is within the water jets’
range must be absolutely forbidden; the area must be
free of objects that may be unintentionally hit by the
pressurized jet, causing damage or dangerous
situations.
5. The water jet must only and always be directed towards
the work area, even during testing or preliminary
inspections.
6. The Operator must always pay attention to the trajecto
ry of the debris removed by the water jet. If necessary,
adequate side guards must be provided by the
Operator in order to protect anything that may be acci
entally exposed.
7. For no reason must the Operator be distracted during
operation. The personnel that needs to access the
working area must wait for the Operator to suspend his
work, and then immediately make his presence known.
8. For safety reasons, it is important that each member of
the team is perfectly aware of the intentions and actions
of other team members in order to avoid dangerous
misunderstandings,
9. The high pressure unit must not be started and
brought up to pressure unless each member of the
team is in his designated position, and the Operator
has already directed the nozzle towards the work area.
3.5 Safety During Unit Maintenance
1. The maintenance of the high pressure unit must be
done within the time intervals indicated by the
Manufacturer, who is responsible for the entire unit’s
compliance with the norms in force.
2. Maintenance must always be carried out by special
ized and authorized personnel.
3. Assembly and disassembly of the pump and its various
components must be performed exclusively by author
ized personnel, using appropriate tools in order to
avoid damage to components and connections.
4. To guarantee total reliability and safety, always use
original spare parts.
fig. 1
4. PUMP IDENTIFICATION
Each pump (fig. 1) has: its own serial number XX.XXX.XXX
(see point 1) and a rating plate (see point 2) that indicates:
Pump model and version
Maximum RPM
Power absorbed Hp-kW
Flow Rate l/mn - GPM
Pressure bar/PSI
Pump model, version and serial number
must always be specified when ordering
spare parts.

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 6
5. TECHNICAL FEATURES
6. DIMENSIONS AND WEIGHT
MODEL RPM
FLOW RATE PRESSURE POWER
GPM l/min PSI Bar Hp
KFMZ40A 900 45.0 170 2000 138 62
Weight: 165 Lbs./78.8 Kg. fig. 2
For dimensions and weight of Standard Version pumps, please refer to fig. 2.

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 7
7.INFORMATION REGARDING PUMP USE
7.1 Max Flow Rate and Pressure Values
The performance values indicated in the catalog refer to
the maximum performance of the pump. Regardless of the
power used, pressure and maximum RPM values indicated on the plate may not be exceeded unless expressly
authorized by the Customer Service Department.
7.2 Lowest RPM
Any RPM value different from what is indicated in the performance table (see chapter 5) must be expressly authorized by the Customer Service Department.
7.3 Recommended Lubricant Oil Types & Manufacturers
The pump is delivered with lubricant oil compliant with
room temperatures ranging between 320 and 89.60 F (00
and 300C ). Some recommended lubricant types are indicated in the table below; these lubricants are treated with
additives in order to increase corrosion protection and
resistance to fatigue. As an alternative, Automotive SAE
85W-90 gearing lubricants may also be used.
BRAND TYPE
GENERAL PUMP SERIES 220
ARAL Aral Degol BG220
BP ENERGOL HLP 220
CASTROL Hyspin VG 220, Magna 220
ELF POLYTELIS 220
ESSO NUTO 220
FINA Cirkan 220
FUCHS RENOLIN 220
MOBIL DTE OIL BB
SHELL TELLUS C 220
TEXACO RANDO HD 220
TOTAL CORTIS 220
Check the oil level by using the oil level dipstick (1), fig. 3.
Refill if needed. Correct oil level inspection is done with the
pump at room temperature; oil is changed with the pump at
working temperature, by removing oil level dipstick (1) and
the plug (2), fig. 3. Oil inspection and changing is to be carried out as indicated in the table in fig. 14, Chapter 11. The
amount required is 128.5 oz.(3.8 liters).
In any case, oil must be changed at least
once a year since it may deteriorate by
oxidation.
For room temperatures that differ from that mentioned earlier, follow the indications contained in
the diagram below, keeping in mind that the oil
must have a minimum viscosity of 180 cSt.
Exhausted oil must be collected in an appropriate recipient and disposed of in appropriate locations. In absolutely no case may it be
dispersed into the environment.
VISCOSITY/ROOM TEMPERATURE DIAGRAM
fig. 3

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 8
8. PORTS AND CONNECTIONS
KFMZ Series pumps (see fig. 4) are provided with:
1. 2 inlet ports “IN”, 1-1/2”NPT.
The line can be connected to either of the two inlet
ports: the one not being used must be hermetically
sealed.
2. 2 outlet ports “OUT”, 1: NPT.
3. 3 auxiliary ports, 1/2” NPT, used for the pressure
gauge only.
Replace the oil cap (red), located on the rear
crankcase cover, with the oil dipstick and
check oil level. The oil dipstick must always be
accessible, even when the unit is assembled.
The pump’s shaft (PTO) must not be rigidly
connected to the motor unit. The following
transmission types are suggested:
• Hydraulic by means of a flange; for correct appli
cation, please contact the Customer Service
Department
• V-belts
• Cardan joint (please respect the maximum
working angles indicated by the Manufacturers)
• Flexible joint
9. PUMP INSTALLATION
9.1 Installation
The pump must be installed in a horizontal position using
the correct threaded feet M 16x1.5, fasten the screws with
a torque value of 155 ft. lbs. (210 Nm). The base must be
perfectly flat and sufficiently rigid in order to avoid bending
and misalignments on the pump/transmission coupling axis
due to the torque applied during operation. The unit must
not be rigidly fixed to the pavement, but requires the use of
anti-vibration elements. For special applications, please
contact the Customer Service Department.
The pump is equipped with a lifting eyebolt to facilitate
installation, as shown in the following figure.
In case of disassembly, to avoid letting dirt inside the front
part of the crankcase, close the threaded hole with the supplied cap.
9.2 Direction of rotation
An arrow situated on the crankcase near the shaft indicates the correct direction of rotation. Standing in front of
the pump head, the direction of rotation must be as shown
in fig. 5.
fig. 5

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 9
9.4 Hydraulic Connections
In order to isolate the system from the vibrations produced
by the pump, we advise to build the first section of the duct
near the pump (both for intake and delivery) with flexible
hose. The consistency of the intake section must allow to
avoid deformation caused by the depressurization
produced by the pump.
9.5 Pump Feeding
In order to ensure the correct volumetric efficiency
a minimum positive head of 0.20 meters is
required. Negative suction heads are not allowed.
9.6 Suction Line
For the pump’s correct operation, the suction line must
have the following characteristics:
1. Minimum internal diameter as indicated in the diagram
in paragraph 9.8, and in any case equal or greater than
the pump head’s value.
Along the duct, avoid localized diameter reductions
that may cause pressure drops with subsequent
cavitation. Absolutely avoid 900 elbows, connections with other hoses, bottlenecks, counter-slopes,
upside down “U” shaped curves, “T” connections.
2. The selected lay-out must allow to avoid cavitation.
3. It should be perfectly airtight, and built in a way that
guarantees perfect sealing over time.
4. Avoid pump emptying when stopping (even partial
emptying).
5. Do not use hydraulic-type fittings, 3 or 4 way fittings,
adapters, etc. , since they may hinder the pump’s
performance.
6. Do not install Venturi tubes or injectors for detergent
intake.
7. Avoid the use of standing valves, check valves, or any
other type of one-way valves.
8. Do not connect the by-pass line from the valve directly
to the pump suction line.
9. Provide appropriate baffle plates inside the tank in
order to avoid bentonite flows coming from both the
bypass and feeding lines may create turbulance near
the tank’s outlet port.
10. Make sure that the suction line is perfectly clean inside
before connecting it to the pump.
The version may be changed only by specialized and authorized personnel by carefully
following the instructions in the repair manual.
9.3 Version Change and Reducer Positioning
A right version pump is defined when: observing the
pump from the head side, the PTO shank of the pump
shaft is on the right side.
A left version pump is defined when: observing the pump
from the head side, the PTO shank is on the left side.
See fig. 5 (which shows a right version).
1. Separate the hydraulic part from the mechanical part
as indicated in Chapter 2, paragraph 2.2.1 of the
repair manual.
2. Rotate the mechanical part by 1800, and reposition
the rear crankcase cover to that the oil dipstick is fac
ing upwards; reposition the lifting eyebolt ant the
related closing caps in the upper part of the
crankcase; finally, correctly reposition the identification plate in its appropriate seat on the crankcase.
Be sure that the lower draining holes on the
crankcase near the plungers are open, and
not closed by the appropriate caps as
required for the previous version.
3. Join the hydraulic part with the mechanical part as
indicated in Chapter 2, paragraph 2.2.5 of the repair
manual.

Page 10
GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
9.7 Delivery Line
To obtain a correct delivery line, please comply with the
following installation instructions:
1. The internal diameter of the pump must allow to
guarantee correct fluid speed; see digram in
paragraph 9.8.
2. The first section of the hose connected to the pump
must be flexible in order to isolate pump vibrations
from the rest of the system.
3. Use high pressure hoses and fittings that guarantee
wide safety margins in any working condition.
4. Use pressure switches suitable for the pulsating loads
typical of plunger pumps.
5. In the design phase, take into proper account the
pressure drop along the line, since this causes a
reduction in usage pressure with respect to the value
measured at the pump.
7. If the pump pulsations are harmful for particular
applications, install an appropriately sized pulsation
dampener on the delivery line.

9.9 V-belt Transmission
The pump may be driven by a v-belt system. For this
pump model, we suggest to use 4 XPB belts (16.5 x 13
cogged); only for long durations, use the XPC profile; both
the characteristics and the power transmission capacity of
each belt can be verified on the diagram in fig. 7, in function of the number of rotations normally declared by the
Manufacturer. Minimum diameter of the driven pulley (on
the pump shaft): ≥ 250 mm. The radial load on the shaft
must not be greater than 7500 N (value required for the
fefinition of the layout). The transmission is considered
adequate if this load is applied at a maximum distance of
a=40 mm form the shaft shoulder (PTO) as indicated in
fig. 10
For sizing that differs from that indicated above,
please contact our Customer Service
Department.
9.10 Transmission Definition
To avoid abnormal radial loads on the shaft an its related
bearing, please comply with the following indications:
a) Use pulleys for v-belts with race dimensions
prescribed/recommended by the belt
Manufacturer. Should no indications be supplied,
please see fig. 8 and the table in fig. 9.
fig. 8 Page 11
GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Dimensions (in mm)
b) Use high efficiency belts - for example XPB
instead of SPB; this will allow to use a lower
number of belts to transmit the same power, and
consequently a minor distance of the resultant
from the shaft shoulder (PTO) “a” in fig. 10.
fig. 10
c) Set belt tension according to the
Manufacturer’s prescriptions: an excessive value
will abnormally stress the bearing, reduce its
duration, and cause premature wear of the pulley.
The tension value depends on different variables
as indicated in paragraph 9.11.
d) Belt length has a natural tolerance ≥ ± 0.75%;
for this reason the four belts must be purchased
in pairs.
e) Follow the belt tension direction as indicated in
fig. 9; for different needs, please contact the
Customer Service Department.
f) Carefully align driver pulley and driven pulley
races.

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 12
The suction line is connected and up to pressure (see paragraphs 9.4, 9.5 and 9.6) the
pump must never run dry.
1. The suction line must be perfectly airtight.
2. All the On-Off valves between the pump and
the feeding source are completely open. The
delivery line must discharge freely in order to
allow the air in the pump to be expulsed
easily, thus facilitating pump priming.
3. All suction/delivery connections and fittings
must be correctly tightened.
4. Coupling tolerances on the pump/transmission axis (half-joint misalignment, Cardan
inclination, belt tightening, etc.) must remain
within the limits indicated by the transmission
Manufacturer.
5. The pump’s oil level must be verified
using the correct dipsticks (position 1, fig 13),
and expecially by means of the oil sight glass
(2, fig. 13).
In case the pump has not run for a long period
of time, recover the correct operation of the
suction valves.
10. START-UP AND OPERATION
10.1 Preliminary Inspections
Before Start-up Be sure that:
9.11 Definition of belt static tension values
Static tension depends on:
a) the center distance between the two pulleys
(belt length)
b) The load due to the belt’s static tension
c) The number of belts
d) The angle of wrap of the smallest pulley
e) Average speed
f) Etc.
For belts with an XPB profile, the diagram in fig. 11 allows
to obtain the valued of the static tension that must be
applied vs. the center distance between pulleys.
Finally, given a distance between pulley centers of 600
mm and a load of 75 Nm a belt flexion “te” of around 10.8
will confirm the correct belt tension as shown in fig. 12.
NOTE: If not differently indicated by the belt manufacturer
the inspection of the correct tension value, and the related tension
adjustment if needed, is to be carried out after at least 30 minutes of
operation in order to obtain belt setting. The best efficiency and maximum duration is obtained with the correct tension value.
NOTE: If required, or during dormal maintenance, never replace a single
belt but the entire set.
10.2 Start-up
1. When starting the pump for the first time, check for
the correct direction of rotation.
2. The pump must be started off-load.
3. Verify correct feeding pressure.
4. During operation, check that the rotating speed does
not exceed the rated value.
5. Before putting the pump under pressure let it run for
at least 3 minutes.
6. Before stopping the pump, release the pressure by
acting on the adjustment valve or on any discharging
device.

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 13
11. PREVENTIVE MAINTENANCE
PREVENTIVE MAINTENANCE
EVERY 500 HOURS EVERY 1000 HOURS
Check oil level Change oil
Check / Replace:
• Valves
• Valve seats
• Valve springs
• Valve guides
Check / Replace:
• H.P packings
• L.P. packings
To guarantee pump reliability and efficiency, respect the
maintenance intervals as indicated in the table below.
12. STOPPING THE PUMP FOR LONG PERIODS
12.1 Inactivity for long periods
If the pump is started up for the first time after a long period from the shipment date, before starting operation
check the oil level, check the valves as indicated in
Chapter 10, and therefore follow the start-up procedures
described.
12.2 Filling the Pump With An Anti-Corrosion
Emulsion or Anit-freeze Solution
a) Close the filter draining, if open.
b) Be sure that the connecting hose is clean, spread
with grease and connect it to the high pressure outlet
port.
c) Fit a suction hose to the membrane pump. Open the
pump suction connection and fit hose between it and
the membrane pump.
d) Fill the container with the solution/emulsion.
e) Put the free extremeties of the suction line and the
high pressure outlet hose inside the container.
f) Start up the diphragm pump.
g) Pump the emulsion until it comes out of the high
pressure hose.
fig. 14
In order to increase life of hydraulic components of the fluid ends, a flushing operation
with clean water is recommended after every
daily operation
h) Continue pumping for at least another minute; if
needed, the emulsion can be reinforced by adding,
for example, Shell Donax
i) Stop the pump, remove the hose from the suction
connection and close it with a plug.
j) Remove the hose from the high pressure outlet port.
Clean, grease and plug both connections and the
hoses.
12.3 Hoses
a) Before greasing and protecting the hoses according
to the previously described procedure, dry the connections using compressed air.
b) Cover with polyethelene.
c) Do not wrap them too tightly; be sure there is no
bending.
13. PRECAUTIONS AGAINST FREEZING
In areas and periods of the year where there is
risk of freezing, follow the instructions indicated
in Chapter 12 (see paragraph 12.2).
In the presence of ice, in no case must the
pump be started until the entire circuit has
been completely thawed out; not complying
with this indication may cause serious
damage to the pump.
14. WARRANTY TERMS
The duration and the terms of the warranty are contained
in the purchase contract. The warranty is void if:
a) The pump has been used for purposes that differ
from that agreed.
b) The pump has been fit with an electric or diesel
engine with performance greater than that indicated
in the table.
c) The required safety devices were un-adjusted or dis
connected.
d) The pump was used with accessories or spare parts
not supplied by General Pump.
e) Damage was caused by:
1) improper use
2) the non-observance of maintenance instructions
3) use not compliant with operating instructions
4) insufficient flow rate
5) faulty installation
6) incorrect positioning or sizing of the hoses
7) non-authorized design changes
8) cavitation

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
15. TROUBLESHOOTING
The pump does not produce any noise at
start-up:
• The pump is not primed and is running dry
• There is no water in the inlet line
• The valves are blocked
• The delivery line is closed and does not allow
the air in the pump to be discharged
The pump pulses irregularly (knocking):
• Air suction
• Insufficient feeding
• Bends, elbows, fittings along the suction line
obstruct the fluid’s passage
• The inlet filter is dirty or too small
• The booster pump, where provided, supplies
insufficient pressure or flow rate
• The pump is not primed due to insufficient
head or the delivery line is closed during
priming
• The pump is not primed due to valve seizing
• Worn valves
• Worn pressure packings
• Incorrect operation of the pressure adjust
ment valve
• Transmission problems
The pump does not deliver the rated flow / is
noisy:
• Insufficient feeding (see the causes listed
above)
• RPM are less than the rated flow
• Excessive amount of water by-passed by the
pressure adjustment valve
• Worn valves
• Leakage from the pressure packings
• Cavitation due to:
1) Wrong sizing of the suction hose/
undersized diameters
2) Insufficient flow rate
3) High water temperature
Insufficient pump pressure:
• The nozzle (or has become)too large
• Insufficient RPM
• Leakage from the pressure packings
• Incorrect operation of the pressure adjustment valve
• Worn valves
Page 14
Overheated pump:
• The pump is overloaded (pressure or RPM
exceed the rated values)
• Oil level is too low, or the oil is not of a suit
able type, indicated in Chapter 7 (see para
graph 7.4)
• Incorrect alignment of the joint or pulleys
• Excessive inclination of the pump during
operation
Pump vibrations or knocking:
• Air suction
• Incorrect operation of the pressure adjust
ment valve
• Valve malfunction
• Irregular drive transmission motion

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 15
16. EXPLODED VIEW AND PARTS LIST
KFMZ

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Page 16
REPAIR KITS
KIT 2124 KIT 2125 KIT 2126 KIT 2127
51, 61 46 40
3, 5, 7, 10, 14,
22,32, 33, 39,
51, 61, 63
Item Part # Description QTY.
1 F71010022 Crankcase 1
2 F91859000 Taper Roller Bearing 2
3 F90391800 O-ring, Ø 94.92x2.62 2
4 F71220081 Shim, 0.10 mm 1
F71220381 Shim, 0.25 mm 1
F71220581 Shim, 0.35 mm 1
5 F90075600 Ring 1
6 F70211801 Oil Level Indicator 1
7 F90387700 O-ring, Ø 39.34x2.62 2
8 F71150122 Side Bearing Cover 1
9 F99186800 Screw, TCEI M6x18, SS 12
10 F90384100 O-ring, Ø 17.13x2.62 4
11 F98218100 Plug, SS 4
12 201016 Rear Cover Bolt M6x50, SS 8
13 90360400 O-ring, Ø 25.12x1.78 1
14 F72210695 Tube For Oil Dipstick 1
15 F98212000 Oil Dipstick 1
16 F72160022 Crankcase Cover 1
17 F90400000 O-ring, Ø 215x3 1
18 F71223074 Lifting Hook 1
19 F98206000 Plug for Ø 15 port 7
20 F99512000 Screw, TE M16x25 1
21 F99313800 Connecting Rod Screw, M8x1x48 6
22 F71020035 Crankshaft 1
23 F91500000 Crankshaft Key, 12x8x70 1
24 F71150022 Motor Side Bearing Cover 1
25 F90170000 Oil Seal Ø 50x65x8 1
26 F71030001 Connecting Rod 3
27 F90060600 Snap Ring 6
28 F71050015 Plunger Guide 3
29 F95822000 Screw, M7x32 3
30 F97743000 Pin, Ø 20x38 3
31 90167800 Seal, Ø 38x52x7 3
32 2900006280 Support, LPS, SS 3
33 F90276800 Seal, Ø 30x43x8.5 3
Item Part # Description QTY.
34 F71224922 Spacer, Manifold 1
35 F96714000 Wiper, Ø 10x50x1, SS 3
36 F71225266 Plunger Rod, Extension 3
37 76040056 Plunger, Ø 30x70 3
38 F71040509 Plunger, Ø 40x95 3
39 F90367100 O-ring Ø 11x2 3
40 F71223856 Plunger Bolt, SS 3
41 F98243600 Plug, 47x35x12.5 3
42 F90079700 ShimRing, Ø 52, SS 3
43 F71224066 Packing ring, Ø 40 - SS 3
44 F90245000 L.P. packing, Ø 40, SS 3
45 F71223966 Packing support, Ø 40 - SS 3
46 F90389100 Packing O-ring, Ø 52.07x2.62 3
47 F90246000 H.P. Packing, Ø 40 3
48 F71225566 Ring, Ø 40 3
49 F71127636 Manifold, NPT Ø 40 SS 1
50 201020 Manifold Bolt, M12x220, SS 6
51 201017 Manifold Stud, M12x207, SS 2
52 201018 Lock Washer, M12, SS 2
53 201019 Nut, M12x19x10, SS 2
54 F99429500 Screw, M12x35 14
55 F71223636 Valve Cover - SS 2
56 F71223766 Valve Plug - SS 6
57 F90525000 Back-up ring, Ø 50.9x55x1.5 6
58 F90388900 O-ring, Ø 48.89x2.62 6
59 F36716101 Suction valve assembly 3
60 F36716201 Delivery valve assembly 3
61 F36204551 Suction/delivery valve cage 6
62 F94754000 Suction valve spring 3
63 F94755000 Delivery valve spring 3
64 F36208651 Suction/delivery valve guide 6
65 F36209302 Suction/delivery valve plate - 17-4 PH SS 6
66 F36209156 Suction/delivery valve seat - 17-4 PH SS 6
67 F90388900 O-ring, Ø 48.89x2.62 6
68 F90524000 Back-up ring, Ø 49.5x54x1.5 6

GENERAL PUMP A member of the Interpump Group
KFMZ SERIES
Ref 300732 Rev.A
02-10
Page 17
MAINTENANCE LOG
OIL CHANGE
GREASE
PACKING
REPLACEMENT
PLUNGER
REPLACEMENT
VALVE
REPLACEMENT
HOURS & DATE
General Pump
`;

// ─── MK Series Repair Manual ───
KB.docs['MK Series Repair Manual'] = `MK
Repair Manual
General Pump is a
Member of
The Interpump Group
Ref 300679 Rev.F
01-20
MK40A-MK45A-MK50A
MK55A-MK60A-MK65A

GENERAL PUMP A member of the Interpump Group MK SERIES
Page 2
INDEX
1. INTRODUCTION. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 3
2. REPAIR INSTRUCTIONS. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 3
2.1 Crank Mechanism Repair. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 3
 2.1.1 Crank Mechanism Disassembly. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 4
 2.1.2 Crank Mechanism Assembly. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 13
 2.1.3 Refurbishing the Crank Mechanism. . . . . . . . . . . . . . . . . . . . . . . . . . . Page 23
2.2 Fluid End Repair. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 24
 2.2.1 Head Disassembly - Valve Units. . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 24
 2.2.2 Head Assembly - Valve Units. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 27
 2.2.3 Disassembling the Plunger Unit - Supports - Seals. . . . . . . . . . . . . . . Page 33
 2.2.4 Assembly of the Plunger Unit - Suports - Seals. . . . . . . . . . . . . . . . . . Page 36
 2.2.5 Manifold Refurbishment. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 41
3. SCREW CALIBRATION. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 43
4. REPAIR TOOLS. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 44
5. MAINTENANCE LOG. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Page 45
Ref 300679 Rev.F
01-20

1. INTRODUCTION
This manual describes the instructions for Repairing MK Series pumps, and must be carefully read and
understood before performing any repair intervention on the pump. Correct use and adequate maintenance is 
fundamental for the pump’s regular operation and long wear. General Pump declines any responsibility for 
damage caused by the misuse or the non-observance of the instructions described in this manual.
2. REPAIR INSTRUCTIONS
2.1 Crank Mechanism Repair
Crank mechanism repair operations must be carried out after draining the oil from the crankcase. To drain
the oil, remove the oil refill cap 1, Fig. 1, and then the draining plug (2, fig. 1).
Exhausted oil must be collected in an appropriate receptacle and disposed of in 
designated locations. In absolutely no case may it be disposed of in the environment.
MK SERIES
Page 3
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 4
2.1.1 Crank Mechanism Disassembly
The correct sequence is the following
Completely drain the oil from the pump, then remove the key from the shaft (1, fig.2).
Unscrew the reducer flange fastening screws (1, fig. 3) and remove the flange from the shaft.
On the opposite side, unfasten the screws (1, fig. 4) and therefore remove the bearing cover.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 5
Unfasten the reducer cover screws (1, fig. 6).
Insert 3 dowels, or 3 M8 threaded screws (1, fig. 7) in the appropriate holes to aid extraction, and two 
sufficiently long M10 screws in order to support the cover (2, fig. 7).
Disassemble the crankcase cover by unfastening the relevant screws (1, fig. 5).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 6
Screw on the 3 threaded screws (1, fig. 8) and simultaneously, using the appropriate tool (p/n 27516700),
hammer on the tool itself so that the bearing remains on the pinion when extracting the cover (1, fig. 9).
When this operation is complete, remove the reducer cover and then slip off the bearing from the pinion.
Remove the screws that fasten the ring gear stopper (1, fig. 10), and remove the stopper itself (1, fig. 11).
Remove the ring gear (1, fig. 12). If necessary, use a slide hammer applying it to the 2 M8 holes (2, fig. 12).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 7
Remove the pinion by using a slide hammer applying it to the M14 hole (1, fig. 14).
Lift the safety washer key (1, fig. 15)
Remove the key from the shaft (1, fig. 13).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Insert a spacer under the connecting rod to block shaft rotation (1, fig. 16).
Using an appropriate wrench, unscrew and remove the ring nut (1, fig. 17) and then remove the safety
washer (1, fig 18).
Screw a SKF KM19 type ring nut onto the pressure sleeve (1, fig. 19), then loosen the sleeve using an
appropriate wrench (1, fig. 20).
Page 8
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 9
On the opposite side, unfasten the reducer case screws (1, fig. 21), and then remove the case (1, fig. 22).
Unscrew the connecting rod screws (1, fig. 23).
Disassemble the connecting rod caps with the split bearings; be particularly aware of disassembly order.
 The connecting rod caps and the related connecting rods must be reassembled in the 
 exact order and coupling as during disassembly.
To avoid error, caps and connecting rods are numbered on one side (1, fig. 24).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 10
Remove the pressure sleeve (1, fig. 26).
Remove the upper split bearing of the connecting rods (1, fig. 27).
Push the connecting rods forward in the direction of the hydraulic side in order to push out the crankshaft.
Use the appropriate tool (p/n 27566200) to facilitate this operation (1, fig. 25)
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Remove the crankshaft with the help of a hammer on the PTO side (1, fig. 28). Remove the shaft and the 
bearing (1, fig. 29).
If the replacement of one or more connecting rods or plunger guides is necessary, please operate as follows:
Unfasten the screws of the tool (p/n 27566200 to unlock the connecting rods (1, fig. 31) and therefore
extract the connecting rod-plunger guide units from the opening behind the crankcase (1, fig. 32).
On the opposite side, extract the bearing (1, fig. 30)
Page 11
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Couple the connecting rods with the previously disassembled caps; be sure to respect numbering (1, fig. 33).
Remove the pin (1, fig. 35) and then remove the connecting rod (1, fig. 36).
Remove the two seeger rings that block the plunger pin by using the appropriate tool (1, fig. 34).
Page 12
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
To separate the rod from the plunger guide, unfasten the M10 hexagonal-head screws using a size 17 socket
wrench (1, fig. 37).
2.1.2 Crank Mechanism Assembly
Proceed with assembly by inverting the precedure indicated in paragraph 2.1.1.
The correct sequence is the following:
Connect the rod to the plunger guide
Insert the Ø5 pin in the appropriate hole on the plunger guide (1, fig. 38) and connect the rod to the plunger
guide using M10 x 35 screws (1, fig. 39).
Page 13
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Block the rod using a clamp, and proceed with calibration using a torque wrench (1, fig. 40) as indicated
in paragraph 3. “SCREW CALIBRATION”
Insert the connecting rod in the plunger guide (1, fig. 36) and then insert the pin (1, fig. 35). Apply the
two seeger rings using the correct tool (1, fig. 34).
Make sure that conrods, plunger guides and wrist pins can move freely after being 
assembled.
Separate the caps from the connecting rod; correct coupling is guaranteed by the numbering on the side
(1, fig. 33).
After verifying the perfect cleaning of the crankcase, insert the connecting rod-plunger guide unit inside the
cylinders of the crankcase (1, fig. 32).
The insertion of the connecting rod-plunger guide unit inside crankcase must be done 
by positioning the connecting rods with the numbering visible from above.
Block the three units using the correct tool, p/n 27566200(1, fig 31).
Pre-assemble the bearing, PTO side, on the shaft (1, fig. 41) and assemble the bearing on the opposite
side on the crankcase (1, fig. 42).
The bearing in fig. 42 has a tapered internal ring. Verify that the taper goes from the 
outside towards the inside in order to allow the subsequent insertion of the sleeve.
Page 14
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Insert the shaft (1, fig. 29) until the pre-assembled bearing is aligned with the edge of the crankcase
(1, fig. 43).
Manually insert the pressure sleeve to maintain the shaft alignment (1, fig. 44).
Assemble the reducer case (1, fig. 45) and the related gasket (2, fig 45) using the 6 M12 x 40 screws 
(1, fig. 46), the 2 M12 x 50 screws (1, fig. 47) and the Ø 12 Grower washers (2, fig. 46 and fig. 47).
Calibrate the screws with a torque wrench (1, fig. 48) as indicated in paragraph 3. “SCREW CALIBRATION”
Page 15
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 16
Completely insert the pressure sleeve on the shaft from the opposite side of the PTO (1, fig. 49 and fig. 50). 
Pressure sleeve insertion must be done without oil or lubricants.
Insert the sleeve until the external surface (tapered) couples perfectly with the inside of the
bearing. During insertion, be sure that the bearing remains in contact with the shaft shoulder.
Measure the dimension “X” indicated in fig. 51.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 17
Screw the ring nut and fasten the sleeve until the dimension “X” is reduced by a value ranging between 0.7
and 0.8 mm (fig. 52).
Unscrew the ring nut, insert the safety washer (1, fig. 53) and completely screw the ring nut (1, fig. 54);
then fold the washer’s locking key (1, fig. 55).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 18
Remove the device that blocks the connecting rods using p/n 27566200 (1, fig. 31).
Insert the upper split bearings between the connecting rods and the shaft (1, fig. 56)
In order to correctly assemble the split bearings, be sure that the split bearings’ 
reference key in the appropriate seat on the connecting rod (1, fig. 57).
Apply the lower split bearings to the caps, (1, fig. 58) being sure that the split bearings’ reference key is
positioned in the appropriate seat on the cap (1, fig. 58).
Fasten the caps to the connecting rods using the M12 x 1.25 x 87 screws (1, fig. 59).
Pay attention to the correct assembly of the caps. the numbering must face upwards.
Tighten the screws with a torque wrench set as indicated in the SCREW CALIBRATION chart of paragrapg 3. 
The conrod screws should be tightened at intermediate incremental values.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 19
Reassemble the bearing on the pinion (1, fig. 60) and fully insert the pinion in the seat on the reducercase (1, 
fig. 61) by using a hammer.
Apply the 22 x 14 x 100 key in the seat on the shaft (1, fig. 62) and insert the ring gear on the shaft.
Fasten the ring gear stopper (1, fig. 63) using the 2 M10 x 25 screws (2, fig. 63).
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
GENERAL PUMP A member of the Interpump Group
Once tightened on the crankshaft, make sure that conrods still have axial right-left endplay.
Ref 300679 Rev.F
01-20

MK SERIES
Page 20
Assemble the bearing on the reducer cover (1, fig. 66).
Assemble the reducer cover (1, fig. 67) and fasten it using 8 M10 x 50 screws (1, fig. 68). Use a
stopper to avoid the bearing coming out of the seat (1, fig. 69).
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
Apply the 3 Ø 12 x 40 pins to the reducer case (1, fig. 64) and insert the gasket (1, fig. 65).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 21
Insert the oil seal inside the reducer flange using the proper tools, p/n 27515900 and 27548200 (1, fig. 70).
Before proceeding with oil seal assembly, verify the conditions of the sealing lip. If replacement is necessary,
position the new ring as indicated in fig. 71.
If the shaft presents diameter wear corresponding to the sealing lip, to avoid the need 
for grinding it’s possible to position the ring as indicated in fig. 71.
Apply the reducer flange with it’s gasket to the reducer case (1, fig. 72) and fasten it using 3 M8 x 18
screws (1, fig. 73).
To avoid damaging the oil seal, pay particular attention when inserting the flange on
the pinion.
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 22
Insert the key 16 x 10 x 90 in the pinion.
Insert the O-ring in the rear cover (1. fig. 74) and fasten it to the crankcase using 10 M8 x 18 screws
(1, fig. 75).
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
Assemble the bearing cover (and related gasket) (1, fig. 76) using 8 M12 x 30 screws (1, fig. 77).
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 23
Complete the assembly of the crank mechanism by applying the plugs and lifting eyebolts with the
related sealing O-ring.
Fill the crankcase with oil as indicated in the use and maintenance manual, paragraph 7.4.
2.1.3 Refurbishing the crank mechanism
TABLE UNDERSIZED DIAMETERS FOR CRANKSHAFT AND CONROD BUSHINGS
Max. Undersize
(mm)
Upper half
bushing
p/n
Lower half
bushing p/n
Crank pin grinding 
measures
(mm)
0.25 90931100 90930100 Ø 92.75 0/-0.03
Roughness Ra 0.4 Rt 3.5
0.50 90931200 90930200 Ø 92.50 0/-0.03
Roughness Ra 0.4 Rt 3.5
TABLE OVERSIZED DIAMETERS FOR CRANKCASE CYLINDER BORES AND PLUNGER GUIDES
Max. oversize
(mm) Plunger guide p/n
Crank pin grinding 
measures
(mm)
1.00 74050243 Ø 81 H6 + 0.22/0
Roughness Ra 0.8 Rt 6
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 24
2.2 Fluid End Repair
2.2.1 Head Disassembly - Valve Units
The head requires preventive maintenance as indicated in the use and maintenance manual. Interventions 
may be limited to valve inspection, or replacement as needed. To extract the valve units operate as follows:
Unfasten the 8 M16 x 55 screws of the valve cover (1, fig. 78) and remove the cover (1, fig. 79).
Remove the spring (1, fig. 81).
Extract the valve plug using a slide hammer applied to the M10 hole of the valve plug (1, fig. 80).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 25
Extract the delivery valve unit using a slide hammer applied to the M10 hole of the valve guide (1, fig. 82)
If the extraction of the delivery valve unit is particularly difficult (for ex. due to 
incrustations caused by prolonged pump inactivity) use the extraction tool, 
p/n 27516400 
Unfasten the valve guide spacer using an 8 mm allen wrench (1, fig. 83).
Remove the suction valve unit using a slide hammer applied to the M10 hole of the valve guide (1, fig. 84).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 26
Disassemble the suction and delivery valve units by screwing on an M10 screw long enough to act on the
valve and extract the valve guide from the valve seat (1, fig. 87).
If the extraction of the of the suction valve unit is particularly difficult (for ex. due to
incrustations caused by prolonged pump inactivity) use the extraction tool
p/n 27516200 (for MK40A, MK45A, MK50A) or p/n 27516300 (for MK55A, MK60A and 
MK65A) (1, fig. 85) and act as indicated.
Unscrew the valve opening device using a 30 mm wrench (1, fig. 86).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 27
2.2.2 Head Assembly - Valve Units
Pay careful attention to state of wear of the various components; replace them if 
necessary. At each valve inspection, replace all valve units and valve plug O-rings.
Before repositioning the valve units, clean and perfectly dry the relevant seats in the
head indicated by the arrows (1, fig. 88).
Proceed with reassembly by inverting the procedure indicated in paragraph 2.2.1.
Assemble the suction and delivery valve units (fig. 89 and fig. 90) paying attention not to invert the previously
disassembled springs.
To facilitate the insertion of the valve guide in its seat, use a pipe that lays on the horizontal shoulders of the
guide (fig. 90a), and use a hammer acting on the entire circumference.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 28
Proceed with the insertion of the valve units (suction and delivery) into the head, paying
attention to the correct insertion sequence of the O-rings and anti-extrusion rings.
The correct assembly sequence of the valve units in the head is the following:
Insert the anti-extrusion ring, exploded view item 4 from Owner’s Manual (1, fig. 92).
Insert the O-ring, exploded view item 5 from Owner’s Manual (1, fig. 93).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 29
Be sure that the O-ring and the anti-extrusion ring are perfectly fit into their seats. Insert the suction valve
unit together with the spacer (1, fig. 94). The valve unit must be fully inserted, as shown in 1, fig. 95.
Mount the O-ring, exploded view item 5 from Owner’s Manual (1, fig. 96) and the anti-extrusion ring, exploded 
view item 15 from Owner’s Manual (2, fig. 96) on the delivery valve seat.
Insert the delivery valve unit (1, fig. 97). The valve unit must be fully inserted as shown in 1, fig. 98.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 30
Insert the anti-extrusion ring, exploded view item 16 in Owner’s Manual (1, fig. 99).
Pay particular attention when inserting the O-ring indicated in 1, fig. 101. We advise
to use the correct tool p/n 27516000 (for MK40A, MK45A and MK50A) or p/n 27516100
(for MK55A, MK60A and MK65A) in order to avoid cutting the O-ring during insertion.
Insert the O-ring, exploded view item 17 in Owner’s Manual, (1, fig. 100).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 31
Insert the valve seat ring (1, fig 102) and the spring (1, fig. 103).
Assemble the O-ring, exploded view item 17 in Owner’s Manual, (1, fig. 104) and the anti-extrusion ring,
exploded view item 21 in Owner’s Manual (2, fig. 104) on the delivery valve plug.
Insert the valve plug complete with O-rings and anti-extrusion ring.
After assembling the valve unit and the valve plug, apply the valve cover (1, fig. 105) and screw on the
8 M16 x 55 screws (1, fig. 106).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 32
Assemble the head on the pump casing (1, fig. 107) being careful not to bump against the plungers, and
fasten the 8 M16 x 180 screws (1, fig. 108).
Proceed with calibrating the M16 by 180 screws with the torque wrench as indicated in paragraph 3.
“SCREW CALIBRATION”
Fasten the 8 M16 x 180 screws starting from the 4 internal screws cross-wise (see fig. 
107), and then proceed with the 4 external screws, again fastening cross-wise.
Calibrate the M16 x 55 cover screws with the torque wrench as indicated in paragraph 3. “SCREW
CALIBRATION”
Apply the valve opening devices (1, fig. 109) and fasten them using a 30 mm wrench (1, fig. 110).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 33
2.2.3 Disassembling the Plunger Unit - Supports - Seals
The plunger unit requires a periodical inspection as indicated in the preventive maintenance table of the 
Owner’s Manual. Interventions only require visual inspections of the draining from the hole in the lower cover. 
In case of anomolies/oscillations on the delivery pressure gauge, or leaking from the drain hole, proceed with 
seal inspection and replacement if necessary. 
Operate as follows to extract the plunger units:
To access the plunger unit, unscrew the M16 x 180 screws and disassemble the head.
Remove the head with great care in order to avoid bumping against the plungers.
Disassemble the plungers by unfastening the screws (1, fig. 111).
Remove the plunger from the packing support and check that there are no scratches, or signs of wear or
cavitation.
Remove the upper inspection cover by unscrewing the 4 fastening screws (1, fig. 112).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 34
Manually rotate the shaft so that the 3 plungers are in the top dead center position.
Insert the stopper tool p/n 27516600 between the plunger guide and the plunger (1, fig 113).
Turning the shaft, move the plunger forward so that the stopper, moving forward itself, can push out the
packing support and the entire plunger unit (1, fig. 114).
Extract the packing support and the stopper tool.
Remove the packing support O-ring if it remains inside the pump case (1, fig. 115)
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 35
Remove the wiper rings from the plunger guides (1, fig. 116).
If replacement of the plunger guide oil seal is needed, disassemble the oil seal cover by operating as follows:
Unfasten the two screws of the oil seal cover (1, fig. 117).
Extract the oil seal cover by screwing a threaded M5 bar or screw into the correct holes on the cover
(1 fig. 118); extract the oil seal cover from the pump unit (1, fig. 119).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Separate the packing support from the liner (1, fig. 121) to access the pressure packings (1, fig 122).
To remove the low pressure packing, use a shim or another tool that doesn’t damage the seat of the packing
support (1, fig. 123).
Page 36
Replace the oil seal (1, fig. 120) and the external O-ring (2, fig. 120).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Replace the pressure packings by applying a small amount of silicone grease to the 
lips, being careful not to damage them when inserting the liner.
At each disassembly, the pressure packings must always be replaced together with all
the O-rings.
Insert the low pressure packings in the packing support (1, fig 124), being careful that the sealing lips are
facing frontwards (toward the head).
Assemble the head ring (1, fig. 125), the high pressure packing (1, fig. 126) and the restop ring
(1, fig. 127).
Page 37
Couple the packing support to the liner (1, fig. 128).
2.2.4 Assembly of the Plunger Unit - Support - Seals
Proceed with reassembly by inverting the disassembly procedure indicated in paragraph 2.2.3.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 38
Position the O-ring (1, fig. 130) in its seat on the oil seal cover, and insert the assembled unit inside the
crankcase in the correct space (1, fig. 131).
Perfectly insert the cover into its seat (1, fig. 132) being careful not to damage the oil seal lip. Fasten the
oil seal cover with 2 M6 x 14 screws (1, fig. 133).
Calibrate the screws using a torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
Insert the oil seal in its cover (1, fig. 129) using a stopper p/n 27515800.
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 39
Insert the 14 x 2 O-ring in its correct seat on the plunger bolt (1, fig. 136).
Assemble the plungers on their respective guides (1, fig. 137) and fasten them as in 1, fig. 138).
Calibrate the screws using the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
Position the wiper complete with its O-rings in its seat on the plunger guide (1, fig. 134 and fig. 135).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 40
Be sure that the liner-support unit is correctly positioned in its seat (1, fig. 141).
Assemble the liner’s front O-ring (1, fig. 142) and the O-ring of the recirculation hole (1, fig. 143).
Insert the O-ring inside the pump case (1, fig. 139), followed by the previously assembled liner-packing
support unit (complete with the O-ring), (1, fig. 140).
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Calibrate the screws with the torque wrench as indicated in paragraph 3. “SCREW CALIBRATION”
Insert the O-ring on the inspection covers (1, fig. 144) and mount the covers using 4 + 4 M6 x 14 screws
(1, fig. 145).
2.2.5 Manifold Refurbishment
Manifold cavitation damages around the three cylinder bores can be fixed by re-tooling the damaged bores
to a larger diameter (see fig. 146 for MK40A, 45A-50A and fig. 148 for MK55A-60A-65A).
Page 41
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 42
After re-tooling, three steel bushings designed to restore the original bores have to be driven in the manifold
along with relevant O-rings and anti-extrusion rings as shown in fig. 148 and 149.
1. 3 pcs. x p/n F74215156 bushings MK40A-45A-50A
2. 6 pcs. x p/n F90526880 anti-extrusion rings
3. 6 pcs. x p/n F90410200 O-rings
1. 3 pcs. x p/n F74215056 bushings MK55A-60A-65A
2. 6 pcs. x p/n F90528500 anti-extrusion rings
3. 6 pcs. x p/n F90412900 O-rings
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 43
3. SCREW CALIBRATION
Screws are to be fastened exclusively using a torque wrench.
Description Exploded View Position
(From Owner’s Manual)
Fastening
Ft. Lbs.
Fastening
Nm
Crankcase cover screws M8x18 54 14.8 20
Crankcase plug G1/2x13 55 29.5 40
Reducer flange screw M8x18 54 14.8 20
Reducer cover screw M10x50 70 33.2 45
Ring gear stopper screw M10 x 25 65 33.2 45
Reducer case screw M12x40 75 54.2 73.5
Reducer case screw M12x50 64 54.2 73.5
Upper and lower cover screw M6x14 41 7.4 10
Bearing cover screw m12x30 90 29.5 40
Connecting rod screw M12x1.25x87 53 55.3* 75*
Plunger guide screw M10x35 50 44.3 60
Oil seal cover screw M6x14 41 7.4 10
Plunger screw M10x160 27 29.5 40
M16x55 Valve cover screw 26 245.6** 333**
Head plug G1/4”x13 13 29.5 40
Head screw M16x180 25 245.6 333
Valve opening device 2 29.5 40
* Screws should be tightened at intermediate incremental values
** Tightening sequence always cross-wise starting from the 4 internal screws then the 4 
external screws (see fig. 108)
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 44
4. REPAIR TOOLS
Pump maintenance may be carried out using simple tools for assembling and disassembling components.
The following tools are available:
For Assembly:
KIT For Assembly:
 • Plunger guide oil seal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27910900
 • Pinion oil seal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27515900 & F27548200
A • Delivery valve O-ring seat (MK40A, MK45A, MK50A) . . . . . . . . . . . . . . . . . . . . F27516000
B • Delivery valve O-ring seat (MK55A, MK60A, MK65A) . . . . . . . . . . . . . . . . . . . . F27516100
 KIT For Disassembly:
A • Suction valve seat (MK40A, MK45A, MK50A) . . . . . . . . . . . . . . . . . . . . . . . . . . F27516200
B • Suction valve seat (MK55A, MK60A, MK65A) . . . . . . . . . . . . . . . . . . . . . . . . . . F27516300
A/B • Slide hammer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27516400
C • Liner + packings support unit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27516600
 • Reducer cover . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27516700
 • Shaft (connecting rod blocking) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . F27566200
A/B • 10 mm threaded bushing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 800049 
A/B • Valve Cage Adapter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 520426
RECOMMENDED REPAIR KITS
FKITMKVHP - MK40A, MK45A, MK50A Valve removal / Installation Tool Kit A
 Includes: F27516000 Valve O-ring install . . . . . . . . . . . . . . . . . . . . . . . . . . Qty. 1
 F27516200 F27513400 handle + F27627700 seat pusher...........Qty. 1
 F27516400 Slide hammer.............................................................Qty. 1
 800049 10 mm threaded bushing ...........................................Qty. 1
 520426 Valve Cage Adapter...................................................Qty. 1
 
FKITMKVLP - MK55A, MK60A, MK65A Valve Removal / Installation Tool Kit B
 Includes: F27516100 Outlet valve O-ring assembly tool . . . . . . . . . . . . . . . Qty. 1
 F27516300 F27513400 handle + F27627800 seat pusher . . . . . Qty. 1
 F27516400 Slide hammer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Qty. 1
 800049 10 mm threaded bushing . . . . . . . . . . . . . . . . . . . . . Qty. 1
 520426 Valve Cage Adapter...................................................Qty. 1
F27516600 - Cylinder Removal Tool with Handle - MK - Tool Kit C
530078 - Splined Dummy Shaft Tool - 14 TPI . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Qty. 1
 2500 RPM Gear Box Only
GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20

MK SERIES
Page 45
MAINTENANCE LOG
OIL CHANGE
GREASE
PACKING
REPLACEMENT
PLUNGER
REPLACEMENT
VALVE
REPLACEMENT
HOURS & DATE
General Pump

GENERAL PUMP A member of the Interpump Group
Ref 300679 Rev.F
01-20`;

// ─── Oil Recommendation Guide ───
KB.docs['Oil Recommendation Guide'] = `OIL RECOMMENDATIONS
Pump crankcase oil must be changed after an initial 50-hour break-in period.
Oil must be changed every 3 months or at 500 hour intervals thereafter. Replace
only with General Pump Oil according to the pump model numbers listed below.
NOTE: Failure to follow these requirements could void pump warranty.
Commercial Pumps
Pump Model Oil Required
T41
GP SERIES 8090
T61
T81
T121
T151
T1551
T1591
T3551
T4251
T9971
T9971GR
TS1041
TS1531
General Pump Series 100 Oil
is 30 Weight, non detergent
General Pump Series 220 Oil
is 50 Weight
General Pump Series 8090 Oil
is 80/90 Weight Gear Lube
Page 1 of 2
Use General Pump Industrial Pump Oil Series 8090 in the following:
Vehicle Cleaning Pumps
Pump Model Oil Required
CW1012
GP SERIES 8090 CW1541
CW61
CW81
Gear Boxes
Pump Model Oil Required
YGR0750
GP SERIES 8090
YGR1000
YGR1000P
YGR1125
YGR1125P
ZGRS1000
ZGRS1125
ZGRS1000J
ZGRPTO
Use General Pump Industrial Pump Oil Series 220 in the following:
Industrial/Vehicle Cleaning Pumps
Pump Model Oil Required
HF
GP SERIES 220
HFN
HTCK3623S
HTCK4050S
KE
KE36M
KEZ
KF
KF40M
KFMB
Industrial/Vehicle Cleaning Pumps
Pump Model Oil Required
KFMZ
GP SERIES 220
KFZ
KS
LK36/40/45
LK50/55/60
LKN36/40/45
LKN50/55/60
MK40/45/50
MK55/60/65
MKS40/45/50
Industrial/Vehicle Cleaning Pumps
Pump Model Oil Required
MKS55/60/65
GP SERIES 220
MW32/36/40
MW45/50/55
MW55M
MWN32/36/40
MWN45/50/55
SK
VF
VK
VS
*All other commercial pumps, vehicle cleaning pumps and accessories (where oil is used) use
General Pump Industial Pump Oil Series 100. For a more comprehensive list, see page 2.
Please refer to General Pump’s Pump and Accessory Catalog,
Price Book for specific
GP Industrial Pump Oil part numbers.
General Pump
is a member of
the Interpump Group
8

Pump Model OIL
100648
100656
AT0033
AT0055
AT0088
AT0088B
AT0111
AT0177
AT0177B
CW2004
CW2040
CW24
CW3040
EZ2530SUI
EZ2536E
EZ2536EUI
EZ2536S
EZ2542E
EZ2542S
EZ2545E
EZ2545GUI
EZ2545S
EZ2555E
EZ2555S
EZ2642N
EZ3030G34
EZ3030G34UI
EZ3035G
EZ3035GUI
EZ3035GUK
EZ3036N
EZ3040G
EZ3040GUI
EZ3040GUK
EZ3040S
EZ3042S
EZ3045G
EZ4030G34
EZ4035E34
EZ4035G34
EZ4040E34
EZ4040G
HTC1505E345
HTC1506S17
HTC1509E175
HTC1509S17
HTC1511S17
HTF2018S
HTF2221S
HTF2421S
OIL RECOMMENDATIONS
Please refer to General Pump’s Pump and Accessory Catalog,
Price Book for specific
GP Industrial Pump Oil Series part numbers.
Page 2 of 2
Ref 300584 Rev. B

G
P
S
E
RIE
S
1
0
0
Pump Model OIL
HTS2016S
HTS2210S
HTS2215S
HTS2219S
HTW3624S
HTXS1810S
HTXS1812S
HTXS1813S
T1011
T1321
T1621
T2031
T721B
T731B
T9051EBF
T9051EBFU
T9051EBFUI
T921
T9211
T9281
T9711EBF
T9721B
T9721EBF
T9731B
T9731EBF
T991
T991GR
T9951
TC1502E175
TC1504E345
TC1505E345
TC1506E345
TC1506E346
TC1506G
TC1506GUI
TC1507E345
TC1507E346
TC1507G
TC1507GUI
TC1507S34
TC1508E175
TC1508E346
TC1508G
TC1508GUI
TC1508S34
TC1509E175
TC1509E17N
TC1509G
TC1509GUI
TC1509S17
Pump Model OIL
TC1511S17
TC1802E175
TC1809E175
TC1809E17N
TC1809S17
TC1811S17
TP2520J34
TP2520J34UIL
TP2526J34
TP2526J34UIL
TP2530J34
TP2530J34UIL
TP2533J34
TP2533J34UIL
TS1011
TS1021
TS1321
TS1331
TS1511
TS1621
TS1711
TS1811
TS2011
TS2012SS
TS2013
TS2016SS
TS2021
TS2212SS
TS2291
TS921
TSF1819
TSF2019
TSF2019DS
TSF2019SS
TSF2021
TSF2021SS
TSF2219
TSF2221
TSF2221SS
TSF2421
TSF2421SS
TSF2819
TSP1619
TSP1621
TSP1621N
TSP1819
TSP1821
TT1540GBF
TT2021EBF
TT2028EBF
Pump Model OIL
TT2028GBF
TT2035EBF
TT2035EBFUI
TT2035GBF
TT901
TT9061EBF
TT9061EBFU
TT9061EBFUI
TT9061GBF
TT9071EBF
TT9071EBFU
TT9071EBFUI
TT9071GBF
TT9111
TT9111EBF
TT931
TT9351
TT941
TT9441
TT951
TX1505G6
TX1506G6
TX1506G8
TX1506G8UK
TX1506S34
TX1508G6
TX1508G8
TX1508G8UIA
TX1508G8UK
TX1508S34
TX1509G8UIA
TX1509G8UK
TX1510E349
TX1510G8UIA
TX1510G8UK
TX1510S17SS
TX1510S34
TX1512E179
TX1512S17
TX1512S17SS
TX1810E179
TX1810S17
TX1810S17SS
TX1812E179
TX1812S17
TX1812S17SS
WM SERIES (ALL)
G
P
S
E
RIE
S
1
0
0
G
P
S
E
RIE
S
1
0
0
G
P
S
E
RIE
S
1
0
0
NOTE: For pumps not listed, consult the product catalog`;

// ─── General Pump Service Manual ───
KB.docs['General Pump Service Manual'] = `G= Pressure Washer System

TABLE OF CONTENTS

Introduction
Typical Operati
Pressure .
Flow.. .
Designing Your System
Pump Selection .
Motor/Engine Selection
Determining Spray Tip Size
Drive System.
Pulley Select
Belt Selection ..

pege
Selecting Remaining Components... 6, 7
Upstream or Inlet Side
Components ...
Downstream or Outlet
‘Components ....
Installing Your Components
Troubleshooting ...
Servicing Your Pump .
Valve Assemblies.......
Removing Manifold Head
Replacing Plungers...
Replacing V-Packings

INTRODUCTION

Thank you for purchasing a GENERAL Pressure
Washer Pump. With proper installation and mainte
nance it will provide you with many years of depend-
able, trouble-free service.

This manual was developed as a basic guide to un-
derstanding the operation and requirements, installa-
tion, and servicing of GENERAL positive displacement
pumps.

Pressure cleaning equipment is potentially hazardous
and could cause personal injury or property damage #
installed, repaired, or operated in an unsafe manner,
or in a manner which is not consistent with the
manufacturer's recommendations or requirements.

There are many manufacturers of pressure washer
Pumps and complementary components. Be sure that
the required components that you choose to use are
consistent with the high quality standards of
GENERAL pumps.

GENERAL PUMP, INC. does not assume liability or
responsiblity for the design or operation of a customer's
high pressure system

TYPICAL OPERATION AND
REQUIREMENTS Se

PRESSURE
The pressure produced in a pressure washer
system is the result of forcing a known volume
(or flow) of water through a known size orifice
(spray tip). Pressure is measured in pounds per
square inch (PSI)

FLOW
The flow or volume produced in a pressure
washer system is determined by the speed that
the pump shaft is rotated (RPM). The faster the
shaft is rotated, the higher the output volume
Flow or volume is measured in gallons per
minute (GPM).

The pump, which is driven by an electric motor or a
gas engine, draws or accepts filtered water in
through a series of inlet check valves as the
plungers move back. As the plungers move forward,
the inlet valves close, forcing the water to travel
through a series of outlet check valves, and to the
outbound side of the pump.

After the water exits the pump, its flow direction
must be controlled with an unloading or regulating
valve. A positive displacement pump is always
delivering a certain volume of water whether the

spray gun is open or closed, theretore a device is.
needed to control the direction of flow, either
allowing the flow to go through the open spray gun
or redirecting (by-passing) the tlow back to the
inbound side of the pump when the spray gun is
closed. Without an unloading or regulating valve.
dangerously high pressures will be produced when
the spray gun is closed because the water being
forced out of the pump has no place to go, Serious
bodily injury or property damage could be caused
by failure to properly utilize an appropriate unioader
or regulator vaive in your pressure washer system.
Asa satety device, at least one pressure relie! valve
should be installed in the outbound side of the pump
to,guard against failure of component parts, and the
development of dangerously high pressures.

Cleaning chemicals or detergents may be
introduced into the flow of water either inbound or
‘outbound of the pump. An inbound or upstream
type of chemical injector simply uses the pump’s
ability to draw or suck fiuid in to introduce a
chemical into the stream of water, Care must be
taken to avoid introducing any chemicals which are
not compatible with the materials in the pump and
downstream components. An upstream injector
does allow chemicals to be applied to the work
surface at the normal high working pressure of the
system. An outbound or downstream type of
chemical injector uses a venturi (very similar to that
used in an automotive carburetor) to draw a
chemical into the water stream. A downstream
injector requires low pressure to activate chemical
flow. Low pressure is achieved by changing to a
large sized spray tip, or opening up a large orifice at
the outlet end of the spray gun using an adjustable
nozzle or a double lance. There are several
advantages to using a downstream injector over
using an upstream type.

1. Fewer component parts are exposed to the
cleaning chemicals, extending system life

2. The operator can control the flow of chemical
(on and off) by changing the system pressure at
the nozzle.

3. Applying chemical at low pressure is more
economical because less chemical bounces off
the work surface.

Heated pressure washers and steam cleaners
increase the ability of a high pressure flow of water
to break down dirt and grease. They also increase
the action of most cleaning chemicals, These
systems are very complex, and add more potential
personal injury and property damage hazards.
Design of these systems requires many more
additional components as well as experienced
design personnel with knowledge of fuels, neat
transt electronics, etc.

TYPICAL PRESSURE WASHER SYSTEM

SPRAY GUN-

INLET FILTER

DESIGNING YOUR
SAT

PUMP SELECTION

The heart of any pressure washer system is the high
pressure pump. Size the pump according to your
cleaning needs. Higher than required pressure and
volume will cause needless wear of all components
in the system, and could actually damage your work
surface instead of cleaning it. Never exceed the
maximum pressures of rotation speed as is stated
‘on the Technical Data Sheet supplied with each
pump.

Refer to the Pump Data Sheet to determine what
pump RPM is needed to deliver your required GPM
output

UNLOADER OR
REGULATOR VALVE

WAND SPRAY TIP

(MOTOR/ENGINE)|

MOTOR/ENGINE SELECTION

The size of the electric motor or gasengine required
to drive your pump is determined by the pump GPM
and PSI output desired. Refer to the Technical Data
Sheet supplied with each pump, or the following
chart. Both charts are based on electric horsepower
requirements; for gas engines multiply by 1.8. Gas
engine output horsepower varies with running RPM.
Be sure to run a gas engine fast enough to supply
required horsepower, but do not exceed
manufacturer's specifications.

ELECTRIC MOTOR HORSEPOWER REQUIRED TO DRIVE A PUMP

slelel|elelelslslelelelels/s

NOTES: 1. A gasoline engine should be sized 1.8 times the electric horsepower requirement
2. Always select @ motor/engine with a horsepower rating above the minimum requirements
‘shown above Example: 5.0 GPM - 1250 PSI is 4.40 minimum electric horsepower requirement

use 25 horsepower electric motor.

It you wish to direct drive your pump trom an motor. Check with your motor supplier for technical
electric motor, you may want to use a “C" face information.

SPRAY TIP SELECTION CHART

OUTPUT VOLUME (6.P.M) AT VARIOUS PRESSURES (P.S.1)
son ri | zea rat | soo rs | oan 1200 P| v0 rs | zn Ps | 2800 Ps | 3000 Ps | sean P| x0on P|
wl] «| | 7 rs Cs A

ove [re | v0 i fa far fs fe
“ n 10 | | ae a0 a6 chy “a
[a es wpe pape pe] of
rs Tio a0 a au ae

32
se
oo | ss
*
v0

10 2m | 30 | a2 | ar | a2 | ae
10

10

* A commonly used standard for tip size is the “nozzle number" which is equivalent to the nozzle
capacity in GPM at 4000 PSI. Spray angle does not affect nozzle volume.

4

DETERMINING SPRAY TIP SIZE

As stated earlier in this manual, the output pressure
is determined by forcing the output volume of water
through a certain size orifice or spray tip. Spray tip
size is a very important factor of proper pressure
washer performance, using a tip that is sized too
‘mail will allow overpressurization of the pump and
components. You must know your output GPM and
your desired output PSI to properly select a spray
tip size. To use the chart on page 4, find the desired
PSI, read down the column until you find the output
GPM closest to your pump application. Read to the
far left to find the spray tip number and orifice
Giameter. Example: 1000 PSI at 4.0 GPM needs a
number 8 spray tip.

Spray tips are available in various spray angles. itis
advisable to have different spray angle tips in the
same size for different cleaning applications. So
spray tips or nozzles are available with an adjustable
spray angle

DRIVE SYSTEM sms

There are three common methods of driving or
connecting the pump and motor/engine. Direct
drive and gear reduction drive require special
components that are matched to the pump and to
the motor/engine, as well as other technical
considerations. A belt and pulley system is the
recommended method of driving the pump because
it allows easy reduction of the motor/engine RPM to
your required pump RPM, as well as absorbing
shocks produced by both the engine and the pump.

PULLEY SELECTION

There are many types of belts and pulleys available,
the following is a basic guide. Manutacturer's
representatives should be consulted concerning
your specific requirements.

From the Motor Pulley Guide (below) determine the
pulley size (A, B or C section), and number and size
(A, B or C section) of belt required. The larger in size
and/or number of belts used will increase the life of
belts. Be sure to consider space limitations of your
finished assembly

MOTOR PULLEY GUIDE

4m al 3% oa

5
‘
a
*

To determine pump pulley size (based on a 1725
RPM motor), find the motor pulley size on the chart
below, follow the column down until you find your
required pump RPM to meet your requirements, or
the next higher RPM. Follow the column to the lett to
find pump pulley diameter.

PUMP PULLEY GUIDE (1725 RPM Motor)

ad

NOTE: It RPM does not match your requirements, use the next highest RPM number.

If your motor/engine will be operated at a speed
other than 1725 RPM, the pump pulley diameter can
be calculated using the following formula.

Motor Pump
Heed x Pulley = Pulley
Diameter Diameter

Example: Using a 1200 RPM motor, and a pump that
you want to turn at 850 RPM for your desired GPM
‘output, and you have chosen a 4-1/2" diameter
motor pulley.

1200 4.412 RPM Ratio

1.412 x 4.5 = 6.39 actual pump pulley diameter

There may not be a pulley available in the exact size
as calculated. Simply use the closest one.

BELT SELECTION
Be sure to use the same section belts (A, B or C) as
the pulleys were sized tor.

Use the following formula to calculate belt length.

(D - dy?

Where: L = Effective outside length of belt(s) in

L =2(c) + 1.57 (D +d) +

inches.

C = Distance between centers of pulleys
in inches.

D = Outside diameter of pump pulley in
inches.

4 = Outside diameter of motor/engine

pulley in inches

Aiways install a safety cover or guard over belt and
pulleys to avoid serious bodily injury or property
damage.

SELECTING REMAINING
col

UPSTREAM OR INLET SIDE COMPONENTS

Inlet Filter — A very important component to
increase system life and avoid operating problems.
A 60-120 mesh screen filter is necessary to stop
foreign matter from entering the system and
possible holding valves open. clogging orifices,
Seratching plungers, tearing packing, and causing
unnecessary wear on all components.

By-Pass Provision — As mentioned eartier in this
manual, the unloader or regular valve by-passes or
recirculates pumped water when the gun trigger is
released. A provision must be made in the inlet
plumbing (or inlet water holding tank) to accept this
flow of water without restriction.

Thermal Reliet Valve — This is a temperature
sensing vaive that opens and dumps water to
atmosphere at a predetermined temperature.
Recirculating water (through the by-pass loop) hi
& tendency to heat up to temperatures that can
eventually damage internal pump parts. A thermal
relief valve is an inexpensive way to avoid costly
repairs.

Upstream injector — A device which uses the
pumps ability to draw or suck fluid to introduc
Cleaning chemical into the water stream. This type

injector is recommended for very mild chemicals
only as the entire system (especially the pump) is
exposed to the corrosive tendencies of the cleaning
chemicals

Pressure Reducing Valve — if the water supply
entering the pump is above maximum inlet pressure
rating called out on the Pump Data Sheet. A
pressure reducing valve must be installed for proper
pump operation.

Back-Flow Preventer — When using cleaning
chemicals, care must be taken to avoid these
chemicals from being back-flushed and
contaminating the city water supply. Check your
local plumbing codes. An alternative option to a
“pack-flow’ preventer” is the use of a water holding
tank. If a holding tank is used, be sure not toexceed
the negative pressure rating of the pump

DOWNSTREAM OR OUTLET SIDE
COMPONENTS

Unloader or Regulator Valve — As mentioned
earlier, this device is required to direct the constant
flow of water either through the spray tip when the
gun Is open, or by-pass the flow back to the inlet
side of the pump when the gun is closed. Be sure to
adhere to manufacturer's requirements when

selecting, installing, setting up, and servicing
unioader valves. The vaive should be mounted as
close to the pump outlet as possible; do not use any
hose between the pump and the loader.

Pressure Reliet Valve — A safety device which when
installed and up according to the
manufacturer's specifications will open and dump
to atmosphere a quantity of water if the system
becomes overpressurized due to a failure of system
components,

Pulsation Dampener — Pulsation Dampeners are
installed in systems either to smooth out the
pulsations caused by the pump itself or to absorb
pressure spikes when the gun is shut off. A duplex
pump may require a pulsation dampener because of
the pulsation not experienced with a triplex pump.
When there are long runs of pipe, a pulsation
dampener may be required to soften the hammer
effect developed when a gun is shut off.

Pressure Gauge — Allows the equipment operator
to monitor the system for peak performance. A worn
spray tip will be evident with a decrease in system
pressure. High pressure may indicate a partially
plugged spray tip or other restriction, or @ defect in
the unloader valve.
Important factors in gauge selection:
* Liquid filled — to absorb the pressure
fluctuations in the system,
‘© Restriction orifice installed to avoid damage
from pressure “spikes”.
* Select a gauge so that normal system
‘operating pressure is in the middle of the
gauge's range.

Downstream Injector — Introduces a cleaning
chemical into the water stream after or downstream
of the pump. Care must be taken to size the injector
to the system volume or GPM. Check with
manufacturer's literature. Too small of an injector
causes a large pressure drop across the injector and
injects a very high concentration of chemical. Too
large of an injector will not draw any chemical
Downstream injectors require low pressure,
generally about 200 PSI, to activate the chemical
flow. A double nozzie holder, rollover nozzle, and a
double lance are a few accessories that allow
mounting a low pressure spray tip, as well as the
standard high pressure spray tip. An adjustable
nozzle allows a large orifice to be opened around
the high pressure spray tip.

High Pressure Hose — A required component of
your system. Be sure that the hose that you select to
use is compatible with all chemicals that will be
introduced into the system, is rated at least 50%
Greater than the system operating pressure, has
good quality Permanite couplings on each end (do

not use hose clamps), and is as short as possible to
avoid pressure accumulation when releasing
trigger, and to minimize operating pressure loss in
hose.

HOSE FRICTION LOSS
‘PRESDONE DROP im PHL PER ian FT OF weGE

¥eeeezcen
Seunss..~

Séssussscu~

If quick disconnect couplings are used on the ends
of the high pressure hose, be sure that they of
the “straight through” design. Air type quick
couplers with internal "shut-offs” are not

acceptable because pulsations in the water tlow will
destroy the moving parts and lodge them in the gun
and/or spray tip.

t be selected to withstand
and chemicals in
the system. Guns must be durable to withstand the
kind of abuse typical in pressure wash applications.
Consider comfort to reduce operator fatigue. Ease
of servicability is also important, There are many
types and styles of guns available. Be sure to "shop
around” and select one that most closely fits your
needs,

nevane YOUR
MPONENT S Ss

Reter to manufacturer's printed literature and i
all. components according to manufacturer’
recommendations to avoid serious bodily injury or
property damage and to insure proper system
operation.

All plumbing and component parts must be of the
same size or larger than is on the inlet and outlet of
your pump. The thread sizes are a guide to the
required sizes of plumbing for proper water flow
both in and out of the pump.

All plumbing and component parts must have an
operating pressure rating of at least 50% above the
maximum rated output pressure of the pump, and
should have an actual burst pressure of 3-5 times
the normal system working pressure.

Avoid bends and restrictions in the
plumbing. They force the motor/engine to work
harder to drive the pump (reduction of efficiency)
and create turbulence in the water flow which can
cause cavitation on the inlet side and premature
wear in the pump and in the outlet plumbing. Bends
and restrictions will cause a reduction in outlet
pressure and increased amp draws with an electric
motor.

Use a thread sealant on all plumbing connections
and tighten all connections securely to avoid air
entering the system. Avoid using hoses which are
secured with hose clamps, they are very susceptible
to air leaks, and will not retain very high
pressures Permanently coupled hoses with
appropriately sized pipe threads installed are the
best way to connect hose to hard plumbing. Air
leaks in the inlet plumbing will cause a reduction of
outlet pressu noisy PUMP operation, and
excessive wear and tear on the pump.

When mounting the pulleys on the pump and
install them as close as possible to
(and crankcase bearing) to avoid an
load on the rotating parts. Be sure
that the pulleys are properly aligned to avoid
excessive belt and pulley wear and belt noise. Do

ighten belts to avoid an excessive side load
rotating parts

Mount the motor/engine in relationship to the pump.
such that when running, the rotation of the pump
crankshaft is counterclockwise as you face the

pump crankshaft or pump pulley. A gas engine has
only one rotation direction, which may vary
between manutacturers. Be sure you know the
rotation direction before you begin assembly. Most
electric motors may be operated in either rotation
direction by changing the wiring, Check the
manufacturer's specifications of your motor to
determine the proper rotation direction for your
application

Water and electricity can be a very dangerous
combination. Use extreme caution when installing
or working on electrical components. Always use
watertight conduit, connections, boxes, motors
switches, and other electrical components. Ne
allow ‘ay or a leak to come in contact with
any electrical components to avoid serious bodily
injury or property damage. If you are not sure about
your electrical requirements, component selection,
‘or hook-up. seek the advice of a profession:
electrician

Always install a guard over belts and pulleys which
meets OSHA standards to protect personnel from
injury due to contact with moving parts. Any moving
part must be covered to guard against serious
bodily injury and property damage.

Do not introduce acids or other caustic materials or
any abrasives into your pressure washer system or
warranties will be void and components in the
system will be damaged. Protect the pump and
system from a freezing condition.

TROUBLESHOOTING Se

PROBLEM CAUSE

Faulty pulsabon éamper

‘Rar Teak in inlet plumbing

ete! valve stuck, parhally plugged o =nproperly

dusted valve seat worn

Low Pressure ‘niet suchon sirener clogged or improperly
sized

Wor packing Abrasives 1 pumped fund oF

severe cantahion Inadequate water

Thetall proper Wier Suction at inet manifold mat ba
limted to iting ess than 20 feet of water or -8 5 PS!
vacume

‘Clean iniet and discharge valve aasembies
Replace wor valves. valve seals andlor discharge hose

Fouled oF Grty inlet oF Gacharpe vaives,

Tasty Gacharge hose

Resincted inet oF air entering the iniet plumbing | Praper sive iniet plumbing. check for air nght seat
Tnlet reatnchons and/or air leaks Stuck mist or | Repiace worn cup or cups. clean out foreign materia
dacharge valve replace worn valves

Worn pacing install new packing.

‘Worn crankcase paton tog seas O-rings on Replace crankcase piston rod seals. Replace O-rings

Pump rune extremely rough,
pressure vary low

‘Wor crarashatt seal oF improperly installed ou

Remove ou! seal retainer and replace damaged O-ring
08 laahing in te area of seal-0-1I0g

andor seals

Replace bearing

Excessive play in the end of the
cranksnat pulley

\\Worn main bearing trom excessive tention on

Replace crankcase bearing and/or tension drive
drove belt

May be caused by hurd a condensing into
water inaice the craracase

‘Worn packing and/or puton rod sieve O-nnge
(on plunger retainer worn

‘Change oi intervals. Use ary high grade automotive 30
oi

eater in crankcase

Reolace packina Reolae O-rings

Worn crankcase piston rod seals, Replace seats

Oidjeaking at the rear porwon of | Damaged.crankcate,rearcover O-ring drain plug | Replace cover O-rng drain plug Oving, or sight glass:
the crankcase. Oring. oF sight gfass O-ring Oring

Puiley looee en cranashatt ‘Check key and tighten set screw
Broken oF warn bearing Repiace bearing

Rapiace plungers

Loud knocking nose in pump

Scored damaged or worn plunger

Frequent or premature tasture of
‘Gheck pressures and fuid wiet lemperaiure, be sure they

SERVICING YOUR
0 a RR IRS

VALVE ASSEMBLIES (Figure 1)

1. All inlet and discharge valves can be serviced
without disrupting the inlet or discharge
plumbing. The iniet and discharge valves are
identical in all models

2. To service any valve, remove vaive cap and
extract valve assembly.

3. Examine o-rings and replace if there is any
evidence of cuts, abrasions, or distortion

4, Remove valve assembly (retainer, spring, valve,
valve seat) from valve cavity

5. Remove o-ring from vaive cavity

6. Only one vaive kit is necessary to repair all the
valves in the pump. The kit includes new o-rings,
valve seat, poppet, spring and retainer. all pre-
assembled.

7, Install new o-ring in valve cavity
8, Insert assembly into vaive cavity.
9. Replace valve cap and torque to specifications.
REMOVING MANIFOLD HEAD (Figure 2)
1, Remove the fasteners retaining head.

2. Separate head trom crankcase. NOTE: it may be
necessary to tap head lightly with rawhide
mallet to loosen. CAUTION: When sliding head
from crankcase use caution not to damage
plungers

3, The V-packing assemblies may come off with
the head. At this point, examine plungers
Plunger surfaces should be smooth and free
from scoring or pitting; if not, replace.

4, Reinstall manifold head and torque to
specifications per sequence described below

Torque Sequence For Tightening Head (Figure 4) —
Install all head bolts fingertight. Torque to 10 foot
pounds in sequence as shown, then retorque to
specifications, again, in sequence shown.

10

REPLACING PLUNGERS (Figure 3, 5 & 6)

1, Remove stainless stee! piston screw and
plunger from piston rod.

It slinger washer comes off with plunger, be
certain this is replaced before new plunger is
nstalled

3. Separate piston screw trom plunger

4 Install new o-ring and teflon backup-ring on
piston screw. NOTE: A film of grease on the
outside of the o-rings insures a better
installation.

retully press pi

ton screw into plunger

6. Slide new plunger over the piston guide and
torque to specifications

REPLACING V-PACKINGS (Figure 7, 8, 9 & 10)

Remove manifold trom crankcase.

2. Insert proper extractor collet through main sea!
retainer. Tighten collet and extract retainers, v
packings and head rings

3. Place proper insertion tool in cylinder and
install front head ring, v-packing and tong life
ring and press firmly into cylinder until they wil
go no further using proper insertion too

nsert intermediate seal retainer, pressing it
firmly into cylinder until it will go no further
using proper inertion tool. Install rear head ring
v-packing and main seal retainer into cylinder in
order shown and press fin inte cylinder.

Repeat this sequence for each cylinder.

Coat each plunger with grease and caretully
remount manifold. Torque head to
specifications

TYPICAL INTERPUMP
PACKING ASSEMBLY

`;

// ─── General Pump Troubleshooting Guide ───
KB.docs['General Pump Troubleshooting Guide'] = `SERVICING
&
TROUBLE
SHOOTING

Fra 1 hown, then retorque t fications,
AN shown, then retorque to specifications, @

PROCEDURE FOR SERVICING PUMPS

The Valve Assemblies
Photo 1
1) Allinlet and discharge valves can be serviced without disrup-

ting the inlet or discharge plumbing. The inlet and discharge
valves are the identical in all models.

2) To service any valve, remove valve cap and extract valve
assembly.

8) Examine o-rings and replace if there is any evidence of cuts,
abrasions, or distortion.

4) Remove valve assembly (retainer, spring, valve, valve seat)
from valve cavity.

5) Remove o-ring from valve cavity.

6) Only one valve kit is necessary to repair all the valves in the
pump. The kit includes new o-rings, valve seat, poppet,
spring and retainer, all pre-assembied.

7) Inspect manifold for wear or damage.
8) Install new o-ring in valve cavity.
9) Insert assembly into valve cavity.

10) Replace valve cap and torque to specifications.

Removing Manifold Head
Photo 2

1) Remove the fasteners retaining head.

2) Separate head from crankcase. NOTE: It may be necessary
to rotate crankshaft or tap head lightly with rawhide maliet to
loosen. CAUTION: When sliding head from crankcase use
caution not to damage plungers.

3) The V-packing assemblies may come off with the head. At
this point, examine plungers. Plunger surfaces should be
smooth and free from scoring, pitting, or cracks; if not,
replace.

4) Reinstall manifold head and torque to specifications per
sequence described below.

TORQUE SEQUENCE FOR
TIGHTENING HEAD

Install all head bolts fingertight. Torque
to 10 foot pounds in sequence as

again, in sequence shown,

Replacing Plungers
Photo 3, 4 and 5
1) Remove stainless steel piston screw and plunger from piston
rod.

2) If slinger washer comes off with plunger, be certain this is
replaced before new plunger is installed.

3) Separate piston screw from plunger.

4) Install new o-ring and teflon backup-ring on piston screw.
NOTE: A film of grease on the outside of the o-rings insures a

better installation,

5) Apply removable anaerobic thread sealant to threads of
piston screw and carefully press piston screw into plunger.

6) Slide new plunger over the piston guide and torque to
specifications.

Replacing V-Packings
Photo 6, 7, 8 and 9

1) Remove manifold from crankcase.

2) Insert proper extractor collet through main seal
retainer. Tighten collet and extract retainers,
v-packings and head rings.

3) Place proper insertion too! in cylinder and
install front head ring, v-packing and long life
ting and press firmly Into cylinder until they will
go no further using proper insertion tool.

4) Insert intermediate seal retainer, pressing it
firmly into cylinder until it will go no further
using proper insertion tool. install rear head
ting, v-packing and main seal retainer into
cylinder in order shown and press firmly into
cylinder. Be careful not to cut o-ring.

5) Repeat this sequence for each cylinder. i Gaal a

TyPici

6) Coat each plunger with grease and carefully Ldanindeainhenminminigs

remount manifold. Torque head to
specifications.

|

TROUBLE SHOOTING

PROBLEM CAUSE REMEDY
Pulsation. [Waive tuck open. ‘Chock all valves, remove foreign matter,

Wom nozzle. Replace nozzle, usa proper size

Belt slippage. Tighten of replace; use correct bot

Air leak in inlet plumbing. Disassemble, reseal and reassemble.

Cale wee otc. paral plugged or improperly Geen, acti tet ‘valve; check for wom and dirty valve
Low Pressure, inlet suction strainer clogged or improperly sized,

‘Clean, Use adequate size. Check more frequently.

‘Wom packing. Abrasives in pumped fuld or
Severs cavston, Inadequate weer

Install proper filler. Suction at inlet manifold must Be limit-
ed to lifting less than 20 feat of water or-8.5 PSI vacuum,

Fouled or diny inlet or discharge valves.

Ciean inlet and discharge valve ascemblias,

‘Wom inlet, discharge valve blocked or diy. Replace wom vaives, valve seats andor discharge hose,
Leaky discharge hose,

Pump runs extromely rough,

Restricted inlet or air entering the inlet plumbing,

Proper size inlet plumbing, check for air ight seal

Pressure vary low. Inlet restictions and/or air leaks. Stuck inlet or Replace wom cup or cups, clean out foreign material,
discharge valve, replace wom valves.
Water leakage from under Wom packing. install new packing,
manifold, Slight Leakage. Cracked plunger Replace plunger).
Ollleak between crankcase and | Wor crankcase piston rod seals. O-rings on | Replace crankease piston rod seals. Replace O-fings.
_Pumping section, plunger retainer wom,
‘Wom crankshaft seal or improperly installed of | Remove oll seal retainer and replace damaged O-7
itfeaking inthe aroa of seal O-ring. ani andor seals. - =
crankshaft,

Bad bearing.

Replace bearing and any spacer or cover damaged by

Excessive play in the end of tho
ccrankshat pulley.

Wom main bearing from excessive tension on
drive belt

Floplace crankcase bearing and/or tension drive belt.

Water in crankcase.

‘May be caused by humid air condensing into
water inside the crankcase,

Change oil intorvals. Uso General Pump SAE 30
nondetergent oil.

‘Wom packing and/or piston Tod sleeve, O-rings
‘on plunger retainer wom.

Fieplace packing. Replace O-rings.

‘Cracked plunger. Replace plunger(s).
Gil leaking from underside of | Wom crankcase piston rod seals, Floplace seals
Deuces, ‘Scored piston rod. Replace piston rod,

Oil leaking at the rear portion of
the crankeaso.

Damaged crankcase, ear cover O-ring, drain
plug O-ring; or sight glass O-ring.

Replace cover O-ting, drain plug O-ring, or sight glass
O-ring

Loud knocking noise in pump,

| Pulley loose on crankshatt.

‘Check key and tighten set screw.

Broken or worn bearing or reds).

Replace bearing or rods).

Frequent or premature failure of
the packing.

‘Valve stuck open or shut, ornot opening enough. | Replace bed valve.
‘Scored, damaged or wom plunger. Replace plungors.
Gverpressure toinlet manifold. Fleduce inlet pressure,

‘Abrasive material in the fuid being pumpod.

Install proper fitration on pump inlet plumbing,

Excessive prassure and/or temperature of uid
being pumped,

Check pressures and fuid inlet temperature; be sure they
are within specified range.

Overpressure of pumps

Reduce pressure.

Running pump dry.

Do not run pump without water.

Upstream chemical injection.

Use downstream chamical injection.

GENERAL PUMP

:  e-mail:

Ref 300595 Rev. A
07-05

GS`;