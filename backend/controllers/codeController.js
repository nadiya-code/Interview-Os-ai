const { executeCpp } = require("../services/judgeService");

const runCode = async (req, res) => {
  try {
    const { sourceCode, input = "" } = req.body;

    if (typeof sourceCode !== "string" || !sourceCode.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid C++ source code.",
      });
    }

    if (typeof input !== "string") {
      return res.status(400).json({
        success: false,
        message: "Input must be a string.",
      });
    }

    const result = await executeCpp(sourceCode, input);

    return res.status(200).json({
      success: true,
      output: result.stdout ?? "",
      error: result.stderr ?? null,
      compileOutput: result.compile_output ?? null,
      status: result.status?.description ?? "Unknown",
      time: result.time ?? null,
      memory: result.memory ?? null,
    });
  } catch (error) {
    console.error(
      "Code execution error:",
      error.response?.data || error.message
    );

    const statusCode = error.response?.status === 429 ? 429 : 500;

    return res.status(statusCode).json({
      success: false,
      message: "Unable to execute code.",
      error: error.response?.data || error.message,
    });
  }
};

module.exports = { runCode };