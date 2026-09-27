// n8n "Code" node — place this BETWEEN Webhook and Edit Fields
// Node settings: Mode = "Run Once for Each Item", Language = JavaScript

const item = $json.body.items[0];

const answerKey = {
  q1: "To list and organize all accounts used by a business",
  q2: "A record of a transaction showing debits and credits",
  q3: "A record that shows all accounts and their balances",
  q4: "Both companies record the transaction in their own ledgers using normal debit and credit entries",
  q5: "You are the payee; the other person is the payer",
  q6: "Pension Expense (or Pension Payable)",
  q7: "Telephone / Utilities Expense",
  q8: "Office Supplies or Meals Expense",
  q9: "Office Repairs & Maintenance Expense",
  q10: "Date, TransactID, Payee, Payer, Amount, COA",
  q11: "Payee receives money; Payer pays money",
  q12: "Bank initials + separator + digits + date",
  q13: "A dash - or underscore _",
  q14: "YYYYMMDD",
  q15: "A structured list of accounts used to classify transactions",
  q16: "Assets, Liabilities, Equity, Revenue, Expenses",
  q17: "In the COA / NewCOA sheets and referenced in transaction sheets",
  q18: "The bank memo, payee name, and description",
  q19: "Accounts like intercompany loans or reimbursements; yes, there is one",
  // q20: TODO — depends on your internal practice spreadsheet, fill in once confirmed
};

const scorableKeys = Object.keys(answerKey);
let correct = 0;

for (const q of scorableKeys) {
  const given = (item[q] || "").toString().trim();
  if (given === answerKey[q]) correct++;
}

const total = scorableKeys.length;
const percentage = total ? ((correct / total) * 100).toFixed(1) : "0.0";
const manualReviewNote = "Note: q21–q23 are open-ended and need manual review.";

const messageText =
  `**New Quiz Submission**\n` +
  `Participant: ${item.full_name || "N/A"}\n` +
  `Quiz: Springer Capital Accounts Quiz 3\n` +
  `Score: ${correct}/${total} (${percentage}%)\n` +
  `Submitted at: ${new Date().toLocaleString()}\n` +
  `${manualReviewNote}`;

return {
  json: {
    full_name: item.full_name,
    personal_email: item.personal_email,
    quiz_name: "Springer Capital Accounts Quiz 3",
    score_correct: correct,
    score_total: total,
    score_percentage: percentage,
    needs_manual_review: true,
    message_text: messageText,
  },
};
