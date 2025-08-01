import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "./CopyButton";
import Image from "next/image"; // ✅ Use Next.js optimized image

const CodeBlock = ({ language, code }: { language: string; code: string }) => {
  const trimmedCode = code
    .split("\n") // split into lines
    .map((line) => line.trimEnd()) // remove trailing spaces from each line
    .join("\n"); // join back into a single string

  return (
    <div className="my-4 bg-[#0a0a0f] rounded-lg overflow-hidden border border-[#ffffff0a]">
      {/* Header bar showing language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#ffffff08]">
        {/* Language indicator with icon */}
        <div className="flex items-center gap-2">
          <Image
            src={`/${language}.png`}
            alt={language}
            width={16}
            height={16}
            className="object-contain"
          />
          <span className="text-sm text-gray-400">{language || "plaintext"}</span>
        </div>

        {/* Copy to clipboard button */}
        <CopyButton code={trimmedCode} />
      </div>

      {/* Code block with syntax highlighting */}
      <div className="relative">
        <SyntaxHighlighter
          language={language || "plaintext"}
          style={atomOneDark}
          customStyle={{
            padding: "1rem",
            background: "transparent",
            margin: 0,
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {trimmedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
