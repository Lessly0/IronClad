IronClad Banking System
A JavaScript assignment project simulating core banking operations — ATM transactions, loan processing, fraud detection, data management, and security validation.

Project Structure
ironclad-banking/
    # Smart ATM & transaction history
    # Loan application processor
    # Fraud detection & ledger auditing
    # Bank merger & data cleanup
    # Password validation & yearly report


Q1 — Smart ATM (AtmHistory.js)
Manages a bank account with a starting balance of $1,000 and a running transaction history.

Deposit — adds a positive amount to the balance
Withdrawal — subtracts from balance if funds are sufficient
Undo — reverts the last transaction using .pop()
Fee — prepends a maintenance fee using .unshift()
History trimming via .shift() when the log gets too long

Q2 — Loan Applications (ProcessLoan.js)
Processes batches of credit scores using array iteration methods — no for or while loops.
MethodPurpose.filter()Eligible applicants (score > 700).map()Adjusted scores (+20 points each).reduce()Total risk metric (sum of all scores).some()Check if any score equals 900.every()Check if all scores meet minimum (≥ 400).find()First score below 500.findIndex()Index of that flagged score
jsprocessLoans([650, 800, 500, 720, 410, 900]);

Q3 — Fraud Detection (FraudDetection.js)
Scans daily transactions for a flagged fraud ID and audits the ledger.

.includes() — checks if the fraud ID exists
.indexOf() — locates its position
.slice() — extracts the last 3 transactions (non-destructive)
.splice() — permanently removes the fraud ID
.forEach() — logs all remaining safe transactions

Q4 — Bank Merger (BankMerge.js)
Merges customer databases from two acquired banks and formats the data.

.concat() — merges two branch arrays into one
.flat() — flattens a nested database into a single array
.sort() + .reverse() — sorts names A→Z then reverses to Z→A
.join(" - ") — formats names into a welcome banner string
.fill("Closed") — initialises 5 new teller windows

Q5 — Security & Reporting (TheSecurity.js)
Password Validator — validateBankPassword(password)
Checks three rules:

At least 8 characters long
Does not contain the word "password" (case-insensitive)
Contains at least one vowel

Returns "Access Granted" or "Access Denied".
Yearly Report Generator — generateYearlyReport(startYear, endYear)
Loops through a year range and:

Flags leap years as special audit years
Prints 5-year and decade anniversaries (decade takes priority)
