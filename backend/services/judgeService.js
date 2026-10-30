const axios = require("axios");

const JUDGE0_API_URL = (
  process.env.JUDGE0_API_URL || "https://ce.judge0.com"
).replace(/\/+$/, "");

const SUPPORTED_LANGUAGE_IDS = [54, 71, 62, 63];

async function executeCode(sourceCode, stdin = "", languageId = 54) {
  if (typeof sourceCode !== "string" || !sourceCode.trim()) {
    throw new Error("Source code is required.");
  }

  if (!SUPPORTED_LANGUAGE_IDS.includes(Number(languageId))) {
    throw new Error("Unsupported programming language.");
  }

  const submissionResponse = await axios.post(
    `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=false`,
    {
      source_code: sourceCode,
      language_id: Number(languageId),
      stdin,
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

  const maxAttempts = 30;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const resultResponse = await axios.get(
      `${JUDGE0_API_URL}/submissions/${token}?base64_encoded=false`,
      { timeout: 10000 }
    );

    const result = resultResponse.data;
    const statusId = result.status?.id;

    if (statusId && statusId > 2) {
      return result;
    }

    if (!statusId) {
      throw new Error("Judge0 did not return a valid submission status.");
    }
  }

  throw new Error("Judge0 execution timed out after 30 seconds.");
}

module.exports = { executeCode };