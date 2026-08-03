const snippets = [
  {
    snippet: `
\`\`\`ts {4}
async function compact(history, previousSummary, focus) {
  // Keep the most recent ~20k tokens verbatim,
  // everything older is the prefix.
  const cut    = findCutPoint(history)
  const prefix = history.slice(0, cut)

  const message = [
    \`<conversation>\\n\${flatten(prefix)}\\n</conversation>\`,
    previousSummary && \`<previous-summary>\\n\${previousSummary}\\n</previous-summary>\`,
    previousSummary ? UPDATE_TEMPLATE : INITIAL_TEMPLATE,
    focus && \`Additional focus: \${focus}\`,
  ].filter(Boolean).join("\\n\\n")

  const summary = await model.stream({
    instructions: SUMMARIZER_PROMPT,               // "You are a context summarization assistant…"
    input: [{ role: "user", content: message }],   // exactly one message
    tools: [],                                     // none
  })

  return [developerMessage(summary), ...history.slice(cut)]
}
\`\`\`
`,
  },

  {
    snippet: `
\`\`\`ts {4}
const PRUNED_OUTPUT_PLACEHOLDER =
  "[Old tool output removed to free context space. Re-read the file or re-run the command if you still need it.]";
\`\`\`
`,
  },

  {
    snippet: `
\`\`\`text
trigger = contextWindow - reserveTokens
\`\`\`
`,
  },
];

export default snippets;
