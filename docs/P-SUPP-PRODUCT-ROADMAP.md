# P-Supp Product Roadmap

## What We Have Today

| Component | Status | Notes |
|-----------|--------|-------|
| AI Chat (Claude Haiku) | ✅ Live | Agent loop, tool use, image upload |
| Knowledge Base (242 PDFs) | ✅ Live | 13,131 chunks, FTS5 search |
| Diagnostic Trees (Layer 1) | ✅ Built | 7 trees, 75 nodes, ready to deploy |
| Safety Guardrails (Layer 3) | ✅ Built | In system prompt, keyword triggered |
| Brand Detection | ✅ Live | 11 brands, zero unknowns |
| Login/Auth | ✅ Live | Shared team password |
| Deployment | ✅ Live | Railway, auto-deploy on push |
| Mobile UI | ✅ Live | PWA, responsive, header fix ready |

---

## The Three Tiers

### FREE — "Get Them Hooked"

**Price:** $0
**Goal:** Let anyone try it, see the value, hit the wall, want more

**What they get:**
- 5 AI questions per day (reset at midnight)
- General troubleshooting only (no brand-specific data)
- Basic symptom classification (tells them the category)
- First question of each diagnostic tree (shows the AI is smart)
- No image upload
- No OEM specs or part numbers
- Banner: "Upgrade to Pro for full diagnostics"

**What we need to build:**

1. **User registration** (email + password)
   - Simple signup/login form replaces team password
   - Store in SQLite: users table (id, email, password_hash, tier, created_at)
   - Use bcrypt for password hashing
   - JWT tokens for session management
   - Build time: 2-3 hours

2. **Query counter + rate limiting**
   - SQLite table: usage (user_id, date, query_count)
   - Check before each /api/chat call
   - Return 429 with upgrade prompt when limit hit
   - Build time: 1 hour

3. **Tier-gated responses**
   - Server checks user tier before running full agent
   - Free tier: skip OEM search, truncate diagnostic trees after first node
   - Add "🔒 Pro Feature" markers in responses
   - Build time: 1-2 hours

4. **Landing page**
   - Public page (no login) explaining what P-Supp does
   - Feature comparison table (Free vs Pro vs Shop)
   - "Try Free" and "Go Pro" CTAs
   - Build time: 2-3 hours

**Total build: ~8 hours**

---

### PRO — "The Money Maker" ($29-49/month)

**Price:** $29/month (launch), $39/month (after 50 users), $49/month (after traction)
**Goal:** One tech, unlimited value, pays for itself in one job

**What they get (everything Free plus):**
- Unlimited AI questions
- Full diagnostic trees (all 7 categories, guided step-by-step)
- Complete OEM knowledge base (all 242 manuals, all brands)
- Image upload for equipment ID
- Part number lookups
- Nozzle calculator
- Injector sizing tool
- Multimeter assistant (guided electrical testing)
- Web search fallback for questions outside the KB

**What we need to build:**

5. **Stripe payment integration**
   - Stripe Checkout for subscription signup
   - Webhook to update user tier on payment
   - Customer portal link for managing subscription
   - Handle failed payments (grace period, downgrade)
   - SQLite: subscriptions table (user_id, stripe_id, status, current_period_end)
   - Build time: 4-5 hours

6. **Nozzle calculator**
   - Formula: Orifice Size = GPM / (PSI / 2.53) × correction factor
   - Input: desired GPM, PSI, spray angle
   - Output: nozzle number, orifice size, flow chart
   - Can be a tool the AI calls OR a standalone page
   - Build time: 2 hours

7. **Injector sizing tool**
   - Input: GPM flow, chemical dilution ratio, desired draw rate
   - Output: recommended injector model, orifice size
   - Cross-reference with GP injector catalog data already in KB
   - Build time: 2 hours

8. **Multimeter assistant**
   - Guided electrical testing flows integrated into diagnostic trees
   - "Set your meter to DC volts. Put red lead on terminal 1, black on ground."
   - Expected readings for each test point
   - Pass/fail logic: "If you read 0V, the problem is upstream. If 120V, the problem is downstream."
   - This is Layer 1 content — add electrical test nodes to diagnostic trees
   - Build time: 3-4 hours (authoring the test procedures)

9. **Chat history**
   - Store conversations per user
   - SQLite: conversations (id, user_id, created_at), messages (id, conversation_id, role, content)
   - "Recent chats" sidebar or dropdown
   - Build time: 2-3 hours

**Total build: ~16 hours**

---

### SHOP/FLEET — "The Serious Tool" ($99-199/month)

**Price:** $99/month (up to 5 techs), $149/month (up to 10), $199/month (up to 20)
**Goal:** Shops that want their whole crew on it

