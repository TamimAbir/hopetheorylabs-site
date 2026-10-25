export function WordReveal({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {text.split(" ").map((word, index, words) => (
        <span
          key={index}
          className="word inline-block"
          style={{ "--word-i": index } as React.CSSProperties}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
