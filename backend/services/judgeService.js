const axios = require("axios");

const JUDGE0_API_URL = (
process.env.JUDGE0_API_URL || "https://ce.judge0.com"
).replace(/\+$/,"");

async function executeCpp(sourceCode, stdin = "") {
if (typeof sourceCode !== "string" || !sourceCode.trim()) {
throw new Error("Source code is required.");
}

// Step 1: Submit code to Judge0
const submissionResponse = await axios.post(
`${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=false`,
{
source_code: sourceCode,
language_id: 54,
stdin: stdin,
},
{
headers: {
"Content-Type": "application/json",
},
timeout: 15000,
}
);

const token = submissionResponse.data.token;

if (!token) {
throw new Error("Judge0 did not return a submission token.");
}

// Step 2: Poll for execution result
const maxAttempts = 30;

for (let attempt = 0; attempt < maxAttempts; attempt++) {
await new Promise((resolve) => setTimeout(resolve, 1000));
const resultResponse = await axios.get(
  `${JUDGE0_API_URL}/submissions/${token}?base64_encoded=false`,
  { timeout: 10000 }
);

const result = resultResponse.data;
const statusId = result.status?.id;

// Status 1 = In Queue, Status 2 = Processing
if (statusId && statusId > 2) {
  return result;
}

if (!statusId) {
  throw new Error("Judge0 did not return a valid submission status.");
}

}

throw new Error(
"Judge0 execution timed out after waiting 30 seconds."
);
}

module.exports = { executeCpp };