**What they get (everything Pro plus):**
- Multiple user seats under one account
- My Machines — saved equipment profiles
- Service history logging
- Shared diagnostic notes
- Team admin dashboard
- Usage analytics (who's asking what)

**What we need to build:**

10. **Team/org accounts**
    - SQLite: organizations (id, name, owner_id, tier, max_seats)
    - Users get org_id field, owner can invite by email
    - Invite flow: owner enters email → system sends invite link → new user signs up under that org
    - Build time: 4-5 hours

11. **My Machines**
    - SQLite: machines (id, org_id, user_id, nickname, brand, model, serial, notes, created_at)
    - Users save equipment they work on regularly
    - AI context: "I see you have a General Pump TS2021 saved. Is this about that unit?"
    - Quick access: click a machine → AI pre-loads its specs
    - Build time: 3-4 hours

12. **Service history**
    - SQLite: service_logs (id, machine_id, user_id, date, diagnosis, parts_used, notes, hours)
    - After completing a diagnostic → "Save this diagnosis?" prompt
    - View history per machine: timeline of all service events
    - Build time: 3-4 hours

13. **Shared notes**
    - Techs can flag a conversation as "shared with team"
    - Team feed: see what others diagnosed recently
    - Searchable team knowledge base (internal)
    - Build time: 2-3 hours

14. **Admin dashboard**
    - Org owner sees: active users, total queries, popular topics
    - Manage seats: add/remove team members
    - Usage per tech (for billing justification)
    - Build time: 3-4 hours

**Total build: ~18 hours**

---

## Build Order (What to Do First)

### Phase 1: Ship What We Have (This Week)
- [x] Deploy v2.0 with SQLite FTS5
- [x] Build Layer 1 diagnostic trees
- [x] Fix mobile header overlap
- [ ] Deploy diagnostics.json + updated server.js
- [ ] Test diagnostic flows end-to-end on phone

### Phase 2: User Accounts + Free Tier (Week 2)
- [ ] Replace team password with email/password registration
- [ ] Add users table to SQLite
- [ ] JWT token auth
- [ ] Query counter (5/day free)
- [ ] Landing page with tier comparison

### Phase 3: Stripe + Pro Tier (Week 3)
- [ ] Stripe integration (Checkout + webhooks)
- [ ] Tier gating in server.js
- [ ] Unlock full diagnostics, OEM search, image upload for Pro
- [ ] "Upgrade to Pro" prompts in free tier responses

### Phase 4: Pro Tools (Week 4)
- [ ] Nozzle calculator
- [ ] Injector sizing tool
- [ ] Multimeter assistant (diagnostic tree additions)
- [ ] Chat history per user

### Phase 5: Shop Tier (Week 5-6)
- [ ] Organization accounts + invites
- [ ] My Machines
- [ ] Service history logging
- [ ] Shared notes
- [ ] Admin dashboard

---

## Database Schema (All in knowledge.db)

```sql
-- Existing tables stay untouched: documents, chunks, chunks_fts

-- New tables for user management
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  tier TEXT DEFAULT 'free',  -- free, pro, shop
  org_id INTEGER REFERENCES organizations(id),
  stripe_customer_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME
);

CREATE TABLE organizations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  owner_id INTEGER REFERENCES users(id),
  tier TEXT DEFAULT 'shop',
  max_seats INTEGER DEFAULT 5,
  stripe_subscription_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  date TEXT NOT NULL,  -- YYYY-MM-DD
  query_count INTEGER DEFAULT 0,
  UNIQUE(user_id, date)
);

CREATE TABLE conversations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  title TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  conversation_id INTEGER REFERENCES conversations(id),
  role TEXT NOT NULL,  -- user, assistant
  content TEXT NOT NULL,
  image_data TEXT,  -- base64 if image was attached
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE machines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  org_id INTEGER REFERENCES organizations(id),
  user_id INTEGER REFERENCES users(id),
  nickname TEXT,
  brand TEXT,
  model TEXT,
  serial_number TEXT,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE service_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  machine_id INTEGER REFERENCES machines(id),
  user_id INTEGER REFERENCES users(id),
  date TEXT NOT NULL,
  category TEXT,  -- flow, heat, electrical, etc.
  diagnosis TEXT,
  parts_used TEXT,  -- JSON array
  notes TEXT,
  labor_hours REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Revenue Math

| Scenario | Users | Monthly | Annual |
|----------|-------|---------|--------|
| 20 Pro techs @ $29 | 20 | $580 | $6,960 |
| 50 Pro techs @ $39 | 50 | $1,950 | $23,400 |
| 50 Pro + 5 Shops @ $149 | 55+ | $2,695 | $32,340 |
| 100 Pro + 10 Shops @ $149 | 110+ | $5,390 | $64,680 |

**Costs:**
- Railway hosting: ~$5-20/month
- Anthropic API (Haiku): ~$0.01-0.03 per conversation
- Stripe fees: 2.9% + $0.30 per transaction
- Domain: ~$12/year

At 50 Pro users you're profitable. At 100+ users with shops it's a real business.

---

## Key Decisions Needed

1. **Domain name** — psupp.com? pressurewasherai.com? Get it now.
2. **Pricing** — Start at $29 or $39 for Pro?
3. **Free trial vs free tier** — 7-day full access trial, or permanent limited free?
4. **Shop pricing** — Per-seat or flat rate up to X seats?
5. **Stripe account** — Need to set one up before Phase 3.
